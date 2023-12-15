"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65077],{75543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var l=n(24246),r=n(71670),i=n(27915),o=n(2498);const s={title:"What is proto?"},c=void 0,a={id:"proto/index",title:"What is proto?",description:"proto is a pluggable version manager, a unified toolchain.",source:"@site/docs/proto/index.mdx",sourceDirName:"proto",slug:"/proto/",permalink:"/docs/proto/",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/index.mdx",tags:[],version:"current",frontMatter:{title:"What is proto?"},sidebar:"proto",next:{title:"Install proto",permalink:"/docs/proto/install"}},d={},h=[{value:"Why proto?",id:"why-proto",level:2},{value:"Features",id:"features",level:3},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Shims",id:"shims",level:3},{value:"Binaries",id:"binaries",level:3},{value:"Supported tools",id:"supported-tools",level:2},{value:"Supported targets",id:"supported-targets",level:2},{value:"Roadmap",id:"roadmap",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{text:"3 min"}),"\n",(0,l.jsx)(t.p,{children:"proto is a pluggable version manager, a unified toolchain."}),"\n",(0,l.jsx)(t.p,{children:"If you're unfamiliar with the concept of a toolchain, a toolchain is a collection of tools that are\ndownloaded, installed, and managed by version through a single interface. In the context of proto's\ntoolchain, a tool is either a programming language, a dependency/package manager for a language, or\na custom implementation provided by a plugin. It's the next step in the version manager evolution."}),"\n",(0,l.jsx)(t.h2,{id:"why-proto",children:"Why proto?"}),"\n",(0,l.jsx)(t.p,{children:"proto was designed to be a modern and holistic version manager for all of your favorite programming\nlanguages. We believe a single tool that works the same across every language is better than\nmultiple ad-hoc tools. While we only support a handful of languages today, we aim to support many\nmore in the future!"}),"\n",(0,l.jsx)(t.admonition,{type:"success",children:(0,l.jsxs)(t.p,{children:["proto powers ",(0,l.jsx)(t.a,{href:"/moon",children:"moon"}),"'s toolchain, enabling a single source of truth for both tools!"]})}),"\n",(0,l.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Lightspeed! With Rust and WASM, we can guarantee exceptional performance."}),"\n",(0,l.jsx)(t.li,{children:"Multi-language. A single CLI for managing versions for all of your languages."}),"\n",(0,l.jsx)(t.li,{children:"Cross-platform, for a consistent experience across machines and teams."}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"./proto/detection",children:"Contextual version detection"}),", ensuring the correct version of a tool is\nalways used."]}),"\n",(0,l.jsx)(t.li,{children:"Checksum verification, ensuring a tool came from a trusted source."}),"\n",(0,l.jsx)(t.li,{children:"Detects and infers from a language's ecosystem for maximum compatibility."}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"./proto/plugins",children:"Pluggable architecture"}),", allowing for custom tooling."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,l.jsxs)(t.p,{children:["The toolchain is a ",(0,l.jsx)(t.code,{children:".proto"})," directory within the current user's home directory, e.g., ",(0,l.jsx)(t.code,{children:"~/.proto"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The first step in a tool's life-cycle is being downloaded to ",(0,l.jsx)(t.code,{children:"~/.proto/temp"}),". Downloads are\ntypically an archive that can be unpacked into a target directory. Once downloaded, we verify the\ndownloaded file by running a checksum. If this check fails for ",(0,l.jsx)(t.em,{children:"any reason"}),", the tool is unusable,\nand the process is aborted."]}),"\n",(0,l.jsxs)(t.p,{children:["After a successful verification, the last step in the tool's life-cycle can begin, installation.\nDepending on the type of download, the installation process may differ. For archives, we unpack the\ntool to ",(0,l.jsx)(t.code,{children:"~/.proto/tools/<name>/<version>"}),". In the future, we'll support building from source."]}),"\n",(0,l.jsxs)(t.p,{children:["From here, we make these tools globally available by prepending ",(0,l.jsx)(t.code,{children:"~/.proto/shims"})," and ",(0,l.jsx)(t.code,{children:"~/.proto/bin"}),"\nto ",(0,l.jsx)(t.code,{children:"PATH"})," (typically as part of your shell profile). Continue reading for more about these folders."]}),"\n",(0,l.jsx)(t.h3,{id:"shims",children:"Shims"}),"\n",(0,l.jsxs)(t.p,{children:["proto is powered the by industry standard concept of shims. For each tool installed in proto, a shim\nfile will exist at ",(0,l.jsx)(t.code,{children:"~/.proto/shims/<tool>"}),". Shims ",(0,l.jsx)(t.em,{children:"are not"})," symlinks to the tool's binary, but are\nthin wrappers around ",(0,l.jsx)(t.a,{href:"./proto/commands/run",children:(0,l.jsx)(t.code,{children:"proto run"})}),", enabling\n",(0,l.jsx)(t.a,{href:"./proto/detection",children:"automatic version detection"})," on every invocation!"]}),"\n",(0,l.jsx)(t.admonition,{type:"info",children:(0,l.jsxs)(t.p,{children:["If you'd prefer to ",(0,l.jsx)(t.em,{children:"not use"})," shims, remove the ",(0,l.jsx)(t.code,{children:"~/.proto/shims"})," directory from ",(0,l.jsx)(t.code,{children:"PATH"})," in your shell\nprofile."]})}),"\n",(0,l.jsx)(t.h3,{id:"binaries",children:"Binaries"}),"\n",(0,l.jsxs)(t.p,{children:["Alternatively, we also support a non-shim based approach, which creates symlinks to a tool's primary\nexecutable. For each tool installed in proto, a symlink will exist at ",(0,l.jsx)(t.code,{children:"~/.proto/bin/<tool>"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The version of a tool that's symlinked ",(0,l.jsx)(t.em,{children:"is not"})," dynamic, and is manually created by pinning the\nchosen version with ",(0,l.jsx)(t.a,{href:"./proto/commands/install",children:(0,l.jsx)(t.code,{children:"proto install --pin"})}),". This also happens\nautomatically the first time a tool is installed."]}),"\n",(0,l.jsx)(t.h2,{id:"supported-tools",children:"Supported tools"}),"\n",(0,l.jsxs)(t.p,{children:["The following tools are ",(0,l.jsx)(t.a,{href:"./proto/tools",children:"officially supported"})," in proto via moonrepo. Additional\ntools can be supported through ",(0,l.jsx)(t.a,{href:"./proto/plugins",children:"third-party plugins"}),"."]}),"\n",(0,l.jsx)(o.Z,{cols:6}),"\n",(0,l.jsx)(t.h2,{id:"supported-targets",children:"Supported targets"}),"\n",(0,l.jsx)(t.p,{children:"Because proto is written in Rust, we only support targets that are explicitly compiled for, which\nare currently:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Operating system"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Architecture"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Target"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"macOS 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Intel"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"x86_64-apple-darwin"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"macOS 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ARM"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"aarch64-apple-darwin"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Linux 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Intel GNU"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"x86_64-unknown-linux-gnu"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Linux 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Intel musl"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"x86_64-unknown-linux-musl"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Linux 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ARM GNU"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"aarch64-unknown-linux-gnu"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Linux 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ARM musl"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"aarch64-unknown-linux-musl"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Windows 64-bit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Intel"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"x86_64-pc-windows-msvc"})})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Build from source for existing languages."}),"\n",(0,l.jsx)(t.li,{children:"New languages."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},27915:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(83469),r=n(9619),i=n(24246);function o(e){let{text:t}=e;return(0,i.jsx)(r.Z,{text:t,icon:l.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},2498:(e,t,n)=>{n.d(t,{Z:()=>O});var l,r=n(40624),i=n(81884),o=n(30658),s=n(27378);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}const a=e=>{let{title:t,titleId:n,...r}=e;return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128","aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,l||(l=s.createElement("path",{fill:"currentColor",d:"M64 10.308c-5.12 0-10.24 2.288-16.231 5.71a360.541 360.541 0 0 0-6.144 3.605c-3.908 2.32-8.295 4.97-13.415 7.604C10.546 36.427 0 51.78 0 68.237c0 27.27 28.706 49.455 64 49.455s64-22.185 64-49.454c0-16.474-10.549-31.811-28.213-41.01-6.314-3.276-11.11-6.14-15.36-8.674-1.826-1.119-3.533-2.141-5.24-3.079C73.59 12.282 69.12 10.308 64 10.308Zm0 4.115c4.13 0 7.902 1.646 13.073 4.608 1.553.905 3.258 1.925 5.119 3.027 4.079 2.436 9.113 5.53 15.564 8.821 16.265 8.443 25.977 22.415 25.977 37.359 0 24.998-26.794 45.34-59.733 45.34-32.939 0-59.733-20.342-59.733-45.34 0-14.944 9.71-28.917 25.958-37.392 5.12-2.683 9.676-5.364 13.652-7.733 2.116-1.251 4.113-2.454 6.042-3.54 5.546-3.094 9.95-5.15 14.081-5.15zm3.987 2.75c-.534-.001-.811.721-.318 1.067v.066a27.418 27.418 0 0 1 8.023 8.454 26.356 26.356 0 0 1 3.666 10.9.528.528 0 0 0 .109.39.577.577 0 0 0 .767.125.542.542 0 0 0 .235-.333c1.57-5.744.682-15.536-12.238-20.621a.68.68 0 0 0-.243-.048zm-4.508.406c-.409.032-.777.51-.52.942v.064a26.113 26.113 0 0 1 3.889 10.796 25.818 25.818 0 0 1-1.142 11.373c-.205.576.528 1.07.938.592 3.737-4.608 6.997-13.757-2.765-23.631a.536.536 0 0 0-.4-.136zm-3.875.41a.6.6 0 0 0-.52.596 26.19 26.19 0 0 1-2.48 11.273 27.107 27.107 0 0 1-7.129 9.25c-.478.412-.102 1.202.512.971 5.752-2.156 13.517-8.607 10.24-21.625-.068-.37-.354-.506-.623-.464zm-5.04 2.282a.628.628 0 0 0-.533.34 28.014 28.014 0 0 1-7.298 9.241 29.244 29.244 0 0 1-10.57 5.569c-.615.181-.63 1.054.018 1.037 6.144.362 16.025-2.386 18.977-15.552.096-.411-.247-.654-.593-.635zM42.797 55.206a9.7 9.7 0 0 0-3.367.686 9.339 9.339 0 0 0-4.223 3.34 8.84 8.84 0 0 0-1.585 5.039c0 2.402.988 4.706 2.748 6.406 1.76 1.7 4.146 2.658 6.637 2.663a9.656 9.656 0 0 0 5.23-1.521 9.15 9.15 0 0 0 3.47-4.067 8.765 8.765 0 0 0 .544-5.24 8.975 8.975 0 0 0-2.57-4.647 9.513 9.513 0 0 0-4.815-2.486 9.744 9.744 0 0 0-2.07-.173zm42.344 0a9.707 9.707 0 0 0-3.373.681 9.34 9.34 0 0 0-4.232 3.34 8.837 8.837 0 0 0-1.59 5.044c-.004 2.395.976 4.694 2.726 6.394 1.75 1.7 4.127 2.661 6.61 2.675a9.66 9.66 0 0 0 5.244-1.496 9.155 9.155 0 0 0 3.494-4.057 8.766 8.766 0 0 0 .562-5.243 8.971 8.971 0 0 0-2.558-4.66 9.51 9.51 0 0 0-4.813-2.5 9.747 9.747 0 0 0-2.07-.178zM40.3 58.037a3.574 3.574 0 0 1 2.327 1c.494.479.828 1.086.963 1.748a3.298 3.298 0 0 1-.209 1.971 3.437 3.437 0 0 1-1.308 1.525 3.625 3.625 0 0 1-1.967.567 3.6 3.6 0 0 1-2.487-1.004 3.349 3.349 0 0 1-1.03-2.404c0-.675.21-1.334.598-1.894.39-.56.941-.997 1.588-1.254a3.647 3.647 0 0 1 1.525-.255zm42.275 0c.173.009.345.03.517.063a3.58 3.58 0 0 1 1.81.937c.493.479.828 1.086.963 1.748a3.298 3.298 0 0 1-.209 1.971 3.437 3.437 0 0 1-1.308 1.525c-.583.373-1.27.57-1.969.567h-.033a3.598 3.598 0 0 1-2.465-1.017 3.346 3.346 0 0 1-1.016-2.391c0-.675.207-1.334.595-1.894.39-.56.944-.997 1.59-1.254a3.647 3.647 0 0 1 1.525-.255zM53.623 77.996a2.482 2.482 0 0 0-1.065.204c-.334.145-.63.363-.864.635-.197.226-.338.49-.415.775a1.904 1.904 0 0 0-.029.871c.806 3.245 2.667 6.156 5.308 8.31a12.881 12.881 0 0 0 7.594 3.292c2.838-.244 5.51-1.403 7.58-3.291 2.641-2.155 4.5-5.066 5.305-8.31a1.886 1.886 0 0 0-.018-.87 1.937 1.937 0 0 0-.409-.777 2.446 2.446 0 0 0-.864-.629 2.538 2.538 0 0 0-1.063-.21zm0 1.91 21.06.031a.369.369 0 0 1 .342.15 13.448 13.448 0 0 1-2.402 4.898l-.073-.06c-2.171-1.994-5.042-3.129-8.04-3.177-1.602.013-3.18.37-4.623 1.042a10.806 10.806 0 0 0-3.685 2.802 13.47 13.47 0 0 1-2.937-5.538c.017-.033.085-.148.358-.148zm10.973 3.504c2.556.073 4.991 1.065 6.827 2.782l.083.068c-.354.358-.73.699-1.125 1.02a10.885 10.885 0 0 1-6.229 2.845 10.795 10.795 0 0 1-6.23-2.88 13.946 13.946 0 0 1-.482-.412h.006a9.078 9.078 0 0 1 3.166-2.502 9.427 9.427 0 0 1 3.984-.92z"})))};var d,h;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},p.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...l}=e;return s.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128","aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,d||(d=s.createElement("path",{fill:"currentColor",d:"M59.016 13.328c-.239.024-1 .113-1.688.176-9.777 1.023-19.406 5.164-27.258 11.738-1.449 1.203-4.75 4.504-5.953 5.953-6.5 7.766-10.3 16.48-11.703 26.793-.312 2.29-.312 10.016 0 12.305 1.402 10.312 5.203 19.027 11.703 26.793 1.203 1.45 4.504 4.75 5.953 5.953 7.766 6.5 16.48 10.3 26.793 11.703 2.29.313 10.016.313 12.305 0 10.312-1.402 19.027-5.203 26.793-11.703 1.45-1.203 4.75-4.504 5.953-5.953 6.5-7.766 10.3-16.48 11.7-26.793.316-2.29.316-10.016 0-12.305-1.4-10.312-5.2-19.027-11.7-26.793-1.203-1.449-4.504-4.75-5.953-5.953-7.738-6.476-16.543-10.324-26.719-11.687-1.101-.153-2.699-.215-5.664-.239-2.262-.027-4.328-.011-4.562.012zm.625 5.402c0 1.461.097 4.637.238 7.653.074 1.472.16 3.586.2 4.687.136 3.903.55 14.14.612 15.055l.063.91-.563-.062c-.312-.024-.601-.098-.652-.137-.035-.05-.125-.914-.176-1.926-.222-4.45-.96-21.719-1.035-24.242l-.078-2.777.352-.047c.187-.028.5-.063.699-.078l.34-.012zm11.964-.3c.012.011.051 3.789.086 8.39.051 4.614.114 8.75.153 9.2.035.464.023.863-.04.89-.05.035-.363.035-.675 0l-.574-.05-.086-3.641a692.868 692.868 0 0 0-.14-4.961c-.099-2.215-.188-9.727-.11-9.914.047-.14.187-.153.71-.063.364.074.665.137.676.149zm-28.921 4.187c.078.113.664 7.004 1.39 16.016.239 3.066.473 5.867.512 6.215.062.636.05.664-.352.914-.222.136-.449.25-.5.25-.035 0-.109-.325-.148-.727-.176-1.625-.852-9.476-1.324-15.152-.278-3.34-.528-6.328-.563-6.653-.062-.55-.05-.601.274-.773.398-.215.625-.25.71-.09zm34.421 2.516c.352.125.387.187.465.898.125 1.25.086 7.227-.05 7.227-.364 0-1.114-.426-1.176-.664-.04-.149-.074-1.922-.074-3.938 0-4.062-.051-3.824.835-3.523zm-23.093.586c0 .336.09 2.199.187 4.164.102 1.96.215 4.449.266 5.527.086 2.176.11 2.098-.727 2.149-.414.011-.414.011-.437-.614-.024-.347-.086-1.437-.164-2.437-.063-1-.211-3.164-.313-4.813a117.11 117.11 0 0 0-.261-3.64c-.075-.625-.063-.649.273-.774.203-.074.55-.136.777-.136.399-.012.399-.012.399.574zm34.683 1.715.426.171.09 1.676c.035.914.062 2.89.035 4.38l-.035 2.722-.527-.262-.524-.25-.039-4.152c-.023-2.285-.012-4.223.012-4.313.05-.187.05-.187.562.028zM65.867 29.07c.074.075.25 6.137.262 9.215l.012 1.852-.586-.09c-.34-.04-.614-.074-.625-.086-.04-.027-.414-9.29-.414-10.191v-.926l.636.074c.364.05.676.113.715.152zm28.793.887c.153.176.176 2.914.215 18.016.035 17.343.035 17.793-.188 17.793a.806.806 0 0 1-.44-.164c-.188-.137-.212-1.649-.274-16.465-.051-8.977-.114-17.13-.149-18.117l-.078-1.801.363.261c.215.153.454.364.551.477zM83.445 32.52c.063.05.125.761.137 1.578.063 2.761.074 19.703.012 19.754-.024.023-.25-.04-.5-.137l-.45-.188v-21.27l.352.075c.188.05.387.125.45.188zm-34.507.699c.035.34.097 1.101.136 1.726.04.614.125 2.016.2 3.102.152 2.2.124 2.34-.587 2.34-.374 0-.425-.04-.476-.414-.125-.739-.563-6.891-.5-6.989.062-.09.715-.312 1.012-.34.078-.011.175.25.215.575zm-20.68 3.191c.137 1.324.41 4.102.613 6.164.211 2.063.387 3.813.387 3.887 0 .152-.965.625-1.063.527-.062-.062-1.312-11.129-1.312-11.629 0-.3.96-1.562 1.086-1.425.039.023.164 1.136.289 2.476zm49.023 1.313.364.21.011 2.704c.012 1.472.04 3.125.04 3.66.023 1.125-.114 1.312-.79 1.078l-.386-.14V44.16c0-.597-.04-2.336-.09-3.875l-.075-2.777h.29c.148 0 .437.101.636.215zm-43.535 4.851c.227 2.399.586 6.45.824 9l.426 4.63-.488.483-.473.489-.09-.989c-.05-.55-.3-3.097-.562-5.675a1449.23 1449.23 0 0 1-.824-8.301l-.352-3.602.488-.449c.438-.414.489-.426.575-.2.05.126.261 2.2.476 4.614zm-9.363 1.512c.273 2.465 1 9.016 1.625 14.555s1.21 10.875 1.324 11.875c.102 1 .273 2.515.375 3.379.176 1.46.176 1.562-.023 1.71-.301.227-.426.2-.426-.062 0-.113-.113-1.063-.25-2.086-.227-1.715-.602-4.617-1.438-11.129a740.832 740.832 0 0 1-.75-5.812c-.25-1.891-.613-4.703-.816-6.254-.2-1.551-.535-4.2-.75-5.914-.223-1.7-.36-3.211-.324-3.375.09-.336.824-1.512.902-1.438.023.035.273 2.074.55 4.55zm-3.828 5.387c.187 1.504.539 4.242.777 6.101.234 1.852.535 4.164.672 5.13l.238 1.75-.262.226c-.148.125-.3.172-.351.125-.047-.051-.149-.551-.223-1.102a995.27 995.27 0 0 0-1.039-7.129l-.887-6.125.286-.851c.152-.461.312-.836.351-.836.051 0 .238 1.226.438 2.71zm68.64-1.637c.176.176.203.95.203 6.691v6.489h-.351c-.762 0-.75.187-.8-6.914l-.036-6.465h.398c.211 0 .489.086.586.199zm-27.367 2.238c2.824.426 5.29 1.215 7.727 2.465 1.574.813 2.324 1.375 4.074 3.05 2.601 2.49 4.203 4.665 5.703 7.74 2.188 4.476 3.04 8.437 4.113 19.066.489 4.765 1.125 13.402 1.262 16.94.04 1.028.125 2.716.203 3.75.137 2.204.297 1.903-1.64 2.84-2.688 1.302-5.278 2.2-8.688 3.04-4.176 1.023-6.879 1.347-11.004 1.363l-3 .012.024-1.438c0-.789.074-2.625.152-4.062.375-6.965.297-15.754-.188-20.633-.277-2.8-.812-6.2-1.113-6.95-.062-.163.223-.3 1.461-.726 2.266-.789 4.227-1.777 4.527-2.261.54-.926-.425-2.254-1.652-2.254-.21 0-.848.226-1.437.488-2.801 1.289-8.414 2.8-11.653 3.14-2.238.239-5.715.098-8.125-.34-1.312-.238-3.664-1.124-5.629-2.136-2.261-1.176-3.648-2.738-4.062-4.59-.227-1-.164-3 .125-4.125.312-1.238 1.187-3.039 1.988-4.09 3.563-4.687 10.914-8.75 18.453-10.175 2.403-.45 5.801-.5 8.38-.114zm38.57.387c.45.187.5.238.5.664.028 3.414-.05 11.215-.113 11.54-.012.112-.66.124-.937.026-.172-.062-.2-.738-.2-6.254 0-3.949.051-6.175.125-6.175.063 0 .352.09.625.199zm5.465 6.867.45.188-.086 10.351c-.102 13.192-.114 13.578-.59 14.715-.774 1.863-.735 2.238-.66-5.937.023-4.09.085-8.227.113-9.192.023-.96.047-3.676.062-6.039 0-2.852.035-4.273.125-4.273.075 0 .336.086.586.187zm-75.191 3.113c.074 1.012.047 1.11-.317 1.91l-.398.852-.148-1.25c-.239-2-.239-2.09.234-2.387.215-.152.441-.25.477-.226.039.023.113.523.152 1.101zm-7.73 7.54c.113 1.023.988 7.824 1.44 11.164.673 5.164.723 5.902.423 5.59-.035-.04-.325-1.778-.625-3.864-1.95-13.48-1.938-13.39-1.774-13.492.336-.227.45-.102.535.601zm9.003 5.726c.075.313.438 3.7.438 4.113 0 .348-.45.676-.649.473-.062-.063-.226-1.125-.351-2.348-.137-1.238-.274-2.527-.313-2.863l-.074-.625.438.5c.25.273.472.61.511.75zm10.09 4.711c.137.125.227.625.336 1.977.188 2.437.215 2.25-.297 2.25-.527 0-.515.039-.687-2.165-.176-2.238-.176-2.21.16-2.21.164 0 .375.074.488.148zm9.903.187c.023.125.085.875.136 1.665.04.789.153 2.562.25 3.937.352 5.05.364 5.691.153 5.691-.239 0-.266-.187-.54-3.753a274.195 274.195 0 0 0-.414-5.165c-.109-1.359-.187-2.5-.148-2.523.137-.152.5-.039.563.148zm-23.504 2.403c.074.113.546 4.113 1.136 9.578.176 1.648.348 3.238.387 3.535l.063.54-.313-.2c-.238-.164-.324-.324-.324-.613 0-.79-.54-5.977-.95-9.153-.238-1.8-.425-3.386-.425-3.539 0-.261.3-.363.426-.148zm72.152 5.226-.086 5.227-.313.46c-.714 1.052-.675 1.25-.636-4.6l.023-5.364.461-.477c.25-.25.5-.46.55-.46.04 0 .04 2.351 0 5.214zm-11.563 8.29c.063 7.265.047 7.828-.152 8.05-.125.137-.238.227-.273.188-.09-.098-.215-15.942-.114-16.028.051-.05.176-.074.29-.062.16.035.199.926.25 7.851zm-40.835-4.977c.085.773.398 4.488.523 6.238.074 1.176.074 1.215-.2 1.3-.148.052-.324.04-.374-.022-.086-.09-.364-2.864-.7-7.141l-.09-1.024h.391c.36 0 .387.024.45.649zm-9.829 4.375c.086.09.149.402.149.715 0 .324.152 2.011.312 3.761.477 4.79.516 5.438.301 5.313-.324-.188-.613-.473-.55-.547.027-.05-.024-.676-.126-1.39a65.54 65.54 0 0 1-.25-2.626c-.047-.722-.16-2.05-.261-2.937-.239-2.188-.223-2.438.05-2.438a.59.59 0 0 1 .375.149zm5.914 8.414c.04.277.114 1.3.164 2.277.086 1.875.047 2.012-.464 1.625-.149-.113-.25-.586-.399-2.011-.261-2.579-.277-2.477.211-2.426.363.035.414.086.488.535zm0 0"})),h||(h=s.createElement("path",{d:"M39.809 56.063c-1.301.562-1.399 2.328-.176 2.953.89.449 1.789.234 2.254-.54.875-1.425-.551-3.074-2.078-2.413zm8.476 1.203c-1.2.734-1.2 2.511 0 3.25 1.188.71 2.727-.227 2.727-1.653 0-1.375-1.575-2.3-2.727-1.597zm0 0",fill:"currentColor"})))};var m;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},x.apply(this,arguments)}const f=e=>{let{title:t,titleId:n,...l}=e;return s.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128","aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,m||(m=s.createElement("g",{fill:"currentColor",fillRule:"evenodd"},s.createElement("path",{d:"M11.156 54.829c-.243 0-.303-.122-.182-.303l1.273-1.637c.12-.182.424-.303.666-.303H34.55c.243 0 .303.182.182.364l-1.03 1.576c-.121.181-.424.363-.606.363zm-9.152 5.575c-.242 0-.303-.12-.182-.303l1.273-1.636c.121-.182.424-.303.667-.303h27.636c.242 0 .364.182.303.364l-.485 1.454c-.06.243-.303.364-.545.364zM16.67 65.98c-.242 0-.302-.182-.181-.364l.848-1.515c.122-.182.364-.363.607-.363h12.12c.243 0 .364.181.364.424l-.12 1.454c0 .243-.243.425-.425.425zm62.91-12.242c-3.819.97-6.425 1.697-10.182 2.666-.91.243-.97.303-1.758-.606-.909-1.03-1.576-1.697-2.848-2.303-3.819-1.878-7.516-1.333-10.97.91-4.121 2.666-6.242 6.605-6.182 11.514.06 4.849 3.394 8.849 8.182 9.516 4.121.545 7.576-.91 10.303-4 .545-.667 1.03-1.394 1.636-2.243H56.064c-1.272 0-1.575-.788-1.151-1.818.788-1.879 2.242-5.03 3.09-6.606.183-.364.607-.97 1.516-.97h22.06c-.12 1.637-.12 3.273-.363 4.91-.667 4.363-2.303 8.363-4.97 11.878-4.364 5.758-10.06 9.333-17.273 10.303-5.939.788-11.454-.364-16.302-4-4.485-3.394-7.03-7.879-7.697-13.454-.788-6.606 1.151-12.546 5.151-17.758 4.303-5.636 10-9.212 16.97-10.485 5.697-1.03 11.151-.363 16.06 2.97 3.212 2.121 5.515 5.03 7.03 8.545.364.546.122.849-.606 1.03z"}),s.createElement("path",{d:"M99.64 87.253c-5.515-.122-10.546-1.697-14.788-5.334-3.576-3.09-5.818-7.03-6.545-11.697-1.091-6.848.787-12.909 4.909-18.302 4.424-5.819 9.757-8.849 16.97-10.122 6.181-1.09 12-.484 17.272 3.091 4.788 3.273 7.757 7.697 8.545 13.515 1.03 8.182-1.333 14.849-6.97 20.546-4 4.06-8.909 6.606-14.545 7.757-1.636.303-3.273.364-4.848.546zm14.424-24.485c-.06-.788-.06-1.394-.182-2-1.09-6-6.606-9.394-12.363-8.06-5.637 1.272-9.273 4.848-10.606 10.545-1.091 4.727 1.212 9.515 5.575 11.454 3.334 1.455 6.667 1.273 9.879-.363 4.788-2.485 7.394-6.364 7.697-11.576z",fillRule:"nonzero"}))))};var g;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},j.apply(this,arguments)}const v=e=>{let{title:t,titleId:n,...l}=e;return s.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128","aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,g||(g=s.createElement("path",{fill:"currentColor",d:"M112.678 30.334 68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 0 1 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 0 0 4.647 1.246 9.303 9.303 0 0 0 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"})))};var y;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},b.apply(this,arguments)}const w=e=>{let{title:t,titleId:n,...l}=e;return s.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128","aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,y||(y=s.createElement("path",{fill:"currentColor",d:"M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"})))};var z;function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},A.apply(this,arguments)}const k=e=>{let{title:t,titleId:n,...l}=e;return s.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128","aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,z||(z=s.createElement("path",{d:"M62.271 10.88c-.189.11-.982 1.248-1.763 2.529-1.96 3.217-1.982 3.219-4.615.448-1.713-1.802-2.127-2.132-2.679-2.128-.359.002-.812.124-1.008.271-.195.147-.748 1.317-1.228 2.6-1.099 2.939-1.152 3.034-1.761 3.151-.375.071-1.097-.331-2.828-1.574-1.278-.919-2.532-1.67-2.786-1.67-1.054 0-1.351.576-1.853 3.593-.638 3.836-.616 3.823-4.074 2.252-1.396-.633-2.72-1.152-2.943-1.152-.223 0-.646.24-.939.533-.532.533-.533.535-.388 3.468l.146 2.936-.555.297c-.492.263-.831.231-3.009-.284-2.843-.671-3.443-.653-4.019.122l-.421.566.565 2.421c.31 1.331.609 2.613.665 2.848.055.234-.04.609-.212.832-.284.367-.586.4-3.217.36-4.453-.07-4.706.312-2.866 4.328.585 1.275 1.064 2.433 1.064 2.572 0 .734-.585 1.001-3.098 1.411-1.406.229-2.628.417-2.716.417-.088 0-.352.192-.586.426-.765.765-.548 1.483 1.187 3.932 2.161 3.05 2.157 3.061-1.413 4.427-4.06 1.553-4.142 1.936-1.051 4.868 2.879 2.73 2.882 2.69-.377 4.739-2.469 1.551-2.507 1.588-2.57 2.429-.076 1.023-.058 1.041 2.89 2.842 2.915 1.78 2.915 1.834.054 4.541-3.077 2.91-2.982 3.335 1.081 4.868 3.55 1.339 3.555 1.355 1.39 4.405-1.227 1.729-1.618 2.449-1.618 2.983 0 .999.52 1.254 3.627 1.776 2.617.441 3.2.7 3.2 1.422 0 .148-.48 1.316-1.067 2.594-1.826 3.977-1.618 4.308 2.704 4.308 4.025 0 3.918-.123 3.051 3.507-.654 2.736-.664 3.26-.072 3.851.453.454 1.307.403 3.978-.236 2.04-.487 2.398-.521 2.871-.268l.54.289-.146 2.935c-.145 2.934-.144 2.936.388 3.469.293.293.722.533.952.533.23 0 1.554-.516 2.943-1.147 3.447-1.565 3.425-1.578 4.061 2.246.504 3.031.798 3.594 1.874 3.594.267 0 1.494-.72 2.728-1.6 2.167-1.546 2.729-1.788 3.306-1.421.149.094.727 1.364 1.284 2.822.819 2.144 1.119 2.702 1.575 2.92.868.416 1.405.082 3.445-2.14 2.463-2.683 2.564-2.67 4.575.589 2.221 3.598 2.796 3.59 5.073-.073 1.962-3.156 1.939-3.154 4.591-.384 1.761 1.838 2.136 2.131 2.73 2.131.379 0 .832-.142 1.005-.316.174-.174.75-1.459 1.28-2.855.53-1.397 1.079-2.613 1.221-2.703.561-.357 1.142-.106 3.306 1.43 1.274.905 2.473 1.6 2.758 1.6 1.058 0 1.44-.751 1.88-3.703.376-2.517.452-2.758.947-3.009.487-.247.779-.164 3.063.873 1.389.63 2.713 1.146 2.943 1.146.23 0 .666-.247.967-.549l.549-.548-.151-2.815c-.144-2.688-.131-2.832.298-3.22.441-.399.486-.397 2.952.166 2.986.682 3.543.7 4.104.139.548-.548.542-.668-.208-3.831-.841-3.548-.954-3.422 3.088-3.422 2.755 0 3.062-.039 3.413-.426.586-.648.447-1.39-.732-3.903-.595-1.266-1.078-2.418-1.074-2.56.02-.747.607-1.002 3.32-1.443 1.66-.269 2.902-.581 3.127-.784.754-.681.477-1.567-1.244-3.98-2.157-3.024-2.148-3.053 1.306-4.326 4.136-1.524 4.254-2.032 1.159-4.973-2.867-2.724-2.868-2.709.272-4.637 3.796-2.33 3.802-2.855.067-5.173-3.212-1.993-3.21-1.965-.331-4.699 3.088-2.934 3.004-3.318-1.057-4.871-3.584-1.371-3.595-1.405-1.417-4.394 1.297-1.78 1.618-2.371 1.618-2.981 0-1.066-.478-1.305-3.622-1.813-2.627-.424-3.205-.682-3.205-1.429 0-.142.48-1.285 1.067-2.542 1.149-2.461 1.31-3.446.66-4.035-.349-.316-.817-.361-3.321-.32-2.62.044-2.955.007-3.318-.358-.397-.399-.393-.455.227-3.042.76-3.17.763-3.247.138-3.834-.634-.596-1.03-.586-3.941.099-2.121.5-2.472.533-2.954.275l-.547-.293.151-2.926.152-2.925-.547-.547c-.301-.301-.728-.547-.95-.547-.221 0-1.538.523-2.926 1.161-2.318 1.067-2.567 1.138-3.068.876-.5-.262-.583-.52-1.01-3.127-.493-3.016-.798-3.603-1.869-3.603-.254 0-1.513.755-2.798 1.678-2.11 1.516-2.393 1.659-2.919 1.476-.435-.152-.688-.483-.997-1.306-.229-.606-.667-1.774-.975-2.595-.622-1.656-.969-2.027-1.901-2.027-.52 0-.991.374-2.679 2.127-2.653 2.756-2.663 2.755-4.614-.445-.78-1.279-1.595-2.421-1.812-2.537-.488-.262-1.062-.261-1.511.002m2.418 9.635c2.311 1.645 1.082 5.512-1.752 5.512-2.75 0-4.135-3.313-2.171-5.194 1.108-1.062 2.697-1.191 3.923-.318m-2.906 10.214c1.515.576 2.137.23 5.596-3.104l2.599-2.506 1.1.146c3.45.458 10.312 3.472 14.255 6.261 3.623 2.564 8.438 7.786 10.49 11.377l.439.769-1.944 4.38c-1.07 2.409-1.945 4.633-1.945 4.944 0 .717.47 1.851.923 2.226.191.159 2.006 1.033 4.033 1.942l3.684 1.654.145.937c.187 1.221.212 4.22.042 5.072l-.133.666h-2.103c-2.439 0-2.251-.218-2.383 2.774-.096 2.169-.62 3.368-1.812 4.144-1.942 1.267-5.149 1.037-6.509-.466-.209-.231-.615-1.392-.903-2.581-.841-3.473-1.971-5.423-4.241-7.32-.717-.599-1.303-1.158-1.303-1.243 0-.084.788-.748 1.752-1.473 3.51-2.646 5.528-5.726 5.75-8.777.423-5.819-4.213-11.243-11.109-13.001-1.635-.417-2.333-.43-22.56-.43-11.48 0-20.873-.075-20.873-.166 0-.215 2.551-2.691 4.054-3.933 4.127-3.412 9.488-6.097 15.04-7.531l1.92-.497 2.728 2.766c1.501 1.521 2.972 2.857 3.268 2.97M27.432 48.526c1.257.823 1.772 2.891 1.03 4.134-1.148 1.924-4.056 2.005-5.205.145-1.671-2.702 1.547-6.001 4.175-4.279m74.05.105c3.288 2.005.74 6.937-2.78 5.38-2.35-1.04-2.425-4.252-.127-5.424.959-.489 2.061-.472 2.907.044M37.12 60.907v12.266H26.276l-.43-1.866c-.846-3.675-1.202-7.477-.989-10.591l.149-2.188 3.728-1.672c2.339-1.048 3.843-1.847 4.037-2.144.848-1.293.767-2.217-.423-4.845l-.556-1.227h5.328v12.267m31.22-11.733c2.322.604 3.549 1.833 3.552 3.556.002 1.265-.625 2.059-2.18 2.761-1.101.498-1.276.51-8.219.578l-7.093.068v-7.284h6.355c4.964 0 6.625.07 7.585.321m-2.396 17.602c1.151.32 2.512 1.32 3.21 2.359.733 1.092 1.162 2.512 2.178 7.216.858 3.976 1.41 5.276 2.956 6.968 1.915 2.095 1.471 2.014 11.037 2.014 4.581 0 8.328.073 8.328.163 0 .161-3.155 3.891-3.291 3.891-.039 0-1.687-.345-3.662-.767-5.577-1.191-5.778-1.051-7.058 4.926l-.823 3.84-.743.366c-1.24.612-5.27 1.872-7.359 2.302-3.452.71-7.209.95-10.511.671-5.629-.477-13.083-2.661-13.374-3.92-.062-.267-.437-1.995-.832-3.841-.396-1.846-.877-3.597-1.069-3.891-.923-1.408-1.894-1.495-6.164-.55-1.617.358-3.028.65-3.136.65-.203 0-3.204-3.47-3.204-3.704 0-.073 7.128-.158 15.84-.188l15.84-.054.057-5.627c.04-3.973-.015-5.714-.187-5.92-.192-.232-1.214-.293-4.91-.293H54.4V66.56l5.387.001c2.962.001 5.733.098 6.157.215M41.536 92.365c2.519 1.535 1.311 5.557-1.668 5.554-3.055-.002-4.187-3.987-1.584-5.575.861-.525 2.374-.515 3.252.021m46.126.168c1.235.905 1.646 2.788.881 4.042-2.009 3.295-7.033.676-5.355-2.791.825-1.703 3.018-2.317 4.474-1.251",fillRule:"evenodd",fill:"currentColor"})))};var C=n(24246);function O(e){let{cols:t=3}=e;return(0,C.jsxs)("div",{className:(0,r.Z)("grid gap-4 px-4",6===t?"grid-cols-6":"grid-cols-3"),children:[(0,C.jsx)("div",{className:"text-center",children:(0,C.jsx)(i.default,{href:"/docs/proto/tools#bun",children:(0,C.jsx)(a,{width:"100%",className:"inline-block"})})}),(0,C.jsx)("div",{className:"text-center",children:(0,C.jsx)(i.default,{href:"/docs/proto/tools#deno",children:(0,C.jsx)(u,{width:"100%",className:"inline-block"})})}),(0,C.jsx)("div",{className:"text-center",children:(0,C.jsx)(i.default,{href:"/docs/proto/tools#go",children:(0,C.jsx)(f,{width:"100%",className:"inline-block"})})}),(0,C.jsxs)("div",{className:"text-center",children:[(0,C.jsx)(i.default,{href:"/docs/proto/tools#node",children:(0,C.jsx)(v,{width:"100%",className:"inline-block"})}),(0,C.jsx)(o.ZP,{className:"m-0",variant:"muted",children:"+ npm, pnpm, yarn"})]}),(0,C.jsx)("div",{className:"text-center",children:(0,C.jsx)(i.default,{href:"/docs/proto/tools#python",children:(0,C.jsx)(w,{width:"100%",className:"inline-block"})})}),(0,C.jsx)("div",{className:"text-center",children:(0,C.jsx)(i.default,{href:"/docs/proto/tools#rust",children:(0,C.jsx)(k,{width:"100%",className:"inline-block"})})})]})}},9619:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(40624),r=n(31792),i=n(24246);const o={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){let{className:t,icon:n,text:s,variant:c}=e;return(0,i.jsxs)("span",{className:(0,l.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?o[c]:"bg-gray-100 text-gray-800",t),children:[n&&(0,i.jsx)(r.Z,{icon:n,className:"mr-1"}),s]})}},71670:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var l=n(27378);const r={},i=l.createContext(r);function o(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);