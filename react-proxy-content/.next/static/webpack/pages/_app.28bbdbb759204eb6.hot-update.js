"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr\n// Using this instead of CustomEvent - so we can use SSR\nconst EventEmitter = new (events__WEBPACK_IMPORTED_MODULE_2___default())();\nEventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);\n\n\n__webpack_require__.g.react = {};\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        __webpack_require__.g.react = {\n            store: (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.createStore)(EventEmitter),\n            EventEmitter: EventEmitter\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\baps\\\\react_all\\\\react-proxy\\\\react-proxy-content\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\n_s(App, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBR0Q7QUFFNUIscUZBQXFGO0FBQ3JGLHdEQUF3RDtBQUN4RCxNQUFNQyxlQUFlLElBQUlELCtDQUFNQTtBQUMvQkMsYUFBYUMsZUFBZSxDQUFDQyxPQUFPQyxnQkFBZ0I7QUFFUjtBQUNWO0FBRWpDRyxxQkFBTUEsQ0FBU0MsS0FBSyxHQUFHLENBQUM7QUFFVixTQUFTQyxJQUFJLEtBQWtDLEVBQUU7UUFBcEMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksR0FBbEM7O0lBQzFCTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2JDLHFCQUFNQSxDQUFTQyxLQUFLLEdBQUc7WUFDdEJJLE9BQU9QLHlEQUFXQSxDQUFDSjtZQUNuQkEsY0FBY0E7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFBTyw4REFBQ1M7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQztHQVJ1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuaW1wb3J0IEV2ZW50cyBmcm9tIFwiZXZlbnRzXCI7XG5cbi8vIGh0dHBzOi8vZGV2LnRvL2ZseS9tYWtlLXlvdXItb3duLXN0YXRlLW1hbmFnZW1lbnQtZm9yLXJlYWN0LXdpdGgtcHJveGllcy0xbjBtI3RsZHJcbi8vIFVzaW5nIHRoaXMgaW5zdGVhZCBvZiBDdXN0b21FdmVudCAtIHNvIHdlIGNhbiB1c2UgU1NSXG5jb25zdCBFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRzKCk7XG5FdmVudEVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4oZ2xvYmFsIGFzIGFueSkucmVhY3QgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoZ2xvYmFsIGFzIGFueSkucmVhY3QgPSB7XG4gICAgICBzdG9yZTogY3JlYXRlU3RvcmUoRXZlbnRFbWl0dGVyKSxcbiAgICAgIEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyXG4gICAgfSAgICAgIFxuICB9LCBbXSlcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJuYW1lcyI6WyJFdmVudHMiLCJFdmVudEVtaXR0ZXIiLCJzZXRNYXhMaXN0ZW5lcnMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiY3JlYXRlU3RvcmUiLCJ1c2VFZmZlY3QiLCJnbG9iYWwiLCJyZWFjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});