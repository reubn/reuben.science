(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{3905:function(e,a,n){"use strict";n.d(a,{kt:function(){return u}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),m=function(e){var a=t.useContext(c),n=a;return e&&(n="function"===typeof e?e(a):p(p({},a),e)),n},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},i=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=m(n),k=r,N=u["".concat(c,".").concat(k)]||u[k]||l[k]||s;return n?t.createElement(N,p(p({ref:a},i),{},{components:n})):t.createElement(N,p({ref:a},i))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"===typeof e||r){var s=n.length,p=new Array(s);p[0]=i;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"===typeof e?e:r,p[1]=o;for(var m=2;m<s;m++)p[m]=n[m];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}i.displayName="MDXCreateElement"},37981:function(e,a,n){"use strict";n.r(a),n.d(a,{metadata:function(){return c},default:function(){return l}});var t=n(96156),r=n(17375),s=(n(67294),n(3905));function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){(0,t.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var c={title:"Find MAC Address of Default Gateway",description:"Linux. IPv4, IPv6",emoji:"\ud83d\udeaa",date:"2021-07-28",preview:{language:"bash",content:'ip neigh show | grep -P "$(ip -4 route | grep -Po "(?<=default via )(.+?)s" | head -n 1)" | grep -Po "([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}"\nip neigh show | grep -P "$(ip -6 route | grep -Po "(?<=default via )(.+?)s" | head -n 1)" | grep -Po "([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}"'}},m={metadata:c};function l(e){var a=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",o(o(o({},m),n),{},{components:a,mdxType:"MDXLayout"}),(0,s.kt)("pre",o({},{className:"language-bash",metastring:"IPv4"}),(0,s.kt)("code",o({parentName:"pre"},{className:"language-bash",metastring:"IPv4"}),(0,s.kt)("span",o({parentName:"code"},{className:"token function"}),"ip")," neigh show\n",(0,s.kt)("span",o({parentName:"code"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"code"},{className:"token function"}),"grep"),(0,s.kt)("span",o({parentName:"code"},{className:"token argument"})," -P"),' "',(0,s.kt)("span",o({parentName:"code"},{className:"token variable"}),(0,s.kt)("span",o({parentName:"span"},{className:"token variable-symbols"}),"$("),(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"ip"),(0,s.kt)("span",o({parentName:"span"},{className:"token argument"})," -4")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"route")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"grep"),(0,s.kt)("span",o({parentName:"span"},{className:"token argument"})," -Po")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token string"}),'"(?<=default via )(.+?)\\s"')," ",(0,s.kt)("span",o({parentName:"span"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"head"),(0,s.kt)("span",o({parentName:"span"},{className:"token argument"})," -n")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token number"}),"1"),(0,s.kt)("span",o({parentName:"span"},{className:"token variable-symbols"}),")")),'"\n',(0,s.kt)("span",o({parentName:"code"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"code"},{className:"token function"}),"grep"),(0,s.kt)("span",o({parentName:"code"},{className:"token argument"})," -Po")," ",(0,s.kt)("span",o({parentName:"code"},{className:"token string"}),'"([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}"'),"\n")),(0,s.kt)("pre",o({},{className:"language-bash",metastring:"IPv6"}),(0,s.kt)("code",o({parentName:"pre"},{className:"language-bash",metastring:"IPv6"}),(0,s.kt)("span",o({parentName:"code"},{className:"token function"}),"ip")," neigh show\n",(0,s.kt)("span",o({parentName:"code"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"code"},{className:"token function"}),"grep"),(0,s.kt)("span",o({parentName:"code"},{className:"token argument"})," -P"),' "',(0,s.kt)("span",o({parentName:"code"},{className:"token variable"}),(0,s.kt)("span",o({parentName:"span"},{className:"token variable-symbols"}),"$("),(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"ip"),(0,s.kt)("span",o({parentName:"span"},{className:"token argument"})," -6")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"route")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"grep"),(0,s.kt)("span",o({parentName:"span"},{className:"token argument"})," -Po")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token string"}),'"(?<=default via )(.+?)\\s"')," ",(0,s.kt)("span",o({parentName:"span"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token function"}),"head"),(0,s.kt)("span",o({parentName:"span"},{className:"token argument"})," -n")," ",(0,s.kt)("span",o({parentName:"span"},{className:"token number"}),"1"),(0,s.kt)("span",o({parentName:"span"},{className:"token variable-symbols"}),")")),'"\n',(0,s.kt)("span",o({parentName:"code"},{className:"token operator"}),"|")," ",(0,s.kt)("span",o({parentName:"code"},{className:"token function"}),"grep"),(0,s.kt)("span",o({parentName:"code"},{className:"token argument"})," -Po")," ",(0,s.kt)("span",o({parentName:"code"},{className:"token string"}),'"([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}"'),"\n")))}l.isMDXComponent=!0}}]);