(this["webpackJsonpreact-graphical-ui-example"]=this["webpackJsonpreact-graphical-ui-example"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(10)},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(4);var r=t(0),l=t.n(r),n=t(2),i=t.n(n),o=(t(9),"_3ybTi"),s="_3-7qv",m="_1oIe4",c=["skyblue","skyblue","yellowgreen","orange","tomato","red"],u=function(e){for(var a=-Math.PI,t=a,r="",n=function(a){var t=c.length/(void 0!==e.max&&e.max>e.value?e.max:100);return c[(a*t).toFixed()]}(e.value);t-a<2*Math.PI&&t-a<2*Math.PI/(void 0!==e.max&&e.max>e.value?e.max:100)*e.value;)r.length>1&&(r+=" "),r+=70*Math.cos(t)+","+70*Math.sin(t),t+=2*Math.PI/256;return l.a.createElement("svg",{className:s,"data-testid":"GraphCircular",height:e.height,width:e.width,display:e.display,viewBox:"-110 -110 220 220",version:"1.1"},e.withGrid?l.a.createElement("polyline",{points:"-100,0 100,0",stroke:"black"}):"",e.withGrid?l.a.createElement("polyline",{points:"0,-100 0,100",stroke:"black"}):"",l.a.createElement("text",{x:"0",textAnchor:"middle",alignmentBaseline:"middle",y:"0",fontSize:"45"},e.value),l.a.createElement("circle",{cx:"0",cy:"0",r:"55",strokeWidth:"3",stroke:"lightgrey",fill:"none"}),l.a.createElement("circle",{cx:"0",cy:"0",r:"80",strokeWidth:"3",stroke:"lightgrey",fill:"none"}),l.a.createElement("polyline",{points:r,stroke:n,strokeWidth:"50",fill:"none",className:m}))};u.defaultProps={value:50,height:"200px",width:"250px",display:"inline"};var d={GraphHistogram:"_3vVDb",bar:"_2Jypg",grid:"_zHA8l",legendValue:"_14RM8"},h=function(e){var a=0;e.max?a=e.max:e.values.forEach((function(e){a=e>a?e:a}));for(var t=100/(e.max?e.max:a),r=230/e.values.length-(e.notAllreadyFull?1:0),n=100/(e.gridDivisionCount?e.gridDivisionCount:5),i=new Array,o=100-n,s=1;o>=0;o-=n,s++){var m={y:o,value:""+a*(s/(e.gridDivisionCount?e.gridDivisionCount:5))};i.push(m)}return l.a.createElement("svg",{viewBox:"-30 -20 270 130",className:d.GraphHistogramme,"data-testid":"GraphHistogramme",height:e.height,width:e.width,display:e.display},l.a.createElement("defs",null,l.a.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse"},l.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"}))),i.map((function(e,a){return l.a.createElement("g",null,l.a.createElement("line",{y1:e.y,x1:"0",x2:"230",y2:e.y,className:d.grid,key:"lh"+a}),l.a.createElement("text",{alignmentBaseline:"middle",textAnchor:"end",x:"-2",y:e.y,className:d.legendValue,key:"th"+a},e.value))})),e.values.flatMap((function(e,a){return l.a.createElement("rect",{key:"r"+a,className:d.bar,x:a*r+2,y:100-e*t,width:r-5,height:e*t,fill:"tomato"})})),l.a.createElement("polyline",{points:"0,-5 0,100 230,100",fill:"none",stroke:"black",markerStart:"url(#arrow)",markerEnd:"url(#arrow)"}))};h.defaultProps={values:[10,20,50,75,100,20,25,56,25,32,89,7,89,42,1,23],display:"inline",width:"48vw"};var v={GraphCloudPoint:"_2AwU8",points:"_bi18A",lines:"_HBWoE",grid:"_3lSVD",legendValue:"_3_LV5"},g=function(e){var a=0;e.max?a=e.max:e.values.forEach((function(e){a=e>a?e:a}));for(var t=100/(e.max?e.max:a),r=230/e.values.length-(e.notAllreadyFull?1:0),n=100/(e.gridDivisionCount?e.gridDivisionCount:5),i=new Array,o=100-n,s=1;o>=0;o-=n,s++){var m={y:o,value:""+a*(s/(e.gridDivisionCount?e.gridDivisionCount:5))};i.push(m)}var c="";return e.values.forEach((function(e,a){var l=a*r+r/2+","+(100-e*t);c+=(c.length>0?" ":"")+l})),l.a.createElement("svg",{viewBox:"-30 -20 270 130",className:v.GraphHistogramme,"data-testid":"GraphHistogramme",height:e.height,width:e.width,display:e.display},l.a.createElement("defs",null,l.a.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse"},l.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"})),l.a.createElement("marker",{id:"dot",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"5",markerHeight:"5"},l.a.createElement("circle",{cx:"5",cy:"5",r:"5",fill:"red"}))),i.map((function(e,a){return l.a.createElement("g",null,l.a.createElement("line",{y1:e.y,x1:"0",x2:"230",y2:e.y,className:v.grid,key:"l"+a}),l.a.createElement("text",{alignmentBaseline:"middle",textAnchor:"end",x:"-2",y:e.y,className:v.legendValue,key:"t"+a},e.value))})),l.a.createElement("polyline",{points:c,fill:"none",stroke:"black",markerStart:"url(#dot)",markerEnd:"url(#dot)",markerMid:"url(#dot)"}),l.a.createElement("polyline",{points:"0,-5 0,100 230,100",fill:"none",stroke:"black",markerStart:"url(#arrow)",markerEnd:"url(#arrow)"}))};g.defaultProps={values:[20,50,75,100,20,25,56,25,32,89,7,89,42,1,23,75,100,20,25,56,2],width:"48vw",display:"inline"};var p=function(e){var a=e.text;return Object(r.createElement)("div",{className:o},"Example Component: ",a)},y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{text:"react-graphical-ui \ud83d\ude04"}),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h2",null,"Circular graphs components"),l.a.createElement("h3",null,'<Circular value={47}  max={100} display="inline" withGrid={false} />'),l.a.createElement(u,{value:33}),l.a.createElement(u,{value:10}),l.a.createElement(u,{value:47}),l.a.createElement(u,{value:77}),l.a.createElement(u,{value:47,max:100,display:"inline",withGrid:!0})),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h2",null,"Histogram graphs components"),l.a.createElement("h3",null,'<Histogram values={[47,...]}  max={150} notAllreadyFull={false}  withGrid={false}  gridDivisionCount={10} display="inline" />'),l.a.createElement(h,{values:[20,80,19,63,80,99,56,8,49,19,21,69,56,12,23,25,10,80,25,56,2],notAllreadyFull:!1,whithGrid:!0,gridDivisionCount:10,max:150,display:"inline"}),l.a.createElement(h,{values:[20,80,19,63,80,99,56,8,49,19,21,69,56,12,23,25,10,80,25,56,2],notAllreadyFull:!0,whithGrid:!0,gridDivisionCount:5,max:150})),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h2",null,"CloudPoints graphs components"),l.a.createElement("h3",null,"<CloudPoints values={[125,547,451,123,40,330]} max={550}/>"),l.a.createElement(g,{values:[125,547,451,123,40,330],max:550}),l.a.createElement(g,{values:[40,31,23,40,30,12,23]})))};i.a.render(l.a.createElement(y,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.4f827196.chunk.js.map