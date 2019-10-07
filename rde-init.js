!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,r){"use strict";var n=r(1);function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var a=function fromTarget(e){if(e){var t=e.dataset,r=t.rdeTemplate,a=t.rdeVh,o=t.rdeVw,c=t.rdeCss,i=t.rdeStyle,u=t.rdeCode,l=t.rdeJs,s=t.rdeClass,_=t.rdeHeaders;if(o&&r){var d=document.querySelector(r);if(d){var p=d.innerHTML;if(p&&""!==p){d.style=n.HIDE_TEMPLATE_STYLE;var f={html:p,style:i,css:c,code:u,javascript:l,headers:(0,n.getHeaders)(_)},b=(0,n.createIframe)(),y=[];s&&""!==s||y.push("border: none;"),y.push("width: ".concat(o,"px;")),a&&y.push("height: ".concat(a,"px;"));var m=(0,n.getGeneratedPageURL)(f);b.setAttribute("data-rde-iframe",""),b.style=y.join(" "),b.class=s,b.src=m,e.append(b)}}}}},o=function fromTemplate(e){if(e){var t=e.dataset,r=t.rdeViewports,a=t.rdeCss,o=t.rdeStyle,c=t.rdeCode,i=t.rdeJs,u=t.rdeClass,l=t.rdeHeaders,s=t.rdeNoHeight,_=void 0!==s&&s;if(r){var d=e.innerHTML;if(d&&""!==d){e.style=n.HIDE_TEMPLATE_STYLE;var p=[],f=(0,n.getHeaders)(l);-1!==r.indexOf(",")?p=[].concat(_toConsumableArray(p),_toConsumableArray(r.split(","))):""!==r?p.push(r):p.push("375x667");var b={html:d,style:o,css:a,code:c,javascript:i,headers:f};p.forEach(function(t){var r=(0,n.createIframe)(),a=t.split("x"),o=a[0],c=a[1],i=[];u&&""!==u||i.push("border: none;"),i.push("width: ".concat(o,"px;")),_&&"false"!==_||i.push("height: ".concat(c,"px;"));var l=(0,n.getGeneratedPageURL)(b);r.setAttribute("data-rde-iframe",""),r.style=i.join(" "),r.class=u,r.src=l,e.insertAdjacentElement("afterend",r)})}}}},c=function init(){document.querySelectorAll("[data-rde-iframe]").forEach(function(e){return e.remove()}),document.querySelectorAll("[data-rde]").forEach(o),document.querySelectorAll("[data-rde-target]").forEach(a)};c(),document.addEventListener("DOMContentLoaded",c)},function(e,t,r){"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}Object.defineProperty(t,"__esModule",{value:!0}),t.getGeneratedPageURL=t.getSource=t.getJavaScript=t.getCSS=t.getBlobURL=t.getHeaders=t.createIframe=t.DEFAULT_HEADERS=t.HIDE_TEMPLATE_STYLE=t.getElement=t.isElement=void 0;var n=function isElement(e){return!(!e||1!==e.nodeType)};t.isElement=n;var a=function getElement(e){return"string"==typeof e?document.querySelector(e):n(e)?e:null};t.getElement=a;var o=["clip: rect(1px, 1px, 1px, 1px);","height: 1px;","margin: 0;","overflow: hidden;","position: absolute;","width: 1px;"].join(" ");t.HIDE_TEMPLATE_STYLE=o;var c=['<meta charset="utf-8" />','<meta name="robots" content="none" />','<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />','<meta name="viewport" content="width=device-width, initial-scale=1" />'];t.DEFAULT_HEADERS=c;var i=function createIframe(){return document.createElement("iframe")};t.createIframe=i;var u=function getHeaders(e){var t=[].concat(c);return e&&(Array.isArray(e)?t=[].concat(_toConsumableArray(t),_toConsumableArray(e)):-1!==e.indexOf(",")?t=[].concat(_toConsumableArray(t),_toConsumableArray(e.split(","))):""!==e&&t.push(e)),t};t.getHeaders=u;var l=function getBlobURL(e,t){var r=new Blob([e],{type:t});return URL.createObjectURL(r)};t.getBlobURL=l;var s=function getCSS(e){return e?'<link rel="stylesheet" type="text/css" href="'.concat(window.location.protocol,"//").concat(window.location.host).concat(e,'" />'):""};t.getCSS=s;var _=function getJavaScript(e){return e?'<script src="'.concat(window.location.protocol,"//").concat(window.location.host).concat(e,'"><\/script>'):""};t.getJavaScript=_;var d=function getSource(e){var t=e.html,r=e.style,n=e.css,a=e.code,o=e.javascript,c=e.headers,i=void 0===c?[]:c;return n=s(n),o=_(o),"<html>\n  <head>\n    ".concat(i.join("\n"),'\n    <style type="text/css">\n      ').concat(r||"","\n    </style>\n  </head>\n  <body>\n    ").concat(n,"\n    ").concat(t||"","\n    ").concat(o,"\n    <script>\n      ").concat(a||"","\n    <\/script>\n  </body>\n</html>")};t.getSource=d;var p=function getGeneratedPageURL(e){var t=d(e);return l(t,"text/html")};t.getGeneratedPageURL=p}]);