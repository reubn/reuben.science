(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{211:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secret",function(){return t(5525)}])},2233:function(e,n,t){"use strict";var r=t(6042),i=t(828),s=t(5893),o=t(7294),c=t(7650),a=t(150);n.Z=function(e){var n=e.children,t=e.config,u=void 0===t?{}:t,l=(0,o.useState)(!1),d=l[0],f=l[1];(0,o.useEffect)((function(){d||f(!0)}),[]);var h=(0,r.Z)({triggerOnce:!0},u),_=(0,i.Z)((0,c.YD)(h),2),v=_[0],m=_[1],p=(0,i.Z)((0,c.YD)(h),2),y=p[0],g=p[1],w=m||g;return d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{ref:v,className:"".concat(a.intersectionHandle," ").concat(u.handleClass||"")}),(0,s.jsx)(n,{_ref:y,inView:w,"data-noscript":"no"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("noscript",{children:(0,s.jsx)(n,{inView:!0,"data-noscript":"yes"})}),(0,s.jsx)("span",{ref:v,className:"".concat(a.intersectionHandle," ").concat(u.handleClass||""),"data-noscript":"no"}),(0,s.jsx)(n,{_ref:y,inView:w,"data-noscript":"no"})]})}},1557:function(e,n,t){"use strict";var r=t(6042),i=t(9396),s=t(9534),o=t(5893),c=t(7294),a=t(2233),u=t(9819);n.Z=function(e){var n=e.video,t=e.className,l=(0,s.Z)(e,["video","className"]),d=n.sources,f=n.size,h=void 0===f?{}:f,_=h.width,v=void 0===_?1e3:_,m=h.height,p=void 0===m?0:m,y=(0,c.useState)(!1),g=y[0],w=y[1];return(0,o.jsx)(a.Z,{children:function(e){var n=e._ref,c=e.inView,a=(0,s.Z)(e,["_ref","inView"]);return(0,o.jsx)("video",(0,i.Z)((0,r.Z)({ref:n,onLoadedData:function(){return w(!0)},width:v,height:p,className:[u.video,t,g?"":u.loading].join(" ")},l,a),{children:d.map((function(e){var n=e.src,t=(0,s.Z)(e,["src"]);return(0,o.jsx)("source",(0,r.Z)({src:c?n:null},t),n)}))}),c?1:0)}})}},5525:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return a},default:function(){return u}});var r=t(5893),i=t(2962),s=t(1557),o=t(7453),c=t(1893),a=!0;function u(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.PB,{noindex:!0,nofollow:!0}),(0,r.jsxs)("main",{className:o.main,children:[(0,r.jsx)("h1",{children:"Welcome to Finlay's Lair"}),(0,r.jsx)(s.Z,{className:c.video,muted:!0,autoPlay:!0,loop:!0,playsinline:!0,video:{size:{width:1280,height:720},sources:[{src:"/.assets/67e4086a4d4f8600515cddbe4dacf70c/finlay.webm",type:"video/webm"},{src:"/.assets/ebfb90503328de00abb604637b905715/finlay.mp4",type:"video/mp4"}]}}),(0,r.jsx)("p",{children:"\ud83d\udc3e"})]})]})}},150:function(e){e.exports={intersectionHandle:"styles_intersectionHandle__yU8im"}},9819:function(e){e.exports={video:"styles_video__2Jvca",loading:"styles_loading__V87G8"}},1893:function(e){e.exports={video:"styles_video__TD2N5"}},7453:function(e){e.exports={main:"styles_main__nTaZI",me:"styles_me__nd6O2",memoji:"styles_memoji__HZdFT",profile:"styles_profile__pzmWf",name:"styles_name__N0hqv",description:"styles_description__DNNQE",emoji:"styles_emoji__Kpisc"}},828:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(3375);var i=t(1566);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,n)||(0,i.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7650:function(e,n,t){"use strict";t.d(n,{YD:function(){return l}});var r=t(7294);const i=new Map,s=new WeakMap;let o,c=0;function a(e){return Object.keys(e).sort().filter((n=>void 0!==e[n])).map((n=>{return`${n}_${"root"===n?(t=e.root,t?(s.has(t)||(c+=1,s.set(t,c.toString())),s.get(t)):"0"):e[n]}`;var t})).toString()}function u(e,n,t={},r=o){if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return n(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:s,observer:c,elements:u}=function(e){let n=a(e),t=i.get(n);if(!t){const r=new Map;let s;const o=new IntersectionObserver((n=>{n.forEach((n=>{var t;const i=n.isIntersecting&&s.some((e=>n.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=i),null==(t=r.get(n.target))||t.forEach((e=>{e(i,n)}))}))}),e);s=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:o,elements:r},i.set(n,t)}return t}(t);let l=u.get(e)||[];return u.has(e)||u.set(e,l),l.push(n),c.observe(e),function(){l.splice(l.indexOf(n),1),0===l.length&&(u.delete(e),c.unobserve(e)),0===u.size&&(c.disconnect(),i.delete(s))}}r.Component;function l({threshold:e,delay:n,trackVisibility:t,rootMargin:i,root:s,triggerOnce:o,skip:c,initialInView:a,fallbackInView:l,onChange:d}={}){const f=r.useRef(),h=r.useRef(),[_,v]=r.useState({inView:!!a});h.current=d;const m=r.useCallback((r=>{void 0!==f.current&&(f.current(),f.current=void 0),c||r&&(f.current=u(r,((e,n)=>{v({inView:e,entry:n}),h.current&&h.current(e,n),n.isIntersecting&&o&&f.current&&(f.current(),f.current=void 0)}),{root:s,rootMargin:i,threshold:e,trackVisibility:t,delay:n},l))}),[Array.isArray(e)?e.toString():e,s,i,o,c,t,l,n]);r.useEffect((()=>{f.current||!_.entry||o||c||v({inView:!!a})}));const p=[m,_.inView,_.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}}},function(e){e.O(0,[774,888,179],(function(){return n=211,e(e.s=n);var n}));var n=e.O();_N_E=n}]);