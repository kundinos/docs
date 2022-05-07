"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[312],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),k=o,f=m["".concat(l,".").concat(k)]||m[k]||p[k]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:1},l="\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",s={unversionedId:"react-hooks/motivation",id:"react-hooks/motivation",title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",description:"\u0425\u0443\u043a\u0438&nbsp;&mdash; \u043d\u043e\u0432\u043e\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432&nbsp;React&nbsp;16.8, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c",source:"@site/docs/react-hooks/motivation.md",sourceDirName:"react-hooks",slug:"/react-hooks/motivation",permalink:"/docs/react-hooks/motivation",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"useCurrentDate",permalink:"/docs/react-hooks/hooks/use-current-date"}},c={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u0421\u043f\u0438\u0441\u043e\u043a \u0445\u0443\u043a\u043e\u0432",id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0445\u0443\u043a\u043e\u0432",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"},"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,"\u0425\u0443\u043a\u0438","\xa0","\u2014"," \u043d\u043e\u0432\u043e\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432","\xa0","React","\xa0","16.8, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\n\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438","\xa0","\u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 React \u0431\u0435\u0437 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0440\u0435\u0448\u0430\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\n\u0440\u0430\u0437\u043d\u043e\u043f\u043b\u0430\u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c. \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e","\xa0","\u043f\u043b\u044e\u0441\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0445\u0443\u043a\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0435\u0441\u0442\u044c\n\u043d\u0430","\xa0","\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u0432","\xa0","\u0440\u0430\u0437\u0434\u0435\u043b\u0435 ","\xab",(0,a.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/hooks-intro.html#motivation"},"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"),"\xbb"),(0,a.kt)("p",null,"\u0418\u0437","\xa0","\u043a\u043e\u0440\u043e\u0431\u043a\u0438 React \u0443\u0436\u0435 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u044b\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0445\u0443\u043a\u043e\u0432, \u0430","\xa0","\u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442\n\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0437\u0430\u0434\u0430\u0447. \u0418\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e\n\u044f","\xa0","\u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0438","\xa0","\u043d\u0430\u043f\u0438\u0441\u0430\u043b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u043e\u0438\u0445 \u0445\u0443\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0436\u0435 \u043e\u0431\u043b\u0435\u0433\u0447\u0438\u043b\u0438 \u043c\u043d\u0435\n\u0440\u0430\u0431\u043e\u0442\u0443 \u0441","\xa0","React","\xa0","\u0438, \u044f","\xa0","\u0443\u0432\u0435\u0440\u0435\u043d, \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u0438","\xa0","\u0432\u0430\u043c."),(0,a.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @kundinos/react-hooks\n")),(0,a.kt)("h2",{id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0445\u0443\u043a\u043e\u0432"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0445\u0443\u043a\u043e\u0432"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-current-date"},"useCurrentDate")," - \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u0435 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-document-event"},"useDocumentEvent")," - \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"document"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-full-state"},"useFullState")," \u2014 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0441\u0442\u0435\u0439\u0442\u0430;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-idle"},"useIdle")," \u2013 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-interval"},"useInterval")," \u2014 \u0434\u0435\u043a\u043b\u0430\u0442\u0438\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f setInterval;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-keyboard-events"},"useKeyboardEvents")," \u2014 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-native-event"},"useNativeEvent")," \u2014 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u043b\u044e\u0431\u043e\u0433\u043e HTML-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-window-resize"},"useWindowResize")," \u2014 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-scroll"},"useScroll")," \u2013 \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0441\u043a\u0440\u043e\u043b\u0430;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-switch"},"useSwitch")," / ",(0,a.kt)("a",{parentName:"li",href:"./hooks/use-toggle"},"useToggle")," \u2014 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0441 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f\u043c\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-timeout"},"useTimeout")," \u2014 \u0434\u0435\u043a\u043b\u0430\u0442\u0438\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f setTimeout;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./hooks/use-window-event"},"useWindowEvent")," \u2014 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u043c\u0441\u044f \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"window"),";")))}k.isMDXComponent=!0}}]);