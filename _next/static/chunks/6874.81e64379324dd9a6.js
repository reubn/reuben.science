(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6874],{6874:function(e,t,s){"use strict";s.r(t),s.d(t,{codeBlocks:function(){return L},default:function(){return R},metadata:function(){return B}});var a=s(5893),n=s(1151),r=s(3741),o=s(7294);const i=(0,o.forwardRef)(((e,t)=>o.createElement("div",Object.assign({},e,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",willChange:"clip",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"},"data-rcs":"clip-item",ref:t}))));i.displayName="ContainerClip";const l=(0,o.forwardRef)((({children:e,portrait:t},s)=>{const a={position:"absolute",width:t?"100%":void 0,height:t?void 0:"100%",transform:t?"translateY(-50%)":"translateX(-50%)",pointerEvents:"all"};return o.createElement("div",{style:{position:"absolute",top:0,width:"100%",height:"100%",pointerEvents:"none"},"data-rcs":"handle-container",ref:s},o.createElement("div",{style:a},e))}));l.displayName="ThisHandleContainer";const c=({flip:e})=>{const t={width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0};return o.createElement("div",{style:t})},d=({portrait:e,buttonStyle:t,linesStyle:s,style:a,...n})=>{const r={display:"flex",flexDirection:e?"row":"column",placeItems:"center",height:"100%",cursor:e?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...a},i={flexGrow:1,height:e?2:"100%",width:e?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 7px rgba(0,0,0,.35)",...s},l={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",boxShadow:"0 0 7px rgba(0,0,0,.35)",transform:e?"rotate(90deg)":void 0,...t};return o.createElement("div",Object.assign({className:"__rcs-handle-root"},n,{style:r}),o.createElement("div",{className:"__rcs-handle-line",style:i}),o.createElement("div",{className:"__rcs-handle-button",style:l},o.createElement(c,null),o.createElement(c,{flip:!0})),o.createElement("div",{className:"__rcs-handle-line",style:i}))},h=(e,t,s,a)=>{const n=(0,o.useRef)();(0,o.useEffect)((()=>{n.current=t}),[t]),(0,o.useEffect)((()=>{if(!s||!s.addEventListener)return;const t=e=>n.current&&n.current(e);return s.addEventListener(e,t,a),()=>{s.removeEventListener(e,t,a)}}),[e,s,a])},u="undefined"!==typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect,p={passive:!0},f={capture:!0,passive:!1},m=({handle:e,itemOne:t,itemTwo:s,onlyHandleDraggable:a=!1,onPositionChange:n,portrait:r=!1,position:c=50,boundsPadding:m=0,changePositionOnHover:b=!1,style:g,...x})=>{const w=(0,o.useRef)(null),y=(0,o.useRef)(null),j=(0,o.useRef)(null),v=(0,o.useRef)(c),k=(e=>{const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e})),t.current})(c),[S,E]=(0,o.useState)(!1),O=(0,o.useRef)(!1),[I,N]=(0,o.useState)(),[M,P]=(0,o.useState)(!1);(0,o.useEffect)((()=>{N(a?j.current:w.current)}),[a]);const T=(0,o.useCallback)((function({x:e,y:t,isOffset:s,portrait:a,boundsPadding:r}){const{top:o,left:i,width:l,height:c}=w.current.getBoundingClientRect();if(0===l||0===c)return;const d=Math.min(Math.max(a?s?t-o-window.pageYOffset:t:s?e-i-window.pageXOffset:e,0),a?c:l),h=a?c/(w.current.offsetHeight||1):l/(w.current.offsetWidth||1),u=d/h,p=l/h,f=c/h,m=u/(a?f:p)*100,b=a?0===u||u===f:0===u||u===p,g=m===v.current&&(0===v.current||100===v.current);if(M&&g&&b)return;P(!0),v.current=m;const x=Math.min(Math.max(u,0+r),(a?f:p)-r);y.current.style.clip=a?`rect(auto,auto,${x}px,auto)`:`rect(auto,${x}px,auto,auto)`,j.current.style.transform=a?`translate3d(0,${x}px,0)`:`translate3d(${x}px,0,0)`,n&&n(v.current)}),[M,n]);(0,o.useEffect)((()=>{const{width:e,height:t}=w.current.getBoundingClientRect(),s=c===k?v.current:c;T({portrait:r,boundsPadding:m,x:e/100*s,y:t/100*s})}),[r,c,k,m,T]);const C=(0,o.useCallback)((e=>{e.preventDefault(),T({portrait:r,boundsPadding:m,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY}),E(!0)}),[r,m,T]),_=(0,o.useCallback)((function(e){T({portrait:r,boundsPadding:m,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY})}),[r,m,T]),G=(0,o.useCallback)((()=>{E(!1)}),[]),L=(0,o.useCallback)((({width:e,height:t})=>{const{width:s,height:a}=w.current.getBoundingClientRect();T({portrait:r,boundsPadding:m,x:e/100*v.current*s/e,y:t/100*v.current*a/t})}),[r,m,T]);(0,o.useEffect)((()=>(S&&!O.current&&(window.addEventListener("mousemove",_,p),window.addEventListener("mouseup",G,p),window.addEventListener("touchmove",_,p),window.addEventListener("touchend",G,p),O.current=!0),()=>{O.current&&(window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",G),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",G),O.current=!1)})),[_,G,S]),((e,t)=>{const s=(0,o.useRef)(),a=(0,o.useCallback)((()=>{e.current&&s.current&&s.current.observe(e.current)}),[e]);u((()=>(s.current=new ResizeObserver((([e])=>t(e.contentRect))),a(),()=>{s.current&&s.current.disconnect()})),[t,a])})(w,L),(0,o.useEffect)((()=>{const e=w.current,t=()=>{S||G()};return b&&(e.addEventListener("mousemove",_,p),e.addEventListener("mouseleave",t,p)),()=>{e.removeEventListener("mousemove",_),e.removeEventListener("mouseleave",t)}}),[b,_,G,S]),h("mousedown",C,I,f),h("touchstart",C,I,f);const B=e||o.createElement(d,{portrait:r}),R={position:"relative",overflow:"hidden",cursor:S?r?"ns-resize":"ew-resize":void 0,userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...g};return o.createElement("div",Object.assign({},x,{ref:w,style:R,"data-rcs":"root"}),s,o.createElement(i,{ref:y},t),o.createElement(l,{portrait:r,ref:j},B))};var b=s(1543);function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var x=function(e){var t=function(){return(0,a.jsx)("div",{className:b.handle})};return(0,a.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){g(e,t,s[t])}))}return e}({className:b.slider,handle:(0,a.jsx)(t,{}),onlyHandleDraggable:"ontouchstart"in window},e))},w=s(1865),y=s(5116),j={id:.142886949558781,resolutions:{1:{src:"/.assets/a78e8c62fcdcb2c3986eec6579052904/os.webp",scale:1,width:1e3,height:593},2:{src:"/.assets/dc0fe23e51bc611c1d17b2881bb98e80/os.webp",scale:2,width:2e3,height:1186}}},v={id:.966926593566029,resolutions:{1:{src:"/.assets/93418bb95f9fac84e08b6d4d3de93848/osm.webp",scale:1,width:1e3,height:593},2:{src:"/.assets/5cea70b8dfd7e28c3fe09f455f17adfc/osm.webp",scale:2,width:2e3,height:1186}}},k={id:.4004830967657804,resolutions:{1:{src:"/.assets/e6958491672bcfa21cd59679b7014666/stravaHeat.webp",scale:1,width:1e3,height:600},2:{src:"/.assets/712bb6fbb985080d39d74e1d95594c72/stravaHeat.webp",scale:2,width:2e3,height:1200}}},S={id:.03363025840434397,resolutions:{1:{src:"/.assets/de91817851769571c819fb3ec979dbc1/qgisA.webp",scale:1,width:307,height:290},2:{src:"/.assets/77ef9be312f66451d87f878551c3a47b/qgisA.webp",scale:2,width:614,height:580}}},E={id:.9170450842128965,resolutions:{1:{src:"/.assets/acb6d499e2148e05e5e733e5bb48f8cd/os2.webp",scale:1,width:1e3,height:600},2:{src:"/.assets/228f8602435643b19084af795db23704/os2.webp",scale:2,width:2e3,height:1200}}},O={id:.2111898559482197,resolutions:{1:{src:"/.assets/e11a4a1a5059e63525bbf7f690b08088/stravaOS2.webp",scale:1,width:1e3,height:600},2:{src:"/.assets/a727c87afb7aa88dcf07105d935f5367/stravaOS2.webp",scale:2,width:2e3,height:1200}}},I={id:.2132284229608452,resolutions:{1:{src:"/.assets/73aad0af0ca650fab9d77089fa53e7d5/osMapBoundaries.webp",scale:1,width:1260,height:777},2:{src:"/.assets/9bd608000441f0af5baabd239225d1c7/osMapBoundaries.webp",scale:2,width:2520,height:1554}}},N={id:.2667206969222575,resolutions:{1:{src:"/.assets/1d733004357b53a68f18c00c0eb7ae60/ip.webp",scale:1,width:527,height:461},2:{src:"/.assets/932da206e857ec7320ac9da29da4a098/ip.webp",scale:2,width:1054,height:922}}},M={id:.981979694099349,resolutions:{1:{src:"/.assets/c753079f8969668f5d5dd2c10f5e796d/scaleA.webp",scale:1,width:393,height:456},2:{src:"/.assets/621235376e68912f4546eb3cbdf2e5c9/scaleA.webp",scale:2,width:786,height:912}}},P={id:.8517103227097833,resolutions:{1:{src:"/.assets/a863b275b28ef40012a97ce8e566a642/int.webp",scale:1,width:379,height:216},2:{src:"/.assets/08b4a5aa8d9da9b77e16bed3edbf7bdd/int.webp",scale:2,width:758,height:432}}},T={id:.8961497589250338,resolutions:{1:{src:"/.assets/f1b5e15aa01b448b1d19044933d6599d/export.webp",scale:1,width:433,height:494},2:{src:"/.assets/35946987d2c7523862dd18b978b10fb3/export.webp",scale:2,width:866,height:988}}},C={id:.7027115284133354,resolutions:{1:{src:"/.assets/b11542aa3082a842d1e6dfcc751273d7/repro.webp",scale:1,width:800,height:663},2:{src:"/.assets/33a4ff8bd0da68b887d828d2b60331e2/repro.webp",scale:2,width:1600,height:1326}}},_={id:.6541117364486375,resolutions:{1:{src:"/.assets/6c6bc79fdf7db8c5fa273490b702fe5b/pag.webp",scale:1,width:756,height:619},2:{src:"/.assets/ff4e019683e3f52d39972575c8ab4d92/pag.webp",scale:2,width:1512,height:1238}}},G={id:.08739781509305966,resolutions:{1:{src:"/.assets/1645d16b4f33dba173609f35eea1ae90/full.webp",scale:1,width:1e3,height:593},2:{src:"/.assets/00895687fc2d3a2e0988351c24572916/full.webp",scale:2,width:2e3,height:1186}}},L=[{language:"php",lines:["to_int($id) || 'km'"]}],B={title:"The Ultimate Adventure Maps",description:"Enhanced OS Maps for Navigation",emoji:"\ud83d\uddfa",date:"2020-12-29",category:["outdoors"],image:{id:.08396705747408761,resolutions:{1:{src:"/.assets/e3e89a267eb6f62dbbfb8a1e21bd2a99/header.webp",scale:1,width:1e3,height:400},2:{src:"/.assets/39d68c6ccfef1f9991015cc3ea75707c/header.webp",scale:2,width:2e3,height:800},3:{src:"/.assets/01f62e080c4eaec74abff6fae073708a/header.webp",scale:3,width:3e3,height:1200},.5:{src:"/.assets/8b9e45ed6b9b13995b9a777f5b588a3c/header.webp",scale:.5,width:500,height:200}}}};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var t=Object.assign({h2:"h2",a:"a",p:"p",sup:"sup",code:"code",strong:"strong",ul:"ul",li:"li",blockquote:"blockquote",h3:"h3",pre:"pre",span:"span",section:"section",hr:"hr",ol:"ol"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n","\n","\n","\n",(0,a.jsx)(t.h2,{id:"ordnance-survey",children:(0,a.jsx)(t.a,{href:"#ordnance-survey",children:"Ordnance Survey"})}),"\n",(0,a.jsxs)(t.p,{children:["If you're heading into the mountains, moors, or anywhere you aren't 100% sure you'll have signal, I have no doubts in saying that the de facto maps for most people in the UK",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-1",id:"ref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," will be the iconic tangerine-covered ",(0,a.jsx)(t.code,{children:"1:25000"})," OS Explorer maps, published by the Ordnance Survey - the United Kingdom's quasi-quango mapping agency. With a track record of over 200 years' on-the-ground surveys, OS Maps, with their expert cartography, and complete, uninterrupted coverage of Great Britain",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-1-2",id:"ref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),", are probably the best paper maps you can buy anywhere in the world."]}),"\n",(0,a.jsxs)(t.p,{children:["Backed by the biggest geographical database on earth",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-2",id:"ref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),", no other maps include such continuous and consistently rich detail over such a wide area. In most other maps, woods and forests would sometimes be drawn as such; on OS maps, not only are the types of trees included, but also their actual geographic distribution within the woodland. This is just one example of the almost pedantic level of detail these maps include as standard."]}),"\n",(0,a.jsx)(t.p,{children:"In terms of navigation, the maps also deliver vital information such as contour lines. They are the only complete source of Public Rights of Way, and differentiate between path types and access rights. Important features such as trig points and other coordinate-confirming structures such as cairns and manmade structures are also shown - even at a high scale."}),"\n","\n",(0,a.jsx)(x,{itemOne:(0,a.jsx)(r.Z,{image:j,alt:"OS Explorer"}),itemTwo:(0,a.jsx)(r.Z,{image:v,alt:"OpenStreetMap"})}),"\n",(0,a.jsxs)(t.p,{children:["The OS Explorer maps' recognisable cartography serves more purposes than just looking pretty \u2728. Details such as the tree types mentioned above, terrain data, grasslands + rock formation, and accurate widths of rivers, brooks, and streams impart additional information (perhaps subconsciously), allowing you to intuitively relate and transform the ",(0,a.jsx)(t.code,{children:"2D"})," map in your hands to the ",(0,a.jsx)(t.code,{children:"3D"})," surroundings before you."]}),"\n",(0,a.jsxs)(t.p,{children:["As with other detailed maps, you may be inclined to think of these as the antiquated one-off remains of some monster mapping movement of yesteryear; however, the maps receive up to ",(0,a.jsx)(t.code,{children:"10 000"})," updates per ",(0,a.jsx)(t.strong,{children:"day"}),(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-2-2",id:"ref-2-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," and so continue to accurately reflect changes to the current day landscape."]}),"\n",(0,a.jsx)(t.h2,{id:"what-the-issue-then",children:(0,a.jsx)(t.a,{href:"#what-the-issue-then",children:"What the issue then?"})}),"\n",(0,a.jsx)(t.p,{children:"While I'm sure you've got the message that I'm a big fan of OS Maps, I have plenty of issues with them too. The main issue isn't anything specific to OS Maps, it's a problem that plagues pretty much every map, digital or physical: people don't walk where paths are designated, they walk where it's easiest. You probably witness this issue on a daily basis, in the form of desire paths: paths that people create themselves when planners and architects - or even the landscape itself - fail to cater to the needs of their users."}),"\n",(0,a.jsx)(t.p,{children:"In terms of maps, this divide between designated, and real-world usage manifests itself in a number of ways."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Firstly, the location of paths on the ground sometimes differs from the printed route"}),"\n",(0,a.jsx)(t.li,{children:"Newer or simply non-official routes often fail to appear on maps"}),"\n",(0,a.jsx)(t.li,{children:"Designation does not mean that the path is still there: i.e false paths that don't exist"}),"\n",(0,a.jsx)(t.li,{children:"Official status misleads and suggests suitability or superiority (e.g surface, directness)"}),"\n",(0,a.jsx)(t.li,{children:"Recent changes that render paths unsuitable are not reflected"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"While these issues can simply be the obsession of the perfectionist, they can also have problematic ramifications: e.g. safe routes off mountains, or occasions where the planned route is the only one out of a location in unfamiliar territory."}),"\n",(0,a.jsxs)(t.p,{children:["As previously mentioned, these problems are inherent to pretty much any offline medium - and affect the majority of digital sources equally. This is because maps are effectively ",(0,a.jsx)(t.strong,{children:"static snapshots"}),", only reflecting the reality as discrete points in time. What we really need is some ",(0,a.jsx)(t.strong,{children:"dynamic data"})," \ud83d\ude2f."]}),"\n",(0,a.jsx)(t.h2,{id:"strava",children:(0,a.jsx)(t.a,{href:"#strava",children:"Strava"})}),"\n",(0,a.jsxs)(t.p,{children:["In order to remedy this issue, we're going to integrate data from Strava. Strava is one of the largest fitness social networks and receives millions of ",(0,a.jsx)(t.code,{children:"GPS"})," tracks per day, from users' running, cycling, and other activities. The data from the past ",(0,a.jsx)(t.code,{children:"2 years"})," is exposed via their 'Metro' and 'Heatmap'",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-3",id:"ref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," services as aggregated and anonymised ",(0,a.jsx)(t.code,{children:"XYZ"})," tiles, which we're going to use. Strava only exposes these tiles via their website, which requires a free account if you want the highest resolution data."]}),"\n","\n",(0,a.jsx)(r.Z,{image:k,alt:"Strava Heatmap"}),"\n",(0,a.jsxs)(t.p,{children:["It's not especially useful stuck in ",(0,a.jsx)(t.code,{children:"MapboxGL"}),", so I just wrote a script in ",(0,a.jsx)(t.code,{children:"Proxyman"}),(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-4",id:"ref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," to include the required auth cookie on all tile requests, allowing its use in any ",(0,a.jsx)(t.code,{children:"GIS"}),". Would share it, but it's very simple and would probably be breaking some ",(0,a.jsx)(t.code,{children:"ToS"}),"s and ",(0,a.jsx)(t.code,{children:"EULA"}),"s somewhere. Given Strava's liberal stance on their data be used for OSM",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-5",id:"ref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),", and our obvious personal, not-for-profit intent, I don't think there are any copyright issues with us using the data in this way, as it clearly falls under fair use."]}),"\n",(0,a.jsx)(t.h2,{id:"qgis",children:(0,a.jsx)(t.a,{href:"#qgis",children:"QGIS"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u26a0\ufe0f Before we get into things, it's important to note that you ",(0,a.jsx)(t.strong,{children:"must"}),", have the appropriate licence to use the Ordnance Survey basemaps. The rights can be purchased from OS by buying a paper version of the desired area, or through other agencies such as Digimap if for educational purposes",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-6",id:"ref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),". How you get your OS Map into QGIS is dependant on your source."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In this post, I'm using QGIS",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-7",id:"ref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"7"})}),", as it's the only really cross platform, Open Source, and cost-accessible ",(0,a.jsx)(t.code,{children:"GIS"})," package."]}),"\n","\n",(0,a.jsx)(r.Z,{image:S,alt:"QGIS Layers"}),"\n",(0,a.jsxs)(t.p,{children:["Layering up the Strava Heatmap, and OS Explorer basemap is really easy in QGIS.  While the OS Maps use ",(0,a.jsx)(t.code,{children:"EPSG:27700"}),", the slippy ",(0,a.jsx)(t.code,{children:"XYZ"})," Strava tiles use a different ",(0,a.jsx)(t.code,{children:"CRS"}),": ",(0,a.jsx)(t.code,{children:"EPSG:3857"}),", this isn't a problem, as QGIS will project them both into the same coordinate space on the fly - giving us the following:"]}),"\n","\n",(0,a.jsx)(x,{itemOne:(0,a.jsx)(r.Z,{image:E,alt:"OS Explorer"}),itemTwo:(0,a.jsx)(r.Z,{image:O,alt:"OS Explorer + Strava"})}),"\n",(0,a.jsxs)("section",{className:w.key,children:[(0,a.jsx)(t.p,{children:"I've marked up the map as follows:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{"data-marker":"",children:[(0,a.jsx)("div",{style:{color:"#3DFA89"},className:y.colourIndicator}),"not shown on the OS Explorer"]}),(0,a.jsxs)("li",{"data-marker":"",children:[(0,a.jsx)("div",{style:{color:"#0CE9E9"},className:y.colourIndicator}),"where the designated path isn't the most trafficked"]}),(0,a.jsxs)("li",{"data-marker":"",children:[(0,a.jsx)("div",{style:{color:"#5252FF"},className:y.colourIndicator}),"not seen in use on Strava"]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Already we can start to see how powerful this technique is, and how much more relevant and useful information the map contains. Whole paths were missing off the original OS Map, and some minor paths are actually the main ones. There are also a few examples (one of which is highlighted in purple), where drawn paths aren't used by the millions of people on Strava over a full 2 years. Sus \ud83d\ude11."}),"\n",(0,a.jsx)(t.p,{children:"Using this map to plan routes, we're now much more informed about which paths are a safe bet, and which should be avoided. Combining this with aerial imagery can also give good results."}),"\n",(0,a.jsx)(t.p,{children:"(By overlaying the Strava information, we do cover up some map information it's mostly labels, which aren't that important)"}),"\n",(0,a.jsx)(t.h2,{id:"paths-tick-whats-next",children:(0,a.jsx)(t.a,{href:"#paths-tick-whats-next",children:"Paths Tick! What's Next?"})}),"\n",(0,a.jsx)(t.p,{children:"While we've remedied one of my main issues with the OS Explorer maps, there are a few other more practical issues with the maps."}),"\n",(0,a.jsxs)(t.p,{children:["The OS Explorer maps are traditionally supplied as large, bulky, printed sheets at ",(0,a.jsx)(t.code,{children:"8x240x134mm"})," folded, and ",(0,a.jsx)(t.code,{children:"1270x945mm"})," spread out. This makes them perfect for throwing over the kitchen table to plan adventures, but doesn't make them all that practical when you're trying to flip the map over, in the wind, up top an ar\xeate. People have even resorted to cutting and all sorts of over-the-top solutions",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-8",id:"ref-8","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"8"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Rather than get the scissors out, I prefer to leave the OS sheets at home and instead print off exactly the area I need - with a buffer for the inevitable navigational mishaps. I'm yet to be convinced that anyone has ever needed the whole ",(0,a.jsx)(t.code,{children:"1200km\xb2"})," all at the same time."]}),"\n","\n",(0,a.jsx)(t.p,{children:"This also benefits us in a number of other ways:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["let's say you want to walk from Scafell Pike to Seatoller - a route that transects the boundary between two OS Explorer sheets. Carrying paper maps means you'd have to carry both ",(0,a.jsx)(t.code,{children:"OL6"}),", and ",(0,a.jsx)(t.code,{children:"OL4"}),(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#def-9",id:"ref-9","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"9"})}),". Even though you only need a small area across the two.","\n",(0,a.jsx)(r.Z,{image:I,alt:"OS Explorer map Boundaries"}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"you don't have to pay more for lamination, just buy the digital rights"}),"\n",(0,a.jsxs)(t.li,{children:["you don't need to carry ",(0,a.jsx)(t.strong,{children:"gigantic"})," map cases and other shitty accessories"]}),"\n",(0,a.jsx)(t.li,{children:"if you print on demand, you'll always have the latest version of the map"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"pagination-and-printing",children:(0,a.jsx)(t.a,{href:"#pagination-and-printing",children:"Pagination and Printing"})}),"\n",(0,a.jsxs)(t.p,{children:["QGIS' ",(0,a.jsx)(t.code,{children:"Layout"})," functionality makes it really easy to layout our map for printing, even over multiple pages. It's fairly self-explanatory although there are a few things I ran into, doing it for the first time."]}),"\n",(0,a.jsxs)(t.p,{children:["The first thing is that ",(0,a.jsx)(t.code,{children:"layouts"})," contain multiple ",(0,a.jsx)(t.code,{children:"pages"}),". ",(0,a.jsx)(t.code,{children:"Pages"})," are not ",(0,a.jsx)(t.code,{children:"layouts"}),". We'll create one ",(0,a.jsx)(t.code,{children:"layout"}),", with a few pages to cover the route/area of interest."]}),"\n","\n",(0,a.jsx)(r.Z,{image:N,alt:"QGIS Insert Pages"}),"\n",(0,a.jsxs)(t.p,{children:["After adding the map to the page, its best to ",(0,a.jsx)(t.strong,{children:"fix"})," the map scale to the desired value. In the case of the ",(0,a.jsx)(t.code,{children:"1:25k"})," OS Explorer map, we're going to fix the scale to ",(0,a.jsx)(t.code,{children:"25000"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["This is best done using an ",(0,a.jsx)(t.code,{children:"expression"}),":"]}),"\n","\n",(0,a.jsx)(r.Z,{image:M,alt:"QGIS Fix Scale"}),"\n",(0,a.jsx)(t.p,{children:"Once we've fixed the scale, we can set the map's position interactively:"}),"\n","\n",(0,a.jsx)(r.Z,{image:P,alt:"QGIS Position Map"}),"\n",(0,a.jsxs)(t.p,{children:["Once you've repeated this for the remaining pages, you can export the pages directly to ",(0,a.jsx)(t.code,{children:".pdf"}),", or if you want to further process or compress the files for digital use, you can export to ",(0,a.jsx)(t.code,{children:".png"}),":"]}),"\n","\n",(0,a.jsx)(r.Z,{image:T,alt:"QGIS Export"}),"\n",(0,a.jsx)(t.h2,{id:"extras",children:(0,a.jsx)(t.a,{href:"#extras",children:"Extras"})}),"\n",(0,a.jsx)(t.h3,{id:"routes",children:(0,a.jsx)(t.a,{href:"#routes",children:"Routes"})}),"\n",(0,a.jsxs)(t.p,{children:["Often you want your maps to detail a preplanned route. Once you've got a ",(0,a.jsx)(t.code,{children:".gpx"})," file, it's really easy to import into ",(0,a.jsx)(t.code,{children:"QGIS"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"styles",children:(0,a.jsx)(t.a,{href:"#styles",children:"Styles"})}),"\n",(0,a.jsxs)(t.p,{children:["Once it's in, I like to style it to blend into the surrounding map. In the case of OS Explorer maps the font used is ",(0,a.jsx)(t.code,{children:"Gill Sans"}),", and the colours can be 'eyedropped' from the actual map."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u26a0\ufe0f One thing of note is that the scale for these added details will be off ",(0,a.jsx)(t.strong,{children:"until"})," you export the print layout from QGIS."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"distance-markers",children:(0,a.jsx)(t.a,{href:"#distance-markers",children:"Distance Markers"})}),"\n",(0,a.jsx)(t.p,{children:"Distance markers are also very useful. In QGIS the process for creating them is somewhat convoluted."}),"\n",(0,a.jsxs)(t.p,{children:["Firstly - if it is not already - reproject the imported ",(0,a.jsx)(t.code,{children:".gpx"})," to the projects' ",(0,a.jsx)(t.code,{children:"CRS"}),", you can find this tool in the ",(0,a.jsx)(t.code,{children:"processing"})," toolbox."]}),"\n","\n",(0,a.jsx)(r.Z,{image:C,alt:"QGIS Reproject"}),"\n",(0,a.jsx)(t.p,{children:"Then you can use the 'points along geometry' tool - found in the same place - to generate the distance markers."}),"\n","\n",(0,a.jsx)(r.Z,{image:_,alt:"QGIS Points along Geometry"}),"\n",(0,a.jsx)(t.p,{children:"Styling these points leads to really nice distance markers."}),"\n","\n",(0,a.jsx)(r.Z,{image:G,alt:"Distance Markers on Map"}),"\n",(0,a.jsx)(t.p,{children:"To get the labels to state the distance I'm using the following expression:"}),"\n",(0,a.jsxs)(t.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(t.code,{className:"language-php",children:[(0,a.jsx)(t.span,{className:"token function",children:"to_int"}),(0,a.jsx)(t.span,{className:"token punctuation",children:"("}),(0,a.jsx)(t.span,{className:"token variable",children:"$id"}),(0,a.jsx)(t.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(t.span,{className:"token operator",children:"||"})," ",(0,a.jsx)(t.span,{className:"token string single-quoted-string",children:"'km'"}),"\n"]})]}),"\n",(0,a.jsxs)(t.p,{children:["If you haven't saved the distance marker layer, the numbers will be indexed to ",(0,a.jsx)(t.code,{children:"1"})," not ",(0,a.jsx)(t.code,{children:"0"}),", and so will give erroneous values. Save the layer and the problem should resolve."]}),"\n",(0,a.jsx)(t.h3,{id:"pto-lines",children:(0,a.jsx)(t.a,{href:"#pto-lines",children:"PTO Lines"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"P"}),"lease ",(0,a.jsx)(t.strong,{children:"T"}),"urn ",(0,a.jsx)(t.strong,{children:"O"}),"ver lines can also be really useful for knowing at what point along a route the next sheet should be used. Obviously you can just flip it over if you've printed it duplex, but if the next sheets are packed away in a bag then its useful to know when to turn over. Extra polish \u2728."]}),"\n",(0,a.jsxs)(t.p,{children:["I like to add these manually in the layout section of QGIS, using a two point ",(0,a.jsx)(t.code,{children:"polyline"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The reason I don't just turn over once I reach the edge of the map is that I always include a decent margin of overlap between consecutive sheets. If the edges line up perfectly with no overlap, it's impossible to take bearings and things accurately. If you include some overlap, then there's never a region where the compass would need to straddle both sheets at the same time. Having an overlap also helps negate any detail being cut off when printing."}),"\n",(0,a.jsx)(t.h3,{id:"safety",children:(0,a.jsx)(t.a,{href:"#safety",children:"Safety"})}),"\n",(0,a.jsx)(t.p,{children:"Considering we're going to these great lengths to customise the map, it only makes sense to include some important information too: like phone numbers, precalculated bearings or timings. There's not really any hard-fast rules here, just a head's up that might pay dividends someday \ud83e\uddb8\u200d\u2640\ufe0f."}),"\n",(0,a.jsx)(t.h2,{id:"printing",children:(0,a.jsx)(t.a,{href:"#printing",children:"Printing"})}),"\n",(0,a.jsx)(t.p,{children:"Printing from QGIS is easy, just be sure to fix the scale to ensure the print driver doesn't mess around with the map in any way. I tend to print a B&W copy of the first page to check everything's in order before committing."}),"\n",(0,a.jsx)(t.p,{children:"Another thing that caught me out is the fact that most laser printers can't print full bleed. This means that they'll always be a white border around the paper. Fixing the scale means that the edges of the map will be cut off - another reason to do a B&W proof."}),"\n",(0,a.jsx)(t.h2,{id:"weatherproofing",children:(0,a.jsx)(t.a,{href:"#weatherproofing",children:"Weatherproofing"})}),"\n",(0,a.jsxs)(t.p,{children:["Even if it's not raining, paper used outdoors doesn't last. The humidity quickly reduces its integrity to that of a ",(0,a.jsx)(t.code,{children:"**insert E.D. joke**"})," - making it impossible to use in combination with a compass, or even just to hold properly. Laminating eliminates this problem, and also makes your map rainproof, +1 over plain OS Maps!"]}),"\n",(0,a.jsx)(t.p,{children:"I find that the best method is to whack the temperature of your laminator all the way up, and pass the laminate through a few times to ensure a good bond between the ply. I've never had one fail \ud83d\udc4c."}),"\n",(0,a.jsx)(t.p,{children:"While lamination makes the maps rainproof, the added rigidity also converts them into the perfect windsail - ready to fly over the edge of a hill. Punching a hole in the map and passing some paracord through to tie to something solves this, but if done with a hole punch will introduce a point of ingress for moisture and lead to delamination in wet weather."}),"\n",(0,a.jsxs)(t.p,{children:["Of course, I wouldn't be mentioning this unless I had a solution, and that's to use a leather punch - one with different sized holes. Punch a larger hole through the paper layer, and a ",(0,a.jsx)(t.code,{children:"1-2mm"})," smaller one though the laminator pocket; when the stack is heated, the outer layers will still be able to seal and prevent infiltration."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\u2696\ufe0f"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.ordnancesurvey.co.uk/",children:"OS Maps"})," \xa9 Crown copyright and database rights ",(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:(new Date).getFullYear()}})," Ordnance Survey (100025252)"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.openstreetmap.org/copyright",children:"OpenStreetMap"})," \xa9 OpenStreetMap contributors"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.strava.com/heatmap",children:"Strava Heatmap"})," \xa9 2018 Strava"]}),"\n"]}),"\n",(0,a.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{id:"def-1","ref-number":"1",children:["Ordnance Survey only covers Great Britain. Northern Ireland has its own counterpart: Ordnance Survey of Northern Ireland. Their maps are not the same. ",(0,a.jsx)(t.a,{href:"#ref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})," ",(0,a.jsxs)(t.a,{href:"#ref-1-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:["\u21a9",(0,a.jsx)(t.sup,{children:"2"})]})]}),"\n",(0,a.jsxs)(t.li,{id:"def-2","ref-number":"2",children:[(0,a.jsx)(t.a,{href:"https://www.bbc.co.uk/programmes/b06b36q3",children:"https://www.bbc.co.uk/programmes/b06b36q3"})," ",(0,a.jsx)(t.a,{href:"#ref-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})," ",(0,a.jsxs)(t.a,{href:"#ref-2-2","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:["\u21a9",(0,a.jsx)(t.sup,{children:"2"})]})]}),"\n",(0,a.jsxs)(t.li,{id:"def-3","ref-number":"3",children:[(0,a.jsx)(t.a,{href:"https://www.strava.com/heatmap#5.98/-6.57074/54.52126/hot/all",children:"https://www.strava.com/heatmap#5.98/-6.57074/54.52126/hot/all"})," ",(0,a.jsx)(t.a,{href:"#ref-3","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(t.li,{id:"def-4","ref-number":"4",children:[(0,a.jsx)(t.a,{href:"https://proxyman.io/",children:"https://proxyman.io/"})," ",(0,a.jsx)(t.a,{href:"#ref-4","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(t.li,{id:"def-5","ref-number":"5",children:[(0,a.jsx)(t.a,{href:"https://wiki.openstreetmap.org/wiki/Strava",children:"https://wiki.openstreetmap.org/wiki/Strava"})," ",(0,a.jsx)(t.a,{href:"#ref-5","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(t.li,{id:"def-6","ref-number":"6",children:[(0,a.jsx)(t.a,{href:"https://digimap.edina.ac.uk/",children:"https://digimap.edina.ac.uk/"})," ",(0,a.jsx)(t.a,{href:"#ref-6","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(t.li,{id:"def-7","ref-number":"7",children:[(0,a.jsx)(t.a,{href:"https://www.qgis.org/",children:"https://www.qgis.org/"})," ",(0,a.jsx)(t.a,{href:"#ref-7","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(t.li,{id:"def-8","ref-number":"8",children:[(0,a.jsx)(t.a,{href:"https://www.ordnancesurvey.co.uk/blog/2012/02/how-do-you-look-after-your-paper-map/",children:"https://www.ordnancesurvey.co.uk/blog/2012/02/how-do-you-look-after-your-paper-map/"})," ",(0,a.jsx)(t.a,{href:"#ref-8","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n",(0,a.jsxs)(t.li,{id:"def-9","ref-number":"9",children:[(0,a.jsx)(t.a,{href:"https://shop.ordnancesurvey.co.uk/map-selector/",children:"https://shop.ordnancesurvey.co.uk/map-selector/"})," ",(0,a.jsx)(t.a,{href:"#ref-9","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n"]})]})},s=Object.assign({},(0,n.ah)(),e.components),o=s.wrapper;return o?(0,a.jsx)(o,Object.assign({},e,{children:(0,a.jsx)(t,{})})):t()}},1543:function(e){e.exports={slider:"styles_slider__s_abj",handle:"styles_handle__TP_f9"}},5116:function(e){e.exports={colourIndicator:"styles_colourIndicator__JV1u9"}},1151:function(e,t,s){"use strict";s.d(t,{ah:function(){return r}});var a=s(7294);const n=a.createContext({});function r(e){const t=a.useContext(n);return a.useMemo((()=>"function"===typeof e?e(t):{...t,...e}),[t,e])}}}]);