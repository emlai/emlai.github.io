"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},o="`as` expressions",s={unversionedId:"expressions/as_expressions",id:"expressions/as_expressions",title:"`as` expressions",description:"\x3c!--",source:"@site/../docs/design/expressions/as_expressions.md",sourceDirName:"expressions",slug:"/expressions/as_expressions",permalink:"/design/expressions/as_expressions",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/as_expressions.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Arithmetic",permalink:"/design/expressions/arithmetic"},next:{title:"Bitwise and shift operators",permalink:"/design/expressions/bitwise"}},l={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Precedence and associativity",id:"precedence-and-associativity",level:2},{value:"Built-in types",id:"built-in-types",level:2},{value:"Data types",id:"data-types",level:3},{value:"Compatible types",id:"compatible-types",level:3},{value:"Extensibility",id:"extensibility",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"as-expressions"},(0,i.kt)("inlineCode",{parentName:"h1"},"as")," expressions"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#precedence-and-associativity"},"Precedence and associativity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#built-in-types"},"Built-in types"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-types"},"Data types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#compatible-types"},"Compatible types")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#extensibility"},"Extensibility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"An expression of one type can be explicitly cast to another type by using an\n",(0,i.kt)("inlineCode",{parentName:"p"},"as")," expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var n: i32 = Get();\nvar f: f32 = n as f32;\n")),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," expression can be used to perform any implicit conversion, either when\nthe context does not imply a destination type or when it is valuable to a reader\nof the code to make the conversion explicit. In addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," expressions can\nperform safe conversions that nonetheless should not be performed implicitly,\nsuch as lossy conversions or conversions that lose capabilities or change the\nway a type would be interpreted."),(0,i.kt)("p",null,"As guidelines, an ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," conversion should be permitted when:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The conversion is ",(0,i.kt)("em",{parentName:"li"},"complete"),": it produces a well-defined output value for\neach input value."),(0,i.kt)("li",{parentName:"ul"},"The conversion is ",(0,i.kt)("em",{parentName:"li"},"unsurprising"),": the resulting value is the expected value\nin the destination type.")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A conversion from ",(0,i.kt)("inlineCode",{parentName:"li"},"fM")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"iN")," is not complete, because it is not defined\nfor input values that are out of the range of the destination type, such as\ninfinities or, if ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," is too small, large finite values."),(0,i.kt)("li",{parentName:"ul"},"A conversion from ",(0,i.kt)("inlineCode",{parentName:"li"},"iM")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"iN"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," < ",(0,i.kt)("inlineCode",{parentName:"li"},"M"),", is either not complete or\nnot unsurprising, because there is more than one possible expected behavior\nfor an input value that is not within the destination type, and those\nbehaviors are not substantially the same -- we could perform two's\ncomplement wrapping, saturate, or produce undefined behavior analogous to\narithmetic overflow."),(0,i.kt)("li",{parentName:"ul"},"A conversion from ",(0,i.kt)("inlineCode",{parentName:"li"},"iM")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"fN")," can be unsurprising, because even though\nthere may be a choice of which way to round, the possible values are\nsubstantially the same.")),(0,i.kt)("p",null,"It is possible for user-defined types to ",(0,i.kt)("a",{parentName:"p",href:"#extensibility"},"extend")," the set of\nvalid explicit casts that can be performed by ",(0,i.kt)("inlineCode",{parentName:"p"},"as"),". Such extensions are expected\nto follow these guidelines."),(0,i.kt)("h2",{id:"precedence-and-associativity"},"Precedence and associativity"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"as")," expressions are non-associative."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var b: bool = true;\n// OK\nvar n: i32 = (b as i1) as i32;\nvar m: auto = b as (bool as Hashable);\n// Error, ambiguous\nvar m: auto = b as T as U;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"b as (bool as Hashable)")," is valid but not useful, because\n",(0,i.kt)("a",{parentName:"p",href:"#extensibility"},"the second operand of ",(0,i.kt)("inlineCode",{parentName:"a"},"as")," is implicitly converted to type ",(0,i.kt)("inlineCode",{parentName:"a"},"Type")),".\nThis expression therefore has the same interpretation as ",(0,i.kt)("inlineCode",{parentName:"p"},"b as bool"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TODO:")," We should consider making ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," expressions left-associative now that\nfacet types have been removed from the language."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," operator has lower precedence than operators that visually bind\ntightly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefix symbolic operators",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dereference (",(0,i.kt)("inlineCode",{parentName:"li"},"*a"),")"),(0,i.kt)("li",{parentName:"ul"},"negation (",(0,i.kt)("inlineCode",{parentName:"li"},"-a"),")"),(0,i.kt)("li",{parentName:"ul"},"complement (",(0,i.kt)("inlineCode",{parentName:"li"},"~a"),")"))),(0,i.kt)("li",{parentName:"ul"},"postfix symbolic operators",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"pointer type formation (",(0,i.kt)("inlineCode",{parentName:"li"},"T*"),"),"),(0,i.kt)("li",{parentName:"ul"},"function call (",(0,i.kt)("inlineCode",{parentName:"li"},"a(...)"),"),"),(0,i.kt)("li",{parentName:"ul"},"array indexing (",(0,i.kt)("inlineCode",{parentName:"li"},"a[...]"),"), and"),(0,i.kt)("li",{parentName:"ul"},"member access (",(0,i.kt)("inlineCode",{parentName:"li"},"a.m"),").")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," operator has higher precedence than assignment and comparison. It is\nunordered with respect to binary arithmetic, bitwise operators, and unary ",(0,i.kt)("inlineCode",{parentName:"p"},"not"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// OK\nvar x: i32* as Eq;\n// OK, `x as (U*)` not `(x as U)*`.\nvar y: auto = x as U*;\n\nvar a: i32;\nvar b: i32;\n// OK, `(a as i64) < ((*x) as i64)`.\nif (a as i64 < *x as i64) {}\n// Ambiguous: `(a + b) as i64` or `a + (b as i64)`?\nvar c: i32 = a + b as i64;\n// Ambiguous: `(a as i64) + b` or `a as (i64 + b)`?\nvar d: i32 = a as i64 + b;\n\n// OK, `(-a) as f64`, not `-(a as f64)`.\n// Unfortunately, the former is undefined if `a` is `i32.MinValue()`;\n// the latter is not.\nvar u: f64 = -a as f64;\n\n// OK, `i32 as (GetType())`, not `(i32 as GetType)()`.\nvar e: i32 as GetType();\n")),(0,i.kt)("h2",{id:"built-in-types"},"Built-in types"),(0,i.kt)("h3",{id:"data-types"},"Data types"),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("a",{parentName:"p",href:"/design/expressions/implicit_conversions#data-types"},"implicit conversions"),",\nthe following numeric conversions are supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"as"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"iN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"uN"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"fN")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"fM"),", for any ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),". Values that cannot be\nexactly represented are suitably rounded to one of the two nearest\nrepresentable values. Very large finite values may be rounded to an\ninfinity. NaN values are converted to NaN values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bool")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"iN")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"uN"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," converts to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," converts to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\n(or to ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"i1"),")."))),(0,i.kt)("p",null,"Conversions from numeric types to ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," are not supported with ",(0,i.kt)("inlineCode",{parentName:"p"},"as"),"; instead of\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"as bool"),", such conversions can be performed with ",(0,i.kt)("inlineCode",{parentName:"p"},"!= 0"),"."),(0,i.kt)("p",null,"Lossy conversions between ",(0,i.kt)("inlineCode",{parentName:"p"},"iN")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"uN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"iM")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"uM")," are not supported with\n",(0,i.kt)("inlineCode",{parentName:"p"},"as"),", and similarly conversions from ",(0,i.kt)("inlineCode",{parentName:"p"},"fN")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"iM")," are not supported."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Future work:")," Add mechanisms to perform these conversions."),(0,i.kt)("h3",{id:"compatible-types"},"Compatible types"),(0,i.kt)("p",null,"The following conversion is supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"as"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"U")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," is\n",(0,i.kt)("a",{parentName:"li",href:"/design/generics/terminology#compatible-types"},"compatible")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"U"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Future work:")," We may need a mechanism to restrict which conversions between\nadapters are permitted and which code can perform them. Some of the conversions\npermitted by this rule may only be allowed in certain contexts."),(0,i.kt)("h2",{id:"extensibility"},"Extensibility"),(0,i.kt)("p",null,"Explicit casts can be defined for user-defined types such as\n",(0,i.kt)("a",{parentName:"p",href:"/design/classes"},"classes")," by implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"As")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface As(Dest:! Type) {\n  fn Convert[me: Self]() -> Dest;\n}\n")),(0,i.kt)("p",null,"The expression ",(0,i.kt)("inlineCode",{parentName:"p"},"x as U")," is rewritten to ",(0,i.kt)("inlineCode",{parentName:"p"},"x.(As(U).Convert)()"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This rewrite causes the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"U")," to be implicitly converted to\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"Type"),". The program is invalid if this conversion is not possible."),(0,i.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0845.md#allow-as-to-perform-some-unsafe-conversions"},"Allow ",(0,i.kt)("inlineCode",{parentName:"a"},"as")," to perform some unsafe conversions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0845.md#allow-as-to-perform-twos-complement-truncation"},"Allow ",(0,i.kt)("inlineCode",{parentName:"a"},"as")," to perform two's complement truncation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0845.md#as-only-performs-implicit-conversions"},(0,i.kt)("inlineCode",{parentName:"a"},"as")," only performs implicit conversions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0845.md#integer-to-bool-conversions"},"Integer to bool conversions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0845.md#bool-to-integer-conversions"},"Bool to integer conversions"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/language/implicit_conversion"},"Implicit conversions in C++")),(0,i.kt)("li",{parentName:"ul"},"Proposal\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/845"},"#845: ",(0,i.kt)("inlineCode",{parentName:"a"},"as")," expressions"),".")))}c.isMDXComponent=!0}}]);