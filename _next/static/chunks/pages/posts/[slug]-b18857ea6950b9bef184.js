(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{81529:function(e,t,r){var n={"./adventure-maps/index.mdx":[44794,794],"./anki-controller/index.mdx":[68432,432],"./cloudflare-analytics/index.mdx":[66229,229],"./contour-card/index.mdx":[76477,737,249,477],"./making-a-mapping-app/index.mdx":[98279,279],"./making-my-memoji/index.mdx":[17439,147,329],"./sourdough-pizza/index.mdx":[91467,467]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id=81529,e.exports=o},98165:function(e,t,r){var n={"./adventure-maps/index.mdx":44794,"./anki-controller/index.mdx":68432,"./cloudflare-analytics/index.mdx":66229,"./contour-card/index.mdx":76477,"./making-a-mapping-app/index.mdx":98279,"./making-my-memoji/index.mdx":17439,"./sourdough-pizza/index.mdx":91467};function o(e){var t=i(e);if(!r.m[t]){var n=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw n.code="MODULE_NOT_FOUND",n}return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,o.id=98165,e.exports=o},91758:function(e,t,r){"use strict";var n=r(85893),o=r(29451),i=r(6778),a=r(48285),c=r(46280);t.Z=function(e){var t=e.category,r=e.className,s=void 0===r?"":r;(0,o.Z)(e,["category","className"]);return(0,n.jsx)(i.Z,{href:"/categories/".concat(t),passHref:!0,children:function(e){return(0,n.jsx)("a",{className:[s,c.category].join(" "),style:{"--category-background":a.Z[t]},children:t})}},t)}},72070:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(4942),o=r(85893),i=r(87757),a=r.n(i),c=r(15861),s=r(29451),u=r(67294),l=r(79662),d=function(e){return(Array.isArray(e)?e:Object.values(e)).map((function(e){var t=e.src,r=e.width;return"".concat(t," ").concat(r,"w")})).join(", ")},f=r(78118),p=r(43058),m=function(){if("undefined"===typeof localStorage)return{add:function(){return 1},has:function(){return 0}};var e="IMAGE_CACHE_LIST",t=JSON.parse(localStorage.getItem(e))||[],r=new Set(t);return{add:function(t){return r.add(t)&&localStorage.setItem(e,JSON.stringify((0,p.Z)(r)))},has:function(e){return r.has(e)}}}(),h=r(183);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){e.alt;var t=e.image,r=e.sizes,n=e.onLoad,o=e.onError,i=t.resolutions,a=d(i),c=document.createElement("img");return c.width=i[1].width,c.height=i[1].height,c.props=e,c.go=function(){c.going=!0,c.src=i[1].src,c.srcset=a,c.sizes=r},c.onload=function(){return n(c)},c.onerror=function(){return o(c)},c},O=function(e){var t=e.image,n=void 0===t?{}:t,i=e.className,p=e.lazy,g=void 0===p||p,O=e.alt,v=e.sizes,_=void 0===v?"min(1000px, 100vw - 1rem)":v,j=(0,s.Z)(e,["image","className","lazy","alt","sizes"]),w=n.resolutions,x=(0,u.useMemo)((function(){return d(w)}),[w]),P=(0,u.useRef)(),k=(0,u.useState)(!g),S=k[0],D=k[1],E=(0,u.useState)(w[1].src),N=E[0],Z=E[1],T=(0,u.useState)(!1),C=T[0],A=T[1],L=m.has(N),M=function(e){m.add(N),D(!0)},z=function(){var e=(0,c.Z)(a().mark((function e(t){var n,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:if(t.currentSrc.endsWith(".webp")){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,Promise.all([r.e(652),r.e(53)]).then(r.bind(r,27053));case 8:return n=e.sent,o=n.default,e.next=12,o(polyfillSrc);case 12:i=e.sent,Z(i),A(!0);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){var t=e._ref,r=e.inView,a=(0,s.Z)(e,["_ref","inView"]),c="yes"===a["data-noscript"],l=L||S||c||C,d=g&&!c?"eager":"lazy";return(0,u.useEffect)((function(){!g||C||P.current&&P.current.props.image===n||(P.current=y({alt:O,image:n,sizes:_,onLoad:M,onError:z}))}),[g,C,n,_,P.current]),(0,u.useEffect)((function(){!r||l||P.current.going||P.current.go()}),[r,l,P.current]),(0,o.jsx)("img",b(b({ref:t,width:w[1].width,height:w[1].height,src:l?N:"",srcSet:l?C?void 0:x:"",sizes:_,className:[h.image,i].join(" "),style:{aspectRatio:"".concat(w[1].width,"/").concat(w[1].height)},loading:d,alt:O},j),a))};return g?(0,o.jsx)(f.Z,{children:I}):I({inView:!0})}},78118:function(e,t,r){"use strict";var n=r(85893),o=r(51267),i=r(4942),a=r(67294),c=r(70131),s=r(12380);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.children,r=e.config,l=void 0===r?{}:r,d=(0,a.useState)(!1),f=d[0],p=d[1];(0,a.useEffect)((function(){f||p(!0)}),[]);var m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({triggerOnce:!0},l),h=(0,c.YD)(m),g=(0,o.Z)(h,2),b=g[0],y=g[1],O=(0,c.YD)(m),v=(0,o.Z)(O,2),_=v[0],j=v[1],w=y||j;return f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{ref:b,className:"".concat(s.intersectionHandle," ").concat(l.handleClass||"")}),(0,n.jsx)(t,{_ref:_,inView:w,"data-noscript":"no"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("noscript",{children:(0,n.jsx)(t,{inView:!0,"data-noscript":"yes"})}),(0,n.jsx)("span",{ref:b,className:"".concat(s.intersectionHandle," ").concat(l.handleClass||""),"data-noscript":"no"}),(0,n.jsx)(t,{_ref:_,inView:w,"data-noscript":"no"})]})}},48285:function(e,t,r){"use strict";r.d(t,{D:function(){return a}});var n=r(6536),o={dev:(0,n.Z)("blue"),make:(0,n.Z)("indigo"),hardware:(0,n.Z)("purple"),medicine:(0,n.Z)("pink"),food:(0,n.Z)("orange"),automation:(0,n.Z)("yellow"),outdoors:(0,n.Z)("green")};t.Z=o;var i=Object.keys(o),a=function(e,t){return i.indexOf(e)-i.indexOf(t)}},98771:function(e,t,r){"use strict";var n=r(59713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i(i({},n),e));(n=i(i({},n),t)).loadableGenerated&&delete(n=i(i({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};c(r(67294));var a=c(r(54860));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},91083:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},54860:function(e,t,r){"use strict";var n=r(59713),o=r(34575),i=r(93913);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,d=(l=r(67294))&&l.__esModule?l:{default:l},f=r(67161),p=r(91083);var m=[],h=[],g=!1;function b(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new y(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!g&&"function"===typeof r.webpack){var i=r.webpack();h.push((function(e){var t,r=s(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=f.useSubscription(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}(b,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}O.preloadAll=function(){return new Promise((function(e,t){v(m).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return g=!0,t()};v(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var _=O;t.default=_},9095:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return _},default:function(){return w},processPost:function(){return j}});var n=r(85893),o=r(4942),i=r(5152),a=r(2962),c=r(91758),s=r(72070),u=r(29451),l=r(67294);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.readingTime,r=t.mins,o=t.words,i=(0,u.Z)(e,["readingTime"]),a=(0,l.useState)(!0),c=a[0],s=a[1],d=c?(0,n.jsxs)("time",{time:r&&"PD0T0H".concat(r,"M"),"aria-label":"Reading Time",children:[r||"???"," min",1!=r&&"s"]}):(0,n.jsxs)("span",{children:[new Intl.NumberFormat(navigator.languages).format(o)," words"]});return(0,n.jsx)("span",f(f({onClick:function(){return s(!c)}},i),{},{children:d}))},m=r(23711);function h(e){var t=e.slug,r=e.metadata,o=e.children,i=e.__HACK_ID,u=new Date(r.date);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.PB,{title:r.title,description:r.description,openGraph:{title:r.title,description:r.description,site_name:"reuben.science",type:"article",article:{publishedTime:u.toISOString(),authors:["Reuben"],tags:r.category},images:r.image?[{url:"https://".concat("reuben.science").concat(r.image.resolutions[1].src),width:r.image.resolutions[1].width,height:r.image.resolutions[1].height,alt:r.title}]:void 0}}),(0,n.jsx)(a.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Posts",item:"https://".concat("reuben.science","/posts")},{position:3,name:r.title,item:"https://".concat("reuben.science","/posts/").concat(t)}]}),(0,n.jsx)(a.dX,{title:r.title,datePublished:u.toISOString(),authorName:["Reuben"],publisherName:"Reuben",description:r.description}),(0,n.jsxs)("article",{className:m.post,children:[(0,n.jsx)("section",{className:m.categories,children:r.category.map((function(e){return(0,n.jsx)(c.Z,{category:e},e)}))}),(0,n.jsx)("h1",{className:m.title,children:r.title}),r.description&&(0,n.jsx)("h2",{className:m.description,children:r.description}),(0,n.jsx)(s.Z,{image:r.image,className:m.headerImage,alt:r.emoji}),(0,n.jsxs)("span",{className:m.info,children:[(0,n.jsx)("time",{dateTime:u.toLocaleDateString(),children:u.toLocaleDateString()}),(0,n.jsx)(p,{className:m.readingTime,readingTime:r.readingTime})]}),(0,n.jsx)("div",{className:m.body,id:i,children:o})]})]})}var g=JSON.parse('["adventure-maps","anki-controller","cloudflare-analytics","contour-card","making-a-mapping-app","making-my-memoji","sourdough-pizza"]'),b=r(48285);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=g.reduce((function(e,t){return O(O({},e),{},(0,o.Z)({},t,(0,i.default)((function(){return r(81529)("./".concat(t,"/index.mdx"))}),{loading:function(){return window.__HACK_GLOBAL?(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:window.__HACK_GLOBAL[t]||""}}):null},loadableGenerated:{webpack:function(){return[r(98165).resolve("./".concat(t,"/index.mdx"))]},modules:["posts/[slug].js -> "+"@/content/posts/".concat(t,"/index.mdx")]}})))}),{}),_=!0,j=function(e){var t=e.metadata,n=e.content,o=r(45843),i=r(43726),a=n?o(i(n)):{};return O(O({},t),{},{category:t.category.sort(b.D),date:new Date(t.date).toISOString(),readingTime:{mins:+a.text.replace("min read",""),words:+a.words}})};function w(e){var t=e.slug,r=e.metadata,o=v[t],i="HACK-POST-".concat(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{slug:t,metadata:r,__HACK_ID:i,children:(0,n.jsx)(o,{})}),null]})}},79662:function(e,t,r){"use strict";var n=r(87757),o=r.n(n),i=r(15861),a=r(43290),c=void 0;t.Z=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0!==c?c:(0,a.detectWebpSupport)().then((function(e){return c=e})));case 1:case"end":return e.stop()}}),e)})))},19808:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(9095)}])},46280:function(e){e.exports={category:"zXJC"}},183:function(e){e.exports={image:"_3CP-"}},12380:function(e){e.exports={intersectionHandle:"KTY5"}},23711:function(e){e.exports={post:"_2lHh",title:"_52nV",description:"_2zKY",headerImage:"GVgk",categories:"_3Hhg",info:"u94h",readingTime:"_2z_F",body:"s2SM",key:"_1022",inline:"_3mcd",contentFit:"_3BdG",spill:"_3vcy"}},5152:function(e,t,r){e.exports=r(98771)},45843:function(e,t,r){e.exports=r(94905)},94905:function(e){"use strict";function t(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,r){var n,o,i=0,a=0,c=e.length-1;for((r=r||{}).wordsPerMinute=r.wordsPerMinute||200,n=r.wordBound||t;n(e[a]);)a++;for(;n(e[c]);)c--;for(o=a;o<=c;){for(;o<=c&&!n(e[o]);o++);for(i++;o<=c&&n(e[o]);o++);}var s=i/r.wordsPerMinute,u=Math.round(60*s*1e3);return{text:Math.ceil(s.toFixed(2))+" min read",minutes:s,time:u,words:i}}},43726:function(e,t,r){"use strict";var n;!function(o){if("function"!==typeof i){var i=function(e){return e};i.nonNative=!0}const a=i("plaintext"),c=i("html"),s=i("comment"),u=/<(\w*)>/g,l=/<\/?([^\s\/>]+)/;function d(e,t,r){return p(e=e||"",f(t=t||[],r=r||""))}function f(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"===typeof e){let r;for(;r=u.exec(e);)t.add(r[1])}else i.nonNative||"function"!==typeof e[i.iterator]?"function"===typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:a,tag_buffer:"",depth:0,in_quote_char:""}}function p(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let r=t.allowable_tags,n=t.tag_replacement,o=t.state,i=t.tag_buffer,u=t.depth,l=t.in_quote_char,d="";for(let f=0,p=e.length;f<p;f++){let t=e[f];if(o===a)switch(t){case"<":o=c,i+=t;break;default:d+=t}else if(o===c)switch(t){case"<":if(l)break;u++;break;case">":if(l)break;if(u){u--;break}l="",o=a,i+=">",r.has(m(i))?d+=i:d+=n,i="";break;case'"':case"'":l=t===l?"":l||t,i+=t;break;case"-":"<!-"===i&&(o=s),i+=t;break;case" ":case"\n":if("<"===i){o=a,d+="< ",i="";break}i+=t;break;default:i+=t}else if(o===s)switch(t){case">":"--"==i.slice(-2)&&(o=a),i="";break;default:i+=t}}return t.state=o,t.tag_buffer=i,t.depth=u,t.in_quote_char=l,d}function m(e){let t=l.exec(e);return t?t[1].toLowerCase():null}d.init_streaming_mode=function(e,t){let r=f(e=e||[],t=t||"");return function(e){return p(e||"",r)}},void 0===(n=function(){return d}.call(t,r,t,e))||(e.exports=n)}()}},function(e){e.O(0,[774,970,888,179],(function(){return t=19808,e(e.s=t);var t}));var t=e.O();_N_E=t}]);