/**
* Copyright © ePi Rational, Inc. All rights reserved.
* See undefined/maps/license.md for additional license information.
* build: Wed Jun 17 2026 15:40:47 GMT-0700 (Pacific Daylight Time)
* osu@2026.6.8 #6f29aa0
*/
import{n as e,t}from"./token-D5_eC6oK.js";var n,r;t().then(async t=>{r=await e({token:t,language:`de`,libraries:[`map`]});let i=document.getElementById(`city-regions`),a=new r.CoordinateRegion(new r.Coordinate(37.7812,-122.44755),new r.CoordinateSpan(.1,.11)),o=new r.CoordinateRegion(new r.Coordinate(43.6451,-79.37505),new r.CoordinateSpan(.05,.11)),s=new r.CameraZoomRange(7500,12e3),c=new r.CameraZoomRange(5e3,12e3);n=new r.Map(`map-container`),n.cameraZoomRange=s,n.cameraBoundary=a.toMapRect(),n.center=new r.Coordinate(37.7812,-122.44755),n.cameraDistance=12e3;let l=`sanfrancisco`,u={sanfrancisco:{selected:()=>{n.setCameraZoomRangeAnimated(s),n.setCameraBoundaryAnimated(a.toMapRect()),n.setCameraDistanceAnimated(12e3)}},toronto:{selected:()=>{n.setCameraZoomRangeAnimated(c),n.setCameraBoundaryAnimated(o.toMapRect()),n.setCameraDistanceAnimated(12e3)}}};i.addEventListener(`change`,e=>{let t=e.target.value,n=u[t];l!==t&&(l=t,n.selected())})});