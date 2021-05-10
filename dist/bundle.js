(()=>{var e={891:function(e){e.exports=(()=>{"use strict";var e={870:(e,t,r)=>{r.r(t),r.d(t,{createEndpoint:()=>o,expose:()=>u,proxy:()=>y,proxyMarker:()=>n,releaseProxy:()=>a,transfer:()=>g,transferHandlers:()=>c,windowEndpoint:()=>v,wrap:()=>p});const n=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),i=e=>"object"==typeof e&&null!==e||"function"==typeof e,c=new Map([["proxy",{canHandle:e=>i(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return u(e,t),[r,[r]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>i(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=self){t.addEventListener("message",(function r(n){if(!n||!n.data)return;const{id:o,type:a,path:i}=Object.assign({path:[]},n.data),c=(n.data.argumentList||[]).map(w);let p;try{const t=i.slice(0,-1).reduce(((e,t)=>e[t]),e),r=i.reduce(((e,t)=>e[t]),e);switch(a){case 0:p=r;break;case 1:t[i.slice(-1)[0]]=w(n.data.value),p=!0;break;case 2:p=r.apply(t,c);break;case 3:p=y(new r(...c));break;case 4:{const{port1:t,port2:r}=new MessageChannel;u(e,r),p=g(t,[t])}break;case 5:p=void 0}}catch(e){p={value:e,[s]:0}}Promise.resolve(p).catch((e=>({value:e,[s]:0}))).then((e=>{const[n,s]=b(e);t.postMessage(Object.assign(Object.assign({},n),{id:o}),s),5===a&&(t.removeEventListener("message",r),l(t))}))})),t.start&&t.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return d(e,[],t)}function f(e){if(e)throw new Error("Proxy has been released and is not useable")}function d(e,t=[],r=function(){}){let n=!1;const s=new Proxy(r,{get(r,o){if(f(n),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{l(e),n=!0}));if("then"===o){if(0===t.length)return{then:()=>s};const r=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return r.then.bind(r)}return d(e,[...t,o])},set(r,o,a){f(n);const[s,i]=b(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:s},i).then(w)},apply(r,a,s){f(n);const i=t[t.length-1];if(i===o)return E(e,{type:4}).then(w);if("bind"===i)return d(e,t.slice(0,-1));const[c,u]=m(s);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},u).then(w)},construct(r,o){f(n);const[a,s]=m(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},s).then(w)}});return s}function m(e){const t=e.map(b);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const h=new WeakMap;function g(e,t){return h.set(e,t),e}function y(e){return Object.assign(e,{[n]:!0})}function v(e,t=self,r="*"){return{postMessage:(t,n)=>e.postMessage(t,r,n),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,r]of c)if(r.canHandle(e)){const[n,o]=r.serialize(e);return[{type:3,name:t,value:n},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,r){return new Promise((n=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===o&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),r)}))}},162:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createDbWorker=void 0;const s=a(r(870));async function i(e){if(e.data&&"eval"===e.data.action){const t=new Int32Array(e.data.notify,0,2),r=new Uint8Array(e.data.notify,8);let n;try{n={ok:await l(e.data.request)}}catch(t){console.error("worker request error",e.data.request,t),n={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(n));r.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if("BODY"===e.tagName)return"body";const t=[];for(;e.parentElement&&"BODY"!==e.tagName;){if(e.id){t.unshift("#"+e.id);break}{let r=1,n=e;for(;n.previousElementSibling;)n=n.previousElementSibling,r++;t.unshift(e.tagName.toLowerCase()+":nth-child("+r+")")}e=e.parentElement}return t.join(" > ")}function u(e){return Object.keys(e)}async function l(e){if(console.log("dom vtable request",e),"select"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const r={};for(const n of e.columns)"selector"===n?r.selector=c(t):"parent"===n?t.parentElement&&(r.parent=t.parentElement?c(t.parentElement):null):"idx"===n||(r[n]=t[n]);return r}));if("insert"===e.type){if(!e.value.parent)throw Error('"parent" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const r=t[0];if(!e.value.tagName)throw Error("tagName must be set for inserting");const n=document.createElement(e.value.tagName);for(const t of u(e.value))if(null!==e.value[t]){if("tagName"===t||"parent"===t)continue;if("idx"===t||"selector"===t)throw Error(`${t} can't be set`);n[t]=e.value[t]}return r.appendChild(n),null}if("update"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const r=[];for(const n of u(e.value)){const o=e.value[n];if("parent"!==n){if("idx"!==n&&"selector"!==n&&o!==t[n]){if(console.log("SETTING ",n,t[n],"->",o),"tagName"===n)throw Error("can't change tagName");r.push(n)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const n of r)t[n]=e.value[n];return null}throw Error(`unknown request ${e.type}`)}s.transferHandlers.set("WORKERSQLPROXIES",{canHandle:e=>!1,serialize(e){throw Error("no")},deserialize:e=>(e.start(),s.wrap(e))}),t.createDbWorker=async function(e,t,r){const n=new Worker(t),o=s.wrap(n),a=await o.SplitFileHttpDatabase(r,e);return n.addEventListener("message",i),{db:a,worker:o,configs:e}}},432:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(162),t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(432)})()},249:(e,t,r)=>{"use strict";e.exports=r.p+"fd38fda4d9036372d1aa.wasm"},565:(e,t,r)=>{"use strict";e.exports=r.p+"257fb50677e11621f8a0.js"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var e=r(891);const t=new URL(r(565),r.b),n=new URL(r(249),r.b);!async function(){const r=await(0,e.createDbWorker)([{from:"inline",config:{serverMode:"full",url:"./usernames.db",requestChunkSize:4096}}],t.toString(),n.toString());var o,a=function(e,t=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("username");if(null!=a)if((o=a)&&isNaN(o)&&/^(?=.{5,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_]+(?<![_.])$/.test(o)){document.getElementById("app").innerHTML="<h2>Loading...</h2>";const e=await r.db.query(`select username from usernames where username = '${a}';`);Array.isArray(e)&&e.length?e[0].username==a&&(document.getElementById("app").innerHTML=`<h2>Oops, @${a} was compromised!</h2>`):document.getElementById("app").innerHTML=`<h2>Yay!, @${a} was not compromised!</h2>`}else document.getElementById("app").innerHTML="<h2>Invalid Username!</h2>"}()})()})();