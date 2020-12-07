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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/meditate-active.svg":
/*!************************************!*\
  !*** ./assets/meditate-active.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "assets/meditate-active.svg";

/***/ }),

/***/ "./assets/meditate.svg":
/*!*****************************!*\
  !*** ./assets/meditate.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "assets/meditate.svg";

/***/ }),

/***/ "./assets/study-active.svg":
/*!*********************************!*\
  !*** ./assets/study-active.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "assets/study-active.svg";

/***/ }),

/***/ "./assets/study.svg":
/*!**************************!*\
  !*** ./assets/study.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "assets/study.svg";

/***/ }),

/***/ "./assets/warning.svg":
/*!****************************!*\
  !*** ./assets/warning.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "assets/warning.svg";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../assets/meditate.svg */ "./assets/meditate.svg"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../assets/study.svg */ "./assets/study.svg"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../assets/study-active.svg */ "./assets/study-active.svg"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../assets/meditate-active.svg */ "./assets/meditate-active.svg"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../assets/warning.svg */ "./assets/warning.svg"));

// Module
exports.push([module.i, "/*\n\nMain background: #2B2733\nText on main background: #CBC9CF\nHeader, cards: #46424D\nCard shadow: #26222D\nText on header and cards: #FFF\nStudy: #B3FD78\nMeditate: #C278FD\nExercise: #FD8078\nError: #EFB7EC\n\n*/\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    height: 100vh;\n}\n\nbody {\n    background-color: #2B2733;\n    font-family: 'Montserrat';\n    color: #CBC9CF;\n    min-height: 100%;\n}\n\n.title {\n    background-color: #46424D;\n    color: #FFF;\n    text-transform: uppercase;\n    padding: 1em;\n    text-align: center;\n}\n\n.container {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n.complete-activity, .current-activity, .activity {\n    color: #CBC9CF;\n    padding: 2em;\n    width: 100%;\n    border-right: 1px solid #46424D;\n}\n\n.sub-title {\n    font-size: 1.2rem;\n    margin-bottom: 1em;\n}\n\n.completed-activity, .activity-details, .form-container {\n    background-color: #46424D;\n    padding: 3em;\n    width: 100%;\n    margin: 0 auto;\n}\n\n.category-title {\n    color: #FFF;\n    font-size: 1rem;\n    font-weight: bold;\n    grid-column: 1/-1;\n    grid-row: 1/2;\n}\n\n.category {\n    display: grid;\n    grid-template-columns: repeat(5, minmax(100px, 1fr));\n    grid-template-rows: auto 20px 1fr;\n    box-shadow: #26222D;\n}\n\n.category-img {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n}\n\n.meditate-radio + .category-img {\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n\n.study-radio + .category-img {\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n\n.study-radio:checked + .category-img {\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n\n.meditate-radio:checked + .category-img {\n    background-image: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n\n.exercise-radio + .category-img {\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n\n.exercise-radio:checked + .category-img {\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n\n.category-type {\n    border: 2px solid #FFF;\n    display: grid;\n    place-items: center;\n    padding: .5em;\n    position: relative;\n}\n\n.category-type1 {\n    grid-column: 1/2;\n    grid-row: 3/4;\n}\n\n.category-type2 {\n    grid-column: 3/4;\n    grid-row: 3/4;\n}\n\n.category-type3 {\n    grid-column: 5/6;\n    grid-row: 3/4;\n}\n\n.category-txt {\n    font-weight: bold;\n    color: #FFF;\n}\n\n.timer-form {\n    margin-top:2em;\n    display: flex;\n    flex-direction: column;\n}\n\ntextarea {\n   margin-top: .2em;\n   width: 100%;\n   border: 0;\n   border-bottom: 1px solid #FFF;\n   resize: none;\n   background-color: #46424D;\n}\n\ntextarea:focus {\n   border: 0;\n   border-bottom: 1px solid #FFF;\n   outline: none;\n}\n\n.time {\n    margin-top: 2em;\n    display: flex;\n    justify-content: space-between;\n}\n\n.time-input {\n    width: 45%;\n}\n\n.btn {\n    margin-top: 2em;\n    align-self: flex-end;\n    text-transform: uppercase;\n    padding: .5em 1em;\n}\n\n.btn-log, .btn-create {\n    align-self: center;\n}\n\n.activity-list {\n    padding: 2em;\n    color: #CBC9CF;\n    width: 50%;\n}\n\n.activity-msg {\n    text-align: center;\n    font-size: 1rem;\n}\n\n.study-selected {\n    border: 1px solid #B3FD78;\n}\n\n.meditate-selected {\n    border: 1px solid #C278FD;\n}\n\n.exercise-selected {\n    border: 1px solid #FD8078;\n}\n\n.error {\n    border-bottom: 1px solid #EFB7EC;\n}\n\n.error-txt {\n    color: #EFB7EC;\n}\n\n.study-radio, .meditate-radio, .exercise-radio {\n    position: absolute;\n    opacity: 0;\n}\n\n.study, .exercise, .meditate {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.study-radio:checked ~ .category-txt {\n    color: #B3FD78;\n}\n\n.meditate-radio:checked ~ .category-txt {\n    color: #C278FD;\n}\n\n.exercise-radio:checked ~ .category-txt {\n    color: #FD8078;\n}\n\n.task {\n    margin-top: 2em;\n}\n\n.warning {\n    width: 25px;\n    height: 25px;\n    background-image: url(" + ___CSS_LOADER_URL___4___ + ");\n    display: inline-block;\n}\n\n.status {\n    text-transform: uppercase;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.activity-details {\n    width: 100%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.timer, .seperator {\n    color: #FFF;\n    margin-right: .1em;\n}\n\n.bg-category {\n   margin-top: 1em;\n   position: relative;\n   width: 150px;\n   height: 150px;\n   border-radius: 50%;\n   margin-bottom: 2em;\n}\n\n.clock {\n    margin-top: .5em;\n    font-size: 3rem;\n}\n\n.disabled-color {\n    color: gray;\n}\n\n.card {\n    padding: .5em;\n    background-color: #46424D;\n    text-align:left;\n    margin: 1em;\n}\n\n.card-meditate {\n    padding-right: 1em;\n    border-right: 3px solid #C278FD;\n    margin-bottom: .5em;\n}\n\n.card-study {\n    border-right: 3px solid #B3FD78;\n    margin-bottom: .5em;\n}\n\n.card-exercise {\n    border-right: 3px solid #FD8078;\n    margin-bottom: .5em;\n}\n\n.card-desc {\n    font-size: .7rem;\n}\n\n.card-time {\n    font-size: .6rem;\n}\n\n.card-title {\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: .7rem;\n}\n\n.completed-activity {\n    display: flex;\n    flex-direction: column;\n}\n\n.btn-disabled {\n    background-color: #46424D;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/activity.js":
/*!*************************!*\
  !*** ./src/activity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Activity = /*#__PURE__*/function () {
  function Activity(category, description, minutes, seconds, completed, id) {
    _classCallCheck(this, Activity);

    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = completed;
    this.id = id;
  }

  _createClass(Activity, [{
    key: "countDown",
    value: function countDown() {}
  }, {
    key: "markComplete",
    value: function markComplete() {
      this.complete = true;
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      localStorage.setItem('activity', '');
    }
  }]);

  return Activity;
}();

/* harmony default export */ __webpack_exports__["default"] = (Activity);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity.js */ "./src/activity.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ActivityTimer = /*#__PURE__*/function () {
  function ActivityTimer() {
    _classCallCheck(this, ActivityTimer);

    this.activity = null;
    this.loggedActivites = JSON.parse(localStorage.getItem('activities')) || [];
    this.$task = document.querySelector('.task-input');
    this.$min = document.querySelector('.minutes');
    this.$sec = document.querySelector('.seconds');
    this.$errTask = document.querySelector('.task-err');
    this.$minErr = document.querySelector('.min-err');
    this.$secErr = document.querySelector('.sec-err');
    this.currentCategory = '';
    this.$currentActivityDetails = document.querySelector('.current-activity');
    this.$completeActivity = document.querySelector('.complete-activity');
    this.$activityDetails = document.querySelector('.activity');
    this.$activityLog = document.querySelector('.activity-msg');
    this.$startActivity = document.querySelector('.btn');
    this.addEventListeners();
    this.createCards();
  }

  _createClass(ActivityTimer, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      document.addEventListener('click', function (event) {
        _this.changeActivityStyle(event);

        _this.addActivity(event);

        _this.timer(event);

        _this.logActivity(event);

        _this.createActivity(event);
      });
      document.addEventListener('input', function (event) {
        _this.validateInput(event);
      });
    }
  }, {
    key: "changeActivityStyle",
    value: function changeActivityStyle(event) {
      var target = event.target;
      var input = target.tagName === 'input' || target.closest('input');

      if (input && input.getAttribute('name') && input.getAttribute('name') === 'category') {
        var checked = input.checked,
            value = input.value;
        var label = checked && input.closest('label');
        this.clearSelectedBorders();
        label.classList.add("".concat(value, "-selected"));
        this.currentCategory = value;
      }
    }
  }, {
    key: "clearSelectedBorders",
    value: function clearSelectedBorders() {
      var classValues = ['study-selected', 'meditate-selected', 'exercise-selected'];
      var labelElms = document.querySelectorAll('label');
      labelElms.forEach(function (label) {
        var names = label.className.split(' ');
        names = names.filter(function (name) {
          return !classValues.includes(name);
        });
        label.className = names.join(' ');
      });
    }
  }, {
    key: "validateInput",
    value: function validateInput(event) {
      var target = event.target;
      var errorMsg = target.classList.contains('minutes') ? this.$minErr : this.$secErr;

      if (target.classList.contains('task-input')) {
        var value = target.value;
        target.classList.remove('error');
        this.$errTask.innerText = '';

        if (value.length < 5) {
          target.classList.add('error');
          this.$errTask.innerText = "length of input should be more than 5 characters";
        }
      }

      if (target.classList.contains('minutes') || target.classList.contains('seconds')) {
        var _value = target.value;
        target.classList.remove('error');
        errorMsg.innerText = '';

        if (!Number.isInteger(+_value)) {
          errorMsg.innerText = "enter valid number";
          target.classList.add('error');
        }
      }

      if (!this.$errTask.innerText || !errorMsg.innerText) {
        this.validateForm();
      }
    }
  }, {
    key: "addActivity",
    value: function addActivity(event) {
      var target = event.target;

      if (target.classList.contains('btn')) {
        event.preventDefault();
        this.getActivityData();
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      if (!this.$minErr.innerText || !this.$secErr.innerText || !this.$errTask.innerText) {
        this.showError();
      } else {
        this.$startActivity.classList.remove('btn-disabled');
      }
    }
  }, {
    key: "showError",
    value: function showError() {
      this.$startActivity.classList.add('btn-disabled');
      this.$errTask.innerHTML = "<span class=\"error-txt\"><span class=\"warning\"></span> A valid description is required.</span>";
    }
  }, {
    key: "getActivityData",
    value: function getActivityData() {
      var task = this.$task.value;
      var minutes = this.formatTime(this.$min.value);
      var seconds = this.formatTime(this.$sec.value);
      this.activity = new _activity_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.currentCategory, task, minutes, seconds, false, _activity_js__WEBPACK_IMPORTED_MODULE_0__["default"].counter++);
      this.startActivity();
    }
  }, {
    key: "formatTime",
    value: function formatTime(time) {
      if (+time < 10) {
        return "0" + time;
      } else {
        return time;
      }
    }
  }, {
    key: "timer",
    value: function timer(event) {
      var target = event.target;

      if (!target.disabled && target.classList.contains('status')) {
        target.disabled = true;
        target.classList.add('disabled-color');
        this.startTimer(+this.activity.minutes, +this.activity.seconds);
      }
    }
  }, {
    key: "startTimer",
    value: function startTimer(minutes, seconds) {
      var _this2 = this;

      var totalTime = minutes * 60 + seconds;

      var timer = function timer() {
        totalTime--;

        if (totalTime <= 0) {
          clearInterval(timerId);

          _this2.showCompleteMessage();
        }

        var minutes = _this2.formatTime(Math.floor(totalTime / 60));

        var seconds = _this2.formatTime(Math.floor(totalTime % 60));

        var _document$querySelect = document.querySelectorAll('.timer'),
            _document$querySelect2 = _slicedToArray(_document$querySelect, 2),
            $min = _document$querySelect2[0],
            $sec = _document$querySelect2[1];

        $min.innerText = minutes;
        $sec.innerText = seconds;
      };

      var timerId = setInterval(timer, 1000);
    }
  }, {
    key: "startActivity",
    value: function startActivity() {
      this.$activityDetails.hidden = true;
      this.$currentActivityDetails.hidden = false;
      var className = "bg-category ".concat(this.currentCategory, "-selected");
      this.$currentActivityDetails.innerHTML = "\n       <h2 class=\"sub-title\">Current Activity</h2>\n       <section class=\"activity-details\">\n            <h3>".concat(this.activity.description, "</h3>\n            <h1 class=\"clock\">\n                <span class=\"timer\">").concat(this.activity.minutes, "</span>\n                <span class=\"seperator\">:</span>\n                <span class=\"timer\">").concat(this.activity.seconds, "</span>\n            </h1>\n            <article class=\"").concat(className, "\">\n                <p class=\"status\">start</p>\n            </article>\n        </section>");
    }
  }, {
    key: "showCompleteMessage",
    value: function showCompleteMessage() {
      var statusElm = document.querySelector('.bg-category');
      statusElm.innerHTML = "\n            <p class=\"status\">complete!</p>\n        ";
      statusElm.insertAdjacentHTML('afterend', "<p>Congratulations \uD83E\uDD73</p> <button class=\"btn btn-log\">Log Activity</button>");
    }
  }, {
    key: "logActivity",
    value: function logActivity(event) {
      var target = event.target;

      if (target.classList.contains('btn-log')) {
        this.loggedActivites.push(this.activity);
        localStorage.setItem('activities', JSON.stringify(this.loggedActivites));
        this.createCards();
        this.completeActivity();
      }
    }
  }, {
    key: "createCards",
    value: function createCards() {
      this.$activityLog.innerHTML = '';
      var cards = this.loggedActivites.map(function (_ref) {
        var category = _ref.category,
            minutes = _ref.minutes,
            seconds = _ref.seconds,
            description = _ref.description;
        var className = "card-".concat(category);
        return "\n                <section class=\"card\">\n                    <div class=\"".concat(className, "\">\n                        <h3 class=\"card-title\">").concat(category, "</h3>\n                        <p class=\"card-time\">").concat(minutes, " MIN ").concat(seconds, " SECONDS</p>\n                    </div>\n                    <p class=\"card-desc\">").concat(description, "</p>             \n                </section>\n            ");
      }).join('');
      this.$activityLog.innerHTML = cards;
    }
  }, {
    key: "completeActivity",
    value: function completeActivity() {
      this.$currentActivityDetails.hidden = true;
      this.$completeActivity.hidden = false;
    }
  }, {
    key: "createActivity",
    value: function createActivity(event) {
      var target = event.target;

      if (target.classList.contains('btn-create')) {
        this.cleanUp();
      }
    }
  }, {
    key: "cleanUp",
    value: function cleanUp() {
      this.$currentActivityDetails.hidden = true;
      this.$completeActivity.hidden = true;
      this.$activityDetails.hidden = false;
      this.activity = null;
      this.$task.value = '';
      this.$min.value = '';
      this.$sec.value = '';
      this.$errTask.innerText = '';
      var selectedCategory = document.querySelector(".".concat(this.currentCategory, "-selected"));
      selectedCategory.classList.remove("".concat(this.currentCategory, "-selected"));
      var radioBtn = selectedCategory.querySelector('input[type=radio]:checked');
      radioBtn.checked = false;
      this.currentCategory = '';
    }
  }]);

  return ActivityTimer;
}();

_defineProperty(ActivityTimer, "counter", 1);

new ActivityTimer();

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGl0YXRlLWFjdGl2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGl0YXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R1ZHktYWN0aXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R1ZHkuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy93YXJuaW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz81MmY2Il0sIm5hbWVzIjpbIkFjdGl2aXR5IiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiY29tcGxldGVkIiwiaWQiLCJjb21wbGV0ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJBY3Rpdml0eVRpbWVyIiwiYWN0aXZpdHkiLCJsb2dnZWRBY3Rpdml0ZXMiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwiJHRhc2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkbWluIiwiJHNlYyIsIiRlcnJUYXNrIiwiJG1pbkVyciIsIiRzZWNFcnIiLCJjdXJyZW50Q2F0ZWdvcnkiLCIkY3VycmVudEFjdGl2aXR5RGV0YWlscyIsIiRjb21wbGV0ZUFjdGl2aXR5IiwiJGFjdGl2aXR5RGV0YWlscyIsIiRhY3Rpdml0eUxvZyIsIiRzdGFydEFjdGl2aXR5IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJjcmVhdGVDYXJkcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNoYW5nZUFjdGl2aXR5U3R5bGUiLCJhZGRBY3Rpdml0eSIsInRpbWVyIiwibG9nQWN0aXZpdHkiLCJjcmVhdGVBY3Rpdml0eSIsInZhbGlkYXRlSW5wdXQiLCJ0YXJnZXQiLCJpbnB1dCIsInRhZ05hbWUiLCJjbG9zZXN0IiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsInZhbHVlIiwibGFiZWwiLCJjbGVhclNlbGVjdGVkQm9yZGVycyIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzVmFsdWVzIiwibGFiZWxFbG1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJuYW1lcyIsImNsYXNzTmFtZSIsInNwbGl0IiwiZmlsdGVyIiwibmFtZSIsImluY2x1ZGVzIiwiam9pbiIsImVycm9yTXNnIiwiY29udGFpbnMiLCJyZW1vdmUiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJ2YWxpZGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImdldEFjdGl2aXR5RGF0YSIsInNob3dFcnJvciIsImlubmVySFRNTCIsInRhc2siLCJmb3JtYXRUaW1lIiwiY291bnRlciIsInN0YXJ0QWN0aXZpdHkiLCJ0aW1lIiwiZGlzYWJsZWQiLCJzdGFydFRpbWVyIiwidG90YWxUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVySWQiLCJzaG93Q29tcGxldGVNZXNzYWdlIiwiTWF0aCIsImZsb29yIiwic2V0SW50ZXJ2YWwiLCJoaWRkZW4iLCJzdGF0dXNFbG0iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwdXNoIiwic3RyaW5naWZ5IiwiY29tcGxldGVBY3Rpdml0eSIsImNhcmRzIiwibWFwIiwiY2xlYW5VcCIsInNlbGVjdGVkQ2F0ZWdv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QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FB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aEM7QUFDQSxXQUFLN0QsZ0JBQUwsQ0FBc0I2RCxNQUF0QixHQUErQixLQUEvQjtBQUNBLFdBQUs3RSxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBS0ssS0FBTCxDQUFXOEIsS0FBWCxHQUFtQixFQUFuQjtBQUNBLFdBQUszQixJQUFMLENBQVUyQixLQUFWLEdBQWtCLEVBQWxCO0FBQ0EsV0FBSzFCLElBQUwsQ0FBVTBCLEtBQVYsR0FBa0IsRUFBbEI7QUFDQSxXQUFLekIsUUFBTCxDQUFjNEMsU0FBZCxHQUEwQixFQUExQjtBQUNBLFVBQUlnQyxnQkFBZ0IsR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQixLQUFLTSxlQUFoQyxlQUF2QjtBQUNBeUUsc0JBQWdCLENBQUNoRCxTQUFqQixDQUEyQmUsTUFBM0IsV0FBcUMsS0FBS3hDLGVBQTFDO0FBQ0EsVUFBSTBFLFFBQVEsR0FBR0QsZ0JBQWdCLENBQUMvRSxhQUFqQixDQUErQiwyQkFBL0IsQ0FBZjtBQUNBZ0YsY0FBUSxDQUFDckQsT0FBVCxHQUFtQixLQUFuQjtBQUNBLFdBQUtyQixlQUFMLEdBQXVCLEVBQXZCO0FBQ0g7Ozs7OztnQkF4T0NkLGEsYUFFZSxDOztBQXlPckIsSUFBSUEsYUFBSixHOzs7Ozs7Ozs7Ozs7QUM3T0EsY0FBYyxtQkFBTyxDQUFDLG9IQUF1RDs7QUFFN0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiYXNzZXRzL21lZGl0YXRlLWFjdGl2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiYXNzZXRzL21lZGl0YXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJhc3NldHMvc3R1ZHktYWN0aXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJhc3NldHMvc3R1ZHkuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImFzc2V0cy93YXJuaW5nLnN2Z1wiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9hc3NldHMvbWVkaXRhdGUuc3ZnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2Fzc2V0cy9zdHVkeS5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL3N0dWR5LWFjdGl2ZS5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL21lZGl0YXRlLWFjdGl2ZS5zdmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vYXNzZXRzL3dhcm5pbmcuc3ZnXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbk1haW4gYmFja2dyb3VuZDogIzJCMjczM1xcblRleHQgb24gbWFpbiBiYWNrZ3JvdW5kOiAjQ0JDOUNGXFxuSGVhZGVyLCBjYXJkczogIzQ2NDI0RFxcbkNhcmQgc2hhZG93OiAjMjYyMjJEXFxuVGV4dCBvbiBoZWFkZXIgYW5kIGNhcmRzOiAjRkZGXFxuU3R1ZHk6ICNCM0ZENzhcXG5NZWRpdGF0ZTogI0MyNzhGRFxcbkV4ZXJjaXNlOiAjRkQ4MDc4XFxuRXJyb3I6ICNFRkI3RUNcXG5cXG4qL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCMjczMztcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgY29sb3I6ICNDQkM5Q0Y7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQyNEQ7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb21wbGV0ZS1hY3Rpdml0eSwgLmN1cnJlbnQtYWN0aXZpdHksIC5hY3Rpdml0eSB7XFxuICAgIGNvbG9yOiAjQ0JDOUNGO1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDY0MjREO1xcbn1cXG5cXG4uc3ViLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmNvbXBsZXRlZC1hY3Rpdml0eSwgLmFjdGl2aXR5LWRldGFpbHMsIC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQyNEQ7XFxuICAgIHBhZGRpbmc6IDNlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2F0ZWdvcnktdGl0bGUge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAyMHB4IDFmcjtcXG4gICAgYm94LXNoYWRvdzogIzI2MjIyRDtcXG59XFxuXFxuLmNhdGVnb3J5LWltZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lZGl0YXRlLXJhZGlvICsgLmNhdGVnb3J5LWltZyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG59XFxuXFxuLnN0dWR5LXJhZGlvICsgLmNhdGVnb3J5LWltZyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKTtcXG59XFxuXFxuLnN0dWR5LXJhZGlvOmNoZWNrZWQgKyAuY2F0ZWdvcnktaW1nIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpO1xcbn1cXG5cXG4ubWVkaXRhdGUtcmFkaW86Y2hlY2tlZCArIC5jYXRlZ29yeS1pbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIik7XFxufVxcblxcbi5leGVyY2lzZS1yYWRpbyArIC5jYXRlZ29yeS1pbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIik7XFxufVxcblxcbi5leGVyY2lzZS1yYWRpbzpjaGVja2VkICsgLmNhdGVnb3J5LWltZyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKTtcXG59XFxuXFxuLmNhdGVnb3J5LXR5cGUge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXRlZ29yeS10eXBlMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5jYXRlZ29yeS10eXBlMiB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5jYXRlZ29yeS10eXBlMyB7XFxuICAgIGdyaWQtY29sdW1uOiA1LzY7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5jYXRlZ29yeS10eHQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNGRkY7XFxufVxcblxcbi50aW1lci1mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDoyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICBtYXJnaW4tdG9wOiAuMmVtO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGJvcmRlcjogMDtcXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcXG4gICByZXNpemU6IG5vbmU7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDI0RDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgIGJvcmRlcjogMDtcXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRjtcXG4gICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGltZSB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGltZS1pbnB1dCB7XFxuICAgIHdpZHRoOiA0NSU7XFxufVxcblxcbi5idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcXG59XFxuXFxuLmJ0bi1sb2csIC5idG4tY3JlYXRlIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWN0aXZpdHktbGlzdCB7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgY29sb3I6ICNDQkM5Q0Y7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5hY3Rpdml0eS1tc2cge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnN0dWR5LXNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0IzRkQ3ODtcXG59XFxuXFxuLm1lZGl0YXRlLXNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MyNzhGRDtcXG59XFxuXFxuLmV4ZXJjaXNlLXNlbGVjdGVkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZEODA3ODtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkI3RUM7XFxufVxcblxcbi5lcnJvci10eHQge1xcbiAgICBjb2xvcjogI0VGQjdFQztcXG59XFxuXFxuLnN0dWR5LXJhZGlvLCAubWVkaXRhdGUtcmFkaW8sIC5leGVyY2lzZS1yYWRpbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnN0dWR5LCAuZXhlcmNpc2UsIC5tZWRpdGF0ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdHVkeS1yYWRpbzpjaGVja2VkIH4gLmNhdGVnb3J5LXR4dCB7XFxuICAgIGNvbG9yOiAjQjNGRDc4O1xcbn1cXG5cXG4ubWVkaXRhdGUtcmFkaW86Y2hlY2tlZCB+IC5jYXRlZ29yeS10eHQge1xcbiAgICBjb2xvcjogI0MyNzhGRDtcXG59XFxuXFxuLmV4ZXJjaXNlLXJhZGlvOmNoZWNrZWQgfiAuY2F0ZWdvcnktdHh0IHtcXG4gICAgY29sb3I6ICNGRDgwNzg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uc3RhdHVzIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmFjdGl2aXR5LWRldGFpbHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aW1lciwgLnNlcGVyYXRvciB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC4xZW07XFxufVxcblxcbi5iZy1jYXRlZ29yeSB7XFxuICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB3aWR0aDogMTUwcHg7XFxuICAgaGVpZ2h0OiAxNTBweDtcXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4uY2xvY2sge1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5kaXNhYmxlZC1jb2xvciB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQyNEQ7XFxuICAgIHRleHQtYWxpZ246bGVmdDtcXG4gICAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5jYXJkLW1lZGl0YXRlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjQzI3OEZEO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbn1cXG5cXG4uY2FyZC1zdHVkeSB7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNCM0ZENzg7XFxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxufVxcblxcbi5jYXJkLWV4ZXJjaXNlIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI0ZEODA3ODtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG59XFxuXFxuLmNhcmQtZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbi5jYXJkLXRpbWUge1xcbiAgICBmb250LXNpemU6IC42cmVtO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbn1cXG5cXG4uY29tcGxldGVkLWFjdGl2aXR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJ0bi1kaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQyNEQ7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBBY3Rpdml0eSB7XG5cbiAgICBjb25zdHJ1Y3RvcihjYXRlZ29yeSwgZGVzY3JpcHRpb24sIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCwgaWQpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IHNlY29uZHM7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgY291bnREb3duKCkge31cbiAgICBtYXJrQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgIH1cbiAgICBzYXZlVG9TdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZpdHknLCAnJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eTsiLCJpbXBvcnQgQWN0aXZpdHkgZnJvbSAnLi9hY3Rpdml0eS5qcyc7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY2xhc3MgQWN0aXZpdHlUaW1lciB7XG5cbiAgICBzdGF0aWMgY291bnRlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9nZ2VkQWN0aXZpdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZpdGllcycpKSB8fCBbXTtcbiAgICAgICAgdGhpcy4kdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XG4gICAgICAgIHRoaXMuJG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51dGVzJyk7XG4gICAgICAgIHRoaXMuJHNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRzJyk7XG4gICAgICAgIHRoaXMuJGVyclRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1lcnInKTtcbiAgICAgICAgdGhpcy4kbWluRXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi1lcnInKTtcbiAgICAgICAgdGhpcy4kc2VjRXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYy1lcnInKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSAnJztcbiAgICAgICAgdGhpcy4kY3VycmVudEFjdGl2aXR5RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWFjdGl2aXR5Jyk7XG4gICAgICAgIHRoaXMuJGNvbXBsZXRlQWN0aXZpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUtYWN0aXZpdHknKTtcbiAgICAgICAgdGhpcy4kYWN0aXZpdHlEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5Jyk7XG4gICAgICAgIHRoaXMuJGFjdGl2aXR5TG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5LW1zZycpO1xuICAgICAgICB0aGlzLiRzdGFydEFjdGl2aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYXJkcygpO1xuXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZpdHlTdHlsZShldmVudCk7XG4gICAgICAgICAgdGhpcy5hZGRBY3Rpdml0eShldmVudCk7XG4gICAgICAgICAgdGhpcy50aW1lcihldmVudCk7XG4gICAgICAgICAgdGhpcy5sb2dBY3Rpdml0eShldmVudCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVBY3Rpdml0eShldmVudCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aXZpdHlTdHlsZShldmVudCkge1xuICAgICAgICBsZXQge3RhcmdldH0gPSBldmVudDtcbiAgICAgICAgbGV0IGlucHV0ID0gIHRhcmdldC50YWdOYW1lID09PSAnaW5wdXQnIHx8ICB0YXJnZXQuY2xvc2VzdCgnaW5wdXQnKTtcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpICYmIGlucHV0LmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgICAgICBsZXQge2NoZWNrZWQsIHZhbHVlfSA9IGlucHV0O1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gY2hlY2tlZCAmJiBpbnB1dC5jbG9zZXN0KCdsYWJlbCcpO1xuICAgICAgICAgICAgdGhpcy5jbGVhclNlbGVjdGVkQm9yZGVycygpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChgJHt2YWx1ZX0tc2VsZWN0ZWRgKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdGVkQm9yZGVycygpIHtcbiAgICAgICBsZXQgY2xhc3NWYWx1ZXMgPSBbJ3N0dWR5LXNlbGVjdGVkJywgJ21lZGl0YXRlLXNlbGVjdGVkJywgJ2V4ZXJjaXNlLXNlbGVjdGVkJ107XG4gICAgICAgbGV0IGxhYmVsRWxtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICAgbGFiZWxFbG1zLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZXMgPSBsYWJlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIG5hbWVzID0gbmFtZXMuZmlsdGVyKChuYW1lKSA9PiAhY2xhc3NWYWx1ZXMuaW5jbHVkZXMobmFtZSkpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NOYW1lID0gbmFtZXMuam9pbignICcpO1xuICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHt0YXJnZXR9ID0gZXZlbnQ7XG4gICAgICAgIGxldCBlcnJvck1zZyA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pbnV0ZXMnKSA/IHRoaXMuJG1pbkVyciA6IHRoaXMuJHNlY0VycjtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2staW5wdXQnKSkge1xuICAgICAgICAgICAgbGV0IHt2YWx1ZX0gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIHRoaXMuJGVyclRhc2suaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVyclRhc2suaW5uZXJUZXh0ID0gYGxlbmd0aCBvZiBpbnB1dCBzaG91bGQgYmUgbW9yZSB0aGFuIDUgY2hhcmFjdGVyc2A7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWludXRlcycpIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlY29uZHMnKSkge1xuICAgICAgICAgICAgbGV0IHt2YWx1ZX0gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgICAgICAgICAgIGVycm9yTXNnLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5pbm5lclRleHQgPSBgZW50ZXIgdmFsaWQgbnVtYmVyYDtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy4kZXJyVGFzay5pbm5lclRleHQgfHwgIWVycm9yTXNnLmlubmVyVGV4dCkge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEFjdGl2aXR5KGV2ZW50KSB7XG4gICAgICAgIGxldCB7dGFyZ2V0fSA9IGV2ZW50O1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXR5RGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKCkge1xuICAgICAgICBpZiAoIXRoaXMuJG1pbkVyci5pbm5lclRleHQgfHwgIXRoaXMuJHNlY0Vyci5pbm5lclRleHQgfHwgIXRoaXMuJGVyclRhc2suaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kc3RhcnRBY3Rpdml0eS5jbGFzc0xpc3QucmVtb3ZlKCdidG4tZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dFcnJvcigpIHtcbiAgICAgICAgdGhpcy4kc3RhcnRBY3Rpdml0eS5jbGFzc0xpc3QuYWRkKCdidG4tZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy4kZXJyVGFzay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJlcnJvci10eHRcIj48c3BhbiBjbGFzcz1cIndhcm5pbmdcIj48L3NwYW4+IEEgdmFsaWQgZGVzY3JpcHRpb24gaXMgcmVxdWlyZWQuPC9zcGFuPmA7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZpdHlEYXRhKCkge1xuICAgICAgICBsZXQgdGFzayA9IHRoaXMuJHRhc2sudmFsdWU7XG4gICAgICAgIGxldCBtaW51dGVzID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuJG1pbi52YWx1ZSk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuJHNlYy52YWx1ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHkgPSBuZXcgQWN0aXZpdHkodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRhc2ssIG1pbnV0ZXMsIHNlY29uZHMsIGZhbHNlLCBBY3Rpdml0eS5jb3VudGVyKyspO1xuICAgICAgICB0aGlzLnN0YXJ0QWN0aXZpdHkoKTtcbiAgICB9XG5cbiAgICBmb3JtYXRUaW1lKHRpbWUpIHtcbiAgICAgICAgaWYgKCt0aW1lIDwgMTApIHtcbiAgICAgICAgICAgIHJldHVybiBcIjBcIiArIHRpbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVyKGV2ZW50KSB7XG4gICAgICAgIGxldCB7dGFyZ2V0fSA9IGV2ZW50O1xuICAgICAgICBpZiAoIXRhcmdldC5kaXNhYmxlZCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0dXMnKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1jb2xvcicpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWVyKCt0aGlzLmFjdGl2aXR5Lm1pbnV0ZXMsICt0aGlzLmFjdGl2aXR5LnNlY29uZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lcihtaW51dGVzLCBzZWNvbmRzKSB7XG4gICAgICAgIGxldCB0b3RhbFRpbWUgPSBtaW51dGVzICogNjAgKyBzZWNvbmRzO1xuICAgICAgICBjb25zdCB0aW1lciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvdGFsVGltZS0tO1xuICAgICAgICAgICAgaWYgKHRvdGFsVGltZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wbGV0ZU1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gdGhpcy5mb3JtYXRUaW1lKE1hdGguZmxvb3IodG90YWxUaW1lLzYwKSk7XG4gICAgICAgICAgICBsZXQgc2Vjb25kcyA9IHRoaXMuZm9ybWF0VGltZShNYXRoLmZsb29yKHRvdGFsVGltZSU2MCkpO1xuICAgICAgICAgICAgbGV0IFskbWluLCAkc2VjXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcicpO1xuICAgICAgICAgICAgJG1pbi5pbm5lclRleHQgPSBtaW51dGVzO1xuICAgICAgICAgICAgJHNlYy5pbm5lclRleHQgPSBzZWNvbmRzO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lcklkID0gc2V0SW50ZXJ2YWwodGltZXIsIDEwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0QWN0aXZpdHkoKSB7XG4gICAgICAgdGhpcy4kYWN0aXZpdHlEZXRhaWxzLmhpZGRlbiA9IHRydWU7XG4gICAgICAgdGhpcy4kY3VycmVudEFjdGl2aXR5RGV0YWlscy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICBsZXQgY2xhc3NOYW1lID0gYGJnLWNhdGVnb3J5ICR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9LXNlbGVjdGVkYDtcbiAgICAgICB0aGlzLiRjdXJyZW50QWN0aXZpdHlEZXRhaWxzLmlubmVySFRNTCA9IGBcbiAgICAgICA8aDIgY2xhc3M9XCJzdWItdGl0bGVcIj5DdXJyZW50IEFjdGl2aXR5PC9oMj5cbiAgICAgICA8c2VjdGlvbiBjbGFzcz1cImFjdGl2aXR5LWRldGFpbHNcIj5cbiAgICAgICAgICAgIDxoMz4ke3RoaXMuYWN0aXZpdHkuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImNsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lclwiPiR7dGhpcy5hY3Rpdml0eS5taW51dGVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlcGVyYXRvclwiPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lclwiPiR7dGhpcy5hY3Rpdml0eS5zZWNvbmRzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCI+c3RhcnQ8L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICAgIH1cblxuICAgIHNob3dDb21wbGV0ZU1lc3NhZ2UoKSB7XG4gICAgICAgIGxldCBzdGF0dXNFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctY2F0ZWdvcnknKTtcbiAgICAgICAgc3RhdHVzRWxtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdHVzXCI+Y29tcGxldGUhPC9wPlxuICAgICAgICBgO1xuICAgICAgICBzdGF0dXNFbG0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGA8cD5Db25ncmF0dWxhdGlvbnMg8J+lszwvcD4gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbG9nXCI+TG9nIEFjdGl2aXR5PC9idXR0b24+YClcbiAgICB9XG5cbiAgICBsb2dBY3Rpdml0eShldmVudCkge1xuICAgICAgICBsZXQge3RhcmdldH0gPSBldmVudDtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1sb2cnKSkge1xuICAgICAgICAgICAgdGhpcy5sb2dnZWRBY3Rpdml0ZXMucHVzaCh0aGlzLmFjdGl2aXR5KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3Rpdml0aWVzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dnZWRBY3Rpdml0ZXMpKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2FyZHMoKTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVBY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ2FyZHMoKSB7XG4gICAgICAgIHRoaXMuJGFjdGl2aXR5TG9nLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsZXQgY2FyZHMgPSB0aGlzLmxvZ2dlZEFjdGl2aXRlcy5tYXAoKHtjYXRlZ29yeSwgbWludXRlcywgc2Vjb25kcywgZGVzY3JpcHRpb259KSA9PiB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gYGNhcmQtJHtjYXRlZ29yeX1gO1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7Y2F0ZWdvcnl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10aW1lXCI+JHttaW51dGVzfSBNSU4gJHtzZWNvbmRzfSBTRUNPTkRTPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWRlc2NcIj4ke2Rlc2NyaXB0aW9ufTwvcD4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgYFxuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgdGhpcy4kYWN0aXZpdHlMb2cuaW5uZXJIVE1MID0gY2FyZHM7XG4gICAgfVxuXG4gICAgY29tcGxldGVBY3Rpdml0eSgpIHtcbiAgICAgICAgdGhpcy4kY3VycmVudEFjdGl2aXR5RGV0YWlscy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLiRjb21wbGV0ZUFjdGl2aXR5LmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNyZWF0ZUFjdGl2aXR5KGV2ZW50KSB7XG4gICAgICAgIGxldCB7dGFyZ2V0fSA9IGV2ZW50O1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNyZWF0ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFuVXAoKSB7XG4gICAgICAgIHRoaXMuJGN1cnJlbnRBY3Rpdml0eURldGFpbHMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kY29tcGxldGVBY3Rpdml0eS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLiRhY3Rpdml0eURldGFpbHMuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZpdHkgPSBudWxsO1xuICAgICAgICB0aGlzLiR0YXNrLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuJG1pbi52YWx1ZSA9ICcnOyBcbiAgICAgICAgdGhpcy4kc2VjLnZhbHVlID0gJyc7IFxuICAgICAgICB0aGlzLiRlcnJUYXNrLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuY3VycmVudENhdGVnb3J5fS1zZWxlY3RlZGApO1xuICAgICAgICBzZWxlY3RlZENhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9LXNlbGVjdGVkYCk7XG4gICAgICAgIGxldCByYWRpb0J0biA9IHNlbGVjdGVkQ2F0ZWdvcnkucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCcpO1xuICAgICAgICByYWRpb0J0bi5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudENhdGVnb3J5ID0gJyc7XG4gICAgfVxufVxuXG5uZXcgQWN0aXZpdHlUaW1lcigpOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=