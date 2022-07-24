"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8488],{6243:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(7378),r=t(8944),l="tabItem_lLGn";function u(e){var a=e.children,t=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:t},a)}},637:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(5773),r=t(7378),l=t(6457),u=t(784),i=t(9947),o=t(3457),s=t(8944),c="tabList_lSCs",p="tabItem_WhCL";function d(e){var a,t,l,d=e.lazy,m=e.block,v=e.defaultValue,f=e.values,h=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:g.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,u.l)(k,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===v?v:null!=(a=null!=v?v:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=g[0])?void 0:l.props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),E=x.tabGroupChoices,Z=x.setTabGroupChoices,N=(0,r.useState)(w),T=N[0],C=N[1],R=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=E[h];null!=D&&D!==T&&k.some((function(e){return e.value===D}))&&C(D)}var _=function(e){var a=e.currentTarget,t=R.indexOf(a),n=k[t].value;n!==T&&(I(a),C(n),null!=h&&Z(h,n))},j=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=R.indexOf(e.currentTarget)+1;t=R[n]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;t=R[r]||R[R.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},k.map((function(e){var a=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return R.push(e)},onKeyDown:j,onFocus:_,onClick:_},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function m(e){var a=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},6642:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7378),r=t(7518),l=t(6243),u=t(637);function i(e,a,t){var n=e.package?"yarn workspace "+e.package+" add ":"yarn add ";return e.dev?n+="--dev ":e.peer&&(n+="--peer "),t&&a&&!e.package&&(n+="-W "),n+=e.dep}function o(e,a){var t="pnpm add ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package?t+="--filter "+e.package+" ":a&&(t+="-w "),t+=e.dep}function s(e){var a=i(e,!1,!0),t=o(e,!1);return e.package||(a+="\n\n# If using workspaces\n",t+="\n\n# If using workspaces\n",a+=i(e,!0,!0),t+=o(e,!0)),n.createElement(u.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},n.createElement(l.Z,{value:"yarn"},n.createElement(r.Z,{language:"shell"},i(e,!1,!1))),n.createElement(l.Z,{value:"yarn1"},n.createElement(r.Z,{language:"shell"},a)),n.createElement(l.Z,{value:"npm"},n.createElement(r.Z,{language:"shell"},function(e){var a="npm install ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package&&(a+="--workspace "+e.package+" "),a+e.dep}(e))),n.createElement(l.Z,{value:"pnpm"},n.createElement(r.Z,{language:"shell"},t)))}},4273:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=t(5773),r=t(808),l=(t(7378),t(5318)),u=t(6642),i=["components"],o={title:"React example",sidebar_label:"React"},s=void 0,c={unversionedId:"guides/examples/react",id:"guides/examples/react",title:"React example",description:"React is an application or library concern, and not a build system one, since the bundling of React",source:"@site/docs/guides/examples/react.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/react",permalink:"/docs/guides/examples/react",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/react.mdx",tags:[],version:"current",frontMatter:{title:"React example",sidebar_label:"React"},sidebar:"docs",previous:{title:"Prettier",permalink:"/docs/guides/examples/prettier"},next:{title:"TypeScript",permalink:"/docs/guides/examples/typescript"}},p={},d=[],m={toc:d};function v(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"React is an application or library concern, and not a build system one, since the bundling of React\nis abstracted away through another tool like webpack. Because of this, moon has no guidelines around\nutilizing React directly. You can use React however you wish!"),(0,l.kt)("p",null,"However, with that being said, we do suggest the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"react")," and related dependencies to each project, not the root. This includes ",(0,l.kt)("inlineCode",{parentName:"li"},"@types/react"),"\nas well. This will ensure accurate ",(0,l.kt)("a",{parentName:"li",href:"../../concepts/cache#hashing"},"hashing"),".")),(0,l.kt)(u.Z,{dep:"react",package:"<project>",mdxType:"AddDepsTabs"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure Babel with the ",(0,l.kt)("inlineCode",{parentName:"li"},"@babel/preset-react")," preset."),(0,l.kt)("li",{parentName:"ul"},"Configure ",(0,l.kt)("a",{parentName:"li",href:"./typescript"},"TypeScript")," compiler options with ",(0,l.kt)("inlineCode",{parentName:"li"},'"jsx": "react-jsx"'),".")))}v.isMDXComponent=!0}}]);