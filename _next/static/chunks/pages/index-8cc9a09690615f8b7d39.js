_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"6eB+":function(e,t,r){e.exports={main:"styles_main__217Sz",me:"styles_me__3zopS",memoji:"styles_memoji__2_IVA",heading:"styles_heading__ThNG7",posts:"styles_posts__EwL8p",photo:"styles_photo__RJfhM",photos:"styles_photos__3j7mG"}},"8XfR":function(e,t,r){"use strict";t.a=function(e){return e.map((function(e){var t=e.props;return t.metadata.date=new Date(t.metadata.date),t})).sort((function(e,t){return e.metadata.date-t.metadata.date}))}},MIZt:function(e,t,r){e.exports={memoji:"styles_memoji__3jDkc",notReady:"styles_notReady__NraKJ",ready:"styles_ready__2UrBZ"}},P1Hs:function(e,t,r){e.exports={post:"styles_post__RqTCO",title:"styles_title__2svP8",emoji:"styles_emoji__2jMHX",description:"styles_description__Mmh8A",readingTime:"styles_readingTime__O8grF"}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return g})),r.d(t,"default",(function(){return x}));var n=r("rePB"),c=r("nKUr"),a=r("9ixD"),o=r("o0o1"),s=r.n(o);function i(e,t,r,n,c,a,o){try{var s=e[a](o),i=s.value}catch(u){return void r(u)}s.done?t(i):Promise.resolve(i).then(n,c)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,c){var a=e.apply(t,r);function o(e){i(a,n,c,o,s,"next",e)}function s(e){i(a,n,c,o,s,"throw",e)}o(void 0)}))}}var l=r("Ff2n"),f=r("q1tI"),m=r("MIZt");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.frameCount,r=e.getFrameURL,n=e.defaultFrameNumber,a=void 0===n?Math.floor(t/2):n,o=e.width,i=e.height,p=e.className,d=Object(l.a)(e,["frameCount","getFrameURL","defaultFrameNumber","width","height","className"]),j=Object(f.useRef)(null),b=Object(f.useRef)([]).current,O=Object(f.useRef)({}).current,v=Object(f.useState)(!1),y=v[0],w=v[1],_=Object(f.useState)(!1),g=_[0],x=_[1],P=Object(f.useState)(!1),N=P[0],R=P[1],M=function(){var e=u(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),E(a).then((function(){return R(!0)})),r=Array.from({length:t},function(){var e=u(s.a.mark((function e(t,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(r);case 2:return e.abrupt("return",b[r]=e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=u(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b[t]){e.next=2;break}return e.abrupt("return",b[t]);case 2:return(n=new Image).src=r(t),e.next=6,n.decode();case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e){if(e&&j.current){var t=j.current.getContext("2d"),r=j.current.width/2-e.width/2,n=j.current.height/2-e.height/2;t.clearRect(r,n,e.width,e.height),t.drawImage(e,r,n)}},D=function(e){var r=e.mx,n=e.my,c=e.cx,a=e.cy,o=e.fraction,s=void 0===o?null:o;if(null===s){var i=c-r,u=a-n,l=Math.atan2(i,-u);s=(2*Math.PI+l)%(2*Math.PI)/(2*Math.PI)}return Math.floor(Math.max(Math.min(s*t,t),0))},S=function(e){var t=e.mx,r=e.my,n=e.cx,c=e.cy,a=e.fraction,o=D({mx:t,my:r,cx:n,cy:c,fraction:void 0===a?null:a});window.requestAnimationFrame((function(){return I(b[o])}))};return Object(f.useEffect)((function(){console.log({singleFrameReady:N,ready:y,framesLoading:g});j.current;var e=j.current.getBoundingClientRect(),t=e.x,r=e.y,n=e.width,c=e.height,o=t+n/2,i=r+c/2;if(g||M().then((function(){return w(!0)})).then(u(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=I,e.next=3,E(a);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))),N&&I(b[a]),y)try{!function(e){var t=e.fr,r=e.to;if(!isNaN(r))var n=r>t?1:-1,c=(Math.abs(r-t),t),a=setInterval((function(){if(c+=n,-1===n&&c<r||1===n&&c>r)return clearInterval(a);window.requestAnimationFrame((function(){return I(b[c])}))}),7)}({fr:a,to:D(h({mx:o,my:i},O))})}catch(x){}var l=function(e){var t=e.clientX,r=e.clientY;if(!y)return O.cx=t,void(O.cy=r);S({mx:o,my:i,cx:t,cy:r})},f=!1;if("ontouchstart"in window&&!f){var m=0,p=1,d=setInterval((function(){return S({fraction:m=(m+1+.01*p*Math.random())%1})}),10),v=setInterval((function(){return p*=Math.random()>.5?-1:1}),2e3),_=function(e){var t=e.changedTouches[0],r=t.clientX,n=t.clientY;f=!0,clearInterval(d),clearInterval(v),l({clientX:r,clientY:n})};return j.current.addEventListener("touchstart",_,!1),j.current.addEventListener("touchmove",_,!1),function(){clearInterval(d),clearInterval(v),j.current&&(j.current.removeEventListener("touchstart",_,!1),j.current.removeEventListener("touchmove",_,!1))}}return window.addEventListener("mousemove",l),function(){return window.removeEventListener("mousemove",l)}}),[y,N,g]),Object(c.jsx)("canvas",h(h({},d),{},{className:[m.memoji,p||"",y||N?m.ready:m.notReady].join(" "),ref:j,width:o,height:i}))},j=r("nmIM"),b=r("8XfR"),O=r("6eB+");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=Math.floor(105),_=function(e){return"/me-360t/frame-".concat(3*e,".webp")},g=!0;function x(e){var t=e.posts,r=e.images,n=e.imageSize;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.d,{title:"Home",openGraph:{title:"Home",site_name:"reuben.science"}}),Object(c.jsx)(a.b,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")}]}),Object(c.jsxs)("main",{className:O.main,children:[Object(c.jsxs)("section",{className:O.me,children:[Object(c.jsx)(d,{className:O.memoji,frameCount:w,getFrameURL:_,width:Math.floor(688.5),height:Math.floor(525)}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Reuben"}),Object(c.jsx)("p",{children:"No idea what's gonna end up on here, inevitably just some random shit"})]})]}),Object(c.jsx)("p",{className:O.heading,children:"Recent Posts"}),Object(c.jsx)("section",{className:O.posts,children:Object(b.a)(t).map((function(e){return Object(c.jsx)(j.a,y(y({},e),{},{className:O.postLink}),e.slug)}))}),Object(c.jsx)("p",{className:O.heading,children:"Recent Photos"}),Object(c.jsx)("section",{className:O.photos,style:{"--columns":Math.min(r.length,4),"--image-size":"".concat(n,"px")},children:r.map((function(e){var t=e.src,r=e.id;return Object(c.jsx)("a",{href:"https://unsplash.com/photos/".concat(r),className:O.photo,"aria-label":"Unsplash Photo ".concat(r),children:Object(c.jsx)("img",{src:t,alt:"Unsplash Photo ".concat(r)})},r)}))})]})]})}},nmIM:function(e,t,r){"use strict";var n=r("rePB"),c=r("Ff2n"),a=r("nKUr"),o=r("7NIq"),s=r("P1Hs");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.slug,r=e.metadata,n=r.title,i=r.description,l=r.emoji,f=r.readingTime,m=Object(c.a)(e,["slug","metadata"]);return Object(a.jsx)(o.a,{href:"/posts/".concat(t),passHref:!0,children:function(e){return Object(a.jsx)("a",u(u({},m),{},{children:Object(a.jsxs)("div",{className:s.post,children:[Object(a.jsxs)("p",{className:s.title,children:[Object(a.jsx)("span",{className:s.emoji,children:l}),n]}),Object(a.jsxs)("p",{className:s.description,children:[i||""," ",Object(a.jsxs)("span",{className:s.readingTime,children:[" \u2022 ",f]})]})]})}))}},t)}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,2,1,3]]]);