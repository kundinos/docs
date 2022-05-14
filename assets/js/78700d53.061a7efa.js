"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[989],{3847:function(e,n,t){t.d(n,{II:function(){return c},IS:function(){return a},Jj:function(){return i},Yz:function(){return o},aB:function(){return p},c3:function(){return s}});var r=t(7294);const o=(e,n)=>{const t=(0,r.useRef)(),o=(0,r.useRef)(),u=(0,r.useCallback)((()=>{clearInterval(o.current),t.current&&t.current()}),[]);return(0,r.useEffect)((()=>(null===n||(o.current=setInterval((()=>{const n=e();"function"==typeof n&&(t.current=n)}),n)),u)),[e,n,u]),{resetInterval:u}};function u(e){if("number"==typeof e)return e;return{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5}[e]}const c=e=>{const n=e?.every||"second",[t,c]=(0,r.useState)(new Date),[l,a]=(0,r.useState)(u(n));return o((()=>{c(new Date)}),l),(0,r.useEffect)((()=>{a(u(n))}),[n]),t},l=(e,n,t,o)=>{const u=e.current?e.current:e;(0,r.useEffect)((()=>("object"==typeof o&&o.initial&&t.bind(u,null)(),u.addEventListener(n,t,o),()=>{u.removeEventListener(n,t)})),[u,t,o,n])},a=(e,n,t)=>l(document,e,n,t),i=e=>{const n=(0,r.useRef)(void 0),[t,o]=(0,r.useState)(e);return(0,r.useEffect)((()=>{n.current=t}),[t]),[t,o,n.current]},s=(e={})=>{const{onIdle:n,onWakeUp:t}=e,[o,u]=(0,r.useState)(!1),c=(0,r.useRef)(e.timeout||3e3),l=(0,r.useRef)(),i=(0,r.useCallback)((e=>{o||(l.current.reset(),u(!0),n&&n(e))}),[o,n]),s=(0,r.useCallback)((e=>{o&&(l.current.reset(),u(!1),t&&t(e))}),[o,t]),d=(0,r.useCallback)((e=>{"hidden"===document.visibilityState?i(e):s(e)}),[i,s]);return a("visibilitychange",d),a("click",s),a("keydown",s),a("mousemove",s),l.current=((e,n)=>{const t=(0,r.useRef)(null),o=(0,r.useRef)(),u=(0,r.useCallback)((()=>{clearTimeout(o.current),"function"==typeof t.current&&t.current()}),[]),c=(0,r.useCallback)((()=>{o.current=setTimeout((()=>{t.current=e()}),n)}),[e,n]);return(0,r.useEffect)((()=>(c(),u)),[u,c]),{reset:u,repeat:c}})(i,c.current),o},d=(e,n,t)=>l(window,e,n,t),p=(e,n)=>d("resize",e,n)},3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),i=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||u;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=t.length,c=new Array(u);c[0]=p;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<u;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1262:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),o=t(2389);function u(e){var n=e.children,t=e.fallback;return(0,o.Z)()?r.createElement(r.Fragment,null,n()):null!=t?t:null}},251:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294),o="wrapper_lc4Y",u="title_wBLp",c="children_uSFc",l=function(e){var n=e.title,t=void 0===n?"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442":n,l=e.children;return r.createElement("div",{className:o},r.createElement("div",{className:u},t),r.createElement("div",{className:c},l))},a=(0,r.memo)(l)},4148:function(e,n,t){t.r(n),t.d(n,{assets:function(){return O},contentTitle:function(){return g},default:function(){return j},frontMatter:function(){return E},metadata:function(){return x},toc:function(){return I}});var r=t(7462),o=t(3366),u=t(7294),c=t(3905),l=t(251),a=t(3847),i=t(1262);function s(){var e=(0,a.c3)();return u.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c "+(e?"\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442":"\u0430\u043a\u0442\u0438\u0432\u0435\u043d"))}function d(){return u.createElement(i.Z,null,(function(){return u.createElement(s,null)}))}var p=(0,u.memo)(d);function f(){var e=(0,u.useState)(0),n=e[0],t=e[1],r=(0,a.c3)({timeout:11e3,onWakeUp:function(){return t(0)}}),o=r?null:1e3;return(0,a.Yz)((function(){t((function(e){return e+1}))}),o),u.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c "+(r?"\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442":"\u0430\u043a\u0442\u0438\u0432\u0435\u043d "+n+" \u0441\u0435\u043a\u0443\u043d\u0434"))}function m(){return u.createElement(i.Z,null,(function(){return u.createElement(f,null)}))}var k=(0,u.memo)(m);function v(){return(0,a.c3)({onWakeUp:function(){return console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u043e\u0441\u043d\u0443\u043b\u0441\u044f!")},onIdle:function(){return console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442\u2026")}}),u.createElement("div",null,"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 :)")}function y(){return u.createElement(i.Z,null,(function(){return u.createElement(v,null)}))}var b=(0,u.memo)(y),h=["components"],E={sidebar_position:3},g="useIdle",x={unversionedId:"react-hooks/hooks/use-idle",id:"react-hooks/hooks/use-idle",title:"useIdle",description:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u043d\u0430\u0447\u0430\u043b \u0447\u0442\u043e-\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u043f\u043e\u0441\u043b\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0434\u043d\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",source:"@site/docs/react-hooks/hooks/use-idle.mdx",sourceDirName:"react-hooks/hooks",slug:"/react-hooks/hooks/use-idle",permalink:"/docs/docs/react-hooks/hooks/use-idle",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useFullState",permalink:"/docs/docs/react-hooks/hooks/use-full-state"},next:{title:"useInterval",permalink:"/docs/docs/react-hooks/hooks/use-interval"}},O={},I=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",id:"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435-\u0432\u0440\u0435\u043c\u044f-\u0434\u043e-\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",level:2},{value:"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f",id:"\u0441\u043e\u0431\u044b\u0442\u0438\u044f-\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-\u0438-\u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f",level:2}],w={toc:I};function j(e){var n=e.components,t=(0,o.Z)(e,h);return(0,c.kt)("wrapper",(0,r.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"useidle"},"useIdle"),(0,c.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u043d\u0430\u0447\u0430\u043b \u0447\u0442\u043e-\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u043f\u043e\u0441\u043b\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043e\u0434\u043d\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.\n\u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0435 \u0438\u0433\u0440\u0443 \u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0451 \u043d\u0430 \u043f\u0430\u0443\u0437\u0443, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e,\n\u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0435\u0440\u043d\u0443\u043b\u0441\u044f \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0441 \u0432\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u043e\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0435\u0451."),(0,c.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useIdle } from "@kundinos/react-hooks";\n\nfunction Example() {\n  const isIdle = useIdle();\n\n  return <div>{`\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ${isIdle ? "\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442" : "\u0430\u043a\u0442\u0438\u0432\u0435\u043d"}`}</div>;\n}\n')),(0,c.kt)(l.Z,{mdxType:"ExampleWrapper"},(0,c.kt)(p,{mdxType:"SimpleExample"})),(0,c.kt)("h2",{id:"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435-\u0432\u0440\u0435\u043c\u044f-\u0434\u043e-\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"),(0,c.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 3-\u0445 \u0441\u0435\u043a\u0443\u043d\u0434. \u041d\u043e \u044d\u0442\u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useIdle } from "@kundinos/react-hooks";\n\nfunction Example() {\n  const isIdle = useIdle({ timeout: 10 * 1000 });\n\n  return <div>{`\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ${isIdle ? "\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442" : "\u0430\u043a\u0442\u0438\u0432\u0435\u043d"}`}</div>;\n}\n')),(0,c.kt)(l.Z,{mdxType:"ExampleWrapper"},(0,c.kt)(k,{mdxType:"CustomTimeExample"})),(0,c.kt)("h2",{id:"\u0441\u043e\u0431\u044b\u0442\u0438\u044f-\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f-\u0438-\u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f"},"\u0421\u043e\u0431\u044b\u0442\u0438\u044f \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u043f\u0440\u043e\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u044f"),(0,c.kt)("p",null,'\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0444\u043b\u0430\u0433 "\u0430\u043a\u0442\u0438\u0432\u0435\u043d/\u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442", \u043d\u043e \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443.\n\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0445\u0443\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f ',(0,c.kt)("inlineCode",{parentName:"p"},"onIdle")," \u0438 ",(0,c.kt)("inlineCode",{parentName:"p"},"onWakeUp"),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u043a\u0430\u043a \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043d\u0438\u0436\u0435:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useIdle } from "@kundinos/react-hooks";\n\nfunction Example() {\n  useIdle({\n    onWakeUp: () => console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u043e\u0441\u043d\u0443\u043b\u0441\u044f!"),\n    onIdle: () => console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442\u2026"),\n  });\n\n  return <div>\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 :)</div>;\n}\n')),(0,c.kt)(l.Z,{mdxType:"ExampleWrapper"},(0,c.kt)(b,{mdxType:"EventsExample"})))}j.isMDXComponent=!0}}]);