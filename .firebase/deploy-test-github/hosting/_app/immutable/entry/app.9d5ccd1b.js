import{s as K,a as A,o as C,b as M,c as D,d as Q}from"../chunks/scheduler.4b94184d.js";import{S as X,i as Y,d as k,v as Z,s as x,e as w,c as $,a as R,t as g,b as B,f as b,g as v,h as E,j as ee,k as te,l as ne,m as I,n as p,o as oe,p as se,q as re,r as O,u as P,w as j,x as S,y as L}from"../chunks/index.53cef206.js";import{b as ie}from"../chunks/environment.c65a56ab.js";const ce="modulepreload",ae=function(o,e){return new URL(o,e).href},q={},y=function(e,t,l){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(c=>{if(c=ae(c,l),c in q)return;q[c]=!0;const u=c.endsWith(".css"),a=u?'[rel="stylesheet"]':"";if(!!l)for(let _=i.length-1;_>=0;_--){const m=i[_];if(m.href===c&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${a}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":ce,u||(s.as="script",s.crossOrigin=""),s.href=c,document.head.appendChild(s),u)return new Promise((_,m)=>{s.addEventListener("load",_),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},de={},le=".svelte-kit/generated/root.svelte";function U(o){let e,t,l;var i=o[1][0];function c(a){return{props:{data:a[3],form:a[2]},$$inline:!0}}i&&(e=E(i,c(o)),o[12](e));const u={c:function(){e&&P(e.$$.fragment),t=w()},l:function(n){e&&j(e.$$.fragment,n),t=w()},m:function(n,s){e&&S(e,n,s),R(n,t,s),l=!0},p:function(n,s){const _={};if(s&8&&(_.data=n[3]),s&4&&(_.form=n[2]),s&2&&i!==(i=n[1][0])){if(e){O();const m=e;g(m.$$.fragment,1,0,()=>{L(m,1)}),B()}i?(e=E(i,c(n)),n[12](e),P(e.$$.fragment),b(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i:function(n){l||(e&&b(e.$$.fragment,n),l=!0)},o:function(n){e&&g(e.$$.fragment,n),l=!1},d:function(n){n&&v(t),o[12](null),e&&L(e,n)}};return k("SvelteRegisterBlock",{block:u,id:U.name,type:"else",source:"(44:0) {:else}",ctx:o}),u}function W(o){let e,t,l;var i=o[1][0];function c(a){return{props:{data:a[3],$$slots:{default:[z]},$$scope:{ctx:a}},$$inline:!0}}i&&(e=E(i,c(o)),o[11](e));const u={c:function(){e&&P(e.$$.fragment),t=w()},l:function(n){e&&j(e.$$.fragment,n),t=w()},m:function(n,s){e&&S(e,n,s),R(n,t,s),l=!0},p:function(n,s){const _={};if(s&8&&(_.data=n[3]),s&8215&&(_.$$scope={dirty:s,ctx:n}),s&2&&i!==(i=n[1][0])){if(e){O();const m=e;g(m.$$.fragment,1,0,()=>{L(m,1)}),B()}i?(e=E(i,c(n)),n[11](e),P(e.$$.fragment),b(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i:function(n){l||(e&&b(e.$$.fragment,n),l=!0)},o:function(n){e&&g(e.$$.fragment,n),l=!1},d:function(n){n&&v(t),o[11](null),e&&L(e,n)}};return k("SvelteRegisterBlock",{block:u,id:W.name,type:"if",source:"(40:0) {#if constructors[1]}",ctx:o}),u}function z(o){let e,t,l;var i=o[1][1];function c(a){return{props:{data:a[4],form:a[2]},$$inline:!0}}i&&(e=E(i,c(o)),o[10](e));const u={c:function(){e&&P(e.$$.fragment),t=w()},l:function(n){e&&j(e.$$.fragment,n),t=w()},m:function(n,s){e&&S(e,n,s),R(n,t,s),l=!0},p:function(n,s){const _={};if(s&16&&(_.data=n[4]),s&4&&(_.form=n[2]),s&2&&i!==(i=n[1][1])){if(e){O();const m=e;g(m.$$.fragment,1,0,()=>{L(m,1)}),B()}i?(e=E(i,c(n)),n[10](e),P(e.$$.fragment),b(e.$$.fragment,1),S(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i:function(n){l||(e&&b(e.$$.fragment,n),l=!0)},o:function(n){e&&g(e.$$.fragment,n),l=!1},d:function(n){n&&v(t),o[10](null),e&&L(e,n)}};return k("SvelteRegisterBlock",{block:u,id:z.name,type:"slot",source:"(41:1) <svelte:component this={constructors[0]} bind:this={components[0]} data={data_0}>",ctx:o}),u}function N(o){let e,t=o[6]&&T(o);const l={c:function(){e=ee("div"),t&&t.c(),this.h()},l:function(c){e=te(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var u=ne(e);t&&t.l(u),u.forEach(v),this.h()},h:function(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px"),Q(e,le,48,1,1110)},m:function(c,u){R(c,e,u),t&&t.m(e,null)},p:function(c,u){c[6]?t?t.p(c,u):(t=T(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d:function(c){c&&v(e),t&&t.d()}};return k("SvelteRegisterBlock",{block:l,id:N.name,type:"if",source:"(48:0) {#if mounted}",ctx:o}),l}function T(o){let e;const t={c:function(){e=oe(o[7])},l:function(i){e=se(i,o[7])},m:function(i,c){R(i,e,c)},p:function(i,c){c&128&&re(e,i[7])},d:function(i){i&&v(e)}};return k("SvelteRegisterBlock",{block:t,id:T.name,type:"if",source:"(50:2) {#if navigated}",ctx:o}),t}function V(o){let e,t,l,i,c;const u=[W,U],a=[];function n(m,f){return m[1][1]?0:1}e=n(o),t=a[e]=u[e](o);let s=o[5]&&N(o);const _={c:function(){t.c(),l=x(),s&&s.c(),i=w()},l:function(f){t.l(f),l=$(f),s&&s.l(f),i=w()},m:function(f,d){a[e].m(f,d),R(f,l,d),s&&s.m(f,d),R(f,i,d),c=!0},p:function(f,[d]){let h=e;e=n(f),e===h?a[e].p(f,d):(O(),g(a[h],1,1,()=>{a[h]=null}),B(),t=a[e],t?t.p(f,d):(t=a[e]=u[e](f),t.c()),b(t,1),t.m(l.parentNode,l)),f[5]?s?s.p(f,d):(s=N(f),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null)},i:function(f){c||(b(t),c=!0)},o:function(f){g(t),c=!1},d:function(f){f&&(v(l),v(i)),a[e].d(f),s&&s.d(f)}};return k("SvelteRegisterBlock",{block:_,id:V.name,type:"component",source:"",ctx:o}),_}function ue(o,e,t){let{$$slots:l={},$$scope:i}=e;Z("Root",l,[]);let{stores:c}=e,{page:u}=e,{constructors:a}=e,{components:n=[]}=e,{form:s}=e,{data_0:_=null}=e,{data_1:m=null}=e;A(c.page.notify);let f=!1,d=!1,h=null;C(()=>{const r=c.page.subscribe(()=>{f&&(t(6,d=!0),t(7,h=document.title||"untitled page"))});return t(5,f=!0),r}),o.$$.on_mount.push(function(){c===void 0&&!("stores"in e||o.$$.bound[o.$$.props.stores])&&console.warn("<Root> was created without expected prop 'stores'"),u===void 0&&!("page"in e||o.$$.bound[o.$$.props.page])&&console.warn("<Root> was created without expected prop 'page'"),a===void 0&&!("constructors"in e||o.$$.bound[o.$$.props.constructors])&&console.warn("<Root> was created without expected prop 'constructors'"),s===void 0&&!("form"in e||o.$$.bound[o.$$.props.form])&&console.warn("<Root> was created without expected prop 'form'")});const F=["stores","page","constructors","components","form","data_0","data_1"];Object.keys(e).forEach(r=>{!~F.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Root> was created with unknown prop '${r}'`)});function G(r){D[r?"unshift":"push"](()=>{n[1]=r,t(0,n)})}function H(r){D[r?"unshift":"push"](()=>{n[0]=r,t(0,n)})}function J(r){D[r?"unshift":"push"](()=>{n[0]=r,t(0,n)})}return o.$$set=r=>{"stores"in r&&t(8,c=r.stores),"page"in r&&t(9,u=r.page),"constructors"in r&&t(1,a=r.constructors),"components"in r&&t(0,n=r.components),"form"in r&&t(2,s=r.form),"data_0"in r&&t(3,_=r.data_0),"data_1"in r&&t(4,m=r.data_1)},o.$capture_state=()=>({setContext:M,afterUpdate:A,onMount:C,browser:ie,stores:c,page:u,constructors:a,components:n,form:s,data_0:_,data_1:m,mounted:f,navigated:d,title:h}),o.$inject_state=r=>{"stores"in r&&t(8,c=r.stores),"page"in r&&t(9,u=r.page),"constructors"in r&&t(1,a=r.constructors),"components"in r&&t(0,n=r.components),"form"in r&&t(2,s=r.form),"data_0"in r&&t(3,_=r.data_0),"data_1"in r&&t(4,m=r.data_1),"mounted"in r&&t(5,f=r.mounted),"navigated"in r&&t(6,d=r.navigated),"title"in r&&t(7,h=r.title)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&768&&c.page.set(u)},[n,a,s,_,m,f,d,h,c,u,G,H,J]}class pe extends X{constructor(e){super(e),Y(this,e,ue,V,K,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4}),k("SvelteRegisterComponent",{component:this,tagName:"Root",options:e,id:V.name})}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get constructors(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set constructors(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get form(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set form(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_0(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_1(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const he=[()=>y(()=>import("../nodes/0.36b1b5a0.js"),["..\\nodes\\0.36b1b5a0.js","..\\chunks\\scheduler.4b94184d.js","..\\chunks\\index.53cef206.js","..\\chunks\\stores.918715ea.js","..\\chunks\\singletons.d384d5c0.js","..\\chunks\\index.5ebb6b47.js","..\\assets\\0.12d32ebc.css"],import.meta.url),()=>y(()=>import("../nodes/1.b8102a64.js"),["..\\nodes\\1.b8102a64.js","..\\chunks\\scheduler.4b94184d.js","..\\chunks\\index.53cef206.js","..\\chunks\\stores.918715ea.js","..\\chunks\\singletons.d384d5c0.js","..\\chunks\\index.5ebb6b47.js"],import.meta.url),()=>y(()=>import("../nodes/2.afe180da.js"),["..\\nodes\\2.afe180da.js","..\\chunks\\scheduler.4b94184d.js","..\\chunks\\index.53cef206.js","..\\chunks\\index.5ebb6b47.js","..\\assets\\2.68a13af8.css"],import.meta.url),()=>y(()=>import("../nodes/3.c8a033fa.js"),["..\\nodes\\3.c8a033fa.js","..\\chunks\\environment.c65a56ab.js","..\\chunks\\scheduler.4b94184d.js","..\\chunks\\index.53cef206.js"],import.meta.url),()=>y(()=>import("../nodes/4.7ee7d260.js"),["..\\nodes\\4.7ee7d260.js","..\\chunks\\scheduler.4b94184d.js","..\\chunks\\index.53cef206.js","..\\chunks\\parse.bee59afc.js","..\\chunks\\singletons.d384d5c0.js","..\\chunks\\index.5ebb6b47.js","..\\assets\\4.53295563.css"],import.meta.url),()=>y(()=>import("../nodes/5.25bcff62.js"),["..\\nodes\\5.25bcff62.js","..\\chunks\\environment.c65a56ab.js","..\\chunks\\scheduler.4b94184d.js","..\\chunks\\index.53cef206.js","..\\assets\\5.83e29ea0.css"],import.meta.url)],we=[],ge={"/":[2],"/about":[3],"/sverdle":[-5],"/sverdle/how-to-play":[5]},be={handleError:({error:o})=>{console.error(o)}};export{ge as dictionary,be as hooks,de as matchers,he as nodes,pe as root,we as server_loads};
