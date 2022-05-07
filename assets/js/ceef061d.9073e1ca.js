"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[930],{3847:function(e,n,t){t.d(n,{II:function(){return i},IS:function(){return s},Jj:function(){return c},aB:function(){return l}});var r=t(7294);function o(e){if("number"==typeof e)return e;return{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5}[e]}const i=e=>{const n=e?.every||"second",[t,i]=(0,r.useState)(new Date),[u,s]=(0,r.useState)(o(n));return((e,n)=>{const t=(0,r.useRef)(),o=(0,r.useRef)(),i=(0,r.useCallback)((()=>{clearInterval(o.current),t.current&&t.current()}),[]);(0,r.useEffect)((()=>(null===n||(o.current=setInterval((()=>{const n=e();"function"==typeof n&&(t.current=n)}),n)),i)),[e,n,i])})((()=>{i(new Date)}),u),(0,r.useEffect)((()=>{s(o(n))}),[n]),t},u=(e,n,t,o)=>{const i=e.current?e.current:e;(0,r.useEffect)((()=>("object"==typeof o&&o.initial&&t.bind(i,null)(),i.addEventListener(n,t,o),()=>{i.removeEventListener(n,t)})),[i,t,o,n])},s=(e,n,t)=>u(document,e,n,t),c=e=>{const n=(0,r.useRef)(void 0),[t,o]=(0,r.useState)(e);return(0,r.useEffect)((()=>{n.current=t}),[t]),[t,o,n.current]},a=(e,n,t)=>u(window,e,n,t),l=(e,n)=>a("resize",e,n)},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=a(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,u(u({ref:n},l),{},{components:t})):r.createElement(m,u({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var a=2;a<i;a++)u[a]=t[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1262:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),o=t(2389);function i(e){var n=e.children,t=e.fallback;return(0,o.Z)()?r.createElement(r.Fragment,null,n()):null!=t?t:null}},251:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),o="wrapper_lc4Y",i="title_wBLp",u="children_uSFc",s=function(e){var n=e.title,t=void 0===n?"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442":n,s=e.children;return r.createElement("div",{className:o},r.createElement("div",{className:i},t),r.createElement("div",{className:u},s))},c=(0,r.memo)(s)},8537:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return m},metadata:function(){return w},toc:function(){return y}});var r=t(7462),o=t(3366),i=t(7294),u=t(3905),s=t(1262),c=t(251),a=t(3847);var l=function(e,n){return n[e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]};function d(){var e=(0,i.useState)(0),n=e[0],t=e[1];return(0,a.aB)((function(){t((function(e){return e+1}))})),i.createElement("div",null,"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c "+n+" "+l(n,["\u0440\u0430\u0437","\u0440\u0430\u0437\u0430","\u0440\u0430\u0437"]))}var p=(0,i.memo)(d),f=["components"],m={sidebar_position:7},v="useWindowResize",w={unversionedId:"react-hooks/hooks/use-window-resize",id:"react-hooks/hooks/use-window-resize",title:"useWindowResize",description:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0442\u0440\u0443\u0434\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0431\u0435\u0437 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0448\u0438\u0440\u0438\u043d\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0430,",source:"@site/docs/react-hooks/hooks/use-window-resize.mdx",sourceDirName:"react-hooks/hooks",slug:"/react-hooks/hooks/use-window-resize",permalink:"/docs/docs/react-hooks/hooks/use-window-resize",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"useNativeEvent",permalink:"/docs/docs/react-hooks/hooks/use-native-event"},next:{title:"useScroll",permalink:"/docs/docs/react-hooks/hooks/use-scroll"}},k={},y=[{value:"\u0411\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f useWindowResize",id:"\u0431\u0435\u0437-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-usewindowresize",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c useWindowResize",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-usewindowresize",level:2}],h={toc:y};function b(e){var n=e.components,t=(0,o.Z)(e,f);return(0,u.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"usewindowresize"},"useWindowResize"),(0,u.kt)("p",null,"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0442\u0440\u0443\u0434\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0431\u0435\u0437 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u0448\u0438\u0440\u0438\u043d\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0430,\n\u043d\u043e \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0431\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0417\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u0435\u0440\u0435\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0430\u0432\u0434\u0430\u043d\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0438\n\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u0432\u044b\u0445\u043e\u0434\u0438\u0442\u044c \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u044b ",(0,u.kt)("inlineCode",{parentName:"p"},"CSS")," \u0438 ",(0,u.kt)("inlineCode",{parentName:"p"},"media-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),". \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 ",(0,u.kt)("inlineCode",{parentName:"p"},"resize"),"\n\u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),(0,u.kt)("h2",{id:"\u0431\u0435\u0437-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-usewindowresize"},"\u0411\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f useWindowResize"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState, useEffect } from "react";\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  function handleResize() {\n    setCount((prev) => prev + 1);\n  }\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n\n    return () => {\n      window.removeEventListener("resize", handleResize);\n    };\n  }, []);\n\n  return <div>{`\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c ${count} \u0440\u0430\u0437`}</div>;\n}\n')),(0,u.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c-usewindowresize"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c useWindowResize"),(0,u.kt)("p",null,"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0439 \u0432\u044b\u0448\u0435 \u043a\u043e\u0434 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e, \u043d\u043e \u0438 \u0437\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0448\u0430\u0442\u0435\u043b\u044f, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u0443\u0442\u0435\u0447\u0435\u043a \u043f\u0430\u043c\u044f\u0442\u0438. \u0421 \u0440\u043e\u0441\u0442\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0440\u0430\u0441\u0442\u0451\u0442, \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043c\u0435\u0434\u043b\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438 \u0430\u0431\u0441\u043e\u043e\u043b\u044e\u0442\u043d\u043e \u0442\u043e\u0447\u043d\u043e \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u043c \u0435\u0433\u043e \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u0443\u043a \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u0434\u0430, \u043d\u043e \u0438 \u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043b\u043e\u0433\u0438\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { useWindowResize } from "@kundinos/react-hooks";\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useWindowResize(() => {\n    setCount((prev) => prev + 1);\n  });\n\n  return <div>{`\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c ${count} \u0440\u0430\u0437`}</div>;\n}\n')),(0,u.kt)(c.Z,{mdxType:"ExampleWrapper"},(0,u.kt)(s.Z,{mdxType:"BrowserOnly"},(0,u.kt)(p,{mdxType:"SimpleExample"}))))}b.isMDXComponent=!0}}]);