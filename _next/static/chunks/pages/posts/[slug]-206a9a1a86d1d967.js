(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7922],{1529:function(e,t,n){var r={"./adventure-maps/index.mdx":[5771,5771],"./anki-controller/index.mdx":[6280,6280],"./cloudflare-analytics/index.mdx":[6454,6454],"./contour-card/index.mdx":[7479,3737,7996,7479],"./karaage-chicken/index.mdx":[2103,6111,4963],"./making-a-mapping-app/index.mdx":[8041,8041],"./making-my-memoji/index.mdx":[4672,7011,4685],"./sourdough-pizza/index.mdx":[3756,6111,5019]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=1529,e.exports=i},843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(3041)}])},3227:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9534),i=n(5893),a=n(7664),s=n(5773),o={dev:(0,s.Z)("blue"),make:(0,s.Z)("indigo"),hardware:(0,s.Z)("purple"),medicine:(0,s.Z)("pink"),food:(0,s.Z)("orange"),automation:(0,s.Z)("yellow"),outdoors:(0,s.Z)("green")},u=o,c=(Object.keys(o),n(5302)),l=function(e){var t=e.category,n=e.className,s=void 0===n?"":n;(0,r.Z)(e,["category","className"]);return(0,i.jsx)(a.Z,{href:"/categories/".concat(t),passHref:!0,children:function(e){return(0,i.jsx)("a",{className:[s,c.category].join(" "),style:{"--category-background":u[t]},children:t})}},t)}},7055:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7568),i=n(6042),a=n(9534),s=n(4051),o=n.n(s),u=n(5893),c=n(7294),l=n(3986);function d(e){return(Array.isArray(e)?e:Object.values(e)).map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})).join(", ")}var f=n(2233),m=n(9815),p=function(){if("undefined"===typeof localStorage)return{add:function(){return 1},has:function(){return 0}};var e="IMAGE_CACHE_LIST",t=JSON.parse(localStorage.getItem(e))||[],n=new Set(t);return{add:function(t){return n.add(t)&&localStorage.setItem(e,JSON.stringify((0,m.Z)(n)))},has:function(e){return n.has(e)}}}(),h=n(9526),_=function(e){e.alt;var t=e.image,n=e.sizes,r=e.onLoad,i=e.onError,a=t.resolutions,s=d(a),o=document.createElement("img");return o.width=a[1].width,o.height=a[1].height,o.props=e,o.go=function(){o.going=!0,o.src=a[1].src,o.srcset=s,o.sizes=n},o.onload=function(){return r(o)},o.onerror=function(){return i(o)},o},g=function(e){var t=e.image,s=void 0===t?{}:t,m=e.className,g=e.lazy,y=void 0===g||g,v=e.alt,x=e.aspectRatio,b=e.sizes,j=void 0===b?"min(1000px, 100vw - 1rem)":b,w=(0,a.Z)(e,["image","className","lazy","alt","aspectRatio","sizes"]),k=s.resolutions,Z=(0,c.useMemo)((function(){return d(k)}),[k]),N=(0,c.useRef)(),S=(0,c.useState)(!y),O=S[0],E=S[1],T=(0,c.useState)(k[1].src),C=T[0],D=T[1],P=(0,c.useState)(!1),R=P[0],z=P[1],L=(0,c.useState)(!0),M=L[0],F=L[1],V=p.has(C);(0,c.useEffect)((function(){F(V)}),[V]);var I=function(e){p.add(C),E(!0)},A=function(){var e=(0,r.Z)(o().mark((function e(t){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:if(t.currentSrc.endsWith(".webp")){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,Promise.all([n.e(8652),n.e(6651)]).then(n.bind(n,6651));case 8:return r=e.sent,i=r.default,e.next=12,i(polyfillSrc);case 12:a=e.sent,D(a),z(!0);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=e._ref,n=e.inView,r=(0,a.Z)(e,["_ref","inView"]),o="yes"===r["data-noscript"],l=M||O||o||R,d=y&&!o?"eager":"lazy";return(0,c.useEffect)((function(){!y||R||N.current&&N.current.props.image===s||(N.current=_({alt:v,image:s,sizes:j,onLoad:I,onError:A}))}),[y,R,s,j,N.current]),(0,c.useEffect)((function(){!n||l||N.current.going||N.current.go()}),[n,l,N.current]),(0,u.jsx)("img",(0,i.Z)({ref:t,width:k[1].width,height:k[1].height,src:l?C:"",srcSet:l?R?void 0:Z:"",sizes:j,className:[h.image,m].join(" "),style:{aspectRatio:x||"".concat(k[1].width,"/").concat(k[1].height)},loading:d,alt:v},w,r))};return y?(0,u.jsx)(f.Z,{children:H}):H({inView:!0})}},2233:function(e,t,n){"use strict";var r=n(6042),i=n(828),a=n(5893),s=n(7294),o=n(131),u=n(150);t.Z=function(e){var t=e.children,n=e.config,c=void 0===n?{}:n,l=(0,s.useState)(!1),d=l[0],f=l[1];(0,s.useEffect)((function(){d||f(!0)}),[]);var m=(0,r.Z)({triggerOnce:!0},c),p=(0,i.Z)((0,o.YD)(m),2),h=p[0],_=p[1],g=(0,i.Z)((0,o.YD)(m),2),y=g[0],v=g[1],x=_||v;return d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{ref:h,className:"".concat(u.intersectionHandle," ").concat(c.handleClass||"")}),(0,a.jsx)(t,{_ref:y,inView:x,"data-noscript":"no"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("noscript",{children:(0,a.jsx)(t,{inView:!0,"data-noscript":"yes"})}),(0,a.jsx)("span",{ref:h,className:"".concat(u.intersectionHandle," ").concat(c.handleClass||""),"data-noscript":"no"}),(0,a.jsx)(t,{_ref:y,inView:x,"data-noscript":"no"})]})}},638:function(e,t,n){"use strict";var r=n(6856).Z,i=n(337).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,s={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?s.loader=function(){return e}:"function"===typeof e?s.loader=e:"object"===typeof e&&(s=i({},s,e));!1;(s=i({},s,t)).loadableGenerated&&delete(s=i({},s,s.loadableGenerated)).loadableGenerated;if("boolean"===typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,o(n,s);delete s.ssr}return n(s)},t.noSSR=o;s(n(7294));var a=s(n(4302));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=i},4302:function(e,t,n){"use strict";var r=n(9658).Z,i=n(7222).Z,a=n(337).Z,s=n(9961).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},c=n(6319);var l=n(7294).useSyncExternalStore,d=[],f=[],m=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(s(a({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var n=function(){if(!o){var t=new h(e,i);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=function(){n();var e=u.default.useContext(c.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach((function(t){e(t)}))},i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);i.suspense&&(i.lazy=u.default.lazy(i.loader));var o=null;if(!m){var d=i.webpack?i.webpack():i.modules;d&&f.push((function(e){var t=!0,r=!1,i=void 0;try{for(var a,s=d[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var o=a.value;if(-1!==e.indexOf(o))return n()}}catch(u){r=!0,i=u}finally{try{t||null==s.return||s.return()}finally{if(r)throw i}}}))}var p=i.suspense?function(e,t){return r(),u.default.createElement(i.lazy,s(a({},e),{ref:t}))}:function(e,t){r();var n=l(o.subscribe,o.getCurrentValue,o.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),u.default.useMemo((function(){return n.loading||n.error?u.default.createElement(i.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:o.retry}):n.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",u.default.forwardRef(p)}(p,e)}function g(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return g(e,t)}))}_.preloadAll=function(){return new Promise((function(e,t){g(d).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};g(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var y=_;t.default=y},3041:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return v}});var r=n(4924),i=n(6042),a=n(9396),s=n(5893),o=n(7294),u=n(5152),c=n.n(u),l=n(2962),d=n(3227),f=n(7055),m=n(9534),p=function(e){var t=e.readingTime,n=t.mins,r=t.words,u=(0,m.Z)(e,["readingTime"]),c=(0,o.useState)(!0),l=c[0],d=c[1],f=l?(0,s.jsxs)("time",{time:n&&"PD0T0H".concat(n,"M"),"aria-label":"Reading Time",children:[n||"???"," min",1!=n&&"s"]}):(0,s.jsxs)("span",{children:[new Intl.NumberFormat(navigator.languages).format(r)," words"]});return(0,s.jsx)("span",(0,a.Z)((0,i.Z)({onClick:function(){return d(!l)}},u),{children:f}))},h=n(7391);function _(e){var t=e.slug,n=e.metadata,r=e.children,i=new Date(n.date);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.PB,{title:n.title,description:n.description,openGraph:{title:n.title,description:n.description,site_name:"reuben.science",type:"article",article:{publishedTime:i.toISOString(),authors:["Reuben"],tags:n.category},images:n.image?[{url:"https://".concat("reuben.science").concat(n.image.resolutions[1].src),width:n.image.resolutions[1].width,height:n.image.resolutions[1].height,alt:n.title}]:void 0}}),(0,s.jsx)(l.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Posts",item:"https://".concat("reuben.science","/posts")},{position:3,name:n.title,item:"https://".concat("reuben.science","/posts/").concat(t)}]}),(0,s.jsx)(l.dX,{title:n.title,datePublished:i.toISOString(),authorName:["Reuben"],publisherName:"Reuben",description:n.description}),(0,s.jsxs)("article",{className:h.post,children:[(0,s.jsx)("section",{className:h.categories,children:n.category.map((function(e){return(0,s.jsx)(d.Z,{category:e},e)}))}),(0,s.jsx)("h1",{className:h.title,children:n.title}),n.description&&(0,s.jsx)("h2",{className:h.description,children:n.description}),(0,s.jsx)(f.Z,{image:n.image,className:h.headerImage,alt:n.emoji}),(0,s.jsxs)("span",{className:h.info,children:[(0,s.jsx)("time",{dateTime:i.toLocaleDateString(),children:i.toLocaleDateString()}),(0,s.jsx)(p,{className:h.readingTime,readingTime:n.readingTime})]}),(0,s.jsx)("div",{className:h.body,children:r})]})]})}var g=JSON.parse('["adventure-maps","anki-controller","cloudflare-analytics","contour-card","karaage-chicken","making-a-mapping-app","making-my-memoji","sourdough-pizza"]').reduce((function(e,t){return(0,a.Z)((0,i.Z)({},e),(0,r.Z)({},t,c()((function(){return n(1529)("./".concat(t,"/index.mdx"))}),{suspense:!0})))}),{}),y=!0;function v(e){var t=e.slug,n=e.metadata,r=g[t];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(_,{slug:t,metadata:n,children:(0,s.jsx)(o.Suspense,{fallback:"Loading",children:(0,s.jsx)(r,{})})})})}},3986:function(e,t,n){"use strict";var r=n(7568),i=n(4051),a=n.n(i),s=n(3290),o=void 0;t.Z=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0!==o?o:(0,s.detectWebpSupport)().then((function(e){return o=e})));case 1:case"end":return e.stop()}}),e)})))},5302:function(e){e.exports={category:"styles_category__7Q41R"}},9526:function(e){e.exports={image:"styles_image__OsWFw"}},150:function(e){e.exports={intersectionHandle:"styles_intersectionHandle__yU8im"}},7391:function(e){e.exports={post:"styles_post__sCWlT",title:"styles_title__qipDA",description:"styles_description__cO8v8",headerImage:"styles_headerImage__MZEnR",categories:"styles_categories__o_jKp",info:"styles_info__nt0yU",readingTime:"styles_readingTime__q8kr0",body:"styles_body__FFHV7",key:"styles_key__iDFyC",inline:"styles_inline__BCOa3",contentFit:"styles_contentFit__N511y",spill:"styles_spill__GUy4s"}},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[1016,9774,2888,179],(function(){return t=843,e(e.s=t);var t}));var t=e.O();_N_E=t}]);