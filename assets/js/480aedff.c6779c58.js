"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3695],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={},o="Principle: Information accumulation",l={unversionedId:"docs/project/principles/information_accumulation",id:"docs/project/principles/information_accumulation",title:"Principle: Information accumulation",description:"\x3c!--",source:"@site/../docs/project/principles/information_accumulation.md",sourceDirName:"docs/project/principles",slug:"/docs/project/principles/information_accumulation",permalink:"/docs/project/principles/information_accumulation",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/project/principles/information_accumulation.md",tags:[],version:"current",frontMatter:{},sidebar:"project",previous:{title:"Principle: Errors are values",permalink:"/docs/project/principles/error_handling"},next:{title:"Principle: All APIs are library APIs",permalink:"/docs/project/principles/library_apis_only"}},c={},s=[{value:"Background",id:"background",level:2},{value:"Principle",id:"principle",level:2},{value:"Applications of this principle",id:"applications-of-this-principle",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Alternatives considered",id:"alternatives-considered",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"principle-information-accumulation"},"Principle: Information accumulation"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"There are many different sources of information in a program, and a tool or a\nhuman interpreting code will not in general have full information, but will\nstill want to draw conclusions about the code."),(0,r.kt)("p",null,"Different languages take different approaches to this problem. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In C, information is accumulated linearly in each source file independently,\nand only information from earlier in the same file is available. A program\ncan observe that information is incomplete at one point and complete at\nanother."),(0,r.kt)("li",{parentName:"ul"},"In C++, the behavior is largely similar to C, except:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Within certain contexts in a class, information from later in the class\ndefinition is available."),(0,r.kt)("li",{parentName:"ul"},"With C++20 modules, information from other source files can be made\navailable."),(0,r.kt)("li",{parentName:"ul"},"It is easier to observe -- perhaps even accidentally -- that information\nis accumulated incrementally."))),(0,r.kt)("li",{parentName:"ul"},"In Rust, all information from the entire crate is available everywhere\nwithin that crate, with exceptions for constructs like proc macros that can\nsee the state of the program being incrementally built."),(0,r.kt)("li",{parentName:"ul"},"In Swift, all information from the entire source file is available within\nthat source file.")),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"In Carbon, information is accumulated incrementally within each source file.\nCarbon programs are invalid if they would have a different meaning if more\ninformation were available."),(0,r.kt)("p",null,"Carbon source files can be interpreted top-down, without referring to\ninformation that appears substantially later in a file. Source files are\nexpected to be organized into a topological order where that makes sense, with\nforward declarations used to introduce names before they are first referenced\nwhen necessary."),(0,r.kt)("p",null,"If a program attempts to use information that has not yet been provided, the\nprogram is invalid. There are multiple options for how this can be reported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The program can be rejected as soon as it tries to use information that\nmight not be known yet."),(0,r.kt)("li",{parentName:"ul"},"For the case where the information can only be provided in the same source\nfile, an assumption about the information can be made at the point where it\nis needed, and the program can be rejected only if that assumption turns out\nto be incorrect.")),(0,r.kt)("p",null,"Disallowing programs from changing meaning in the context of more information\nensures that the program is interpreted consistently or is rejected. This is\nespecially important to the coherence of generics and templates."),(0,r.kt)("h2",{id:"applications-of-this-principle"},"Applications of this principle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As in C++, and unlike in Rust and Swift, name lookup only finds names\ndeclared earlier."),(0,r.kt)("li",{parentName:"ul"},"Classes are incomplete until the end of their definition. Unlike in C++, any\nattempt to observe a property of an incomplete class that is not known until\nthe class is complete renders the program invalid."),(0,r.kt)("li",{parentName:"ul"},"When an ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," needs to be resolved, only those ",(0,r.kt)("inlineCode",{parentName:"li"},"impl"),"s that have already\nbeen declared are considered. However, if a later ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," would change the\nresult of any earlier ",(0,r.kt)("inlineCode",{parentName:"li"},"impl")," lookup, the program is invalid.")),(0,r.kt)("h2",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"Because a class is not complete until its definition has been fully parsed,\napplying this rule would make it impossible to define most member functions\nwithin the class definition. In order to still provide the convenience of\ndefining class member functions inline, such member function bodies are deferred\nand processed as if they appeared immediately after the end of the outermost\nenclosing class, like in C++."),(0,r.kt)("h2",{id:"alternatives-considered"},"Alternatives considered"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow information to be used before it is provided\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0875.md#strict-global-consistency"},"globally"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0875.md#context-sensitive-local-consistency"},"within a file"),", or\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0875.md#top-down-with-minimally-deferred-type-checking"},"within a top-level declaration"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0875.md#strict-top-down"},"Do not allow inline method bodies to use members before they are declared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/p0875.md#disallow-separate-declaration-and-definition"},"Do not allow separate declaration and definition"))))}u.isMDXComponent=!0}}]);