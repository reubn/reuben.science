(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{29546:function(e,t,r){"use strict";var n=r(96156),o=r(85893),i=r(87757),s=r.n(i),c=r(92137),a=r(17375),p=r(67294),u=r(79662),l=r(78118),f=r(183);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.image,n=void 0===t?{}:t,i=e.className,O=e.lazy,j=void 0===O||O,b=(0,a.Z)(e,["image","className","lazy"]),d=n.src,m=void 0===d?"":d,g=n.srcSet,h=void 0===g?"":g,v=n.size,_=(v=void 0===v?{}:v).width,w=v.height,P=n.id,x=(0,p.useState)(!1),Z=x[0],D=x[1],S=(0,p.useState)(m),k=S[0],E=S[1],N=function(){var e=(0,c.Z)(s().mark((function e(){var t,n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:if((t=document.getElementById(P).currentSrc).endsWith(".webp")){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,Promise.all([r.e(652),r.e(53)]).then(r.bind(r,27053));case 9:return n=e.sent,o=n.default,e.t0=E,e.next=14,o(t);case 14:e.t1=e.sent,(0,e.t0)(e.t1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){var t=e._ref,r=e.inView,n=(0,a.Z)(e,["_ref","inView"]);return(0,o.jsx)("img",y(y({ref:t,id:P,onLoad:function(){return D(!0)},onError:function(){return r&&N()},src:r?k:"",srcSet:r?k===m?h:void 0:"",width:_,height:w,className:[f.image,i,Z?"":f.loading].join(" "),loading:"lazy"},b),n))};return j?(0,o.jsx)(l.Z,{children:I}):I({inView:!0})}},78118:function(e,t,r){"use strict";var n=r(85893),o=r(96156),i=r(13391),s=r(67294),c=r(70131);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.children,r=e.config,p=(0,s.useState)(!1),u=p[0],l=p[1];(0,s.useEffect)((function(){u||l(!0)}),[]);var f=(0,c.YD)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({triggerOnce:!0,rootMargin:"200px 0px"},r)),O=(0,i.Z)(f,2),y=O[0],j=O[1];return u?(0,n.jsx)(t,{_ref:y,inView:j,"data-noscript":"no"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("noscript",{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-noscript="no"]{display: none!important}'}}),(0,n.jsx)(t,{_ref:y,inView:!0,"data-noscript":"yes"})]}),(0,n.jsx)(t,{_ref:y,inView:j,"data-noscript":"no"})]})}},50651:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(96156),o=r(85893),i=r(17375),s=r(53373),c=r(6778),a=r(29546),p=r(92403);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.slug,r=e.displayImage,n=e.metadata,s=n.title,u=n.description,f=n.emoji,O=n.readingTime,y=n.image,j=(0,i.Z)(e,["slug","displayImage","metadata"]);return(0,o.jsx)(c.Z,{href:"/posts/".concat(t),passHref:!0,children:function(e){return(0,o.jsx)("a",l(l({},j),{},{children:(0,o.jsxs)("div",{className:p.post,children:[r&&y?(0,o.jsx)(a.Z,{image:y}):null,(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:p.emoji,children:f}),(0,o.jsx)("p",{className:p.title,children:s})]}),(0,o.jsxs)("p",{className:p.description,children:[u||""," ",(0,o.jsxs)("span",{className:p.readingTime,children:[" \u2022 ",O.mins||"???"," min",1!=O.mins&&"s"]})]})]})}))}},t)},O=r(2469);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.posts,r=e.fallback,n=void 0===r?null:r,c=e.displayImage,a=(0,i.Z)(e,["posts","fallback","displayImage"]);return t.length?(0,o.jsx)(s.Z,j(j({heading:"Recent Posts",moreHref:"/posts",moreAria:"More Posts"},a),{},{children:(0,o.jsx)("section",{className:O.posts,children:t.map((function(e){return(0,o.jsx)(f,j({displayImage:c},e),e.slug)}))})})):n}},53373:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(96156),o=r(85893),i=r(17375),s=r(67294),c=r(45697),a=r.n(c);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=(0,s.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,i=void 0===o?24:o,c=u(e,["color","size"]);return s.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),s.createElement("polyline",{points:"9 18 15 12 9 6"}))}));l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="ChevronRight";var f=l,O=r(6778),y=r(47258);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.heading,r=e.moreHref,n=e.moreAria,s=e.children,c=(0,i.Z)(e,["heading","moreHref","moreAria","children"]);return(0,o.jsxs)("span",b(b({className:y.section},c),{},{children:[t?(0,o.jsx)(O.Z,{href:r,children:(0,o.jsxs)("a",{className:y.heading,children:[t," ",(0,o.jsx)(f,{className:y.more,"aria-label":n})]})}):null,s]}))}},18630:function(e,t,r){"use strict";var n=r(96156),o=r(17375);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.metadata,r=t.date,n=(0,o.Z)(t,["date"]);return s(s({},(0,o.Z)(e,["metadata"])),{},{metadata:s(s({},n),{},{date:new Date(r)})})}},79662:function(e,t,r){"use strict";var n=r(87757),o=r.n(n),i=r(92137),s=r(43290),c=void 0;t.Z=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0!==c?c:(0,s.detectWebpSupport)().then((function(e){return c=e})));case 1:case"end":return e.stop()}}),e)})))},183:function(e){e.exports={image:"styles_image__1yRQR",loading:"styles_loading__Jmk8v"}},92403:function(e){e.exports={post:"styles_post__RqTCO",title:"styles_title__2svP8",emoji:"styles_emoji__2jMHX",description:"styles_description__Mmh8A",readingTime:"styles_readingTime__O8grF"}},2469:function(e){e.exports={posts:"styles_posts__t9T_T"}},47258:function(e){e.exports={section:"styles_section__2hMPI",heading:"styles_heading__22RF-",more:"styles_more__FCU2A"}},45748:function(e){e.exports={main:"styles_main__217Sz",me:"styles_me__3zopS",memoji:"styles_memoji__2_IVA",profile:"styles_profile__2jwIN",name:"styles_name__3Qz_R",description:"styles_description__3JZDk",emoji:"styles_emoji__vA5ic"}}}]);