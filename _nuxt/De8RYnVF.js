import{C as y,d as f,i as h,t as _,D as x,A as l,E as v,F as k,G as S,H as z,_ as w,r as B,I as T,o as C,J as M,v as N,z as c,B as d,x as $,y as m,K as g,L as I}from"./Cn9rKT29.js";import{u as E}from"./CMbX1cfW.js";function H(n,e={}){return E(n,{...e,transform:y})}const A=f({__name:"typo",props:{tag:{default:"p"},size:{default:"m"},weight:{default:"400"},decoration:{default:"none"},color:{default:"#000000"},inline:{type:Boolean},block:{type:Boolean},lineClamp:{default:void 0},textAlign:{default:"left"},capitalize:{type:Boolean,default:!1},lineHeight:{default:"normal"},href:{default:void 0}},setup(n){const e=n,t=[e.tag&&`font-${e.tag}`,e.size&&`text-${e.size}`,e.weight&&`font-${e.weight}`,e.tag==="a"&&"text-link",e.decoration&&`text-decoration-${e.decoration}`,e.inline&&"inline",e.block&&"block",e.textAlign&&`text-${e.textAlign}`,e.lineClamp&&`line-clamp-${e.lineClamp}`,e.capitalize&&"capitalize",e.lineHeight&&`line-height-${e.lineHeight}`],a=h(()=>(e.tag==="a"&&!e.href&&console.warn("Href attribute is required for anchor tags"),e.tag));return(s,u)=>(_(),x(z(a.value),{class:k(t),style:S({color:s.color})},{default:l(()=>[v(s.$slots,"default",{},void 0,!0)]),_:3},8,["style"]))}}),J=w(A,[["__scopeId","data-v-44259bf0"]]),p="last-mouse-coordinates",O="mouse-coordinates",b=()=>{const e=B((()=>{const o=localStorage.getItem(p);return o?JSON.parse(o):{x:0,y:0}})());let t=null;const a=()=>{t=new BroadcastChannel(O),t.onmessage=o=>{e.value=o.data,localStorage.setItem(p,JSON.stringify(o.data))}},s=o=>{const r={x:o.clientX,y:o.clientY};e.value=r,t==null||t.postMessage({x:r.x,y:r.y}),localStorage.setItem(p,JSON.stringify(r))},u=()=>{a(),window.addEventListener("mousemove",s),t==null||t.postMessage({x:e.value.x,y:e.value.y})},i=()=>{window.removeEventListener("mousemove",s),t==null||t.close(),t=null};return{coordinates:T(e),startTracking:u,stopTracking:i}},L={class:"mouse-tracker"},D={class:"coordinates"},V=f({__name:"mouse-tracker",setup(n){const{coordinates:e,startTracking:t,stopTracking:a}=b(),s=()=>{localStorage.setItem("last-mouse-coordinates",JSON.stringify(e.value)),window.open(window.location.href,"_blank")};return C(()=>{t()}),M(()=>{a()}),(u,i)=>{const o=J;return _(),N("div",L,[c(o,{tag:"h1",size:"xl",weight:"600",class:"title"},{default:l(()=>i[0]||(i[0]=[d(" Mouse Coordinates ")])),_:1}),$("div",D,[c(o,{tag:"p",size:"l",weight:"500"},{default:l(()=>[d(" X: "+m(g(e).x),1)]),_:1}),c(o,{tag:"p",size:"l",weight:"500"},{default:l(()=>[d(" Y: "+m(g(e).y),1)]),_:1})]),c(o,{tag:"a",size:"m",weight:"500",color:"#2563eb",decoration:"underline",class:"open-tab-link",href:"/",onClick:I(s,["prevent"])},{default:l(()=>i[1]||(i[1]=[d(" Открыть в новой вкладке для проверки синхронизации ")])),_:1})])}}}),Y=w(V,[["__scopeId","data-v-ee272e61"]]),X=f({__name:"index",setup(n){return H({title:"Mouse Tracker"}),(e,t)=>{const a=Y;return _(),x(a)}}});export{X as default};
