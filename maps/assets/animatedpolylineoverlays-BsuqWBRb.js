/**
* Copyright © ePi Rational, Inc. All rights reserved.
* See undefined/maps/license.md for additional license information.
* build: Wed Jun 17 2026 15:40:47 GMT-0700 (Pacific Daylight Time)
* osu@2026.6.8 #6f29aa0
*/
import{n as e,t}from"./token-D5_eC6oK.js";var n,r;t().then(async t=>{r=await e({token:t,language:`fr`,libraries:[`full-map`,`geojson`]}),n=new r.Map(`container`);let i=(e,t)=>{let n=window.performance.now(),r=i=>{let a=(i-n)/t;e.style.strokeEnd=Math.max(0,Math.min(a,1)),a<1&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)},a=()=>{r.removeEventListener(`configuration-change`,a),r.importGeoJSON(`/mapkitjs-examples/sfo-oak.json`,{itemForFeature:(e,t)=>(t.properties&&t.properties.title&&(e.title=t.properties.title),e),styleForOverlay:e=>new r.Style({lineWidth:6,strokeOpacity:.5}),geoJSONDidComplete:function(e){n.showItems(e,{padding:new r.Padding(40,40,40,40)});for(let[e,t]of n.overlays.entries())t.style.strokeEnd=0,window.setTimeout(()=>{i(t,1700)},3e3+e*500)}})};r.addEventListener(`configuration-change`,a)});