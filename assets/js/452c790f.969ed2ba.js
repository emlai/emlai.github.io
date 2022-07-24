"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1610],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,v=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?i.createElement(v,o(o({ref:n},c),{},{components:t})):i.createElement(v,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));const r={},o="Implicit conversions",l={unversionedId:"expressions/implicit_conversions",id:"expressions/implicit_conversions",title:"Implicit conversions",description:"\x3c!--",source:"@site/../docs/design/expressions/implicit_conversions.md",sourceDirName:"expressions",slug:"/expressions/implicit_conversions",permalink:"/design/expressions/implicit_conversions",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/implicit_conversions.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"`if` expressions",permalink:"/design/expressions/if"},next:{title:"Logical operators",permalink:"/design/expressions/logical_operators"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Properties of implicit conversions",id:"properties-of-implicit-conversions",level:2},{value:"Lossless",id:"lossless",level:3},{value:"Semantics-preserving",id:"semantics-preserving",level:3},{value:"Examples",id:"examples",level:3},{value:"Built-in types",id:"built-in-types",level:2},{value:"Data types",id:"data-types",level:3},{value:"Same type",id:"same-type",level:3},{value:"Pointer conversions",id:"pointer-conversions",level:3},{value:"Type-of-types",id:"type-of-types",level:3},{value:"Consistency with <code>as</code>",id:"consistency-with-as",level:2},{value:"Extensibility",id:"extensibility",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"implicit-conversions"},"Implicit conversions"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#properties-of-implicit-conversions"},"Properties of implicit conversions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#lossless"},"Lossless")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#semantics-preserving"},"Semantics-preserving")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#examples"},"Examples")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#built-in-types"},"Built-in types"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#data-types"},"Data types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#same-type"},"Same type")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pointer-conversions"},"Pointer conversions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#type-of-types"},"Type-of-types")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consistency-with-as"},"Consistency with ",(0,a.kt)("inlineCode",{parentName:"a"},"as"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extensibility"},"Extensibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"When an expression appears in a context in which an expression of a specific\ntype is expected, the expression is implicitly converted to that type if\npossible."),(0,a.kt)("p",null,"For ",(0,a.kt)("a",{parentName:"p",href:"#built-in-types"},"built-in types"),", implicit conversions are permitted when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The conversion is ",(0,a.kt)("a",{parentName:"li",href:"#lossless"},(0,a.kt)("em",{parentName:"a"},"lossless")),": every possible value for the\nsource expression converts to a distinct value in the target type."),(0,a.kt)("li",{parentName:"ul"},"The conversion is ",(0,a.kt)("a",{parentName:"li",href:"#semantics-preserving"},(0,a.kt)("em",{parentName:"a"},"semantics-preserving")),":\ncorresponding values in the source and destination type have the same\nabstract meaning.")),(0,a.kt)("p",null,"These rules aim to ensure that implicit conversions are unsurprising: the value\nthat is provided as the operand of an operation should match how that operation\ninterprets the value, because the identity and abstract meaning of the value are\npreserved by any implicit conversions that are applied."),(0,a.kt)("p",null,"It is possible for user-defined types to ",(0,a.kt)("a",{parentName:"p",href:"#extensibility"},"extend")," the set of\nvalid implicit conversions. Such extensions are expected to also follow these\nrules."),(0,a.kt)("h2",{id:"properties-of-implicit-conversions"},"Properties of implicit conversions"),(0,a.kt)("h3",{id:"lossless"},"Lossless"),(0,a.kt)("p",null,"We expect implicit conversion to never lose information: if two values are\ndistinguishable before the conversion, they should generally be distinguishable\nafter the conversion. It should be possible to define a conversion in the\nopposite direction that restores the original value, but such a conversion is\nnot expected to be provided in general, and might be computationally expensive."),(0,a.kt)("p",null,"Because an implicit conversion is converting from a narrower type to a wider\ntype, implicit conversions do not necessarily preserve static information about\nthe source value."),(0,a.kt)("h3",{id:"semantics-preserving"},"Semantics-preserving"),(0,a.kt)("p",null,"We expect implicit conversions to preserve the meaning of converted values. The\nassessment of this criterion will necessarily be subjective, because the\nmeanings of values generally live in the mind of the programmer rather than in\nthe program text. However, the semantic interpretation is expected to be\nconsistent from one conversion to another, so we can provide a test: if multiple\npaths of implicit conversions from a type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," to a type ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," exist, and the same\nvalue of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," would convert to different values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"B")," along different\npaths, then at least one of those conversions must not be semantics-preserving."),(0,a.kt)("p",null,"A semantics-preserving conversion does not necessarily preserve the meaning of\nparticular syntax when applied to the value. The same syntax may map to\ndifferent operations in the new type. For example, division may mean different\nthings in integer and floating-point types, and member access may find different\nmembers in a derived class pointer versus in a base class pointer."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Conversion from ",(0,a.kt)("inlineCode",{parentName:"p"},"i32")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector(int)")," by forming a vector of N zeroes is\nlossless but not semantics-preserving."),(0,a.kt)("p",null,"Conversion from ",(0,a.kt)("inlineCode",{parentName:"p"},"i32")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"f32")," by rounding to the nearest representable value is\nsemantics-preserving but not lossless."),(0,a.kt)("p",null,"Conversion from ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"StringView")," is lossless, because we can compute the\n",(0,a.kt)("inlineCode",{parentName:"p"},"String")," value from the ",(0,a.kt)("inlineCode",{parentName:"p"},"StringView")," value, and semantics-preserving because the\nstring value denoted is the same. Conversion in the other direction may or may\nnot be semantics-preserving depending on whether we consider the address to be a\nsalient part of a ",(0,a.kt)("inlineCode",{parentName:"p"},"StringView"),"'s value."),(0,a.kt)("h2",{id:"built-in-types"},"Built-in types"),(0,a.kt)("h3",{id:"data-types"},"Data types"),(0,a.kt)("p",null,"The following implicit numeric conversions are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iN")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"uN")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"iM")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"N")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uN")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"uM")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"N")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fN")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"fM")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"N")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iN")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"uN")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"fM")," if every value of type ",(0,a.kt)("inlineCode",{parentName:"li"},"iN")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"uN")," can be represented\nin ",(0,a.kt)("inlineCode",{parentName:"li"},"fM"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i12")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"u11")," (or smaller) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"f16")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i25")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"u24")," (or smaller) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"f32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i54")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"u53")," (or smaller) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"f64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i65")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"u64")," (or smaller) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"f80")," (x86 only)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i114")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"u113")," (or smaller) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"f128")," (if available)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i238")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"u237")," (or smaller) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"f256")," (if available)")))),(0,a.kt)("p",null,"In each case, the numerical value is the same before and after the conversion.\nAn integer zero is translated into a floating-point positive zero."),(0,a.kt)("p",null,"An integer constant can be implicitly converted to any type ",(0,a.kt)("inlineCode",{parentName:"p"},"iM"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uM"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"fM"),"\nin which that value can be exactly represented. A floating-point constant can be\nimplicitly converted to any type ",(0,a.kt)("inlineCode",{parentName:"p"},"fM")," in which that value is between the least\nrepresentable finite value and the greatest representable finite value\n(inclusive), and converts to the nearest representable finite value, with ties\nbroken by picking the value for which the mantissa is even."),(0,a.kt)("p",null,"The above conversions are also precisely those that C++ considers non-narrowing,\nexcept:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Carbon also permits integer to floating-point conversions in more cases. The\nmost important of these is that Carbon permits ",(0,a.kt)("inlineCode",{parentName:"p"},"i32")," to be implicitly\nconverted to ",(0,a.kt)("inlineCode",{parentName:"p"},"f64"),". Lossy conversions, such as from ",(0,a.kt)("inlineCode",{parentName:"p"},"i32")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"f32"),", are not\npermitted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"What Carbon considers to be an integer constant or floating-point constant\nmay differ from what C++ considers to be a constant expression."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Note:")," We have not yet decided what will qualify as a constant in this\ncontext, but it will include at least integer and floating-point literals,\nwith optional enclosing parentheses. It is possible that such constants will\nhave singleton types; see issue\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/issues/508"},"#508"),"."))),(0,a.kt)("p",null,"In addition to the above rules, a negative integer constant ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," can be\nimplicitly converted to the type ",(0,a.kt)("inlineCode",{parentName:"p"},"uN")," if the value ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," + 2",(0,a.kt)("sup",null,"N"),' can be\nexactly represented, and converts to that value. Note that this conversion\nviolates the "semantics-preserving" test. For example, ',(0,a.kt)("inlineCode",{parentName:"p"},"(-1 as u8) as i32"),"\nproduces the value ",(0,a.kt)("inlineCode",{parentName:"p"},"255")," whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"-1 as i32")," produces the value ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),". However,\nthis conversion is important in order to allow bitwise operations with masks, so\nwe allow it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// We allow ^0 == -1 to convert to `u32` to represent an all-ones value.\nvar a: u32 = ^0;\n// ^4 == -5 is negative, but we want to allow it to convert to u32 here.\nvar b: u32 = a & ^4;\n")),(0,a.kt)("h3",{id:"same-type"},"Same type"),(0,a.kt)("p",null,"The following conversion is available for every type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"T"))),(0,a.kt)("h3",{id:"pointer-conversions"},"Pointer conversions"),(0,a.kt)("p",null,"The following pointer conversion is available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T*")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"U*")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," is a class derived from the class ",(0,a.kt)("inlineCode",{parentName:"li"},"U"),".")),(0,a.kt)("p",null,"Even though we can convert ",(0,a.kt)("inlineCode",{parentName:"p"},"Derived*")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Base*"),", we cannot convert ",(0,a.kt)("inlineCode",{parentName:"p"},"Derived**"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"Base**")," because that would allow storing a ",(0,a.kt)("inlineCode",{parentName:"p"},"Derived2*")," into a ",(0,a.kt)("inlineCode",{parentName:"p"},"Derived*"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"abstract class Base {}\nclass Derived extends Base {}\nclass Derived2 extends Base {}\nvar d2: Derived2 = {};\nvar p: Derived*;\nvar q: Derived2* = &d2;\nvar r: Base** = &p;\n// Bad: would store q to p.\n*r = q;\n")),(0,a.kt)("h3",{id:"type-of-types"},"Type-of-types"),(0,a.kt)("p",null,"A type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," with ",(0,a.kt)("a",{parentName:"p",href:"/design/generics/terminology#type-of-type"},"type-of-type")," ",(0,a.kt)("inlineCode",{parentName:"p"},"TT1"),"\ncan be implicitly converted to the type-of-type ",(0,a.kt)("inlineCode",{parentName:"p"},"TT2")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\n",(0,a.kt)("a",{parentName:"p",href:"/design/generics/details#subtyping-between-type-of-types"},"satisfies the requirements"),"\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"TT2"),"."),(0,a.kt)("h2",{id:"consistency-with-as"},"Consistency with ",(0,a.kt)("inlineCode",{parentName:"h2"},"as")),(0,a.kt)("p",null,"An implicit conversion of an expression ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," to type ",(0,a.kt)("inlineCode",{parentName:"p"},"U"),", when\npermitted, always has the same meaning as the\n",(0,a.kt)("a",{parentName:"p",href:"/design/expressions/as_expressions"},"explicit cast expression ",(0,a.kt)("inlineCode",{parentName:"a"},"E as U")),". Moreover, because such\nan implicit conversion is expected to exactly preserve the value,\n",(0,a.kt)("inlineCode",{parentName:"p"},"(E as U) as T"),", if valid, should be expected to result in the same value as\nproduced by ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," even if the ",(0,a.kt)("inlineCode",{parentName:"p"},"as T")," cast cannot be performed as an implicit\nconversion."),(0,a.kt)("h2",{id:"extensibility"},"Extensibility"),(0,a.kt)("p",null,"Implicit conversions can be defined for user-defined types such as\n",(0,a.kt)("a",{parentName:"p",href:"/design/classes"},"classes")," by implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ImplicitAs")," interface, which\nextends\n",(0,a.kt)("a",{parentName:"p",href:"/design/expressions/as_expressions#extensibility"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"As")," interface used to implement ",(0,a.kt)("inlineCode",{parentName:"a"},"as")," expressions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interface ImplicitAs(Dest:! Type) {\n  extends As(Dest);\n  // Inherited from As(Dest):\n  // fn Convert[me: Self]() -> Dest;\n}\n")),(0,a.kt)("p",null,"When attempting to implicitly convert an expression ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," to type ",(0,a.kt)("inlineCode",{parentName:"p"},"U"),", the\nexpression is rewritten to ",(0,a.kt)("inlineCode",{parentName:"p"},"x.(ImplicitAs(U).Convert)()"),"."),(0,a.kt)("p",null,"Note that implicit conversions are not transitive. Even if an\n",(0,a.kt)("inlineCode",{parentName:"p"},"impl A as ImplicitAs(B)")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"impl B as ImplicitAs(C)")," are both provided, an\nexpression of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," cannot be implicitly converted to type ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),". Allowing\ntransitivity would introduce the risk of ambiguity issues as code evolves and\nwould in general require a search of a potentially unbounded set of intermediate\ntypes."),(0,a.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0820.md#c-conversions"},"Provide lossy and non-semantics-preserving implicit conversions from C++")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0820.md#no-conversions"},"Provide no implicit conversions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0820.md#no-extensibility"},"Provide no extensibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0820.md#transitivity"},"Apply implicit conversions transitively")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1191.md#converting-complements-to-unsigned-types"},"Do not allow negative constants to convert to unsigned types"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/language/implicit_conversion"},"Implicit conversions in C++")),(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/820"},"#820: Implicit conversions"),"."),(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/866"},"#866: Allow ties in floating literals"),".")))}m.isMDXComponent=!0}}]);