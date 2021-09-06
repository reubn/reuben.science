"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{3905:function(e,t,a){a.d(t,{kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"===typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,k=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(k,s(s({ref:t},m),{},{components:a})):n.createElement(k,s({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"===typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68432:function(e,t,a){a.r(t),a.d(t,{codeBlocks:function(){return d},default:function(){return h},metadata:function(){return u}});var n=a(87462),o=a(44925),r=(a(67294),a(3905)),s=a(72070),i=a(23711),l={id:.3662891086705673,resolutions:{1:{src:"/.assets/83002adbaaecedaed13ccd3dc778936c/bluetooth.webp",scale:1,width:780,height:557},2:{src:"/.assets/53c2b806de53bb75304eb95e6b194be5/bluetooth.webp",scale:2,width:1560,height:1114}}},c={id:.984981576762358,resolutions:{1:{src:"/.assets/6744c9dfdca0281a5d521380a2180a23/enjoyable.webp",scale:1,width:776,height:515},2:{src:"/.assets/086319cff74158d92c4f1ba7b42a74e6/enjoyable.webp",scale:2,width:1552,height:1030}}},p="/.assets/11399e54c364458de3d511b9ee226e2a/X.svg",m=["components"],d=[{language:"ini",lines:["SQUARE = Again (1)","TRIANGLE = Hard (2)","CROSS = Good / Next Card (\u23b5)","CIRCLE = Easy (4)","","L1 = Add (A)","L2 = Browse (B)","","R1 = Sync (Y)","R2 = Stats (T)","","\u2191 = Flag (\u2318-1)","\u2193 = Suspend (\u21e7-2)","\u2190 = Undo (\u2318-Z)","\u2192 = Mark (\u21e7-8)","","SELECT = Edit (E)","PS = Decks (D)","START =  Explicit 3rd Difficulty (3)"]}],u={title:"Anki with a PS3 Controller",description:"Level up your flashcards with a PS3 controller",emoji:"\ud83c\udfae",date:"2021-03-08",category:["medicine","dev"],image:{id:.954332828417852,resolutions:{1:{src:"/.assets/cc7976035c85ffad2848a331d3569d06/header.webp",scale:1,width:1e3,height:400},2:{src:"/.assets/68712663dd6b4c19cae6ef7a16a7191d/header.webp",scale:2,width:2e3,height:800},3:{src:"/.assets/b65e805c698adbf6871a455cb639d755/header.webp",scale:3,width:3e3,height:1200},.5:{src:"/.assets/8ec3cb2cc248d5edcb9b53cc10b8b877/header.webp",scale:.5,width:500,height:200}}}},k={codeBlocks:d,metadata:u};function h(e){var t=e.components,a=(0,o.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're current studying, you've probably come across ",(0,r.kt)("a",{parentName:"p",href:"https://apps.ankiweb.net/"},"Anki"),". It's a flashcards app that centres around spaced repetition, and powerful flexibility. The main premise of Anki is the idea that you remember better - and for longer - if you have to retrieve the knowledge frequently. Obviously, once you've amassed a sizeable collection it's not feasible to review every card, everyday, and therefore Anki tries to solve this by asking you questions you repeatedly get correct less and less frequently. New cards, and cards you get wrong are moved to the top of the pile, and you review them sooner and more frequently."),(0,r.kt)("p",null,"Anki works, but while its algorithm offers a major improvement over manual scheduling, it doesn't reduce the time needed to study ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," amount of cards."),(0,r.kt)("p",null,"Anki's default input methods are mouse and keyboard. There's nothing wrong with these but I don't really find them very ergonomic. With this in mind, I decided to repurpose an old PS3 Controller into the perfect Anki companion."),(0,r.kt)("h1",{id:"bluetooth"},(0,r.kt)("a",{parentName:"h1",href:"#bluetooth"},"Bluetooth")),(0,r.kt)("p",null,"While waiting for the controller to wake up after years asleep, I started looking online for resources about connecting PS3 controllers to macOS. Looking at what others had already done",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," there seemed to be a general theme of insane complexity, and shaky fixes that worked for some but didn't for others. I didn't have high hopes after reading these, and so I was surprised when the controller - after holding the ",(0,r.kt)("inlineCode",{parentName:"p"},"PS3 button")," for a few seconds appeared in the bluetooth section of ",(0,r.kt)("inlineCode",{parentName:"p"},"System Preferences"),", and connected without a hitch."),(0,r.kt)(s.Z,{image:l,alt:"macOS Bluetooth Dialog Showing PS3 Controller",mdxType:"Image"}),(0,r.kt)("p",null,"Just for clarity, I conducted this all on ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS 11.2.2")," without problem."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Sometimes macOS says the connection has failed, or that the controller isn't connected"),(0,r.kt)("p",{parentName:"blockquote"},"Right Click, if you see the option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Disconnect"),", then the controller's connected successfully")),(0,r.kt)("h1",{id:"it-doesnt-work"},(0,r.kt)("a",{parentName:"h1",href:"#it-doesnt-work"},"It Doesn't Work")),(0,r.kt)("p",null,"While the controller ",(0,r.kt)("em",{parentName:"p"},"is")," connected to the MacBook, and appears correctly as a ",(0,r.kt)("inlineCode",{parentName:"p"},"HID")," device, on the surface, it doesn't actually do anything. This is because by default, the controller's interpreted as a pointer device - aka a mouse. Moving the joysticks, the mouse does move, albeit strangely."),(0,r.kt)("p",null,"I already use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pqrs-org/Karabiner-Elements"},"Karabiner Elements")," to remap my keyboard, and so I initially tried this. After enabling the controller in Karabiner, it works perfectly, mapping the various controller buttons to keys of my choosing."),(0,r.kt)("p",null,"The only problem with this is that Karabiner doesn't really support manipulating cursor movements - or at least I didn't manage to find a way. The erratic mouse movement from the controller basically make the computer unusable, as they're sent even when the joysticks are stationary."),(0,r.kt)("h1",{id:"enjoyable"},(0,r.kt)("a",{parentName:"h1",href:"#enjoyable"},"Enjoyable")),(0,r.kt)("p",null,"The solution I found was ",(0,r.kt)("a",{parentName:"p",href:"https://yukkurigames.com/enjoyable/"},"Enjoyable"),", an open-source app specifically designed for our use case. The program is quite old, and so many forks have emerged, bringing support for newer versions of macOS. These work great, however they don't support key modifiers (",(0,r.kt)("inlineCode",{parentName:"p"},"\u200c\u2318"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2325"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2303"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\u21e7"),")."),(0,r.kt)(s.Z,{image:c,alt:"enjoyable dialog",mdxType:"Image"}),(0,r.kt)("p",null,"To solve this I forked the most up-to-date repo, and after teaching myself a bit of ",(0,r.kt)("inlineCode",{parentName:"p"},"Objective-C")," \ud83d\ude2d, managed to implement the modifiers. At the moment, they don't show up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"GUI"),", and can only be input from an ",(0,r.kt)("inlineCode",{parentName:"p"},".enjoyable")," config file."),(0,r.kt)("p",null,"The modified version is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reubn/enjoyable"},"here"),". It satisfies my needs, so I probably won't update it any further."),(0,r.kt)("h1",{id:"anki"},(0,r.kt)("a",{parentName:"h1",href:"#anki"},"Anki")),(0,r.kt)("p",null,"Bringing it back to Anki, I've designed a mapping that works for me. The ",(0,r.kt)("img",{className:i.inline,src:p})," ",(0,r.kt)("img",{className:i.inline,src:"/.assets/3d63d76f1316d3f226321e7232155ed4/S.svg"})," ",(0,r.kt)("img",{className:i.inline,src:"/.assets/3e535ee59a1be5efc7fb6d7a5dd2b702/T.svg"})," ",(0,r.kt)("img",{className:i.inline,src:"/.assets/08b6fae1a70b8b59c60815b8fe8b450b/O.svg"}),", buttons map to the card difficulty options, with ",(0,r.kt)("img",{className:i.inline,src:p})," also flipping the card over. I'll include a detailed mapping below, along with the config file"),(0,r.kt)("pre",null,(0,r.kt)("span",{parentName:"pre",dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}}),(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:"; KEYMAP"},(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"SQUARE")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Again (1)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"TRIANGLE")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Hard (2)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"CROSS")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Good / Next Card (\u23b5)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"CIRCLE")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Easy (4)"),"\n\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"L1")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Add (A)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"L2")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Browse (B)"),"\n\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"R1")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Sync (Y)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"R2")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Stats (T)"),"\n\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"\u2191")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Flag (\u2318-1)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"\u2193")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Suspend (\u21e7-2)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"\u2190")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Undo (\u2318-Z)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"\u2192")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Mark (\u21e7-8)"),"\n\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"SELECT")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Edit (E)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"PS")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"=")," ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Decks (D)"),"\n",(0,r.kt)("span",{parentName:"code",className:"token key attr-name"},"START")," ",(0,r.kt)("span",{parentName:"code",className:"token punctuation"},"="),"  ",(0,r.kt)("span",{parentName:"code",className:"token value attr-value"},"Explicit 3rd Difficulty (3)"),"\n")),(0,r.kt)("p",null,"And ",(0,r.kt)("a",{href:"/.assets/84e664cc956635c9c98c4dd2c1065f4d/anki.enjoyable"},"here"),"'s the ",(0,r.kt)("inlineCode",{parentName:"p"},".enjoyable"),", ready to import into Enjoyable."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f If it doesn't seem to be working, click the arrow in the top right corner of Enjoyable.\nI don't know if different controllers have different IDs, so you may have to swap the IDs over too")),(0,r.kt)("p",null,"At this point everything should be working!"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1","ref-number":"1"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/hlung/8385683"},"https://gist.github.com/hlung/8385683"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},87462:function(e,t,a){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return n}})}}]);