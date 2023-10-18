/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";const t=(t,e)=>e.some((e=>t instanceof e));let e,r;const n=new WeakMap,o=new WeakMap,i=new WeakMap,a=new WeakMap,c=new WeakMap;let s={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||i.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return f(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function u(a){return"function"==typeof a?(c=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(c)?function(...t){return c.apply(l(this),t),f(n.get(this))}:function(...t){return f(c.apply(l(this),t))}:function(t,...e){const r=c.call(l(this),t,...e);return i.set(r,t.sort?t.sort():[t]),f(r)}:(a instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),n()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));o.set(t,e)}(a),t(a,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(a,s):a);var c}function f(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(f(t.result)),n()},i=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&n.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(a.has(t))return a.get(t);const e=u(t);return e!==t&&(a.set(t,e),c.set(e,t)),e}const l=t=>c.get(t);function h(t,e,{blocked:r,upgrade:n,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),c=f(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(f(a.result),t.oldVersion,t.newVersion,f(a.transaction))})),r&&a.addEventListener("blocked",(()=>r())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const p=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],y=new Map;function v(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(y.get(e))return y.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=d.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!p.includes(r))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[r](...e),o&&i.done]))[0]};return y.set(e,i),i}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){g=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function w(){}function b(){}function E(){}var L={};u(L,a,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(N([])));I&&I!==r&&n.call(I,a)&&(L=I);var D=E.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function B(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==m(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=S(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=l(e,r,n);if("normal"===u.type){if(o=n.done?y:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=l(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(m(e)+" is not iterable")}return b.prototype=E,o(D,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:b,configurable:!0}),b.displayName=u(E,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u(t,s,"GeneratorFunction")),t.prototype=Object.create(D),t},e.awrap=function(t){return{__await:t}},j(B.prototype),u(B.prototype,c,(function(){return this})),e.AsyncIterator=B,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new B(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(D),u(D,s,"Generator"),u(D,a,(function(){return this})),u(D,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function w(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function b(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){w(i,n,o,a,c,"next",t)}function c(t){w(i,n,o,a,c,"throw",t)}a(void 0)}))}}var E;E=s,s={...E,get:(t,e,r)=>v(t,e)||E.get(t,e,r),has:(t,e)=>!!v(t,e)||E.has(t,e)},document.addEventListener("DOMContentLoaded",(function(){!function(){var t,e=document.getElementById("editor"),r=document.getElementById("saveBtn"),n=document.getElementById("status");function o(){return o=b(g().mark((function e(){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("text-editor-db",1,{upgrade:function(t){t.createObjectStore("notes",{keyPath:"id",autoIncrement:!0})}});case 2:t=e.sent;case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function i(){return(i=b(g().mark((function r(){var o,i,a,c,s;return g().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!==(o=e.value.trim())){r.next=4;break}return n.textContent="Cannot save an empty note.",r.abrupt("return");case 4:return i={content:o,timestamp:new Date},a=t.transaction("notes","readwrite"),c=a.objectStore("notes"),r.next=9,c.add(i);case 9:return s=r.sent,r.next=12,a.done;case 12:n.textContent="Note saved with ID: ".concat(s);case 13:case"end":return r.stop()}}),r)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}(),r.addEventListener("click",(function(){return i.apply(this,arguments)}))}()}))})();