(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[591],{813:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[slug]",function(){return s(8808)}])},3227:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(9534),i=s(5893),r=s(7664),a=s(5773),o={dev:(0,a.Z)("blue"),make:(0,a.Z)("indigo"),hardware:(0,a.Z)("purple"),medicine:(0,a.Z)("pink"),food:(0,a.Z)("orange"),automation:(0,a.Z)("yellow"),outdoors:(0,a.Z)("green")},c=o,l=(Object.keys(o),s(5302)),m=function(e){var t=e.category,s=e.className,a=void 0===s?"":s;(0,n.Z)(e,["category","className"]);return(0,i.jsx)(r.Z,{href:"/categories/".concat(t),passHref:!0,children:function(e){return(0,i.jsx)("a",{className:[a,l.category].join(" "),style:{"--category-background":c[t]},children:t})}},t)}},5277:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var n=s(6042),i=s(9534),r=s(5893),a=s(7294);var o=s(9526),c=function(e){var t=e.image,s=void 0===t?{}:t,c=e.className,l=e.lazy,m=void 0===l||l,u=e.alt,d=e.aspectRatio,p=e.sizes,_=void 0===p?"min(1000px, 100vw - 1rem)":p,g=(0,i.Z)(e,["image","className","lazy","alt","aspectRatio","sizes"]),f=s.resolutions,h=(0,a.useMemo)((function(){return function(e){return(Array.isArray(e)?e:Object.values(e)).map((function(e){var t=e.src,s=e.width;return"".concat(t," ").concat(s,"w")})).join(", ")}(f)}),[f]),y=f[1];return(0,r.jsx)("img",(0,n.Z)({width:y.width,height:y.height,src:y.src,srcSet:h,sizes:_,className:[o.image,c].join(" "),style:{aspectRatio:d||"".concat(y.width,"/").concat(y.height)},loading:m?"lazy":"eager",alt:u},g))}},4778:function(e,t,s){"use strict";s.d(t,{Z:function(){return p}});var n=s(6042),i=s(9396),r=s(9534),a=s(5893),o=s(6039),c=s(7664),l=s(5277),m=s(2197),u=function(e){var t=e.slug,s=e.displayImage,o=e.metadata,u=o.title,d=o.description,p=o.emoji,_=o.readingTime,g=o.image,f=e.imageSizes,h=(0,r.Z)(e,["slug","displayImage","metadata","imageSizes"]);return(0,a.jsx)(c.Z,{href:"/posts/".concat(t),passHref:!0,children:function(e){return(0,a.jsx)("a",(0,i.Z)((0,n.Z)({title:u},h),{children:(0,a.jsxs)("article",{className:m.post,children:[s&&g?(0,a.jsx)(l.Z,{image:g,alt:p,sizes:f}):null,(0,a.jsxs)("h1",{children:[(0,a.jsx)("p",{className:m.emoji,children:p}),(0,a.jsx)("p",{className:m.title,children:u})]}),(0,a.jsxs)("p",{className:m.description,children:[d||""," ",(0,a.jsxs)("time",{time:"PD0T0H".concat(_.mins||1,"M"),className:m.readingTime,"aria-label":"Reading Time",children:[" \u2022 ",_.mins||"???"," min",1!=_.mins&&"s"]})]})]})}))}},t)},d=s(4267),p=function(e){var t=e.posts,s=e.fallback,c=void 0===s?null:s,l=e.displayImage,m=(0,r.Z)(e,["posts","fallback","displayImage"]);return t.length?(0,a.jsx)(o.Z,(0,i.Z)((0,n.Z)({heading:"Recent Posts",moreHref:"/posts",moreAria:"More Posts"},m),{children:(0,a.jsx)("div",{className:d.posts,role:"list",children:t.map((function(e){return(0,a.jsx)(u,(0,n.Z)({displayImage:l,imageSizes:"(max-width: 760px) calc(min(1000px, 100vw - 3.5rem) - 2.3rem), calc((min(1000px, 100vw - 3.5rem) / 2) - 2.3rem)",role:"listitem"},e),e.slug)}))})})):c}},6039:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var n=s(6042),i=s(9396),r=s(9534),a=s(5893),o=s(7294),c=s(5697),l=s.n(c);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},m.apply(this,arguments)}function u(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var d=(0,o.forwardRef)((function(e,t){var s=e.color,n=void 0===s?"currentColor":s,i=e.size,r=void 0===i?24:i,a=u(e,["color","size"]);return o.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("polyline",{points:"9 18 15 12 9 6"}))}));d.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},d.displayName="ChevronRight";var p=d,_=s(7664),g=s(4511),f=function(e){var t=e.heading,s=e.moreHref,o=e.moreAria,c=e.children,l=(0,r.Z)(e,["heading","moreHref","moreAria","children"]);return(0,a.jsxs)("section",(0,i.Z)((0,n.Z)({className:g.section},l),{children:[t?(0,a.jsx)(_.Z,{href:s,children:(0,a.jsxs)("a",{className:g.heading,children:[t," ",(0,a.jsx)(p,{className:g.more,role:"link","aria-label":o})]})}):null,c]}))}},8808:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return m},default:function(){return u}});var n=s(5893),i=s(2962),r=s(4778),a=s(3227),o=s(7149),c=s(7453),l=s(3924),m=!0;function u(e){var t=e.slug,s=e.posts;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.PB,{title:"".concat(t," | Categories"),openGraph:{title:t,site_name:"reuben.science"}}),(0,n.jsx)(i.gR,{itemListElements:[{position:1,name:"Home",item:"https://".concat("reuben.science","/")},{position:2,name:"Categories",item:"https://".concat("reuben.science","/categories")},{position:3,name:t,item:"https://".concat("reuben.science","/categories/").concat(t)}]}),(0,n.jsxs)("main",{className:c.main,children:[(0,n.jsx)(a.Z,{category:t,className:l.category}),(0,n.jsx)(r.Z,{posts:s.map(o.Z),heading:!1,fallback:(0,n.jsx)("h2",{className:l.empty,children:"no posts here mate"}),displayImage:!0})]})]})}},7149:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(6042),i=s(9396),r=s(9534);function a(e){var t=e.metadata.date,s=(0,r.Z)(e.metadata,["date"]),a=(0,r.Z)(e,["metadata"]);return(0,i.Z)((0,n.Z)({},a),{metadata:(0,i.Z)((0,n.Z)({},s),{date:new Date(t)})})}},5302:function(e){e.exports={category:"styles_category__7Q41R"}},9526:function(e){e.exports={image:"styles_image__OsWFw"}},2197:function(e){e.exports={post:"styles_post__v2bVe",title:"styles_title__UmqU7",emoji:"styles_emoji__4FCH_",description:"styles_description__9b8Iq",readingTime:"styles_readingTime__6g3mK"}},4267:function(e){e.exports={posts:"styles_posts__UHO6g"}},4511:function(e){e.exports={section:"styles_section__dkHE8",heading:"styles_heading__tY67n",more:"styles_more__jTMB5"}},3924:function(e){e.exports={categories:"styles_categories__dSOpp",empty:"styles_empty__T9_a6"}},7453:function(e){e.exports={main:"styles_main__nTaZI",me:"styles_me__nd6O2",memoji:"styles_memoji__HZdFT",profile:"styles_profile__pzmWf",name:"styles_name__N0hqv",description:"styles_description__DNNQE",emoji:"styles_emoji__Kpisc"}}},function(e){e.O(0,[774,888,179],(function(){return t=813,e(e.s=t);var t}));var t=e.O();_N_E=t}]);