"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5911],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6243:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),r=n(8944);const o="tabItem_lLGn";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},637:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(5773),r=n(7378),o=n(6457),l=n(784),i=n(9947),c=n(3457),s=n(8944);const p="tabList_lSCs",m="tabItem_WhCL";function u(e){var t,n,o;const{lazy:u,block:d,defaultValue:f,values:h,groupId:g,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,l.l)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===f?f:null!=(t=null!=f?f:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:j,setTabGroupChoices:N}=(0,i.U)(),[x,C]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=g){const e=j[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==x&&(T(t),C(a),null!=g&&N(g,a))},Z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]||E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},k)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:Z,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},7915:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),r=n(5268),o=n(9619);function l(e){let{text:t}=e;return a.createElement(o.Z,{text:t,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7378),r=n(1884),o=n(5773),l=n(7765),i=n(5268),c=n(8896);const s={discord:l.omb,github:l.zhw,moon:i.Gp0,"new-project":i.g6h,"new-task":i.EQ8,project:i.pL1,"project-config":i.dhu,"project-config-global":i.YdP,"project-graph":i.Bkj,"run-task":i.sl_,task:i.diR,"task-config":i.o$R,token:i.BwA,toolchain:i.AlB,twitter:l.mdU,workspace:i.emM,"workspace-config":i.cRF};function p(e){let{name:t,...n}=e;return a.createElement(c.Z,(0,o.Z)({},n,{icon:s[t]}))}function m(e){let{links:t}=e;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((e=>a.createElement(r.Z,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(p,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label))))))}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),r=n(8944),o=n(8896);const l={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:c}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?l[c]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),i)}},6570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=n(5773),r=(n(7378),n(5318)),o=n(637),l=n(6243),i=n(7915),c=n(9634);const s={title:"Create a project"},p=void 0,m={unversionedId:"create-project",id:"create-project",title:"Create a project",description:"With a workspace, we can now house one or many projects,",source:"@site/docs/create-project.mdx",sourceDirName:".",slug:"/create-project",permalink:"/docs/create-project",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/create-project.mdx",tags:[],version:"current",frontMatter:{title:"Create a project"},sidebar:"docs",previous:{title:"Setup workspace",permalink:"/docs/setup-workspace"},next:{title:"Create a task",permalink:"/docs/create-task"}},u={},d=[{value:"Declaring a project in the workspace",id:"declaring-a-project-in-the-workspace",level:2},{value:"Configuring a project",id:"configuring-a-project",level:2},{value:"Adding optional metadata",id:"adding-optional-metadata",level:3},{value:"Next steps",id:"next-steps",level:2}],f={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{text:"3 min",mdxType:"HeaderLabel"}),(0,r.kt)("p",null,"With a ",(0,r.kt)("a",{parentName:"p",href:"./setup-workspace"},"workspace"),", we can now house one or many ",(0,r.kt)("a",{parentName:"p",href:"./concepts/project"},"projects"),",\nwith a project being an application, library, or tool. In the end, each project will have its own\nbuild layer, personal tasks, and custom configuration."),(0,r.kt)("h2",{id:"declaring-a-project-in-the-workspace"},"Declaring a project in the workspace"),(0,r.kt)("p",null,"Although a project may exist in your repository, it's not accessible from moon until it's been\nmapped in the ",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#projects"},(0,r.kt)("inlineCode",{parentName:"a"},"projects"))," setting found in\n",(0,r.kt)("a",{parentName:"p",href:"./config/workspace"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),". When mapping a project, we require a unique name for\nthe project, and a project source location (path relative from the workspace root)."),(0,r.kt)("p",null,'Let\'s say we have a frontend web application called "client", and a backend Node.js application\ncalled "server", our ',(0,r.kt)("inlineCode",{parentName:"p"},"projects")," setting would look like the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n    client: 'apps/client'\n    server: 'apps/server'\n")),(0,r.kt)("p",null,"We can now run ",(0,r.kt)("a",{parentName:"p",href:"./commands/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon project client"))," and\n",(0,r.kt)("a",{parentName:"p",href:"./commands/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon project server"))," to display information about each project. If these\nprojects were not mapped, or were pointing to an invalid source, the command would throw an error."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#projects"},(0,r.kt)("inlineCode",{parentName:"a"},"projects"))," setting also supports a list of globs, if you'd prefer\nto not manually curate the projects list!"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," names? Enable the\n",(0,r.kt)("a",{parentName:"p",href:"./config/workspace#aliaspackagenames"},(0,r.kt)("inlineCode",{parentName:"a"},"node.aliasPackageNames"))," setting!"))),(0,r.kt)("h2",{id:"configuring-a-project"},"Configuring a project"),(0,r.kt)("p",null,"A project can be configured in 1 of 2 ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Through the ",(0,r.kt)("a",{parentName:"li",href:"./config/global-project"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," config file, which defines file groups\nand tasks that are inherited by ",(0,r.kt)("em",{parentName:"li"},"all")," projects within the workspace. Perfect for standardizing\ncommon tasks like linting, type-checking, and code formatting."),(0,r.kt)("li",{parentName:"ul"},"Through the ",(0,r.kt)("a",{parentName:"li",href:"./config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," config file, found at the root of each project, which\ndefines files groups, tasks, dependencies, and more that are unique to that project.")),(0,r.kt)("p",null,"Both config files are optional, and can be used separately or together, the choice is yours!"),(0,r.kt)("p",null,"Now let's continue with our client and server example above. If we wanted to configure both\nprojects, and define config that's also shared between the 2, we could do something like the\nfollowing:"),(0,r.kt)(o.Z,{groupId:"project-config",defaultValue:"client",values:[{label:"Client",value:"client"},{label:"Server",value:"server"},{label:"Both (inherited)",value:"inherit"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"client",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apps/client/moon.yml"',title:'"apps/client/moon.yml"'},"tasks:\n    build:\n        command:\n            - 'webpack'\n            - 'build'\n            - '--mode'\n            - 'production'\n            - '--entry'\n            - 'src/index.tsx'\n            - '--output-path'\n            - 'build'\n        inputs:\n            - 'src/**/*'\n        outputs:\n            - 'build'\n"))),(0,r.kt)(l.Z,{value:"server",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apps/server/moon.yml"',title:'"apps/server/moon.yml"'},"tasks:\n    build:\n        command: 'babel src --out-dir build'\n        inputs:\n            - 'src/**/*'\n        outputs:\n            - 'build'\n"))),(0,r.kt)(l.Z,{value:"inherit",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    format:\n        command: 'prettier --write .'\n    lint:\n        command: 'eslint --no-error-on-unmatched-pattern .'\n    test:\n        command: 'jest --passWithNoTests .'\n    typecheck:\n        command: 'tsc --build'\n")))),(0,r.kt)("h3",{id:"adding-optional-metadata"},"Adding optional metadata"),(0,r.kt)("p",null,"When utilizing moon in a large monorepo or organization, ownership becomes very important, but also\ndifficult to maintain. To combat this problem, moon supports the\n",(0,r.kt)("a",{parentName:"p",href:"./config/project#project"},(0,r.kt)("inlineCode",{parentName:"a"},"project"))," field within a project's ",(0,r.kt)("a",{parentName:"p",href:"./config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),"\nconfig."),(0,r.kt)("p",null,"This field is ",(0,r.kt)("em",{parentName:"p"},"optional")," by default, but when defined it provides metadata about the project,\nspecifically around team ownership, which developers maintain the project, where to discuss it, and\nmore!"),(0,r.kt)("p",null,"Furthermore, we also support the ",(0,r.kt)("a",{parentName:"p",href:"./config/project#type-1"},(0,r.kt)("inlineCode",{parentName:"a"},"type"))," and\n",(0,r.kt)("a",{parentName:"p",href:"./config/project#language"},(0,r.kt)("inlineCode",{parentName:"a"},"language"))," settings for a more granular breakdown of what exists in the\nrepository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"type: 'tool'\nlanguage: 'typescript'\nproject:\n  name: 'moon'\n  description: 'A repo management tool.'\n  channel: '#moon'\n  owner: 'infra.platform'\n  maintainers: ['miles.johnson']\n")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)(c.Z,{links:[{icon:"new-task",label:"Create a task",url:"./create-task"},{icon:"workspace-config",label:(0,r.kt)("span",null,"Configure ",(0,r.kt)("code",null,".moon/workspace.yml")," further"),url:"./config/workspace"},{icon:"project-config-global",label:(0,r.kt)("span",null,"Configure ",(0,r.kt)("code",null,".moon/project.yml")," further"),url:"./config/global-project"},{icon:"project-config",label:(0,r.kt)("span",null,"Configure ",(0,r.kt)("code",null,"moon.yml")," further"),url:"./config/project"},{icon:"project",label:"Learn about projects",url:"./concepts/project"}],mdxType:"NextSteps"}))}h.isMDXComponent=!0}}]);