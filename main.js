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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#page-content {\r\n\r\n    width: 80vw;\r\n    justify-self: center;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 0.6fr;\r\n\r\n}\r\n\r\n.player {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.game-board {\r\n\r\n    display: grid;\r\n\r\n    grid-template-columns: min-content min-content min-content min-content min-content min-content min-content min-content min-content min-content;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n\r\n    transform: scaleY(-1);\r\n\r\n}\r\n\r\n.board-cell {\r\n    background-color: rgb(238, 252, 255);\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: black;\r\n\r\n    width: 3vw;\r\n    height: 3vw;\r\n}\r\n\r\n.game-board[data-active='true'] .board-cell[data-state='ship'] {\r\n\r\n    background-color: green;\r\n\r\n}\r\n\r\n.board-cell[data-state='miss'] {\r\n\r\n    background-color: rgb(0, 140, 255);\r\n\r\n}\r\n\r\n.board-cell[data-state='hit'] {\r\n\r\n    background-color: rgb(182, 0, 0);\r\n\r\n}\r\n\r\n.handover-background[hidden] {\r\n    display: none;\r\n}\r\n\r\n.handover-background {\r\n\r\n    padding: none;\r\n    margin: none;\r\n\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n\r\n}\r\n\r\n.handover-disp {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    width: 12rem;\r\n    height: 8rem;\r\n\r\n    background-color: white;\r\n\r\n    border-style: solid;\r\n    border-radius: 1.5rem;\r\n    border-width: 2px;\r\n\r\n    box-shadow:\r\n    whitesmoke 0 0 0 3px,\r\n    black 0 0 0 5px;\r\n\r\n}\r\n\r\n.handover-text {\r\n    font-size: 1.5rem;\r\n\r\n    position: relative;\r\n    bottom: 0.3rem;\r\n}\r\n\r\n.handover-button {\r\n    font-size: 2rem;\r\n    \r\n    position: relative;\r\n    bottom: 1rem;\r\n}\r\n\r\n.victory-disp[hidden] {\r\n    display: none;\r\n}\r\n\r\n.victory-disp {\r\n\r\n    width: 40rem;\r\n    height: 14rem;\r\n\r\n    position: absolute;\r\n    top: 40vh;\r\n    left: calc(50vw - 20rem);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    background-color: rgb(217, 244, 255);\r\n\r\n    border-style: solid;\r\n    border-radius: 4rem;\r\n    border-width: 2px;\r\n\r\n    box-shadow:\r\n    rgb(217, 244, 255) 0 0 0 4px,\r\n    black 0 0 0 6px;\r\n\r\n}\r\n\r\n.victory-text {\r\n    font-size: 3rem;\r\n\r\n    position: relative;\r\n    bottom: 0.3rem;\r\n}\r\n\r\n.ship-form[hidden] {\r\n    display: none;\r\n}\r\n\r\n.ship-form {\r\n\r\n    align-self: center;\r\n    justify-self: center;\r\n\r\n    width: 20vw;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    grid-column: 1 / 3;\r\n\r\n    background: whitesmoke;\r\n\r\n    border-style: solid;\r\n    border-radius: 2.5rem;\r\n\r\n    box-shadow:\r\n    lightsteelblue 0 0 0 2px,\r\n    black 0 0 0 4px;\r\n\r\n    font-size: 1.2rem;\r\n\r\n}\r\n\r\n.ship-form input {\r\n    width: 10rem;\r\n    margin-bottom: 1rem;\r\n    font-size: 1rem;\r\n}\r\n\r\n.player-select-form[hidden] {\r\n    display: none;\r\n}\r\n\r\n.player-select-form {\r\n    width: 20rem;\r\n\r\n    position: absolute;\r\n    top: 40vh;\r\n    left: calc(50vw - 10rem);\r\n\r\n    background: rgb(217, 244, 255);\r\n\r\n    font-size: 2rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    border-style: solid;\r\n    border-radius: 3rem;\r\n    border-width: 2px;\r\n\r\n    box-shadow:\r\n    rgb(217, 244, 255) 0 0 0 4px,\r\n    black 0 0 0 6px;\r\n\r\n    button {\r\n        margin-bottom: 1.5rem;\r\n        font-size: 1.2rem;\r\n\r\n        border-radius: 0.5rem;\r\n    }\r\n}\r\n\r\n.player-select-options {\r\n    margin-top: -1.5rem;\r\n    margin-bottom: 1rem;\r\n\r\n    width: 100%;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.select-field {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    font-size: 1.6rem;\r\n}\r\n\r\nselect {\r\n    height: 1.5rem;\r\n    font-size: 1rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship-project/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship-project/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/Events/gameEvents.js"
/*!**********************************!*\
  !*** ./src/Events/gameEvents.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Objects_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Objects/player.js */ \"./src/Objects/player.js\");\n\r\n\r\nconst GameEvents = (UIController) => {\r\n\r\n    let players;\r\n\r\n    let currentPlayer = 1;\r\n\r\n    let player;\r\n    let opponent;\r\n\r\n    const shipLengths = [2, 3, 3, 4, 5];\r\n\r\n    const setup = async (playerTypes) => {\r\n\r\n        players = [\r\n            (0,_Objects_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerTypes[0]),\r\n            (0,_Objects_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerTypes[1])\r\n        ];\r\n\r\n        player = players[currentPlayer]\r\n        opponent = players[1 - currentPlayer]\r\n\r\n        UIController.setup.SetupHandover(_StartTurn);\r\n\r\n        const playerName = (player.type === 'real' ? 'Player': 'Computer') + \r\n                           (player.type === opponent.type ? ` 2` : '');\r\n        \r\n        UIController.setup.DisplayPlayerName(1, playerName);\r\n\r\n        const opponentName = (opponent.type === 'real' ? 'Player': 'Computer') + \r\n                           (opponent.type === player.type ? ` 1` : '');\r\n        \r\n        UIController.setup.DisplayPlayerName(0, opponentName);\r\n\r\n        for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {\r\n            const player = players[playerIndex];\r\n            const opponent = players[1-playerIndex];\r\n\r\n            UIController.runtime.DisplayShips(playerIndex, !(player.type !== 'real' && opponent.type === 'real') );\r\n\r\n            for (const shipLength of shipLengths) {\r\n                await _addShip(playerIndex, shipLength);\r\n                UIController.runtime.UpdateBoard(playerIndex, player.board.getBoardState())\r\n            }\r\n\r\n            UIController.runtime.DisplayShips(playerIndex, opponent.type !== 'real');\r\n\r\n            if (opponent.type === 'real') {\r\n                UIController.setup.SetBoardTargetLogic(cb_TargetSpace, playerIndex);\r\n            }\r\n\r\n        }\r\n\r\n        _EndTurn();\r\n    }\r\n\r\n    const _addShip = async (playerIndex, shipLength) => {\r\n        while (true) {\r\n            const shipPlacement = await _getShipPlacement(playerIndex, shipLength);\r\n            if ( players[playerIndex].board.addShip(shipPlacement[0], shipLength, shipPlacement[1]) ) break;\r\n        }\r\n    }\r\n\r\n    const _getShipPlacement = (playerIndex, shipLength) => {\r\n\r\n        if (players[playerIndex].type === 'real') {\r\n            return new Promise((resolve) => {\r\n                UIController.temps.DisplayShipPosForm(resolve, playerIndex, shipLength);\r\n            });\r\n\r\n        } else {\r\n            const shipPos = {\r\n                x: Math.floor(Math.random() * 10),\r\n                y: Math.floor(Math.random() * 10)\r\n            }\r\n            const shipOrientation = Math.floor(Math.random() * 4);\r\n\r\n            const shipPlacement = [shipPos, shipOrientation];\r\n            return new Promise((resolve) => {\r\n                resolve(shipPlacement);\r\n            });\r\n        }\r\n    }\r\n\r\n    const cb_TargetSpace = (pos, board) => {\r\n        if ( board !== 1 - currentPlayer ) { return; }\r\n\r\n        const targetBoard = players[board].board;\r\n        if ( targetBoard.receiveAttack(pos) ) {\r\n            UIController.runtime.UpdateBoard(board, targetBoard.getBoardState())\r\n\r\n            if (targetBoard.allSunk()) { _PlayerWin(); }\r\n            else { _EndTurn(); }\r\n\r\n            return true;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    const _StartTurn = async () => {\r\n        UIController.runtime.DisplayShips(currentPlayer, !(player.type !== 'real' && opponent.type === 'real') );\r\n\r\n        if ( player.type !== 'real' ) {\r\n            await new Promise((resolve) => setTimeout(() => {resolve()}, 1000));\r\n            \r\n            while ( true ) {\r\n                const pos = {\r\n                    x: Math.floor(Math.random() * 10),\r\n                    y: Math.floor(Math.random() * 10)\r\n                }\r\n                \r\n                if ( cb_TargetSpace(pos, 1 - currentPlayer) ) {\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    const _EndTurn = () => {\r\n        UIController.runtime.DisplayShips(currentPlayer, opponent.type !== 'real');\r\n        currentPlayer = 1 - currentPlayer;\r\n        player = players[currentPlayer];\r\n        opponent = players[1 - currentPlayer];\r\n\r\n        if ( player.type === 'real' && opponent.type === 'real' ) {\r\n            UIController.temps.DisplayTurnHandover();\r\n        }\r\n\r\n        if ( player.type !== 'real' ) {\r\n            _StartTurn();\r\n        }\r\n    }\r\n\r\n    const _PlayerWin = () => {\r\n\r\n        UIController.temps.DisplayVictory(currentPlayer, player.type === 'real');\r\n\r\n        currentPlayer = 2;\r\n    }\r\n\r\n    return {setup}\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameEvents);\n\n//# sourceURL=webpack://odin-battleship-project/./src/Events/gameEvents.js?\n}");

/***/ },

/***/ "./src/Objects/gameBoard.js"
/*!**********************************!*\
  !*** ./src/Objects/gameBoard.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/Objects/ship.js\");\n\r\n\r\nconst GameBoard = (Ship = _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) => {\r\n\r\n    // The size of the battleship game board\r\n    const BOARD_SIZE = 10;\r\n\r\n    // The current game board state\r\n    const state = Array.from({ length: BOARD_SIZE }, () => new Array(BOARD_SIZE).fill(0));\r\n\r\n    // The ship objects represented on the gameBoard by numbers 1, 2, 3...\r\n    const ships = [];\r\n\r\n    // Cardinal directions on the game board. 0 - north; 1 - east; 2 - south; 3 - west\r\n    const directions = {\r\n        0: {x: 0, y: 1},\r\n        1: {x: 1, y: 0},\r\n        2: {x: 0, y: -1},\r\n        3: {x: -1, y: 0}\r\n    }\r\n\r\n    // The number of the ship to be placed next\r\n    let nextShip = 1;\r\n\r\n    // Public function to retrieve current board state\r\n    const getBoardState = () => state;\r\n\r\n    // Public function to allow adding ships to the game board\r\n    const addShip = (start, length = 1, orientation = 0) => {\r\n\r\n        const positions = _determinePlacementPositions(start, length, orientation);\r\n\r\n        if (!_isValidPlacement(positions)) return false;\r\n\r\n        _placeShip(positions);\r\n        ships.push(Ship(length));\r\n\r\n        return true;\r\n    }\r\n\r\n    // Helper function to determine the spaces that will be used by a ship if placed in the game board\r\n    const _determinePlacementPositions = (start, length, orientation) => {\r\n        const dir = directions[orientation];\r\n\r\n        const positions = [];\r\n        for (let i=0; i<length; i++) { \r\n            positions.push({x: start.x + i*dir.x, y: start.y + i*dir.y}); \r\n        }\r\n\r\n        return positions;\r\n    }\r\n\r\n    // Helper function for addShip to determine if the positions required by a ship placement are available\r\n    // Detects both collisions with other ships and the edge of the board\r\n    const _isValidPlacement = (positions) => {\r\n        for (const pos of positions) {\r\n            if (pos.x >= BOARD_SIZE || pos.x < 0 || pos.y >= BOARD_SIZE || pos.y < 0 ) return false;\r\n            if (state[pos.x][pos.y]) return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    // Helper function for addShip that places numerical values representing the ship\r\n    // into the game board state at the required positions\r\n    const _placeShip = (positions) => {\r\n        for (const pos of positions) {\r\n            state[pos.x][pos.y] = nextShip;\r\n        }\r\n\r\n        nextShip++;\r\n    }\r\n\r\n    // Public function to allow board spaces to be attacked, performing any effects of the attack\r\n    const receiveAttack = (pos) => {\r\n        const targetState = state[pos.x][pos.y]\r\n\r\n        if (targetState === 0) {\r\n            state[pos.x][pos.y] = -1;\r\n            return true;\r\n        }\r\n\r\n        if (targetState > 0) {\r\n            ships[targetState - 1].hit();\r\n            state[pos.x][pos.y] = -2;\r\n            return true;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    const allSunk = () => {\r\n        for (const ship of ships) {\r\n            if (!ship.isSunk()) return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    return {\r\n        getBoardState,\r\n        addShip,\r\n        receiveAttack,\r\n        allSunk\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://odin-battleship-project/./src/Objects/gameBoard.js?\n}");

/***/ },

/***/ "./src/Objects/player.js"
/*!*******************************!*\
  !*** ./src/Objects/player.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/Objects/gameBoard.js\");\n\r\n\r\nconst Player = (type = 'real') => {\r\n\r\n    const board = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    return {\r\n        type,\r\n        board\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://odin-battleship-project/./src/Objects/player.js?\n}");

/***/ },

/***/ "./src/Objects/ship.js"
/*!*****************************!*\
  !*** ./src/Objects/ship.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (size) => {\r\n\r\n    let hits = 0;\r\n\r\n    const hit = () => { hits++; }\r\n\r\n    const isSunk = () => { return hits === size; }\r\n\r\n    return {\r\n        hit,\r\n        isSunk\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://odin-battleship-project/./src/Objects/ship.js?\n}");

/***/ },

/***/ "./src/UI/ContentBuilder.js"
/*!**********************************!*\
  !*** ./src/UI/ContentBuilder.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Constructs DOM objects from javascript objects of the above format\r\nconst ConstructHTMLFromObject = (object) => {\r\n\r\n    // Retrieve element name (\"p\", \"div\", \"input\", etc)\r\n    const elementName = Object.keys(object)[0];\r\n\r\n    // Create element requested\r\n    const element = document.createElement(elementName);\r\n\r\n    // Retrieve list of attributes to assign\r\n    const attributes = object[elementName].attributes;\r\n\r\n    // Assign all provided attributes and their values, e.g. element.id, element.className, element.innerText, etc\r\n    for (const [attribute, assignment] of Object.entries(attributes)) {\r\n        if (attribute.startsWith(\"data-\")) {\r\n            element.setAttribute(attribute, assignment);\r\n        } else {\r\n            element[attribute] = assignment;\r\n        }\r\n    }\r\n\r\n    // Retrieve child elements\r\n    const children = object[elementName].children;\r\n\r\n    // Create all required child elements using recursive calls and append them to the element\r\n    for (let i=0; i<children.length; i++) {\r\n        const child = ConstructHTMLFromObject(children[i]);\r\n        element.appendChild(child);\r\n    }\r\n\r\n    // Return constructed element tree for use in the DOM\r\n    return element;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConstructHTMLFromObject);\n\n//# sourceURL=webpack://odin-battleship-project/./src/UI/ContentBuilder.js?\n}");

/***/ },

/***/ "./src/UI/gameBoardUI.js"
/*!*******************************!*\
  !*** ./src/UI/gameBoardUI.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GameBoardUI = () => {\r\n\r\n    const BOARD_SIZE = 10;\r\n\r\n    return new Array(100).fill(\r\n        {\"div\": {attributes: { \"className\": \"board-cell\", \"data-state\": \"none\" }, children: []}}\r\n    )\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoardUI);\n\n//# sourceURL=webpack://odin-battleship-project/./src/UI/gameBoardUI.js?\n}");

/***/ },

/***/ "./src/UI/pageContent.js"
/*!*******************************!*\
  !*** ./src/UI/pageContent.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ContentBuilder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBuilder.js */ \"./src/UI/ContentBuilder.js\");\n/* harmony import */ var _gameBoardUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoardUI.js */ \"./src/UI/gameBoardUI.js\");\n\r\n\r\n\r\nconst contentObject = {\r\n\r\n    \"div\": { attributes: { \"id\": \"page-content\" }, children: [\r\n\r\n        {\"div\": { attributes: { \"className\": \"player\" }, children: [\r\n            {\"p\": { attributes: { \"className\": \"player-name\" }, children: []}},\r\n            {\"div\": { attributes: { \"className\": \"game-board\", \"data-active\": \"false\" }, children: (0,_gameBoardUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}}\r\n        ]}},\r\n        {\"div\": { attributes: { \"className\": \"player\" }, children: [\r\n            {\"p\": { attributes: { \"className\": \"player-name\" }, children: []}},\r\n            {\"div\": { attributes: { \"className\": \"game-board\", \"data-active\": \"false\" }, children: (0,_gameBoardUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}}\r\n        ]}},\r\n\r\n        {\"div\": { attributes: { \"className\": \"handover-background\", \"hidden\": \"true\" }, children: [\r\n            {\"div\": { attributes: { \"className\": \"handover-disp\" }, children: [\r\n                {\"p\": { attributes: { \"className\": \"handover-text\", \"innerText\": \"Pass Screen\" }, children: []}},\r\n                {\"button\": { attributes: { \"className\": \"handover-button\" }, children: []}}\r\n            ]}}\r\n        ]}},\r\n\r\n        {\"div\": { attributes: { \"className\": \"victory-disp\", \"hidden\": \"true\" }, children: [\r\n            {\"p\": { attributes: { \"className\": \"victory-text\"}, children: []}}\r\n        ]}},\r\n\r\n        {\"form\": { attributes: { \"className\": \"ship-form\", \"hidden\": \"true\" }, children: [\r\n            {\"p\": { attributes: { \"className\": \"ship-form-head\" }, children: []}},\r\n            {\"label\": { attributes: { \"for\": \"ship-x-pos\" }, children: []}},\r\n            {\"input\": { attributes: { \"id\": \"ship-x-pos\", \"type\": \"number\", \"name\": \"xPos\", \"placeholder\": \"x: 1-10\", \"min\": \"1\", \"max\": \"10\", \"required\": \"true\" }, children: []}},\r\n            {\"label\": { attributes: { \"for\": \"ship-y-pos\" }, children: []}},\r\n            {\"input\": { attributes: { \"id\": \"ship-y-pos\", \"type\": \"number\", \"name\": \"yPos\", \"placeholder\": \"y: 1-10\", \"min\": \"1\", \"max\": \"10\", \"required\": \"true\" }, children: []}},\r\n            {\"label\": { attributes: { \"for\": \"ship-orientation\" }, children: []}},\r\n            {\"input\": { attributes: { \"id\": \"ship-orientation\", \"type\": \"number\", \"name\": \"orientation\", \"placeholder\": \"1-4 (N/E/S/W)\", \"min\": \"1\", \"max\": \"4\", \"required\": \"true\" }, children: []}},\r\n            {\"button\": { attributes: { \"type\": \"submit\", \"hidden\": \"true\" }, children: [] }}\r\n        ]}},\r\n\r\n        {\"form\": { attributes: { \"className\": \"player-select-form\" }, children: [\r\n            {\"p\": { attributes: { \"innerText\": \"Select Players\" }, children: [] }},\r\n            {\"div\": { attributes: { \"className\": \"player-select-options\" }, children: [\r\n                {\"div\": { attributes: { \"className\": \"select-field\" }, children: [\r\n                    {\"label\": { attributes: { \"for\": \"player-1-type\", \"innerText\": \"Player 1\" }, children: []}},\r\n                    {\"select\": { attributes: { \"id\": \"player-1-type\", \"name\": \"player-1-type\" }, children: [\r\n                        {\"option\": { attributes: { \"value\": \"real\", \"innerText\": \"Human\" }, children: []}},\r\n                        {\"option\": { attributes: { \"value\": \"computer\", \"innerText\": \"Computer\" }, children: []}}\r\n                    ]}}\r\n                ]}},\r\n                {\"div\": {attributes: { \"className\": \"select-field\" }, children: [\r\n                    {\"label\": { attributes: { \"for\": \"player-2-type\", \"innerText\": \"Player 2\" }, children: []}},\r\n                    {\"select\": { attributes: { \"id\": \"player-2-type\", \"name\": \"player-2-type\" }, children: [\r\n                        {\"option\": { attributes: { \"value\": \"real\", \"innerText\": \"Human\" }, children: []}},\r\n                        {\"option\": { attributes: { \"value\": \"computer\", \"innerText\": \"Computer\" }, children: []}}\r\n                    ]}}\r\n                ]}}\r\n            ]}},\r\n            {\"button\": { attributes: { \"type\": \"submit\", \"innerText\": \"Start\" }, children: []}}\r\n        ]}}\r\n\r\n    ]}\r\n\r\n}\r\n\r\nconst page = () => {\r\n\r\n    const pageContent = (0,_ContentBuilder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentObject);\r\n\r\n    const playerUIs = pageContent.getElementsByClassName(\"player\");\r\n    const boards = [ playerUIs[0].getElementsByClassName(\"game-board\")[0], playerUIs[1].getElementsByClassName(\"game-board\")[0] ];\r\n\r\n    const playerTypeForm = pageContent.getElementsByClassName('player-select-form')[0];\r\n    const getPlayerTypes = (dataSender) => {\r\n        playerTypeForm.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n\r\n            const formData = new FormData(event.target);\r\n            \r\n            const data = [];\r\n            for ( let [ key, value ] of formData.entries() ) {\r\n                data.push(value);\r\n            }\r\n\r\n            playerTypeForm.setAttribute(\"hidden\", true);\r\n\r\n            dataSender(data);\r\n        })\r\n    }\r\n\r\n    const DisplayPlayerName = (player, playerName) => {\r\n        playerUIs[player].getElementsByClassName(\"player-name\")[0].innerText = playerName;\r\n    }\r\n\r\n    const handover = pageContent.getElementsByClassName(\"handover-background\")[0];\r\n    const SetupHandover = (StartNextPlayerTurn) => {\r\n        const disp = handover.getElementsByClassName(\"handover-disp\")[0];\r\n    \r\n        const button = disp.getElementsByClassName(\"handover-button\")[0];\r\n\r\n        button.innerText = \"Continue\";\r\n        button.addEventListener(\"click\", () => {\r\n            handover.setAttribute(\"hidden\", true);\r\n            StartNextPlayerTurn();\r\n        });\r\n    }\r\n\r\n    const SetBoardTargetLogic = (Logic, player) => {\r\n        const cells = boards[player].getElementsByClassName(\"board-cell\");\r\n        for ( let i=0; i < cells.length; i++) {\r\n            cells[i].addEventListener('click', () => {\r\n                Logic({x: i % 10, y: Math.floor(i/10)}, player);\r\n            });\r\n        }\r\n    }\r\n\r\n    const UpdateBoard = (player, boardState) => {\r\n        const board = boards[player];\r\n        const cells = board.getElementsByClassName(\"board-cell\");\r\n\r\n        for ( let col=0; col < boardState.length; col++ ) { \r\n            for ( let row=0; row < boardState[col].length; row++ ) {\r\n                const boardVal = boardState[col][row];\r\n\r\n                const cell = cells[col + 10*row];\r\n\r\n                if (boardVal > 0) { cell.dataset.state = \"ship\"; }\r\n                if (boardVal === -1) { cell.dataset.state = \"miss\"; }\r\n                if (boardVal === -2) { cell.dataset.state = \"hit\"; }\r\n                // State cannot change to miss after a space is targeted\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n    const DisplayShips = (player, shouldDisplay) => {\r\n        boards[player].dataset.active = shouldDisplay;\r\n    }\r\n\r\n    const DisplayTurnHandover = () => {\r\n        handover.removeAttribute(\"hidden\");\r\n    }\r\n\r\n\r\n    const victoryDisp = pageContent.getElementsByClassName(\"victory-disp\")[0];\r\n    const victoryText = victoryDisp.getElementsByClassName(\"victory-text\")[0];\r\n\r\n    const DisplayVictory = (player, real) => {\r\n        const playerName = playerUIs[player].getElementsByClassName(\"player-name\")[0].textContent;\r\n        let message;\r\n\r\n        if (real) { message = \"Congratulations \" + playerName + \"!\"; }\r\n        else { message = playerName + \" wins.\" }\r\n\r\n        victoryText.textContent = message;\r\n        victoryDisp.removeAttribute(\"hidden\");\r\n    }\r\n\r\n\r\n    const shipPosForm = pageContent.getElementsByClassName(\"ship-form\")[0];\r\n    let sendShipData;\r\n    shipPosForm.addEventListener(\"submit\", (event) => {\r\n        \r\n        event.preventDefault();\r\n\r\n        const formData = new FormData(event.target);\r\n        const data = {};\r\n        for (let [ key, value ] of formData.entries() ) {\r\n            data[key] = value;\r\n        }\r\n        \r\n        const shipData = [{ x: data.xPos - 1, y: data.yPos - 1 }, data.orientation - 1 ];\r\n        sendShipData(shipData);\r\n\r\n        shipPosForm.setAttribute(\"hidden\", true);\r\n        \r\n    });\r\n\r\n    const shipMessageField = shipPosForm.getElementsByClassName(\"ship-form-head\")[0];\r\n    const DisplayShipPosForm = (dataSender, player, length) => {\r\n        sendShipData = dataSender;\r\n        const playerName = playerUIs[player].getElementsByClassName(\"player-name\")[0].textContent\r\n        const shipPosMessage = playerName + \", place ship of length \" + length;\r\n\r\n        shipMessageField.textContent = shipPosMessage;\r\n        shipPosForm.removeAttribute(\"hidden\");\r\n    }\r\n\r\n    return {\r\n        content: { pageContent },\r\n        setup: {\r\n            DisplayPlayerName,\r\n            SetupHandover,\r\n            SetBoardTargetLogic\r\n        },\r\n        runtime: {\r\n            UpdateBoard,\r\n            DisplayShips\r\n        },\r\n        temps: {\r\n            DisplayTurnHandover,\r\n            DisplayVictory,\r\n            DisplayShipPosForm,\r\n            getPlayerTypes\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);\n\n//# sourceURL=webpack://odin-battleship-project/./src/UI/pageContent.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _UI_pageContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/pageContent.js */ \"./src/UI/pageContent.js\");\n/* harmony import */ var _Events_gameEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events/gameEvents.js */ \"./src/Events/gameEvents.js\");\n\r\n\r\n\r\n\r\nconst page = (0,_UI_pageContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\ndocument.body.appendChild(page.content.pageContent);\r\n\r\nconst gameEvents = (0,_Events_gameEvents_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(page);\r\n\r\ngameEvents.setup(await new Promise((resolve) => {\r\n    page.temps.getPlayerTypes(resolve);\r\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://odin-battleship-project/./src/index.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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