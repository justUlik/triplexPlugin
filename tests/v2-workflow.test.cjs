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
 test('short state selectors retain other current axes when this identifies one variant',()=>{
   const app=stateVariantFixture();
   const second={...app.set.children[1],key:'variant-other',name:'Size=MD, Theme=Light, State=Focus, Filled=True'};
   app.source.children[0].mainComponent.name+=' , Filled=False';
   app.set.children[1].name+=' , Filled=False';app.set.children.push(second);
   assert.equal(app.run('resolveStateVariant(field,{variant:"Focus"}).key'),'variant-1');
 });

 test('manual component text is synchronized before insertion and subsequent state requests',async()=>{
   const app=revisionFixture();await seedB2B(app);
   app.components['3'].componentPropertyDefinitions['Value#1']={type:'TEXT',defaultValue:'10'};
   app.components['3'].componentPropertyDefinitions['Placeholder#1']={type:'TEXT',defaultValue:'Введите'};
   app.run('prepared.revisionPending=false;prepared.items=[prepared.items[2]]');
   await app.run('openProperties()');
   await app.run('configureItem({index:0,variant:0,values:{"Label#1":"Моё название","Value#1":"350","Placeholder#1":"Моя подсказка"}},true)');
   assert.equal(app.run('prepared.items[0].text'),'Моё название');
   assert.equal(app.run('prepared.items[0].value'),'350');
   assert.equal(app.run('prepared.items[0].placeholder'),'Моя подсказка');
   const create=app.components['3'].createInstance;
   app.components['3'].createInstance=()=>{const instance=create();instance.componentProperties['Value#1']={type:'TEXT',value:'10'};instance.componentProperties['Placeholder#1']={type:'TEXT',value:'Введите'};instance.metadata={};instance.setPluginData=(key,value)=>instance.metadata[key]=value;return instance;};
   await app.run('apply()');
   assert.equal(app.inserted[0].values['Label#1'],'Моё название');
   assert.equal(app.inserted[0].metadata['triplex-field-label'],'Моё название');
   assert.equal(app.run('approvedSource.components[0].text'),'Моё название');
   assert.equal(app.run('approvedSource.components[0].value'),'350');
 });
 test('state context reads manually edited nested labels and current input instead of old metadata',async()=>{
   const app=statePreviewFixture();const field=app.source.children[0];
   delete field.componentProperties['Label#1'];
   field.componentProperties['Value#1'].value='350';
   field.children=[{type:'FRAME',name:'Label',children:[{type:'TEXT',name:'Text',characters:'Моя подпись с холста'}]}];
   await app.run('requestStates({mode:"auto",standard:""})');
   const context=JSON.parse(app.run('JSON.stringify(confirmedFlowFields(pixso.getNodeById("source"))[0])'));
   assert.equal(context.label,'Моя подпись с холста');assert.equal(context.confirmed.text,'Моя подпись с холста');
   assert.equal(context.currentCopy.value,'350');assert.equal(context.confirmed.value,'350');
   assert.match(app.messages.at(-1).prompt,/Моя подпись с холста/);
 });
 test('variant swaps preserve edited hashed text properties without resetting the target active state',async()=>{
   const app=stateVariantFixture();const copy=app.source.clone();const field=copy.children[0];
   field.mainComponent=app.set.children[0];
   field.componentProperties={'Label#old':{type:'TEXT',value:'Моя подпись'},'Value#old':{type:'TEXT',value:'350'},'Placeholder#old':{type:'TEXT',value:'Моя подсказка'},'Active#old':{type:'BOOLEAN',value:false},'Required#old':{type:'BOOLEAN',value:true}};
   field.swapComponent=variant=>{field.mainComponent=variant;field.componentProperties={'Label#new':{type:'TEXT',value:'Label'},'Value#new':{type:'TEXT',value:''},'Placeholder#new':{type:'TEXT',value:'Placeholder'},'Active#new':{type:'BOOLEAN',value:true},'Required#new':{type:'BOOLEAN',value:false}};};
   app.ctx.copy=copy;
   await app.run('applyStateToCopy(copy,{condition:"Фокус",values:{},variants:[{field:"1",key:"variant-1",variant:"Size=MD, Theme=Light, State=Focus"}],errors:[]},pixso.getNodeById("source"))');
   assert.equal(field.componentProperties['Label#new'].value,'Моя подпись');assert.equal(field.componentProperties['Value#new'].value,'350');
   assert.equal(field.componentProperties['Placeholder#new'].value,'Моя подсказка');assert.equal(field.componentProperties['Active#new'].value,true);assert.equal(field.componentProperties['Required#new'].value,true);
 });
 test('variant restoration preserves nested user copy even when the target Description is hidden',async()=>{
   const app=backend({loadFontAsync:async()=>{}});
   const layer=value=>({type:'TEXT',name:'Text',characters:value,fontName:{family:'Inter',style:'Regular'}});
   app.ctx.field={componentProperties:{},children:[{type:'FRAME',name:'Label',children:[layer('Моя подпись')]},{type:'FRAME',name:'Description',children:[layer('Моё описание')]}]};
   app.ctx.copySnapshot=await app.run('captureFieldCopy(field)');
   app.ctx.field.children=[{type:'FRAME',name:'Label',children:[layer('Label')]},{type:'FRAME',name:'Description',visible:false,children:[layer('Description')]}];
   await app.run('restoreFieldCopy(field,copySnapshot)');
   assert.equal(app.ctx.field.children[0].children[0].characters,'Моя подпись');assert.equal(app.ctx.field.children[1].children[0].characters,'Моё описание');
   assert.equal(app.ctx.field.children[1].visible,false);
 });
 test('state proposals drop unchanged and duplicate screens and do not expose model jargon',async()=>{
   const app=statePreviewFixture();await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({reply:"stateCapabilities.opened пуст; справочник не прочитан",states:[{name:"Исходный экран",condition:"Открыли",values:{"1":"10"}},{name:"Ввод",condition:"Первое условие",values:{"1":"20"}},{name:"Ввод снова",condition:"Второе условие",values:{"1":"20"}}]})})');
   assert.equal(app.run('flow.states.length'),1);
   assert.doesNotMatch(app.run('flow.reply'),/stateCapabilities|справочник/);
   assert.match(app.run('flow.states[0].condition'),/Второе условие/);
 });
 test('manual error edits survive a revision response that repeats the original model text',async()=>{
   const app=statePreviewFixture();
   app.run('flow.mode="auto";flow.analytics="";let editedDraft={sourceKey:flowStateKey(flow.states[0]),name:flow.states[0].name,condition:flow.states[0].condition,values:{"1":""},errorTexts:["Мой согласованный текст"]}');
   await app.run('requestStates({mode:"auto",standard:"",feedback:"Добавь другое состояние",edits:[editedDraft]})');
   await app.run('reviewFlow({raw:JSON.stringify({reply:"Обновил",states:[{name:"Пустое количество",condition:"Попытка отправки",values:{"1":""},errors:[{field:"1",text:"Введите количество"}]}]})})');
   assert.equal(app.run('flow.states[0].errors[0].text'),'Мой согласованный текст');
   app.ctx.copy=app.source.clone();
   await app.run('applyStateToCopy(copy,flow.states[0],pixso.getNodeById("source"))');
   assert.equal(app.ctx.copy.children[0].componentProperties['Error#1'].value,'Мой согласованный текст');
 });

 test('chat text changes update actual properties and metadata together',async()=>{
   const app=revisionFixture();await seedB2B(app);app.run('prepared.revisionPending=false;prepared.items=[prepared.items[2]]');
   await app.run('openProperties()');
   await app.run('reviewConversation(JSON.stringify({action:"configure",reply:"Изменил",updates:[{uid:3,text:"Текст из чата"}]}))');
   assert.equal(app.run('prepared.items[0].values["Label#1"]'),'Текст из чата');assert.equal(app.run('prepared.items[0].text'),'Текст из чата');
   await app.run('reviewConversation(JSON.stringify({action:"configure",reply:"Изменил",updates:[{uid:3,values:{"Label#1":"Текст через values"}}]}))');
   assert.equal(app.run('prepared.items[0].text'),'Текст через values');
 });
 test('component variant changes retain the most recent input across property suffix changes',async()=>{
   const app=revisionFixture();await seedB2B(app);app.run('prepared.revisionPending=false;prepared.items=[prepared.items[2]]');
   app.ctx.newVariant={name:'Focus',componentPropertyDefinitions:{'Label#new':{type:'TEXT',defaultValue:'Label'}}};
   app.run('prepared.items[0].variants=[prepared.items[0].variants[0],newVariant]');
   await app.run('openProperties()');
   await app.run('configureItem({index:0,variant:1,values:{"Label#1":"Последняя ручная правка"}},false)');
   assert.equal(app.run('prepared.items[0].values["Label#new"]'),'Последняя ручная правка');assert.equal(app.run('prepared.items[0].text'),'Последняя ручная правка');
 });

 function realTriplexAxesFixture() {
   const app=statePreviewFixture();
   const set={type:'COMPONENT_SET',name:'NumberField',children:[]};
   const names=[
     'Size=LG, State=Default, Filled=False, Warning=False, Error=False, Darkmode=False',
     'Size=LG,State=Hover,Filled=False,Warning=False,Error=False,Darkmode=False',
     'Size=LG,State=Active,Filled=False,Warning=False,Error=False,Darkmode=False',
     'Size=LG,State=Active,Filled=True,Warning=False,Error=False,Darkmode=False',
     'Size=LG, State=Default, Filled=True, Warning=False, Error=False, Darkmode=False',
     'Size=LG,State=Hover,Filled=True,Warning=False,Error=False,Darkmode=False',
     'Size=LG,State=Default,Filled=False,Warning=False,Error=True,Darkmode=False',
     'Size=LG,State=Default,Filled=True,Warning=False,Error=True,Darkmode=False',
     'Size=LG,State=Active,Filled=True,Warning=False,Error=True,Darkmode=False',
     'Size=LG,State=Active,Filled=True,Warning=True,Error=False,Darkmode=False',
     'Size=LG,State=Active,Filled=True,Warning=False,Error=False,Darkmode=True',
     'Size=SM,State=Active,Filled=True,Warning=False,Error=False,Darkmode=False'
   ];
   set.children=names.map((name,i)=>({type:'COMPONENT',name,key:'real-'+i,parent:set,componentPropertyDefinitions:{'Label#1':{type:'TEXT',defaultValue:'Label'}}}));
   app.source.children[0].mainComponent=set.children[0];app.ctx.field=app.source.children[0];
   app.run('approvedSource.signature=layoutSignature(pixso.getNodeById("source"))');
   return {...app,set};
 }
 test('reported Triplex axes resolve partial states while retaining size and dark mode',()=>{
   const app=realTriplexAxesFixture();
   assert.equal(app.run('resolveStateVariant(field,{variant:"Active"}).key'),'real-2');
   assert.equal(app.run('resolveStateVariant(field,{axes:{State:"Active",Filled:true}}).key'),'real-3');
   assert.equal(app.run('resolveStateVariant(field,{axes:{Error:true,Filled:false}}).key'),'real-6');
   assert.equal(app.run('resolveStateVariant(field,{variant:"Error"}).key'),'real-6');
   assert.throws(()=>app.run('resolveStateVariant(field,{axes:{State:"Active",Darkmode:true}})'),/не найдено/);
   assert.throws(()=>app.run('resolveStateVariant(field,{key:"real-11"})'),/размер/);
   assert.throws(()=>app.run('resolveStateVariant(field,{variant:""})'),/не указано нужное состояние/);
 });
 test('empty optional names do not invalidate a valid variant key or axis selector',async()=>{
   const app=realTriplexAxesFixture();await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({states:[{name:"Ввод количества",condition:"Фокус и ввод",variants:[{field:1,key:"real-3",variant:""}],values:{"1":"10"}},{name:"Активное поле",condition:"Фокус",variants:[{field:1,variant:" ",axes:{State:"Active",Filled:false}}]}]})})');
   assert.equal(app.messages.at(-1).type,'flowProposal');
   assert.equal(app.run('flow.states[0].variants[0].key'),'real-3');
   assert.match(app.run('flow.states[1].variants[0].variant'),/State=Active,Filled=False/);
 });
 test('blank error variant placeholders resolve Error=True as a real independent axis',async()=>{
   const app=realTriplexAxesFixture();await app.run('requestStates({mode:"auto",standard:""})');
   await app.run('reviewFlow({raw:JSON.stringify({states:[{name:"Нет количества",condition:"Отправка без количества",values:{"1":""},variants:[{field:1,variant:""}],errors:[{field:1,text:"Введите количество"}]}]})})');
   assert.equal(app.messages.at(-1).type,'flowProposal');
   assert.match(app.run('flow.states[0].variants[0].variant'),/Error=True/);
   assert.match(app.run('flow.states[0].variants[0].variant'),/Filled=False/);
   assert.equal(app.run('flow.states[0].variants[0].variant.includes("Darkmode=True")'),false);
 });
 test('active typing and error controls are populated for the exact reported variant names',()=>{
   const app=realTriplexAxesFixture();
   assert.equal(app.run('componentStateCapabilities(field).controls.active.variants[0].key'),'real-3');
   assert.equal(app.run('componentStateCapabilities(field).controls.error.variants[0].key'),'real-7');
   assert.equal(app.run('stateControl(field,"error",false).variants[0].key'),'real-6');
 });
 test('equally close state candidates are still rejected instead of choosing the first',()=>{
   const app=realTriplexAxesFixture();
   app.set.children=app.set.children.filter((variant,i)=>[0,8,9].includes(i));
   assert.throws(()=>app.run('resolveStateVariant(field,{axes:{State:"Active",Filled:true}})'),/несколько состояний/);
 });

 test('reported error variant renders with preserved manual label and Description error text',async()=>{
   const app=realTriplexAxesFixture();const sourceField=app.source.children[0];
   sourceField.componentProperties['Label#1'].value='Моё количество';sourceField.componentProperties['Description#1']={type:'TEXT',value:'Моя подсказка'};
   const copy=app.source.clone(),field=copy.children[0];
   field.mainComponent=app.set.children[0];field.componentProperties=JSON.parse(JSON.stringify(sourceField.componentProperties));
   field.swapComponent=variant=>{field.mainComponent=variant;field.componentProperties={'Label#new':{type:'TEXT',value:'Label'},'Value#new':{type:'TEXT',value:'Default'},'Error#new':{type:'TEXT',value:''},'Description#new':{type:'TEXT',value:'Description'},'ShowError#new':{type:'BOOLEAN',value:true}};};
   app.ctx.copy=copy;
   await app.run('applyStateToCopy(copy,{name:"Пустое количество",condition:"Проверка",values:{"1":""},variants:[{field:"1",key:"real-6"}],errors:[{field:"1",text:"Укажите количество"}]},pixso.getNodeById("source"))');
   assert.equal(field.mainComponent.key,'real-6');assert.equal(field.componentProperties['Label#new'].value,'Моё количество');
   assert.equal(field.componentProperties['Value#new'].value,'');assert.equal(field.componentProperties['Description#new'].value,'Укажите количество');
   assert.equal(sourceField.componentProperties['Description#1'].value,'Моя подсказка');
 });

 test('component mode separates every field and every error',()=>{
   const app=backend();app.ctx.nodes=new Map([['1',{}],['2',{}]]);
   const states=JSON.parse(JSON.stringify(app.run('splitComponentStates([{name:"Ошибки",condition:"Проверка",values:{"1":"","2":"wallet"},variants:[],properties:[],errors:[{field:"1",text:"Введите количество"},{field:"1",text:"Недостаточно средств"},{field:"2",text:"Выберите кошелёк"}]}],nodes)')));
   assert.equal(states.length,3);assert.deepEqual(states.map(s=>s.field),['1','1','2']);
   assert.deepEqual(states.map(s=>s.errors.length),[1,1,1]);assert.deepEqual(states[2].values,{'2':'wallet'});
   assert.throws(()=>app.run('splitComponentStates([{values:{},errors:[{field:"",text:"Ошибка формы"}]}],nodes)'),/Укажите компонент/);
 });
 function componentRenderFixture(){
   const fixture=statePreviewFixture(),app=fixture,{source}=fixture,made=[],exports=[];
   app.ctx.pixso.currentPage.appendChild=copy=>{copy.parent=app.ctx.pixso.currentPage;};
   source.clone=()=>{throw new Error('Full form must never be cloned');};
   source.children[0].clone=()=>{
     const original=source.children[0],copy={...original,componentProperties:structuredClone(original.componentProperties),setPluginData(){},remove(){this.removed=true;}};
     copy.exportAsync=async()=>{exports.push(structuredClone(copy.componentProperties));return new Uint8Array([1,2,3]);};
     made.push(copy);return copy;
   };
   app.run('flow.renderMode="components";flow.states[0].field="1"');
   return {...fixture,app,made,exports};
 }
 test('automatic component preview renders value and error inside one instance and caches it',async()=>{
   const {app,source,made,exports}=componentRenderFixture();
   await app.run('previewFlowState({index:0,previewId:1})');
   assert.equal(made.length,1);assert.equal(exports.length,1);
   assert.equal(exports[0]['Value#1'].value,'');assert.equal(exports[0]['Error#1'].value,'Введите количество');
   assert.equal(made[0].removed,true);assert.equal(source.children[0].componentProperties['Value#1'].value,'10');
   assert.equal(app.messages.at(-1).component,true);assert.ok(app.messages.at(-1).png);
   await app.run('previewFlowState({index:0,previewId:2})');assert.equal(made.length,1);
 });
 test('component generation adds individual components and rolls back on an unrenderable error',async()=>{
   const {app,made}=componentRenderFixture();
   app.run('flow.selected=flow.states;flowApproved=true');await app.run('createStates()');
   assert.equal(made.length,1);assert.equal(made[0].removed,undefined);assert.equal(app.messages.at(-1).components,true);
   app.run('flow.selected=[flow.states[0],{...flow.states[0],field:"missing"}];flowApproved=true');
   await assert.rejects(app.run('createStates()'),/Компонент больше не доступен/);
   assert.equal(made[1].removed,true);assert.equal(made[0].removed,undefined);
 });
`, __filename);
