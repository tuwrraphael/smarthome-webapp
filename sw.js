!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:function(t,n,e){var r=e(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,n,e){var r=e(5656),o=e(7466),i=e(1400),c=function(t){return function(n,e,c){var u,f=r(n),a=o(f.length),s=i(c,a);if(t&&e!=e){for(;a>s;)if((u=f[s++])!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},9341:function(t,n,e){"use strict";var r=e(7293);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},3671:function(t,n,e){var r=e(3099),o=e(7908),i=e(8361),c=e(7466),u=function(t){return function(n,e,u,f){r(e);var a=o(n),s=i(a),p=c(a.length),l=t?p-1:0,v=t?-1:1;if(u<2)for(;;){if(l in s){f=s[l],l+=v;break}if(l+=v,t?l<0:p<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:p>l;l+=v)l in s&&(f=e(f,s[l],l,a));return f}};t.exports={left:u(!1),right:u(!0)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},9920:function(t,n,e){var r=e(6656),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,n){for(var e=o(n),u=c.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||u(t,s,f(n,s))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},5268:function(t,n,e){var r=e(4326),o=e(7854);t.exports="process"==r(o.process)},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),c=e(8113),u=i.process,f=u&&u.versions,a=f&&f.v8;a?o=(r=a.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),c=e(1320),u=e(3505),f=e(9920),a=e(4705);t.exports=function(t,n){var e,s,p,l,v,h=t.target,d=t.global,y=t.stat;if(e=d?r:y?r[h]||u(h,{}):(r[h]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(d?s:h+(y?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},5005:function(t,n,e){var r=e(857),o=e(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:function(t){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7293),o=e(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,e){var r=e(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,n,e){var r,o,i,c=e(8536),u=e(7854),f=e(111),a=e(8880),s=e(6656),p=e(5465),l=e(6200),v=e(3501),h=u.WeakMap;if(c){var d=p.state||(p.state=new h),y=d.get,g=d.has,x=d.set;r=function(t,n){return n.facade=t,x.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var m=l("state");v[m]=!0,r=function(t,n){return n.facade=t,a(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},4705:function(t,n,e){var r=e(7293),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},8536:function(t,n,e){var r=e(7854),o=e(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:function(t,n,e){var r=e(9781),o=e(4664),i=e(9670),c=e(7593),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(5296),i=e(9114),c=e(5656),u=e(7593),f=e(6656),a=e(4664),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,e){var r=e(6656),o=e(5656),i=e(1318).indexOf,c=e(3501);t.exports=function(t,n){var e,u=o(t),f=0,a=[];for(e in u)!r(c,e)&&r(u,e)&&a.push(e);for(;n.length>f;)r(u,e=n[f++])&&(~i(a,e)||a.push(e));return a}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},3887:function(t,n,e){var r=e(5005),o=e(8006),i=e(5181),c=e(9670);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},857:function(t,n,e){var r=e(7854);t.exports=r},1320:function(t,n,e){var r=e(7854),o=e(8880),i=e(6656),c=e(3505),u=e(2788),f=e(9909),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var f,a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(f=s(e)).source||(f.source=p.join("string"==typeof n?n:""))),t!==r?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=e:o(t,n,e)):l?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=e(8880);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.10.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,e){var r=e(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},7466:function(t,n,e){var r=e(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,n,e){var r=e(111);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},5827:function(t,n,e){"use strict";var r=e(2109),o=e(3671).left,i=e(9341),c=e(7392),u=e(5268);r({target:"Array",proto:!0,forced:!i("reduce")||!u&&c>79&&c<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";e(5827);let t={code:"code-5b4d69364e94f25aae18ca6fa4d7613b6fe588a4",asset:"asset-v3",webfont:"webfont"};self.addEventListener("install",(function(n){let e=[{'revision':null,'url':'/smarthome-webapp/20.cb985fab3ed32900d0f5.css'},{'revision':null,'url':'/smarthome-webapp/6ae3ba649a68b86f49f5.bundle.js'},{'revision':null,'url':'/smarthome-webapp/7f2c8b0592132e741e2b.bundle.js'},{'revision':null,'url':'/smarthome-webapp/823c062fbdfba6bae661.bundle.js'},{'revision':null,'url':'/smarthome-webapp/880.cc02eea20b4ed03862fb.css'},{'revision':null,'url':'/smarthome-webapp/ac1715955771a57b961f.bundle.js'},{'revision':'975e0fc8634f68085587423d821959c3','url':'/smarthome-webapp/ac1715955771a57b961f.bundle.js.LICENSE.txt'},{'revision':null,'url':'/smarthome-webapp/b8ae5a6be127b0f4ced3.bundle.js'},{'revision':'cf45ffe87e4c4c9680a02e3ddbc5241b','url':'/smarthome-webapp/favicons/android-chrome-192x192.png'},{'revision':'5c8601f1aed18e021297cf2821dbf715','url':'/smarthome-webapp/favicons/android-chrome-512x512.png'},{'revision':'390304a56fd26597c25a656a39cdb5b6','url':'/smarthome-webapp/favicons/apple-touch-icon.png'},{'revision':'061f63e8fbf1d2fe82cd8bf4d46f0a0c','url':'/smarthome-webapp/favicons/browserconfig.xml'},{'revision':'224660c5a4779f79cda122520c80dd52','url':'/smarthome-webapp/favicons/favicon-16x16.png'},{'revision':'42cac27902e6a71f1b38272bc328e000','url':'/smarthome-webapp/favicons/favicon-32x32.png'},{'revision':'7d3ef0f9df926368611939f6c5dc9b75','url':'/smarthome-webapp/favicons/favicon.ico'},{'revision':'393ffb645c8557fb35b28b257f6ba31c','url':'/smarthome-webapp/favicons/mstile-144x144.png'},{'revision':'1ba9b4beec91e08c52c7fa9e446bd48e','url':'/smarthome-webapp/favicons/mstile-150x150.png'},{'revision':'b2216f0ca7fec79d582f8cb90e5bdd3c','url':'/smarthome-webapp/favicons/mstile-310x150.png'},{'revision':'1b5f80876a4df63016b91d0af0b0a6d4','url':'/smarthome-webapp/favicons/mstile-310x310.png'},{'revision':'397ed7726538de7b8b34904649f6df6c','url':'/smarthome-webapp/favicons/mstile-70x70.png'},{'revision':'87a77405cd4c5625d4eb689672ec60b6','url':'/smarthome-webapp/favicons/safari-pinned-tab.svg'},{'revision':'1bb7c452dda8cacabaffa175e3dff6a1','url':'/smarthome-webapp/favicons/site.webmanifest'},{'revision':null,'url':'/smarthome-webapp/index.e32ef5eb026e5ec3ae40.css'},{'revision':'e727f446b0a6e8de0e21c94beea2aeaf','url':'/smarthome-webapp/licenses.txt'},{'revision':'b49677584fa6d47466c8df0813a09466','url':'/smarthome-webapp/site.webmanifest'}].reduce(((t,n)=>(n.url.indexOf("favicons/")>-1?t.asset.push(n.url):t.code.push(n.url),t)),{asset:[],code:[]}),r=[{name:t.code,assets:[...e.code,"index.html"]},{name:t.asset,assets:e.asset},{name:t.webfont,assets:["https://fonts.googleapis.com/icon?family=Material+Icons","https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"]}];n.waitUntil((async()=>{let t=r.map((async t=>{let n=await caches.open(t.name);await n.addAll(t.assets)}));await Promise.all(t)})())})),self.addEventListener("activate",(n=>{n.waitUntil((async()=>{let n=await caches.keys(),e=Object.values(t),r=n.filter((t=>e.indexOf(t)<0)).map((async t=>{await caches.delete(t)}));await Promise.all(r)})())})),self.addEventListener("fetch",(function(n){if("navigate"!==n.request.mode)n.respondWith(caches.match(n.request).then((function(e){return e||(["https://fonts.gstatic.com","https://fonts.googleapis.com"].some((t=>n.request.url.startsWith(t)))&&n.waitUntil((async()=>{(await caches.open(t.webfont)).add(n.request)})()),fetch(n.request))})));else{if("GET"!==n.request.method)return;n.respondWith(caches.match("index.html",{cacheName:t.code}).then((t=>t||fetch(n.request))))}}))}()}();
//# sourceMappingURL=sw.js.map