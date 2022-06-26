"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[137],{137:function(e,n,s){s.r(n),s.d(n,{codeBlocks:function(){return m},default:function(){return f},metadata:function(){return j}});var a=s(5893),t=s(1151),o=s(3741),r=s(8858),i={id:.9214993736695467,resolutions:{1:{src:"/.assets/83002adbaaecedaed13ccd3dc778936c/bluetooth.webp",scale:1,width:780,height:557},2:{src:"/.assets/53c2b806de53bb75304eb95e6b194be5/bluetooth.webp",scale:2,width:1560,height:1114}}},c={id:.21317251211210864,resolutions:{1:{src:"/.assets/6744c9dfdca0281a5d521380a2180a23/enjoyable.webp",scale:1,width:776,height:515},2:{src:"/.assets/086319cff74158d92c4f1ba7b42a74e6/enjoyable.webp",scale:2,width:1552,height:1030}}},l="/.assets/11399e54c364458de3d511b9ee226e2a/X.svg",d="/.assets/3d63d76f1316d3f226321e7232155ed4/S.svg",h="/.assets/3e535ee59a1be5efc7fb6d7a5dd2b702/T.svg",u="/.assets/08b6fae1a70b8b59c60815b8fe8b450b/O.svg",p="/.assets/84e664cc956635c9c98c4dd2c1065f4d/anki.enjoyable",m=[{language:"ini",lines:["SQUARE = Again (1)","TRIANGLE = Hard (2)","CROSS = Good / Next Card (\u23b5)","CIRCLE = Easy (4)","","L1 = Add (A)","L2 = Browse (B)","","R1 = Sync (Y)","R2 = Stats (T)","","\u2191 = Flag (\u2318-1)","\u2193 = Suspend (\u21e7-2)","\u2190 = Undo (\u2318-Z)","\u2192 = Mark (\u21e7-8)","","SELECT = Edit (E)","PS = Decks (D)","START =  Explicit 3rd Difficulty (3)"]}],j={title:"Anki with a PS3 Controller",description:"Level up your flashcards with a PS3 controller",emoji:"\ud83c\udfae",date:"2021-03-08",category:["medicine","dev"],image:{id:.49420047905961373,resolutions:{1:{src:"/.assets/cc7976035c85ffad2848a331d3569d06/header.webp",scale:1,width:1e3,height:400},2:{src:"/.assets/68712663dd6b4c19cae6ef7a16a7191d/header.webp",scale:2,width:2e3,height:800},3:{src:"/.assets/b65e805c698adbf6871a455cb639d755/header.webp",scale:3,width:3e3,height:1200},.5:{src:"/.assets/8ec3cb2cc248d5edcb9b53cc10b8b877/header.webp",scale:.5,width:500,height:200}}}};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({p:"p",a:"a",code:"code",h1:"h1",sup:"sup",blockquote:"blockquote",em:"em",pre:"pre",span:"span",section:"section",hr:"hr",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n","\n","\n","\n",(0,a.jsxs)(n.p,{children:["If you're current studying, you've probably come across ",(0,a.jsx)(n.a,{href:"https://apps.ankiweb.net/",children:"Anki"}),". It's a flashcards app that centres around spaced repetition, and powerful flexibility. The main premise of Anki is the idea that you remember better - and for longer - if you have to retrieve the knowledge frequently. Obviously, once you've amassed a sizeable collection it's not feasible to review every card, everyday, and therefore Anki tries to solve this by asking you questions you repeatedly get correct less and less frequently. New cards, and cards you get wrong are moved to the top of the pile, and you review them sooner and more frequently."]}),"\n",(0,a.jsxs)(n.p,{children:["Anki works, but while its algorithm offers a major improvement over manual scheduling, it doesn't reduce the time needed to study ",(0,a.jsx)(n.code,{children:"X"})," amount of cards."]}),"\n",(0,a.jsx)(n.p,{children:"Anki's default input methods are mouse and keyboard. There's nothing wrong with these but I don't really find them very ergonomic. With this in mind, I decided to repurpose an old PS3 Controller into the perfect Anki companion."}),"\n",(0,a.jsx)(n.h1,{id:"bluetooth",children:(0,a.jsx)(n.a,{href:"#bluetooth",children:"Bluetooth"})}),"\n",(0,a.jsxs)(n.p,{children:["While waiting for the controller to wake up after years asleep, I started looking online for resources about connecting PS3 controllers to macOS. Looking at what others had already done",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#def-1",id:"ref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," there seemed to be a general theme of insane complexity, and shaky fixes that worked for some but didn't for others. I didn't have high hopes after reading these, and so I was surprised when the controller - after holding the ",(0,a.jsx)(n.code,{children:"PS3 button"})," for a few seconds appeared in the bluetooth section of ",(0,a.jsx)(n.code,{children:"System Preferences"}),", and connected without a hitch."]}),"\n","\n",(0,a.jsx)(o.Z,{image:i,alt:"macOS Bluetooth Dialog Showing PS3 Controller"}),"\n",(0,a.jsxs)(n.p,{children:["Just for clarity, I conducted this all on ",(0,a.jsx)(n.code,{children:"macOS 11.2.2"})," without problem."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u26a0\ufe0f Sometimes macOS says the connection has failed, or that the controller isn't connected"}),"\n",(0,a.jsxs)(n.p,{children:["Right Click, if you see the option to ",(0,a.jsx)(n.code,{children:"Disconnect"}),", then the controller's connected successfully"]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"it-doesnt-work",children:(0,a.jsx)(n.a,{href:"#it-doesnt-work",children:"It Doesn't Work"})}),"\n",(0,a.jsxs)(n.p,{children:["While the controller ",(0,a.jsx)(n.em,{children:"is"})," connected to the MacBook, and appears correctly as a ",(0,a.jsx)(n.code,{children:"HID"})," device, on the surface, it doesn't actually do anything. This is because by default, the controller's interpreted as a pointer device - aka a mouse. Moving the joysticks, the mouse does move, albeit strangely."]}),"\n",(0,a.jsxs)(n.p,{children:["I already use ",(0,a.jsx)(n.a,{href:"https://github.com/pqrs-org/Karabiner-Elements",children:"Karabiner Elements"})," to remap my keyboard, and so I initially tried this. After enabling the controller in Karabiner, it works perfectly, mapping the various controller buttons to keys of my choosing."]}),"\n",(0,a.jsx)(n.p,{children:"The only problem with this is that Karabiner doesn't really support manipulating cursor movements - or at least I didn't manage to find a way. The erratic mouse movement from the controller basically make the computer unusable, as they're sent even when the joysticks are stationary."}),"\n",(0,a.jsx)(n.h1,{id:"enjoyable",children:(0,a.jsx)(n.a,{href:"#enjoyable",children:"Enjoyable"})}),"\n",(0,a.jsxs)(n.p,{children:["The solution I found was ",(0,a.jsx)(n.a,{href:"https://yukkurigames.com/enjoyable/",children:"Enjoyable"}),", an open-source app specifically designed for our use case. The program is quite old, and so many forks have emerged, bringing support for newer versions of macOS. These work great, however they don't support key modifiers (",(0,a.jsx)(n.code,{children:"\u200c\u2318"}),", ",(0,a.jsx)(n.code,{children:"\u2325"}),", ",(0,a.jsx)(n.code,{children:"\u2303"}),", ",(0,a.jsx)(n.code,{children:"\u21e7"}),")."]}),"\n","\n",(0,a.jsx)(o.Z,{image:c,alt:"enjoyable dialog"}),"\n",(0,a.jsxs)(n.p,{children:["To solve this I forked the most up-to-date repo, and after teaching myself a bit of ",(0,a.jsx)(n.code,{children:"Objective-C"})," \ud83d\ude2d, managed to implement the modifiers. At the moment, they don't show up in the ",(0,a.jsx)(n.code,{children:"GUI"}),", and can only be input from an ",(0,a.jsx)(n.code,{children:".enjoyable"})," config file."]}),"\n",(0,a.jsxs)(n.p,{children:["The modified version is ",(0,a.jsx)(n.a,{href:"https://github.com/reubn/enjoyable",children:"here"}),". It satisfies my needs, so I probably won't update it any further."]}),"\n",(0,a.jsx)(n.h1,{id:"anki",children:(0,a.jsx)(n.a,{href:"#anki",children:"Anki"})}),"\n","\n",(0,a.jsxs)(n.p,{children:["Bringing it back to Anki, I've designed a mapping that works for me. The ",(0,a.jsx)("img",{className:r.inline,src:l})," ",(0,a.jsx)("img",{className:r.inline,src:d})," ",(0,a.jsx)("img",{className:r.inline,src:h})," ",(0,a.jsx)("img",{className:r.inline,src:u}),", buttons map to the card difficulty options, with ",(0,a.jsx)("img",{className:r.inline,src:l})," also flipping the card over. I'll include a detailed mapping below, along with the config file"]}),"\n",(0,a.jsxs)(n.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(n.code,{className:"language-ini",children:[(0,a.jsx)(n.span,{className:"token key attr-name",children:"SQUARE"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Again (1)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"TRIANGLE"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Hard (2)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"CROSS"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Good / Next Card (\u23b5)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"CIRCLE"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Easy (4)"}),"\n\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"L1"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Add (A)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"L2"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Browse (B)"}),"\n\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"R1"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Sync (Y)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"R2"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Stats (T)"}),"\n\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"\u2191"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Flag (\u2318-1)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"\u2193"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Suspend (\u21e7-2)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"\u2190"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Undo (\u2318-Z)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"\u2192"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Mark (\u21e7-8)"}),"\n\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"SELECT"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Edit (E)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"PS"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="})," ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Decks (D)"}),"\n",(0,a.jsx)(n.span,{className:"token key attr-name",children:"START"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"="}),"  ",(0,a.jsx)(n.span,{className:"token value attr-value",children:"Explicit 3rd Difficulty (3)"}),"\n"]})]}),"\n","\n",(0,a.jsxs)(n.p,{children:["And ",(0,a.jsx)("a",{href:p,children:"here"}),"'s the ",(0,a.jsx)(n.code,{children:".enjoyable"}),", ready to import into Enjoyable."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u26a0\ufe0f If it doesn't seem to be working, click the arrow in the top right corner of Enjoyable.\nI don't know if different controllers have different IDs, so you may have to swap the IDs over too"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"At this point everything should be working!"}),"\n",(0,a.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{id:"def-1","ref-number":"1",children:[(0,a.jsx)(n.a,{href:"https://gist.github.com/hlung/8385683",children:"https://gist.github.com/hlung/8385683"})," ",(0,a.jsx)(n.a,{href:"#ref-1","data-footnote-backref":!0,className:"data-footnote-backref","aria-label":"Back to content",children:"\u21a9"})]}),"\n"]}),"\n"]})]})},s=Object.assign({},(0,t.ah)(),e.components),m=s.wrapper;return m?(0,a.jsx)(m,Object.assign({},e,{children:(0,a.jsx)(n,{})})):n()}},1151:function(e,n,s){s.d(n,{ah:function(){return o}});var a=s(7294);const t=a.createContext({});function o(e){const n=a.useContext(t);return a.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}}}]);