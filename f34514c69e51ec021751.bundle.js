!function(){"use strict";var e,t,n,o={2875:function(e,t,n){n(285),n(5306);var o=n(8402);class r extends HTMLElement{constructor(){super(),this.innerHTML='<div class="login-container"> <form method="GET" action="https://accounts.google.com/o/oauth2/v2/auth" id="login_form"> <input type="hidden" name="client_id" id="client_id" value="183140089369-730bg2gdo8g0r5useg6q0s5cf0i6l4as.apps.googleusercontent.com"> <input type="hidden" name="redirect_uri" id="redirect_uri"> <input type="hidden" name="response_type" value="token id_token"> <input type="hidden" name="login_hint" id="login_hint"> <input type="hidden" name="nonce" id="nonce"> <input type="hidden" name="scope" value="openid"> <button type="submit">Login with Google</button> </form> </div>'}connectedCallback(){this.nonceInput=this.querySelector("#nonce"),this.redirectUriInput=this.querySelector("#redirect_uri"),this.redirectUriInput.value=window.location.href.replace(/\/login|(\?.+)|(\#.+)/g,"").replace(/(\/$)/g,""),this.loginHintInput=this.querySelector("#login_hint"),this.loginForm=this.querySelector("#login_form"),this.nonceInput.value=function(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<8;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),"FederatedCredential"in window&&navigator.credentials.get({federated:{providers:["https://accounts.google.com"]},mediation:"optional"}).then((e=>{e&&"federated"==e.type&&(this.loginHintInput.value=e.id,this.loginForm.submit())}))}disconnectedCallback(){}}customElements.define("login-component",r);class i extends HTMLElement{constructor(){super(),this.inProgress=!1,this.innerHTML='<div class="container"> <div class="spinner-container"> <paper-spinner active="" id="progress"></paper-spinner> </div> <div class="group"> <h1>Volume</h1> <button id="leiser"> <span class="material-icons"> volume_down </span> </button> <button id="lauter"> <span class="material-icons"> volume_up </span> </button> </div> <div class="group"> <h1>Source</h1> <button id="quelleAlexa">Alexa</button> <button id="quelleMonitor">Monitor</button> </div> <div class="group"> <h1>Sound</h1> <button id="toggleDBFB">DBFB</button> </div> </div>'}connectedCallback(){this.abortContoller=new AbortController,this.querySelector("#lauter").addEventListener("click",(()=>this.lauterClick()),{signal:this.abortContoller.signal}),this.querySelector("#leiser").addEventListener("click",(()=>this.leiserClick()),{signal:this.abortContoller.signal}),this.querySelector("#quelleAlexa").addEventListener("click",(()=>this.quelleAlexaClick()),{signal:this.abortContoller.signal}),this.querySelector("#quelleMonitor").addEventListener("click",(()=>this.quelleMonitorClick()),{signal:this.abortContoller.signal}),this.querySelector("#toggleDBFB").addEventListener("click",(()=>this.toggleDBFBClick()),{signal:this.abortContoller.signal}),this.updateProgress(!1),n.e(148).then(n.bind(n,2148)).catch((e=>{console.error("error loading spinner",e)}))}setGoogleAccessToken(e){this.googleAccessToken=e}updateProgress(e){this.inProgress=e;let t=this.querySelector("#progress");this.querySelectorAll("button").forEach((t=>e?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled"))),t.style.display=e?"":"none"}async executeParticleFunction(e,t){try{if(this.inProgress)return;this.updateProgress(!0);let n=await this.getParticleToken(),o=new URLSearchParams;o.set("arg",t),await fetch(`https://api.particle.io/v1/devices/4e0033000651343530343432/${e}`,{method:"POST",body:o,headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/x-www-form-urlencoded"}})}finally{this.updateProgress(!1)}}async lauterClick(){await this.executeParticleFunction("control","i")}async leiserClick(){await this.executeParticleFunction("control","d")}async quelleAlexaClick(){await this.executeParticleFunction("control","v")}async quelleMonitorClick(){await this.executeParticleFunction("control","c")}async toggleDBFBClick(){await this.executeParticleFunction("control","b")}disconnectedCallback(){this.abortContoller.abort()}async getParticleToken(){if(null!=this.particleToken&&+new Date<this.particleToken.exp)return this.particleToken.token;let e=new URLSearchParams;e.set("grant_type","urn:ietf:params:oauth:grant-type:token-exchange"),e.set("subject_token",this.googleAccessToken),e.set("subject_token_type","urn:ietf:params:oauth:token-type:access_token");let t=await fetch("https://particle-google-auth-bridge.grapp.workers.dev/token",{method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}});if(!t.ok)throw new Error(`Could not acquire particle token: Status: ${t.status}`);let n=await t.json(),o=+new Date+1e3*parseInt(n.expires_in);return this.particleToken={exp:o,token:n.access_token},this.particleToken.token}}customElements.define("home-component",i),"serviceWorker"in navigator&&window.addEventListener("load",(async()=>{navigator.serviceWorker.register("./sw.js").then((e=>{})).catch((e=>{console.log("SW registration failed: ",e)}))})),async function(){let e=await async function(){const e="smarthome-webapp-token";let t=sessionStorage.getItem(e);if(null!=t){let e=JSON.parse(t);if(e.exp>+new Date)return e}let n=new URLSearchParams(window.location.hash.replace(/^#/,"")),o=n.get("access_token");if(o){history.replaceState(null,null," ");let t=await fetch(`https://oauth2.googleapis.com/tokeninfo?access_token=${o}`);if(!t.ok)throw new Error(`access token validation resulted in ${t.status}`);let i={access_token:o,exp:+new Date+1e3*parseInt(n.get("expires_in"))};if(sessionStorage.setItem(e,JSON.stringify(i)),"FederatedCredential"in window){let e=await t.json();var r=await navigator.credentials.create({federated:{id:e.sub,provider:"https://accounts.google.com"}});await navigator.credentials.store(r)}return i}return null}(),t=new o.F0(new class{async resolve(t,n,o){switch(n){case"login":return new r;default:let t=new i;return t.setGoogleAccessToken(e.access_token),t}}},new o.NP(document.getElementById("content")));t.run(),e?setTimeout((()=>{window.location.reload()}),e.exp-1e3-+new Date):t.navigate("login","Login",!0)}().catch((e=>console.error(e)))}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.m=o,e=[],i.O=function(t,n,o,r){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));s&&(e.splice(c--,1),t=o())}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"c486ff9f3f6eefb29595.bundle.js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="smarthome:",i.l=function(e,o,r,a){if(t[e])t[e].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",n+r),s.src=e),t[e]=[o];var h=function(n,o){s.onerror=s.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),n)return n(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",function(){var e={826:0};i.f.j=function(t,n){var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var a=i.p+i.u(t),s=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],s=n[1],l=n[2],c=0;for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var u=l(i);for(t&&t(n);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[a[c]]=0;return i.O(u)},n=self.webpackChunksmarthome=self.webpackChunksmarthome||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=i.O(void 0,[401],(function(){return i(2875)}));a=i.O(a)}();
//# sourceMappingURL=f34514c69e51ec021751.bundle.js.map