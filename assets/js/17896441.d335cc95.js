"use strict";(self.webpackChunk_kundinos_docs=self.webpackChunk_kundinos_docs||[]).push([[918],{1033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var n=a(7294),l=a(6010),s=a(7462),r=a(5999),i=a(9960);function o(e){const{permalink:t,title:a,subLabel:l}=e;return n.createElement(i.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function c(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,(0,s.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,(0,s.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(2263),m=a(5551),u=a(1548);const p={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=p[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.Z)(),{pluginId:r}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,u.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,m.Jo)(r),p=null!=o?o:(v=c).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:c.label,to:p.path,onClick:()=>i(c.name)})))}function g(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}function h(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const k="iconEdit_dcUD";function L(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function Z(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(L,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const U="tag_hD8n",T="tagRegular_D6E_",y="tagWithCount_i0QQ";function M(e){const{permalink:t,name:a,count:s}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(U,s?y:T)},a,s&&n.createElement("span",null,s))}const w="tags_XVD_",C="tag_JSN8";function A(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(w,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:C},n.createElement(M,{name:t,permalink:a}))}))))}const x="lastUpdated_foO9";function B(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(A,e)))}function D(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",x)},(a||s)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:s})))}function I(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:r,formattedLastUpdatedAt:i,lastUpdatedBy:o,tags:c}=a,d=c.length>0,m=!!(s||r||o);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(B,{tags:c}),m&&n.createElement(D,{editUrl:s,lastUpdatedAt:r,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var V=a(1575);const P="tocCollapsible_jdIR",S="tocCollapsibleButton_Fzxq",F="tocCollapsibleContent_MpvI",H="tocCollapsibleExpanded_laf4";var R=a(5002);function z(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:c}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(P,!o&&H,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",S),onClick:c},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:F,collapsed:o},n.createElement(R.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var O=a(9649);const q="docItemContainer_vinB",J="docItemCol_DM6M",X="tocMobile_TmEX",Q={breadcrumbsContainer:"breadcrumbsContainer_Xlws"};var j=a(4996);function G(e){let{children:t,href:a}=e;const l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function W(e){let{children:t,active:a,index:s}=e;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(s+1)}))}function K(){const e=(0,j.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,l.Z)("breadcrumbs__link",Q.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function Y(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,Q.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(K,null),e.map(((t,a)=>n.createElement(W,{key:a,active:a===e.length-1,index:a},n.createElement(G,{href:a<e.length-1?t.href:void 0},t.label)))))):null}var $=a(7459);function ee(e){var t;const{content:a}=e,{metadata:l,frontMatter:s,assets:r}=a,{keywords:i}=s,{description:o,title:c}=l,d=null!=(t=r.image)?t:s.image;return n.createElement(u.d,{title:c,description:o,keywords:i,image:d})}function te(e){const{content:t}=e,{metadata:a,frontMatter:s}=t,{hide_title:r,hide_table_of_contents:i,toc_min_heading_level:o,toc_max_heading_level:d}=s,{title:m}=a,p=!r&&void 0===t.contentTitle,b=(0,u.iP)(),E=!i&&t.toc&&t.toc.length>0,v=E&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&J)},n.createElement(g,null),n.createElement("div",{className:q},n.createElement("article",null,n.createElement(Y,null),n.createElement(h,null),E&&n.createElement(z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:(0,l.Z)(u.kM.docs.docTocMobile,X)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},p&&n.createElement("header",null,n.createElement(O.Z,{as:"h1"},m)),n.createElement($.Z,null,n.createElement(t,null))),n.createElement(I,e)),n.createElement(c,{previous:a.previous,next:a.next}))),v&&n.createElement("div",{className:"col col--3"},n.createElement(V.Z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:u.kM.docs.docTocDesktop})))}function ae(e){const t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(ee,e),n.createElement(te,e))}}}]);