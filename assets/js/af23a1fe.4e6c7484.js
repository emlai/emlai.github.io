"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Arithmetic",l={unversionedId:"expressions/arithmetic",id:"expressions/arithmetic",title:"Arithmetic",description:"\x3c!--",source:"@site/../docs/design/expressions/arithmetic.md",sourceDirName:"expressions",slug:"/expressions/arithmetic",permalink:"/design/expressions/arithmetic",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/expressions/arithmetic.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Expressions",permalink:"/design/expressions/"},next:{title:"`as` expressions",permalink:"/design/expressions/as_expressions"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Precedence and associativity",id:"precedence-and-associativity",level:2},{value:"Built-in types",id:"built-in-types",level:2},{value:"Integer types",id:"integer-types",level:3},{value:"Overflow and other error conditions",id:"overflow-and-other-error-conditions",level:4},{value:"Floating-point types",id:"floating-point-types",level:3},{value:"Strings",id:"strings",level:3},{value:"Extensibility",id:"extensibility",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arithmetic"},"Arithmetic"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#precedence-and-associativity"},"Precedence and associativity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#built-in-types"},"Built-in types"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#integer-types"},"Integer types"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overflow-and-other-error-conditions"},"Overflow and other error conditions")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#floating-point-types"},"Floating-point types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#strings"},"Strings")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#extensibility"},"Extensibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#alternatives-considered"},"Alternatives considered")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Carbon provides a conventional set of arithmetic operators:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var a: i32 = 5;\nvar b: i32 = 3;\n\n// -5\nvar negation: i32 = -a;\n// 8\nvar sum: i32 = a + b;\n// 2\nvar difference: i32 = a - b;\n// 15\nvar product: i32 = a * b;\n// 1\nvar quotient: i32 = a / b;\n// 2\nvar remainder: i32 = a % b;\n")),(0,a.kt)("p",null,"These operators have predefined meanings for some of Carbon's\n",(0,a.kt)("a",{parentName:"p",href:"#built-in-types"},"built-in types"),"."),(0,a.kt)("p",null,"User-defined types can define the meaning of these operations by\n",(0,a.kt)("a",{parentName:"p",href:"#extensibility"},"implementing an interface")," provided as part of the Carbon\nstandard library."),(0,a.kt)("h2",{id:"precedence-and-associativity"},"Precedence and associativity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"},'%%{init: {\'themeVariables\': {\'fontFamily\': \'monospace\'}}}%%\ngraph BT\n    negation["-x"]\n    multiplication>"x * y<br>\n                    x / y"]\n    addition>"x + y<br>\n              x - y"]\n    modulo["x % y"]\n\n    multiplication & modulo --\x3e negation\n    addition --\x3e multiplication\n')),(0,a.kt)("small",null,"[Instructions for reading this diagram.](/design/#precedence)"),(0,a.kt)("p",null,"Binary ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," can be freely mixed, and are left-associative."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// -2, same as `((1 - 2) + 3) - 4`.\nvar n: i32 = 1 - 2 + 3 - 4;\n")),(0,a.kt)("p",null,"Binary ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," can be freely mixed, and are left-associative."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// 0.375, same as `((1.0 / 2.0) * 3.0) / 4.0`.\nvar m: f32 = 1.0 / 2.0 * 3.0 / 4.0;\n")),(0,a.kt)("p",null,"Unary ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," has higher precedence than binary ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"%"),". Binary ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"/")," have higher precedence than binary ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// 5, same as `(-1) + ((-2) * (-3))`.\nvar x: i32 = -1 + -2 * -3;\n// Error, parentheses required: no precedence order between `+` and `%`.\nvar y: i32 = 2 + 3 % 5;\n")),(0,a.kt)("h2",{id:"built-in-types"},"Built-in types"),(0,a.kt)("p",null,"For binary operators, if the operands have different built-in types, they are\nconverted as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the types are ",(0,a.kt)("inlineCode",{parentName:"li"},"uN")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"uM"),", or they are ",(0,a.kt)("inlineCode",{parentName:"li"},"iN")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"iM"),", the operands are\nconverted to the larger type."),(0,a.kt)("li",{parentName:"ul"},"If one type is ",(0,a.kt)("inlineCode",{parentName:"li"},"iN")," and the other type is ",(0,a.kt)("inlineCode",{parentName:"li"},"uM"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"M")," < ",(0,a.kt)("inlineCode",{parentName:"li"},"N"),", the ",(0,a.kt)("inlineCode",{parentName:"li"},"uM"),"\noperand is converted to ",(0,a.kt)("inlineCode",{parentName:"li"},"iN"),"."),(0,a.kt)("li",{parentName:"ul"},"If one type is ",(0,a.kt)("inlineCode",{parentName:"li"},"fN")," and the other type is ",(0,a.kt)("inlineCode",{parentName:"li"},"iM")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"uM"),", and there is an\n",(0,a.kt)("a",{parentName:"li",href:"/design/expressions/implicit_conversions#data-types"},"implicit conversion")," from the integer\ntype to ",(0,a.kt)("inlineCode",{parentName:"li"},"fN"),", then the integer operand is converted to ",(0,a.kt)("inlineCode",{parentName:"li"},"fN"),".")),(0,a.kt)("p",null,"More broadly, if one operand is of built-in type and the other operand can be\nimplicitly converted to that type, then it is, unless that behavior is\n",(0,a.kt)("a",{parentName:"p",href:"#extensibility"},"overridden"),"."),(0,a.kt)("p",null,"A built-in arithmetic operation is performed if, after the above conversion\nstep, the operands have the same built-in type. The result type is that type.\nThe result type is never wider than the operands, and the conversions applied to\nthe operands are always lossless, so arithmetic between a wider unsigned integer\ntype and a narrower signed integer is not defined."),(0,a.kt)("p",null,"Although the conversions are always lossless, the arithmetic may still\n",(0,a.kt)("a",{parentName:"p",href:"#overflow-and-other-error-conditions"},"overflow"),"."),(0,a.kt)("h3",{id:"integer-types"},"Integer types"),(0,a.kt)("p",null,"Signed and unsigned integer types support all the arithmetic operators."),(0,a.kt)("p",null,"Signed integer arithmetic produces the usual mathematical result. Unsigned\ninteger arithmetic in ",(0,a.kt)("inlineCode",{parentName:"p"},"uN")," wraps around modulo 2",(0,a.kt)("sup",null,(0,a.kt)("inlineCode",{parentName:"p"},"N")),"."),(0,a.kt)("p",null,"Division truncates towards zero. The result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," operator is defined by\nthe equation ",(0,a.kt)("inlineCode",{parentName:"p"},"a % b == a - a / b * b"),"."),(0,a.kt)("h4",{id:"overflow-and-other-error-conditions"},"Overflow and other error conditions"),(0,a.kt)("p",null,"Integer arithmetic is subject to two classes of problems for which an operation\nhas no representable result:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overflow, where the resulting value is too large to be represented in the\ntype, or, for ",(0,a.kt)("inlineCode",{parentName:"li"},"%"),", when the implied multiplication overflows."),(0,a.kt)("li",{parentName:"ul"},"Division by zero.")),(0,a.kt)("p",null,"Unsigned integer arithmetic cannot overflow, but division by zero can still\noccur."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," All arithmetic operators can overflow for signed integer types. For\nexample, given a value ",(0,a.kt)("inlineCode",{parentName:"p"},"v: iN")," that is the least possible value for its type,\n",(0,a.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v + v"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v - 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v * 2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v / -1"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"v % -1")," all result in overflow."),(0,a.kt)("p",null,"Signed integer overflow and signed or unsigned integer division by zero are\nprogramming errors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In a development build, they will be caught immediately when they happen at\nruntime."),(0,a.kt)("li",{parentName:"ul"},"In a performance build, the optimizer can assume that such conditions don't\noccur. As a consequence, if they do, the behavior of the program is not\ndefined."),(0,a.kt)("li",{parentName:"ul"},"In a hardened build, overflow and division by zero do not result in\nundefined behavior. On overflow and division by zero, either the program\nwill be aborted, or the arithmetic will evaluate to a mathematically\nincorrect result, such as a two's complement result or zero. The program\nmight not in all cases be aborted immediately -- for example, multiple\noverflow checks might be combined into one -- but no control flow or memory\naccess that depends on the value will be performed.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TODO:")," Unify the description of these programming errors with those of\nbit-shift domain errors, document the behavior in a common place and link to it\nfrom here."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TODO:")," In a hardened build, should we prefer to trap on overflow, give a\ntwo's complement result, or produce zero? Using zero may defeat some classes of\nexploit, but comes at a code size and performance cost."),(0,a.kt)("h3",{id:"floating-point-types"},"Floating-point types"),(0,a.kt)("p",null,"Floating-point types support all the arithmetic operators other than ",(0,a.kt)("inlineCode",{parentName:"p"},"%"),".\nFloating-point types in Carbon have IEEE 754 semantics, use the round-to-nearest\nrounding mode, and do not set any floating-point exception state."),(0,a.kt)("p",null,"Because floating-point arithmetic follows IEEE 754 rules: overflow results in\n\xb1\u221e, and division by zero results in either \xb1\u221e or, for 0.0 / 0.0, a quiet NaN."),(0,a.kt)("h3",{id:"strings"},"Strings"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TODO:")," Decide whether strings are built-in types, and whether they support\n",(0,a.kt)("inlineCode",{parentName:"p"},"+")," for concatenation. See\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/issues/457"},"#457"),"."),(0,a.kt)("h2",{id:"extensibility"},"Extensibility"),(0,a.kt)("p",null,"Arithmetic operators can be provided for user-defined types by implementing the\nfollowing family of interfaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Unary `-`.\ninterface Negate {\n  let Result:! Type = Self;\n  fn Op[me: Self]() -> Result;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Binary `+`.\ninterface AddWith(U:! Type) {\n  let Result:! Type = Self;\n  fn Op[me: Self](other: U) -> Result;\n}\nconstraint Add {\n  extends AddWith(Self) where .Result = Self;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Binary `-`.\ninterface SubWith(U:! Type) {\n  let Result:! Type = Self;\n  fn Op[me: Self](other: U) -> Result;\n}\nconstraint Sub {\n  extends SubWith(Self) where .Result = Self;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Binary `*`.\ninterface MulWith(U:! Type) {\n  let Result:! Type = Self;\n  fn Op[me: Self](other: U) -> Result;\n}\nconstraint Mul {\n  extends MulWith(Self) where .Result = Self;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Binary `/`.\ninterface DivWith(U:! Type) {\n  let Result:! Type = Self;\n  fn Op[me: Self](other: U) -> Result;\n}\nconstraint Div {\n  extends DivWith(Self) where .Result = Self;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Binary `%`.\ninterface ModWith(U:! Type) {\n  let Result:! Type = Self;\n  fn Op[me: Self](other: U) -> Result;\n}\nconstraint Mod {\n  extends ModWith(Self) where .Result = Self;\n}\n")),(0,a.kt)("p",null,"Given ",(0,a.kt)("inlineCode",{parentName:"p"},"x: T")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y: U"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The expression ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")," is rewritten to ",(0,a.kt)("inlineCode",{parentName:"li"},"x.(Negate.Op)()"),"."),(0,a.kt)("li",{parentName:"ul"},"The expression ",(0,a.kt)("inlineCode",{parentName:"li"},"x + y")," is rewritten to ",(0,a.kt)("inlineCode",{parentName:"li"},"x.(AddWith(U).Op)(y)"),"."),(0,a.kt)("li",{parentName:"ul"},"The expression ",(0,a.kt)("inlineCode",{parentName:"li"},"x - y")," is rewritten to ",(0,a.kt)("inlineCode",{parentName:"li"},"x.(SubWith(U).Op)(y)"),"."),(0,a.kt)("li",{parentName:"ul"},"The expression ",(0,a.kt)("inlineCode",{parentName:"li"},"x * y")," is rewritten to ",(0,a.kt)("inlineCode",{parentName:"li"},"x.(MulWith(U).Op)(y)"),"."),(0,a.kt)("li",{parentName:"ul"},"The expression ",(0,a.kt)("inlineCode",{parentName:"li"},"x / y")," is rewritten to ",(0,a.kt)("inlineCode",{parentName:"li"},"x.(DivWith(U).Op)(y)"),"."),(0,a.kt)("li",{parentName:"ul"},"The expression ",(0,a.kt)("inlineCode",{parentName:"li"},"x % y")," is rewritten to ",(0,a.kt)("inlineCode",{parentName:"li"},"x.(ModWith(U).Op)(y)"),".")),(0,a.kt)("p",null,"Implementations of these interfaces are provided for built-in types as necessary\nto give the semantics described above."),(0,a.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#use-a-sufficiently-wide-result-type-to-avoid-overflow"},"Use a sufficiently wide result type to avoid overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#guarantee-that-the-program-never-proceeds-with-an-incorrect-value-after-overflow"},"Guarantee that the program never proceeds with an incorrect value after overflow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#guarantee-that-all-integer-arithmetic-is-twos-complement"},"Guarantee that all integer arithmetic is two's complement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#treat-overflow-as-an-error-but-dont-optimize-on-it"},"Treat overflow as an error but don't optimize on it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#dont-let-unsigned-arithmetic-wrap"},"Don't let ",(0,a.kt)("inlineCode",{parentName:"a"},"Unsigned")," arithmetic wrap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#provide-separate-wrapping-types"},"Provide separate wrapping types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#do-not-provide-an-ordering-or-division-for-un"},"Do not provide an ordering or division for ",(0,a.kt)("inlineCode",{parentName:"a"},"uN"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#give-unary---lower-precedence"},"Give unary ",(0,a.kt)("inlineCode",{parentName:"a"},"-")," lower precedence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#include-a-unary-plus-operator"},"Include a unary plus operator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#floating-point-modulo-operator"},"Floating-point modulo operator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#provide-different-division-operators"},"Provide different division operators")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#use-different-division-and-modulo-semantics"},"Use different division and modulo semantics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#use-different-precedence-groups-for-division-and-multiplication"},"Use different precedence groups for division and multiplication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#use-the-same-precedence-group-for-modulo-and-multiplication"},"Use the same precedence group for modulo and multiplication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p1083.md#use-a-different-spelling-for-modulo"},"Use a different spelling for modulo"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/1083"},"#1083: Arithmetic")),(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/1178"},"#1178: Rework operator interfaces"))))}u.isMDXComponent=!0}}]);