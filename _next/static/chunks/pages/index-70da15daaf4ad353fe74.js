_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6eB+":function(e,t,n){e.exports={main:"styles_main__217Sz",me:"styles_me__3zopS",memoji:"styles_memoji__2_IVA",heading:"styles_heading__ThNG7",posts:"styles_posts__EwL8p",photo:"styles_photo__RJfhM",photos:"styles_photos__3j7mG"}},"8XfR":function(e,t,n){"use strict";t.a=function(e){return e.map((function(e){var t=e.props;return t.metadata.date=new Date(t.metadata.date),t})).sort((function(e,t){return e.metadata.date-t.metadata.date}))}},MIZt:function(e,t,n){e.exports={memoji:"styles_memoji__3jDkc",notReady:"styles_notReady__NraKJ",ready:"styles_ready__2UrBZ"}},P1Hs:function(e,t,n){e.exports={post:"styles_post__RqTCO",title:"styles_title__2svP8",emoji:"styles_emoji__2jMHX",description:"styles_description__Mmh8A",readingTime:"styles_readingTime__O8grF"}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return p})),n.d(t,"default",(function(){return j}));var r=n("rePB"),c=n("nKUr"),a=n("9ixD"),o=n("ck7P"),s=n("nmIM"),i=n("8XfR"),u=n("6eB+");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=Math.floor(105),h=function(e){return"/me-360t/frame-".concat(3*e,".webp")},p=!0;function j(e){var t=e.posts,n=e.images,r=e.imageSize;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.d,{title:"Home",openGraph:{title:"Home",site_name:"reuben.science"}}),Object(c.jsx)(a.b,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")}]}),Object(c.jsxs)("main",{className:u.main,children:[Object(c.jsxs)("section",{className:u.me,children:[Object(c.jsx)(o.a,{className:u.memoji,frameCount:m,getFrameURL:h,width:Math.floor(688.5),height:Math.floor(525)}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Reuben"}),Object(c.jsx)("p",{children:"No idea what's gonna end up on here, inevitably just some random shit"})]})]}),t.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:u.heading,children:"Recent Posts"}),Object(c.jsx)("section",{className:u.posts,children:Object(i.a)(t).map((function(e){return Object(c.jsx)(s.a,f(f({},e),{},{className:u.postLink}),e.slug)}))})]}),n.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:u.heading,children:"Recent Photos"}),Object(c.jsx)("section",{className:u.photos,style:{"--columns":Math.min(n.length,4),"--image-size":"".concat(r,"px")},children:n.map((function(e){var t=e.src,n=e.id;return Object(c.jsx)("a",{href:"https://unsplash.com/photos/".concat(n),className:u.photo,"aria-label":"Unsplash Photo ".concat(n),children:Object(c.jsx)("img",{src:t,alt:"Unsplash Photo ".concat(n)})},n)}))})]})]})]})}},ck7P:function(e,t,n){"use strict";var r=n("rePB"),c=n("o0o1"),a=n.n(c);function o(e,t,n,r,c,a,o){try{var s=e[a](o),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,c)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var a=e.apply(t,n);function s(e){o(a,r,c,s,i,"next",e)}function i(e){o(a,r,c,s,i,"throw",e)}s(void 0)}))}}var i=n("Ff2n"),u=n("nKUr"),l=n("q1tI"),f=n("MIZt");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.frameCount,n=e.getFrameURL,r=e.defaultFrameNumber,c=void 0===r?Math.floor(t/2):r,o=e.width,m=e.height,p=e.className,j=Object(i.a)(e,["frameCount","getFrameURL","defaultFrameNumber","width","height","className"]),d=Object(l.useRef)(null),b=Object(l.useRef)([]).current,O=Object(l.useRef)({}).current,v=Object(l.useState)(!1),y=v[0],g=v[1],w=Object(l.useState)(!1),_=w[0],x=w[1],P=Object(l.useState)(!1),N=P[0],R=P[1],M=function(e){if(b[e])return b[e];var t=new Image;return t.src=n(e),t},E=function(){var e=s(a.a.mark((function e(){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),I(M(c)).then((function(){return R(!0)})),n=Array.from({length:t},(function(e,t){return M(t)})),r=setTimeout((function(){n.forEach((function(e,t){return t!==c&&(e.src="")})),n=null}),5e3),o=Promise.all(n.map(function(){var e=s(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return e.abrupt("return",b[n]=e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())).then((function(e){return clearTimeout(r),e})),e.abrupt("return",n?o:null);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=s(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.next=4,e.sent.decode();case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){if(e&&d.current){var t=d.current.getContext("2d"),n=d.current.width/2-e.width/2,r=d.current.height/2-e.height/2;t.clearRect(n,r,e.width,e.height),t.drawImage(e,n,r)}},F=function(e){var n=e.mx,r=e.my,c=e.cx,a=e.cy,o=e.fraction,s=void 0===o?null:o;if(null===s){var i=c-n,u=a-r,l=Math.atan2(i,-u);s=(2*Math.PI+l)%(2*Math.PI)/(2*Math.PI)}return Math.floor(Math.max(Math.min(s*t,t),0))},S=function(e){var t=e.mx,n=e.my,r=e.cx,c=e.cy,a=e.fraction,o=F({mx:t,my:n,cx:r,cy:c,fraction:void 0===a?null:a});window.requestAnimationFrame((function(){return D(b[o])}))},k=function(){var e=d.current.getBoundingClientRect(),t=e.x,n=e.y;return{mx:t+e.width/2,my:n+e.height/2}};return Object(l.useEffect)((function(){console.log({singleFrameReady:N,ready:y,framesLoading:_});d.current;var e=k();e.mx,e.my;if(_||E().then((function(){return g(!0)})).then(s(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=D,e.next=3,I(M(c));case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))),N&&D(b[c]),y)try{!function(e){var t=e.fr,n=e.to;if(!isNaN(n))var r=n>t?1:-1,c=(Math.abs(n-t),t),a=setInterval((function(){if(c+=r,-1===r&&c<n||1===r&&c>n)return clearInterval(a);window.requestAnimationFrame((function(){return D(b[c])}))}),7)}({fr:c,to:F(h(h({},k()),O))})}catch(f){}var t=function(e){var t=e.clientX,n=e.clientY;if(!y)return O.cx=t,void(O.cy=n);S(h(h({},k()),{},{cx:t,cy:n}))},n=!1;if("ontouchstart"in window&&!n){var r=0,o=1,i=setInterval((function(){return S({fraction:r=(r+1+.01*o*Math.random())%1})}),10),u=setInterval((function(){return o*=Math.random()>.5?-1:1}),2e3),l=function(e){var r=e.changedTouches[0],c=r.clientX,a=r.clientY;n=!0,clearInterval(i),clearInterval(u),t({clientX:c,clientY:a}),e.preventDefault()};return d.current.addEventListener("touchstart",l,!1),d.current.addEventListener("touchmove",l,!1),function(){clearInterval(i),clearInterval(u),d.current&&(d.current.removeEventListener("touchstart",l,!1),d.current.removeEventListener("touchmove",l,!1))}}return window.addEventListener("mousemove",t),function(){return window.removeEventListener("mousemove",t)}}),[y,N,_]),Object(u.jsx)("canvas",h(h({},j),{},{className:[f.memoji,p||"",y||N?f.ready:f.notReady].join(" "),ref:d,width:o,height:m}))}},nmIM:function(e,t,n){"use strict";var r=n("rePB"),c=n("Ff2n"),a=n("nKUr"),o=n("7NIq"),s=n("P1Hs");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.slug,n=e.metadata,r=n.title,i=n.description,l=n.emoji,f=n.readingTime,m=Object(c.a)(e,["slug","metadata"]);return Object(a.jsx)(o.a,{href:"/posts/".concat(t),passHref:!0,children:function(e){return Object(a.jsx)("a",u(u({},m),{},{children:Object(a.jsxs)("div",{className:s.post,children:[Object(a.jsxs)("p",{className:s.title,children:[Object(a.jsx)("span",{className:s.emoji,children:l}),r]}),Object(a.jsxs)("p",{className:s.description,children:[i||""," ",Object(a.jsxs)("span",{className:s.readingTime,children:[" \u2022 ",f]})]})]})}))}},t)}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);