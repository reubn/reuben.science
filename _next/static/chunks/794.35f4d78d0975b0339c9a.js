(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{3905:function(e,t,a){"use strict";a.d(t,{kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"===typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44794:function(e,t,a){"use strict";a.r(t),a.d(t,{codeBlocks:function(){return _},default:function(){return Q},metadata:function(){return W}});var n=a(96156),r=a(17375),o=a(67294),s=a(3905),i=a(78902),l=a(85893);const p=({flip:e})=>{const t={width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0};return o.createElement("div",{style:t})},c=({portrait:e,buttonStyle:t,linesStyle:a,style:n,...r})=>{const s={display:"flex",flexDirection:e?"row":"column",placeItems:"center",height:"100%",cursor:e?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...n},i={flexGrow:1,height:e?2:"100%",width:e?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 7px rgba(0,0,0,.35)",...a},l={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",boxShadow:"0 0 7px rgba(0,0,0,.35)",transform:e?"rotate(90deg)":void 0,...t};return o.createElement("div",Object.assign({className:"__rcs-handle-root"},r,{style:s}),o.createElement("div",{className:"__rcs-handle-line",style:i}),o.createElement("div",{className:"__rcs-handle-button",style:l},o.createElement(p,null),o.createElement(p,{flip:!0})),o.createElement("div",{className:"__rcs-handle-line",style:i}))},d=(e,t,a,n)=>{const r=(0,o.useRef)();(0,o.useEffect)((()=>{r.current=t}),[t]),(0,o.useEffect)((()=>{if(!a||!a.addEventListener)return;const t=e=>r.current&&r.current(e);return a.addEventListener(e,t,n),()=>{a.removeEventListener(e,t,n)}}),[e,a,n])},h="undefined"!==typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect,u=(0,o.forwardRef)(((e,t)=>o.createElement("div",Object.assign({},e,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",willChange:"clip",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"},"data-rcs":"clip-item",ref:t}))));u.displayName="ThisClipContainer";const m=(0,o.forwardRef)((({children:e,portrait:t},a)=>{const n={position:"absolute",width:t?"100%":void 0,height:t?void 0:"100%",transform:t?"translateY(-50%)":"translateX(-50%)",pointerEvents:"all"};return o.createElement("div",{style:{position:"absolute",top:0,width:"100%",height:"100%",pointerEvents:"none"},"data-rcs":"handle-container",ref:a},o.createElement("div",{style:n},e))}));m.displayName="ThisHandleContainer";const f={passive:!0},b={capture:!0,passive:!1},g=({handle:e,itemOne:t,itemTwo:a,onlyHandleDraggable:n=!1,onPositionChange:r,portrait:s=!1,position:i=50,boundsPadding:l=0,style:p,...g})=>{const k=(0,o.useRef)(null),y=(0,o.useRef)(null),w=(0,o.useRef)(null),v=(0,o.useRef)(i),N=(e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e})),t.current})(i),[x,S]=(0,o.useState)(!1),O=(0,o.useRef)(!1),[E,I]=(0,o.useState)(),[C,j]=(0,o.useState)(!1);(0,o.useEffect)((()=>{I(n?w.current:k.current)}),[n]);const T=(0,o.useCallback)((function({x:e,y:t,isOffset:a,portrait:n,boundsPadding:o}){const{top:s,left:i,width:l,height:p}=k.current.getBoundingClientRect();if(0===l||0===p)return;const c=Math.min(Math.max(n?a?t-s-window.pageYOffset:t:a?e-i-window.pageXOffset:e,0),n?p:l),d=c/(n?p:l)*100,h=n?0===c||c===p:0===c||c===l,u=d===v.current&&(0===v.current||100===v.current);if(C&&u&&h)return;j(!0),v.current=d;const m=Math.min(Math.max(c,0+o),(n?p:l)-o);y.current.style.clip=n?`rect(auto,auto,${m}px,auto)`:`rect(auto,${m}px,auto,auto)`,w.current.style.transform=n?`translate3d(0,${m}px,0)`:`translate3d(${m}px,0,0)`,r&&r(v.current)}),[C,r]);(0,o.useEffect)((()=>{const{width:e,height:t}=k.current.getBoundingClientRect(),a=i===N?v.current:i;T({portrait:s,boundsPadding:l,x:e/100*a,y:t/100*a})}),[s,i,N,l,T]);const P=(0,o.useCallback)((e=>{e.preventDefault(),T({portrait:s,boundsPadding:l,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY}),S(!0)}),[s,l,T]),M=(0,o.useCallback)((function(e){T({portrait:s,boundsPadding:l,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY})}),[s,l,T]),D=(0,o.useCallback)((()=>{S(!1)}),[]),G=(0,o.useCallback)((({width:e,height:t})=>{T({portrait:s,boundsPadding:l,x:e/100*v.current,y:t/100*v.current})}),[s,l,T]);(0,o.useEffect)((()=>(x&&!O.current&&(window.addEventListener("mousemove",M,f),window.addEventListener("mouseup",D,f),window.addEventListener("touchmove",M,f),window.addEventListener("touchend",D,f),O.current=!0),()=>{O.current&&(window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",D),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",D),O.current=!1)})),[M,D,x]),((e,t)=>{const a=(0,o.useRef)(),n=(0,o.useCallback)((()=>{e.current&&a.current&&a.current.observe(e.current)}),[e]);h((()=>(a.current=new ResizeObserver((([e])=>t(e.contentRect))),n(),()=>{a.current&&a.current.disconnect()})),[t,n])})(k,G),d("mousedown",P,E,b),d("touchstart",P,E,b);const q=e||o.createElement(c,{portrait:s}),R={position:"relative",overflow:"hidden",cursor:x?s?"ns-resize":"ew-resize":void 0,userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...p};return o.createElement("div",Object.assign({},g,{ref:k,style:R,"data-rcs":"root"}),a,o.createElement(u,{ref:y},t),o.createElement(m,{portrait:s,ref:w},q))};var k=a(76032);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var w=function(e){var t=function(){return(0,l.jsx)("div",{className:k.handle})};return(0,l.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({className:k.slider,handle:(0,l.jsx)(t,{}),onlyHandleDraggable:"ontouchstart"in window},e))},v=a(58058),N=a(68696),x={id:.18932235759387095,size:{width:1e3,height:593},src:"/.assets/a78e8c62fcdcb2c3986eec6579052904/os.webp",srcSet:"/.assets/a78e8c62fcdcb2c3986eec6579052904/os.webp 1x, /.assets/dc0fe23e51bc611c1d17b2881bb98e80/os.webp 2x"},S={id:.01949334232334543,size:{width:1e3,height:593},src:"/.assets/93418bb95f9fac84e08b6d4d3de93848/osm.webp",srcSet:"/.assets/93418bb95f9fac84e08b6d4d3de93848/osm.webp 1x, /.assets/5cea70b8dfd7e28c3fe09f455f17adfc/osm.webp 2x"},O={id:.30408618874178583,size:{width:1e3,height:600},src:"/.assets/e6958491672bcfa21cd59679b7014666/stravaHeat.webp",srcSet:"/.assets/e6958491672bcfa21cd59679b7014666/stravaHeat.webp 1x, /.assets/712bb6fbb985080d39d74e1d95594c72/stravaHeat.webp 2x"},E={id:.7361072943620892,size:{width:307,height:290},src:"/.assets/de91817851769571c819fb3ec979dbc1/qgisA.webp",srcSet:"/.assets/de91817851769571c819fb3ec979dbc1/qgisA.webp 1x, /.assets/77ef9be312f66451d87f878551c3a47b/qgisA.webp 2x"},I={id:.36736714248828073,size:{width:1e3,height:600},src:"/.assets/acb6d499e2148e05e5e733e5bb48f8cd/os2.webp",srcSet:"/.assets/acb6d499e2148e05e5e733e5bb48f8cd/os2.webp 1x, /.assets/228f8602435643b19084af795db23704/os2.webp 2x"},C={id:.7634346730838475,size:{width:1e3,height:600},src:"/.assets/e11a4a1a5059e63525bbf7f690b08088/stravaOS2.webp",srcSet:"/.assets/e11a4a1a5059e63525bbf7f690b08088/stravaOS2.webp 1x, /.assets/a727c87afb7aa88dcf07105d935f5367/stravaOS2.webp 2x"},j={id:.35600151426692994,size:{width:1260,height:777},src:"/.assets/73aad0af0ca650fab9d77089fa53e7d5/osMapBoundaries.webp",srcSet:"/.assets/73aad0af0ca650fab9d77089fa53e7d5/osMapBoundaries.webp 1x, /.assets/9bd608000441f0af5baabd239225d1c7/osMapBoundaries.webp 2x"},T={id:.1176654149606744,size:{width:527,height:461},src:"/.assets/1d733004357b53a68f18c00c0eb7ae60/ip.webp",srcSet:"/.assets/1d733004357b53a68f18c00c0eb7ae60/ip.webp 1x, /.assets/932da206e857ec7320ac9da29da4a098/ip.webp 2x"},P={id:.46395323642928754,size:{width:393,height:456},src:"/.assets/c753079f8969668f5d5dd2c10f5e796d/scaleA.webp",srcSet:"/.assets/c753079f8969668f5d5dd2c10f5e796d/scaleA.webp 1x, /.assets/621235376e68912f4546eb3cbdf2e5c9/scaleA.webp 2x"},M={id:.5509573099285205,size:{width:379,height:216},src:"/.assets/a863b275b28ef40012a97ce8e566a642/int.webp",srcSet:"/.assets/a863b275b28ef40012a97ce8e566a642/int.webp 1x, /.assets/08b4a5aa8d9da9b77e16bed3edbf7bdd/int.webp 2x"},D={id:.670118607701987,size:{width:433,height:494},src:"/.assets/f1b5e15aa01b448b1d19044933d6599d/export.webp",srcSet:"/.assets/f1b5e15aa01b448b1d19044933d6599d/export.webp 1x, /.assets/35946987d2c7523862dd18b978b10fb3/export.webp 2x"},G={id:.6338785312884954,size:{width:800,height:663},src:"/.assets/b11542aa3082a842d1e6dfcc751273d7/repro.webp",srcSet:"/.assets/b11542aa3082a842d1e6dfcc751273d7/repro.webp 1x, /.assets/33a4ff8bd0da68b887d828d2b60331e2/repro.webp 2x"},q={id:.8001870834563285,size:{width:756,height:619},src:"/.assets/6c6bc79fdf7db8c5fa273490b702fe5b/pag.webp",srcSet:"/.assets/6c6bc79fdf7db8c5fa273490b702fe5b/pag.webp 1x, /.assets/ff4e019683e3f52d39972575c8ab4d92/pag.webp 2x"},R={id:.3681213002551267,size:{width:1e3,height:593},src:"/.assets/1645d16b4f33dba173609f35eea1ae90/full.webp",srcSet:"/.assets/1645d16b4f33dba173609f35eea1ae90/full.webp 1x, /.assets/00895687fc2d3a2e0988351c24572916/full.webp 2x"};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=[{language:"php",lines:["to_int($id) || 'km'"]}],W={title:"The Ultimate Adventure Maps",description:"Enhanced OS Maps for Navigation",emoji:"\ud83d\uddfa",date:"2020-12-29",category:["outdoors"],image:{id:.6573545054378411,size:{width:1e3,height:600},src:"/.assets/c97104ffd04059c5e86748162832c876/header.webp",srcSet:"/.assets/c97104ffd04059c5e86748162832c876/header.webp 1x, /.assets/8f059f8a4db56d750bd735b3775f370a/header.webp 2x"}},Z={codeBlocks:_,metadata:W};function Q(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",z(z(z({},Z),a),{},{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",z({},{id:"ordnance-survey"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#ordnance-survey"}),"Ordnance Survey")),(0,s.kt)("p",null,"If you're heading into the mountains, moors, or anywhere you aren't 100% sure you'll have signal, I have no doubts in saying that the de facto maps for most people in the UK",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-1"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," will be the iconic tangerine-covered ",(0,s.kt)("inlineCode",{parentName:"p"},"1:25000")," OS Explorer maps, published by the Ordnance Survey - the United Kingdom's quasi-quango mapping agency. With a track record of over 200 years' on-the-ground surveys, OS Maps, with their expert cartography, and complete, uninterrupted coverage of Great Britain",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-1"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),", are probably the best paper maps you can buy anywhere in the world."),(0,s.kt)("p",null,"Backed by the biggest geographical database on earth",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-2"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2")),", no other maps include such continuous and consistently rich detail over such a wide area. In most other maps, woods and forests would sometimes be drawn as such; on OS maps, not only are the types of trees included, but also their actual geographic distribution within the woodland. This is just one example of the almost pedantic level of detail these maps include as standard."),(0,s.kt)("p",null,"In terms of navigation, the maps also deliver vital information such as contour lines. They are the only complete source of Public Rights of Way, and differentiate between path types and access rights. Important features such as trig points and other coordinate-confirming structures such as cairns and manmade structures are also shown - even at a high scale."),(0,s.kt)(w,{itemOne:(0,s.kt)(i.Z,{image:x,alt:"OS Explorer",mdxType:"Image"}),itemTwo:(0,s.kt)(i.Z,{image:S,alt:"OpenStreetMap",mdxType:"Image"}),mdxType:"Slider"}),(0,s.kt)("p",null,"The OS Explorer maps' recognisable cartography serves more purposes than just looking pretty \u2728. Details such as the tree types mentioned above, terrain data, grasslands + rock formation, and accurate widths of rivers, brooks, and streams impart additional information (perhaps subconsciously), allowing you to intuitively relate and transform the ",(0,s.kt)("inlineCode",{parentName:"p"},"2D")," map in your hands to the ",(0,s.kt)("inlineCode",{parentName:"p"},"3D")," surroundings before you."),(0,s.kt)("p",null,"As with other detailed maps, you may be inclined to think of these as the antiquated one-off remains of some monster mapping movement of yesteryear; however, the maps receive up to ",(0,s.kt)("inlineCode",{parentName:"p"},"10 000")," updates per ",(0,s.kt)("strong",{parentName:"p"},"day"),(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-2"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))," and so continue to accurately reflect changes to the current day landscape."),(0,s.kt)("h2",z({},{id:"what-the-issue-then"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#what-the-issue-then"}),"What the issue then?")),(0,s.kt)("p",null,"While I'm sure you've got the message that I'm a big fan of OS Maps, I have plenty of issues with them too. The main issue isn't anything specific to OS Maps, it's a problem that plagues pretty much every map, digital or physical: people don't walk where paths are designated, they walk where it's easiest. You probably witness this issue on a daily basis, in the form of desire paths: paths that people create themselves when planners and architects - or even the landscape itself - fail to cater to the needs of their users."),(0,s.kt)("p",null,"In terms of maps, this divide between designated, and real-world usage manifests itself in a number of ways."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Firstly, the location of paths on the ground sometimes differs from the printed route"),(0,s.kt)("li",{parentName:"ul"},"Newer or simply non-official routes often fail to appear on maps"),(0,s.kt)("li",{parentName:"ul"},"Designation does not mean that the path is still there: i.e false paths that don't exist"),(0,s.kt)("li",{parentName:"ul"},"Official status misleads and suggests suitability or superiority (e.g surface, directness)"),(0,s.kt)("li",{parentName:"ul"},"Recent changes that render paths unsuitable are not reflected")),(0,s.kt)("p",null,"While these issues can simply be the obsession of the perfectionist, they can also have problematic ramifications: e.g. safe routes off mountains, or occasions where the planned route is the only one out of a location in unfamiliar territory."),(0,s.kt)("p",null,"As previously mentioned, these problems are inherent to pretty much any offline medium - and affect the majority of digital sources equally. This is because maps are effectively ",(0,s.kt)("strong",{parentName:"p"},"static snapshots"),", only reflecting the reality as discrete points in time. What we really need is some ",(0,s.kt)("strong",{parentName:"p"},"dynamic data")," \ud83d\ude2f."),(0,s.kt)("h2",z({},{id:"strava"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#strava"}),"Strava")),(0,s.kt)("p",null,"In order to remedy this issue, we're going to integrate data from Strava. Strava is one of the largest fitness social networks and receives millions of ",(0,s.kt)("inlineCode",{parentName:"p"},"GPS")," tracks per day, from users' running, cycling, and other activities. The data from the past ",(0,s.kt)("inlineCode",{parentName:"p"},"2 years")," is exposed via their 'Metro' and 'Heatmap'",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-3"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))," services as aggregated and anonymised ",(0,s.kt)("inlineCode",{parentName:"p"},"XYZ")," tiles, which we're going to use. Strava only exposes these tiles via their website, which requires a free account if you want the highest resolution data."),(0,s.kt)(i.Z,{image:O,alt:"Strava Heatmap",mdxType:"Image"}),(0,s.kt)("p",null,"It's not especially useful stuck in ",(0,s.kt)("inlineCode",{parentName:"p"},"MapboxGL"),", so I just wrote a script in ",(0,s.kt)("inlineCode",{parentName:"p"},"Proxyman"),(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-4"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-4",className:"footnote-ref"}),"4"))," to include the required auth cookie on all tile requests, allowing its use in any ",(0,s.kt)("inlineCode",{parentName:"p"},"GIS"),". Would share it, but it's very simple and would probably be breaking some ",(0,s.kt)("inlineCode",{parentName:"p"},"ToS"),"s and ",(0,s.kt)("inlineCode",{parentName:"p"},"EULA"),"s somewhere. Given Strava's liberal stance on their data be used for OSM",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-5"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-5",className:"footnote-ref"}),"5")),", and our obvious personal, not-for-profit intent, I don't think there are any copyright issues with us using the data in this way, as it clearly falls under fair use."),(0,s.kt)("h2",z({},{id:"qgis"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#qgis"}),"QGIS")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Before we get into things, it's important to note that you ",(0,s.kt)("strong",{parentName:"p"},"must"),", have the appropriate licence to use the Ordnance Survey basemaps. The rights can be purchased from OS by buying a paper version of the desired area, or through other agencies such as Digimap if for educational purposes",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-6"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-6",className:"footnote-ref"}),"6")),". How you get your OS Map into QGIS is dependant on your source.")),(0,s.kt)("p",null,"In this post, I'm using QGIS",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-7"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-7",className:"footnote-ref"}),"7")),", as it's the only really cross platform, Open Source, and cost-accessible ",(0,s.kt)("inlineCode",{parentName:"p"},"GIS")," package."),(0,s.kt)(i.Z,{image:E,alt:"QGIS Layers",mdxType:"Image"}),(0,s.kt)("p",null,"Layering up the Strava Heatmap, and OS Explorer basemap is really easy in QGIS.  While the OS Maps use ",(0,s.kt)("inlineCode",{parentName:"p"},"EPSG:27700"),", the slippy ",(0,s.kt)("inlineCode",{parentName:"p"},"XYZ")," Strava tiles use a different ",(0,s.kt)("inlineCode",{parentName:"p"},"CRS"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"EPSG:3857"),", this isn't a problem, as QGIS will project them both into the same coordinate space on the fly - giving us the following:"),(0,s.kt)(w,{itemOne:(0,s.kt)(i.Z,{image:I,alt:"OS Explorer",mdxType:"Image"}),itemTwo:(0,s.kt)(i.Z,{image:C,alt:"OS Explorer + Strava",mdxType:"Image"}),mdxType:"Slider"}),(0,s.kt)("section",{className:v.key},"I've marked up the map as follows:",(0,s.kt)("ul",null,(0,s.kt)("li",{"data-marker":""},(0,s.kt)("div",{style:{color:"#3DFA89"},className:N.colourIndicator}),"not shown on the OS Explorer"),(0,s.kt)("li",{"data-marker":""},(0,s.kt)("div",{style:{color:"#0CE9E9"},className:N.colourIndicator}),"where the designated path isn't the most trafficked"),(0,s.kt)("li",{"data-marker":""},(0,s.kt)("div",{style:{color:"#5252FF"},className:N.colourIndicator}),"not seen in use on Strava"))),(0,s.kt)("p",null,"Already we can start to see how powerful this technique is, and how much more relevant and useful information the map contains. Whole paths were missing off the original OS Map, and some minor paths are actually the main ones. There are also a few examples (one of which is highlighted in purple), where drawn paths aren't used by the millions of people on Strava over a full 2 years. Sus \ud83d\ude11."),(0,s.kt)("p",null,"Using this map to plan routes, we're now much more informed about which paths are a safe bet, and which should be avoided. Combining this with aerial imagery can also give good results."),(0,s.kt)("p",null,"(By overlaying the Strava information, we do cover up some map information it's mostly labels, which aren't that important)"),(0,s.kt)("h2",z({},{id:"paths-tick-whats-next"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#paths-tick-whats-next"}),"Paths Tick! What's Next?")),(0,s.kt)("p",null,"While we've remedied one of my main issues with the OS Explorer maps, there are a few other more practical issues with the maps."),(0,s.kt)("p",null,"The OS Explorer maps are traditionally supplied as large, bulky, printed sheets at ",(0,s.kt)("inlineCode",{parentName:"p"},"8x240x134mm")," folded, and ",(0,s.kt)("inlineCode",{parentName:"p"},"1270x945mm")," spread out. This makes them perfect for throwing over the kitchen table to plan adventures, but doesn't make them all that practical when you're trying to flip the map over, in the wind, up top an ar\xeate. People have even resorted to cutting and all sorts of over-the-top solutions",(0,s.kt)("sup",z({parentName:"p"},{id:"fnref-8"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-8",className:"footnote-ref"}),"8")),"."),(0,s.kt)("p",null,"Rather than get the scissors out, I prefer to leave the OS sheets at home and instead print off exactly the area I need - with a buffer for the inevitable navigational mishaps. I'm yet to be convinced that anyone has ever needed the whole ",(0,s.kt)("inlineCode",{parentName:"p"},"1200km\xb2")," all at the same time."),(0,s.kt)("p",null,"This also benefits us in a number of other ways:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"let's say you want to walk from Scafell Pike to Seatoller - a route that transects the boundary between two OS Explorer sheets. Carrying paper maps means you'd have to carry both ",(0,s.kt)("inlineCode",{parentName:"li"},"OL6"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"OL4"),(0,s.kt)("sup",z({parentName:"li"},{id:"fnref-9"}),(0,s.kt)("a",z({parentName:"sup"},{href:"#fn-9",className:"footnote-ref"}),"9")),". Even though you only need a small area across the two.",(0,s.kt)(i.Z,{image:j,alt:"OS Explorer map Boundaries",mdxType:"Image"})),(0,s.kt)("li",{parentName:"ul"},"you don't have to pay more for lamination, just buy the digital rights"),(0,s.kt)("li",{parentName:"ul"},"you don't need to carry ",(0,s.kt)("strong",{parentName:"li"},"gigantic")," map cases and other shitty accessories"),(0,s.kt)("li",{parentName:"ul"},"if you print on demand, you'll always have the latest version of the map")),(0,s.kt)("h2",z({},{id:"pagination-and-printing"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#pagination-and-printing"}),"Pagination and Printing")),(0,s.kt)("p",null,"QGIS' ",(0,s.kt)("inlineCode",{parentName:"p"},"Layout")," functionality makes it really easy to layout our map for printing, even over multiple pages. It's fairly self-explanatory although there are a few things I ran into, doing it for the first time."),(0,s.kt)("p",null,"The first thing is that ",(0,s.kt)("inlineCode",{parentName:"p"},"layouts")," contain multiple ",(0,s.kt)("inlineCode",{parentName:"p"},"pages"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"Pages")," are not ",(0,s.kt)("inlineCode",{parentName:"p"},"layouts"),". We'll create one ",(0,s.kt)("inlineCode",{parentName:"p"},"layout"),", with a few pages to cover the route/area of interest."),(0,s.kt)(i.Z,{image:T,alt:"QGIS Insert Pages",mdxType:"Image"}),(0,s.kt)("p",null,"After adding the map to the page, its best to ",(0,s.kt)("strong",{parentName:"p"},"fix")," the map scale to the desired value. In the case of the ",(0,s.kt)("inlineCode",{parentName:"p"},"1:25k")," OS Explorer map, we're going to fix the scale to ",(0,s.kt)("inlineCode",{parentName:"p"},"25000"),"."),(0,s.kt)("p",null,"This is best done using an ",(0,s.kt)("inlineCode",{parentName:"p"},"expression"),":"),(0,s.kt)(i.Z,{image:P,alt:"QGIS Fix Scale",mdxType:"Image"}),(0,s.kt)("p",null,"Once we've fixed the scale, we can set the map's position interactively:"),(0,s.kt)(i.Z,{image:M,alt:"QGIS Position Map",mdxType:"Image"}),(0,s.kt)("p",null,"Once you've repeated this for the remaining pages, you can export the pages directly to ",(0,s.kt)("inlineCode",{parentName:"p"},".pdf"),", or if you want to further process or compress the files for digital use, you can export to ",(0,s.kt)("inlineCode",{parentName:"p"},".png"),":"),(0,s.kt)(i.Z,{image:D,alt:"QGIS Export",mdxType:"Image"}),(0,s.kt)("h2",z({},{id:"extras"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#extras"}),"Extras")),(0,s.kt)("h3",z({},{id:"routes"}),(0,s.kt)("a",z({parentName:"h3"},{href:"#routes"}),"Routes")),(0,s.kt)("p",null,"Often you want your maps to detail a preplanned route. Once you've got a ",(0,s.kt)("inlineCode",{parentName:"p"},".gpx")," file, it's really easy to import into ",(0,s.kt)("inlineCode",{parentName:"p"},"QGIS"),"."),(0,s.kt)("h3",z({},{id:"styles"}),(0,s.kt)("a",z({parentName:"h3"},{href:"#styles"}),"Styles")),(0,s.kt)("p",null,"Once it's in, I like to style it to blend into the surrounding map. In the case of OS Explorer maps the font used is ",(0,s.kt)("inlineCode",{parentName:"p"},"Gill Sans"),", and the colours can be 'eyedropped' from the actual map."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f One thing of note is that the scale for these added details will be off ",(0,s.kt)("strong",{parentName:"p"},"until")," you export the print layout from QGIS.")),(0,s.kt)("h3",z({},{id:"distance-markers"}),(0,s.kt)("a",z({parentName:"h3"},{href:"#distance-markers"}),"Distance Markers")),(0,s.kt)("p",null,"Distance markers are also very useful. In QGIS the process for creating them is somewhat convoluted."),(0,s.kt)("p",null,"Firstly - if it is not already - reproject the imported ",(0,s.kt)("inlineCode",{parentName:"p"},".gpx")," to the projects' ",(0,s.kt)("inlineCode",{parentName:"p"},"CRS"),", you can find this tool in the ",(0,s.kt)("inlineCode",{parentName:"p"},"processing")," toolbox."),(0,s.kt)(i.Z,{image:G,alt:"QGIS Reproject",mdxType:"Image"}),(0,s.kt)("p",null,"Then you can use the 'points along geometry' tool - found in the same place - to generate the distance markers."),(0,s.kt)(i.Z,{image:q,alt:"QGIS Points along Geometry",mdxType:"Image"}),(0,s.kt)("p",null,"Styling these points leads to really nice distance markers."),(0,s.kt)(i.Z,{image:R,alt:"Distance Markers on Map",mdxType:"Image"}),(0,s.kt)("p",null,"To get the labels to state the distance I'm using the following expression:"),(0,s.kt)("pre",null,(0,s.kt)("span",z({parentName:"pre"},{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})),(0,s.kt)("code",z({parentName:"pre"},{className:"language-php"}),(0,s.kt)("span",z({parentName:"code"},{className:"token function"}),"to_int"),(0,s.kt)("span",z({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",z({parentName:"code"},{className:"token variable"}),"$id"),(0,s.kt)("span",z({parentName:"code"},{className:"token punctuation"}),")")," ",(0,s.kt)("span",z({parentName:"code"},{className:"token operator"}),"||")," ",(0,s.kt)("span",z({parentName:"code"},{className:"token string single-quoted-string"}),"'km'"),"\n")),(0,s.kt)("p",null,"If you haven't saved the distance marker layer, the numbers will be indexed to ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," not ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),", and so will give erroneous values. Save the layer and the problem should resolve."),(0,s.kt)("h3",z({},{id:"pto-lines"}),(0,s.kt)("a",z({parentName:"h3"},{href:"#pto-lines"}),"PTO Lines")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"P"),"lease ",(0,s.kt)("strong",{parentName:"p"},"T"),"urn ",(0,s.kt)("strong",{parentName:"p"},"O"),"ver lines can also be really useful for knowing at what point along a route the next sheet should be used. Obviously you can just flip it over if you've printed it duplex, but if the next sheets are packed away in a bag then its useful to know when to turn over. Extra polish \u2728."),(0,s.kt)("p",null,"I like to add these manually in the layout section of QGIS, using a two point ",(0,s.kt)("inlineCode",{parentName:"p"},"polyline"),"."),(0,s.kt)("p",null,"The reason I don't just turn over once I reach the edge of the map is that I always include a decent margin of overlap between consecutive sheets. If the edges line up perfectly with no overlap, it's impossible to take bearings and things accurately. If you include some overlap, then there's never a region where the compass would need to straddle both sheets at the same time. Having an overlap also helps negate any detail being cut off when printing."),(0,s.kt)("h3",z({},{id:"safety"}),(0,s.kt)("a",z({parentName:"h3"},{href:"#safety"}),"Safety")),(0,s.kt)("p",null,"Considering we're going to these great lengths to customise the map, it only makes sense to include some important information too: like phone numbers, precalculated bearings or timings. There's not really any hard-fast rules here, just a head's up that might pay dividends someday \ud83e\uddb8\u200d\u2640\ufe0f."),(0,s.kt)("h2",z({},{id:"printing"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#printing"}),"Printing")),(0,s.kt)("p",null,"Printing from QGIS is easy, just be sure to fix the scale to ensure the print driver doesn't mess around with the map in any way. I tend to print a B&W copy of the first page to check everything's in order before committing."),(0,s.kt)("p",null,"Another thing that caught me out is the fact that most laser printers can't print full bleed. This means that they'll always be a white border around the paper. Fixing the scale means that the edges of the map will be cut off - another reason to do a B&W proof."),(0,s.kt)("h2",z({},{id:"weatherproofing"}),(0,s.kt)("a",z({parentName:"h2"},{href:"#weatherproofing"}),"Weatherproofing")),(0,s.kt)("p",null,"Even if it's not raining, paper used outdoors doesn't last. The humidity quickly reduces its integrity to that of a ",(0,s.kt)("inlineCode",{parentName:"p"},"**insert E.D. joke**")," - making it impossible to use in combination with a compass, or even just to hold properly. Laminating eliminates this problem, and also makes your map rainproof, +1 over plain OS Maps!"),(0,s.kt)("p",null,"I find that the best method is to whack the temperature of your laminator all the way up, and pass the laminate through a few times to ensure a good bond between the ply. I've never had one fail \ud83d\udc4c."),(0,s.kt)("p",null,"While lamination makes the maps rainproof, the added rigidity also converts them into the perfect windsail - ready to fly over the edge of a hill. Punching a hole in the map and passing some paracord through to tie to something solves this, but if done with a hole punch will introduce a point of ingress for moisture and lead to delamination in wet weather."),(0,s.kt)("p",null,"Of course, I wouldn't be mentioning this unless I had a solution, and that's to use a leather punch - one with different sized holes. Punch a larger hole through the paper layer, and a ",(0,s.kt)("inlineCode",{parentName:"p"},"1-2mm")," smaller one though the laminator pocket; when the stack is heated, the outer layers will still be able to seal and prevent infiltration."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u2696\ufe0f"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",z({parentName:"p"},{href:"https://www.ordnancesurvey.co.uk/"}),"OS Maps")," \xa9 Crown copyright and database rights ",(0,s.kt)("span",{dangerouslySetInnerHTML:{__html:(new Date).getFullYear()}})," Ordnance Survey (100025252)"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",z({parentName:"p"},{href:"https://www.openstreetmap.org/copyright"}),"OpenStreetMap")," \xa9 OpenStreetMap contributors"),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",z({parentName:"p"},{href:"https://www.strava.com/heatmap"}),"Strava Heatmap")," \xa9 2018 Strava")),(0,s.kt)("div",z({},{className:"footnotes"}),(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",z({parentName:"ol"},{id:"fn-1","ref-number":"1"}),"Ordnance Survey only covers Great Britain. Northern Ireland has its own counterpart: Ordnance Survey of Northern Ireland. Their maps are not the same.",(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-2","ref-number":"2"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://www.bbc.co.uk/programmes/b06b36q3"}),"https://www.bbc.co.uk/programmes/b06b36q3"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-3","ref-number":"3"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://www.strava.com/heatmap#5.98/-6.57074/54.52126/hot/all"}),"https://www.strava.com/heatmap#5.98/-6.57074/54.52126/hot/all"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-4","ref-number":"4"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://proxyman.io/"}),"https://proxyman.io/"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-4",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-5","ref-number":"5"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://wiki.openstreetmap.org/wiki/Strava"}),"https://wiki.openstreetmap.org/wiki/Strava"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-5",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-6","ref-number":"6"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://digimap.edina.ac.uk/"}),"https://digimap.edina.ac.uk/"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-6",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-7","ref-number":"7"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://www.qgis.org/"}),"https://www.qgis.org/"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-7",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-8","ref-number":"8"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://www.ordnancesurvey.co.uk/blog/2012/02/how-do-you-look-after-your-paper-map/"}),"https://www.ordnancesurvey.co.uk/blog/2012/02/how-do-you-look-after-your-paper-map/"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-8",className:"footnote-backref"}),"\u21a9")),(0,s.kt)("li",z({parentName:"ol"},{id:"fn-9","ref-number":"9"}),(0,s.kt)("a",z({parentName:"li"},{href:"https://shop.ordnancesurvey.co.uk/map-selector/"}),"https://shop.ordnancesurvey.co.uk/map-selector/"),(0,s.kt)("a",z({parentName:"li"},{href:"#fnref-9",className:"footnote-backref"}),"\u21a9")))))}Q.isMDXComponent=!0},76032:function(e){e.exports={slider:"_6J1",handle:"Rwo3"}},68696:function(e){e.exports={colourIndicator:"hKVe"}}}]);