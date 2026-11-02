import assert from 'node:assert/strict';
import test from 'node:test';
import { parseInquiry, sameOrigin } from '../lib/inquiries.ts';
import { validMetric } from '../lib/measurement.ts';
const valid = { name:'Test visitor',email:'visitor@example.com',message:'A product-team workshop',kind:'Workshop' };
test('inquiries validate required fields and bound content', () => {
 const result = parseInquiry(valid); assert.equal(result.email,valid.email); assert.equal(result.organization,'');
 for (const bad of [null, [], {}, {...valid,email:'bad'}, {...valid,email:'a@example.com\nBcc:x@example.com'}, {...valid,message:'x'.repeat(6001)}, {...valid,kind:'bulk mail'}]) assert.throws(()=>parseInquiry(bad));
 assert.equal(parseInquiry({...valid,website:'bot.example'}).website,'bot.example');
});
test('write endpoints require an exact same-origin browser request',()=>{
 const req=origin=>new Request('https://jedidiahweller.com/api/inquiry/',{headers:origin?{origin}:{}});
 assert.equal(sameOrigin(req('https://jedidiahweller.com')),true);
 assert.equal(sameOrigin(req('https://evil.example')),false);assert.equal(sameOrigin(req()),false);
});
test('measurement accepts only fixed events and paths, never extra financial or identity fields',()=>{
 assert.equal(validMetric({event:'page_view',path:'/'}),true);
 for(const v of [{event:'unknown',path:'/'},{event:'page_view',path:'/admin/'},{event:'page_view',path:'/?costs=1000'},{event:'page_view',path:'/',budget:1000},{event:'page_view',path:'/',email:'x@example.com'}]) assert.equal(validMetric(v),false);
});

test('SendGrid notifications require configuration and recognize only provider acceptance',async()=>{
 const {notifyInquiry}=await import('../lib/sendgrid.ts');
 assert.equal(await notifyInquiry('id',parseInquiry(valid),{}),'not_configured');
 const config={apiKey:'test-key',from:'website@example.com',to:'owner@example.com'};
 let sent;
 assert.equal(await notifyInquiry('id',parseInquiry(valid),config,async(url,options)=>{sent=JSON.parse(options.body);assert.equal(url,'https://api.sendgrid.com/v3/mail/send');return new Response(null,{status:202});}),'accepted');
 assert.equal(sent.reply_to.email,valid.email);assert.equal(sent.tracking_settings.open_tracking.enable,false);
 assert.equal(await notifyInquiry('id',parseInquiry(valid),config,async()=>new Response(null,{status:401})),'failed');
});
