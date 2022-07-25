"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},s="Templates",o={unversionedId:"docs/design/templates",id:"docs/design/templates",title:"Templates",description:"\x3c!--",source:"@site/../docs/design/templates.md",sourceDirName:"docs/design",slug:"/docs/design/templates",permalink:"/docs/design/templates",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/design/templates.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Primitive types",permalink:"/docs/design/primitive_types"},next:{title:"Tuples",permalink:"/docs/design/tuples"}},l={},p=[{value:"TODO",id:"todo",level:2},{value:"Overview",id:"overview",level:2},{value:"Types with template parameters",id:"types-with-template-parameters",level:3},{value:"Functions with template parameters",id:"functions-with-template-parameters",level:3},{value:"Overloading",id:"overloading",level:3},{value:"Constraining templates with interfaces",id:"constraining-templates-with-interfaces",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"templates"},"Templates"),(0,r.kt)("h2",{id:"todo"},"TODO"),(0,r.kt)("p",null,"This is a skeletal design, added to support ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/"},"the overview"),". It should\nnot be treated as accepted by the core team; rather, it is a placeholder until\nwe have more time to examine this detail. Please feel welcome to rewrite and\nupdate as appropriate."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Carbon templates follow the same fundamental paradigm as C++ templates: they are\ninstantiated, resulting in late type checking, duck typing, and lazy binding.\nThey both enable interoperability between Carbon and C++ and address some\n(hopefully limited) use cases where the type checking rigor imposed by generics\nisn't helpful."),(0,r.kt)("h3",{id:"types-with-template-parameters"},"Types with template parameters"),(0,r.kt)("p",null,"When parameterizing a user-defined type, the parameters can be marked as\ntemplate parameters. The resulting type-function will instantiate the\nparameterized definition with the provided arguments to produce a complete type\nwhen used. Note that only the parameters marked as having this template behavior\nare subject to full instantiation -- other parameters will be type checked and\nbound early to the extent possible. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"class Stack(template T:! Type) {\n  var storage: Array(T);\n\n  fn Push[addr me: Self*](value: T);\n  fn Pop[addr me: Self*]() -> T;\n}\n")),(0,r.kt)("p",null,"This both defines a parameterized type (",(0,r.kt)("inlineCode",{parentName:"p"},"Stack"),") and uses one (",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),"). Within\nthe definition of the type, the template type parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," can be used in all\nof the places a normal type would be used, and it will only by type checked on\ninstantiation."),(0,r.kt)("h3",{id:"functions-with-template-parameters"},"Functions with template parameters"),(0,r.kt)("p",null,"Both deduced and explicit function parameters in Carbon can be marked as\ntemplate parameters. When called, the arguments to these parameters trigger\ninstantiation of the function definition, fully type checking and resolving that\ndefinition after substituting in the provided (or computed if deduced)\narguments. The runtime call then passes the remaining arguments to the resulting\ncomplete definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn Convert[template T:! Type](source: T, template U:! Type) -> U {\n  var converted: U = source;\n  return converted;\n}\n\nfn Foo(i: i32) -> f32 {\n  // Instantiates with the `T` deduced argument set to `i32` and the `U`\n  // explicit argument set to `f32`, then calls with the runtime value `i`.\n  return Convert(i, f32);\n}\n")),(0,r.kt)("p",null,"Here we deduce one type parameter and explicitly pass another. It is not\npossible to explicitly pass a deduced type parameter, instead the call site\nshould cast or convert the argument to control the deduction. The explicit type\nis passed after a runtime parameter. While this makes that type unavailable to\nthe declaration of ",(0,r.kt)("em",{parentName:"p"},"that")," runtime parameter, it still is a template parameter\nand available to use as a type even within the remaining parts of the function\ndeclaration."),(0,r.kt)("h3",{id:"overloading"},"Overloading"),(0,r.kt)("p",null,'An important feature of templates in C++ is the ability to customize how they\nend up specialized for specific types. Because template parameters (whether as\ntype parameters or function parameters) are pattern matched, we expect to\nleverage pattern matching techniques to provide "better match" definitions that\nare selected analogously to specializations in C++ templates. When expressed\nthrough pattern matching, this may enable things beyond just template parameter\nspecialization, but that is an area that we want to explore cautiously.'),(0,r.kt)("h3",{id:"constraining-templates-with-interfaces"},"Constraining templates with interfaces"),(0,r.kt)("p",null,"Because we consider only specific ",(0,r.kt)("em",{parentName:"p"},"parameters")," to be templated and they could be\nindividually migrated to a constrained interface using the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/#generics"},"generics system"),", constraining templates themselves may be\nless critical. Instead, we expect parameterized types and functions may use a\nmixture of generic parameters and templated parameters based on where they are\nconstrained."),(0,r.kt)("p",null,"However, if there are still use cases, we would like to explore applying the\ninterface constraints of the generics system directly to template parameters\nrather than create a new constraint system."))}d.isMDXComponent=!0}}]);