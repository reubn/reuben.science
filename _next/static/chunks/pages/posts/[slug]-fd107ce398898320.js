(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7922],{1529:function(e,t,n){var r={"./adventure-maps/index.mdx":[1283,1283],"./anki-controller/index.mdx":[137,137],"./cloudflare-analytics/index.mdx":[6338,6338],"./contour-card/index.mdx":[5125,3737,7996,5125],"./karaage-chicken.wip/index.mdx":[5686,6154,8471],"./making-a-mapping-app/index.mdx":[2454,2454],"./making-my-memoji/index.mdx":[5474,1334,9820],"./sourdough-pizza/index.mdx":[1883,6154,6406]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=1529,e.exports=i},843:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(6074)}])},9195:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(1039),o=n(5291),a={dev:(0,o.Z)("blue"),make:(0,o.Z)("indigo"),hardware:(0,o.Z)("purple"),medicine:(0,o.Z)("pink"),food:(0,o.Z)("orange"),automation:(0,o.Z)("yellow"),outdoors:(0,o.Z)("green")},c=a,s=(Object.keys(a),n(1351));function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=function(e){var t=e.category,n=e.className,o=void 0===n?"":n;u(e,["category","className"]);return(0,r.jsx)(i.Z,{href:"/categories/".concat(t),passHref:!0,children:function(e){return(0,r.jsx)("a",{className:[o,s.category].join(" "),style:{"--category-background":c[t]},children:t})}},t)}},3741:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(4051),i=n.n(r),o=n(5893),a=n(7294),c=n(9537);function s(e){return(Array.isArray(e)?e:Object.values(e)).map((function(e){var t=e.src,n=e.width;return"".concat(t," ").concat(n,"w")})).join(", ")}var u=n(9990);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(){if("undefined"===typeof localStorage)return{add:function(){return 1},has:function(){return 0}};var e="IMAGE_CACHE_LIST",t=JSON.parse(localStorage.getItem(e))||[],n=new Set(t);return{add:function(t){return n.add(t)&&localStorage.setItem(e,JSON.stringify(f(n)))},has:function(e){return n.has(e)}}}(),p=n(9941);function m(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var h=function(e){e.alt;var t=e.image,n=e.sizes,r=e.onLoad,i=e.onError,o=t.resolutions,a=s(o),c=document.createElement("img");return c.width=o[1].width,c.height=o[1].height,c.props=e,c.go=function(){c.going=!0,c.src=o[1].src,c.srcset=a,c.sizes=n},c.onload=function(){return r(c)},c.onerror=function(){return i(c)},c},b=function(e){var t=e.image,r=void 0===t?{}:t,l=e.className,f=e.lazy,b=void 0===f||f,v=e.alt,w=e.aspectRatio,O=e.sizes,j=void 0===O?"min(1000px, 100vw - 1rem)":O,_=g(e,["image","className","lazy","alt","aspectRatio","sizes"]),x=r.resolutions,S=(0,a.useMemo)((function(){return s(x)}),[x]),A=(0,a.useRef)(),k=(0,a.useState)(!b),P=k[0],E=k[1],I=(0,a.useState)(x[1].src),N=I[0],V=I[1],C=(0,a.useState)(!1),R=C[0],T=C[1],Z=(0,a.useState)(!0),z=Z[0],D=Z[1],M=d.has(N);(0,a.useEffect)((function(){D(M)}),[M]);var F=function(e){d.add(N),E(!0)},U=function(){var e,t=(e=i().mark((function e(t){var r,o,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:if(t.currentSrc.endsWith(".webp")){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,Promise.all([n.e(8652),n.e(8170)]).then(n.bind(n,8170));case 8:return r=e.sent,o=r.default,e.next=12,o(polyfillSrc);case 12:a=e.sent,V(a),T(!0);case 15:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){m(o,r,i,a,c,"next",e)}function c(e){m(o,r,i,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),B=function(e){var t=e._ref,n=e.inView,i=g(e,["_ref","inView"]),c="yes"===i["data-noscript"],s=z||P||c||R,u=b&&!c?"eager":"lazy";return(0,a.useEffect)((function(){!b||R||A.current&&A.current.props.image===r||(A.current=h({alt:v,image:r,sizes:j,onLoad:F,onError:U}))}),[b,R,r,j,A.current]),(0,a.useEffect)((function(){!n||s||A.current.going||A.current.go()}),[n,s,A.current]),(0,o.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({ref:t,width:x[1].width,height:x[1].height,src:s?N:"",srcSet:s?R?void 0:S:"",sizes:j,className:[p.image,l].join(" "),style:{aspectRatio:w||"".concat(x[1].width,"/").concat(x[1].height)},loading:u,alt:v},_,i))};return b?(0,o.jsx)(u.Z,{children:B}):B({inView:!0})}},9990:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(131),a=n(5639);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.children,n=e.config,c=void 0===n?{}:n,l=(0,i.useState)(!1),f=l[0],d=l[1];(0,i.useEffect)((function(){f||d(!0)}),[]);var p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({triggerOnce:!0},c),m=u((0,o.YD)(p),2),y=m[0],g=m[1],h=u((0,o.YD)(p),2),b=h[0],v=h[1],w=g||v;return f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{ref:y,className:"".concat(a.intersectionHandle," ").concat(c.handleClass||"")}),(0,r.jsx)(t,{_ref:b,inView:w,"data-noscript":"no"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("noscript",{children:(0,r.jsx)(t,{inView:!0,"data-noscript":"yes"})}),(0,r.jsx)("span",{ref:y,className:"".concat(a.intersectionHandle," ").concat(c.handleClass||""),"data-noscript":"no"}),(0,r.jsx)(t,{_ref:b,inView:w,"data-noscript":"no"})]})}},6074:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return b}});var r=n(5893),i=n(7294),o=n(5152),a=n.n(o),c=n(2962),s=n(9195),u=n(3741);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=function(e){var t=e.readingTime,n=t.mins,o=t.words,a=f(e,["readingTime"]),c=(0,i.useState)(!0),s=c[0],u=c[1],d=s?(0,r.jsxs)("time",{time:n&&"PD0T0H".concat(n,"M"),"aria-label":"Reading Time",children:[n||"???"," min",1!=n&&"s"]}):(0,r.jsxs)("span",{children:[new Intl.NumberFormat(navigator.languages).format(o)," words"]});return(0,r.jsx)("span",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({onClick:function(){return u(!s)}},a,{children:d}))},p=n(8858);function m(e){var t=e.slug,n=e.metadata,i=e.children,o=new Date(n.date);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.PB,{title:n.title,description:n.description,openGraph:{title:n.title,description:n.description,site_name:"reuben.science",type:"article",article:{publishedTime:o.toISOString(),authors:["Reuben"],tags:n.category},images:n.image?[{url:"https://".concat("reuben.science").concat(n.image.resolutions[1].src),width:n.image.resolutions[1].width,height:n.image.resolutions[1].height,alt:n.title}]:void 0}}),(0,r.jsx)(c.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Posts",item:"https://".concat("reuben.science","/posts")},{position:3,name:n.title,item:"https://".concat("reuben.science","/posts/").concat(t)}]}),(0,r.jsx)(c.dX,{title:n.title,datePublished:o.toISOString(),authorName:["Reuben"],publisherName:"Reuben",description:n.description}),(0,r.jsxs)("article",{className:p.post,children:[(0,r.jsx)("section",{className:p.categories,children:n.category.map((function(e){return(0,r.jsx)(s.Z,{category:e},e)}))}),(0,r.jsx)("h1",{className:p.title,children:n.title}),n.description&&(0,r.jsx)("h2",{className:p.description,children:n.description}),(0,r.jsx)(u.Z,{image:n.image,className:p.headerImage,alt:n.emoji}),(0,r.jsxs)("span",{className:p.info,children:[(0,r.jsx)("time",{dateTime:o.toLocaleDateString(),children:o.toLocaleDateString()}),(0,r.jsx)(d,{className:p.readingTime,readingTime:n.readingTime})]}),(0,r.jsx)("div",{className:p.body,children:i})]})]})}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=JSON.parse('["adventure-maps","anki-controller","cloudflare-analytics","contour-card","karaage-chicken.wip","making-a-mapping-app","making-my-memoji","sourdough-pizza"]').reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({},e,y({},t,a()((function(){return n(1529)("./".concat(t,"/index.mdx"))}),{suspense:!0})))}),{}),h=!0;function b(e){var t=e.slug,n=e.metadata,o=g[t];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m,{slug:t,metadata:n,children:(0,r.jsx)(i.Suspense,{fallback:"Loading",children:(0,r.jsx)(o,{})})})})}},9537:function(e,t,n){"use strict";var r=n(4051),i=n.n(r),o=n(3290);function a(e,t,n,r,i,o,a){try{var c=e[o](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,i)}var c,s=void 0;t.Z=(c=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0!==s?s:(0,o.detectWebpSupport)().then((function(e){return s=e})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var i=c.apply(e,t);function o(e){a(i,n,r,o,s,"next",e)}function s(e){a(i,n,r,o,s,"throw",e)}o(void 0)}))})},1351:function(e){e.exports={category:"styles_category__7Q41R"}},9941:function(e){e.exports={image:"styles_image__OsWFw"}},5639:function(e){e.exports={intersectionHandle:"styles_intersectionHandle__yU8im"}},8858:function(e){e.exports={post:"styles_post__sCWlT",title:"styles_title__qipDA",description:"styles_description__cO8v8",headerImage:"styles_headerImage__MZEnR",categories:"styles_categories__o_jKp",info:"styles_info__nt0yU",readingTime:"styles_readingTime__q8kr0",body:"styles_body__FFHV7",key:"styles_key__iDFyC",inline:"styles_inline__BCOa3",contentFit:"styles_contentFit__N511y",spill:"styles_spill__GUy4s"}},131:function(e,t,n){"use strict";n.d(t,{YD:function(){return m}});var r=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var a=new Map,c=new WeakMap,s=0,u=void 0;function l(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(c.has(n)||(s+=1,c.set(n,s.toString())),c.get(n)):"0":e[t]);var n})).toString()}function f(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=u),"undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=function(e){var t=l(e),n=a.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},a.set(t,n)}return n}(n),c=o.id,s=o.observer,f=o.elements,d=f.get(e)||[];return f.has(e)||f.set(e,d),d.push(t),s.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(f.delete(e),s.unobserve(e)),0===f.size&&(s.disconnect(),a.delete(c))}}var d=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!==typeof e.children}r.Component;function m(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,a=t.rootMargin,c=t.root,s=t.triggerOnce,u=t.skip,l=t.initialInView,d=t.fallbackInView,p=t.onChange,m=r.useRef(),y=r.useRef(),g=r.useState({inView:!!l}),h=g[0],b=g[1];y.current=p;var v=r.useCallback((function(e){void 0!==m.current&&(m.current(),m.current=void 0),u||e&&(m.current=f(e,(function(e,t){b({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&s&&m.current&&(m.current(),m.current=void 0)}),{root:c,rootMargin:a,threshold:n,trackVisibility:o,delay:i},d))}),[Array.isArray(n)?n.toString():n,c,a,s,u,o,d,i]);r.useEffect((function(){m.current||!h.entry||s||u||b({inView:!!l})}));var w=[v,h.inView,h.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}},3290:function(e,t){"use strict";var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.detectWebpSupport=void 0,t.detectWebpSupport=function(){return n(this,void 0,void 0,(function(){var e,t;return r(this,(function(n){switch(n.label){case 0:return e=["data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="],t=function(e){return new Promise((function(t){var n=document.createElement("img");n.onerror=function(){return t(!1)},n.onload=function(){return t(!0)},n.src=e}))},[4,Promise.all(e.map(t))];case 1:return[2,n.sent().every((function(e){return!!e}))]}}))}))}}},function(e){e.O(0,[5152,9774,2888,179],(function(){return t=843,e(e.s=t);var t}));var t=e.O();_N_E=t}]);