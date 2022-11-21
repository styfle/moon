"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9958],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),g=a,u=f["".concat(l,".").concat(g)]||f[g]||m[g]||i;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8109:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7378);function a(e){let{src:t,width:r="90%",alt:a="",title:i,align:o="center",padding:c="1rem"}=e;return n.createElement("div",{style:{marginBottom:c,marginTop:c,textAlign:o}},n.createElement("img",{src:t.default,width:r,alt:a,title:i,className:"inline-block"}))}},1038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(5773),a=(r(7378),r(5318));r(8109);const i={slug:"v0.19",title:"v0.19 - Remote caching beta, affected files, and graph optimization",authors:["milesj"],tags:["affected","remote-cache","dep-graph"],image:"./img/v0.19.png"},o=void 0,c={permalink:"/blog/v0.19",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-11-14_v0.19.mdx",source:"@site/blog/2022-11-14_v0.19.mdx",title:"v0.19 - Remote caching beta, affected files, and graph optimization",description:"With this release, we've focused heavily on our remote caching architecture. Since this is a massive",date:"2022-11-14T00:00:00.000Z",formattedDate:"November 14, 2022",tags:[{label:"affected",permalink:"/blog/tags/affected"},{label:"remote-cache",permalink:"/blog/tags/remote-cache"},{label:"dep-graph",permalink:"/blog/tags/dep-graph"}],readingTime:2.895,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.19",title:"v0.19 - Remote caching beta, affected files, and graph optimization",authors:["milesj"],tags:["affected","remote-cache","dep-graph"],image:"./img/v0.19.png"},prevItem:{title:"Integrating TypeScript in a monorepo",permalink:"/blog/typescript-monorepo"},nextItem:{title:"v0.18 - Improved configuration and initialization flow",permalink:"/blog/v0.18"}},l={image:r(6620).Z,authorsImageUrls:[void 0]},s=[],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this release, we've focused heavily on our remote caching architecture. Since this is a massive\ntask that requires much work behind the scenes, this overall release is rather light."))}m.isMDXComponent=!0},6620:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/v0.19-78b0dde00a078efefe909e6acefe73a7.png"}}]);