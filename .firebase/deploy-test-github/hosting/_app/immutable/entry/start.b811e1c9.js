import{o as Fe,t as we}from"../chunks/scheduler.4b94184d.js";import{S as Be,a as Ge,I as q,g as Me,f as He,b as _e,c as le,s as H,d as ee,i as ye,e as J,P as Ve,h as et}from"../chunks/singletons.d384d5c0.js";import{u as tt}from"../chunks/parse.bee59afc.js";function nt(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function at(t){return t.split("%25").map(decodeURI).join("%25")}function rt(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const ot=["href","pathname","search","searchParams","toString","toJSON"];function it(t,o){const i=new URL(t);for(const l of ot)Object.defineProperty(i,l,{get(){return o(),t[l]},enumerable:!0,configurable:!0});return st(i),i}function st(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ct="/__data.json";function lt(t){return t.replace(/\/$/,"")+ct}function We(t){try{return JSON.parse(sessionStorage[t])}catch{}}function ze(t,o){const i=JSON.stringify(o);try{sessionStorage[t]=i}catch{}}function ft(...t){let o=5381;for(const i of t)if(typeof i=="string"){let l=i.length;for(;l;)o=o*33^i.charCodeAt(--l)}else if(ArrayBuffer.isView(i)){const l=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let u=l.length;for(;u;)o=o*33^l[--u]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}let Se=0;const fe=window.fetch;function ut(){Se+=1}function dt(){Se-=1}{let t=!1;(async()=>{t=new Error().stack.includes("check_stack_trace")})(),window.fetch=(i,l)=>{const u=i instanceof Request?i.url:i.toString(),p=new Error().stack.split(`
`),v=p.findIndex(h=>h.includes("load@")||h.includes("at load")),_=p.slice(0,v+2).join(`
`);return(t?_.includes("src/runtime/client/client.js"):Se)&&console.warn(`Loading ${u} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(i instanceof Request?i.method:(l==null?void 0:l.method)||"GET")!=="GET"&&ne.delete(xe(i)),fe(i,l)}}const ne=new Map;function pt(t,o){const i=xe(t,o),l=document.querySelector(i);if(l!=null&&l.textContent){const{body:u,...p}=JSON.parse(l.textContent),v=l.getAttribute("data-ttl");return v&&ne.set(i,{body:u,init:p,ttl:1e3*Number(v)}),Promise.resolve(new Response(u,p))}return fe(t,o)}function ht(t,o,i){if(ne.size>0){const l=xe(t,i),u=ne.get(l);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(u.body,u.init);ne.delete(l)}}return fe(o,i)}function xe(t,o){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const u=[];o.headers&&u.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&u.push(o.body),l+=`[data-hash="${ft(...u)}"]`}return l}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function mt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${_t(t).map(l=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(u)return o.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(l);if(p)return o.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!l)return;const v=l.split(/\[(.+?)\](?!\])/);return"/"+v.map((k,E)=>{if(E%2){if(k.startsWith("x+"))return ve(String.fromCharCode(parseInt(k.slice(2),16)));if(k.startsWith("u+"))return ve(String.fromCharCode(...k.slice(2).split("-").map(A=>parseInt(A,16))));const h=gt.exec(k);if(!h)throw new Error(`Invalid param: ${k}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,I,T,O]=h;return o.push({name:T,matcher:O,optional:!!N,rest:!!I,chained:I?E===1&&v[0]==="":!1}),I?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(k)}).join("")}).join("")}/?$`),params:o}}function wt(t){return!/^\([^)]+\)$/.test(t)}function _t(t){return t.slice(1).split("/").filter(wt)}function yt(t,o,i){const l={},u=t.slice(1);let p=0;for(let v=0;v<o.length;v+=1){const _=o[v];let k=u[v-p];if(_.chained&&_.rest&&p&&(k=u.slice(v-p,v+1).filter(E=>E).join("/"),p=0),k===void 0){_.rest&&(l[_.name]="");continue}if(!_.matcher||i[_.matcher](k)){l[_.name]=k;const E=o[v+1],h=u[v+1];E&&!E.rest&&E.optional&&h&&_.chained&&(p=0);continue}if(_.optional&&_.chained){p++;continue}return}if(!p)return l}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function vt({nodes:t,server_loads:o,dictionary:i,matchers:l}){const u=new Set(o);return Object.entries(i).map(([_,[k,E,h]])=>{const{pattern:N,params:I}=mt(_),T={id:_,exec:O=>{const A=N.exec(O);if(A)return yt(A,I,l)},errors:[1,...h||[]].map(O=>t[O]),layouts:[0,...E||[]].map(v),leaf:p(k)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function p(_){const k=_<0;return k&&(_=~_),[k,t[_]]}function v(_){return _===void 0?_:[u.has(_),t[_]]}}class te{constructor(o,i){this.status=o,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(o,i){this.status=o,this.location=i}}async function bt(t){var o;for(const i in t)if(typeof((o=t[i])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([l,u])=>[l,await u])));return t}function kt(t){function o(i,l){if(i)for(const u in i){if(u[0]==="_"||t.has(u))continue;const p=[...t.values()],v=Et(u,l==null?void 0:l.slice(l.lastIndexOf(".")))??`valid exports are ${p.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${u}'${l?` in ${l}`:""} (${v})`)}}return o}function Et(t,o=".js"){const i=[];if(Re.has(t)&&i.push(`+layout${o}`),Ye.has(t)&&i.push(`+page${o}`),Xe.has(t)&&i.push(`+layout.server${o}`),St.has(t)&&i.push(`+page.server${o}`),xt.has(t)&&i.push(`+server${o}`),i.length>0)return`'${t}' is a valid export in ${i.slice(0,-1).join(", ")}${i.length>1?" or ":""}${i.at(-1)}`}const Re=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Ye=new Set([...Re,"entries"]),Xe=new Set([...Re]),St=new Set([...Xe,"actions","entries"]),xt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config","entries"]),Rt=kt(Ye);function $t(t){return t.filter(o=>o!=null)}function Lt(t,o){const i=/^(moz-icon|view-source|jar):/.exec(o);i&&console.warn(`${t}: Calling \`depends('${o}')\` will throw an error in Firefox because \`${i[1]}\` is a special URI scheme`)}const be="x-sveltekit-invalidated",K=We(Be)??{},Z=We(Ge)??{};function ke(t){K[t]=ee()}function Pt(t,o){var De;const i=vt(t),l=t.nodes[0],u=t.nodes[1];l(),u();const p=document.documentElement,v=[],_=[];let k=null;const E={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},N=!1,I=!1,T=!0,O=!1,A=!1,B=!1,V=!1,F,j=(De=history.state)==null?void 0:De[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const ue=K[j];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let M,ae,W;async function $e(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),n=X(e,!0);k=null;const r=ae={},a=n&&await he(n);if(r===ae&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(M=a.props.page),F.$set(a.props)}}function Le(e){_.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=_.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Pe(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var s,c;(c=(s=_[a])==null?void 0:s.snapshot)==null||c.restore(r)})}function Ae(){ke(j),ze(Be,K),Le(j),ze(Ge,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:c=!1},f,m){return typeof e=="string"&&(e=new URL(e,Me(document))),ce({url:e,scroll:n?ee():null,keepfocus:a,redirect_chain:f,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{c&&(V=!0)},blocked:()=>{},type:"goto"})}async function Oe(e){return k={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(k=null),n))},k.promise}async function oe(...e){const r=i.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Ue(e){var a;if(e.state.error&&document.querySelector("vite-error-overlay"))return;h=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),M=e.props.page,F=new t.root({target:o,props:{...e.props,stores:H,components:_},hydrate:!0}),Pe(j);const r={from:null,to:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};E.after_navigate.forEach(s=>s(r)),I=!0}async function Y({url:e,params:n,branch:r,status:a,error:s,route:c,form:f}){let m="never";for(const d of r)(d==null?void 0:d.slash)!==void 0&&(m=d.slash);e.pathname=nt(e.pathname,m),e.search=e.search;const y={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:c},props:{constructors:$t(r).map(d=>d.node.component)}};f!==void 0&&(y.props.form=f);let w={},S=!M,x=0;for(let d=0;d<Math.max(r.length,h.branch.length);d+=1){const g=r[d],P=h.branch[d];(g==null?void 0:g.data)!==(P==null?void 0:P.data)&&(S=!0),g&&(w={...w,...g.data},S&&(y.props[`data_${x}`]=w),x+=1)}return(!h.url||e.href!==h.url.href||h.error!==s||f!==void 0&&f!==M.form||S)&&(y.props.page={error:s,params:n,route:{id:(c==null?void 0:c.id)??null},status:a,url:new URL(e),form:f??null,data:S?w:M.data}),y}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:c}){var w,S,x;let f=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await e();if(Rt(y.universal),(w=y.universal)!=null&&w.load){let $=function(...g){for(const P of g){Lt(s.id,P);const{href:U}=new URL(P,r);m.dependencies.add(U)}};const d={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(g,P)=>(m.params.add(P),g[P])}),data:(c==null?void 0:c.data)??null,url:it(r,()=>{m.url=!0}),async fetch(g,P){let U;g instanceof Request?(U=g.url,P={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...P}):U=g;const D=new URL(U,r);return $(D.href),D.origin===r.origin&&(U=D.href.slice(r.origin.length)),I?ht(U,D.href,P):pt(U,P)},setHeaders:()=>{},depends:$,parent(){return m.parent=!0,n()}};try{if(ut(),f=await y.universal.load.call(null,d)??null,f!=null&&Object.getPrototypeOf(f)!==Object.prototype)throw new Error(`a load function related to route '${s.id}' returned ${typeof f!="object"?`a ${typeof f}`:f instanceof Response?"a Response object":Array.isArray(f)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{dt()}f=f?await bt(f):null}return{node:y,loader:e,server:c,universal:(S=y.universal)!=null&&S.load?{type:"data",data:f,uses:m}:null,data:f??(c==null?void 0:c.data)??null,slash:((x=y.universal)==null?void 0:x.trailingSlash)??(c==null?void 0:c.slash)}}function je(e,n,r,a,s){if(V)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const c of a.params)if(s[c]!==h.params[c])return!0;for(const c of a.dependencies)if(v.some(f=>f(new URL(c))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((k==null?void 0:k.id)===e)return k.promise;const{errors:c,layouts:f,leaf:m}=s,y=[...f,m];c.forEach(b=>b==null?void 0:b().catch(()=>{})),y.forEach(b=>b==null?void 0:b[1]().catch(()=>{}));let w=null;const S=h.url?e!==h.url.pathname+h.url.search:!1,x=h.route?s.id!==h.route.id:!1;let $=!1;const d=y.map((b,L)=>{var z;const R=h.branch[L],C=!!(b!=null&&b[0])&&((R==null?void 0:R.loader)!==b[1]||je($,x,S,(z=R.server)==null?void 0:z.uses,a));return C&&($=!0),C});if(d.some(Boolean)){try{w=await Ke(r,d)}catch(b){return ie({status:b instanceof te?b.status:500,error:await Q(b,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(w.type==="redirect")return w}const g=w==null?void 0:w.nodes;let P=!1;const U=y.map(async(b,L)=>{var ge;if(!b)return;const R=h.branch[L],C=g==null?void 0:g[L];if((!C||C.type==="skip")&&b[1]===(R==null?void 0:R.loader)&&!je(P,x,S,(ge=R.universal)==null?void 0:ge.uses,a))return R;if(P=!0,(C==null?void 0:C.type)==="error")throw C;return de({loader:b[1],url:r,params:a,route:s,parent:async()=>{var qe;const Ne={};for(let me=0;me<L;me+=1)Object.assign(Ne,(qe=await U[me])==null?void 0:qe.data);return Ne},server_data_node:pe(C===void 0&&b[0]?{type:"skip"}:C??null,b[0]?R==null?void 0:R.server:void 0)})});for(const b of U)b.catch(()=>{});const D=[];for(let b=0;b<y.length;b+=1)if(y[b])try{D.push(await U[b])}catch(L){if(L instanceof Je)return{type:"redirect",location:L.location};let R=500,C;if(g!=null&&g.includes(L))R=L.status??R,C=L.error;else if(L instanceof te)R=L.status,C=L.body;else{if(await H.updated.check())return await G(r);C=await Q(L,{params:a,url:r,route:{id:s.id}})}const z=await Ie(b,D,c);return z?await Y({url:r,params:a,branch:D.slice(0,z.idx).concat(z.node),status:R,error:C,route:s}):await Ce(r,{id:s.id},C,R)}else D.push(void 0);return await Y({url:r,params:a,branch:D,status:200,error:null,route:s,form:n?void 0:null})}async function Ie(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let c=null;if(t.server_loads[0]===0)try{const w=await Ke(r,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;c=w.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||N)&&await G(r)}const m=await de({loader:l,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),y={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[m,y],status:e,error:n,route:null})}function X(e,n){if(ye(e,J))return;const r=se(e);for(const a of i){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:rt(s),url:e}}}function se(e){return at(e.pathname.slice(J.length)||"/")}function Te({url:e,type:n,intent:r,delta:a}){var m,y;let s=!1;const c={from:{params:h.params,route:{id:((m=h.route)==null?void 0:m.id)??null},url:h.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((y=r==null?void 0:r.route)==null?void 0:y.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(c.delta=a);const f={...c,cancel:()=>{s=!0}};return A||E.before_navigate.forEach(w=>w(f)),s?null:c}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:c,delta:f,nav_token:m={},accepted:y,blocked:w}){var U,D,b;const S=X(e,!1),x=Te({url:e,type:c,delta:f,intent:S});if(!x){w();return}const $=j;y(),A=!0,I&&H.navigating.set(x),ae=m;let d=S&&await he(S);if(!d){if(ye(e,J))return await G(e);d=await Ce(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(S==null?void 0:S.url)||e,ae!==m)return!1;if(d.type==="redirect")if(a.length>10||a.includes(e.pathname))d=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(d.location,e).href,{},[...a,e.pathname],m),!1;else((U=d.props.page)==null?void 0:U.status)>=400&&await H.updated.check()&&await G(e);if(v.length=0,V=!1,O=!0,ke($),Le($),(D=d.props.page)!=null&&D.url&&d.props.page.url.pathname!==e.pathname&&(e.pathname=(b=d.props.page)==null?void 0:b.url.pathname),s){const L=s.replaceState?0:1;if(s.state[q]=j+=L,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let R=j+1;for(;Z[R]||K[R];)delete Z[R],delete K[R],R+=1}}k=null,I?(h=d.state,d.props.page&&(d.props.page.url=e),F.$set(d.props)):Ue(d);const{activeElement:g}=document;if(await we(),T){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==g&&document.activeElement!==document.body;!r&&!P&&Ee(),T=!0,d.props.page&&(M=d.props.page),A=!1,c==="popstate"&&Pe(j),E.after_navigate.forEach(L=>L(x)),H.navigating.set(null),O=!1}async function Ce(e,n,r,a){if(e.origin===location.origin&&e.pathname===location.pathname&&!N)return await ie({status:a,error:r,url:e,route:n});if(a!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function Ze(){let e;p.addEventListener("mousemove",c=>{const f=c.target;clearTimeout(e),e=setTimeout(()=>{a(f,2)},20)});function n(c){a(c.composedPath()[0],1)}p.addEventListener("mousedown",n),p.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(c=>{for(const f of c)f.isIntersecting&&(oe(se(new URL(f.target.href))),r.unobserve(f.target))},{threshold:0});function a(c,f){const m=He(c,p);if(!m)return;const{url:y,external:w,download:S}=_e(m,J);if(w||S)return;const x=le(m);if(!x.reload)if(f<=x.preload_data){const $=X(y,!1);$&&Oe($).then(d=>{d.type==="loaded"&&d.state.error&&console.warn(`Preloading data for ${$.url.pathname} failed with the following error: ${d.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else f<=x.preload_code&&oe(se(y))}function s(){r.disconnect();for(const c of p.querySelectorAll("a")){const{url:f,external:m,download:y}=_e(c,J);if(m||y)continue;const w=le(c);w.reload||(w.preload_code===Ve.viewport&&r.observe(c),w.preload_code===Ve.eager&&oe(se(f)))}}E.after_navigate.push(s),s()}function Q(e,n){return e instanceof te?e.body:(console.warn("The next HMR update will cause the page to reload"),t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:e=>{Fe(()=>(E.after_navigate.push(e),()=>{const n=E.after_navigate.indexOf(e);E.after_navigate.splice(n,1)}))},before_navigate:e=>{Fe(()=>(E.before_navigate.push(e),()=>{const n=E.before_navigate.indexOf(e);E.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{if(I&&!O)throw new Error("Can only disable scroll handling during navigation");(O||!I)&&(T=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")v.push(e);else{const{href:n}=new URL(e,location.href);v.push(r=>r.href===n)}return $e()},invalidate_all:()=>(V=!0,$e()),preload_data:async e=>{const n=new URL(e,Me(document)),r=X(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Oe(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=h;if(!a)return;const s=await Ie(h.branch.length,r,a.errors);if(s){const c=await Y({url:n,params:h.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});h=c.state,F.$set(c.props),we().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:e.data,status:e.status}}),await we(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Ae(),!A){const s={from:{params:h.params,route:{id:((a=h.route)==null?void 0:a.id)??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};E.before_navigate.forEach(c=>c(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ae()}),(e=navigator.connection)!=null&&e.saveData||Ze(),p.addEventListener("click",n=>{var x;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=He(n.composedPath()[0],p);if(!r)return;const{url:a,external:s,target:c,download:f}=_e(r,J);if(!a)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||f)return;if(s||m.reload){Te({url:a,type:"link"})?A=!0:n.preventDefault();return}const[w,S]=a.href.split("#");if(S!==void 0&&w===location.href.split("#")[0]){if(h.url.hash===a.hash){n.preventDefault(),(x=r.ownerDocument.getElementById(S))==null||x.scrollIntoView();return}if(B=!0,ke(j),h.url=a,H.page.set({...M,url:a}),H.page.notify(),!m.replace_state)return;B=!1,n.preventDefault()}ce({url:a,scroll:m.noscroll?ee():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),p.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const c=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ye(c,J))return;const f=n.target,{keep_focus:m,noscroll:y,reload:w,replace_state:S}=le(f);if(w)return;n.preventDefault(),n.stopPropagation();const x=new FormData(f),$=a==null?void 0:a.getAttribute("name");$&&x.append($,(a==null?void 0:a.getAttribute("value"))??""),c.search=new URLSearchParams(x).toString(),ce({url:c,scroll:y?ee():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:S??c.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===j)return;const a=K[n.state[q]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){K[j]=ee(),j=n.state[q],scrollTo(a.x,a.y);return}const s=n.state[q]-j;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=n.state[q]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&H.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:c,form:f})=>{N=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=X(m,!1)||{});let y;try{const w=r.map(async($,d)=>{const g=c[d];return g!=null&&g.uses&&(g.uses=Qe(g.uses)),de({loader:t.nodes[$],url:m,params:a,route:s,parent:async()=>{const P={};for(let U=0;U<d;U+=1)Object.assign(P,(await w[U]).data);return P},server_data_node:pe(g)})}),S=await Promise.all(w),x=i.find(({id:$})=>$===s.id);if(x){const $=x.layouts;for(let d=0;d<$.length;d++)$[d]||S.splice(d,0,void 0)}y=await Y({url:m,params:a,branch:S,status:e,error:n,form:f,route:x??null})}catch(w){if(w instanceof Je){await G(new URL(w.location,location.href));return}y=await ie({status:w instanceof te?w.status:500,error:await Q(w,{url:m,params:a,route:s}),url:m,route:s})}Ue(y)}}}async function Ke(t,o){const i=new URL(t);if(i.pathname=lt(t.pathname),t.searchParams.has(be))throw new Error(`Cannot used reserved query parameter "${be}"`);i.searchParams.append(be,o.map(u=>u?"1":"0").join(""));const l=await fe(i.href);if(!l.ok)throw new te(l.status,await l.json());return new Promise(async u=>{var h;const p=new Map,v=l.body.getReader(),_=new TextDecoder;function k(N){return tt(N,{Promise:I=>new Promise((T,O)=>{p.set(I,{fulfil:T,reject:O})})})}let E="";for(;;){const{done:N,value:I}=await v.read();if(N&&!E)break;for(E+=!I&&E?`
`:_.decode(I);;){const T=E.indexOf(`
`);if(T===-1)break;const O=JSON.parse(E.slice(0,T));if(E=E.slice(T+1),O.type==="redirect")return u(O);if(O.type==="data")(h=O.nodes)==null||h.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Qe(A.uses),A.data=k(A.data))}),u(O);else if(O.type==="chunk"){const{id:A,data:B,error:V}=O,F=p.get(A);p.delete(A),V?F.reject(k(V)):F.fulfil(k(B))}}}})}function Qe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,i=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),i!==null?o.setAttribute("tabindex",i):o.removeAttribute("tabindex");const l=getSelection();if(l&&l.type!=="None"){const u=[];for(let p=0;p<l.rangeCount;p+=1)u.push(l.getRangeAt(p));setTimeout(()=>{if(l.rangeCount===u.length){for(let p=0;p<l.rangeCount;p+=1){const v=u[p],_=l.getRangeAt(p);if(v.commonAncestorContainer!==_.commonAncestorContainer||v.startContainer!==_.startContainer||v.endContainer!==_.endContainer||v.startOffset!==_.startOffset||v.endOffset!==_.endOffset)return}l.removeAllRanges()}})}}}{const t=console.warn;console.warn=function(...i){i.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(i[0])||t(...i)}}async function jt(t,o,i){o===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const l=Pt(t,o);et({client:l}),i?await l._hydrate(i):l.goto(location.href,{replaceState:!0}),l._start_router()}export{jt as start};
