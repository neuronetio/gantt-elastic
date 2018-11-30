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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1798":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e49");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_switches_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "28fb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4882");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2dda7490", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2ffa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.vue-slider-component{position:relative;box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none\n}\n.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed\n}\n.vue-slider-component.vue-slider-has-label{margin-bottom:15px\n}\n.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed\n}\n.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc\n}\n.vue-slider-component .vue-slider:after{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2\n}\n.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#3498db;transition:all 0s;z-index:1\n}\n.vue-slider-component .vue-slider-process.vue-slider-process-dragable{cursor:pointer;z-index:3\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0\n}\n.vue-slider-component .vue-slider-dot{position:absolute;transition:all 0s;will-change:transform;cursor:pointer;z-index:5\n}\n.vue-slider-component .vue-slider-dot .vue-slider-dot-handle{width:100%;height:100%;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32)\n}\n.vue-slider-component .vue-slider-dot.vue-slider-dot-focus .vue-slider-dot-handle{box-shadow:0 0 2px 1px #3498db\n}\n.vue-slider-component .vue-slider-dot.vue-slider-dot-dragging{z-index:5\n}\n.vue-slider-component .vue-slider-dot.vue-slider-dot-disabled{z-index:4\n}\n.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0\n}\n.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0\n}\n.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9\n}\n.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;transform:translate(-50%,-100%)\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;transform:translate(-50%,100%)\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;transform:translate(-100%,-50%)\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;transform:translate(100%,-50%)\n}\n.vue-slider-component .vue-slider-tooltip-top .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:\"\";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;transform:translate(-50%)\n}\n.vue-slider-component .vue-slider-tooltip-wrap.vue-merged-tooltip{display:block;visibility:hidden\n}\n.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:\"\";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;transform:translate(-50%)\n}\n.vue-slider-component .vue-slider-tooltip-left .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:\"\";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;transform:translateY(-50%)\n}\n.vue-slider-component .vue-slider-tooltip-right .vue-merged-tooltip .vue-slider-tooltip:before,.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:\"\";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;transform:translateY(-50%)\n}\n.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block\n}\n.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important\n}\n.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none\n}\n.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px\n}\n.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;transform:translate(-50%,-50%);z-index:2;transition:all .3s\n}\n.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden\n}\n.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;transform:translate(-50%,8px);visibility:visible\n}\n.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;transform:translate(8px,-50%);visibility:visible\n}\n.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important\n}", ""]);

// exports


/***/ }),

/***/ "4882":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports
exports.i(__webpack_require__("fff7"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5a0c":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="day",i="week",a="month",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,o=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={padStart:d,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+d(n,2,"0")+":"+d(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),s=e-r<0,i=t.clone().add(n+(s?-1:1),"months");return Number(-(n+(e-r)/(s?r-i:i-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:a,y:u,w:i,d:s,h:r,m:n,s:e,ms:t}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},$="en",l={};l[$]=h;var m=function(t){return t instanceof D},y=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),e&&(l[t]=e,r=t);else{var s=t.name;l[s]=t,r=s}return n||($=r),r},M=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t,new D(n)},S=function(t,e){return M(t,{locale:e.$L})},p=f;p.parseLocale=y,p.isDayjs=m,p.wrapper=S;var D=function(){function h(t){this.parse(t)}var d=h.prototype;return d.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):p.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},d.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||$},d.$utils=function(){return p},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.$compare=function(t){return this.valueOf()-M(t).valueOf()},d.isSame=function(t){return 0===this.$compare(t)},d.isBefore=function(t){return this.$compare(t)<0},d.isAfter=function(t){return this.$compare(t)>0},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,c){var o=this,h=!!p.isUndefined(c)||c,d=function(t,e){var n=S(new Date(o.$y,e,t),o);return h?n:n.endOf(s)},f=function(t,e){return S(o.toDate()[t].apply(o.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),o)};switch(p.prettyUnit(t)){case u:return h?d(1,0):d(31,11);case a:return h?d(1,this.$M):d(0,this.$M+1);case i:return d(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case s:case"date":return f("setHours",0);case r:return f("setMinutes",1);case n:return f("setSeconds",2);case e:return f("setMilliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,c){switch(p.prettyUnit(i)){case s:this.$d.setDate(this.$D+(c-this.$W));break;case"date":this.$d.setDate(c);break;case a:this.$d.setMonth(c);break;case u:this.$d.setFullYear(c);break;case r:this.$d.setHours(c);break;case n:this.$d.setMinutes(c);break;case e:this.$d.setSeconds(c);break;case t:this.$d.setMilliseconds(c)}return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,c){var o=this;t=Number(t);var h,d=p.prettyUnit(c),f=function(e,n){var r=o.set("date",1).set(e,n+t);return r.set("date",Math.min(o.$D,r.daysInMonth()))},$=function(e){var n=new Date(o.$d);return n.setDate(n.getDate()+e*t),S(n,o)};if(d===a)return f(a,this.$M);if(d===u)return f(u,this.$y);if(d===s)return $(1);if(d===i)return $(7);switch(d){case n:h=6e4;break;case r:h=36e5;break;case e:h=1e3;break;default:h=1}var l=this.valueOf()+t*h;return S(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",r=p.padZoneStr(this.$d.getTimezoneOffset()),s=this.$locale(),i=s.weekdays,a=s.months,u=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)};return n.replace(o,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return p.padStart(e.$M+1,2,"0");case"MMM":return u(s.monthsShort,e.$M,a,3);case"MMMM":return a[e.$M];case"D":return String(e.$D);case"DD":return p.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(s.weekdaysMin,e.$W,i,2);case"ddd":return u(s.weekdaysShort,e.$W,i,3);case"dddd":return i[e.$W];case"H":return String(e.$H);case"HH":return p.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:p.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return p.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return p.padStart(e.$s,2,"0");case"SSS":return p.padStart(e.$ms,3,"0");case"Z":return r;default:return r.replace(":","")}})},d.diff=function(t,c,o){var h=p.prettyUnit(c),d=M(t),f=this-d,$=p.monthDiff(this,d);switch(h){case u:$/=12;break;case a:break;case"quarter":$/=3;break;case i:$=f/6048e5;break;case s:$=f/864e5;break;case r:$=f/36e5;break;case n:$=f/6e4;break;case e:$=f/1e3;break;default:$=f}return o?$:p.absFloor($)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0),n},d.clone=function(){return S(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.toDate().toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},h}();return M.extend=function(t,e){return t(e,D,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[$],M});


/***/ }),

/***/ "5e49":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("68f1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("09df9aee", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "68f1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.vue-switcher{position:relative;display:inline-block\n}\n.vue-switcher__label{display:block;font-size:10px;margin-bottom:5px\n}\n.vue-switcher input{opacity:0;width:100%;height:100%;position:absolute;z-index:1;cursor:pointer\n}\n.vue-switcher div{height:15px;width:36px;position:relative;border-radius:30px;display:-webkit-flex;display:-ms-flex;display:flex;align-items:center;justify-content:flex-start;cursor:pointer;transition:.2s linear,background-color .2s linear\n}\n.vue-switcher div:after{content:\"\";height:20px;width:20px;border-radius:100px;display:block;transition:.15s linear,background-color .15s linear;position:absolute;left:100%;margin-left:-18px;cursor:pointer;top:-3px;box-shadow:0 1px 5px 0 rgba(0,0,0,.1)\n}\n.vue-switcher--unchecked div{justify-content:flex-end\n}\n.vue-switcher--unchecked div:after{left:15px\n}\n.vue-switcher--disabled div{opacity:.3\n}\n.vue-switcher--disabled input{cursor:not-allowed\n}\n.vue-switcher--bold div{top:-8px;height:26px;width:51px\n}\n.vue-switcher--bold div:after{margin-left:-24px;top:3px\n}\n.vue-switcher--bold--unchecked div:after{left:28px\n}\n.vue-switcher--bold .vue-switcher__label span{padding-bottom:7px;display:inline-block\n}\n.vue-switcher-theme--default.vue-switcher-color--default div{background-color:#b7b7b7\n}\n.vue-switcher-theme--default.vue-switcher-color--default div:after{background-color:#9d9d9d\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#aaa\n}\n.vue-switcher-theme--default.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#c4c4c4\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div{background-color:#77b0c8\n}\n.vue-switcher-theme--default.vue-switcher-color--blue div:after{background-color:#539bb9\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#c0dae5\n}\n.vue-switcher-theme--default.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#77b0c8\n}\n.vue-switcher-theme--default.vue-switcher-color--red div{background-color:#c87777\n}\n.vue-switcher-theme--default.vue-switcher-color--red div:after{background-color:#b95353\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#e5c0c0\n}\n.vue-switcher-theme--default.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#c87777\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div{background-color:#c9c377\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow div:after{background-color:#bab353\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#e6e3c0\n}\n.vue-switcher-theme--default.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#c9c377\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div{background-color:#c89577\n}\n.vue-switcher-theme--default.vue-switcher-color--orange div:after{background-color:#b97953\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div{background-color:#e5cec0\n}\n.vue-switcher-theme--default.vue-switcher-color--orange.vue-switcher--unchecked div:after{background-color:#c89577\n}\n.vue-switcher-theme--default.vue-switcher-color--green div{background-color:#77c88d\n}\n.vue-switcher-theme--default.vue-switcher-color--green div:after{background-color:#53b96e\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#c0e5ca\n}\n.vue-switcher-theme--default.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#77c88d\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div{background-color:#dcdcdc\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default div:after{background-color:#f5f5f5\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#e8e8e8\n}\n.vue-switcher-theme--bulma.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f5f5f5\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div{background-color:#05ffda\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary div:after{background-color:#00d1b2\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#6bffe9\n}\n.vue-switcher-theme--bulma.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#05ffda\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div{background-color:#5e91e3\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue div:after{background-color:#3273dc\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div{background-color:#b5ccf2\n}\n.vue-switcher-theme--bulma.vue-switcher-color--blue.vue-switcher--unchecked div:after{background-color:#5e91e3\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div{background-color:#ff6b89\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red div:after{background-color:#ff3860\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div{background-color:#ffd1da\n}\n.vue-switcher-theme--bulma.vue-switcher-color--red.vue-switcher--unchecked div:after{background-color:#ff6b89\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div{background-color:#ffe78a\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow div:after{background-color:#ffdd57\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div{background-color:#fffcf0\n}\n.vue-switcher-theme--bulma.vue-switcher-color--yellow.vue-switcher--unchecked div:after{background-color:#ffe78a\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div{background-color:#3dde75\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green div:after{background-color:#22c65b\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div{background-color:#94edb3\n}\n.vue-switcher-theme--bulma.vue-switcher-color--green.vue-switcher--unchecked div:after{background-color:#3dde75\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div{background-color:#e6e6e6\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default div:after{background-color:#f0f0f0\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div{background-color:#f5f5f5\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--default.vue-switcher--unchecked div:after{background-color:#f0f0f0\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div{background-color:#4f93ce\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary div:after{background-color:#337ab7\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div{background-color:#9fc4e4\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--primary.vue-switcher--unchecked div:after{background-color:#4f93ce\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div{background-color:#80c780\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success div:after{background-color:#5cb85c\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div{background-color:#c7e6c7\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--success.vue-switcher--unchecked div:after{background-color:#80c780\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div{background-color:#85d0e7\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info div:after{background-color:#5bc0de\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div{background-color:#daf1f8\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--info.vue-switcher--unchecked div:after{background-color:#85d0e7\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div{background-color:#f4c37d\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning div:after{background-color:#f0ad4e\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div{background-color:#fceedb\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--warning.vue-switcher--unchecked div:after{background-color:#f4c37d\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div{background-color:#d9534f\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger div:after{background-color:#c9302c\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div{background-color:#eba5a3\n}\n.vue-switcher-theme--bootstrap.vue-switcher-color--danger.vue-switcher--unchecked div:after{background-color:#d9534f\n}", ""]);

// exports


/***/ }),

/***/ "a62b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28fb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d95a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fef5");
/* harmony import */ var _vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_6_oneOf_1_0_css_loader_index_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_vue2_slider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=template&id=4b4378dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('eg-main',{attrs:{"tasks":_vm.tasks,"options":_vm.options}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/GanttElastic.vue?vue&type=template&id=4b4378dc&

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("5a0c");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main.vue?vue&type=template&id=a9c7bc98&
var Mainvue_type_template_id_a9c7bc98_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-elastic__main"},[_c('top-header'),_c('svg',{ref:"svgMain",staticClass:"gantt-elastic__svg-container",attrs:{"width":_vm.getWidth,"height":_vm.root.state.height,"xmlns":"http://www.w3.org/2000/svg"}},[_c('foreignObject',{attrs:{"x":"0","y":"0","width":"100%","height":"100%"}},[_c('div',{staticClass:"gantt-elastic__container",attrs:{"xmlns":"http://www.w3.org/1999/xhtml"},on:{"mousemove":_vm.mouseMove,"mouseup":_vm.mouseUp}},[_c('div',{staticClass:"gantt-elastic__task-list-container"},[(_vm.root.state.taskList.display)?_c('svg',{ref:"svgTaskList",staticClass:"gantt-elastic__task-list-svg",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":_vm.root.state.taskList.finalWidth,"height":_vm.root.state.height}},[_c('defs',{domProps:{"innerHTML":_vm._s(_vm.defs)}}),_c('task-list')],1):_vm._e()]),_c('div',{ref:"svgTreeContainer",staticClass:"gantt-elastic__main-container",on:{"mousedown":function($event){$event.stopPropagation();return _vm.treeMouseDown($event)},"mouseup":function($event){$event.stopPropagation();return _vm.treeMouseUp($event)},"mousemove":function($event){$event.stopPropagation();return _vm.treeMouseMove($event)}}},[_c('svg',{ref:"svgTree",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":_vm.root.state.width,"height":_vm.root.state.height}},[_c('defs',{domProps:{"innerHTML":_vm._s(_vm.defs)}}),_c('tree')],1)])])])],1),_c('div',{ref:"treeScrollContainer",staticClass:"gantt-elastic__tree-scroll-container",style:({marginLeft:_vm.getMarginLeft}),on:{"scroll":_vm.onScroll}},[_c('div',{staticClass:"gantt-elastic__tree-scroll",style:({height:'1px', width:_vm.root.state.width+'px'})})])],1)}
var Mainvue_type_template_id_a9c7bc98_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Main.vue?vue&type=template&id=a9c7bc98&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=6541fa3e&
var Headervue_type_template_id_6541fa3e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-elastic__header",style:(_vm.root.style('header'))},[_c('div',{staticClass:"gantt-elastic__header-title",style:(_vm.root.style('header-title'))},[(!_vm.root.state.title.html)?_c('div',{staticClass:"gantt-elastic__header-title--text",style:(_vm.root.style('header-title--text'))},[_vm._v(_vm._s(_vm.root.state.title.label))]):_vm._e(),(_vm.root.state.title.html)?_c('div',{staticClass:"gantt-elastic__header-title--html",style:(_vm.root.style('header-title--html')),domProps:{"innerHTML":_vm._s(_vm.root.state.title.label)}}):_vm._e()]),_c('div',{staticClass:"gantt-elastic__header-options",style:(_vm.root.style('header-options'))},[_c('button',{staticClass:"gantt-elastic__header-btn-recenter",style:(_vm.root.style('header-btn-recenter')),on:{"click":function($event){$event.preventDefault();return _vm.recenterPosition($event)}}},[_vm._v(_vm._s(_vm.root.state.locale.Now))]),_c('label',{staticClass:"gantt-elastic__header-label",style:(_vm.root.style('header-label'))},[_vm._v("\n      "+_vm._s(_vm.root.state.locale['X-Scale'])+"\n      "),_c('div',{staticClass:"gantt-elastic__header-slider-wrapper",style:(_vm.root.style('header-slider-wrapper'))},[_c('vue-slider',{staticClass:"gantt-elastic__header-slider",attrs:{"tooltip":"false","process-style":_vm.root.style('header-slider--process'),"slider-style":_vm.root.style('header-slider--slider'),"max":24,"min":2,"width":"100px"},model:{value:(_vm.scale),callback:function ($$v) {_vm.scale=$$v},expression:"scale"}})],1)]),_c('label',{staticClass:"gantt-elastic__header-label",style:(_vm.root.style('header-label'))},[_vm._v("\n      "+_vm._s(_vm.root.state.locale['Y-Scale'])+"\n      "),_c('div',{staticClass:"gantt-elastic__header-slider-wrapper",style:(_vm.root.style('header-slider-wrapper'))},[_c('vue-slider',{staticClass:"gantt-elastic__header-slider",attrs:{"tooltip":"false","process-style":_vm.root.style('header-slider--process'),"slider-style":_vm.root.style('header-slider--slider'),"max":100,"min":6,"width":"100px"},model:{value:(_vm.height),callback:function ($$v) {_vm.height=$$v},expression:"height"}})],1)]),_c('label',{staticClass:"gantt-elastic__header-label",style:(_vm.root.style('header-label'))},[_vm._v("\n      "+_vm._s(_vm.root.state.locale['Before/After'])+"\n      "),_c('div',{staticClass:"gantt-elastic__header-slider-wrapper",style:(_vm.root.style('header-slider-wrapper'))},[_c('vue-slider',{staticClass:"gantt-elastic__header-slider",attrs:{"tooltip":"false","process-style":_vm.root.style('header-slider--process'),"slider-style":_vm.root.style('header-slider--slider'),"max":31,"min":0,"width":"100px"},model:{value:(_vm.scope),callback:function ($$v) {_vm.scope=$$v},expression:"scope"}})],1)]),_c('label',{staticClass:"gantt-elastic__header-label",style:(_vm.root.style('header-label'))},[_vm._v("\n      "+_vm._s(_vm.root.state.locale['Task list width'])+"\n      "),_c('div',{staticClass:"gantt-elastic__header-slider-wrapper",style:(_vm.root.style('header-slider-wrapper'))},[_c('vue-slider',{staticClass:"gantt-elastic__header-slider",attrs:{"tooltip":"false","process-style":_vm.root.style('header-slider--process'),"slider-style":_vm.root.style('header-slider--slider'),"max":100,"min":0,"width":"100px"},model:{value:(_vm.divider),callback:function ($$v) {_vm.divider=$$v},expression:"divider"}})],1)]),_c('label',{staticClass:"gantt-elastic__header-task-list-switch--wrapper",style:(_vm.root.style('header-task-list-switch--label'))},[_c('switches',{staticClass:"gantt-elastic__header-task-list-switch",style:(_vm.root.style('header-task-list-switch')),model:{value:(_vm.root.state.taskList.display),callback:function ($$v) {_vm.$set(_vm.root.state.taskList, "display", $$v)},expression:"root.state.taskList.display"}}),_vm._v("\n      "+_vm._s(_vm.root.state.locale['Display task list'])+"\n    ")],1)])])}
var Headervue_type_template_id_6541fa3e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=6541fa3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=template&id=7dcc57df&
var vue2_slidervue_type_template_id_7dcc57df_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"wrap",class:['vue-slider-component', _vm.flowDirection, _vm.disabledClass, _vm.stateClass, { 'vue-slider-has-label': _vm.piecewiseLabel }],style:([_vm.wrapStyles, _vm.boolDisabled ? _vm.disabledStyle : null]),on:{"click":_vm.wrapClick}},[_c('div',{ref:"elem",staticClass:"vue-slider",style:([_vm.elemStyles, _vm.bgStyle]),attrs:{"aria-hidden":"true"}},[(_vm.isRange)?[_c('div',{key:"dot0",ref:"dot0",class:[
          _vm.tooltipStatus,
          'vue-slider-dot',
          {
            'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 0,
            'vue-slider-dot-dragging': _vm.flag && _vm.currentSlider === 0,
            'vue-slider-dot-disabled': !_vm.boolDisabled && _vm.disabledArray[0]
          }
        ],style:(_vm.dotStyles),on:{"mousedown":function($event){_vm.moveStart($event, 0)},"touchstart":function($event){_vm.moveStart($event, 0)}}},[_vm._t("dot",[_c('div',{staticClass:"vue-slider-dot-handle",style:([
              (!_vm.boolDisabled && _vm.disabledArray[0])
              ? _vm.disabledDotStyles[0]
              : null,
              _vm.sliderStyles[0], 
              _vm.focusFlag && _vm.focusSlider === 0 ? _vm.focusStyles[0]: null
            ])})],{value:_vm.val[0],index:0,disabled:_vm.disabledArray[0]}),_c('div',{ref:"tooltip0",class:['vue-slider-tooltip-' + _vm.tooltipDirection[0], 'vue-slider-tooltip-wrap']},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles[0])},[_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val[0]) : _vm.val[0]))])],{value:_vm.val[0],index:0,disabled:!_vm.boolDisabled && _vm.disabledArray[0]})],2)],2),_c('div',{key:"dot1",ref:"dot1",class:[
          _vm.tooltipStatus,
          'vue-slider-dot',
          {
            'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 1,
            'vue-slider-dot-dragging': _vm.flag && _vm.currentSlider === 1,
            'vue-slider-dot-disabled': !_vm.boolDisabled && _vm.disabledArray[1]
          }
        ],style:(_vm.dotStyles),on:{"mousedown":function($event){_vm.moveStart($event, 1)},"touchstart":function($event){_vm.moveStart($event, 1)}}},[_vm._t("dot",[_c('div',{staticClass:"vue-slider-dot-handle",style:([
              (!_vm.boolDisabled && _vm.disabledArray[1])
              ? _vm.disabledDotStyles[1]
              : null,
              _vm.sliderStyles[1], 
              _vm.focusFlag && _vm.focusSlider === 1 ? _vm.focusStyles[1]: null
            ])})],{value:_vm.val[1],index:1,disabled:_vm.disabledArray[1]}),_c('div',{ref:"tooltip1",class:['vue-slider-tooltip-' + _vm.tooltipDirection[1], 'vue-slider-tooltip-wrap']},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles[1])},[_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val[1]) : _vm.val[1]))])],{value:_vm.val[1],index:1,disabled:!_vm.boolDisabled && _vm.disabledArray[1]})],2)],2)]:[_c('div',{key:"dot",ref:"dot",class:[
          _vm.tooltipStatus,
          'vue-slider-dot',
          {
            'vue-slider-dot-focus': _vm.focusFlag && _vm.focusSlider === 0,
            'vue-slider-dot-dragging': _vm.flag && _vm.currentSlider === 0
          }
        ],style:(_vm.dotStyles),on:{"mousedown":_vm.moveStart,"touchstart":_vm.moveStart}},[_vm._t("dot",[_c('div',{staticClass:"vue-slider-dot-handle",style:([
              _vm.sliderStyles,
              _vm.focusFlag && _vm.focusSlider === 0 ? _vm.focusStyles : null
            ])})],{value:_vm.val,disabled:_vm.boolDisabled}),_c('div',{class:['vue-slider-tooltip-' + _vm.tooltipDirection, 'vue-slider-tooltip-wrap']},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles)},[_vm._v(_vm._s(_vm.formatter ? _vm.formatting(_vm.val) : _vm.val))])],{value:_vm.val})],2)],2)],_c('ul',{staticClass:"vue-slider-piecewise"},_vm._l((_vm.piecewiseDotWrap),function(piecewiseObj,index){return _c('li',{key:index,staticClass:"vue-slider-piecewise-item",style:([_vm.piecewiseDotStyle, piecewiseObj.style])},[_vm._t("piecewise",[(_vm.piecewise)?_c('span',{staticClass:"vue-slider-piecewise-dot",style:([ _vm.piecewiseStyle, piecewiseObj.inRange ? _vm.piecewiseActiveStyle : null ])}):_vm._e()],{label:piecewiseObj.label,index:index,first:index === 0,last:index === _vm.piecewiseDotWrap.length - 1,active:piecewiseObj.inRange}),_vm._t("label",[(_vm.piecewiseLabel)?_c('span',{staticClass:"vue-slider-piecewise-label",style:([ _vm.labelStyle, piecewiseObj.inRange ? _vm.labelActiveStyle : null ])},[_vm._v("\n            "+_vm._s(piecewiseObj.label)+"\n          ")]):_vm._e()],{label:piecewiseObj.label,index:index,first:index === 0,last:index === _vm.piecewiseDotWrap.length - 1,active:piecewiseObj.inRange})],2)})),_c('div',{ref:"process",class:['vue-slider-process', { 'vue-slider-process-dragable': _vm.isRange && _vm.processDragable }],style:(_vm.processStyle),on:{"click":_vm.processClick,"mousedown":function($event){_vm.moveStart($event, 0, true)},"touchstart":function($event){_vm.moveStart($event, 0, true)}}},[_c('div',{ref:"mergedTooltip",class:['vue-merged-tooltip', 'vue-slider-tooltip-' + _vm.tooltipDirection[0], 'vue-slider-tooltip-wrap'],style:(_vm.tooltipMergedPosition)},[_vm._t("tooltip",[_c('span',{staticClass:"vue-slider-tooltip",style:(_vm.tooltipStyles)},[_vm._v("\n            "+_vm._s(_vm.mergeFormatter ? _vm.mergeFormatting(_vm.val[0], _vm.val[1]) : (_vm.formatter ? (_vm.val[0] === _vm.val[1] ? _vm.formatting(_vm.val[0]) : ((_vm.formatting(_vm.val[0])) + " - " + (_vm.formatting(_vm.val[1])))) : (_vm.val[0] === _vm.val[1] ? _vm.val[0] : ((_vm.val[0]) + " - " + (_vm.val[1])))))+"\n          ")])],{value:_vm.val,merge:true})],2)]),(!_vm.isRange && !_vm.data)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.val),expression:"val"}],staticClass:"vue-slider-sr-only",attrs:{"type":"range","min":_vm.min,"max":_vm.max},domProps:{"value":(_vm.val)},on:{"__r":function($event){_vm.val=$event.target.value}}}):_vm._e()],2)])}
var vue2_slidervue_type_template_id_7dcc57df_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=template&id=7dcc57df&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Unsharp text [#166](https://github.com/NightCatSama/vue-slider-component/issues/166)
const roundToDPR = (function () {
  const r = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
  return value => Math.round(value * r) / r
})()

/* harmony default export */ var vue2_slidervue_type_script_lang_js_ = ({
  name: 'VueSliderComponent',
  props: {
    width: {
      type: [Number, String],
      default: 'auto'
    },
    height: {
      type: [Number, String],
      default: 6
    },
    data: {
      type: Array,
      default: null
    },
    dotSize: {
      type: Number,
      default: 16
    },
    dotWidth: {
      type: Number,
      required: false
    },
    dotHeight: {
      type: Number,
      required: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    interval: {
      type: Number,
      default: 1
    },
    show: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: [Boolean, Array],
      default: false
    },
    piecewise: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: [String, Boolean],
      default: 'always'
    },
    eventType: {
      type: String,
      default: 'auto'
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    reverse: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 0.5
    },
    realTime: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Array, Object],
      default: 0
    },
    piecewiseLabel: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    minRange: {
      type: Number
    },
    maxRange: {
      type: Number
    },
    processDragable: {
      type: Boolean,
      default: false
    },
    useKeyboard: {
      type: Boolean,
      default: false
    },
    actionsKeyboard: {
      type: Array,
      default () {
        return [(i) => i - 1, (i) => i + 1]
      }
    },
    tooltipMerge: {
      type: Boolean,
      default: true
    },
    startAnimation: {
      type: Boolean,
      default: false
    },
    enableCross: {
      type: Boolean,
      default: true
    },
    sliderStyle: [Array, Object, Function],
    focusStyle: [Array, Object, Function],
    tooltipDir: [Array, String],
    formatter: [String, Function],
    mergeFormatter: [String, Function],
    piecewiseStyle: Object,
    disabledStyle: Object,
    piecewiseActiveStyle: Object,
    processStyle: Object,
    bgStyle: Object,
    tooltipStyle: [Array, Object, Function],
    disabledDotStyle: [Array, Object, Function],
    labelStyle: Object,
    labelActiveStyle: Object
  },
  data () {
    return {
      flag: false,
      dragFlag: false,
      crossFlag: false,
      keydownFlag: null,
      focusFlag: false,
      processFlag: false,
      processSign: null,
      size: 0,
      fixedValue: 0,
      focusSlider: 0,
      currentValue: 0,
      currentSlider: 0,
      isComponentExists: true,
      isMounted: false
    }
  },
  computed: {
    dotWidthVal () {
      return typeof this.dotWidth === 'number' ? this.dotWidth : this.dotSize
    },
    dotHeightVal () {
      return typeof this.dotHeight === 'number' ? this.dotHeight : this.dotSize
    },
    flowDirection () {
      return `vue-slider-${this.direction + (this.reverse ? '-reverse' : '')}`
    },
    tooltipMergedPosition () {
      if (!this.isMounted) return {}

      const tooltipDirection = this.tooltipDirection[0]
      const dot0 = this.$refs.dot0

      if (dot0) {
        if (this.direction === 'vertical') {
          const style = {}
          style[tooltipDirection] = `-${(this.dotHeightVal / 2) - (this.width / 2) + 9}px`
          return style
        } else {
          const style = {}
          style[tooltipDirection] = `-${(this.dotWidthVal / 2) - (this.height / 2) + 9}px`
          style['left'] = `50%`
          return style
        }
      }
    },
    tooltipDirection () {
      const dir = this.tooltipDir || (this.direction === 'vertical' ? 'left' : 'top')
      if (Array.isArray(dir)) {
        return this.isRange ? dir : dir[1]
      } else {
        return this.isRange ? [dir, dir] : dir
      }
    },
    tooltipStatus () {
      return this.tooltip === 'hover' && this.flag ? 'vue-slider-always' : this.tooltip ? `vue-slider-${this.tooltip}` : ''
    },
    tooltipClass () {
      return [`vue-slider-tooltip-${this.tooltipDirection}`, 'vue-slider-tooltip']
    },
    disabledArray () {
      return Array.isArray(this.disabled) ? this.disabled : [this.disabled, this.disabled]
    },
    boolDisabled () {
      return this.disabledArray.every(b => b === true)
    },
    isDisabled () {
      return this.eventType === 'none' ? true : this.boolDisabled
    },
    disabledClass () {
      return this.boolDisabled ? 'vue-slider-disabled' : ''
    },
    stateClass () {
      return {
        'vue-slider-state-process-drag': this.processFlag,
        'vue-slider-state-drag': this.flag && !this.processFlag && !this.keydownFlag,
        'vue-slider-state-focus': this.focusFlag
      }
    },
    isRange () {
      return Array.isArray(this.value)
    },
    slider () {
      return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot
    },
    minimum () {
      return this.data ? 0 : this.min
    },
    val: {
      get () {
        return this.data ? (this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue]) : this.currentValue
      },
      set (val) {
        if (this.data) {
          if (this.isRange) {
            const index0 = this.data.indexOf(val[0])
            const index1 = this.data.indexOf(val[1])
            if (index0 > -1 && index1 > -1) {
              this.currentValue = [index0, index1]
            }
          } else {
            const index = this.data.indexOf(val)
            if (index > -1) {
              this.currentValue = index
            }
          }
        } else {
          this.currentValue = val
        }
      }
    },
    currentIndex () {
      if (this.isRange) {
        return this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])]
      } else {
        return this.getIndexByValue(this.currentValue)
      }
    },
    indexRange () {
      if (this.isRange) {
        return this.currentIndex
      } else {
        return [0, this.currentIndex]
      }
    },
    maximum () {
      return this.data ? (this.data.length - 1) : this.max
    },
    multiple () {
      const decimals = `${this.interval}`.split('.')[1]
      return decimals ? Math.pow(10, decimals.length) : 1
    },
    spacing () {
      return this.data ? 1 : this.interval
    },
    total () {
      if (this.data) {
        return this.data.length - 1
      } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
        this.printError('Prop[interval] is illegal, Please make sure that the interval can be divisible')
      }
      return (this.maximum - this.minimum) / this.interval
    },
    gap () {
      return this.size / this.total
    },
    position () {
      return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : ((this.currentValue - this.minimum) / this.spacing * this.gap)
    },
    isFixed () {
      return this.fixed || this.minRange
    },
    limit () {
      return this.isRange ? this.isFixed ? [[0, (this.total - this.fixedValue) * this.gap], [this.fixedValue * this.gap, this.size]] : [[0, this.position[1]], [this.position[0], this.size]] : [0, this.size]
    },
    valueLimit () {
      return this.isRange ? this.isFixed ? [[this.minimum, this.maximum - (this.fixedValue * (this.spacing * this.multiple)) / this.multiple], [this.minimum + (this.fixedValue * (this.spacing * this.multiple)) / this.multiple, this.maximum]] : [[this.minimum, this.currentValue[1]], [this.currentValue[0], this.maximum]] : [this.minimum, this.maximum]
    },
    idleSlider () {
      return this.currentSlider === 0 ? 1 : 0
    },
    wrapStyles () {
      return this.direction === 'vertical' ? {
        height: typeof this.height === 'number' ? `${this.height}px` : this.height,
        padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`
      } : {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        padding: `${this.dotHeightVal / 2}px ${this.dotWidthVal / 2}px`
      }
    },
    sliderStyles () {
      if (Array.isArray(this.sliderStyle)) {
        return this.isRange ? this.sliderStyle : this.sliderStyle[1]
      } else if (typeof this.sliderStyle === 'function') {
        return this.sliderStyle(this.val, this.currentIndex)
      } else {
        return this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle
      }
    },
    focusStyles () {
      if (Array.isArray(this.focusStyle)) {
        return this.isRange ? this.focusStyle : this.focusStyle[1]
      } else if (typeof this.focusStyle === 'function') {
        return this.focusStyle(this.val, this.currentIndex)
      } else {
        return this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle
      }
    },
    disabledDotStyles () {
      const disabledStyle = this.disabledDotStyle
      if (Array.isArray(disabledStyle)) {
        return disabledStyle
      } else if (typeof disabledStyle === 'function') {
        const style = disabledStyle(this.val, this.currentIndex)
        return Array.isArray(style) ? style : [style, style]
      } else if (disabledStyle) {
        return [disabledStyle, disabledStyle]
      } else {
        return [{
          backgroundColor: '#ccc'
        }, {
          backgroundColor: '#ccc'
        }]
      }
    },
    tooltipStyles () {
      if (Array.isArray(this.tooltipStyle)) {
        return this.isRange ? this.tooltipStyle : this.tooltipStyle[1]
      } else if (typeof this.tooltipStyle === 'function') {
        return this.tooltipStyle(this.val, this.currentIndex)
      } else {
        return this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle
      }
    },
    elemStyles () {
      return this.direction === 'vertical' ? {
        width: `${this.width}px`,
        height: '100%'
      } : {
        height: `${this.height}px`
      }
    },
    dotStyles () {
      return this.direction === 'vertical' ? {
        width: `${this.dotWidthVal}px`,
        height: `${this.dotHeightVal}px`,
        left: `${(-(this.dotWidthVal - this.width) / 2)}px`
      } : {
        width: `${this.dotWidthVal}px`,
        height: `${this.dotHeightVal}px`,
        top: `${(-(this.dotHeightVal - this.height) / 2)}px`
      }
    },
    piecewiseDotStyle () {
      return this.direction === 'vertical' ? {
        width: `${this.width}px`,
        height: `${this.width}px`
      } : {
        width: `${this.height}px`,
        height: `${this.height}px`
      }
    },
    piecewiseDotWrap () {
      if (!this.piecewise && !this.piecewiseLabel) {
        return false
      }

      let arr = []
      for (let i = 0; i <= this.total; i++) {
        const style = this.direction === 'vertical' ? {
          bottom: `${this.gap * i - this.width / 2}px`,
          left: 0
        } : {
          left: `${this.gap * i - this.height / 2}px`,
          top: 0
        }
        const index = this.reverse ? (this.total - i) : i
        const label = this.data ? this.data[index] : (this.spacing * index) + this.min
        arr.push({
          style,
          label: this.formatter ? this.formatting(label) : label,
          inRange: index >= this.indexRange[0] && index <= this.indexRange[1]
        })
      }
      return arr
    }
  },
  watch: {
    value (val) {
      this.flag || this.setValue(val, true)
    },
    max (val) {
      if (val < this.min) {
        return this.printError('The maximum value can not be less than the minimum value.')
      }

      const resetVal = this.limitValue(this.val)
      this.setValue(resetVal)
      this.refresh()
    },
    min (val) {
      if (val > this.max) {
        return this.printError('The minimum value can not be greater than the maximum value.')
      }

      const resetVal = this.limitValue(this.val)
      this.setValue(resetVal)
      this.refresh()
    },
    show (bool) {
      if (bool && !this.size) {
        this.$nextTick(() => {
          this.refresh()
        })
      }
    },
    fixed () {
      this.computedFixedValue()
    },
    minRange () {
      this.computedFixedValue()
    }
  },
  methods: {
    bindEvents () {
      document.addEventListener('touchmove', this.moving, {passive: false})
      document.addEventListener('touchend', this.moveEnd, {passive: false})
      document.addEventListener('mousedown', this.blurSlider)
      document.addEventListener('mousemove', this.moving)
      document.addEventListener('mouseup', this.moveEnd)
      document.addEventListener('mouseleave', this.moveEnd)
      document.addEventListener('keydown', this.handleKeydown)
      document.addEventListener('keyup', this.handleKeyup)
      window.addEventListener('resize', this.refresh)

      if (this.isRange && this.tooltipMerge) {
        this.$refs.dot0.addEventListener('transitionend', this.handleOverlapTooltip)
        this.$refs.dot1.addEventListener('transitionend', this.handleOverlapTooltip)
      }
    },
    unbindEvents () {
      document.removeEventListener('touchmove', this.moving)
      document.removeEventListener('touchend', this.moveEnd)
      document.removeEventListener('mousedown', this.blurSlider)
      document.removeEventListener('mousemove', this.moving)
      document.removeEventListener('mouseup', this.moveEnd)
      document.removeEventListener('mouseleave', this.moveEnd)
      document.removeEventListener('keydown', this.handleKeydown)
      document.removeEventListener('keyup', this.handleKeyup)
      window.removeEventListener('resize', this.refresh)

      if (this.isRange && this.tooltipMerge) {
        this.$refs.dot0.removeEventListener('transitionend', this.handleOverlapTooltip)
        this.$refs.dot1.removeEventListener('transitionend', this.handleOverlapTooltip)
      }
    },
    handleKeydown (e) {
      if (!this.useKeyboard || !this.focusFlag) {
        return false
      }
      switch (e.keyCode) {
      case 37:
      case 40:
        e.preventDefault()
        this.keydownFlag = true
        this.flag = true
        this.changeFocusSlider(this.actionsKeyboard[0])
        break
      case 38:
      case 39:
        e.preventDefault()
        this.keydownFlag = true
        this.flag = true
        this.changeFocusSlider(this.actionsKeyboard[1])
        break
      }
    },
    handleKeyup () {
      if (this.keydownFlag) {
        this.keydownFlag = false
        this.flag = false
      }
    },
    changeFocusSlider (fn) {
      if (this.isRange) {
        let arr = this.currentIndex.map((index, i) => {
          if (i === this.focusSlider || this.fixed) {
            const val = fn(index)
            const range = this.fixed ? this.valueLimit[i] : [0, this.total]
            if (val <= range[1] && val >= range[0]) {
              return val
            }
          }
          return index
        })
        if (arr[0] > arr[1]) {
          this.focusSlider = this.focusSlider === 0 ? 1 : 0
          arr = arr.reverse()
        }
        this.setIndex(arr)
      } else {
        this.setIndex(fn(this.currentIndex))
      }
    },
    blurSlider (e) {
      const dot = this.isRange ? this.$refs[`dot${this.focusSlider}`] : this.$refs.dot
      if (!dot || dot === e.target || dot.contains(e.target)) {
        return false
      }
      this.focusFlag = false
    },
    formatting (value) {
      return typeof this.formatter === 'string' ? this.formatter.replace(/\{value\}/, value) : this.formatter(value)
    },
    mergeFormatting (value1, value2) {
      return typeof this.mergeFormatter === 'string' ? this.mergeFormatter.replace(/\{(value1|value2)\}/g, (_, key) => key === 'value1' ? value1 : value2) : this.mergeFormatter(value1, value2)
    },
    getPos (e) {
      this.realTime && this.getStaticData()
      return this.direction === 'vertical' ? (this.reverse ? (e.pageY - this.offset) : (this.size - (e.pageY - this.offset))) : (this.reverse ? (this.size - (e.clientX - this.offset)) : (e.clientX - this.offset))
    },
    processClick (e) {
      if (this.fixed) {
        e.stopPropagation()
      }
    },
    wrapClick (e) {
      if (this.isDisabled || !this.clickable || this.processFlag || this.dragFlag) return false
      const pos = this.getPos(e)
      if (this.isRange) {
        if (this.disabledArray.every(b => b === false)) {
          this.currentSlider = pos > ((this.position[1] - this.position[0]) / 2 + this.position[0]) ? 1 : 0
        } else if (this.disabledArray[0]) {
          if (pos < this.position[0]) return false
          this.currentSlider = 1
        } else if (this.disabledArray[1]) {
          if (pos > this.position[1]) return false
          this.currentSlider = 0
        }
      }
      if (this.disabledArray[this.currentSlider]) {
        return false
      }
      this.setValueOnPos(pos)

      if (this.isRange && this.tooltipMerge) {
        const timer = setInterval(() => this.handleOverlapTooltip(), 16.7)
        setTimeout(() => window.clearInterval(timer), this.speed * 1000)
      }
    },
    moveStart (e, index = 0, isProcess) {
      if (this.disabledArray[index]) {
        return false
      }
      if (this.stopPropagation) {
        e.stopPropagation()
      }
      if (this.isRange) {
        this.currentSlider = index

        if (isProcess) {
          if (!this.processDragable) {
            return false
          }
          this.processFlag = true
          this.processSign = {
            pos: this.position,
            start: this.getPos((e.targetTouches && e.targetTouches[0]) ? e.targetTouches[0] : e)
          }
        }

        if (!this.enableCross && this.val[0] === this.val[1]) {
          this.crossFlag = true
        }
      }
      if (!isProcess && this.useKeyboard) {
        this.focusFlag = true
        this.focusSlider = index
      }
      this.flag = true
      this.$emit('drag-start', this)
    },
    moving (e) {
      if (this.stopPropagation) {
        e.stopPropagation()
      }

      if (!this.flag) return false
      e.preventDefault()

      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0]
      if (this.processFlag) {
        this.currentSlider = 0
        this.setValueOnPos(this.processSign.pos[0] + this.getPos(e) - this.processSign.start, true)
        this.currentSlider = 1
        this.setValueOnPos(this.processSign.pos[1] + this.getPos(e) - this.processSign.start, true)
      } else {
        this.dragFlag = true
        this.setValueOnPos(this.getPos(e), true)
      }

      if (this.isRange && this.tooltipMerge) {
        this.handleOverlapTooltip()
      }
    },
    moveEnd (e) {
      if (this.stopPropagation) {
        e.stopPropagation()
      }
      if (this.flag) {
        this.$emit('drag-end', this)
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue()
        }
      } else {
        return false
      }
      this.flag = false
      window.setTimeout(() => {
        this.crossFlag = false
        this.dragFlag = false
        this.processFlag = false
      }, 0)
      this.setPosition()
    },
    setValueOnPos (pos, isDrag) {
      const range = this.isRange ? this.limit[this.currentSlider] : this.limit
      const valueRange = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit
      const index = Math.round(pos / this.gap)
      if (pos >= range[0] && pos <= range[1]) {
        const v = this.getValueByIndex(index)
        this.setTransform(pos)
        this.setCurrentValue(v, isDrag)
        if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
          this.setTransform(pos + ((this.fixedValue * this.gap) * (this.currentSlider === 0 ? 1 : -1)), true)
          this.setCurrentValue((v * this.multiple + (this.fixedValue * this.spacing * this.multiple * (this.currentSlider === 0 ? 1 : -1))) / this.multiple, isDrag, true)
        }
      } else {
        const anotherSlider = pos < range[0] ? 0 : 1
        const currentSlider = anotherSlider === 0 ? 1 : 0
        this.setTransform(range[anotherSlider])
        this.setCurrentValue(valueRange[anotherSlider])
        if (this.isRange && (this.fixed || this.isLessRange(pos, index))) {
          this.setTransform(this.limit[this.idleSlider][anotherSlider], true)
          this.setCurrentValue(this.valueLimit[this.idleSlider][anotherSlider], isDrag, true)
        } else if (this.isRange && (this.enableCross || this.crossFlag) && !this.isFixed && !this.disabledArray[anotherSlider] && this.currentSlider === currentSlider) {
          this.focusSlider = anotherSlider
          this.currentSlider = anotherSlider
        }
      }
      this.crossFlag = false
    },
    isLessRange (pos, index) {
      if (!this.isRange || (!this.minRange && !this.maxRange)) {
        return false
      }

      const diff = this.currentSlider === 0 ? this.currentIndex[1] - index : index - this.currentIndex[0]
      if (this.minRange && diff <= this.minRange) {
        this.fixedValue = this.minRange
        return true
      }
      if (this.maxRange && diff >= this.maxRange) {
        this.fixedValue = this.maxRange
        return true
      }
      this.computedFixedValue()
      return false
    },
    isDiff (a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some((v, i) => v !== b[i])
      }
      return a !== b
    },
    setCurrentValue (val, isDrag, isIdleSlider) {
      const slider = isIdleSlider ? this.idleSlider : this.currentSlider
      if (val < this.minimum || val > this.maximum) return false
      if (this.isRange) {
        if (this.isDiff(this.currentValue[slider], val)) {
          this.currentValue.splice(slider, 1, val)
          if (!this.lazy || !this.flag) {
            this.syncValue()
          }
        }
      } else if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val
        if (!this.lazy || !this.flag) {
          this.syncValue()
        }
      }
      isDrag || this.setPosition()
    },
    getValueByIndex (index) {
      return ((this.spacing * this.multiple) * index + (this.minimum * this.multiple)) / this.multiple
    },
    getIndexByValue (value) {
      return Math.round((value - this.minimum) * this.multiple) / (this.spacing * this.multiple)
    },
    setIndex (val) {
      if (Array.isArray(val) && this.isRange) {
        let value
        if (this.data) {
          value = [this.data[val[0]], this.data[val[1]]]
        } else {
          value = [this.getValueByIndex(val[0]), this.getValueByIndex(val[1])]
        }
        this.setValue(value)
      } else {
        val = this.getValueByIndex(val)
        if (this.isRange) {
          this.currentSlider = val > ((this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0]) ? 1 : 0
        }
        this.setCurrentValue(val)
      }
    },
    setValue (val, noCb, speed) {
      if (this.isDiff(this.val, val)) {
        const resetVal = this.limitValue(val)
        this.val = this.isRange ? resetVal.concat() : resetVal
        this.computedFixedValue()
        this.syncValue(noCb)
      }

      this.$nextTick(() => this.setPosition(speed))
    },
    computedFixedValue () {
      if (!this.isFixed) {
        this.fixedValue = 0
        return false
      }

      this.fixedValue = Math.max(this.fixed ? this.currentIndex[1] - this.currentIndex[0] : 0, this.minRange || 0)
    },
    setPosition (speed) {
      this.flag || this.setTransitionTime(speed === undefined ? this.speed : speed)
      if (this.isRange) {
        this.setTransform(this.position[0], this.currentSlider === 1)
        this.setTransform(this.position[1], this.currentSlider === 0)
      } else {
        this.setTransform(this.position)
      }
      this.flag || this.setTransitionTime(0)
    },
    setTransform (val, isIdleSlider) {
      const slider = isIdleSlider ? this.idleSlider : this.currentSlider
      const value = roundToDPR((this.direction === 'vertical' ? ((this.dotHeightVal / 2) - val) : (val - (this.dotWidthVal / 2))) * (this.reverse ? -1 : 1))
      const translateValue = this.direction === 'vertical' ? `translateY(${value}px)` : `translateX(${value}px)`
      const processSize = this.fixed ? `${this.fixedValue * this.gap}px` : `${slider === 0 ? this.position[1] - val : val - this.position[0]}px`
      const processPos = this.fixed ? `${slider === 0 ? val : (val - this.fixedValue * this.gap)}px` : `${slider === 0 ? val : this.position[0]}px`
      if (this.isRange) {
        this.slider[slider].style.transform = translateValue
        this.slider[slider].style.WebkitTransform = translateValue
        this.slider[slider].style.msTransform = translateValue
        if (this.direction === 'vertical') {
          this.$refs.process.style.height = processSize
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = processPos
        } else {
          this.$refs.process.style.width = processSize
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = processPos
        }
      } else {
        this.slider.style.transform = translateValue
        this.slider.style.WebkitTransform = translateValue
        this.slider.style.msTransform = translateValue
        if (this.direction === 'vertical') {
          this.$refs.process.style.height = `${val}px`
          this.$refs.process.style[this.reverse ? 'top' : 'bottom'] = 0
        } else {
          this.$refs.process.style.width = `${val}px`
          this.$refs.process.style[this.reverse ? 'right' : 'left'] = 0
        }
      }
    },
    setTransitionTime (time) {
      // In order to avoid browser merge style and modify together
      time || this.$refs.process.offsetWidth

      if (this.isRange) {
        for (let i = 0; i < this.slider.length; i++) {
          this.slider[i].style.transitionDuration = `${time}s`
          this.slider[i].style.WebkitTransitionDuration = `${time}s`
        }
        this.$refs.process.style.transitionDuration = `${time}s`
        this.$refs.process.style.WebkitTransitionDuration = `${time}s`
      } else {
        this.slider.style.transitionDuration = `${time}s`
        this.slider.style.WebkitTransitionDuration = `${time}s`
        this.$refs.process.style.transitionDuration = `${time}s`
        this.$refs.process.style.WebkitTransitionDuration = `${time}s`
      }
    },
    limitValue (val) {
      if (this.data) {
        return val
      }

      const inRange = (v) => {
        if (v < this.min) {
          this.printError(`The value of the slider is ${val}, the minimum value is ${this.min}, the value of this slider can not be less than the minimum value`)
          return this.min
        } else if (v > this.max) {
          this.printError(`The value of the slider is ${val}, the maximum value is ${this.max}, the value of this slider can not be greater than the maximum value`)
          return this.max
        }
        return v
      }

      if (this.isRange) {
        return val.map((v) => inRange(v))
      } else {
        return inRange(val)
      }
    },
    syncValue (noCb) {
      let val = this.isRange ? this.val.concat() : this.val
      this.$emit('input', val)
      this.keydownFlag && this.$emit('on-keypress', val)
      noCb || this.$emit('callback', val)
    },
    getValue () {
      return this.val
    },
    getIndex () {
      return this.currentIndex
    },
    getStaticData () {
      if (this.$refs.elem) {
        this.size = this.direction === 'vertical' ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth
        this.offset = this.direction === 'vertical' ? (this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop) : this.$refs.elem.getBoundingClientRect().left
      }
    },
    refresh () {
      if (this.$refs.elem) {
        this.getStaticData()
        this.computedFixedValue()
        this.setPosition()
      }
    },
    printError (msg) {
      if (this.debug) {
        console.error(`[VueSlider error]: ${msg}`)
      }
    },
    handleOverlapTooltip () {
      const isDirectionSame = this.tooltipDirection[0] === this.tooltipDirection[1]

      if (this.isRange && isDirectionSame) {
        const tooltip0 = this.reverse ? this.$refs.tooltip1 : this.$refs.tooltip0
        const tooltip1 = this.reverse ? this.$refs.tooltip0 : this.$refs.tooltip1
        const tooltip0Rect = tooltip0.getBoundingClientRect()
        const tooltip1Rect = tooltip1.getBoundingClientRect()

        const tooltip0Right = tooltip0Rect.right
        const tooltip1Left = tooltip1Rect.left

        const tooltip0Y = tooltip0Rect.top
        const tooltip1Y = tooltip1Rect.top + tooltip1Rect.height

        const horizontalOverlap = this.direction === 'horizontal' && tooltip0Right > tooltip1Left
        const verticalOverlap = this.direction === 'vertical' && tooltip1Y > tooltip0Y

        if (horizontalOverlap || verticalOverlap) {
          this.handleDisplayMergedTooltip(true)
        } else {
          this.handleDisplayMergedTooltip(false)
        }
      }
    },
    handleDisplayMergedTooltip (show) {
      const tooltip0 = this.$refs.tooltip0
      const tooltip1 = this.$refs.tooltip1
      const mergedTooltip = this.$refs.process.getElementsByClassName('vue-merged-tooltip')[0]

      if (show) {
        tooltip0.style.visibility = 'hidden'
        tooltip1.style.visibility = 'hidden'
        mergedTooltip.style.visibility = 'visible'
      } else {
        tooltip0.style.visibility = 'visible'
        tooltip1.style.visibility = 'visible'
        mergedTooltip.style.visibility = 'hidden'
      }
    }
  },
  mounted () {
    this.isComponentExists = true

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return this.printError('window or document is undefined, can not be initialization.')
    }

    this.$nextTick(() => {
      if (this.isComponentExists) {
        this.getStaticData()
        this.setValue(this.limitValue(this.value), true, this.startAnimation ? this.speed : 0)
        this.bindEvents()

        if (this.isRange && this.tooltipMerge && !this.startAnimation) {
          this.$nextTick(() => {
            this.handleOverlapTooltip()
          })
        }
      }
    })

    this.isMounted = true
  },
  beforeDestroy () {
    this.isComponentExists = false
    this.unbindEvents()
  }
});

// CONCATENATED MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue2_slidervue_type_script_lang_js_ = (vue2_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue?vue&type=style&index=0&lang=css&
var vue2_slidervue_type_style_index_0_lang_css_ = __webpack_require__("d95a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/vue-slider-component/src/vue2-slider.vue






/* normalize component */

var component = normalizeComponent(
  src_vue2_slidervue_type_script_lang_js_,
  vue2_slidervue_type_template_id_7dcc57df_render,
  vue2_slidervue_type_template_id_7dcc57df_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "vue2-slider.vue"
/* harmony default export */ var vue2_slider = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=template&id=8e4870fc&
var switchesvue_type_template_id_8e4870fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classObject},[(_vm.shouldShowLabel)?_c('span',{staticClass:"vue-switcher__label"},[(_vm.label)?_c('span',{domProps:{"textContent":_vm._s(_vm.label)}}):_vm._e(),(!_vm.label && _vm.value)?_c('span',{domProps:{"textContent":_vm._s(_vm.textEnabled)}}):_vm._e(),(!_vm.label && !_vm.value)?_c('span',{domProps:{"textContent":_vm._s(_vm.textDisabled)}}):_vm._e()]):_vm._e(),_c('input',{attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":_vm.value},on:{"change":_vm.trigger}}),_c('div')])}
var switchesvue_type_template_id_8e4870fc_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-switches/src/switches.vue?vue&type=template&id=8e4870fc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var switchesvue_type_script_lang_js_ = ({
    name: 'switches',

    props: {
        typeBold: {
            default: false
        },

        value: {
            default: false
        },

        disabled: {
            default: false
        },

        label: {
            default: ''
        },

        textEnabled: {
            default: ''
        },

        textDisabled: {
            default: ''
        },

        color: {
            default: 'default'
        },

        theme: {
            default: 'default'
        },

        emitOnMount: {
            default: true
        }
    },

    mounted () {
        if(this.emitOnMount) {
            this.$emit('input', this.value)
        }
    },

    methods: {
        trigger (e) {
            this.$emit('input', e.target.checked)
        }
    },

    computed: {
        classObject () {

            const { color, value, theme, typeBold, disabled } = this;

            return {
                'vue-switcher' : true,
                ['vue-switcher--unchecked'] : !value,
                ['vue-switcher--disabled'] : disabled,
                ['vue-switcher--bold']: typeBold,
                ['vue-switcher--bold--unchecked']: typeBold && !value,
                [`vue-switcher-theme--${theme}`] : color,
                [`vue-switcher-color--${color}`] : color,
            };

        },

        shouldShowLabel () {
            return this.label !== '' || this.textEnabled !== '' || this.textDisabled !== '';
        }
    }
});


// CONCATENATED MODULE: ./node_modules/vue-switches/src/switches.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_switchesvue_type_script_lang_js_ = (switchesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-switches/dist/switches.css?vue&type=style&index=0&lang=css&
var switchesvue_type_style_index_0_lang_css_ = __webpack_require__("1798");

// CONCATENATED MODULE: ./node_modules/vue-switches/src/switches.vue






/* normalize component */

var switches_component = normalizeComponent(
  src_switchesvue_type_script_lang_js_,
  switchesvue_type_template_id_8e4870fc_render,
  switchesvue_type_template_id_8e4870fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

switches_component.options.__file = "switches.vue"
/* harmony default export */ var switches = (switches_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    vueSlider: vue2_slider,
    Switches: switches
  },
  inject: ["root"],
  data () {
    return {
      scaleTimeoutId: null,
      firstScale: false,
      localScale: this.root.state.times.timeZoom,
      localHeight: this.root.state.row.height,
      localBefore: this.root.state.scope.before,
      localPercent: this.root.state.taskList.percent,
      sliderOptions: {
        xScale: {
          value: this.root.state.times.timeZoom
        }
      }
    };
  },
  created () {
    this.localScale = this.root.state.times.timeZoom;
    this.localHeight = this.root.state.row.height;
    this.localBefore = this.root.state.scope.before;
    this.localPercent = this.root.state.taskList.percent;
  },
  methods: {
    getImage () {
      this.root.getImage("image/png")
        .then(imgB64 => {
          const link = document.createElement("a");
          link.href = imgB64;
          link.download = "gantt-elastic.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    },
    recenterPosition () {
      this.$root.$emit("gantt-elastic.recenterPosition");
    },
    setScale (value) {
      if (this.scaleTimeoutId !== null) {
        clearTimeout(this.scaleTimeoutId);
        this.scaleTimeoutId = null;
      }
      // debouncing
      if (this.firstScale) {
        this.scaleTimeoutId = setTimeout(() => {
          this.$root.$emit("gantt-elastic.times.timeZoom.change", value);
          this.scaleTimeoutId = null;
        }, 75);
      } else {
        this.$root.$emit("gantt-elastic.times.timeZoom.change", value);
        this.firstScale = true;
      }
    }
  },
  computed: {
    scale: {
      get () {
        return this.localScale;
      },
      set (value) {
        this.localScale = Number(value);
        this.setScale(this.localScale);
      }
    },
    height: {
      get () {
        return this.localHeight;
      },
      set (value) {
        this.localHeight = Number(value);
        this.$root.$emit("gantt-elastic.row.height.change", Number(value));
      }
    },
    scope: {
      get () {
        return this.localBefore;
      },
      set (value) {
        this.localBefore = Number(value);
        this.$root.$emit("gantt-elastic.scope.change", Number(value));
        this.$root.$emit("gantt-elastic.scope.before.change", Number(value));
        this.$root.$emit("gantt-elastic.scope.after.change", Number(value));
      }
    },
    divider: {
      get () {
        return this.localPercent;
      },
      set (value) {
        this.localPercent = Number(value);
        this.$root.$emit("gantt-elastic.taskList.width.change", Number(value));
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Header.vue





/* normalize component */

var Header_component = normalizeComponent(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_6541fa3e_render,
  Headervue_type_template_id_6541fa3e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Header_component.options.__file = "Header.vue"
/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=template&id=aa3984ae&
var TaskListvue_type_template_id_aa3984ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.root.state.taskList.display)?_c('foreignObject',{staticClass:"gantt-elastic__task-list-wrapper",style:(_vm.root.style('task-list-wrapper')),attrs:{"x":"0","y":"0","width":"100%","height":"100%"}},[_c('div',{staticClass:"gantt-elastic__task-list",style:(_vm.root.style('task-list')),attrs:{"xmlns":"http://www.w3.org/1999/xhtml"}},[_c('task-list-header'),_vm._l((_vm.root.visibleTasks),function(task){return _c('task-list-item',{key:task.id,attrs:{"task":task,"expander-style":_vm.getListExpanderStyle(task)}})})],2)]):_vm._e()}
var TaskListvue_type_template_id_aa3984ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TaskList/TaskList.vue?vue&type=template&id=aa3984ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=7116a1d6&
var TaskListHeadervue_type_template_id_7116a1d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-elastic__task-list-header",style:(_vm.root.style('task-list-header'))},_vm._l((_vm.root.state.taskList.columns),function(column){return _c('div',{key:column._id,staticClass:"gantt-elastic__task-list-header-column",style:(_vm.root.style('task-list-header-column', column.style['task-list-header-column'], _vm.getStyle(column)))},[(column.expander)?_c('task-list-expander',{attrs:{"tasks":_vm.collapsible}}):_vm._e(),_c('div',{staticClass:"gantt-elastic__task-list-header-label",style:(_vm.root.style('task-list-header-label',column.style['task-list-header-label'])),attrs:{"column":column},on:{"mouseup":function($event){_vm.resizerMouseUp($event, column)}}},[_vm._v(_vm._s(column.label))]),_c('div',{staticClass:"gantt-elastic__task-list-header-resizer-wrapper",style:(_vm.root.style('task-list-header-resizer-wrapper',column.style['task-list-header-resizer-wrapper'])),attrs:{"column":column},on:{"mousedown":function($event){_vm.resizerMouseDown($event, column)}}},[_c('div',{staticClass:"gantt-elastic__task-list-header-resizer",style:(_vm.root.style('task-list-header-resizer',column.style['task-list-header-resizer']))},[_c('div',{staticClass:"gantt-elastic__task-list-header-resizer-dot",style:(_vm.root.style('task-list-header-resizer-dot',column.style['task-list-header-resizer-dot']))}),_c('div',{staticClass:"gantt-elastic__task-list-header-resizer-dot",style:(_vm.root.style('task-list-header-resizer-dot',column.style['task-list-header-resizer-dot']))}),_c('div',{staticClass:"gantt-elastic__task-list-header-resizer-dot",style:(_vm.root.style('task-list-header-resizer-dot',column.style['task-list-header-resizer-dot']))})])])],1)}))}
var TaskListHeadervue_type_template_id_7116a1d6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=7116a1d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/Expander.vue?vue&type=template&id=14d62ec6&
var Expandervue_type_template_id_14d62ec6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-elastic__task-list-column-expander-wrapper",style:(_vm.root.style('task-list-column-expander-wrapper'))},[_c('svg',{staticClass:"gantt-elastic__task-list-column-expander-content",style:(_vm.root.style('task-list-column-expander-content')),attrs:{"width":_vm.root.state.taskList.expander.size,"height":_vm.root.state.taskList.expander.size}},[(_vm.allChildren.length)?_c('rect',{staticClass:"gantt-elastic__task-list-column-expander-border",style:(_vm.root.style('task-list-column-expander-border',_vm.borderStyle)),attrs:{"x":_vm.border,"y":_vm.border,"width":_vm.root.state.taskList.expander.size-_vm.border*2,"height":_vm.root.state.taskList.expander.size-_vm.border*2,"rx":"2","ry":"2"},on:{"click":_vm.toggle}}):_vm._e(),(_vm.allChildren.length)?_c('line',{staticClass:"gantt-elastic__task-list-column-expander-line",style:(_vm.root.style('task-list-column-expander-line')),attrs:{"x1":_vm.lineOffset,"y1":_vm.root.state.taskList.expander.size/2,"x2":_vm.root.state.taskList.expander.size-_vm.lineOffset,"y2":_vm.root.state.taskList.expander.size/2},on:{"click":_vm.toggle}}):_vm._e(),(_vm.collapsed)?_c('line',{staticClass:"gantt-elastic__task-list-column-expander-line",style:(_vm.root.style('task-list-column-expander-line')),attrs:{"x1":_vm.root.state.taskList.expander.size/2,"y1":_vm.lineOffset,"x2":_vm.root.state.taskList.expander.size/2,"y2":_vm.root.state.taskList.expander.size-_vm.lineOffset},on:{"click":_vm.toggle}}):_vm._e()])])}
var Expandervue_type_template_id_14d62ec6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TaskList/Expander.vue?vue&type=template&id=14d62ec6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/Expander.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Expandervue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["tasks"],
  data () {
    const border = 0.5;
    return {
      border,
      borderStyle: {
        "stroke-width": border
      },
      lineOffset: 5
    };
  },
  computed: {
    allChildren () {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(child => {
          children.push(child);
        });
      });
      return children;
    },
    collapsed () {
      if (this.tasks.length === 0) {
        return false;
      }
      let collapsed = 0;
      for (let i = 0, len = this.tasks.length; i < len; i++) {
        if (this.tasks[i].collapsed) {
          collapsed++;
        }
      }
      return collapsed === this.tasks.length;
    }
  },
  methods: {
    toggle () {
      if (this.allChildren.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
        task.allChildren.forEach(child => {
          child.visible = !collapsed && !child.parent.collapsed;
        });
      });
    }
  }
});

// CONCATENATED MODULE: ./src/components/TaskList/Expander.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_Expandervue_type_script_lang_js_ = (Expandervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/Expander.vue





/* normalize component */

var Expander_component = normalizeComponent(
  TaskList_Expandervue_type_script_lang_js_,
  Expandervue_type_template_id_14d62ec6_render,
  Expandervue_type_template_id_14d62ec6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Expander_component.options.__file = "Expander.vue"
/* harmony default export */ var Expander = (Expander_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TaskListHeadervue_type_script_lang_js_ = ({
  components: {
    TaskListExpander: Expander
  },
  inject: ["root"],
  data () {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },
  computed: {
    getStyle () {
      return column => {
        const state = this.root.state;
        return {
          "height": state.calendar.height + this.root.style('calendar-row')['stroke-width'] + "px",
          "margin-bottom": state.calendar.gap + "px",
          "width": column.finalWidth + "px"
        };
      };
    },
    collapsible () {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    },
  },
  methods: {
    resizerMouseDown (event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.$root.$emit("gantt-elastic.taskList.column.width.change.start", this.resizer.moving.width);
      }
    },
    resizerMouseMove (event) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        this.$root.$emit("gantt-elastic.taskList.column.width.change", this.resizer.moving.width);
      }
    },
    resizerMouseUp (event) {
      if (this.resizer.moving) {
        this.$root.$emit("gantt-elastic.taskList.column.width.change", this.resizer.moving.width);
        this.$root.$emit("gantt-elastic.taskList.column.width.change.stop", this.resizer.moving.width);
        this.resizer.moving = false;
      }
    }
  },
  created () {
    this.$root.$on("gantt-elastic.main.mousemove", this.resizerMouseMove);
    this.$root.$on("gantt-elastic.main.mouseup", this.resizerMouseUp);
  }
});

// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_TaskListHeadervue_type_script_lang_js_ = (TaskListHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue





/* normalize component */

var TaskListHeader_component = normalizeComponent(
  TaskList_TaskListHeadervue_type_script_lang_js_,
  TaskListHeadervue_type_template_id_7116a1d6_render,
  TaskListHeadervue_type_template_id_7116a1d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

TaskListHeader_component.options.__file = "TaskListHeader.vue"
/* harmony default export */ var TaskListHeader = (TaskListHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=599e859c&
var TaskListItemvue_type_template_id_599e859c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-elastic__task-list-item",style:(_vm.root.style('task-list-item'))},_vm._l((_vm.root.state.taskList.columns),function(column){return _c('item-column',{key:column._id,attrs:{"column":column,"task":_vm.task}},[(column.expander)?_c('task-list-expander',{style:(_vm.expanderStyle),attrs:{"tasks":[_vm.task]}}):_vm._e()],1)}))}
var TaskListItemvue_type_template_id_599e859c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TaskList/TaskListItem.vue?vue&type=template&id=599e859c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=5c0861bc&
var ItemColumnvue_type_template_id_5c0861bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gantt-elastic__task-list-item-column",style:(_vm.root.style('task-list-item-column', _vm.column.style['task-list-item-column'], {width:_vm.column.finalWidth+'px',height:_vm.column.height+'px'}))},[_c('div',{staticClass:"gantt-elastic__task-list-item-value-wrapper",style:(_vm.root.style('task-list-item-value-wrapper',_vm.column.style['task-list-item-value-wrapper']))},[_vm._t("default"),(!_vm.html)?_c('div',{staticClass:"gantt-elastic__task-list-item-value",style:(_vm.root.style('task-list-item-value',_vm.column.style['task-list-item-value']))},[_vm._v(_vm._s(_vm.value))]):_vm._e(),(_vm.html)?_c('div',{staticClass:"gantt-elastic__task-list-item-value",style:(_vm.root.style('task-list-item-value',_vm.column.style['task-list-item-value'])),domProps:{"innerHTML":_vm._s(_vm.value)}}):_vm._e()],2)])}
var ItemColumnvue_type_template_id_5c0861bc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TaskList/ItemColumn.vue?vue&type=template&id=5c0861bc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ItemColumnvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["column", "task"],
  data () {
    return {};
  },
  computed: {
    html () {
      if (typeof this.column.html !== "undefined" && this.column.html === true) {
        return true;
      }
      return false;
    },
    value () {
      if (typeof this.column.value === "function") {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    }
  }
});

// CONCATENATED MODULE: ./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_ItemColumnvue_type_script_lang_js_ = (ItemColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/ItemColumn.vue





/* normalize component */

var ItemColumn_component = normalizeComponent(
  TaskList_ItemColumnvue_type_script_lang_js_,
  ItemColumnvue_type_template_id_5c0861bc_render,
  ItemColumnvue_type_template_id_5c0861bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ItemColumn_component.options.__file = "ItemColumn.vue"
/* harmony default export */ var ItemColumn = (ItemColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//




/* harmony default export */ var TaskListItemvue_type_script_lang_js_ = ({
  components: {
    TaskListExpander: Expander,
    ItemColumn: ItemColumn
  },
  inject: ["root"],
  props: ["task", "expanderStyle"],
  data () {
    return {};
  }
});

// CONCATENATED MODULE: ./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_TaskListItemvue_type_script_lang_js_ = (TaskListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/TaskListItem.vue





/* normalize component */

var TaskListItem_component = normalizeComponent(
  TaskList_TaskListItemvue_type_script_lang_js_,
  TaskListItemvue_type_template_id_599e859c_render,
  TaskListItemvue_type_template_id_599e859c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

TaskListItem_component.options.__file = "TaskListItem.vue"
/* harmony default export */ var TaskListItem = (TaskListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var TaskListvue_type_script_lang_js_ = ({
  components: {
    TaskListHeader: TaskListHeader,
    TaskListItem: TaskListItem
  },
  inject: ["root"],
  data () {
    return {};
  },
  computed: {
    getListExpanderStyle () {
      return task => {
        const state = this.root.state;
        const padding = (task.parents.length - 1) * state.taskList.expander.padding;
        const maxLevel = this.root.getMaximalLevel();
        let height = state.row.height + state.grid.horizontal.gap * 2 - this.root.style('grid-line-vertical').strokeWidth;
        let width = ((state.taskList.expander.size + this.root.style("calendar-row")["stroke-width"] + padding + state.taskList.expander.margin) / 100) * state.taskList.percent;
        if (state.taskList.expander.straight) {
          width = (maxLevel - 1) * state.taskList.expander.size + state.taskList.expander.padding * 2;
        }
        const style = {
          width: width + "px",
          height: height + "px",
          "border-color": "#00000010",
          "padding-left": padding + state.taskList.expander.margin + "px",
          margin: "auto 0px"
        };
        return style;
      };
    }
  }
});

// CONCATENATED MODULE: ./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_TaskListvue_type_script_lang_js_ = (TaskListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/TaskList.vue





/* normalize component */

var TaskList_component = normalizeComponent(
  TaskList_TaskListvue_type_script_lang_js_,
  TaskListvue_type_template_id_aa3984ae_render,
  TaskListvue_type_template_id_aa3984ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

TaskList_component.options.__file = "TaskList.vue"
/* harmony default export */ var TaskList = (TaskList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Tree.vue?vue&type=template&id=ea50a814&
var Treevue_type_template_id_ea50a814_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"gantt-elastic_tree",style:(_vm.root.style('tree')),attrs:{"x":"0","y":"0","width":_vm.getWidth,"height":_vm.getHeight,"xmlns":"http://www.w3.org/2000/svg"}},[_c('calendar'),_c('grid'),_c('dependency-lines',{attrs:{"tasks":_vm.root.visibleTasks}}),_vm._l((_vm.root.visibleTasks),function(task){return _c('g',{key:task.id,staticClass:"gantt-elastic__tree-row-wrapper",style:(_vm.root.style('tree-row-wrapper')),attrs:{"task":task}},[_c(task.type,{tag:"component",attrs:{"task":task}})],1)})],2)}
var Treevue_type_template_id_ea50a814_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/Tree.vue?vue&type=template&id=ea50a814&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Grid.vue?vue&type=template&id=6ef8a7f0&
var Gridvue_type_template_id_6ef8a7f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__grid-lines",style:(_vm.root.style('grid-lines'))},[_vm._l((_vm.horizontalLines),function(line){return _c('line',{key:line.key,staticClass:"gantt-elastic__grid-line-horizontal",style:(_vm.root.style('grid-line-horizontal')),attrs:{"x1":line.x1,"y1":line.y1,"x2":line.x2,"y2":line.y2}})}),_vm._l((_vm.verticalLines),function(line){return (line.inViewPort)?_c('line',{key:line.key,staticClass:"gantt-elastic__grid-line-vertical",style:(_vm.root.style('grid-line-vertical')),attrs:{"x1":line.x1,"y1":line.y1,"x2":line.x2,"y2":line.y2}}):_vm._e()}),_c('line',{staticClass:"gantt-elastic__grid-line-time",style:(_vm.root.style('grid-line-time')),attrs:{"x1":_vm.timeLinePosition.x,"y1":_vm.timeLinePosition.y1,"x2":_vm.timeLinePosition.x,"y2":_vm.timeLinePosition.y2}})],2)}
var Gridvue_type_template_id_6ef8a7f0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/Grid.vue?vue&type=template&id=6ef8a7f0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Grid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Gridvue_type_script_lang_js_ = ({
  inject: ["root"],
  data () {
    return {
      verticalLines: [],
      horizontalLines: []
    };
  },
  created () {
    this.$root.$on("gantt-elastic.recenterPosition", this.recenterPosition);
    this.$root.$on("gantt-elastic.scope.change", this.regenerate);
    this.$root.$on("gantt-elastic.times.timeZoom.change", this.regenerate);
    this.$root.$on("gantt-elastic.row.height.change", this.regenerate);
    this.$root.$on("gantt-elastic.tree.scroll", this.regenerate);
    this.regenerate();
  },
  mounted () {
    this.$nextTick(() => {
      this.$nextTick(() => {
        // because of stupid slider :/
        this.root.scrollToTime(this.timeLinePosition.time);
      });
    });
  },
  methods: {
    recenterPosition () {
      this.root.scrollToTime(this.timeLinePosition.time);
    },
    generateVerticalLines () {
      let lines = [];
      const state = this.root.state;
      state.times.steps.forEach(step => {
        lines.push({
          key: step.date.valueOf(),
          x1: step.offset.px,
          y1: state.calendar.height + this.root.style('calendar-row')["stroke-width"] + state.calendar.gap,
          x2: step.offset.px,
          y2: state.calendar.height + this.root.style('calendar-row')["stroke-width"] + state.calendar.gap + state.tasks.length * (state.row.height + state.grid.horizontal.gap * 2) + this.root.style('grid-line-vertical').strokeWidth,
          inViewPort: this.root.isInsideViewPort(step.offset.px, 1)
        });
      });
      return (this.verticalLines = lines);
    },
    generateHorizontalLines () {
      let lines = [];
      const state = this.root.state;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        lines.push({
          key: "hl" + index,
          x1: 0,
          y1: index * (state.row.height + state.grid.horizontal.gap * 2) + state.calendar.height + this.root.style('calendar-row')["stroke-width"] + state.calendar.gap + this.root.style('grid-line-vertical').strokeWidth / 2,
          x2: "100%",
          y2: index * (state.row.height + state.grid.horizontal.gap * 2) + state.calendar.height + this.root.style('calendar-row')["stroke-width"] + state.calendar.gap + this.root.style('grid-line-vertical').strokeWidth / 2
        });
      }
      return (this.horizontalLines = lines);
    },
    regenerate () {
      this.$nextTick(() => {
        this.generateVerticalLines();
        this.generateHorizontalLines();
      });
    }
  },
  computed: {
    inViewPort () {
      return line => {
        const state = this.root.state;
        return (line.x1 >= state.scroll.tree.left && line.x1 <= state.scroll.tree.right);
      };
    },
    timeLinePosition () {
      const state = this.root.state;
      const d = new Date();
      const current = d.getTime();
      const currentOffset = this.root.timeToPixelOffsetX(current);
      const timeLine = {
        x: 0,
        y1: state.calendar.height + state.calendar.gap,
        y2: "100%",
        dateTime: "",
        time: current
      };
      timeLine.x = currentOffset;
      timeLine.dateTime = d.toLocaleDateString();
      return timeLine;
    },
  }
});

// CONCATENATED MODULE: ./src/components/Tree/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/Grid.vue





/* normalize component */

var Grid_component = normalizeComponent(
  Tree_Gridvue_type_script_lang_js_,
  Gridvue_type_template_id_6ef8a7f0_render,
  Gridvue_type_template_id_6ef8a7f0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Grid_component.options.__file = "Grid.vue"
/* harmony default export */ var Grid = (Grid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=4eeb32e3&
var Calendarvue_type_template_id_4eeb32e3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__calendar-wrapper",style:(_vm.root.style('calendar-wrapper'))},[_c('foreignObject',{attrs:{"x":_vm.getX,"y":_vm.getY,"width":_vm.getWidth,"height":_vm.root.state.calendar.height}},[_c('div',{staticClass:"gantt-elastic__calendar",style:(_vm.root.style('calendar')),attrs:{"xmlns":"http://www.w3.org/1999/xhtml"}})]),_vm._l((_vm.months),function(month){return _c('calendar-row',{key:month.key,staticClass:"gantt-elastic__calendar-row--month",attrs:{"item":month,"which":"month"}})}),_vm._l((_vm.days),function(day){return (_vm.root.isInsideViewPort(day.x,day.width))?_c('calendar-row',{key:day.key,staticClass:"gantt-elastic__calendar-row--day",attrs:{"item":day,"which":"day"}}):_vm._e()}),_vm._l((_vm.hours),function(hour){return (_vm.root.isInsideViewPort(hour.x,hour.width))?_c('calendar-row',{key:hour.key,staticClass:"gantt-elastic__calendar-row--hour",attrs:{"item":hour,"which":"hour"}}):_vm._e()})],2)}
var Calendarvue_type_template_id_4eeb32e3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Calendar/Calendar.vue?vue&type=template&id=4eeb32e3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0aef1511&
var CalendarRowvue_type_template_id_0aef1511_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__calendar-row",style:(_vm.root.style('calendar-row'))},[_c('rect',{class:'gantt-elastic__calendar-row-rect--'+_vm.which,style:(_vm.root.style('calendar-row-rect--'+_vm.which)),attrs:{"x":_vm.item.x,"y":_vm.item.y,"width":_vm.item.width,"height":_vm.item.height}}),_c('text',{class:'gantt-elastic__calendar-row-text--'+_vm.which,style:(_vm.root.style('calendar-row-text--'+_vm.which)),attrs:{"x":_vm.getTextX,"y":_vm.getTextY,"alignment-baseline":"middle","text-anchor":"middle"}},[_vm._v(_vm._s(_vm.item.label))])])}
var CalendarRowvue_type_template_id_0aef1511_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0aef1511&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var CalendarRowvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["item", "which"],
  data () {
    return {};
  },
  computed: {
    getTextX () {
      return this.item.x + this.item.width / 2;
    },
    getTextY () {
      return this.item.y + this.item.height / 2;
    }
  }
});

// CONCATENATED MODULE: ./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var Calendar_CalendarRowvue_type_script_lang_js_ = (CalendarRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Calendar/CalendarRow.vue





/* normalize component */

var CalendarRow_component = normalizeComponent(
  Calendar_CalendarRowvue_type_script_lang_js_,
  CalendarRowvue_type_template_id_0aef1511_render,
  CalendarRowvue_type_template_id_0aef1511_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CalendarRow_component.options.__file = "CalendarRow.vue"
/* harmony default export */ var CalendarRow = (CalendarRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  components: {
    CalendarRow: CalendarRow
  },
  inject: ["root"],
  data () {
    return {
      hours: [],
      days: [],
      months: []
    };
  },
  created () {
    this.$root.$on("gantt-elastic.scope.change", this.regenerate);
    this.$root.$on("gantt-elastic.times.timeZoom.change", this.regenerate);
    this.regenerate();
  },
  methods: {
    howManyHoursFit (dayIndex) {
      const additionalSpace = this.root.style('calendar-row')["stroke-width"] + 2;
      let fullCellWidth = this.root.state.times.steps[dayIndex].width.px;
      let formatNames = Object.keys(this.root.state.calendar.hour.format);
      for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
        for (let formatName of formatNames) {
          if ((this.root.state.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth && hours > 1) {
            return {
              count: hours,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ""
      };
    },
    howManyDaysFit () {
      const additionalSpace = this.root.style('calendar-row')["stroke-width"] + 2;
      let fullWidth = this.root.state.width;
      let formatNames = Object.keys(this.root.state.calendar.day.format);
      for (let days = this.root.state.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth && days > 1) {
            return {
              count: days,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ""
      };
    },
    howManyMonthsFit () {
      const additionalSpace = this.root.style('calendar-row')["stroke-width"] + 2;
      let fullWidth = this.root.state.width;
      let formatNames = Object.keys(this.root.state.calendar.month.format);
      let currentMonth = dayjs_min_default()(this.root.state.times.firstDate);
      let previousMonth = currentMonth.clone();
      const lastTime = this.root.state.times.lastTime;
      let monthsCount = 1;
      while (currentMonth.valueOf() <= lastTime) {
        currentMonth = currentMonth.add(1, "day");
        if (previousMonth.month() != currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if ((this.root.state.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth && months > 1) {
            return {
              count: months,
              type: formatName
            };
          }
        }
      }
      return {
        count: 1,
        type: formatNames[0]
      };
    },
    hourTextStyle () {
      return ("font-family:" + this.root.state.calendar.hour.fontFamily + ";font-size:" + this.root.state.calendar.hour.fontSize);
    },
    dayTextStyle () {
      return ("font-family:" + this.root.state.calendar.day.fontFamily + ";font-size:" + this.root.state.calendar.day.fontSize);
    },
    generateHours () {
      let hours = [];
      for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex++) {
        const hoursCount = this.howManyHoursFit(dayIndex);
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.root.state.times.steps[dayIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs_min_default()(this.root.state.times.steps[dayIndex].date)
            .add(i * hourStep, "hour");
          hours.push({
            key: this.root.state.times.steps[dayIndex].date.valueOf() + "h" + i,
            x: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.times.steps[dayIndex].offset.px + hourWidthPx * i,
            y: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.calendar.day.height + this.root.state.calendar.month.height,
            width: hourWidthPx,
            height: this.root.state.calendar.hour.height,
            label: this.root.state.calendar.hour.format[hoursCount.type](date)
          });
        }
      }
      return (this.hours = hours);
    },
    generateDays () {
      let days = [];
      const daysCount = this.howManyDaysFit();
      const dayStep = Math.ceil(this.root.state.times.steps.length / daysCount.count);
      for (let dayIndex = 0, len = this.root.state.times.steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof this.root.state.times.steps[dayIndex + currentStep] !== "undefined") {
            dayWidthPx += this.root.state.times.steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs_min_default()(this.root.state.times.steps[dayIndex].date);
        days.push({
          key: this.root.state.times.steps[dayIndex].date.valueOf() + "d",
          x: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.times.steps[dayIndex].offset.px,
          y: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.calendar.month.height,
          width: dayWidthPx,
          height: this.root.state.calendar.day.height,
          label: this.root.state.calendar.day.format[daysCount.type](date)
        });
      }
      return (this.days = days);
    },
    generateMonths () {
      let months = [];
      const monthsCount = this.howManyMonthsFit();
      let formatNames = Object.keys(this.root.state.calendar.month.format);
      let currentDate = dayjs_min_default()(this.root.state.times.firstDate);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs_min_default()(currentDate)
          .add(1, "month")
          .startOf("month");
        if (finalDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
          finalDate = dayjs_min_default()(this.root.state.times.lastDate);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.root.state.times.steps.length; step < len; step++) {
          let currentStep = this.root.state.times.steps[step];
          if (currentStep.date.valueOf() >= currentDate.valueOf() && currentStep.date.valueOf() < finalDate.valueOf()) {
            monthWidth += currentStep.width.px;
            if (currentStep.offset.px < monthOffset) {
              monthOffset = currentStep.offset.px;
            }
          }
        }
        let label = "";
        for (let formatName of formatNames) {
          if (this.root.state.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.root.state.calendar.month.format[formatName](currentDate);
          }
        }
        months.push({
          key: monthIndex + "m",
          x: this.root.style('calendar-row')["stroke-width"] / 2 + monthOffset,
          y: this.root.style('calendar-row')["stroke-width"] / 2,
          width: monthWidth,
          height: this.root.state.calendar.month.height,
          label: label
        });
        currentDate = currentDate.add(1, "month")
          .startOf("month");
        if (currentDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
          currentDate = dayjs_min_default()(this.root.state.times.lastDate);
        }
      }
      return (this.months = months);
    },
    regenerate () {
      this.$nextTick(() => {
        this.generateHours();
        this.generateDays();
        this.generateMonths();
      });
    }
  },
  computed: {
    getX () {
      return this.root.style('calendar-row')["stroke-width"] / 2;
    },
    getY () {
      return this.root.style('calendar-row')["stroke-width"] / 2;
    },
    getWidth () {
      let width = this.root.state.width - this.root.style('calendar-row')["stroke-width"];
      return width;
    },
    monthsStyle () {
      return this.root.mergeDeep({}, this.root.state.calendar.styles.row, this.root.state.calendar.month.style);
    },
    daysStyle () {
      return this.root.mergeDeep({}, this.root.state.calendar.styles.row, this.root.state.calendar.day.style);
    },
    hoursStyle () {
      return this.root.mergeDeep({}, this.root.state.calendar.styles.row, this.root.state.calendar.hour.style);
    }
  }
});

// CONCATENATED MODULE: ./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Calendar_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Calendar/Calendar.vue





/* normalize component */

var Calendar_component = normalizeComponent(
  Calendar_Calendarvue_type_script_lang_js_,
  Calendarvue_type_template_id_4eeb32e3_render,
  Calendarvue_type_template_id_4eeb32e3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Calendar_component.options.__file = "Calendar.vue"
/* harmony default export */ var Calendar = (Calendar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/DependencyLines.vue?vue&type=template&id=93a21ef4&
var DependencyLinesvue_type_template_id_93a21ef4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__tree-dependency-lines-container",style:(_vm.root.style('tree-dependency-lines-container'))},_vm._l((_vm.dependencyTasks),function(task){return _c('g',{key:task.id,attrs:{"task":task}},_vm._l((task.dependencyLines),function(dependencyLine){return _c('path',{key:dependencyLine.id,staticClass:"gantt-elastic__tree-dependency-lines-path",style:(_vm.root.style('tree-dependency-lines-path', task.style['tree-dependency-lines-path'])),attrs:{"task":task,"d":dependencyLine.points}})}))}))}
var DependencyLinesvue_type_template_id_93a21ef4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/DependencyLines.vue?vue&type=template&id=93a21ef4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/DependencyLines.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DependencyLinesvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["tasks"],
  data () {
    return {};
  },
  methods: {
    getPoints (fromTaskId, toTaskId) {
      const fromTask = this.root.getTask(fromTaskId);
      const toTask = this.root.getTask(toTaskId);
      if (!toTask.visible || !fromTask.visible) {
        return "";
      }
      const startX = fromTask.x + fromTask.width;
      const startY = fromTask.y + fromTask.height / 2;
      const stopX = toTask.x;
      const stopY = toTask.y + toTask.height / 2;
      const distanceX = stopX - startX;
      let distanceY;
      let yMultiplier = 1;
      if (stopY >= startY) {
        distanceY = stopY - startY;
      } else {
        distanceY = startY - stopY;
        yMultiplier = -1;
      }
      const offset = 10;
      const roundness = 4;
      const isBefore = distanceX <= offset + roundness;
      let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
      if (isBefore) {
        points += `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY + roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - roundness * yMultiplier}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY + (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2 + roundness * yMultiplier}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
      } else {
        points += `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
      }
      return points;
    }
  },
  computed: {
    dependencyTasks () {
      return this.tasks.filter(task => typeof task.dependentOn !== "undefined")
        .map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return {
              points: this.getPoints(id, task.id)
            };
          });
          return task;
        });
    }
  }
});

// CONCATENATED MODULE: ./src/components/Tree/DependencyLines.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_DependencyLinesvue_type_script_lang_js_ = (DependencyLinesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/DependencyLines.vue





/* normalize component */

var DependencyLines_component = normalizeComponent(
  Tree_DependencyLinesvue_type_script_lang_js_,
  DependencyLinesvue_type_template_id_93a21ef4_render,
  DependencyLinesvue_type_template_id_93a21ef4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DependencyLines_component.options.__file = "DependencyLines.vue"
/* harmony default export */ var DependencyLines = (DependencyLines_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Row/Task.vue?vue&type=template&id=a368ce5e&
var Taskvue_type_template_id_a368ce5e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__tree-row-bar-wrapper gantt-elastic__tree-row-task-wrapper",style:(_vm.root.style('tree-row-bar-wrapper', 'tree-row-task-wrapper', _vm.task.style['tree-row-bar-wrapper'])),on:{"mouseover":_vm.treeRowMouseOver,"mouseout":_vm.treeRowMouseOut}},[_c('svg',{staticClass:"gantt-elastic__tree-row-bar gantt-elastic__tree-row-task",style:(_vm.root.style('tree-row-bar','tree-row-task',_vm.task.style['tree-row-bar'])),attrs:{"x":_vm.task.x,"y":_vm.task.y,"width":_vm.task.width,"height":_vm.task.height,"xmlns":"http://www.w3.org/2000/svg"},on:{"click":_vm.treeRowClick}},[_c('defs',[_c('clipPath',{attrs:{"id":_vm.clipPathId}},[_c('polygon',{attrs:{"points":_vm.getPoints}})])]),_c('polygon',{staticClass:"gantt-elastic__tree-row-bar-polygon gantt-elastic__tree-row-task-polygon",style:(_vm.root.style('tree-row-bar-polygon', 'tree-row-task-polygon' , _vm.task.style['base'], _vm.task.style['tree-row-bar-polygon'])),attrs:{"points":_vm.getPoints}}),_c('progress-bar',{attrs:{"task":_vm.task,"clip-path":'url(#'+_vm.clipPathId+')'}})],1),(_vm.root.state.row.showText)?_c('tree-text',{attrs:{"task":_vm.task}}):_vm._e()],1)}
var Taskvue_type_template_id_a368ce5e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/Row/Task.vue?vue&type=template&id=a368ce5e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Text.vue?vue&type=template&id=0ad7c689&
var Textvue_type_template_id_0ad7c689_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"gantt-elastic__tree-row-text-wrapper",style:(_vm.root.style('tree-row-text-wrapper')),attrs:{"x":_vm.task.x+_vm.task.width + _vm.root.state.treeText.offset,"y":_vm.task.y-_vm.root.state.grid.horizontal.gap,"width":_vm.getWidth,"height":_vm.getHeight}},[_c('foreignObject',{attrs:{"x":"0","y":"0","width":"100%","height":_vm.getHeight}},[_c('div',{staticClass:"gantt-elastic__tree-row-text",style:(_vm.root.style('tree-row-text')),attrs:{"xmlns":"http://www.w3.org/1999/xhtml"}},[(!_vm.html)?_c('div',{staticClass:"gantt-elastic__tree-row-text-content gantt-elastic__tree-row-text-content--text",style:(Object.assign({},_vm.root.style('tree-row-text-content','tree-row-text-content--text'),_vm.contentStyle))},[_c('div',[_vm._v(_vm._s(_vm.task.label))])]):_vm._e(),(_vm.html)?_c('div',{staticClass:"gantt-elastic__tree-row-text-content gantt-elastic__tree-row-text-content--html",style:(Object.assign({},_vm.root.style('tree-row-text-content','tree-row-text-content--html'),_vm.contentStyle)),domProps:{"innerHTML":_vm._s(_vm.task.label)}}):_vm._e()])])],1)}
var Textvue_type_template_id_0ad7c689_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/Text.vue?vue&type=template&id=0ad7c689&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Text.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Textvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    getWidth () {
      const textStyle = this.root.style('tree-row-text');
      this.root.state.ctx.font = `${textStyle["font-weight"]} ${textStyle["font-size"]} ${textStyle["font-family"]}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.treeText.xPadding * 2;
    },
    getHeight () {
      return this.task.height + this.root.state.grid.horizontal.gap * 2;
    },
    contentStyle () {
      return { height: '100%', 'line-height': this.getHeight + 'px' };
    },
    html () {
      const cols = this.root.state.taskList.columns;
      for (let i = 0, len = cols.length; i < len; i++) {
        const col = cols[i];
        if (col.value === 'label' && typeof col.html !== "undefined" && col.html) {
          return true;
        }
      }
      return false;
    },
  }
});

// CONCATENATED MODULE: ./src/components/Tree/Text.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_Textvue_type_script_lang_js_ = (Textvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/Text.vue





/* normalize component */

var Text_component = normalizeComponent(
  Tree_Textvue_type_script_lang_js_,
  Textvue_type_template_id_0ad7c689_render,
  Textvue_type_template_id_0ad7c689_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Text_component.options.__file = "Text.vue"
/* harmony default export */ var Text = (Text_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/ProgressBar.vue?vue&type=template&id=ffe7388e&
var ProgressBarvue_type_template_id_ffe7388e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__tree-row-progress-bar-wrapper",style:(_vm.root.style('tree-row-progress-bar-wrapper', _vm.task.style['tree-row-progress-bar-wrapper']))},[_c('defs',[_c('pattern',{attrs:{"id":"diagonalHatch","width":_vm.root.state.progress.width,"height":_vm.root.state.progress.width,"patternTransform":"rotate(45 0 0)","patternUnits":"userSpaceOnUse"}},[_c('line',{staticClass:"tree-row-progress-bar-line",style:(_vm.root.style('tree-row-progress-bar-line', _vm.task.style['tree-row-progress-bar-line'])),attrs:{"x1":"0","y1":"0","x2":"0","y2":_vm.root.state.progress.width}})])]),(_vm.root.state.progress.bar)?_c('rect',{staticClass:"gantt-elastic__tree-row-progress-bar-solid",style:(_vm.root.style('tree-row-progress-bar-solid', _vm.task.style['tree-row-progress-bar-solid'])),attrs:{"x":"0","y":"0","width":_vm.getProgressWidth}}):_vm._e(),(_vm.root.state.progress.pattern)?_c('g',[_c('rect',{staticClass:"gantt-elastic__tree-row-progress-bar-pattern",style:(_vm.root.style('tree-row-progress-bar-pattern', _vm.task.style['tree-row-progress-bar-pattern'])),attrs:{"x":_vm.getProgressWidth,"y":"0","width":100-_vm.task.progress+'%',"height":"100%"}}),_c('path',{staticClass:"gantt-elastic__tree-row-progress-bar-outline",style:(_vm.root.style('tree-row-progress-bar-outline', _vm.task.style['base'], _vm.task.style['tree-row-progress-bar-outline'])),attrs:{"d":_vm.getLinePoints}})]):_vm._e()])}
var ProgressBarvue_type_template_id_ffe7388e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/ProgressBar.vue?vue&type=template&id=ffe7388e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/ProgressBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProgressBarvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    getProgressWidth () {
      return this.task.progress + "%";
    },
    getLinePoints () {
      const start = (this.task.width / 100) * this.task.progress;
      return `M ${start} 0 L ${start} ${this.task.height}`;
    },
    getSolidStyle () {
      return Object.assign({}, this.root.state.progress.styles.bar.solid, this.task.progressBarStyle.bar);
    },
    getLineStyle () {
      return Object.assign({}, {
        stroke: this.root.state.row.styles.bar.stroke + "a0",
        "stroke-width": this.root.state.row.styles.bar["stroke-width"] / 2
      }, this.task.style);
    }
  }
});

// CONCATENATED MODULE: ./src/components/Tree/ProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_ProgressBarvue_type_script_lang_js_ = (ProgressBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/ProgressBar.vue





/* normalize component */

var ProgressBar_component = normalizeComponent(
  Tree_ProgressBarvue_type_script_lang_js_,
  ProgressBarvue_type_template_id_ffe7388e_render,
  ProgressBarvue_type_template_id_ffe7388e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ProgressBar_component.options.__file = "ProgressBar.vue"
/* harmony default export */ var ProgressBar = (ProgressBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Row/Task.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Taskvue_type_script_lang_js_ = ({
  components: {
    TreeText: Text,
    ProgressBar: ProgressBar
  },
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    clipPathId () {
      return "gantt-elastic__task-clip-path-" + this.task.id;
    },
    getViewBox () {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints () {
      const task = this.task;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${
        task.height
        }`;
    },
  },
  methods: {
    treeRowClick () {
      this.task.tooltip.visible = !this.task.tooltip.visible;
    },
    treeRowMouseOver () {
      this.task.mouseOver = true;
    },
    treeRowMouseOut () {
      this.task.mouseOver = false;
    }
  }
});

// CONCATENATED MODULE: ./src/components/Tree/Row/Task.vue?vue&type=script&lang=js&
 /* harmony default export */ var Row_Taskvue_type_script_lang_js_ = (Taskvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/Row/Task.vue





/* normalize component */

var Task_component = normalizeComponent(
  Row_Taskvue_type_script_lang_js_,
  Taskvue_type_template_id_a368ce5e_render,
  Taskvue_type_template_id_a368ce5e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Task_component.options.__file = "Task.vue"
/* harmony default export */ var Task = (Task_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Row/Milestone.vue?vue&type=template&id=3ed0cd82&
var Milestonevue_type_template_id_3ed0cd82_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__tree-row-bar-wrapper gantt-elastic__tree-row-milestone-wrapper",style:(_vm.root.style('tree-row-bar-wrapper', 'tree-row-milestone-wrapper', _vm.task.style['tree-row-bar-wrapper'])),on:{"mouseover":_vm.treeRowMouseOver,"mouseout":_vm.treeRowMouseOut}},[_c('svg',{staticClass:"gantt-elastic__tree-row-bar gantt-elastic__tree-row-milestone",style:(_vm.root.style('tree-row-bar', 'tree-row-milestone', _vm.task.style['tree-row-bar'])),attrs:{"x":_vm.task.x,"y":_vm.task.y,"width":_vm.task.width,"height":_vm.task.height,"xmlns":"http://www.w3.org/2000/svg"},on:{"click":_vm.treeRowClick}},[_c('defs',[_c('clipPath',{attrs:{"id":_vm.clipPathId}},[_c('polygon',{attrs:{"points":_vm.getPoints}})])]),_c('polygon',{staticClass:"gantt-elastic__tree-row-bar-polygon gantt-elastic__tree-row-milestone-polygon",style:(_vm.root.style('tree-row-bar-polygon','tree-row-milestone-polygon', _vm.task.style['base'], _vm.task.style['tree-row-bar-polygon'])),attrs:{"points":_vm.getPoints}}),_c('progress-bar',{attrs:{"task":_vm.task,"clip-path":'url(#'+_vm.clipPathId+')'}})],1),(_vm.root.state.row.showText)?_c('tree-text',{attrs:{"task":_vm.task}}):_vm._e()],1)}
var Milestonevue_type_template_id_3ed0cd82_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/Row/Milestone.vue?vue&type=template&id=3ed0cd82&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Row/Milestone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Milestonevue_type_script_lang_js_ = ({
  components: {
    TreeText: Text,
    ProgressBar: ProgressBar
  },
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    clipPathId () {
      return "gantt-elastic__milestone-clip-path-" + this.task.id;
    },
    getViewBox () {
      return `0 0 ${this.task.width} ${this.task.height}`;
    },
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints () {
      const task = this.task;
      const fifty = task.height / 2;
      let offset = fifty;
      if (task.width / 2 - offset < 0) {
        offset = task.width / 2;
      }
      return `0,${fifty}
        ${offset},0
        ${task.width - offset},0
        ${task.width},${fifty}
        ${task.width - offset},${task.height}
        ${offset},${task.height}`;
    },
  },
  methods: {
    treeRowClick () {
      this.task.tooltip.visible = !this.task.tooltip.visible;
    },
    treeRowMouseOver () {
      this.task.mouseOver = true;
    },
    treeRowMouseOut () {
      this.task.mouseOver = false;
    }
  }
});

// CONCATENATED MODULE: ./src/components/Tree/Row/Milestone.vue?vue&type=script&lang=js&
 /* harmony default export */ var Row_Milestonevue_type_script_lang_js_ = (Milestonevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/Row/Milestone.vue





/* normalize component */

var Milestone_component = normalizeComponent(
  Row_Milestonevue_type_script_lang_js_,
  Milestonevue_type_template_id_3ed0cd82_render,
  Milestonevue_type_template_id_3ed0cd82_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Milestone_component.options.__file = "Milestone.vue"
/* harmony default export */ var Milestone = (Milestone_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"279271aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Row/Project.vue?vue&type=template&id=86aba7b6&
var Projectvue_type_template_id_86aba7b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('g',{staticClass:"gantt-elastic__tree-row-bar-wrapper gantt-elastic__tree-row-project-wrapper",style:(_vm.root.style('tree-row-bar-wrapper', _vm.root.style('tree-row-project-wrapper'), _vm.task.style['tree-row-bar-wrapper'])),on:{"mouseover":_vm.treeRowMouseOver,"mouseout":_vm.treeRowMouseOut}},[_c('svg',{staticClass:"gantt-elastic__tree-row-bar gantt-elastic__tree-row-project",style:(_vm.root.style('tree-row-bar', 'tree-row-project', _vm.task.style['tree-row-bar'])),attrs:{"x":_vm.task.x,"y":_vm.task.y,"width":_vm.task.width,"height":_vm.task.height,"xmlns":"http://www.w3.org/2000/svg"},on:{"click":_vm.treeRowClick}},[_c('defs',[_c('clipPath',{attrs:{"id":_vm.clipPathId}},[_c('path',{attrs:{"d":_vm.getPoints}})])]),_c('path',{staticClass:"gantt-elastic__tree-row-bar-polygon gantt-elastic__tree-row-project-polygon",style:(_vm.root.style('tree-row-bar-polygon','tree-row-project-polygon', _vm.task.style['base'], _vm.task.style['tree-row-bar-polygon'])),attrs:{"d":_vm.getPoints}}),_c('progress-bar',{attrs:{"task":_vm.task,"clip-path":'url(#'+_vm.clipPathId+')'}})],1),(_vm.root.state.row.showText)?_c('tree-text',{attrs:{"task":_vm.task}}):_vm._e()],1)}
var Projectvue_type_template_id_86aba7b6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/Row/Project.vue?vue&type=template&id=86aba7b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Row/Project.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Projectvue_type_script_lang_js_ = ({
  components: {
    TreeText: Text,
    ProgressBar: ProgressBar
  },
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    clipPathId () {
      return "gantt-elastic__project-clip-path-" + this.task.id;
    },
    getViewBox () {
      return `0 0 ${this.task.width} ${this.task.height}`;
    },
    getGroupTransform () {
      return `translate(${this.task.x} ${this.task.y})`;
    },
    getPoints () {
      const task = this.task;
      const bottom = task.height - task.height / 4;
      const corner = task.height / 6;
      const smallCorner = task.height / 8;
      return `M ${smallCorner},0
                L ${task.width - smallCorner} 0
                L ${task.width} ${smallCorner}
                L ${task.width} ${bottom}
                L ${task.width - corner} ${task.height}
                L ${task.width - corner * 2} ${bottom}
                L ${corner * 2} ${bottom}
                L ${corner} ${task.height}
                L 0 ${bottom}
                L 0 ${smallCorner}
                Z
        `;
    },
  },
  methods: {
    treeRowClick () {
      this.task.tooltip.visible = !this.task.tooltip.visible;
    },
    treeRowMouseOver () {
      this.task.mouseOver = true;
    },
    treeRowMouseOut () {
      this.task.mouseOver = false;
    }
  }
});

// CONCATENATED MODULE: ./src/components/Tree/Row/Project.vue?vue&type=script&lang=js&
 /* harmony default export */ var Row_Projectvue_type_script_lang_js_ = (Projectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/Row/Project.vue





/* normalize component */

var Project_component = normalizeComponent(
  Row_Projectvue_type_script_lang_js_,
  Projectvue_type_template_id_86aba7b6_render,
  Projectvue_type_template_id_86aba7b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Project_component.options.__file = "Project.vue"
/* harmony default export */ var Project = (Project_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tree/Tree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Treevue_type_script_lang_js_ = ({
  components: {
    Grid: Grid,
    DependencyLines: DependencyLines,
    Calendar: Calendar,
    Task: Task,
    Milestone: Milestone,
    Project: Project
  },
  inject: ["root"],
  data () {
    return {
      moving: false
    };
  },
  computed: {
    getWidth () {
      const state = this.root.state;
      return state.width;
    },
    getHeight () {
      const state = this.root.state;
      return state.height;
    }
  },
});

// CONCATENATED MODULE: ./src/components/Tree/Tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_Treevue_type_script_lang_js_ = (Treevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/Tree.vue





/* normalize component */

var Tree_component = normalizeComponent(
  Tree_Treevue_type_script_lang_js_,
  Treevue_type_template_id_ea50a814_render,
  Treevue_type_template_id_ea50a814_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Tree_component.options.__file = "Tree.vue"
/* harmony default export */ var Tree = (Tree_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  components: {
    TopHeader: Header,
    TaskList: TaskList,
    Tree: Tree
  },
  inject: ["root"],
  props: ["tasks", "options"],
  data () {
    return {
      defs: "",
      moving: false,
      mousePos: {
        x: 0,
        y: 0
      }
    };
  },
  mounted () {
    this.root.state.svgMain = this.$refs.svgMain;
    this.root.state.svgTree = this.$refs.svgTree;
    this.root.state.svgTreeContainer = this.$refs.svgTreeContainer;
    this.root.state.svgTaskList = this.$refs.svgTaskList;
    this.root.state.treeScrollContainer = this.$refs.treeScrollContainer;
  },
  computed: {
    getWidth () {
      return this.root.state.width + this.root.state.taskList.finalWidth;
    },
    getMainStyle () {
      const state = this.root.state;
      return {
        width: state.width + "px"
      };
    },
    getMarginLeft () {
      if (!this.root.state.taskList.display) {
        return "0px";
      }
      return this.root.state.taskList.finalWidth + "px";
    }
  },
  methods: {
    mouseMove (event) {
      this.$root.$emit("gantt-elastic.main.mousemove", event);
    },
    mouseUp (event) {
      this.$root.$emit("gantt-elastic.main.mouseup", event);
    },
    onScroll (ev) {
      this.$root.$emit("gantt-elastic.tree.scroll", ev);
    },
    onWheel (ev) {
      this.$root.$emit("gantt-elastic.tree.wheel", ev);
    },
    treeMouseDown (ev) {
      this.moving = true;
    },
    treeMouseUp (ev) {
      this.moving = false;
    },
    treeMouseMove (ev) {
      if (this.moving) {
        let currentPos = this.root.state.svgTreeContainer.scrollLeft;
        this.root.scrollTo(currentPos - (ev.movementX * this.root.state.scroll.dragMoveMultiplier));
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Main.vue





/* normalize component */

var Main_component = normalizeComponent(
  components_Mainvue_type_script_lang_js_,
  Mainvue_type_template_id_a9c7bc98_render,
  Mainvue_type_template_id_a9c7bc98_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Main_component.options.__file = "Main.vue"
/* harmony default export */ var Main = (Main_component.exports);
// CONCATENATED MODULE: ./src/style.js
const fontSize = '12px';
const fontFamily = 'Arial, sans-serif';
/* harmony default export */ var style = ({
  "header": {
    "font-family": fontFamily,
    "margin": "0px auto",
    "background": "#f3f5f747",
    "padding": "10px",
    "overflow": "hidden",
    "clear": "both",
    "display": "flex",
    "justify-content": "space-between"
  },
  "header-title": { "float": "left" },
  "header-options": { "float": "right" },
  "header-title--text": {
    "font-size": "20px",
    "vertical-align": "middle",
    "font-weight": "400",
    "line-height": "35px",
    "padding-left": "22px",
    "letter-spacing": "1px"
  },
  "header-title--html": {
    "font-size": "20px",
    "vertical-align": "middle",
    "font-weight": "400",
    "line-height": "35px",
    "padding-left": "22px",
    "letter-spacing": "1px"
  },
  "header-btn-recenter": {
    "background": "#95A5A6",
    "border": "none",
    "outline": "none",
    "cursor": "pointer",
    "color": "white",
    "border-radius": "3px",
    "margin-right": "27px",
    "font-size": "16px",
    "padding": "8px 12px"
  },
  "header-slider": {},
  "header-slider-wrapper": { "display": "inline-block", "vertical-align": "middle" },
  "header-slider--slider": {},
  "header-slider--process": { "background": "#ccc" },
  "header-task-list-switch--label": {},
  "header-task-list-switch": { "margin": "0px 15px", "vertical-align": "middle" },
  "header-label": {},
  "calendar-wrapper": {
    "user-select": "none"
  },
  "calendar": { "width": "100%", "height": "100%", "background": "#f3f5f7", "border-color": "#f3f5f7" },
  "calendar-row": { "fill": "transparent", "stroke": "#dadada", "stroke-width": 0.5 },
  "calendar-row--month": {},
  "calendar-row--day": {},
  "calendar-row--hour": {},
  "calendar-row-rect--month": {},
  "calendar-row-text--month": { "font-family": fontFamily, "font-size": fontSize, "fill": "#606060", "stroke": "none" },
  "calendar-row-rect--day": {},
  "calendar-row-text--day": { "font-family": fontFamily, "font-size": fontSize, "fill": "#606060", "stroke": "none" },
  "calendar-row-rect--hour": {},
  "calendar-row-text--hour": { "font-family": fontFamily, "font-size": fontSize, "fill": "#606060", "stroke": "none" },
  "task-list-wrapper": {},
  "task-list": { "background": "transparent", "border-color": "#eee" },
  "task-list-header": { "display": "flex", "user-select": "none", "vertical-align": "middle" },
  "task-list-header-column": {
    "border": "1px solid #00000050",
    "border-top": "none",
    "border-right": "none",
    "box-sizing": "border-box",
    "display": "flex",
    "background": "#f3f5f7",
    "border-color": "transparent"
  },
  "task-list-column-expander-wrapper": {
    "stroke": "#909090",
    "stroke-width": "1",
    "fill": "#ffffffa0",
    "display": "inline-flex",
    "flex-shrink": "0",
    "box-sizing": "border-box",
    "margin": "0 10px"
  },
  "task-list-column-expander-content": {
    "display": "inline-flex",
    "cursor": "pointer",
    "margin": "auto 0px",
    "box-sizing": "border-box",
    "user-select": "none"
  },
  "task-list-column-expander-line": {
    "fill": "transparent",
    "stroke": "#000000",
    "stroke-width": "1",
    "stroke-linecap": "round"
  },
  "task-list-column-expander-border": {
    "fill": "#ffffffa0",
    "stroke": "#000000",
  },
  "task-list-header-label": {
    "overflow": "hidden",
    "text-overflow": "ellipsis",
    "font-family": fontFamily,
    "font-size": fontSize,
    "box-sizing": "border-box",
    "margin": "auto 6px",
    "flex-grow": "1",
    "vertical-align": "middle"
  },
  "task-list-header-resizer-wrapper": {
    "background": "transparent",
    "height": "100%",
    "width": "6px",
    "cursor": "col-resize",
    "display": "inline-flex",
    "vertical-align": "center"
  },
  "task-list-header-resizer": { "margin": "auto 0px" },
  "task-list-header-resizer-dot": {
    "width": "3px",
    "height": "3px",
    "background": "#ddd",
    "border-radius": "100%",
    "margin": "4px 0px",
  },
  "task-list-item": {
    "border-top": "1px solid #eee",
    "border-right": "1px solid #eee",
    "box-sizing": "border-box",
    "display": "flex",
    "background": "transparent",
  },
  "task-list-item-column": {
    "display": "inline-flex",
    "flex-shrink": "0",
    "border-left": "1px solid #00000050",
    "box-sizing": "border-box",
    "border-color": "#eee",
  },
  "task-list-item-value-wrapper": {
    "overflow": "hidden",
    "display": "flex",
    "width": "100%",
  },
  "task-list-item-value": {
    "display": "block",
    "flex-shrink": "100",
    "font-family": fontFamily,
    "font-size": fontSize,
    "width": "100%",
    "margin": "auto 6px",
    "overflow": "hidden",
    "text-overflow": "ellipsis",
    "line-height": "1.5em",
    "word-break": "keep-all",
    "white-space": "nowrap",
    "color": "#606060"
  },
  "grid-lines": {},
  "grid-line-horizontal": {
    "stroke": "#00000010",
    "strokeWidth": 1
  },
  "grid-line-vertical": {
    "stroke": "#00000010",
    "strokeWidth": 1
  },
  "grid-line-time": {
    "stroke": "#FF000080",
    "strokeWidth": 1
  },
  "tree": {
    "user-select": "none"
  },
  "tree-row-text-wrapper": {},
  "tree-row-text": {
    "background": "#ffffffa0",
    "border-radius": "10px",
    "font-family": fontFamily,
    "font-size": fontSize,
    "font-weight": "normal",
    "color": "#000000a0",
    "height": '100%'
  },
  "tree-row-text-content": {
    "padding": "0px 6px"
  },
  "tree-row-text-content--text": {},
  "tree-row-text-content--html": {},
  "tree-row-wrapper": {},
  "tree-row-bar-wrapper": {},
  "tree-row-bar": {},
  "tree-row-bar-polygon": {
    "stroke": "#E74C3C",
    "stroke-width": 1,
    "fill": "#F75C4C",
  },
  "tree-row-project-wrapper": {},
  "tree-row-project": {},
  "tree-row-project-polygon": {},
  "tree-row-milestone-wrapper": {},
  "tree-row-milestone": {},
  "tree-row-milestone-polygon": {},
  "tree-row-task-wrapper": {},
  "tree-row-task": {},
  "tree-row-task-polygon": {},
  "tree-row-progress-bar-wrapper": {},
  "tree-row-progress-bar": {},
  "tree-row-progress-bar-line": {
    "stroke": "#ffffff25",
    "stroke-width": 20
  },
  "tree-row-progress-bar-solid": {
    "fill": "#E74C3C",
    "height": "20%"
  },
  "tree-row-progress-bar-pattern": {
    "fill": "url(#diagonalHatch)",
    "transform": "translateY(0.1) scaleY(0.8)",
  },
  "tree-row-progress-bar-outline": {
    "stroke": "#E74C3C",
    "stroke-width": 1
  },
  "tree-dependency-lines-wrapper": {},
  "tree-dependency-lines-path": {
    "fill": "transparent",
    "stroke": "#FFa00090",
    "stroke-width": 2
  },
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=script&lang=js&
//
//
//
//





function getOptions (userOptions) {
  return {
    style: style,
    title: {
      label: "gantt-elastic",
      html: false
    },
    width: 0,
    height: 0,
    scroll: {
      dragMoveMultiplier: 3,
      taskList: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      tree: {
        left: 0,
        right: 0,
        percent: 0,
        timePercent: 0,
        top: 0,
        bottom: 0,
        time: 0,
        timeCenter: 0,
        dateTime: {
          left: "",
          right: ""
        }
      }
    },
    svgElement: null,
    scope: {
      before: 1,
      after: 1
    },
    times: {
      timeScale: 60 * 1000,
      timeZoom: 17,
      timePerPixel: 0,
      fistDate: null,
      firstTime: null, // firstDate getTime()
      lastDate: null,
      lastTime: null, // last date getTime()
      firstTaskDate: null,
      firstTaskTime: 0,
      lastTaskDate: null,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration: "day", // hour, month
      steps: []
    },
    row: {
      height: 24,
      showText: true,
    },
    maxRows: 0,
    treeText: {
      offset: 0,
      xPadding: 10
    },
    dependencyLines: {},
    progress: {
      width: 20,
      height: 6,
      pattern: true,
      bar: false,
    },
    grid: {
      horizontal: {
        gap: 6,
        lines: []
      },
      vertical: {
        lines: []
      },
      timeLine: {}
    },
    taskList: {
      display: true,
      columns: [{
        id: 0,
        label: "ID",
        value: "id",
        width: 40,
      }],
      resizerWidth: 0,
      percent: 100,
      width: 0,
      finalWidth: 0,
      expander: {
        size: 16,
        columnWidth: 24,
        padding: 16,
        margin: 10,
        straight: true
      }
    },
    calendar: {
      hours: [],
      days: [],
      months: [],
      gap: 6,
      height: 0,
      hour: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("HH:mm");
          },
          medium (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("HH:mm");
          },
          short (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("HH");
          }
        }
      },
      day: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("DD dddd");
          },
          medium (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("DD ddd");
          },
          short (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("DD");
          }
        }
      },
      month: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          short (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("MM");
          },
          medium (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("'YY MMM");
          },
          long (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("YYYY MMMM (MM)");
          }
        }
      }
    },
    defs: [],
    locale: {
      code: "en",
      Now: "Now",
      "X-Scale": "Zoom-X",
      "Y-Scale": "Zoom-Y",
      "Task list width": "Task list",
      "Before/After": "Expand",
      "Display task list": "Show task list"
    }
  };
}
function isObject (item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function mergeDeep (target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
}
function mergeDeepReactive (component, target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          component.$set(target, key, {});
        }
        mergeDeepReactive(component, target[key], source[key]);
      } else {
        component.$set(target, key, source[key]);
      }
    }
  }
  return mergeDeepReactive(component, target, ...sources);
}
const GanttElastic = {
  components: {
    EgMain: Main
  },
  props: ["tasks", "options"],
  provide () {
    const provider = {};
    const self = this;
    Object.defineProperty(provider, "root", {
      enumerable: true,
      get: () => self
    });
    return provider;
  },
  data () {
    return {
      state: {
        tasks: []
      }
    };
  },
  methods: {
    mergeDeep,
    mergeDeepReactive,
    getScrollBarHeight () {
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.height = "100px";
      outer.style.msOverflowStyle = "scrollbar";
      document.body.appendChild(outer);
      var noScroll = outer.offsetHeight;
      outer.style.overflow = "scroll";
      var inner = document.createElement("div");
      inner.style.height = "100%";
      outer.appendChild(inner);
      var withScroll = inner.offsetHeight;
      outer.parentNode.removeChild(outer);
      return noScroll - withScroll;
    },
    /**
     * Get style for specified class
     * @param {object|string} mergeWith - merge multiple styles by className (without gantt-elastic__) or object with props
     * @returns {object}
     */
    style (...mergeWith) {
      let merged = {};
      mergeWith.forEach(objOrClassName => {
        if (typeof objOrClassName === 'string') {
          merged = Object.assign({}, merged, this.state.style[objOrClassName])
        } else if (typeof objOrClassName === 'object') {
          merged = Object.assign({}, merged, objOrClassName);
        } else if (typeof objOrClassName === 'function') {
          merged = Object.assign({}, objOrClassName())
        }
      })
      return merged;
    },
    refreshTasks () {
      this.state.tasks = this.state.tasks.map(task => {
        if (typeof task.x === 'undefined') {
          this.$set(task, 'x', 0);
        }
        if (typeof task.y === 'undefined') {
          this.$set(task, 'y', 0);
        }
        if (typeof task.width === 'undefined') {
          this.$set(task, 'width', 0);
        }
        if (typeof task.height === 'undefined') {
          this.$set(task, 'height', 0);
        }
        if (typeof task.tooltip === 'undefined') {
          this.mergeDeepReactive(this, task, { tooltip: { visible: false } });
        }
        if (typeof task.tooltip.visible === 'undefined') {
          task.tooltip.visible = false;
        }
        if (typeof task.mouseOver === 'undefined') {
          this.$set(task, 'mouseOver', false);
        }
        if (typeof task.visible === "undefined") {
          this.$set(task, 'visible', true);
        }
        if (typeof task.collapsed === "undefined") {
          this.$set(task, 'collapsed', false);
        }
        if (typeof task.dependentOn === "undefined") {
          this.$set(task, 'dependentOn', []);
        }
        if (typeof task.parentId === "undefined") {
          this.$set(task, 'parentId', null);
        }
        if (typeof task.style === "undefined") {
          this.$set(task, 'style', {});
        }
        if (typeof task.children === 'undefined') {
          this.$set(task, 'children', []);
        }
        if (typeof task.allChildren === 'undefined') {
          this.$set(task, 'allChildren', []);
        }
        if (typeof task.parents === 'undefined') {
          this.$set(task, 'parents', []);
        }
        if (typeof task.parent === 'undefined') {
          this.$set(task, 'parent', null);
        }
        if (typeof task.durationMs === 'undefined') {
          this.$set(task, 'durationMs', []);
        }
        return task;
      });
    },
    /**
     * Initialize component
     */
    initialize () {
      this.mergeDeepReactive(this, this.state, getOptions(this.options), this.options, { tasks: this.tasks });
      this.state.tasks = this.tasks.map(task => {
        this.$set(task, 'start', dayjs_min_default()(task.start).format("YYYY-MM-DD HH:mm:ss"));
        return task;
      });
      dayjs_min_default.a.locale(this.options.locale, null, true);
      if (typeof this.state.taskList === "undefined") {
        this.$set(this.state, 'taskList', {});
      }
      if (typeof this.state.taskList.columns === 'undefined') {
        this.$set(this.state.taskList, 'columns', []);
      }
      this.state.taskList.columns = this.state.taskList.columns.map((column, index) => {
        this.$set(column, 'finalWidth', (column.width / 100) * this.state.taskList.percent);
        if (typeof column.height === "undefined") {
          this.$set(column, 'height', 0);
        }
        if (typeof column.style === "undefined") {
          this.$set(column, 'style', {});
        }
        this.$set(column, '_id', `${index}-${column.label}`);
        return column;
      });
      // initialize observer
      this.refreshTasks(true);
      this.state.rootTask = {
        id: null,
        label: "root",
        children: [],
        allChildren: [],
        parents: [],
        parent: null
      };
      this.resetTaskTree();
      this.state.taskTree = this.makeTaskTree(this.state.rootTask);
      this.state.tasks = this.state.taskTree.allChildren;
      this.state.ctx = document.createElement("canvas").getContext("2d");
      this.calculateTaskListColumnsWidths();
      this.state.scrollBarHeight = this.getScrollBarHeight();
      this.state.outerHeight = this.state.height + this.state.scrollBarHeight;
    },
    calculateCalendarDimensions () {
      this.state.calendar.height = 0;
      if (this.state.calendar.hour.display) {
        this.state.calendar.height += this.state.calendar.hour.height;
      }
      if (this.state.calendar.day.display) {
        this.state.calendar.height += this.state.calendar.day.height;
      }
      if (this.state.calendar.month.display) {
        this.state.calendar.height += this.state.calendar.month.height;
      }
    },
    getMaximalLevel () {
      let maximalLevel = 0;
      this.state.tasks.forEach(task => {
        if (task.parents.length > maximalLevel) {
          maximalLevel = task.parents.length;
        }
      });
      return maximalLevel - 1;
    },
    getMaximalExpanderWidth () {
      return (this.getMaximalLevel() * this.state.taskList.expander.padding + this.state.taskList.expander.margin);
    },
    calculateTaskListColumnsWidths () {
      let final = 0;
      this.state.taskList.columns.forEach(column => {
        if (column.expander) {
          column.finalWidth = ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.taskList.percent;
        } else {
          column.finalWidth = (column.width / 100) * this.state.taskList.percent;
        }
        final += column.finalWidth;
        column.height = this.state.row.height + this.state.grid.horizontal.gap * 2 - this.state.grid.horizontal.strokeWidth;
      });
      this.state.taskList.finalWidth = final;
    },
    resetTaskTree () {
      this.state.rootTask.children = [];
      this.state.rootTask.allChildren = [];
      this.state.rootTask.parent = null;
      this.state.rootTask.parents = [];
      /*this.$set(this.state.rootTask, 'children', []);
      this.$set(this.state.rootTask, 'allChildren', []);
      this.$set(this.state.rootTask, 'parent', null);
      this.$set(this.state.rootTask, 'parents', []);*/
      for (let i = 0, len = this.state.tasks.length; i < len; i++) {
        let current = this.state.tasks[i];
        current.children = [];
        current.allChildren = [];
        current.parent = null;
        current.parents = [];
        /*this.$set(current, 'children', []);
        this.$set(current, 'allChildren', []);
        this.$set(current, 'parent', null);
        this.$set(current, 'parents', []);*/
      }
    },
    makeTaskTree (task) {
      for (let i = 0, len = this.state.tasks.length; i < len; i++) {
        let current = this.state.tasks[i];
        if (current.parentId === task.id) {
          if (task.parents.length) {
            task.parents.forEach(parent => current.parents.push(parent));
          }
          if (task !== this.root) {
            current.parents.push(task);
            current.parent = task;
          } else {
            current.parents = [];
            current.parent = null;
          }
          current = this.makeTaskTree(current);
          task.allChildren.push(current);
          task.children.push(current);
          current.allChildren.forEach(child => task.allChildren.push(child));
        }
      }
      return task;
    },
    getTask (taskId) {
      return this.tasksById[taskId];
    },
    getChildren (taskId) {
      return this.state.tasks.filter(task => task.parent === taskId);
    },
    getSVG () {
      return this.state.svgMain.outerHTML;
    },
    getImage (type = "image/png") {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = this.state.svgMain.clientWidth;
          canvas.height = this.state.svgMain.clientHeight;
          canvas.getContext("2d").drawImage(img, 0, 0);
          resolve(canvas.toDataURL(type));
        };
        img.src = "data:image/svg+xml," + encodeURIComponent(this.getSVG());
      });
    },
    getHeight (visibleTasks, outer = false) {
      let height = visibleTasks.length * (this.state.row.height + this.state.grid.horizontal.gap * 2) + this.state.calendar.height + this.style('calendar-row')["stroke-width"] * 2 + this.state.calendar.gap;
      if (outer) {
        height += this.state.scrollBarHeight;
      }
      return height;
    },
    timeToPixelOffsetX (ms) {
      let x = ms - this.state.times.firstTime;
      if (x) {
        x = x / this.state.times.timePerPixel;
      }
      return x;
    },
    pixelOffsetXToTime (pixelOffsetX) {
      let offset = pixelOffsetX + this.style('grid-line-vertical').strokeWidth / 2;
      return (offset * this.state.times.timePerPixel + this.state.times.firstTime);
    },
    isInsideViewPort (x, width, buffer = 5000) {
      return ((x + width + buffer >= this.state.scroll.tree.left && x - buffer <= this.state.scroll.tree.right) || (x - buffer <= this.state.scroll.tree.left && x + width + buffer >= this.state.scroll.tree.right));
    },
    onScrollTree (ev) {
      this._onScrollTree(ev.target.scrollLeft, ev.target.scrollTop);
    },
    _onScrollTree (left, top) {
      const treeContainerWidth = this.state.svgTreeContainer.clientWidth;
      this.state.scroll.tree.left = left;
      this.state.scroll.tree.right = left + treeContainerWidth;
      this.state.scroll.tree.percent = (left / this.state.times.totalViewDurationPx) * 100;
      this.state.scroll.tree.top = top;
      this.state.scroll.tree.time = this.pixelOffsetXToTime(left);
      this.state.scroll.tree.timeCenter = this.pixelOffsetXToTime(left + treeContainerWidth / 2);
      this.state.scroll.tree.dateTime.left = dayjs_min_default()(this.state.scroll.tree.time);
      this.state.scroll.tree.dateTime.right = dayjs_min_default()(this.pixelOffsetXToTime(left + this.state.svgTree.clientWidth));
      this.scrollTo(left);
    },
    scrollToTime (time) {
      let pos = this.timeToPixelOffsetX(time);
      const treeContainerWidth = this.state.svgTreeContainer.clientWidth;
      pos = pos - treeContainerWidth / 2;
      if (pos > this.state.width) {
        pos = this.state.width - treeContainerWidth;
      }
      this.scrollTo(pos);
    },
    scrollTo (pos) {
      this.state.svgTreeContainer.scrollLeft = pos;
      this.state.treeScrollContainer.scrollLeft = pos;
    },
    fixScrollPos () {
      this.$nextTick(() => {
        this.scrollToTime(this.state.scroll.tree.timeCenter);
      });
    },
    onWheelTree (ev) {
      //this.state.times.timeScale += ev.deltaY * 10;
    },
    onTimeZoomChange (timeZoom) {
      this.state.times.timeZoom = timeZoom;
      this.recalculateTimes();
      this.calculateSteps();
      this.calculateCalendarDimensions();
      this.fixScrollPos();
    },
    onRowHeightChange (height) {
      this.state.row.height = height;
      this.calculateTaskListColumnsWidths();
    },
    onScopeChange (value) {
      this.state.scope.before = value;
      this.state.scope.after = value;
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },
    onTaskListWidthChange (value) {
      this.state.taskList.percent = value;
      this.calculateTaskListColumnsWidths();
      this.fixScrollPos();
    },
    onTaskListColumnWidthChange (value) {
      this.calculateTaskListColumnsWidths();
      this.fixScrollPos();
    },
    initializeEvents () {
      this.$root.$on("gantt-elastic.tree.scroll", this.onScrollTree);
      this.$root.$on("gantt-elastic.tree.wheel", this.onWheelTree);
      this.$root.$on("gantt-elastic.times.timeZoom.change", this.onTimeZoomChange);
      this.$root.$on("gantt-elastic.row.height.change", this.onRowHeightChange);
      this.$root.$on("gantt-elastic.scope.change", this.onScopeChange);
      this.$root.$on("gantt-elastic.taskList.width.change", this.onTaskListWidthChange);
      this.$root.$on("gantt-elastic.taskList.column.width.change", this.onTaskListColumnWidthChange);
    },
    recalculateTimes () {
      let max = this.state.times.timeScale * 60;
      let min = this.state.times.timeScale;
      let steps = max / min;
      let percent = this.state.times.timeZoom / 100;
      this.state.times.timePerPixel = this.state.times.timeScale * steps * percent + Math.pow(2, this.state.times.timeZoom);
      this.state.times.totalViewDurationMs = this.state.times.lastDate.diff(this.state.times.firstDate, "milisecods");
      this.state.times.totalViewDurationPx = this.state.times.totalViewDurationMs / this.state.times.timePerPixel;
    },
    initTimes () {
      this.state.times.firstDate = dayjs_min_default()(this.state.times.firstTaskDate)
        .locale(this.locale)
        .startOf("day")
        .subtract(this.state.scope.before, "days")
        .startOf("day");
      this.state.times.lastDate = dayjs_min_default()(this.state.times.lastTaskDate)
        .locale(this.locale)
        .endOf("day")
        .add(this.state.scope.after, "days")
        .endOf("day");
      this.state.times.firstTime = this.state.times.firstDate.valueOf();
      this.state.times.lastTime = this.state.times.lastDate.valueOf();
      this.recalculateTimes();
    },
    calculateSteps () {
      const steps = [];
      const lastMs = dayjs_min_default()(this.state.times.lastDate).valueOf();
      const step = this.state.times.stepDuration;
      const currentDate = dayjs_min_default()(this.state.times.firstDate);
      steps.push({
        date: currentDate,
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (let currentDate = dayjs_min_default()(this.state.times.firstDate).add(1, step).startOf("day"); currentDate.valueOf() <= lastMs; currentDate = currentDate.add(1, step).startOf("day")) {
        const offsetMs = currentDate.diff(this.state.times.firstDate, "milisecods");
        const offsetPx = offsetMs / this.state.times.timePerPixel;
        const step = {
          date: currentDate,
          offset: {
            ms: offsetMs,
            px: offsetPx
          }
        };
        const previousStep = steps[steps.length - 1];
        previousStep.width = {
          ms: offsetMs - previousStep.offset.ms,
          px: offsetPx - previousStep.offset.px
        };
        steps.push(step);
      }
      const lastStep = steps[steps.length - 1];
      lastStep.width = {
        ms: this.state.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.state.times.totalViewDurationPx - lastStep.offset.px
      };
      this.state.times.steps = steps;
    },
    computeCalendarWidths () {
      this.computeDayWidths();
      this.computeHourWidths();
      this.computeMonthWidths();
    },
    computeHourWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.hour.fontSize + " " + state.calendar.fontFamily;
      let currentDate = dayjs_min_default()("2018-01-01T00:00:00"); // any date will be good for hours
      let maxWidths = {};
      Object.keys(state.calendar.hour.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let hour = 0; hour < 24; hour++) {
        const widths = {
          hour
        };
        Object.keys(state.calendar.hour.format)
          .forEach(formatName => {
            widths[formatName] = state.ctx.measureText(state.calendar.hour.format[formatName](currentDate.toDate())).width;
          });
        state.calendar.hour.widths.push(widths);
        Object.keys(state.calendar.hour.format)
          .forEach(formatName => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
        currentDate = currentDate.add(1, "hour");
      }
      state.calendar.hour.maxWidths = maxWidths;
    },
    computeDayWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.day.fontSize + " " + state.calendar.fontFamily;
      let currentDate = dayjs_min_default()(state.times.steps[0].date);
      let maxWidths = {};
      Object.keys(state.calendar.day.format)
        .forEach(formatName => {
          maxWidths[formatName] = 0;
        });
      for (let day = 0, daysLen = state.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(state.calendar.day.format)
          .forEach(formatName => {
            widths[formatName] = state.ctx.measureText(state.calendar.day.format[formatName](currentDate.toDate())).width;
          });
        state.calendar.day.widths.push(widths);
        Object.keys(state.calendar.day.format)
          .forEach(formatName => {
            if (widths[formatName] > maxWidths[formatName]) {
              maxWidths[formatName] = widths[formatName];
            }
          });
        currentDate = currentDate.add(1, "day");
      }
      state.calendar.day.maxWidths = maxWidths;
    },
    computeMonthWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.day.fontSize + " " + state.calendar.fontFamily;
      let maxWidths = {};
      Object.keys(state.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      let currentDate = dayjs_min_default()(this.state.times.firstDate);
      const monthsCount = Math.ceil(this.state.times.lastDate.diff(this.state.times.firstDate, "months", true));
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(state.calendar.month.format)
          .forEach(formatName => {
            widths[formatName] = state.ctx.measureText(state.calendar.month.format[formatName](currentDate.toDate())).width;
          });
        state.calendar.month.widths.push(widths);
        Object.keys(state.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, "month");
      }
      state.calendar.month.maxWidths = maxWidths;
    },
    prepareDates () {
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      let firstTaskDate, lastTaskDate;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        task.startDate = dayjs_min_default()(task.start);
        task.startTime = task.startDate.valueOf();
        task.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
          firstTaskDate = task.startDate;
        }
        if (task.startTime + task.durationMs > lastTaskTime) {
          lastTaskTime = task.startTime + task.durationMs;
          lastTaskDate = dayjs_min_default()(task.startTime + task.durationMs);
        }
      }
      this.state.times.firstTaskTime = firstTaskTime;
      this.state.times.lastTaskTime = lastTaskTime;
      this.state.times.firstTaskDate = firstTaskDate;
      this.state.times.lastTaskDate = lastTaskDate;
      this.state.times.firstDate = dayjs_min_default()(firstTaskDate)
        .locale(this.locale)
        .startOf("day")
        .subtract(this.state.scope.before, "days")
        .startOf("day");
      this.state.times.lastDate = dayjs_min_default()(lastTaskDate)
        .locale(this.locale)
        .endOf("day")
        .add(this.state.scope.after, "days")
        .endOf("day");
    },
    setup () {
      this.initialize();
      this.tasksById = {};
      this.state.tasks.forEach(task => (this.tasksById[task.id] = task));
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.calculateCalendarDimensions();
    }
  },
  computed: {
    visibleTasks () {
      this.refreshTasks();
      this.prepareDates();
      this.initTimes();
      this.state.tasks.forEach(task => (this.tasksById[task.id] = task));
      this.state.taskList.width = this.state.taskList.columns.reduce((prev, current) => {
        return { width: prev.width + current.width };
      }, { width: 0 }).width;
      this.state.width = this.state.times.totalViewDurationPx + this.style('grid-line-vertical').strokeWidth;
      this.resetTaskTree();
      this.state.taskTree = this.makeTaskTree(this.state.rootTask);
      this.state.tasks = this.state.taskTree.allChildren;
      //this.state.tasks = this.makeTaskTree(this.state.rootTask).allChildren;
      const visibleTasks = this.state.tasks.filter(task => task.visible);
      this.state.height = this.getHeight(visibleTasks);
      this.state.outerHeight = this.getHeight(visibleTasks, true);
      for (let index = 0, len = visibleTasks.length; index < len; index++) {
        let task = visibleTasks[index];
        task.width = task.durationMs / this.state.times.timePerPixel - this.style('grid-line-vertical').strokeWidth;
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        task.y = (this.state.row.height + this.state.grid.horizontal.gap * 2) * index + this.state.grid.horizontal.gap + this.state.calendar.height + this.style('calendar-row')["stroke-width"] + this.state.calendar.gap;
      }
      return visibleTasks;
    },
  },
  created () {
    this.initializeEvents();
    this.setup();
    this.$root.$emit('gantt-elastic.created', this);
  },
  mounted () {
    this.$root.$emit('gantt-elastic.mounted', this);
    this.$root.$emit('gantt-elastic.ready', this);
  }
};
/* harmony default export */ var GanttElasticvue_type_script_lang_js_ = (GanttElastic);

// CONCATENATED MODULE: ./src/GanttElastic.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_GanttElasticvue_type_script_lang_js_ = (GanttElasticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/GanttElastic.vue?vue&type=style&index=0&lang=css&
var GanttElasticvue_type_style_index_0_lang_css_ = __webpack_require__("a62b");

// CONCATENATED MODULE: ./src/GanttElastic.vue






/* normalize component */

var GanttElastic_component = normalizeComponent(
  src_GanttElasticvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

GanttElastic_component.options.__file = "GanttElastic.vue"
/* harmony default export */ var src_GanttElastic = (GanttElastic_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport mergeDeep */__webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* concated harmony reexport mergeDeepReactive */__webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_GanttElastic);



/***/ }),

/***/ "fef5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2ffa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1598ba96", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fff7":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "\n.gantt-elastic__main svg{display:block\n}\n.gantt-elastic__svg-container{position:relative\n}\n.gantt-elastic__main,.gantt-elastic__svg-container{background:#fff\n}\n.gantt-elastic__container,.gantt-elastic__svg-container{max-width:100%\n}\n.gantt-elastic__grid-horizontal-line,.gantt-elastic__grid-vertical-line{stroke:#a0a0a0;stroke-width:1\n}\nforeignObject>*{margin:0\n}\n.gantt-elastic .p-2{padding:10rem\n}\n.gantt-elastic__container{display:flex;max-width:100%;position:absolute;height:100%\n}\n.gantt-elastic__main-container,.gantt-elastic__main-svg-container{overflow:hidden;max-width:100%\n}\n.gantt-elastic__task-list-header-column:last-of-type{border-right:1px solid rgba(0,0,0,.31)\n}\n.gantt-elastic__task-list-item:last-of-type{border-bottom:1px solid rgba(0,0,0,.31)\n}\n.gantt-elastic__tree-scroll-container{overflow:auto;max-width:100%\n}", ""]);

// exports


/***/ })

/******/ })["default"];
//# sourceMappingURL=GanttElastic.common.js.map