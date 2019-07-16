/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_toggler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/toggler.js */ \"./js/utils/toggler.js\");\n/* harmony import */ var _utils_backToTop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/backToTop.js */ \"./js/utils/backToTop.js\");\n/* harmony import */ var _utils_portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/portfolio.js */ \"./js/utils/portfolio.js\");\n/* harmony import */ var _utils_testimonials_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/testimonials.js */ \"./js/utils/testimonials.js\");\n\n\n\n\n\nvar loadAll = function loadAll() {\n  Object(_utils_toggler_js__WEBPACK_IMPORTED_MODULE_0__[\"toggler\"])('toggler');\n  Object(_utils_backToTop_js__WEBPACK_IMPORTED_MODULE_1__[\"backToTop\"])('#backToTop');\n  Object(_utils_portfolio_js__WEBPACK_IMPORTED_MODULE_2__[\"portfolio\"])('portfoliocat', 'portfoliotarget');\n  Object(_utils_testimonials_js__WEBPACK_IMPORTED_MODULE_3__[\"testimonials\"])('testimonialtarget', 'testimonialbtn');\n};\n\nwindow.addEventListener('load', loadAll);\n\n//# sourceURL=webpack:///./js/scripts.js?");

/***/ }),

/***/ "./js/utils/backToTop.js":
/*!*******************************!*\
  !*** ./js/utils/backToTop.js ***!
  \*******************************/
/*! exports provided: backToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backToTop\", function() { return backToTop; });\nvar backToTop = function backToTop(button) {\n  var scroller = function scroller(value) {\n    window.scroll(0, window.pageYOffset - value);\n  };\n\n  var interval = function interval() {\n    var offset = window.pageYOffset;\n    if (offset > 300) scroller(100);\n    if (offset > 360) scroller(50);\n    if (offset > 200) scroller(30);\n    if (offset > 100) scroller(20);\n    if (offset > 50) scroller(10);\n    if (offset > 6) scroller(5);else {\n      scroller(offset);\n      return;\n    }\n    setTimeout(interval, 30);\n  };\n\n  var btn = document.querySelector(button);\n  btn.addEventListener('click', interval);\n};\n\n//# sourceURL=webpack:///./js/utils/backToTop.js?");

/***/ }),

/***/ "./js/utils/portfolio.js":
/*!*******************************!*\
  !*** ./js/utils/portfolio.js ***!
  \*******************************/
/*! exports provided: portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"portfolio\", function() { return portfolio; });\nvar portfolio = function portfolio(dataCategory, dataTarget) {\n  var elems = document.querySelectorAll(\"[data-\".concat(dataCategory, \"]\"));\n  var buttons = document.querySelectorAll(\"[data-\".concat(dataTarget, \"]\"));\n  elems.forEach(function (elem, index) {\n    if (index >= 6) elem.classList.add('hidden');\n  });\n\n  var showElems = function showElems(e) {\n    var btn = e.target;\n\n    if (!btn.dataset[dataTarget]) {\n      btn = e.target.parentNode;\n    }\n\n    buttons.forEach(function (button) {\n      button.classList.remove('active');\n    });\n    btn.classList.add('active');\n\n    if (btn.dataset[dataTarget] == 'all') {\n      elems.forEach(function (elem) {\n        elem.classList.remove('hidden');\n      });\n    } else {\n      elems.forEach(function (elem) {\n        if (elem.dataset[dataCategory].search(btn.dataset[dataTarget]) > -1) elem.classList.remove('hidden');else elem.classList.add('hidden');\n      });\n    }\n  };\n\n  buttons.forEach(function (btn) {\n    btn.addEventListener('click', showElems);\n  });\n};\n\n//# sourceURL=webpack:///./js/utils/portfolio.js?");

/***/ }),

/***/ "./js/utils/testimonials.js":
/*!**********************************!*\
  !*** ./js/utils/testimonials.js ***!
  \**********************************/
/*! exports provided: testimonials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"testimonials\", function() { return testimonials; });\nvar testimonials = function testimonials(testimonialTarget, testimonialBtn) {\n  var elems = document.querySelectorAll(\"[data-\".concat(testimonialTarget, \"]\"));\n  var bullets = document.querySelectorAll(\"[data-\".concat(testimonialBtn, \"]\"));\n\n  var switchTestimonial = function switchTestimonial(e) {\n    var bullet = e.target;\n    if (!bullet.dataset[testimonialBtn]) bullet = e.target.parentNode;\n    var target = bullet.dataset[testimonialBtn];\n    var transition = parseFloat(getComputedStyle(elems[0]).getPropertyValue('transition-duration')) * 1000;\n    var toRemove;\n    var toActivate;\n    elems.forEach(function (elem, index) {\n      if (elem.classList.contains('active')) {\n        if (elem.dataset[testimonialTarget] === target) return;else toRemove = index;\n      }\n\n      if (elem.dataset[testimonialTarget] === target) toActivate = index;\n    });\n\n    if (Number.isInteger(toRemove) && Number.isInteger(toActivate)) {\n      execute(elems[toActivate], elems[toRemove], transition);\n      bulletsActive(bullets, bullet);\n    }\n  };\n\n  bullets.forEach(function (bullet) {\n    bullet.addEventListener('click', switchTestimonial);\n  });\n};\n\nvar execute = function execute(toActivate, toRemove) {\n  var transition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;\n  toRemove.style.opacity = \"0\";\n  toActivate.style.opacity = \"0\";\n\n  var switchClasses = function switchClasses() {\n    return new Promise(function (resolve) {\n      setTimeout(function () {\n        toRemove.classList.remove('active');\n        toActivate.classList.add('active');\n        resolve();\n      }, transition);\n    });\n  };\n\n  switchClasses().then(function (result) {\n    setTimeout(function () {\n      toActivate.style.opacity = \"1\";\n    }, transition / 2);\n  });\n};\n\nvar bulletsActive = function bulletsActive(bullets, activeBullet) {\n  bullets.forEach(function (elem) {\n    if (elem === activeBullet) elem.classList.add('active');else elem.classList.remove('active');\n  });\n};\n\n//# sourceURL=webpack:///./js/utils/testimonials.js?");

/***/ }),

/***/ "./js/utils/toggler.js":
/*!*****************************!*\
  !*** ./js/utils/toggler.js ***!
  \*****************************/
/*! exports provided: toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggler\", function() { return toggler; });\nvar toggler = function toggler(dataName) {\n  var toggleItem = function toggleItem(e) {\n    var togglerTarget = e.target.dataset[dataName];\n    if (!togglerTarget) togglerTarget = e.target.parentNode.dataset[dataName];\n    var elems = document.querySelectorAll(togglerTarget);\n    elems.forEach(function (elem) {\n      elem.classList.toggle('active');\n    });\n  };\n\n  var elems = document.querySelectorAll(\"[data-\".concat(dataName, \"]\"));\n  elems.forEach(function (elem) {\n    elem.addEventListener('click', toggleItem);\n  });\n};\n\n//# sourceURL=webpack:///./js/utils/toggler.js?");

/***/ })

/******/ });