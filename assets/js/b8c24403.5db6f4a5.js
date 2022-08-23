"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8449],{5318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9022:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7378),a=t(9619);function o(e){let{header:n,updated:t,version:o}=e;return r.createElement(a.Z,{text:"v"+o,variant:t?"success":"info",className:n?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7378),a=t(8944),o=t(8896);const c={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){let{className:n,icon:t,text:s,variant:i}=e;return r.createElement("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",i?c[i]:"bg-gray-100 text-gray-800",n)},t&&r.createElement(o.Z,{icon:t,className:"mr-1"}),s)}},948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=t(5773),a=(t(7378),t(5318)),o=t(9022);const c={title:"sync"},s=void 0,i={unversionedId:"commands/sync",id:"commands/sync",title:"sync",description:"The moon sync command will force sync all projects in the workspace. What is syncing exactly? To",source:"@site/docs/commands/sync.mdx",sourceDirName:"commands",slug:"/commands/sync",permalink:"/docs/commands/sync",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/sync.mdx",tags:[],version:"current",frontMatter:{title:"sync"},sidebar:"docs",previous:{title:"setup",permalink:"/docs/commands/setup"},next:{title:"teardown",permalink:"/docs/commands/teardown"}},l={},p=[],m={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{header:!0,version:"0.8",mdxType:"VersionLabel"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"moon sync")," command will force sync ",(0,a.kt)("em",{parentName:"p"},"all")," projects in the workspace. What is syncing exactly? To\nensure a ",(0,a.kt)("a",{parentName:"p",href:"../faq#what-should-be-considered-the-source-of-truth"},"healthy repository state"),", we\ntrigger a process known as syncing, where a project is automatically updated to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure cross-project dependencies are linked based on ",(0,a.kt)("a",{parentName:"li",href:"../config/project#dependsOn"},(0,a.kt)("inlineCode",{parentName:"a"},"dependsOn")),"."),(0,a.kt)("li",{parentName:"ul"},"Ensure language specific configuration files are present and accurate (",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),", etc)."),(0,a.kt)("li",{parentName:"ul"},"Ensure root configuration and project configuration are in sync."),(0,a.kt)("li",{parentName:"ul"},"Any additional language specific semantics that may be required.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon sync\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This command should rarely be ran, as ",(0,a.kt)("a",{parentName:"p",href:"./run"},(0,a.kt)("inlineCode",{parentName:"a"},"moon run"))," will sync affected projects\nautomatically! However, when migrating or refactoring, manual syncing may be necessary.")))}u.isMDXComponent=!0}}]);