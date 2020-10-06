module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins-src/glpi/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins-src/glpi/datasource.definition.js":
/*!***************************************************!*\
  !*** ./plugins-src/glpi/datasource.definition.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: "glpi",
  caption: "Glpi",
  shell: "powershell",
  initCommands: ["Import-Module -Name GlpiTools", "Set-GlpiToolsConfig  -PathToGlpi #{glpiApiEndpoint}  -AppToken \"#{glpiAppToken}\"  -UserToken \"#{glpiUserToken}\"", ". #{modulePath}init.ps1"],
  columns: [{
    columnName: 'Hostname',
    property: 'Nom',
    variableName: 'hostname'
  }, {
    columnName: 'Username',
    property: 'Utilisateur',
    variableName: 'username'
  }],
  pingableProperty: 'Nom',
  mainColumnProperty: 'Nom',
  searchFunc: function searchFunc(keyword) {
    return '$glpiSearcher.search("' + keyword + '") | ConvertTo-Json -Compress';
  }
};

/***/ }),

/***/ "./plugins-src/glpi/index.js":
/*!***********************************!*\
  !*** ./plugins-src/glpi/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Glpi; });
/* harmony import */ var _src_core_Plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/core/Plugin */ "./src/core/Plugin.js");
/* harmony import */ var _datasource_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource.definition */ "./plugins-src/glpi/datasource.definition.js");
/* harmony import */ var _datasource_definition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_datasource_definition__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Glpi =
/*#__PURE__*/
function (_Plugin) {
  _inherits(Glpi, _Plugin);

  function Glpi(api, context) {
    var _this;

    _classCallCheck(this, Glpi);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Glpi).call(this, api, context));
    api.store.datasourceManager.addDatasourceDefinition(_datasource_definition__WEBPACK_IMPORTED_MODULE_1___default.a, context.pluginDir);
    return _this;
  }

  return Glpi;
}(_src_core_Plugin__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/core/Plugin.js":
/*!****************************!*\
  !*** ./src/core/Plugin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plugin; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Plugin =
/*#__PURE__*/
function () {
  function Plugin(api) {
    _classCallCheck(this, Plugin);

    this._api = api;
  }

  _createClass(Plugin, [{
    key: "beginLoad",
    value: function beginLoad() {}
  }, {
    key: "onLoaded",
    value: function onLoaded() {}
  }, {
    key: "onReady",
    value: function onReady() {}
  }, {
    key: "onUnload",
    value: function onUnload() {}
  }]);

  return Plugin;
}();



/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map