"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[387],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o="Type inference",l={unversionedId:"docs/design/type_inference",id:"docs/design/type_inference",title:"Type inference",description:"\x3c!--",source:"@site/../docs/design/type_inference.md",sourceDirName:"docs/design",slug:"/docs/design/type_inference",permalink:"/docs/design/type_inference",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/design/type_inference.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Tuples",permalink:"/docs/design/tuples"},next:{title:"Variables",permalink:"/docs/design/variables"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Open questions",id:"open-questions",level:2},{value:"Inferring a variable type from literals",id:"inferring-a-variable-type-from-literals",level:3},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-inference"},"Type inference"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#open-questions"},"Open questions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inferring-a-variable-type-from-literals"},"Inferring a variable type from literals")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Type_inference"},"Type inference")," occurs in Carbon\nwhen the ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," keyword is used. This may occur in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/design/variables"},"variable declarations")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/functions"},"function declarations"),"."),(0,a.kt)("p",null,"At present, type inference is very simple: given the expression which generates\nthe value to be used for type inference, the inferred type is the precise type\nof that expression. For example, the inferred type for ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," in\n",(0,a.kt)("inlineCode",{parentName:"p"},"fn Foo(x: i64) -> auto { return x; }")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"i64"),"."),(0,a.kt)("p",null,"Type inference is currently supported for ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/functions"},"function return types"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/variables"},"declared variable types"),"."),(0,a.kt)("h2",{id:"open-questions"},"Open questions"),(0,a.kt)("h3",{id:"inferring-a-variable-type-from-literals"},"Inferring a variable type from literals"),(0,a.kt)("p",null,"Using the type on the right side for ",(0,a.kt)("inlineCode",{parentName:"p"},"var y: auto = 1")," currently results in a\nconstant ",(0,a.kt)("inlineCode",{parentName:"p"},"IntLiteral(1)")," value, whereas most languages would suggest a variable\ninteger type, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"i64"),". Carbon might also make it an error. Although type\ninference currently only addresses ",(0,a.kt)("inlineCode",{parentName:"p"},"auto")," for variables and function return\ntypes, this is something that will be considered as part of type inference in\ngeneral, because it also affects generics, templates, lambdas, and return types."),(0,a.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0851.md#use-_-instead-of-auto"},"Use ",(0,a.kt)("inlineCode",{parentName:"a"},"_")," instead of ",(0,a.kt)("inlineCode",{parentName:"a"},"auto")))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/851"},"#851: auto keyword for vars"))))}u.isMDXComponent=!0}}]);