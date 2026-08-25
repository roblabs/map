/**
* Copyright © ePi Rational, Inc. All rights reserved.
* See undefined/maps/license.md for additional license information.
* build: Wed Jun 17 2026 15:40:47 GMT-0700 (Pacific Daylight Time)
* osu@2026.6.8 #6f29aa0
*/
import{n as e,t}from"./token-D5_eC6oK.js";var n;t().then(async t=>{n=await e({token:t,language:`it`,libraries:[`map`,`services`,`annotations`]}),document.addEventListener(`change`,e=>{e.target?.tagName===`SELECT`&&e.target.setAttribute(`value`,e.target.value)}),new n.PlaceLookup().getPlace(`I63802885C8189B2B`,r)});var r=(e,t)=>{let r=t.coordinate,i=new n.CoordinateSpan(.01,.01),a=new n.CoordinateRegion(r,i),o=n.Map.ColorSchemes.Adaptive,s=new n.Map(`map`,{region:a,colorScheme:o}),c=new n.PlaceAnnotation(t,{selected:!0});s.addAnnotation(c),c.selectionAccessory=new n.PlaceSelectionAccessory;let l=document.getElementById(`detail`);new n.PlaceDetail(l,t,{colorScheme:n.PlaceDetail.ColorSchemes.Adaptive})};