(self["webpackChunk_sensoro_sensoro_design"]=self["webpackChunk_sensoro_sensoro_design"]||[]).push([[5890],{51713:function(){},18573:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(34306);n(27482)},85789:function(e,t,n){"use strict";n.r(t);var r=n(59496),a=n(82637),o=n(96432),i=r.memo((e=>{var t=e.demos,n=t["preview-image-demo01"].component,i=t["preview-image-demo02"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"previewimage-\u56fe\u7247\u9884\u89c8"},r.createElement(a.AnchorLink,{to:"#previewimage-\u56fe\u7247\u9884\u89c8","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"PreviewImage \u56fe\u7247\u9884\u89c8"),r.createElement("p",null,"\u56fe\u7247\u9884\u89c8"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u5355\u4e2a\u56fe\u7247"},r.createElement(a.AnchorLink,{to:"#\u5355\u4e2a\u56fe\u7247","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u5355\u4e2a\u56fe\u7247")),r.createElement(o.default,t["preview-image-demo01"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h3",{id:"\u591a\u4e2a\u56fe\u7247"},r.createElement(a.AnchorLink,{to:"#\u591a\u4e2a\u56fe\u7247","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u591a\u4e2a\u56fe\u7247")),r.createElement(o.default,t["preview-image-demo02"].previewerProps,r.createElement(i,null))))}));t["default"]=e=>{var t=r.useContext(a.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(i,{demos:n})}},96432:function(e,t,n){"use strict";n.r(t);var r=n(59496),a=n(59248),o=n(18573),i=n(82637),l=n(15835);n(51713);function c(e,t){return f(e)||m(e,t)||s(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){l=!0,a=c}finally{try{i||null==n["return"]||n["return"]()}finally{if(l)throw a}}return o}}function f(e){if(Array.isArray(e))return e}function p(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,s=(0,r.useRef)(),d=(0,r.useContext)(i.context),m=d.locale,f=(0,i.useLocaleProps)(m,e),v=(0,i.useDemoUrl)(f.identifier),E=f.demoUrl||v,_=(null===o.m||void 0===o.m?void 0:o.m.location.hash)==="#".concat(f.identifier),h=1===Object.keys(f.sources).length,b=(0,i.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),y=(0,i.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),g=(0,i.useMotions)(f.motions||[],s.current),k=c(g,2),w=k[0],N=k[1],x=(0,i.useCopy)(),C=c(x,2),A=C[0],S=C[1],I=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),L=c(I,2),j=L[0],O=L[1],R=(0,r.useState)(p(j,f.sources[j])),P=c(R,2),T=P[0],M=P[1],U=(0,r.useState)(Boolean(f.defaultShowCode)),$=c(U,2),B=$[0],D=$[1],F=(0,r.useState)(Math.random()),J=c(F,2),X=J[0],Z=J[1],G=f.sources[j][T]||f.sources[j].content,H=(0,i.useTSPlaygroundUrl)(m,G),K=(0,r.useRef)(),q=(0,i.usePrefersColor)(),z=c(q,1),Q=z[0];function V(e){O(e),M(p(e,f.sources[e]))}return(0,r.useEffect)((function(){Z(Math.random())}),[Q]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:X,src:E,ref:K}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(i.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},b&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:b}),y&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:y}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:function(){return w()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return Z(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(i.Link,{target:"_blank",to:E},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:function(){return A(G)}}),"tsx"===T&&B&&r.createElement(i.Link,{target:"_blank",to:H},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return D(!B)}})),B&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.createElement(a.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:j,onChange:V},Object.keys(f.sources).map((function(e){return r.createElement(a.J,{tab:"_"===e?"index.".concat(p(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(l.Z,{code:G,lang:T,showCopy:!1}))))};t["default"]=v}}]);