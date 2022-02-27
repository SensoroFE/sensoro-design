(self["webpackChunk_sensoro_sensoro_design"]=self["webpackChunk_sensoro_sensoro_design"]||[]).push([[2985],{51713:function(){},41206:function(){},18573:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(34306);n(27482)},18702:function(e,t,n){"use strict";n.r(t);var r=n(59496),l=n(82637),a=n(96432),o=n(59159),c=r.memo((e=>{var t=e.demos,n=t["battery-simple"].component,c=t["battery-color"].component,i=t["battery-charge"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"battery-\u7535\u6c60"},r.createElement(l.AnchorLink,{to:"#battery-\u7535\u6c60","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Battery \u7535\u6c60"),r.createElement("p",null,"\u5c55\u793a\u7535\u6c60\u7535\u91cf\u3002(v1.0.14+)"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h2",{id:"\u7b80\u5355\u4f7f\u7528"},r.createElement(l.AnchorLink,{to:"#\u7b80\u5355\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u4f7f\u7528"),r.createElement("p",null,"\u5c55\u793a\u7535\u91cf\u3002")),r.createElement(a.default,t["battery-simple"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("p",null,"\u8bbe\u7f6e\u989c\u8272")),r.createElement(a.default,t["battery-color"].previewerProps,r.createElement(c,null)),r.createElement("div",{className:"markdown"},r.createElement("p",null,"\u901a\u7535\u72b6\u6001")),r.createElement(a.default,t["battery-charge"].previewerProps,r.createElement(i,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement("p",null,"\u6587\u672c\u94fe\u63a5\u7684\u5c5e\u6027\u8bf4\u660e\u5982\u4e0b\uff1a"),r.createElement(o.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u53c2\u6570"),r.createElement("th",null,"\u8bf4\u660e"),r.createElement("th",null,"\u7c7b\u578b"),r.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.createElement("th",null,"\u7248\u672c"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"className"),r.createElement("td",null,"\u989d\u5916\u7684\u6837\u5f0f\u7c7b"),r.createElement("td",null,"string"),r.createElement("td",null,"--"),r.createElement("td",null,"--")),r.createElement("tr",null,r.createElement("td",null,"style"),r.createElement("td",null,"\u989d\u5916\u7684\u6837\u5f0f(\u63a7\u5236\u7ec4\u4ef6\u5927\u5c0f\u548c\u989c\u8272)"),r.createElement("td",null,"CSSProperties"),r.createElement("td",null,"--"),r.createElement("td",null,"--")),r.createElement("tr",null,r.createElement("td",null,"value"),r.createElement("td",null,"\u7535\u91cf\u503c (-1 \u8868\u793a\u5145\u7535\u72b6\u6001)"),r.createElement("td",null,"number(0 - 100) | -1"),r.createElement("td",null,"--"),r.createElement("td",null,"--")),r.createElement("tr",null,r.createElement("td",null,"color"),r.createElement("td",null,"\u7ec4\u4ef6\u7684\u989c\u8272"),r.createElement("td",null,"string"),r.createElement("td",null,"--"),r.createElement("td",null,"--")))))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(c,{demos:n})}},96432:function(e,t,n){"use strict";n.r(t);var r=n(59496),l=n(59248),a=n(18573),o=n(82637),c=n(15835);n(51713);function i(e,t){return f(e)||m(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function f(e){if(Array.isArray(e))return e}function E(e,t){var n,r=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return r||(r=t.tsx?"tsx":"jsx"),r}var v=function(e){var t,n,u,d=(0,r.useRef)(),s=(0,r.useContext)(o.context),m=s.locale,f=(0,o.useLocaleProps)(m,e),v=(0,o.useDemoUrl)(f.identifier),p=f.demoUrl||v,h=(null===a.m||void 0===a.m?void 0:a.m.location.hash)==="#".concat(f.identifier),b=1===Object.keys(f.sources).length,y=(0,o.useCodeSandbox)((null===(t=f.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:f),_=(0,o.useRiddle)((null===(n=f.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:f),g=(0,o.useMotions)(f.motions||[],d.current),k=i(g,2),w=k[0],N=k[1],S=(0,o.useCopy)(),A=i(S,2),C=A[0],x=A[1],L=(0,r.useState)((function(){return f.sources._?"_":Object.keys(f.sources)[0]})),I=i(L,2),j=I[0],O=I[1],P=(0,r.useState)(E(j,f.sources[j])),R=i(P,2),T=R[0],M=R[1],U=(0,r.useState)(Boolean(f.defaultShowCode)),$=i(U,2),B=$[0],Z=$[1],D=(0,r.useState)(Math.random()),z=i(D,2),F=z[0],J=z[1],W=f.sources[j][T]||f.sources[j].content,X=(0,o.useTSPlaygroundUrl)(m,W),G=(0,r.useRef)(),H=(0,o.usePrefersColor)(),K=i(H,1),q=K[0];function Q(e){O(e),M(E(e,f.sources[e]))}return(0,r.useEffect)((function(){J(Math.random())}),[q]),r.createElement("div",{style:f.style,className:[f.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:f.identifier,"data-debug":f.debug||void 0,"data-iframe":f.iframe||void 0},f.iframe&&r.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.createElement("div",{ref:d,className:"__dumi-default-previewer-demo",style:{transform:f.transform?"translate(0, 0)":void 0,padding:f.compact||f.iframe&&!1!==f.compact?"0":void 0,background:f.background}},f.iframe?r.createElement("iframe",{title:"dumi-previewer",style:{height:String(f.iframe).replace(/(\d)$/,"$1px")},key:F,src:p,ref:G}):f.children),r.createElement("div",{className:"__dumi-default-previewer-desc","data-title":f.title},f.title&&r.createElement(o.AnchorLink,{to:"#".concat(f.identifier)},f.title),f.description&&r.createElement("div",{dangerouslySetInnerHTML:{__html:f.description}})),r.createElement("div",{className:"__dumi-default-previewer-actions"},y&&r.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),_&&r.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:_}),f.motions&&r.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:function(){return w()}}),f.iframe&&r.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return J(Math.random())}}),!(null===(u=f.hideActions)||void 0===u?void 0:u.includes("EXTERNAL"))&&r.createElement(o.Link,{target:"_blank",to:p},r.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.createElement("span",null),r.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:function(){return C(W)}}),"tsx"===T&&B&&r.createElement(o.Link,{target:"_blank",to:X},r.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return Z(!B)}})),B&&r.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!b&&r.createElement(l.Z,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:j,onChange:Q},Object.keys(f.sources).map((function(e){return r.createElement(l.J,{tab:"_"===e?"index.".concat(E(e,f.sources[e])):e,key:e})}))),r.createElement("div",{className:"__dumi-default-previewer-source"},r.createElement(c.Z,{code:W,lang:T,showCopy:!1}))))};t["default"]=v},59159:function(e,t,n){"use strict";var r=n(59496),l=n(30826),a=n.n(l);n(41206);function o(e,t){return s(e)||d(e,t)||i(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(a.push(r.value),t&&a.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function s(e){if(Array.isArray(e))return e}var m=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),c=o(l,2),i=c[0],u=c[1],d=(0,r.useState)(!1),s=o(d,2),m=s[0],f=s[1];return(0,r.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":m||void 0},r.createElement("table",null,t)))};t["Z"]=m}}]);