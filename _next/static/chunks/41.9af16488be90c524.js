"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{8041:function(e,s,n){n.r(s),n.d(s,{codeBlocks:function(){return d},default:function(){return u},metadata:function(){return h}});var a=n(5893),t=n(1151),o=n(7664),r=n(5277),c={id:.7119804375228296,resolutions:{1:{src:"/.assets/07d03eb7c3c06032d578db7cde5e9081/1.webp",scale:1,width:1e3,height:750},2:{src:"/.assets/6a2b5f21d2a50544ec376fe8bca6268a/1.webp",scale:2,width:1600,height:1200}}},i={id:.1615977568437843,resolutions:{1:{src:"/.assets/5be31dc8ed93cbea2bc53754710302c3/2.webp",scale:1,width:1e3,height:750},2:{src:"/.assets/2d2b537a2927fc1e79e971f895f01ecb/2.webp",scale:2,width:1600,height:1200}}},l={id:.8599877670390506,resolutions:{1:{src:"/.assets/36595caf367b6904fea4d815b3239dd5/3.webp",scale:1,width:1e3,height:750},2:{src:"/.assets/026fcc0b904d1e48c4b9d843a79dcb4a/3.webp",scale:2,width:1600,height:1200}}},p={id:.983098275425607,resolutions:{1:{src:"/.assets/1d4e8578b99b1ffb8f3838bfc0a8d980/4.webp",scale:1,width:1e3,height:750},2:{src:"/.assets/f097e7da083433297965639427cbbd2d/4.webp",scale:2,width:1600,height:1200}}},d=[{language:"json",lines:["{",'  "version": 8,','  "sources": {','    "demo_osm": {','      "maxzoom": 20,','      "tileSize": 128,','      "tiles": [','        "https://tile.openstreetmap.org/{z}/{x}/{y}.png"',"      ],",'      "minzoom": 10,','      "bounds": [',"        -8.82,","        49.79,","        1.92,","        60.94","      ],",'      "type": "raster"',"    }","  },",'  "layers": [',"    {",'      "type": "raster",','      "id": "demo_osm",','      "source": "demo_osm"',"    }","  ]","}"]},{language:"json",lines:["{",'  "metadata": {','    "id": "demo_osm",','    "name": "OpenStreetMap Demo",','    "group": "base",','    "overrideUIMode": "dark"','    "attribution": "\xa9 OpenStreetMap contributors"',"  },",'  "user": {','    "groupIndex": 0,','    "pinned": false,','    "enabled": true,','    "quickToggle": false',"  },",'  "style": {...}',"}"]},{language:null,lines:["- Full Mapbox Style Specification Support","- Multi-Layer Support","    - raster","    - vector","    - geojson","    - gpx","- Transparency Support","- On Device Editing","    - Visual","    - JSON","- Offline Maps","- Aggressive Low Power Mode","- Gesture Shortcuts","- Right/Left Hand Modes","- BNG Grid Reference Support","- Heading/Bearing Info","- Altitude Data","- Location Querying","- Adaptive Light/Dark Modes","- ...numerous others that I can't remember"]}],h={title:"Making an iOS App",description:"The Development of my Mapping Tool: Gaia",emoji:"\ud83d\udcf1",date:"2021-07-20",category:["dev","outdoors"],image:{id:.14480411511520241,resolutions:{1:{src:"/.assets/c2d17c544766ed7e75185866c7b95350/header.webp",scale:1,width:1e3,height:400},2:{src:"/.assets/a2c0de2913921d0d25806006b0805dbc/header.webp",scale:2,width:2e3,height:800},3:{src:"/.assets/06b07ff56f3e74574a1b302a1ff19a96/header.webp",scale:3,width:3e3,height:1200},.5:{src:"/.assets/47cf82604d20eef561b7d0ad269ec7cd/header.webp",scale:.5,width:500,height:200}}}};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",a:"a",h1:"h1",code:"code",em:"em",pre:"pre",span:"span",strong:"strong"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n","\n","\n","\n",(0,a.jsxs)(s.p,{children:["Over the past 6 months, I've been getting back into iOS development by creating ",(0,a.jsx)(s.a,{href:"https://github.com/reubn/gaia",children:"Gaia"}),", my generalist map consumption/navigation/outdoors app."]}),"\n",(0,a.jsx)(s.h1,{id:"why",children:(0,a.jsx)(s.a,{href:"#why",children:"Why?"})}),"\n",(0,a.jsxs)(s.p,{children:["I decided to make Gaia ",(0,a.jsx)(s.code,{children:"/\u02c8\u0261a\u026a\u0259/"})," ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.code,{children:"guy-ah"})})," as there wasn't really an unopinionated app that allowed the consumption of ",(0,a.jsx)(s.code,{children:"XYZ"})," tiles and offered some important features like offline caching, layering, and had the right mix of intuitive design and 'power features'. I wanted such an app to use while outdoors; in this scenario, Google/Apple Maps don't have nearly enough detail, and aren't very useful: I only really use them for transit and navigation, Street View, and discovering businesses."]}),"\n",(0,a.jsxs)(s.p,{children:["As I have written about ",(0,a.jsx)(o.Z,{href:"/posts/adventure-maps",children:"before"}),", one of the things I find most useful when off grid is confirming and correlating details from multiple sources. Sometimes details are ambiguous or missing on drawn maps, but visible on their aerial equivalents, or vice versa. It's also really useful to be able to have all the different maps I use in the same place, with the same controls and features, without having to switch between loads of apps. Layering data like Strava Heatmaps is also invaluable on the ground - in fact, the ability to do this was the main impetus behind Gaia."]}),"\n",(0,a.jsx)(r.Z,{image:c,alt:"Gaia Screenshots"}),"\n",(0,a.jsx)(s.p,{children:"I also wanted to learn more Swift (which - as an aside - is probably the most enjoyable programming language I've found so far)."}),"\n",(0,a.jsx)(s.p,{children:"I wanted Gaia superficially to be easy to use, and visually pleasing, whilst underneath be very powerful, configurable, and extensible. I also wanted an app optimised for low power draw, and Gaia offers some really aggressive power saving features. I've managed to use Gaia for real world navigation on an iPhone 11 without charging for ~36 hours."}),"\n",(0,a.jsx)(r.Z,{image:i,alt:"Gaia Screenshots"}),"\n",(0,a.jsx)(s.h1,{id:"mapbox",children:(0,a.jsx)(s.a,{href:"#mapbox",children:"Mapbox"})}),"\n",(0,a.jsxs)(s.p,{children:["Under the hood, Gaia uses the ",(0,a.jsx)(s.a,{href:"https://docs.mapbox.com/ios/maps/guides/",children:"Mapbox Maps SDK for iOS"}),". Initially, I tried the builtin ",(0,a.jsx)(s.code,{children:"Mapkit"})," library, but high resolution ",(0,a.jsx)(s.code,{children:"raster"})," support was shit. Moving to Mapbox's offering provided much better support for complexities such as this, via the battle tested ",(0,a.jsx)(s.a,{href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/",children:"Mapbox Style Specification"}),", and also means we don't have to recreate the wheel by creating another subpar rendering engine. Defined in ",(0,a.jsx)(s.code,{children:"JSON"}),", it's a convenient way to define complex maps with both ",(0,a.jsx)(s.code,{children:"raster"}),", and ",(0,a.jsx)(s.code,{children:"vector"})," components, supporting ",(0,a.jsx)(s.code,{children:"geojson"}),", embedded media - and in ",(0,a.jsx)(s.code,{children:"v10"})," - support for 3D terrain. Using the Style Specification, also provides portability, meaning the maps can be consumed cross platform outside Gaia, currently powering a skeleton ",(0,a.jsx)(s.a,{href:"https://github.com/reubn/gaia/web",children:"desktop version"}),"."]}),"\n",(0,a.jsxs)(s.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(s.code,{className:"language-json",metastring:"// Mapbox Style",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"version",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"8"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"sources",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"demo_osm",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"maxzoom",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"20"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"tileSize",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"128"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"tiles",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"\n        ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"https://tile.openstreetmap.org/{z}/{x}/{y}.png",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),"\n      ",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"minzoom",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"10"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"bounds",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"\n        ",(0,a.jsx)(s.span,{className:"token number",children:"-8.82"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,a.jsx)(s.span,{className:"token number",children:"49.79"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,a.jsx)(s.span,{className:"token number",children:"1.92"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n        ",(0,a.jsx)(s.span,{className:"token number",children:"60.94"}),"\n      ",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"type",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"raster",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"layers",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"["}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"type",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"raster",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"id",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"demo_osm",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"source",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"demo_osm",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),"\n    ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"]"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]}),"\n",(0,a.jsxs)(s.p,{children:["Gaia extends this with a higher-level concept of individual ",(0,a.jsx)(s.code,{children:"layers"}),", which can be composed together by the user to create incredibly complex but consumable cartography."]}),"\n",(0,a.jsxs)(s.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(s.code,{className:"language-json",metastring:"// Gaia Layer Definition",children:[(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"metadata",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"id",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"demo_osm",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"name",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"OpenStreetMap Demo",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"group",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"base",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"overrideUIMode",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"dark",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"attribution",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsxs)(s.span,{className:"token string",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"\xa9 OpenStreetMap contributors",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"user",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"groupIndex",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token number",children:"0"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"pinned",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:(0,a.jsx)(s.span,{className:"token booleanFalse",children:"false"})}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"enabled",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:(0,a.jsx)(s.span,{className:"token booleanTrue",children:"true"})}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"quickToggle",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token boolean",children:(0,a.jsx)(s.span,{className:"token booleanFalse",children:"false"})}),"\n  ",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(s.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsxs)(s.span,{className:"token property",children:[(0,a.jsx)(s.span,{className:"token quote",children:'"'}),"style",(0,a.jsx)(s.span,{className:"token quote",children:'"'})]}),(0,a.jsx)(s.span,{className:"token operator",children:":"})," ",(0,a.jsx)(s.span,{className:"token punctuation",children:"{"}),"...",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]}),"\n",(0,a.jsxs)(s.p,{children:["'Visual' editing is supported for a wide range of options, but the ",(0,a.jsx)(s.code,{children:"JSON"})," backing schemas are still exposed, if needed."]}),"\n",(0,a.jsx)(r.Z,{image:p,alt:"Gaia Screenshots"}),"\n",(0,a.jsxs)(s.p,{children:["Although Gaia is using the Mapbox ",(0,a.jsx)(s.code,{children:"SDK"}),", it's not based around Mapbox services, and doesn't ",(0,a.jsx)(s.em,{children:"by default"})," interact with Mapbox at all. You ",(0,a.jsx)(s.strong,{children:"can"})," use them, but just as you can use any supplied ",(0,a.jsx)(s.code,{children:"raster"}),"/",(0,a.jsx)(s.code,{children:"vector"}),"/",(0,a.jsx)(s.code,{children:"geojson"})," source."]}),"\n",(0,a.jsx)(r.Z,{image:l,alt:"Gaia Screenshots"}),"\n",(0,a.jsxs)(s.p,{children:["Currently, Gaia uses ",(0,a.jsx)(s.code,{children:"v6.3.0"})," of the Mapbox SDK, but I plan to upgrade to the maturing ",(0,a.jsx)(s.code,{children:"v10"})," over the summer. I also want to document the ",(0,a.jsx)(s.code,{children:"Layer Definition"})," structure, and other 'power features' that Gaia uses, but the motivation isn't really there, as the app is for me, calibrated is against my own needs, and I'm not currently distributing it. It's also not idiot proof: you need some basic familiarity with the concepts that underpin digital maps, but you can import directly from ",(0,a.jsx)(s.code,{children:"XYZ tile"}),"/",(0,a.jsx)(s.code,{children:"geojson"}),"/",(0,a.jsx)(s.code,{children:"gpx"})," ",(0,a.jsx)(s.code,{children:"URL"}),"s, which is fairly user friendly. It does however, warn on many common error conditions/counter intuitive states, and can \u2728automagically\u2728 fix them."]}),"\n",(0,a.jsxs)(s.p,{children:["Gaia is open source, available on ",(0,a.jsx)(s.a,{href:"https://github.com/reubn/gaia",children:"GitHub"}),", and can be compiled for your own devices, but isn't available in the App Store or anything."]}),"\n",(0,a.jsx)(s.h1,{id:"features",children:(0,a.jsx)(s.a,{href:"#features",children:"Features"})}),"\n",(0,a.jsxs)(s.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsx)(s.code,{children:"- Full Mapbox Style Specification Support\n- Multi-Layer Support\n    - raster\n    - vector\n    - geojson\n    - gpx\n- Transparency Support\n- On Device Editing\n    - Visual\n    - JSON\n- Offline Maps\n- Aggressive Low Power Mode\n- Gesture Shortcuts\n- Right/Left Hand Modes\n- BNG Grid Reference Support\n- Heading/Bearing Info\n- Altitude Data\n- Location Querying\n- Adaptive Light/Dark Modes\n- ...numerous others that I can't remember\n"})]})]})},n=Object.assign({},(0,t.ah)(),e.components),d=n.wrapper;return d?(0,a.jsx)(d,Object.assign({},e,{children:(0,a.jsx)(s,{})})):s()}},1151:function(e,s,n){n.d(s,{ah:function(){return o}});var a=n(7294);const t=a.createContext({});function o(e){const s=a.useContext(t);return a.useMemo((()=>"function"===typeof e?e(s):{...s,...e}),[s,e])}}}]);