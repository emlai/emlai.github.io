"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,y=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a="Bidirectional interoperability with C/C++",l={unversionedId:"interoperability/README",id:"interoperability/README",title:"Bidirectional interoperability with C/C++",description:"\x3c!--",source:"@site/../docs/design/interoperability/README.md",sourceDirName:"interoperability",slug:"/interoperability/",permalink:"/design/interoperability/",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/interoperability/README.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Generics: Terminology",permalink:"/design/generics/terminology"},next:{title:"Interoperability philosophy and goals",permalink:"/design/interoperability/philosophy_and_goals"}},s={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Philosophy and goals",id:"philosophy-and-goals",level:2},{value:"Overview",id:"overview",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bidirectional-interoperability-with-cc"},"Bidirectional interoperability with C/C++"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#philosophy-and-goals"},"Philosophy and goals")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overview"},"Overview"))),(0,o.kt)("h2",{id:"philosophy-and-goals"},"Philosophy and goals"),(0,o.kt)("p",null,"The C++ interoperability layer of Carbon allows a subset of C++ APIs to be\naccessed from Carbon code, and similarly a subset of Carbon APIs to be accessed\nfrom C++ code. This requires expressing one language as a subset of the other.\nBridge code may be needed to map some APIs into the relevant subset, but the\nconstraints on expressivity should be loose enough to keep the amount of such\nbridge code sustainable."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/design/interoperability/philosophy_and_goals"},"interoperability philosophy and goals")," provide\nmore detail."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);