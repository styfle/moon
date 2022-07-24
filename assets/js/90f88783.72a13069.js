"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3481],{6243:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7378),a=n(8944),i="tabItem_lLGn";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},637:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(5773),a=n(7378),i=n(6457),l=n(784),o=n(9947),s=n(3457),u=n(8944),p="tabList_lSCs",c="tabItem_WhCL";function d(e){var t,n,i,d=e.lazy,m=e.block,f=e.defaultValue,v=e.values,g=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.U)(),x=N.tabGroupChoices,C=N.setTabGroupChoices,E=(0,a.useState)(w),Z=E[0],T=E[1],j=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var I=x[g];null!=I&&I!==Z&&b.some((function(e){return e.value===I}))&&T(I)}var D=function(e){var t=e.currentTarget,n=j.indexOf(t),r=b[n].value;r!==Z&&(P(t),T(r),null!=g&&C(g,r))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},h)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:function(e){return j.push(e)},onKeyDown:_,onFocus:D,onClick:D},i,{className:(0,u.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":Z===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(k.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6642:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7378),a=n(7518),i=n(6243),l=n(637);function o(e,t,n){var r=e.package?"yarn workspace "+e.package+" add ":"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),n&&t&&!e.package&&(r+="-W "),r+=e.dep}function s(e,t){var n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+="--filter "+e.package+" ":t&&(n+="-w "),n+=e.dep}function u(e){var t=o(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=o(e,!0,!0),n+=s(e,!0)),r.createElement(l.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},r.createElement(i.Z,{value:"yarn"},r.createElement(a.Z,{language:"shell"},o(e,!1,!1))),r.createElement(i.Z,{value:"yarn1"},r.createElement(a.Z,{language:"shell"},t)),r.createElement(i.Z,{value:"npm"},r.createElement(a.Z,{language:"shell"},function(e){var t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+="--workspace "+e.package+" "),t+e.dep}(e))),r.createElement(i.Z,{value:"pnpm"},r.createElement(a.Z,{language:"shell"},n)))}},9123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),l=n(6642),o=["components"],s={title:"Prettier example",sidebar_label:"Prettier"},u=void 0,p={unversionedId:"guides/examples/prettier",id:"guides/examples/prettier",title:"Prettier example",description:"Prettier has been prototyped in our",source:"@site/docs/guides/examples/prettier.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/prettier",permalink:"/docs/guides/examples/prettier",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/prettier.mdx",tags:[],version:"current",frontMatter:{title:"Prettier example",sidebar_label:"Prettier"},sidebar:"docs",previous:{title:"Packemon",permalink:"/docs/guides/examples/packemon"},next:{title:"React",permalink:"/docs/guides/examples/react"}},c={},d=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use <code>--write</code>?",id:"how-to-use---write",level:3}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prettier has been prototyped in our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/examples/blob/master/.moon/project.yml#L41"},"examples repository"),",\ncheck it out!")),(0,i.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," into moon."),(0,i.kt)("p",null,"Begin by installing ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," in your root. We suggest using the same version across the entire\nrepository."),(0,i.kt)(l.Z,{dep:"prettier",dev:!0,mdxType:"AddDepsTabs"}),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Since code formatting is a universal workflow, add a ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," task to\n",(0,i.kt)("a",{parentName:"p",href:"../../config/global-project"},(0,i.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," with the following parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"tasks:\n    format:\n        command: 'prettier'\n        args:\n            # Use the same config for the entire repo\n            - '--config'\n            - '@in(4)'\n            # Use the same ignore patterns as well\n            - '--ignore-path'\n            - '@in(3)'\n            # Fail for unformatted code\n            - '--check'\n            # Run in current dir\n            - '.'\n        inputs:\n            # Source and test files\n            - 'src/**/*'\n            - 'tests/**/*'\n            # Config and other files\n            - '**/*.{md,mdx,yml,yaml,json}'\n            # Root configs, any format\n            - '/.prettierignore'\n            - '/.prettierrc.*'\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"root-level"},"Root-level"),(0,i.kt)("p",null,"The root-level Prettier config is ",(0,i.kt)("em",{parentName:"p"},"required"),", as it defines conventions and standards to apply to\nthe entire repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".prettierrc.js"',title:'".prettierrc.js"'},"module.exports = {\n    arrowParens: 'always',\n    semi: true,\n    singleQuote: true,\n    tabWidth: 2,\n    trailingComma: 'all',\n    useTabs: true,\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".prettierignore")," file must also be defined at the root, as\n",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/ignore.html#ignoring-files-prettierignore"},"only 1 ignore file")," can\nexist in a repository. We ensure this ignore file is used by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-path")," above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".prettierignore"',title:'".prettierignore"'},"node_modules/\n*.min.js\n*.map\n*.snap\n")),(0,i.kt)("h3",{id:"project-level"},"Project-level"),(0,i.kt)("p",null,"We suggest ",(0,i.kt)("em",{parentName:"p"},"against")," project-level configurations, as the entire repository should be formatted\nusing the same standards. However, if you're migrating code and need an escape hatch,\n",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/configuration.html#configuration-overrides"},"overrides in the root")," will\nwork."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"how-to-use---write"},"How to use ",(0,i.kt)("inlineCode",{parentName:"h3"},"--write"),"?"),(0,i.kt)("p",null,"Unfortunately, this isn't currently possible, as the ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," binary itself requires either the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--check")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--write")," options, and since we're configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"--check")," in the task above, that takes\nprecedence. This is also the preferred pattern as checks will run (and fail) in CI."),(0,i.kt)("p",null,"To work around this limitation, we suggest the following alternatives:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure your editor to run Prettier on save."),(0,i.kt)("li",{parentName:"ul"},"Define another task to write the formatted code, like ",(0,i.kt)("inlineCode",{parentName:"li"},"format-write"),".")))}f.isMDXComponent=!0}}]);