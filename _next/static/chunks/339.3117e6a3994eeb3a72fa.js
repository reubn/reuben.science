(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{71339:function(t,n,r){"use strict";r.r(n);var e=r(87757),o=r.n(e),a=r(92137),u=r(50911);n.default=function(){var t=(0,a.Z)(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.loadBinaryData)(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},50911:function(t,n){"use strict";var r=this&&this.__extends||function(){var t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(n,r)};return function(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),e=this&&this.__awaiter||function(t,n,r,e){return new(r||(r=Promise))((function(o,a){function u(t){try{c(e.next(t))}catch(n){a(n)}}function i(t){try{c(e.throw(t))}catch(n){a(n)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(u,i)}c((e=e.apply(t,n||[])).next())}))},o=this&&this.__generator||function(t,n){var r,e,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,e&&(o=2&a[0]?e.return:a[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,a[1])).done)return o;switch(e=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,e=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=n.call(t,u)}catch(i){a=[6,i],e=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.loadBinaryData=n.LoadingError=void 0;var a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n}(Error);n.LoadingError=a,n.loadBinaryData=function(t){return e(this,void 0,void 0,(function(){return o(this,(function(n){return[2,new Promise((function(n,r){var e=new XMLHttpRequest;e.open("GET",t),e.responseType="arraybuffer";var o=function(){r(new a('failed to load binary data, code "'+e.status+'" from "'+t+'"'))};e.onerror=o,e.onreadystatechange=function(){4==e.readyState&&(200==e.status?n(new Uint8Array(e.response)):o())},e.send()}))]}))}))}}}]);