"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{3905:function(e,t,n){n.d(t,{kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,O=m["".concat(p,".").concat(f)]||m[f]||l[f]||o;return n?r.createElement(O,c(c({ref:t},u),{},{components:n})):r.createElement(O,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"===typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},114:function(e,t,n){n.r(t),n.d(t,{codeBlocks:function(){return o},metadata:function(){return c},default:function(){return p}});n(7294);var r=n(3905);function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=[{language:"bash",lines:["rsync -avzr -e 'ssh' $LOCAL_PATH $SSH_CONNECTION_STRING:$REMOTE_PATH"]}],c={title:"Copy Files over SSH",description:"Using rsync",emoji:"\ud83d\udcc2",date:"2021-07-28"},s={codeBlocks:o,metadata:c};function p(e){var t=e.components,n=a(e,["components"]);return(0,r.kt)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("span",Object.assign({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"rsync"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token argument"})," -avzr"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token argument"})," -e")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'ssh'")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token variable simple"}),"$LOCAL_PATH")," ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token variable simple"}),"$SSH_CONNECTION_STRING"),":",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token variable simple"}),"$REMOTE_PATH"),"\n")))}p.isMDXComponent=!0}}]);