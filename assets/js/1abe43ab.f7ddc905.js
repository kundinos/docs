"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[321],{3847:(e,t,n)=>{n.d(t,{II:()=>l,IS:()=>s,Jj:()=>c,OT:()=>d,Yz:()=>a,c3:()=>i,w_:()=>m});var r=n(7294);const a=(e,t)=>{const n=(0,r.useRef)(null),a=(0,r.useRef)(),o=(0,r.useCallback)((()=>{clearInterval(a.current),"function"==typeof n.current&&n.current()}),[]);return(0,r.useEffect)((()=>(null===t||(a.current=setInterval((()=>{n.current=e()}),t)),o)),[e,t,o]),{resetInterval:o}};function o(e){if("number"==typeof e)return e;return{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5}[e]}const l=e=>{const t=e?.every||"second",[n,l]=(0,r.useState)(new Date),[u,s]=(0,r.useState)(o(t));return a((()=>{l(new Date)}),u),(0,r.useEffect)((()=>{s(o(t))}),[t]),n},u=(e,t,n,a)=>{const o=e.current?e.current:e;(0,r.useEffect)((()=>("object"==typeof a&&a.initial&&n.bind(o,null)(),o.addEventListener(t,n,a),()=>{o.removeEventListener(t,n)})),[o,n,a,t])},s=(e,t,n)=>u(document,e,t,n),c=e=>{const t=(0,r.useRef)(void 0),[n,a]=(0,r.useState)(e);return(0,r.useEffect)((()=>{t.current=n}),[n]),[n,a,t.current]},i=(e={})=>{const{onIdle:t,onWakeUp:n}=e,[a,o]=(0,r.useState)(!1),l=(0,r.useRef)(e.timeout||3e3),u=(0,r.useRef)(),c=(0,r.useCallback)((e=>{u.current.reset(),a||(o(!0),t&&t(e))}),[a,t]),i=(0,r.useCallback)((e=>{u.current.repeat(),a&&(o(!1),n&&n(e))}),[a,n]),p=(0,r.useCallback)((e=>{"hidden"===document.visibilityState?c(e):i(e)}),[c,i]);return u.current=((e,t)=>{const n=(0,r.useRef)(null),a=(0,r.useRef)(),o=(0,r.useRef)(!1),l=(0,r.useCallback)((()=>{clearTimeout(a.current),"function"==typeof n.current&&n.current()}),[]),u=(0,r.useCallback)((()=>{if(null===t)return l();a.current=setTimeout((()=>{n.current=e(),o.current=!0}),t)}),[e,t,l]),s=(0,r.useCallback)((()=>{o.current=!1,l(),u()}),[l,u]);return(0,r.useEffect)((()=>(o.current||u(),l)),[l,u]),{reset:l,repeat:s}})(c,l.current),s("visibilitychange",p),s("click",i),s("keydown",i),s("mousemove",i),s("scroll",i),a},p=(e,t,n)=>u(window,e,t,n),m=(e,t)=>p("resize",e,t),d=(e=!1)=>{const[t,n]=(0,r.useState)(e);return[t,(0,r.useCallback)((()=>n((e=>!e))),[])]}},3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(v,l(l({ref:t},i),{},{components:n})):r.createElement(v,l({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(2389);function o(e){let{children:t,fallback:n}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,t()):null!=n?n:null}},251:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294);const a="wrapper_lc4Y",o="title_wBLp",l="children_uSFc",u=e=>{const{title:t="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",children:n}=e;return r.createElement("div",{className:a},r.createElement("div",{className:o},t),r.createElement("div",{className:l},n))},s=(0,r.memo)(u)},2787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>E,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(7462),a=n(7294),o=n(3905),l=n(251),u=n(3847),s=n(1262);function c(){const[e,t]=(0,a.useState)(0);return(0,u.Yz)((()=>{t((e=>e+1))}),1e3),a.createElement("div",null,"\u042d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 "+e+" \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434")}function i(){return a.createElement(s.Z,null,(()=>a.createElement(c,null)))}const p=(0,a.memo)(i);function m(){const[e,t]=(0,a.useState)(1),[n,r]=(0,a.useState)(!1),[o,l]=(0,a.useState)(1e3);return(0,u.Yz)((()=>{t((e=>e+1))}),n?null:o),a.createElement("div",null,a.createElement("div",{style:{display:"flex",columnGap:"20px"}},a.createElement("input",{type:"number",value:o,onChange:e=>l(+e.currentTarget.value)}),a.createElement("button",{onClick:()=>r((e=>!e))},n?"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0430\u0443\u0437\u0443")),a.createElement("div",null,"\u0421\u0447\u0435\u0442\u0447\u0438\u043a: "+e))}function d(){return a.createElement(s.Z,null,(()=>a.createElement(m,null)))}const v=(0,a.memo)(d),f={sidebar_position:4},k="useInterval",y={unversionedId:"react-hooks/hooks/use-interval",id:"react-hooks/hooks/use-interval",title:"useInterval",description:"\u042f \u043d\u0430\u0442\u043a\u043d\u0443\u043b\u0441\u044f \u043d\u0430 \u044d\u0442\u043e\u0442 \u0445\u0443\u043a \u0432 \u043f\u043e\u0441\u0442\u0435 \u0414\u044d\u043d\u0430 \u0410\u0431\u0440\u0430\u043c\u043e\u0432\u0430 \u0438 \u0431\u044b\u043b",source:"@site/docs/react-hooks/hooks/use-interval.mdx",sourceDirName:"react-hooks/hooks",slug:"/react-hooks/hooks/use-interval",permalink:"/docs/react-hooks/hooks/use-interval",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useIdle",permalink:"/docs/react-hooks/hooks/use-idle"},next:{title:"useKeyboardEvents",permalink:"/docs/react-hooks/hooks/use-keyboard-events"}},h={},b=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",level:2}],g={toc:b};function E(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useinterval"},"useInterval"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u042f \u043d\u0430\u0442\u043a\u043d\u0443\u043b\u0441\u044f \u043d\u0430 \u044d\u0442\u043e\u0442 \u0445\u0443\u043a \u0432 ",(0,o.kt)("a",{parentName:"p",href:"https://overreacted.io/making-setinterval-declarative-with-react-hooks/"},"\u043f\u043e\u0441\u0442\u0435 \u0414\u044d\u043d\u0430 \u0410\u0431\u0440\u0430\u043c\u043e\u0432\u0430")," \u0438 \u0431\u044b\u043b\n\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d \u0438\u0434\u0435\u0435\u0439 \u0445\u0443\u043a\u043e\u0432 \u0438 \u0442\u0435\u043c, \u043a\u0430\u043a \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0434"))),(0,o.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval")," \u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0433\u043e \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c,\n\u0430 \u0442\u0430\u043a\u0436\u0435 \u0438\u0437\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u043e\u043e\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"useInterval")," \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u044d\u0442\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e."),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { useInterval } from "@kundinos/react-hooks";\n\nfunction Example() {\n  const [seconds, setSeconds] = useState(0);\n\n  useInterval(() => {\n    setSeconds((prev) => prev + 1);\n  }, 1000);\n\n  return <div>{`\u042d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430 ${seconds} \u0441\u0435\u043a\u0443\u043d\u0434 \u043d\u0430\u0437\u0430\u0434`}</div>;\n}\n')),(0,o.kt)(l.Z,{mdxType:"ExampleWrapper"},(0,o.kt)(p,{mdxType:"SimpleExample"})),(0,o.kt)("h2",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useInterval")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u043f\u0430\u0443\u0437\u0443, \u043f\u0440\u0438\u0447\u0451\u043c \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438\n\u044d\u0442\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u043c\u0430\u043b\u043e \u043a\u043e\u0434\u0430, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval"),". \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { useInterval } from "@kundinos/react-hooks";\n\nfunction Example() {\n  const [counter, setCounter] = useState(1);\n  const [pause, setPause] = useState(false);\n  const [inputDelay, setInputDelay] = useState(1000);\n\n  useInterval(\n    () => {\n      setCounter((prev) => prev + 1);\n    },\n    // \u0415\u0441\u043b\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c null, \u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u0430\u0443\u0437\u0443\n    pause ? null : inputDelay\n  );\n\n  return (\n    <div>\n      <div style={{ display: "flex", columnGap: "20px" }}>\n        <input\n          type="number"\n          value={inputDelay}\n          onChange={(e) => setInputDelay(+e.currentTarget.value)}\n        />\n        <button onClick={() => setPause((prev) => !prev)}>\n          {pause ? "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c" : "\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0430\u0443\u0437\u0443"}\n        </button>\n      </div>\n      <div>{`\u0421\u0447\u0435\u0442\u0447\u0438\u043a: ${counter}`}</div>\n    </div>\n  );\n}\n')),(0,o.kt)(l.Z,{mdxType:"ExampleWrapper"},(0,o.kt)(v,{mdxType:"CustomIntervalExample"})))}E.isMDXComponent=!0}}]);