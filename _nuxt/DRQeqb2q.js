import{C as M,d as v,i as f,t as w,D as x,A as d,E as N,F as C,G as I,H as $,_ as k,r as L,I as H,o as A,J,v as O,z as m,B as _,x as Y,y as h,K as y,L as b}from"./B6egRNxf.js";import{u as D}from"./SGSIRAA4.js";function V(l,e={}){return D(l,{...e,transform:M})}const X=v({__name:"typo",props:{tag:{default:"p"},size:{default:"m"},weight:{default:"400"},decoration:{default:"none"},color:{default:"#000000"},inline:{type:Boolean},block:{type:Boolean},lineClamp:{default:void 0},textAlign:{default:"left"},capitalize:{type:Boolean,default:!1},lineHeight:{default:"normal"},href:{default:void 0}},setup(l){const{tag:e,size:t,weight:n,decoration:i,color:r,inline:s,block:a,lineClamp:u,textAlign:o,capitalize:c,lineHeight:p,href:T}=l,S=f(()=>[e&&`font-${e}`,t&&`text-${t}`,n&&`font-${n}`,e==="a"&&"text-link",i&&`text-decoration-${i}`,s&&"inline",a&&"block",o&&`text-${o}`,u&&"line-clamp",c&&"capitalize",p&&`line-height-${p}`]),z=f(()=>(e==="a"&&!T&&console.warn("Href обязательный атрибут для ссылок"),e)),B=f(()=>({color:r,...u&&{"-webkit-line-clamp":u}}));return(E,P)=>(w(),x($(z.value),{class:C(S.value),style:I(B.value)},{default:d(()=>[N(E.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}}),G=k(X,[["__scopeId","data-v-408ce645"]]),g="last-mouse-coordinates",K="mouse-coordinates",F=()=>{const e=L((()=>{const o=localStorage.getItem(g);return o?JSON.parse(o):{x:0,y:0,sourceType:null}})());let t=null;const n=()=>{t=new BroadcastChannel(K),t.onmessage=o=>{e.value=o.data,localStorage.setItem(g,JSON.stringify(o.data))}},i=o=>{const c={x:o.clientX,y:o.clientY,sourceType:"mouse"};s(c)},r=o=>{if(o.touches.length>0){const c=o.touches[0],p={x:c.clientX,y:c.clientY,sourceType:"touch"};s(p)}},s=o=>{e.value=o,t==null||t.postMessage(o),localStorage.setItem(g,JSON.stringify(o))},a=()=>{n(),window.addEventListener("mousemove",i,{passive:!0}),window.addEventListener("touchstart",r,{passive:!0}),window.addEventListener("touchmove",r,{passive:!0}),t==null||t.postMessage({x:e.value.x,y:e.value.y,sourceType:e.value.sourceType})},u=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("touchstart",r),window.removeEventListener("touchmove",r),t==null||t.close(),t=null};return{coordinates:H(e),startTracking:a,stopTracking:u}},R={class:"mouse-tracker"},U={class:"coordinates"},j=v({__name:"mouse-tracker",setup(l){const{coordinates:e,startTracking:t,stopTracking:n}=F(),i=()=>{localStorage.setItem("last-mouse-coordinates",JSON.stringify(e.value)),window.open(window.location.href,"_blank")};return A(()=>{t()}),J(()=>{n()}),(r,s)=>{const a=G;return w(),O("div",R,[m(a,{tag:"h1",size:"xl",weight:"600",class:"title"},{default:d(()=>s[0]||(s[0]=[_(" Mouse Coordinates ")])),_:1}),Y("div",U,[m(a,{tag:"p",size:"l",weight:"500"},{default:d(()=>[_(" X: "+h(y(e).x),1)]),_:1}),m(a,{tag:"p",size:"l",weight:"500"},{default:d(()=>[_(" Y: "+h(y(e).y),1)]),_:1})]),m(a,{tag:"a",size:"m",weight:"500",color:"#2563eb",decoration:"underline",class:"open-tab-link",href:"/",onClick:b(i,["prevent"])},{default:d(()=>s[1]||(s[1]=[_(" Открыть в новой вкладке для проверки синхронизации ")])),_:1})])}}}),q=k(j,[["__scopeId","data-v-02e06e06"]]),Z=v({__name:"index",setup(l){return V({title:"Mouse Tracker"}),(e,t)=>{const n=q;return w(),x(n)}}});export{Z as default};
