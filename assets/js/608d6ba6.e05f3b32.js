"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Docs",c={unversionedId:"docs/README",id:"docs/README",title:"Docs",description:"\x3c!--",source:"@site/../docs/README.md",sourceDirName:"docs",slug:"/docs/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Language design",permalink:"/docs/design/"}},l={},s=[{value:"Design",id:"design",level:2},{value:"Project",id:"project",level:2},{value:"Guides",id:"guides",level:2},{value:"Spec",id:"spec",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docs"},"Docs"),(0,o.kt)("p",null,"This directory contains current, accepted documentation underpinning Carbon.\nThese documents cover all aspects of Carbon ranging from the project down to\ndetailed designs for specific language features."),(0,o.kt)("p",null,"If you're trying to learn more about Carbon, we recommend starting at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/"},(0,o.kt)("inlineCode",{parentName:"a"},"/README.md")),"."),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("p",null,"The design of the Carbon language, and the rationale for that design, is\ndocumented in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/"},(0,o.kt)("inlineCode",{parentName:"a"},"design/")," directory"),". This documentation is\nintended to support these audiences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"People who wish to determine whether Carbon would be the right choice to use\nfor a project compared to other existing languages."),(0,o.kt)("li",{parentName:"ul"},"People working on the evolution of the Carbon language who wish to\nunderstand the rationale and motivation for existing design decisions."),(0,o.kt)("li",{parentName:"ul"},"People working on a specification or implementation of the Carbon language\nwho need a detailed understanding of the intended design."),(0,o.kt)("li",{parentName:"ul"},"People writing Carbon code who wish to understand why the language rules are\nthe way they are.")),(0,o.kt)("p",null,"This is in contrast to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/README.md"},"proposals"),", which document the\nindividual decisions that led to this design (along with other changes to the\nCarbon project), including the rationale and alternatives considered."),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/project/"},(0,o.kt)("inlineCode",{parentName:"a"},"project/")," directory")," contains project-related\ndocumentation for Carbon, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/project/goals"},"goals"),", and the\n",(0,o.kt)("a",{parentName:"li",href:"/docs/project/principles/"},"principles")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/project/roadmap"},"roadmap"),"\nderived from those goals,"),(0,o.kt)("li",{parentName:"ul"},"how the project works, and"),(0,o.kt)("li",{parentName:"ul"},"how to contribute.")),(0,o.kt)("h2",{id:"guides"},"Guides"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/"},(0,o.kt)("inlineCode",{parentName:"a"},"guides/")," directory")," contains ",(0,o.kt)("strong",{parentName:"p"},"to-be-written")," end-user\ndocumentation for developers writing programs in Carbon."),(0,o.kt)("h2",{id:"spec"},"Spec"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"spec/"},(0,o.kt)("inlineCode",{parentName:"a"},"spec/")," directory")," contains the ",(0,o.kt)("strong",{parentName:"p"},"to-be-written")," formal\nspecification of the Carbon language. This is for implementers of compilers or\nother tooling. This is intended to complement the interactive\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/explorer/"},"language explorer tool"),"."))}d.isMDXComponent=!0}}]);