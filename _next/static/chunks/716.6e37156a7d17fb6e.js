"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{3905:function(e,t,n){n.d(t,{kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,b=f["".concat(u,".").concat(m)]||f[m]||i[m]||o;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"===typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3716:function(e,t,n){n.r(t),n.d(t,{codeBlocks:function(){return o},metadata:function(){return c},default:function(){return u}});n(7294);var r=n(3905);function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=[{language:"bash",lines:["sudo journalctl -u $unit -r -o cat"]}],c={title:"Coloured Reversed Output for Systemd Services",description:"Preserve Colours in journalctl",emoji:"\ud83c\udf08",date:"2021-07-28"},s={codeBlocks:o,metadata:c};function u(e){var t=e.components,n=a(e,["components"]);return(0,r.kt)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("span",Object.assign({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"sudo")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"journalctl"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token argument"})," -u")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token variable simple"}),"$unit"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token argument"})," -r"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token argument"})," -o")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"cat"),"\n")))}u.isMDXComponent=!0}}]);