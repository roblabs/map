/**
* Copyright © ePi Rational, Inc. All rights reserved.
* See undefined/maps/license.md for additional license information.
* build: Wed Jun 17 2026 15:40:47 GMT-0700 (Pacific Daylight Time)
* osu@2026.6.8 #6f29aa0
*/
import{n as e,t}from"./token-D5_eC6oK.js";var n;t().then(async t=>{n=await e({token:t,language:`pt`,libraries:[`services`,`look-around`]});let r=new n.PlaceLookup,i=await new Promise(e=>r.getPlace(`IEA18943388D2216C`,(t,n)=>e(n)));new n.LookAround(document.getElementById(`container`),i,{showsDialogControl:!0})});