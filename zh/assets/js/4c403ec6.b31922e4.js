"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8991],{31536:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(80102),l=n(83117),o=n(67294),r=n(10209),i=n(59766),p=n(94780),u=n(34867);const c=(0,n(70182).ZP)();var m=n(65149),s=n(39707),d=n(66500),k=n(95408),v=n(98700),g=n(85893);const I=["component","direction","spacing","divider","children","className","useFlexGap"],h=(0,d.Z)(),N=c("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:h})}function y(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,l)=>(e.push(a),l<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${l}`})),e)),[])}const Z=({ownerState:e,theme:t})=>{let n=(0,l.Z)({display:"flex",flexDirection:"column"},(0,k.k9)({theme:t},(0,k.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,v.hB)(t),l=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),o=(0,k.P$)({values:e.direction,base:l}),r=(0,k.P$)({values:e.spacing,base:l});"object"==typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const a=t>0?o[n[t-1]]:"column";o[e]=a}}));const p=(t,n)=>{return e.useFlexGap?{gap:(0,v.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${l=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[l]}`]:(0,v.NA)(a,t)}};var l};n=(0,i.Z)(n,(0,k.k9)({theme:t},r,p))}return n=(0,k.dt)(t.breakpoints,n),n};var E=n(90948),C=n(71657);const P=function(e={}){const{createStyledComponent:t=N,useThemeProps:n=b,componentName:i="MuiStack"}=e,c=t(Z),m=o.forwardRef((function(e,t){const o=n(e),m=(0,s.Z)(o),{component:d="div",direction:k="column",spacing:v=0,divider:h,children:N,className:b,useFlexGap:Z=!1}=m,E=(0,a.Z)(m,I),C={direction:k,spacing:v,useFlexGap:Z},P=(0,p.Z)({root:["root"]},(e=>(0,u.Z)(i,e)),{});return(0,g.jsx)(c,(0,l.Z)({as:d,ownerState:C,ref:t,className:(0,r.Z)(P.root,b)},E,{children:h?y(N,h):N}))}));return m}({createStyledComponent:(0,E.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,C.Z)({props:e,name:"MuiStack"})}),T=P},86153:(e,t,n)=>{n.d(t,{_:()=>f});var a=n(67294),l=n(87357),o=n(83321),r=n(61903),i=n(23599),p=n(86886),u=n(67720),c=n(90629),m=n(7906),s=n(295),d=n(53252),k=n(72882),v=n(53184),g=n(53816),I=n(24661),h=n(96540),N=n(93946),b=n(41733),y=n(50657),Z=n(31425),E=n(6514),C=n(58951),P=n(37645),T=n(52263),B=n(59457);const f=(0,a.memo)((()=>{const{i18n:e}=(0,T.Z)(),t=(0,a.useMemo)((()=>"zh"==e.currentLocale||"zh_cn"==e.currentLocale||"zh_CN"==e.currentLocale),[e.currentLocale]),n=(0,a.useMemo)((()=>t?x:M),[t]),f=(0,a.useMemo)((()=>{const e=new Map;for(const t of n)e.set(t.id,t);return e}),[n]),O=(0,a.useMemo)((()=>("zh"==e.currentLocale||"zh_cn"==e.currentLocale||e.currentLocale,S)),[e.currentLocale]),R=(0,a.useMemo)((()=>{const e=new Map;for(const t of O)e.set(t.id,t);return e}),[O]),[_,w]=(0,B.x)((()=>({userId:1,province:f.get(1).province,city:f.get(1).city,address:f.get(1).address,items:[{__rowId:1,productId:1,name:R.get(1).name,quantity:2},{__rowId:2,productId:10,name:R.get(10).name,quantity:1}]}))),A=(0,a.useMemo)((()=>Math.max(..._.items.map((e=>e.__rowId)))+1),[_]),L=(0,a.useCallback)((e=>{const t=f.get(parseInt(e.target.value));void 0!==t&&w((e=>{e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[w,f]),D=(0,a.useCallback)((e=>{w((t=>{t.province=e.target.value}))}),[w]),z=(0,a.useCallback)((e=>{w((t=>{t.city=e.target.value}))}),[w]),q=(0,a.useCallback)((e=>{w((t=>{t.address=e.target.value}))}),[w]),J=(0,a.useCallback)(((e,t)=>{w((n=>{for(const a of n.items)if(a.__rowId===t){a.productId=parseInt(e.target.value),j(n);break}}))}),[w]),U=(0,a.useCallback)(((e,t)=>{w((n=>{for(const a of n.items)if(a.__rowId===t){a.quantity=parseInt(e.target.value),j(n);break}}))}),[w]),K=(0,a.useCallback)((e=>{w((t=>{for(let n=t.items.length-1;n>=0;--n)if(t.items[n].__rowId===e){t.items.splice(n,1);break}}))}),[w]),G=(0,a.useCallback)((()=>{w((e=>{e.items.push({__rowId:A,quantity:1})}))}),[w,A]),[F,V]=(0,a.useState)(!1),W=(0,a.useCallback)((()=>{V(!0)}),[]),$=(0,a.useCallback)((()=>{V(!1)}),[]);return a.createElement(c.Z,{elevation:3,style:{padding:"1.5rem"}},a.createElement(l.Z,{component:"form",noValidate:!0,autoComplete:"off"},a.createElement(p.ZP,{container:!0,spacing:2},a.createElement(p.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,select:!0,label:t?"\u8d2d\u4e70\u4eba":"Purchaser",value:_.userId,onChange:L},n.map((e=>a.createElement(i.Z,{key:e.id,value:e.id},e.nickName))))),a.createElement(p.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u7701\u4efd":"Province",value:_.province,onChange:D})),a.createElement(p.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u57ce\u5e02":"City",value:_.city,onChange:z})),a.createElement(p.ZP,{item:!0,xs:12},a.createElement(r.Z,{fullWidth:!0,label:t?"\u5730\u5740":"Address",value:_.address,onChange:q})),a.createElement(p.ZP,{item:!0,xs:12},a.createElement(u.Z,{textAlign:"left"},"\u8ba2\u5355\u660e\u7ec6"),a.createElement(k.Z,{component:c.Z},a.createElement(m.Z,{size:"small"},a.createElement(v.Z,null,a.createElement(g.Z,null,a.createElement(d.Z,null,t?"\u5546\u54c1":"Commodity"),a.createElement(d.Z,null,t?"\u6570\u91cf":"Quantity"),a.createElement(d.Z,null,t?"\u5355\u4ef7":"Unit price"),a.createElement(d.Z,null,t?"\u660e\u7ec6\u4ef7":"Item price"),a.createElement(d.Z,null,t?"\u5220\u9664":"Delete"))),a.createElement(s.Z,null,_.items.map((e=>{const t=void 0!==e.productId?R.get(e.productId):void 0;return a.createElement(g.Z,{key:e.__rowId},a.createElement(d.Z,null,a.createElement(r.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:t=>{J(t,e.__rowId)}},O.map((e=>a.createElement(i.Z,{key:e.id,value:e.id},e.name))))),a.createElement(d.Z,null,a.createElement(r.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:t=>{U(t,e.__rowId)}})),a.createElement(d.Z,null,null==t?void 0:t.price),a.createElement(d.Z,null,void 0!==t&&t.price*e.quantity),a.createElement(d.Z,null,a.createElement(N.Z,{onClick:()=>K(e.__rowId)},a.createElement(b.Z,null))))}))),a.createElement(I.Z,null,a.createElement(g.Z,null,a.createElement(d.Z,{colSpan:5},a.createElement(o.Z,{variant:"outlined",onClick:G},a.createElement(h.Z,null),t?"\u6dfb\u52a0":"Add"))))))),a.createElement(p.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",_.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>R.get(e.productId).price*e.quantity)).reduce(((e,t)=>e+t),0)),a.createElement(p.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"contained",onClick:W},t?"\u63d0\u4ea4":"Submit")))),a.createElement(y.Z,{open:F,onClose:$},a.createElement(P.Z,null,t?"\u4fe1\u606f":"Info"),a.createElement(E.Z,null,a.createElement(C.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),a.createElement(Z.Z,null,a.createElement(o.Z,{onClick:$},t?"\u5173\u95ed":"Close"))))})),x=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],M=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],S=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function j(e){const t=e.items,n=new Map;for(let a=0;a<t.length;a++){const e=t[a];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){t.splice(a--,1);continue}if(void 0===e.productId)continue;const l=n.get(e.productId);void 0===l?n.set(e.productId,e):(l.quantity+=e.quantity,t.splice(a--,1))}}},20036:(e,t,n)=>{n.d(t,{k:()=>h});var a=n(52263),l=n(94054),o=n(33841),r=n(23599),i=n(90629),p=n(43246),u=n(31536),c=n(61903),m=n(50657),s=n(37645),d=n(6514),k=n(31425),v=n(58951),g=n(83321),I=n(67294);const h=(0,I.memo)((()=>{const[e,t]=(0,I.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,I.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),h=(0,I.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),N=(0,I.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),b=(0,I.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),y=(0,I.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:Z}=(0,a.Z)(),E=(0,I.useMemo)((()=>"zh"==Z.currentLocale||"zh_cn"==Z.currentLocale||"zh_CN"==Z.currentLocale),[Z.currentLocale]),[C,P]=(0,I.useState)(!1),T=(0,I.useCallback)((()=>{P(!0)}),[]),B=(0,I.useCallback)((()=>{P(!1)}),[]);return I.createElement(i.Z,{elevation:3,style:{padding:"1.5rem",width:500}},I.createElement(u.Z,{spacing:2},I.createElement("h1",null,"Book Form"),I.createElement(c.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),I.createElement(c.Z,{label:"Edition",type:"number",value:e.edition,onChange:h}),I.createElement(c.Z,{label:"Price",type:"number",value:e.price,onChange:N}),I.createElement(l.Z,{fullWidth:!0},I.createElement(o.Z,{id:"store-select-label"},"Store"),I.createElement(p.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:b},I.createElement(r.Z,{value:-1},"--NONE--"),I.createElement(r.Z,{value:1},"O'REILLY"),I.createElement(r.Z,{value:2},"MANNING"))),I.createElement(l.Z,{fullWidth:!0},I.createElement(o.Z,{id:"author-multi-select-label"},"Authors"),I.createElement(p.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:y},I.createElement(r.Z,{value:1},"Eve Procello"),I.createElement(r.Z,{value:2},"Alex Banks"),I.createElement(r.Z,{value:3},"Dan Vanderkam"),I.createElement(r.Z,{value:4},"Boris Cherny"),I.createElement(r.Z,{value:5},"Samer Buna"))),I.createElement(l.Z,null,I.createElement(g.Z,{onClick:T,variant:"contained"},"\u63d0\u4ea4"))),I.createElement(m.Z,{open:C,onClose:B},I.createElement(s.Z,null,E?"\u4fe1\u606f":"Info"),I.createElement(d.Z,null,I.createElement(v.Z,null,E?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),I.createElement(k.Z,null,I.createElement(g.Z,{onClick:B},"\u5173\u95ed"))))}))},32102:(e,t,n)=>{n.d(t,{s:()=>v});var a=n(83117),l=n(67294),o=n(42293),r=n(50657),i=n(6514),p=n(54776),u=n(10155),c=n(15861),m=n(93946),s=n(9137),d=n(61274),k=n(50594);const v=(0,l.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,onClose:p,children:v}=e;const[I,h]=(0,l.useState)(n),N=(0,l.useCallback)((()=>{h((e=>!e))}),[]);return l.createElement(r.Z,{open:t,onClose:p,fullScreen:I,TransitionComponent:g,maxWidth:"md"},l.createElement(o.Z,{sx:{position:"relative"}},l.createElement(u.Z,null,l.createElement(c.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(m.Z,{onClick:N,style:{color:"white"}},I?l.createElement(d.Z,null):l.createElement(s.Z,null)),l.createElement(m.Z,{"aria-label":"close",onClick:p,style:{color:"white"}},l.createElement(k.Z,null)))),l.createElement(i.Z,null,v))})),g=l.forwardRef((function(e,t){return l.createElement(p.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>r});var a=n(67294),l=n(83321),o=n(32102);const r=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:r=t,variant:i="outlined",children:p}=e;const[u,c]=(0,a.useState)(!1),m=(0,a.useCallback)((e=>{c(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),s=(0,a.useCallback)((()=>{c(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:m,variant:i,size:"outlined"==i?"small":"medium"},t),a.createElement(o.s,{open:u,onClose:s,title:r,fullScreen:n},p))}))},96906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>k});var a=n(83117),l=(n(67294),n(3905)),o=n(65488),r=n(85162),i=n(20036),p=n(86153),u=n(39511);const c={sidebar_position:4,title:"\u4f7f\u7528MapStruct"},m=void 0,s={unversionedId:"mutation/save-command/input-dto/mapstruct",id:"mutation/save-command/input-dto/mapstruct",title:"\u4f7f\u7528MapStruct",description:"\u4e0d\u63a8\u8350\u5728Kotlin\u4e0b\u4f7f\u7528\u6b64\u65b9\u6848\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/mapstruct.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/mapstruct",permalink:"/jimmer/zh/docs/mutation/save-command/input-dto/mapstruct",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/input-dto/mapstruct.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4f7f\u7528MapStruct"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528DTO\u8bed\u8a00",permalink:"/jimmer/zh/docs/mutation/save-command/input-dto/dto-lang"},next:{title:"\u5220\u9664\u6307\u4ee4",permalink:"/jimmer/zh/docs/mutation/delete-command"}},d={},k=[{value:"\u5b9a\u4e49Input DTO",id:"\u5b9a\u4e49input-dto",level:2},{value:"Mapstruct\u8f6c\u5316\u5668",id:"mapstruct\u8f6c\u5316\u5668",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"\u6539\u8fdb",id:"\u6539\u8fdb",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}],v={toc:k};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0d\u63a8\u8350\u5728Kotlin\u4e0b\u4f7f\u7528\u6b64\u65b9\u6848\u3002"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b64\u65b9\u6848\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"https://mapstruct.org/"},"mapstruct\u6846\u67b6"),"\uff0cmapstruct\u6846\u67b6\u57fa\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"apt"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Kotlin\u5df2\u7ecf\u5e9f\u5f03\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/kapt.html"},"kapt"),"\uff0c\u800c\u4e3b\u5f20\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"ksp")))),(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u968f\u7740Kotlin\u7684\u6f14\u5316\uff0c\u672a\u6765\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"kapt"),"\u53ef\u80fd\u4f1a\u9047\u5230\u8d8a\u6765\u8d8a\u591a\u7684\u95ee\u9898\u3002")),(0,l.kt)("h2",{id:"\u5b9a\u4e49input-dto"},"\u5b9a\u4e49Input DTO"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"InputDTO"),"\u7684\u4f8b\u5b50 ",(0,l.kt)("em",{parentName:"p"},"(\u4e3a\u4e86\u7b80\u5355\uff0cJava\u7248\u672c\u91c7\u7528Lombok)")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<AuthorItem> authors; \u2778\n\n    @Data\n    public static class AuthorItem {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    val id: Long? = null, \u2776\n    val name: String, \n    val edition: Int,\n    val price: BigDecimal, \n    val storeId: Long?, \u2777\n    val authors: List<AuthorItem> \u2778\n) {\n\n    data class AuthorItem(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    )\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u5982\u679cid\u88ab\u6307\u5b9a\u4e86\u81ea\u52a8\u751f\u6210\u7b56\u7565\uff0c\u5219id\u4e0d\u662f\u5fc5\u987b\u7684\u3002\u8fd9\u4e5f\u662f\u4fdd\u5b58\u6307\u4ee4\u7684\u4e00\u4e2a\u7279\u6027\uff0c\u5177\u4f53\u7ec6\u8282\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"../save-mode#%E6%80%BB%E7%BB%93"},"\u4fdd\u5b58\u6a21\u5f0f/\u603b\u7ed3")),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJimmer\u5b9e\u4f53\u800c\u8a00\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u4e0d\u53ef\u80fd\u4e3anull\uff0c\u9760id\u5c5e\u6027\u7684\u7f3a\u5931 ",(0,l.kt)("em",{parentName:"p"},"(\u5373\uff0c\u4e0d\u8d4b\u503c)")," \u6765\u8868\u8fbe\u5bf9\u8c61\u6ca1\u6709id\u7684\u60c5\u51b5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eInput DTO\u800c\u8a00\uff0c\u9759\u6001\u7684POJO\u7c7b\u578b\u6ca1\u6709\u5c5e\u6027\u7f3a\u5931\u7684\u6982\u5ff5\uff0c\u9760null\u6765\u8868\u8fbe\u6ca1\u6709id\u7684\u60c5\u51b5\u3002"))),(0,l.kt)("p",{parentName:"admonition"},"\u4e8c\u8005\u4f3c\u4e4e\u662f\u77db\u76fe\u7684\uff0c\u96be\u4ee5\u8f6c\u5316\u3002\u522b\u62c5\u5fc3\uff0cJimmer\u7ed9\u51fa\u81ea\u52a8\u5316\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u540e\u6587\u8bba\u8ff0\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u660e\u786e\u6307\u5b9a\u6b64InputDTO\u60f3\u4ee5",(0,l.kt)(u.b,{buttonText:"\u77ed\u5173\u8054",variant:"text",mdxType:"ViewMore"},(0,l.kt)(i.k,{mdxType:"ShortAssociation"})),"\u7684\u65b9\u5f0f\u7f16\u8f91\u5b9e\u4f53\u7684\u591a\u5bf9\u4e00\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002\u5176\u4e2d\uff0c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 \u660e\u786e\u6307\u5b9a\u6b64InputDTO\u60f3\u4ee5",(0,l.kt)(u.b,{buttonText:"\u957f\u5173\u8054",variant:"text",mdxType:"ViewMore"},(0,l.kt)(p._,{mdxType:"LongAssociation"})),"\u7684\u65b9\u5f0f\u7f16\u8f91\u5b9e\u4f53\u7684\u591a\u5bf9\u8fc7\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\uff0c\n\u5173\u8054\u5bf9\u8c61\u7684\u7c7b\u578b\u4e5f\u88ab\u5185\u5d4c\u7684InputDTO\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.AuthorItem"),"\u56fa\u5316\u3002"))),(0,l.kt)("h2",{id:"mapstruct\u8f6c\u5316\u5668"},"Mapstruct\u8f6c\u5316\u5668"),(0,l.kt)("p",null,"Jimmer\u62d3\u5c55\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://mapstruct.org/"},"mapstruct\u6846\u67b6"),"\uff0c\u53ef\u4ee5\u7528\u5b83\u6765\u5904\u7406\u52a8\u6001\u5b9e\u4f53\u548c\u9759\u6001Input DTO\u4e4b\u95f4\u7684\u8f6c\u5316\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49BookInputMapper\u63a5\u53e3\uff0c\u5982\u4e0b"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},"@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    Book toBook(BookInput input);\n\n    ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputMapper.kt"',title:'"BookInputMapper.kt"'},"@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    fun toBook(BookInput input): Book\n\n    ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n}\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u9700\u8981\u4f7f\u7528mapstruct\u6846\u67b6\u7684\u9884\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u65f6\u751f\u6210\u6b64\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u3002\u8fd9\u90e8\u5206\u5185\u5bb9\u5728",(0,l.kt)("a",{parentName:"p",href:"../../../object/view/mapstruct"},"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/mapstruct"),"\u4e2d\u6709\u8be6\u7ec6\u7684\u8bf4\u660e\uff0c\u672c\u6587\u4e0d\u518d\u8d58\u8ff0\u3002")),(0,l.kt)("h2",{id:"http-api"},"HTTP API"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'private static final BookInputMapper BOOK_INPUT_MAPPER = \n    Mappers.getMapper(BookInputMapper.class);\n\n@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    bookRepository.save(\n        // highlight-next-line\n        BOOK_INPUT_MAPPER.toBook(input)\n    );\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    bookRepository.save(\n        // highlight-next-line\n        BOOK_INPUT_MAPPER.toBook(input)\n    )\n\n    companion object {\n        private val BOOK_INPUT_MAPPER =\n            Mappers.getMapper(BookInputMapper::class.java)\n    }\n}\n')))),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5229\u7528mapstruct\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u8f6c\u5316\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5b9e\u4f53\uff0c\u76f4\u63a5\u4fdd\u5b58\u5373\u53ef\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJimmer\u5b9e\u4f53\u800c\u8a00\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u4e0d\u53ef\u80fd\u4e3anull\uff0c\u9760\u5176\u7f3a\u5931 ",(0,l.kt)("em",{parentName:"p"},"(\u5373\uff0c\u4e0d\u8d4b\u503c)")," \u6765\u8868\u8fbe\u5bf9\u8c61\u6ca1\u6709id\u7684\u60c5\u51b5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8eInput DTO\u800c\u8a00\uff0c\u9759\u6001\u7684POJO\u7c7b\u578b\u6ca1\u6709\u5c5e\u6027\u7f3a\u5931\u7684\u6982\u5ff5\uff0c\u9760",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u4e3anull\u6765\u8868\u8fbe\u6ca1\u6709id\u7684\u60c5\u51b5\u3002"))),(0,l.kt)("p",{parentName:"admonition"},"Jimmer\u5185\u7f6e\u4e86mapstruct\u7684\u6269\u5c55\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u4e3anull\uff0c\u5219\u4e0d\u4f1a\u8d4b\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"Book.id"),"\uff0c\u6240\u4ee5\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\u3002")),(0,l.kt)("p",null,"\u53ef\u89c1\uff0c\u5b89\u5168\u6027\u4fdd\u8bc1\u95ee\u9898\uff0c\u6700\u7ec8\u88ab\u8f6c\u5316\u6210\u4e86\u4f7f\u7528mapstruct\u628aInput DTO\u8f6c\u5316\u4e3aJimmer\u5b9e\u4f53\u7684\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u6539\u8fdb"},"\u6539\u8fdb"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5730\u548cJimmer\u914d\u5408\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input<E>"),"\u63a5\u53e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface Input<E> {\n\n    E toEntity();\n}\n")),(0,l.kt)("p",null,"\u52a8\u6001\u5bf9\u8c61\u6c38\u8fdc\u4e0d\u4f1a\u5b9e\u73b0\u8fd9\u4e2a\u6b64\u7ed3\u6784\uff0c\u8be5\u63a5\u53e3\u5e94\u8be5\u6709\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u9759\u6001POJO\u7c7b\u6765\u5b9e\u73b0\u3002\u5176\u529f\u80fd\u975e\u5e38\u7b80\u5355\uff0c\u5c31\u662f\u628a\u5f53\u524d\u9759\u6001POJO\u8f6c\u5316\u4e3a\u52a8\u6001\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"Input<Book>"),"\uff0c\u5982\u4e0b"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput implements Input<Book> { \n\n    private static final Converter CONVERTER = \n        Mappers.getMapper(Converter.class);\n\n    ...\u7701\u7565\u79c1\u6709\u5b57\u6bb5...\n\n    @Override\n    // highlight-next-line\n    public Book toEntity() {\n        return CONVERTER.toBook(this);\n    }\n\n    @Mapper\n    interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        Book toBook(BookInput input);\n\n        ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n    }\n\n    ...\u7701\u7565\u5185\u90e8\u7c7bAuthorItem\u7684\u5b9a\u4e49...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    ...\u7565...\n): Input<Book> {\n\n    // highlight-next-line\n    override fun toEntity(): Book = \n        CONVERTER.toBook(this)\n\n    @Mapper\n    internal interface Converter { \n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        fun toBook(input: BookInput): Book\n\n        ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n    }\n\n    companion object {\n\n        @JvmStatic\n        private val CONVERTER = \n            Mappers.getMapper(Converter::class.java)\n    }\n\n    ...\u7701\u7565\u5185\u90e8\u7c7bAuthorItem\u7684\u5b9a\u4e49...\n}\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u4e2a\u6539\u8fdb\u7684\u4f8b\u5b50\u4e2d\uff0c\u4e4b\u524d\u4ecb\u7ecd\u8fc7\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookInputMapper"),"\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.Converter"),"\u53d6\u4ee3\uff0c\u56e0\u6b64\u53ef\u4ee5\u5220\u9664\u4e4b\u524d\u4ecb\u7ecd\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookInputMapper"))),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // `save(input)`\u7b49\u4ef7\u4e8e`save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input);\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // `save(input)`\u7b49\u4ef7\u4e8e`save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input)\n}\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Input<E>"),"\u63a5\u53e3\u6539\u53d8\u5f00\u53d1\u98ce\u683c\u662f\u5efa\u8bae\u6027\u7684\uff0c\u4e0d\u662f\u5f3a\u5236\u7684\u3002")),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5e38\u5e38\u9762\u4e34\u4e00\u4e2a\u5b9e\u9645\u7684\u95ee\u9898\uff0c\u5b9e\u4f53\u7684\u5c5e\u6027\u53ef\u80fd\u975e\u5e38\u591a\uff0c\u800c\u4e14"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u63d2\u5165\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u591a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u5c11"))),(0,l.kt)("p",null,"\u6211\u4eec\u4e00\u81f4\u7528\u4f5c\u4f8b\u5b50\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u7b49\u5b9e\u4f53\u5c5e\u6027\u5f88\u5c11\uff0c\u4e0d\u65b9\u4fbf\u6f14\u793a\uff0c\u56e0\u6b64\uff0c\u6211\u865a\u6784\u4e00\u4e2a\u5c5e\u6027\u8f83\u591a\u7684\u5b9e\u4f53\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Product"),"\u3002"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Product.java"',title:'"Product.java"'},"@Entity\npublic interface Product { \n\n    ...\u7701\u7565\u5b9e\u4f53\u5c5e\u6027...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Product.kt"',title:'"Product.kt"'},"@Entity\ninterface Product { \n\n    ...\u7701\u7565\u5b9e\u4f53\u5c5e\u6027...\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9488\u5bf9\u63d2\u5165\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u591a\u7684\u60c5\u51b5\uff0c\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProductInput")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CreateProductInput.java"',title:'"CreateProductInput.java"'},"@Data\npublic class CreateProductInput implements Input<Product> { \n\n    ...\u8f83\u591a\u5b57\u6bb5\uff0c\u7565...\n\n    @Override\n    public Product toEntity() {\n        ...\u7565...\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="CreateProductInput.kt"',title:'"CreateProductInput.kt"'},"data class CreateProductInput(\n    ...\u8f83\u591a\u5b57\u6bb5\uff0c\u7565...\n) : Input<Product> { \n\n    @Override\n    public Product toEntity() {\n        ...\u7565...\n    }\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9488\u5bf9\u4fee\u6539\u65f6\u9700\u8981\u6307\u5b9a\u7684\u5c5e\u6027\u76f8\u5bf9\u8f83\u5c11\u7684\u60c5\u51b5\uff0c\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateProductInput")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UpdateProductInput.java"',title:'"UpdateProductInput.java"'},"@Data\npublic class UpdateProductInput implements Input<Product> { \n\n    ...\u8f83\u5c11\u5b57\u6bb5\uff0c\u7565...\n\n    @Override\n    public Product toEntity() {\n        ...\u7565...\n    }\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UpdateProductInput.kt"',title:'"UpdateProductInput.kt"'},"data class UpdateProductInput(\n    ...\u8f83\u5c11\u5b57\u6bb5\uff0c\u7565...\n) : Input<Product> { \n\n    @Override\n    public Product toEntity() {\n        ...\u7565...\n    }\n}\n")))))),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u63d0\u4f9b\u4e24\u4e2aHTTP API"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput`\u5c5e\u6027\u76f8\u5bf9\u591a\n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")\npublic void updateProduct(\n    // `UpdateProductInput`\u5c5e\u6027\u76f8\u5bf9\u5c11\n    // highlight-next-line\n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput`\u5c5e\u6027\u76f8\u5bf9\u591a\n    // highlight-next-line\n    @RequestBody input: CreateProductInput\n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")\nfun updateProduct(\n    // `UpdateProductInput`\u5c5e\u6027\u76f8\u5bf9\u5c11\n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n}\n')))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u7531\u6b64\u53ef\u89c1\uff0c\u65e0\u8bba\u9879\u76ee\u7684\u4e1a\u52a1\u7279\u8272\u51b3\u5b9a\u9700\u8981\u4e3a\u540c\u4e00\u5b9e\u4f53\u5b9a\u4e49\u591a\u5c11\u4e86\u4e0d\u540c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Input DTO"),"\u7c7b\u578b\u3002\u6700\u7ec8\u90fd\u662f\u5229\u7528mapstruct\u5c06\u5176\u8f6c\u5316\u4e3a\u7c7b\u578b\u7edf\u4e00\u7684\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\uff0c\u7136\u540e\u7528\u4e00\u884c\u4ee3\u7801\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u5373\u53ef\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u54ea\u6015\u9879\u76ee\u7684\u4e1a\u52a1\u66f4\u590d\u6742\u4e00\u4e9b\uff0c\u6bd4\u5982\u4e0d\u540c\u8eab\u4efd\u7684\u4eba\u53ef\u4ee5\u7f16\u8f91\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u4e0d\u540c\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u65ad\u5957\u7528\u6b64\u6a21\u5f0f\u8f7b\u677e\u5e94\u5bf9\u3002")))}g.isMDXComponent=!0}}]);