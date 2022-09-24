"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{7355:function(n,e,s){s.r(e),s.d(e,{codeBlocks:function(){return c},metadata:function(){return o}});var a=s(5893),t=s(1151),c=[{language:"js",lines:["import {patch} from './serviceWorkerPatch'","","const serviceWorker = patch(() =>","  navigator.serviceWorker.register(","    new URL(/* webpackChunkName: \"../../../public/_\" */ './serviceWorker.js', import.meta.url)","  )",")"]},{language:"js",lines:["export const patch = fn => {","  const originalToString = URL.prototype.toString","","  URL.prototype.toString = function(){","   return originalToString.call(this).replace('public/', '')","  }","","  const result = fn()","","  URL.prototype.toString = originalToString","","  return result","}"]}],o={title:"Import Service Workers in Next.js",description:"Emit Service Workers to the Root Directory",emoji:"\ud83d\udce6",date:"2021-08-05"};e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=function(){var e=Object.assign({p:"p",code:"code",strong:"strong",pre:"pre",span:"span"},(0,t.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Webpack"})," is very fussy when it comes to importing ",(0,a.jsx)(e.code,{children:"Service Workers"}),". The format of the ",(0,a.jsx)(e.code,{children:"navigator.serviceWorker.register(new URL('./serviceWorker.js', import.meta.url))"})," call is fixed."]}),"\n",(0,a.jsxs)(e.p,{children:["This ",(0,a.jsx)(e.strong,{children:"hack"})," works around that, patching the ",(0,a.jsx)(e.code,{children:"URL.toString()"})," function so that the ",(0,a.jsx)(e.code,{children:"URL"})," points to the chunk, emitted to the ",(0,a.jsx)(e.code,{children:"public"})," folder - which is served at the server root, allowing full ",(0,a.jsx)(e.code,{children:"Service Worker"})," ",(0,a.jsx)(e.code,{children:"scope"}),".\nIn other words this emulates ",(0,a.jsx)(e.code,{children:"publicPath"})," inline."]}),"\n",(0,a.jsxs)(e.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(e.code,{className:"language-js",metastring:"// wherever.js",children:[(0,a.jsx)(e.span,{className:"token keyword",children:"import"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"patch",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"from"})," ",(0,a.jsx)(e.span,{className:"token string",children:"'./serviceWorkerPatch'"}),"\n\n",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," serviceWorker ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token function",children:"patch"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"=>"}),"\n  navigator",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"serviceWorker",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"register"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),"\n    ",(0,a.jsx)(e.span,{className:"token keyword",children:"new"})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"URL"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token comment",children:'/* webpackChunkName: "../../../public/_" */'})," ",(0,a.jsx)(e.span,{className:"token string",children:"'./serviceWorker.js'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"import"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"meta",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"url",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n",(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n"]})]}),"\n",(0,a.jsxs)(e.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(e.code,{className:"language-js",metastring:"// serviceWorkerPatch.js",children:[(0,a.jsx)(e.span,{className:"token keyword",children:"export"})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," ",(0,a.jsx)(e.span,{className:"token function-variable function",children:"patch"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token parameter",children:"fn"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"=>"})," ",(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," originalToString ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token class-name",children:"URL"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"prototype",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"toString\n\n  ",(0,a.jsx)(e.span,{className:"token class-name",children:"URL"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"prototype",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function-variable function",children:"toString"})," ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token keyword",children:"function"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"{"}),"\n   ",(0,a.jsx)(e.span,{className:"token keyword",children:"return"})," ",(0,a.jsx)(e.span,{className:"token function",children:"originalToString"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"call"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token keyword",children:"this"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),(0,a.jsx)(e.span,{className:"token function",children:"replace"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token string",children:"'public/'"}),(0,a.jsx)(e.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(e.span,{className:"token string",children:"''"}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n  ",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n\n  ",(0,a.jsx)(e.span,{className:"token keyword",children:"const"})," result ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," ",(0,a.jsx)(e.span,{className:"token function",children:"fn"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"("}),(0,a.jsx)(e.span,{className:"token punctuation",children:")"}),"\n\n  ",(0,a.jsx)(e.span,{className:"token class-name",children:"URL"}),(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"prototype",(0,a.jsx)(e.span,{className:"token punctuation",children:"."}),"toString ",(0,a.jsx)(e.span,{className:"token operator",children:"="})," originalToString\n\n  ",(0,a.jsx)(e.span,{className:"token keyword",children:"return"})," result\n",(0,a.jsx)(e.span,{className:"token punctuation",children:"}"}),"\n"]})]})]})},s=Object.assign({},(0,t.ah)(),n.components),c=s.wrapper;return c?(0,a.jsx)(c,Object.assign({},n,{children:(0,a.jsx)(e,{})})):e()}},1151:function(n,e,s){s.d(e,{ah:function(){return c}});var a=s(7294);const t=a.createContext({});function c(n){const e=a.useContext(t);return a.useMemo((()=>"function"===typeof n?n(e):{...e,...n}),[e,n])}}}]);