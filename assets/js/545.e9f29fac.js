"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9649:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(5999),c=n(1548);const i="anchorWithStickyNavbar_mojV",s="anchorWithHideOnScrollNavbar_R0VQ";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.LU)();return n?a.createElement(t,(0,r.Z)({},u,{className:(0,o.Z)("anchor",m?s:i),id:n}),u.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,u)}function m(e){let{as:t,...n}=e;return"h1"===t?a.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):a.createElement(u,(0,r.Z)({as:t},n))}},7459:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(7294),a=n(3905),o=n(7462),l=n(5742);var c=n(6010);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var s={Prism:n(7410).default,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=m({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=m({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=m({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?m({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=m({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?m({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),u(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=y(u,m.type),m.alias&&(u=y(u,m.alias)),s=m.content),"string"==typeof s){var h=s.split(p),f=h.length;c.push({types:u,content:h[0]});for(var g=1;g<f;g++)d(c),i.push(c=[]),c.push({types:u,content:h[g]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return d(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var v=n(1548);var b=n(5999);const k="copyButton_eDfN",E="copyButtonCopied_ljy5",N="copyButtonIcons_W9eQ",O="copyButtonIcon_XEyF",Z="copyButtonSuccessIcon_i9w9";function C(e){let{code:t}=e;const[n,a]=(0,r.useState)(!1),o=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(t),a(!0),o.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(o.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,b.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,b.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)(k,"clean-btn",n&&E),onClick:l},r.createElement("span",{className:N,"aria-hidden":"true"},r.createElement("svg",{className:O,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:Z,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const T="codeBlockContainer_I0IT",_="codeBlockContent_wNvx",L="codeBlockTitle_BvAR",x="codeBlock_jd64",j="codeBlockStandalone_csWH",w="codeBlockLines_mRuA";function P(e){let{children:t,className:n="",metastring:a,title:l,language:i}=e;const{prism:u}=(0,v.LU)(),[m,p]=(0,r.useState)(!1);(0,r.useEffect)((()=>{p(!0)}),[]);const d=(0,v.bc)(a)||l,y=(0,v.pJ)();if(r.Children.toArray(t).some((e=>(0,r.isValidElement)(e))))return r.createElement(g,(0,o.Z)({},s,{key:String(m),theme:y,code:"",language:"text"}),(e=>{let{className:a,style:o}=e;return r.createElement("pre",{tabIndex:0,className:(0,c.Z)(a,j,"thin-scrollbar",T,n,v.kM.common.codeBlock),style:o},r.createElement("code",{className:w},t))}));const h=Array.isArray(t)?t.join(""):t,f=i??(0,v.Vo)(n)??u.defaultLanguage,{highlightLines:b,code:k}=(0,v.nZ)(h,a,f);return r.createElement(g,(0,o.Z)({},s,{key:String(m),theme:y,code:k,language:f??"text"}),(e=>{let{className:t,style:a,tokens:l,getLineProps:i,getTokenProps:s}=e;return r.createElement("div",{className:(0,c.Z)(T,n,{[`language-${f}`]:f&&!n.includes(`language-${f}`)},v.kM.common.codeBlock)},d&&r.createElement("div",{style:a,className:L},d),r.createElement("div",{className:_,style:a},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,x,"thin-scrollbar")},r.createElement("code",{className:w},l.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=i({line:e,key:t});return b.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,o.Z)({key:t},n),e.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},s({token:e,key:t}))))),r.createElement("br",null))})))),r.createElement(C,{code:k})))}))}var A=n(9960);const S="details_BAp3";function B(e){let{...t}=e;return r.createElement(v.PO,(0,o.Z)({},t,{className:(0,c.Z)("alert alert--info",S,t.className)}))}var H=n(9649);function D(e){return r.createElement(H.Z,e)}const I="img_E7b_";const V={head:function(e){const t=r.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e)));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)))?r.createElement("code",e):r.createElement(P,e)},a:function(e){return r.createElement(A.Z,e)},pre:function(e){var t;return r.createElement(P,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(B,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,I))}));var t},h1:e=>r.createElement(D,(0,o.Z)({as:"h1"},e)),h2:e=>r.createElement(D,(0,o.Z)({as:"h2"},e)),h3:e=>r.createElement(D,(0,o.Z)({as:"h3"},e)),h4:e=>r.createElement(D,(0,o.Z)({as:"h4"},e)),h5:e=>r.createElement(D,(0,o.Z)({as:"h5"},e)),h6:e=>r.createElement(D,(0,o.Z)({as:"h6"},e))};function M(e){let{children:t}=e;return r.createElement(a.Zo,{components:V},t)}},1575:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7462),a=n(7294),o=n(6010),l=n(5002);const c="tableOfContents_cNA8";function i(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},a.createElement(l.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),o=n(1548);function l(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:u,...m}=e;const p=(0,o.LU)(),d=s??p.tableOfContents.minHeadingLevel,y=u??p.tableOfContents.maxHeadingLevel,h=(0,o.b9)({toc:t,minHeadingLevel:d,maxHeadingLevel:y}),f=(0,a.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:y}}),[c,i,d,y]);return(0,o.Si)(f),a.createElement(l,(0,r.Z)({toc:h,className:n,linkClassName:c},m))}}}]);