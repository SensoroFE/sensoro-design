(self["webpackChunk_sensoro_sensoro_design"]=self["webpackChunk_sensoro_sensoro_design"]||[]).push([[4849],{51713:function(){},41206:function(){},18573:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(34306);n(27482)},63122:function(e,t,n){"use strict";n.r(t);var r=n(59496),l=n(82637),a=n(96432),o=n(59159),c=r.memo((e=>{var t=e.demos,n=t["number-roller-demo-01"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"numberroller"},r.createElement(l.AnchorLink,{to:"#numberroller","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"NumberRoller"),r.createElement("p",null,"\u6570\u5b57\u53d8\u5366\u6eda\u52a8\u5c55\u793a"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u793a\u4f8b"},r.createElement(l.AnchorLink,{to:"#\u57fa\u672c\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u793a\u4f8b")),r.createElement(a.default,t["number-roller-demo-01"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(o.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u53c2\u6570"),r.createElement("th",null,"\u8bf4\u660e"),r.createElement("th",null,"\u7c7b\u578b"),r.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.createElement("th",null,"\u7248\u672c"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"value"),r.createElement("td",null,"\u8981\u5c55\u793a\u7684\u503c"),r.createElement("td",null,r.createElement("code",null,"number")),r.createElement("td",null,"--"),r.createElement("td",null,"1.38.15")),r.createElement("tr",null,r.createElement("td",null,"size"),r.createElement("td",null,"\u5b57\u4f53\u5927\u5c0f"),r.createElement("td",null,r.createElement("code",null,"number")),r.createElement("td",null,"24"),r.createElement("td",null,"1.38.15")),r.createElement("tr",null,r.createElement("td",null,"height"),r.createElement("td",null,"\u9ad8\u5ea6/\u884c\u9ad8"),r.createElement("td",null,r.createElement("code",null,"number")),r.createElement("td",null,"32"),r.createElement("td",null,"1.38.15")),r.createElement("tr",null,r.createElement("td",null,"format"),r.createElement("td",null,"\u589e\u52a0\u5343\u4f4d\u7b26"),r.createElement("td",null,r.createElement("code",null,"boolean")),r.createElement("td",null),r.createElement("td",null,"1.38.15")))),r.createElement("p",null,r.createElement("strong",null,"\u6ce8\u610f\uff1a")," ",r.createElement("code",null,"value")," \u4e0e ",r.createElement("code",null,"children"),"\u7b49\u6548\uff0c",r.createElement("code",null,"value")," \u4f18\u5148\u7ea7\u9ad8"))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(c,{demos:n})}},96432:function(e,t,n){"use strict";n.r(t);var r=n(59496),l=n(59248),a=n(18573),o=n(82637),c=n(15835);n(51713);function i(e,t){return f(e)||s(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function f(e){if(Array.isArray(e))return e}function E(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,d=(0,r.useRef)(),m=(0,r.useContext)(o.context),s=m.locale,f=(0,o.useLocaleProps)(s,e),v=(0,o.useDemoUrl)(f.identifier),h=f.demoUrl||v,p=(null===a.m||void 0===a.m?void 0:a.m.location.hash)==="#".concat(f.identifier),b=1===Object.keys(f.sources).length,y=(0,o.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),_=(0,o.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),g=(0,o.useMotions)(f.motions||[],d.current),k=i(g,2),w=k[0],N=k[1],A=(0,o.useCopy)(),S=i(A,2),x=S[0],C=S[1],L=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),I=i(L,2),j=I[0],O=I[1],R=(0,r.useState)(E(j,f.sources[j])),T=i(R,2),M=T[0],P=T[1],U=(0,r.useState)(Boolean(f.defaultShowCode)),$=i(U,2),Z=$[0],z=$[1],B=(0,r.useState)(Math.random()),D=i(B,2),F=D[0],J=D[1],W=f.sources[j][M]||f.sources[j].content,X=(0,o.useTSPlaygroundUrl)(s,W),G=(0,r.useRef)(),H=(0,o.usePrefersColor)(),K=i(H,1),q=K[0];function Q(e){O(e),P(E(e,f.sources[e]))}return(0,r.useEffect)((function(){J(Math.random())}),[q]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",p?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:F,src:h,ref:G}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(o.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),_&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:_}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:function(){return w()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(o.Link,{target:"_blank",to:h},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":C,onClick:function(){return x(W)}}),"tsx"===M&&Z&&r.createElement(o.Link,{target:"_blank",to:X},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Z?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return z(!Z)}})),Z&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r.createElement(l.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:j,onChange:Q},Object.keys(f.sources).map((function(e){return r.createElement(l.J,{tab:"_"===e?"index.".concat(E(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(c.Z,{code:W,lang:M,showCopy:!1}))))};t["default"]=v},59159:function(e,t,n){"use strict";var r=n(59496),l=n(30826),a=n.n(l);n(41206);function o(e,t){return m(e)||d(e,t)||i(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function m(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),c=o(l,2),i=c[0],u=c[1],d=(0,r.useState)(!1),m=o(d,2),s=m[0],f=m[1];return(0,r.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":s||void 0},r.createElement("table",null,t)))};t["Z"]=s}}]);