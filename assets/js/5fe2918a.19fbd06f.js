"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[232],{3847:function(e,t,n){n.d(t,{II:function(){return a},IS:function(){return c},Jj:function(){return i},aB:function(){return l}});var r=n(7294);function o(e){if("number"==typeof e)return e;return{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5}[e]}const a=e=>{const t=e?.every||"second",[n,a]=(0,r.useState)(new Date),[u,c]=(0,r.useState)(o(t));return((e,t)=>{const n=(0,r.useRef)(),o=(0,r.useRef)(),a=(0,r.useCallback)((()=>{clearInterval(o.current),n.current&&n.current()}),[]);(0,r.useEffect)((()=>(null===t||(o.current=setInterval((()=>{const t=e();"function"==typeof t&&(n.current=t)}),t)),a)),[e,t,a])})((()=>{a(new Date)}),u),(0,r.useEffect)((()=>{c(o(t))}),[t]),n},u=(e,t,n,o)=>{const a=e.current?e.current:e;(0,r.useEffect)((()=>("object"==typeof o&&o.initial&&n.bind(a,null)(),a.addEventListener(t,n,o),()=>{a.removeEventListener(t,n)})),[a,n,o,t])},c=(e,t,n)=>u(document,e,t,n),i=e=>{const t=(0,r.useRef)(void 0),[n,o]=(0,r.useState)(e);return(0,r.useEffect)((()=>{t.current=n}),[n]),[n,o,t.current]},s=(e,t,n)=>u(window,e,t,n),l=(e,t)=>s("resize",e,t)},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},251:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o="wrapper_lc4Y",a="title_wBLp",u="children_uSFc",c=function(e){var t=e.title,n=void 0===t?"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442":t,c=e.children;return r.createElement("div",{className:o},r.createElement("div",{className:a},n),r.createElement("div",{className:u},c))},i=(0,r.memo)(c)},6749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return g},metadata:function(){return E},toc:function(){return D}});var r=n(7462),o=n(3366),a=n(7294),u=n(3905),c=n(251),i=n(3847);function s(){var e=(0,i.II)(),t=e.getMonth(),n=e.getDate(),r=e.getFullYear(),o=e.getHours(),u=e.getMinutes(),c=e.getSeconds();return a.createElement("div",null,a.createElement("p",{style:{marginBottom:"10px"}},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0434\u0430\u0442\u0430: ",a.createElement("strong",null,t+"."+n+"."+r)),a.createElement("p",{style:{marginBottom:"0"}},"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f: ",a.createElement("strong",null,o+":"+u+":"+c)))}var l=(0,a.memo)(s),p={p:{marginBottom:"10px"}};function m(e){return e<10?"0"+e:String(e)}var d=function(e){var t=e.currentDate,n=e.withMs,r=m(t.getHours()),o=m(t.getMinutes()),u=m(t.getSeconds()),c=t.getMilliseconds(),i=r+":"+o+":"+u;return n&&(i+=":"+c),a.createElement("strong",null,i)},f=function(e){var t=e.every,n=e.withMs,r=(0,i.II)({every:t});return a.createElement(d,{currentDate:r,withMs:n})};function v(){return a.createElement("div",null,a.createElement("p",{style:p.p},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u0443\u044e \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0443: ",a.createElement(f,{every:"millisecond",withMs:!0})),a.createElement("p",{style:p.p},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443: ",a.createElement(f,{every:"second"})),a.createElement("p",{style:p.p},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0435 5 \u0441\u0435\u043a\u0443\u043d\u0434: ",a.createElement(f,{every:5e3})),a.createElement("p",{style:{marginBottom:0}},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u0443\u044e \u043c\u0438\u043d\u0443\u0442\u0443: ",a.createElement(f,{every:"minute"})))}var y=(0,a.memo)(v),k=["components"],g={sidebar_position:1},h="useCurrentDate",E={unversionedId:"react-hooks/hooks/use-current-date",id:"react-hooks/hooks/use-current-date",title:"useCurrentDate",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435\u0439, \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0441\u0447\u0435\u0442\u0430 \u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0434\u0430\u0442\u044b/\u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f.",source:"@site/docs/react-hooks/hooks/use-current-date.mdx",sourceDirName:"react-hooks/hooks",slug:"/react-hooks/hooks/use-current-date",permalink:"/docs/react-hooks/hooks/use-current-date",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/docs/react-hooks/motivation"},next:{title:"useDocumentEvent",permalink:"/docs/react-hooks/hooks/use-document-event"}},b={},D=[{value:"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",id:"\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e",level:2},{value:"\u041f\u0435\u0440\u0438\u043e\u0434 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u0442\u044b",id:"\u043f\u0435\u0440\u0438\u043e\u0434-\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f-\u0434\u0430\u0442\u044b",level:2}],O={toc:D};function w(e){var t=e.components,n=(0,o.Z)(e,k);return(0,u.kt)("wrapper",(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"usecurrentdate"},"useCurrentDate"),(0,u.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435\u0439, \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u043e\u0442\u0441\u0447\u0435\u0442\u0430 \u0438 \u043b\u044e\u0431\u043e\u0433\u043e \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0434\u0430\u0442\u044b/\u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f."),(0,u.kt)("h2",{id:"\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435-\u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},"\u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),(0,u.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0441\u0432\u043e\u0451 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCurrentDate } from "@kundinos/react-hooks";\n\nfunction Example() {\n  const currentDate = useCurrentDate();\n\n  // \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u044b\n  const month = currentDate.getMonth();\n  const date = currentDate.getDate();\n  const fullYear = currentDate.getFullYear();\n  const hours = currentDate.getHours();\n  const minutes = currentDate.getMinutes();\n  const seconds = currentDate.getSeconds();\n\n  return (\n    <div>\n      <p>{`\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0434\u0430\u0442\u0430: ${month}.${date}.${fullYear}`}</p>\n      <p>{`\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f: ${hours}:${minutes}:${seconds}`}</p>\n    </div>\n  );\n}\n')),(0,u.kt)(c.Z,{mdxType:"ExampleWrapper"},(0,u.kt)(l,{mdxType:"SimpleExample"})),(0,u.kt)("h2",{id:"\u043f\u0435\u0440\u0438\u043e\u0434-\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f-\u0434\u0430\u0442\u044b"},"\u041f\u0435\u0440\u0438\u043e\u0434 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u0442\u044b"),(0,u.kt)("p",null,"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442\u044c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u0442\u0443 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0437 \u0432 \u043c\u0438\u043d\u0443\u0442\u0443, \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443. \u0418 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043b\u0435\u0433\u043a\u043e \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f, \u043f\u0435\u0440\u0435\u0434\u0430\u0432 \u0432 \u0445\u0443\u043a \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,u.kt)("inlineCode",{parentName:"p"},"every"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 ",(0,u.kt)("inlineCode",{parentName:"p"},"millisecond"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"second"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"minute"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"hour"),", ",(0,u.kt)("inlineCode",{parentName:"p"},"day")," \u0438\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},'// \u0411\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0435 5 \u0441\u0435\u043a\u0443\u043d\u0434\nconst currentDate = useCurrentDate({ every: 5 * 1000 });\n\n// \u0411\u0443\u0434\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0447\u0430\u0441\nconst currentDate = useCurrentDate({ every: "hour" });\n')),(0,u.kt)(c.Z,{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u044b",mdxType:"ExampleWrapper"},(0,u.kt)(y,{mdxType:"ManyPeriodsExample"})))}w.isMDXComponent=!0}}]);