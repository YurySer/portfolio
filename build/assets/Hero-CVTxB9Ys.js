import{r as h,R as J,j as n}from"./index-DKai6rEe.js";import{m as v}from"./proxy-BUXdHUu0.js";import{u as te,_ as U,M as re,C as ne}from"./extends-DnnGsG1I.js";function Q(i,t,a,r){return new(a||(a=Promise))(function(e,o){function c(d){try{f(r.next(d))}catch(s){o(s)}}function l(d){try{f(r.throw(d))}catch(s){o(s)}}function f(d){var s;d.done?e(d.value):(s=d.value,s instanceof a?s:new a(function(x){x(s)})).then(c,l)}f((r=r.apply(i,[])).next())})}function S(i,t){var a,r,e,o,c={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(f){return function(d){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,r&&(e=2&s[0]?r.return:s[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,s[1])).done)return e;switch(r=0,e&&(s=[2&s[0],e.value]),s[0]){case 0:case 1:e=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(e=c.trys,!((e=e.length>0&&e[e.length-1])||s[0]!==6&&s[0]!==2)){c=0;continue}if(s[0]===3&&(!e||s[1]>e[0]&&s[1]<e[3])){c.label=s[1];break}if(s[0]===6&&c.label<e[1]){c.label=e[1],e=s;break}if(e&&c.label<e[2]){c.label=e[2],c.ops.push(s);break}e[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(i,c)}catch(x){s=[6,x],r=0}finally{a=e=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([f,d])}}}function $(i){var t=typeof Symbol=="function"&&Symbol.iterator,a=t&&i[t],r=0;if(a)return a.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&r>=i.length&&(i=void 0),{value:i&&i[r++],done:!i}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function j(i,t){var a=typeof Symbol=="function"&&i[Symbol.iterator];if(!a)return i;var r,e,o=a.call(i),c=[];try{for(;(t===void 0||t-- >0)&&!(r=o.next()).done;)c.push(r.value)}catch(l){e={error:l}}finally{try{r&&!r.done&&(a=o.return)&&a.call(o)}finally{if(e)throw e.error}}return c}function _(i,t,a){if(arguments.length===2)for(var r,e=0,o=t.length;e<o;e++)!r&&e in t||(r||(r=Array.prototype.slice.call(t,0,e)),r[e]=t[e]);return i.concat(r||Array.prototype.slice.call(t))}function K(i,t,a,r,e){for(var o=[],c=5;c<arguments.length;c++)o[c-5]=arguments[c];return Q(this,void 0,void 0,function(){var l,f,d,s,x,m;return S(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),l=$(o),f=l.next(),p.label=1;case 1:if(f.done)return[3,11];switch(d=f.value,typeof d){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,ie(i,t,d,a,r,e)];case 3:return p.sent(),[3,10];case 4:return[4,X(d)];case 5:return p.sent(),[3,10];case 6:return[4,d.apply(void 0,_([i,t,a,r,e],j(o),!1))];case 7:return p.sent(),[3,10];case 8:return[4,d];case 9:p.sent(),p.label=10;case 10:return f=l.next(),[3,1];case 11:return[3,14];case 12:return s=p.sent(),x={error:s},[3,14];case 13:try{f&&!f.done&&(m=l.return)&&m.call(l)}finally{if(x)throw x.error}return[7];case 14:return[2]}})})}function ie(i,t,a,r,e,o){return Q(this,void 0,void 0,function(){var c,l;return S(this,function(f){switch(f.label){case 0:return c=i.textContent||"",l=function(d,s){var x=j(s).slice(0);return _(_([],j(d),!1),[NaN],!1).findIndex(function(m,p){return x[p]!==m})}(c,a),[4,ae(i,_(_([],j(ce(c,t,l)),!1),j(se(a,t,l)),!1),r,e,o)];case 1:return f.sent(),[2]}})})}function X(i){return Q(this,void 0,void 0,function(){return S(this,function(t){switch(t.label){case 0:return[4,new Promise(function(a){return setTimeout(a,i)})];case 1:return t.sent(),[2]}})})}function ae(i,t,a,r,e){return Q(this,void 0,void 0,function(){var o,c,l,f,d,s,x,m,p,D,W,R,L;return S(this,function(N){switch(N.label){case 0:if(o=t,e){for(c=0,l=1;l<t.length;l++)if(f=j([t[l-1],t[l]],2),d=f[0],(s=f[1]).length>d.length||s===""){c=l;break}o=t.slice(c,t.length)}N.label=1;case 1:N.trys.push([1,6,7,8]),x=$(function(B){var O,z,C,E,A,P,k;return S(this,function(g){switch(g.label){case 0:O=function(I){return S(this,function(F){switch(F.label){case 0:return[4,{op:function(G){return requestAnimationFrame(function(){return G.textContent=I})},opCode:function(G){var H=G.textContent||"";return I===""||H.length>I.length?"DELETE":"WRITING"}}];case 1:return F.sent(),[2]}})},g.label=1;case 1:g.trys.push([1,6,7,8]),z=$(B),C=z.next(),g.label=2;case 2:return C.done?[3,5]:(E=C.value,[5,O(E)]);case 3:g.sent(),g.label=4;case 4:return C=z.next(),[3,2];case 5:return[3,8];case 6:return A=g.sent(),P={error:A},[3,8];case 7:try{C&&!C.done&&(k=z.return)&&k.call(z)}finally{if(P)throw P.error}return[7];case 8:return[2]}})}(o)),m=x.next(),N.label=2;case 2:return m.done?[3,5]:(p=m.value,D=p.opCode(i)==="WRITING"?a+a*(Math.random()-.5):r+r*(Math.random()-.5),p.op(i),[4,X(D)]);case 3:N.sent(),N.label=4;case 4:return m=x.next(),[3,2];case 5:return[3,8];case 6:return W=N.sent(),R={error:W},[3,8];case 7:try{m&&!m.done&&(L=x.return)&&L.call(x)}finally{if(R)throw R.error}return[7];case 8:return[2]}})})}function se(i,t,a){var r,e;return a===void 0&&(a=0),S(this,function(o){switch(o.label){case 0:r=t(i),e=r.length,o.label=1;case 1:return a<e?[4,r.slice(0,++a).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}function ce(i,t,a){var r,e;return a===void 0&&(a=0),S(this,function(o){switch(o.label){case 0:r=t(i),e=r.length,o.label=1;case 1:return e>a?[4,r.slice(0,--e).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}var oe="index-module_type__E-SaG";(function(i,t){t===void 0&&(t={});var a=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var le=h.memo(h.forwardRef(function(i,t){var a=i.sequence,r=i.repeat,e=i.className,o=i.speed,c=o===void 0?40:o,l=i.deletionSpeed,f=i.omitDeletionAnimation,d=f!==void 0&&f,s=i.preRenderFirstString,x=s!==void 0&&s,m=i.wrapper,p=m===void 0?"span":m,D=i.splitter,W=D===void 0?function(u){return _([],j(u),!1)}:D,R=i.cursor,L=R===void 0||R,N=i.style,B=function(u,y){var w={};for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&y.indexOf(b)<0&&(w[b]=u[b]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var M=0;for(b=Object.getOwnPropertySymbols(u);M<b.length;M++)y.indexOf(b[M])<0&&Object.prototype.propertyIsEnumerable.call(u,b[M])&&(w[b[M]]=u[b[M]])}return w}(i,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),O=B["aria-label"],z=B["aria-hidden"],C=B.role;l||(l=c);var E=new Array(2).fill(40);[c,l].forEach(function(u,y){switch(typeof u){case"number":E[y]=Math.abs(u-100);break;case"object":var w=u.type,b=u.value;if(typeof b!="number")break;w==="keyStrokeDelayInMs"&&(E[y]=b)}});var A,P,k,g,I,F,G=E[0],H=E[1],V=function(u,y){y===void 0&&(y=null);var w=h.useRef(y);return h.useEffect(function(){u&&(typeof u=="function"?u(w.current):u.current=w.current)},[u]),w}(t),Y=oe;A=e?"".concat(L?Y+" ":"").concat(e):L?Y:"",P=h.useRef(function(){var u,y=a;r===1/0?u=K:typeof r=="number"&&(y=Array(1+r).fill(a).flat());var w=u?_(_([],j(y),!1),[u],!1):_([],j(y),!1);return K.apply(void 0,_([V.current,W,G,H,d],j(w),!1)),function(){V.current}}),k=h.useRef(),g=h.useRef(!1),I=h.useRef(!1),F=j(h.useState(0),2)[1],g.current&&(I.current=!0),h.useEffect(function(){return g.current||(k.current=P.current(),g.current=!0),F(function(u){return u+1}),function(){I.current&&k.current&&k.current()}},[]);var ee=p,Z=x?a.find(function(u){return typeof u=="string"})||"":null;return J.createElement(ee,{"aria-hidden":z,"aria-label":O,role:C,style:N,className:A,children:O?J.createElement("span",{"aria-hidden":"true",ref:V,children:Z}):Z,ref:O?void 0:V})}),function(i,t){return!0});const ue=()=>n.jsxs(v.div,{className:"bubbleContainer",animate:{opacity:[0,1]},transition:{duration:2},children:[n.jsx("div",{className:"bubble",children:n.jsx(le,{sequence:[1e3,"Подготволю к экзаменам по физике или математике",1e3,"Подготволю к ОГЭ и ЕГЭ по физике или математике",1e3,"Доступным языком объясню любую тему по физике или математике",1e3,"Подготовлю к олимпиадам по физике"],wrapper:"span",speed:40,deletionSpeed:60,repeat:1/0})}),n.jsx("img",{src:"/man.png",alt:""})]});var de=`#define GLSLIFY 1
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;class fe extends re{constructor(t={}){super(t),this.setValues(t),this._time={value:0},this._distort={value:.4},this._radius={value:1}}onBeforeCompile(t){t.uniforms.time=this._time,t.uniforms.radius=this._radius,t.uniforms.distort=this._distort,t.vertexShader=`
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${de}
      ${t.vertexShader}
    `,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `)}get time(){return this._time.value}set time(t){this._time.value=t}get distort(){return this._distort.value}set distort(t){this._distort.value=t}get radius(){return this._radius.value}set radius(t){this._radius.value=t}}const he=h.forwardRef(({speed:i=1,...t},a)=>{const[r]=h.useState(()=>new fe);return te(e=>r&&(r.time=e.clock.getElapsedTime()*i)),h.createElement("primitive",U({object:r,ref:a,attach:"material"},t))});function ve(i,t){const a=i+"Geometry";return h.forwardRef(({args:r,children:e,...o},c)=>{const l=h.useRef(null);return h.useImperativeHandle(c,()=>l.current),h.useLayoutEffect(()=>void(t==null?void 0:t(l.current))),h.createElement("mesh",U({ref:l},o),h.createElement(a,{attach:"geometry",args:r}),e)})}const xe=ve("sphere"),pe=()=>n.jsxs(n.Fragment,{children:[n.jsx(xe,{args:[1,100,200],scale:2.4,children:n.jsx(he,{color:"#DB8B9B",attach:"material",distort:.5,speed:2})}),n.jsx("ambientLight",{intensity:2}),n.jsx("directionalLight",{position:[1,2,3]})]}),T={initial:{x:-100,opacity:0},animate:{x:0,opacity:1,transition:{duration:1,straggerChildren:.2}}},q={initial:{y:-100,opacity:0},animate:{y:0,opacity:1,transition:{duration:1,straggerChildren:.2}}},ge=()=>n.jsxs("div",{className:"hero",children:[n.jsxs("div",{className:"hSection left",children:[n.jsxs(v.h1,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:1},className:"hTitle",children:["Добрый день!",n.jsx("br",{}),n.jsx("span",{children:"Меня зовут Юрий Сергеевич!"})]}),n.jsxs(v.div,{variants:T,initial:"initial",animate:"animate",className:"awards",children:[n.jsx(v.h2,{variants:T,children:"Профессиональный репетитор"}),n.jsx(v.p,{variants:T,children:"Занимаюсь физикой и математикой со школьниками больше 15 лет, эксперт ЕГЭ по физике, кандидат физико-математический наук, преподаю в НИЯУ МИФИ."}),n.jsxs(v.div,{variants:T,className:"awardList",children:[n.jsx(v.img,{variants:T,src:"/award1.png",alt:""}),n.jsx(v.img,{variants:T,src:"/award2.png",alt:""}),n.jsx(v.img,{variants:T,src:"/award3.png",alt:""})]})]}),n.jsx(v.a,{animate:{y:[0,5],opacity:[0,1,0]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},href:"#services",className:"scroll",children:n.jsxs("svg",{width:"50px",height:"50px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z",stroke:"white",strokeWidth:"1"}),n.jsx(v.path,{animate:{y:[0,5]},transition:{repeat:1/0,duration:4,ease:"easeInOut"},d:"M12 5V8",stroke:"white",strokeWidth:"1",strokeLinecap:"round"})]})})]}),n.jsxs("div",{className:"hSection right",children:[n.jsxs(v.div,{variants:q,initial:"initial",animate:"animate",className:"follow",children:[n.jsx(v.a,{variants:q,href:"/",children:n.jsx("img",{src:"/instagram.png",alt:""})}),n.jsx(v.a,{variants:q,href:"/",children:n.jsx("img",{src:"/facebook.png",alt:""})}),n.jsx(v.a,{variants:q,href:"/",children:n.jsx("img",{src:"/youtube.png",alt:""})}),n.jsx(v.div,{variants:q,className:"followTextContainer",children:n.jsx("div",{className:"followText",children:"FOLLOW ME"})})]}),n.jsx(ue,{}),n.jsxs(v.div,{animate:{opacity:[0,1]},transition:{duration:1},className:"certificate",children:[n.jsx("img",{src:"/certificate.png",alt:""}),"ПРОФЕССИОНАЛЬНЫЙ ",n.jsx("br",{}),"РЕПЕТИТОР",n.jsx("br",{}),"ПО ФИЗИКЕ И МАТЕМАТИКЕ"]}),n.jsx(v.a,{href:"/#contact",className:"contactLink",animate:{x:[200,0],opacity:[0,1]},transition:{duration:2},children:n.jsxs(v.div,{className:"contactButton",animate:{rotate:[0,360]},transition:{duration:10,repeat:1/0,ease:"linear"},children:[n.jsxs("svg",{viewBox:"0 0 200 200",width:"150",height:"150",children:[n.jsx("circle",{cx:"100",cy:"100",r:"90",fill:"pink"}),n.jsx("path",{id:"innerCirclePath",fill:"none",d:"M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"}),n.jsxs("text",{className:"circleText",children:[n.jsx("textPath",{href:"#innerCirclePath",children:"Сейчас"})," "]}),n.jsxs("text",{className:"circleText",children:[n.jsx("textPath",{href:"#innerCirclePath",startOffset:"30%",children:"Свяжитесь со мной"})," "]})]}),n.jsx("div",{className:"arrow",children:n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"50",height:"50",fill:"none",stroke:"black",strokeWidth:"2",children:[n.jsx("line",{x1:"6",y1:"18",x2:"18",y2:"6"}),n.jsx("polyline",{points:"9 6 18 6 18 15"})]})})]})})]}),n.jsxs("div",{className:"bg",children:[n.jsx(ne,{children:n.jsx(h.Suspense,{fallback:"loading...",children:n.jsx(pe,{})})}),n.jsx("div",{className:"hImg",children:n.jsx("img",{src:"/hero.png",alt:""})})]})]});export{ge as default};
