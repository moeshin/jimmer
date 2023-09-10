"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),k=i,u=c["".concat(s,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(83117),i=n(67294),o=n(34334),r=n(72389),l=n(67392),s=n(7094),m=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:k,groupId:u,className:h}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=k??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,s.U)(),[T,I]=(0,i.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=u){const e=f[u];null!=e&&e!==T&&g.some((t=>t.value===e))&&I(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==T&&(w(t),I(a),null!=u&&y(u,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:C,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(N.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function k(e){const t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},56201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const l={sidebar_position:7,title:"Optimistic/Pessimistic Lock"},s=void 0,m={unversionedId:"mutation/save-command/lock",id:"mutation/save-command/lock",title:"Optimistic/Pessimistic Lock",description:"Save commands support both optimistic lock and pessimistic lock.",source:"@site/docs/mutation/save-command/lock.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/lock",permalink:"/jimmer/docs/mutation/save-command/lock",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/lock.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Optimistic/Pessimistic Lock"},sidebar:"tutorialSidebar",previous:{title:"Associated Id Checking",permalink:"/jimmer/docs/mutation/save-command/id-checking"},next:{title:"Other Features",permalink:"/jimmer/docs/mutation/save-command/other"}},p={},d=[{value:"Optimistic Lock",id:"optimistic-lock",level:2},{value:"Modify Entity Types",id:"modify-entity-types",level:3},{value:"Demo",id:"demo",level:3},{value:"Pessimistic Lock",id:"pessimistic-lock",level:2},{value:"Without Pessimistic Lock",id:"without-pessimistic-lock",level:3},{value:"Enabling Pessimistic Lock",id:"enabling-pessimistic-lock",level:3}],c={toc:d};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Save commands support both optimistic lock and pessimistic lock."),(0,i.kt)("h2",{id:"optimistic-lock"},"Optimistic Lock"),(0,i.kt)("p",null,"Jimmer supports optimistic lock via the ",(0,i.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.Version")," annotation. "),(0,i.kt)("h3",{id:"modify-entity-types"},"Modify Entity Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},"@Entity\npublic interface BookStore {\n\n    // highlight-next-line    \n    @Version        \n    int version();\n\n    ...other properties omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @Version\n    val version: Int\n    \n    ...other properties omitted...\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity    \npublic interface Book {\n\n    // highlight-next-line\n    @Version\n    int version();\n\n    ...other properties omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Version\n    val version: Int\n\n    ...other properties omitted...\n}\n")))))),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)("p",null,"Characteristics of optimistic lock:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When inserting objects ",(0,i.kt)("em",{parentName:"p"},"(whether explicitly doing INSERT, or UPSERT determined to be INSERT)"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," of the object will be inserted into the database."),(0,i.kt)("p",{parentName:"li"},"For example:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookStore savedData = sqlClient.save(\n        BookStoreDraft.$.produce(draft -> {\n            draft.setName("TURING");\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("44.99"));\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val savedData = sqlClient.save(\n    new(BookStore::class).by {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n')))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For INSERT operations, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," of the object is not assigned, Jimmer will automatically insert 0."),(0,i.kt)("p",{parentName:"admonition"},"However, in this case, the modification operations discussed later will throw exceptions. Therefore, if you cannot ascertain whether a UPSERT save command will ultimately be determined as ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", you should insist on specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," property."),(0,i.kt)("p",{parentName:"admonition"},"The following example assumes we know for sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," will be determined as ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", so the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," properties are not specified.")),(0,i.kt)("p",{parentName:"li"},"No ids are specified so Jimmer determines existence per object key."),(0,i.kt)("p",{parentName:"li"},"Assuming none of the objects exist, 3 new records will be inserted."),(0,i.kt)("p",{parentName:"li"},"No ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," properties are specified, so they are filled with 0 automatically."),(0,i.kt)("p",{parentName:"li"},"The final printed result will be ",(0,i.kt)("em",{parentName:"p"},"(formatted for readability)"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":100,\n    "name":"TURING",\n    // highlight-next-line\n    "version":0,\n    "books":[\n        {\n            "id":100,\n            "name":"Introduction to Algorithms",\n            "edition":3,\n            "price":44.99,\n            // highlight-next-line\n            "version":0,\n            "store":{\n                "id":100\n            }\n        },\n        {\n            "id":101,\n            "name":"The Pragmatic Programmer",\n            "edition":2,\n            "price":39.99,\n            // highlight-next-line\n            "version":0,\n            "store":{\n                "id":100\n            }\n        }\n    ]\n}\n')),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Of course, if the user specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," for these objects, the specified values rather than 0 will be inserted."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When modifying objects ",(0,i.kt)("em",{parentName:"p"},"(whether explicitly doing UPDATE, or UPSERT determined to be UPDATE)"),", Jimmer will compare the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," passed by the user and the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," in the database for each object. If they differ, an exception will be thrown."),(0,i.kt)("p",{parentName:"li"},"Let's modify the code a bit and execute again:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookStore savedData = sqlClient.save(\n        BookStoreDraft.$.produce(draft -> {\n            draft.setName("TURING");\n            // highlight-next-line\n            draft.setVersion(0);\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("54.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n\n                // illegal version\n                // highlight-next-line\n                book.setVersion(9999);\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val savedData = sqlClient.save(\n    new(BookStore::class).by {\n        name = "TURING"\n        // highlight-next-line\n        version = 0\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n            // highlight-next-line\n            version = 0\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n\n            // illegal version\n            // highlight-next-line\n            version = 9999\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n')))),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For modification operations, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," of the object is not assigned, Jimmer will throw an exception."),(0,i.kt)("p",{parentName:"admonition"},"If you cannot determine whether a UPSERT save command will ultimately be ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", you should insist on specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," property.")),(0,i.kt)("p",{parentName:"li"},"When executed again, since data already exists, the 3 objects will be updated."),(0,i.kt)("p",{parentName:"li"},"Obviously, the last book's ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," ",(0,i.kt)("inlineCode",{parentName:"p"},"9999")," is illegal. The above code will result in the following exception:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Exception Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.runtime.SaveException"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Exception Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.runtime.SaveErrorCode.ILLEGAL_VERSION"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Exception Message:"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},'Save error caused by the path: "',"<","root",">",'.books": Cannot update the entity whose type is "org.doc.j.model.Book", id is "101" and version is "9999"')))),(0,i.kt)("p",{parentName:"li"},"Let's modify the code again to use the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," for all objects:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'BookStore savedData = sqlClient.save(\n        BookStoreDraft.$.produce(draft -> {\n            draft.setName("TURING");\n            // highlight-next-line\n            draft.setVersion(0);\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("54.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val savedData = sqlClient.save(\n    new(BookStore::class).by {\n        name = "TURING"\n        // highlight-next-line\n        version = 0\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n            // highlight-next-line\n            version = 0\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n            // highlight-next-line\n            version = 0\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n')))),(0,i.kt)("p",{parentName:"li"},"The final printed result will be ",(0,i.kt)("em",{parentName:"p"},"(formatted for readability)"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":100,\n    "name":"TURING",\n    // highlight-next-line\n    "version":1,\n    "books":[\n        {\n            "id":100,\n            "name":"Introduction to Algorithms",\n            "edition":3,\n            "price":54.99,\n            // highlight-next-line\n            "version":1,\n            "store":{\n                "id":100\n            }\n        },\n        {\n            "id":101,\n            "name":"The Pragmatic Programmer",\n            "edition":2,\n            "price":39.99,\n            // highlight-next-line\n            "version":1,\n            "store":{\n                "id":100\n            }\n        }\n    ]\n}\n')),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As you can see, the version is incremented by 1 automatically after data modification."),(0,i.kt)("p",{parentName:"admonition"},"In real projects, the version number of optimistic lock is often a hidden field in the form. If the form does not automatically redirect after saving, but keeps the UI unchanged to support multiple submissions, the hidden field should be updated with such return info after each successful save.")))),(0,i.kt)("h2",{id:"pessimistic-lock"},"Pessimistic Lock"),(0,i.kt)("p",null,"Unlike optimistic lock, pessimistic locks are very short-lived, only valid within a single jdbc transaction."),(0,i.kt)("p",null,"Normally, Jimmer generates some query SQL to aid save command execution, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Determining whether a ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT")," should ultimately be ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Determining which associated objects need to be ",(0,i.kt)("a",{parentName:"p",href:"./dissociation"},"dissociated")))),(0,i.kt)("p",null,"Next, we compare the differences in these query SQL between using and not using pessimistic lock. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the previous examples, to demonstrate optimistic lock, we assumed the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," types both defined a ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," property."),(0,i.kt)("p",{parentName:"admonition"},"In the following examples to demonstrate pessimistic lock, we no longer make that assumption.")),(0,i.kt)("h3",{id:"without-pessimistic-lock"},"Without Pessimistic Lock"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'sqlClient.save(\n        BookStoreDraft.$.produce(draft -> {\n            draft.setName("TURING");\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("44.99"));\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n            });\n        })\n);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'sqlClient.save(\n    new(BookStore::class).by {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n)\n')))),(0,i.kt)("p",null,"This generates 6 SQL statements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the book store exists"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.NAME = ? /* TURING */ \n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," based on previous query"),(0,i.kt)("p",{parentName:"li"},"insert or update, omitted")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the 1st book exists "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* Introduction to Algorithms */\n    and\n        tb_1_.EDITION = ? /* 3 */\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," based on previous query"),(0,i.kt)("p",{parentName:"li"},"insert or update, omitted")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the 2nd book exists"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* The Pragmatic Programmer */\n    and\n        tb_1_.EDITION = ? /* 2 */\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," based on previous query"),(0,i.kt)("p",{parentName:"li"},"insert or update, omitted"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These query statements are used to make conditional judgments to determine how to generate subsequent SQL. "),(0,i.kt)("p",{parentName:"admonition"},"However, without pessimistic lock, the conditions and assumptions made via these queries can potentially be invalidated by concurrent operations, leading to exceptions when executing subsequent SQL."),(0,i.kt)("p",{parentName:"admonition"},"To avoid such concurrency issues, pessimistic lock can be enabled. Next we discuss how to implement pessimistic lock.")),(0,i.kt)("h3",{id:"enabling-pessimistic-lock"},"Enabling Pessimistic Lock"),(0,i.kt)("p",null,"There are two ways to enable pessimistic lock:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Global configuration"),(0,i.kt)("p",{parentName:"li"},"There are two ways to enable pessimistic lock globally:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Via Spring Boot Starter configuration"),(0,i.kt)("p",{parentName:"li"},"  Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,i.kt)("em",{parentName:"p"},"(or ",(0,i.kt)("inlineCode",{parentName:"em"},"application.properties"),")"),": "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"jimmer:\n    save-command-pessimistic-lock: true\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Via low-level API configuration"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setSaveCommandPessimisticLock()\n    ...other configurations omitted...\n    .build();\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setSaveCommandPessimisticLock()\n}\n"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Command-level configuration"),(0,i.kt)("p",{parentName:"li"},"Unlike global configuration affecting all save commands, command-level configuration only affects the current save command."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If pessimistic lock is already enabled globally, no need for command-level configuration.")),(0,i.kt)("p",{parentName:"li"},"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"setPessimisticLock()")," on the save command enables pessimistic lock:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'sqlClient\n        .getEntities()\n        .saveCommand(\n                BookStoreDraft.$.produce(draft -> {\n                    draft.setName("TURING");\n                    draft.addIntoBooks(book -> {\n                        book.setName("Introduction to Algorithms");\n                        book.setEdition(3);\n                        book.setPrice(new BigDecimal("44.99"));\n                    });\n                    draft.addIntoBooks(book -> {\n                        book.setName("The Pragmatic Programmer");\n                        book.setEdition(2);\n                        book.setPrice(new BigDecimal("39.99"));\n                    });\n                })\n        )\n        // highlight-next-line\n        .setPessimisticLock()\n        .execute();\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'sqlClient.save(\n    new(BookStore::class).by {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n) {\n    // highlight-next-line\n    setPessimisticLock()\n}\n')))))),(0,i.kt)("p",null,"Once pessimistic lock is enabled, the generated query statements will change significantly:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the book store exists"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME \nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.NAME = ? /* TURING */\n/* highlight-next-line */    \nfor update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," based on previous query"),(0,i.kt)("p",{parentName:"li"},"insert or update, omitted")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the 1st book exists"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* Introduction to Algorithms */\n    and\n        tb_1_.EDITION = ? /* 3 */\n/* highlight-next-line */\nfor update\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," based on previous query"),(0,i.kt)("p",{parentName:"li"},"insert or update, omitted")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check if the 2nd book exists"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID, \n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* The Pragmatic Programmer */\n    and \n        tb_1_.EDITION = ? /* 2 */\n/* highlight-next-line */\nfor update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Determine ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE")," based on previous query"),(0,i.kt)("p",{parentName:"li"},"insert or update, omitted"))))}k.isMDXComponent=!0}}]);