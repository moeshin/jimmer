"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(83117),r=a(67294),i=a(34334),o=a(72389),s=a(67392),l=a(7094),c=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:p,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[N,j]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&j(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==N&&(O(t),j(n),null!=h&&w(h,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},b)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},51342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=a(83117),r=(a(67294),a(3905)),i=a(65488),o=a(85162);const s={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multi-thread safety, which is easy to understand and needs no explanation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For collection containers that rely on hashCode, such as Set and Map, object immutability is desperately needed."),(0,r.kt)("p",{parentName:"li"},"Once mutable objects are held by hashCode sensitive collection containers like Set or Map ",(0,r.kt)("em",{parentName:"p"},"(as Key)"),", developers must be very careful to ensure that the data shared by these containers is not modified. If a mistake is accidentally made, it usually takes debug tracking to find the problem, which often wastes time and affects efficiency. ",(0,r.kt)("em",{parentName:"p"},"(In fact, hashCode sensitive collection containers holding mutable objects is a common behavior, and it can also be said that most Java code is not strict, developers just avoid this problem.)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In actual development, there are some other situations where objects are held for a long time. Although not dependent on hashCode, problems can also arise from holding objects for a long time, such as:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using data persisted in WebSession for a long time")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using first-level cache, that is, using process-local cache in JVM memory to persist some data for a long time"))),(0,r.kt)("p",{parentName:"li"},"Careful developers certainly do not want references in WebSession or Cache that persist data for a long time to share data structures with references leaked to user code, which would lead to uncontrollable mutual interference."),(0,r.kt)("p",{parentName:"li"},"Therefore, when performing read/write operations on data structures persisted in WebSession or JVM internal Cache, careful developers will copy mutable data structures once before saving or returning them. Among them, copying when writing is still acceptable, but copying every time when reading is expensive. It can be seen that"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using mutable objects, whether it is necessary to copy objects to ensure necessary security depends on the developer's ability to foresee risks. This requires developers to have some experience and be cautious by nature. However, even if the risks are foreseen, there is no objective standard for the solution. Being too strict will lead to too many unnecessary copies and waste, and being too loose will lead to insufficient copying and bugs ",(0,r.kt)("em",{parentName:"p"},"(the more team members, the easier to make mistakes)"),". Moreover, for data of a certain volume, there are often disputes within the team about the strictness of this protection mechanism, which is highly subjective.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Using immutable objects, the data structure is only copied in part when it is "modified" ',(0,r.kt)("em",{parentName:"p"},'(Here the "modified" is pseudo-modification, not real modification of the current data, which will be discussed in detail in subsequent documents. Jimmer/Immer internally optimizes this: the modified object will be copied, and from its parent object to the root node, all ancestor nodes will also be copied, while all other unchanged branches still share and reuse the original)')," to get a new aggregate root reference, and simply share the original reference in all other cases. It has a very strict, indisputable objectivity."))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Undoubtedly, development based on objective laws is bound to be superior to development based on subjective feelings, which is very important.")))))}l.isMDXComponent=!0;const c={sidebar_position:1,title:"Reason"},u=void 0,d={unversionedId:"object/immutable/reason",id:"object/immutable/reason",title:"Reason",description:"Unlike other ORMs, Jimmer uses immutable objects as entity objects.",source:"@site/docs/object/immutable/reason.mdx",sourceDirName:"object/immutable",slug:"/object/immutable/reason",permalink:"/jimmer/docs/object/immutable/reason",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/object/immutable/reason.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Reason"},sidebar:"tutorialSidebar",previous:{title:"Immutability",permalink:"/jimmer/docs/object/immutable/"},next:{title:"Current Situation",permalink:"/jimmer/docs/object/immutable/current-situation"}},m={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Forbid circular references",id:"forbid-circular-references",level:3},{value:"Demo",id:"demo",level:3},{value:"Other benefits",id:"other-benefits",level:2}],h={toc:p};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unlike other ORMs, Jimmer uses immutable objects as entity objects."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("h3",{id:"forbid-circular-references"},"Forbid circular references"),(0,r.kt)("p",null,"ORMs are often accompanied by a very headache problem: circular references."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data structures containing circular references cannot be simply JSON serialized, which is a fatal flaw for HTTP API design.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In fact, this problem can be solved, for example, advanced features of JSON serialization libraries ",(0,r.kt)("em",{parentName:"p"},"(such as ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/FasterXML/jackson"},"Jackson"),")")," can serialize data structures containing circular references. But this is meaningless, because the serialized result contains special extended content, which cannot be understood by client programming languages."))),(0,r.kt)("p",null,"As an ORM, Jimmer of course allows users to define bidirectional associations between entity types, which is a powerful capability of ORM."),(0,r.kt)("p",null,"However, when instantiating objects, once the developer has determined the type of the aggregate root, the data structure created can only be a unidirectional tree with the aggregate root object as the starting point."),(0,r.kt)("p",null,"That is, bidirectional associations can be defined between entity types, keeping the possibilities of both directions. When instantiating objects, choose to use one of the association directions according to business characteristics."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jimmer entity-related data structures never contain circular references, so they can be directly involved in JSON serialization and then transmitted via HTTP protocols, while ensuring the simplicity of HTTP transmitted data to ensure that any programming language can understand."),(0,r.kt)("p",{parentName:"admonition"},"This brings great simplification to application development.")),(0,r.kt)("h3",{id:"demo"},"Demo"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode aggregateRoot = TreeNodeDraft.$\n    .produce(aggregateRootDraft ->\n        aggregateRootDraft\n            .setName("Aggregate root") \n            .addIntoChildNodes(childDraft ->\n                childDraft\n                    .setName("Child")\n                    // Throw CircularReferenceException\n                    // highlight-next-line \n                    .setParent(aggregateRootDraft)\n            )\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aggregateRoot = new(TreeNode::class).by {\n\n    val that = this\n\n    name = "Aggregate root"\n    childNodes().addBy {\n        name = "Child"\n        // Throw CircularReferenceException\n        // highlight-next-line\n        parent = that \n    }\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The above code uses an interface called ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),", which is the interface type automatically generated by Jimmer based on the user-defined type ",(0,r.kt)("inlineCode",{parentName:"p"},"TreeNode"),"."),(0,r.kt)("p",{parentName:"admonition"},"Readers can ignore this auto-generated interface for now, later documentation ",(0,r.kt)("a",{parentName:"p",href:"../draft"},"Draft")," will introduce it.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This code will cause an exception: org.babyfish.jimmer.CircularReferenceException."),(0,r.kt)("p",{parentName:"admonition"},"Although developers can define bidirectional associations between entity types, they cannot create bidirectional associations between entity objects. This behavior is explicitly prohibited."),(0,r.kt)("p",{parentName:"admonition"},"It can be seen that Jimmer prevents users from creating data structures with circular references."),(0,r.kt)("p",{parentName:"admonition"},"Jimmer objects are immutable objects. Users can neither build circular references when creating objects, nor form circular references through subsequent modifications. This quality will be preserved forever.")),(0,r.kt)("h2",{id:"other-benefits"},"Other benefits"),(0,r.kt)("p",null,"In addition to ensuring that there are absolutely no circular references between entity objects:"),(0,r.kt)(l,{mdxType:"ImmutableOtherBenefit"}))}b.isMDXComponent=!0}}]);