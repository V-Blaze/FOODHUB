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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Lato\\\", serif;\\r\\n  background-image: linear-gradient(to right, rgba(11, 226, 3, 0), rgb(144, 159, 190));\\r\\n}\\r\\n\\r\\nheader {\\r\\n  top: 0;\\r\\n  position: sticky;\\r\\n  padding: 0.5rem 3rem;\\r\\n  padding-bottom: 0;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-image: linear-gradient(to right, rgba(11, 226, 3, 0), rgb(144, 159, 190));\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.menu ul {\\r\\n  display: flex;\\r\\n  gap: 5vw;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.menuList {\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  width: 8vw;\\r\\n  height: 5vh;\\r\\n  border-radius: 10px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border: 1px solid transparent;\\r\\n}\\r\\n\\r\\n.menuList:hover {\\r\\n  border: 1px solid grey;\\r\\n}\\r\\n\\r\\n.list-item a {\\r\\n  font-size: 1.6vw;\\r\\n  color: #092149;\\r\\n}\\r\\n\\r\\n.logo-image {\\r\\n  width: 4rem;\\r\\n  height: 4rem;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  padding: 3% 3%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  z-index: 2;\\r\\n  display: none;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.pop-up::-webkit-scrollbar {\\r\\n  width: 0.5rem;\\r\\n}\\r\\n\\r\\n.pop-up::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 6px rgba(167, 237, 251, 1);\\r\\n}\\r\\n\\r\\n.pop-up::-webkit-scrollbar-thumb {\\r\\n  background-color: #21ee4a;\\r\\n  outline: 1px solid black;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.pop-up-content {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgb(144, 159, 190));\\r\\n  border-radius: 10px;\\r\\n  margin: 3%;\\r\\n  animation-name: popupIn;\\r\\n  animation-duration: 0.5s;\\r\\n}\\r\\n\\r\\n@keyframes popupIn {\\r\\n  0% {\\r\\n    opacity: 0.4;\\r\\n    -webkit-transition: all 0.2s ease-in-out;\\r\\n    transition: all 0.5s;\\r\\n    transform: scale(0) rotate(500deg);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 0.7;\\r\\n    transition: all 0.5s;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n    transform: scale(1) rotate(0deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n.popUp-top-section {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  position: relative;\\r\\n  align-self: end;\\r\\n  margin-top: 1rem;\\r\\n  margin-right: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.food-name {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 0.5rem 0;\\r\\n  width: 15rem;\\r\\n}\\r\\n\\r\\n.category {\\r\\n  width: 15rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.name-span {\\r\\n  font-size: 0.8rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popUp-image {\\r\\n  border: solid 1.5px #fff;\\r\\n  border-radius: 12px;\\r\\n  width: 15rem;\\r\\n  height: 15rem;\\r\\n}\\r\\n\\r\\n.popUp-item-image {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 12px;\\r\\n}\\r\\n\\r\\n.popUp-item-sub-title {\\r\\n  margin-bottom: 0.6rem;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.ingridients-and-measurments {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: space-between;\\r\\n  margin: 1.6rem 0;\\r\\n}\\r\\n\\r\\n.instructions {\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.instruction-text {\\r\\n  font-size: 1rem;\\r\\n  font-weight: normal;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.food-source {\\r\\n  margin: 0.5rem 0;\\r\\n  width: 65%;\\r\\n}\\r\\n\\r\\n.comments-section {\\r\\n  margin-bottom: 2%;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.comment-wrapper {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.no-comment-span {\\r\\n  font-style: italic;\\r\\n  color: green;\\r\\n}\\r\\n\\r\\n.comment-bubble {\\r\\n  /* width: 240px; */\\r\\n  height: auto;\\r\\n  display: block;\\r\\n  background: #f5f5f5;\\r\\n  border-radius: 4px;\\r\\n  box-shadow: 2px 8px 5px #000;\\r\\n  position: relative;\\r\\n  margin: 0.3rem 0.3rem;\\r\\n}\\r\\n\\r\\n.txt {\\r\\n  padding: 8px 55px 8px 14px;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  font-weight: 600;\\r\\n  font-size: 12px;\\r\\n  margin: 0 0 4px;\\r\\n  color: #3498db;\\r\\n}\\r\\n\\r\\n.name span {\\r\\n  font-weight: normal;\\r\\n  color: #b3b3b3;\\r\\n}\\r\\n\\r\\n.message {\\r\\n  font-size: 12px;\\r\\n  margin: 0;\\r\\n  color: #2b2b2b;\\r\\n}\\r\\n\\r\\n.timestamp {\\r\\n  font-size: 11px;\\r\\n  position: absolute;\\r\\n  bottom: 8px;\\r\\n  right: 10px;\\r\\n  text-transform: uppercase;\\r\\n  color: #999;\\r\\n}\\r\\n\\r\\n.comment-arrow {\\r\\n  position: absolute;\\r\\n  width: 0;\\r\\n  bottom: 42px;\\r\\n  left: -16px;\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\n.comment-arrow::after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  border: 0 solid transparent;\\r\\n  border-top: 9px solid #f5f5f5;\\r\\n  border-radius: 0 20px 0;\\r\\n  width: 15px;\\r\\n  height: 30px;\\r\\n  transform: rotate(145deg);\\r\\n}\\r\\n\\r\\n.form-div {\\r\\n  margin: 2% 0;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.comment-form input {\\r\\n  color: black;\\r\\n  padding-left: 1.1rem;\\r\\n  height: 2rem;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.comment-form textarea {\\r\\n  color: black;\\r\\n  padding-left: 1.1rem;\\r\\n  padding-top: 1.1rem;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  resize: vertical;\\r\\n}\\r\\n\\r\\n.comment-form button {\\r\\n  align-self: center;\\r\\n  width: 70%;\\r\\n  padding: 6px 14px;\\r\\n  border-radius: 6px;\\r\\n  font-size: 1vw;\\r\\n  background: #6e6d70;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  color: #dfdedf;\\r\\n  border: 1px solid transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-form button:hover {\\r\\n  outline: 0;\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: relative;\\r\\n  bottom: 0;\\r\\n  padding: 1.2rem 3rem;\\r\\n  background-image: linear-gradient(to right, rgba(11, 226, 3, 0), rgb(144, 159, 190));\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n.footerText {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.homePageContainer {\\r\\n  padding: 2rem;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto auto;\\r\\n  grid-template-rows: auto auto auto auto auto;\\r\\n  gap: 5vw;\\r\\n}\\r\\n\\r\\n.mainItemContainer {\\r\\n  display: flex;\\r\\n  width: 20vw;\\r\\n  height: 55vh;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.itemContainer {\\r\\n  width: 15vw;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.itemImage {\\r\\n  width: 15vw;\\r\\n  border: 1px solid transparent;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.itemImage:hover {\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.itemNameContainer {\\r\\n  display: flex;\\r\\n  margin-top: 1.3vh;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.likesContainer {\\r\\n  margin-left: auto;\\r\\n\\r\\n  /* margin-right: 1vw; */\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 3vw;\\r\\n}\\r\\n\\r\\n.itemName {\\r\\n  font-size: 1.1vw;\\r\\n  width: 12vw;\\r\\n  padding-left: 0.5vw;\\r\\n  color: #092149;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  cursor: pointer;\\r\\n  border: 1px solid transparent;\\r\\n  border-radius: 100%;\\r\\n  color: #6e6d70;\\r\\n}\\r\\n\\r\\n.heart:hover {\\r\\n  color: rgb(190, 5, 5);\\r\\n}\\r\\n\\r\\n.likeCounter {\\r\\n  color: #092149;\\r\\n  font-size: 0.7vw;\\r\\n}\\r\\n\\r\\n.commentButtonContainer {\\r\\n  width: 15vw;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.commentsButton {\\r\\n  margin-top: 2vh;\\r\\n  width: 08vw;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 6px 14px;\\r\\n  border-radius: 6px;\\r\\n  font-size: 1vw;\\r\\n  background: #6e6d70;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  color: #dfdedf;\\r\\n  border: 1px solid transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.commentsButton:hover {\\r\\n  outline: 0;\\r\\n  border: 1px solid white;\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n  .popUp-top-section {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    gap: 7%;\\r\\n    padding: 0 3%;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-bottom: 1.3rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayData.js */ \"./src/modules/displayData.js\");\n\n\n\n(0,_modules_displayData_js__WEBPACK_IMPORTED_MODULE_1__.showMeals)();\n\n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewComment\": () => (/* binding */ addNewComment),\n/* harmony export */   \"createCommentBubble\": () => (/* binding */ createCommentBubble),\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"generateComments\": () => (/* binding */ generateComments)\n/* harmony export */ });\nconst commnentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"129VfKUYFFM5Qh3JuAJL\"}/comments`;\r\n\r\nconst fetchComments = async (id) => {\r\n  try {\r\n    const res = await fetch(`${commnentAPI}?item_id=${id}`);\r\n    const data = await res.json();\r\n\r\n    if (!res.ok) {\r\n      return [];\r\n    }\r\n    return data;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\n\r\n// eslint-disable-next-line\r\nconst createCommentBubble = ({ creation_date, comment, username }) => {\r\n// eslint-disable-next-line\r\n  let creationDate = creation_date\r\n  const commentDiv = document.createElement('div');\r\n  commentDiv.className = 'comment-bubble';\r\n\r\n  commentDiv.innerHTML = `\r\n      <div class=\"txt user-comment\">\r\n          <p class=\"name\">${username}</p>\r\n          <p class=\"message\">${comment}</p>\r\n          <span class=\"timestamp\">${creationDate}</span>\r\n      </div>\r\n      <div class=\"comment-arrow\"></div>\r\n    `;\r\n\r\n  return commentDiv;\r\n};\r\n\r\nconst generateComments = async (id) => {\r\n  const commentWrapper = document.createElement('div');\r\n  commentWrapper.className = 'comment-wrapper';\r\n  commentWrapper.innerHTML = '';\r\n\r\n  const comments = await fetchComments(id);\r\n  if (comments.length <= 0) {\r\n    const noCommentsSpan = document.createElement('span');\r\n    noCommentsSpan.className = 'no-comment-span';\r\n    noCommentsSpan.textContent = 'Be the first to comment ... ';\r\n    commentWrapper.append(noCommentsSpan);\r\n  } else {\r\n    comments.forEach((commment) => {\r\n      commentWrapper.append(createCommentBubble(commment));\r\n    });\r\n  }\r\n\r\n  return commentWrapper;\r\n};\r\n\r\nconst addNewComment = async (id, user, comment) => {\r\n  const newComment = {\r\n    item_id: id,\r\n    username: user,\r\n    comment,\r\n  };\r\n  try {\r\n    const res = await fetch(`${commnentAPI}`, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(newComment),\r\n    });\r\n    const data = await res.json();\r\n    return data;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commmentCounter = () => {\r\n  const comments = document.querySelectorAll('.user-comment');\r\n  return comments.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commmentCounter);\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayData.js":
/*!************************************!*\
  !*** ./src/modules/displayData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMeals\": () => (/* binding */ showMeals),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _popup_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-details.js */ \"./src/modules/popup-details.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n\r\n\r\n\r\n\r\n\r\nconst display = (meal) => {\r\n  const mealContainer = document.createElement('div');\r\n  mealContainer.className = 'mainItemContainer';\r\n  mealContainer.innerHTML = `\r\n    <div class=\"itemContainer\">\r\n        <a class=\"itemImageContainer\" href=\"\"><img class=\"itemImage\" src=\"${meal.strMealThumb}\" alt=\"meal picture\"></a>\r\n        <div id=\"hello\" class=\"itemNameContainer\">\r\n          <h2 class=\"itemName\">${meal.strMeal}</h2>\r\n            <div  class=\"likesContainer\">\r\n             <i class=\"fa-solid fa-heart heart like${meal.idMeal}\"></i>\r\n             <h4 class=\"likeCounter\">${meal.likes} likes</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"commentButtonContainer\">\r\n        <button id=\"${meal.idMeal}\" type=\"button\" class=\"commentsButton\">Comments</button>\r\n      </div>\r\n      </div>`;\r\n  return mealContainer;\r\n};\r\n\r\nconst displayData = async () => {\r\n  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';\r\n  const response = await fetch(baseUrl);\r\n  const data = await response.json();\r\n  return data.meals;\r\n};\r\n\r\nconst updateLikes = (newMealsArray) => {\r\n  const updatedMealsArray = [];\r\n  newMealsArray.forEach((meal) => {\r\n    const existing = updatedMealsArray.filter((item) => item.idMeal === meal.item_id);\r\n    if (existing.length) {\r\n      const existingIndex = updatedMealsArray.indexOf(existing[0]);\r\n      updatedMealsArray[existingIndex].likes = meal.likes;\r\n    } else {\r\n      updatedMealsArray.push(meal);\r\n    }\r\n  });\r\n  return updatedMealsArray;\r\n};\r\n\r\nconst showMeals = async () => {\r\n  const homePageContainer = document.querySelector('.homePageContainer');\r\n  homePageContainer.innerHTML = '';\r\n  const mealsArray = await displayData();\r\n  mealsArray.forEach((meal) => {\r\n    meal.likes = 0;\r\n  });\r\n  const likesArray = await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const newMealsArray = mealsArray.concat(likesArray);\r\n  const updatedMealsArray = updateLikes(newMealsArray);\r\n  updatedMealsArray.forEach((meal) => {\r\n    homePageContainer.append(display(meal));\r\n  });\r\n  (0,_popup_details_js__WEBPACK_IMPORTED_MODULE_0__.addPopUpEvent)();\r\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.likesEvent)();\r\n  (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n};\r\n\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/displayData.js?");

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchLikes = async () => {\n  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n  const response = await fetch(`${baseUrl}${\"129VfKUYFFM5Qh3JuAJL\"}/likes`);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = () => {\r\n  const countAll = document.querySelectorAll('.mainItemContainer').length;\r\n  const itemCounterContainer = document.querySelector('.itemCounterContainer');\r\n  itemCounterContainer.textContent = `Meals(${countAll})`;\r\n  return `Meals(${countAll})`;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"likesEvent\": () => (/* binding */ likesEvent),\n/* harmony export */   \"updateLikeValue\": () => (/* binding */ updateLikeValue)\n/* harmony export */ });\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/modules/fetchLikes.js\");\n\n\nconst likeValueUpdate = async (idValue) => {\n  const like = document.querySelector(`.like${idValue}`);\n  const getLike = await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const index = getLike.findIndex((x) => x.item_id === idValue);\n  const newLikeValue = getLike[index].likes;\n  like.nextElementSibling.innerHTML = `${newLikeValue} Likes`;\n};\n\nconst updateLikeValue = async (idValue) => {\n  const postData = {\n    item_id: idValue,\n  };\n  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n  await fetch(`${baseUrl}${\"129VfKUYFFM5Qh3JuAJL\"}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(postData),\n  });\n  likeValueUpdate(idValue);\n};\n\nconst likesEvent = () => {\n  const likesBtn = document.querySelectorAll('.heart');\n  likesBtn.forEach((heart) => heart.addEventListener('click', (e) => {\n    e.preventDefault();\n    const idValue = heart.parentElement.parentElement.nextElementSibling.firstElementChild.getAttribute('id');\n    updateLikeValue(idValue);\n  }));\n};\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/popup-details.js":
/*!**************************************!*\
  !*** ./src/modules/popup-details.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCommentEvent\": () => (/* binding */ addCommentEvent),\n/* harmony export */   \"addPopUpEvent\": () => (/* binding */ addPopUpEvent),\n/* harmony export */   \"creatPopUp\": () => (/* binding */ creatPopUp),\n/* harmony export */   \"displayPopUp\": () => (/* binding */ displayPopUp),\n/* harmony export */   \"fetchFoodDetails\": () => (/* binding */ fetchFoodDetails)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst fetchFoodDetails = async (id) => {\r\n  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\r\n\r\n  try {\r\n    const respose = await fetch(`${baseUrl}${id}`);\r\n    const data = await respose.json();\r\n\r\n    if (!respose.ok) {\r\n      return data;\r\n    }\r\n\r\n    return data.meals;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\n\r\nconst addCommentEvent = async () => {\r\n  const commentForm = document.getElementById('new-comment');\r\n  const addCommentBtn = document.querySelector('.add-comment-btn');\r\n  commentForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const user = commentForm.elements.name;\r\n    const { comment } = commentForm.elements;\r\n\r\n    await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.addNewComment)(addCommentBtn.id, user.value, comment.value);\r\n\r\n    const cmtSection = document.querySelector('.comments-section');\r\n\r\n    const commentWrapper = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.generateComments)(addCommentBtn.id);\r\n\r\n    cmtSection.innerHTML = '';\r\n    cmtSection.append(commentWrapper);\r\n\r\n    const commentNo = document.querySelector('.comment-count');\r\n\r\n    const commentCount = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    commentNo.textContent = `(${commentCount})`;\r\n\r\n    commentForm.reset();\r\n  });\r\n};\r\n\r\nconst closePopUp = () => {\r\n  const closeBtn = document.querySelector('.close-btn');\r\n  closeBtn.addEventListener('click', () => {\r\n    const PopUpDiv = document.querySelector('.pop-up');\r\n    PopUpDiv.style.display = 'none';\r\n  });\r\n};\r\n\r\nconst creatPopUp = ({\r\n  idMeal,\r\n  strMeal,\r\n  strMealThumb,\r\n  strCategory,\r\n  strSource,\r\n  strInstructions,\r\n  strIngredient1,\r\n  strIngredient2,\r\n  strIngredient3,\r\n  strIngredient4,\r\n  strIngredient5,\r\n  strIngredient6,\r\n  strIngredient7,\r\n  strIngredient8,\r\n  strMeasure1,\r\n  strMeasure2,\r\n  strMeasure3,\r\n  strMeasure4,\r\n  strMeasure5,\r\n  strMeasure6,\r\n  strMeasure7,\r\n  strMeasure8,\r\n}) => {\r\n  const newstrMealThumb = strMealThumb.replaceAll('\\\\', '');\r\n\r\n  let newstrInstructions;\r\n\r\n  if (strInstructions.length > 400) {\r\n    newstrInstructions = strInstructions.substring(0, 400);\r\n  } else {\r\n    newstrInstructions = strInstructions;\r\n  }\r\n\r\n  const PopUpContent = document.createElement('div');\r\n  PopUpContent.className = 'pop-up-content';\r\n  PopUpContent.innerHTML = `\r\n                <i class=\"fa-solid fa-circle-xmark close-btn\"></i>\r\n                <div class=\"popUp-top-section\">\r\n                    <div>\r\n                        <div class=\"popUp-image\">\r\n                            <img src=\"${newstrMealThumb}\" alt=\"${strMeal}\" class=\"popUp-item-image\">\r\n                        </div>\r\n                            <h3 class=\"food-name\"><span>Name:</span><span class=\"name-span\">${strMeal}</span> </h3>\r\n                            <h5 class=\"category\"><span>Category:</span><span class=\"name-span\">${strCategory}</span>  </h5>\r\n                    </div>\r\n                        <div class=\"ingridients-and-measurments\">\r\n                            <div class=\"ingridients\">\r\n                                <h5 class=\"popUp-item-sub-title\">Ingridients</h5>\r\n                                <ol class=\"ing-list\">\r\n                                    <li class=\"ing-item\">${strIngredient1}</li>\r\n                                    <li class=\"ing-item\">${strIngredient2}</li>\r\n                                    <li class=\"ing-item\">${strIngredient3}</li>\r\n                                    <li class=\"ing-item\">${strIngredient4}</li>\r\n                                    <li class=\"ing-item\">${strIngredient5}</li>\r\n                                    <li class=\"ing-item\">${strIngredient6}</li>\r\n                                    <li class=\"ing-item\">${strIngredient7}</li>\r\n                                    <li class=\"ing-item\">${strIngredient8}</li>\r\n                                </ol>\r\n                            </div>\r\n                            <div class=\"measurments\">\r\n                                <h5 class=\"popUp-item-sub-title\">Measurements</h5>\r\n                                <ul class=\"measure-list\">\r\n                                    <li class=\"measure-item\">${strMeasure1}</li>\r\n                                    <li class=\"measure-item\">${strMeasure2}</li>\r\n                                    <li class=\"measure-item\">${strMeasure3}</li>\r\n                                    <li class=\"measure-item\">${strMeasure4}</li>\r\n                                    <li class=\"measure-item\">${strMeasure5}</li>\r\n                                    <li class=\"measure-item\">${strMeasure6}</li>\r\n                                    <li class=\"measure-item\">${strMeasure7}</li>\r\n                                    <li class=\"measure-item\">${strMeasure8}</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n                    <div class=\"instructions\">\r\n                        <h5 class=\"popUp-item-sub-title\">How to Prepare</h5>\r\n                        <h3 class=\"instruction-text\">${newstrInstructions}.....</h3>\r\n                    </div>\r\n                    <div class=\"food-source\">\r\n                        <h5 class=\"source-text\">\r\n                           <span>Source:</span> <a href=\"${strSource}\" target=\"_blank\">${strSource}</a>\r\n                        </h5>\r\n                    </div>\r\n                    <h5 class=\"popUp-item-sub-title\">Comments <sapn class=\"comment-count\"></span></h5>\r\n                    <div class=\"comments-section\">\r\n                    \r\n                    </div>\r\n                    <div class=\"form-div\">\r\n\r\n                    <h5 class=\"popUp-item-sub-title\">Add Comment</h5>\r\n                    <form class=\"comment-form\" id=\"new-comment\">\r\n                        <input type=\"text\" name=\"\" id=\"name\" placeholder=\"Your Name\" required>\r\n                        <textarea name=\"\" id=\"comment\" cols=\"30\" rows=\"10\" placeholder=\"Your Insight\" required></textarea>\r\n                        <button type=\"submit\" class=\"add-comment-btn\" id=\"${idMeal}\">Comment</button>\r\n                    </form>\r\n                </div>\r\n    `;\r\n\r\n  return PopUpContent;\r\n};\r\n\r\nconst displayPopUp = async (id) => {\r\n  const PopUpDiv = document.querySelector('.pop-up');\r\n  PopUpDiv.innerHTML = '';\r\n\r\n  const foodDetails = await fetchFoodDetails(id);\r\n  PopUpDiv.append(creatPopUp(foodDetails[0]));\r\n\r\n  const cmtSection = document.querySelector('.comments-section');\r\n  const commentNo = document.querySelector('.comment-count');\r\n\r\n  const commentWrapper = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.generateComments)(id);\r\n\r\n  cmtSection.append(commentWrapper);\r\n\r\n  const commentCount = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  commentNo.textContent = `(${commentCount})`;\r\n\r\n  console.clear();\r\n\r\n  PopUpDiv.style.display = 'block';\r\n  addCommentEvent();\r\n  closePopUp();\r\n};\r\n\r\nconst addPopUpEvent = () => {\r\n  const commentBtn = document.querySelectorAll('.commentsButton');\r\n  commentBtn.forEach((buttton) => buttton.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    displayPopUp(buttton.id);\r\n  }));\r\n};\r\n\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/popup-details.js?");

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