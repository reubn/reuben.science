(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{5107:function(e,t,n){var r={"./apple-mail-add-alias/index.mdx":[5484,484],"./cloudflare-ddns/index.mdx":[5555,555],"./docker-add-file-to-image/index.mdx":[4949,949],"./docker-host/index.mdx":[6983,983],"./docker-run-command/index.mdx":[158,158],"./for-each-file/index.mdx":[2904,904],"./journalctl-coloured/index.mdx":[3716,716],"./mac-addr-default-gateway/index.mdx":[1625,625],"./macos-damaged/index.mdx":[1411,411],"./macos-image-sd/index.mdx":[6130,130],"./macos-install-trusted-cert/index.mdx":[1297,297],"./macos-mdns/index.mdx":[114,114],"./next-js-local-ident-name/index.mdx":[9286,286],"./ssh-copy-files/index.mdx":[3006,6],"./tcx-laps-to-geojson/index.mdx":[2695,695],"./webpack-service-workers/index.mdx":[3511,511],"./xcode-remove-file-headers/index.mdx":[5321,321]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=5107,e.exports=i},5018:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets/[slug]",function(){return n(9868)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,u=Promise,(null!=u&&"undefined"!==typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](o):o instanceof u)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i({},r,e));var o,u;var l=r=i({},r,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return n(l);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)};o(n(7294));var a=o(n(4302));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=n(7294))&&o.__esModule?o:{default:o},u=n(7161),l=n(6319);var d=[],c=[],f=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,i;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),i&&r(t,i),e}();function h(e){return function(e,t){var n=function(){if(!i){var t=new p(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=s.default.lazy(r.loader));var i=null;if(!f&&"function"===typeof r.webpack&&!r.suspense){var o=r.webpack();c.push((function(e){var t=!0,r=!1,i=void 0;try{for(var a,s=o[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return n()}}catch(l){r=!0,i=l}finally{try{t||null==s.return||s.return()}finally{if(r)throw i}}}))}var d=r.suspense?function(e,t){return s.default.createElement(r.lazy,a({},e,{ref:t}))}:function(e,t){n();var a=s.default.useContext(l.LoadableContext),o=u.useSubscription(i);return s.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),s.default.useMemo((function(){return o.loading||o.error?s.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:i.retry}):o.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return d.preload=function(){return!r.suspense&&n()},d.displayName="LoadableComponent",s.default.forwardRef(d)}(m,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){y(d).then(e,t)}))},h.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return f=!0,e()};y(c,t).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var b=h;t.default=b},9868:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return c}});var r=n(5893),i=n(5152),a=n(2962),o=n(7391);function s(e){var t=e.slug,n=e.metadata,i=e.children,s=e.__HACK_ID,u=new Date(n.date);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.PB,{title:n.title,description:n.description,openGraph:{title:n.title,description:n.description,site_name:"reuben.science",type:"article",article:{publishedTime:u.toISOString(),authors:["Reuben"]}}}),(0,r.jsx)(a.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Snippets",item:"https://".concat("reuben.science","/snippets")},{position:3,name:n.title,item:"https://".concat("reuben.science","/snippets/").concat(t)}]}),(0,r.jsx)(a.dX,{title:n.title,datePublished:u.toISOString(),authorName:["Reuben"],publisherName:"Reuben",description:n.description}),(0,r.jsxs)("article",{className:o.post,children:[(0,r.jsx)("h1",{className:o.title,children:n.title}),(0,r.jsxs)("span",{className:o.info,children:[(0,r.jsx)("time",{dateTime:u.toLocaleDateString(),children:u.toLocaleDateString()}),(0,r.jsxs)("span",{children:[n.linesOfCode||"???"," line",1!=n.linesOfCode&&"s"]})]}),(0,r.jsx)("div",{className:o.body,id:s,children:i})]})]})}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=JSON.parse('["apple-mail-add-alias","cloudflare-ddns","docker-add-file-to-image","docker-host","docker-run-command","for-each-file","journalctl-coloured","mac-addr-default-gateway","macos-damaged","macos-image-sd","macos-install-trusted-cert","macos-mdns","next-js-local-ident-name","ssh-copy-files","tcx-laps-to-geojson","webpack-service-workers","xcode-remove-file-headers"]').reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},e,u({},t,(0,i.default)((function(){return n(5107)("./".concat(t,"/index.mdx"))}),{loading:function(){return window.__HACK_GLOBAL?(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:window.__HACK_GLOBAL[t]||""}}):null}})))}),{}),d=!0;function c(e){var t=e.slug,n=e.metadata,i=l[t],a="HACK-SNIPPET-".concat(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{slug:t,metadata:n,__HACK_ID:a,children:(0,r.jsx)(i,{})}),null]})}},7391:function(e){e.exports={post:"gvWf",title:"G9-N",description:"TuQF",headerImage:"WdaQ",categories:"sr5p",info:"IFjS",readingTime:"eKN5",body:"N0v2",key:"K3pN",inline:"hnhe",contentFit:"A9Q9",spill:"IZEn"}},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[774,888,179],(function(){return t=5018,e(e.s=t);var t}));var t=e.O();_N_E=t}]);