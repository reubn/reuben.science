(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{78118:function(e,t,r){"use strict";var n=r(70885),i=r(4942),o=r(67294),s=r(70131),c=r(12380),a=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.children,r=e.config,l=void 0===r?{}:r,f=(0,o.useState)(!1),d=f[0],p=f[1];(0,o.useEffect)((function(){d||p(!0)}),[]);var h=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({triggerOnce:!0},l),v=(0,s.YD)(h),y=(0,n.Z)(v,2),b=y[0],g=y[1],w=(0,s.YD)(h),O=(0,n.Z)(w,2),j=O[0],m=O[1],_=g||m;return d?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{ref:b,className:"".concat(c.intersectionHandle," ").concat(l.handleClass||"")}),(0,a.jsx)(t,{_ref:j,inView:_,"data-noscript":"no"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("noscript",{children:(0,a.jsx)(t,{inView:!0,"data-noscript":"yes"})}),(0,a.jsx)("span",{ref:b,className:"".concat(c.intersectionHandle," ").concat(l.handleClass||""),"data-noscript":"no"}),(0,a.jsx)(t,{_ref:j,inView:_,"data-noscript":"no"})]})}},31760:function(e,t,r){"use strict";var n=r(4942),i=r(44925),o=r(67294),s=r(78118),c=r(98302),a=r(85893),u=["video","className"],l=["_ref","inView"],f=["src"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.video,r=e.className,n=(0,i.Z)(e,u),d=t.sources,h=t.size,v=(h=void 0===h?{}:h).width,y=void 0===v?1e3:v,b=h.height,g=void 0===b?0:b,w=(0,o.useState)(!1),O=w[0],j=w[1];return(0,a.jsx)(s.Z,{children:function(e){var t=e._ref,o=e.inView,s=(0,i.Z)(e,l);return(0,a.jsx)("video",p(p(p({ref:t,onLoadedData:function(){return j(!0)},width:y,height:g,className:[c.video,r,O?"":c.loading].join(" ")},n),s),{},{children:d.map((function(e){var t=e.src,r=(0,i.Z)(e,f);return(0,a.jsx)("source",p({src:o?t:null},r),t)}))}),o?1:0)}})}},51429:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},default:function(){return u}});var n=r(2962),i=r(31760),o=r(45748),s=r(13500),c=r(85893),a=!0,u=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.PB,{noindex:!0,nofollow:!0}),(0,c.jsxs)("main",{className:o.main,children:[(0,c.jsx)("h1",{children:"Welcome to Finlay's Lair"}),(0,c.jsx)(i.Z,{className:s.video,muted:!0,autoPlay:!0,loop:!0,video:{size:{width:1280,height:720},sources:[{src:"/.assets/67e4086a4d4f8600515cddbe4dacf70c/finlay.webm",type:"video/webm"}]}}),(0,c.jsx)("p",{children:"\ud83d\udc3e"})]})]})}},24337:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secret",function(){return r(51429)}])},12380:function(e){e.exports={intersectionHandle:"KTY5"}},98302:function(e){e.exports={video:"PydY",loading:"_3eeT"}},13500:function(e){e.exports={video:"_1CLa"}},45748:function(e){e.exports={main:"K48t",me:"_2g6G",memoji:"_10Y5",profile:"_2New",name:"_2pBV",description:"_3KfV",emoji:"_6T08"}},70131:function(e,t,r){"use strict";r.d(t,{YD:function(){return d}});var n=r(67294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=new Map,s=new WeakMap,c=0;function a(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(r=e.root)?(s.has(r)||(c+=1,s.set(r,c.toString())),s.get(r)):"0":e[t]);var r})).toString()}function u(e,t,r){if(void 0===r&&(r={}),!e)return function(){};var n=function(e){var t=a(e),r=o.get(t);if(!r){var n,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var r,o=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((function(e){e(o,t)}))}))}),e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},o.set(t,r)}return r}(r),i=n.id,s=n.observer,c=n.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(t),s.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),o.delete(i))}}function l(e){return"function"!==typeof e.children}var f=function(e){var t,r;function o(t){var r;return(r=e.call(this,t)||this).node=null,r._unobserveCb=null,r.handleNode=function(e){r.node&&(r.unobserve(),e||r.props.triggerOnce||r.props.skip||r.setState({inView:!!r.props.initialInView,entry:void 0})),r.node=e||null,r.observeNode()},r.handleChange=function(e,t){e&&r.props.triggerOnce&&r.unobserve(),l(r.props)||r.setState({inView:e,entry:t}),r.props.onChange&&r.props.onChange(e,t)},r.state={inView:!!t.initialInView,entry:void 0},r}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=o.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=u(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n,trackVisibility:i,delay:o})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!l(this.props)){var e=this.state,t=e.inView,r=e.entry;return this.props.children({inView:t,entry:r,ref:this.handleNode})}var o=this.props,s=o.children,c=o.as,a=o.tag,u=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,n.createElement)(c||a||"div",i({ref:this.handleNode},u),s)},o}(n.Component);function d(e){var t=void 0===e?{}:e,r=t.threshold,i=t.delay,o=t.trackVisibility,s=t.rootMargin,c=t.root,a=t.triggerOnce,l=t.skip,f=t.initialInView,d=(0,n.useRef)(),p=(0,n.useState)({inView:!!f}),h=p[0],v=p[1],y=(0,n.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),l||e&&(d.current=u(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&a&&d.current&&(d.current(),d.current=void 0)}),{root:c,rootMargin:s,threshold:r,trackVisibility:o,delay:i}))}),[Array.isArray(r)?r.toString():r,c,s,a,l,o,i]);(0,n.useEffect)((function(){d.current||!h.entry||a||l||v({inView:!!f})}));var b=[y,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},30907:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},70885:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(40181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(a){c=!0,i=a}finally{try{s||null==r.return||r.return()}finally{if(c)throw i}}return o}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(30907);function i(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=24337,e(e.s=t);var t}));var t=e.O();_N_E=t}]);