"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2092],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},o="return",l={unversionedId:"docs/design/control_flow/return",id:"docs/design/control_flow/return",title:"return",description:"\x3c!--",source:"@site/../docs/design/control_flow/return.md",sourceDirName:"docs/design/control_flow",slug:"/docs/design/control_flow/return",permalink:"/docs/design/control_flow/return",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/design/control_flow/return.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Loops",permalink:"/docs/design/control_flow/loops"},next:{title:"Expressions",permalink:"/docs/design/expressions/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Returning empty tuples",id:"returning-empty-tuples",level:3},{value:"<code>returned var</code>",id:"returned-var",level:3},{value:"<code>return</code> and initialization",id:"return-and-initialization",level:3},{value:"Alternatives considered",id:"alternatives-considered",level:2},{value:"References",id:"references",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"return"},(0,a.kt)("inlineCode",{parentName:"h1"},"return")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement ends the flow of execution within a\n",(0,a.kt)("a",{parentName:"p",href:"/docs/design/functions"},"function"),", returning execution to the caller. Its syntax is:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"return")," ",(0,a.kt)("em",{parentName:"p"},"[ expression ]")," ",(0,a.kt)("inlineCode",{parentName:"p"},";"))),(0,a.kt)("p",null,"If the function returns a value to the caller, that value is provided by an\nexpression in the return statement. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"fn Sum(a: i32, b: i32) -> i32 {\n  return a + b;\n}\n")),(0,a.kt)("p",null,"When a return type is specified, a function must ",(0,a.kt)("em",{parentName:"p"},"always")," ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," before\ncontrol flow can reach the end of the function body. In other words,\n",(0,a.kt)("inlineCode",{parentName:"p"},"fn DoNothing() -> i32 {}")," would be invalid because execution will reach the end\nof the function body without returning a value."),(0,a.kt)("h3",{id:"returning-empty-tuples"},"Returning empty tuples"),(0,a.kt)("p",null,"Returning an empty tuple ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," is special, and similar to C++'s ",(0,a.kt)("inlineCode",{parentName:"p"},"void")," returns.\nWhen a function has no specified return type, its return type is implicitly\n",(0,a.kt)("inlineCode",{parentName:"p"},"()"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," must not have an expression argument in this case. It also has an\nimplicit ",(0,a.kt)("inlineCode",{parentName:"p"},"return;")," at the end of the function body. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"// No return type is specified, so this returns `()` implicitly.\nfn MaybeDraw(should_draw: bool) {\n  if (!should_draw) {\n    // No expression is passed to `return`.\n    return;\n  }\n  ActuallyDraw();\n  // There is an implicit `return;` here.\n}\n")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"-> ()")," is specified in the function signature, the return expression is\nrequired. Omitting ",(0,a.kt)("inlineCode",{parentName:"p"},"-> ()")," is encouraged, but specifying it is supported for\ngeneralized code structures, including ",(0,a.kt)("a",{parentName:"p",href:"/docs/design/templates"},"templates"),". In order to\nbe consistent with other explicitly specified return types, ",(0,a.kt)("inlineCode",{parentName:"p"},"return;")," is invalid\nin this case. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"// `-> ()` defines an explicit return value.\nfn MaybeDraw(should_draw: bool) -> () {\n  if (!should_draw) {\n    // As a consequence, a return value must be passed.\n    return ();\n  }\n  ActuallyDraw();\n  // The return value must again be explicit.\n  return ();\n}\n")),(0,a.kt)("h3",{id:"returned-var"},(0,a.kt)("inlineCode",{parentName:"h3"},"returned var")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/design/variables"},"Variables")," may be declared with a ",(0,a.kt)("inlineCode",{parentName:"p"},"returned")," statement. Its\nsyntax is:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"returned")," ",(0,a.kt)("em",{parentName:"p"},"var statement"))),(0,a.kt)("p",null,"When a variable is marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"returned"),", it must be the only ",(0,a.kt)("inlineCode",{parentName:"p"},"returned")," value\nin-scope."),(0,a.kt)("p",null,"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var")," is returned, the specific syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"return var")," must be used.\nReturning expressions is not allowed while a ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var")," is in scope. For\nexample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"fn MakeCircle(radius: i32) -> Circle {\n  returned var c: Circle;\n  c.radius = radius;\n  // `return c` would be invalid because `returned` is in use.\n  return var;\n}\n")),(0,a.kt)("p",null,"If control flow exits the scope of a ",(0,a.kt)("inlineCode",{parentName:"p"},"returned")," variable in any way other than\n",(0,a.kt)("inlineCode",{parentName:"p"},"return var"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var"),"'s lifetime ends as normal. When this occurs,\n",(0,a.kt)("inlineCode",{parentName:"p"},"return")," may again be used with expressions. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"fn MakePointInArea(area: Area, preferred_x: i32, preferred_y: i32) -> Point {\n  if (preferred_x >= 0 && preferred_y >= 0) {\n    returned var p: Point = { .x = preferred_x, .y = preferred_y };\n    if (area.Contains(p)) {\n      return var;\n    }\n    // p's lifetime ends here when `return var` is not reached.\n  }\n\n  return area.RandomPoint();\n}\n")),(0,a.kt)("h3",{id:"return-and-initialization"},(0,a.kt)("inlineCode",{parentName:"h3"},"return")," and initialization"),(0,a.kt)("p",null,"Consider the following common initialization code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"fn CreateMyObject() -> MyType {\n  return <expression>;\n}\n\nvar x: MyType = CreateMyObject();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<expression>")," in the return statement of ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateMyObject")," initializes the\nvariable ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," here. There is no copy or similar. It is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"var x: MyType = <expression>;\n")),(0,a.kt)("p",null,"This applies recursively, similar to C++'s guaranteed copy elision."),(0,a.kt)("p",null,"In the case where additional statements should be run between constructing the\nreturn value and returning, the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var")," allows for improved\nefficiency because the ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var")," can directly use the address of ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"\ndeclared by the caller. For example, here the ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var vector")," in\n",(0,a.kt)("inlineCode",{parentName:"p"},"CreateVector")," uses the storage of ",(0,a.kt)("inlineCode",{parentName:"p"},"my_vector")," for initialization, avoiding a\ncopy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-carbon"},"fn CreateVector(x: i32, y: i32) -> Vector {\n  returned var vector: Vector;\n  vector.x = x;\n  vector.y = y;\n  return var;\n}\n\nvar my_vector: Vector = CreateVector(1, 2);\n")),(0,a.kt)("p",null,"As a consequence, ",(0,a.kt)("inlineCode",{parentName:"p"},"returned var")," is encouraged because it makes it easier to\navoid copies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TODO:"),' Have some discussion of RVO and NRVO as they are found in C++ here,\nand the fact that Carbon provides the essential part of these as first-class\nfeatures and therefore they are never "optimizations" or done implicitly or\noptionally.')),(0,a.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0415.md#implicit-or-expression-returns"},"Implicit or expression returns")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0257.md#named-return-variable-in-place-of-a-return-type"},"Named return variable in place of a return type")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0538.md#retain-the-c-rule"},"Retain the C++ rule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0538.md#fully-divorce-functions-and-procedures"},"Fully divorce functions and procedures"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/257"},"#257: Initialization of memory and variables")),(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/415"},"#415: Syntax: ",(0,a.kt)("inlineCode",{parentName:"a"},"return"))),(0,a.kt)("li",{parentName:"ul"},"Proposal\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/pull/538"},"#538: ",(0,a.kt)("inlineCode",{parentName:"a"},"return")," with no argument"))))}c.isMDXComponent=!0}}]);