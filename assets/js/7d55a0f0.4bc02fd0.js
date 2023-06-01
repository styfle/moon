"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6920],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(38944);const r="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(25773),o=n(27378),r=n(38944),i=n(83457),l=n(35595),s=n(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(m(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function m(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,l.Y)(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement(p,(0,a.Z)({},e,t)),o.createElement(m,(0,a.Z)({},e,t)))}function h(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(27378),o=n(35331),r=n(30654),i=n(70784),l=n(71819);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[m,d]=p({queryString:n,groupId:o}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,l.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),f=(()=>{const e=m??h;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,r]),tabValues:r}}},88109:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378);function o(e){let{src:t,width:n="90%",alt:o="",title:r,align:i="center",padding:l="1rem"}=e;return a.createElement("div",{style:{marginBottom:l,marginTop:l,textAlign:i}},a.createElement("img",{src:t.default,width:n,alt:o,title:r,className:"inline-block"}))}},55885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(25773),o=(n(27378),n(35318)),r=(n(33337),n(39798),n(76911),n(88109));const i={slug:"v0.25",title:"moon v0.25 - Deno tier 2 support, CI insights, custom project languages, and more",authors:["milesj"],tags:["deno","toolchain","moonbase","offline","github"],image:"./img/v0.25.png"},l=void 0,s={permalink:"/blog/v0.25",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-02-27_v0.25.mdx",source:"@site/blog/2023-02-27_v0.25.mdx",title:"moon v0.25 - Deno tier 2 support, CI insights, custom project languages, and more",description:"With this release, we're landing Deno, our first supported language besides Node.js, and improving",date:"2023-02-27T00:00:00.000Z",formattedDate:"February 27, 2023",tags:[{label:"deno",permalink:"/blog/tags/deno"},{label:"toolchain",permalink:"/blog/tags/toolchain"},{label:"moonbase",permalink:"/blog/tags/moonbase"},{label:"offline",permalink:"/blog/tags/offline"},{label:"github",permalink:"/blog/tags/github"}],readingTime:4.475,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"v0.25",title:"moon v0.25 - Deno tier 2 support, CI insights, custom project languages, and more",authors:["milesj"],tags:["deno","toolchain","moonbase","offline","github"],image:"./img/v0.25.png"},prevItem:{title:"Introducing proto, a next-generation toolchain manager!",permalink:"/blog/proto"},nextItem:{title:"moon v0.24 - Remote caching, interactive tasks, query improvements, and more",permalink:"/blog/v0.24"}},u={image:n(44718).Z,authorsImageUrls:[void 0]},c=[{value:"Deno tier 2 support (experimental)",id:"deno-tier-2-support-experimental",level:2},{value:"CI insights in moonbase",id:"ci-insights-in-moonbase",level:2},{value:"Offline mode",id:"offline-mode",level:2},{value:"Custom project <code>language</code>",id:"custom-project-language",level:2},{value:"Project-level TypeScript settings (breaking)",id:"project-level-typescript-settings-breaking",level:2},{value:"New <code>moonrepo/setup-moon-action</code> GitHub action",id:"new-moonreposetup-moon-action-github-action",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we're landing Deno, our first supported language besides Node.js, and improving\ninteroperability of languages as a whole."),(0,o.kt)("h2",{id:"deno-tier-2-support-experimental"},"Deno tier 2 support (experimental)"),(0,o.kt)("p",null,"Three months ago we announced our ",(0,o.kt)("a",{parentName:"p",href:"./v0.21"},"new tiered support structure")," for languages, and as of\ntoday, we're happy to announce that our second language to reach tier 2 is\n",(0,o.kt)("a",{parentName:"p",href:"https://deno.land"},"Deno"),"! With tier 2 support, we now analyze Deno specific configuration files\n(like ",(0,o.kt)("inlineCode",{parentName:"p"},"deno.json"),") to infer dependencies and relationships, as well as utilize this information for\ninputs and hashing purposes. With that being said, we're marking this release as experimental until\nwe fine tune the implementation, and iron out all the bugs."),(0,o.kt)("p",null,"To get started with using Deno, enable the new ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/toolchain#deno"},(0,o.kt)("inlineCode",{parentName:"a"},"deno"))," setting in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),". At this time, we don't have many settings to\nconfigure, so simply defining an empty object is enough to enable the Deno platform! Learn more\nabout this in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/javascript/deno-handbook"},"Deno handbook"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/toolchain.yml"',title:'".moon/toolchain.yml"'},"deno: {}\n")),(0,o.kt)("p",null,"Once enabled, you can start using ",(0,o.kt)("inlineCode",{parentName:"p"},"deno")," commands in your moon tasks. moon will automatically set\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#platform-1"},(0,o.kt)("inlineCode",{parentName:"a"},"platform")),' to "deno" when using a deno command.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    format:\n        command: 'deno fmt'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Because this is only tier 2 support, moon ",(0,o.kt)("em",{parentName:"p"},"does not")," download and install Deno into its toolchain.\nmoon expects the ",(0,o.kt)("inlineCode",{parentName:"p"},"deno")," binary to exist in the current environment.")),(0,o.kt)("p",null,"Furthermore, if you're working a project that is composed of multiple JavaScript runtimes, like\nDeno, Bun, or Node.js, you can set the default ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," for all tasks at the project-level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"platform: 'deno'\nlanguage: 'typescript'\ntype: 'application'\n")),(0,o.kt)("p",null,"We're very excited for this release as it paves the way for future language integrations, and\nenables additional JavaScript runtimes!"),(0,o.kt)("h2",{id:"ci-insights-in-moonbase"},"CI insights in moonbase"),(0,o.kt)("p",null,"We've spent the last few weeks implementing a new ",(0,o.kt)("a",{parentName:"p",href:"https://moonrepo.app"},"moonbase")," feature called CI\ninsights, where we track all CI runs (via ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/ci"},(0,o.kt)("inlineCode",{parentName:"a"},"moon ci")),"), and all actions (tasks)\nthat have ran based on affected files. In the future these insights will help catch regressions,\nalert on flakiness, provide granular metrics, and help monitor the health of your CI pipeline and\nrepositories."),(0,o.kt)(r.Z,{src:n(17032),width:"90%",mdxType:"Image"}),(0,o.kt)("p",null,"With this initial release, we track touched files, which targets are affected based on those files,\nan estimation on how much time was saved or lost, the actions that ran and their final status,\noutlined as a timeline."),(0,o.kt)(r.Z,{src:n(15756),width:"90%",mdxType:"Image"}),(0,o.kt)("p",null,"Insights are enabled by default if you're using moonbase in your CI pipeline, and start using moon\nv0.25! You can disable insights gathering from your\n",(0,o.kt)("a",{parentName:"p",href:"https://moonrepo.app"},"organization settings page"),"."),(0,o.kt)("h2",{id:"offline-mode"},"Offline mode"),(0,o.kt)("p",null,"moon assumes that an internet connection is always available, as we download and install tools into\nthe toolchain, resolve versions against upstream manifests, and automatically install dependencies.\nWhile this is useful, having a constant internet connection isn't always viable."),(0,o.kt)("p",null,"In this release, we now check for an active internet connection and bypass certain workflows when\napplicable.\n",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/offline-mode"},"Jump to the official guide on offline mode for more information"),"!"),(0,o.kt)("h2",{id:"custom-project-language"},"Custom project ",(0,o.kt)("inlineCode",{parentName:"h2"},"language")),(0,o.kt)("p",null,"Project's have always been able to define a ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#language"},(0,o.kt)("inlineCode",{parentName:"a"},"language"))," in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," that denotes the primary programming language for the project.\nHistorically this has been a strict enum of supported values, and could ",(0,o.kt)("em",{parentName:"p"},"not")," be customized for\nother languages. With the introduction of\n",(0,o.kt)("a",{parentName:"p",href:"./v0.23#new-scoped-tasks-with-moontasksyml"},"language driven task inheritance"),", we felt like\nrevisiting this setting, and as such, you're now able to define ",(0,o.kt)("em",{parentName:"p"},"any")," language in this setting,\nwhich also feeds into the task inheritance system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"language: 'kotlin'\n")),(0,o.kt)("p",null,"With this change, ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/kotlin-application.yml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/dotnet.yml"),", and other\nvariations are now possible! However, besides task inheritance, other functionality like platform\ndetection, and Dockerfile support are not enabled."),(0,o.kt)("h2",{id:"project-level-typescript-settings-breaking"},"Project-level TypeScript settings (breaking)"),(0,o.kt)("p",null,"Our TypeScript integration supports many automated workflows, like syncing project references, and\nrouting ",(0,o.kt)("inlineCode",{parentName:"p"},"outDir")," to our shared cache. This is wonderful for the majority, but for the handful of\nprojects where these settings were not viable, there was no simple way to disable or opt out of the\nfunctionality."),(0,o.kt)("p",null,"Well no more, projects can now override the workspace-level TypeScript settings\n",(0,o.kt)("inlineCode",{parentName:"p"},"routeOutDirToCache"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"syncProjectReferences"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"syncProjectReferencesToPaths")," through the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#typescript"},(0,o.kt)("inlineCode",{parentName:"a"},"toolchain.typescript"))," setting in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"toolchain:\n    typescript:\n        routeOutDirToCache: false\n")),(0,o.kt)("p",null,"Because this setting was changed from a boolean to an object, the old pattern of disabling\nTypescript must now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"# Old\ntoolchain:\n    typescript: false\n\n# new\ntoolchain:\n    typescript:\n        disabled: true\n")),(0,o.kt)("h2",{id:"new-moonreposetup-moon-action-github-action"},"New ",(0,o.kt)("inlineCode",{parentName:"h2"},"moonrepo/setup-moon-action")," GitHub action"),(0,o.kt)("p",null,"If you're using GitHub Actions as your CI pipeline, we've introducing a new action called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/setup-moon-action"},"moonrepo/setup-moon-action"),", that will install the\n",(0,o.kt)("inlineCode",{parentName:"p"},"moon")," binary globally, and will cache (and restore) the moon toolchain."),(0,o.kt)("p",null,"With this new action, let moon handle all the heavy lifting, and avoid all the unnecessary steps\naround setting up Node.js, and install dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  ci:\n    name: 'CI'\n    runs-on: 'ubuntu-latest'\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n      - uses: moonrepo/setup-moon-action@v1\n      - run: moon ci\n")),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.25.0"},"official release")," for a\nfull list of changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated project, task, and target identifiers to support periods (",(0,o.kt)("inlineCode",{parentName:"li"},"."),")."),(0,o.kt)("li",{parentName:"ul"},"Refactored glob matching to use workspace relative paths instead of absolute. Please report an\nissue if hashing or affected detection is now inaccurate."),(0,o.kt)("li",{parentName:"ul"},"We now build against older operating systems in an attempt to solve GLIBC version errors.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Expect the following in the v0.26 release!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Officially release proto!"),(0,o.kt)("li",{parentName:"ul"},"Improved Deno interoperability.")))}m.isMDXComponent=!0},15756:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/run-detail-37622c4b8e3faaefb1fc8b43ce794036.png"},17032:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/runs-list-eb2d2c47d5a970e36bfe0b53892ad20c.png"},44718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v0.25-a7107e8421326425d72769c0742873ac.png"}}]);