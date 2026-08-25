/**
* Copyright © ePi Rational, Inc. All rights reserved.
* See undefined/maps/license.md for additional license information.
* build: Wed Jun 17 2026 15:40:47 GMT-0700 (Pacific Daylight Time)
* osu@2026.6.8 #6f29aa0
*/
import{n as e,t}from"./token-D5_eC6oK.js";var n;t().then(async t=>{n=await e({token:t,language:`fr`,libraries:[`map`,`annotations`]});let r={calloutLeftAccessoryForAnnotation:()=>{let e=document.createElement(`div`);e.className=`left-accessory-view`;let t=document.createElement(`span`);t.textContent=`⛅ ⛅`,e.appendChild(t);let n=document.createElement(`div`);return n.textContent=`73 °F`,e.appendChild(n),e},calloutRightAccessoryForAnnotation:()=>{let e=document.createElement(`a`);return e.className=`right-accessory-view`,e.href=`https://en.wikipedia.org/wiki/San_Francisco`,e.target=`_blank`,e.textContent=`ⓘ`,e}},i=new n.Coordinate(37.7749,-122.4194),a=new n.MarkerAnnotation(i,{title:`San Francisco`,subtitle:`California`,animates:!0,selected:!0,color:`#4B93E0`,callout:r});new n.Map(`container`,{annotations:[a]})});