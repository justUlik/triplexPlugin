const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
function backend(extra = {}) {
  const messages = [];
  const diagnostics = [];
  const pixso = { showUI() {}, ui: { postMessage: m => (m.type==='editorMetrics'?diagnostics:messages).push(m) }, ...extra };
  const ctx = vm.createContext({ pixso, __html__: '', console, setTimeout, clearTimeout });
  vm.runInContext(fs.readFileSync('main.js', 'utf8'), ctx);
  return { ctx, messages, diagnostics, run: code => vm.runInContext(code, ctx) };
}
test('catalog excludes buttons and retains specialized components beyond four entries', () => {
  const { run } = backend();
  const result = run(`formCatalog([
    ...Array.from({length: 6}, (_, i) => ({key: 's'+i, type: 'COMPONENT', name: 'Select '+i})),
    {key:'b', type:'COMPONENT', name:'Button'},
    {key:'ib', type:'COMPONENT', name:'IconButton'},
    {key:'t', type:'COMPONENT', name:'TextField'},
    {key:'d', type:'COMPONENT', name:'DatePicker', categories:['TextField']}
  ])`);
  assert.equal(result.length, 8);
  assert.equal(result.find(n => n.key === 'd').knowledgeName, 'DateField');
});
test('states cannot be requested before layout is locked', () => {
  const { run } = backend();
  assert.throws(() => run(`requestFlow({requirements:'task',feedback:'',standard:''})`), /закрепите/);
});
test('rejected errors and their variants are not created', () => {
  const { run } = backend();
  run(`flow = {states: [
    {name:'Error',values:{},errors:[{field:'1',text:'A'},{field:'2',text:'B'}],variants:[{field:'1',variant:'error'},{field:'2',variant:'error'}]},
    {name:'Success',values:{},errors:[]}
  ]}`);
  const selected = run(`selectFlow([{included:true,errors:[false,true]},{included:false,errors:[]}])`);
  assert.equal(selected.length, 1);
  assert.equal(selected[0].errors[0].field, '2');
  assert.equal(selected[0].variants.length, 1);
  assert.equal(selected[0].variants[0].field, '2');
  assert.equal(run(`selectFlow([{included:true,errors:[false,false]},{included:false,errors:[]}]).length`), 0);
});
test('locking detects later layout changes and unlock invalidates approval', async () => {
  const source = {id:'frame',type:'FRAME',parent:{id:'page'},children:[],width:100,height:200,x:0,y:0};
  const { run, messages } = backend({currentPage:{id:'page'},getNodeById:()=>source});
  run(`approvedSource = {frameId:'frame'}`);
  await run(`handleMessage({type:'lockLayout'})`);
  assert.equal(source.locked, true);
  assert.equal(messages.at(-1).type, 'layoutLocked');
  source.width = 110;
  assert.throws(() => run('lockedSource()'), /изменился/);
  await run(`handleMessage({type:'unlockLayout'})`);
  assert.equal(source.locked, false);
  assert.throws(() => run('lockedSource()'), /закрепите/);
});
test('created states preserve frame size, use selected errors, and roll back on failure', async () => {
  const copies = [];
  const notes = [];
  const source = {id:'frame',type:'FRAME',parent:{id:'page'},children:[],width:300,height:400,x:20,y:30,
    clone() { const node = {...this, setPluginData(){}, resizeWithoutConstraints(w,h){this.width=w;this.height=h;},remove(){this.removed=true;}}; copies.push(node);return node; }};
  let failFont = false;
  const { run, messages } = backend({currentPage:{id:'page'},getNodeById:()=>source,
    loadFontAsync:async()=>{if(failFont)throw Error('font');},
    createText(){const n={height:20,resize(){},remove(){this.removed=true;}};notes.push(n);return n;}});
  run(`approvedSource={frameId:'frame'};`);
  await run(`handleMessage({type:'lockLayout'})`);
  run(`flow={selected:[{name:'Network',condition:'Offline',values:{},errors:[{field:'',text:'Нет сети'}]}]};flowApproved=true`);
  await run('createStates()');
  assert.equal(copies[0].width,300);
  assert.equal(copies[0].height,400);
  assert.equal(copies[0].x,368);
  assert.equal(copies[0].locked,false);
  assert.match(notes[0].characters,/Нет сети/);
  assert.equal(messages.at(-1).count,1);
  assert.equal(run("flowApproved"), false);
  run("flowApproved = true");
  failFont=true;
  await assert.rejects(run('createStates()'),/font/);
  assert.equal(copies[1].removed,true);
});
function ui() {
  const elements = new Map();
  function el() { return {hidden:false,value:'',textContent:'',disabled:false,children:[],classList:{toggle(){}},
    append(...args){this.children.push(...args);},appendChild(n){this.children.push(n);},replaceChildren(...args){this.children=args;},
    querySelectorAll(){return [];},addEventListener(){},remove(){},setAttribute(){}}; }
  const get = id => {if(!elements.has(id))elements.set(id,el());return elements.get(id);};
  get('plan').hidden = true;
  const events = {};
  const ctx=vm.createContext({document:{getElementById:get,createElement:el},parent:{postMessage(){}},
    window:{addEventListener:(name,fn)=>events[name]=fn},setTimeout,clearTimeout,console});
  vm.runInContext(fs.readFileSync('ui.html','utf8').match(/<script>([\s\S]*)<\/script>/)[1],ctx);
  return {get,ctx,receive: message => events.message({data:{pluginMessage:message}})};
}
test('chat stays hidden during initial request and errors, opens only on successful proposal', async () => {
  const {get,receive}=ui();
  get('token').value='test';get('task').value='Форма';
  get('prepare').onclick();
  assert.equal(get('plan').hidden,true);
  await receive({type:'error',message:'Ошибка импорта'});
  assert.equal(get('plan').hidden,true);
  await receive({type:'proposal',items:[{text:'Дата',name:'DatePicker'}]});
  assert.equal(get('plan').hidden,false);
});
test('state UI is hidden after insertion until designer locks layout', async () => {
  const {get,receive}=ui();
  await receive({type:'applied',count:1,target:'BodyPage'});
  assert.equal(get('layoutStep').hidden,false);
  assert.equal(get('scenario').hidden,true);
  await receive({type:'layoutLocked'});
  assert.equal(get('scenario').hidden,false);
  assert.equal(get('unlockLayout').hidden,false);
});

test('error exclusions survive follow-up proposals', async () => {
  const {ctx,receive}=ui();
  const state={name:'Invalid',condition:'Bad format',values:{},errors:[{field:'1',text:'Исправьте формат'}]};
  await receive({type:'flowProposal',reply:'Ошибки',states:[state]});
  vm.runInContext(`flowSelection[0].errors[0] = false; flowDecisions.set(JSON.stringify(['1','Исправьте формат']),false)`,ctx);
  await receive({type:'flowProposal',reply:'Добавлено',states:[state,{name:'Success',condition:'Saved',values:{},errors:[]}]});
  assert.equal(vm.runInContext('flowSelection[0].errors[0]',ctx),false);
  assert.equal(vm.runInContext('flowSelection[1].included',ctx),true);
});

test('full catalogue retains display, layout, specialized and unknown assets', () => {
  const {run}=backend();
  const result=run(`formCatalog(['Amount','AmountField','NumberField','MaskedField','MultiselectField','SuggestField','SelectExtendedField','UploadZone','TableBasic','Title','Text','Island','OurWalletPicker'].map((name,i)=>({key:String(i),name,type:'COMPONENT'})))`);
  assert.equal(result.length,13);
  for (const item of result.slice(0,-1)) assert.equal(item.knowledgeName,item.name);
  assert.equal(result.at(-1).knowledgeName,null);
  assert.match(result.at(-1).use,/Не считать TextField/);
});
test('mapping distinguishes compound names, aliases, specific leaves and unknown fields', () => {
  const {run}=backend();
  for (const [name,expected] of [['Amount Field','AmountField'],['Text Area','TextareaField'],['TextField','TextField'],['Text','Text'],['SMS Field','SMSField'],['Select Extended Field','SelectExtendedField'],['Chip Select','ChipSelect']]) {
    assert.equal(run(`componentKnowledge({name:${JSON.stringify(name)}}).name`),expected);
  }
  assert.equal(run(`componentKnowledge({name:'WalletField',categories:['TextFields']})`),null);
  assert.equal(run(`componentKnowledge({name:'State=Default',containerName:'NumberField',categories:['TextFields']}).name`),'NumberField');
  assert.equal(run(`componentKnowledge({name:'TextField / AmountField'}).name`),'AmountField');
});
test('component sets are listed once and still expose variants for import', () => {
  const {run}=backend();
  const result=run(`formCatalog([{key:'set',type:'COMPONENT_SET',name:'AmountField',variants:[{key:'v1',name:'Default'},{key:'v2',name:'Error'}]}, {key:'v1',type:'COMPONENT',name:'AmountField / Default'}, {key:'v2',type:'COMPONENT',name:'AmountField / Error'}])`);
  assert.equal(result.length,1);
  assert.equal(result[0].variants.length,2);
});
test('all 137 Storybook sections have sources and unique names; allowed catalog fits model budget', () => {
  const {run}=backend();
  assert.equal(run('triplexKnowledge.components.length'),137);
  assert.equal(run('new Set(triplexKnowledge.components.map(d=>d.name)).size'),137);
  assert.equal(run('triplexKnowledge.components.every(d=>d.use && d.source.startsWith("https://github.com/SberBusiness/triplex-next/") && d.storybook.startsWith("https://triplex-design.ru/storybook/"))'),true);
  const prompt=run(`(() => {const catalog=formCatalog(triplexKnowledge.components.map((d,i)=>({key:String(i),type:'COMPONENT',name:d.name})));return withTriplexKnowledge(JSON.stringify({components:modelCatalog(catalog)}),catalog)})()`);
  assert.ok(prompt.length<=48000);
  assert.match(prompt,/UploadZone/);
  assert.match(prompt,/NumberField/);
  assert.match(prompt,/triplexKnowledge/);
  const knowledge=JSON.parse(prompt.split('\n').at(-1)).triplexKnowledge;
  assert.equal(knowledge.components.length,133);
});
test('full knowledge reaches initial selection and structural conversation', () => {
  const {run,messages}=backend();
  run(`prepared={catalog:formCatalog([{key:'n',type:'COMPONENT',name:'NumberField'},{key:'a',type:'COMPONENT',name:'AmountField'}])}`);
  for (const type of ['prepared','dialogRequest']) {
    run(`send('${type}',{prompt:'Количество ЦФА и сумма инвестиции'})`);
    assert.match(messages.at(-1).prompt,/Ввод целого или дробного числа/);
    assert.match(messages.at(-1).prompt,/Ввод денежной суммы/);
    assert.match(messages.at(-1).catalogInfo,/2 компонентов/);
  }
});
test('oversized context reports an error instead of hiding catalog entries', () => {
  const {run}=backend();
  assert.throws(()=>run(`withTriplexKnowledge('x'.repeat(47000),[])`),/Компоненты не были скрыты/);
});

function revisionFixture() {
  const inserted=[];
  const frame={id:'frame',type:'FRAME',parent:{id:'page'},width:800,height:600,layoutMode:'VERTICAL',counterAxisSizingMode:'FIXED'};
  const body={id:'body',name:'BodyPage',type:'FRAME',parent:frame,layoutMode:'VERTICAL',appendChild:n=>inserted.push(n)};
  const components={};
  const names=['BodyPage','Island','MaskedField','SuggestField','AmountField','TextField'];
  for(const [i,name] of names.entries()) components[String(i+1)]={id:'c'+i,key:String(i+1),type:'COMPONENT',name:'Default',componentPropertyDefinitions:{'Label#1':{type:'TEXT',defaultValue:'Label'}},
    createInstance(){return {type:'INSTANCE',kind:name,componentProperties:{'Label#1':{type:'TEXT',value:'Label'}},setProperties(v){this.values=v;},setPluginData(){},remove(){this.removed=true;}};}};
  const app=backend({getNodeById:id=>id==='frame'?frame:id==='body'?body:null,currentPage:{id:'page',selection:[]},importComponentByKeyAsync:async key=>{if(!components[key])throw Error('import unavailable');return components[key];}});
  app.ctx.fixtureNames=names;
  app.run(`prepared={frameId:'frame',bodyId:'body',task:'B2B',catalog:fixtureNames.map((name,i)=>({key:String(i+1),type:'COMPONENT',name})),stage:'list'};activeFormId='frame';`);
  return {...app,inserted,components};
}
const initialB2B=[{id:1,text:'Область формы'},{id:2,text:'Форма B2B-push'},{id:3,text:'ИНН'},{id:4,text:'Банк'},{id:5,text:'Сумма'},{id:3,text:'КПП'},{id:3,text:'Расчётный счёт'}];
async function seedB2B(app) {
  await app.run(`review(${JSON.stringify(JSON.stringify({items:initialB2B}))})`);
  app.run(`prepared.revisionPending=true`);
}
test('B2B edits replace types, remove containers and feed the corrected set into configuration and insertion', async()=>{
  const app=revisionFixture();await seedB2B(app);
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Всё заменил',items:[{uid:3,id:6},{uid:4},{uid:5},{uid:6,id:6},{uid:7,id:4}]}))`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.name)')),['TextField','SuggestField','AmountField','TextField','SuggestField']);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.uid)')),[3,4,5,6,7]);
  assert.equal(app.run('prepared.revisionPending'),false);
  assert.equal(app.messages.at(-1).changes.length,5);
  assert.equal(app.messages.at(-1).reply,'');
  app.run(`publishPreview=(type,item,message)=>send(type,{...message,item:describeItem(item)})`);
  await app.run('openProperties()');
  assert.equal(app.messages.at(-1).item.name,'TextField');
  for(let i=0;i<5;i++) await app.run(`configureItem({index:${i},variant:0,values:{'Label#1':prepared.items[${i}].text}},true)`);
  assert.equal(app.run('prepared.stage'),'ready');
  await app.run('apply()');
  assert.deepEqual(app.inserted.map(n=>n.kind),['TextField','SuggestField','AmountField','TextField','SuggestField']);
});
test('prose-only success and unchanged lists cannot advance with the old set',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'reply',reply:'Заменил все поля и убрал BodyPage'}))`),/не передала новый набор/);
  await assert.rejects(app.run('openProperties()'),/Сначала примените/);
  await assert.rejects(app.run('apply()'),/завершите правки/);
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:prepared.items.map(i=>({uid:i.uid}))}))`),/прежний набор/);
  assert.equal(app.run('prepared.items.length'),7);
  assert.equal(app.run('prepared.revisionPending'),true);
});
test('failed replacement import keeps all previous components and their settings',async()=>{
  const app=revisionFixture();await seedB2B(app);
  delete app.components['6'];
  const before=app.run('JSON.stringify(prepared.items)');
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:[{uid:3,id:6},{uid:4}]}))`),/import unavailable/);
  assert.equal(app.run('JSON.stringify(prepared.items)'),before);
  assert.equal(app.run('prepared.revisionPending'),true);
});
test('type replacement works from ready stage and requires confirmation again',async()=>{
  const app=revisionFixture();await seedB2B(app);
  app.run(`prepared.stage='ready';prepared.items.forEach(i=>i.confirmed=true)`);
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,id:6},{uid:4}]}))`);
  assert.equal(app.run('prepared.stage'),'list');
  assert.equal(app.run('prepared.items[0].confirmed'),false);
  assert.equal(app.run('prepared.items[1].confirmed'),true);
});
test('unknown change keys are not silently ignored',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,unknownReplacement:6}]}))`),/unknownReplacement/);
  assert.equal(app.run('prepared.items[2].name'),'MaskedField');
});
test('proposal is rendered as separate component cards and pending edits disable approval',async()=>{
  const {get,receive}=ui();
  await receive({type:'proposal',items:[{text:'ИНН',name:'TextField'},{text:'Расчётный счёт',name:'SuggestField'}],changes:['Заменён ИНН','Заменён счёт'],revisionPending:false});
  assert.equal(get('items').children.length,2);
  assert.equal(get('items').children[0].children[0].textContent,'ИНН');
  assert.equal(get('items').children[0].children[1].textContent,'TextField');
  assert.equal(get('openProperties').disabled,false);
  await receive({type:'error',message:'Правки не применены',revisionPending:true});
  assert.equal(get('openProperties').disabled,true);
  assert.equal(get('keepCurrent').hidden,false);
  await receive({type:'revisionDiscarded'});
  assert.equal(get('openProperties').disabled,false);
});

test('initial labels accept label/title aliases and normalize line breaks',async()=>{
  const app=revisionFixture();
  await app.run(`review(JSON.stringify({items:[{id:6,label:'  ИНН\\n плательщика  '},{id:4,title:'Банк плательщика'},{id:3,text:'КПП\\\\nфилиала'}]}))`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.text)')),['ИНН плательщика','Банк плательщика','КПП филиала']);
});
test('replacement preserves previous label when new label is empty or null',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,id:6,text:null},{uid:6,id:6,text:''},{uid:7,id:4}]}))`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.text)')),['ИНН','КПП','Расчётный счёт']);
});
test('label alias in revision updates the actual visible Label property',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,label:'ИНН\\nорганизации'}]}))`);
  assert.equal(app.run('prepared.items[0].text'),'ИНН организации');
  assert.equal(app.run(`describeItem(prepared.items[0]).fields.find(f=>f.key==='Label#1').value`),'ИНН организации');
});
test('missing label triggers one repair request, then an actionable error',async()=>{
  const app=revisionFixture();
  await app.run(`handleMessage({type:'review',raw:JSON.stringify({items:[{id:6}]})})`);
  assert.equal(app.messages.at(-1).type,'prepared');
  assert.equal(app.messages.at(-1).repairing,true);
  await app.run(`handleMessage({type:'review',raw:JSON.stringify({items:[{id:6}]})})`);
  assert.equal(app.messages.at(-1).type,'error');
  assert.match(app.messages.at(-1).message,/Компонент №1.*не передала подпись/);
  assert.equal(app.run('prepared.items'),undefined);
});
test('corrected model response completes after automatic label repair',async()=>{
  const app=revisionFixture();
  await app.run(`handleMessage({type:'review',raw:JSON.stringify({items:[{id:6}]})})`);
  await app.run(`handleMessage({type:'review',raw:JSON.stringify({items:[{id:6,text:'ИНН'}]})})`);
  assert.equal(app.messages.at(-1).type,'proposal');
  assert.equal(app.run('prepared.items[0].text'),'ИНН');
});
test('invalid objects and long labels are diagnosed, never silently truncated',()=>{
  const {run}=backend();
  assert.throws(()=>run(`normalizeModelLabel({id:1,text:{value:'ИНН'}},2)`),/Компонент №3.*строкой/);
  assert.throws(()=>run(`normalizeModelLabel({id:1,text:'а'.repeat(121)},0)`),/121 символов/);
  assert.throws(()=>run(`normalizeModelLabel({id:1,name:'TextField'},0)`),/не передала подпись/);
});

test('catalogId alias and echoed metadata apply B2B replacement and removal',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[
    {uid:1,remove:true,name:'BodyPage'}, {uid:2,action:'delete',reason:'Не нужен'},
    {uid:'3',catalogId:'6',name:'MaskedField',confirmed:true,reason:'Свободный ввод'},
    {uid:4,name:'SuggestField'}, {uid:5,doc:'AmountField'},
    {uid:6,componentId:6,explanation:'Без маски'}, {uid:7,id:4,catalogId:'4'}]}))`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.name)')),['TextField','SuggestField','AmountField','TextField','SuggestField']);
  assert.equal(app.run('prepared.items[0].confirmed'),false);
  assert.equal(app.run('prepared.items[0].reason'),undefined);
  assert.equal(app.run('prepared.revisionPending'),false);
});
test('structural updates expand into a complete list without removing untouched items',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await app.run(`reviewConversation(JSON.stringify({action:'configure',reply:'Готово',updates:[{uid:1,remove:true},{uid:2,operation:'remove'},{uid:3,catalogId:6},{uid:6,componentId:6},{uid:7,id:4}]}))`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.uid)')),[3,4,5,6,7]);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.name)')),['TextField','SuggestField','AmountField','TextField','SuggestField']);
});
test('conflicting ids reject the whole edit rather than choosing a type arbitrarily',async()=>{
  const app=revisionFixture();await seedB2B(app);
  const before=app.run('JSON.stringify(prepared.items)');
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,id:6,catalogId:4}]}))`),/Противоречивые значения/);
  assert.equal(app.run('JSON.stringify(prepared.items)'),before);
});
test('unknown operation gets one automatic repair and preserves the previous set',async()=>{
  const app=revisionFixture();await seedB2B(app);
  const before=app.run('JSON.stringify(prepared.items)');
  const raw=JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,replaceWith:6}]});
  app.ctx.badRevision=raw;
  await app.run(`handleMessage({type:'reviewDialog',raw:badRevision})`);
  assert.equal(app.messages.at(-1).type,'dialogRequest');
  assert.equal(app.messages.at(-1).repairing,true);
  assert.equal(app.run('JSON.stringify(prepared.items)'),before);
  await app.run(`handleMessage({type:'reviewDialog',raw:badRevision})`);
  assert.equal(app.messages.at(-1).type,'error');
  assert.match(app.messages.at(-1).message,/replaceWith/);
  assert.equal(app.run('prepared.revisionPending'),true);
});
test('corrected structural edit after format repair applies successfully',async()=>{
  const app=revisionFixture();await seedB2B(app);
  await app.run(`handleMessage({type:'reviewDialog',raw:JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,replaceWith:6}]})})`);
  await app.run(`handleMessage({type:'reviewDialog',raw:JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,id:6}]})})`);
  assert.equal(app.messages.at(-1).type,'proposal');
  assert.equal(app.run('prepared.items.length'),1);
  assert.equal(app.run('prepared.items[0].name'),'TextField');
});

test('states first show proposal action; clarification appears only after successful response',async()=>{
  const {get,receive,ctx}=ui();
  await receive({type:'applied',count:1,target:'BodyPage'});
  await receive({type:'layoutLocked'});
  assert.equal(get('flowFeedback').hidden,true);
  assert.equal(get('flowIntro').hidden,false);
  assert.equal(get('flowSend').textContent,'Предложить состояния и ошибки');
  await receive({type:'error',message:'Модель недоступна'});
  assert.equal(get('flowFeedback').hidden,true);
  await receive({type:'flowProposal',reply:'Предлагаю проверить формат',states:[{name:'Ошибка',condition:'Неверный формат',values:{},errors:[{field:'1',text:'Проверьте формат'}]}]});
  assert.equal(get('flowFeedback').hidden,false);
  assert.equal(get('flowIntro').hidden,true);
  assert.equal(get('flowSend').textContent,'Дополнить предложения');
  vm.runInContext('hasFlowDraft=false; setBusy(true)',ctx);
  assert.equal(get('flowFeedback').hidden,false);
  await receive({type:'error',message:'Ошибка дополнения'});
  assert.equal(get('flowFeedback').hidden,false);
});
test('unlocking and relocking layout resets the first-proposal step',async()=>{
  const {get,receive}=ui();
  await receive({type:'flowProposal',reply:'Уточните условия',states:[]});
  assert.equal(get('flowFeedback').hidden,false);
  await receive({type:'layoutUnlocked'});
  await receive({type:'layoutLocked'});
  assert.equal(get('flowFeedback').hidden,true);
  assert.equal(get('flowSend').textContent,'Предложить состояния и ошибки');
});

function historyFixture(storage=new Map()) {
  const app=revisionFixture();
  app.ctx.pixso.root={getPluginData:key=>storage.get(key)||'',setPluginData:(key,value)=>storage.set(key,value)};
  const getNode=app.ctx.pixso.getNodeById;
  app.ctx.pixso.getNodeById=id=>getNode(id)||Object.values(app.components).find(component=>component.id===id)||null;
  // Component references can be reimported after a full runtime restart.
  return {...app,storage};
}
test('file history survives runtime restart and restores actual types, conversation and step',async()=>{
  const first=historyFixture();await seedB2B(first);
  await first.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,id:6},{uid:7,id:4}]}))`);
  first.run(`prepared.stage='ready';prepared.items.forEach(item=>item.confirmed=true);conversation.push({role:'user',text:'Счёт из справочника'});sessionUI=cleanSessionUI({task:'Перевод B2B',token:'SECRET',transcript:[{chat:'componentChat',author:'Вы',text:'Мой сценарий'}]});persistSession()`);
  const id=first.run('sessionId');
  assert.ok(!Array.from(first.storage.values()).join('').includes('SECRET'));
  const second=historyFixture(first.storage);
  second.ctx.restoreId=id;
  await second.run('restoreSession(restoreId)');
  assert.equal(second.run('prepared.stage'),'ready');
  assert.deepEqual(Array.from(second.run('prepared.items.map(i=>i.name)')),['TextField','SuggestField']);
  assert.equal(second.run('prepared.items.every(i=>i.confirmed)'),true);
  assert.equal(second.run('conversation.at(-1).text'),'Счёт из справочника');
  assert.equal(second.messages.at(-1).ui.transcript[0].text,'Мой сценарий');
  assert.equal(second.messages.at(-1).readOnly,false);
});
test('multiple dialogues remain independently accessible in the same file',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run(`sessionUI={task:'Первый'};persistSession()`);const firstId=app.run('sessionId');
  app.run(`newSession();sessionUI={task:'Второй'};persistSession()`);
  assert.equal(app.run('readHistory().sessions.length'),2);
  app.ctx.firstId=firstId;await app.run('restoreSession(firstId)');
  assert.equal(app.run('sessionUI.task'),'Первый');
  assert.equal(app.run('prepared.items.length'),7);
  const otherFile=historyFixture();assert.equal(otherFile.run('readHistory().sessions.length'),0);
});
test('deleted frames leave a readable history without overwriting saved work',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run(`sessionUI={task:'Не терять'};persistSession()`);
  const snapshot=app.storage.get('triplex-dialog-history-v1');const id=app.run('sessionId');
  app.ctx.pixso.getNodeById=()=>null;app.ctx.restoreId=id;
  await app.run('restoreSession(restoreId)');
  assert.equal(app.messages.at(-1).readOnly,true);
  assert.match(app.messages.at(-1).warning,/удалён/);
  app.run('persistSession()');assert.equal(app.storage.get('triplex-dialog-history-v1'),snapshot);
  await app.run(`handleMessage({type:'apply'})`);assert.match(app.messages.at(-1).message,/только для чтения/);
});
test('history commits index after chunks so a failed save preserves the last snapshot',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run(`sessionUI={task:'Сохранено'};persistSession()`);
  const prior=app.storage.get('triplex-dialog-history-v1');
  const write=app.ctx.pixso.root.setPluginData;
  app.ctx.pixso.root.setPluginData=(key,value)=>{if(key==='triplex-dialog-history-v1')throw Error('disk full');write(key,value);};
  assert.throws(()=>app.run(`sessionUI.task='Не записано';persistSession()`),/disk full/);
  assert.equal(app.storage.get('triplex-dialog-history-v1'),prior);
});
test('state decisions and unsent message survive history restoration',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run(`prepared=null;approvedSource={frameId:'frame',bodyId:'body'};flow={states:[{name:'Ошибка',condition:'Нет сети',values:{},errors:[{field:'',text:'Повторите'}]}]};sessionUI=cleanSessionUI({task:'Перевод',feedback:'Ещё кейс',hasFlowDraft:true,hasFlowResponse:true,flowDecisions:[['choice',false]]});persistSession()`);
  const second=historyFixture(app.storage);second.ctx.restoreId=app.run('sessionId');await second.run('restoreSession(restoreId)');
  assert.equal(second.messages.at(-1).stage,'done');
  assert.equal(second.messages.at(-1).ui.feedback,'Ещё кейс');
  assert.equal(second.messages.at(-1).ui.flowDecisions[0][1],false);
  assert.equal(second.messages.at(-1).flow.states[0].name,'Ошибка');
});
test('unfinished component values are restored without losing the current editing step',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run(`prepared.stage='copy';prepared.index=2;sessionUI=cleanSessionUI({task:'Черновик',draft:{index:2,variant:0,values:{'Label#1':'ИНН организации'}}});persistSession()`);
  const second=historyFixture(app.storage);second.ctx.restoreId=app.run('sessionId');await second.run('restoreSession(restoreId)');
  assert.equal(second.run('prepared.index'),2);
  assert.equal(second.run('prepared.stage'),'copy');
  assert.equal(second.run(`prepared.items[2].values['Label#1']`),'ИНН организации');
});
test('history UI restores messages, unsent inputs and ready-to-apply step',async()=>{
  const {get,receive,ctx}=ui();
  await receive({type:'sessionRestored',sessionId:'saved',stage:'ready',formPlaced:true,items:[{name:'TextField',text:'ИНН'}],ui:{task:'Перевод',revision:'Добавить поле',transcript:[{chat:'componentChat',author:'Вы',text:'Выбрать ИНН'},{chat:'componentChat',author:'GigaCode',text:'Предлагаю TextField'}]}});
  assert.equal(get('task').value,'Перевод');
  assert.equal(get('revision').value,'Добавить поле');
  assert.equal(get('componentChat').children.length,2);
  assert.equal(get('items').children.length,1);
  assert.equal(get('apply').hidden,false);
  assert.equal(vm.runInContext('transcript.length',ctx),2);
});
test('history read-only mode permits browsing and new chat but prevents insertion',async()=>{
  const {get,receive}=ui();
  await receive({type:'sessionRestored',sessionId:'deleted',stage:'ready',readOnly:true,warning:'Фрейм удалён',formPlaced:true,items:[{name:'TextField',text:'ИНН'}],ui:{}});
  assert.equal(get('apply').disabled,true);
  assert.equal(get('place').disabled,true);
  assert.equal(get('newDialogue').disabled,false);
  assert.equal(get('items').children.length,1);
});
test('trash removes only the selected component, updates context and persists to history',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run('prepared.revisionPending=false');
  await app.run(`handleMessage({type:'removeItem',uid:3})`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.uid)')),[1,2,4,5,6,7]);
  assert.equal(app.run('prepared.items.find(i=>i.uid===6).name'),'MaskedField');
  assert.match(app.run('conversation.at(-2).text'),/uid=3/);
  const second=historyFixture(app.storage);second.ctx.restoreId=app.run('sessionId');await second.run('restoreSession(restoreId)');
  assert.equal(second.run('prepared.items.some(i=>i.uid===3)'),false);
});
test('trash from configuration or ready returns to updated set and can remove the last item',async()=>{
  const app=revisionFixture();await seedB2B(app);
  app.run(`prepared.revisionPending=false;prepared.stage='copy';prepared.items=[prepared.items[2]];removePlannedItem(3)`);
  assert.equal(app.run('prepared.items.length'),0);
  assert.equal(app.run('prepared.stage'),'list');
  assert.equal(app.messages.at(-1).type,'proposal');
  await assert.rejects(app.run('apply()'),/Сначала получите/);
  assert.throws(()=>app.run('removePlannedItem(3)'),/уже удалён/);
});
test('trash is blocked during unresolved revisions',async()=>{
  const app=revisionFixture();await seedB2B(app);
  assert.throws(()=>app.run('removePlannedItem(3)'),/Сначала завершите/);
  assert.equal(app.run('prepared.items.length'),7);
});
test('proposal cards include a trash button for actual component uid',async()=>{
  const {get,receive}=ui();
  await receive({type:'proposal',items:[{uid:3,text:'ИНН',name:'TextField'}]});
  const button=get('items').children[0].children[2];
  assert.equal(button.textContent,'🗑');
  assert.equal(button.hidden,false);
  assert.match(button.title,/ИНН/);
});
async function financeRemovalFixture() {
  const app=revisionFixture();await seedB2B(app);
  app.run(`prepared.revisionPending=false;prepared.catalog=[
    {name:'Islands (R) / Island Basic Adaptive',knowledgeName:'Island'},
    {name:'Typography (W) / Text View',knowledgeName:'Text'},
    {name:'Number Field (R) / Number Field',knowledgeName:'NumberField'},
    {name:'Select Field (R) / Select Field',knowledgeName:'SelectField'},
    {name:'Amount (R) / Amount',knowledgeName:'Amount'}];
    prepared.items=prepared.items.map((item,index)=>{
      const ids=[1,2,3,2,4,2,5];const labels=['Форма','Количество ЦФА, шт.','Количество ЦФА, шт.','Кошелёк отправителя','Кошелёк отправителя','Сумма к оплате','Сумма к оплате'];
      return {...item,id:ids[index],name:prepared.catalog[ids[index]-1].name,text:labels[index],optionExample:index===4?'Кошелёк • ID 123 • 100 ₽':''};
    })`);
  return app;
}
test('exact user deletion example removes Island and specified rows, preserving amount Text and wallet settings',async()=>{
  const app=await financeRemovalFixture();
  const wallet=app.run('JSON.stringify(prepared.items[4])');
  const revision='Island убери\nКоличество ЦФА, шт.\nTypography (W) / Text View убери\nКошелёк отправителя\nTypography (W) / Text View убери\nСумма к оплате\nAmount (R) / Amount\nубери';
  app.ctx.userRevision=revision;
  await app.run('requestConversation({revision:userRevision})');
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.uid)')),[3,5,6]);
  assert.equal(app.run('JSON.stringify(prepared.items.find(i=>i.uid===5))'),wallet);
  assert.equal(app.messages.at(-1).type,'proposal');
  assert.equal(app.messages.at(-1).changes.length,4);
  assert.equal(app.messages.at(-1).changes.some(text=>text.startsWith('Обновлён')),false);
  assert.equal(app.messages.some(message=>message.type==='dialogRequest'),false);
});
test('ambiguous deletion asks for clarification and does not apply other deletions partially',async()=>{
  const app=await financeRemovalFixture();const before=app.run('JSON.stringify(prepared.items)');
  await app.run(`requestConversation({revision:'Island убери\\nСумма к оплате убери'})`);
  assert.equal(app.run('JSON.stringify(prepared.items)'),before);
  assert.equal(app.messages.at(-1).type,'dialogReply');
  assert.match(app.messages.at(-1).reply,/несколько компонентов/);
  assert.equal(app.run('prepared.revisionPending'),true);
});
test('explicit all removes only the specified type, keeping non-text inputs',async()=>{
  const app=await financeRemovalFixture();
  await app.run(`requestConversation({revision:'убери все Text'})`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(i=>i.uid)')),[1,3,5,7]);
});
test('mixed edits are passed to model with distinction between label and type',async()=>{
  const app=await financeRemovalFixture();
  await app.run(`requestConversation({revision:'Убери Island и замени SelectField на SuggestField'})`);
  // Mixed editing instructions still use the model; no speculative local mutation.
  assert.equal(app.run('prepared.items.length'),7);
  assert.equal(app.messages.at(-1).type,'dialogRequest');
  assert.match(app.messages.at(-1).prompt,/Удаление Amount не означает удаление Text/);
  await app.run(`requestConversation({revision:'Замени SelectField на SuggestField и убери Island'})`);
  assert.equal(app.run('prepared.items.length'),7);
});

test('copy request includes only current component documentation; full catalog remains available for replacements',()=>{
  const {run,messages}=backend();
  run(`prepared={catalog:formCatalog(triplexKnowledge.components.map((d,i)=>({key:String(i),type:'COMPONENT',name:d.name}))),items:[],index:0};prepared.items=[{id:prepared.catalog.findIndex(d=>d.knowledgeName==='NumberField')+1}];`);
  run(`send('prepared',{prompt:'Выбор компонентов'})`);const full=messages.at(-1).prompt.length;
  run(`send('copyRequest',{prompt:'Настрой количество ЦФА'})`);
  const scoped=messages.at(-1);
  const docs=JSON.parse(scoped.prompt.split('\n').at(-1)).triplexKnowledge.components;
  assert.deepEqual(docs.map(d=>d.name),['NumberField']);
  assert.ok(scoped.prompt.length<full*0.15);
  assert.equal(scoped.requestMetrics.documentedTypes,1);
  run(`send('dialogRequest',{prompt:'Замени компонент'})`);
  assert.equal(messages.at(-1).requestMetrics.documentedTypes,133);
});
test('state request uses actual frame components, including legacy component-set names',()=>{
  const fields=[
    {type:'INSTANCE',name:'Сумма',getPluginData:key=>key==='triplex-field-id'?'1':key==='triplex-component-name'?'Amount Field (R) / Amount Field':''},
    {type:'INSTANCE',name:'Количество',mainComponent:{name:'Default',parent:{type:'COMPONENT_SET',name:'NumberField'}},getPluginData:key=>key==='triplex-field-id'?'2':''}
  ];
  const {run,messages}=backend({getNodeById:()=>({type:'FRAME',children:fields})});
  run(`approvedSource={frameId:'frame'};activeLibraryAssets=triplexKnowledge.components.map((d,i)=>({key:String(i),type:'COMPONENT',name:d.name}));send('flowRequest',{prompt:'Состояния'})`);
  const docs=JSON.parse(messages.at(-1).prompt.split('\n').at(-1)).triplexKnowledge.components;
  assert.deepEqual(docs.map(d=>d.name).sort(),['AmountField','NumberField']);
  assert.equal(messages.at(-1).requestMetrics.scope,'states');
});
test('compact model history preserves all user constraints, recent turns and stored transcript',()=>{
  const {run}=backend();
  run(`conversation=[{role:'user',text:'Задача'},{role:'user',text:'Не использовать маски'}];for(let i=0;i<30;i++)conversation.push({role:i%2?'user':'assistant',text:i%2?'Правило '+i:'Старый ответ '.repeat(400)});`);
  const original=run('JSON.stringify(conversation)');
  const compact=run(`modelConversation('Задача')`);
  assert.equal(compact.earlierUserInstructions.includes('Не использовать маски'),true);
  assert.equal(compact.recent.length,6);
  for(const message of JSON.parse(original).filter(m=>m.role==='user' && m.text!=='Задача')) {
    assert.ok(compact.earlierUserInstructions.includes(message.text)||compact.recent.some(m=>m.text===message.text));
  }
  assert.equal(run('JSON.stringify(conversation)'),original);
  assert.ok(JSON.stringify(compact).length<original.length*0.3);
});
test('UI measures request size and elapsed time without exposing prompt in metrics',async()=>{
  const {ctx,get}=ui();
  ctx.AbortController=AbortController;
  ctx.fetch=async()=>({ok:true,json:async()=>({result:'{"items":[]}',metrics:{elapsedMs:1400}})});
  const result=await vm.runInContext(`requestModel('Описание платежа')`,ctx);
  assert.equal(result,'{"items":[]}');
  assert.match(get('modelMetrics').textContent,/символов.*ответ за.*CLI 1.4 с/);
  assert.ok(!get('modelMetrics').textContent.includes('Описание платежа'));
});
function statePreviewFixture() {
  const made=[];
  function field(){return {type:'INSTANCE',name:'Количество',width:240,height:48,
    mainComponent:{name:'Default'},componentProperties:{'Label#1':{type:'TEXT',value:'Количество ЦФА'},'Value#1':{type:'TEXT',value:'10'},'Error#1':{type:'TEXT',value:''},'ShowError#1':{type:'BOOLEAN',value:false}},
    getPluginData:key=>({'triplex-field-id':'1','triplex-field-label':'Количество','triplex-component-name':'NumberField'}[key]||''),
    setProperties(values){for(const [key,value] of Object.entries(values))this.componentProperties[key].value=value;},resizeWithoutConstraints(w,h){this.width=w;this.height=h;}};}
  const source={id:'source',type:'FRAME',parent:{id:'page'},width:500,height:400,x:0,y:0,children:[field()],
    clone(){const copy={...this,children:[field()],setPluginData(){},resizeWithoutConstraints(){},async exportAsync(){return new Uint8Array([1,2,3]);},remove(){this.removed=true;}};made.push(copy);return copy;}};
  const app=backend({currentPage:{id:'page'},getNodeById:()=>source});
  app.run(`approvedSource={frameId:'source',task:'Ввод количества ЦФА, вывод суммы без ввода',components:[{uid:1,name:'NumberField',text:'Количество ЦФА',value:'10',readOnly:false}],signature:layoutSignature(pixso.getNodeById('source'))};
    flow={states:[{name:'Пустое количество',condition:'Попытка отправки',values:{'1':''},errors:[{field:'1',text:'Введите количество'}]}]};`);
  return {...app,made,source};
}
test('state context includes confirmed type, original task, actual properties and user decisions',()=>{
  const app=statePreviewFixture();
  app.run(`requestFlow({requirements:'Форма ЦФА',feedback:'',standard:''})`);
  const prompt=app.messages.at(-1).prompt;
  assert.match(prompt,/confirmedTask/);
  assert.match(prompt,/Ввод количества ЦФА, вывод суммы без ввода/);
  assert.match(prompt,/"component":"NumberField"/);
  assert.match(prompt,/"label":"Количество ЦФА"/);
  assert.match(prompt,/"confirmed":/);
  assert.match(prompt,/"Value#1"/);
});
test('preview uses edited error text on a temporary clone and always removes it',async()=>{
  const app=statePreviewFixture();
  app.run(`const draft={sourceKey:flowStateKey(flow.states[0]),name:'Проверка количества',condition:'Нажали продолжить',values:{'1':''},errorTexts:['Укажите количество ЦФА']};`);
  await app.run(`previewFlowState({index:0,edits:[draft],selection:[{included:true,errors:[true]}],previewId:9})`);
  assert.equal(app.messages.at(-1).type,'flowPreview');
  assert.equal(app.messages.at(-1).previewId,9);
  assert.equal(app.made[0].children[0].componentProperties['Error#1'].value,'Укажите количество ЦФА');
  assert.equal(app.made[0].children[0].componentProperties['ShowError#1'].value,true);
  assert.equal(app.made[0].removed,true);
  assert.equal(app.source.children[0].componentProperties['Error#1'].value,'');
  assert.equal(app.run('flow.states[0].errors[0].text'),'Введите количество');
});
test('edited texts are used by approval and cannot change field references',async()=>{
  const app=statePreviewFixture();
  app.run(`const draft={sourceKey:flowStateKey(flow.states[0]),name:'Название',condition:'Условие',values:{'1':''},errorTexts:['Мой текст']};`);
  await app.run(`handleCommand({type:'approveFlow',edits:[draft],selection:[{included:true,errors:[true]}]})`);
  assert.equal(app.run('flow.selected[0].errors[0].text'),'Мой текст');
  assert.throws(()=>app.run(`editedFlowStates([{...draft,values:{'unknown':'100'}}])`),/Заполните/);
  assert.throws(()=>app.run(`editedFlowStates([{...draft,sourceKey:'old'}])`),/другому предложению/);
});
test('preview export failure removes temporary clone and reports an error',async()=>{
  const app=statePreviewFixture();
  const clone=app.source.clone.bind(app.source);
  app.source.clone=()=>{const copy=clone();copy.exportAsync=async()=>{throw Error('export unavailable');};return copy;};
  await app.run(`previewFlowState({index:0,selection:[{included:true,errors:[true]}],previewId:1})`);
  assert.match(app.messages.at(-1).error,/export unavailable/);
  assert.equal(app.made[0].removed,true);
});
test('state cards expose editable copy and saved edits restore',async()=>{
  const {get,receive,ctx}=ui();
  const state={name:'Ошибка',condition:'Нет значения',values:{'1':''},errors:[{field:'1',text:'Введите количество'}]};
  await receive({type:'flowProposal',reply:'Предложения',states:[state],labels:{'1':'Количество'}});
  const card=get('flowChoices').children[0];
  const content=card.children[1].children[0];
  const errorLabel=content.children.find(node=>node.textContent==='Текст ошибки · Количество');
  const input=errorLabel.children[0];input.value='Укажите число';input.oninput();
  assert.equal(vm.runInContext('flowEdits[0].errorTexts[0]',ctx),'Укажите число');
  assert.equal(vm.runInContext('flowApproved',ctx),false);
  const edits=vm.runInContext('flowEdits',ctx);
  await receive({type:'sessionRestored',sessionId:'saved',stage:'done',formPlaced:true,hasSource:true,layoutLocked:true,flow:{states:[state]},labels:{'1':'Количество'},ui:{hasFlowResponse:true,hasFlowDraft:true,flowEdits:edits}});
  assert.equal(vm.runInContext('flowEdits[0].errorTexts[0]',ctx),'Укажите число');
});

test('deep layout signature grows linearly and still detects nested text/property/size changes',()=>{
  const {ctx,run}=backend();
  let node={id:'leaf',characters:'Label',componentProperties:{Value:{type:'TEXT',value:'10'}}};
  for(let i=0;i<20;i++)node={id:'frame'+i,width:500,height:400,children:[node]};
  ctx.deepLayout=node;
  const before=run('layoutSignature(deepLayout)');
  assert.ok(before.length<2500,`Signature is too large: ${before.length}`);
  const nested=JSON.parse(before.slice(3));
  let leaf=nested;for(let i=0;i<20;i++)leaf=leaf[8][0];
  assert.equal(leaf[7],'Label');
  let original=node;for(let i=0;i<20;i++)original=original.children[0];
  original.characters='Edited';assert.notEqual(run('layoutSignature(deepLayout)'),before);
  original.characters='Label';original.componentProperties.Value.value='20';assert.notEqual(run('layoutSignature(deepLayout)'),before);
  original.componentProperties.Value.value='10';node.children[0].width=600;assert.notEqual(run('layoutSignature(deepLayout)'),before);
});
test('identical history snapshots do not rewrite file pluginData and changes still persist',async()=>{
  const app=historyFixture();await seedB2B(app);
  let writes=0;const original=app.ctx.pixso.root.setPluginData;
  app.ctx.pixso.root.setPluginData=(key,value)=>{writes++;original(key,value);};
  app.run(`sessionUI={task:'Проверка'};persistSession()`);const firstWrites=writes;
  assert.ok(firstWrites>0);
  app.run('persistSession();persistSession()');assert.equal(writes,firstWrites);
  app.run(`sessionUI.task='Изменено';persistSession()`);assert.ok(writes>firstWrites);
  const second=historyFixture(app.storage);second.ctx.savedId=app.run('sessionId');await second.run('restoreSession(savedId)');
  assert.equal(second.run('sessionUI.task'),'Изменено');
});

test('typing saves once after a pause and sending a revision cancels the pending save',()=>{
  const {ctx,get}=ui();
  const sent=[];const timers=new Map();let next=0;
  ctx.parent.postMessage=message=>sent.push(message.pluginMessage);
  ctx.setTimeout=callback=>{const id=++next;timers.set(id,callback);return id;};
  ctx.clearTimeout=id=>timers.delete(id);
  get('revision').value='Заменить компонент';
  for(let i=0;i<20;i++)vm.runInContext('scheduleSessionSave()',ctx);
  assert.equal(sent.length,0);
  assert.equal(timers.size,1);
  vm.runInContext(`sendRequest('dialog',{revision:'Заменить компонент'})`,ctx);
  assert.equal(timers.size,0);
  assert.deepEqual(sent.map(message=>message.type),['dialog']);
  assert.equal(sent[0].ui.revision,'Заменить компонент');
});
test('revision builds the model request before writing the attached history snapshot',async()=>{
  const app=historyFixture();await seedB2B(app);
  const events=[];
  const write=app.ctx.pixso.root.setPluginData;
  app.ctx.pixso.root.setPluginData=(key,value)=>{events.push('save');write(key,value);};
  app.ctx.pixso.ui.postMessage=message=>events.push(message.type);
  await app.run(`handleMessage({type:'dialog',revision:'Замени MaskedField на TextField',ui:{task:'B2B',revision:'Замени MaskedField на TextField',transcript:[{chat:'componentChat',author:'Вы',text:'Мои правки'}]}})`);
  assert.ok(events.indexOf('dialogRequest')>=0);
  assert.ok(events.indexOf('dialogRequest')<events.indexOf('save'));
  assert.equal(app.run('sessionUI.transcript[0].text'),'Мои правки');
});

test('opening component settings does not instantiate or export preview until requested',async()=>{
  const app=revisionFixture();await seedB2B(app);
  let creates=0,exports=0,settings;
  const component=app.components['3'];
  const create=component.createInstance;
  component.createInstance=()=>{creates++;const instance=create();instance.width=2400;instance.height=120;instance.exportAsync=async opts=>{exports++;settings=opts;return new Uint8Array([1]);};return instance;};
  app.run('prepared.revisionPending=false;prepared.items=[prepared.items[2]]');
  await app.run('openProperties()');
  assert.equal(creates,0);assert.equal(exports,0);
  assert.equal(app.messages.at(-1).item.previewDeferred,true);
  await app.run('activePreview.start()');
  assert.equal(creates,1);assert.equal(exports,1);
  assert.equal(settings.constraint.type,'SCALE');
  assert.equal(settings.constraint.value,0.4);
});
test('list revision can be prepared without reading live property definitions for every field',async()=>{
  const app=revisionFixture();await seedB2B(app);
  for(const component of Object.values(app.components))Object.defineProperty(component,'componentPropertyDefinitions',{get(){throw Error('Unexpected properties read');}});
  await app.run(`requestConversation({revision:'Замени MaskedField на TextField'})`);
  assert.equal(app.messages.at(-1).type,'dialogRequest');
});
test('variant metadata is reused instead of re-reading every live variant for each save',()=>{
  const {ctx,run}=backend();let reads=0;
  ctx.variants=Array.from({length:300},(_,i)=>({id:String(i),key:'key'+i,get name(){reads++;return 'Variant '+i;}}));
  run('variantMetadata(variants)');const first=reads;
  for(let i=0;i<10;i++)run('variantMetadata(variants)');
  assert.equal(reads,first);
  assert.equal(run('variantMetadata(variants).names.length'),300);
});
test('history stores each shared variant group once and restores it once',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run('sessionUI={task:"Несколько полей"};persistSession()');
  const state=app.run('sessionState()');
  assert.equal(state.prepared.items.filter(i=>i.id===3).length,3);
  assert.equal(state.prepared.variantGroups.length,5);
  assert.equal(state.prepared.items.every(item=>item.variants===undefined),true);
  assert.equal(state.activeLibraryAssets,undefined);
  const second=historyFixture(app.storage);let imports=0;
  const importByKey=second.ctx.pixso.importComponentByKeyAsync;
  second.ctx.pixso.getNodeById=(id)=>{if(id==='frame'||id==='body')return app.ctx.pixso.getNodeById(id);return null;};
  second.ctx.pixso.importComponentByKeyAsync=async key=>{imports++;return importByKey(key);};
  second.ctx.savedId=app.run('sessionId');await second.run('restoreSession(savedId)');
  assert.equal(imports,5);
  assert.equal(second.run('prepared.items[2].variants===prepared.items[5].variants'),true);
});
test('large nested label discovery yields to editor and preserves its path without an instance',async()=>{
  const {ctx,run}=backend();let yields=0;
  ctx.setTimeout=callback=>{yields++;callback();return 0;};
  ctx.component={componentPropertyDefinitions:{},children:Array.from({length:250},()=>({type:'RECTANGLE',children:[]}))};
  ctx.component.children.push({type:'TEXT',name:'Label',characters:'Label'});
  await run('ensureComponentLabel(component)');
  assert.ok(yields>=2);
  assert.equal(run('editableProperties(component)[0][0]'),'Label#layer:250');
  const old=yields;await run('ensureComponentLabel(component)');assert.equal(yields,old);
});
test('preview export stays bounded and never upscales small components',()=>{
  const {run}=backend();
  assert.equal(run('previewExportSettings({width:5000,height:2500}).constraint.value'),0.192);
  assert.equal(run('previewExportSettings({width:120,height:40}).constraint.value'),1);
});

test('older saved histories with inline variants still restore',async()=>{
  const app=historyFixture();await seedB2B(app);
  app.run(`sessionUI={task:'Старый формат'};persistSession();`);
  app.run(`const legacy=sessionState();legacy.prepared.items=legacy.prepared.items.map(item=>({...item,variants:legacy.prepared.variantGroups[item.variantGroup]}));delete legacy.prepared.variantGroups;legacy.prepared.items.forEach(item=>delete item.variantGroup);
    const index=readHistory();const entry=index.sessions[0];const content=JSON.stringify({version:1,state:legacy,ui:sessionUI});entry.chunks=1;pixso.root.setPluginData(historyKey+':'+sessionId+':'+entry.generation+':0',content);pixso.root.setPluginData(historyKey,JSON.stringify(index));`);
  const restored=historyFixture(app.storage);restored.ctx.restoreId=app.run('sessionId');await restored.run('restoreSession(restoreId)');
  assert.equal(restored.run('prepared.items.length'),7);
  assert.equal(restored.run('sessionReadOnly'),false);
});
test('replacement reuses an already imported type from the current plan',async()=>{
  const app=revisionFixture();await seedB2B(app);
  app.ctx.pixso.importComponentByKeyAsync=async()=>{throw Error('Unexpected reimport');};
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Готово',items:[{uid:3,id:4},{uid:4}]}))`);
  assert.equal(app.run('prepared.items[0].name'),'SuggestField');
});
test('saved catalog omits irrelevant asset payloads while preserving import bindings',()=>{
  const {ctx,run}=backend();
  ctx.assets=[{key:'set',type:'COMPONENT_SET',name:'NumberField',thumbnail:'x'.repeat(10000),variants:[{id:'1',key:'one',name:'Default',thumbnail:'y'.repeat(10000)}]}];
  assert.equal(run('libraryCatalog(assets)===libraryCatalog(assets)'),true);
  assert.equal(run('libraryCatalog(assets)[0].variants[0].key'),'one');
  assert.ok(run('JSON.stringify(libraryCatalog(assets)).length')<1000);
});

test('mismatched component name and numeric catalog id are rejected before any import',async()=>{
  const app=revisionFixture();
  let imports=0;app.ctx.pixso.importComponentByKeyAsync=async()=>{imports++;throw Error('Should not import');};
  app.run(`prepared.requireCatalogIdentity=true;prepared.catalog=[{key:'tracker',type:'COMPONENT',name:'Status Tracker (R) / Status Tracker Adaptive',knowledgeName:'StatusTracker'},{key:'number',type:'COMPONENT',name:'Number Field (R) / Number Field',knowledgeName:'NumberField'}]`);
  await assert.rejects(app.run(`review(JSON.stringify({reply:'NumberField (1) — ввод количества',items:[{id:1,component:'NumberField',text:'Количество ЦФА'}]}))`),/Несовпадение типа/);
  assert.equal(imports,0);
  assert.equal(app.run('prepared.items'),undefined);
});
test('catalog reference uses stable key and verifies semantic type even if order changes',()=>{
  const {run}=backend();
  assert.equal(run(`resolveCatalogIdentity({key:'amount',component:'Amount'},[{key:'notification',name:'Notification',knowledgeName:'Notification'},{key:'amount',name:'Amount (R) / Amount',knowledgeName:'Amount'}],true)`),2);
  assert.throws(()=>run(`resolveCatalogIdentity({id:1,key:'amount',component:'Amount'},[{key:'notification',name:'Notification',knowledgeName:'Notification'},{key:'amount',name:'Amount (R) / Amount',knowledgeName:'Amount'}],true)`),/ID и ключ/);
});
test('new model selection requires a verifiable component identity instead of trusting id alone',async()=>{
  const app=revisionFixture();
  app.run(`sendPlanRequest()`);
  const request=app.messages.at(-1).prompt;
  assert.match(request, /"key":"3"/);
  assert.equal(app.run('prepared.requireCatalogIdentity'),true);
  await assert.rejects(app.run(`review(JSON.stringify({items:[{id:3,text:'Количество ЦФА'}]}))`),/Не указан тип/);
});
test('identity mismatch requests one correction and a corrected key imports the intended type',async()=>{
  const app=revisionFixture();
  app.run('prepared.requireCatalogIdentity=true');
  await app.run(`handleMessage({type:'review',raw:JSON.stringify({items:[{id:1,component:'TextField',text:'ИНН'}]})})`);
  assert.equal(app.messages.at(-1).type,'prepared');
  assert.equal(app.messages.at(-1).repairing,true);
  await app.run(`handleMessage({type:'review',raw:JSON.stringify({items:[{key:'6',component:'TextField',text:'ИНН'}]})})`);
  assert.equal(app.run('prepared.items[0].name'),'TextField');
  assert.equal(app.messages.at(-1).type,'proposal');
  assert.match(app.messages.at(-1).reply,/Предложено компонентов: 1/);
});
test('replacement verifies type/key and leaves old set untouched if inconsistent',async()=>{
  const app=revisionFixture();await seedB2B(app);app.run('prepared.requireCatalogIdentity=true');
  const before=app.run('JSON.stringify(prepared.items)');
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил на TextField',items:[{uid:3,id:1,component:'TextField'}]}))`),/Несовпадение типа/);
  assert.equal(app.run('JSON.stringify(prepared.items)'),before);
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:[{uid:3,key:'6',component:'TextField'},{uid:4}]}))`);
  assert.deepEqual(Array.from(app.run('prepared.items.map(item=>item.name)')),['TextField','SuggestField']);
});
test('numeric-only replacement cannot bypass identity validation using configure updates',async()=>{
  const app=revisionFixture();await seedB2B(app);app.run('prepared.requireCatalogIdentity=true');
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'configure',reply:'Заменил',updates:[{uid:3,id:6}]}))`),/Не указан тип/);
  assert.equal(app.run('prepared.items[2].name'),'MaskedField');
});
test('reported CFA mismatches cannot resolve NumberField, SelectField or Amount to unrelated catalog rows',()=>{
  const {ctx,run}=backend();
  const catalog=Array.from({length:90},(_,i)=>({key:'other-'+i,name:'Other '+i,knowledgeName:null}));
  catalog[86]={key:'tracker',name:'Status Tracker (R) / Status Tracker Adaptive',knowledgeName:'StatusTracker'};
  catalog[21]={key:'loader',name:'Loaders (R) / Loader Small',knowledgeName:'LoaderSmall'};
  catalog[56]={key:'notification',name:'Notifications (R) / Notification / System',knowledgeName:'Notification'};
  ctx.reportedCatalog=catalog;
  for(const [id,component] of [[87,'NumberField'],[22,'SelectField'],[57,'Amount']]) {
    ctx.reportedEntry={id,component};
    assert.throws(()=>run('resolveCatalogIdentity(reportedEntry,reportedCatalog,true)'),/Несовпадение типа/);
  }
});

async function amountTextFixture() {
  const app=revisionFixture();
  app.components['5'].componentPropertyDefinitions={'Value#amount':{type:'TEXT',defaultValue:'100'},'Currency#amount':{type:'TEXT',defaultValue:'₽'}};
  app.components['6'].componentPropertyDefinitions={'Text#view':{type:'TEXT',defaultValue:'Текст'}};
  app.run(`prepared.catalog[5].name='Typography (W) / Text View';prepared.catalog[5].knowledgeName='Text';`);
  await app.run(`review(JSON.stringify({items:[{id:5,text:'Сумма к оплате',value:'100 ₽'}]}))`);
  app.run(`prepared.requireCatalogIdentity=true;prepared.stage='ready';prepared.items[0].values={'Value#amount':'250 ₽','Currency#amount':'₽'};prepared.items[0].confirmed=true;`);
  return app;
}
test('Amount to TextView maps display value and drops obsolete Amount settings with an explicit note',async()=>{
  const app=await amountTextFixture();
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:[{uid:1,key:'6',component:'Text',variant:23,values:{'Value#amount':'300 ₽','Currency#amount':'₽'}}]}))`);
  assert.equal(app.run('prepared.items[0].name'),'Typography (W) / Text View');
  assert.equal(app.run('prepared.items[0].values["Text#view"]'),'300 ₽');
  assert.equal(app.run('prepared.items[0].variant'),0);
  assert.equal(app.run('prepared.items[0].confirmed'),false);
  assert.equal(app.run('prepared.items[0].values["Currency#amount"]'),undefined);
  assert.match(app.messages.at(-1).notes[0],/Currency/);
  assert.equal(app.run('describeItem(prepared.items[0]).fields[0].value'),'300 ₽');
});
test('Amount to TextView without copied props retains the last manually agreed display value',async()=>{
  const app=await amountTextFixture();
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:[{uid:1,key:'6',component:'Text'}]}))`);
  assert.equal(app.run('describeItem(prepared.items[0]).fields[0].value'),'250 ₽');
});
test('generic Text prop resolves to the actual hashed TextView property',async()=>{
  const app=await amountTextFixture();
  await app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:[{uid:1,key:'6',component:'Text',values:{Text:'Итого: 300 ₽'}}]}))`);
  assert.equal(app.run('describeItem(prepared.items[0]).fields[0].value'),'Итого: 300 ₽');
});
test('genuinely unknown properties still reject atomically instead of being silently lost',async()=>{
  const app=await amountTextFixture();
  const before=app.run('JSON.stringify(prepared.items)');
  await assert.rejects(app.run(`reviewConversation(JSON.stringify({action:'list',reply:'Заменил',items:[{uid:1,key:'6',component:'Text',values:{UnrelatedProperty:'abc'}}]}))`),/UnrelatedProperty/);
  assert.equal(app.run('JSON.stringify(prepared.items)'),before);
});
test('JSON parser accepts explanatory wrappers, fences and double encoded objects without corrupting text',()=>{
  const {ctx,run}=backend();
  for(const raw of [
    'Вот ответ:\n{"action":"list","reply":"Текст: {сумма} и \\\"рубли\\\"","items":[]}\nГотово.',
    'Предлагаю:\n```json\n{"items":[]}\n```',
    JSON.stringify(JSON.stringify({items:[]}))
  ]){ctx.rawInput=raw;assert.ok(Array.isArray(run('parseModelResponse(rawInput).items')));}
});
test('malformed JSON triggers one format repair instead of exposing a syntax exception',async()=>{
  const app=await amountTextFixture();app.ctx.badJson='{"action":"list","reply":"Заменил","items":[ unexpected character ]}';
  await app.run('handleMessage({type:"reviewDialog",raw:badJson})');
  assert.equal(app.messages.at(-1).type,'dialogRequest');
  assert.equal(app.messages.at(-1).repairing,true);
  await app.run('handleMessage({type:"reviewDialog",raw:badJson})');
  assert.equal(app.messages.at(-1).type,'error');
  assert.match(app.messages.at(-1).message,/Не удалось прочитать JSON/);
  assert.equal(app.run('prepared.items[0].name'),'AmountField');
});
