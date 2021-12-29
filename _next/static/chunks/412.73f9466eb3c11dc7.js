"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[412],{3905:function(e,a,t){t.d(a,{kt:function(){return k}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"===typeof e?e(a):c(c({},a),e)),t},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),k=i(t),N=s,d=k["".concat(p,".").concat(N)]||k[N]||l[N]||o;return t?n.createElement(d,c(c({ref:a},m),{},{components:t})):n.createElement(d,c({ref:a},m))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"===typeof e||s){var o=t.length,c=new Array(o);c[0]=m;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r.mdxType="string"===typeof e?e:s,c[1]=r;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8412:function(e,a,t){t.r(a),t.d(a,{codeBlocks:function(){return o},default:function(){return p},metadata:function(){return c}});t(7294);var n=t(3905);function s(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=[{language:"js",lines:["...","","if (window.__cfBeaconCustomTag) {",'    if ("object" != typeof window.__cfBeaconCustomTag || Array.isArray(window.__cfBeaconCustomTag)) console.warn(\'Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }\');',"    state.ct = applyChange(window.__cfBeaconCustomTag)","}","","..."]},{language:"js",lines:["...","","var initial = params.token","\t? params.send && params.send.to","\t\t\t? params.send.to",'\t\t\t: "https://cloudflareinsights.com/cdn-cgi/rum"',"\t: null;","","..."]},{language:"js",lines:["","...",'var t = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[data-cf-beacon]") : void 0);',"","...","","var params = window.__cfBeacon;","","...","",'var paramJson = t.getAttribute("data-cf-beacon");',"\tif (paramJson) try {","\t    params = JSON.parse(paramJson)","\t}","...",""]},{language:"ini",lines:["fl=21f439","h=cloudflare.com","ip=2b00:24e3:6444:5301:fcf9:4321:29f7:abcd","ts=1609427929.302","visit_scheme=https","uag=Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4356.6 Safari/537.36","colo=LHR","http=http/2","loc=GB","tls=TLSv1.3","sni=plaintext","warp=off","gateway=off","gateway_account_id=nil"]}],c={title:"Same Origin Cloudflare Analytics",description:"Reverse Engineering Cloudflare Web Analytics",emoji:"\u26c5\ufe0f",date:"2020-12-31",category:["dev"],image:{id:.9613718570062559,resolutions:{1:{src:"/.assets/9a985ec32451008384d4ea6a3d2921bf/header.webp",scale:1,width:1e3,height:400},2:{src:"/.assets/2e259caa3c428651b4de082d4b8e62b3/header.webp",scale:2,width:2e3,height:800},3:{src:"/.assets/d8c45f08cff7cb57274e901de4730f02/header.webp",scale:3,width:3e3,height:1200},.5:{src:"/.assets/993d8b0aee749a93363db5efff035227/header.webp",scale:.5,width:500,height:200}}}},r={codeBlocks:o,metadata:c};function p(e){var a=e.components,t=s(e,["components"]);return(0,n.kt)("wrapper",Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cloudflare's new analytics offering 'Cloudflare Web Analytics' promises a solution to the dichotomy of information vs privacy. Their free tier operates using a traditional ",(0,n.kt)("inlineCode",{parentName:"p"},"JS")," beacon script loaded from Cloudflare's own domain ",(0,n.kt)("inlineCode",{parentName:"p"},"static.cloudflareinsights.com"),", that reports back to ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudflareinsights.com"),". Cloudflare promises their solution to be 'privacy-first', and while I have very little doubt about it being the case, it won't be long before ad-blockers and other privacy-conscious tools block it - as a 3",(0,n.kt)("sup",{parentName:"p"},"rd")," party resource."),(0,n.kt)("h2",Object.assign({},{id:"reverse-engineering-the-beacon"}),(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#reverse-engineering-the-beacon"}),"Reverse Engineering the Beacon")),(0,n.kt)("p",null,"The script Cloudflare loads is heavily minified, and while not intentionally obfuscated, is almost impossible to read. I tried looking for stray source maps and the like, but didn't find any. Instead I used ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://lelinhtinh.github.io/de4js/"}),(0,n.kt)("inlineCode",{parentName:"a"},"de4js"))," with the ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/lelinhtinh/de4js/blob/master/userscript/de4js_helper.user.js"}),(0,n.kt)("inlineCode",{parentName:"a"},"unreadable"))," add-on, and then ran it through ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"https://prettier.io/"}),"Prettier"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"unreadable")," extension uses data from ",(0,n.kt)("a",Object.assign({parentName:"p"},{href:"http://jsnice.org/"}),"JSNice"),", and tries to rename variables back to their likely name using a statistical model",(0,n.kt)("sup",Object.assign({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",Object.assign({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". This works pretty well, but isn't infallible, so you have to have your whits about you and not blindly trust that a variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"url"),", is even a ",(0,n.kt)("inlineCode",{parentName:"p"},"URL"),", for example."),(0,n.kt)("p",null,"Once inside, the code showed a number of options that are documented (or that I could find)."),(0,n.kt)("p",null,"There's the option to include custom tags in the beacon requests"),(0,n.kt)("pre",null,(0,n.kt)("span",Object.assign({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"if")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"if")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"object"')," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"!=")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"typeof")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token known-class-name class-name"}),"Array"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"isArray"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token console class-name"}),"console"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"warn"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'\'Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }\''),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    state",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"ct")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"applyChange"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n")),(0,n.kt)("p",null,"This is cool but let's keep digging."),(0,n.kt)("p",null,"Here we find what we've been looking for, an option to configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"URL")," the beacon will pass the ",(0,n.kt)("strong",{parentName:"p"},"R"),"eal ",(0,n.kt)("strong",{parentName:"p"},"U"),"ser ",(0,n.kt)("strong",{parentName:"p"},"M"),"etrics to."),(0,n.kt)("pre",null,(0,n.kt)("span",Object.assign({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"var")," initial ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," params",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"token"),"\n    ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," params",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"send")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," params",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"send"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"to"),"\n            ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," params",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"send"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"to"),"\n            ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"https://cloudflareinsights.com/cdn-cgi/rum"'),"\n    ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword null nil"}),"null"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n")),(0,n.kt)("p",null,"Looking further up in the script, we can see that the ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," can be taken from the ",(0,n.kt)("inlineCode",{parentName:"p"},"script")," tag or, interestingly for us, from ",(0,n.kt)("inlineCode",{parentName:"p"},"window.__cfBeacon"),"."),(0,n.kt)("pre",null,(0,n.kt)("span",Object.assign({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"var")," t ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"document"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"currentScript")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"function"')," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"==")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"typeof")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"document"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"querySelector")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"?")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"document"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"querySelector"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"script[data-cf-beacon]"'),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"void")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"var")," params ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"__cfBeacon"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"var")," paramJson ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," t",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"getAttribute"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),'"data-cf-beacon"'),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"if")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"paramJson",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"try")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        params ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token known-class-name class-name"}),"JSON"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"parse"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"paramJson",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n")),(0,n.kt)("p",null,"So, we can pick our own ",(0,n.kt)("inlineCode",{parentName:"p"},"URL")," using ",(0,n.kt)("inlineCode",Object.assign({parentName:"p"},{className:"language-js"}),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token property-access"}),"__cfBeacon")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),"=")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"token",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token constant"}),"ANALYTICS_TOKEN"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),",")," send",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"to",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token constant"}),"ENDPOINT_URL"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"}"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"}"))),(0,n.kt)("h2",Object.assign({},{id:"cdn-cgi"}),(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#cdn-cgi"}),"cdn-cgi")),(0,n.kt)("p",null,"My first thought was to change this to a Cloudflare Worker proxy, sitting on the same origin. However, this isn't even necessary..."),(0,n.kt)("p",null,"Cloudflare's ",(0,n.kt)("inlineCode",{parentName:"p"},"CDN")," network includes a 'secret' ",(0,n.kt)("inlineCode",{parentName:"p"},"/cdn-cgi")," directory on sites it proxies. The best-known use of this is the ",(0,n.kt)("inlineCode",{parentName:"p"},"/cdn-cgi/trace")," document, that details information about the user's interaction with the Cloudflare network."),(0,n.kt)("pre",null,(0,n.kt)("span",Object.assign({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,n.kt)("code",Object.assign({parentName:"pre"},{className:"language-ini",metastring:"; /cdn-cgi/trace"}),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"fl"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"21f439"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"h"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"cloudflare.com"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"ip"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"2b00:24e3:6444:5301:fcf9:4321:29f7:abcd"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"ts"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"1609427929.302"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"visit_scheme"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"https"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"uag"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4356.6 Safari/537.36"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"colo"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"LHR"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"http"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"http/2"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"loc"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"GB"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"tls"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"TLSv1.3"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"sni"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"plaintext"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"warp"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"off"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"gateway"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"off"),"\n",(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token key attr-name"}),"gateway_account_id"),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"="),(0,n.kt)("span",Object.assign({parentName:"code"},{className:"token value attr-value"}),"nil"),"\n")),(0,n.kt)("p",null,"It turns out that a lot of Cloudflare's services make use of this path, including their email protection, and their ",(0,n.kt)("inlineCode",{parentName:"p"},"rocket loader")," scripts, as well as many other things",(0,n.kt)("sup",Object.assign({parentName:"p"},{id:"fnref-2"}),(0,n.kt)("a",Object.assign({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),"."),(0,n.kt)("p",null,"More pertinent to our needs, as seen in the default ",(0,n.kt)("inlineCode",{parentName:"p"},"URL"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"/cdn-cgi/rum")," exists, and it's live on all Cloudflare-proxied sites - same origin \ud83d\udc4c."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u2728 Take Home Message"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",Object.assign({parentName:"p"},{className:"language-js"}),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token dom variable"}),"window"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"."),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token property-access"}),"__cfBeacon")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),"=")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"token",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token constant"}),"ANALYTICS_TOKEN"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),",")," send",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"to",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token operator"}),":")," ",(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token string"}),"'/cdn-cgi/rum'"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"}"),(0,n.kt)("span",Object.assign({parentName:"inlineCode"},{className:"token punctuation"}),"}"))),(0,n.kt)("p",{parentName:"blockquote"},"will provide us with a same-origin destination for our requests")),(0,n.kt)("p",null,"To solve the initial request being 3",(0,n.kt)("sup",{parentName:"p"},"rd")," Party, I suggest just serving the ",(0,n.kt)("inlineCode",{parentName:"p"},"beacon.min.js"),", file yourself, as I haven't found it exposed in the same way."),(0,n.kt)("h2",Object.assign({},{id:"worth-it"}),(0,n.kt)("a",Object.assign({parentName:"h2"},{href:"#worth-it"}),"Worth it?")),(0,n.kt)("p",null,"I'm in two minds about solving this. On one hand its somewhat futile as it only defeats ",(0,n.kt)("inlineCode",{parentName:"p"},"DNS")," based blocking, ",(0,n.kt)("inlineCode",{parentName:"p"},"uBlock")," or other ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP"),"-level blockers could quite easily write a rule to block this, on the other hand, Cloudflare Web Analytics is the only free limitless offering I've found that doesn't track users (not even using their IP address)",(0,n.kt)("sup",Object.assign({parentName:"p"},{id:"fnref-3"}),(0,n.kt)("a",Object.assign({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3")),", and doesn't require cookies - so maybe it is worth trying."),(0,n.kt)("p",null,"There are many ways to solve the issues of simple pattern blocking, using 'Cloudflare Workers', or literally any other proxy service - but I want a simple stack and don't want to be bounded by usage limits more than necessary - optimistic, I know!"),(0,n.kt)("p",null,"Cloudflare Web Analytics is still in beta, so it's quite possible these features will be documented or removed \ud83d\ude22 in the future."),(0,n.kt)("div",Object.assign({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",Object.assign({parentName:"ol"},{id:"fn-1","ref-number":"1"}),(0,n.kt)("a",Object.assign({parentName:"li"},{href:"http://www.nice2predict.org/"}),"http://www.nice2predict.org/"),(0,n.kt)("a",Object.assign({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),(0,n.kt)("li",Object.assign({parentName:"ol"},{id:"fn-2","ref-number":"2"}),(0,n.kt)("a",Object.assign({parentName:"li"},{href:"https://www.google.com/search?q=%22/cdn-cgi/%22"}),'https://www.google.com/search?q="/cdn-cgi/"'),(0,n.kt)("a",Object.assign({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),(0,n.kt)("li",Object.assign({parentName:"ol"},{id:"fn-3","ref-number":"3"}),(0,n.kt)("a",Object.assign({parentName:"li"},{href:"https://www.cloudflare.com/en-gb/web-analytics/"}),"https://www.cloudflare.com/en-gb/web-analytics/"),(0,n.kt)("a",Object.assign({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")))))}p.isMDXComponent=!0}}]);