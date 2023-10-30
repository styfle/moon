"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42121],{35318:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(25773),o=(t(27378),t(35318));const i={title:"Toolchain"},r=void 0,l={unversionedId:"concepts/toolchain",id:"concepts/toolchain",title:"Toolchain",description:"The toolchain is an internal layer for downloading, installing, and managing tools (languages,",source:"@site/docs/concepts/toolchain.mdx",sourceDirName:"concepts",slug:"/concepts/toolchain",permalink:"/docs/concepts/toolchain",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/toolchain.mdx",tags:[],version:"current",frontMatter:{title:"Toolchain"},sidebar:"docs",previous:{title:"Tokens",permalink:"/docs/concepts/token"},next:{title:"Workspace",permalink:"/docs/concepts/workspace"}},s={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Force disabling",id:"force-disabling",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Version specification",id:"version-specification",level:3},{value:"Supported tools",id:"supported-tools",level:2},{value:"Deno",id:"deno",level:3},{value:"Node.js",id:"nodejs",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The toolchain is an internal layer for downloading, installing, and managing tools (languages,\ndependency managers, libraries, and binaries) that are required at runtime. We embrace this approach\nover relying on these tools "existing" in the current environment, as it ensures the following\nacross any environment or machine:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version and enabled features of a tool are identical."),(0,o.kt)("li",{parentName:"ul"},"Tools are isolated and unaffected by external sources."),(0,o.kt)("li",{parentName:"ul"},"Builds are consistent, reproducible, and ",(0,o.kt)("em",{parentName:"li"},"hopefully")," deterministic.")),(0,o.kt)("p",null,"Furthermore, this avoids a developer, pipeline, machine, etc, having to pre-install all the\nnecessary tools, ",(0,o.kt)("em",{parentName:"p"},"and")," to keep them in sync as time passes."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"The toolchain is built around ",(0,o.kt)("a",{parentName:"p",href:"/proto"},"proto"),", our stand-alone multi-language version manager. moon\nwill piggyback of proto's toolchain found at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto")," and reuse any tools available, or download\nand install them if they're missing."),(0,o.kt)("h3",{id:"force-disabling"},"Force disabling"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MOON_TOOLCHAIN_FORCE_GLOBALS")," environment variable can be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to force moon to use\ntool binaries available on ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", instead of downloading and installing them. This is useful for\npre-configured environments, like CI and Docker."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The tools that are managed by the toolchain are configured through the\n",(0,o.kt)("a",{parentName:"p",href:"../config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml"))," file, but can be overridden in each project with\n",(0,o.kt)("a",{parentName:"p",href:"../config/project#toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("h3",{id:"version-specification"},"Version specification"),(0,o.kt)("p",null,"As mentioned above, tools within the toolchain are managed ",(0,o.kt)("em",{parentName:"p"},"by version")," for consistency across\nmachines. These versions are configured on a per-tool basis in\n",(0,o.kt)("a",{parentName:"p",href:"../config/toolchain"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/toolchain.yml")),". So what kinds of versions are allowed?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full versions")," - A full version is a semantic version that is fully specified, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"1.2.3"),"\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"2.0.0-rc.1"),". This is the most common way to specify a version, and is preferred to avoid\nsubtle deviations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Partial versions")," - A partial version is a version that is either missing a patch number, minor\nnumber, or both, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"1.2")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),". These can also be represented with requirement syntax, such\nas ",(0,o.kt)("inlineCode",{parentName:"li"},"^1.2")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"~1"),". If using partials, we suggest having a major and minor number to reduce the\ndeviation of versions across machines."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Aliases")," - An alias is a human-readable word that maps to a specific version. For example,\n",(0,o.kt)("inlineCode",{parentName:"li"},"latest")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"stable")," maps to the latest version of a tool, or ",(0,o.kt)("inlineCode",{parentName:"li"},"canary")," which maps to applicable\ncanary release, or even a completely custom alias like ",(0,o.kt)("inlineCode",{parentName:"li"},"berry"),". Aliases are language specific, are\nnot managed by moon, and are not suggested for use since they can change at any time (or even\ndaily!).")),(0,o.kt)("p",null,"This sounds great, but how exactly does this work? For full versions and aliases, it's straight\nforward, as the resolved version is used as-is (assuming it's a legitimate version), and can be\nfound at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/<tool>/<version>"),"."),(0,o.kt)("p",null,"For partial versions, we first check locally installed versions for a match, by scanning\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/<tool>"),". For example, if the requested version is ",(0,o.kt)("inlineCode",{parentName:"p"},"1.2")," and we have ",(0,o.kt)("inlineCode",{parentName:"p"},"1.2.10"),"\ninstalled locally, we'll use that version instead of downloading the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"1.2.*")," version.\nOtherwise, we'll download the latest version that matches the partial version, and install it\nlocally."),(0,o.kt)("h2",{id:"supported-tools"},"Supported tools"),(0,o.kt)("p",null,"The following tools are currently managed by the toolchain."),(0,o.kt)("h3",{id:"deno"},"Deno"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configured with: ",(0,o.kt)("a",{parentName:"li",href:"../config/toolchain#deno"},(0,o.kt)("inlineCode",{parentName:"a"},"deno"))),(0,o.kt)("li",{parentName:"ul"},"Installed to: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.proto/tools/deno/x.x.x"))),(0,o.kt)("h3",{id:"nodejs"},"Node.js"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configured with: ",(0,o.kt)("a",{parentName:"li",href:"../config/toolchain#node"},(0,o.kt)("inlineCode",{parentName:"a"},"node"))),(0,o.kt)("li",{parentName:"ul"},"Installed to: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.proto/tools/node/x.x.x")),(0,o.kt)("li",{parentName:"ul"},"Dependency managers: ",(0,o.kt)("a",{parentName:"li",href:"../config/toolchain#npm-pnpm-yarn-bun"},(0,o.kt)("inlineCode",{parentName:"a"},"npm")),", ",(0,o.kt)("a",{parentName:"li",href:"../config/toolchain#npm-pnpm-yarn-bun"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm")),", ",(0,o.kt)("a",{parentName:"li",href:"../config/toolchain#npm-pnpm-yarn-bun"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn")),", ",(0,o.kt)("a",{parentName:"li",href:"../config/toolchain#npm-pnpm-yarn-bun"},(0,o.kt)("inlineCode",{parentName:"a"},"bun")))))}d.isMDXComponent=!0}}]);