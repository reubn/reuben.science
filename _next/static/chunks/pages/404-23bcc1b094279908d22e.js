_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"6eB+":function(e,t,r){e.exports={main:"styles_main__217Sz",me:"styles_me__3zopS",memoji:"styles_memoji__2_IVA",heading:"styles_heading__ThNG7",posts:"styles_posts__EwL8p",photo:"styles_photo__RJfhM",photos:"styles_photos__3j7mG"}},"7NIq":function(e,t,r){"use strict";var n=r("rePB"),o=r("Ff2n"),c=r("nKUr"),s=r("nOHt"),a=r("YFqc"),i=r.n(a);r("q1tI");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.children,r=Object(o.a)(e,["children"]),n=Object(s.useRouter)().asPath,a=n===r.href||n===r.as;return Object(c.jsx)(i.a,l(l({},r),{},{children:"[object Function]"==={}.toString.call(t)?t(a):t}))}},"8XfR":function(e,t,r){"use strict";t.a=function(e){return e.map((function(e){var t=e.props;return t.metadata.date=new Date(t.metadata.date),t})).sort((function(e,t){return e.metadata.date-t.metadata.date}))}},"97Is":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r("uNx/")}])},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},P1Hs:function(e,t,r){e.exports={post:"styles_post__RqTCO",title:"styles_title__2svP8",emoji:"styles_emoji__2jMHX",description:"styles_description__Mmh8A",readingTime:"styles_readingTime__O8grF"}},Sxiq:function(e,t,r){e.exports={errorCode:"__404_errorCode__wSQU8",errorFlash:"__404_errorFlash__1ZgJO",errorMessage:"__404_errorMessage__2updH"}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("284h");t.__esModule=!0,t.default=void 0;var c=o(r("q1tI")),s=r("elyg"),a=r("nOHt"),i=r("vNVm"),u={};function l(e,t,r,n){if((0,s.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,a.useRouter)(),o=r&&r.pathname||"/",f=c.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),r=n(t,2),c=r[0],a=r[1];return{href:c,as:e.as?(0,s.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),p=f.href,d=f.as,O=e.children,b=e.replace,j=e.shallow,h=e.scroll,y=e.locale;"string"===typeof O&&(O=c.default.createElement("a",null,O));var _=c.Children.only(O),m=_&&"object"===typeof _&&_.ref,v=(0,i.useIntersection)({rootMargin:"200px"}),g=n(v,2),w=g[0],P=g[1],x=c.default.useCallback((function(e){w(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,w]);(0,c.useEffect)((function(){var e=P&&t&&(0,s.isLocalURL)(p),n="undefined"!==typeof y?y:r&&r.locale,o=u[p+"%"+d+(n?"%"+n:"")];e&&!o&&l(r,p,d,{locale:n})}),[d,p,P,y,t,r]);var N={ref:x,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:c,locale:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,r,p,d,b,j,h,y)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(r,p,d,{priority:!0}))}};return(e.passHref||"a"===_.type&&!("href"in _.props))&&(N.href=(0,s.addBasePath)((0,s.addLocale)(d,"undefined"!==typeof y?y:r&&r.locale,r&&r.defaultLocale))),c.default.cloneElement(_,N)};t.default=f},nmIM:function(e,t,r){"use strict";var n=r("rePB"),o=r("Ff2n"),c=r("nKUr"),s=r("7NIq"),a=r("P1Hs");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.slug,r=e.metadata,n=r.title,i=r.description,l=r.emoji,f=r.readingTime,p=Object(o.a)(e,["slug","metadata"]);return Object(c.jsx)(s.a,{href:"/posts/".concat(t),passHref:!0,children:function(e){return Object(c.jsx)("a",u(u({},p),{},{children:Object(c.jsxs)("div",{className:a.post,children:[Object(c.jsxs)("p",{className:a.title,children:[Object(c.jsx)("span",{className:a.emoji,children:l}),n]}),Object(c.jsxs)("p",{className:a.description,children:[i||""," ",Object(c.jsxs)("span",{className:a.readingTime,children:[" \u2022 ",f]})]})]})}))}},t)}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},"uNx/":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r("rePB"),o=r("nKUr"),c=r("nmIM"),s=r("6eB+"),a=r("Sxiq"),i=r("8XfR");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=!0;function p(e){var t=e.posts;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("main",{className:s.main,children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)("span",{className:a.errorCode,children:"4"}),Object(o.jsx)("span",{className:a.errorCode,children:"0"}),Object(o.jsx)("span",{className:a.errorCode,children:"4"})]}),Object(o.jsx)("h2",{className:a.errorMessage,children:"ngl idk where this page is"}),Object(o.jsx)("p",{className:s.heading,children:"Recent Posts"}),Object(o.jsx)("section",{className:s.posts,children:Object(i.a)(t).map((function(e){return Object(o.jsx)(c.a,l(l({},e),{},{className:s.postLink}),e.slug)}))})]})})}},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),o=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,o=(0,c.useRef)(),u=(0,c.useState)(!1),l=n(u,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||f||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,s=n.elements;return s.set(e,t),c.observe(e),function(){c.unobserve(e),0===s.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,c.useEffect)((function(){a||f||(0,s.default)((function(){return p(!0)}))}),[f]),[d,f]};var c=r("q1tI"),s=o(r("0G5g")),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["97Is",0,2,1]]]);