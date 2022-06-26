"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6338],{6338:function(e,n,s){s.r(n),s.d(n,{codeBlocks:function(){return o},default:function(){return r},metadata:function(){return c}});var a=s(5893),t=s(1151),o=[{language:"js",lines:["...","","if (window.__cfBeaconCustomTag) {",'    if ("object" != typeof window.__cfBeaconCustomTag || Array.isArray(window.__cfBeaconCustomTag)) console.warn(\'Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }\');',"    state.ct = applyChange(window.__cfBeaconCustomTag)","}","","..."]},{language:"js",lines:["...","","var initial = params.token","\t? params.send && params.send.to","\t\t\t? params.send.to",'\t\t\t: "https://cloudflareinsights.com/cdn-cgi/rum"',"\t: null;","","..."]},{language:"js",lines:["","...",'var t = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[data-cf-beacon]") : void 0);',"","...","","var params = window.__cfBeacon;","","...","",'var paramJson = t.getAttribute("data-cf-beacon");',"\tif (paramJson) try {","\t    params = JSON.parse(paramJson)","\t}","...",""]},{language:"ini",lines:["fl=21f439","h=cloudflare.com","ip=2b00:24e3:6444:5301:fcf9:4321:29f7:abcd","ts=1609427929.302","visit_scheme=https","uag=Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4356.6 Safari/537.36","colo=LHR","http=http/2","loc=GB","tls=TLSv1.3","sni=plaintext","warp=off","gateway=off","gateway_account_id=nil"]}],c={title:"Same Origin Cloudflare Analytics",description:"Reverse Engineering Cloudflare Web Analytics",emoji:"\u26c5\ufe0f",date:"2020-12-31",category:["dev"],image:{id:.9948173252478563,resolutions:{1:{src:"/.assets/9a985ec32451008384d4ea6a3d2921bf/header.webp",scale:1,width:1e3,height:400},2:{src:"/.assets/2e259caa3c428651b4de082d4b8e62b3/header.webp",scale:2,width:2e3,height:800},3:{src:"/.assets/d8c45f08cff7cb57274e901de4730f02/header.webp",scale:3,width:3e3,height:1200},.5:{src:"/.assets/993d8b0aee749a93363db5efff035227/header.webp",scale:.5,width:500,height:200}}}};var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({p:"p",code:"code",sup:"sup",h2:"h2",a:"a",pre:"pre",span:"span",strong:"strong",blockquote:"blockquote",section:"section",hr:"hr",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n","\n",(0,a.jsxs)(n.p,{children:["Cloudflare's new analytics offering 'Cloudflare Web Analytics' promises a solution to the dichotomy of information vs privacy. Their free tier operates using a traditional ",(0,a.jsx)(n.code,{children:"JS"})," beacon script loaded from Cloudflare's own domain ",(0,a.jsx)(n.code,{children:"static.cloudflareinsights.com"}),", that reports back to ",(0,a.jsx)(n.code,{children:"cloudflareinsights.com"}),". Cloudflare promises their solution to be 'privacy-first', and while I have very little doubt about it being the case, it won't be long before ad-blockers and other privacy-conscious tools block it - as a 3",(0,a.jsx)(n.sup,{children:"rd"})," party resource."]}),"\n",(0,a.jsx)(n.h2,{id:"reverse-engineering-the-beacon",children:(0,a.jsx)(n.a,{href:"#reverse-engineering-the-beacon",children:"Reverse Engineering the Beacon"})}),"\n",(0,a.jsxs)(n.p,{children:["The script Cloudflare loads is heavily minified, and while not intentionally obfuscated, is almost impossible to read. I tried looking for stray source maps and the like, but didn't find any. Instead I used ",(0,a.jsx)(n.a,{href:"https://lelinhtinh.github.io/de4js/",children:(0,a.jsx)(n.code,{children:"de4js"})})," with the ",(0,a.jsx)(n.a,{href:"https://github.com/lelinhtinh/de4js/blob/master/userscript/de4js_helper.user.js",children:(0,a.jsx)(n.code,{children:"unreadable"})})," add-on, and then ran it through ",(0,a.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),". The ",(0,a.jsx)(n.code,{children:"unreadable"})," extension uses data from ",(0,a.jsx)(n.a,{href:"http://jsnice.org/",children:"JSNice"}),", and tries to rename variables back to their likely name using a statistical model",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#def-1",id:"ref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". This works pretty well, but isn't infallible, so you have to have your whits about you and not blindly trust that a variable named ",(0,a.jsx)(n.code,{children:"url"}),", is even a ",(0,a.jsx)(n.code,{children:"URL"}),", for example."]}),"\n",(0,a.jsx)(n.p,{children:"Once inside, the code showed a number of options that are documented (or that I could find)."}),"\n",(0,a.jsx)(n.p,{children:"There's the option to include custom tags in the beacon requests"}),"\n",(0,a.jsxs)(n.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(n.code,{className:"language-js",children:[(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n\n",(0,a.jsx)(n.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"window",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"__cfBeaconCustomTag",(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(n.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:'"object"'})," ",(0,a.jsx)(n.span,{className:"token operator",children:"!="})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"typeof"})," window",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"__cfBeaconCustomTag ",(0,a.jsx)(n.span,{className:"token operator",children:"||"})," Array",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token function",children:"isArray"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"window",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"__cfBeaconCustomTag",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," console",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token function",children:"warn"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:'\'Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }\''}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n    state",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"ct ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token function",children:"applyChange"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"window",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"__cfBeaconCustomTag",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n\n",(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:"This is cool but let's keep digging."}),"\n",(0,a.jsxs)(n.p,{children:["Here we find what we've been looking for, an option to configure the ",(0,a.jsx)(n.code,{children:"URL"})," the beacon will pass the ",(0,a.jsx)(n.strong,{children:"R"}),"eal ",(0,a.jsx)(n.strong,{children:"U"}),"ser ",(0,a.jsx)(n.strong,{children:"M"}),"etrics to."]}),"\n",(0,a.jsxs)(n.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(n.code,{className:"language-js",children:[(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n\n",(0,a.jsx)(n.span,{className:"token keyword",children:"var"})," initial ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," params",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"token\n\t",(0,a.jsx)(n.span,{className:"token operator",children:"?"})," params",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"send ",(0,a.jsx)(n.span,{className:"token operator",children:"&&"})," params",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"send",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"to\n\t\t\t",(0,a.jsx)(n.span,{className:"token operator",children:"?"})," params",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"send",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"to\n\t\t\t",(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"https://cloudflareinsights.com/cdn-cgi/rum"'}),"\n\t",(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"null"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["Looking further up in the script, we can see that the ",(0,a.jsx)(n.code,{children:"params"})," can be taken from the ",(0,a.jsx)(n.code,{children:"script"})," tag or, interestingly for us, from ",(0,a.jsx)(n.code,{children:"window.__cfBeacon"}),"."]}),"\n",(0,a.jsxs)(n.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(n.code,{className:"language-js",children:["\n",(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n",(0,a.jsx)(n.span,{className:"token keyword",children:"var"})," t ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," document",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"currentScript ",(0,a.jsx)(n.span,{className:"token operator",children:"||"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:'"function"'})," ",(0,a.jsx)(n.span,{className:"token operator",children:"=="})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"typeof"})," document",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"querySelector ",(0,a.jsx)(n.span,{className:"token operator",children:"?"})," document",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token function",children:"querySelector"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:'"script[data-cf-beacon]"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"void"})," ",(0,a.jsx)(n.span,{className:"token number",children:"0"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n\n",(0,a.jsx)(n.span,{className:"token keyword",children:"var"})," params ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," window",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"__cfBeacon",(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n\n",(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n\n",(0,a.jsx)(n.span,{className:"token keyword",children:"var"})," paramJson ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," t",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token function",children:"getAttribute"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:'"data-cf-beacon"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n\t",(0,a.jsx)(n.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"paramJson",(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"try"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n\t    params ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token constant",children:"JSON"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token function",children:"parse"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"paramJson",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n\t",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(n.span,{className:"token operator",children:"..."}),"\n\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["So, we can pick our own ",(0,a.jsx)(n.code,{children:"URL"})," using ",(0,a.jsx)(n.code,{children:"window.__cfBeacon = {token: ANALYTICS_TOKEN, send: {to: ENDPOINT_URL}}"})]}),"\n",(0,a.jsx)(n.h2,{id:"cdn-cgi",children:(0,a.jsx)(n.a,{href:"#cdn-cgi",children:"cdn-cgi"})}),"\n",(0,a.jsx)(n.p,{children:"My first thought was to change this to a Cloudflare Worker proxy, sitting on the same origin. However, this isn't even necessary..."}),"\n",(0,a.jsxs)(n.p,{children:["Cloudflare's ",(0,a.jsx)(n.code,{children:"CDN"})," network includes a 'secret' ",(0,a.jsx)(n.code,{children:"/cdn-cgi"})," directory on sites it proxies. The best-known use of this is the ",(0,a.jsx)(n.code,{children:"/cdn-cgi/trace"})," document, that details information about the user's interaction with the Cloudflare network."]}),"\n",(0,a.jsxs)(n.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(n.code,{className:"language-ini",children:[(0,a.jsx)(n.span,{className:"token key attr-name",children:"fl"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"21f439"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"h"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"cloudflare.com"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"ip"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"2b00:24e3:6444:5301:fcf9:4321:29f7:abcd"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"ts"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"1609427929.302"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"visit_scheme"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"https"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"uag"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4356.6 Safari/537.36"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"colo"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"LHR"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"http"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"http/2"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"loc"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"GB"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"tls"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"TLSv1.3"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"sni"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"plaintext"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"warp"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"off"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"gateway"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"off"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"gateway_account_id"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token value attr-value",children:"nil"}),"\n"]})]}),"\n",(0,a.jsxs)(n.p,{children:["It turns out that a lot of Cloudflare's services make use of this path, including their email protection, and their ",(0,a.jsx)(n.code,{children:"rocket loader"})," scripts, as well as many other things",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#def-2",id:"ref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["More pertinent to our needs, as seen in the default ",(0,a.jsx)(n.code,{children:"URL"}),", ",(0,a.jsx)(n.code,{children:"/cdn-cgi/rum"})," exists, and it's live on all Cloudflare-proxied sites - same origin \ud83d\udc4c."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u2728 Take Home Message"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"window.__cfBeacon = {token: ANALYTICS_TOKEN, send: {to: '/cdn-cgi/rum'}}"})}),"\n",(0,a.jsx)(n.p,{children:"will provide us with a same-origin destination for our requests"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To solve the initial request being 3",(0,a.jsx)(n.sup,{children:"rd"})," Party, I suggest just serving the ",(0,a.jsx)(n.code,{children:"beacon.min.js"}),", file yourself, as I haven't found it exposed in the same way."]}),"\n",(0,a.jsx)(n.h2,{id:"worth-it",children:(0,a.jsx)(n.a,{href:"#worth-it",children:"Worth it?"})}),"\n",(0,a.jsxs)(n.p,{children:["I'm in two minds about solving this. On one hand its somewhat futile as it only defeats ",(0,a.jsx)(n.code,{children:"DNS"})," based blocking, ",(0,a.jsx)(n.code,{children:"uBlock"})," or other ",(0,a.jsx)(n.code,{children:"HTTP"}),"-level blockers could quite easily write a rule to block this, on the other hand, Cloudflare Web Analytics is the only free limitless offering I've found that doesn't track users (not even using their IP address)",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#def-3",id:"ref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),", and doesn't require cookies - so maybe it is worth trying."]}),"\n",(0,a.jsx)(n.p,{children:"There are many ways to solve the issues of simple pattern blocking, using 'Cloudflare Workers', or literally any other proxy service - but I want a simple stack and don't want to be bounded by usage limits more than necessary - optimistic, I know!"}),"\n",(0,a.jsx)(n.p,{children:"Cloudflare Web Analytics is still in beta, so it's quite possible these features will be documented or removed \ud83d\ude22 in the future."}),"\n",(0,a.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{id:"def-1","ref-number":"1",children:[(0,a.jsx)(n.a,{href:"http://www.nice2predict.org/",children:"http://www.nice2predict.org/"})," ",(0,a.jsx)(n.a,{href:"#ref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(n.li,{id:"def-2","ref-number":"2",children:[(0,a.jsx)(n.a,{href:"https://www.google.com/search?q=%22/cdn-cgi/",children:'https://www.google.com/search?q="/cdn-cgi/'}),'" ',(0,a.jsx)(n.a,{href:"#ref-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(n.li,{id:"def-3","ref-number":"3",children:[(0,a.jsx)(n.a,{href:"https://www.cloudflare.com/en-gb/web-analytics/",children:"https://www.cloudflare.com/en-gb/web-analytics/"})," ",(0,a.jsx)(n.a,{href:"#ref-3","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n"]})]})},s=Object.assign({},(0,t.ah)(),e.components),o=s.wrapper;return o?(0,a.jsx)(o,Object.assign({},e,{children:(0,a.jsx)(n,{})})):n()}},1151:function(e,n,s){s.d(n,{ah:function(){return o}});var a=s(7294);const t=a.createContext({});function o(e){const n=a.useContext(t);return a.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}}}]);