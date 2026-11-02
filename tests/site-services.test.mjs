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

test('analytics defaults on, preserves opt-outs, and stops/resumes collection with browser signals', async () => {
 const {analyticsAllowed,setAnalyticsPreference,startAnalytics,sendAnalyticsEvent,stopAnalytics}=await import('../lib/google-analytics.ts');
 const names=['window','navigator','localStorage','location','document'];
 const original=new Map(names.map(name=>[name,Object.getOwnPropertyDescriptor(globalThis,name)]));
 let preference=null,unavailable=false;const scripts=[],commands=[],cookies=[];
 const win={dispatchEvent(){},dataLayer:[],gtag:(...args)=>commands.push(args)};
 const nav={doNotTrack:'0',globalPrivacyControl:false};
 const storage={getItem(){if(unavailable)throw Error('blocked');return preference;},setItem(key,value){if(unavailable)throw Error('blocked');preference=value;}};
 const doc={referrer:'https://example.com/search?private=value',get cookie(){return '_ga=test; _ga_TEST=session; other=value';},set cookie(value){cookies.push(value);},createElement(){return {};},head:{appendChild(s){scripts.push(s);}}};
 const values={window:win,navigator:nav,localStorage:storage,location:{origin:'https://jedidiahweller.com',pathname:'/speaking/'},document:doc};
 win.location=values.location;
 for(const name of names)Object.defineProperty(globalThis,name,{configurable:true,writable:true,value:values[name]});
 try {
  assert.equal(analyticsAllowed(),true,'new visitors are measured by default');
  preference='no';assert.equal(analyticsAllowed(),false,'legacy opt-outs stay off');
  preference='yes';nav.doNotTrack='1';assert.equal(analyticsAllowed(),false);
  nav.doNotTrack='0';nav.globalPrivacyControl=true;assert.equal(analyticsAllowed(),false);
  nav.globalPrivacyControl=false;setAnalyticsPreference('no');
  startAnalytics('G-TEST');sendAnalyticsEvent('page_view');assert.equal(commands.length,0);
  win.jediGaId='G-TEST';stopAnalytics();assert.equal(win['ga-disable-G-TEST'],true);
  assert.equal(commands.at(-1)[2].analytics_storage,'denied');assert.ok(cookies.some(value=>value.startsWith('_ga=;Max-Age=0')));assert.ok(cookies.every(value=>!value.startsWith('other=')));
  setAnalyticsPreference('yes');startAnalytics('G-TEST');assert.equal(win['ga-disable-G-TEST'],false);assert.equal(commands.at(-1)[2].analytics_storage,'granted');
  sendAnalyticsEvent('page_view');assert.equal(commands.at(-1)[2].page_referrer,'https://example.com/');assert.equal(commands.at(-1)[2].page_location,'https://jedidiahweller.com/speaking/');
  unavailable=true;setAnalyticsPreference('no');assert.equal(analyticsAllowed(),false,'opt-out holds even when storage fails');
 } finally { for(const name of names){const descriptor=original.get(name);if(descriptor)Object.defineProperty(globalThis,name,descriptor);else delete globalThis[name];} }
});
