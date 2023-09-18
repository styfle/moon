"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[537],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9619:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),o=n(40624),r=n(31792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:n,text:l,variant:p}=e;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",p?i[p]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(r.Z,{icon:n,className:"mr-1"}),l)}},99887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var a=n(25773),o=n(27378),r=n(35318),i=n(83469),l=n(9619);function p(e){let{to:t}=e;return o.createElement("a",{href:t,target:"_blank",className:"float-right block",style:{marginTop:"-3.75em"}},o.createElement(l.Z,{text:"WASM plugin",icon:i.zZQ,variant:"success"}))}const s={title:"Supported tools"},u=void 0,m={unversionedId:"proto/tools",id:"proto/tools",title:"Supported tools",description:"The following tools are supported natively in proto's toolchain. Additional tools can be supported",source:"@site/docs/proto/tools.mdx",sourceDirName:"proto",slug:"/proto/tools",permalink:"/docs/proto/tools",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/tools.mdx",tags:[],version:"current",frontMatter:{title:"Supported tools"},sidebar:"proto",previous:{title:"Configuration",permalink:"/docs/proto/config"},next:{title:"Plugins",permalink:"/docs/proto/plugins"}},d={},c=[{value:"Bun",id:"bun",level:2},{value:"Deno",id:"deno",level:2},{value:"Go",id:"go",level:2},{value:"Post-install hook",id:"post-install-hook",level:4},{value:"Node.js",id:"nodejs",level:2},{value:"Post-install hook",id:"post-install-hook-1",level:4},{value:"npm, pnpm, yarn",id:"npm-pnpm-yarn",level:3},{value:"corepack",id:"corepack",level:3},{value:"Python (experimental)",id:"python-experimental",level:2},{value:"Rust",id:"rust",level:2}],k={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following tools are supported natively in proto's toolchain. Additional tools can be supported\nthrough ",(0,r.kt)("a",{parentName:"p",href:"./plugins"},"plugins"),"."),(0,r.kt)("h2",{id:"bun"},"Bun"),(0,r.kt)(p,{to:"https://github.com/moonrepo/bun-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," is an all-in-one runtime and toolset for JavaScript and TypeScript, powered\nby Zig and Webkit."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available binaries")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"bun"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bunx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Globals directory")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bun/bin"))),(0,r.kt)("h2",{id:"deno"},"Deno"),(0,r.kt)(p,{to:"https://github.com/moonrepo/deno-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno")," is a secure runtime for JavaScript and TypeScript, powered by Rust and\nChrome's V8 engine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available binaries")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"deno")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Globals directory")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"$DENO_INSTALL_ROOT/bin"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.deno/bin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detection sources")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/justjavac/dvm"},(0,r.kt)("inlineCode",{parentName:"a"},".dvmrc")))),(0,r.kt)("h2",{id:"go"},"Go"),(0,r.kt)(p,{to:"https://github.com/moonrepo/go-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go")," is a simple, secure, and fast systems language."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available binaries")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Globals directory")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"$GOBIN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"~/go/bin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detection sources")," - ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/doc/tutorial/workspaces"},(0,r.kt)("inlineCode",{parentName:"a"},"go.work")),",\n",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/doc/modules/gomod-ref"},(0,r.kt)("inlineCode",{parentName:"a"},"go.mod")))),(0,r.kt)("h4",{id:"post-install-hook"},"Post-install hook"),(0,r.kt)("p",null,"After installation, we'll inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN")," environment variable into your shell, pointing to\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/go/bin"),", if it does not already exist. This variable will be used to locate Go binaries across\nall installed versions. This functionality can be skipped by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-gobin")," during\ninstallation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install go -- --no-gobin\n")),(0,r.kt)("h2",{id:"nodejs"},"Node.js"),(0,r.kt)(p,{to:"https://github.com/moonrepo/node-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," is a JavaScript runtime built on Chrome's V8 engine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available binaries")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"npx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Globals directory")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.proto/tools/node/globals/bin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detection sources")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},(0,r.kt)("inlineCode",{parentName:"a"},".nvmrc")),",\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodenv/nodenv"},(0,r.kt)("inlineCode",{parentName:"a"},".node-version")),", ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," engines")),(0,r.kt)("h4",{id:"post-install-hook-1"},"Post-install hook"),(0,r.kt)("p",null,"After installation, the version of npm that came bundled with Node.js will also be installed. This\nfunctionality can be skipped by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-bundled-npm")," during installation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ proto install node -- --no-bundled-npm\n")),(0,r.kt)("h3",{id:"npm-pnpm-yarn"},"npm, pnpm, yarn"),(0,r.kt)(p,{to:"https://github.com/moonrepo/node-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,"proto supports all popular Node.js package managers: ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available binaries")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"node-gyp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detection sources")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," engines / package manager")),(0,r.kt)("h3",{id:"corepack"},"corepack"),(0,r.kt)("p",null,"Corepack ",(0,r.kt)("em",{parentName:"p"},"is not supported")," by proto, and never will be. Use ",(0,r.kt)("a",{parentName:"p",href:"./commands/use"},(0,r.kt)("inlineCode",{parentName:"a"},"proto use"))," instead,\nwhich is a far more poweful alternative."),(0,r.kt)("h2",{id:"python-experimental"},"Python (experimental)"),(0,r.kt)(p,{to:"https://github.com/moonrepo/python-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python")," is a high-level, general-purpose programming language."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Available binaries")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"python"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Globals directory")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.local/bin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Detection sources")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv"},(0,r.kt)("inlineCode",{parentName:"a"},".python-version")))),(0,r.kt)("h2",{id:"rust"},"Rust"),(0,r.kt)(p,{to:"https://github.com/moonrepo/rust-plugin",mdxType:"WasmLink"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," (",(0,r.kt)("inlineCode",{parentName:"p"},"rust"),") is blazingly fast and memory-efficient systems language."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you're familiar with Rust, you most likely use ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup"),", a Rust specific\ntoolchain manager. This overlaps heavily with how proto works, so instead of proto reinventing the\nwheel here, we simply call ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," under the hood. Because of this, be aware of the following when\nusing Rust in proto:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Rust and Cargo must be pre-installed on your system."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.cargo/bin")," directory must be in your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),"."),(0,r.kt)("li",{parentName:"ul"},"We don't install Rust to ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.proto/tools/rust")," but instead reference ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rustup/toolchains"),"."),(0,r.kt)("li",{parentName:"ul"},"We don't create shims for ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rustup"),", etc."))),(0,r.kt)("p",null,"Since we don't create shims for ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup"),", etc, we can't detect Rust versions at runtime.\nHowever, ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," supports this through the\n",(0,r.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file"},(0,r.kt)("inlineCode",{parentName:"a"},"rust-toolchain.toml"))," file.\nWe suggest using this file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="rust-toolchain.toml"',title:'"rust-toolchain.toml"'},'[toolchain]\nprofile = "default"\nchannel = "1.68.0"\n')))}g.isMDXComponent=!0}}]);