"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3358],{5318:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(5773),r=(t(7378),t(5318));const i={title:"Open source usage"},a=void 0,s={unversionedId:"guides/open-source",id:"guides/open-source",title:"Open source usage",description:"Although moon was designed for large monorepos, it can also be used for open source projects,",source:"@site/docs/guides/open-source.mdx",sourceDirName:"guides",slug:"/guides/open-source",permalink:"/docs/guides/open-source",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/open-source.mdx",tags:[],version:"current",frontMatter:{title:"Open source usage"},sidebar:"docs",previous:{title:"Continuous integration (CI)",permalink:"/docs/guides/ci"},next:{title:"Profiling tasks",permalink:"/docs/guides/profile"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Although moon was designed for large monorepos, it can also be used for open source projects,\nespecially when coupled with our ",(0,r.kt)("a",{parentName:"p",href:"./ci"},"built-in continuous integration support"),"."),(0,r.kt)("p",null,"However, a pain point with moon is that it only supports a single Node.js version within its\n",(0,r.kt)("a",{parentName:"p",href:"../concepts/toolchain"},"toolchain"),", but open source projects typically need to run checks against\nmultiple Node.js versions! To mitigate this problem, we built the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/tool-version-action"},(0,r.kt)("inlineCode",{parentName:"a"},"moonrepo/tool-version-action"))," GitHub Action,\nwhich will override the Node.js version configured in the workspace."),(0,r.kt)("p",null,"This action works best when paired with a matrix, as demonstrated below!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/ci.yml"',title:'".github/workflows/ci.yml"'},"name: 'Pipeline'\non:\n  push:\n    branches:\n      - 'master'\n  pull_request:\njobs:\n  ci:\n    name: 'CI'\n    runs-on: ${{ matrix.os }}\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        node-version: [14, 16, 18]\n    steps:\n      # Checkout repository\n      - uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      # Install Node.js so we can install dependencies\n      - uses: actions/setup-node@v3\n      # Set Node.js version to use in moon\n      - uses: moonrepo/tool-version-action@v1\n        with:\n          node: ${{ matrix.node-version }}\n      # Install dependencies\n      - run: yarn install --immutable\n      # Run moon and affected tasks\n      - run: yarn moon ci\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, we only have a solution for GitHub actions, but the same mechanism can be applied to\nother CI environments by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"MOON_NODE_VERSION")," environment variable."))))}u.isMDXComponent=!0}}]);