// Reuse the legacy regression suite against the isolated v2 backend.
// Its UI compatibility checks continue to cover the untouched legacy UI.
const fs = require('node:fs');
const source = fs.readFileSync(require.resolve('./workflow.test.cjs'), 'utf8')
  .replace("fs.readFileSync('main.js', 'utf8')", "fs.readFileSync('v2/main.js', 'utf8')")
  .replaceAll('triplex-dialog-history-v1', 'triplex-dialog-history-v2')
  .replace('opening component settings does not instantiate or export preview until requested',
    'opening component settings requests automatic preview without blocking UI')
  .replace('app.messages.at(-1).item.previewDeferred,true', 'app.messages.at(-1).item.previewDeferred,false');
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
`, __filename);
