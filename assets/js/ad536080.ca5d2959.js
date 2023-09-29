"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5077],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27915:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),o=n(83469),r=n(9619);function l(e){let{text:t}=e;return a.createElement(r.Z,{text:t,icon:o.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},87129:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(40624),r=n(81884),l=n(30658);function i(e){let{cols:t=3}=e;return a.createElement("div",{className:(0,o.Z)("grid gap-4 px-4",6===t?"grid-cols-6":"grid-cols-3")},a.createElement("div",{className:"text-center"},a.createElement(r.default,{href:"/docs/proto/tools#bun"},a.createElement("img",{src:"/img/tools/bun.svg",width:"100%",className:"inline-block"}))),a.createElement("div",{className:"text-center"},a.createElement(r.default,{href:"/docs/proto/tools#deno"},a.createElement("img",{src:"/img/tools/deno.svg",width:"100%",className:"inline-block"}))),a.createElement("div",{className:"text-center"},a.createElement(r.default,{href:"/docs/proto/tools#go"},a.createElement("img",{src:"/img/tools/go.svg",width:"100%",className:"inline-block"}))),a.createElement("div",{className:"text-center"},a.createElement(r.default,{href:"/docs/proto/tools#node"},a.createElement("img",{src:"/img/tools/node.svg",width:"100%",className:"inline-block"})),a.createElement(l.ZP,{className:"m-0",variant:"muted"},"+ npm, pnpm, yarn")),a.createElement("div",{className:"text-center"},a.createElement(r.default,{href:"/docs/proto/tools#python"},a.createElement("img",{src:"/img/tools/python.svg",width:"100%",className:"inline-block"}))),a.createElement("div",{className:"text-center"},a.createElement(r.default,{href:"/docs/proto/tools#rust"},a.createElement("img",{src:"/img/tools/rust.svg",width:"100%",className:"inline-block"}))))}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(40624),r=n(31792);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:s}=e;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?l[s]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(r.Z,{icon:n,className:"mr-1"}),i)}},16621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(25773),o=(n(27378),n(35318)),r=n(27915),l=n(87129);const i={title:"What is proto?"},s=void 0,p={unversionedId:"proto/index",id:"proto/index",title:"What is proto?",description:"proto is a pluggable toolchain manager.",source:"@site/docs/proto/index.mdx",sourceDirName:"proto",slug:"/proto/",permalink:"/docs/proto/",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/index.mdx",tags:[],version:"current",frontMatter:{title:"What is proto?"},sidebar:"proto",next:{title:"Install proto",permalink:"/docs/proto/install"}},c={},m=[{value:"Why proto?",id:"why-proto",level:2},{value:"Features",id:"features",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Shims",id:"shims",level:3},{value:"Supported tools",id:"supported-tools",level:2},{value:"Supported targets",id:"supported-targets",level:2},{value:"Roadmap",id:"roadmap",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{text:"3 min",mdxType:"HeaderLabel"}),(0,o.kt)("p",null,"proto is a pluggable toolchain manager."),(0,o.kt)("p",null,"If you're unfamiliar with the concept of a toolchain, a toolchain is a collection of tools that are\ndownloaded, installed, and managed by version through a single interface. In the context of proto's\ntoolchain, a tool is either a programming language, or a dependency/package manager for a language,\nor a custom implementation provided by a plugin. It's the next step in the version manager\nevolution."),(0,o.kt)("h2",{id:"why-proto"},"Why proto?"),(0,o.kt)("p",null,"proto was designed to be a modern and holistic version manager for all of your favorite programming\nlanguages. We believe a single tool that works the same across every language is better than\nmultiple ad-hoc tools. While we only support a handful of languages today, we aim to support many\nmore in the future!"),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("p",{parentName:"admonition"},"proto powers ",(0,o.kt)("a",{parentName:"p",href:"/moon"},"moon"),"'s toolchain, enabling a single source of truth for both tools!")),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lightspeed! With Rust and WASM, we can guarantee exceptional performance."),(0,o.kt)("li",{parentName:"ul"},"Multi-language. A single CLI for managing versions for all of your languages."),(0,o.kt)("li",{parentName:"ul"},"Cross-platform, for a consistent experience across machines and teams."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./proto/detection"},"Contextual version detection"),", ensuring the correct version of a tool is\nalways used."),(0,o.kt)("li",{parentName:"ul"},"Checksum verification, ensuring a tool came from a trusted source."),(0,o.kt)("li",{parentName:"ul"},"Detects and infers from a language's ecosystem for maximum compatibility."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./proto/plugins"},"Pluggable architecture"),", allowing for custom tooling.")),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The toolchain is a ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," directory within the current user's home directory, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto"),"."),(0,o.kt)("p",null,"The first step in a tool's life-cycle is being downloaded to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/temp"),". Downloads are\ntypically an archive that can be unpacked into a target directory. Once downloaded, we verify the\ndownloaded file by running a checksum. If this check fails for ",(0,o.kt)("em",{parentName:"p"},"any reason"),", the tool is unusable,\nand the process is aborted."),(0,o.kt)("p",null,"After a successful verification, the last step in the tool's life-cycle can begin, installation.\nDepending on the type of download, the installation process may differ. For archives, we unpack the\ntool to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/<name>/<version>"),". In the future, we'll support building from source."),(0,o.kt)("p",null,"From here, we make these tools globally available by prepending ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/bin")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," (typically\nas part of your shell profile). Continue reading for more about this bin folder."),(0,o.kt)("h3",{id:"shims"},"Shims"),(0,o.kt)("p",null,"proto is powered the by industry standard concept of shims. For each tool installed in proto, a shim\nfile will exist at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/bin/<tool>"),". Shims ",(0,o.kt)("em",{parentName:"p"},"are not")," symlinks to the tool's binary, but are\nthin wrappers around ",(0,o.kt)("a",{parentName:"p",href:"./proto/commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"proto run")),", enabling\n",(0,o.kt)("a",{parentName:"p",href:"./proto/detection"},"automatic version detection")," on every invocation!"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.proto/bin")," directory ",(0,o.kt)("em",{parentName:"p"},"should")," be in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," if proto was setup correctly. If not, run\nthe ",(0,o.kt)("a",{parentName:"p",href:"./proto/commands/setup"},(0,o.kt)("inlineCode",{parentName:"a"},"proto setup"))," command, or add the path manually.")),(0,o.kt)("h2",{id:"supported-tools"},"Supported tools"),(0,o.kt)("p",null,"The following tools are ",(0,o.kt)("a",{parentName:"p",href:"./proto/tools"},"officially supported")," in proto via moonrepo. Additional\ntools can be supported through ",(0,o.kt)("a",{parentName:"p",href:"./proto/plugins"},"third-party plugins"),"."),(0,o.kt)(l.Z,{cols:6,mdxType:"ToolsGrid"}),(0,o.kt)("h2",{id:"supported-targets"},"Supported targets"),(0,o.kt)("p",null,"Because proto is written in Rust, we only support targets that are explicitly compiled for, which\nare currently:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Operating system"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Architecture"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Target"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"macOS 64-bit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Intel"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"x86_64-apple-darwin"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"macOS 64-bit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ARM"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"aarch64-apple-darwin"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Linux 64-bit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Intel GNU"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"x86_64-unknown-linux-gnu"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Windows 64-bit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Intel"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"x86_64-pc-windows-msvc"))))),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux ARM/musl support."),(0,o.kt)("li",{parentName:"ul"},"Build from source for existing languages."),(0,o.kt)("li",{parentName:"ul"},"New languages.")))}u.isMDXComponent=!0}}]);