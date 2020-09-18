/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/normalize.css":
/*!**********************************!*\
  !*** ./assets/css/normalize.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/css/normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./assets/css/normalize.css?");

/***/ }),

/***/ "./assets/css/reset.css":
/*!******************************!*\
  !*** ./assets/css/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/css/reset.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./assets/css/reset.css?");

/***/ }),

/***/ "./assets/css/styles.css":
/*!*******************************!*\
  !*** ./assets/css/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/css/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./assets/css/styles.css?");

/***/ }),

/***/ "./assets/js/Templates/menu1.js":
/*!**************************************!*\
  !*** ./assets/js/Templates/menu1.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initMenu1 = (div) => {\r\n    const conteudo =`\r\n    <p>Texto escrito no menu 1</p>\r\n    `\r\n\r\n    div.innerHTML=conteudo;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu1);\n\n//# sourceURL=webpack:///./assets/js/Templates/menu1.js?");

/***/ }),

/***/ "./assets/js/Templates/menu2.js":
/*!**************************************!*\
  !*** ./assets/js/Templates/menu2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initMenu2 = (div) => {\r\n    const conteudo =`\r\n    <p>Texto escrito no menu 2</p>\r\n    `\r\n\r\n    div.innerHTML=conteudo;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu2);\n\n//# sourceURL=webpack:///./assets/js/Templates/menu2.js?");

/***/ }),

/***/ "./assets/js/Templates/menu3.js":
/*!**************************************!*\
  !*** ./assets/js/Templates/menu3.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initMenu3 = (div) => {\r\n    const conteudo =`\r\n    <p>Texto escrito no menu 3</p>\r\n    `\r\n\r\n    div.innerHTML=conteudo;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu3);\n\n//# sourceURL=webpack:///./assets/js/Templates/menu3.js?");

/***/ }),

/***/ "./assets/js/Templates/menu4.js":
/*!**************************************!*\
  !*** ./assets/js/Templates/menu4.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initMenu4 = (div) => {\r\n    const conteudo =`\r\n    <p>Texto escrito no menu 4</p>\r\n    `\r\n\r\n    div.innerHTML=conteudo;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initMenu4);\n\n//# sourceURL=webpack:///./assets/js/Templates/menu4.js?");

/***/ }),

/***/ "./assets/js/Templates/raiz.js":
/*!*************************************!*\
  !*** ./assets/js/Templates/raiz.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initRaiz = (div) => {\r\n    const conteudo =`\r\n    <p>Texto escrito na raiz</p>\r\n    `\r\n\r\n    div.innerHTML=conteudo;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initRaiz);\n\n//# sourceURL=webpack:///./assets/js/Templates/raiz.js?");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/normalize.css */ \"./assets/css/normalize.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/reset.css */ \"./assets/css/reset.css\");\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ \"./assets/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route */ \"./assets/js/route.js\");\n\r\n\r\n\r\n\r\n\r\nObject(_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(window.location.pathname);\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/route.js":
/*!****************************!*\
  !*** ./assets/js/route.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Templates_raiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/Templates/raiz */ \"./assets/js/Templates/raiz.js\");\n/* harmony import */ var _js_Templates_menu1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/Templates/menu1 */ \"./assets/js/Templates/menu1.js\");\n/* harmony import */ var _js_Templates_menu2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/Templates/menu2 */ \"./assets/js/Templates/menu2.js\");\n/* harmony import */ var _js_Templates_menu3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/Templates/menu3 */ \"./assets/js/Templates/menu3.js\");\n/* harmony import */ var _js_Templates_menu4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/Templates/menu4 */ \"./assets/js/Templates/menu4.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector('[data-main]');\r\nconst rotas = {\r\n    \"/\": _js_Templates_raiz__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    \"/menu1\": _js_Templates_menu1__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    \"/menu2\": _js_Templates_menu2__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    \"/menu3\": _js_Templates_menu3__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    \"/menu4\": _js_Templates_menu4__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n};\r\n\r\nconst navegarPara = (pathname) => {\r\n    window.history.pushState({},pathname,window.location.origin + pathname);\r\n    main.innerHTML=\"\";\r\n    rotas[window.location.pathname](main);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navegarPara);\n\n//# sourceURL=webpack:///./assets/js/route.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/normalize.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\n\\r\\n html {\\r\\n    line-height: 1.15; /* 1 */\\r\\n    -webkit-text-size-adjust: 100%; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /* Sections\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the margin in all browsers.\\r\\n   */\\r\\n  \\r\\n  body {\\r\\n    margin: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Render the `main` element consistently in IE.\\r\\n   */\\r\\n  \\r\\n  main {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the font size and margin on `h1` elements within `section` and\\r\\n   * `article` contexts in Chrome, Firefox, and Safari.\\r\\n   */\\r\\n  \\r\\n  h1 {\\r\\n    font-size: 2em;\\r\\n    margin: 0.67em 0;\\r\\n  }\\r\\n  \\r\\n  /* Grouping content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * 1. Add the correct box sizing in Firefox.\\r\\n   * 2. Show the overflow in Edge and IE.\\r\\n   */\\r\\n  \\r\\n  hr {\\r\\n    box-sizing: content-box; /* 1 */\\r\\n    height: 0; /* 1 */\\r\\n    overflow: visible; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n   * 2. Correct the odd `em` font sizing in all browsers.\\r\\n   */\\r\\n  \\r\\n  pre {\\r\\n    font-family: monospace, monospace; /* 1 */\\r\\n    font-size: 1em; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /* Text-level semantics\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the gray background on active links in IE 10.\\r\\n   */\\r\\n  \\r\\n  a {\\r\\n    background-color: transparent;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Remove the bottom border in Chrome 57-\\r\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n   */\\r\\n  \\r\\n  abbr[title] {\\r\\n    border-bottom: none; /* 1 */\\r\\n    text-decoration: underline; /* 2 */\\r\\n    text-decoration: underline dotted; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n   */\\r\\n  \\r\\n  b,\\r\\n  strong {\\r\\n    font-weight: bolder;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n   * 2. Correct the odd `em` font sizing in all browsers.\\r\\n   */\\r\\n  \\r\\n  code,\\r\\n  kbd,\\r\\n  samp {\\r\\n    font-family: monospace, monospace; /* 1 */\\r\\n    font-size: 1em; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct font size in all browsers.\\r\\n   */\\r\\n  \\r\\n  small {\\r\\n    font-size: 80%;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n   * all browsers.\\r\\n   */\\r\\n  \\r\\n  sub,\\r\\n  sup {\\r\\n    font-size: 75%;\\r\\n    line-height: 0;\\r\\n    position: relative;\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  \\r\\n  sub {\\r\\n    bottom: -0.25em;\\r\\n  }\\r\\n  \\r\\n  sup {\\r\\n    top: -0.5em;\\r\\n  }\\r\\n  \\r\\n  /* Embedded content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the border on images inside links in IE 10.\\r\\n   */\\r\\n  \\r\\n  img {\\r\\n    border-style: none;\\r\\n  }\\r\\n  \\r\\n  /* Forms\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * 1. Change the font styles in all browsers.\\r\\n   * 2. Remove the margin in Firefox and Safari.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  input,\\r\\n  optgroup,\\r\\n  select,\\r\\n  textarea {\\r\\n    font-family: inherit; /* 1 */\\r\\n    font-size: 100%; /* 1 */\\r\\n    line-height: 1.15; /* 1 */\\r\\n    margin: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Show the overflow in IE.\\r\\n   * 1. Show the overflow in Edge.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  input { /* 1 */\\r\\n    overflow: visible;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n   * 1. Remove the inheritance of text transform in Firefox.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  select { /* 1 */\\r\\n    text-transform: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the inability to style clickable types in iOS and Safari.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  [type=\\\"button\\\"],\\r\\n  [type=\\\"reset\\\"],\\r\\n  [type=\\\"submit\\\"] {\\r\\n    -webkit-appearance: button;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the inner border and padding in Firefox.\\r\\n   */\\r\\n  \\r\\n  button::-moz-focus-inner,\\r\\n  [type=\\\"button\\\"]::-moz-focus-inner,\\r\\n  [type=\\\"reset\\\"]::-moz-focus-inner,\\r\\n  [type=\\\"submit\\\"]::-moz-focus-inner {\\r\\n    border-style: none;\\r\\n    padding: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Restore the focus styles unset by the previous rule.\\r\\n   */\\r\\n  \\r\\n  button:-moz-focusring,\\r\\n  [type=\\\"button\\\"]:-moz-focusring,\\r\\n  [type=\\\"reset\\\"]:-moz-focusring,\\r\\n  [type=\\\"submit\\\"]:-moz-focusring {\\r\\n    outline: 1px dotted ButtonText;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the padding in Firefox.\\r\\n   */\\r\\n  \\r\\n  fieldset {\\r\\n    padding: 0.35em 0.75em 0.625em;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the text wrapping in Edge and IE.\\r\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n   * 3. Remove the padding so developers are not caught out when they zero out\\r\\n   *    `fieldset` elements in all browsers.\\r\\n   */\\r\\n  \\r\\n  legend {\\r\\n    box-sizing: border-box; /* 1 */\\r\\n    color: inherit; /* 2 */\\r\\n    display: table; /* 1 */\\r\\n    max-width: 100%; /* 1 */\\r\\n    padding: 0; /* 3 */\\r\\n    white-space: normal; /* 1 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n   */\\r\\n  \\r\\n  progress {\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the default vertical scrollbar in IE 10+.\\r\\n   */\\r\\n  \\r\\n  textarea {\\r\\n    overflow: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Add the correct box sizing in IE 10.\\r\\n   * 2. Remove the padding in IE 10.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"checkbox\\\"],\\r\\n  [type=\\\"radio\\\"] {\\r\\n    box-sizing: border-box; /* 1 */\\r\\n    padding: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n  [type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n    height: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the odd appearance in Chrome and Safari.\\r\\n   * 2. Correct the outline style in Safari.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"search\\\"] {\\r\\n    -webkit-appearance: textfield; /* 1 */\\r\\n    outline-offset: -2px; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove the inner padding in Chrome and Safari on macOS.\\r\\n   */\\r\\n  \\r\\n  [type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n    -webkit-appearance: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n   * 2. Change font properties to `inherit` in Safari.\\r\\n   */\\r\\n  \\r\\n  ::-webkit-file-upload-button {\\r\\n    -webkit-appearance: button; /* 1 */\\r\\n    font: inherit; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /* Interactive\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /*\\r\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n   */\\r\\n  \\r\\n  details {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  /*\\r\\n   * Add the correct display in all browsers.\\r\\n   */\\r\\n  \\r\\n  summary {\\r\\n    display: list-item;\\r\\n  }\\r\\n  \\r\\n  /* Misc\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Add the correct display in IE 10+.\\r\\n   */\\r\\n  \\r\\n  template {\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Add the correct display in IE 10.\\r\\n   */\\r\\n  \\r\\n  [hidden] {\\r\\n    display: none;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./assets/css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/reset.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml, body, div, span, applet, object, iframe,\\r\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed, \\r\\nfigure, figcaption, footer, header, hgroup, \\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle, aside, details, figcaption, figure, \\r\\nfooter, header, hgroup, menu, nav, section {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nbody {\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\n\\tcontent: '';\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./assets/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/styles.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n  display: grid;\\r\\n  grid-template-areas: \\\"header\\\" \\\"main\\\";\\r\\n  grid-template-rows: 130px auto; }\\r\\n\\r\\n.header {\\r\\n  grid-area: header;\\r\\n  position: relative; }\\r\\n\\r\\n.main {\\r\\n  grid-area: main;\\r\\n  padding: 1rem 10rem; }\\r\\n\\r\\n.header__title {\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n  margin-top: 1rem; }\\r\\n\\r\\n.header__nav {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  background-color: #dddddd; }\\r\\n\\r\\n.nav__container {\\r\\n  display: flex;\\r\\n  margin: 0 15rem;\\r\\n  justify-content: space-between;\\r\\n  width: calc(100% - 2*15rem); }\\r\\n\\r\\n.nav__item {\\r\\n  width: 25%;\\r\\n  list-style: none;\\r\\n  text-align: center;\\r\\n  padding: 1rem 0;\\r\\n  border: 1px solid;\\r\\n  cursor: pointer;\\r\\n  background-color: white;\\r\\n  transition: background-color ease-in-out 0.2s; }\\r\\n\\r\\n.nav__item:hover {\\r\\n  color: white;\\r\\n  background-color: #313131;\\r\\n  transition: background-color ease-in-out 0.2s;\\r\\n  border: white; }\\r\\n\\r\\n.nav__item:nth-child(1), .nav__item:nth-child(2), .nav__item:nth-child(3) {\\r\\n  border-right: none; }\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./assets/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });