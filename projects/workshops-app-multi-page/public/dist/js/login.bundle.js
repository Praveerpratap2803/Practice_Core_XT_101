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

/***/ "./src/ts/pages/login.js":
/*!*******************************!*\
  !*** ./src/ts/pages/login.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth */ \"./src/ts/services/auth.js\");\n\r\n\r\n(function() {\r\n    let loginForm;\r\n\r\n    function addEventListeners() {\r\n        loginForm.addEventListener( 'submit', function( event ) {\r\n            event.preventDefault();\r\n\r\n            // please do validations\r\n            // ...\r\n\r\n            // extract the email and password and form a credentials object\r\n            const credentials = {\r\n                email: document.getElementById( 'email' ).value.trim(),\r\n                password: document.getElementById( 'password' ).value.trim(),\r\n            };\r\n\r\n            // if everything is valid\r\n            (0,_services_auth__WEBPACK_IMPORTED_MODULE_0__.login)( credentials )\r\n                .then(\r\n                    function( loginResponse ) {\r\n                        console.log( loginResponse );\r\n                        window.location.href = './workshops-list.html';\r\n                    }\r\n                )\r\n                .catch(\r\n                    function( error ) {\r\n                        alert( error.message );\r\n                    }\r\n                );\r\n        });\r\n    }\r\n\r\n    window.addEventListener( 'load', function() {\r\n        loginForm = document.getElementById( 'login-form' );\r\n        \r\n        addEventListeners();\r\n    });\r\n})();\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/pages/login.js?");

/***/ }),

/***/ "./src/ts/services/auth.js":
/*!*********************************!*\
  !*** ./src/ts/services/auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getToken\": () => (/* binding */ getToken),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout)\n/* harmony export */ });\n// credentials = { email: 'john.doe@example.com', password: 'Password123#' }\r\nfunction login( credentials ) {\r\n    return fetch(\r\n        `http://localhost:3000/login`,\r\n        {\r\n            method: 'POST', // better to use ALL CAPS for the method\r\n            body: JSON.stringify( credentials ),\r\n            headers: {\r\n                // Authorization: \"sdkbkjwbejwbveiwbviwb\"\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }\r\n    )\r\n        .then(\r\n            function( response ) {\r\n                if (!response.ok) {\r\n                    // for 404 kind of errors, we should check and explcitly throw an error\r\n                    throw new Error(response.statusText);\r\n                }\r\n\r\n                return response.json();\r\n            }\r\n        )\r\n        .then(\r\n            function( loginResponse ) {\r\n                // store the details in localStorage\r\n                localStorage.setItem( 'email', loginResponse.email );\r\n                localStorage.setItem( 'token', loginResponse.authToken );\r\n                localStorage.setItem( 'role', loginResponse.role );\r\n\r\n                return loginResponse;\r\n            }\r\n        )\r\n}\r\n\r\nfunction getToken() {\r\n    return localStorage.getItem( 'token' );\r\n}\r\n\r\nfunction logout() {\r\n    localStorage.clear();\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://workshops-app-sass/./src/ts/services/auth.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/pages/login.js");
/******/ 	
/******/ })()
;