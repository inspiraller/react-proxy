/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KILL_STORE\": () => (/* binding */ KILL_STORE),\n/* harmony export */   \"PERSIST_STORE\": () => (/* binding */ PERSIST_STORE)\n/* harmony export */ });\nconst PERSIST_STORE = true; //note - if false, will lose org_type on redirect of soecial signin\nconst KILL_STORE = !PERSIST_STORE;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLG1FQUFtRTtBQUMvRixNQUFNQyxhQUFhLENBQUNELGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wcm94eS1jb250ZW50Ly4vc3JjL2NvbmZpZy50cz9kNDFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQRVJTSVNUX1NUT1JFID0gdHJ1ZTsgLy9ub3RlIC0gaWYgZmFsc2UsIHdpbGwgbG9zZSBvcmdfdHlwZSBvbiByZWRpcmVjdCBvZiBzb2VjaWFsIHNpZ25pblxuZXhwb3J0IGNvbnN0IEtJTExfU1RPUkUgPSAhUEVSU0lTVF9TVE9SRTtcblxuIl0sIm5hbWVzIjpbIlBFUlNJU1RfU1RPUkUiLCJLSUxMX1NUT1JFIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/store */ \"./src/store/store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n// https://dev.to/fly/make-your-own-state-management-for-react-with-proxies-1n0m#tldr\n// Using this instead of CustomEvent - so we can use SSR\nconst EventEmitter = new (events__WEBPACK_IMPORTED_MODULE_2___default())();\nEventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);\n\n\nglobal.react = {\n    store: (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.createStore)(EventEmitter),\n    EventEmitter: EventEmitter\n};\nfunction App({ Component , pageProps  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        global.react = {\n            store: (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.createStore)(EventEmitter),\n            EventEmitter: EventEmitter\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\baps\\\\react_all\\\\react-proxy\\\\react-proxy-content\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFHRDtBQUU1QixxRkFBcUY7QUFDckYsd0RBQXdEO0FBQ3hELE1BQU1DLGVBQWUsSUFBSUQsK0NBQU1BO0FBQy9CQyxhQUFhQyxlQUFlLENBQUNDLE9BQU9DLGdCQUFnQjtBQUVSO0FBQ1Y7QUFFakNHLE9BQWVDLEtBQUssR0FBRztJQUN0QkMsT0FBT0oseURBQVdBLENBQUNKO0lBQ25CQSxjQUFjQTtBQUNoQjtBQUVlLFNBQVNTLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RE4sZ0RBQVNBLENBQUMsSUFBTTtRQUNiQyxPQUFlQyxLQUFLLEdBQUc7WUFDdEJDLE9BQU9KLHlEQUFXQSxDQUFDSjtZQUNuQkEsY0FBY0E7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFBTyw4REFBQ1U7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXByb3h5LWNvbnRlbnQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJldmVudHNcIjtcblxuLy8gaHR0cHM6Ly9kZXYudG8vZmx5L21ha2UteW91ci1vd24tc3RhdGUtbWFuYWdlbWVudC1mb3ItcmVhY3Qtd2l0aC1wcm94aWVzLTFuMG0jdGxkclxuLy8gVXNpbmcgdGhpcyBpbnN0ZWFkIG9mIEN1c3RvbUV2ZW50IC0gc28gd2UgY2FuIHVzZSBTU1JcbmNvbnN0IEV2ZW50RW1pdHRlciA9IG5ldyBFdmVudHMoKTtcbkV2ZW50RW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJAL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbihnbG9iYWwgYXMgYW55KS5yZWFjdCA9IHtcbiAgc3RvcmU6IGNyZWF0ZVN0b3JlKEV2ZW50RW1pdHRlciksXG4gIEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyXG59ICBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoZ2xvYmFsIGFzIGFueSkucmVhY3QgPSB7XG4gICAgICBzdG9yZTogY3JlYXRlU3RvcmUoRXZlbnRFbWl0dGVyKSxcbiAgICAgIEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyXG4gICAgfSAgICAgIFxuICB9LCBbXSlcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJuYW1lcyI6WyJFdmVudHMiLCJFdmVudEVtaXR0ZXIiLCJzZXRNYXhMaXN0ZW5lcnMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiY3JlYXRlU3RvcmUiLCJ1c2VFZmZlY3QiLCJnbG9iYWwiLCJyZWFjdCIsInN0b3JlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/persist.ts":
/*!******************************!*\
  !*** ./src/store/persist.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"killStore\": () => (/* binding */ killStore),\n/* harmony export */   \"loadStore\": () => (/* binding */ loadStore),\n/* harmony export */   \"saveStore\": () => (/* binding */ saveStore)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ \"./src/config.ts\");\n\nconst loadStore = ()=>{\n    if (_config__WEBPACK_IMPORTED_MODULE_0__.KILL_STORE) {\n        // localStorage.clear();\n        localStorage.removeItem(\"Store\");\n    }\n    if (!_config__WEBPACK_IMPORTED_MODULE_0__.PERSIST_STORE) {\n        return null;\n    }\n    try {\n        const serializedStore = localStorage.getItem(\"Store\");\n        if (serializedStore === null) {\n            return null;\n        }\n        const store = JSON.parse(serializedStore);\n        return store;\n    } catch (e) {\n        return null;\n    }\n};\nconst killStore = ()=>{\n    try {\n        const stringifiedStore = localStorage.getItem(\"Store\");\n        const store = JSON.parse(stringifiedStore);\n        localStorage.setItem(\"Store\", JSON.stringify(store));\n    } catch (err) {\n        console.warn(\"cannot kill Store\");\n    }\n};\nconst saveStore = (store)=>{\n    if (!_config__WEBPACK_IMPORTED_MODULE_0__.PERSIST_STORE) {\n        return;\n    }\n    try {\n        const serializedStore = JSON.stringify(store);\n        localStorage.setItem(\"Store\", serializedStore);\n    } catch (e) {\n    // Ignore write errors;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcGVyc2lzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFEO0FBSTlDLE1BQU1FLFlBQXdCLElBQU07SUFDekMsSUFBSUQsK0NBQVVBLEVBQUU7UUFDZCx3QkFBd0I7UUFDeEJFLGFBQWFDLFVBQVUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxDQUFDSixrREFBYUEsRUFBRTtRQUNsQixPQUFPLElBQUk7SUFDYixDQUFDO0lBQ0QsSUFBSTtRQUNGLE1BQU1LLGtCQUFrQkYsYUFBYUcsT0FBTyxDQUFDO1FBQzdDLElBQUlELG9CQUFvQixJQUFJLEVBQUU7WUFDNUIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUNELE1BQU1FLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0o7UUFDekIsT0FBT0U7SUFDVCxFQUFFLE9BQU9HLEdBQUc7UUFDVixPQUFPLElBQUk7SUFDYjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxZQUFZLElBQU07SUFDN0IsSUFBSTtRQUNGLE1BQU1DLG1CQUFtQlQsYUFBYUcsT0FBTyxDQUFDO1FBQzlDLE1BQU1DLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0c7UUFDekJULGFBQWFVLE9BQU8sQ0FBQyxTQUFTTCxLQUFLTSxTQUFTLENBQUNQO0lBQy9DLEVBQUUsT0FBT1EsS0FBSztRQUNaQyxRQUFRQyxJQUFJLENBQUM7SUFDZjtBQUNGLEVBQUU7QUFHSyxNQUFNQyxZQUF3QlgsQ0FBQUEsUUFBUztJQUM1QyxJQUFJLENBQUNQLGtEQUFhQSxFQUFFO1FBQ2xCO0lBQ0YsQ0FBQztJQUNELElBQUk7UUFDRixNQUFNSyxrQkFBa0JHLEtBQUtNLFNBQVMsQ0FBQ1A7UUFDdkNKLGFBQWFVLE9BQU8sQ0FBQyxTQUFTUjtJQUNoQyxFQUFFLE9BQU9LLEdBQUc7SUFDVix1QkFBdUI7SUFDekI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcHJveHktY29udGVudC8uL3NyYy9zdG9yZS9wZXJzaXN0LnRzPzQ3MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUEVSU0lTVF9TVE9SRSwgS0lMTF9TVE9SRSB9IGZyb20gJ0AvY29uZmlnJztcbmltcG9ydCB7IFByb3BTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuXG50eXBlIFRsb2FkU3RvcmUgPSAoKSA9PiBQcm9wU3RvcmU7XG5leHBvcnQgY29uc3QgbG9hZFN0b3JlOiBUbG9hZFN0b3JlID0gKCkgPT4ge1xuICBpZiAoS0lMTF9TVE9SRSkge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdTdG9yZScpO1xuICB9XG4gIGlmICghUEVSU0lTVF9TVE9SRSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZFN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N0b3JlJyk7XG4gICAgaWYgKHNlcmlhbGl6ZWRTdG9yZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN0b3JlID0gSlNPTi5wYXJzZShzZXJpYWxpemVkU3RvcmUpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qga2lsbFN0b3JlID0gKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0cmluZ2lmaWVkU3RvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3RvcmUnKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RvcmUgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkU3RvcmUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdG9yZScsIEpTT04uc3RyaW5naWZ5KHN0b3JlKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybignY2Fubm90IGtpbGwgU3RvcmUnKTtcbiAgfVxufTtcblxudHlwZSBUc2F2ZVN0b3JlID0gKHN0b3JlOiBQcm9wU3RvcmUpID0+IHZvaWQ7XG5leHBvcnQgY29uc3Qgc2F2ZVN0b3JlOiBUc2F2ZVN0b3JlID0gc3RvcmUgPT4ge1xuICBpZiAoIVBFUlNJU1RfU1RPUkUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBzZXJpYWxpemVkU3RvcmUgPSBKU09OLnN0cmluZ2lmeShzdG9yZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N0b3JlJywgc2VyaWFsaXplZFN0b3JlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElnbm9yZSB3cml0ZSBlcnJvcnM7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiUEVSU0lTVF9TVE9SRSIsIktJTExfU1RPUkUiLCJsb2FkU3RvcmUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2VyaWFsaXplZFN0b3JlIiwiZ2V0SXRlbSIsInN0b3JlIiwiSlNPTiIsInBhcnNlIiwiZSIsImtpbGxTdG9yZSIsInN0cmluZ2lmaWVkU3RvcmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJzYXZlU3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/persist.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStore\": () => (/* binding */ createStore)\n/* harmony export */ });\n/* harmony import */ var _persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persist */ \"./src/store/persist.ts\");\n\nconst storeKey = \"obj1\";\nconst combined = {\n    [storeKey]: {\n        state: {\n            count: 0 // initial state\n        }\n    }\n};\nconst createStore = (EventEmitter)=>{\n    let store = (0,_persist__WEBPACK_IMPORTED_MODULE_0__.loadStore)();\n    if (!store) {\n        store = Object.keys(combined).reduce((acc, cur)=>{\n            const proxied = new Proxy(combined[cur], {\n                set: function setProxy(target, key, val) {\n                    if (target[key] !== val) {\n                        target[key] = val;\n                        target[key] = val;\n                        EventEmitter.emit(key, val);\n                    }\n                    return Reflect.get(target, key, val);\n                }\n            });\n            acc[cur] = proxied;\n            return acc;\n        }, {});\n    }\n    return store;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDc0M7QUFTdEMsTUFBTUMsV0FBVztBQUVqQixNQUFNQyxXQUFzQjtJQUMxQixDQUFDRCxTQUFTLEVBQUU7UUFDVkUsT0FBTztZQUNMQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQzNCO0lBQ0Y7QUFDRjtBQUVPLE1BQU1DLGNBQWMsQ0FBQ0MsZUFBb0M7SUFDOUQsSUFBSUMsUUFBbUJQLG1EQUFTQTtJQUNoQyxJQUFJLENBQUNPLE9BQU87UUFDVkEsUUFBUUMsT0FBT0MsSUFBSSxDQUFDUCxVQUFVUSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsTUFBUTtZQUNqRCxNQUFNQyxVQUFVLElBQUlDLE1BQU1aLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFO2dCQUN2Q0csS0FBSyxTQUFTQyxTQUFVQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO29CQUN4QyxJQUFJRixNQUFNLENBQUNDLElBQWUsS0FBS0MsS0FBSzt3QkFDbENGLE1BQU0sQ0FBQ0MsSUFBZSxHQUFHQzt3QkFDekJGLE1BQU0sQ0FBQ0MsSUFBMkIsR0FBR0M7d0JBQ3JDYixhQUFhYyxJQUFJLENBQUNGLEtBQUtDO29CQUN6QixDQUFDO29CQUNELE9BQU9FLFFBQVFDLEdBQUcsQ0FBQ0wsUUFBUUMsS0FBS0M7Z0JBQ2xDO1lBQ0Y7WUFDQVIsR0FBRyxDQUFDQyxJQUFJLEdBQUdDO1lBQ1gsT0FBT0Y7UUFDVCxHQUFHLENBQUM7SUFDTixDQUFDO0lBQ0QsT0FBT0o7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcHJveHktY29udGVudC8uL3NyYy9zdG9yZS9zdG9yZS50cz81MDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudHMgZnJvbSBcImV2ZW50c1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RvcmUgfSBmcm9tIFwiLi9wZXJzaXN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BXaXRoU3RhdGUge1xyXG4gIHN0YXRlOiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wU3RvcmUge1xyXG4gIFtrZXk6IHN0cmluZ106IFByb3BXaXRoU3RhdGU7XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlS2V5ID0gXCJvYmoxXCI7XHJcblxyXG5jb25zdCBjb21iaW5lZDogUHJvcFN0b3JlID0ge1xyXG4gIFtzdG9yZUtleV06IHtcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIGNvdW50OiAwIC8vIGluaXRpYWwgc3RhdGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVTdG9yZSA9IChFdmVudEVtaXR0ZXI6IEV2ZW50cyk6IFByb3BTdG9yZSA9PiB7XHJcbiAgbGV0IHN0b3JlOiBQcm9wU3RvcmUgPSBsb2FkU3RvcmUoKTtcclxuICBpZiAoIXN0b3JlKSB7XHJcbiAgICBzdG9yZSA9IE9iamVjdC5rZXlzKGNvbWJpbmVkKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3hpZWQgPSBuZXcgUHJveHkoY29tYmluZWRbY3VyXSwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0UHJveHkgKHRhcmdldCwga2V5LCB2YWwpIHtcclxuICAgICAgICAgIGlmICh0YXJnZXRba2V5IGFzICdzdGF0ZSddICE9PSB2YWwpIHsgLy8gdGFyZ2V0LnN0YXRlID0ge31cclxuICAgICAgICAgICAgdGFyZ2V0W2tleSBhcyAnc3RhdGUnXSA9IHZhbDtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleSBhcyBrZXlvZiB0eXBlb2YgdGFyZ2V0XSA9IHZhbDtcclxuICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoa2V5LCB2YWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5LCB2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgYWNjW2N1cl0gPSBwcm94aWVkO1xyXG4gICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30gYXMgUHJvcFN0b3JlKTtcclxuICB9XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJsb2FkU3RvcmUiLCJzdG9yZUtleSIsImNvbWJpbmVkIiwic3RhdGUiLCJjb3VudCIsImNyZWF0ZVN0b3JlIiwiRXZlbnRFbWl0dGVyIiwic3RvcmUiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwicHJveGllZCIsIlByb3h5Iiwic2V0Iiwic2V0UHJveHkiLCJ0YXJnZXQiLCJrZXkiLCJ2YWwiLCJlbWl0IiwiUmVmbGVjdCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();