!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t){function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var r=["clip: rect(1px, 1px, 1px, 1px);","height: 1px;","margin: 0;","overflow: hidden;","position: absolute;","width: 1px;"].join(" "),n=function createIframe(){return document.createElement("iframe")},o=function getHeaders(e){var t=[];return e&&(-1!==e.indexOf(",")?t=[].concat(_toConsumableArray(t),_toConsumableArray(e.split(","))):""!==e&&t.push(e)),t},a=function getBlobURL(e,t){var r=new Blob([e],{type:t});return URL.createObjectURL(r)},c=function getCSS(e){return e?'<link rel="stylesheet" type="text/css" href="'.concat(window.location.protocol,"//").concat(window.location.host).concat(e,'" />'):""},i=function getJavaScript(e){return e?'<script src="'.concat(window.location.protocol,"//").concat(window.location.host).concat(e,'"><\/script>'):""},u=function getSource(e){var t=['<meta charset="utf-8" />','<meta name="robots" content="none" />','<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />','<meta name="viewport" content="width=device-width, initial-scale=1" />'],r=e.html,n=e.style,o=e.css,a=e.code,u=e.javascript,_=e.headers,s=void 0===_?[]:_;return s=[].concat(_toConsumableArray(s),t),o=c(o),u=i(u),"<html>\n  <head>\n    ".concat(s.join("\n"),'\n    <style type="text/css">\n      ').concat(n||"","\n    </style>\n  </head>\n  <body>\n    ").concat(o,"\n    ").concat(r||"","\n    ").concat(u,"\n    <script>\n      ").concat(a||"","\n    <\/script>\n  </body>\n</html>")},_=function getGeneratedPageURL(e){var t=u(e);return a(t,"text/html")},s=function fromTarget(e){if(e){var t=e.dataset,a=t.rdeTemplate,c=t.rdeVh,i=t.rdeVw,u=t.rdeCss,s=t.rdeStyle,l=t.rdeCode,d=t.rdeJs,p=t.rdeClass,f=t.rdeHeaders;if(i&&a){var b=document.querySelector(a);if(b){var h=b.innerHTML;if(h&&""!==h){b.style=r;var y={html:h,style:s,css:u,code:l,javascript:d,headers:o(f)},m=n(),w=[];p&&""!==p||w.push("border: none;"),w.push("width: ".concat(i,"px;")),c&&w.push("height: ".concat(c,"px;"));var v=_(y);m.setAttribute("data-rde-iframe",""),m.style=w.join(" "),m.class=p,m.src=v,e.append(m)}}}}},l=function fromTemplate(e){if(e){var t=e.dataset,a=t.rdeViewports,c=t.rdeCss,i=t.rdeStyle,u=t.rdeCode,s=t.rdeJs,l=t.rdeClass,d=t.rdeHeaders,p=t.rdeNoHeight,f=void 0!==p&&p;if(a){var b=e.innerHTML;if(b&&""!==b){e.style=r;var h=[],y=o(d);-1!==a.indexOf(",")?h=[].concat(_toConsumableArray(h),_toConsumableArray(a.split(","))):""!==a?h.push(a):h.push("375x667");var m={html:b,style:i,css:c,code:u,javascript:s,headers:y};h.forEach(function(t){var r=n(),o=t.split("x"),a=o[0],c=o[1],i=[];l&&""!==l||i.push("border: none;"),i.push("width: ".concat(a,"px;")),f&&"false"!==f||i.push("height: ".concat(c,"px;"));var u=_(m);r.setAttribute("data-rde-iframe",""),r.style=i.join(" "),r.class=l,r.src=u,e.insertAdjacentElement("afterend",r)})}}}},d=function init(){document.querySelectorAll("[data-rde-iframe]").forEach(function(e){return e.remove()}),document.querySelectorAll("[data-rde]").forEach(l),document.querySelectorAll("[data-rde-target]").forEach(s)};d(),document.addEventListener("DOMContentLoaded",d)}]);