/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Reset */\\n\\n*,\\n*::before,\\n*::after {\\n\\tbox-sizing: border-box;\\n}\\n\\n* {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tfont: inherit;\\n}\\n\\nhtml {\\n\\tcolor-scheme: dark light;\\n}\\n\\nbody {\\n\\tmin-height: 100vh;\\n\\tfont-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;\\n}\\n\\nimg,\\npicture,\\nsvg,\\nvideo,\\nfooter {\\n\\tdisplay: block;\\n\\tmax-width: 100%;\\n}\\n\\np {\\n\\tline-height: 150%;\\n}\\n\\n#content {\\n\\tpadding: 40px;\\n}\\n\\n/* Nav */\\n#hero_img {\\n\\twidth: 100vw;\\n\\tpadding: 20px 40px;\\n}\\n\\n#nav_wrapper {\\n\\tdisplay: flex;\\n\\tflex-direction: colum;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\tmax-width: 1200px;\\n\\n\\tmargin: 0 auto;\\n}\\n\\nul,\\n#icons {\\n\\tlist-style: none;\\n\\tdisplay: flex;\\n\\tgap: 24px;\\n}\\n\\nul > li > a:hover {\\n\\tcolor: blue;\\n\\ttext-decoration: underline;\\n\\ttext-decoration-thickness: 4px;\\n}\\n\\n* {\\n\\t/* border: 1px solid red; */\\n}\\n\\n#main_content {\\n\\tmax-width: 1200px;\\n\\tmargin: 0 auto;\\n\\tpadding: 80px 0;\\n}\\n\\n.currentSection {\\n\\ttext-decoration: underline;\\n\\ttext-decoration-thickness: 4px;\\n}\\n\\n/* FOOTER */\\nfooter {\\n\\tmax-width: 1200px;\\n\\tmargin: 0 auto;\\n\\n\\tborder: 4px solid black;\\n\\tpadding: 40px 56px;\\n\\tborder-radius: 24px;\\n}\\n\\n.footerTitle {\\n\\tfont-size: 18px;\\n\\tfont-weight: 800;\\n\\tmargin-bottom: 8px;\\n}\\n\\n/* Secci??n NUESTROS VALORES */\\n\\n#contentWrapper {\\n\\tpadding: 20px 0 80px 0;\\n}\\n\\n.iconValue {\\n\\tmax-width: 70px;\\n\\taspect-ratio: 1;\\n\\tmargin: 0 auto;\\n}\\n\\n.sectionTitle {\\n\\tfont-size: 40px;\\n\\tfont-weight: 800;\\n\\ttext-align: center;\\n\\tmargin-bottom: 48px;\\n\\ttext-transform: uppercase;\\n}\\n\\n.valuesContainer {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(3, 1fr);\\n\\tgap: 48px;\\n}\\n\\n.valuesContainer > div > h2 {\\n\\ttext-align: center;\\n\\tfont-weight: 600;\\n\\tfont-size: 18px;\\n\\ttext-transform: uppercase;\\n\\tpadding: 24px 0;\\n}\\n\\n/* Carta */\\n\\n.contenedorCarta {\\n\\tborder: 2px solid black;\\n\\tpadding: 48px;\\n\\tmax-width: 800px;\\n\\tmargin: 0 auto;\\n}\\n\\n.contenedorCarta > h2 {\\n\\tfont-size: 32px;\\n\\tfont-weight: 800;\\n\\ttext-transform: uppercase;\\n}\\n.contenedorCarta > p {\\n\\tfont-style: italic;\\n}\\n\\n.listaContainer {\\n\\tmargin-top: 32px;\\n}\\n\\n.itemContainer {\\n\\tmargin-bottom: 16px;\\n}\\n\\n.namePriceContainer {\\n\\tdisplay: flex;\\n\\tflex-direction: row;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n\\n\\tfont-size: 24px;\\n}\\n\\n.itemDescription {\\n\\tfont-size: 16px;\\n\\tfont-style: italic;\\n}\\n\\n.priceContainer {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tgap: 16px;\\n\\twidth: 96px;\\n}\\n\\n.iconVegan {\\n\\twidth: 32px;\\n\\tmargin: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_project/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_project/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_conocenos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/conocenos.js */ \"./src/modules/conocenos.js\");\n/* harmony import */ var _modules_carta_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carta.js */ \"./src/modules/carta.js\");\n\n\n\n\n\n// Load default Home page\nconst inicio = (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.homeContent)()\nconst conocenos = (0,_modules_conocenos_js__WEBPACK_IMPORTED_MODULE_2__.Conocenos)()\nconst carta = (0,_modules_carta_js__WEBPACK_IMPORTED_MODULE_3__.Carta)()\n\nconst pageContent = document.getElementById(\"content\")\npageContent.appendChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.Nav)())\npageContent.appendChild(carta)\npageContent.appendChild((0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__.footer)())\n\n// Load content from other tabs\nconst tabCarta = document.getElementById(\"carta\")\ntabCarta.addEventListener(\"click\", () => {\n\tloadContent(carta)\n\ttabCarta.classList.add(\"currentSection\")\n\n\ttabInicio.classList.remove(\"currentSection\")\n\ttabConocenos.classList.remove(\"currentSection\")\n})\n\nconst tabConocenos = document.getElementById(\"conocenos\")\ntabConocenos.addEventListener(\"click\", () => {\n\tloadContent(conocenos)\n\n\ttabInicio.classList.remove(\"currentSection\")\n\ttabConocenos.classList.add(\"currentSection\")\n})\n\nconst tabInicio = document.getElementById(\"inicio\")\ntabInicio.classList.add(\"currentSection\")\ntabInicio.addEventListener(\"click\", () => {\n\tloadInicio()\n})\n\nconst logo = document.getElementById(\"logo\")\nlogo.addEventListener(\"click\", () => {\n\tloadInicio()\n})\n\nfunction loadInicio() {\n\tloadContent(inicio)\n\n\ttabInicio.classList.add(\"currentSection\")\n\ttabConocenos.classList.remove(\"currentSection\")\n}\n\nfunction loadContent(sectionName) {\n\tconst mainContent = document.getElementById(\"main_content\")\n\tmainContent.remove()\n\n\tconst nav = document.getElementById(\"nav_wrapper\")\n\tnav.after(sectionName)\n}\n\n\n//# sourceURL=webpack://restaurant_project/./src/index.js?");

/***/ }),

/***/ "./src/modules/carta.js":
/*!******************************!*\
  !*** ./src/modules/carta.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carta\": () => (/* binding */ Carta)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/modules/utilities.js\");\n/* harmony import */ var _images_conocenos_icono_vegan_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/conocenos/icono_vegan.webp */ \"./src/images/conocenos/icono_vegan.webp\");\n\n\n\nfunction createItem(name, description, price, image, src = null) {\n\tthis.name = name\n\tthis.description = description\n\tthis.price = price\n\tthis.image = image\n\tthis.src = src\n\n\treturn { name, description, price, image, src }\n}\n\nconst itemsBocadillosFactory = [\n\tnew createItem(\"Jam??n Ib??rico\", \"\", 3.7, false),\n\tnew createItem(\"Fuet\", \"\", 3.2, false),\n\tnew createItem(\"Jam??n de Pavo\", \"\", 3, false),\n\tnew createItem(\"Bikini\", \"\", 3.2, false),\n\tnew createItem(\"Aguacate\", \"con tomate, r??cula y cebolla crunchy\", 3.9, true),\n\tnew createItem(\"Queso de Cabra\", \"con r??cula, miel y nueces\", 3.9, false),\n\tnew createItem(\"Salm??n\", \"con guacamole o queso crema\", 4.1, false),\n\tnew createItem(\"Queso Brie\", \"con cebolla caramelizada\", 4, false),\n\tnew createItem(\"Heura\", \"con tomate, r??cula y cebolla crunchy\", 4.1, true),\n]\nconsole.table(itemsBocadillosFactory)\nconsole.log(typeof itemsBocadillosFactory)\nconsole.log(itemsBocadillosFactory[0])\nconsole.log(itemsBocadillosFactory[0].name)\n\nconst itemsBocadillos = [\n\t[\"Jam??n Ib??rico\", null, 3.7, false],\n\t[\"Fuet\", \"\", 3.2, false],\n\t[\"Jam??n de Pavo\", \"\", 3, false],\n\t[\"Bikini\", \"\", 3.2, false],\n\t[\"Aguacate\", \"con tomate, r??cula y cebolla crunchy\", 3.9, true],\n\t[\"Queso de Cabra\", \"con r??cula, miel y nueces\", 3.9, false],\n\t[\"Salm??n\", \"con guacamole o queso crema\", 4.1, false],\n\t[\"Queso Brie\", \"con cebolla caramelizada\", 4, false],\n\t[\"Heura\", \"con tomate, r??cula y cebolla crunchy\", 4.1, true],\n]\n\nconst Carta = () => {\n\tconsole.log(\"Carta loaded\") //Test\n\n\tconst mainContent = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"section\")\n\tmainContent.id = \"main_content\"\n\n\tconst header = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"h1\", \"La carta de FIKA\")\n\theader.classList.add(\"sectionTitle\")\n\tmainContent.appendChild(header)\n\n\tconst divBocadillos = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tdivBocadillos.classList.add(\"contenedorTodasCartas\")\n\n\tconst divListaBocadillos = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tdivListaBocadillos.classList.add(\"contenedorCarta\")\n\n\tconst divListaTostadas = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tconst divListaExtras = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\n\tmainContent.appendChild(divBocadillos)\n\tdivBocadillos.appendChild(divListaBocadillos)\n\tdivBocadillos.appendChild(divListaTostadas)\n\tdivBocadillos.appendChild(divListaExtras)\n\n\tconst titleBocadillos = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"h2\", \"Bocadillos\")\n\tconst subtitleBocadillos = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"(Todos nuestros bocadillos est??n hechos con pan de coca artesano)\")\n\n\tdivListaBocadillos.appendChild(titleBocadillos)\n\tdivListaBocadillos.appendChild(subtitleBocadillos)\n\n\tfunction createListaCarta(objectContent) {\n\t\tconst listaContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\t\tlistaContainer.classList.add(\"listaContainer\")\n\n\t\tobjectContent.map((items) => {\n\t\t\tconst itemContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\t\t\titemContainer.classList.add(\"itemContainer\")\n\n\t\t\tconst namePriceContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\t\t\tnamePriceContainer.classList.add(\"namePriceContainer\")\n\t\t\titemContainer.appendChild(namePriceContainer)\n\n\t\t\tconst itemName = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", items.name)\n\t\t\titemName.classList.add(\"itemName\")\n\t\t\tnamePriceContainer.appendChild(itemName)\n\n\t\t\tif (items.description !== \"\") {\n\t\t\t\tconst itemDescription = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", items.description)\n\t\t\t\titemDescription.classList.add(\"itemDescription\")\n\t\t\t\titemContainer.appendChild(itemDescription)\n\t\t\t}\n\n\t\t\tconst priceContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\t\t\tpriceContainer.classList.add(\"priceContainer\")\n\t\t\tnamePriceContainer.appendChild(priceContainer)\n\n\t\t\tconst itemPrice = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", items.price.toFixed(2))\n\t\t\titemPrice.classList.add(\"itemPrice\")\n\t\t\tpriceContainer.appendChild(itemPrice)\n\n\t\t\tif (items.image === true) {\n\t\t\t\tconst iconVegan = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.iconCreation)(_images_conocenos_icono_vegan_webp__WEBPACK_IMPORTED_MODULE_1__)\n\t\t\t\ticonVegan.classList.add(\"iconVegan\")\n\t\t\t\tpriceContainer.appendChild(iconVegan)\n\t\t\t}\n\n\t\t\tlistaContainer.appendChild(itemContainer)\n\t\t})\n\n\t\tdivListaBocadillos.appendChild(listaContainer)\n\t\t// divListaBocadillos.appendChild(listaContainer)\n\t}\n\n\tcreateListaCarta(itemsBocadillosFactory)\n\n\t// itemsBocadillos.map((array) =>\n\t// \tarray.map((item) => {\n\t// \t\tif (item !== null || item !== \"\" || item !== false) {\n\t// \t\t\tif (item === true) {\n\t// \t\t\t\tconst newImage = newElement(\"i\")\n\t// \t\t\t\tdivListaBocadillos.appendChild(newImage)\n\t// \t\t\t} else {\n\t// \t\t\t\tconst newItem = newElement(\"p\", item)\n\t// \t\t\t\tdivListaBocadillos.appendChild(newItem)\n\t// \t\t\t}\n\t// \t\t}\n\t// \t})\n\t// )\n\n\treturn mainContent\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_project/./src/modules/carta.js?");

/***/ }),

/***/ "./src/modules/conocenos.js":
/*!**********************************!*\
  !*** ./src/modules/conocenos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Conocenos\": () => (/* binding */ Conocenos)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/modules/utilities.js\");\n/* harmony import */ var _images_conocenos_icono_filosofia_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/conocenos/icono_filosofia.webp */ \"./src/images/conocenos/icono_filosofia.webp\");\n/* harmony import */ var _images_conocenos_icono_familia_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/conocenos/icono_familia.webp */ \"./src/images/conocenos/icono_familia.webp\");\n/* harmony import */ var _images_conocenos_icono_km_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/conocenos/icono_km.webp */ \"./src/images/conocenos/icono_km.webp\");\n/* harmony import */ var _images_conocenos_icono_eco_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/conocenos/icono_eco.webp */ \"./src/images/conocenos/icono_eco.webp\");\n/* harmony import */ var _images_conocenos_icono_pet_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/conocenos/icono_pet.webp */ \"./src/images/conocenos/icono_pet.webp\");\n/* harmony import */ var _images_conocenos_icono_vegan_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/conocenos/icono_vegan.webp */ \"./src/images/conocenos/icono_vegan.webp\");\n/* harmony import */ var _images_conocenos_icono_gluten_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/conocenos/icono_gluten.webp */ \"./src/images/conocenos/icono_gluten.webp\");\n\n\n\n\n\n\n\n\n\nconst allValuesContent = {\n\tfilosofia: {\n\t\timg: _images_conocenos_icono_filosofia_webp__WEBPACK_IMPORTED_MODULE_1__,\n\t\ttitle: \"Filosof??a FIKA\",\n\t\ttext: \"La filosof??a fika, proveniente del sueco, invita a tener un momento para ti y tomarse las cosas con calma, sea para descansar o socializar\",\n\t},\n\tfamilia: {\n\t\timg: _images_conocenos_icono_familia_webp__WEBPACK_IMPORTED_MODULE_2__,\n\t\ttitle: \"Familia\",\n\t\ttext: \"Los clientes son familia y queremos transmitir este v??nculo, sean peque??os o grandes, todos se tienen que sentir en casa\",\n\t},\n\tkm: {\n\t\timg: _images_conocenos_icono_km_webp__WEBPACK_IMPORTED_MODULE_3__,\n\t\ttitle: \"KM 0\",\n\t\ttext: \"Desde FIKA nos hemos comprometido a trabajar con el comercio de proximidad y crecer de la mano de nuestros clientes/proveedores\",\n\t},\n\teco: {\n\t\timg: _images_conocenos_icono_eco_webp__WEBPACK_IMPORTED_MODULE_4__,\n\t\ttitle: \"Eco-sostenible\",\n\t\ttext: \"Ponemos nuestro granito de arena para reducir los residuos de pl??stico en FIKA y ayudar a mantener limpio el medio ambiente\",\n\t},\n\tpet: {\n\t\timg: _images_conocenos_icono_pet_webp__WEBPACK_IMPORTED_MODULE_5__,\n\t\ttitle: \"Pet friendly\",\n\t\ttext: \"A nuestra familia no pueden faltar los m??s peludos, aqu?? siempre tendr??n un lugar para disfrutar GUAU!\",\n\t},\n\tvegan: {\n\t\timg: _images_conocenos_icono_gluten_webp__WEBPACK_IMPORTED_MODULE_7__,\n\t\ttitle: \"Para todos\",\n\t\ttext: \"Nuestro sello de calidad es para todos los que quieran disfrutar de nuestro producto, con opciones veganas y sin gluten\",\n\t},\n}\n\nconst Conocenos = () => {\n\tconst main_content = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tmain_content.id = \"main_content\"\n\n\tconst contentWrapper = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tcontentWrapper.id = \"contentWrapper\"\n\tmain_content.appendChild(contentWrapper)\n\n\tconst sectionTitle = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"H1\", \"Nuestros valores\")\n\tsectionTitle.classList.add(\"sectionTitle\")\n\tcontentWrapper.appendChild(sectionTitle)\n\n\tconst valuesContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tvaluesContainer.classList.add(\"valuesContainer\")\n\tcontentWrapper.appendChild(valuesContainer)\n\n\tfunction createValueContent(objectContent) {\n\t\tconst Container = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\t\tContainer.id = `${objectContent}Container`\n\n\t\tconst Icon = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.iconCreation)(allValuesContent[objectContent][\"img\"])\n\t\tconst Title = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"h2\", allValuesContent[objectContent][\"title\"])\n\t\tconst Text = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", allValuesContent[objectContent][\"text\"])\n\n\t\tContainer.appendChild(Icon)\n\t\tContainer.appendChild(Title)\n\t\tContainer.appendChild(Text)\n\n\t\tvaluesContainer.appendChild(Container)\n\t}\n\n\tObject.keys(allValuesContent).forEach((key) => {\n\t\tcreateValueContent(key)\n\t})\n\n\treturn main_content\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_project/./src/modules/conocenos.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Nav\": () => (/* binding */ Nav),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"homeContent\": () => (/* binding */ homeContent)\n/* harmony export */ });\n/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ \"./src/modules/utilities.js\");\n\n\nconst Nav = () => {\n\tconst nav = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"nav\")\n\tnav.id = \"nav_wrapper\"\n\n\tconst logo = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"img\")\n\tlogo.src = \"/src/images/logo.png\"\n\tlogo.alt = \"logo\"\n\tlogo.id = \"logo\"\n\n\tconst ul = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"ul\")\n\n\tconst inicio = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"a\", \"Inicio\")\n\tinicio.id = \"inicio\"\n\n\tconst carta = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"a\", \"Carta\")\n\tcarta.id = \"carta\"\n\n\tconst conocenos = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"a\", \"Con??cenos\")\n\tconocenos.id = \"conocenos\"\n\n\tul.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"li\")).appendChild(inicio)\n\tul.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"li\")).appendChild(carta)\n\tul.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"li\")).appendChild(conocenos)\n\n\tconst icons = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\ticons.id = \"icons\"\n\n\ticons.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"O\"))\n\ticons.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"O\"))\n\n\tnav.appendChild(logo)\n\tnav.appendChild(ul)\n\tnav.appendChild(icons)\n\treturn nav\n}\nconst footer = () => {\n\tconst footer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"footer\")\n\n\tfooter.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"Contacto\")).classList.add(\"footerTitle\")\n\tfooter.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"+34 623 38 75 88\")).setAttribute(\"id\", \"footerPhone\")\n\tfooter.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"Calle Rub??n Dar??o 36, 08030, Barcelona\")).setAttribute(\"id\", \"footerAddress\")\n\tfooter.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"fikacoffeecorner@gmail.com\")).setAttribute(\"id\", \"footerEmail\")\n\tfooter.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"p\", \"fikacoffeebcn\")).setAttribute(\"id\", \"footerInsta\")\n\n\treturn footer\n}\n\nconst homeContent = () => {\n\tconst divMainContent = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"div\")\n\tdivMainContent.id = \"main_content\"\n\n\tconst HeroImg = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.newElement)(\"img\", \"test\")\n\tHeroImg.src = \"/src/images/FIKA.webp\"\n\tHeroImg.id = \"hero_img\"\n\n\tdivMainContent.appendChild(HeroImg)\n\n\treturn divMainContent\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_project/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"iconCreation\": () => (/* binding */ iconCreation),\n/* harmony export */   \"newElement\": () => (/* binding */ newElement)\n/* harmony export */ });\nfunction newElement(element, textContent) {\n\tconst newElement = document.createElement(element)\n\tif (element == \"img\") {\n\t\tnewElement.textContent = \"\"\n\t\treturn newElement\n\t}\n\tif (textContent) {\n\t\tnewElement.textContent = textContent\n\t}\n\n\treturn newElement\n}\n\nfunction iconCreation(imageImported) {\n\tconst newImage = new Image()\n\tnewImage.src = imageImported\n\tnewImage.classList.add(\"iconValue\")\n\treturn newImage\n}\n\n\n\n\n//# sourceURL=webpack://restaurant_project/./src/modules/utilities.js?");

/***/ }),

/***/ "./src/images/conocenos/icono_eco.webp":
/*!*********************************************!*\
  !*** ./src/images/conocenos/icono_eco.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"767d6a9e6bde7c9ef4d3.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_eco.webp?");

/***/ }),

/***/ "./src/images/conocenos/icono_familia.webp":
/*!*************************************************!*\
  !*** ./src/images/conocenos/icono_familia.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"418c3b9ea5aa3886cc2c.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_familia.webp?");

/***/ }),

/***/ "./src/images/conocenos/icono_filosofia.webp":
/*!***************************************************!*\
  !*** ./src/images/conocenos/icono_filosofia.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e936865ddae0f6cedf08.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_filosofia.webp?");

/***/ }),

/***/ "./src/images/conocenos/icono_gluten.webp":
/*!************************************************!*\
  !*** ./src/images/conocenos/icono_gluten.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3aa1d2f8b50790b98865.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_gluten.webp?");

/***/ }),

/***/ "./src/images/conocenos/icono_km.webp":
/*!********************************************!*\
  !*** ./src/images/conocenos/icono_km.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17eef2b794ce2bf4ece0.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_km.webp?");

/***/ }),

/***/ "./src/images/conocenos/icono_pet.webp":
/*!*********************************************!*\
  !*** ./src/images/conocenos/icono_pet.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c9dc8395d78f7c0aae9.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_pet.webp?");

/***/ }),

/***/ "./src/images/conocenos/icono_vegan.webp":
/*!***********************************************!*\
  !*** ./src/images/conocenos/icono_vegan.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c59946bae95c740d0226.webp\";\n\n//# sourceURL=webpack://restaurant_project/./src/images/conocenos/icono_vegan.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;