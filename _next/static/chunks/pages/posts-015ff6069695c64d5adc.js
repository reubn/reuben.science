_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"52dC":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("gnXo")}])},P1Hs:function(e,t,n){e.exports={post:"styles_post__RqTCO",title:"styles_title__2svP8",emoji:"styles_emoji__2jMHX",description:"styles_description__Mmh8A",readingTime:"styles_readingTime__O8grF"}},glNx:function(e,t,n){e.exports={main:"styles_main__1ape0",postLink:"styles_postLink__2yv3h"}},gnXo:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u})),n.d(t,"default",(function(){return j}));var r=n("rePB"),s=n("nKUr"),c=n("9ixD"),i=n("nmIM"),o=n("glNx");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=!0;function j(e){var t=e.posts.map((function(e){var t=e.props;return t.metadata.date=new Date(t.metadata.date),t})).sort((function(e,t){return e.metadata.date-t.metadata.date}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c.d,{title:"Posts",openGraph:{title:"Posts",site_name:"reuben.science"}}),Object(s.jsx)(c.b,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Posts",item:"https://".concat("reuben.science","/posts")}]}),Object(s.jsx)("main",{className:o.main,children:t.map((function(e){return Object(s.jsx)(i.a,p(p({},e),{},{className:o.postLink}),e.slug)}))})]})}},nmIM:function(e,t,n){"use strict";var r=n("rePB"),s=n("Ff2n"),c=n("nKUr"),i=n("7NIq"),o=n("P1Hs");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.slug,n=e.metadata,r=n.title,a=n.description,u=n.emoji,j=n.readingTime,l=Object(s.a)(e,["slug","metadata"]);return Object(c.jsx)(i.a,{href:"/posts/".concat(t),passHref:!0,children:function(e){return Object(c.jsx)("a",p(p({},l),{},{children:Object(c.jsxs)("div",{className:o.post,children:[Object(c.jsxs)("p",{className:o.title,children:[Object(c.jsx)("span",{className:o.emoji,children:u}),r]}),Object(c.jsxs)("p",{className:o.description,children:[a||""," ",Object(c.jsxs)("span",{className:o.readingTime,children:[" \u2022 ",j]})]})]})}))}},t)}}},[["52dC",0,2,1,3]]]);