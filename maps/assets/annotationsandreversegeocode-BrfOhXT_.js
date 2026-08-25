/**
* Copyright © ePi Rational, Inc. All rights reserved.
* See undefined/maps/license.md for additional license information.
* build: Wed Jun 17 2026 15:40:47 GMT-0700 (Pacific Daylight Time)
* osu@2026.6.8 #6f29aa0
*/
import{n as e,t}from"./token-D5_eC6oK.js";var n,r;t().then(async t=>{r=await e({token:t,language:`de`,libraries:[`map`,`services`,`annotations`]}),n=new r.Map(`container`);let i=new r.Geocoder({language:`en-US`}),a=new r.Coordinate(37.7831,-122.4041),o=new r.MarkerAnnotation(a,{color:`#4eabe9`,title:`Event`,glyphText:`🍿`}),s=new r.Coordinate(37.3349,-122.009),c=new r.MarkerAnnotation(s);c.color=`#969696`,c.title=`Work`,c.subtitle=`Apple Park`,c.selected=!0,c.glyphText=``,n.showItems([o,c]);let l;n.addEventListener(`single-tap`,e=>{l&&n?.removeAnnotation(l);let t=e.pointOnPage,a=n.convertPointOnPageToCoordinate(new DOMPoint(t?.x,t?.y));l=new r.MarkerAnnotation(a,{title:`Loading...`,color:`#c969e0`}),n.addAnnotation(l),i.reverseLookup(a,(e,t)=>{let n=!e&&t?.results?t?.results[0]:null;l.title=n&&n.name||``})})});