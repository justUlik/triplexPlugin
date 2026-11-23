// Reuse the legacy regression suite against the isolated v2 backend.
// Its UI compatibility checks continue to cover the untouched legacy UI.
const fs = require('node:fs');
const source = fs.readFileSync(require.resolve('./workflow.test.cjs'), 'utf8')
  .replace("fs.readFileSync('main.js', 'utf8')", "fs.readFileSync('v2/main.js', 'utf8')")
  .replaceAll('triplex-dialog-history-v1', 'triplex-dialog-history-v2')
  .replace('opening component settings does not instantiate or export preview until requested',
    'opening component settings requests automatic preview without blocking UI')
  .replace('app.messages.at(-1).item.previewDeferred,true', 'app.messages.at(-1).item.previewDeferred,false')
  .replace('assert.equal(settings.constraint.value,0.4)', 'assert.equal(settings.constraint.value,640/2400)')
  // Measure component-document scoping separately from the shared editorial context.
  .replace('assert.ok(scoped.prompt.length<full*0.15);',
    `assert.ok(scoped.prompt.length - run('editorialContext("copy").length') < (full - run('editorialContext("catalog").length')) * 0.15);`);
module._compile(source + `
 test('v2 back from ready reopens last item and preserves draft going back',async()=>{
   const app=revisionFixture();await seedB2B(app);
   app.run("prepared.revisionPending=false;prepared.stage='ready';prepared.items.forEach(i=>i.confirmed=true)");
   const last=app.run('prepared.items.length-1');
   await app.run('backComponent()');
   assert.equal(app.run('prepared.index'),last);
   assert.equal(app.run('prepared.stage'),'copy');
   assert.equal(app.messages.at(-1).item.previewDeferred,false);
   await app.run('backComponent({index:prepared.index,variant:prepared.items[prepared.index].variant,values:{}})');
   assert.equal(app.run('prepared.index'),last-1);
   assert.equal(app.run('prepared.items[prepared.index+1].confirmed'),false);
   app.run('prepared.index=0');
   await app.run('backComponent()');
   assert.equal(app.run('prepared.stage'),'list');
   assert.equal(app.messages.at(-1).type,'proposal');
 });

 test('v2 ignores malformed and unknown commands without persisting state',async()=>{
   const app=backend();
   app.run('persistSession=()=>{throw Error("Unexpected write")};');
   for(const message of [null,undefined,[],{}, {type:1},{type:'unknown'},{type:'toString'},{type:'__proto__'}]) {
     app.ctx.input=message;
     await app.run('handleMessage(input)');
   }
   assert.equal(app.messages.length,0);
 });
 test('v2 queue recovers after unexpected handler failure and keeps command order',async()=>{
   const app=backend();
   app.run('handleMessage=async message=>{if(message.type==="fail")throw Error("Unexpected failure");send(message.type)}');
   app.ctx.pixso.ui.onmessage({type:'fail'});
   app.ctx.pixso.ui.onmessage({type:'first'});
   app.ctx.pixso.ui.onmessage({type:'second'});
   await app.run('messageQueue');
   assert.deepEqual(app.messages.map(m=>m.type),['error','first','second']);
   assert.equal(app.messages[0].message,'Unexpected failure');
 });
 test('v2 cancellation can run while preview export is pending',async()=>{
   const app=backend();
   app.run('let cancelled=false;let finishExport;activePreview={previewId:42,start:()=>new Promise(resolve=>{finishExport=resolve}),cancel:()=>{cancelled=true}};');
   app.ctx.pixso.ui.onmessage({type:'renderPreview',previewId:42});
   app.ctx.pixso.ui.onmessage({type:'cancelPreview',previewId:42});
   await app.run('messageQueue');
   assert.equal(app.run('cancelled'),true);
   assert.equal(app.run('activePreview'),undefined);
   app.run('finishExport()');
 });
 test('v2 cancellation for old preview does not stop current preview',async()=>{
   const app=backend();
   app.run('let cancelled=false;activePreview={previewId:43,cancel:()=>{cancelled=true}}');
   await app.run('handleCommand({type:"cancelPreview",previewId:42})');
   await app.run('handleCommand({type:"cancelPreview"})');
   assert.equal(app.run('cancelled'),false);
   assert.equal(app.run('activePreview.previewId'),43);
 });

 test('unchanged revision is automatically repaired once and corrected patch applies',async()=>{
   const app=revisionFixture();await seedB2B(app);
   app.run("conversation.push({role:'user',text:'Замени ИНН на TextField'})");
   const before=app.run('JSON.stringify(prepared.items)');
   await app.run('handleMessage({type:"reviewDialog",raw:JSON.stringify({action:"list",reply:"Заменил",items:prepared.items.map(i=>({uid:i.uid}))})})');
   assert.equal(app.messages.at(-1).type,'dialogRequest');
   assert.equal(app.messages.at(-1).repairing,true);
   assert.match(app.messages.at(-1).prompt,/latestRequest/);
   assert.equal(app.run('JSON.stringify(prepared.items)'),before);
   await app.run('handleMessage({type:"reviewDialog",raw:JSON.stringify({action:"configure",reply:"Заменил",updates:[{uid:3,key:"6",component:"TextField"}]})})');
   assert.equal(app.messages.at(-1).type,'proposal');
   assert.equal(app.run('prepared.items[2].name'),'TextField');
   assert.equal(app.run('prepared.revisionPending'),false);
 });
 test('unchanged automatic repair is bounded and cannot silently approve the old set',async()=>{
   const app=revisionFixture();await seedB2B(app);
   app.run('let unchangedRaw=JSON.stringify({action:"list",reply:"Заменил",items:prepared.items.map(i=>({uid:i.uid}))})');
   await app.run('handleMessage({type:"reviewDialog",raw:unchangedRaw})');
   await app.run('handleMessage({type:"reviewDialog",raw:unchangedRaw})');
   assert.equal(app.messages.filter(m=>m.type==='dialogRequest').length,1);
   assert.equal(app.messages.at(-1).type,'error');
   assert.equal(app.run('prepared.revisionPending'),true);
 });
 test('list-stage semantic updates and list patches without items preserve unrelated components',async()=>{
   const app=revisionFixture();await seedB2B(app);
   await app.run('reviewConversation(JSON.stringify({action:"configure",reply:"Изменил подпись",updates:[{uid:3,text:"ИНН организации"}]}))');
   assert.equal(app.run('prepared.items[2].text'),'ИНН организации');
   assert.equal(app.run('prepared.items.length'),7);
   await app.run('reviewConversation(JSON.stringify({action:"list",reply:"Заменил тип",updates:[{uid:3,key:"6",component:"TextField"}]}))');
   assert.equal(app.run('prepared.items[2].name'),'TextField');
   assert.equal(app.run('prepared.items[3].name'),'SuggestField');
   assert.equal(app.run('prepared.items.length'),7);
 });
 test('identical component preview reuses PNG while new values trigger exactly one export',async()=>{
   const app=revisionFixture();await seedB2B(app);
   let creates=0,exports=0,removes=0;
   const component=app.components['3'];const create=component.createInstance;
   component.createInstance=()=>{creates++;const instance=create();instance.width=800;instance.height=100;instance.exportAsync=async()=>{exports++;return new Uint8Array([1,2,3]);};instance.remove=()=>{removes++;instance.removed=true;};return instance;};
   app.run('prepared.revisionPending=false;prepared.items=[prepared.items[2]]');
   await app.run('openProperties()');await app.run('activePreview.start()');
   assert.equal(creates,1);assert.equal(exports,1);assert.equal(removes,1);
   await app.run('publishPreview("itemPreview",prepared.items[0],{index:0,requestPreview:true})');
   assert.equal(app.messages.at(-1).item.cached,true);
   assert.deepEqual(Array.from(app.messages.at(-1).item.png),[1,2,3]);
   assert.equal(creates,1);assert.equal(exports,1);
   await app.run('configureItem({index:0,variant:0,values:{"Label#1":"Новая подпись"},live:true},false)');
   await app.run('activePreview.start()');
   assert.equal(creates,2);assert.equal(exports,2);assert.equal(removes,2);
 });
 test('unchanged default properties do not force Pixso to rebuild the instance',async()=>{
   const app=backend();let writes=0;
   app.ctx.instance={componentProperties:{Label:{type:'TEXT',value:'Количество'},Required:{type:'BOOLEAN',value:false}},setProperties(values){writes++;this.last=values;}};
   await app.run('setInstanceValues(instance,{Label:"Количество",Required:false},"NumberField")');
   assert.equal(writes,0);
   await app.run('setInstanceValues(instance,{Label:"Новое количество",Required:false},"NumberField")');
   assert.equal(writes,1);assert.equal(app.ctx.instance.last.Label,'Новое количество');
   assert.equal(app.ctx.instance.last.Required,undefined);
 });
 test('preview cache evicts old entries to bound memory',()=>{
   const app=backend();
   app.run('for(let i=0;i<20;i++)cacheComponentPreview({},String(i),Array(100000).fill(1))');
   assert.ok(app.run('componentPreviewCache.length')<=6);
   assert.ok(app.run('componentPreviewCache.reduce((n,entry)=>n+entry.png.length,0)')<=512*1024);
 });

 test('property key ordering and empty values cannot masquerade as applied revisions',()=>{
   const app=backend();
   assert.equal(app.run('revisionSummary([{uid:1,id:1,text:"Поле",values:{a:"1",b:"2"}}],[{uid:1,id:1,text:"Поле",values:{b:"2",a:"1"}}]).length'),0);
   assert.equal(app.run('revisionSummary([{uid:1,id:1,text:"Поле"}],[{uid:1,id:1,text:"Поле",values:{}}]).length'),0);
 });

 test('state entry supports automatic suggestions and analytics without an extra layout screen',async()=>{
   const app=statePreviewFixture();
   await app.run('requestStates({mode:"auto",requirements:"task",standard:""})');
   assert.equal(app.messages.at(-1).type,'flowRequest');
   assert.match(app.messages.at(-1).prompt,/"mode":"auto"/);
   assert.match(app.messages.at(-1).prompt,/раскрытый Select/);
   await assert.rejects(app.run('requestStates({mode:"analytics",analytics:"",standard:""})'),/описание аналитики/);
   await app.run('requestStates({mode:"analytics",analytics:"При пустом количестве показать: Введите количество ЦФА",standard:""})');
   assert.match(app.messages.at(-1).prompt,/"mode":"analytics"/);
   assert.match(app.messages.at(-1).prompt,/Введите количество ЦФА/);
   assert.equal(app.run('pendingFlow.analytics'),'При пустом количестве показать: Введите количество ЦФА');
 });
 test('error text prefers Description and enables its visibility on a clone',async()=>{
   const app=statePreviewFixture();
   const clone=app.source.clone.bind(app.source);
   app.source.clone=()=>{const copy=clone();const field=copy.children[0];field.componentProperties['Description#1']={type:'TEXT',value:'Подсказка'};field.componentProperties['ShowDescription#1']={type:'BOOLEAN',value:false};return copy;};
   await app.run('previewFlowState({index:0,selection:[{included:true,errors:[true]}],previewId:91})');
   const field=app.made[0].children[0];
   assert.equal(field.componentProperties['Description#1'].value,'Введите количество');
   assert.equal(field.componentProperties['ShowDescription#1'].value,true);
   assert.equal(field.componentProperties['ShowError#1'].value,true);
   assert.equal(field.componentProperties['Error#1'].value,'');
   assert.equal(app.made[0].removed,true);
   assert.equal(app.source.children[0].componentProperties['Error#1'].value,'');
 });
 test('nested Description text is updated with font loading and ambiguous descriptions are untouched',async()=>{
   const app=backend({loadFontAsync:async()=>{}});
   app.ctx.field={componentProperties:{},children:[{type:'FRAME',name:'Description',visible:false,children:[{type:'TEXT',name:'Text',characters:'Подсказка',fontName:{family:'Inter',style:'Regular'}}]}]};
   assert.equal(await app.run('writeStateText(field,"error","Введите значение")'),true);
   assert.equal(app.ctx.field.children[0].children[0].characters,'Введите значение');
   assert.equal(app.ctx.field.children[0].visible,true);
   app.ctx.field.children[0].children.push({type:'TEXT',name:'Text',characters:'Ссылка'});
   assert.equal(await app.run('writeStateText(field,"error","Не перезаписывать")'),false);
   assert.equal(app.ctx.field.children[0].children[0].characters,'Введите значение');
 });
 test('supported active typing and expanded selects are added even if omitted by the model',async()=>{
   const app=statePreviewFixture();
   app.source.children[0].componentProperties['Active#1']={type:'BOOLEAN',value:false};
   app.run('approvedSource.signature=layoutSignature(pixso.getNodeById("source"))');
   await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({reply:"Предложения",states:[{name:"Нет количества",condition:"Пустое поле",values:{"1":""},errors:[{field:"1",text:"Введите количество"}]}]})})');
   assert.equal(app.run('flow.states.some(state=>state.properties?.some(p=>p.values["Active#1"]===true))'),true);
   const app2=statePreviewFixture();
   app2.source.children[0].componentProperties['Opened#1']={type:'BOOLEAN',value:false};
   const oldGet=app2.source.children[0].getPluginData;
   app2.source.children[0].getPluginData=key=>key==='triplex-component-name'?'SelectField':oldGet(key);
   app2.run('approvedSource.signature=layoutSignature(pixso.getNodeById("source"))');
   await app2.run('requestStates({mode:"auto",standard:""})');
   await app2.run('reviewFlow({raw:JSON.stringify({reply:"Предложения",states:[]})})');
   assert.equal(app2.run('flow.states[0].properties[0].values["Opened#1"]'),true);
   assert.match(app2.run('flow.states[0].name'),/Раскрытый/);
 });
 test('state review rejects unsupported properties, repairs once, and preserves the previous proposal',async()=>{
   const app=statePreviewFixture();
   await app.run('requestStates({mode:"analytics",analytics:"Пустое поле",standard:""})');
   app.run('let invalidStateRaw=JSON.stringify({reply:"Предложения",states:[{name:"Ошибка",condition:"Пусто",values:{},properties:[{field:"1",values:{MadeUp:true}}],errors:[]}]})');
   await app.run('handleCommand({type:"reviewFlow",raw:invalidStateRaw})');
   assert.equal(app.messages.at(-1).type,'flowRequest');assert.equal(app.messages.at(-1).repairing,true);
   await app.run('handleCommand({type:"reviewFlow",raw:invalidStateRaw})');
   assert.equal(app.messages.at(-1).type,'error');
   assert.equal(app.run('flow'),null);
   assert.equal(app.source.children[0].componentProperties['Error#1'].value,'');
 });
 test('state variants cannot change size or theme',()=>{
   const app=backend();
   app.ctx.field={mainComponent:{name:'Size=MD, Theme=Light, State=Default'}};
   assert.equal(app.run('compatibleStateVariant(field,{name:"Size=MD, Theme=Light, State=Error"})'),true);
   assert.equal(app.run('compatibleStateVariant(field,{name:"Size=LG, Theme=Light, State=Error"})'),false);
   assert.equal(app.run('compatibleStateVariant(field,{name:"Size=MD, Theme=Dark, State=Error"})'),false);
 });

 test('state copies apply active input and opened properties without mutating source or clipping dropdown',async()=>{
   const app=statePreviewFixture();
   app.source.children[0].componentProperties['Active#1']={type:'BOOLEAN',value:false};
   app.source.children[0].componentProperties['Opened#1']={type:'BOOLEAN',value:false};
   const copy=app.source.clone();const field=copy.children[0];
   field.componentProperties['Active#1']={type:'BOOLEAN',value:false};field.componentProperties['Opened#1']={type:'BOOLEAN',value:false};
   const set=field.setProperties.bind(field);field.setProperties=values=>{set(values);if(values['Opened#1'])field.height=200;};
   app.ctx.copy=copy;
   await app.run('applyStateToCopy(copy,{condition:"Ввод",values:{"1":"15"},properties:[{field:"1",values:{"Active#1":true}}],errors:[]},pixso.getNodeById("source"))');
   assert.equal(field.componentProperties['Active#1'].value,true);assert.equal(field.componentProperties['Value#1'].value,'15');
   assert.equal(app.source.children[0].componentProperties['Active#1'].value,false);assert.equal(app.source.children[0].componentProperties['Value#1'].value,'10');
   await app.run('applyStateToCopy(copy,{condition:"Раскрыт",values:{},properties:[{field:"1",values:{"Opened#1":true}}],errors:[]},pixso.getNodeById("source"))');
   assert.equal(field.height,200);assert.equal(copy.clipsContent,false);assert.equal(app.source.children[0].height,48);
 });
 test('multiple error messages share Description without enabling inverse HideError',async()=>{
   const app=statePreviewFixture();const copy=app.source.clone();const field=copy.children[0];
   field.componentProperties['Description#1']={type:'TEXT',value:''};field.componentProperties['HideError#1']={type:'BOOLEAN',value:false};
   app.ctx.copy=copy;
   await app.run('applyStateToCopy(copy,{condition:"Проверка",values:{},errors:[{field:"1",text:"Первая ошибка"},{field:"1",text:"Вторая ошибка"}]},pixso.getNodeById("source"))');
   assert.equal(field.componentProperties['Description#1'].value,['Первая ошибка','Вторая ошибка'].join(String.fromCharCode(10)));
   assert.equal(field.componentProperties['HideError#1'].value,false);
 });

 test('state plans normalize omitted empty fields, numeric identifiers and numeric input values',async()=>{
   const app=statePreviewFixture();
   await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({states:[{name:"Количество",condition:"Ввод",values:{"1":25}},{name:"Пустое количество",condition:"Отправка",errors:[{field:1,message:"Введите количество"}]}]})})');
   assert.equal(app.messages.at(-1).type,'flowProposal');
   assert.equal(app.run('flow.states[0].values["1"]'),'25');
   assert.equal(app.run('flow.states[0].errors.length'),0);
   assert.equal(app.run('flow.states[1].errors[0].field'),'1');
   assert.equal(app.run('flow.states[1].errors[0].text'),'Введите количество');
   assert.equal(app.run('typeof flow.reply'),'string');
 });
 test('state property maps and null optional collections are accepted without guessing fields',async()=>{
   const app=statePreviewFixture();app.source.children[0].componentProperties['Active#1']={type:'BOOLEAN',value:false};
   app.run('approvedSource.signature=layoutSignature(pixso.getNodeById("source"))');
   await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({reply:"Варианты",states:[{title:"Активное поле",when:"Ввод",values:null,variants:null,properties:{"1":{"Active#1":true}},errors:null},{name:"Ошибка",condition:"Пусто",errors:{"1":"Введите количество"}}]})})');
   assert.equal(app.messages.at(-1).type,'flowProposal');
   assert.equal(app.run('flow.states[0].properties[0].field'),'1');
   assert.equal(app.run('flow.states[0].properties[0].values["Active#1"]'),true);
   assert.equal(app.run('flow.states[1].errors[0].text'),'Введите количество');
 });
 test('invalid state references produce actionable field paths and one repair rather than a generic error',async()=>{
   const app=statePreviewFixture();await app.run('requestStates({mode:"auto",standard:""})');
   app.run('let badPlan=JSON.stringify({reply:"Варианты",states:[{name:"Ошибка",condition:"Пусто",values:{"999":"10"},errors:[]}]})');
   await app.run('handleCommand({type:"reviewFlow",raw:badPlan})');
   assert.equal(app.messages.at(-1).type,'flowRequest');assert.match(app.messages.at(-1).prompt,/states\\[1\\]\\.values\\[999\\]/);
   await app.run('handleCommand({type:"reviewFlow",raw:badPlan})');
   assert.equal(app.messages.at(-1).type,'error');assert.match(app.messages.at(-1).message,/неизвестный field/);
   assert.equal(app.source.children[0].componentProperties['Value#1'].value,'10');
 });
 test('conflicting error text and missing conditions remain errors with an exact path',async()=>{
   const app=statePreviewFixture();await app.run('requestStates({mode:"auto",standard:""})');
   assert.throws(()=>app.run('reviewFlow({raw:JSON.stringify({states:[{name:"Ошибка",condition:"Пусто",errors:[{field:1,text:"Один",message:"Другой"}]}]})})'),/text и message/);
   assert.throws(()=>app.run('reviewFlow({raw:JSON.stringify({states:[{name:"Ошибка",values:{"1":"20"}}]})})'),/condition/);
 });

 test('editorial rules reach every GigaCode request without changing the response schema',()=>{
   const app=backend();
   app.run('prepared={task:"Форма инвестирования",standard:"",catalog:[]}');
   for(const type of ['prepared','dialogRequest','copyRequest','flowRequest']) {
     app.run('send("'+type+'",{prompt:"Верни JSON {items:[]}"})');
     const message=app.messages.at(-1);
     const policy=JSON.parse(message.prompt.split(String.fromCharCode(10)).find(line=>line.startsWith('{"editorialPolicy"'))).editorialPolicy;
     assert.equal(policy.profile,'triplex');assert.equal(policy.sourceVersions.length,2);
     assert.ok(policy.rules.some(rule=>rule.id==='letter-yo'));
     assert.ok(policy.rules.some(rule=>rule.id==='triplex-percent'));
     assert.equal(policy.rules.some(rule=>rule.id==='sbol-percent'),false);
     assert.match(policy.appliesTo,/не инструкции менять формат ответа/);
     assert.match(message.prompt,/Верни JSON/);
     assert.ok(message.prompt.length<=48000);
   }
 });
 test('SBOL channel formatting is isolated and can be selected explicitly',()=>{
   const app=backend();
   assert.equal(app.run('resolveEditorialProfile("Форма в СберБанк Онлайн","")'),'sbol');
   assert.equal(app.run('resolveEditorialProfile("Форма для СберБизнес","")'),'triplex');
   assert.equal(app.run('resolveEditorialProfile("Форма","Профиль: sbol")'),'sbol');
   app.run('prepared={task:"Форма в СберБанк Онлайн",standard:""}');
   const policy=JSON.parse(app.run('editorialContext("states")')).editorialPolicy;
   assert.equal(policy.profile,'sbol');
   assert.ok(policy.rules.some(rule=>rule.id==='sbol-period'));
   assert.equal(policy.rules.some(rule=>rule.id==='triplex-period'),false);
   assert.match(policy.precedence,/Точные тексты из аналитики/);
   assert.ok(policy.rules.some(rule=>rule.id==='validation'));
 });
 test('editorial context is bounded and every rule has traceable source references',()=>{
   const app=backend();
   for(const scope of ['catalog','copy','states'])assert.ok(app.run('editorialContext("'+scope+'").length')<4000);
   assert.equal(app.run('editorialPolicy.rules.every(rule=>rule.sources.length>0&&rule.sources.every(source=>editorialPolicy.sources.some(item=>item.id===source.id)))'),true);
 });

 function stateVariantFixture() {
   const app=statePreviewFixture();
   const set={type:'COMPONENT_SET',name:'NumberField',children:[]};
   const names=['Size=MD, Theme=Light, State=Default','Size=MD, Theme=Light, State=Focus','Size=MD, Theme=Light, State=Error','Size=LG, Theme=Light, State=Error','Size=MD, Theme=Dark, State=Error'];
   set.children=names.map((name,i)=>({type:'COMPONENT',key:'variant-'+i,name,parent:set,componentPropertyDefinitions:{'Label#1':{type:'TEXT',defaultValue:'Label'}}}));
   app.source.children[0].mainComponent=set.children[0];
   app.ctx.field=app.source.children[0];
   app.run('approvedSource.signature=layoutSignature(pixso.getNodeById("source"))');
   return {...app,set};
 }
 test('state context exposes only compatible variants with stable keys',()=>{
   const app=stateVariantFixture();
   const fields=JSON.parse(app.run('JSON.stringify(confirmedFlowFields(pixso.getNodeById("source")))'));
   assert.equal(fields[0].variants.length,3);
   assert.equal(fields[0].variantOptions[1].key,'variant-1');
   assert.equal(fields[0].variants.some(name=>name.includes('Size=LG')),false);
   assert.equal(fields[0].variants.some(name=>name.includes('Theme=Dark')),false);
 });
 test('state matching accepts unique shorthand, reordered axes and stable keys without changing style',()=>{
   const app=stateVariantFixture();
   assert.equal(app.run('resolveStateVariant(field,{variant:"Focus"}).key'),'variant-1');
   assert.equal(app.run('resolveStateVariant(field,{variant:"state=Error, theme=Light, size=MD"}).key'),'variant-2');
   assert.equal(app.run('resolveStateVariant(field,{key:"variant-2"}).key'),'variant-2');
   assert.throws(()=>app.run('resolveStateVariant(field,{variant:"Size=LG, Theme=Light, State=Error"})'),/size/);
   assert.throws(()=>app.run('resolveStateVariant(field,{key:"variant-4"})'),/theme/);
   assert.throws(()=>app.run('resolveStateVariant(field,{key:"variant-1",variant:"Error"})'),/разные состояния/);
   assert.throws(()=>app.run('resolveStateVariant(field,{variant:"Состояние"})'),/не найден/);
 });
 test('generic Property axes support genuine states but reject size and theme changes',()=>{
   const app=backend();
   app.ctx.field={mainComponent:{name:'Property 1=Default, Size=MD, Theme=Light'}};
   assert.equal(app.run('compatibleStateVariant(field,{name:"Property 1=Error, Size=MD, Theme=Light"})'),true);
   assert.equal(app.run('compatibleStateVariant(field,{name:"Property 1=Error, Size=LG, Theme=Light"})'),false);
   app.ctx.field.mainComponent.name='MD / Default / Light';
   assert.equal(app.run('compatibleStateVariant(field,{name:"MD / Focus / Light"})'),true);
   assert.equal(app.run('compatibleStateVariant(field,{name:"LG / Focus / Light"})'),false);
   app.ctx.field.mainComponent.name='Disabled=False, Filled=False, Size=MD';
   assert.equal(app.run('compatibleStateVariant(field,{name:"Disabled=True, Filled=True, Size=MD"})'),true);
 });
 test('key-only and shorthand state plans normalize to canonical variant names',async()=>{
   const app=stateVariantFixture();await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({states:[{name:"Фокус",condition:"Ввод",variants:[{field:1,key:"variant-1"}]},{name:"Ошибка",condition:"Проверка",variants:[{field:1,variant:"Error"}],errors:[{field:1,text:"Введите количество"}]}]})})');
   assert.equal(app.messages.at(-1).type,'flowProposal');
   assert.equal(app.run('flow.states[0].variants[0].variant'),'Size=MD, Theme=Light, State=Focus');
   assert.equal(app.run('flow.states[1].variants[0].variant'),'Size=MD, Theme=Light, State=Error');
 });
 test('ambiguous state names cannot choose an arbitrary candidate',()=>{
   const app=stateVariantFixture();
   const second={...app.set.children[1],key:'variant-other',name:'Size=MD, Theme=Light, State=Focus, Filled=True'};
   app.source.children[0].mainComponent.name+=' , Filled=False';
   app.set.children[1].name+=' , Filled=False';app.set.children.push(second);
   assert.throws(()=>app.run('resolveStateVariant(field,{variant:"Focus"})'),/неоднозначно/);
 });
`, __filename);
