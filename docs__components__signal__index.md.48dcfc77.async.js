(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},KjXW:function(e,t,n){},Kod3:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("Ip/e"),c=n("upm9"),o=n("peP+"),i=r.a.memo((e=>{var t=e.demos,n=t["signal-simple"].component,a=t["signal-color"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"signal-\u4fe1\u53f7"},r.a.createElement(l["AnchorLink"],{to:"#signal-\u4fe1\u53f7","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Signal \u4fe1\u53f7"),r.a.createElement("p",null,"\u5c55\u793a\u8bbe\u5907\u4fe1\u53f7\u3002(v1.0.15+)"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h2",{id:"\u7b80\u5355\u4f7f\u7528"},r.a.createElement(l["AnchorLink"],{to:"#\u7b80\u5355\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u4f7f\u7528"),r.a.createElement("p",null,"\u5c55\u793a\u4fe1\u53f7\u3002")),r.a.createElement(c["default"],t["signal-simple"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("p",null,"\u8bbe\u7f6e\u989c\u8272")),r.a.createElement(c["default"],t["signal-color"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),r.a.createElement("th",null,"\u7248\u672c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"className"),r.a.createElement("td",null,"\u989d\u5916\u7684\u6837\u5f0f\u7c7b"),r.a.createElement("td",null,"string"),r.a.createElement("td",null,"--"),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"style"),r.a.createElement("td",null,"\u989d\u5916\u7684\u6837\u5f0f(\u63a7\u5236\u7ec4\u4ef6\u5927\u5c0f\u548c\u989c\u8272)"),r.a.createElement("td",null,"CSSProperties"),r.a.createElement("td",null,"--"),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"value"),r.a.createElement("td",null,"\u7535\u91cf\u503c"),r.a.createElement("td",null,"number(0 - 5)"),r.a.createElement("td",null,"0"),r.a.createElement("td",null,"--")),r.a.createElement("tr",null,r.a.createElement("td",null,"colors"),r.a.createElement("td",null,"\u7ec4\u4ef6\u7684\u989c\u8272"),r.a.createElement("td",null,"string"),r.a.createElement("td",null,"#b4b8bf"),r.a.createElement("td",null,"--")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}},Z5Qm:function(e,t,n){},"peP+":function(e,t,n){"use strict";var a=n("1QO0"),r=n.n(a),l=n("bIC1"),c=n.n(l);n("Z5Qm");function o(e,t){return m(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=o(l,2),u=i[0],d=i[1],s=Object(a["useState"])(!1),m=o(s,2),f=m[0],E=m[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},upm9:function(e,t,n){"use strict";n.r(t);var a=n("1QO0"),r=n.n(a),l=n("VqeS"),c=n("9kvl"),o=n("Ip/e"),i=n("/kL3");n("KjXW");function u(e,t){return E(e)||f(e,t)||s(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function E(e){if(Array.isArray(e))return e}function b(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var p=function(e){var t,n,d,s=Object(a["useRef"])(),m=Object(a["useContext"])(o["context"]),f=m.locale,E=Object(o["useLocaleProps"])(f,e),p=Object(o["useDemoUrl"])(E.identifier),v=E.demoUrl||p,h=(null===c["a"]||void 0===c["a"]?void 0:c["a"].location.hash)==="#".concat(E.identifier),y=1===Object.keys(E.sources).length,_=Object(o["useCodeSandbox"])((null===(t=E.hideActions)||void 0===t?void 0:t.includes("CSB"))?null:E),g=Object(o["useRiddle"])((null===(n=E.hideActions)||void 0===n?void 0:n.includes("RIDDLE"))?null:E),w=Object(o["useMotions"])(E.motions||[],s.current),k=u(w,2),O=k[0],j=k[1],S=Object(o["useCopy"])(),N=u(S,2),A=N[0],C=N[1],x=Object(a["useState"])((function(){return E.sources._?"_":Object.keys(E.sources)[0]})),L=u(x,2),I=L[0],P=L[1],R=Object(a["useState"])(b(I,E.sources[I])),T=u(R,2),M=T[0],U=T[1],Q=Object(a["useState"])(Boolean(E.defaultShowCode)),$=u(Q,2),K=$[0],W=$[1],X=Object(a["useState"])(Math.random()),B=u(X,2),D=B[0],F=B[1],J=E.sources[I][M]||E.sources[I].content,z=Object(o["useTSPlaygroundUrl"])(f,J),G=Object(a["useRef"])(),Z=Object(o["usePrefersColor"])(),q=u(Z,1),H=q[0];function V(e){P(e),U(b(e,E.sources[e]))}return Object(a["useEffect"])((function(){F(Math.random())}),[H]),r.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",h?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&!1!==E.compact?"0":void 0,background:E.background}},E.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:D,src:v,ref:G}):E.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&r.a.createElement(o["AnchorLink"],{to:"#".concat(E.identifier)},E.title),E.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},_&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:_}),g&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),E.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:j,onClick:function(){return O()}}),E.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return F(Math.random())}}),!(null===(d=E.hideActions)||void 0===d?void 0:d.includes("EXTERNAL"))&&r.a.createElement(o["Link"],{target:"_blank",to:v},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":C,onClick:function(){return A(J)}}),"tsx"===M&&K&&r.a.createElement(o["Link"],{target:"_blank",to:z},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(K?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return W(!K)}})),K&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&r.a.createElement(l["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:V},Object.keys(E.sources).map((function(e){return r.a.createElement(l["a"],{tab:"_"===e?"index.".concat(b(e,E.sources[e])):e,key:e})}))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(i["a"],{code:J,lang:M,showCopy:!1}))))};t["default"]=p}}]);