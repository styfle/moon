"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7378),r=n(9619);function a(e){let{header:t,updated:n,version:a}=e;return o.createElement(r.Z,{text:"v"+a,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7378),r=n(8944),a=n(8896);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){let{className:t,icon:n,text:s,variant:l}=e;return o.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?i[l]:"bg-gray-100 text-gray-800",t)},n&&o.createElement(a.Z,{icon:n,className:"mr-1"}),s)}},9546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(5773),r=(n(7378),n(5318)),a=n(9022);const i={title:".moon/project.yml"},s=void 0,l={unversionedId:"config/global-project",id:"config/global-project",title:".moon/project.yml",description:"The .moon/project.yml file configures file groups and tasks that are inherited by every project",source:"@site/docs/config/global-project.mdx",sourceDirName:"config",slug:"/config/global-project",permalink:"/docs/config/global-project",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/global-project.mdx",tags:[],version:"current",frontMatter:{title:".moon/project.yml"},sidebar:"docs",previous:{title:".moon/workspace.yml",permalink:"/docs/config/workspace"},next:{title:"moon.yml",permalink:"/docs/config/project"}},c={},p=[{value:'<code>extends</code><VersionLabel version="0.4" />',id:"extends",level:2},{value:"<code>fileGroups</code>",id:"filegroups",level:2},{value:"<code>tasks</code>",id:"tasks",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/project.yml")," file configures file groups and tasks that are inherited by ",(0,r.kt)("em",{parentName:"p"},"every")," project\nin the workspace. Projects can override or merge with these settings within their respective\n",(0,r.kt)("a",{parentName:"p",href:"./project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,r.kt)("h2",{id:"extends"},(0,r.kt)("inlineCode",{parentName:"h2"},"extends"),(0,r.kt)(a.Z,{version:"0.4",mdxType:"VersionLabel"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"string"))),(0,r.kt)("p",null,"Defines an external ",(0,r.kt)("inlineCode",{parentName:"p"},".moon/project.yml")," to extend and inherit settings from. Perfect for reusability\nand sharing configuration across repositories and projects. When defined, this setting must be an\nHTTPS URL ",(0,r.kt)("em",{parentName:"p"},"or")," relative file system path that points to a valid YAML document!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',title:'".moon/workspace.yml"',"{1}":!0},"extends: 'https://raw.githubusercontent.com/organization/repository/master/.moon/project.yml'\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For map-based settings, ",(0,r.kt)("inlineCode",{parentName:"p"},"fileGroups")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks"),", entries from both the extended configuration and\nlocal configuration are merged into a new map, with the values of the local taking precedence. Map\nvalues ",(0,r.kt)("em",{parentName:"p"},"are not")," deep merged!"))),(0,r.kt)("h2",{id:"filegroups"},(0,r.kt)("inlineCode",{parentName:"h2"},"fileGroups")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, string[]>"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information on file group configuration, refer to the\n",(0,r.kt)("a",{parentName:"p",href:"./project#filegroups"},(0,r.kt)("inlineCode",{parentName:"a"},"fileGroups"))," section in the ",(0,r.kt)("a",{parentName:"p",href:"./project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," doc.")),(0,r.kt)("p",null,"Defines ",(0,r.kt)("a",{parentName:"p",href:"../concepts/file-group"},"file groups")," that will be inherited by all projects, and also\nenables enforcement of organizational patterns and file locations. For example, encourage all\nprojects to place source files in a ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder, and all test files in ",(0,r.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"fileGroups:\n  configs:\n    - '*.config.{js,cjs,mjs}'\n    - '*.json'\n  sources:\n    - 'src/**/*'\n    - 'types/**/*'\n  tests:\n    - 'tests/**/*'\n    - '**/__tests__/**/*'\n  assets:\n    - 'assets/**/*'\n    - 'images/**/*'\n    - 'static/**/*'\n    - '**/*.{scss,css}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"File paths and globs used within a file group are relative from the inherited project's root, and\nnot the workspace.")),(0,r.kt)("h2",{id:"tasks"},(0,r.kt)("inlineCode",{parentName:"h2"},"tasks")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Record<string, TaskConfig>"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information on task configuration, refer to the ",(0,r.kt)("a",{parentName:"p",href:"./project#tasks"},(0,r.kt)("inlineCode",{parentName:"a"},"tasks"))," section in the\n",(0,r.kt)("a",{parentName:"p",href:"./project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," doc.")),(0,r.kt)("p",null,"As mentioned in the link above, ",(0,r.kt)("a",{parentName:"p",href:"../concepts/task"},"tasks")," are actions that are ran within the\ncontext of a project, and commonly wrap an npm binary or system command. For most workspaces, every\nproject ",(0,r.kt)("em",{parentName:"p"},"should")," have linting, type-checking, testing, code formatting, so on and so forth. To\nreduce the amount of boilerplate that ",(0,r.kt)("em",{parentName:"p"},"every")," project would require, this setting offers the ability\nto define tasks that are inherited by all projects within the workspace, but can also be overridden\nper project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n  format:\n    command: 'prettier --check .'\n\n  lint:\n    command: 'eslint --no-error-on-unmatched-pattern .'\n\n  test:\n    command: 'jest --passWithNoTests'\n\n  typecheck:\n    command: 'tsc --build'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relative file paths and globs used within a task are relative from the inherited project's root,\nand not the workspace.")))}d.isMDXComponent=!0}}]);