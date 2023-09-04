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
	--green-opq: rgba(79, 220, 74, 0.8);
	--dark-green-opq: rgba(49, 134, 46, 0.8);
	--red-opq: rgba(255, 38, 38, 0.8);
	--dark-font: #202025;
	--dark-blue: #1b1b29;
	--white-font: #fcdec3;
	--blue-clr: rgb(88, 159, 241) ;
	--light-bg: #e1fae1;
    --light-gray: #b3b3b4;
	--red-clr: rgb(202, 16, 16);
	--font-bOps: "Black Ops One", cursive;
	--font-normal: "Amatic SC", cursive;
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
	background-color: #27273b;
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
    outline: 2px solid  var(--dark-blue);
}

.modal-btn-container .random-btn {
    background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
}

.modal-btn-container .random-btn:hover,
.modal-btn-container .random-btn:focus {
    background: linear-gradient(
        270deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
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
}

.square {
	height: 50px;
	width: 50px;
	font-size: 2rem;
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
	background-color: var(--dark-green-opq);
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
	overflow-y	: scroll;
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

@media only screen and (max-width: 1080px ) {
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
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Black+Ops+One&display=swap\");\n*,\n*::before,\n*::after {\n\tpadding: 0;\n\tmargin: 0;\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--black-opq: rgba(50, 50, 66, 0.8);\n\t--green-opq: rgba(79, 220, 74, 0.8);\n\t--dark-green-opq: rgba(49, 134, 46, 0.8);\n\t--red-opq: rgba(255, 38, 38, 0.8);\n\t--dark-font: #202025;\n\t--dark-blue: #1b1b29;\n\t--white-font: #fcdec3;\n\t--blue-clr: rgb(88, 159, 241) ;\n\t--light-bg: #e1fae1;\n    --light-gray: #b3b3b4;\n\t--red-clr: rgb(202, 16, 16);\n\t--font-bOps: \"Black Ops One\", cursive;\n\t--font-normal: \"Amatic SC\", cursive;\n}\n\n*::selection {\n    background-color: var(--light-gray);\n}\n\n\nbody {\n\theight: 100vh;\n\tposition: relative;\t\n}\n\nbutton {\n\tbackground-color: var(--dark-blue);\n\tcolor: var(--white-font);\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n    width: 150px;\n\tcursor: pointer;\n\talign-self: center;\n\tfont-family: var(--font-normal);\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\ttransition: background-color 150ms ease-in;\n\tborder: none;\n}\n\nbutton:hover,\nbutton:focus {\n\tbackground-color: #27273b;\n}\n\n/***********************/\n/* Start Menu Styling */\n/**********************/\n\n.overlay {\n\tposition: fixed;\n\toverflow: scroll;\n\tscroll-behavior: smooth;\n\theight: 100vh;\n\twidth: 100vw;\n\tbackground-color: var(--black-opq);\n\tcolor: var(--dark-font);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\ttext-align: center;\n\ttransition: opacity 250ms ease-out;\n}\n\n.modal {\n\twidth: 570px;\n    padding: 2rem;\n\tbackground-color: var(--light-bg);\n\tborder-radius: 5px;\n}\n\n.modal-header-container {\n\tfont-family: var(--font-normal);\n\tfont-size: 2rem;\n\tfont-weight: 700;\n\tletter-spacing: 0.2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.modal-header-container h1 {\n\ttext-decoration: underline;\n}\n\n.modal-header-container span {\n\tcolor: var(--red-clr);\n}\n\n.modal-btn-container button:focus {\n    outline: 2px solid  var(--dark-blue);\n}\n\n.modal-btn-container .random-btn {\n    background: linear-gradient(\n        90deg,\n        rgba(255, 0, 0, 1) 0%,\n        rgba(255, 154, 0, 1) 10%,\n        rgba(208, 222, 33, 1) 20%,\n        rgba(79, 220, 74, 1) 30%,\n        rgba(63, 218, 216, 1) 40%,\n        rgba(47, 201, 226, 1) 50%,\n        rgba(28, 127, 238, 1) 60%,\n        rgba(95, 21, 242, 1) 70%,\n        rgba(186, 12, 248, 1) 80%,\n        rgba(251, 7, 217, 1) 90%,\n        rgba(255, 0, 0, 1) 100%\n    );\n}\n\n.modal-btn-container .random-btn:hover,\n.modal-btn-container .random-btn:focus {\n    background: linear-gradient(\n        270deg,\n        rgba(255, 0, 0, 1) 0%,\n        rgba(255, 154, 0, 1) 10%,\n        rgba(208, 222, 33, 1) 20%,\n        rgba(79, 220, 74, 1) 30%,\n        rgba(63, 218, 216, 1) 40%,\n        rgba(47, 201, 226, 1) 50%,\n        rgba(28, 127, 238, 1) 60%,\n        rgba(95, 21, 242, 1) 70%,\n        rgba(186, 12, 248, 1) 80%,\n        rgba(251, 7, 217, 1) 90%,\n        rgba(255, 0, 0, 1) 100%\n    );\n}\n\n.modal-btn-container .reset-btn {\n    background-color: var(--red-clr);\n}\n\n.modal-btn-container .reset-btn:hover,\n.modal-btn-container .reset-btn:focus {\n    background-color: rgb(230, 21, 21);\n}\n\n.place-ship-board {\n\tmargin-top: 1.5rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, minmax(50px, 1fr));\n\tborder-top: 2px solid var(--dark-blue);\n\tborder-left: 2px solid var(--dark-blue);\n}\n\n.play-btn {\n\tmargin-top: 1rem;\n}\n\n.square {\n\theight: 50px;\n\twidth: 50px;\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-bottom: 2px solid var(--dark-blue);\n\tborder-right: 2px solid var(--dark-blue);\n    transition: background-color 150ms ease;\n\tcursor: crosshair;\n}\n\n.empty-cell {\n\tbackground-color: var(--white-font);\n}\n\n.occupied-cell {\n\tbackground-color: var(--dark-green-opq);\n}\n\n.active-cell {\n    background-color: var(--green-opq);\n}\n\n.invalid-cell {\n\tbackground-color: var(--red-opq);\n}\n\n.missed {\n\tbackground-color: var(--blue-clr);\n}\n\n.sunked {\n\tbackground-color: rgb(153, 16, 16);\n}\n\n.hide-modal {\n\topacity: 0;\n\tpointer-events: none;\n}\n\n.disable-pointer-events {\n\tpointer-events: none;\n}\n\n.hover-bg:hover {\n\tbackground-color: var(--light-gray);\n}\n\n/***********************/\n/* GameBoards Styling */\n/**********************/\n\n.game-container {\n\theight: 100vh;\n\toverflow-y\t: scroll;\n\tbackground-color: var(--light-bg);\n\tcolor: var(--dark-blue);\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.game-header-container .game-title {\n\tpadding: 1rem;\n\tfont-family: var(--font-bOps);\n\tfont-size: 4.5rem;\n}\n\n.game-board-container {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.display-turn {\n\tfont-family: var(--font-bOps);\n\tfont-size: 2rem;\n}\n\n@media only screen and (max-width: 1080px ) {\n\t.game-container {\n\t\theight: auto;\n\t}\n\t.game-board-container {\n\t\tflex-direction: column;\n\t}\n}\n\n.player-board,\n.enemy-board {\n\tmargin-top: 1.5rem;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, minmax(50px, 1fr));\n\tborder-top: 2px solid var(--dark-blue);\n\tborder-left: 2px solid var(--dark-blue);\n}\n\n/***************************/\n/* End Game Modal Styling */\n/**************************/\n\n.end-game-modal-overlay {\n\tposition: absolute;\n\tinset: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tfont-family: var(--font-normal);\n\tbackground-color: var(--black-opq);\n\ttransition: opacity 200ms ease-in;\n}\n\n.end-game-modal {\n\theight: 300px;\n\twidth: 300px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\tflex-direction: column;\n\tbackground-color: var(--light-bg);\n\tborder-radius: 5px;\n}\n\n.end-game-modal h1 {\n\tfont-size: 3.5rem;\n\tfont-weight: bold;\n}\n\n.end-game-modal h2 {\n\tfont-size: 2.3rem;\n}\n\n.end-game-modal span {\n\tcolor: var(--red-clr);\n}\n\n.end-game-modal button {\n\tcolor: var(--white-font);\n}\n"],"sourceRoot":""}]);
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
	const playerTwo = new _Main_Classes_BoardController_js__WEBPACK_IMPORTED_MODULE_1__["default"](_Main_Classes_GameController_js__WEBPACK_IMPORTED_MODULE_0__["default"].AI, enemyBoard)

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

	static AI = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]("AI", [
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

		this.AI.placeRandomShips();
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
		const aiAttackResult = current.player.randomAttack(targetBoard);
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

	static attack(x, y, targetBoard, result) {
		if (this.isGameOver) return;

		const target =
			this.current === this.controller1 ? this.controller2 : this.controller1;
		const targetCell = targetBoard.querySelector(
			`[data-x="${x}"][data-y="${y}"]`
		)
		let attackResult;
		
		if (result) {
			attackResult = result
		} else {
			attackResult = target.player.playerBoard.receiveAttack(y, x)
		}

		if (attackResult === "Already Attacked") return;

		if (attackResult === "Missed") {
			targetCell.classList.add("missed");
			targetCell.textContent = "~";
			this.changeTurn();
		} else {
			targetCell.classList.add("invalid-cell");
			targetCell.textContent = "+";
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

	randomAttack( enemyBoard) {
		const randomRow = Math.floor(Math.random() * 10)
		const randomColumn = Math.floor(Math.random() * 10)

		const attacked = enemyBoard.receiveAttack(randomRow, randomColumn);

		if (attacked === "Already Attacked") {
			return this.randomAttack(enemyBoard);
		} else {
			return { x :randomRow, y: randomColumn, result: attacked };
		}
		
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
		return this.ships.every(ship => ship.isSunk())
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
	(0,_Game_StartMenu_js__WEBPACK_IMPORTED_MODULE_1__.startMenu)()
	root.appendChild((0,_Game_Board_js__WEBPACK_IMPORTED_MODULE_0__.createBoards)())
	root.appendChild(_Game_EndGameModal_js__WEBPACK_IMPORTED_MODULE_2__.overlay)
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtIQUFrSCx1Q0FBdUM7QUFDeko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEs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UEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBK0M7QUFDQztBQUNEO0FBQzFCOzs7QUFHckI7O0FBRUE7QUFDQSxDQUFDLDZEQUFTO0FBQ1Ysa0JBQWtCLDREQUFZO0FBQzlCLGtCQUFrQiwwREFBTztBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZS9Cb2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvR2FtZS9FbmRHYW1lTW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWUvU3RhcnRNZW51LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9NYWluL0NsYXNzZXMvQm9hcmRDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9NYWluL0NsYXNzZXMvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL01haW4vQ2xhc3Nlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL01haW4vQ2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL01haW4vQ2xhc3Nlcy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDQwMDs3MDAmZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcblx0LS1ibGFjay1vcHE6IHJnYmEoNTAsIDUwLCA2NiwgMC44KTtcblx0LS1ncmVlbi1vcHE6IHJnYmEoNzksIDIyMCwgNzQsIDAuOCk7XG5cdC0tZGFyay1ncmVlbi1vcHE6IHJnYmEoNDksIDEzNCwgNDYsIDAuOCk7XG5cdC0tcmVkLW9wcTogcmdiYSgyNTUsIDM4LCAzOCwgMC44KTtcblx0LS1kYXJrLWZvbnQ6ICMyMDIwMjU7XG5cdC0tZGFyay1ibHVlOiAjMWIxYjI5O1xuXHQtLXdoaXRlLWZvbnQ6ICNmY2RlYzM7XG5cdC0tYmx1ZS1jbHI6IHJnYig4OCwgMTU5LCAyNDEpIDtcblx0LS1saWdodC1iZzogI2UxZmFlMTtcbiAgICAtLWxpZ2h0LWdyYXk6ICNiM2IzYjQ7XG5cdC0tcmVkLWNscjogcmdiKDIwMiwgMTYsIDE2KTtcblx0LS1mb250LWJPcHM6IFwiQmxhY2sgT3BzIE9uZVwiLCBjdXJzaXZlO1xuXHQtLWZvbnQtbm9ybWFsOiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xufVxuXG4qOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG5cbmJvZHkge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHRcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcblx0Y29sb3I6IHZhcigtLXdoaXRlLWZvbnQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogMTUwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1ub3JtYWwpO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZS1pbjtcblx0Ym9yZGVyOiBub25lO1xufVxuXG5idXR0b246aG92ZXIsXG5idXR0b246Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzNiO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBTdGFydCBNZW51IFN0eWxpbmcgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuXG4ub3ZlcmxheSB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcblx0c2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stb3BxKTtcblx0Y29sb3I6IHZhcigtLWRhcmstZm9udCk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLW91dDtcbn1cblxuLm1vZGFsIHtcblx0d2lkdGg6IDU3MHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciB7XG5cdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vcm1hbCk7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xufVxuXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciBoMSB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciBzcGFuIHtcblx0Y29sb3I6IHZhcigtLXJlZC1jbHIpO1xufVxuXG4ubW9kYWwtYnRuLWNvbnRhaW5lciBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAgdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJhbmRvbS1idG4ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgOTBkZWcsXG4gICAgICAgIHJnYmEoMjU1LCAwLCAwLCAxKSAwJSxcbiAgICAgICAgcmdiYSgyNTUsIDE1NCwgMCwgMSkgMTAlLFxuICAgICAgICByZ2JhKDIwOCwgMjIyLCAzMywgMSkgMjAlLFxuICAgICAgICByZ2JhKDc5LCAyMjAsIDc0LCAxKSAzMCUsXG4gICAgICAgIHJnYmEoNjMsIDIxOCwgMjE2LCAxKSA0MCUsXG4gICAgICAgIHJnYmEoNDcsIDIwMSwgMjI2LCAxKSA1MCUsXG4gICAgICAgIHJnYmEoMjgsIDEyNywgMjM4LCAxKSA2MCUsXG4gICAgICAgIHJnYmEoOTUsIDIxLCAyNDIsIDEpIDcwJSxcbiAgICAgICAgcmdiYSgxODYsIDEyLCAyNDgsIDEpIDgwJSxcbiAgICAgICAgcmdiYSgyNTEsIDcsIDIxNywgMSkgOTAlLFxuICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMSkgMTAwJVxuICAgICk7XG59XG5cbi5tb2RhbC1idG4tY29udGFpbmVyIC5yYW5kb20tYnRuOmhvdmVyLFxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJhbmRvbS1idG46Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMjcwZGVnLFxuICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMSkgMCUsXG4gICAgICAgIHJnYmEoMjU1LCAxNTQsIDAsIDEpIDEwJSxcbiAgICAgICAgcmdiYSgyMDgsIDIyMiwgMzMsIDEpIDIwJSxcbiAgICAgICAgcmdiYSg3OSwgMjIwLCA3NCwgMSkgMzAlLFxuICAgICAgICByZ2JhKDYzLCAyMTgsIDIxNiwgMSkgNDAlLFxuICAgICAgICByZ2JhKDQ3LCAyMDEsIDIyNiwgMSkgNTAlLFxuICAgICAgICByZ2JhKDI4LCAxMjcsIDIzOCwgMSkgNjAlLFxuICAgICAgICByZ2JhKDk1LCAyMSwgMjQyLCAxKSA3MCUsXG4gICAgICAgIHJnYmEoMTg2LCAxMiwgMjQ4LCAxKSA4MCUsXG4gICAgICAgIHJnYmEoMjUxLCA3LCAyMTcsIDEpIDkwJSxcbiAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDEwMCVcbiAgICApO1xufVxuXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmVzZXQtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcbn1cblxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJlc2V0LWJ0bjpob3Zlcixcbi5tb2RhbC1idG4tY29udGFpbmVyIC5yZXNldC1idG46Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIxLCAyMSk7XG59XG5cbi5wbGFjZS1zaGlwLWJvYXJkIHtcblx0bWFyZ2luLXRvcDogMS41cmVtO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDUwcHgsIDFmcikpO1xuXHRib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcblx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xufVxuXG4ucGxheS1idG4ge1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uc3F1YXJlIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogNTBweDtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgZWFzZTtcblx0Y3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5lbXB0eS1jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZm9udCk7XG59XG5cbi5vY2N1cGllZC1jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbi1vcHEpO1xufVxuXG4uYWN0aXZlLWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLW9wcSk7XG59XG5cbi5pbnZhbGlkLWNlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtb3BxKTtcbn1cblxuLm1pc3NlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY2xyKTtcbn1cblxuLnN1bmtlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE2LCAxNik7XG59XG5cbi5oaWRlLW1vZGFsIHtcblx0b3BhY2l0eTogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kaXNhYmxlLXBvaW50ZXItZXZlbnRzIHtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ob3Zlci1iZzpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBHYW1lQm9hcmRzIFN0eWxpbmcgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqL1xuXG4uZ2FtZS1jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRvdmVyZmxvdy15XHQ6IHNjcm9sbDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xuXHRjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uZ2FtZS1oZWFkZXItY29udGFpbmVyIC5nYW1lLXRpdGxlIHtcblx0cGFkZGluZzogMXJlbTtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYk9wcyk7XG5cdGZvbnQtc2l6ZTogNC41cmVtO1xufVxuXG4uZ2FtZS1ib2FyZC1jb250YWluZXIge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5kaXNwbGF5LXR1cm4ge1xuXHRmb250LWZhbWlseTogdmFyKC0tZm9udC1iT3BzKTtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCApIHtcblx0LmdhbWUtY29udGFpbmVyIHtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblx0LmdhbWUtYm9hcmQtY29udGFpbmVyIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG59XG5cbi5wbGF5ZXItYm9hcmQsXG4uZW5lbXktYm9hcmQge1xuXHRtYXJnaW4tdG9wOiAxLjVyZW07XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoNTBweCwgMWZyKSk7XG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBFbmQgR2FtZSBNb2RhbCBTdHlsaW5nICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5lbmQtZ2FtZS1tb2RhbC1vdmVybGF5IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRpbnNldDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm9ybWFsKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stb3BxKTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluO1xufVxuXG4uZW5kLWdhbWUtbW9kYWwge1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHR3aWR0aDogMzAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZW5kLWdhbWUtbW9kYWwgaDEge1xuXHRmb250LXNpemU6IDMuNXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lbmQtZ2FtZS1tb2RhbCBoMiB7XG5cdGZvbnQtc2l6ZTogMi4zcmVtO1xufVxuXG4uZW5kLWdhbWUtbW9kYWwgc3BhbiB7XG5cdGNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcbn1cblxuLmVuZC1nYW1lLW1vZGFsIGJ1dHRvbiB7XG5cdGNvbG9yOiB2YXIoLS13aGl0ZS1mb250KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7O0NBR0MsVUFBVTtDQUNWLFNBQVM7Q0FDVCxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsbUNBQW1DO0NBQ25DLHdDQUF3QztDQUN4QyxpQ0FBaUM7Q0FDakMsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixxQkFBcUI7Q0FDckIsOEJBQThCO0NBQzlCLG1CQUFtQjtJQUNoQixxQkFBcUI7Q0FDeEIsMkJBQTJCO0NBQzNCLHFDQUFxQztDQUNyQyxtQ0FBbUM7QUFDcEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7OztBQUdBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtBQUNu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YUFBYTtDQUNiLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLGlDQUFpQztDQUNqQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQzp3Z2h0QDQwMDs3MDAmZmFtaWx5PUJsYWNrK09wcytPbmUmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWJsYWNrLW9wcTogcmdiYSg1MCwgNTAsIDY2LCAwLjgpO1xcblxcdC0tZ3JlZW4tb3BxOiByZ2JhKDc5LCAyMjAsIDc0LCAwLjgpO1xcblxcdC0tZGFyay1ncmVlbi1vcHE6IHJnYmEoNDksIDEzNCwgNDYsIDAuOCk7XFxuXFx0LS1yZWQtb3BxOiByZ2JhKDI1NSwgMzgsIDM4LCAwLjgpO1xcblxcdC0tZGFyay1mb250OiAjMjAyMDI1O1xcblxcdC0tZGFyay1ibHVlOiAjMWIxYjI5O1xcblxcdC0td2hpdGUtZm9udDogI2ZjZGVjMztcXG5cXHQtLWJsdWUtY2xyOiByZ2IoODgsIDE1OSwgMjQxKSA7XFxuXFx0LS1saWdodC1iZzogI2UxZmFlMTtcXG4gICAgLS1saWdodC1ncmF5OiAjYjNiM2I0O1xcblxcdC0tcmVkLWNscjogcmdiKDIwMiwgMTYsIDE2KTtcXG5cXHQtLWZvbnQtYk9wczogXFxcIkJsYWNrIE9wcyBPbmVcXFwiLCBjdXJzaXZlO1xcblxcdC0tZm9udC1ub3JtYWw6IFxcXCJBbWF0aWMgU0NcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4qOjpzZWxlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFx0XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUtZm9udCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbm9ybWFsKTtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zIGVhc2UtaW47XFxuXFx0Ym9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzNiO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogU3RhcnQgTWVudSBTdHlsaW5nICovXFxuLyoqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLm92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRvdmVyZmxvdzogc2Nyb2xsO1xcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLW9wcSk7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstZm9udCk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLm1vZGFsIHtcXG5cXHR3aWR0aDogNTcwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmcpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlci1jb250YWluZXIge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vcm1hbCk7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciBoMSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHNwYW4ge1xcblxcdGNvbG9yOiB2YXIoLS1yZWQtY2xyKTtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXIgYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmFuZG9tLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDkwZGVnLFxcbiAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDAlLFxcbiAgICAgICAgcmdiYSgyNTUsIDE1NCwgMCwgMSkgMTAlLFxcbiAgICAgICAgcmdiYSgyMDgsIDIyMiwgMzMsIDEpIDIwJSxcXG4gICAgICAgIHJnYmEoNzksIDIyMCwgNzQsIDEpIDMwJSxcXG4gICAgICAgIHJnYmEoNjMsIDIxOCwgMjE2LCAxKSA0MCUsXFxuICAgICAgICByZ2JhKDQ3LCAyMDEsIDIyNiwgMSkgNTAlLFxcbiAgICAgICAgcmdiYSgyOCwgMTI3LCAyMzgsIDEpIDYwJSxcXG4gICAgICAgIHJnYmEoOTUsIDIxLCAyNDIsIDEpIDcwJSxcXG4gICAgICAgIHJnYmEoMTg2LCAxMiwgMjQ4LCAxKSA4MCUsXFxuICAgICAgICByZ2JhKDI1MSwgNywgMjE3LCAxKSA5MCUsXFxuICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMSkgMTAwJVxcbiAgICApO1xcbn1cXG5cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmFuZG9tLWJ0bjpob3ZlcixcXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmFuZG9tLWJ0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAgIDI3MGRlZyxcXG4gICAgICAgIHJnYmEoMjU1LCAwLCAwLCAxKSAwJSxcXG4gICAgICAgIHJnYmEoMjU1LCAxNTQsIDAsIDEpIDEwJSxcXG4gICAgICAgIHJnYmEoMjA4LCAyMjIsIDMzLCAxKSAyMCUsXFxuICAgICAgICByZ2JhKDc5LCAyMjAsIDc0LCAxKSAzMCUsXFxuICAgICAgICByZ2JhKDYzLCAyMTgsIDIxNiwgMSkgNDAlLFxcbiAgICAgICAgcmdiYSg0NywgMjAxLCAyMjYsIDEpIDUwJSxcXG4gICAgICAgIHJnYmEoMjgsIDEyNywgMjM4LCAxKSA2MCUsXFxuICAgICAgICByZ2JhKDk1LCAyMSwgMjQyLCAxKSA3MCUsXFxuICAgICAgICByZ2JhKDE4NiwgMTIsIDI0OCwgMSkgODAlLFxcbiAgICAgICAgcmdiYSgyNTEsIDcsIDIxNywgMSkgOTAlLFxcbiAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDEwMCVcXG4gICAgKTtcXG59XFxuXFxuLm1vZGFsLWJ0bi1jb250YWluZXIgLnJlc2V0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jbHIpO1xcbn1cXG5cXG4ubW9kYWwtYnRuLWNvbnRhaW5lciAucmVzZXQtYnRuOmhvdmVyLFxcbi5tb2RhbC1idG4tY29udGFpbmVyIC5yZXNldC1idG46Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMSwgMjEpO1xcbn1cXG5cXG4ucGxhY2Utc2hpcC1ib2FyZCB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG5cXHRib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG5cXHRib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5wbGF5LWJ0biB7XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlO1xcblxcdGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uZW1wdHktY2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZm9udCk7XFxufVxcblxcbi5vY2N1cGllZC1jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuLW9wcSk7XFxufVxcblxcbi5hY3RpdmUtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLW9wcSk7XFxufVxcblxcbi5pbnZhbGlkLWNlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1vcHEpO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWNscik7XFxufVxcblxcbi5zdW5rZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE2LCAxNik7XFxufVxcblxcbi5oaWRlLW1vZGFsIHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZGlzYWJsZS1wb2ludGVyLWV2ZW50cyB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5ob3Zlci1iZzpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBHYW1lQm9hcmRzIFN0eWxpbmcgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0b3ZlcmZsb3cteVxcdDogc2Nyb2xsO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uZ2FtZS1oZWFkZXItY29udGFpbmVyIC5nYW1lLXRpdGxlIHtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJPcHMpO1xcblxcdGZvbnQtc2l6ZTogNC41cmVtO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZC1jb250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmRpc3BsYXktdHVybiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWZvbnQtYk9wcyk7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCApIHtcXG5cXHQuZ2FtZS1jb250YWluZXIge1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFx0LmdhbWUtYm9hcmQtY29udGFpbmVyIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG59XFxuXFxuLnBsYXllci1ib2FyZCxcXG4uZW5lbXktYm9hcmQge1xcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBtaW5tYXgoNTBweCwgMWZyKSk7XFxuXFx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIEVuZCBHYW1lIE1vZGFsIFN0eWxpbmcgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmVuZC1nYW1lLW1vZGFsLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRpbnNldDogMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW5vcm1hbCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stb3BxKTtcXG5cXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47XFxufVxcblxcbi5lbmQtZ2FtZS1tb2RhbCB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJnKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5lbmQtZ2FtZS1tb2RhbCBoMSB7XFxuXFx0Zm9udC1zaXplOiAzLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lbmQtZ2FtZS1tb2RhbCBoMiB7XFxuXFx0Zm9udC1zaXplOiAyLjNyZW07XFxufVxcblxcbi5lbmQtZ2FtZS1tb2RhbCBzcGFuIHtcXG5cXHRjb2xvcjogdmFyKC0tcmVkLWNscik7XFxufVxcblxcbi5lbmQtZ2FtZS1tb2RhbCBidXR0b24ge1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZS1mb250KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9NYWluL0NsYXNzZXMvR2FtZUNvbnRyb2xsZXJcIlxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZHMoKSB7XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnZ2FtZS1jb250YWluZXInXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2dhbWUtaGVhZGVyLWNvbnRhaW5lcidcbiAgICBjb25zdCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgZ2FtZVRpdGxlLmNsYXNzTmFtZSA9ICdnYW1lLXRpdGxlJ1xuICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQUydcbiAgICBjb25zdCBkaXNwbGF5VHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBkaXNwbGF5VHVybi5jbGFzc05hbWUgPSAnZGlzcGxheS10dXJuJ1xuICAgIGRpc3BsYXlUdXJuLmlkID0gJ2Rpc3BsYXktdHVybidcbiAgICBkaXNwbGF5VHVybi50ZXh0Q29udGVudCA9ICdJdFxcJ3MgWW91ciBUdXJuIFRvIEF0dGFjayEnXG4gICAgY29uc3QgZ2FtZUJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZ2FtZUJvYXJkcy5jbGFzc05hbWUgPSAnZ2FtZS1ib2FyZC1jb250YWluZXInXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHBsYXllckJvYXJkLmNsYXNzTmFtZSA9ICdwbGF5ZXItYm9hcmQnXG4gICAgcGxheWVyQm9hcmQuaWQgPSAgJ3BsYXllci1ib2FyZCdcbiAgICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbmVteUJvYXJkLmNsYXNzTmFtZSA9ICdlbmVteS1ib2FyZCdcbiAgICBlbmVteUJvYXJkLmlkID0gJ2VuZW15LWJvYXJkJ1xuXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemUgKiAxMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckNlbGxzID0gY3JlYXRlQ2VsbChpICUgMTAsIE1hdGguZmxvb3IoaSAvIDEwKSwgIHBsYXllckJvYXJkKVxuICAgICAgICBjb25zdCBlbmVteUNlbGxzID0gY3JlYXRlQ2VsbChpICUgMTAsIE1hdGguZmxvb3IoaSAvIDEwKSwgZW5lbXlCb2FyZClcblxuICAgICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJDZWxscylcbiAgICAgICAgZW5lbXlCb2FyZC5hcHBlbmRDaGlsZChlbmVteUNlbGxzKVxuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnYW1lVGl0bGUpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpc3BsYXlUdXJuKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgZ2FtZUJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZClcbiAgICBnYW1lQm9hcmRzLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZHMpXG4gICAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjcmVhdGVDZWxsKHgsIHksIHRhcmdldENlbGwpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjZWxsLmNsYXNzTmFtZSA9ICdzcXVhcmUnXG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci1iZycpXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYCR7eH1gKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBgJHt5fWApO1xuXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgR2FtZS5hdHRhY2soeCwgeSwgdGFyZ2V0Q2VsbClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNlbGxcbn1cblxuZXhwb3J0IHsgY3JlYXRlQm9hcmRzIH0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vTWFpbi9DbGFzc2VzL0dhbWVDb250cm9sbGVyLmpzXCI7XG5cblx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG92ZXJsYXkuY2xhc3NOYW1lID0gXCJlbmQtZ2FtZS1tb2RhbC1vdmVybGF5XCI7XG5cdG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZS1tb2RhbCcpXG5cdGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bW9kYWwuY2xhc3NOYW1lID0gXCJlbmQtZ2FtZS1tb2RhbFwiO1xuXHRjb25zdCBnYW1lT3ZlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGdhbWVPdmVyVGV4dC50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyXCI7XG5cdGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdHdpbm5lclRleHQuaW5uZXJIVE1MID0gYFxuICAgIEdhbWUgV2lubmVyOiBcbiAgICA8c3Bhbj5QbGF5ZXIhPC9zcGFuPlxuICAgIGA7XG5cdGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRyZXN0YXJ0QnV0dG9uLmNsYXNzTmFtZSA9IFwicmVzdGFydC1idG5cIjtcbiAgICByZXN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYXkgQWdhaW4/J1xuXG5cbiAgICBtb2RhbC5hcHBlbmQoZ2FtZU92ZXJUZXh0KVxuICAgIG1vZGFsLmFwcGVuZCh3aW5uZXJUZXh0KVxuXHRtb2RhbC5hcHBlbmQocmVzdGFydEJ1dHRvbilcbiAgICBvdmVybGF5LmFwcGVuZChtb2RhbClcblxuXHRyZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdEdhbWUucmVzdGFydEdhbWUoKVxuXHR9KVxuXG5cdGV4cG9ydCB7IG92ZXJsYXksIHdpbm5lclRleHQgfVxuXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vTWFpbi9DbGFzc2VzL0dhbWVDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgQm9hcmRDb250cm9sbGVyIGZyb20gXCIuLi9NYWluL0NsYXNzZXMvQm9hcmRDb250cm9sbGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHN0YXJ0TWVudSgpIHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcblx0Y29uc3Qgc3RhcnRHYW1lTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdGFydEdhbWVNb2RhbC5jbGFzc05hbWUgPSBcIm92ZXJsYXlcIjtcblx0c3RhcnRHYW1lTW9kYWwuaWQgPSBcIm92ZXJsYXlcIjtcblxuXHRzdGFydEdhbWVNb2RhbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxPlBsYXkgQmF0dGxlc2hpcCE8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cIm1vZGFsLWhlYWRlclwiPlBsYWNlIFlvdXIgPHNwYW4+Q2FycmllciE8L3NwYW4+PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmFuZG9tLWJ0blwiIGlkPVwicmFuZG9tLWJ0blwiPlJhbmRvbTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hhbmdlLW9yaWVudGF0aW9uLWJ0blwiIGlkPVwiY2hhbmdlLW9yaWVudGF0aW9uLWJ0blwiPlJvdGF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXQtYnRuXCIgaWQ9XCJyZXNldC1idG5cIj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Utc2hpcC1ib2FyZFwiIGlkPVwicGxhY2Utc2hpcC1ib2FyZFwiPlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwicGxheS1idG5cIiBpZD1cInBsYXktYnRuXCI+UGxheSE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5gO1xuXG5cdGNvbnN0IGludHJvQm9hcmQgPSBzdGFydEdhbWVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlLXNoaXAtYm9hcmRcIik7XG5cdGNvbnN0IGNoYW5nZU9yaWVudGF0aW9uQnV0dG9uID0gc3RhcnRHYW1lTW9kYWwucXVlcnlTZWxlY3Rvcihcblx0XHRcIiNjaGFuZ2Utb3JpZW50YXRpb24tYnRuXCJcblx0KTtcblx0Y29uc3QgcmVzZXRCdXR0b24gPSBzdGFydEdhbWVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3Jlc2V0LWJ0blwiKTtcblx0Y29uc3QgcmFuZG9tU2hpcHNCdXR0b24gPSBzdGFydEdhbWVNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbS1idG5cIik7XG5cdGNvbnN0IHBsYXlHYW1lQnV0dG9uID0gc3RhcnRHYW1lTW9kYWwucXVlcnlTZWxlY3RvcihcIiNwbGF5LWJ0blwiKTtcblxuXHRjaGFuZ2VPcmllbnRhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdEdhbWUuaXNWZXJ0aWNhbCA9ICFHYW1lLmlzVmVydGljYWw7XG5cdH0pO1xuXG5cdHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEJvYXJkKTtcblxuXHRyYW5kb21TaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHBsYWNlUmFuZG9tU2hpcHMoaW50cm9Cb2FyZCk7XG5cdH0pO1xuXG5cdHBsYXlHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiAxMDsgaSsrKSB7XG5cdFx0Y29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRzcXVhcmUuY2xhc3NOYW1lID0gXCJzcXVhcmVcIjtcblx0XHRzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGAke2kgJSAxMH1gKTtcblx0XHRzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGAke01hdGguZmxvb3IoaSAvIDEwKX1gKTtcblx0XHRpbnRyb0JvYXJkLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBzcXVhcmUpO1xuXG5cdFx0c3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKEdhbWUuc2hpcEluZGV4ID4gR2FtZS51c2VyLnNoaXBzLmxlbmd0aCAtIDEpIHJldHVybjtcblx0XHRcdGFjdGl2ZVNxdWFyZS5jYWxsKHRoaXMsIGludHJvQm9hcmQsIGZ1bmN0aW9uICh0YXJnZXRDZWxsKSB7XG5cdFx0XHRcdGlmICh0YXJnZXRDZWxsLmNsYXNzTGlzdC5jb250YWlucyhcIm9jY3VwaWVkLWNlbGxcIikpIHtcblx0XHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWNlbGxcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWNlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKEdhbWUuc2hpcEluZGV4ID4gR2FtZS51c2VyLnNoaXBzLmxlbmd0aCAtIDEpIHJldHVybjtcblx0XHRcdGFjdGl2ZVNxdWFyZS5jYWxsKHRoaXMsIGludHJvQm9hcmQsIGZ1bmN0aW9uICh0YXJnZXRDZWxsKSB7XG5cdFx0XHRcdGlmICh0YXJnZXRDZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1jZWxsXCIpKSB7XG5cdFx0XHRcdFx0dGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWNlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW52YWxpZC1jZWxsXCIpKSB7XG5cdFx0XHRcdFx0dGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZC1jZWxsXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChHYW1lLnNoaXBJbmRleCA+IEdhbWUudXNlci5zaGlwcy5sZW5ndGggLSAxKSByZXR1cm47XG5cdFx0XHRzZXRVcFNoaXBzLmNhbGwodGhpcywgaW50cm9Cb2FyZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gcm9vdC5hcHBlbmRDaGlsZChzdGFydEdhbWVNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNoaXBOYW1lKCkge1xuXHRjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtaGVhZGVyXCIpO1xuXG5cdGlmIChHYW1lLnNoaXBJbmRleCA8IEdhbWUudXNlci5zaGlwcy5sZW5ndGgpIHtcblx0XHRzaGlwTmFtZS5pbm5lckhUTUwgPSBgUGxhY2UgWW91ciA8c3Bhbj4ke1xuXHRcdFx0R2FtZS51c2VyLnNoaXBzW0dhbWUuc2hpcEluZGV4XS5uYW1lXG5cdFx0fSE8L3NwYW4+YDtcblx0fSBlbHNlIHtcblx0XHRzaGlwTmFtZS50ZXh0Q29udGVudCA9IGBTdGFydCB0aGUgR2FtZSFgO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZVNxdWFyZShpbnRyb0JvYXJkLCBjZWxsQ2FsbGJhY2spIHtcblx0Y29uc3QgeCA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC54KTtcblx0Y29uc3QgeSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC55KTtcblxuXHRpZiAoR2FtZS5pc1ZlcnRpY2FsKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lLnVzZXIuc2hpcHNbR2FtZS5zaGlwSW5kZXhdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoeSArIGkgPCAxMCkge1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IHkgKiAxMCArIHg7XG5cdFx0XHRcdGNvbnN0IHRhcmdldENlbGwgPSBpbnRyb0JvYXJkLmNoaWxkcmVuW2luZGV4ICsgaSAqIDEwXTtcblx0XHRcdFx0Y2VsbENhbGxiYWNrKHRhcmdldENlbGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IEdhbWUudXNlci5zaGlwc1tHYW1lLnNoaXBJbmRleF0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh4ICsgaSA8IDEwKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldENlbGwgPSBpbnRyb0JvYXJkLmNoaWxkcmVuW3kgKiAxMCArIHggKyBpXTtcblx0XHRcdFx0Y2VsbENhbGxiYWNrKHRhcmdldENlbGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRVcFNoaXBzKGludHJvQm9hcmQpIHtcblx0Y29uc3QgeCA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC54KTtcblx0Y29uc3QgeSA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC55KTtcblxuXHRpZiAoXG5cdFx0R2FtZS51c2VyLnBsYXllckJvYXJkLnBsYWNlU2hpcChcblx0XHRcdEdhbWUudXNlci5zaGlwc1tHYW1lLnNoaXBJbmRleF0sXG5cdFx0XHR5LFxuXHRcdFx0eCxcblx0XHRcdEdhbWUuaXNWZXJ0aWNhbFxuXHRcdClcblx0KSB7XG5cdFx0aWYgKEdhbWUuaXNWZXJ0aWNhbCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lLnVzZXIuc2hpcHNbR2FtZS5zaGlwSW5kZXhdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh5ICsgaSA8IDEwKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSB5ICogMTAgKyB4O1xuXHRcdFx0XHRcdGNvbnN0IHRhcmdldENlbGwgPSBpbnRyb0JvYXJkLmNoaWxkcmVuW2luZGV4ICsgaSAqIDEwXTtcblx0XHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZC1jZWxsXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZS51c2VyLnNoaXBzW0dhbWUuc2hpcEluZGV4XS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoeCArIGkgPCAxMCkge1xuXHRcdFx0XHRcdGNvbnN0IHRhcmdldENlbGwgPSBpbnRyb0JvYXJkLmNoaWxkcmVuW3kgKiAxMCArIHggKyBpXTtcblx0XHRcdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZC1jZWxsXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGFjdGl2ZVNxdWFyZS5jYWxsKHRoaXMsIGludHJvQm9hcmQsIGZ1bmN0aW9uICh0YXJnZXRDZWxsKSB7XG5cdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY2VsbFwiKTtcblx0XHR9KTtcblx0XHRHYW1lLnNoaXBJbmRleCArPSAxO1xuXHRcdGNoYW5nZVNoaXBOYW1lKCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVzZXRCb2FyZCgpIHtcblx0Y29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxhY2Utc2hpcC1ib2FyZCBkaXZcIik7XG5cdEdhbWUudXNlci5wbGF5ZXJCb2FyZC5pbml0KCk7XG5cdEdhbWUuc2hpcEluZGV4ID0gMDtcblx0Y2hhbmdlU2hpcE5hbWUoKTtcblxuXHRzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuXHRcdHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwib2NjdXBpZWQtY2VsbFwiKTtcblx0fSk7XG5cdC8vIGNvbnNvbGUudGFibGUoc3F1YXJlcylcblx0Ly8gY29uc29sZS50YWJsZShHYW1lLnBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZClcbn1cblxuZnVuY3Rpb24gcGxhY2VSYW5kb21TaGlwcyhpbnRyb0JvYXJkKSB7XG5cdGNvbnN0IHBsYXllckJvYXJkID0gR2FtZS51c2VyLnBsYXllckJvYXJkLmJvYXJkO1xuXHRyZXNldEJvYXJkKCk7XG5cdEdhbWUudXNlci5wbGFjZVJhbmRvbVNoaXBzKCk7XG5cdEdhbWUuc2hpcEluZGV4ID0gR2FtZS51c2VyLnNoaXBzLmxlbmd0aDtcblx0Y2hhbmdlU2hpcE5hbWUoKTtcblxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IHBsYXllckJvYXJkLmxlbmd0aDsgeSsrKSB7XG5cdFx0Zm9yIChsZXQgeCA9IDA7IHggPCBwbGF5ZXJCb2FyZC5sZW5ndGg7IHgrKykge1xuXHRcdFx0aWYgKHBsYXllckJvYXJkW3ldW3hdKSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldENlbGwgPSBpbnRyb0JvYXJkLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFx0YFtkYXRhLXg9JyR7eH0nXVtkYXRhLXk9JyR7eX0nXWBcblx0XHRcdFx0KTtcblx0XHRcdFx0dGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwib2NjdXBpZWQtY2VsbFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gY29uc29sZS50YWJsZShHYW1lLnBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG5cdGNvbnN0IHR1cm5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXktdHVybicpXG5cblx0aWYgKEdhbWUuc2hpcEluZGV4IDwgR2FtZS51c2VyLnNoaXBzLmxlbmd0aCkgcmV0dXJuO1xuXG5cdG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW1vZGFsXCIpO1xuXHRcblx0Y29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWJvYXJkJylcblx0Y29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmVteS1ib2FyZCcpXG5cdFxuXHRjb25zdCBwbGF5ZXJPbmUgPSBuZXcgQm9hcmRDb250cm9sbGVyKEdhbWUudXNlciwgcGxheWVyQm9hcmQpXG5cdGNvbnN0IHBsYXllclR3byA9IG5ldyBCb2FyZENvbnRyb2xsZXIoR2FtZS5BSSwgZW5lbXlCb2FyZClcblxuXHRHYW1lLnNldFVwR2FtZShcblx0XHRwbGF5ZXJPbmUsXG5cdFx0cGxheWVyVHdvLFxuXHRcdHR1cm5EaXNwbGF5XG5cdClcblxuXHQvLyBjb25zb2xlLnRhYmxlKHBsYXllck9uZS5wbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQpO1xuXHQvLyBjb25zb2xlLnRhYmxlKHBsYXllclR3by5wbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQpXG59XG5cbmV4cG9ydCB7IHN0YXJ0TWVudSB9O1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BsYXllcn0gcGxheWVyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBib2FyZFZpZXcgXG4gICAgICovXG5cbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGJvYXJkVmlldykge1xuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllclxuICAgICAgICB0aGlzLmJvYXJkVmlldyA9IGJvYXJkVmlld1xuICAgIH1cblxuICAgIHNob3dCb2FyZFNoaXBzKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Qm9hcmQgPSB0aGlzLnBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZFxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY3VycmVudEJvYXJkLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGN1cnJlbnRCb2FyZC5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Qm9hcmRbeV1beF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IHRoaXMuYm9hcmRWaWV3LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHt5fSddYFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJvY2N1cGllZC1jZWxsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLXBvaW50ZXItZXZlbnRzJylcbiAgICB9XG5cbiAgICBkaXNhYmxlQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmRWaWV3LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtcG9pbnRlci1ldmVudHMnKVxuICAgIH1cbn0iLCJpbXBvcnQgQm9hcmRDb250cm9sbGVyIGZyb20gXCIuL0JvYXJkQ29udHJvbGxlclwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IG92ZXJsYXksIHdpbm5lclRleHQgfSBmcm9tIFwiLi4vLi4vR2FtZS9FbmRHYW1lTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cdHN0YXRpYyB1c2VyID0gbmV3IFBsYXllcihcIlBsYXllclwiLCBbXG5cdFx0bmV3IFNoaXAoNSwgXCJDYXJyaWVyXCIpLFxuXHRcdG5ldyBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKSxcblx0XHRuZXcgU2hpcCgzLCBcIkRlc3Ryb3llclwiKSxcblx0XHRuZXcgU2hpcCgzLCBcIlN1Ym1hcmluZVwiKSxcblx0XHRuZXcgU2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpLFxuXHRdKTtcblxuXHRzdGF0aWMgQUkgPSBuZXcgUGxheWVyKFwiQUlcIiwgW1xuXHRcdG5ldyBTaGlwKDUsIFwiQ2FycmllclwiKSxcblx0XHRuZXcgU2hpcCg0LCBcIkJhdHRsZXNoaXBcIiksXG5cdFx0bmV3IFNoaXAoMywgXCJEZXN0cm95ZXJcIiksXG5cdFx0bmV3IFNoaXAoMywgXCJTdWJtYXJpbmVcIiksXG5cdFx0bmV3IFNoaXAoMiwgXCJQYXRyb2wgQm9hdFwiKSxcblx0XSk7XG5cblx0c3RhdGljIHNoaXBJbmRleCA9IDA7XG5cdHN0YXRpYyBpc1ZlcnRpY2FsID0gdHJ1ZTtcblx0c3RhdGljIGlzR2FtZU92ZXIgPSBmYWxzZTtcblx0LyoqQHR5cGUge0JvYXJkQ29udHJvbGxlcn0gKi9cblx0c3RhdGljIGNvbnRyb2xsZXIxIDtcblx0IC8qKkB0eXBlIHtCb2FyZENvbnRyb2xsZXJ9ICovXG5cdHN0YXRpYyBjb250cm9sbGVyMjtcblx0LyoqQHR5cGUge0JvYXJkQ29udHJvbGxlcn0gKi9cblx0c3RhdGljIGN1cnJlbnQ7XG5cdHN0YXRpYyB0dXJuRGlzcGxheTtcblxuXHRzdGF0aWMgc2V0VXBHYW1lKGNvbnRyb2xsZXIxLCBjb250cm9sbGVyMiwgdHVybkRpc3BsYXkpIHtcblx0XHR0aGlzLmNvbnRyb2xsZXIxID0gY29udHJvbGxlcjE7XG5cdFx0dGhpcy5jb250cm9sbGVyMiA9IGNvbnRyb2xsZXIyO1xuXHRcdHRoaXMuY3VycmVudCA9IGNvbnRyb2xsZXIxO1xuXHRcdHRoaXMudHVybkRpc3BsYXkgPSB0dXJuRGlzcGxheVxuXG5cdFx0dGhpcy5BSS5wbGFjZVJhbmRvbVNoaXBzKCk7XG5cdFx0Y29udHJvbGxlcjEuc2hvd0JvYXJkU2hpcHMoKTtcblx0XHRjb250cm9sbGVyMS5kaXNhYmxlQm9hcmQoKTtcblx0fVxuXG5cdHN0YXRpYyBjaGFuZ2VUdXJuKCkge1xuXHRcdGNvbnN0IG90aGVyID0gdGhpcy5jdXJyZW50O1xuXHRcdGNvbnN0IGN1cnJlbnQgPVxuXHRcdFx0dGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbnRyb2xsZXIxID8gdGhpcy5jb250cm9sbGVyMiA6IHRoaXMuY29udHJvbGxlcjE7XG5cdFx0XG5cdFx0aWYgKGN1cnJlbnQucGxheWVyLm5hbWUgPT09IFwiQUlcIikge1xuXHRcdFx0b3RoZXIuZGlzYWJsZUJvYXJkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG90aGVyLmVuYWJsZUJvYXJkKClcblx0XHR9XG5cblx0XHR0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQuZGlzYWJsZUJvYXJkKCk7XG5cblx0XHRpZiAoY3VycmVudC5wbGF5ZXIubmFtZSA9PT0gXCJBSVwiKSB7XG5cdFx0XHR0aGlzLnR1cm5EaXNwbGF5LnRleHRDb250ZW50ID0gJ0l0XFwncyB0aGUgZW5lbXlcXCdzIHR1cm4hJ1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlQUlBdHRhY2soKVxuXHRcdFx0fSwgNTAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50dXJuRGlzcGxheS50ZXh0Q29udGVudCA9ICdJdFxcJ3MgeW91ciB0dXJuISdcblx0XHR9XG5cdFx0XHRcblx0fVxuXG5cdHN0YXRpYyBoYW5kbGVBSUF0dGFjaygpIHtcblx0XHRjb25zdCBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuXHRcdGNvbnN0IHRhcmdldCA9XG5cdFx0XHR0aGlzLmN1cnJlbnQgPT09IHRoaXMuY29udHJvbGxlcjEgPyB0aGlzLmNvbnRyb2xsZXIyIDogdGhpcy5jb250cm9sbGVyMTtcblx0XHRjb25zdCB0YXJnZXRCb2FyZCA9IHRhcmdldC5wbGF5ZXIucGxheWVyQm9hcmRcblx0XHRjb25zdCBhaUF0dGFja1Jlc3VsdCA9IGN1cnJlbnQucGxheWVyLnJhbmRvbUF0dGFjayh0YXJnZXRCb2FyZCk7XG5cdFx0Y29uc3QgdGFyZ2V0WCA9IGFpQXR0YWNrUmVzdWx0Lnhcblx0XHRjb25zdCB0YXJnZXRZID0gYWlBdHRhY2tSZXN1bHQueVxuXHRcdHRoaXMuYXR0YWNrKHRhcmdldFksIHRhcmdldFgsIHRhcmdldC5ib2FyZFZpZXcsIGFpQXR0YWNrUmVzdWx0LnJlc3VsdClcdFx0XG5cblx0XHQvLyBjb25zb2xlLmxvZyhhaUF0dGFja1Jlc3VsdC5yZXN1bHQpXG5cdFx0Ly8gY29uc29sZS50YWJsZSh0YXJnZXQucGxheWVyLnBsYXllckJvYXJkLmJvYXJkKVxuXHRcdFxuXHRcdGlmIChcblx0XHRcdGFpQXR0YWNrUmVzdWx0LnJlc3VsdCA9PT0gXCJIaXRcIiB8fFxuXHRcdFx0YWlBdHRhY2tSZXN1bHQucmVzdWx0ID09PSBcIkFscmVhZHkgQXR0YWNrZWRcIiB8fFxuXHRcdFx0YWlBdHRhY2tSZXN1bHQucmVzdWx0ID09PSBcIlN1bmtlZFwiXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmhhbmRsZUFJQXR0YWNrKClcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXR0YWNrKHgsIHksIHRhcmdldEJvYXJkLCByZXN1bHQpIHtcblx0XHRpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XG5cblx0XHRjb25zdCB0YXJnZXQgPVxuXHRcdFx0dGhpcy5jdXJyZW50ID09PSB0aGlzLmNvbnRyb2xsZXIxID8gdGhpcy5jb250cm9sbGVyMiA6IHRoaXMuY29udHJvbGxlcjE7XG5cdFx0Y29uc3QgdGFyZ2V0Q2VsbCA9IHRhcmdldEJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRgW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5fVwiXWBcblx0XHQpXG5cdFx0bGV0IGF0dGFja1Jlc3VsdDtcblx0XHRcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRhdHRhY2tSZXN1bHQgPSByZXN1bHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXR0YWNrUmVzdWx0ID0gdGFyZ2V0LnBsYXllci5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpXG5cdFx0fVxuXG5cdFx0aWYgKGF0dGFja1Jlc3VsdCA9PT0gXCJBbHJlYWR5IEF0dGFja2VkXCIpIHJldHVybjtcblxuXHRcdGlmIChhdHRhY2tSZXN1bHQgPT09IFwiTWlzc2VkXCIpIHtcblx0XHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKTtcblx0XHRcdHRhcmdldENlbGwudGV4dENvbnRlbnQgPSBcIn5cIjtcblx0XHRcdHRoaXMuY2hhbmdlVHVybigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWNlbGxcIik7XG5cdFx0XHR0YXJnZXRDZWxsLnRleHRDb250ZW50ID0gXCIrXCI7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldC5wbGF5ZXIuY2hlY2tBbGxTaGlwcygpKSB7XG5cdFx0XHR0aGlzLmdhbWVJc092ZXIoKVxuXHRcdH1cblxuXHRcdHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1wb2ludGVyLWV2ZW50cycpXHRcblx0fVxuXG5cdHN0YXRpYyBnYW1lSXNPdmVyKCkge1xuXHRcdHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG5cdFx0b3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLW1vZGFsJylcblx0XHR3aW5uZXJUZXh0LmlubmVySFRNTCA9YFxuXHRcdEdhbWUgV2lubmVyOiBcblx0XHQ8c3Bhbj4ke3RoaXMuY3VycmVudC5wbGF5ZXIubmFtZX08L3NwYW4+XG5cdFx0YDtcblx0fVxuXG5cdHN0YXRpYyByZXN0YXJ0R2FtZSgpIHtcblx0XHR0aGlzLmlzR2FtZU92ZXIgPSB0cnVlXG5cdFx0b3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRlLW1vZGFsJylcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcblx0fVxufVxuIiwiY29uc3QgU0laRSA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJvYXJkID0gW107XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgU0laRTsgaSsrKSB7XG5cdFx0XHR0aGlzLmJvYXJkW2ldID0gW107XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IFNJWkU7IGorKykge1xuXHRcdFx0XHR0aGlzLmJvYXJkW2ldW2pdID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwbGFjZVNoaXAoc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpIHtcblx0XHRpZiAoIXRoaXMuaXNWYWxpZFBsYWNlbWVudChzaGlwLCByb3csIGNvbHVtbiwgaXNWZXJ0aWNhbCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoaXNWZXJ0aWNhbCkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXSA9IHNoaXA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmJvYXJkW3Jvd11bY29sdW1uICsgaV0gPSBzaGlwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpIHtcblx0XHQvLyBpZiBzaGlwIGlzIG91dCBvZiBib3VuZHNcblx0XHRpZiAocm93ID49IFNJWkUgfHwgY29sdW1uID49IFNJWkUgfHwgcm93IDwgMCB8fCBjb2x1bW4gPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgc2hpcCBkb2VzIG5vdCBmaXQgdGhlIGdhbWVib2FyZFxuXHRcdGlmIChpc1ZlcnRpY2FsKSB7XG5cdFx0XHRpZiAocm93ICsgc2hpcC5sZW5ndGggPiBTSVpFKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIGlmIGEgc2hpcCBpcyBhbHJlYWR5IGluIHBsYWNlXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRoaXMuYm9hcmRbcm93ICsgaV1bY29sdW1uXSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY29sdW1uICsgc2hpcC5sZW5ndGggPiBTSVpFKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbiArIGldKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKSB7XG5cdFx0aWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dID09PSBcIlhcIikgcmV0dXJuIFwiQWxyZWFkeSBBdHRhY2tlZFwiO1xuXG5cdFx0aWYgKCF0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSkge1xuXHRcdFx0dGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0gPSBcIlhcIjtcblx0XHRcdHJldHVybiAnTWlzc2VkJ1xuXHRcdH1cblxuXHRcdGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXTtcblx0XHR0aGlzLmJvYXJkW3Jvd11bY29sdW1uXSA9IFwiWFwiO1xuXHRcdHJldHVybiBzaGlwLmhpdCgpO1xuXHR9XG5cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHNoaXBzID0gW10pIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cdFx0dGhpcy5zaGlwcyA9IHNoaXBzO1xuXHR9XG5cblx0YXR0YWNrKHJvdywgY29sdW1uLCBlbmVteUJvYXJkKSB7XG5cdFx0cmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG5cdH1cblxuXHRyYW5kb21BdHRhY2soIGVuZW15Qm9hcmQpIHtcblx0XHRjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblx0XHRjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuXHRcdGNvbnN0IGF0dGFja2VkID0gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVJvdywgcmFuZG9tQ29sdW1uKTtcblxuXHRcdGlmIChhdHRhY2tlZCA9PT0gXCJBbHJlYWR5IEF0dGFja2VkXCIpIHtcblx0XHRcdHJldHVybiB0aGlzLnJhbmRvbUF0dGFjayhlbmVteUJvYXJkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHsgeCA6cmFuZG9tUm93LCB5OiByYW5kb21Db2x1bW4sIHJlc3VsdDogYXR0YWNrZWQgfTtcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRwbGFjZVJhbmRvbVNoaXBzKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7ICkge1xuXHRcdFx0Y29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0Y29uc3QgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0Y29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuXHRcdFx0Y29uc3Qgc2hpcCA9IHRoaXMuc2hpcHNbaV07XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG5cdFx0XHRcdFx0c2hpcCxcblx0XHRcdFx0XHRyYW5kb21Sb3csXG5cdFx0XHRcdFx0cmFuZG9tQ29sdW1uLFxuXHRcdFx0XHRcdHJhbmRvbU9yaWVudGF0aW9uXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRpICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tBbGxTaGlwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuXHRjb25zdHJ1Y3RvcihsZW5ndGgsbmFtZSA9ICdTaGlwJykge1xuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuXHRcdHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcblx0fVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxXG4gICAgICAgIHJldHVybiB0aGlzLmlzU3VuaygpID8gJ1N1bmtlZCcgOiAnSGl0J1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGhcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVCb2FyZHMgfSBmcm9tIFwiLi9HYW1lL0JvYXJkLmpzXCI7XG5pbXBvcnQgeyBzdGFydE1lbnUgfSBmcm9tIFwiLi9HYW1lL1N0YXJ0TWVudS5qc1wiO1xuaW1wb3J0IHtvdmVybGF5fSBmcm9tIFwiLi9HYW1lL0VuZEdhbWVNb2RhbC5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuXHRzdGFydE1lbnUoKVxuXHRyb290LmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkcygpKVxuXHRyb290LmFwcGVuZENoaWxkKG92ZXJsYXkpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=