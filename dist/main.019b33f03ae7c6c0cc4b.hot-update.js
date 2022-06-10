"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js\");\n\n\nconst state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n    globalBpm: undefined,\n    globalKey: undefined,\n    clipCount: function () {\n        let clipCount = 0\n\n        for (let row = 0; row < this.grid.length; row++) {\n            for (let col = 0; col < this.grid[row].value.length; col++) {\n                if (this.grid[row].value[col].stem) {\n                    clipCount++\n                }\n            }\n        }\n\n        return clipCount\n    },\n    // staticUrl: '',\n    staticUrl: '/assets',\n    grid: [],\n    currentStateHash: '',\n    currentRowHash: ['', '', '', ''],\n    hasRowStateChanged: function (rowIndex) {\n        return this.currentRowHash[rowIndex] !== this.calculateRowHash(rowIndex)\n    },\n    updateRowStateHash: function (rowIndex) {\n        this.currentRowHash[rowIndex] = this.calculateRowHash(rowIndex)\n    },\n    calculateRowHash: function (rowIndex) {\n        let newHash = ''\n        for (let col = 0; col < this.grid[rowIndex].value.length; col++) {\n            if (this.grid[rowIndex].value[col].stem) {\n                newHash = newHash + rowIndex + col + this.grid[rowIndex].value[col].stem.id.substring(0, 4)\n            } else {\n                newHash = newHash + rowIndex + col + 'undef'\n            }\n        }\n        return newHash\n    },\n    getChordsForCol(col) {\n        let chords = undefined\n\n        if (!this.grid || this.grid.length < 1) {\n            return chords\n        }\n\n        for (let row = 0; row < this.grid.length; row++) {\n            if (!this.grid[row].value[col]) {\n                continue\n            }\n\n            if (this.grid[row].value[col].stem) {\n                if (this.grid[row].value[col].stem.type != 'drum') {\n                    if (this.grid[row].value[col].stem.chords) {\n                        chords = this.grid[row].value[col].stem.chords\n                    }\n                }\n            }\n        }\n\n        return chords\n    },\n    hasStateChanged: function () {\n        return this.currentStateHash !== this.calculateStateHash()\n    },\n    updateStateHash: function () {\n        this.currentStateHash = this.calculateStateHash()\n    },\n    calculateStateHash: function () {\n        let newHash = ''\n        for (let row = 0; row < this.grid.length; row++) {\n            for (let col = 0; col < this.grid[row].value.length; col++) {\n                if (this.grid[row].value[col].stem) {\n                    newHash = newHash + row + col + this.grid[row].value[col].stem.id.substring(0, 4)\n                } else {\n                    newHash = newHash + row + col + 'undef'\n                }\n            }\n        }\n        return newHash\n    }\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    state,\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdG9yZS9zdG9yZS5qcz8wN2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVhY3RpdmV9IGZyb20gXCJ2dWVcIjtcblxuY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7XG4gICAgZ2xvYmFsQnBtOiB1bmRlZmluZWQsXG4gICAgZ2xvYmFsS2V5OiB1bmRlZmluZWQsXG4gICAgY2xpcENvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjbGlwQ291bnQgPSAwXG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ncmlkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuZ3JpZFtyb3ddLnZhbHVlLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd10udmFsdWVbY29sXS5zdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaXBDb3VudCsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsaXBDb3VudFxuICAgIH0sXG4gICAgLy8gc3RhdGljVXJsOiAnJyxcbiAgICBzdGF0aWNVcmw6ICcvYXNzZXRzJyxcbiAgICBncmlkOiBbXSxcbiAgICBjdXJyZW50U3RhdGVIYXNoOiAnJyxcbiAgICBjdXJyZW50Um93SGFzaDogWycnLCAnJywgJycsICcnXSxcbiAgICBoYXNSb3dTdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uIChyb3dJbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um93SGFzaFtyb3dJbmRleF0gIT09IHRoaXMuY2FsY3VsYXRlUm93SGFzaChyb3dJbmRleClcbiAgICB9LFxuICAgIHVwZGF0ZVJvd1N0YXRlSGFzaDogZnVuY3Rpb24gKHJvd0luZGV4KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJvd0hhc2hbcm93SW5kZXhdID0gdGhpcy5jYWxjdWxhdGVSb3dIYXNoKHJvd0luZGV4KVxuICAgIH0sXG4gICAgY2FsY3VsYXRlUm93SGFzaDogZnVuY3Rpb24gKHJvd0luZGV4KSB7XG4gICAgICAgIGxldCBuZXdIYXNoID0gJydcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5ncmlkW3Jvd0luZGV4XS52YWx1ZS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd0luZGV4XS52YWx1ZVtjb2xdLnN0ZW0pIHtcbiAgICAgICAgICAgICAgICBuZXdIYXNoID0gbmV3SGFzaCArIHJvd0luZGV4ICsgY29sICsgdGhpcy5ncmlkW3Jvd0luZGV4XS52YWx1ZVtjb2xdLnN0ZW0uaWQuc3Vic3RyaW5nKDAsIDQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0hhc2ggPSBuZXdIYXNoICsgcm93SW5kZXggKyBjb2wgKyAndW5kZWYnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0hhc2hcbiAgICB9LFxuICAgIGdldENob3Jkc0ZvckNvbChjb2wpIHtcbiAgICAgICAgbGV0IGNob3JkcyA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICghdGhpcy5ncmlkIHx8IHRoaXMuZ3JpZC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hvcmRzXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmdyaWQubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdyaWRbcm93XS52YWx1ZVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddLnZhbHVlW2NvbF0uc3RlbSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbcm93XS52YWx1ZVtjb2xdLnN0ZW0udHlwZSAhPSAnZHJ1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddLnZhbHVlW2NvbF0uc3RlbS5jaG9yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob3JkcyA9IHRoaXMuZ3JpZFtyb3ddLnZhbHVlW2NvbF0uc3RlbS5jaG9yZHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaG9yZHNcbiAgICB9LFxuICAgIGhhc1N0YXRlQ2hhbmdlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGVIYXNoICE9PSB0aGlzLmNhbGN1bGF0ZVN0YXRlSGFzaCgpXG4gICAgfSxcbiAgICB1cGRhdGVTdGF0ZUhhc2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGVIYXNoID0gdGhpcy5jYWxjdWxhdGVTdGF0ZUhhc2goKVxuICAgIH0sXG4gICAgY2FsY3VsYXRlU3RhdGVIYXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBuZXdIYXNoID0gJydcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ncmlkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuZ3JpZFtyb3ddLnZhbHVlLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd10udmFsdWVbY29sXS5zdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0hhc2ggPSBuZXdIYXNoICsgcm93ICsgY29sICsgdGhpcy5ncmlkW3Jvd10udmFsdWVbY29sXS5zdGVtLmlkLnN1YnN0cmluZygwLCA0KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0hhc2ggPSBuZXdIYXNoICsgcm93ICsgY29sICsgJ3VuZGVmJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3SGFzaFxuICAgIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("88f230a2a9cbbb030572")
/******/ })();
/******/ 
/******/ }
);