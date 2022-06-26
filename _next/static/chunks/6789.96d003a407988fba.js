"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6789],{6789:function(e,n,s){s.r(n),s.d(n,{codeBlocks:function(){return r},metadata:function(){return c}});var a=s(5893),t=s(1151),r=[{language:"bash",lines:['KEYCHAIN_SYSTEM_PATH="/Library/Keychains/System.keychain"','KEYCHAIN_LOGIN_PATH="~/Library/Keychains/login.keychain"',"","sudo security add-trusted-cert -d -r trustRoot -k $KEYCHAIN_PATH $CERT_PATH"]}],c={title:"Install Trusted Root Certificate",description:"Install Trusted Root Cert into macOS Keychain",emoji:"\ud83d\udd10",date:"2021-07-28",preview:{lines:{from:2,to:3}}};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({pre:"pre",span:"span",code:"code",p:"p",a:"a"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a.Fragment,{}),"\n","\n",(0,a.jsxs)("figure",{children:[(0,a.jsxs)(n.pre,{children:[(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{dangerouslySetInnerHTML:{__html:'<button class="clickToCopy" onmousedown="COPY_FN(event)" onmouseup="CLEAR_FN(event)">Copy</button>'}})}),(0,a.jsxs)(n.code,{className:"language-bash",children:[(0,a.jsx)(n.span,{className:"token assign-left variable",children:"KEYCHAIN_SYSTEM_PATH"}),(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token string",children:'"/Library/Keychains/System.keychain"'}),"\n",(0,a.jsx)(n.span,{className:"token assign-left variable",children:"KEYCHAIN_LOGIN_PATH"}),(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token string",children:'"~/Library/Keychains/login.keychain"'}),"\n\n",(0,a.jsx)(n.span,{className:"token builtin class-name",children:"sudo"})," ",(0,a.jsx)(n.span,{className:"token function",children:"security"})," add-trusted-cert",(0,a.jsx)(n.span,{className:"token argument",children:" -d"}),(0,a.jsx)(n.span,{className:"token argument",children:" -r"})," trustRoot",(0,a.jsx)(n.span,{className:"token argument",children:" -k"})," ",(0,a.jsx)(n.span,{className:"token variable simple",children:"$KEYCHAIN_PATH"})," ",(0,a.jsx)(n.span,{className:"token variable simple",children:"$CERT_PATH"}),"\n"]})]}),(0,a.jsx)("figcaption",{children:(0,a.jsxs)(n.p,{children:["From ",(0,a.jsx)(n.a,{href:"https://apple.stackexchange.com/a/80625",children:"https://apple.stackexchange.com/a/80625"})]})})]})]})},s=Object.assign({},(0,t.ah)(),e.components),r=s.wrapper;return r?(0,a.jsx)(r,Object.assign({},e,{children:(0,a.jsx)(n,{})})):n()}},1151:function(e,n,s){s.d(n,{ah:function(){return r}});var a=s(7294);const t=a.createContext({});function r(e){const n=a.useContext(t);return a.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}}}]);