/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Black+Ops+One&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

:root {
	--black-opq: rgba(50, 50, 66, 0.8);
	--green-opq: rgba(53, 231, 46, 0.8);
	--dark-gray: rgb(134, 134, 134);
	--dark-green-opq: rgba(6, 90, 2, 0.9);
	--red-opq: rgba(255, 38, 38, 0.8);
	--dark-font: #202025;
	--dark-blue: #1b1b29;
	--white-font: #fcdec3;
	--blue-clr: rgb(88, 159, 241);
	--light-bg: #e1fae1;
	--light-gray: #b3b3b4;
	--red-clr: rgb(202, 16, 16);
	--font-bOps: "Black Ops One", cursive;
	--font-normal: "Amatic SC", cursive;
	--font-su: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

*::selection {
	background-color: var(--light-gray);
}

body {
	height: 100vh;
	position: relative;
}

button {
	background-color: var(--dark-blue);
	color: var(--white-font);
	border-radius: 5px;
	padding: 0.5rem;
	width: 150px;
	cursor: pointer;
	align-self: center;
	font-family: var(--font-normal);
	font-size: 2rem;
	font-weight: 700;
	transition: background-color 150ms ease-in;
	border: none;
}

button:hover,
button:focus {
	background-color: #323242;
}

/***********************/
/* Start Menu Styling */
/**********************/

.overlay {
	position: fixed;
	overflow: scroll;
	scroll-behavior: smooth;
	height: 100vh;
	width: 100vw;
	background-color: var(--black-opq);
	color: var(--dark-font);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	text-align: center;
	transition: opacity 250ms ease-out;
}

.modal {
	width: 570px;
	padding: 2rem;
	background-color: var(--light-bg);
	border-radius: 5px;
}

.modal-header-container {
	font-family: var(--font-normal);
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 0.2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.modal-header-container h1 {
	text-decoration: underline;
}

.modal-header-container span {
	color: var(--red-clr);
}

.modal-btn-container button:focus {
	outline: 2px solid var(--dark-blue);
}

.modal-btn-container .random-btn {
	background-color: var(--dark-blue);
}

.modal-btn-container .random-btn:hover,
.modal-btn-container .random-btn:focus {
	background-color: #323242;
}

.modal-btn-container .reset-btn {
	background-color: var(--red-clr);
}

.modal-btn-container .reset-btn:hover,
.modal-btn-container .reset-btn:focus {
	background-color: rgb(230, 21, 21);
}

.place-ship-board {
	margin-top: 1.5rem;
	display: grid;
	grid-template-columns: repeat(10, minmax(50px, 1fr));
	border-top: 2px solid var(--dark-blue);
	border-left: 2px solid var(--dark-blue);
}

.play-btn {
	margin-top: 1rem;
	background-color: var(--dark-green-opq);
}

.play-btn:hover,
.play-btn:focus {
	background-color: var(--green-opq);
}

.square {
	height: 50px;
	width: 50px;
	font-size: 2rem;
	font-family: var(--font-su);
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid var(--dark-blue);
	border-right: 2px solid var(--dark-blue);
	transition: background-color 150ms ease;
	cursor: crosshair;
}

.empty-cell {
	background-color: var(--white-font);
}

.occupied-cell {
	background-color: var(--dark-gray);
}

.active-cell {
	background-color: var(--green-opq);
}

.invalid-cell {
	background-color: var(--red-opq);
}

.missed {
	background-color: var(--blue-clr);
}

.sunked {
	background-color: rgb(153, 16, 16);
}

.hide-modal {
	opacity: 0;
	pointer-events: none;
}

.disable-pointer-events {
	pointer-events: none;
}

.hover-bg:hover {
	background-color: var(--light-gray);
}

/***********************/
/* GameBoards Styling */
/**********************/

.game-container {
	height: 100vh;
	overflow-y: scroll;
	background-color: var(--light-bg);
	color: var(--dark-blue);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

.game-header-container .game-title {
	padding: 1rem;
	font-family: var(--font-bOps);
	font-size: 4.5rem;
}

.game-board-container {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}

.display-turn {
	font-family: var(--font-bOps);
	font-size: 2rem;
}

@media (max-width: 1080px) {
	.game-container {
		height: auto;
	}
	.game-board-container {
		flex-direction: column;
	}
}

.player-board,
.enemy-board {
	margin-top: 1.5rem;
	display: grid;
	grid-template-columns: repeat(10, minmax(50px, 1fr));
	border-top: 2px solid var(--dark-blue);
	border-left: 2px solid var(--dark-blue);
}

/***************************/
/* End Game Modal Styling */
/**************************/

.end-game-modal-overlay {
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: var(--font-normal);
	background-color: var(--black-opq);
	transition: opacity 200ms ease-in;
}

.end-game-modal {
	height: 300px;
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-direction: column;
	background-color: var(--light-bg);
	border-radius: 5px;
}

.end-game-modal h1 {
	font-size: 3.5rem;
	font-weight: bold;
}

.end-game-modal h2 {
	font-size: 2.3rem;
}

.end-game-modal span {
	color: var(--red-clr);
}

.end-game-modal button {
	color: var(--white-font);
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Black+Ops+One&display=swap\");\n*,\n*::before,\n*::after {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--black-opq: rgba(50, 50, 66, 0.8);\n\t--green-opq: rgba(53, 231, 46, 0.8);\n\t--dark-gray: rgb(134, 134, 134);\n\t--dark-green-opq: rgba(6, 90, 2, 0.9);\n\t--red-opq: rgba(255, 38, 38, 0.8);\n\t--dark-font: #202025;\n\t--dark-blue: #1b1b29;\n\t--white-font: #fcdec3;\n\t--blue-clr: rgb(88, 159, 241);\n\t--light-bg: #e1fae1;\n\t--light-gray: #b3b3b4;\n\t--red-clr: rgb(202, 16, 16);\n\t--font-bOps: \"Black Ops One\", cursive;\n\t--font-normal: \"Amatic SC\", cursive;\n\t--font-su: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n\t\tOxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n*::selection {\n\tbackground-color: var(--light-gray);\n}\n\nbody {\n\theight: 100vh;\n\tposition: relative;\n}\n\nbutton {\n\tbackground-color: var(--dark-blue);\n\tcolor: var(--white-font);\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\twidth: 150px;\n\tcursor: pointer;\n\talign-self: center;\n\tfont-family: var(--font-normal);\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\ttransition: background-color 150ms ease-in;\n\tborder: none;\n}\n\nbutton:hover,\nbutton:focus {\n\tbackground-color: #323242;\n}\n\n/***********************/\n/* Start Menu Styling */\n/**********************/\n\n.overlay {\n\tposition: fixed;\n\toverflow: scroll;\n\tscroll-behavior: smooth;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: var(--black-opq);\n\tcolor: var(--dark-font);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\ttext-align: center;\n\ttransition: opacity 250ms ease-out;\n}\n\n.modal {\n\twidth: 570px;\n\tpadding: 2rem;\n\tbackground-color: var(--light-bg);\n\tborder-radius: 5px;\n}\n\n.modal-header-container {\n\tfont-family: var(--font-normal);\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tletter-spacing: 0.2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.modal-header-container h1 {\n\ttext-decoration: underline;\n}\n\n.modal-header-container span {\n\tcolor: var(--red-clr);\n}\n\n.modal-btn-container button:focus {\n\toutline: 2px solid var(--dark-blue);\n}\n\n.modal-btn-container .random-btn {\n\tbackground-color: var(--dark-blue);\n}\n\n.modal-btn-container .random-btn:hover,\n.modal-btn-container .random-btn:focus {\n\tbackground-color: #323242;\n}\n\n.modal-btn-container .reset-btn {\n\tbackground-color: var(--red-clr);\n}\n\n.modal-btn-container .reset-btn:hover,\n.modal-btn-container .reset-btn:focus {\n\tbackground-color: rgb(230, 21, 21);\n}\n\n.place-ship-board {\n\tmargin-top: 1.5rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, minmax(50px, 1fr));\n\tborder-top: 2px solid var(--dark-blue);\n\tborder-left: 2px solid var(--dark-blue);\n}\n\n.play-btn {\n\tmargin-top: 1rem;\n\tbackground-color: var(--dark-green-opq);\n}\n\n.play-btn:hover,\n.play-btn:focus {\n\tbackground-color: var(--green-opq);\n}\n\n.square {\n\theight: 50px;\n\twidth: 50px;\n\tfont-size: 2rem;\n\tfont-family: var(--font-su);\n\tfont-weight: bold;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-bottom: 2px solid var(--dark-blue);\n\tborder-right: 2px solid var(--dark-blue);\n\ttransition: background-color 150ms ease;\n\tcursor: crosshair;\n}\n\n.empty-cell {\n\tbackground-color: var(--white-font);\n}\n\n.occupied-cell {\n\tbackground-color: var(--dark-gray);\n}\n\n.active-cell {\n\tbackground-color: var(--green-opq);\n}\n\n.invalid-cell {\n\tbackground-color: var(--red-opq);\n}\n\n.missed {\n\tbackground-color: var(--blue-clr);\n}\n\n.sunked {\n\tbackground-color: rgb(153, 16, 16);\n}\n\n.hide-modal {\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.disable-pointer-events {\n\tpointer-events: none;\n}\n\n.hover-bg:hover {\n\tbackground-color: var(--light-gray);\n}\n\n/***********************/\n/* GameBoards Styling */\n/**********************/\n\n.game-container {\n\theight: 100vh;\n\toverflow-y: scroll;\n\tbackground-color: var(--light-bg);\n\tcolor: var(--dark-blue);\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.game-header-container .game-title {\n\tpadding: 1rem;\n\tfont-family: var(--font-bOps);\n\tfont-size: 4.5rem;\n}\n\n.game-board-container {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.display-turn {\n\tfont-family: var(--font-bOps);\n\tfont-size: 2rem;\n}\n\n@media (max-width: 1080px) {\n\t.game-container {\n\t\theight: auto;\n\t}\n\t.game-board-container {\n\t\tflex-direction: column;\n\t}\n}\n\n.player-board,\n.enemy-board {\n\tmargin-top: 1.5rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, minmax(50px, 1fr));\n\tborder-top: 2px solid var(--dark-blue);\n\tborder-left: 2px solid var(--dark-blue);\n}\n\n/***************************/\n/* End Game Modal Styling */\n/**************************/\n\n.end-game-modal-overlay {\n\tposition: absolute;\n\tinset: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: var(--font-normal);\n\tbackground-color: var(--black-opq);\n\ttransition: opacity 200ms ease-in;\n}\n\n.end-game-modal {\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\tflex-direction: column;\n\tbackground-color: var(--light-bg);\n\tborder-radius: 5px;\n}\n\n.end-game-modal h1 {\n\tfont-size: 3.5rem;\n\tfont-weight: bold;\n}\n\n.end-game-modal h2 {\n\tfont-size: 2.3rem;\n}\n\n.end-game-modal span {\n\tcolor: var(--red-clr);\n}\n\n.end-game-modal button {\n\tcolor: var(--white-font);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Game/Board.js":
/*!***************************!*\
  !*** ./src/Game/Board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoards: () => (/* binding */ createBoards)
/* harmony export */ });
/* harmony import */ var _Main_Classes_GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Main/Classes/GameController */ "./src/Main/Classes/GameController.js");


function createBoards() {
    const boardSize = 10
    const container = document.createElement('div')
    container.className = 'game-container'
    const header = document.createElement('div')
    header.className = 'game-header-container'
    const gameTitle = document.createElement('h1')
    gameTitle.className = 'game-title'
    gameTitle.textContent = 'BATTLESHIPS'
    const displayTurn = document.createElement('h2')
    displayTurn.className = 'display-turn'
    displayTurn.id = 'display-turn'
    displayTurn.textContent = 'It\'s Your Turn To Attack!'
    const gameBoards = document.createElement('div')
    gameBoards.className = 'game-board-container'
    const playerBoard = document.createElement('div')
    playerBoard.className = 'player-board'
    playerBoard.id =  'player-board'
    const enemyBoard = document.createElement('div')
    enemyBoard.className = 'enemy-board'
    enemyBoard.id = 'enemy-board'

    
    for (let i = 0; i < boardSize * 10; i++) {
        const playerCells = createCell(i % 10, Math.floor(i / 10),  playerBoard)
        const enemyCells = createCell(i % 10, Math.floor(i / 10), enemyBoard)

        playerBoard.appendChild(playerCells)
        enemyBoard.appendChild(enemyCells)
    }

    header.appendChild(gameTitle)
    header.appendChild(displayTurn)
    container.appendChild(header)
    gameBoards.appendChild(playerBoard)
    gameBoards.appendChild(enemyBoard)
    container.appendChild(gameBoards)
    return container
}

function createCell(x, y, targetCell) {
    const cell = document.createElement('div')
    cell.className = 'square'
    cell.classList.add('hover-bg')
    cell.setAttribute("data-x", `${x}`);
    cell.setAttribute("data-y", `${y}`);

    cell.addEventListener('click', () => {
        _Main_Classes_GameController__WEBPACK_IMPORTED_MODULE_0__["default"].attack(x, y, targetCell)
    })

    return cell
}



/***/ }),

/***/ "./src/Game/EndGameModal.js":
/*!**********************************!*\
  !*** ./src/Game/EndGameModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   overlay: () => (/* binding */ overlay),
/* harmony export */   winnerText: () => (/* binding */ winnerText)
/* harmony export */ });
/* harmony import */ var _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Main/Classes/GameController.js */ "./src/Main/Classes/GameController.js");


	const overlay = document.createElement("div");
	overlay.className = "end-game-modal-overlay";
	overlay.classList.add('hide-modal')
	const modal = document.createElement("div");
	modal.className = "end-game-modal";
	const gameOverText = document.createElement("h1");
	gameOverText.textContent = "Game Over";
	const winnerText = document.createElement("h2");
	winnerText.innerHTML = `
    Game Winner: 
    <span>Player!</span>
    `;
	const restartButton = document.createElement("button");
	restartButton.className = "restart-btn";
    restartButton.textContent = 'Play Again?'


    modal.append(gameOverText)
    modal.append(winnerText)
	modal.append(restartButton)
    overlay.append(modal)

	restartButton.addEventListener('click', () => {
		_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].restartGame()
	})

	



/***/ }),

/***/ "./src/Game/StartMenu.js":
/*!*******************************!*\
  !*** ./src/Game/StartMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startMenu: () => (/* binding */ startMenu)
/* harmony export */ });
/* harmony import */ var _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Main/Classes/GameController.js */ "./src/Main/Classes/GameController.js");
/* harmony import */ var _Main_Classes_BoardController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Main/Classes/BoardController.js */ "./src/Main/Classes/BoardController.js");



function startMenu() {
	const root = document.querySelector("#root");
	const startGameModal = document.createElement("div");
	startGameModal.className = "overlay";
	startGameModal.id = "overlay";

	startGameModal.innerHTML += `
        <div class="modal">
            <div class="modal-header-container">
                <h1>Play Battleship!</h1>
                <h2 id="modal-header">Place Your <span>Carrier!</span></h2>
                <div class="modal-btn-container">
                    <button class="random-btn" id="random-btn">Random</button>
                    <button class="change-orientation-btn" id="change-orientation-btn">Rotate</button>
                    <button class="reset-btn" id="reset-btn">Reset</button>
                </div>
            </div>
            <div class="place-ship-board" id="place-ship-board">
            </div>
			<button class="play-btn" id="play-btn">Play!</button>
        </div>
`;

	const introBoard = startGameModal.querySelector("#place-ship-board");
	const changeOrientationButton = startGameModal.querySelector(
		"#change-orientation-btn"
	);
	const resetButton = startGameModal.querySelector("#reset-btn");
	const randomShipsButton = startGameModal.querySelector("#random-btn");
	const playGameButton = startGameModal.querySelector("#play-btn");

	changeOrientationButton.addEventListener("click", () => {
		_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].isVertical = !_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].isVertical;
	});

	resetButton.addEventListener("click", resetBoard);

	randomShipsButton.addEventListener("click", () => {
		placeRandomShips(introBoard);
	});

	playGameButton.addEventListener("click", startGame);

	for (let i = 0; i < 10 * 10; i++) {
		const square = document.createElement("div");
		square.className = "square";
		square.setAttribute("data-x", `${i % 10}`);
		square.setAttribute("data-y", `${Math.floor(i / 10)}`);
		introBoard.insertAdjacentElement("beforeend", square);

		square.addEventListener("mouseover", function () {
			if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex > _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships.length - 1) return;
			activeSquare.call(this, introBoard, function (targetCell) {
				if (targetCell.classList.contains("occupied-cell")) {
					targetCell.classList.add("invalid-cell");
				} else {
					targetCell.classList.add("active-cell");
				}
			});
		});
		square.addEventListener("mouseout", function () {
			if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex > _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships.length - 1) return;
			activeSquare.call(this, introBoard, function (targetCell) {
				if (targetCell.classList.contains("active-cell")) {
					targetCell.classList.remove("active-cell");
				}
				if (targetCell.classList.contains("invalid-cell")) {
					targetCell.classList.remove("invalid-cell");
				}
			});
		});
		square.addEventListener("click", function () {
			if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex > _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships.length - 1) return;
			setUpShips.call(this, introBoard);
		});
	}

	return root.appendChild(startGameModal);
}

function changeShipName() {
	const shipName = document.querySelector("#modal-header");

	if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex < _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships.length) {
		shipName.innerHTML = `Place Your <span>${
			_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships[_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex].name
		}!</span>`;
	} else {
		shipName.textContent = `Start the Game!`;
	}
}

function activeSquare(introBoard, cellCallback) {
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].isVertical) {
		for (let i = 0; i < _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships[_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex].length; i++) {
			if (y + i < 10) {
				const index = y * 10 + x;
				const targetCell = introBoard.children[index + i * 10];
				cellCallback(targetCell);
			}
		}
	} else {
		for (let i = 0; i < _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships[_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex].length; i++) {
			if (x + i < 10) {
				const targetCell = introBoard.children[y * 10 + x + i];
				cellCallback(targetCell);
			}
		}
	}
}

function setUpShips(introBoard) {
	const x = parseInt(this.dataset.x);
	const y = parseInt(this.dataset.y);

	if (
		_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.playerBoard.placeShip(
			_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships[_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex],
			y,
			x,
			_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].isVertical
		)
	) {
		if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].isVertical) {
			for (let i = 0; i < _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships[_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex].length; i++) {
				if (y + i < 10) {
					const index = y * 10 + x;
					const targetCell = introBoard.children[index + i * 10];
					targetCell.classList.add("occupied-cell");
				}
			}
		} else {
			for (let i = 0; i < _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships[_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex].length; i++) {
				if (x + i < 10) {
					const targetCell = introBoard.children[y * 10 + x + i];
					targetCell.classList.add("occupied-cell");
				}
			}
		}
		activeSquare.call(this, introBoard, function (targetCell) {
			targetCell.classList.remove("active-cell");
		});
		_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex += 1;
		changeShipName();
	}
}

function resetBoard() {
	const squares = document.querySelectorAll("#place-ship-board div");
	_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.playerBoard.init();
	_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex = 0;
	changeShipName();

	squares.forEach((square) => {
		square.classList.remove("occupied-cell");
	});
	// console.table(squares)
	// console.table(Game.player.playerBoard.board)
}

function placeRandomShips(introBoard) {
	const playerBoard = _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.playerBoard.board;
	resetBoard();
	_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.placeRandomShips();
	_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex = _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships.length;
	changeShipName();

	for (let y = 0; y < playerBoard.length; y++) {
		for (let x = 0; x < playerBoard.length; x++) {
			if (playerBoard[y][x]) {
				const targetCell = introBoard.querySelector(
					`[data-x='${x}'][data-y='${y}']`
				);
				targetCell.classList.add("occupied-cell");
			}
		}
	}
	// console.table(Game.player.playerBoard.board);
}

function startGame() {
	const modal = document.querySelector("#overlay");
	const turnDisplay = document.querySelector('#display-turn')

	if (_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipIndex < _Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.ships.length) return;

	modal.classList.add("hide-modal");
	
	const playerBoard = document.querySelector('#player-board')
	const enemyBoard = document.querySelector('#enemy-board')
	
	const playerOne = new _Main_Classes_BoardController_js__WEBPACK_IMPORTED_MODULE_1__["default"](_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].user, playerBoard)
	const playerTwo = new _Main_Classes_BoardController_js__WEBPACK_IMPORTED_MODULE_1__["default"](_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].ai, enemyBoard)

	_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].setUpGame(
		playerOne,
		playerTwo,
		turnDisplay
	)

	// console.table(playerOne.player.playerBoard.board);
	// console.table(playerTwo.player.playerBoard.board)
}




/***/ }),

/***/ "./src/Main/Classes/BoardController.js":
/*!*********************************************!*\
  !*** ./src/Main/Classes/BoardController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardController)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Main/Classes/Player.js");


class BoardController {
    /**
     * 
     * @param {Player} player
     * @param {Element} boardView 
     */

    constructor(player, boardView) {
        this.player = player
        this.boardView = boardView
    }

    showBoardShips() {
        const currentBoard = this.player.playerBoard.board

        for (let y = 0; y < currentBoard.length; y++) {
            for (let x = 0; x < currentBoard.length; x++) {
                if (currentBoard[y][x]) {
                    const targetCell = this.boardView.querySelector(
                        `[data-x='${x}'][data-y='${y}']`
                    );
                    targetCell.classList.add("occupied-cell");
                }
            }
        }
    }

    enableBoard() {
        this.boardView.classList.remove('disable-pointer-events')
    }

    disableBoard() {
        this.boardView.classList.add('disable-pointer-events')
    }
}

/***/ }),

/***/ "./src/Main/Classes/GameController.js":
/*!********************************************!*\
  !*** ./src/Main/Classes/GameController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _BoardController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardController */ "./src/Main/Classes/BoardController.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Main/Classes/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ "./src/Main/Classes/Ship.js");
/* harmony import */ var _Game_EndGameModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Game/EndGameModal */ "./src/Game/EndGameModal.js");





class Game {
	static user = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]("Player", [
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](5, "Carrier"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](4, "Battleship"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](3, "Destroyer"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](3, "Submarine"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](2, "Patrol Boat"),
	]);

	static ai = new _Player__WEBPACK_IMPORTED_MODULE_1__.AI("AI", [
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](5, "Carrier"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](4, "Battleship"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](3, "Destroyer"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](3, "Submarine"),
		new _Ship__WEBPACK_IMPORTED_MODULE_2__["default"](2, "Patrol Boat"),
	]);

	static shipIndex = 0;
	static isVertical = true;
	static isGameOver = false;
	/**@type {BoardController} */
	static controller1 ;
	 /**@type {BoardController} */
	static controller2;
	/**@type {BoardController} */
	static current;
	static turnDisplay;

	static setUpGame(controller1, controller2, turnDisplay) {
		this.controller1 = controller1;
		this.controller2 = controller2;
		this.current = controller1;
		this.turnDisplay = turnDisplay

		controller1.showBoardShips();
		controller1.disableBoard();
	}

	static changeTurn() {
		const other = this.current;
		const current =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		
		if (current.player.name === "AI") {
			other.disableBoard();
		} else {
			other.enableBoard()
		}

		this.current = current;
		current.disableBoard();

		if (current.player.name === "AI") {
			this.turnDisplay.textContent = 'It\'s the enemy\'s turn!'
			setTimeout(() => {
				this.handleAIAttack()
			}, 500);
		} else {
			this.turnDisplay.textContent = 'It\'s your turn!'
		}
			
	}

	static handleAIAttack() {
		const current = this.current;
		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetBoard = target.player.playerBoard
		const aiAttackResult = /** @type { AI }*/ (current.player).smartRandomAttack(targetBoard);
		const targetX = aiAttackResult.x
		const targetY = aiAttackResult.y
		this.attack(targetY, targetX, target.boardView, aiAttackResult.result)		

		// console.log(aiAttackResult.result)
		// console.table(target.player.playerBoard.board)
		
		if (
			aiAttackResult.result === "Hit" ||
			aiAttackResult.result === "Already Attacked" ||
			aiAttackResult.result === "Sunked"
		) {
			this.handleAIAttack()
		}
	}

	static attack(x, y, targetBoardView, result) {
		if (this.isGameOver) return;

		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetCell = targetBoardView.querySelector(
			`[data-x="${x}"][data-y="${y}"]`
		)
		const targetBoard = target.player.playerBoard
		let attackResult;
		
		if (result) {
			attackResult = result
		} else {
			attackResult = targetBoard.receiveAttack(y, x)
		}

		if (attackResult === "Already Attacked") return;

		if (attackResult === "Missed") {
			targetCell.classList.add("missed");
			targetCell.textContent = "·";
			this.changeTurn();
		} else {
			targetCell.classList.add("invalid-cell");
			targetCell.textContent = "x";
		}

		if (target.player.checkAllShips()) {
			this.gameIsOver()
		}

		targetCell.classList.add('disable-pointer-events')	
	}

	static gameIsOver() {
		this.isGameOver = true;
		_Game_EndGameModal__WEBPACK_IMPORTED_MODULE_3__.overlay.classList.remove('hide-modal')
		_Game_EndGameModal__WEBPACK_IMPORTED_MODULE_3__.winnerText.innerHTML =`
		Game Winner: 
		<span>${this.current.player.name}</span>
		`;
	}

	static restartGame() {
		this.isGameOver = true
		_Game_EndGameModal__WEBPACK_IMPORTED_MODULE_3__.overlay.classList.add('hide-modal')
		window.location.reload()
	}
}


/***/ }),

/***/ "./src/Main/Classes/Gameboard.js":
/*!***************************************!*\
  !*** ./src/Main/Classes/Gameboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
const SIZE = 10;

class Gameboard {
	constructor() {
		this.board = [];
		this.init();
	}

	init() {
		for (let i = 0; i < SIZE; i++) {
			this.board[i] = [];
			for (let j = 0; j < SIZE; j++) {
				this.board[i][j] = null;
			}
		}
	}

	placeShip(ship, row, column, isVertical) {
		if (!this.isValidPlacement(ship, row, column, isVertical)) {
			return false;
		}

		if (isVertical) {
			for (let i = 0; i < ship.length; i++) {
				this.board[row + i][column] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[row][column + i] = ship;
			}
		}
		return true;
	}

	isValidPlacement(ship, row, column, isVertical) {
		// if ship is out of bounds
		if (row >= SIZE || column >= SIZE || row < 0 || column < 0) {
			return false;
		}

		// if ship does not fit the gameboard
		if (isVertical) {
			if (row + ship.length > SIZE) {
				return false;
			}
			// if a ship is already in place
			for (let i = 0; i < ship.length; i++) {
				if (this.board[row + i][column]) {
					return false;
				}
			}
		} else {
			if (column + ship.length > SIZE) {
				return false;
			}
			for (let i = 0; i < ship.length; i++) {
				if (this.board[row][column + i]) {
					return false;
				}
			}
		}

		return true;
	}

	receiveAttack(row, column) {
		if (this.board[row][column] === "X") return "Already Attacked";

		if (!this.board[row][column]) {
			this.board[row][column] = "X";
			return 'Missed'
		}

		const ship = this.board[row][column];
		this.board[row][column] = "X";
		return ship.hit();
	}

}


/***/ }),

/***/ "./src/Main/Classes/Player.js":
/*!************************************!*\
  !*** ./src/Main/Classes/Player.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ AI),
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ "./src/Main/Classes/Gameboard.js");


class Player {
	constructor(name, ships = []) {
		this.name = name;
		this.playerBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
		this.ships = ships;
	}

	attack(row, column, enemyBoard) {
		return enemyBoard.receiveAttack(row, column);
	}

	placeRandomShips() {
		for (let i = 0; i < this.ships.length; ) {
			const randomRow = Math.floor(Math.random() * 10);
			const randomColumn = Math.floor(Math.random() * 10);
			const randomOrientation = Math.random() < 0.5;
			const ship = this.ships[i];

			if (
				this.playerBoard.placeShip(
					ship,
					randomRow,
					randomColumn,
					randomOrientation
				)
			) {
				i += 1;
			}
		}
	}

	checkAllShips() {
		return this.ships.every((ship) => ship.isSunk());
	}

	randomAttack(enemyBoard) {
		const randomRow = Math.floor(Math.random() * 10);
		const randomColumn = Math.floor(Math.random() * 10);

		const attacked = enemyBoard.receiveAttack(randomRow, randomColumn);

		if (attacked === "Already Attacked") {
			return this.randomAttack(enemyBoard);
		} else {
			return { x: randomRow, y: randomColumn, result: attacked };
		}
	}
}

class AI extends Player {
	constructor(name, ships = []) {
		super(name, ships);
		this.placeRandomShips();
		this.lasHit = null;
	}

	smartRandomAttack(enemyBoard) {
		if (!this.lasHit) return this.randomAttack(enemyBoard);

		const x = this.lasHit[0];
		const y = this.lasHit[1];

		const validAdjacentCells = this.getAdjacentCell(x, y).filter(
			([adjacentX, adjacentY]) => {
				return (
					adjacentX >= 0 &&
					adjacentY >= 0 &&
					adjacentX < this.playerBoard.board.length &&
					adjacentY < this.playerBoard.board.length &&
					enemyBoard.board[adjacentX][adjacentY] !== "X"
				);
			}
		);

		if (validAdjacentCells.length === 0) {
			return this.randomAttack(enemyBoard);
		} else {
			// Choose a random valid adjacent cell and attack it
			const randomIndex = Math.floor(Math.random() * validAdjacentCells.length);
			const [randomAdjacentX, randomAdjacentY] =
				validAdjacentCells[randomIndex];
			const attacked = enemyBoard.receiveAttack(
				randomAdjacentX,
				randomAdjacentY
			);

			if (attacked === "Already Attacked") {
				return this.smartRandomAttack(enemyBoard);
			} else {
				this.lastHit = [randomAdjacentX, randomAdjacentY];
				return {
					x: randomAdjacentX,
					y: randomAdjacentY,
					result: attacked,
				};
			}
		}
	}

	getAdjacentCell(x, y) {
		return [
			[x, y - 1],
			[x, y + 1],
			[x - 1, y],
			[x + 1, y],
		];
	}
}


/***/ }),

/***/ "./src/Main/Classes/Ship.js":
/*!**********************************!*\
  !*** ./src/Main/Classes/Ship.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
	constructor(length,name = 'Ship') {
		this.length = length;
		this.hits = 0;
        this.name = name
	}

    hit(){
        this.hits += 1
        return this.isSunk() ? 'Sunked' : 'Hit'
    }

    isSunk() {
        return this.hits === this.length
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_Board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game/Board.js */ "./src/Game/Board.js");
/* harmony import */ var _Game_StartMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game/StartMenu.js */ "./src/Game/StartMenu.js");
/* harmony import */ var _Game_EndGameModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/EndGameModal.js */ "./src/Game/EndGameModal.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");





const root = document.getElementById("root");

window.onload = () => {
	(0,_Game_StartMenu_js__WEBPACK_IMPORTED_MODULE_1__.startMenu)();
	root.appendChild((0,_Game_Board_js__WEBPACK_IMPORTED_MODULE_0__.createBoards)());
	root.appendChild(_Game_EndGameModal_js__WEBPACK_IMPORTED_MODULE_2__.overlay);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCx1Q0FBdUM7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVks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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUNDO0FBQ0M7QUFDNUI7O0FBRXJCOztBQUVBO0FBQ0EsQ0FBQyw2REFBUztBQUNWLGtCQUFrQiw0REFBWTtBQUM5QixrQkFBa0IsMERBQU87QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWUvRW5kR2FtZU1vZGFsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lL1N0YXJ0TWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvTWFpbi9DbGFzc2VzL0JvYXJkQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvTWFpbi9DbGFzc2VzL0dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9NYWluL0NsYXNzZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9NYWluL0NsYXNzZXMvUGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9NYWluL0NsYXNzZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0M6d2dodEA0MDA7NzAwJmZhbWlseT1CbGFjaytPcHMrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG5cdC0tYmxhY2stb3BxOiByZ2JhKDUwLCA1MCwgNjYsIDAuOCk7XG5cdC0tZ3JlZW4tb3BxOiByZ2JhKDUzLCAyMzEsIDQ2LCAwLjgpO1xuXHQtLWRhcmstZ3JheTogcmdiKDEzNCwgMTM0LCAxMzQpO1xuXHQtLWRhcmstZ3JlZW4tb3BxOiByZ2JhKDYsIDkwLCAyLCAwLjkpO1xuXHQtLXJlZC1vcHE6IHJnYmEoMjU1LCAzOCwgMzgsIDAuOCk7XG5cdC0tZGFyay1mb250OiAjMjAyMDI1O1xuXHQtLWRhcmstYmx1ZTogIzFiMWIyOTtcblx0LS13aGl0ZS1mb250OiAjZmNkZWMzO1xuXHQtLWJsdWUtY2xyOiByZ2IoODgsIDE1OSwgMjQxKTtcblx0LS1saWdodC1iZzogI2UxZmFlMTtcblx0LS1saWdodC1ncmF5OiAjYjNiM2I0O1xuXHQtLXJlZC1jbHI6IHJnYigyMDIsIDE2LCAxNik7XG5cdC0tZm9udC1iT3BzOiBcIkJsYWNrIE9wcyBPbmVcIiwgY3Vyc2l2ZTtcblx0LS1mb250LW5vcm1hbDogXCJBbWF0aWMgU0NcIiwgY3Vyc2l2ZTtcblx0LS1mb250LXN1OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXG5cdFx0T3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4qOjpzZWxlY3Rpb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcblx0Y29sb3I6IHZhcigtLXdoaXRlLWZvbnQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdHBhZGRpbmc6IDAuNXJlbTtcblx0d2lkdGg6IDE1MHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm9ybWFsKTtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UtaW47XG5cdGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyLFxuYnV0dG9uOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyMzI0Mjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqL1xuLyogU3RhcnQgTWVudSBTdHlsaW5nICovXG4vKioqKioqKioqKioqKioqKioqKioqKi9cblxuLm92ZXJsYXkge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHR3aWR0aDogMTAwdnc7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLW9wcSk7XG5cdGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1vdXQ7XG59XG5cbi5tb2RhbCB7XG5cdHdpZHRoOiA1NzBweDtcblx0cGFkZGluZzogMnJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm9ybWFsKTtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIGgxIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHNwYW4ge1xuXHRjb2xvcjogdmFyKC0tcmVkLWNscik7XG59XG5cbi5tb2RhbC1idG4tY29udGFpbmVyIGJ1dHRvbjpmb2N1cyB7XG5cdG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xufVxuXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmFuZG9tLWJ0biB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5tb2RhbC1idG4tY29udGFpbmVyIC5yYW5kb20tYnRuOmhvdmVyLFxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJhbmRvbS1idG46Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjQyO1xufVxuXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmVzZXQtYnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNscik7XG59XG5cbi5tb2RhbC1idG4tY29udGFpbmVyIC5yZXNldC1idG46aG92ZXIsXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmVzZXQtYnRuOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjEsIDIxKTtcbn1cblxuLnBsYWNlLXNoaXAtYm9hcmQge1xuXHRtYXJnaW4tdG9wOiAxLjVyZW07XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoNTBweCwgMWZyKSk7XG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5wbGF5LWJ0biB7XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4tb3BxKTtcbn1cblxuLnBsYXktYnRuOmhvdmVyLFxuLnBsYXktYnRuOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tb3BxKTtcbn1cblxuLnNxdWFyZSB7XG5cdGhlaWdodDogNTBweDtcblx0d2lkdGg6IDUwcHg7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3UpO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2U7XG5cdGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4uZW1wdHktY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWZvbnQpO1xufVxuXG4ub2NjdXBpZWQtY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG5cbi5hY3RpdmUtY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLW9wcSk7XG59XG5cbi5pbnZhbGlkLWNlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtb3BxKTtcbn1cblxuLm1pc3NlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY2xyKTtcbn1cblxuLnN1bmtlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE2LCAxNik7XG59XG5cbi5oaWRlLW1vZGFsIHtcblx0b3BhY2l0eTogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kaXNhYmxlLXBvaW50ZXItZXZlbnRzIHtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ob3Zlci1iZzpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBHYW1lQm9hcmRzIFN0eWxpbmcgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuXG4uZ2FtZS1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRvdmVyZmxvdy15OiBzY3JvbGw7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcblx0Y29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcbn1cblxuLmdhbWUtaGVhZGVyLWNvbnRhaW5lciAuZ2FtZS10aXRsZSB7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJPcHMpO1xuXHRmb250LXNpemU6IDQuNXJlbTtcbn1cblxuLmdhbWUtYm9hcmQtY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uZGlzcGxheS10dXJuIHtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYk9wcyk7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuXHQuZ2FtZS1jb250YWluZXIge1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXHQuZ2FtZS1ib2FyZC1jb250YWluZXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cbn1cblxuLnBsYXllci1ib2FyZCxcbi5lbmVteS1ib2FyZCB7XG5cdG1hcmdpbi10b3A6IDEuNXJlbTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XG5cdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEVuZCBHYW1lIE1vZGFsIFN0eWxpbmcgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmVuZC1nYW1lLW1vZGFsLW92ZXJsYXkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGluc2V0OiAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3JtYWwpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1vcHEpO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47XG59XG5cbi5lbmQtZ2FtZS1tb2RhbCB7XG5cdGhlaWdodDogMzAwcHg7XG5cdHdpZHRoOiAzMDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5lbmQtZ2FtZS1tb2RhbCBoMSB7XG5cdGZvbnQtc2l6ZTogMy41cmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVuZC1nYW1lLW1vZGFsIGgyIHtcblx0Zm9udC1zaXplOiAyLjNyZW07XG59XG5cbi5lbmQtZ2FtZS1tb2RhbCBzcGFuIHtcblx0Y29sb3I6IHZhcigtLXJlZC1jbHIpO1xufVxuXG4uZW5kLWdhbWUtbW9kYWwgYnV0dG9uIHtcblx0Y29sb3I6IHZhcigtLXdoaXRlLWZvbnQpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBOzs7Q0FHQyxVQUFVO0NBQ1YsU0FBUztDQUNULHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxtQ0FBbUM7Q0FDbkMsK0JBQStCO0NBQy9CLHFDQUFxQztDQUNyQyxpQ0FBaUM7Q0FDakMsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsMkJBQTJCO0NBQzNCLHFDQUFxQztDQUNyQyxtQ0FBbUM7Q0FDbkM7c0VBQ3FFO0FBQ3RFOztBQUVBO0NBQ0MsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyx3QkFBd0I7Q0FDeEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixZQUFZO0NBQ1osZUFBZTtDQUNmLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0IsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQiwwQ0FBMEM7Q0FDMUMsWUFBWTtBQUNiOztBQUVBOztDQUVDLHlCQUF5QjtBQUMxQjs7QUFFQSx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLHVC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cUI7QUFDdEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW1hdGljK1NDOndnaHRANDAwOzcwMCZmYW1pbHk9QmxhY2srT3BzK09uZSZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tYmxhY2stb3BxOiByZ2JhKDUwLCA1MCwgNjYsIDAuOCk7XFxuXFx0LS1ncmVlbi1vcHE6IHJnYmEoNTMsIDIzMSwgNDYsIDAuOCk7XFxuXFx0LS1kYXJrLWdyYXk6IHJnYigxMzQsIDEzNCwgMTM0KTtcXG5cXHQtLWRhcmstZ3JlZW4tb3BxOiByZ2JhKDYsIDkwLCAyLCAwLjkpO1xcblxcdC0tcmVkLW9wcTogcmdiYSgyNTUsIDM4LCAzOCwgMC44KTtcXG5cXHQtLWRhcmstZm9udDogIzIwMjAyNTtcXG5cXHQtLWRhcmstYmx1ZTogIzFiMWIyOTtcXG5cXHQtLXdoaXRlLWZvbnQ6ICNmY2RlYzM7XFxuXFx0LS1ibHVlLWNscjogcmdiKDg4LCAxNTksIDI0MSk7XFxuXFx0LS1saWdodC1iZzogI2UxZmFlMTtcXG5cXHQtLWxpZ2h0LWdyYXk6ICNiM2IzYjQ7XFxuXFx0LS1yZWQtY2xyOiByZ2IoMjAyLCAxNiwgMTYpO1xcblxcdC0tZm9udC1iT3BzOiBcXFwiQmxhY2sgT3BzIE9uZVxcXCIsIGN1cnNpdmU7XFxuXFx0LS1mb250LW5vcm1hbDogXFxcIkFtYXRpYyBTQ1xcXCIsIGN1cnNpdmU7XFxuXFx0LS1mb250LXN1OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcblxcdFxcdE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qOjpzZWxlY3Rpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZS1mb250KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdHdpZHRoOiAxNTBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vcm1hbCk7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlLWluO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMyMzI0MjtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIFN0YXJ0IE1lbnUgU3R5bGluZyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0b3ZlcmZsb3c6IHNjcm9sbDtcXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1vcHEpO1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLWZvbnQpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5tb2RhbCB7XFxuXFx0d2lkdGg6IDU3MHB4O1xcblxcdHBhZGRpbmc6IDJyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlci1jb250YWluZXIge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vcm1hbCk7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciBoMSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHNwYW4ge1xcblxcdGNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXIgYnV0dG9uOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJhbmRvbS1idG4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5tb2RhbC1idG4tY29udGFpbmVyIC5yYW5kb20tYnRuOmhvdmVyLFxcbi5tb2RhbC1idG4tY29udGFpbmVyIC5yYW5kb20tYnRuOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjQyO1xcbn1cXG5cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmVzZXQtYnRuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJlc2V0LWJ0bjpob3ZlcixcXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmVzZXQtYnRuOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMSwgMjEpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1ib2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5wbGF5LWJ0biB7XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuLW9wcSk7XFxufVxcblxcbi5wbGF5LWJ0bjpob3ZlcixcXG4ucGxheS1idG46Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLW9wcSk7XFxufVxcblxcbi5zcXVhcmUge1xcblxcdGhlaWdodDogNTBweDtcXG5cXHR3aWR0aDogNTBweDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3UpO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZTtcXG5cXHRjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmVtcHR5LWNlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWZvbnQpO1xcbn1cXG5cXG4ub2NjdXBpZWQtY2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcXG59XFxuXFxuLmFjdGl2ZS1jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1vcHEpO1xcbn1cXG5cXG4uaW52YWxpZC1jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtb3BxKTtcXG59XFxuXFxuLm1pc3NlZCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jbHIpO1xcbn1cXG5cXG4uc3Vua2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNiwgMTYpO1xcbn1cXG5cXG4uaGlkZS1tb2RhbCB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmRpc2FibGUtcG9pbnRlci1ldmVudHMge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uaG92ZXItYmc6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogR2FtZUJvYXJkcyBTdHlsaW5nICovXFxuLyoqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iZyk7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmdhbWUtaGVhZGVyLWNvbnRhaW5lciAuZ2FtZS10aXRsZSB7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1iT3BzKTtcXG5cXHRmb250LXNpemU6IDQuNXJlbTtcXG59XFxuXFxuLmdhbWUtYm9hcmQtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5kaXNwbGF5LXR1cm4ge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJPcHMpO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xcblxcdC5nYW1lLWNvbnRhaW5lciB7XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXHQuZ2FtZS1ib2FyZC1jb250YWluZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcbn1cXG5cXG4ucGxheWVyLWJvYXJkLFxcbi5lbmVteS1ib2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogRW5kIEdhbWUgTW9kYWwgU3R5bGluZyAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZW5kLWdhbWUtbW9kYWwtb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGluc2V0OiAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm9ybWFsKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1vcHEpO1xcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIHtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiAzMDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIGgxIHtcXG5cXHRmb250LXNpemU6IDMuNXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIGgyIHtcXG5cXHRmb250LXNpemU6IDIuM3JlbTtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIHNwYW4ge1xcblxcdGNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcXG59XFxuXFxuLmVuZC1nYW1lLW1vZGFsIGJ1dHRvbiB7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlLWZvbnQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4uL01haW4vQ2xhc3Nlcy9HYW1lQ29udHJvbGxlclwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkcygpIHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdnYW1lLWNvbnRhaW5lcidcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnZ2FtZS1oZWFkZXItY29udGFpbmVyJ1xuICAgIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBnYW1lVGl0bGUuY2xhc3NOYW1lID0gJ2dhbWUtdGl0bGUnXG4gICAgZ2FtZVRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVBTJ1xuICAgIGNvbnN0IGRpc3BsYXlUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGRpc3BsYXlUdXJuLmNsYXNzTmFtZSA9ICdkaXNwbGF5LXR1cm4nXG4gICAgZGlzcGxheVR1cm4uaWQgPSAnZGlzcGxheS10dXJuJ1xuICAgIGRpc3BsYXlUdXJuLnRleHRDb250ZW50ID0gJ0l0XFwncyBZb3VyIFR1cm4gVG8gQXR0YWNrISdcbiAgICBjb25zdCBnYW1lQm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBnYW1lQm9hcmRzLmNsYXNzTmFtZSA9ICdnYW1lLWJvYXJkLWNvbnRhaW5lcidcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGxheWVyQm9hcmQuY2xhc3NOYW1lID0gJ3BsYXllci1ib2FyZCdcbiAgICBwbGF5ZXJCb2FyZC5pZCA9ICAncGxheWVyLWJvYXJkJ1xuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVuZW15Qm9hcmQuY2xhc3NOYW1lID0gJ2VuZW15LWJvYXJkJ1xuICAgIGVuZW15Qm9hcmQuaWQgPSAnZW5lbXktYm9hcmQnXG5cbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZSAqIDEwOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGxheWVyQ2VsbHMgPSBjcmVhdGVDZWxsKGkgJSAxMCwgTWF0aC5mbG9vcihpIC8gMTApLCAgcGxheWVyQm9hcmQpXG4gICAgICAgIGNvbnN0IGVuZW15Q2VsbHMgPSBjcmVhdGVDZWxsKGkgJSAxMCwgTWF0aC5mbG9vcihpIC8gMTApLCBlbmVteUJvYXJkKVxuXG4gICAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHBsYXllckNlbGxzKVxuICAgICAgICBlbmVteUJvYXJkLmFwcGVuZENoaWxkKGVuZW15Q2VsbHMpXG4gICAgfVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdhbWVUaXRsZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGlzcGxheVR1cm4pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBnYW1lQm9hcmRzLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKVxuICAgIGdhbWVCb2FyZHMuYXBwZW5kQ2hpbGQoZW5lbXlCb2FyZClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkcylcbiAgICByZXR1cm4gY29udGFpbmVyXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbGwoeCwgeSwgdGFyZ2V0Q2VsbCkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNlbGwuY2xhc3NOYW1lID0gJ3NxdWFyZSdcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLWJnJylcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBgJHt4fWApO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGAke3l9YCk7XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBHYW1lLmF0dGFjayh4LCB5LCB0YXJnZXRDZWxsKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY2VsbFxufVxuXG5leHBvcnQgeyBjcmVhdGVCb2FyZHMgfSIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9NYWluL0NsYXNzZXMvR2FtZUNvbnRyb2xsZXIuanNcIjtcblxuXHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0b3ZlcmxheS5jbGFzc05hbWUgPSBcImVuZC1nYW1lLW1vZGFsLW92ZXJsYXlcIjtcblx0b3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRlLW1vZGFsJylcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtb2RhbC5jbGFzc05hbWUgPSBcImVuZC1nYW1lLW1vZGFsXCI7XG5cdGNvbnN0IGdhbWVPdmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0Z2FtZU92ZXJUZXh0LnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXJcIjtcblx0Y29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0d2lubmVyVGV4dC5pbm5lckhUTUwgPSBgXG4gICAgR2FtZSBXaW5uZXI6IFxuICAgIDxzcGFuPlBsYXllciE8L3NwYW4+XG4gICAgYDtcblx0Y29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHJlc3RhcnRCdXR0b24uY2xhc3NOYW1lID0gXCJyZXN0YXJ0LWJ0blwiO1xuICAgIHJlc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbj8nXG5cblxuICAgIG1vZGFsLmFwcGVuZChnYW1lT3ZlclRleHQpXG4gICAgbW9kYWwuYXBwZW5kKHdpbm5lclRleHQpXG5cdG1vZGFsLmFwcGVuZChyZXN0YXJ0QnV0dG9uKVxuICAgIG92ZXJsYXkuYXBwZW5kKG1vZGFsKVxuXG5cdHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0R2FtZS5yZXN0YXJ0R2FtZSgpXG5cdH0pXG5cblx0ZXhwb3J0IHsgb3ZlcmxheSwgd2lubmVyVGV4dCB9XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9NYWluL0NsYXNzZXMvR2FtZUNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBCb2FyZENvbnRyb2xsZXIgZnJvbSBcIi4uL01haW4vQ2xhc3Nlcy9Cb2FyZENvbnRyb2xsZXIuanNcIjtcblxuZnVuY3Rpb24gc3RhcnRNZW51KCkge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuXHRjb25zdCBzdGFydEdhbWVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN0YXJ0R2FtZU1vZGFsLmNsYXNzTmFtZSA9IFwib3ZlcmxheVwiO1xuXHRzdGFydEdhbWVNb2RhbC5pZCA9IFwib3ZlcmxheVwiO1xuXG5cdHN0YXJ0R2FtZU1vZGFsLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+UGxheSBCYXR0bGVzaGlwITwvaDE+XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwibW9kYWwtaGVhZGVyXCI+UGxhY2UgWW91ciA8c3Bhbj5DYXJyaWVyITwvc3Bhbj48L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyYW5kb20tYnRuXCIgaWQ9XCJyYW5kb20tYnRuXCI+UmFuZG9tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGFuZ2Utb3JpZW50YXRpb24tYnRuXCIgaWQ9XCJjaGFuZ2Utb3JpZW50YXRpb24tYnRuXCI+Um90YXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNldC1idG5cIiBpZD1cInJlc2V0LWJ0blwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zaGlwLWJvYXJkXCIgaWQ9XCJwbGFjZS1zaGlwLWJvYXJkXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHRcdDxidXR0b24gY2xhc3M9XCJwbGF5LWJ0blwiIGlkPVwicGxheS1idG5cIj5QbGF5ITwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbmA7XG5cblx0Y29uc3QgaW50cm9Cb2FyZCA9IHN0YXJ0R2FtZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Utc2hpcC1ib2FyZFwiKTtcblx0Y29uc3QgY2hhbmdlT3JpZW50YXRpb25CdXR0b24gPSBzdGFydEdhbWVNb2RhbC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiI2NoYW5nZS1vcmllbnRhdGlvbi1idG5cIlxuXHQpO1xuXHRjb25zdCByZXNldEJ1dHRvbiA9IHN0YXJ0R2FtZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXQtYnRuXCIpO1xuXHRjb25zdCByYW5kb21TaGlwc0J1dHRvbiA9IHN0YXJ0R2FtZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZG9tLWJ0blwiKTtcblx0Y29uc3QgcGxheUdhbWVCdXR0b24gPSBzdGFydEdhbWVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3BsYXktYnRuXCIpO1xuXG5cdGNoYW5nZU9yaWVudGF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0R2FtZS5pc1ZlcnRpY2FsID0gIUdhbWUuaXNWZXJ0aWNhbDtcblx0fSk7XG5cblx0cmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0Qm9hcmQpO1xuXG5cdHJhbmRvbVNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0cGxhY2VSYW5kb21TaGlwcyhpbnRyb0JvYXJkKTtcblx0fSk7XG5cblx0cGxheUdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIDEwOyBpKyspIHtcblx0XHRjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHNxdWFyZS5jbGFzc05hbWUgPSBcInNxdWFyZVwiO1xuXHRcdHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYCR7aSAlIDEwfWApO1xuXHRcdHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgYCR7TWF0aC5mbG9vcihpIC8gMTApfWApO1xuXHRcdGludHJvQm9hcmQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHNxdWFyZSk7XG5cblx0XHRzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoR2FtZS5zaGlwSW5kZXggPiBHYW1lLnVzZXIuc2hpcHMubGVuZ3RoIC0gMSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlU3F1YXJlLmNhbGwodGhpcywgaW50cm9Cb2FyZCwgZnVuY3Rpb24gKHRhcmdldENlbGwpIHtcblx0XHRcdFx0aWYgKHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwib2NjdXBpZWQtY2VsbFwiKSkge1xuXHRcdFx0XHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImludmFsaWQtY2VsbFwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtY2VsbFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0c3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoR2FtZS5zaGlwSW5kZXggPiBHYW1lLnVzZXIuc2hpcHMubGVuZ3RoIC0gMSkgcmV0dXJuO1xuXHRcdFx0YWN0aXZlU3F1YXJlLmNhbGwodGhpcywgaW50cm9Cb2FyZCwgZnVuY3Rpb24gKHRhcmdldENlbGwpIHtcblx0XHRcdFx0aWYgKHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLWNlbGxcIikpIHtcblx0XHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY2VsbFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGFyZ2V0Q2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnZhbGlkLWNlbGxcIikpIHtcblx0XHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLWNlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKEdhbWUuc2hpcEluZGV4ID4gR2FtZS51c2VyLnNoaXBzLmxlbmd0aCAtIDEpIHJldHVybjtcblx0XHRcdHNldFVwU2hpcHMuY2FsbCh0aGlzLCBpbnRyb0JvYXJkKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiByb290LmFwcGVuZENoaWxkKHN0YXJ0R2FtZU1vZGFsKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2hpcE5hbWUoKSB7XG5cdGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1oZWFkZXJcIik7XG5cblx0aWYgKEdhbWUuc2hpcEluZGV4IDwgR2FtZS51c2VyLnNoaXBzLmxlbmd0aCkge1xuXHRcdHNoaXBOYW1lLmlubmVySFRNTCA9IGBQbGFjZSBZb3VyIDxzcGFuPiR7XG5cdFx0XHRHYW1lLnVzZXIuc2hpcHNbR2FtZS5zaGlwSW5kZXhdLm5hbWVcblx0XHR9ITwvc3Bhbj5gO1xuXHR9IGVsc2Uge1xuXHRcdHNoaXBOYW1lLnRleHRDb250ZW50ID0gYFN0YXJ0IHRoZSBHYW1lIWA7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWN0aXZlU3F1YXJlKGludHJvQm9hcmQsIGNlbGxDYWxsYmFjaykge1xuXHRjb25zdCB4ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LngpO1xuXHRjb25zdCB5ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnkpO1xuXG5cdGlmIChHYW1lLmlzVmVydGljYWwpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IEdhbWUudXNlci5zaGlwc1tHYW1lLnNoaXBJbmRleF0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh5ICsgaSA8IDEwKSB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0geSAqIDEwICsgeDtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IGludHJvQm9hcmQuY2hpbGRyZW5baW5kZXggKyBpICogMTBdO1xuXHRcdFx0XHRjZWxsQ2FsbGJhY2sodGFyZ2V0Q2VsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZS51c2VyLnNoaXBzW0dhbWUuc2hpcEluZGV4XS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHggKyBpIDwgMTApIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IGludHJvQm9hcmQuY2hpbGRyZW5beSAqIDEwICsgeCArIGldO1xuXHRcdFx0XHRjZWxsQ2FsbGJhY2sodGFyZ2V0Q2VsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNldFVwU2hpcHMoaW50cm9Cb2FyZCkge1xuXHRjb25zdCB4ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LngpO1xuXHRjb25zdCB5ID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnkpO1xuXG5cdGlmIChcblx0XHRHYW1lLnVzZXIucGxheWVyQm9hcmQucGxhY2VTaGlwKFxuXHRcdFx0R2FtZS51c2VyLnNoaXBzW0dhbWUuc2hpcEluZGV4XSxcblx0XHRcdHksXG5cdFx0XHR4LFxuXHRcdFx0R2FtZS5pc1ZlcnRpY2FsXG5cdFx0KVxuXHQpIHtcblx0XHRpZiAoR2FtZS5pc1ZlcnRpY2FsKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IEdhbWUudXNlci5zaGlwc1tHYW1lLnNoaXBJbmRleF0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHkgKyBpIDwgMTApIHtcblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHkgKiAxMCArIHg7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IGludHJvQm9hcmQuY2hpbGRyZW5baW5kZXggKyBpICogMTBdO1xuXHRcdFx0XHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkLWNlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lLnVzZXIuc2hpcHNbR2FtZS5zaGlwSW5kZXhdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh4ICsgaSA8IDEwKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IGludHJvQm9hcmQuY2hpbGRyZW5beSAqIDEwICsgeCArIGldO1xuXHRcdFx0XHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkLWNlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YWN0aXZlU3F1YXJlLmNhbGwodGhpcywgaW50cm9Cb2FyZCwgZnVuY3Rpb24gKHRhcmdldENlbGwpIHtcblx0XHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1jZWxsXCIpO1xuXHRcdH0pO1xuXHRcdEdhbWUuc2hpcEluZGV4ICs9IDE7XG5cdFx0Y2hhbmdlU2hpcE5hbWUoKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXNldEJvYXJkKCkge1xuXHRjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGFjZS1zaGlwLWJvYXJkIGRpdlwiKTtcblx0R2FtZS51c2VyLnBsYXllckJvYXJkLmluaXQoKTtcblx0R2FtZS5zaGlwSW5kZXggPSAwO1xuXHRjaGFuZ2VTaGlwTmFtZSgpO1xuXG5cdHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG5cdFx0c3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJvY2N1cGllZC1jZWxsXCIpO1xuXHR9KTtcblx0Ly8gY29uc29sZS50YWJsZShzcXVhcmVzKVxuXHQvLyBjb25zb2xlLnRhYmxlKEdhbWUucGxheWVyLnBsYXllckJvYXJkLmJvYXJkKVxufVxuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbVNoaXBzKGludHJvQm9hcmQpIHtcblx0Y29uc3QgcGxheWVyQm9hcmQgPSBHYW1lLnVzZXIucGxheWVyQm9hcmQuYm9hcmQ7XG5cdHJlc2V0Qm9hcmQoKTtcblx0R2FtZS51c2VyLnBsYWNlUmFuZG9tU2hpcHMoKTtcblx0R2FtZS5zaGlwSW5kZXggPSBHYW1lLnVzZXIuc2hpcHMubGVuZ3RoO1xuXHRjaGFuZ2VTaGlwTmFtZSgpO1xuXG5cdGZvciAobGV0IHkgPSAwOyB5IDwgcGxheWVyQm9hcmQubGVuZ3RoOyB5KyspIHtcblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHBsYXllckJvYXJkLmxlbmd0aDsgeCsrKSB7XG5cdFx0XHRpZiAocGxheWVyQm9hcmRbeV1beF0pIHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IGludHJvQm9hcmQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHt5fSddYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZC1jZWxsXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBjb25zb2xlLnRhYmxlKEdhbWUucGxheWVyLnBsYXllckJvYXJkLmJvYXJkKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuXHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcblx0Y29uc3QgdHVybkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheS10dXJuJylcblxuXHRpZiAoR2FtZS5zaGlwSW5kZXggPCBHYW1lLnVzZXIuc2hpcHMubGVuZ3RoKSByZXR1cm47XG5cblx0bW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGUtbW9kYWxcIik7XG5cdFxuXHRjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItYm9hcmQnKVxuXHRjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZW15LWJvYXJkJylcblx0XG5cdGNvbnN0IHBsYXllck9uZSA9IG5ldyBCb2FyZENvbnRyb2xsZXIoR2FtZS51c2VyLCBwbGF5ZXJCb2FyZClcblx0Y29uc3QgcGxheWVyVHdvID0gbmV3IEJvYXJkQ29udHJvbGxlcihHYW1lLmFpLCBlbmVteUJvYXJkKVxuXG5cdEdhbWUuc2V0VXBHYW1lKFxuXHRcdHBsYXllck9uZSxcblx0XHRwbGF5ZXJUd28sXG5cdFx0dHVybkRpc3BsYXlcblx0KVxuXG5cdC8vIGNvbnNvbGUudGFibGUocGxheWVyT25lLnBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZCk7XG5cdC8vIGNvbnNvbGUudGFibGUocGxheWVyVHdvLnBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZClcbn1cblxuZXhwb3J0IHsgc3RhcnRNZW51IH07XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZENvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGxheWVyfSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGJvYXJkVmlldyBcbiAgICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgYm9hcmRWaWV3KSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyXG4gICAgICAgIHRoaXMuYm9hcmRWaWV3ID0gYm9hcmRWaWV3XG4gICAgfVxuXG4gICAgc2hvd0JvYXJkU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRCb2FyZCA9IHRoaXMucGxheWVyLnBsYXllckJvYXJkLmJvYXJkXG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjdXJyZW50Qm9hcmQubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY3VycmVudEJvYXJkLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRCb2FyZFt5XVt4XSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gdGhpcy5ib2FyZFZpZXcucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBbZGF0YS14PScke3h9J11bZGF0YS15PScke3l9J11gXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcIm9jY3VwaWVkLWNlbGxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmRWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtcG9pbnRlci1ldmVudHMnKVxuICAgIH1cblxuICAgIGRpc2FibGVCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5ib2FyZFZpZXcuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1wb2ludGVyLWV2ZW50cycpXG4gICAgfVxufSIsImltcG9ydCBCb2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vQm9hcmRDb250cm9sbGVyXCI7XG5pbXBvcnQgUGxheWVyLCB7IEFJIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgeyBvdmVybGF5LCB3aW5uZXJUZXh0IH0gZnJvbSBcIi4uLy4uL0dhbWUvRW5kR2FtZU1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXHRzdGF0aWMgdXNlciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIiwgW1xuXHRcdG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcblx0XHRuZXcgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG5cdFx0bmV3IFNoaXAoMywgXCJEZXN0cm95ZXJcIiksXG5cdFx0bmV3IFNoaXAoMywgXCJTdWJtYXJpbmVcIiksXG5cdFx0bmV3IFNoaXAoMiwgXCJQYXRyb2wgQm9hdFwiKSxcblx0XSk7XG5cblx0c3RhdGljIGFpID0gbmV3IEFJKFwiQUlcIiwgW1xuXHRcdG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcblx0XHRuZXcgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG5cdFx0bmV3IFNoaXAoMywgXCJEZXN0cm95ZXJcIiksXG5cdFx0bmV3IFNoaXAoMywgXCJTdWJtYXJpbmVcIiksXG5cdFx0bmV3IFNoaXAoMiwgXCJQYXRyb2wgQm9hdFwiKSxcblx0XSk7XG5cblx0c3RhdGljIHNoaXBJbmRleCA9IDA7XG5cdHN0YXRpYyBpc1ZlcnRpY2FsID0gdHJ1ZTtcblx0c3RhdGljIGlzR2FtZU92ZXIgPSBmYWxzZTtcblx0LyoqQHR5cGUge0JvYXJkQ29udHJvbGxlcn0gKi9cblx0c3RhdGljIGNvbnRyb2xsZXIxIDtcblx0IC8qKkB0eXBlIHtCb2FyZENvbnRyb2xsZXJ9ICovXG5cdHN0YXRpYyBjb250cm9sbGVyMjtcblx0LyoqQHR5cGUge0JvYXJkQ29udHJvbGxlcn0gKi9cblx0c3RhdGljIGN1cnJlbnQ7XG5cdHN0YXRpYyB0dXJuRGlzcGxheTtcblxuXHRzdGF0aWMgc2V0VXBHYW1lKGNvbnRyb2xsZXIxLCBjb250cm9sbGVyMiwgdHVybkRpc3BsYXkpIHtcblx0XHR0aGlzLmNvbnRyb2xsZXIxID0gY29udHJvbGxlcjE7XG5cdFx0dGhpcy5jb250cm9sbGVyMiA9IGNvbnRyb2xsZXIyO1xuXHRcdHRoaXMuY3VycmVudCA9IGNvbnRyb2xsZXIxO1xuXHRcdHRoaXMudHVybkRpc3BsYXkgPSB0dXJuRGlzcGxheVxuXG5cdFx0Y29udHJvbGxlcjEuc2hvd0JvYXJkU2hpcHMoKTtcblx0XHRjb250cm9sbGVyMS5kaXNhYmxlQm9hcmQoKTtcblx0fVxuXG5cdHN0YXRpYyBjaGFuZ2VUdXJuKCkge1xuXHRcdGNvbnN0IG90aGVyID0gdGhpcy5jdXJyZW50O1xuXHRcdGNvbnN0IGN1cnJlbnQgPVxuXHRcdFx0dGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbnRyb2xsZXIxID8gdGhpcy5jb250cm9sbGVyMiA6IHRoaXMuY29udHJvbGxlcjE7XG5cdFx0XG5cdFx0aWYgKGN1cnJlbnQucGxheWVyLm5hbWUgPT09IFwiQUlcIikge1xuXHRcdFx0b3RoZXIuZGlzYWJsZUJvYXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG90aGVyLmVuYWJsZUJvYXJkKClcblx0XHR9XG5cblx0XHR0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQuZGlzYWJsZUJvYXJkKCk7XG5cblx0XHRpZiAoY3VycmVudC5wbGF5ZXIubmFtZSA9PT0gXCJBSVwiKSB7XG5cdFx0XHR0aGlzLnR1cm5EaXNwbGF5LnRleHRDb250ZW50ID0gJ0l0XFwncyB0aGUgZW5lbXlcXCdzIHR1cm4hJ1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlQUlBdHRhY2soKVxuXHRcdFx0fSwgNTAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50dXJuRGlzcGxheS50ZXh0Q29udGVudCA9ICdJdFxcJ3MgeW91ciB0dXJuISdcblx0XHR9XG5cdFx0XHRcblx0fVxuXG5cdHN0YXRpYyBoYW5kbGVBSUF0dGFjaygpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuXHRcdGNvbnN0IHRhcmdldCA9XG5cdFx0XHR0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29udHJvbGxlcjEgPyB0aGlzLmNvbnRyb2xsZXIyIDogdGhpcy5jb250cm9sbGVyMTtcblx0XHRjb25zdCB0YXJnZXRCb2FyZCA9IHRhcmdldC5wbGF5ZXIucGxheWVyQm9hcmRcblx0XHRjb25zdCBhaUF0dGFja1Jlc3VsdCA9IC8qKiBAdHlwZSB7IEFJIH0qLyAoY3VycmVudC5wbGF5ZXIpLnNtYXJ0UmFuZG9tQXR0YWNrKHRhcmdldEJvYXJkKTtcblx0XHRjb25zdCB0YXJnZXRYID0gYWlBdHRhY2tSZXN1bHQueFxuXHRcdGNvbnN0IHRhcmdldFkgPSBhaUF0dGFja1Jlc3VsdC55XG5cdFx0dGhpcy5hdHRhY2sodGFyZ2V0WSwgdGFyZ2V0WCwgdGFyZ2V0LmJvYXJkVmlldywgYWlBdHRhY2tSZXN1bHQucmVzdWx0KVx0XHRcblxuXHRcdC8vIGNvbnNvbGUubG9nKGFpQXR0YWNrUmVzdWx0LnJlc3VsdClcblx0XHQvLyBjb25zb2xlLnRhYmxlKHRhcmdldC5wbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQpXG5cdFx0XG5cdFx0aWYgKFxuXHRcdFx0YWlBdHRhY2tSZXN1bHQucmVzdWx0ID09PSBcIkhpdFwiIHx8XG5cdFx0XHRhaUF0dGFja1Jlc3VsdC5yZXN1bHQgPT09IFwiQWxyZWFkeSBBdHRhY2tlZFwiIHx8XG5cdFx0XHRhaUF0dGFja1Jlc3VsdC5yZXN1bHQgPT09IFwiU3Vua2VkXCJcblx0XHQpIHtcblx0XHRcdHRoaXMuaGFuZGxlQUlBdHRhY2soKVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhdHRhY2soeCwgeSwgdGFyZ2V0Qm9hcmRWaWV3LCByZXN1bHQpIHtcblx0XHRpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XG5cblx0XHRjb25zdCB0YXJnZXQgPVxuXHRcdFx0dGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbnRyb2xsZXIxID8gdGhpcy5jb250cm9sbGVyMiA6IHRoaXMuY29udHJvbGxlcjE7XG5cdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IHRhcmdldEJvYXJkVmlldy5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0YFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gXG5cdFx0KVxuXHRcdGNvbnN0IHRhcmdldEJvYXJkID0gdGFyZ2V0LnBsYXllci5wbGF5ZXJCb2FyZFxuXHRcdGxldCBhdHRhY2tSZXN1bHQ7XG5cdFx0XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0YXR0YWNrUmVzdWx0ID0gcmVzdWx0XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF0dGFja1Jlc3VsdCA9IHRhcmdldEJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeClcblx0XHR9XG5cblx0XHRpZiAoYXR0YWNrUmVzdWx0ID09PSBcIkFscmVhZHkgQXR0YWNrZWRcIikgcmV0dXJuO1xuXG5cdFx0aWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJNaXNzZWRcIikge1xuXHRcdFx0dGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuXHRcdFx0dGFyZ2V0Q2VsbC50ZXh0Q29udGVudCA9IFwiwrdcIjtcblx0XHRcdHRoaXMuY2hhbmdlVHVybigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWNlbGxcIik7XG5cdFx0XHR0YXJnZXRDZWxsLnRleHRDb250ZW50ID0gXCJ4XCI7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldC5wbGF5ZXIuY2hlY2tBbGxTaGlwcygpKSB7XG5cdFx0XHR0aGlzLmdhbWVJc092ZXIoKVxuXHRcdH1cblxuXHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1wb2ludGVyLWV2ZW50cycpXHRcblx0fVxuXG5cdHN0YXRpYyBnYW1lSXNPdmVyKCkge1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0b3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLW1vZGFsJylcblx0XHR3aW5uZXJUZXh0LmlubmVySFRNTCA9YFxuXHRcdEdhbWUgV2lubmVyOiBcblx0XHQ8c3Bhbj4ke3RoaXMuY3VycmVudC5wbGF5ZXIubmFtZX08L3NwYW4+XG5cdFx0YDtcblx0fVxuXG5cdHN0YXRpYyByZXN0YXJ0R2FtZSgpIHtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlXG5cdFx0b3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRlLW1vZGFsJylcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcblx0fVxufVxuIiwiY29uc3QgU0laRSA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJvYXJkID0gW107XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgU0laRTsgaSsrKSB7XG5cdFx0XHR0aGlzLmJvYXJkW2ldID0gW107XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IFNJWkU7IGorKykge1xuXHRcdFx0XHR0aGlzLmJvYXJkW2ldW2pdID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwbGFjZVNoaXAoc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpIHtcblx0XHRpZiAoIXRoaXMuaXNWYWxpZFBsYWNlbWVudChzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoaXNWZXJ0aWNhbCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXSA9IHNoaXA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmJvYXJkW3Jvd11bY29sdW1uICsgaV0gPSBzaGlwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpIHtcblx0XHQvLyBpZiBzaGlwIGlzIG91dCBvZiBib3VuZHNcblx0XHRpZiAocm93ID49IFNJWkUgfHwgY29sdW1uID49IFNJWkUgfHwgcm93IDwgMCB8fCBjb2x1bW4gPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgc2hpcCBkb2VzIG5vdCBmaXQgdGhlIGdhbWVib2FyZFxuXHRcdGlmIChpc1ZlcnRpY2FsKSB7XG5cdFx0XHRpZiAocm93ICsgc2hpcC5sZW5ndGggPiBTSVpFKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIGlmIGEgc2hpcCBpcyBhbHJlYWR5IGluIHBsYWNlXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY29sdW1uICsgc2hpcC5sZW5ndGggPiBTSVpFKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbiArIGldKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG5cdFx0aWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID09PSBcIlhcIikgcmV0dXJuIFwiQWxyZWFkeSBBdHRhY2tlZFwiO1xuXG5cdFx0aWYgKCF0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSkge1xuXHRcdFx0dGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSBcIlhcIjtcblx0XHRcdHJldHVybiAnTWlzc2VkJ1xuXHRcdH1cblxuXHRcdGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXTtcblx0XHR0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IFwiWFwiO1xuXHRcdHJldHVybiBzaGlwLmhpdCgpO1xuXHR9XG5cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHNoaXBzID0gW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cdFx0dGhpcy5zaGlwcyA9IHNoaXBzO1xuXHR9XG5cblx0YXR0YWNrKHJvdywgY29sdW1uLCBlbmVteUJvYXJkKSB7XG5cdFx0cmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG5cdH1cblxuXHRwbGFjZVJhbmRvbVNoaXBzKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7ICkge1xuXHRcdFx0Y29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0Y29uc3QgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0Y29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXHRcdFx0Y29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbaV07XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG5cdFx0XHRcdFx0c2hpcCxcblx0XHRcdFx0XHRyYW5kb21Sb3csXG5cdFx0XHRcdFx0cmFuZG9tQ29sdW1uLFxuXHRcdFx0XHRcdHJhbmRvbU9yaWVudGF0aW9uXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRpICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tBbGxTaGlwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cdH1cblxuXHRyYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xuXHRcdGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cblx0XHRjb25zdCBhdHRhY2tlZCA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21Sb3csIHJhbmRvbUNvbHVtbik7XG5cblx0XHRpZiAoYXR0YWNrZWQgPT09IFwiQWxyZWFkeSBBdHRhY2tlZFwiKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYW5kb21BdHRhY2soZW5lbXlCb2FyZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB7IHg6IHJhbmRvbVJvdywgeTogcmFuZG9tQ29sdW1uLCByZXN1bHQ6IGF0dGFja2VkIH07XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBBSSBleHRlbmRzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHNoaXBzID0gW10pIHtcblx0XHRzdXBlcihuYW1lLCBzaGlwcyk7XG5cdFx0dGhpcy5wbGFjZVJhbmRvbVNoaXBzKCk7XG5cdFx0dGhpcy5sYXNIaXQgPSBudWxsO1xuXHR9XG5cblx0c21hcnRSYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xuXHRcdGlmICghdGhpcy5sYXNIaXQpIHJldHVybiB0aGlzLnJhbmRvbUF0dGFjayhlbmVteUJvYXJkKTtcblxuXHRcdGNvbnN0IHggPSB0aGlzLmxhc0hpdFswXTtcblx0XHRjb25zdCB5ID0gdGhpcy5sYXNIaXRbMV07XG5cblx0XHRjb25zdCB2YWxpZEFkamFjZW50Q2VsbHMgPSB0aGlzLmdldEFkamFjZW50Q2VsbCh4LCB5KS5maWx0ZXIoXG5cdFx0XHQoW2FkamFjZW50WCwgYWRqYWNlbnRZXSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdGFkamFjZW50WCA+PSAwICYmXG5cdFx0XHRcdFx0YWRqYWNlbnRZID49IDAgJiZcblx0XHRcdFx0XHRhZGphY2VudFggPCB0aGlzLnBsYXllckJvYXJkLmJvYXJkLmxlbmd0aCAmJlxuXHRcdFx0XHRcdGFkamFjZW50WSA8IHRoaXMucGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoICYmXG5cdFx0XHRcdFx0ZW5lbXlCb2FyZC5ib2FyZFthZGphY2VudFhdW2FkamFjZW50WV0gIT09IFwiWFwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGlmICh2YWxpZEFkamFjZW50Q2VsbHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yYW5kb21BdHRhY2soZW5lbXlCb2FyZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENob29zZSBhIHJhbmRvbSB2YWxpZCBhZGphY2VudCBjZWxsIGFuZCBhdHRhY2sgaXRcblx0XHRcdGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRBZGphY2VudENlbGxzLmxlbmd0aCk7XG5cdFx0XHRjb25zdCBbcmFuZG9tQWRqYWNlbnRYLCByYW5kb21BZGphY2VudFldID1cblx0XHRcdFx0dmFsaWRBZGphY2VudENlbGxzW3JhbmRvbUluZGV4XTtcblx0XHRcdGNvbnN0IGF0dGFja2VkID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKFxuXHRcdFx0XHRyYW5kb21BZGphY2VudFgsXG5cdFx0XHRcdHJhbmRvbUFkamFjZW50WVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKGF0dGFja2VkID09PSBcIkFscmVhZHkgQXR0YWNrZWRcIikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zbWFydFJhbmRvbUF0dGFjayhlbmVteUJvYXJkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdEhpdCA9IFtyYW5kb21BZGphY2VudFgsIHJhbmRvbUFkamFjZW50WV07XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogcmFuZG9tQWRqYWNlbnRYLFxuXHRcdFx0XHRcdHk6IHJhbmRvbUFkamFjZW50WSxcblx0XHRcdFx0XHRyZXN1bHQ6IGF0dGFja2VkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldEFkamFjZW50Q2VsbCh4LCB5KSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFt4LCB5IC0gMV0sXG5cdFx0XHRbeCwgeSArIDFdLFxuXHRcdFx0W3ggLSAxLCB5XSxcblx0XHRcdFt4ICsgMSwgeV0sXG5cdFx0XTtcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cdGNvbnN0cnVjdG9yKGxlbmd0aCxuYW1lID0gJ1NoaXAnKSB7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XG5cdFx0dGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuXHR9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy5oaXRzICs9IDFcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTdW5rKCkgPyAnU3Vua2VkJyA6ICdIaXQnXG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aFxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZUJvYXJkcyB9IGZyb20gXCIuL0dhbWUvQm9hcmQuanNcIjtcbmltcG9ydCB7IHN0YXJ0TWVudSB9IGZyb20gXCIuL0dhbWUvU3RhcnRNZW51LmpzXCI7XG5pbXBvcnQgeyBvdmVybGF5IH0gZnJvbSBcIi4vR2FtZS9FbmRHYW1lTW9kYWwuanNcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cdHN0YXJ0TWVudSgpO1xuXHRyb290LmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkcygpKTtcblx0cm9vdC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=