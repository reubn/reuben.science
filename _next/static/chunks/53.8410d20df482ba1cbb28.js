(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53,339],{27053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(87757),a=r.n(n),o=r(92137);class c extends Error{}var s=r(33068);async function i(){return(await Promise.all(["data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="].map((e=>new Promise(((t,r)=>{var n=document.createElement("img");n.onerror=e=>t(!1),n.onload=()=>t(!0),n.src=e})))))).every((e=>!!e))}const u=";base64,";class f extends Error{}const l=e=>/\.webp.*$/i.test(e.src);var p=r(71339),h=new class{constructor({webp:e=new s.f,webpSupport:t=i(),detectWebpImage:r=l}={}){this.busy=!1,this.cache={},this.webp=e,this.webpSupport=t,this.detectWebpImage=r}async decode(e){if(this.busy)throw new f("cannot decode when already busy");this.busy=!0;try{await new Promise((e=>requestAnimationFrame(e)));const t=document.createElement("canvas");return this.webp.setCanvas(t),this.webp.webpToSdl(e,e.length),this.busy=!1,t.toDataURL()}catch(t){throw this.busy=!1,t.name=f.name,t.message=`failed to decode webp image: ${t.message}`,t}}async polyfillImage(e){if(await this.webpSupport)return;const{src:t}=e;if(this.detectWebpImage(e)){if(this.cache[t])return void(e.src=this.cache[t]);try{const r=(e=>e.indexOf(u)>-1)(t)?(e=>{const t=e.indexOf(u)+u.length,r=e.substring(t),n=window.atob(r),a=n.length,o=new Uint8Array(new ArrayBuffer(a));for(let c=0;c<a;c++)o[c]=n.charCodeAt(c);return o})(t):await async function(e){return new Promise(((t,r)=>{const n=new XMLHttpRequest;n.open("GET",e),n.responseType="arraybuffer";const a=()=>{r(new c(`failed to load binary data, code "${n.status}" from "${e}"`))};n.onerror=a,n.onreadystatechange=()=>{4==n.readyState&&(200==n.status?t(new Uint8Array(n.response)):a())},n.send()}))}(t),n=await this.decode(r);e.src=this.cache[t]=n}catch(r){throw r.name=f.name,r.message=`failed to polyfill image "${t}": ${r.message}`,r}}}async polyfillDocument({document:e=window.document}={}){if(await this.webpSupport)return null;for(const r of Array.from(e.querySelectorAll("img")))try{await this.polyfillImage(r)}catch(t){throw t.name=f.name,t.message=`webp image polyfill failed for url "${r.src}": ${t}`,t}}clearCache(){this.cache={}}},d=function(){var e=(0,o.Z)(a().mark((function e(t){var r,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",h.decode(t));case 4:throw e.prev=4,e.t0=e.catch(0),e.t0.name="WebpMachineError",e.t0.message='failed to polyfill image "'.concat(src,'": ').concat(e.t0.message),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),"string"===typeof t){e.next=3;break}return e.abrupt("return",r(t));case 3:return e.next=5,h.webpSupport;case 5:if(!e.sent){e.next=7;break}return e.abrupt("return");case 7:if(!h.cache[t]){e.next=9;break}return e.abrupt("return",h.cache[t]);case 9:return e.next=11,(0,p.default)(t);case 11:return n=e.sent,e.next=14,r(n);case 14:return c=e.sent,h.cache[t]=c,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(0,o.Z)(a().mark((function e(){var t,r,n=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,r=function e(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return d.apply(void 0,n).catch((function(r){return++t<=10?new Promise((function(e){return setTimeout(e,200*t)})).then((function(){return e.apply(void 0,n)})):console.log("max tries",r)}))},e.abrupt("return",r.apply(void 0,n));case 3:case"end":return e.stop()}}),e)})))},71339:function(e,t,r){"use strict";r.r(t);var n=r(87757),a=r.n(n),o=r(92137),c=r(50911);t.default=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.loadBinaryData)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},50911:function(e,t){"use strict";var r=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function c(e){try{i(n.next(e))}catch(t){o(t)}}function s(e){try{i(n.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}i((n=n.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,n,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(s){o=[6,s],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadBinaryData=t.LoadingError=void 0;var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(Error);t.LoadingError=o,t.loadBinaryData=function(e){return n(this,void 0,void 0,(function(){return a(this,(function(t){return[2,new Promise((function(t,r){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="arraybuffer";var a=function(){r(new o('failed to load binary data, code "'+n.status+'" from "'+e+'"'))};n.onerror=a,n.onreadystatechange=function(){4==n.readyState&&(200==n.status?t(new Uint8Array(n.response)):a())},n.send()}))]}))}))}}}]);