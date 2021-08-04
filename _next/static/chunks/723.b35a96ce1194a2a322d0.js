(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,y=f["".concat(u,".").concat(m)]||f[m]||i[m]||a;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"===typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1723:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return u},default:function(){return i}});var r=n(96156),o=n(17375),a=(n(67294),n(3905));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"Coloured Reversed Output for Systemd Services",description:"Preserve Colours in journalctl",emoji:"\ud83c\udf08",date:"2021-07-28",preview:{language:"bash",content:"sudo journalctl -u $unit -r -o cat"}},s={metadata:u};function i(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",p(p(p({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("span",p({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),(0,a.kt)("span",p({parentName:"code"},{className:"token builtin class-name"}),"sudo")," ",(0,a.kt)("span",p({parentName:"code"},{className:"token function"}),"journalctl"),(0,a.kt)("span",p({parentName:"code"},{className:"token argument"})," -u")," ",(0,a.kt)("span",p({parentName:"code"},{className:"token variable simple"}),"$unit"),(0,a.kt)("span",p({parentName:"code"},{className:"token argument"})," -r"),(0,a.kt)("span",p({parentName:"code"},{className:"token argument"})," -o")," ",(0,a.kt)("span",p({parentName:"code"},{className:"token function"}),"cat"),"\n")))}i.isMDXComponent=!0}}]);