(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{211:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secret",function(){return t(5525)}])},7324:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(6042),r=t(828),s=t(5893),o=t(7294);const a=new Map,c=new WeakMap;let l,d=0;function u(e){return Object.keys(e).sort().filter((n=>void 0!==e[n])).map((n=>{return`${n}_${"root"===n?(t=e.root,t?(c.has(t)||(d+=1,c.set(t,d.toString())),c.get(t)):"0"):e[n]}`;var t})).toString()}function f(e,n,t={},i=l){if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const r=e.getBoundingClientRect();return n(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:r,observer:s,elements:o}=function(e){let n=u(e),t=a.get(n);if(!t){const i=new Map;let r;const s=new IntersectionObserver((n=>{n.forEach((n=>{var t;const s=n.isIntersecting&&r.some((e=>n.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=s),null==(t=i.get(n.target))||t.forEach((e=>{e(s,n)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:s,elements:i},a.set(n,t)}return t}(t);let c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(n),s.observe(e),function(){c.splice(c.indexOf(n),1),0===c.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),a.delete(r))}}o.Component;function h({threshold:e,delay:n,trackVisibility:t,rootMargin:i,root:r,triggerOnce:s,skip:a,initialInView:c,fallbackInView:l,onChange:d}={}){var u;const[h,_]=o.useState(null),v=o.useRef(),[m,y]=o.useState({inView:!!c,entry:void 0});v.current=d,o.useEffect((()=>{if(a||!h)return;let o=f(h,((e,n)=>{y({inView:e,entry:n}),v.current&&v.current(e,n),n.isIntersecting&&s&&o&&(o(),o=void 0)}),{root:r,rootMargin:i,threshold:e,trackVisibility:t,delay:n},l);return()=>{o&&o()}}),[Array.isArray(e)?e.toString():e,h,r,i,s,a,t,l,n]);const p=null==(u=m.entry)?void 0:u.target;o.useEffect((()=>{h||!p||s||a||y({inView:!!c,entry:void 0})}),[h,p,s,a,c]);const g=[_,m.inView,m.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var _=t(150),v=function(e){var n=e.children,t=e.config,a=void 0===t?{}:t,c=(0,o.useState)(!1),l=c[0],d=c[1];(0,o.useEffect)((function(){l||d(!0)}),[]);var u=(0,i.Z)({triggerOnce:!0},a),f=(0,r.Z)(h(u),2),v=f[0],m=f[1],y=(0,r.Z)(h(u),2),p=y[0],g=y[1],w=m||g;return l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{ref:v,className:"".concat(_.intersectionHandle," ").concat(a.handleClass||"")}),(0,s.jsx)(n,{_ref:p,inView:w,"data-noscript":"no"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("noscript",{children:(0,s.jsx)(n,{inView:!0,"data-noscript":"yes"})}),(0,s.jsx)("span",{ref:v,className:"".concat(_.intersectionHandle," ").concat(a.handleClass||""),"data-noscript":"no"}),(0,s.jsx)(n,{_ref:p,inView:w,"data-noscript":"no"})]})}},1557:function(e,n,t){"use strict";var i=t(6042),r=t(9396),s=t(9534),o=t(5893),a=t(7294),c=t(7324),l=t(9819);n.Z=function(e){var n=e.video,t=e.className,d=(0,s.Z)(e,["video","className"]),u=n.sources,f=n.size,h=void 0===f?{}:f,_=h.width,v=void 0===_?1e3:_,m=h.height,y=void 0===m?0:m,p=(0,a.useState)(!1),g=p[0],w=p[1];return(0,o.jsx)(c.Z,{children:function(e){var n=e._ref,a=e.inView,c=(0,s.Z)(e,["_ref","inView"]);return(0,o.jsx)("video",(0,r.Z)((0,i.Z)({ref:n,onLoadedData:function(){return w(!0)},width:v,height:y,className:[l.video,t,g?"":l.loading].join(" ")},d,c),{children:u.map((function(e){var n=e.src,t=(0,s.Z)(e,["src"]);return(0,o.jsx)("source",(0,i.Z)({src:a?n:null},t),n)}))}),a?1:0)}})}},5525:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return l}});var i=t(5893),r=t(2962),s=t(1557),o=t(7453),a=t(1893),c=!0;function l(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.PB,{noindex:!0,nofollow:!0}),(0,i.jsxs)("main",{className:o.main,children:[(0,i.jsx)("h1",{children:"Welcome to Finlay's Lair"}),(0,i.jsx)(s.Z,{className:a.video,muted:!0,autoPlay:!0,loop:!0,playsinline:!0,video:{size:{width:1280,height:720},sources:[{src:"/.assets/67e4086a4d4f8600515cddbe4dacf70c/finlay.webm",type:"video/webm"},{src:"/.assets/ebfb90503328de00abb604637b905715/finlay.mp4",type:"video/mp4"}]}}),(0,i.jsx)("p",{children:"\ud83d\udc3e"})]})]})}},150:function(e){e.exports={intersectionHandle:"styles_intersectionHandle__yU8im"}},9819:function(e){e.exports={video:"styles_video__2Jvca",loading:"styles_loading__V87G8"}},1893:function(e){e.exports={video:"styles_video__TD2N5"}},7453:function(e){e.exports={main:"styles_main__nTaZI",me:"styles_me__nd6O2",memoji:"styles_memoji__HZdFT",profile:"styles_profile__pzmWf",name:"styles_name__N0hqv",description:"styles_description__DNNQE",emoji:"styles_emoji__Kpisc"}},828:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(3375);var r=t(1566);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,i.Z)(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[774,888,179],(function(){return n=211,e(e.s=n);var n}));var n=e.O();_N_E=n}]);