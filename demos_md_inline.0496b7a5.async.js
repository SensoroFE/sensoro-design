(self["webpackChunk_sensoro_sensoro_design"]=self["webpackChunk_sensoro_sensoro_design"]||[]).push([[6822,4919],{54919:function(e,t,n){"use strict";n.r(t),n.d(t,{Palette:function(){return s}});n(93081);var o=n(23408),r=n(18158),c=n(70307),a=n(59496),l=n(62962),i=n.n(l),u={dark:["#fff","unset"],default:["rgba(0,0,0,0.85)","#fff"]},f=e=>{var t=e.match(/\d+/g),n=parseInt(t[0],10).toString(16),o=parseInt(t[1],10).toString(16),r=parseInt(t[2],10).toString(16);return n=1===n.length?"0".concat(n):n,o=1===o.length?"0".concat(o):o,r=1===r.length?"0".concat(r):r,"#".concat(n).concat(o).concat(r)},s=e=>{var t=e.showTitle,n=e.direction,l=void 0===n?"vertical":n,s=e.color,p=void 0===s?{}:s,y=(0,a.useState)(),b=(0,c.Z)(y,2),d=b[0],m=b[1],v=(0,a.useRef)({}),h=p.count,g=void 0===h?10:h,O=p.name,C=p.text;(0,a.useEffect)((()=>{if(v.current){var e={};Object.keys(v.current).forEach((t=>{var n,o=getComputedStyle(v.current[t])["background-color"];n=o.indexOf("rgba")>=0?o:f(o),e=(0,r.Z)((0,r.Z)({},e),{},{[t]:n})})),console.log(e),m(e)}}),[]);for(var w=(0,c.Z)(u.default,2),j=w[0],P=w[1],x=[],k=function(e){var t="".concat(O,"-").concat(e);x.push(a.createElement(i(),{text:d?d[t]:"",onCopy:()=>o.ZP.success("@".concat(t)),key:t},a.createElement("div",{key:e,className:"main-color-item palette-".concat(O,"-").concat(e),ref:t=>{v.current["".concat(O,"-").concat(e)]=t},style:{color:("yellow"===O?e>6:e>5)?P:j,fontWeight:6===e?"bold":"normal"}},a.createElement("span",{className:"main-color-text"},t),d?a.createElement("span",{className:"main-color-value"},d[t]):null)))},E=1;E<=g;E+=1)k(E);return a.createElement("div",{className:"horizontal"===l?"color-palette-horizontal":"color-palette"},t&&a.createElement("div",{className:"color-title"},C),a.createElement("div",{className:"main-color"},x))};t["default"]=s},77063:function(e,t,n){"use strict";n.r(t),n.d(t,{Palettes:function(){return a}});var o=n(59496),r=n(54919),c=[{name:"blue",text:"\u62c2\u6653\u84dd"},{name:"violet",text:"\u84dd\u7d2b\u8272"},{name:"purple",text:"\u9171\u7d2b"},{name:"red",text:"\u7ea2\u8272"},{name:"orange",text:"\u6a59\u8272"},{name:"gold",text:"\u9ec4\u660f\u8272"},{name:"yellow",text:"\u9ec4\u8272"},{name:"lime",text:"\u4eae\u7eff\u8272"},{name:"green",text:"\u7eff\u8272"},{name:"light-blue",text:"\u4eae\u84dd\u8272"}],a=()=>o.createElement("div",{className:"color-palettes"},c.map((e=>o.createElement(r.Palette,{key:e.name,color:e,showTitle:!0}))));t["default"]=a},87650:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(n(59496)),r=c(n(15912));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=f(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function b(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?m(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(){var e,n;s(this,t);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return n=b(this,(e=d(t)).call.apply(e,[this].concat(a))),g(m(n),"onClick",(function(e){var t=n.props,c=t.text,a=t.onCopy,l=t.children,i=t.options,u=o["default"].Children.only(l),f=(0,r["default"])(c,i);a&&a(c,f),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)})),n}return v(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,["text","onCopy","options","children"]),r=o["default"].Children.only(t);return o["default"].cloneElement(r,i({},n,{onClick:this.onClick}))}}]),t}(o["default"].PureComponent);t.CopyToClipboard=O,g(O,"defaultProps",{onCopy:void 0,options:void 0})},62962:function(e,t,n){"use strict";var o=n(87650),r=o.CopyToClipboard;r.CopyToClipboard=r,e.exports=r}}]);