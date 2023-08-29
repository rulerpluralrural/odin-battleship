/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main/Gameboard.js":
/*!*******************************!*\
  !*** ./src/Main/Gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/Main/Ship.js");


const SIZE = 10

class Gameboard {
	constructor() {
		this.board = [];
		this.missedShots = [];
		this.init();
	}

	init() {
		for (let i = 0; i < SIZE; i++) {
			this.board[i] = [];
			this.missedShots[i] = [];
			for (let j = 0; j < SIZE; j++) {
				this.board[i][j] = null;
				this.missedShots[i][j] = false;
			}
		}
	}

	placeShip(ship, x, y, isVertical) {

		if (!this.isValidPlacement(ship, x, y, isVertical)) {
            return false;
        }

		if (isVertical) { 
			for (let i = 0; i < ship.length; i++) {
				this.board[y + i][x] = ship;
			}
		} else {
			for (let i = 0; i < ship.length; i++) {
				this.board[y][x + i] = ship;
			}
		}
		return true;
	}

	isValidPlacement(ship, x, y, isVertical) {

        // if ship is out of bounds
		if (y >= SIZE || x >= SIZE || y < 0 || x < 0) {
            return false
		}

        // if ship does not fit the gameboard
		if (isVertical) {
            if (y + ship.length > SIZE) {
                return false
            }
		} else {
            if (x + ship.length > SIZE) {
                return false
            }
        }

        // if a ship is already in place
        for (let i = 0; i < ship.length; i++) {
            if (this.board[y + i][x]) {
                return false
            }
        }
        for (let i = 0; i < ship.length; i++) {
            if (this.board[y][x + i]) {
                return false
            }
        }

        return true
	}

	receivedAttack(x, y) {
        if (this.board[y][x] === 'X') return 'Already Attacked'

        if (!this.board[y][x]) {
            this.board[y][x] = 'X'
            return this.missedShots[y][x] = true
        }

        this.board[y][x] = 'X'
        return this.board[y][x].hit()
    }
}


/***/ }),

/***/ "./src/Main/Ship.js":
/*!**************************!*\
  !*** ./src/Main/Ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
	}

    hit(){
        this.hits += 1
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main/Gameboard.js */ "./src/Main/Gameboard.js");



const gameboard = new _Main_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
console.table(gameboard.board)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7O0FBRTdCOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixVQUFVO0FBQzVCO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBLElBQUk7QUFDSixtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7O0FBRzVDLHNCQUFzQiwwREFBUztBQUMvQiw4QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9NYWluL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvTWFpbi9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmNvbnN0IFNJWkUgPSAxMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJvYXJkID0gW107XG5cdFx0dGhpcy5taXNzZWRTaG90cyA9IFtdO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IFNJWkU7IGkrKykge1xuXHRcdFx0dGhpcy5ib2FyZFtpXSA9IFtdO1xuXHRcdFx0dGhpcy5taXNzZWRTaG90c1tpXSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBTSVpFOyBqKyspIHtcblx0XHRcdFx0dGhpcy5ib2FyZFtpXVtqXSA9IG51bGw7XG5cdFx0XHRcdHRoaXMubWlzc2VkU2hvdHNbaV1bal0gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwbGFjZVNoaXAoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuXG5cdFx0aWYgKCF0aGlzLmlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG5cdFx0aWYgKGlzVmVydGljYWwpIHsgXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5ib2FyZFt5ICsgaV1beF0gPSBzaGlwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5ib2FyZFt5XVt4ICsgaV0gPSBzaGlwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlzVmFsaWRQbGFjZW1lbnQoc2hpcCwgeCwgeSwgaXNWZXJ0aWNhbCkge1xuXG4gICAgICAgIC8vIGlmIHNoaXAgaXMgb3V0IG9mIGJvdW5kc1xuXHRcdGlmICh5ID49IFNJWkUgfHwgeCA+PSBTSVpFIHx8IHkgPCAwIHx8IHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2Vcblx0XHR9XG5cbiAgICAgICAgLy8gaWYgc2hpcCBkb2VzIG5vdCBmaXQgdGhlIGdhbWVib2FyZFxuXHRcdGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAoeSArIHNoaXAubGVuZ3RoID4gU0laRSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXHRcdH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoeCArIHNoaXAubGVuZ3RoID4gU0laRSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYSBzaGlwIGlzIGFscmVhZHkgaW4gcGxhY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5ICsgaV1beF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3ggKyBpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcblx0fVxuXG5cdHJlY2VpdmVkQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT09ICdYJykgcmV0dXJuICdBbHJlYWR5IEF0dGFja2VkJ1xuXG4gICAgICAgIGlmICghdGhpcy5ib2FyZFt5XVt4XSkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdYJ1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWlzc2VkU2hvdHNbeV1beF0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ1gnXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3ldW3hdLmhpdCgpXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG5cdGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuXHRcdHRoaXMuaGl0cyA9IDA7XG5cdH1cblxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLmhpdHMgKz0gMVxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGhcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vTWFpbi9HYW1lYm9hcmQuanNcIjtcblxuXG5jb25zdCBnYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKClcbmNvbnNvbGUudGFibGUoZ2FtZWJvYXJkLmJvYXJkKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==