(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"6f+1":function(e,a,t){"use strict";t.r(a),t.d(a,"metadata",(function(){return p})),t.d(a,"default",(function(){return i}));var n=t("rePB"),c=t("Ff2n"),o=(t("q1tI"),t("7ljp"));function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p={title:"Same Origin Cloudflare Analytics",description:"Reverse Engineering Cloudflare Web Analytics",emoji:"\u26c5\ufe0f",date:"2020-12-31",category:["dev"],image:{id:.713532530549192,size:{width:1e3,height:400},src:"/.assets/e41ee54e0805c7e26260bb6a236f7add.webp",srcSet:"/.assets/e41ee54e0805c7e26260bb6a236f7add.webp 1x, /.assets/b4c8c4d679df0f2680653fae8de9d115.webp 2x"}},m={metadata:p};function i(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(o.a)("wrapper",r(r(r({},m),t),{},{components:a,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Cloudflare's new analytics offering 'Cloudflare Web Analytics' promises a solution to the dichotomy of information vs privacy. Their free tier operates using a traditional ",Object(o.a)("inlineCode",{parentName:"p"},"JS")," beacon script loaded from Cloudflare's own domain ",Object(o.a)("inlineCode",{parentName:"p"},"static.cloudflareinsights.com"),", that reports back to ",Object(o.a)("inlineCode",{parentName:"p"},"cloudflareinsights.com"),". Cloudflare promises their solution to be 'privacy-first', and while I have very little doubt about it being the case, it won't be long before ad-blockers and other privacy-conscious tools block it - as a 3",Object(o.a)("sup",{parentName:"p"},"rd")," party resource."),Object(o.a)("h2",r({},{id:"reverse-engineering-the-beacon"}),Object(o.a)("a",r({parentName:"h2"},{href:"#reverse-engineering-the-beacon"}),"Reverse Engineering the Beacon")),Object(o.a)("p",null,"The script Cloudflare loads is heavily minified, and while not intentionally obfuscated, is almost impossible to read. I tried looking for stray source maps and the like, but didn't find any. Instead I used ",Object(o.a)("a",r({parentName:"p"},{href:"https://lelinhtinh.github.io/de4js/"}),Object(o.a)("inlineCode",{parentName:"a"},"de4js"))," with the ",Object(o.a)("a",r({parentName:"p"},{href:"https://github.com/lelinhtinh/de4js/blob/master/userscript/de4js_helper.user.js"}),Object(o.a)("inlineCode",{parentName:"a"},"unreadable"))," add-on, and then ran it through ",Object(o.a)("a",r({parentName:"p"},{href:"https://prettier.io/"}),"Prettier"),". The ",Object(o.a)("inlineCode",{parentName:"p"},"unreadable")," extension uses data from ",Object(o.a)("a",r({parentName:"p"},{href:"http://jsnice.org/"}),"JSNice"),", and tries to rename variables back to their likely name using a statistical model",Object(o.a)("sup",r({parentName:"p"},{id:"fnref-1"}),Object(o.a)("a",r({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". This works pretty well, but isn't infallible, so you have to have your whits about you and not blindly trust that a variable named ",Object(o.a)("inlineCode",{parentName:"p"},"url"),", is even a ",Object(o.a)("inlineCode",{parentName:"p"},"URL"),", for example."),Object(o.a)("p",null,"Once inside, the code showed a number of options that are documented (or that I could find)."),Object(o.a)("p",null,"There's the option to include custom tags in the beacon requests"),Object(o.a)("pre",r({},{className:"language-js",metastring:"JS"}),Object(o.a)("code",r({parentName:"pre"},{className:"language-js",metastring:"JS"}),Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token keyword control-flow"}),"if")," ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword control-flow"}),"if")," ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token string"}),'"object"')," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"!=")," ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"typeof")," ",Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag")," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"||")," ",Object(o.a)("span",r({parentName:"code"},{className:"token known-class-name class-name"}),"Array"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token method function property-access"}),"isArray"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.a)("span",r({parentName:"code"},{className:"token console class-name"}),"console"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token method function property-access"}),"warn"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token string"}),'\'Invalid custom tag format. Please use the following format: { "first_key": "first_value", "second_key": "second_value" }\''),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n    state",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"ct")," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",r({parentName:"code"},{className:"token function"}),"applyChange"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"__cfBeaconCustomTag"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n")),Object(o.a)("p",null,"This is cool but let's keep digging."),Object(o.a)("p",null,"Here we find what we've been looking for, an option to configure the ",Object(o.a)("inlineCode",{parentName:"p"},"URL")," the beacon will pass the ",Object(o.a)("strong",{parentName:"p"},"R"),"eal ",Object(o.a)("strong",{parentName:"p"},"U"),"ser ",Object(o.a)("strong",{parentName:"p"},"M"),"etrics to."),Object(o.a)("pre",r({},{className:"language-js",metastring:"JS"}),Object(o.a)("code",r({parentName:"pre"},{className:"language-js",metastring:"JS"}),Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"var")," initial ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," params",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"token"),"\n    ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"?")," params",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"send")," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"&&")," params",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"send"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"to"),"\n            ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"?")," params",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"send"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"to"),"\n            ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"code"},{className:"token string"}),'"https://cloudflareinsights.com/cdn-cgi/rum"'),"\n    ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword null nil"}),"null"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n")),Object(o.a)("p",null,"Looking further up in the script, we can see that the ",Object(o.a)("inlineCode",{parentName:"p"},"params")," can be taken from the ",Object(o.a)("inlineCode",{parentName:"p"},"script")," tag or, interestingly for us, from ",Object(o.a)("inlineCode",{parentName:"p"},"window.__cfBeacon"),"."),Object(o.a)("pre",r({},{className:"language-js",metastring:"JS"}),Object(o.a)("code",r({parentName:"pre"},{className:"language-js",metastring:"JS"}),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"var")," t ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"document"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"currentScript")," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"||")," ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token string"}),'"function"')," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"==")," ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"typeof")," ",Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"document"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"querySelector")," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"?")," ",Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"document"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token method function property-access"}),"querySelector"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token string"}),'"script[data-cf-beacon]"'),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"void")," ",Object(o.a)("span",r({parentName:"code"},{className:"token number"}),"0"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"var")," params ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",r({parentName:"code"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token property-access"}),"__cfBeacon"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n",Object(o.a)("span",r({parentName:"code"},{className:"token keyword"}),"var")," paramJson ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," t",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token method function property-access"}),"getAttribute"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(o.a)("span",r({parentName:"code"},{className:"token string"}),'"data-cf-beacon"'),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword control-flow"}),"if")," ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"paramJson",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")")," ",Object(o.a)("span",r({parentName:"code"},{className:"token keyword control-flow"}),"try")," ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n        params ",Object(o.a)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",r({parentName:"code"},{className:"token known-class-name class-name"}),"JSON"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"code"},{className:"token method function property-access"}),"parse"),Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"paramJson",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(o.a)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token spread operator"}),"..."),"\n\n")),Object(o.a)("p",null,"So, we can pick our own ",Object(o.a)("inlineCode",{parentName:"p"},"URL")," using ",Object(o.a)("inlineCode",r({parentName:"p"},{className:"language-js"}),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token property-access"}),"__cfBeacon")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),"=")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"token",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token constant"}),"ANALYTICS_TOKEN"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),",")," send",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"to",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token constant"}),"ENDPOINT_URL"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"}"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"}"))),Object(o.a)("h2",r({},{id:"cdn-cgi"}),Object(o.a)("a",r({parentName:"h2"},{href:"#cdn-cgi"}),"cdn-cgi")),Object(o.a)("p",null,"My first thought was to change this to a Cloudflare Worker proxy, sitting on the same origin. However, this isn't even necessary..."),Object(o.a)("p",null,"Cloudflare's ",Object(o.a)("inlineCode",{parentName:"p"},"CDN")," network includes a 'secret' ",Object(o.a)("inlineCode",{parentName:"p"},"/cdn-cgi")," directory on sites it proxies. The best-known use of this is the ",Object(o.a)("inlineCode",{parentName:"p"},"/cdn-cgi/trace")," document, that details information about the user's interaction with the Cloudflare network."),Object(o.a)("pre",r({},{className:"language-ini",metastring:"/cdn-cgi/trace"}),Object(o.a)("code",r({parentName:"pre"},{className:"language-ini",metastring:"/cdn-cgi/trace"}),Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"fl"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"21f439"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"h"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"cloudflare.com"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"ip"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"2b00:24e3:6444:5301:fcf9:4321:29f7:abcd"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"ts"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"1609427929.302"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"visit_scheme"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"https"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"uag"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4356.6 Safari/537.36"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"colo"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"LHR"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"http"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"http/2"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"loc"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"GB"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"tls"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"TLSv1.3"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"sni"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"plaintext"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"warp"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"off"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"gateway"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"off"),"\n",Object(o.a)("span",r({parentName:"code"},{className:"token constant"}),"gateway_account_id"),Object(o.a)("span",r({parentName:"code"},{className:"token attr-value"}),Object(o.a)("span",r({parentName:"span"},{className:"token punctuation"}),"="),"nil"),"\n")),Object(o.a)("p",null,"It turns out that a lot of Cloudflare's services make use of this path, including their email protection, and their ",Object(o.a)("inlineCode",{parentName:"p"},"rocket loader")," scripts, as well as many other things",Object(o.a)("sup",r({parentName:"p"},{id:"fnref-2"}),Object(o.a)("a",r({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),"."),Object(o.a)("p",null,"More pertinent to our needs, as seen in the default ",Object(o.a)("inlineCode",{parentName:"p"},"URL"),", ",Object(o.a)("inlineCode",{parentName:"p"},"/cdn-cgi/rum")," exists, and it's live on all Cloudflare-proxied sites - same origin \ud83d\udc4c."),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"\u2728 Take Home Message"),Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("inlineCode",r({parentName:"p"},{className:"language-js"}),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token dom variable"}),"window"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"."),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token property-access"}),"__cfBeacon")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),"=")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"token",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token constant"}),"ANALYTICS_TOKEN"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),",")," send",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"{"),"to",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token operator"}),":")," ",Object(o.a)("span",r({parentName:"inlineCode"},{className:"token string"}),"'/cdn-cgi/rum'"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"}"),Object(o.a)("span",r({parentName:"inlineCode"},{className:"token punctuation"}),"}"))),Object(o.a)("p",{parentName:"blockquote"},"will provide us with a same-origin destination for our requests")),Object(o.a)("p",null,"To solve the initial request being 3",Object(o.a)("sup",{parentName:"p"},"rd")," Party, I suggest just serving the ",Object(o.a)("inlineCode",{parentName:"p"},"beacon.min.js"),", file yourself, as I haven't found it exposed in the same way."),Object(o.a)("h2",r({},{id:"worth-it"}),Object(o.a)("a",r({parentName:"h2"},{href:"#worth-it"}),"Worth it?")),Object(o.a)("p",null,"I'm in two minds about solving this. On one hand its somewhat futile as it only defeats ",Object(o.a)("inlineCode",{parentName:"p"},"DNS")," based blocking, ",Object(o.a)("inlineCode",{parentName:"p"},"uBlock")," or other ",Object(o.a)("inlineCode",{parentName:"p"},"HTTP"),"-level blockers could quite easily write a rule to block this, on the other hand, Cloudflare Web Analytics is the only free limitless offering I've found that doesn't track users (not even using their IP address)",Object(o.a)("sup",r({parentName:"p"},{id:"fnref-3"}),Object(o.a)("a",r({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3")),", and doesn't require cookies - so maybe it is worth trying."),Object(o.a)("p",null,"There are many ways to solve the issues of simple pattern blocking, using 'Cloudflare Workers', or literally any other proxy service - but I want a simple stack and don't want to be bounded by usage limits more than necessary - optimistic, I know!"),Object(o.a)("p",null,"Cloudflare Web Analytics is still in beta, so it's quite possible these features will be documented or removed \ud83d\ude22 in the future."),Object(o.a)("div",r({},{className:"footnotes"}),Object(o.a)("hr",{parentName:"div"}),Object(o.a)("ol",{parentName:"div"},Object(o.a)("li",r({parentName:"ol"},{id:"fn-1","ref-number":"1"}),Object(o.a)("a",r({parentName:"li"},{href:"http://www.nice2predict.org/"}),"http://www.nice2predict.org/"),Object(o.a)("a",r({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),Object(o.a)("li",r({parentName:"ol"},{id:"fn-2","ref-number":"2"}),Object(o.a)("a",r({parentName:"li"},{href:"https://www.google.com/search?q=%22/cdn-cgi/%22"}),'https://www.google.com/search?q="/cdn-cgi/"'),Object(o.a)("a",r({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),Object(o.a)("li",r({parentName:"ol"},{id:"fn-3","ref-number":"3"}),Object(o.a)("a",r({parentName:"li"},{href:"https://www.cloudflare.com/en-gb/web-analytics/"}),"https://www.cloudflare.com/en-gb/web-analytics/"),Object(o.a)("a",r({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")))))}i.isMDXComponent=!0},"7ljp":function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("q1tI"),c=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var m=c.a.createContext({}),i=function(e){var a=c.a.useContext(m),t=a;return e&&(t="function"===typeof e?e(a):r(r({},a),e)),t},l={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},N=c.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),N=i(t),d=n,b=N["".concat(s,".").concat(d)]||N[d]||l[d]||o;return t?c.a.createElement(b,r(r({ref:a},m),{},{components:t})):c.a.createElement(b,r({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"===typeof e||n){var o=t.length,s=new Array(o);s[0]=N;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r.mdxType="string"===typeof e?e:n,s[1]=r;for(var m=2;m<o;m++)s[m]=t[m];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,t)}N.displayName="MDXCreateElement"}}]);