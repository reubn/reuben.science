(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,g=m["".concat(i,".").concat(f)]||m[f]||l[f]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"===typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44821:function(e,t,n){"use strict";n.r(t),n.d(t,{metadata:function(){return i},default:function(){return l}});var r=n(96156),a=n(17375),o=(n(67294),n(3905));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={title:"Fix Damaged macOS Applications",description:"Fix Damaged macOS Applications",emoji:"\ud83d\udc80",date:"2021-07-28",preview:{language:"bash",content:"xattr -c /Path/To/Application\nsudo codesign --force --deep --sign - /Path/To/Application"}},s={metadata:i};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",p(p(p({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",p({},{className:"language-bash",metastring:"Bash"}),(0,o.kt)("code",p({parentName:"pre"},{className:"language-bash",metastring:"Bash"}),(0,o.kt)("span",p({parentName:"code"},{className:"token function"}),"xattr"),(0,o.kt)("span",p({parentName:"code"},{className:"token argument"})," -c")," /Path/To/Application\n")),(0,o.kt)("pre",p({},{className:"language-bash",metastring:"Bash"}),(0,o.kt)("code",p({parentName:"pre"},{className:"language-bash",metastring:"Bash"}),(0,o.kt)("span",p({parentName:"code"},{className:"token builtin class-name"}),"sudo")," ",(0,o.kt)("span",p({parentName:"code"},{className:"token function"}),"codesign"),(0,o.kt)("span",p({parentName:"code"},{className:"token argument"})," --force"),(0,o.kt)("span",p({parentName:"code"},{className:"token argument"})," --deep"),(0,o.kt)("span",p({parentName:"code"},{className:"token argument"})," --sign")," - /Path/To/Application\n")))}l.isMDXComponent=!0}}]);