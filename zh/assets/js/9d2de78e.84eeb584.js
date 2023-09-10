"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,I=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(I,r(r({ref:t},u),{},{components:n})):a.createElement(I,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(34334);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),o=n(67294),i=n(34334),r=n(72389),l=n(67392),s=n(7094),m=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:d,groupId:I,className:b}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const Z=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==Z&&!g.some((e=>e.value===Z)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${Z}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:M}=(0,s.U)(),[T,N]=(0,o.useState)(Z),f=[],{blockElementScrollPositionUntilNextRender:h}=(0,m.o5)();if(null!=I){const e=v[I];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const j=e=>{const t=e.currentTarget,n=f.indexOf(t),a=g[n].value;a!==T&&(h(t),N(a),null!=I&&M(I,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=f.indexOf(e.currentTarget)+1;n=f[t]??f[0];break}case"ArrowLeft":{const t=f.indexOf(e.currentTarget)-1;n=f[t]??f[f.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>f.push(e),onKeyDown:D,onFocus:j,onClick:j},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},76006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=n(83117),o=(n(67294),n(3905)),i=n(65488),r=n(85162);const l={sidebar_position:3,title:"\u4e00\u5bf9\u591a"},s=void 0,m={unversionedId:"mapping/base/association/one-to-many",id:"mapping/base/association/one-to-many",title:"\u4e00\u5bf9\u591a",description:"\u548cJPA\u4e0d\u540c\uff0cJimmer\u4e0d\u652f\u6301\u5355\u5411\u4e00\u5bf9\u591a\u5173\u8054\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u53ea\u80fd\u4f5c\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\u955c\u50cf\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u5fc5\u7136\u610f\u5473\u7740\u53cc\u5411\u5173\u8054\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/association/one-to-many.mdx",sourceDirName:"mapping/base/association",slug:"/mapping/base/association/one-to-many",permalink:"/jimmer/zh/docs/mapping/base/association/one-to-many",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/base/association/one-to-many.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4e00\u5bf9\u591a"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u5bf9\u4e00",permalink:"/jimmer/zh/docs/mapping/base/association/many-to-one"},next:{title:"\u591a\u5bf9\u591a",permalink:"/jimmer/zh/docs/mapping/base/association/many-to-many"}},u={},c=[],p={toc:c};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u548cJPA\u4e0d\u540c\uff0cJimmer\u4e0d\u652f\u6301\u5355\u5411\u4e00\u5bf9\u591a\u5173\u8054\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u53ea\u80fd\u4f5c\u4e3a\u591a\u5bf9\u4e00\u5173\u8054\u955c\u50cf\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u5bf9\u591a\u5173\u8054\u5fc5\u7136\u610f\u5473\u7740\u53cc\u5411\u5173\u8054\u3002"),(0,o.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5de6\u4fa7\uff1a\u5728",(0,o.kt)("a",{parentName:"p",href:"./many-to-one"},"\u591a\u5bf9\u4e00"),"\u4e00\u6587\u4e2d\u6211\u4eec\u8ba8\u8bba\u8fc7\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u53f3\u4fa7\uff1a\u672c\u6587\u8981\u8ba8\u8bba\u7684\u4e00\u5bf9\u591a\u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\uff0c\u5b83\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u7684\u955c\u50cf"))),(0,o.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToOne\n    @JoinColumn(name = "STORE_ID")\n    BookStore books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToOne\n    @JoinColumn(name = "STORE_ID")\n    val books: BookStore\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,o.kt)("div",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mirror",src:n(79442).Z,width:"130",height:"239"}))),(0,o.kt)("div",null,(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},'@Entity\npublic interface BookStore {\n\n    // `mappedBy`\u8868\u793a`BookStore.customer`\n    // \u662f`Book.books`\u7684\u955c\u50cf\n    // highlight-next-line\n    @OneToMany(mappedBy = "books")\n    @Nullable\n    Book customer();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},'@Entity\ninterface BookStore {\n\n    // `mappedBy`\u8868\u793a`BookStore.customer`\n    // \u662f`Book.books`\u7684\u955c\u50cf\n    // highlight-next-line\n    @OneToMany(mappedBy = "books")\n    val customer: Book?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u5173\u8054\u4ec5\u4ec5\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"@ManyToOne"),"\u5173\u8054\u7684\u955c\u50cf\uff0c\u4e0d\u5f97\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"@JoinTable"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u975enull\uff0c\u5982\u679c\u67e5\u8be2\u7236\u5bf9\u8c61\u5e76\u8981\u6c42\u6293\u53d6\u5176\u4e00\u5bf9\u591a\u5173\u8054\u5c5e\u6027\uff0c\u90a3\u4e48\u5bf9\u4e8e\u6ca1\u6709\u5bf9\u5e94\u5b50\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61\u800c\u8a00\uff0c\u8be5\u5c5e\u6027\u7684\u503c\u662f\u4e00\u4e2a\u957f\u5ea6\u4e3a0\u7684\u96c6\u5408\uff0c\u800c\u975enull")))))}d.isMDXComponent=!0},79442:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="}}]);