!function(){"use strict";var e,t,n,r,o,a={5933:function(e,t,n){n(285),n(5306);var r=n(8402);"serviceWorker"in navigator&&window.addEventListener("load",(async()=>{navigator.serviceWorker.register("./sw.js").then((e=>{})).catch((e=>{console.log("SW registration failed: ",e)}))})),async function(){let e=await async function(){const e="smarthome-webapp-token";let t=sessionStorage.getItem(e);if(null!=t){let e=JSON.parse(t);if(e.exp>+new Date)return e}let n=new URLSearchParams(window.location.hash.replace(/^#/,"")),r=n.get("access_token");if(r){history.replaceState(null,null," ");let t=await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${r}`);if(!t.ok)throw new Error(`access token validation resulted in ${t.status}`);let a={access_token:r,exp:+new Date+1e3*parseInt(n.get("expires_in"))};if(sessionStorage.setItem(e,JSON.stringify(a)),"FederatedCredential"in window){let e=await t.json();var o=await navigator.credentials.create({federated:{id:e.sub,provider:"https://accounts.google.com"}});await navigator.credentials.store(o)}return a}return null}(),t=new r.F0(new class{async resolve(t,r,o){switch(r){case"login":const{LoginComponent:t}=await n.e(20).then(n.bind(n,20));return new t;default:const{HomeComponent:r}=await n.e(880).then(n.bind(n,1880));let o=new r;return o.setGoogleAccessToken(e.access_token),o}}},new r.ne);t.run(),e?setTimeout((()=>{window.location.reload()}),e.exp-1e3-+new Date):t.navigate("login","Login",!0)}().catch((e=>console.error(e)))}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e](n,n.exports,c),n.exports}c.m=a,e=[],c.O=function(t,n,r,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(c.O).every((function(e){return c.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<a&&(a=o));i&&(e.splice(u--,1),t=r())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return{20:"75bff1217e446c1de856",880:"f51e81a73391cc6b51a1"}[e]+".bundle.js"},c.miniCssF=function(e){return e+"."+{20:"62500f2955b2cb39b526",880:"8c5b220bf6f482881a90"}[e]+".css"},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="smarthome:",c.l=function(e,r,o,a){if(t[e])t[e].push(r);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+o){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=function(n,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/smarthome-webapp/",r=function(e){return new Promise((function(t,n){var r=c.miniCssF(e),o=c.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,o.parentNode.removeChild(o),r(s)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},o={826:0},c.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{20:1,880:1}[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={826:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],s=n[2],u=0;for(r in i)c.o(i,r)&&(c.m[r]=i[r]);for(s&&s(c),t&&t(n);u<a.length;u++)o=a[u],c.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;c.O()},n=self.webpackChunksmarthome=self.webpackChunksmarthome||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var s=c.O(void 0,[401],(function(){return c(5933)}));s=c.O(s)}();
//# sourceMappingURL=29e3c3252224f9829239.bundle.js.map