(self["webpackChunk_sensoro_sensoro_design"]=self["webpackChunk_sensoro_sensoro_design"]||[]).push([[8698],{45114:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,{Z:function(){return r}})},11749:function(n,t,e){"use strict";function r(n){if(Array.isArray(n))return n}e.d(t,{Z:function(){return r}})},94660:function(n,t,e){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.d(t,{Z:function(){return r}})},91060:function(n,t,e){"use strict";function r(n,t,e,r,o,u,i){try{var c=n[u](i),a=c.value}catch(f){return void e(f)}c.done?t(a):Promise.resolve(a).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var i=n.apply(t,e);function c(n){r(i,o,u,c,a,"next",n)}function a(n){r(i,o,u,c,a,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return o}})},18971:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}e.d(t,{Z:function(){return r}})},50025:function(n,t,e){"use strict";function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t,e){return t&&r(n.prototype,t),e&&r(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}e.d(t,{Z:function(){return o}})},10655:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(42537);function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}var u=e(43938),i=e(94660);function c(n,t){if(t&&("object"===(0,u.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(n)}function a(n){var t=o();return function(){var e,o=(0,r.Z)(n);if(t){var u=(0,r.Z)(this).constructor;e=Reflect.construct(o,arguments,u)}else e=o.apply(this,arguments);return c(this,e)}}},37843:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,{Z:function(){return r}})},42537:function(n,t,e){"use strict";function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}e.d(t,{Z:function(){return r}})},48241:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(62716);function o(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&(0,r.Z)(n,t)}},94349:function(n,t,e){"use strict";function r(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}e.d(t,{Z:function(){return r}})},6076:function(n,t,e){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(t,{Z:function(){return r}})},56879:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(37843);function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}},19603:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(88417);function o(n,t){if(null==n)return{};var e,o,u=(0,r.Z)(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(u[e]=n[e])}return u}},47780:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var r=e(11749);function o(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,u=[],i=!0,c=!1;try{for(e=e.call(n);!(i=(r=e.next()).done);i=!0)if(u.push(r.value),t&&u.length===t)break}catch(a){c=!0,o=a}finally{try{i||null==e["return"]||e["return"]()}finally{if(c)throw o}}return u}}var u=e(55765),i=e(6076);function c(n,t){return(0,r.Z)(n)||o(n,t)||(0,u.Z)(n,t)||(0,i.Z)()}},64493:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(45114);function o(n){if(Array.isArray(n))return(0,r.Z)(n)}var u=e(94349),i=e(55765);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(n){return o(n)||(0,u.Z)(n)||(0,i.Z)(n)||c()}},43938:function(n,t,e){"use strict";function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}e.d(t,{Z:function(){return r}})},55765:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(45114);function o(n,t){if(n){if("string"===typeof n)return(0,r.Z)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(n,t):void 0}}},12176:function(n,t,e){n.exports=e(61318)},19803:function(n,t){var e,r;(function(){"use strict";var o={}.hasOwnProperty;function u(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var r=typeof e;if("string"===r||"number"===r)n.push(e);else if(Array.isArray(e)){if(e.length){var i=u.apply(null,e);i&&n.push(i)}}else if("object"===r)if(e.toString===Object.prototype.toString)for(var c in e)o.call(e,c)&&e[c]&&n.push(c);else n.push(e.toString())}}return n.join(" ")}n.exports?(u.default=u,n.exports=u):(e=[],r=function(){return u}.apply(t,e),void 0===r||(n.exports=r))})()},21486:function(n,t,e){"use strict";e.d(t,{V:function(){return pn},Z:function(){return dn}});var r=e(37843),o=e(56879),u=e(47780),i=e(43938),c=e(59496),a=e(72356),f=e(88898),s=e(19803),l=e.n(s),v=e(10657);function p(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit".concat(n)]="webkit".concat(t),e["Moz".concat(n)]="moz".concat(t),e["ms".concat(n)]="MS".concat(t),e["O".concat(n)]="o".concat(t.toLowerCase()),e}function d(n,t){var e={animationend:p("Animation","AnimationEnd"),transitionend:p("Transition","TransitionEnd")};return n&&("AnimationEvent"in t||delete e.animationend.animation,"TransitionEvent"in t||delete e.transitionend.transition),e}var y=d((0,v.Z)(),"undefined"!==typeof window?window:{}),m={};if((0,v.Z)()){var Z=document.createElement("div");m=Z.style}var b={};function h(n){if(b[n])return b[n];var t=y[n];if(t)for(var e=Object.keys(t),r=e.length,o=0;o<r;o+=1){var u=e[o];if(Object.prototype.hasOwnProperty.call(t,u)&&u in m)return b[n]=t[u],b[n]}return""}var E=h("animationend"),w=h("transitionend"),g=!(!E||!w),O=E||"animationend",k=w||"transitionend";function j(n,t){if(!n)return null;if("object"===(0,i.Z)(n)){var e=t.replace(/-\w/g,(function(n){return n[1].toUpperCase()}));return n[e]}return"".concat(n,"-").concat(t)}var A="none",S="appear",P="enter",C="leave",L="none",R="prepare",T="start",x="active",_="end";function D(n){var t=(0,c.useRef)(!1),e=(0,c.useState)(n),r=(0,u.Z)(e,2),o=r[0],i=r[1];function a(n){t.current||i(n)}return(0,c.useEffect)((function(){return function(){t.current=!0}}),[]),[o,a]}var M=(0,v.Z)()?c.useLayoutEffect:c.useEffect,N=M,I=e(13987),F=function(){var n=c.useRef(null);function t(){I.Z.cancel(n.current)}function e(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t();var u=(0,I.Z)((function(){o<=1?r({isCanceled:function(){return u!==n.current}}):e(r,o-1)}));n.current=u}return c.useEffect((function(){return function(){t()}}),[]),[e,t]},V=[R,T,x,_],H=!1,K=!0;function q(n){return n===x||n===_}var z=function(n,t){var e=c.useState(L),r=(0,u.Z)(e,2),o=r[0],i=r[1],a=F(),f=(0,u.Z)(a,2),s=f[0],l=f[1];function v(){i(R)}return N((function(){if(o!==L&&o!==_){var n=V.indexOf(o),e=V[n+1],r=t(o);r===H?i(e):s((function(n){function t(){n.isCanceled()||i(e)}!0===r?t():Promise.resolve(r).then(t)}))}}),[n,o]),c.useEffect((function(){return function(){l()}}),[]),[v,o]},B=function(n){var t=(0,c.useRef)(),e=(0,c.useRef)(n);e.current=n;var r=c.useCallback((function(n){e.current(n)}),[]);function o(n){n&&(n.removeEventListener(k,r),n.removeEventListener(O,r))}function u(n){t.current&&t.current!==n&&o(t.current),n&&n!==t.current&&(n.addEventListener(k,r),n.addEventListener(O,r),t.current=n)}return c.useEffect((function(){return function(){o(t.current)}}),[]),[u,o]};function U(n,t,e,i){var a=i.motionEnter,f=void 0===a||a,s=i.motionAppear,l=void 0===s||s,v=i.motionLeave,p=void 0===v||v,d=i.motionDeadline,y=i.motionLeaveImmediately,m=i.onAppearPrepare,Z=i.onEnterPrepare,b=i.onLeavePrepare,h=i.onAppearStart,E=i.onEnterStart,w=i.onLeaveStart,g=i.onAppearActive,O=i.onEnterActive,k=i.onLeaveActive,j=i.onAppearEnd,L=i.onEnterEnd,_=i.onLeaveEnd,M=i.onVisibleChanged,I=D(),F=(0,u.Z)(I,2),V=F[0],U=F[1],Q=D(A),W=(0,u.Z)(Q,2),Y=W[0],$=W[1],G=D(null),J=(0,u.Z)(G,2),X=J[0],nn=J[1],tn=(0,c.useRef)(!1),en=(0,c.useRef)(null),rn=(0,c.useRef)(!1),on=(0,c.useRef)(null);function un(){var n=e();return n||on.current}var cn=(0,c.useRef)(!1);function an(n){var t,e=un();n&&!n.deadline&&n.target!==e||(Y===S&&cn.current?t=null===j||void 0===j?void 0:j(e,n):Y===P&&cn.current?t=null===L||void 0===L?void 0:L(e,n):Y===C&&cn.current&&(t=null===_||void 0===_?void 0:_(e,n)),!1===t||rn.current||($(A),nn(null)))}var fn=B(an),sn=(0,u.Z)(fn,1),ln=sn[0],vn=c.useMemo((function(){var n,t,e;switch(Y){case"appear":return n={},(0,r.Z)(n,R,m),(0,r.Z)(n,T,h),(0,r.Z)(n,x,g),n;case"enter":return t={},(0,r.Z)(t,R,Z),(0,r.Z)(t,T,E),(0,r.Z)(t,x,O),t;case"leave":return e={},(0,r.Z)(e,R,b),(0,r.Z)(e,T,w),(0,r.Z)(e,x,k),e;default:return{}}}),[Y]),pn=z(Y,(function(n){if(n===R){var t=vn[R];return t?t(un()):H}var e;mn in vn&&nn((null===(e=vn[mn])||void 0===e?void 0:e.call(vn,un(),null))||null);return mn===x&&(ln(un()),d>0&&(clearTimeout(en.current),en.current=setTimeout((function(){an({deadline:!0})}),d))),K})),dn=(0,u.Z)(pn,2),yn=dn[0],mn=dn[1],Zn=q(mn);cn.current=Zn,N((function(){U(t);var e,r=tn.current;(tn.current=!0,n)&&(!r&&t&&l&&(e=S),r&&t&&f&&(e=P),(r&&!t&&p||!r&&y&&!t&&p)&&(e=C),e&&($(e),yn()))}),[t]),(0,c.useEffect)((function(){(Y===S&&!l||Y===P&&!f||Y===C&&!p)&&$(A)}),[l,f,p]),(0,c.useEffect)((function(){return function(){clearTimeout(en.current),rn.current=!0}}),[]),(0,c.useEffect)((function(){void 0!==V&&Y===A&&(null===M||void 0===M||M(V))}),[V,Y]);var bn=X;return vn[R]&&mn===T&&(bn=(0,o.Z)({transition:"none"},bn)),[Y,mn,bn,null!==V&&void 0!==V?V:t]}var Q=e(18971),W=e(50025),Y=e(48241),$=e(10655),G=function(n){(0,Y.Z)(e,n);var t=(0,$.Z)(e);function e(){return(0,Q.Z)(this,e),t.apply(this,arguments)}return(0,W.Z)(e,[{key:"render",value:function(){return this.props.children}}]),e}(c.Component),J=G;function X(n){var t=n;function e(n){return!(!n.motionName||!t)}"object"===(0,i.Z)(n)&&(t=n.transitionSupport);var s=c.forwardRef((function(n,t){var i=n.visible,s=void 0===i||i,v=n.removeOnLeave,p=void 0===v||v,d=n.forceRender,y=n.children,m=n.motionName,Z=n.leavedClassName,b=n.eventProps,h=e(n),E=(0,c.useRef)(),w=(0,c.useRef)();function g(){try{return(0,a.Z)(E.current||w.current)}catch(n){return null}}var O=U(h,s,g,n),k=(0,u.Z)(O,4),S=k[0],P=k[1],C=k[2],L=k[3],x=c.useRef(L);L&&(x.current=!0);var _=(0,c.useRef)(t);_.current=t;var D,M=c.useCallback((function(n){E.current=n,(0,f.mH)(_.current,n)}),[]),N=(0,o.Z)((0,o.Z)({},b),{},{visible:s});if(y)if(S!==A&&e(n)){var I,F;P===R?F="prepare":q(P)?F="active":P===T&&(F="start"),D=y((0,o.Z)((0,o.Z)({},N),{},{className:l()(j(m,S),(I={},(0,r.Z)(I,j(m,"".concat(S,"-").concat(F)),F),(0,r.Z)(I,m,"string"===typeof m),I)),style:C}),M)}else D=L?y((0,o.Z)({},N),M):!p&&x.current?y((0,o.Z)((0,o.Z)({},N),{},{className:Z}),M):d?y((0,o.Z)((0,o.Z)({},N),{},{style:{display:"none"}}),M):null;else D=null;return c.createElement(J,{ref:w},D)}));return s.displayName="CSSMotion",s}var nn=X(g),tn=e(87775),en=e(19603),rn="add",on="keep",un="remove",cn="removed";function an(n){var t;return t=n&&"object"===(0,i.Z)(n)&&"key"in n?n:{key:n},(0,o.Z)((0,o.Z)({},t),{},{key:String(t.key)})}function fn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.map(an)}function sn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=[],r=0,u=t.length,i=fn(n),c=fn(t);i.forEach((function(n){for(var t=!1,i=r;i<u;i+=1){var a=c[i];if(a.key===n.key){r<i&&(e=e.concat(c.slice(r,i).map((function(n){return(0,o.Z)((0,o.Z)({},n),{},{status:rn})}))),r=i),e.push((0,o.Z)((0,o.Z)({},a),{},{status:on})),r+=1,t=!0;break}}t||e.push((0,o.Z)((0,o.Z)({},n),{},{status:un}))})),r<u&&(e=e.concat(c.slice(r).map((function(n){return(0,o.Z)((0,o.Z)({},n),{},{status:rn})}))));var a={};e.forEach((function(n){var t=n.key;a[t]=(a[t]||0)+1}));var f=Object.keys(a).filter((function(n){return a[n]>1}));return f.forEach((function(n){e=e.filter((function(t){var e=t.key,r=t.status;return e!==n||r!==un})),e.forEach((function(t){t.key===n&&(t.status=on)}))})),e}var ln=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function vn(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nn,e=function(n){(0,Y.Z)(r,n);var e=(0,$.Z)(r);function r(){var n;return(0,Q.Z)(this,r),n=e.apply(this,arguments),n.state={keyEntities:[]},n.removeKey=function(t){n.setState((function(n){var e=n.keyEntities;return{keyEntities:e.map((function(n){return n.key!==t?n:(0,o.Z)((0,o.Z)({},n),{},{status:cn})}))}}))},n}return(0,W.Z)(r,[{key:"render",value:function(){var n=this,e=this.state.keyEntities,r=this.props,o=r.component,u=r.children,i=r.onVisibleChanged,a=(0,en.Z)(r,["component","children","onVisibleChanged"]),f=o||c.Fragment,s={};return ln.forEach((function(n){s[n]=a[n],delete a[n]})),delete a.keys,c.createElement(f,a,e.map((function(e){var r=e.status,o=(0,en.Z)(e,["status"]),a=r===rn||r===on;return c.createElement(t,(0,tn.Z)({},s,{key:o.key,visible:a,eventProps:o,onVisibleChanged:function(t){null===i||void 0===i||i(t,{key:o.key}),t||n.removeKey(o.key)}}),u)})))}}],[{key:"getDerivedStateFromProps",value:function(n,t){var e=n.keys,r=t.keyEntities,o=fn(e),u=sn(r,o);return{keyEntities:u.filter((function(n){var t=r.find((function(t){var e=t.key;return n.key===e}));return!t||t.status!==cn||n.status!==un}))}}}]),r}(c.Component);return e.defaultProps={component:"div"},e}var pn=vn(g),dn=nn},5518:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(59496),o=e(56237);function u(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=[];return r.Children.forEach(n,(function(n){(void 0!==n&&null!==n||t.keepEmpty)&&(Array.isArray(n)?e=e.concat(u(n)):(0,o.isFragment)(n)&&n.props?e=e.concat(u(n.props.children,t)):e.push(n))})),e}},10657:function(n,t,e){"use strict";function r(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}e.d(t,{Z:function(){return r}})},72356:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(87995);function o(n){return n instanceof HTMLElement?n:r.findDOMNode(n)}},45656:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(59496);function o(n,t,e){var o=r.useRef({});return"value"in o.current&&!e(o.current.condition,t)||(o.current.value=n(),o.current.condition=t),o.current.value}},13987:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=function(n){return+setTimeout(n,16)},o=function(n){return clearTimeout(n)};"undefined"!==typeof window&&"requestAnimationFrame"in window&&(r=function(n){return window.requestAnimationFrame(n)},o=function(n){return window.cancelAnimationFrame(n)});var u=0,i=new Map;function c(n){i.delete(n)}function a(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;u+=1;var e=u;function o(t){if(0===t)c(e),n();else{var u=r((function(){o(t-1)}));i.set(e,u)}}return o(t),e}a.cancel=function(n){var t=i.get(n);return c(t),o(t)}},88898:function(n,t,e){"use strict";e.d(t,{mH:function(){return i},sQ:function(){return c},x1:function(){return a},Yr:function(){return f}});var r=e(43938),o=e(56237),u=e(45656);function i(n,t){"function"===typeof n?n(t):"object"===(0,r.Z)(n)&&n&&"current"in n&&(n.current=t)}function c(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var r=t.filter((function(n){return n}));return r.length<=1?r[0]:function(n){t.forEach((function(t){i(t,n)}))}}function a(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return(0,u.Z)((function(){return c.apply(void 0,t)}),t,(function(n,t){return n.length===t.length&&n.every((function(n,e){return n===t[e]}))}))}function f(n){var t,e,r=(0,o.isMemo)(n)?n.type.type:n.type;return!("function"===typeof r&&!(null===(t=r.prototype)||void 0===t?void 0:t.render))&&!("function"===typeof n&&!(null===(e=n.prototype)||void 0===e?void 0:e.render))}},42512:function(n,t,e){"use strict";e.d(t,{Kp:function(){return o},ET:function(){return a}});var r={};function o(n,t){0}function u(n,t){0}function i(n,t,e){t||r[e]||(n(!1,e),r[e]=!0)}function c(n,t){i(o,n,t)}function a(n,t){i(u,n,t)}t["ZP"]=c}}]);