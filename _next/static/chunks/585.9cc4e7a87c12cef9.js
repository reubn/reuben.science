"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{1585:function(n,e,s){s.r(e),s.d(e,{codeBlocks:function(){return t},metadata:function(){return o}});var a=s(5893),c=s(1151),t=[{language:"js",lines:["webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {","","  ...","","  config.module.rules.forEach(({oneOf}) => oneOf?.forEach(({use}) => {","    use?.forEach?.(({options: {modules}}) => {","      if(modules?.getLocalIdent) {","        delete modules.getLocalIdent","        modules.localIdentName = '[hash:base64:4]'","      }","    })","  }))","","  ...","","  return config","}"]}],o={title:"Next.js Custom 'localIdentName'",description:"Set webpack css-loader 'localIdentName' in Next.js",emoji:"\ud83d\udd3c",date:"2021-08-04",preview:{lines:{from:2}}};e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(){var e=Object.assign({p:"p",code:"code",pre:"pre",span:"span",strong:"strong"},(0,c.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n",(0,a.jsxs)(e.p,{children:["Place this inside the ",(0,a.jsx)(e.code,{children:"webpack"})," function in the ",(0,a.jsx)(e.code,{children:"next.config.js"})," file to patch the ",(0,a.jsx)(e.code,{children:"localIdentName"})," used by ",(0,a.jsx)(e.code,{children:"css-loader"})," for CSS Modules by ",(0,a.jsx)(e.code,{children:"Next.js"}),"."]}),"\n",(0,a.jsxs)(e.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(e.code,{className:"language-js",children:[(0,a.jsx)(e.span,{className:"token function-variable function",children:"webpack"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(e.span,{className:"token parameter",children:["config",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"buildId",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," dev",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," isServer",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," defaultLoaders",(0,a.jsx)(e.span,{className:"token punctuation",children:","})," webpack",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"=>"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n\n  ",(0,a.jsx)(e.span,{className:"token operator",children:"..."}),"\n\n  config",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"module",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"rules",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"forEach"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(e.span,{className:"token parameter",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"oneOf",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"=>"})," oneOf",(0,a.jsx)(e.span,{className:"token operator",children:"?."}),(0,a.jsx)(e.span,{className:"token function",children:"forEach"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(e.span,{className:"token parameter",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"use",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"=>"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n    use",(0,a.jsx)(e.span,{className:"token operator",children:"?."}),"forEach",(0,a.jsx)(e.span,{className:"token operator",children:"?."}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsxs)(e.span,{className:"token parameter",children:[(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),(0,a.jsx)(e.span,{className:"token literal-property property",children:"options"}),(0,a.jsx)(e.span,{className:"token operator",children:":"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"modules",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"=>"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(e.span,{className:"token keyword",children:"if"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"modules",(0,a.jsx)(e.span,{className:"token operator",children:"?."}),"getLocalIdent",(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n        ",(0,a.jsx)(e.span,{className:"token keyword",children:"delete"})," modules",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"getLocalIdent\n        modules",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"localIdentName ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token string",children:"'[hash:base64:4]'"}),"\n      ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n    ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n\n  ",(0,a.jsx)(e.span,{className:"token operator",children:"..."}),"\n\n  ",(0,a.jsx)(e.span,{className:"token keyword",children:"return"})," config\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})]}),"\n",(0,a.jsxs)(e.p,{children:["This can be scoped to ",(0,a.jsx)(e.strong,{children:"production"})," builds by testing for the ",(0,a.jsx)(e.code,{children:"dev"})," argument."]}),"\n",(0,a.jsxs)(e.p,{children:["Tested ",(0,a.jsx)(e.code,{children:"Next.js"})," ",(0,a.jsx)(e.code,{children:"v11.0.1"}),", ",(0,a.jsx)(e.code,{children:"webpack"})," ",(0,a.jsx)(e.code,{children:"v5.47.0"})]})]})},s=Object.assign({},(0,c.ah)(),n.components),t=s.wrapper;return t?(0,a.jsx)(t,Object.assign({},n,{children:(0,a.jsx)(e,{})})):e()}},1151:function(n,e,s){s.d(e,{ah:function(){return t}});var a=s(7294);const c=a.createContext({});function t(n){const e=a.useContext(c);return a.useMemo((()=>"function"===typeof n?n(e):{...e,...n}),[e,n])}}}]);