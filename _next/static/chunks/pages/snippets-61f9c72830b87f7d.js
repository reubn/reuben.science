(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{8812:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets",function(){return n(6252)}])},5050:function(e,t,n){"use strict";var r=n(5893),o=n(628),i=n(1039),s=n(5231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.Z=function(e){var t=e.heading,n=e.moreHref,a=e.moreAria,u=e.children,p=c(e,["heading","moreHref","moreAria","children"]);return(0,r.jsxs)("section",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({className:s.section},p,{children:[t?(0,r.jsx)(i.Z,{href:n,children:(0,r.jsxs)("a",{className:s.heading,children:[t," ",(0,r.jsx)(o.Z,{className:s.more,role:"link","aria-label":a})]})}):null,u]}))}},6252:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return x}});var r=n(5893),o=n(2962),i=n(5050),s=n(1039),l=n(966),c=n(6406);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=function(e){var t=e.slug,n=e.metadata,o=n.title,i=n.description,p=n.emoji,f=n.linesOfCode,m=n.preview.html,y=u(e,["slug","metadata"]);return(0,r.jsx)(s.Z,{href:"/snippets/".concat(t),passHref:!0,children:function(e){return(0,r.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({title:o},y,{children:(0,r.jsxs)("article",{className:"".concat(l.post," ").concat(c.post),children:[(0,r.jsx)("pre",{className:c.pre,role:"img","aria-label":"Snippet Preview",children:(0,r.jsx)("div",{children:(0,r.jsx)("code",{dangerouslySetInnerHTML:{__html:m}})})}),(0,r.jsxs)("h1",{children:[(0,r.jsx)("p",{className:l.emoji,children:p}),(0,r.jsx)("p",{className:l.title,children:o})]}),(0,r.jsxs)("p",{className:l.description,children:[i||""," ",(0,r.jsxs)("span",{className:l.readingTime,children:[" \u2022 ",f||"???"," line",1!=f&&"s"]})]})]})}))}},t)},f=n(3223);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=function(e){var t=e.posts,n=e.fallback,o=void 0===n?null:n,s=b(e,["posts","fallback"]);return t.length?(0,r.jsx)(i.Z,y({heading:"Recent Snippets",moreHref:"/posts",moreAria:"More Snippets"},s,{children:(0,r.jsx)("div",{className:f.posts,role:"feed",children:t.map((function(e){return(0,r.jsx)(p,y({},e),e.slug)}))})})):o};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){var t=e.metadata.date,n=_(e.metadata,["date"]);return j({},_(e,["metadata"]),{metadata:j({},n,{date:new Date(t)})})}var g=n(5237),v=n(6226),w=!0;function x(e){var t=e.posts;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.PB,{title:"Snippets",openGraph:{title:"Snippets",site_name:"reuben.science"}}),(0,r.jsx)(o.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Snippets",item:"https://".concat("reuben.science","/snippets")}]}),(0,r.jsx)("main",{className:g.main,children:(0,r.jsx)(d,{posts:t.map(h),heading:!1,fallback:(0,r.jsx)("h2",{className:v.empty,children:"no posts here mate"})})})]})}},966:function(e){e.exports={post:"styles_post__v2bVe",title:"styles_title__UmqU7",emoji:"styles_emoji__4FCH_",description:"styles_description__9b8Iq",readingTime:"styles_readingTime__6g3mK"}},5231:function(e){e.exports={section:"styles_section__dkHE8",heading:"styles_heading__tY67n",more:"styles_more__jTMB5"}},6406:function(e){e.exports={post:"styles_post__5VZLU",pre:"styles_pre__YjkZs"}},3223:function(e){e.exports={posts:"styles_posts__mRlt3"}},6226:function(e){e.exports={empty:"styles_empty__pNje0"}},5237:function(e){e.exports={main:"styles_main__nTaZI",me:"styles_me__nd6O2",memoji:"styles_memoji__HZdFT",profile:"styles_profile__pzmWf",name:"styles_name__N0hqv",description:"styles_description__DNNQE",emoji:"styles_emoji__Kpisc"}},628:function(e,t,n){"use strict";var r=n(7294),o=n(5697),i=n.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,a=l(e,["color","size"]);return r.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("polyline",{points:"9 18 15 12 9 6"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="ChevronRight",t.Z=c}},function(e){e.O(0,[774,888,179],(function(){return t=8812,e(e.s=t);var t}));var t=e.O();_N_E=t}]);