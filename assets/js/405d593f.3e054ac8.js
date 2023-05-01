"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1812],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(25773),l=a(27378),r=a(35318),s=a(38944);function o(e){let{children:t,count:a}=e;return l.createElement("section",{className:(0,s.Z)("sm:grid gap-3",2===a&&"grid-cols-2",3===a&&"grid-cols-3")},t)}const i={title:"Cheat sheet",toc_max_heading_level:4},p=void 0,c={unversionedId:"cheat-sheet",id:"cheat-sheet",title:"Cheat sheet",description:"Don't have time to read the docs? Here's a quick cheat sheet to get you started.",source:"@site/docs/cheat-sheet.mdx",sourceDirName:".",slug:"/cheat-sheet",permalink:"/docs/cheat-sheet",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/cheat-sheet.mdx",tags:[],version:"current",frontMatter:{title:"Cheat sheet",toc_max_heading_level:4},sidebar:"docs",previous:{title:"upgrade",permalink:"/docs/commands/upgrade"},next:{title:"Feature comparison",permalink:"/docs/comparison"}},u={},m=[{value:"Tasks",id:"tasks",level:2},{value:"Run all build and test tasks for all projects",id:"run-all-build-and-test-tasks-for-all-projects",level:4},{value:"Run all build and test tasks in a project",id:"run-all-build-and-test-tasks-in-a-project",level:4},{value:"Run all build and test tasks for closest project based on working directory",id:"run-all-build-and-test-tasks-for-closest-project-based-on-working-directory",level:4},{value:"Run a task in all projects",id:"run-a-task-in-all-projects",level:4},{value:"Run a task in all projects with a tag",id:"run-a-task-in-all-projects-with-a-tag",level:4},{value:"Run a task in a project",id:"run-a-task-in-a-project",level:4},{value:"Run multiple tasks in all projects",id:"run-multiple-tasks-in-all-projects",level:4},{value:"Run multiple tasks in any project",id:"run-multiple-tasks-in-any-project",level:4},{value:"Run a task in applications, libraries, or tools",id:"run-a-task-in-applications-libraries-or-tools",level:4},{value:"Run a task in projects of a specific language",id:"run-a-task-in-projects-of-a-specific-language",level:4},{value:"Run a task in projects matching a keyword",id:"run-a-task-in-projects-matching-a-keyword",level:4},{value:"Run a task in projects based on file path",id:"run-a-task-in-projects-based-on-file-path",level:4},{value:"Task configuration",id:"task-configuration",level:2},{value:"Disable caching",id:"disable-caching",level:4},{value:"Re-run flaky tasks",id:"re-run-flaky-tasks",level:4},{value:"Depend on tasks from parent project&#39;s dependencies",id:"depend-on-tasks-from-parent-projects-dependencies",level:4},{value:"Depend on tasks from arbitrary projects",id:"depend-on-tasks-from-arbitrary-projects",level:4},{value:"Run dependencies serially",id:"run-dependencies-serially",level:4},{value:"Run multiple watchers/servers in parallel",id:"run-multiple-watchersservers-in-parallel",level:4},{value:"Languages",id:"languages",level:2},{value:"Run system binaries available on <code>PATH</code>",id:"run-system-binaries-available-on-path",level:4},{value:"Run language binaries not supported in moon&#39;s toolchain",id:"run-language-binaries-not-supported-in-moons-toolchain",level:4},{value:"Run npm binaries (Node.js)",id:"run-npm-binaries-nodejs",level:4}],d={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Don't have time to read the docs? Here's a quick cheat sheet to get you started."),(0,r.kt)("h2",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"./concepts/task"},"tasks")," and ",(0,r.kt)("a",{parentName:"p",href:"./concepts/target"},"targets"),"."),(0,r.kt)("h4",{id:"run-all-build-and-test-tasks-for-all-projects"},"Run all build and test tasks for all projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon check --all\n")),(0,r.kt)("h4",{id:"run-all-build-and-test-tasks-in-a-project"},"Run all build and test tasks in a project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon check project\n")),(0,r.kt)("h4",{id:"run-all-build-and-test-tasks-for-closest-project-based-on-working-directory"},"Run all build and test tasks for closest project based on working directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon check\n")),(0,r.kt)("h4",{id:"run-a-task-in-all-projects"},"Run a task in all projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon run :task\n")),(0,r.kt)("h4",{id:"run-a-task-in-all-projects-with-a-tag"},"Run a task in all projects with a tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon run '#tag:task'\n# OR\nmoon run \\#tag:task\n# OR\nmoon run :task --query \"tag=tag\"\n")),(0,r.kt)("h4",{id:"run-a-task-in-a-project"},"Run a task in a project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon run project:task\n")),(0,r.kt)("h4",{id:"run-multiple-tasks-in-all-projects"},"Run multiple tasks in all projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon run :task1 :task2\n")),(0,r.kt)("h4",{id:"run-multiple-tasks-in-any-project"},"Run multiple tasks in any project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon run projecta:task1 projectb:task2\n")),(0,r.kt)("h4",{id:"run-a-task-in-applications-libraries-or-tools"},"Run a task in applications, libraries, or tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'moon run :task --query "projectType=application"\n')),(0,r.kt)("h4",{id:"run-a-task-in-projects-of-a-specific-language"},"Run a task in projects of a specific language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'moon run :task --query "language=typescript"\n')),(0,r.kt)("h4",{id:"run-a-task-in-projects-matching-a-keyword"},"Run a task in projects matching a keyword"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'moon run :task --query "project~react-*"\n')),(0,r.kt)("h4",{id:"run-a-task-in-projects-based-on-file-path"},"Run a task in projects based on file path"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'moon run :task --query "projectSource~packages/*"\n')),(0,r.kt)("h2",{id:"task-configuration"},"Task configuration"),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"./config/project#tasks"},"available options"),"."),(0,r.kt)("h4",{id:"disable-caching"},"Disable caching"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        # ...\n        options:\n            cache: false\n")),(0,r.kt)("h4",{id:"re-run-flaky-tasks"},"Re-run flaky tasks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        # ...\n        options:\n            retryCount: 3\n")),(0,r.kt)("h4",{id:"depend-on-tasks-from-parent-projects-dependencies"},"Depend on tasks from parent project's dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"# Also inferred from the language's platform\ndependsOn:\n    - 'project-a'\n    - 'project-b'\n\ntasks:\n    example:\n        # ...\n        deps:\n            - '^:build'\n")),(0,r.kt)("h4",{id:"depend-on-tasks-from-arbitrary-projects"},"Depend on tasks from arbitrary projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        # ...\n        deps:\n            - 'other-project:task'\n")),(0,r.kt)("h4",{id:"run-dependencies-serially"},"Run dependencies serially"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        # ...\n        deps:\n            - 'first'\n            - 'second'\n            - 'third'\n        options:\n            runDepsInParallel: false\n")),(0,r.kt)("h4",{id:"run-multiple-watchersservers-in-parallel"},"Run multiple watchers/servers in parallel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        command: 'noop'\n        deps:\n            - 'app:watch'\n            - 'backend:start'\n            - 'tailwind:watch'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'All dependencies must resolve to the "same level" in the\n',(0,r.kt)("a",{parentName:"p",href:"./how-it-works/dep-graph"},"dependency graph")," for this to work. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"moon dep-graph <target>")," to\nverify.")),(0,r.kt)("h2",{id:"languages"},"Languages"),(0,r.kt)("h4",{id:"run-system-binaries-available-on-path"},"Run system binaries available on ",(0,r.kt)("inlineCode",{parentName:"h4"},"PATH")),(0,r.kt)(o,{count:2,mdxType:"Columns"},(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"language: 'bash' # batch, etc\n\ntasks:\n    example:\n        command: 'printenv'\n"))),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        command: 'printenv'\n        platform: 'system'\n")))),(0,r.kt)("h4",{id:"run-language-binaries-not-supported-in-moons-toolchain"},"Run language binaries not supported in moon's toolchain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"language: 'ruby'\n\ntasks:\n    example:\n        command: 'rubocop'\n        platform: 'system'\n")),(0,r.kt)("h4",{id:"run-npm-binaries-nodejs"},"Run npm binaries (Node.js)"),(0,r.kt)(o,{count:2,mdxType:"Columns"},(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"language: 'javascript' # typescript\n\ntasks:\n    example:\n        command: 'eslint'\n"))),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"tasks:\n    example:\n        command: 'eslint'\n        platform: 'node'\n")))))}k.isMDXComponent=!0}}]);