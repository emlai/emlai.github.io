"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Name lookup",l={unversionedId:"docs/design/name_lookup",id:"docs/design/name_lookup",title:"Name lookup",description:"\x3c!--",source:"@site/../docs/design/name_lookup.md",sourceDirName:"docs/design",slug:"/docs/design/name_lookup",permalink:"/docs/design/name_lookup",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/design/name_lookup.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Metaprogramming",permalink:"/docs/design/metaprogramming"},next:{title:"Naming conventions",permalink:"/docs/design/naming_conventions"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"TODO",id:"todo",level:2},{value:"Overview",id:"overview",level:2},{value:"Unqualified name lookup",id:"unqualified-name-lookup",level:3},{value:"Alternatives",id:"alternatives",level:4},{value:"Name lookup for common, standard types",id:"name-lookup-for-common-standard-types",level:3},{value:"Open questions",id:"open-questions",level:2},{value:"Shadowing",id:"shadowing",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"name-lookup"},"Name lookup"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#todo"},"TODO")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overview"},"Overview"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#unqualified-name-lookup"},"Unqualified name lookup"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#alternatives"},"Alternatives")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#name-lookup-for-common-standard-types"},"Name lookup for common, standard types")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#open-questions"},"Open questions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shadowing"},"Shadowing"))))),(0,o.kt)("h2",{id:"todo"},"TODO"),(0,o.kt)("p",null,"This is a skeletal design, added to support ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/"},"the overview"),". It should\nnot be treated as accepted by the core team; rather, it is a placeholder until\nwe have more time to examine this detail. Please feel welcome to rewrite and\nupdate as appropriate."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Names are always introduced into some scope which defines where they can be\nreferenced. Many of these scopes are themselves named. Carbon has a special\nfacility for introducing a dedicated named scope just like C++, but we traverse\nnested names in a uniform way with ",(0,o.kt)("inlineCode",{parentName:"p"},"."),"-separated names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace Foo {\n  namespace Bar {\n    alias ??? MyInt = Int;\n  }\n}\n\nfn F(x: Foo.Bar.MyInt);\n")),(0,o.kt)("p",null,"Carbon packages are also namespaces so to get to an imported name from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Abseil")," package you would write ",(0,o.kt)("inlineCode",{parentName:"p"},"Abseil.Foo"),'. The "top-level" file scope is\nthat of the Carbon package containing the file, meaning that there is no\n"global" scope. Dedicated namespaces can be reopened within a package, but there\nis no way to reopen a package without being a library and file ',(0,o.kt)("em",{parentName:"p"},"within")," that\npackage."),(0,o.kt)("p",null,"Note that libraries (unlike packages) do ",(0,o.kt)("strong",{parentName:"p"},"not")," introduce a scope, they share\nthe scope of their package. This is based on the observation that in practice, a\nfairly coarse scoping tends to work best, with some degree of global registry to\nestablish a unique package name."),(0,o.kt)("h3",{id:"unqualified-name-lookup"},"Unqualified name lookup"),(0,o.kt)("p",null,'Unqualified name lookup in Carbon will always find a file-local result, other\nthan the implicit "prelude" of importing and aliasing the fundamentals of the\nstandard library. There will be an explicit mention of the name in the file that\ndeclares the name in the current or enclosing scope, which must also precede the\nreference.'),(0,o.kt)("h4",{id:"alternatives"},"Alternatives"),(0,o.kt)("p",null,"This implies that other names within your own package but not declared within\nthe file must be found by way of the package name. It isn't clear if this is the\ndesirable end state. We need to consider alternatives where names from the same\nlibrary or any library in the same package are made immediately visible within\nthe package scope for unqualified name lookup."),(0,o.kt)("h3",{id:"name-lookup-for-common-standard-types"},"Name lookup for common, standard types"),(0,o.kt)("p",null,"The Carbon standard library is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Carbon"),' package. A very small subset of\nthis standard library is provided implicitly in every file\'s scope. This is\ncalled the "prelude" package.'),(0,o.kt)("p",null,"Names in the prelude package will be available without scoping names. For\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"Bool")," will be the commonly used name in code, even though the\nunderlying type may be ",(0,o.kt)("inlineCode",{parentName:"p"},"Carbon::Bool"),". Also, no ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," will be necessary to\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"Bool"),"."),(0,o.kt)("h2",{id:"open-questions"},"Open questions"),(0,o.kt)("h3",{id:"shadowing"},"Shadowing"),(0,o.kt)("p",null,"We can probably disallow the use of shadowed unqualified names, but the actual\ndesign for such needs to be thought through."))}d.isMDXComponent=!0}}]);