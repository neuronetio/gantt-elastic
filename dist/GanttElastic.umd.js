(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["GanttElastic"] = factory(require("vue"));
	else
		root["GanttElastic"] = factory(root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GanttElastic.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.gantt-elastic * {\n  box-sizing: border-box;\n}\n.gantt-elastic__main-view svg {\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line,\n.gantt-elastic__grid-vertical-line {\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > * {\n  margin: 0px;\n}\n.gantt-elastic .p-2 {\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container,\n.gantt-elastic__main-view-container {\n  overflow: hidden;\n  max-width: 100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type {\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type {\n  border-bottom: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container {\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value {\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: mergeDeep, mergeDeepReactive, notEqualDeep, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return notEqualDeep; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainView.vue */ "./src/components/MainView.vue");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.js */ "./src/style.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const ctx = document.createElement('canvas').getContext('2d');
let VueInst = vue__WEBPACK_IMPORTED_MODULE_0___default.a;
function initVue() {
  if (typeof Vue !== 'undefined' && typeof VueInst === 'undefined') {
    VueInst = Vue;
  }
}
initVue();
/**
 * Helper function to fill out empty options in user settings
 *
 * @param {object} userOptions - initial user options that will merge with those below
 * @returns {object} merged options
 */
function getOptions(userOptions) {
  let localeName = 'en';
  if (typeof userOptions.locale !== 'undefined' && typeof userOptions.locale.name !== 'undefined') {
    localeName = userOptions.locale.name;
  }
  return {
    slots: {
      header: {}
    },
    title: {
      label: 'gantt-elastic',
      html: false
    },
    taskMapping: {
      id: 'id',
      start: 'start',
      label: 'label',
      duration: 'duration',
      progress: 'progress',
      type: 'type',
      style: 'style',
      collapsed: 'collapsed'
    },
    width: 0,
    height: 0,
    clientWidth: 0,
    outerHeight: 0,
    rowsHeight: 0,
    allVisibleTasksHeight: 0,
    refs: {},
    scroll: {
      scrolling: false,
      dragXMoveMultiplier: 3,
      dragYMoveMultiplier: 2,
      top: 0,
      taskList: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      chart: {
        left: 0,
        right: 0,
        percent: 0,
        timePercent: 0,
        top: 0,
        bottom: 0,
        time: 0,
        timeCenter: 0,
        dateTime: {
          left: '',
          right: ''
        }
      }
    },
    scope: {
      before: 1,
      after: 1
    },
    times: {
      timeScale: 60 * 1000,
      timeZoom: 17,
      timePerPixel: 0,
      firstTime: null, // firstDate getTime()
      lastTime: null, // last date getTime()
      firstTaskTime: 0,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration: 'day', // hour, month
      steps: []
    },
    row: {
      height: 24
    },
    maxRows: 20,
    maxHeight: 0,
    chart: {
      grid: {
        horizontal: {
          gap: 6
        }
      },
      progress: {
        width: 20,
        height: 6,
        pattern: true,
        bar: false
      },
      text: {
        offset: 0,
        xPadding: 10,
        display: true
      },
      expander: {
        type: 'chart',
        display: false,
        displayIfTaskListHidden: true,
        offset: 4,
        size: 18
      }
    },
    taskList: {
      display: true,
      resizeAfterThreshold: true,
      widthThreshold: 75,
      columns: [
        {
          id: 0,
          label: 'ID',
          value: 'id',
          width: 40
        }
      ],
      resizerWidth: 0,
      percent: 100,
      width: 0,
      finalWidth: 0,
      widthFromPercentage: 0,
      minWidth: 18,
      expander: {
        type: 'task-list',
        size: 16,
        columnWidth: 24,
        padding: 16,
        margin: 10,
        straight: false
      }
    },
    calendar: {
      workingDays: [1, 2, 3, 4, 5],
      gap: 6,
      height: 0,
      strokeWidth: 1,
      hour: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          long(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('HH:mm');
          },
          medium(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('HH:mm');
          },
          short(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('HH');
          }
        }
      },
      day: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          long(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('DD dddd');
          },
          medium(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('DD ddd');
          },
          short(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('DD');
          }
        }
      },
      month: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          short(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('MM');
          },
          medium(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format("MMM 'YY");
          },
          long(date) {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(date)
              .locale(localeName)
              .format('MMMM YYYY');
          }
        }
      }
    },
    locale: {
      name: 'en',
      Now: 'Now',
      'X-Scale': 'Zoom-X',
      'Y-Scale': 'Zoom-Y',
      'Task list width': 'Task list',
      'Before/After': 'Expand',
      'Display task list': 'Show task list',
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekStart: 1,
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      formats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      ordinal: n => {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`;
      }
    }
  };
}

/**
 * Prepare style
 *
 * @returns {object}
 */
function prepareStyle(userStyle) {
  let fontSize = '12px';
  let fontFamily = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-family')
    .toString();
  if (typeof userStyle !== 'undefined') {
    if (typeof userStyle.fontSize !== 'undefined') {
      fontSize = userOptions.fontSize;
    }
    if (typeof userStyle.fontFamily !== 'undefined') {
      fontFamily = userStyle.fontFamily;
    }
  }
  return Object(_style_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fontSize, fontFamily);
}

/**
 * Helper function to determine if specified variable is an object
 *
 * @param {any} item
 *
 * @returns {boolean}
 */
function isObject(item) {
  return (
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    !(item instanceof HTMLElement) &&
    !(item instanceof CanvasRenderingContext2D) &&
    typeof item !== 'function'
  );
}

/**
 * Helper function which will merge objects recursively - creating brand new one - like clone
 *
 * @param {object} target
 * @params {object} sources
 *
 * @returns {object}
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          target[key] = {};
        }
        target[key] = mergeDeep(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        target[key] = [];
        for (let item of source[key]) {
          if (isObject(item)) {
            target[key].push(mergeDeep({}, item));
            continue;
          }
          target[key].push(item);
        }
      } else {
        target[key] = source[key];
      }
    }
  }
  return mergeDeep(target, ...sources);
}

/**
 * Detect if object or array is observable
 *
 * @param {object|array} obj
 *
 * @returns {boolean}
 */
function isObservable(obj) {
  return typeof obj === 'object' && obj.hasOwnProperty('__ob__');
}

/**
 * Same as above but with reactivity in mind
 *
 * @param {object} target
 * @params {object} sources
 *
 * @returns {object}
 */
function mergeDeepReactive(component, target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          component.$set(target, key, {});
        }
        mergeDeepReactive(component, target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        component.$set(target, key, source[key]);
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key];
        }
      } else {
        component.$set(target, key, source[key]);
      }
    }
  }
  return mergeDeepReactive(component, target, ...sources);
}
/**
 * Check if objects or arrays are equal by comparing nested values
 *
 * @param {object|array} left
 * @param {object|array} right
 *
 * @returns {boolean}
 */
function notEqualDeep(left, right, cache = [], path = '') {
  if (typeof right !== typeof left) {
    return { left, right, what: path + '.typeof' };
  } else if (Array.isArray(left) && !Array.isArray(right)) {
    return { left, right, what: path + '.isArray' };
  } else if (Array.isArray(right) && !Array.isArray(left)) {
    return { left, right, what: path + '.isArray' };
  } else if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) {
      return { left, right, what: path + '.length' };
    }
    let what;
    for (let index = 0, len = left.length; index < len; index++) {
      if ((what = notEqualDeep(left[index], right[index], cache, path + '.' + index))) {
        return what;
      }
    }
  } else if (isObject(left) && !isObject(right)) {
    return { left, right, what: path + '.isObject' };
  } else if (isObject(right) && !isObject(left)) {
    return { left, right, what: path + '.isObject' };
  } else if (isObject(left) && isObject(right)) {
    for (let key in left) {
      if (!left.hasOwnProperty(key) || !left.propertyIsEnumerable(key)) {
        continue;
      }
      if (!right.hasOwnProperty(key)) {
        return { left, right, what: path + '.' + key };
      }
      let what;
      if ((what = notEqualDeep(left[key], right[key], cache, path + '.' + key))) {
        return what;
      }
    }
  } else if (left !== right) {
    return { left, right, what: path + '. !==' };
  }
  return false;
}

const styleCache = {};

/**
 * GanttElastic
 * Main vue component
 */
const GanttElastic = {
  name: 'GanttElastic',
  components: {
    MainView: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['tasks', 'options', 'styleRules'],
  provide() {
    const provider = {};
    const self = this;
    Object.defineProperty(provider, 'root', {
      enumerable: true,
      get: () => self
    });
    return provider;
  },
  data() {
    return {
      state: {
        tasks: [],
        options: {
          scrollBarHeight: 0,
          allVisibleTasksHeight: 0,
          outerHeight: 0,
          scroll: {
            left: 0,
            top: 0
          }
        },
        dynamicStyle: {},
        refs: {},
        tasksById: {},
        taskTree: {},
        ctx,
        emitTasksChanges: true, // some operations may pause emitting changes to parent component
        emitOptionsChanges: true, // some operations may pause emitting changes to parent component
        resizeObserver: null,
        unwatchTasks: null,
        unwatchOptions: null,
        unwatchStyle: null,
        unwatchOutputTasks: null,
        unwatchOutputOptions: null
      }
    };
  },
  methods: {
    mergeDeep,
    mergeDeepReactive,

    /**
     * Calculate height of scrollbar in current browser
     *
     * @returns {number}
     */
    getScrollBarHeight() {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.height = '100px';
      outer.style.msOverflowStyle = 'scrollbar';
      document.body.appendChild(outer);
      var noScroll = outer.offsetHeight;
      outer.style.overflow = 'scroll';
      var inner = document.createElement('div');
      inner.style.height = '100%';
      outer.appendChild(inner);
      var withScroll = inner.offsetHeight;
      outer.parentNode.removeChild(outer);
      const height = noScroll - withScroll;
      this.style['chart-scroll-container--vertical']['margin-left'] = `-${height}px`;
      return (this.state.options.scrollBarHeight = height);
    },

    /**
     * Fill out empty task properties and make it reactive
     */
    fillTasks(tasks) {
      for (let task of tasks) {
        if (typeof task.x === 'undefined') {
          task.x = 0;
        }
        if (typeof task.y === 'undefined') {
          task.y = 0;
        }
        if (typeof task.width === 'undefined') {
          task.width = 0;
        }
        if (typeof task.height === 'undefined') {
          task.height = 0;
        }
        if (typeof task.mouseOver === 'undefined') {
          task.mouseOver = false;
        }
        if (typeof task.collapsed === 'undefined') {
          task.collapsed = false;
        }
        if (typeof task.dependentOn === 'undefined') {
          task.dependentOn = [];
        }
        if (typeof task.parentId === 'undefined') {
          task.parentId = null;
        }
        if (typeof task.style === 'undefined') {
          task.style = {};
        }
        if (typeof task.children === 'undefined') {
          task.children = [];
        }
        if (typeof task.allChildren === 'undefined') {
          task.allChildren = [];
        }
        if (typeof task.parents === 'undefined') {
          task.parents = [];
        }
        if (typeof task.parent === 'undefined') {
          task.parent = null;
        }
        if (typeof task.startTime === 'undefined') {
          task.startTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.start).valueOf();
        }
        if (typeof task.endTime === 'undefined' && task.hasOwnProperty('end')) {
          task.endTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.end).valueOf();
        } else if (typeof task.endTime === 'undefined' && task.hasOwnProperty('duration')) {
          task.endTime = task.startTime + task.duration;
        }
        if (typeof task.duration === 'undefined' && task.hasOwnProperty('endTime')) {
          task.duration = task.endTime - task.startTime;
        }
      }
      return tasks;
    },

    /**
     * Map tasks
     *
     * @param {Array} tasks
     * @param {Object} options
     */
    mapTasks(tasks, options) {
      for (let [index, task] of tasks.entries()) {
        tasks[index] = {
          ...task,
          id: task[options.taskMapping.id],
          start: task[options.taskMapping.start],
          label: task[options.taskMapping.label],
          duration: task[options.taskMapping.duration],
          progress: task[options.taskMapping.progress],
          type: task[options.taskMapping.type],
          style: task[options.taskMapping.style],
          collapsed: task[options.taskMapping.collapsed]
        };
      }
      return tasks;
    },

    /**
     * Initialize component
     */
    initialize(itsUpdate = '') {
      let options = mergeDeep({}, this.state.options, getOptions(this.options), this.options);
      let tasks = this.mapTasks(this.tasks, options);
      if (Object.keys(this.state.dynamicStyle).length === 0) {
        this.initializeStyle();
      }
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale, null, true);
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale.name);
      if (typeof options.taskList === 'undefined') {
        options.taskList = {};
      }
      options.taskList.columns = options.taskList.columns.map((column, index) => {
        column.thresholdPercent = 100;
        column.widthFromPercentage = 0;
        column.finalWidth = 0;
        if (typeof column.height === 'undefined') {
          column.height = 0;
        }
        if (typeof column.style === 'undefined') {
          column.style = {};
        }
        column._id = `${index}-${column.label}`;
        return column;
      });
      this.state.options = options;
      tasks = this.fillTasks(tasks);
      this.state.tasksById = this.resetTaskTree(tasks);
      this.state.taskTree = this.makeTaskTree(this.state.rootTask, tasks);
      this.state.tasks = this.state.taskTree.allChildren.map(childId => this.getTask(childId));
      this.calculateTaskListColumnsDimensions();
      this.getScrollBarHeight();
      this.state.options.scrollBarHeight = this.getScrollBarHeight();
      this.state.options.outerHeight = this.state.options.height + this.state.options.scrollBarHeight;
      this.globalOnResize();
    },

    /**
     * Initialize style
     */
    initializeStyle() {
      this.state.dynamicStyle = mergeDeep({}, prepareStyle(this.dynamicStyle), this.dynamicStyle);
    },

    /**
     * Get calendar rows outer height
     *
     * @returns {int}
     */
    getCalendarHeight() {
      return this.state.options.calendar.height + this.state.options.calendar.strokeWidth;
    },

    /**
     * Get maximal level of nested task children
     *
     * @returns {int}
     */
    getMaximalLevel() {
      let maximalLevel = 0;
      this.state.tasks.forEach(task => {
        if (task.parents.length > maximalLevel) {
          maximalLevel = task.parents.length;
        }
      });
      return maximalLevel - 1;
    },

    /**
     * Get maximal expander width - to calculate straight task list text
     *
     * @returns {int}
     */
    getMaximalExpanderWidth() {
      return (
        this.getMaximalLevel() * this.state.options.taskList.expander.padding +
        this.state.options.taskList.expander.margin
      );
    },

    /**
     * Synchronize scrollTop property when row height is changed
     */
    syncScrollTop() {
      if (this.state.refs.taskListItems) {
        this.state.options.scroll.top = this.state.refs.taskListItems.scrollTop = this.state.refs.chartScrollContainerVertical.scrollTop = this.state.refs.chartGraph.scrollTop;
      }
    },

    /**
     * Calculate task list columns dimensions
     */
    calculateTaskListColumnsDimensions() {
      let final = 0;
      let percentage = 0;
      this.state.options.taskList.columns.forEach(column => {
        if (column.expander) {
          column.widthFromPercentage =
            ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.options.taskList.percent;
        } else {
          column.widthFromPercentage = (column.width / 100) * this.state.options.taskList.percent;
        }
        percentage += column.widthFromPercentage;
        column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100;
        final += column.finalWidth;
        column.height = this.getTaskHeight() - this.style['grid-line-horizontal']['stroke-width'];
      });
      this.state.options.taskList.widthFromPercentage = percentage;
      this.state.options.taskList.finalWidth = final;
    },

    /**
     * Reset task tree - which is used to create tree like structure inside task list
     */
    resetTaskTree(tasks) {
      this.$set(this.state, 'rootTask', {
        id: null,
        label: 'root',
        children: [],
        allChildren: [],
        parents: [],
        parent: null,
        __root: true
      });
      const tasksById = {};
      for (let i = 0, len = tasks.length; i < len; i++) {
        let current = tasks[i];
        current.children = [];
        current.allChildren = [];
        current.parent = null;
        current.parents = [];
        tasksById[current.id] = current;
      }
      return tasksById;
    },

    /**
     * Make task tree, after reset - look above
     *
     * @param {object} task
     * @returns {object} tasks with children and parents
     */
    makeTaskTree(task, tasks) {
      for (let i = 0, len = tasks.length; i < len; i++) {
        let current = tasks[i];
        if (current.parentId === task.id) {
          if (task.parents.length) {
            task.parents.forEach(parent => current.parents.push(parent));
          }
          if (!task.propertyIsEnumerable('__root')) {
            current.parents.push(task.id);
            current.parent = task.id;
          } else {
            current.parents = [];
            current.parent = null;
          }
          current = this.makeTaskTree(current, tasks);
          task.allChildren.push(current.id);
          task.children.push(current.id);
          current.allChildren.forEach(childId => task.allChildren.push(childId));
        }
      }
      return task;
    },

    /**
     * Get task by id
     *
     * @param {any} taskId
     * @returns {object|null} task
     */
    getTask(taskId) {
      if (typeof this.state.tasksById[taskId] !== 'undefined') {
        return this.state.tasksById[taskId];
      }
      return null;
    },

    /**
     * Get children tasks for specified taskId
     *
     * @param {any} taskId
     * @returns {array} children
     */
    getChildren(taskId) {
      return this.state.tasks.filter(task => task.parent === taskId);
    },

    /**
     * Is task visible
     *
     * @param {Number|String|Task} task
     */
    isTaskVisible(task) {
      if (typeof task === 'number' || typeof task === 'string') {
        task = this.getTask(task);
      }
      for (let i = 0, len = task.parents.length; i < len; i++) {
        if (this.getTask(task.parents[i]).collapsed) {
          return false;
        }
      }
      return true;
    },

    /**
     * Get svg
     *
     * @returns {string} html svg image of gantt
     */
    getSVG() {
      return this.state.options.mainView.outerHTML;
    },

    /**
     * Get image
     *
     * @param {string} type image format
     * @returns {Promise} when resolved returns base64 image string of gantt
     */
    getImage(type = 'image/png') {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = this.state.options.mainView.clientWidth;
          canvas.height = this.state.options.rowsHeight;
          canvas.getContext('2d').drawImage(img, 0, 0);
          resolve(canvas.toDataURL(type));
        };
        img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG());
      });
    },

    /**
     * Get gantt total height
     *
     * @returns {number}
     */
    getHeight(visibleTasks, outer = false) {
      let height =
        visibleTasks.length * (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) +
        this.state.options.calendar.height +
        this.state.options.calendar.strokeWidth +
        this.state.options.calendar.gap;
      if (outer) {
        height += this.state.options.scrollBarHeight;
      }
      return height;
    },

    /**
     * Get one task height
     *
     * @returns {number}
     */
    getTaskHeight(withStroke = false) {
      if (withStroke) {
        return (
          this.state.options.row.height +
          this.state.options.chart.grid.horizontal.gap * 2 +
          this.style['grid-line-horizontal']['stroke-width']
        );
      }
      return this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get specified tasks height
     *
     * @returns {number}
     */
    getTasksHeight(visibleTasks) {
      return visibleTasks.length * this.getTaskHeight();
    },

    /**
     * Convert time (in milliseconds) to pixel offset inside chart
     *
     * @param {int} ms
     * @returns {number}
     */
    timeToPixelOffsetX(ms) {
      let x = ms - this.state.options.times.firstTime;
      if (x) {
        x = x / this.state.options.times.timePerPixel;
      }
      return x;
    },

    /**
     * Convert pixel offset inside chart to corresponding time offset in milliseconds
     *
     * @param {number} pixelOffsetX
     * @returns {int} milliseconds
     */
    pixelOffsetXToTime(pixelOffsetX) {
      let offset = pixelOffsetX + this.style['grid-line-vertical']['stroke-width'] / 2;
      return offset * this.state.options.times.timePerPixel + this.state.options.times.firstTime;
    },

    /**
     * Determine if element is inside current view port
     *
     * @param {number} x - element placement
     * @param {number} width - element width
     * @param {int} buffer - or threshold, if element is outside viewport but offset from view port is below this value return true
     * @returns {boolean}
     */
    isInsideViewPort(x, width, buffer = 5000) {
      return (
        (x + width + buffer >= this.state.options.scroll.chart.left &&
          x - buffer <= this.state.options.scroll.chart.right) ||
        (x - buffer <= this.state.options.scroll.chart.left &&
          x + width + buffer >= this.state.options.scroll.chart.right)
      );
    },

    /**
     * Chart scroll event handler
     *
     * @param {event} ev
     */
    onScrollChart(ev) {
      const horizontal = this.state.refs.chartScrollContainerHorizontal;
      const vertical = this.state.refs.chartScrollContainerVertical;
      this._onScrollChart(horizontal.scrollLeft, vertical.scrollTop);
    },

    /**
     * After same as above but with different arguments - normalized
     *
     * @param {number} left
     * @param {number} top
     */
    _onScrollChart(left, top) {
      const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
      this.state.options.scroll.chart.left = left;
      this.state.options.scroll.chart.right = left + chartContainerWidth;
      this.state.options.scroll.chart.percent = (left / this.state.options.times.totalViewDurationPx) * 100;
      this.state.options.scroll.chart.top = top;
      this.state.options.scroll.chart.time = this.pixelOffsetXToTime(left);
      this.state.options.scroll.chart.timeCenter = this.pixelOffsetXToTime(left + chartContainerWidth / 2);
      this.state.options.scroll.chart.dateTime.left = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.scroll.chart.time).valueOf();
      this.state.options.scroll.chart.dateTime.right = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(
        this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth)
      ).valueOf();
      this.scrollTo(left, top);
    },

    /**
     * Scroll current chart to specified time (in milliseconds)
     *
     * @param {int} time
     */
    scrollToTime(time) {
      let pos = this.timeToPixelOffsetX(time);
      const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
      pos = pos - chartContainerWidth / 2;
      if (pos > this.state.options.width) {
        pos = this.state.options.width - chartContainerWidth;
      }
      this.scrollTo(pos);
    },

    /**
     * Scroll chart or task list to specified pixel values
     *
     * @param {number|null} left
     * @param {number|null} top
     */
    scrollTo(left = null, top = null) {
      if (left !== null) {
        this.state.refs.chartCalendarContainer.scrollLeft = left;
        this.state.refs.chartGraphContainer.scrollLeft = left;
        this.state.refs.chartScrollContainerHorizontal.scrollLeft = left;
        this.state.options.scroll.left = left;
      }
      if (top !== null) {
        this.state.refs.chartScrollContainerVertical.scrollTop = top;
        this.state.refs.chartGraph.scrollTop = top;
        this.state.refs.taskListItems.scrollTop = top;
        this.state.options.scroll.top = top;
        this.syncScrollTop();
      }
    },

    /**
     * After some actions like time zoom change we need to recompensate scroll position
     * so as a result everything will be in same place
     */
    fixScrollPos() {
      this.scrollToTime(this.state.options.scroll.chart.timeCenter);
    },

    /**
     * Mouse wheel event handler
     */
    onWheelChart(ev) {
      if (!ev.shiftKey) {
        let top = this.state.options.scroll.top + ev.deltaY;
        const chartClientHeight = this.state.options.rowsHeight;
        const scrollHeight = this.state.refs.chartGraph.scrollHeight - chartClientHeight;
        if (top < 0) {
          top = 0;
        } else if (top > scrollHeight) {
          top = scrollHeight;
        }
        this.scrollTo(null, top);
      } else {
        let left = this.state.options.scroll.left + ev.deltaY;
        const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
        if (left < 0) {
          left = 0;
        } else if (left > scrollWidth) {
          left = scrollWidth;
        }
        this.scrollTo(left);
      }
    },

    /**
     * Time zoom change event handler
     */
    onTimeZoomChange(timeZoom) {
      this.state.options.times.timeZoom = timeZoom;
      this.recalculateTimes();
      this.calculateSteps();
      this.fixScrollPos();
    },

    /**
     * Row height change event handler
     */
    onRowHeightChange(height) {
      this.state.options.row.height = height;
      this.calculateTaskListColumnsDimensions();
      this.syncScrollTop();
    },

    /**
     * Scope change event handler
     */
    onScopeChange(value) {
      this.state.options.scope.before = value;
      this.state.options.scope.after = value;
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },

    /**
     * Task list width change event handler
     */
    onTaskListWidthChange(value) {
      this.state.options.taskList.percent = value;
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Task list column width change event handler
     */
    onTaskListColumnWidthChange() {
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Listen to specified event names
     */
    initializeEvents() {
      this.$on('chart-scroll-horizontal', this.onScrollChart);
      this.$on('chart-scroll-vertical', this.onScrollChart);
      this.$on('chart-wheel', this.onWheelChart);
      this.$on('times-timeZoom-change', this.onTimeZoomChange);
      this.$on('row-height-change', this.onRowHeightChange);
      this.$on('scope-change', this.onScopeChange);
      this.$on('taskList-width-change', this.onTaskListWidthChange);
      this.$on('taskList-column-width-change', this.onTaskListColumnWidthChange);
    },

    /**
     * When some action was performed (scale change for example) - recalculate time variables
     */
    recalculateTimes() {
      let max = this.state.options.times.timeScale * 60;
      let min = this.state.options.times.timeScale;
      let steps = max / min;
      let percent = this.state.options.times.timeZoom / 100;
      this.state.options.times.timePerPixel =
        this.state.options.times.timeScale * steps * percent + Math.pow(2, this.state.options.times.timeZoom);
      this.state.options.times.totalViewDurationMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).diff(
        this.state.options.times.firstTime,
        'milliseconds'
      );
      this.state.options.times.totalViewDurationPx =
        this.state.options.times.totalViewDurationMs / this.state.options.times.timePerPixel;
      this.state.options.width =
        this.state.options.times.totalViewDurationPx + this.style['grid-line-vertical']['stroke-width'];
    },

    /**
     * Initialize time variables
     */
    initTimes() {
      this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        .subtract(this.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTaskTime)
        .locale(this.state.options.locale.name)
        .endOf('day')
        .add(this.state.options.scope.after, 'days')
        .endOf('day')
        .valueOf();
      this.recalculateTimes();
    },

    /**
     * Calculate steps
     * Steps are days by default
     * Each step contain information about time offset and pixel offset of this time inside gantt chart
     */
    calculateSteps() {
      const steps = [];
      const lastMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).valueOf();
      const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime);
      steps.push({
        time: currentDate.valueOf(),
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (
        let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime)
          .add(1, this.state.options.times.stepDuration)
          .startOf('day');
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.state.options.times.stepDuration).startOf('day')
      ) {
        const offsetMs = currentDate.diff(this.state.options.times.firstTime, 'milliseconds');
        const offsetPx = offsetMs / this.state.options.times.timePerPixel;
        const step = {
          time: currentDate.valueOf(),
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
        ms: this.state.options.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.state.options.times.totalViewDurationPx - lastStep.offset.px
      };
      this.state.options.times.steps = steps;
    },

    /**
     * Calculate calendar widths - when scale was changed for example
     */
    computeCalendarWidths() {
      this.computeDayWidths();
      this.computeHourWidths();
      this.computeMonthWidths();
    },

    /**
     * Compute width of calendar hours column widths basing on text widths
     */
    computeHourWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--hour'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2018-01-01T00:00:00'); // any date will be good for hours
      let maxWidths = this.state.options.calendar.hour.maxWidths;
      this.state.options.calendar.hour.widths = [];
      Object.keys(this.state.options.calendar.hour.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let hour = 0; hour < 24; hour++) {
        const widths = {
          hour
        };
        Object.keys(this.state.options.calendar.hour.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.hour.format[formatName](currentDate.toDate())
          ).width;
        });
        this.state.options.calendar.hour.widths.push(widths);
        Object.keys(this.state.options.calendar.hour.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'hour');
      }
    },

    /**
     * Compute calendar days column widths basing on text widths
     */
    computeDayWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--day'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.steps[0].time);
      let maxWidths = this.state.options.calendar.day.maxWidths;
      this.state.options.calendar.day.widths = [];
      Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let day = 0, daysLen = this.state.options.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.day.format[formatName](currentDate.toDate())
          ).width;
        });
        this.state.options.calendar.day.widths.push(widths);
        Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'day');
      }
    },

    /**
     * Months count
     *
     * @description Returns number of different months in specified time range
     *
     * @param {number} fromTime - date in ms
     * @param {number} toTime - date in ms
     *
     * @returns {number} different months count
     */
    monthsCount(fromTime, toTime) {
      if (fromTime > toTime) {
        return 0;
      }
      let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(fromTime);
      let previousMonth = currentMonth.clone();
      let monthsCount = 1;
      while (currentMonth.valueOf() <= toTime) {
        currentMonth = currentMonth.add(1, 'day');
        if (previousMonth.month() !== currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      return monthsCount;
    },

    /**
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--month'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let maxWidths = this.state.options.calendar.month.maxWidths;
      this.state.options.calendar.month.widths = [];
      Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime);
      const monthsCount = this.monthsCount(this.state.options.times.firstTime, this.state.options.times.lastTime);
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.month.format[formatName](currentDate.toDate())
          ).width;
        });
        this.state.options.calendar.month.widths.push(widths);
        Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'month');
      }
    },

    /**
     * Prepare time and date variables for gantt
     */
    prepareDates() {
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
        }
        if (task.startTime + task.duration > lastTaskTime) {
          lastTaskTime = task.startTime + task.duration;
        }
      }
      this.state.options.times.firstTaskTime = firstTaskTime;
      this.state.options.times.lastTaskTime = lastTaskTime;
      this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        .subtract(this.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastTaskTime)
        .locale(this.state.options.locale.name)
        .endOf('day')
        .add(this.state.options.scope.after, 'days')
        .endOf('day')
        .valueOf();
    },

    /**
     * Setup and calculate everything
     */
    setup(itsUpdate = '') {
      this.initialize(itsUpdate);
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.state.options.taskList.width = this.state.options.taskList.columns.reduce(
        (prev, current) => {
          return { width: prev.width + current.width };
        },
        { width: 0 }
      ).width;
    },

    /**
     * Global resize event (from window.addEventListener)
     */
    globalOnResize() {
      if (typeof this.$el === 'undefined' || !this.$el) {
        return;
      }
      this.state.options.clientWidth = this.$el.clientWidth;
      if (
        this.state.options.taskList.widthFromPercentage >
        (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold
      ) {
        const diff =
          this.state.options.taskList.widthFromPercentage -
          (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold;
        let diffPercent = 100 - (diff / this.state.options.taskList.widthFromPercentage) * 100;
        if (diffPercent < 0) {
          diffPercent = 0;
        }
        this.state.options.taskList.columns.forEach(column => {
          column.thresholdPercent = diffPercent;
        });
      } else {
        this.state.options.taskList.columns.forEach(column => {
          column.thresholdPercent = 100;
        });
      }
      this.calculateTaskListColumnsDimensions();
      this.$emit('calendar-recalculate');
      this.syncScrollTop();
    }
  },

  computed: {
    /**
     * Get visible tasks
     * Very important method which will bring us only those tasks that are visible inside gantt chart
     * For example when task is collapsed - children of this task are not visible - we should not render them
     */
    visibleTasks() {
      const visibleTasks = this.state.tasks.filter(task => this.isTaskVisible(task));
      const maxRows = visibleTasks.slice(0, this.state.options.maxRows);
      this.state.options.rowsHeight = this.getTasksHeight(maxRows);
      let heightCompensation = 0;
      if (this.state.options.maxHeight && this.state.options.rowsHeight > this.state.options.maxHeight) {
        heightCompensation = this.state.options.rowsHeight - this.state.options.maxHeight;
        this.state.options.rowsHeight = this.state.options.maxHeight;
      }
      this.state.options.height = this.getHeight(maxRows) - heightCompensation;
      this.state.options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
      this.state.options.outerHeight = this.getHeight(maxRows, true) - heightCompensation;
      let len = visibleTasks.length;
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index];
        task.width =
          task.duration / this.state.options.times.timePerPixel - this.style['grid-line-vertical']['stroke-width'];
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.options.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        task.y =
          (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) * index +
          this.state.options.chart.grid.horizontal.gap;
      }
      return visibleTasks;
    },

    /**
     * Style shortcut
     */
    style() {
      return this.state.dynamicStyle;
    },

    /**
     * Get columns and compute dimensions on the fly
     */
    getTaskListColumns() {
      this.calculateTaskListColumnsDimensions();
      return this.state.options.taskList.columns;
    },

    /**
     * Tasks used for communicate with parent component
     */
    outputTasks() {
      return this.state.tasks;
    },

    /**
     * Options used to communicate with parent component
     */
    outputOptions() {
      return this.state.options;
    }
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created() {
    this.initializeEvents();
    this.setup();
    this.state.unwatchTasks = this.$watch(
      'tasks',
      tasks => {
        const notEqual = notEqualDeep(tasks, this.outputTasks);
        if (notEqual) {
          this.setup('tasks');
        }
      },
      { deep: false }
    );
    this.state.unwatchOptions = this.$watch(
      'options',
      opts => {
        const notEqual = notEqualDeep(opts, this.outputOptions);
        if (notEqual) {
          this.setup('options');
        }
      },
      { deep: false }
    );
    this.state.unwatchStyle = this.$watch(
      'dynamicStyle',
      style => {
        const notEqual = notEqualDeep(style, this.dynamicStyle);
        if (notEqual) {
          this.initializeStyle();
        }
      },
      { deep: true, immediate: true }
    );

    this.state.unwatchOutputTasks = this.$watch(
      'outputTasks',
      tasks => {
        const notEqual = notEqualDeep(this.tasks, tasks);
        if (notEqual && this.state.emitTasksChanges) {
          this.$emit('tasks-updated', tasks.map(task => task));
        }
      },
      { deep: true }
    );
    this.state.unwatchOutputOptions = this.$watch(
      'outputOptions',
      options => {
        const notEqual = notEqualDeep(this.options, options);
        if (notEqual && this.state.emitOptionsChanges) {
          this.$emit('options-updated', mergeDeep({}, options));
        }
      },
      { deep: true }
    );

    this.$root.$emit('gantt-elastic-created', this);
    this.$emit('created', this);
  },

  /**
   * Emit before-mount event
   */
  beforeMount() {
    this.$emit('before-mount', this);
  },

  /**
   * Emit ready/mounted events and deliver this gantt instance to outside world when needed
   */
  mounted() {
    this.state.options.clientWidth = this.$el.clientWidth;
    this.state.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"]((entries, observer) => {
      this.globalOnResize();
    });
    this.state.resizeObserver.observe(this.$el.parentNode);
    this.globalOnResize();
    this.$root.$emit('gantt-elastic-mounted', this);
    this.$emit('mounted');
    this.$root.$emit('gantt-elastic-ready', this);
  },

  /**
   * Emit event when data was changed and before update (you can cleanup dom events here for example)
   */
  beforeUpdate() {
    this.$emit('before-update');
  },

  /**
   * Emit event when gantt-elastic view was updated
   */
  updated() {
    this.$nextTick(() => {
      this.$emit('updated');
    });
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    this.state.resizeObserver.unobserve(this.$el.parentNode);
    this.state.unwatchTasks();
    this.state.unwatchOptions();
    this.state.unwatchStyle();
    this.state.unwatchOutputTasks();
    this.state.unwatchOutputOptions();
    this.$emit('before-destroy');
  },

  /**
   * Emit event after gantt-elastic was destroyed
   */
  destroyed() {
    this.$emit('destroyed');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GanttElastic);


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarRow.vue */ "./src/components/Calendar/CalendarRow.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Calendar',
  components: {
    CalendarRow: _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {};
  },

  methods: {
    /**
     * How many hours will fit?
     *
     * @returns {object}
     */
    howManyHoursFit(dayIndex) {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullCellWidth = this.root.state.options.times.steps[dayIndex].width.px;
      let formatNames = Object.keys(this.root.state.options.calendar.hour.format);
      for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth &&
            hours > 1
          ) {
            return {
              count: hours,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ''
      };
    },

    /**
     * How many days will fit?
     *
     * @returns {object}
     */
    howManyDaysFit() {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullWidth = this.root.state.options.width;
      let formatNames = Object.keys(this.root.state.options.calendar.day.format);
      for (let days = this.root.state.options.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth &&
            days > 1
          ) {
            return {
              count: days,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ''
      };
    },

    /**
     * How many months will fit?
     *
     * @returns {object}
     */
    howManyMonthsFit() {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullWidth = this.root.state.options.width;
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
      let previousMonth = currentMonth.clone();
      const lastTime = this.root.state.options.times.lastTime;
      let monthsCount = this.root.monthsCount(
        this.root.state.options.times.firstTime,
        this.root.state.options.times.lastTime
      );
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth &&
            months > 1
          ) {
            return {
              count: months,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: formatNames[0]
      };
    },

    /**
     * Generate hours
     *
     * @returns {array}
     */
    generateHours() {
      let allHours = [];
      if (!this.root.state.options.calendar.hour.display) {
        return allHours;
      }
      for (let hourIndex = 0, len = this.root.state.options.times.steps.length; hourIndex < len; hourIndex++) {
        const hoursCount = this.howManyHoursFit(hourIndex);
        if (hoursCount.count === 0) {
          continue;
        }
        const hours = { key: hourIndex + 'step', children: [] };
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.root.state.options.times.steps[hourIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.steps[hourIndex].time).add(i * hourStep, 'hour');
          let index = hourIndex;
          if (hourIndex > 0) {
            index = hourIndex - Math.floor(hourIndex / 24) * 24;
          }
          let textWidth = 0;
          if (typeof this.root.state.options.calendar.hour.widths[index] !== 'undefined') {
            textWidth = this.root.state.options.calendar.hour.widths[index][hoursCount.type];
          }
          let x = this.root.state.options.times.steps[hourIndex].offset.px + hourWidthPx * i;
          hours.children.push({
            index: hourIndex,
            key: this.root.state.options.times.steps[hourIndex].time + 'h' + i,
            x,
            y: this.root.state.options.calendar.day.height + this.root.state.options.calendar.month.height,
            width: hourWidthPx,
            textWidth,
            height: this.root.state.options.calendar.hour.height,
            label: this.root.state.options.calendar.hour.format[hoursCount.type](date.toDate())
          });
        }
        allHours.push(hours);
      }
      return allHours;
    },

    /**
     * Generate days
     *
     * @returns {array}
     */
    generateDays() {
      let days = [];
      if (!this.root.state.options.calendar.day.display) {
        return days;
      }
      const daysCount = this.howManyDaysFit();
      if (daysCount.count === 0) {
        return days;
      }
      const dayStep = Math.ceil(this.root.state.options.times.steps.length / daysCount.count);
      for (let dayIndex = 0, len = this.root.state.options.times.steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof this.root.state.options.times.steps[dayIndex + currentStep] !== 'undefined') {
            dayWidthPx += this.root.state.options.times.steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.steps[dayIndex].time);
        let textWidth = 0;
        if (typeof this.root.state.options.calendar.day.widths[dayIndex] !== 'undefined') {
          textWidth = this.root.state.options.calendar.day.widths[dayIndex][daysCount.type];
        }
        let x = this.root.state.options.times.steps[dayIndex].offset.px;
        days.push({
          index: dayIndex,
          key: this.root.state.options.times.steps[dayIndex].time + 'd',
          x,
          y: this.root.state.options.calendar.month.height,
          width: dayWidthPx,
          textWidth,
          height: this.root.state.options.calendar.day.height,
          label: this.root.state.options.calendar.day.format[daysCount.type](date.toDate())
        });
      }
      return days.map(item => ({
        key: item.key,
        children: [item]
      }));
    },

    /**
     * Generate months
     *
     * @returns {array}
     */
    generateMonths() {
      let months = [];
      if (!this.root.state.options.calendar.month.display) {
        return months;
      }
      const monthsCount = this.howManyMonthsFit();
      if (monthsCount.count === 0) {
        return months;
      }
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(currentDate)
          .add(1, 'month')
          .startOf('month');
        if (finalDate.valueOf() > this.root.state.options.times.lastTime) {
          finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.root.state.options.times.steps.length; step < len; step++) {
          let currentStep = this.root.state.options.times.steps[step];
          if (currentStep.time >= currentDate.valueOf() && currentStep.time < finalDate.valueOf()) {
            monthWidth += currentStep.width.px;
            if (currentStep.offset.px < monthOffset) {
              monthOffset = currentStep.offset.px;
            }
          }
        }
        let label = '';
        let choosenFormatName;
        for (let formatName of formatNames) {
          if (this.root.state.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.root.state.options.calendar.month.format[formatName](currentDate.toDate());
            choosenFormatName = formatName;
          }
        }
        let textWidth = 0;
        if (typeof this.root.state.options.calendar.month.widths[monthIndex] !== 'undefined') {
          textWidth = this.root.state.options.calendar.month.widths[monthIndex][choosenFormatName];
        }
        let x = monthOffset;
        months.push({
          index: monthIndex,
          key: monthIndex + 'm',
          x,
          y: 0,
          width: monthWidth,
          textWidth,
          choosenFormatName,
          height: this.root.state.options.calendar.month.height,
          label
        });
        currentDate = currentDate.add(1, 'month').startOf('month');
        if (currentDate.valueOf() > this.root.state.options.times.lastTime) {
          currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
        }
      }
      return months.map(item => ({
        key: item.key,
        children: [item]
      }));
    },

    /**
     * Sum all calendar rows height and return result
     *
     * @returns {int}
     */
    calculateCalendarDimensions({ hours, days, months }) {
      let height = 0;
      if (this.root.state.options.calendar.hour.display && hours.length > 0) {
        height += this.root.state.options.calendar.hour.height;
      }
      if (this.root.state.options.calendar.day.display && days.length > 0) {
        height += this.root.state.options.calendar.day.height;
      }
      if (this.root.state.options.calendar.month.display && months.length > 0) {
        height += this.root.state.options.calendar.month.height;
      }
      this.root.state.options.calendar.height = height;
    }
  },

  computed: {
    dates() {
      const hours = this.generateHours();
      const days = this.generateDays();
      const months = this.generateMonths();
      const allDates = { hours, days, months };
      this.calculateCalendarDimensions(allDates);
      return allDates;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalendarRow',
  inject: ['root'],
  props: ['items', 'which'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get x position
     *
     * @returns {number}
     */
    getTextX(item) {
      let x = item.x + item.width / 2 - item.textWidth / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(item.x, item.width, 0)) {
        let scrollWidth = this.root.state.options.scroll.chart.right - this.root.state.options.scroll.chart.left;
        x = this.root.state.options.scroll.chart.left + scrollWidth / 2 - item.textWidth / 2 + 2;
        if (x + item.textWidth + 2 > item.x + item.width) {
          x = item.x + item.width - item.textWidth - 2;
        } else if (x < item.x) {
          x = item.x + 2;
        }
      }
      return x - item.x;
    }
  },
  computed: {
    rowStyle() {
      return { ...this.root.style['calendar-row'], ...this.root.style['calendar-row--' + this.which] };
    },
    rectStyle() {
      return { ...this.root.style['calendar-row-rect'], ...this.root.style['calendar-row-rect--' + this.which] };
    },
    rectChildStyle() {
      const basicStyle = {
        ...this.root.style['calendar-row-rect-child'],
        ...this.root.style['calendar-row-rect-child--' + this.which]
      };
      const style = [];
      for (let item of this.items) {
        const childrenStyle = [];
        for (let child of item.children) {
          childrenStyle.push({
            ...basicStyle,
            width: child.width + 'px',
            height: child.height + 'px'
          });
        }
        style.push(childrenStyle);
      }
      return style;
    },
    textStyle() {
      const basicStyle = {
        ...this.root.style['calendar-row-text'],
        ...this.root.style['calendar-row-text--' + this.which]
      };
      return child => {
        const style = { ...basicStyle };
        if (this.which === 'month') {
          style.left = this.getTextX(child) + 'px';
        }
        return style;
      };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue */ "./src/components/Chart/Grid.vue");
/* harmony import */ var _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaysHighlight.vue */ "./src/components/Chart/DaysHighlight.vue");
/* harmony import */ var _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Calendar/Calendar.vue */ "./src/components/Calendar/Calendar.vue");
/* harmony import */ var _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DependencyLines.vue */ "./src/components/Chart/DependencyLines.vue");
/* harmony import */ var _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row/Task.vue */ "./src/components/Chart/Row/Task.vue");
/* harmony import */ var _Row_Milestone_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row/Milestone.vue */ "./src/components/Chart/Row/Milestone.vue");
/* harmony import */ var _Row_Project_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Row/Project.vue */ "./src/components/Chart/Row/Project.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Chart',
  components: {
    Grid: _Grid_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DependencyLines: _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Calendar: _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Task: _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Milestone: _Row_Milestone_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Project: _Row_Project_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DaysHighlight: _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {
      moving: false
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.chart = this.$refs.chart;
    this.root.state.refs.chartCalendarContainer = this.$refs.chartCalendarContainer;
    this.root.state.refs.chartGraphContainer = this.$refs.chartGraphContainer;
    this.root.state.refs.chartGraph = this.$refs.chartGraph;
    this.root.state.refs.chartGraphSvg = this.$refs.chartGraphSvg;
  },

  computed: {
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${this.root.state.options.width} ${this.root.state.options.allVisibleTasksHeight}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DaysHighlight',
  inject: ['root'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get key
     *
     * @param {object} day
     * @returns {string} key ideintifier for loop
     */
    getKey(day) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(day.time).format('YYYY-MM-DD');
    }
  },
  computed: {
    /**
     * Get working days
     *
     * @returns {array}
     */
    workingDays() {
      return this.root.state.options.times.steps.filter(step => {
        return this.root.state.options.calendar.workingDays.indexOf(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(step.time).day()) === -1;
      });
    },

    /**
     * Show working days?
     *
     * @returns {bool}
     */
    showWorkingDays() {
      const calendar = this.root.state.options.calendar;
      if (
        typeof calendar.workingDays !== 'undefined' &&
        Array.isArray(calendar.workingDays) &&
        calendar.workingDays.length
      ) {
        return true;
      }
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DependencyLines',
  inject: ['root'],
  props: ['tasks'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get path points
     *
     * @param {any} fromTaskId
     * @param {any} toTaskId
     * @returns {string}
     */
    getPoints(fromTaskId, toTaskId) {
      const fromTask = this.root.getTask(fromTaskId);
      const toTask = this.root.getTask(toTaskId);
      if (
        fromTask === null ||
        toTask === null ||
        !this.root.isTaskVisible(toTask) ||
        !this.root.isTaskVisible(fromTask)
      ) {
        return null;
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
        points += `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY +
          roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - roundness * yMultiplier}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY +
          (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX -
          offset +
          distanceX -
          roundness},${startY + (distanceY * yMultiplier) / 2 + roundness * yMultiplier}
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
    /**
     * Get tasks which are dependent on other tasks
     *
     * @returns {array}
     */
    dependencyTasks() {
      return this.tasks
        .filter(task => typeof task.dependentOn !== 'undefined')
        .map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return { points: this.getPoints(id, task.id) };
          });
          return task;
        })
        .filter(task => task.dependencyLines.points !== null);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Grid',
  inject: ['root'],
  data() {
    return {};
  },
  /**
   * Created
   */
  created() {
    this.root.$on('recenterPosition', this.recenterPosition);
  },

  /**
   * Mounted
   */
  mounted() {
    this.$nextTick(() => {
      this.$nextTick(() => {
        // because of stupid slider :/
        this.root.scrollToTime(this.timeLinePosition.time);
      });
    });
  },

  methods: {
    /**
     * Recenter position - go to current time line
     */
    recenterPosition() {
      this.root.scrollToTime(this.timeLinePosition.time);
    }
  },

  computed: {
    /**
     * Generate vertical lines of the grid
     *
     * @returns {array}
     */
    verticalLines() {
      let lines = [];
      const state = this.root.state;
      state.options.times.steps.forEach(step => {
        if (this.root.isInsideViewPort(step.offset.px, 1)) {
          lines.push({
            key: step.time,
            x1: step.offset.px,
            y1: 0,
            x2: step.offset.px,
            y2:
              state.tasks.length * (state.options.row.height + state.options.chart.grid.horizontal.gap * 2) +
              this.root.style['grid-line-vertical']['stroke-width']
          });
        }
      });
      return lines;
    },

    /**
     * Generate horizontal lines of the grid
     *
     * @returns {array}
     */
    horizontalLines() {
      let lines = [];
      const state = this.root.state.options;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        const y =
          index * (state.row.height + state.chart.grid.horizontal.gap * 2) +
          this.root.style['grid-line-vertical']['stroke-width'] / 2;
        lines.push({
          key: 'hl' + index,
          x1: 0,
          y1: y,
          x2: '100%',
          y2: y
        });
      }
      return lines;
    },

    /**
     * Check if specified line is inside viewport (visible)
     *
     * @returns {function}
     */
    inViewPort() {
      return line => {
        const state = this.root.state.options;
        return line.x1 >= state.scroll.chart.left && line.x1 <= state.scroll.chart.right;
      };
    },

    /**
     * Get current time line position
     *
     * @returns {object}
     */
    timeLinePosition() {
      const d = new Date();
      const current = d.getTime();
      const currentOffset = this.root.timeToPixelOffsetX(current);
      const timeLine = {
        x: 0,
        y1: 0,
        y2: '100%',
        dateTime: '',
        time: current
      };
      timeLine.x = currentOffset;
      timeLine.dateTime = d.toLocaleDateString();
      return timeLine;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProgressBar',
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },

  computed: {
    /**
     * Get progress width
     *
     * @returns {string}
     */
    getProgressWidth() {
      return this.task.progress + '%';
    },

    /**
     * Get line points
     *
     * @returns {string}
     */
    getLinePoints() {
      const start = (this.task.width / 100) * this.task.progress;
      return `M ${start} 0 L ${start} ${this.task.height}`;
    },

    /**
     * Get solid style
     *
     * @returns {object}
     */
    getSolidStyle() {
      return Object.assign({}, this.root.state.options.chart.progress.styles.bar.solid, this.task.progressBarStyle.bar);
    },

    /**
     * Get line style
     *
     * @returns {object}
     */
    getLineStyle() {
      return Object.assign(
        {},
        {
          stroke: this.root.state.options.row.styles.bar.stroke + 'a0',
          'stroke-width': this.root.state.options.row.styles.bar['stroke-width'] / 2
        },
        this.task.style
      );
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text.vue */ "./src/components/Chart/Text.vue");
/* harmony import */ var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Milestone',
  components: {
    ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__milestone-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
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
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text.vue */ "./src/components/Chart/Text.vue");
/* harmony import */ var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Project',
  components: {
    ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__project-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
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

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.root.state.options.chart.expander;
      return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text.vue */ "./src/components/Chart/Text.vue");
/* harmony import */ var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Task',
  components: {
    ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__task-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
      const task = this.task;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChartText',
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      const textStyle = this.root.style['chart-row-text'];
      this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.options.chart.text.xPadding * 2;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.task.height + this.root.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get content style
     *
     * @returns {object}
     */
    contentStyle() {
      return { height: '100%', 'line-height': this.getHeight + 'px' };
    },

    /**
     * Should we render text as html?
     *
     * @returns {boolean}
     */
    html() {
      const cols = this.root.state.options.taskList.columns;
      for (let i = 0, len = cols.length; i < len; i++) {
        const col = cols[i];
        if (col.value === 'label' && typeof col.html !== 'undefined' && col.html) {
          return true;
        }
      }
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Expander',
  inject: ['root'],
  props: ['tasks', 'options', 'type'],
  data() {
    const border = 0.5;
    return {
      border,
      borderStyle: {
        'stroke-width': border
      },
      lineOffset: 5
    };
  },
  computed: {
    style() {
      if (this.type !== 'taskList') {
        return {};
      }
      const margin = this.root.state.options.taskList.expander.margin;
      const padding = this.tasks[0].parents.length * this.root.state.options.taskList.expander.padding;
      return {
        'padding-left': padding + margin + 'px',
        margin: 'auto 0'
      };
    },
    /**
     * Get all tasks
     *
     * @returns {array}
     */
    allChildren() {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(childId => {
          children.push(childId);
        });
      });
      return children;
    },
    /**
     * Is current expander collapsed?
     *
     * @returns {boolean}
     */
    collapsed() {
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
    /**
     * Get specific class prefix
     *
     * @returns {string}
     */
    getClassPrefix(full = true) {
      return `${full ? 'gantt-elastic__' : ''}${this.options.type}-expander`;
    },
    /**
     * Toggle expander
     */
    toggle() {
      if (this.tasks.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
        for (let childId of task.allChildren) {
          const child = this.root.getTask(childId);
          child.collapsed = collapsed;
        }
      });
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList/TaskList.vue */ "./src/components/TaskList/TaskList.vue");
/* harmony import */ var _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart/Chart.vue */ "./src/components/Chart/Chart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainView',
  components: {
    TaskList: _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Chart: _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {
      defs: '',
      mousePos: {
        x: 0,
        y: 0,
        movementX: 0,
        movementY: 0,
        lastX: 0,
        lastY: 0,
        positiveX: 0,
        positiveY: 0,
        currentX: 0,
        currentY: 0
      }
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.viewBoxWidth = this.$el.clientWidth;
    this.root.state.refs.mainView = this.$refs.mainView;
    this.root.state.refs.chartContainer = this.$refs.chartContainer;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.chartScrollContainerHorizontal = this.$refs.chartScrollContainerHorizontal;
    this.root.state.refs.chartScrollContainerVertical = this.$refs.chartScrollContainerVertical;
    document.addEventListener('mouseup', this.chartMouseUp.bind(this));
    document.addEventListener('mousemove', this.chartMouseMove.bind(this));
    document.addEventListener('touchmove', this.chartMouseMove.bind(this));
    document.addEventListener('touchend', this.chartMouseUp.bind(this));
  },
  computed: {
    /**
     * Get margin left
     *
     * @returns {string}
     */
    getMarginLeft() {
      if (!this.root.state.options.taskList.display) {
        return '0px';
      }
      return this.root.state.options.taskList.finalWidth + 'px';
    },

    /**
     * Get vertical style
     *
     * @returns {object}
     */
    verticalStyle() {
      return {
        width: this.root.state.options.scrollBarHeight + 'px',
        height: this.root.state.options.rowsHeight + 'px',
        'margin-top': this.root.state.options.calendar.height + this.root.state.options.calendar.gap + 'px'
      };
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      if (this.root.state.options.clientWidth) {
        return `0 0 ${this.root.state.options.clientWidth - this.root.state.options.scrollBarHeight} ${
          this.root.state.options.height
        }`;
      }
      return `0 0 0 ${this.root.state.options.height}`;
    }
  },
  methods: {
    /**
     * Emit event when mouse is moving inside main view
     */
    mouseMove(event) {
      this.root.$emit('main-view-mousemove', event);
    },

    /**
     * Emit mouseup event inside main view
     */
    mouseUp(event) {
      this.root.$emit('main-view-mouseup', event);
    },

    /**
     * Horizontal scroll event handler
     */
    onHorizontalScroll(ev) {
      this.root.$emit('chart-scroll-horizontal', ev);
    },

    /**
     * Vertical scroll event handler
     */
    onVerticalScroll(ev) {
      this.root.$emit('chart-scroll-vertical', ev);
    },

    /**
     * Mouse wheel event handler
     */
    chartWheel(ev) {
      this.root.$emit('chart-wheel', ev);
    },

    /**
     * Chart mousedown event handler
     * Initiates drag scrolling mode
     */
    chartMouseDown(ev) {
      if (typeof ev.touches !== 'undefined') {
        this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
        this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
        this.mousePos.movementX = 0;
        this.mousePos.movementY = 0;
        this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft;
        this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop;
      }
      this.root.state.options.scroll.scrolling = true;
    },

    /**
     * Chart mouseup event handler
     * Deactivates drag scrolling mode
     */
    chartMouseUp(ev) {
      this.root.state.options.scroll.scrolling = false;
    },

    /**
     * Chart mousemove event handler
     * When in drag scrolling mode this method calculate scroll movement
     */
    chartMouseMove(ev) {
      if (this.root.state.options.scroll.scrolling) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        const touch = typeof ev.touches !== 'undefined';
        let movementX, movementY;
        if (touch) {
          const screenX = ev.touches[0].screenX;
          const screenY = ev.touches[0].screenY;
          movementX = this.mousePos.x - screenX;
          movementY = this.mousePos.y - screenY;
          this.mousePos.lastX = screenX;
          this.mousePos.lastY = screenY;
        } else {
          movementX = ev.movementX;
          movementY = ev.movementY;
        }
        const horizontal = this.$refs.chartScrollContainerHorizontal;
        const vertical = this.$refs.chartScrollContainerVertical;
        let x = 0,
          y = 0;
        if (touch) {
          x = this.mousePos.currentX + movementX * this.root.state.options.scroll.dragXMoveMultiplier;
        } else {
          x = horizontal.scrollLeft - movementX * this.root.state.options.scroll.dragXMoveMultiplier;
        }
        horizontal.scrollLeft = x;
        if (touch) {
          y = this.mousePos.currentY + movementY * this.root.state.options.scroll.dragYMoveMultiplier;
        } else {
          y = vertical.scrollTop - movementY * this.root.state.options.scroll.dragYMoveMultiplier;
        }
        vertical.scrollTop = y;
      }
    }
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.chartMouseUp);
    document.removeEventListener('mousemove', this.chartMouseMove);
    document.removeEventListener('touchmove', this.chartMouseMove);
    document.removeEventListener('touchend', this.chartMouseUp);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ItemColumn',
  inject: ['root'],
  props: ['column', 'task'],
  data() {
    return {};
  },
  methods: {
    /**
     * Emit event
     *
     * @param {String} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
        this.column.events[eventName]({ event, data: this.task, column: this.column });
      }
      this.root.$emit(`taskList-${this.task.type}-${eventName}`, { event, data: this.task, column: this.column });
    }
  },
  computed: {
    /**
     * Should we display html or just text?
     *
     * @returns {boolean}
     */
    html() {
      if (typeof this.column.html !== 'undefined' && this.column.html === true) {
        return true;
      }
      return false;
    },

    /**
     * Get column value
     *
     * @returns {any|string}
     */
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    },

    itemColumnStyle() {
      return {
        ...this.root.style['task-list-item-column'],
        ...this.column.style['task-list-item-column'],
        width: this.column.finalWidth + 'px',
        height: this.column.height + 'px'
      };
    },

    wrapperStyle() {
      return {
        ...this.root.style['task-list-item-value-wrapper'],
        ...this.column.style['task-list-item-value-wrapper']
      };
    },

    containerStyle() {
      return {
        ...this.root.style['task-list-item-value-container'],
        ...this.column.style['task-list-item-value-container']
      };
    },

    valueStyle() {
      return { ...this.root.style['task-list-item-value'], ...this.column.style['task-list-item-value'] };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue */ "./src/components/TaskList/TaskListHeader.vue");
/* harmony import */ var _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue */ "./src/components/TaskList/TaskListItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskList',
  components: {
    TaskListHeader: _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TaskListItem: _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {};
  },

  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListHeader',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  inject: ['root'],

  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },

  computed: {
    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    }
  },

  methods: {
    /**
     * Get style
     *
     * @returns {object}
     */
    getStyle(column) {
      return {
        width: column.finalWidth + 'px'
      };
    },
    /**
     * Resizer mouse down event handler
     */
    resizerMouseDown(event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.root.$emit('taskList-column-width-change-start', this.resizer.moving);
      }
    },

    /**
     * Resizer mouse move event handler
     */
    resizerMouseMove(event) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        if (this.resizer.moving.width < this.root.state.options.taskList.minWidth) {
          this.resizer.moving.width = this.root.state.options.taskList.minWidth;
        }
        this.root.$emit('taskList-column-width-change', this.resizer.moving);
      }
    },

    /**
     * Resizer mouse up event handler
     */
    resizerMouseUp(event) {
      if (this.resizer.moving) {
        this.root.$emit('taskList-column-width-change', this.resizer.moving);
        this.root.$emit('taskList-column-width-change-stop', this.resizer.moving);
        this.resizer.moving = false;
      }
    }
  },

  /**
   * Created
   */
  created() {
    this.mouseUpListener = document.addEventListener('mouseup', this.resizerMouseUp.bind(this));
    this.mouseMoveListener = document.addEventListener('mousemove', this.resizerMouseMove.bind(this));
    this.root.$on('main-view-mousemove', this.resizerMouseMove);
    this.root.$on('main-view-mouseup', this.resizerMouseUp);
  },

  /**
   * Before destroy event - clear all event listeners
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.resizerMouseUp);
    document.removeEventListener('mousemove', this.resizerMouseMove);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue */ "./src/components/TaskList/ItemColumn.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListItem',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ItemColumn: _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    columns() {
      return this.root.state.options.taskList.columns;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=template&id=02c6304c& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "gantt-elastic", staticStyle: { width: "100%" } },
    [
      _vm._t("header"),
      _vm._v(" "),
      _c("main-view"),
      _vm._v(" "),
      _vm._t("footer")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__calendar-wrapper",
      style: Object.assign({}, _vm.root.style["calendar-wrapper"], {
        width: _vm.root.state.options.width + "px"
      })
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__calendar",
          style: Object.assign({}, _vm.root.style["calendar"], {
            width: _vm.root.state.options.width + "px"
          })
        },
        [
          _vm.root.state.options.calendar.month.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.months, which: "month" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.root.state.options.calendar.day.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.days, which: "day" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.root.state.options.calendar.hour.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.hours, which: "hour" }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class:
        "gantt-elastic__calendar-row gantt-elastic__calendar-row--" + _vm.which,
      style: _vm.rowStyle
    },
    _vm._l(_vm.items, function(item, itemIndex) {
      return _c(
        "div",
        {
          key: item.key,
          class:
            "gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--" +
            _vm.which,
          style: _vm.rectStyle
        },
        _vm._l(item.children, function(child, childIndex) {
          return _c(
            "div",
            {
              key: child.key,
              class:
                "gantt-elastic__calendar-row-rect-child gantt-elastic__calendar-row-rect-child--" +
                _vm.which,
              style: _vm.rectChildStyle[itemIndex][childIndex]
            },
            [
              _c(
                "div",
                {
                  class:
                    "gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--" +
                    _vm.which,
                  style: _vm.textStyle(child)
                },
                [_vm._v("\n        " + _vm._s(child.label) + "\n      ")]
              )
            ]
          )
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "chart",
      staticClass: "gantt-elastic__chart",
      style: Object.assign({}, _vm.root.style["chart"])
    },
    [
      _c(
        "div",
        {
          ref: "chartCalendarContainer",
          staticClass: "gant-elastic__chart-calendar-container",
          style: Object.assign({}, _vm.root.style["chart-calendar-container"], {
            height: _vm.root.state.options.calendar.height + "px",
            "margin-bottom": _vm.root.state.options.calendar.gap + "px"
          })
        },
        [_c("calendar")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "chartGraphContainer",
          staticClass: "gant-elastic__chart-graph-container",
          style: Object.assign({}, _vm.root.style["chart-graph-container"], {
            height:
              _vm.root.state.options.height -
              _vm.root.state.options.calendar.height +
              "px"
          })
        },
        [
          _c(
            "div",
            {
              style: Object.assign({}, _vm.root.style["chart-area"], {
                width: _vm.root.state.options.width + "px",
                height: _vm.root.state.options.rowsHeight + "px"
              })
            },
            [
              _c(
                "div",
                {
                  ref: "chartGraph",
                  staticClass: "gantt-elastic__chart-graph",
                  style: Object.assign({}, _vm.root.style["chart-graph"], {
                    height: "100%"
                  })
                },
                [
                  _c(
                    "svg",
                    {
                      ref: "chartGraphSvg",
                      staticClass: "gantt-elastic__chart-graph-svg",
                      style: Object.assign(
                        {},
                        _vm.root.style["chart-graph-svg"]
                      ),
                      attrs: {
                        x: "0",
                        y: "0",
                        width: _vm.root.state.options.width + "px",
                        height:
                          _vm.root.state.options.allVisibleTasksHeight + "px",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("days-highlight"),
                      _vm._v(" "),
                      _c("grid"),
                      _vm._v(" "),
                      _c("dependency-lines", {
                        attrs: { tasks: _vm.root.visibleTasks }
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.root.visibleTasks, function(task) {
                        return _c(
                          "g",
                          {
                            key: task.id,
                            staticClass: "gantt-elastic__chart-row-wrapper",
                            style: Object.assign(
                              {},
                              _vm.root.style["chart-row-wrapper"]
                            ),
                            attrs: { task: task }
                          },
                          [
                            _c(task.type, {
                              tag: "component",
                              attrs: { task: task }
                            })
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showWorkingDays
    ? _c(
        "g",
        {
          staticClass: "gantt-elastic__chart-days-highlight-container",
          style: Object.assign(
            {},
            _vm.root.style["chart-days-highlight-container"]
          )
        },
        _vm._l(_vm.workingDays, function(day) {
          return _c("rect", {
            key: _vm.getKey(day),
            staticClass: "gantt-elastic__chart-days-highlight-rect",
            style: Object.assign(
              {},
              _vm.root.style["chart-days-highlight-rect"]
            ),
            attrs: {
              x: day.offset.px,
              y: "0",
              width: day.width.px,
              height: "100%"
            }
          })
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-dependency-lines-container",
      style: Object.assign(
        {},
        _vm.root.style["chart-dependency-lines-container"]
      ),
      attrs: { x: "0", y: "0", width: "100%", height: "100%" }
    },
    _vm._l(_vm.dependencyTasks, function(task) {
      return _c(
        "g",
        { key: task.id, attrs: { task: task } },
        _vm._l(task.dependencyLines, function(dependencyLine) {
          return _c("path", {
            key: dependencyLine.id,
            staticClass: "gantt-elastic__chart-dependency-lines-path",
            style: Object.assign(
              {},
              _vm.root.style["chart-dependency-lines-path"],
              task.style["chart-dependency-lines-path"]
            ),
            attrs: { task: task, d: dependencyLine.points }
          })
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      ref: "chart",
      staticClass: "gantt-elastic__grid-lines-wrapper",
      style: Object.assign({}, _vm.root.style["grid-lines-wrapper"]),
      attrs: {
        x: "0",
        y: "0",
        width: _vm.root.state.options.width,
        height: _vm.root.state.options.allVisibleTasksHeight,
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c(
        "g",
        {
          staticClass: "gantt-elastic__grid-lines",
          style: Object.assign({}, _vm.root.style["grid-lines"])
        },
        [
          _vm._l(_vm.horizontalLines, function(line) {
            return _c("line", {
              key: line.key,
              staticClass: "gantt-elastic__grid-line-horizontal",
              style: Object.assign({}, _vm.root.style["grid-line-horizontal"]),
              attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
            })
          }),
          _vm._v(" "),
          _vm._l(_vm.verticalLines, function(line) {
            return _c("line", {
              key: line.key,
              staticClass: "gantt-elastic__grid-line-vertical",
              style: Object.assign({}, _vm.root.style["grid-line-vertical"]),
              attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
            })
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "gantt-elastic__grid-line-time",
            style: Object.assign({}, _vm.root.style["grid-line-time"]),
            attrs: {
              x1: _vm.timeLinePosition.x,
              y1: _vm.timeLinePosition.y1,
              x2: _vm.timeLinePosition.x,
              y2: _vm.timeLinePosition.y2
            }
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass: "gantt-elastic__chart-row-progress-bar-wrapper",
      style: Object.assign(
        {},
        _vm.root.style["chart-row-progress-bar-wrapper"],
        _vm.task.style["chart-row-progress-bar-wrapper"]
      )
    },
    [
      _c("defs", [
        _c(
          "pattern",
          {
            attrs: {
              id: "diagonalHatch",
              width: _vm.root.state.options.chart.progress.width,
              height: _vm.root.state.options.chart.progress.width,
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse"
            }
          },
          [
            _c("line", {
              staticClass: "chart-row-progress-bar-line",
              style: Object.assign(
                {},
                _vm.root.style["chart-row-progress-bar-line"],
                _vm.task.style["chart-row-progress-bar-line"]
              ),
              attrs: {
                x1: "0",
                y1: "0",
                x2: "0",
                y2: _vm.root.state.options.chart.progress.width
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _vm.root.state.options.chart.progress.bar
        ? _c("rect", {
            staticClass: "gantt-elastic__chart-row-progress-bar-solid",
            style: Object.assign(
              {},
              _vm.root.style["chart-row-progress-bar-solid"],
              _vm.task.style["chart-row-progress-bar-solid"]
            ),
            attrs: { x: "0", y: "0", width: _vm.getProgressWidth }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.root.state.options.chart.progress.pattern
        ? _c("g", [
            _c("rect", {
              staticClass: "gantt-elastic__chart-row-progress-bar-pattern",
              style: Object.assign(
                {},
                _vm.root.style["chart-row-progress-bar-pattern"],
                _vm.task.style["chart-row-progress-bar-pattern"]
              ),
              attrs: {
                x: _vm.getProgressWidth,
                y: "0",
                width: 100 - _vm.task.progress + "%",
                height: "100%"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "gantt-elastic__chart-row-progress-bar-outline",
              style: Object.assign(
                {},
                _vm.root.style["chart-row-progress-bar-outline"],
                _vm.task.style["base"],
                _vm.task.style["chart-row-progress-bar-outline"]
              ),
              attrs: { d: _vm.getLinePoints }
            })
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-milestone-wrapper",
      style: Object.assign(
        {},
        _vm.root.style["chart-row-bar-wrapper"],
        _vm.root.style["chart-row-milestone-wrapper"],
        _vm.task.style["chart-row-bar-wrapper"]
      )
    },
    [
      _vm.displayExpander
        ? _c(
            "foreignObject",
            {
              staticClass:
                "gantt-elastic__chart-expander gantt-elastic__chart-expander--milestone",
              style: Object.assign(
                {},
                _vm.root.style["chart-expander"],
                _vm.root.style["chart-expander--milestone"],
                _vm.task.style["chart-expander"]
              ),
              attrs: {
                x:
                  _vm.task.x -
                  _vm.root.state.options.chart.expander.offset -
                  _vm.root.state.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.root.state.options.row.height -
                    _vm.root.state.options.chart.expander.size) /
                    2,
                width: _vm.root.state.options.chart.expander.size,
                height: _vm.root.state.options.chart.expander.size
              }
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.chart.expander,
                  type: "chart"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-milestone",
          style: Object.assign(
            {},
            _vm.root.style["chart-row-bar"],
            _vm.root.style["chart-row-milestone"],
            _vm.task.style["chart-row-bar"]
          ),
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              return _vm.emitEvent("touchend", $event)
            }
          }
        },
        [
          _c("defs", [
            _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
              _c("polygon", { attrs: { points: _vm.getPoints } })
            ])
          ]),
          _vm._v(" "),
          _c("polygon", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-milestone-polygon",
            style: Object.assign(
              {},
              _vm.root.style["chart-row-bar-polygon"],
              _vm.root.style["chart-row-milestone-polygon"],
              _vm.task.style["base"],
              _vm.task.style["chart-row-bar-polygon"]
            ),
            attrs: { points: _vm.getPoints }
          }),
          _vm._v(" "),
          _c("progress-bar", {
            attrs: {
              task: _vm.task,
              "clip-path": "url(#" + _vm.clipPathId + ")"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.root.state.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-project-wrapper",
      style: Object.assign(
        {},
        _vm.root.style["chart-row-bar-wrapper"],
        _vm.root.style["chart-row-project-wrapper"],
        _vm.task.style["chart-row-bar-wrapper"]
      )
    },
    [
      _vm.displayExpander
        ? _c(
            "foreignObject",
            {
              staticClass:
                "gantt-elastic__chart-expander gantt-elastic__chart-expander--project",
              style: Object.assign(
                {},
                _vm.root.style["chart-expander"],
                _vm.root.style["chart-expander--project"],
                _vm.task.style["chart-expander"]
              ),
              attrs: {
                x:
                  _vm.task.x -
                  _vm.root.state.options.chart.expander.offset -
                  _vm.root.state.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.root.state.options.row.height -
                    _vm.root.state.options.chart.expander.size) /
                    2,
                width: _vm.root.state.options.chart.expander.size,
                height: _vm.root.state.options.chart.expander.size
              }
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.chart.expander,
                  type: "chart"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-project",
          style: Object.assign(
            {},
            _vm.root.style["chart-row-bar"],
            _vm.root.style["chart-row-project"],
            _vm.task.style["chart-row-bar"]
          ),
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              return _vm.emitEvent("touchend", $event)
            }
          }
        },
        [
          _c("defs", [
            _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
              _c("path", { attrs: { d: _vm.getPoints } })
            ])
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-project-polygon",
            style: Object.assign(
              {},
              _vm.root.style["chart-row-bar-polygon"],
              _vm.root.style["chart-row-project-polygon"],
              _vm.task.style["base"],
              _vm.task.style["chart-row-bar-polygon"]
            ),
            attrs: { d: _vm.getPoints }
          }),
          _vm._v(" "),
          _c("progress-bar", {
            attrs: {
              task: _vm.task,
              "clip-path": "url(#" + _vm.clipPathId + ")"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.root.state.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper",
      style: Object.assign(
        {},
        _vm.root.style["chart-row-bar-wrapper"],
        _vm.root.style["chart-row-task-wrapper"],
        _vm.task.style["chart-row-bar-wrapper"]
      )
    },
    [
      _vm.displayExpander
        ? _c(
            "foreignObject",
            {
              staticClass:
                "gantt-elastic__chart-expander gantt-elastic__chart-expander--task",
              style: Object.assign(
                {},
                _vm.root.style["chart-expander"],
                _vm.root.style["chart-expander--task"],
                _vm.task.style["chart-expander"]
              ),
              attrs: {
                x:
                  _vm.task.x -
                  _vm.root.state.options.chart.expander.offset -
                  _vm.root.state.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.root.state.options.row.height -
                    _vm.root.state.options.chart.expander.size) /
                    2,
                width: _vm.root.state.options.chart.expander.size,
                height: _vm.root.state.options.chart.expander.size
              }
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.chart.expander,
                  type: "chart"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-task",
          style: Object.assign(
            {},
            _vm.root.style["chart-row-bar"],
            _vm.root.style["chart-row-task"],
            _vm.task.style["chart-row-bar"]
          ),
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: "0 0 " + _vm.task.width + " " + _vm.task.height,
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              return _vm.emitEvent("touchend", $event)
            }
          }
        },
        [
          _c("defs", [
            _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
              _c("polygon", { attrs: { points: _vm.getPoints } })
            ])
          ]),
          _vm._v(" "),
          _c("polygon", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-task-polygon",
            style: Object.assign(
              {},
              _vm.root.style["chart-row-bar-polygon"],
              _vm.root.style["chart-row-task-polygon"],
              _vm.task.style["base"],
              _vm.task.style["chart-row-bar-polygon"]
            ),
            attrs: { points: _vm.getPoints }
          }),
          _vm._v(" "),
          _c("progress-bar", {
            attrs: {
              task: _vm.task,
              "clip-path": "url(#" + _vm.clipPathId + ")"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.root.state.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-row-text-wrapper",
      style: Object.assign({}, _vm.root.style["chart-row-text-wrapper"]),
      attrs: {
        x:
          _vm.task.x +
          _vm.task.width +
          _vm.root.state.options.chart.text.offset,
        y: _vm.task.y - _vm.root.state.options.chart.grid.horizontal.gap,
        width: _vm.getWidth,
        height: _vm.getHeight
      }
    },
    [
      _c(
        "foreignObject",
        { attrs: { x: "0", y: "0", width: "100%", height: _vm.getHeight } },
        [
          _c(
            "div",
            {
              staticClass: "gantt-elastic__chart-row-text",
              style: Object.assign({}, _vm.root.style["chart-row-text"]),
              attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
            },
            [
              !_vm.html
                ? _c(
                    "div",
                    {
                      staticClass:
                        "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text",
                      style: Object.assign(
                        {},
                        _vm.root.style["chart-row-text-content"],
                        _vm.root.style["chart-row-text-content--text"],
                        { contentStyle: _vm.contentStyle }
                      )
                    },
                    [_c("div", [_vm._v(_vm._s(_vm.task.label))])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.html
                ? _c("div", {
                    staticClass:
                      "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--html",
                    style: Object.assign(
                      {},
                      _vm.root.style["chart-row-text-content"],
                      _vm.root.style["chart-row-text-content--html"],
                      { contentStyle: _vm.contentStyle }
                    ),
                    domProps: { innerHTML: _vm._s(_vm.task.label) }
                  })
                : _vm._e()
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=template&id=09a21177& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.getClassPrefix() + "-wrapper",
      style: Object.assign(
        {},
        _vm.root.style[_vm.getClassPrefix(false) + "-wrapper"],
        _vm.style
      )
    },
    [
      _vm.allChildren.length
        ? _c(
            "svg",
            {
              class: _vm.getClassPrefix() + "-content",
              style: Object.assign(
                {},
                _vm.root.style[_vm.getClassPrefix(false) + "-content"]
              ),
              attrs: { width: _vm.options.size, height: _vm.options.size },
              on: { click: _vm.toggle }
            },
            [
              _c("rect", {
                class: _vm.getClassPrefix() + "-border",
                style: Object.assign(
                  {},
                  _vm.root.style[_vm.getClassPrefix(false) + "-border"],
                  { borderStyle: _vm.borderStyle }
                ),
                attrs: {
                  x: _vm.border,
                  y: _vm.border,
                  width: _vm.options.size - _vm.border * 2,
                  height: _vm.options.size - _vm.border * 2,
                  rx: "2",
                  ry: "2"
                }
              }),
              _vm._v(" "),
              _vm.allChildren.length
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: Object.assign(
                      {},
                      _vm.root.style[_vm.getClassPrefix(false) + "-line"]
                    ),
                    attrs: {
                      x1: _vm.lineOffset,
                      y1: _vm.options.size / 2,
                      x2: _vm.options.size - _vm.lineOffset,
                      y2: _vm.options.size / 2
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.collapsed
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: Object.assign(
                      {},
                      _vm.root.style[_vm.getClassPrefix(false) + "-line"]
                    ),
                    attrs: {
                      x1: _vm.options.size / 2,
                      y1: _vm.lineOffset,
                      x2: _vm.options.size / 2,
                      y2: _vm.options.size - _vm.lineOffset
                    }
                  })
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=template&id=0bc4212e& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__main-view",
      style: Object.assign({}, _vm.root.style["main-view"])
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__main-container-wrapper",
          style: Object.assign({}, _vm.root.style["main-container-wrapper"], {
            height: _vm.root.state.options.height + "px"
          })
        },
        [
          _c(
            "div",
            {
              ref: "mainView",
              staticClass: "gantt-elastic__main-container",
              style: Object.assign({}, _vm.root.style["main-container"], {
                width: _vm.root.state.options.clientWidth + "px",
                height: _vm.root.state.options.height + "px"
              })
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__container",
                  style: Object.assign({}, _vm.root.style["container"]),
                  on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
                },
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.root.state.options.taskList.display,
                          expression: "root.state.options.taskList.display"
                        }
                      ],
                      ref: "taskList",
                      staticClass: "gantt-elastic__task-list-container",
                      style: Object.assign(
                        {},
                        _vm.root.style["task-list-container"],
                        {
                          width:
                            _vm.root.state.options.taskList.finalWidth + "px",
                          height: _vm.root.state.options.height + "px"
                        }
                      )
                    },
                    [_c("task-list")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      ref: "chartContainer",
                      staticClass: "gantt-elastic__main-view-container",
                      style: Object.assign(
                        {},
                        _vm.root.style["main-view-container"]
                      ),
                      on: {
                        mousedown: _vm.chartMouseDown,
                        touchstart: _vm.chartMouseDown,
                        mouseup: _vm.chartMouseUp,
                        touchend: _vm.chartMouseUp,
                        mousemove: function($event) {
                          $event.preventDefault()
                          return _vm.chartMouseMove($event)
                        },
                        touchmove: function($event) {
                          $event.preventDefault()
                          return _vm.chartMouseMove($event)
                        },
                        wheel: function($event) {
                          $event.preventDefault()
                          return _vm.chartWheel($event)
                        }
                      }
                    },
                    [_c("chart")],
                    1
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "chartScrollContainerVertical",
              staticClass:
                "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--vertical",
              style: Object.assign(
                {},
                _vm.root.style["chart-scroll-container"],
                _vm.root.style["chart-scroll-container--vertical"],
                _vm.verticalStyle
              ),
              on: { scroll: _vm.onVerticalScroll }
            },
            [
              _c("div", {
                staticClass: "gantt-elastic__chart-scroll--vertical",
                style: {
                  width: "1px",
                  height: _vm.root.state.options.allVisibleTasksHeight + "px"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "chartScrollContainerHorizontal",
          staticClass:
            "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--horizontal",
          style: Object.assign(
            {},
            _vm.root.style["chart-scroll-container"],
            _vm.root.style["chart-scroll-container--horizontal"],
            { marginLeft: _vm.getMarginLeft }
          ),
          on: { scroll: _vm.onHorizontalScroll }
        },
        [
          _c("div", {
            staticClass: "gantt-elastic__chart-scroll--horizontal",
            style: { height: "1px", width: _vm.root.state.options.width + "px" }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item-column",
      style: _vm.itemColumnStyle
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__task-list-item-value-wrapper",
          style: _vm.wrapperStyle
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-item-value-container",
              style: _vm.containerStyle
            },
            [
              !_vm.html
                ? _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__task-list-item-value",
                      style: _vm.valueStyle,
                      on: {
                        click: function($event) {
                          return _vm.emitEvent("click", $event)
                        },
                        mouseenter: function($event) {
                          return _vm.emitEvent("mouseenter", $event)
                        },
                        mouseover: function($event) {
                          return _vm.emitEvent("mouseover", $event)
                        },
                        mouseout: function($event) {
                          return _vm.emitEvent("mouseout", $event)
                        },
                        mousemove: function($event) {
                          return _vm.emitEvent("mousemove", $event)
                        },
                        mousedown: function($event) {
                          return _vm.emitEvent("mousedown", $event)
                        },
                        mouseup: function($event) {
                          return _vm.emitEvent("mouseup", $event)
                        },
                        mousewheel: function($event) {
                          return _vm.emitEvent("mousewheel", $event)
                        },
                        touchstart: function($event) {
                          return _vm.emitEvent("touchstart", $event)
                        },
                        touchmove: function($event) {
                          return _vm.emitEvent("touchmove", $event)
                        },
                        touchend: function($event) {
                          return _vm.emitEvent("touchend", $event)
                        }
                      }
                    },
                    [_vm._v("\n        " + _vm._s(_vm.value) + "\n      ")]
                  )
                : _c("div", {
                    staticClass: "gantt-elastic__task-list-item-value",
                    style: _vm.valueStyle,
                    domProps: { innerHTML: _vm._s(_vm.value) },
                    on: {
                      click: function($event) {
                        return _vm.emitEvent("click", $event)
                      },
                      mouseenter: function($event) {
                        return _vm.emitEvent("mouseenter", $event)
                      },
                      mouseover: function($event) {
                        return _vm.emitEvent("mouseover", $event)
                      },
                      mouseout: function($event) {
                        return _vm.emitEvent("mouseout", $event)
                      },
                      mousemove: function($event) {
                        return _vm.emitEvent("mousemove", $event)
                      },
                      mousedown: function($event) {
                        return _vm.emitEvent("mousedown", $event)
                      },
                      mouseup: function($event) {
                        return _vm.emitEvent("mouseup", $event)
                      },
                      mousewheel: function($event) {
                        return _vm.emitEvent("mousewheel", $event)
                      },
                      touchstart: function($event) {
                        return _vm.emitEvent("touchstart", $event)
                      },
                      touchmove: function($event) {
                        return _vm.emitEvent("touchmove", $event)
                      },
                      touchend: function($event) {
                        return _vm.emitEvent("touchend", $event)
                      }
                    }
                  })
            ]
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.root.state.options.taskList.display,
          expression: "root.state.options.taskList.display"
        }
      ],
      ref: "taskListWrapper",
      staticClass: "gantt-elastic__task-list-wrapper",
      style: Object.assign({}, _vm.root.style["task-list-wrapper"], {
        width: "100%",
        height: "100%"
      })
    },
    [
      _c(
        "div",
        {
          ref: "taskList",
          staticClass: "gantt-elastic__task-list",
          style: Object.assign({}, _vm.root.style["task-list"])
        },
        [
          _c("task-list-header"),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "taskListItems",
              staticClass: "gantt-elastic__task-list-items",
              style: Object.assign({}, _vm.root.style["task-list-items"], {
                height: _vm.root.state.options.rowsHeight + "px"
              })
            },
            _vm._l(_vm.root.visibleTasks, function(task) {
              return _c("task-list-item", {
                key: task.id,
                attrs: { task: task }
              })
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-header",
      style: Object.assign({}, _vm.root.style["task-list-header"], {
        height: _vm.root.state.options.calendar.height + "px",
        "margin-bottom": _vm.root.state.options.calendar.gap + "px"
      })
    },
    _vm._l(_vm.root.getTaskListColumns, function(column) {
      return _c(
        "div",
        {
          key: column._id,
          staticClass: "gantt-elastic__task-list-header-column",
          style: Object.assign(
            {},
            _vm.root.style["task-list-header-column"],
            column.style["task-list-header-column"],
            _vm.getStyle(column)
          )
        },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: _vm.collapsible,
                  options: _vm.root.state.options.taskList.expander
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-label",
              style: Object.assign(
                {},
                _vm.root.style["task-list-header-label"],
                column.style["task-list-header-label"]
              ),
              attrs: { column: column },
              on: { mouseup: _vm.resizerMouseUp }
            },
            [_vm._v("\n      " + _vm._s(column.label) + "\n    ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-resizer-wrapper",
              style: Object.assign(
                {},
                _vm.root.style["task-list-header-resizer-wrapper"],
                column.style["task-list-header-resizer-wrapper"]
              ),
              attrs: { column: column },
              on: {
                mousedown: function($event) {
                  return _vm.resizerMouseDown($event, column)
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__task-list-header-resizer",
                  style: Object.assign(
                    {},
                    _vm.root.style["task-list-header-resizer"],
                    column.style["task-list-header-resizer"]
                  )
                },
                [
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-header-resizer-dot"],
                      column.style["task-list-header-resizer-dot"]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-header-resizer-dot"],
                      column.style["task-list-header-resizer-dot"]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-header-resizer-dot"],
                      column.style["task-list-header-resizer-dot"]
                    )
                  })
                ]
              )
            ]
          )
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item",
      style: Object.assign({}, _vm.root.style["task-list-item"])
    },
    _vm._l(_vm.columns, function(column) {
      return _c(
        "item-column",
        { key: column._id, attrs: { column: column, task: _vm.task } },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.taskList.expander,
                  type: "taskList"
                }
              })
            : _vm._e()
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c3e5085c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
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

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
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
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
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

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
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


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/GanttElastic.vue":
/*!******************************!*\
  !*** ./src/GanttElastic.vue ***!
  \******************************/
/*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=template&id=02c6304c& */ "./src/GanttElastic.vue?vue&type=template&id=02c6304c&");
/* harmony import */ var _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=script&lang=js& */ "./src/GanttElastic.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["mergeDeepReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["notEqualDeep"]; });

/* harmony import */ var _GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/GanttElastic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["mergeDeepReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["notEqualDeep"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=template&id=02c6304c&":
/*!*************************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=template&id=02c6304c& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=template&id=02c6304c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Calendar/Calendar.vue":
/*!**********************************************!*\
  !*** ./src/components/Calendar/Calendar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=dee108e2& */ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&":
/*!*****************************************************************************!*\
  !*** ./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=dee108e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue":
/*!*************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarRow.vue?vue&type=template&id=0daf06fb& */ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&");
/* harmony import */ var _CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarRow.vue?vue&type=script&lang=js& */ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar/CalendarRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&":
/*!********************************************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=template&id=0daf06fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Chart.vue":
/*!****************************************!*\
  !*** ./src/components/Chart/Chart.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=67c3f5cd& */ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ "./src/components/Chart/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Chart.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/Chart/Chart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&":
/*!***********************************************************************!*\
  !*** ./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=67c3f5cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue":
/*!************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaysHighlight.vue?vue&type=template&id=1bfe64e8& */ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&");
/* harmony import */ var _DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaysHighlight.vue?vue&type=script&lang=js& */ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/DaysHighlight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&":
/*!*******************************************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=template&id=1bfe64e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue":
/*!**************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DependencyLines.vue?vue&type=template&id=f1cbf6ba& */ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&");
/* harmony import */ var _DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DependencyLines.vue?vue&type=script&lang=js& */ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/DependencyLines.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&":
/*!*********************************************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=template&id=f1cbf6ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Grid.vue":
/*!***************************************!*\
  !*** ./src/components/Chart/Grid.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=2bf979a7& */ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&");
/* harmony import */ var _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.vue?vue&type=script&lang=js& */ "./src/components/Chart/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Grid.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/Chart/Grid.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&":
/*!**********************************************************************!*\
  !*** ./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=template&id=2bf979a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/ProgressBar.vue":
/*!**********************************************!*\
  !*** ./src/components/Chart/ProgressBar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=4bc39355& */ "./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/ProgressBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&":
/*!*****************************************************************************!*\
  !*** ./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=template&id=4bc39355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Milestone.vue":
/*!************************************************!*\
  !*** ./src/components/Chart/Row/Milestone.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Milestone.vue?vue&type=template&id=3013006c& */ "./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&");
/* harmony import */ var _Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Milestone.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Milestone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Milestone.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&":
/*!*******************************************************************************!*\
  !*** ./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Milestone.vue?vue&type=template&id=3013006c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Project.vue":
/*!**********************************************!*\
  !*** ./src/components/Chart/Row/Project.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=077bbd73& */ "./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/Chart/Row/Project.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&":
/*!*****************************************************************************!*\
  !*** ./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=077bbd73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Task.mixin.js":
/*!************************************************!*\
  !*** ./src/components/Chart/Row/Task.mixin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @fileoverview Task mixin
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },

    /**
     * Get group transform
     *
     * @returns {string}
     */
    getGroupTransform() {
      return `translate(${this.task.x} ${this.task.y})`;
    },

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.root.state.options.chart.expander;
      return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
    }
  },
  methods: {
    /**
     * Emit event
     *
     * @param {string} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (!this.root.state.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
});


/***/ }),

/***/ "./src/components/Chart/Row/Task.vue":
/*!*******************************************!*\
  !*** ./src/components/Chart/Row/Task.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=e9c23eca& */ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/Chart/Row/Task.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&":
/*!**************************************************************************!*\
  !*** ./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=e9c23eca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Text.vue":
/*!***************************************!*\
  !*** ./src/components/Chart/Text.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.vue?vue&type=template&id=459c2fe4& */ "./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&");
/* harmony import */ var _Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.vue?vue&type=script&lang=js& */ "./src/components/Chart/Text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Text.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/Chart/Text.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Text.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&":
/*!**********************************************************************!*\
  !*** ./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Text.vue?vue&type=template&id=459c2fe4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Expander.vue":
/*!*************************************!*\
  !*** ./src/components/Expander.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expander.vue?vue&type=template&id=09a21177& */ "./src/components/Expander.vue?vue&type=template&id=09a21177&");
/* harmony import */ var _Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expander.vue?vue&type=script&lang=js& */ "./src/components/Expander.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Expander.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Expander.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/Expander.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Expander.vue?vue&type=template&id=09a21177&":
/*!********************************************************************!*\
  !*** ./src/components/Expander.vue?vue&type=template&id=09a21177& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=template&id=09a21177& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MainView.vue":
/*!*************************************!*\
  !*** ./src/components/MainView.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView.vue?vue&type=template&id=0bc4212e& */ "./src/components/MainView.vue?vue&type=template&id=0bc4212e&");
/* harmony import */ var _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.vue?vue&type=script&lang=js& */ "./src/components/MainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MainView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=template&id=0bc4212e&":
/*!********************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=template&id=0bc4212e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=template&id=0bc4212e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue":
/*!************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=template&id=cb5a6c96& */ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&");
/* harmony import */ var _ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=script&lang=js& */ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/ItemColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&":
/*!*******************************************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=template&id=cb5a6c96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskList.vue":
/*!**********************************************!*\
  !*** ./src/components/TaskList/TaskList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=6e11f12f& */ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/TaskList/TaskList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&":
/*!*****************************************************************************!*\
  !*** ./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=6e11f12f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue":
/*!****************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=template&id=aefdd7c8& */ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&");
/* harmony import */ var _TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskListHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&":
/*!***********************************************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=template&id=aefdd7c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue":
/*!**************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=template&id=9716293c& */ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&");
/* harmony import */ var _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=script&lang=js& */ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&":
/*!*********************************************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=template&id=9716293c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStyle; });
/**
 * @fileoverview Styles for gantt-elastic
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */

function getStyle(fontSize = '12px', fontFamily = 'Arial, sans-serif') {
  return {
    fontSize,
    fontFamily,
    'main-view': {
      background: '#FFFFFF'
    },
    'main-container-wrapper': {
      overflow: 'hidden',
      'border-top': '1px solid #eee',
      'border-bottom': '1px solid #eee'
    },
    'main-container': {
      float: 'left',
      'max-width': '100%'
    },
    'main-view-container': {},
    container: {
      display: 'flex',
      'max-width': '100%',
      height: '100%'
    },
    header: {
      'font-family': fontFamily,
      margin: '0px auto',
      background: '#f3f5f747',
      padding: '10px',
      overflow: 'hidden',
      clear: 'both',
      display: 'flex',
      'justify-content': 'space-between'
    },
    'header-title': { float: 'left' },
    'header-options': { float: 'right' },
    'header-title--text': {
      'font-size': '20px',
      'vertical-align': 'middle',
      'font-weight': '400',
      'line-height': '35px',
      'padding-left': '22px',
      'letter-spacing': '1px'
    },
    'header-title--html': {
      'font-size': '20px',
      'vertical-align': 'middle',
      'font-weight': '400',
      'line-height': '35px',
      'padding-left': '22px',
      'letter-spacing': '1px'
    },
    'header-btn-recenter': {
      background: '#95A5A6',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      color: 'white',
      'border-radius': '3px',
      'margin-right': '27px',
      'font-size': '16px',
      padding: '8px 12px'
    },
    'header-slider': {},
    'header-slider-wrapper': { display: 'inline-block', 'vertical-align': 'middle' },
    'header-slider--slider': {},
    'header-slider--process': { background: '#ccc' },
    'header-task-list-switch--label': {},
    'header-task-list-switch': { margin: '0px 15px', 'vertical-align': 'middle' },
    'header-label': {},
    'calendar-wrapper': {
      'user-select': 'none'
    },
    calendar: {
      width: '100%',
      background: '#f3f5f7',
      display: 'block'
    },
    'calendar-row': {
      display: 'flex',
      'justify-content': 'space-evenly'
    },
    'calendar-row--month': {},
    'calendar-row--day': {},
    'calendar-row--hour': {
      'border-bottom': '1px solid #eee'
    },
    'calendar-row-rect': {
      background: 'transparent',
      display: 'flex'
    },
    'calendar-row-rect--month': {},
    'calendar-row-rect--day': {},
    'calendar-row-rect--hour': {},
    'calendar-row-rect-child': {
      display: 'block',
      'border-right-width': '1px', // Calendar
      'border-right-color': '#dadada',
      'border-right-style': 'solid',
      position: 'relative'
    },
    'calendar-row-rect-child--month': {},
    'calendar-row-rect-child--day': { 'text-align': 'center' },
    'calendar-row-rect-child--hour': { 'text-align': 'center' },
    'calendar-row-text': {
      'font-family': fontFamily, // GanttElastic
      'font-size': fontSize, //GanttElastic
      color: '#606060',
      display: 'inline-block',
      position: 'relative'
    },
    'calendar-row-text--month': {},
    'calendar-row-text--day': {},
    'calendar-row-text--hour': {},
    'task-list-wrapper': {},
    'task-list': { background: 'transparent', 'border-color': '#eee' },
    'task-list-header': {
      display: 'flex',
      'user-select': 'none',
      'vertical-align': 'middle',
      'border-bottom': '1px solid #eee',
      'border-left': '1px solid #eee'
    },
    'task-list-header-column': {
      'border-left': '1px solid #00000050',
      'box-sizing': 'border-box',
      display: 'flex',
      background: '#f3f5f7',
      'border-color': 'transparent'
    },
    'task-list-expander-wrapper': {
      display: 'inline-flex',
      'flex-shrink': '0',
      'box-sizing': 'border-box',
      margin: '0 0 0 10px'
    },
    'task-list-expander-content': {
      display: 'inline-flex',
      cursor: 'pointer',
      margin: 'auto 0px',
      'box-sizing': 'border-box',
      'user-select': 'none'
    },
    'task-list-expander-line': {
      fill: 'transparent',
      stroke: '#000000',
      'stroke-width': '1',
      'stroke-linecap': 'round'
    },
    'task-list-expander-border': {
      fill: '#ffffffa0',
      stroke: '#00000080'
    },
    'chart-expander-wrapper': {
      display: 'block',
      'line-height': '1',
      'box-sizing': 'border-box',
      margin: '0'
    },
    'chart-expander-content': {
      display: 'inline-flex',
      cursor: 'pointer',
      margin: 'auto 0px',
      'box-sizing': 'border-box',
      'user-select': 'none'
    },
    'chart-expander-line': {
      fill: 'transparent',
      stroke: '#000000',
      'stroke-width': '1',
      'stroke-linecap': 'round'
    },
    'chart-expander-border': {
      fill: '#ffffffa0',
      stroke: '#00000080'
    },
    'task-list-container': {},
    'task-list-header-label': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'font-family': fontFamily,
      'font-size': fontSize,
      'box-sizing': 'border-box',
      margin: 'auto 6px',
      'flex-grow': '1',
      'vertical-align': 'middle'
    },
    'task-list-header-resizer-wrapper': {
      background: 'transparent',
      height: '100%',
      width: '6px',
      cursor: 'col-resize',
      display: 'inline-flex',
      'vertical-align': 'center'
    },
    'task-list-header-resizer': { margin: 'auto 0px' },
    'task-list-header-resizer-dot': {
      width: '3px',
      height: '3px',
      background: '#ddd',
      'border-radius': '100%',
      margin: '4px 0px'
    },
    'task-list-items': {
      overflow: 'hidden'
    },
    'task-list-item': {
      'border-top': '1px solid #eee',
      'border-right': '1px solid #eee',
      'box-sizing': 'border-box',
      display: 'flex',
      background: 'transparent'
    },
    'task-list-item-column': {
      display: 'inline-flex',
      'flex-shrink': '0',
      'border-left': '1px solid #00000050',
      'box-sizing': 'border-box',
      'border-color': '#eee'
    },
    'task-list-item-value-wrapper': {
      overflow: 'hidden',
      display: 'flex',
      width: '100%'
    },
    'task-list-item-value-container': {
      margin: 'auto 0px',
      overflow: 'hidden'
    },
    'task-list-item-value': {
      display: 'block',
      'flex-shrink': '100',
      'font-family': fontFamily,
      'font-size': fontSize,
      'margin-top': 'auto',
      'margin-bottom': 'auto',
      'margin-left': '6px', // TaskList
      'margin-right': '6px',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'line-height': '1.5em',
      'word-break': 'keep-all',
      'white-space': 'nowrap',
      color: '#606060',
      background: '#FFFFFF'
    },
    'grid-lines': {},
    'grid-line-horizontal': {
      stroke: '#00000010',
      'stroke-width': 1
    },
    'grid-line-vertical': {
      stroke: '#00000010',
      'stroke-width': 1
    },
    'grid-line-time': {
      stroke: '#FF000080',
      'stroke-width': 1
    },
    chart: {
      'user-select': 'none',
      overflow: 'hidden'
    },
    'chart-calendar-container': {
      'user-select': 'none',
      overflow: 'hidden',
      'max-width': '100%',
      'border-right': '1px solid #eee'
    },
    'chart-graph-container': {
      'user-select': 'none',
      overflow: 'hidden',
      'max-width': '100%',
      'border-right': '1px solid #eee'
    },
    'chart-area': {},
    'chart-graph': {
      overflow: 'hidden'
    },
    'chart-row-text-wrapper': {},
    'chart-row-text': {
      background: '#ffffffa0',
      'border-radius': '10px',
      'font-family': fontFamily,
      'font-size': fontSize,
      'font-weight': 'normal',
      color: '#000000a0',
      height: '100%',
      display: 'inline-block'
    },
    'chart-row-text-content': {
      padding: '0px 6px'
    },
    'chart-row-text-content--text': {},
    'chart-row-text-content--html': {},
    'chart-row-wrapper': {},
    'chart-row-bar-wrapper': {},
    'chart-row-bar': {},
    'chart-row-bar-polygon': {
      stroke: '#E74C3C',
      'stroke-width': 1,
      fill: '#F75C4C'
    },
    'chart-row-project-wrapper': {},
    'chart-row-project': {},
    'chart-row-project-polygon': {},
    'chart-row-milestone-wrapper': {},
    'chart-row-milestone': {},
    'chart-row-milestone-polygon': {},
    'chart-row-task-wrapper': {},
    'chart-row-task': {},
    'chart-row-task-polygon': {},
    'chart-row-progress-bar-wrapper': {},
    'chart-row-progress-bar': {},
    'chart-row-progress-bar-line': {
      stroke: '#ffffff25',
      'stroke-width': 20
    },
    'chart-row-progress-bar-solid': {
      fill: '#0EAC51',
      height: '20%'
    },
    'chart-row-progress-bar-pattern': {
      fill: 'url(#diagonalHatch)',
      transform: 'translateY(0.1) scaleY(0.8)'
    },
    'chart-row-progress-bar-outline': {
      stroke: '#E74C3C',
      'stroke-width': 1
    },
    'chart-dependency-lines-wrapper': {},
    'chart-dependency-lines-path': {
      fill: 'transparent',
      stroke: '#FFa00090',
      'stroke-width': 2
    },
    'chart-scroll-container': {},
    'chart-scroll-container--horizontal': {
      overflow: 'auto',
      'max-width': '100%'
    },
    'chart-scroll-container--vertical': {
      'overflow-y': 'auto',
      'overflow-x': 'hidden',
      'max-height': '100%',
      float: 'right'
    },
    'chart-days-highlight-rect': {
      fill: '#f3f5f780'
    },
    'slot-header-beforeOptions': {
      display: 'inline-block'
    }
  };
}


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT83ZjFmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL0dhbnR0RWxhc3RpYy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzBkZjkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlP2JjMDgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzExMzgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlPzI4ODEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/NDU2ZiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzdlZTIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/NTliNyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/NGFjMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZT9kN2RjIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT85MGRkIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZT82N2JhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlP2NhYzQiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlPzcwZWMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlPzRhZGIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWU/OTY5YiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWU/MWU5YiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/ODgwOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlP2NiY2IiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT8zMGM1Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlP2NhMmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWU/NWEyMCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT82NTE2Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWU/NDBkNSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWU/YTAyOSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhclJvdy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzI1NWIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlP2FjMWEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT83ZjljIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT80ZTNkIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlPzdlMzMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/N2VkMiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RlcGVuZGVuY3lMaW5lcy52dWU/NzE2NCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzNkZTMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/Nzc2MSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZT80ZmEwIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Byb2dyZXNzQmFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/OWFhYiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/MTgwNCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZT85MjM5Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9NaWxlc3RvbmUudnVlPzJmM2MiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT81NGM5Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT82NWVmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLm1peGluLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWU/ODY4NyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWU/NGExOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZT8xN2IxIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlP2YyN2EiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT8wODk4Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT84ZGYzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWU/ZjViMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWU/ZWQ4NyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZT84ODE0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlPzE0YWMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZT83MzU0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZT9kOWRlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/NjM1MyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/YmM3MiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWU/NjRmOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlPzg3YmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL3N0eWxlLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9leHRlcm5hbCBcInZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtB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QVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOTRCUztBQUNKO0FBQ3VCO0FBQ2Y7QUFDb0I7O0FBRXREO0FBQ0EsY0FBYywwQ0FBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQUs7QUFDaEM7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0Q0FBSztBQUNYLE1BQU0sNENBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw0Q0FBSztBQUMzRCx1REFBdUQsNENBQUs7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsNENBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFLO0FBQzFCLDBCQUEwQiw0Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdFQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWhERjtBQUNrQjtBQUM3QjtBQUNmO0FBQ0E7QUFDQSxJQUFJLHFFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNENBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlSYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjRCO0FBQ2tCO0FBQ0E7QUFDSTtBQUNsQjtBQUNVO0FBQ0o7QUFDekI7QUFDZjtBQUNBO0FBQ0EsSUFBSSx1REFBSTtBQUNSLElBQUksNkVBQWU7QUFDbkIsSUFBSSx3RUFBUTtBQUNaLElBQUksMkRBQUk7QUFDUixJQUFJLHFFQUFTO0FBQ2IsSUFBSSxpRUFBTztBQUNYLElBQUkseUVBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZ3QjtBQUNYO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRDQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLDRDQUFLO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzZDO0FBQ1Q7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBLElBQUksd0VBQVE7QUFDWixJQUFJLCtEQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZPYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHZ0Q7QUFDSjtBQUMvQjtBQUNmO0FBQ0E7QUFDQSxJQUFJLDJFQUFjO0FBQ2xCLElBQUksdUVBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzQjZDO0FBQ2hDO0FBQ2Y7QUFDQTtBQUNBLElBQUksdUVBQWdCO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsMkJBQTJCO0FBQzNCLCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLDZCQUE2QjtBQUM3QixxQ0FBcUM7QUFDckMsZ0NBQWdDO0FBQ2hDLHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsd0NBQXdDO0FBQ3hDLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZXQSxpRCIsImZpbGUiOiJHYW50dEVsYXN0aWMudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInZ1ZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHYW50dEVsYXN0aWNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdhbnR0RWxhc3RpY1wiXSA9IGZhY3Rvcnkocm9vdFtcInZ1ZVwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9HYW50dEVsYXN0aWMudnVlXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZ2FudHQtZWxhc3RpYyAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXcgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fZ3JpZC1ob3Jpem9udGFsLWxpbmUsXFxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtdmVydGljYWwtbGluZSB7XFxuICBzdHJva2U6ICNhMGEwYTA7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcbmZvcmVpZ25PYmplY3QgPiAqIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4uZ2FudHQtZWxhc3RpYyAucC0yIHtcXG4gIHBhZGRpbmc6IDEwcmVtO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LW1haW4tY29udGFpbmVyLFxcbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXctY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWNvbHVtbjpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDAwMDUwO1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwNTA7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlcjpob3ZlciA+IC5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOnQuZGF5anM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLG49XCJzZWNvbmRcIixlPVwibWludXRlXCIscj1cImhvdXJcIixpPVwiZGF5XCIscz1cIndlZWtcIix1PVwibW9udGhcIixvPVwicXVhcnRlclwiLGE9XCJ5ZWFyXCIsaD0vXihcXGR7NH0pLT8oXFxkezEsMn0pLT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT8uPyhcXGR7MSwzfSk/JC8sZj0vXFxbKFteXFxdXSspXXxZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csYz1mdW5jdGlvbih0LG4sZSl7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49bj90OlwiXCIrQXJyYXkobisxLXIubGVuZ3RoKS5qb2luKGUpK3R9LGQ9e3M6Yyx6OmZ1bmN0aW9uKHQpe3ZhciBuPS10LnV0Y09mZnNldCgpLGU9TWF0aC5hYnMobikscj1NYXRoLmZsb29yKGUvNjApLGk9ZSU2MDtyZXR1cm4objw9MD9cIitcIjpcIi1cIikrYyhyLDIsXCIwXCIpK1wiOlwiK2MoaSwyLFwiMFwiKX0sbTpmdW5jdGlvbih0LG4pe3ZhciBlPTEyKihuLnllYXIoKS10LnllYXIoKSkrKG4ubW9udGgoKS10Lm1vbnRoKCkpLHI9dC5jbG9uZSgpLmFkZChlLHUpLGk9bi1yPDAscz10LmNsb25lKCkuYWRkKGUrKGk/LTE6MSksdSk7cmV0dXJuIE51bWJlcigtKGUrKG4tcikvKGk/ci1zOnMtcikpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKGgpe3JldHVybntNOnUseTphLHc6cyxkOmksaDpyLG06ZSxzOm4sbXM6dCxROm99W2hdfHxTdHJpbmcoaHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSwkPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIil9LGw9XCJlblwiLG09e307bVtsXT0kO3ZhciB5PWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2Ygdn0sTT1mdW5jdGlvbih0LG4sZSl7dmFyIHI7aWYoIXQpcmV0dXJuIG51bGw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpbVt0XSYmKHI9dCksbiYmKG1bdF09bixyPXQpO2Vsc2V7dmFyIGk9dC5uYW1lO21baV09dCxyPWl9cmV0dXJuIGV8fChsPXIpLHJ9LGc9ZnVuY3Rpb24odCxuLGUpe2lmKHkodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgcj1uP1wic3RyaW5nXCI9PXR5cGVvZiBuP3tmb3JtYXQ6bixwbDplfTpuOnt9O3JldHVybiByLmRhdGU9dCxuZXcgdihyKX0sRD1kO0QubD1NLEQuaT15LEQudz1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQse2xvY2FsZTpuLiRMLHV0YzpuLiR1fSl9O3ZhciB2PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyh0KXt0aGlzLiRMPXRoaXMuJEx8fE0odC5sb2NhbGUsbnVsbCwhMCl8fGwsdGhpcy5wYXJzZSh0KX12YXIgZD1jLnByb3RvdHlwZTtyZXR1cm4gZC5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZGF0ZSxlPXQudXRjO2lmKG51bGw9PT1uKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKEQudShuKSlyZXR1cm4gbmV3IERhdGU7aWYobiBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKG4pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuJiYhL1okL2kudGVzdChuKSl7dmFyIHI9bi5tYXRjaChoKTtpZihyKXJldHVybiBlP25ldyBEYXRlKERhdGUuVVRDKHJbMV0sclsyXS0xLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscls3XXx8MCkpOm5ldyBEYXRlKHJbMV0sclsyXS0xLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscls3XXx8MCl9cmV0dXJuIG5ldyBEYXRlKG4pfSh0KSx0aGlzLmluaXQoKX0sZC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sZC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gRH0sZC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sZC5pc1NhbWU9ZnVuY3Rpb24odCxuKXt2YXIgZT1nKHQpO3JldHVybiB0aGlzLnN0YXJ0T2Yobik8PWUmJmU8PXRoaXMuZW5kT2Yobil9LGQuaXNBZnRlcj1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQpPHRoaXMuc3RhcnRPZihuKX0sZC5pc0JlZm9yZT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmVuZE9mKG4pPGcodCl9LGQuJGc9ZnVuY3Rpb24odCxuLGUpe3JldHVybiBELnUodCk/dGhpc1tuXTp0aGlzLnNldChlLHQpfSxkLnllYXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiR5XCIsYSl9LGQubW9udGg9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRNXCIsdSl9LGQuZGF5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkV1wiLGkpfSxkLmRhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiREXCIsXCJkYXRlXCIpfSxkLmhvdXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRIXCIscil9LGQubWludXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkbVwiLGUpfSxkLnNlY29uZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJHNcIixuKX0sZC5taWxsaXNlY29uZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy4kZyhuLFwiJG1zXCIsdCl9LGQudW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LGQudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sZC5zdGFydE9mPWZ1bmN0aW9uKHQsbyl7dmFyIGg9dGhpcyxmPSEhRC51KG8pfHxvLGM9RC5wKHQpLGQ9ZnVuY3Rpb24odCxuKXt2YXIgZT1ELncoaC4kdT9EYXRlLlVUQyhoLiR5LG4sdCk6bmV3IERhdGUoaC4keSxuLHQpLGgpO3JldHVybiBmP2U6ZS5lbmRPZihpKX0sJD1mdW5jdGlvbih0LG4pe3JldHVybiBELncoaC50b0RhdGUoKVt0XS5hcHBseShoLnRvRGF0ZSgpLChmP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UobikpLGgpfSxsPXRoaXMuJFcsbT10aGlzLiRNLHk9dGhpcy4kRCxNPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goYyl7Y2FzZSBhOnJldHVybiBmP2QoMSwwKTpkKDMxLDExKTtjYXNlIHU6cmV0dXJuIGY/ZCgxLG0pOmQoMCxtKzEpO2Nhc2Ugczp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsdj0obDxnP2wrNzpsKS1nO3JldHVybiBkKGY/eS12OnkrKDYtdiksbSk7Y2FzZSBpOmNhc2VcImRhdGVcIjpyZXR1cm4gJChNK1wiSG91cnNcIiwwKTtjYXNlIHI6cmV0dXJuICQoTStcIk1pbnV0ZXNcIiwxKTtjYXNlIGU6cmV0dXJuICQoTStcIlNlY29uZHNcIiwyKTtjYXNlIG46cmV0dXJuICQoTStcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LGQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sZC4kc2V0PWZ1bmN0aW9uKHMsbyl7dmFyIGgsZj1ELnAocyksYz1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksZD0oaD17fSxoW2ldPWMrXCJEYXRlXCIsaC5kYXRlPWMrXCJEYXRlXCIsaFt1XT1jK1wiTW9udGhcIixoW2FdPWMrXCJGdWxsWWVhclwiLGhbcl09YytcIkhvdXJzXCIsaFtlXT1jK1wiTWludXRlc1wiLGhbbl09YytcIlNlY29uZHNcIixoW3RdPWMrXCJNaWxsaXNlY29uZHNcIixoKVtmXSwkPWY9PT1pP3RoaXMuJEQrKG8tdGhpcy4kVyk6bztpZihmPT09dXx8Zj09PWEpe3ZhciBsPXRoaXMuY2xvbmUoKS5zZXQoXCJkYXRlXCIsMSk7bC4kZFtkXSgkKSxsLmluaXQoKSx0aGlzLiRkPWwuc2V0KFwiZGF0ZVwiLE1hdGgubWluKHRoaXMuJEQsbC5kYXlzSW5Nb250aCgpKSkudG9EYXRlKCl9ZWxzZSBkJiZ0aGlzLiRkW2RdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxkLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LG4pfSxkLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tELnAodCldKCl9LGQuYWRkPWZ1bmN0aW9uKHQsbyl7dmFyIGgsZj10aGlzO3Q9TnVtYmVyKHQpO3ZhciBjPUQucChvKSxkPWZ1bmN0aW9uKG4pe3ZhciBlPWcoZik7cmV0dXJuIEQudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZChuKnQpKSxmKX07aWYoYz09PXUpcmV0dXJuIHRoaXMuc2V0KHUsdGhpcy4kTSt0KTtpZihjPT09YSlyZXR1cm4gdGhpcy5zZXQoYSx0aGlzLiR5K3QpO2lmKGM9PT1pKXJldHVybiBkKDEpO2lmKGM9PT1zKXJldHVybiBkKDcpO3ZhciAkPShoPXt9LGhbZV09NmU0LGhbcl09MzZlNSxoW25dPTFlMyxoKVtjXXx8MSxsPXRoaXMudmFsdWVPZigpK3QqJDtyZXR1cm4gRC53KGwsdGhpcyl9LGQuc3VidHJhY3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxuKX0sZC5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuXCJJbnZhbGlkIERhdGVcIjt2YXIgZT10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1ELnoodGhpcyksaT10aGlzLiRsb2NhbGUoKSxzPXRoaXMuJEgsdT10aGlzLiRtLG89dGhpcy4kTSxhPWkud2Vla2RheXMsaD1pLm1vbnRocyxjPWZ1bmN0aW9uKHQscixpLHMpe3JldHVybiB0JiYodFtyXXx8dChuLGUpKXx8aVtyXS5zdWJzdHIoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gRC5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWkubWVyaWRpZW18fGZ1bmN0aW9uKHQsbixlKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIGU/ci50b0xvd2VyQ2FzZSgpOnJ9LGw9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06bysxLE1NOkQucyhvKzEsMixcIjBcIiksTU1NOmMoaS5tb250aHNTaG9ydCxvLGgsMyksTU1NTTpoW29dfHxoKHRoaXMsZSksRDp0aGlzLiRELEREOkQucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmMoaS53ZWVrZGF5c01pbix0aGlzLiRXLGEsMiksZGRkOmMoaS53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsYSwzKSxkZGRkOmFbdGhpcy4kV10sSDpTdHJpbmcocyksSEg6RC5zKHMsMixcIjBcIiksaDpkKDEpLGhoOmQoMiksYTokKHMsdSwhMCksQTokKHMsdSwhMSksbTpTdHJpbmcodSksbW06RC5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6RC5zKHRoaXMuJHMsMixcIjBcIiksU1NTOkQucyh0aGlzLiRtcywzLFwiMFwiKSxaOnJ9O3JldHVybiBlLnJlcGxhY2UoZixmdW5jdGlvbih0LG4pe3JldHVybiBufHxsW3RdfHxyLnJlcGxhY2UoXCI6XCIsXCJcIil9KX0sZC51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sZC5kaWZmPWZ1bmN0aW9uKHQsaCxmKXt2YXIgYyxkPUQucChoKSwkPWcodCksbD02ZTQqKCQudXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSksbT10aGlzLSQseT1ELm0odGhpcywkKTtyZXR1cm4geT0oYz17fSxjW2FdPXkvMTIsY1t1XT15LGNbb109eS8zLGNbc109KG0tbCkvNjA0OGU1LGNbaV09KG0tbCkvODY0ZTUsY1tyXT1tLzM2ZTUsY1tlXT1tLzZlNCxjW25dPW0vMWUzLGMpW2RdfHxtLGY/eTpELmEoeSl9LGQuZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZih1KS4kRH0sZC4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIG1bdGhpcy4kTF19LGQubG9jYWxlPWZ1bmN0aW9uKHQsbil7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIGU9dGhpcy5jbG9uZSgpO3JldHVybiBlLiRMPU0odCxuLCEwKSxlfSxkLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIEQudyh0aGlzLnRvRGF0ZSgpLHRoaXMpfSxkLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLiRkKX0sZC50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0lTT1N0cmluZygpfSxkLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sZC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LGN9KCk7cmV0dXJuIGcucHJvdG90eXBlPXYucHJvdG90eXBlLGcuZXh0ZW5kPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQobix2LGcpLGd9LGcubG9jYWxlPU0sZy5pc0RheWpzPXksZy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBnKDFlMyp0KX0sZy5lbj1tW2xdLGcuTHM9bSxnfSk7XG4iLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEdhbnR0RWxhc3RpYyBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY1wiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxuICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgPG1haW4tdmlldz48L21haW4tdmlldz5cbiAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+PC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlSW5zdGFuY2UgZnJvbSAndnVlJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSc7XG5pbXBvcnQgZ2V0U3R5bGUgZnJvbSAnLi9zdHlsZS5qcyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcblxuY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbmxldCBWdWVJbnN0ID0gVnVlSW5zdGFuY2U7XG5mdW5jdGlvbiBpbml0VnVlKCkge1xuICBpZiAodHlwZW9mIFZ1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFZ1ZUluc3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgVnVlSW5zdCA9IFZ1ZTtcbiAgfVxufVxuaW5pdFZ1ZSgpO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZmlsbCBvdXQgZW1wdHkgb3B0aW9ucyBpbiB1c2VyIHNldHRpbmdzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHVzZXJPcHRpb25zIC0gaW5pdGlhbCB1c2VyIG9wdGlvbnMgdGhhdCB3aWxsIG1lcmdlIHdpdGggdGhvc2UgYmVsb3dcbiAqIEByZXR1cm5zIHtvYmplY3R9IG1lcmdlZCBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGdldE9wdGlvbnModXNlck9wdGlvbnMpIHtcbiAgbGV0IGxvY2FsZU5hbWUgPSAnZW4nO1xuICBpZiAodHlwZW9mIHVzZXJPcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHVzZXJPcHRpb25zLmxvY2FsZS5uYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsZU5hbWUgPSB1c2VyT3B0aW9ucy5sb2NhbGUubmFtZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNsb3RzOiB7XG4gICAgICBoZWFkZXI6IHt9XG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgbGFiZWw6ICdnYW50dC1lbGFzdGljJyxcbiAgICAgIGh0bWw6IGZhbHNlXG4gICAgfSxcbiAgICB0YXNrTWFwcGluZzoge1xuICAgICAgaWQ6ICdpZCcsXG4gICAgICBzdGFydDogJ3N0YXJ0JyxcbiAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgICAgZHVyYXRpb246ICdkdXJhdGlvbicsXG4gICAgICBwcm9ncmVzczogJ3Byb2dyZXNzJyxcbiAgICAgIHR5cGU6ICd0eXBlJyxcbiAgICAgIHN0eWxlOiAnc3R5bGUnLFxuICAgICAgY29sbGFwc2VkOiAnY29sbGFwc2VkJ1xuICAgIH0sXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIGNsaWVudFdpZHRoOiAwLFxuICAgIG91dGVySGVpZ2h0OiAwLFxuICAgIHJvd3NIZWlnaHQ6IDAsXG4gICAgYWxsVmlzaWJsZVRhc2tzSGVpZ2h0OiAwLFxuICAgIHJlZnM6IHt9LFxuICAgIHNjcm9sbDoge1xuICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgIGRyYWdYTW92ZU11bHRpcGxpZXI6IDMsXG4gICAgICBkcmFnWU1vdmVNdWx0aXBsaWVyOiAyLFxuICAgICAgdG9wOiAwLFxuICAgICAgdGFza0xpc3Q6IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9LFxuICAgICAgY2hhcnQ6IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICAgIHRpbWVQZXJjZW50OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgdGltZTogMCxcbiAgICAgICAgdGltZUNlbnRlcjogMCxcbiAgICAgICAgZGF0ZVRpbWU6IHtcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICByaWdodDogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2NvcGU6IHtcbiAgICAgIGJlZm9yZTogMSxcbiAgICAgIGFmdGVyOiAxXG4gICAgfSxcbiAgICB0aW1lczoge1xuICAgICAgdGltZVNjYWxlOiA2MCAqIDEwMDAsXG4gICAgICB0aW1lWm9vbTogMTcsXG4gICAgICB0aW1lUGVyUGl4ZWw6IDAsXG4gICAgICBmaXJzdFRpbWU6IG51bGwsIC8vIGZpcnN0RGF0ZSBnZXRUaW1lKClcbiAgICAgIGxhc3RUaW1lOiBudWxsLCAvLyBsYXN0IGRhdGUgZ2V0VGltZSgpXG4gICAgICBmaXJzdFRhc2tUaW1lOiAwLFxuICAgICAgbGFzdFRhc2tUaW1lOiAwLFxuICAgICAgdG90YWxWaWV3RHVyYXRpb25NczogMCxcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uUHg6IDAsXG4gICAgICBzdGVwRHVyYXRpb246ICdkYXknLCAvLyBob3VyLCBtb250aFxuICAgICAgc3RlcHM6IFtdXG4gICAgfSxcbiAgICByb3c6IHtcbiAgICAgIGhlaWdodDogMjRcbiAgICB9LFxuICAgIG1heFJvd3M6IDIwLFxuICAgIG1heEhlaWdodDogMCxcbiAgICBjaGFydDoge1xuICAgICAgZ3JpZDoge1xuICAgICAgICBob3Jpem9udGFsOiB7XG4gICAgICAgICAgZ2FwOiA2XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgIGhlaWdodDogNixcbiAgICAgICAgcGF0dGVybjogdHJ1ZSxcbiAgICAgICAgYmFyOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICB4UGFkZGluZzogMTAsXG4gICAgICAgIGRpc3BsYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBleHBhbmRlcjoge1xuICAgICAgICB0eXBlOiAnY2hhcnQnLFxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgZGlzcGxheUlmVGFza0xpc3RIaWRkZW46IHRydWUsXG4gICAgICAgIG9mZnNldDogNCxcbiAgICAgICAgc2l6ZTogMThcbiAgICAgIH1cbiAgICB9LFxuICAgIHRhc2tMaXN0OiB7XG4gICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgcmVzaXplQWZ0ZXJUaHJlc2hvbGQ6IHRydWUsXG4gICAgICB3aWR0aFRocmVzaG9sZDogNzUsXG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBsYWJlbDogJ0lEJyxcbiAgICAgICAgICB2YWx1ZTogJ2lkJyxcbiAgICAgICAgICB3aWR0aDogNDBcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlc2l6ZXJXaWR0aDogMCxcbiAgICAgIHBlcmNlbnQ6IDEwMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgZmluYWxXaWR0aDogMCxcbiAgICAgIHdpZHRoRnJvbVBlcmNlbnRhZ2U6IDAsXG4gICAgICBtaW5XaWR0aDogMTgsXG4gICAgICBleHBhbmRlcjoge1xuICAgICAgICB0eXBlOiAndGFzay1saXN0JyxcbiAgICAgICAgc2l6ZTogMTYsXG4gICAgICAgIGNvbHVtbldpZHRoOiAyNCxcbiAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgY2FsZW5kYXI6IHtcbiAgICAgIHdvcmtpbmdEYXlzOiBbMSwgMiwgMywgNCwgNV0sXG4gICAgICBnYXA6IDYsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBzdHJva2VXaWR0aDogMSxcbiAgICAgIGhvdXI6IHtcbiAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgd2lkdGhzOiBbXSxcbiAgICAgICAgbWF4V2lkdGhzOiB7IHNob3J0OiAwLCBtZWRpdW06IDAsIGxvbmc6IDAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgbG9uZyhkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KCdISDptbScpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVkaXVtKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXlqcyhkYXRlKVxuICAgICAgICAgICAgICAubG9jYWxlKGxvY2FsZU5hbWUpXG4gICAgICAgICAgICAgIC5mb3JtYXQoJ0hIOm1tJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KCdISCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRheToge1xuICAgICAgICBoZWlnaHQ6IDIwLFxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB3aWR0aHM6IFtdLFxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICBsb25nKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXlqcyhkYXRlKVxuICAgICAgICAgICAgICAubG9jYWxlKGxvY2FsZU5hbWUpXG4gICAgICAgICAgICAgIC5mb3JtYXQoJ0REIGRkZGQnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lZGl1bShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KCdERCBkZGQnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3J0KGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXlqcyhkYXRlKVxuICAgICAgICAgICAgICAubG9jYWxlKGxvY2FsZU5hbWUpXG4gICAgICAgICAgICAgIC5mb3JtYXQoJ0REJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW9udGg6IHtcbiAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgd2lkdGhzOiBbXSxcbiAgICAgICAgbWF4V2lkdGhzOiB7IHNob3J0OiAwLCBtZWRpdW06IDAsIGxvbmc6IDAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgc2hvcnQoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheWpzKGRhdGUpXG4gICAgICAgICAgICAgIC5sb2NhbGUobG9jYWxlTmFtZSlcbiAgICAgICAgICAgICAgLmZvcm1hdCgnTU0nKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lZGl1bShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KFwiTU1NICdZWVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxvbmcoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheWpzKGRhdGUpXG4gICAgICAgICAgICAgIC5sb2NhbGUobG9jYWxlTmFtZSlcbiAgICAgICAgICAgICAgLmZvcm1hdCgnTU1NTSBZWVlZJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2NhbGU6IHtcbiAgICAgIG5hbWU6ICdlbicsXG4gICAgICBOb3c6ICdOb3cnLFxuICAgICAgJ1gtU2NhbGUnOiAnWm9vbS1YJyxcbiAgICAgICdZLVNjYWxlJzogJ1pvb20tWScsXG4gICAgICAnVGFzayBsaXN0IHdpZHRoJzogJ1Rhc2sgbGlzdCcsXG4gICAgICAnQmVmb3JlL0FmdGVyJzogJ0V4cGFuZCcsXG4gICAgICAnRGlzcGxheSB0YXNrIGxpc3QnOiAnU2hvdyB0YXNrIGxpc3QnLFxuICAgICAgd2Vla2RheXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgICAgIHdlZWtkYXlzU2hvcnQ6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXG4gICAgICB3ZWVrZGF5c01pbjogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxuICAgICAgbW9udGhzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgICAgIG1vbnRoc1Nob3J0OiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gICAgICB3ZWVrU3RhcnQ6IDEsXG4gICAgICByZWxhdGl2ZVRpbWU6IHtcbiAgICAgICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgICAgICBwYXN0OiAnJXMgYWdvJyxcbiAgICAgICAgczogJ2EgZmV3IHNlY29uZHMnLFxuICAgICAgICBtOiAnYSBtaW51dGUnLFxuICAgICAgICBtbTogJyVkIG1pbnV0ZXMnLFxuICAgICAgICBoOiAnYW4gaG91cicsXG4gICAgICAgIGhoOiAnJWQgaG91cnMnLFxuICAgICAgICBkOiAnYSBkYXknLFxuICAgICAgICBkZDogJyVkIGRheXMnLFxuICAgICAgICBNOiAnYSBtb250aCcsXG4gICAgICAgIE1NOiAnJWQgbW9udGhzJyxcbiAgICAgICAgeTogJ2EgeWVhcicsXG4gICAgICAgIHl5OiAnJWQgeWVhcnMnXG4gICAgICB9LFxuICAgICAgZm9ybWF0czoge1xuICAgICAgICBMVDogJ0hIOm1tJyxcbiAgICAgICAgTFRTOiAnSEg6bW06c3MnLFxuICAgICAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgICAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgICAgIH0sXG4gICAgICBvcmRpbmFsOiBuID0+IHtcbiAgICAgICAgY29uc3QgcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXTtcbiAgICAgICAgY29uc3QgdiA9IG4gJSAxMDA7XG4gICAgICAgIHJldHVybiBgWyR7bn0ke3NbKHYgLSAyMCkgJSAxMF0gfHwgc1t2XSB8fCBzWzBdfV1gO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHN0eWxlXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gcHJlcGFyZVN0eWxlKHVzZXJTdHlsZSkge1xuICBsZXQgZm9udFNpemUgPSAnMTJweCc7XG4gIGxldCBmb250RmFtaWx5ID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKVxuICAgIC50b1N0cmluZygpO1xuICBpZiAodHlwZW9mIHVzZXJTdHlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHVzZXJTdHlsZS5mb250U2l6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvbnRTaXplID0gdXNlck9wdGlvbnMuZm9udFNpemU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdXNlclN0eWxlLmZvbnRGYW1pbHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb250RmFtaWx5ID0gdXNlclN0eWxlLmZvbnRGYW1pbHk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXRTdHlsZShmb250U2l6ZSwgZm9udEZhbWlseSk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBzcGVjaWZpZWQgdmFyaWFibGUgaXMgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHthbnl9IGl0ZW1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKFxuICAgIGl0ZW0gJiZcbiAgICB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiZcbiAgICAhQXJyYXkuaXNBcnJheShpdGVtKSAmJlxuICAgICEoaXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJlxuICAgICEoaXRlbSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgJiZcbiAgICB0eXBlb2YgaXRlbSAhPT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCB3aWxsIG1lcmdlIG9iamVjdHMgcmVjdXJzaXZlbHkgLSBjcmVhdGluZyBicmFuZCBuZXcgb25lIC0gbGlrZSBjbG9uZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbXMge29iamVjdH0gc291cmNlc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzb3VyY2Vba2V5XSkge1xuICAgICAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0ucHVzaChtZXJnZURlZXAoe30sIGl0ZW0pKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXRba2V5XS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGlmIG9iamVjdCBvciBhcnJheSBpcyBvYnNlcnZhYmxlXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9ialxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09ic2VydmFibGUob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouaGFzT3duUHJvcGVydHkoJ19fb2JfXycpO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgYWJvdmUgYnV0IHdpdGggcmVhY3Rpdml0eSBpbiBtaW5kXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtcyB7b2JqZWN0fSBzb3VyY2VzXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcFJlYWN0aXZlKGNvbXBvbmVudCwgdGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwUmVhY3RpdmUoY29tcG9uZW50LCB0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBjb21wb25lbnQuJHNldCh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtrZXldLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlXScpID09PSAtMSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZURlZXBSZWFjdGl2ZShjb21wb25lbnQsIHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4vKipcbiAqIENoZWNrIGlmIG9iamVjdHMgb3IgYXJyYXlzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgbmVzdGVkIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBsZWZ0XG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gcmlnaHRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdEVxdWFsRGVlcChsZWZ0LCByaWdodCwgY2FjaGUgPSBbXSwgcGF0aCA9ICcnKSB7XG4gIGlmICh0eXBlb2YgcmlnaHQgIT09IHR5cGVvZiBsZWZ0KSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLnR5cGVvZicgfTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGxlZnQpICYmICFBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5pc0FycmF5JyB9O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmlnaHQpICYmICFBcnJheS5pc0FycmF5KGxlZnQpKSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmlzQXJyYXknIH07XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShsZWZ0KSAmJiBBcnJheS5pc0FycmF5KHJpZ2h0KSkge1xuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gcmlnaHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcubGVuZ3RoJyB9O1xuICAgIH1cbiAgICBsZXQgd2hhdDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IGxlZnQubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgaWYgKCh3aGF0ID0gbm90RXF1YWxEZWVwKGxlZnRbaW5kZXhdLCByaWdodFtpbmRleF0sIGNhY2hlLCBwYXRoICsgJy4nICsgaW5kZXgpKSkge1xuICAgICAgICByZXR1cm4gd2hhdDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGVmdCkgJiYgIWlzT2JqZWN0KHJpZ2h0KSkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5pc09iamVjdCcgfTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChyaWdodCkgJiYgIWlzT2JqZWN0KGxlZnQpKSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmlzT2JqZWN0JyB9O1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxlZnQpICYmIGlzT2JqZWN0KHJpZ2h0KSkge1xuICAgIGZvciAobGV0IGtleSBpbiBsZWZ0KSB7XG4gICAgICBpZiAoIWxlZnQuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhbGVmdC5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFyaWdodC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy4nICsga2V5IH07XG4gICAgICB9XG4gICAgICBsZXQgd2hhdDtcbiAgICAgIGlmICgod2hhdCA9IG5vdEVxdWFsRGVlcChsZWZ0W2tleV0sIHJpZ2h0W2tleV0sIGNhY2hlLCBwYXRoICsgJy4nICsga2V5KSkpIHtcbiAgICAgICAgcmV0dXJuIHdoYXQ7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGxlZnQgIT09IHJpZ2h0KSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLiAhPT0nIH07XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBzdHlsZUNhY2hlID0ge307XG5cbi8qKlxuICogR2FudHRFbGFzdGljXG4gKiBNYWluIHZ1ZSBjb21wb25lbnRcbiAqL1xuY29uc3QgR2FudHRFbGFzdGljID0ge1xuICBuYW1lOiAnR2FudHRFbGFzdGljJyxcbiAgY29tcG9uZW50czoge1xuICAgIE1haW5WaWV3XG4gIH0sXG4gIHByb3BzOiBbJ3Rhc2tzJywgJ29wdGlvbnMnLCAnc3R5bGVSdWxlcyddLFxuICBwcm92aWRlKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0ge307XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3ZpZGVyLCAncm9vdCcsIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6ICgpID0+IHNlbGZcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvdmlkZXI7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHNjcm9sbEJhckhlaWdodDogMCxcbiAgICAgICAgICBhbGxWaXNpYmxlVGFza3NIZWlnaHQ6IDAsXG4gICAgICAgICAgb3V0ZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgc2Nyb2xsOiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkeW5hbWljU3R5bGU6IHt9LFxuICAgICAgICByZWZzOiB7fSxcbiAgICAgICAgdGFza3NCeUlkOiB7fSxcbiAgICAgICAgdGFza1RyZWU6IHt9LFxuICAgICAgICBjdHgsXG4gICAgICAgIGVtaXRUYXNrc0NoYW5nZXM6IHRydWUsIC8vIHNvbWUgb3BlcmF0aW9ucyBtYXkgcGF1c2UgZW1pdHRpbmcgY2hhbmdlcyB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIGVtaXRPcHRpb25zQ2hhbmdlczogdHJ1ZSwgLy8gc29tZSBvcGVyYXRpb25zIG1heSBwYXVzZSBlbWl0dGluZyBjaGFuZ2VzIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXI6IG51bGwsXG4gICAgICAgIHVud2F0Y2hUYXNrczogbnVsbCxcbiAgICAgICAgdW53YXRjaE9wdGlvbnM6IG51bGwsXG4gICAgICAgIHVud2F0Y2hTdHlsZTogbnVsbCxcbiAgICAgICAgdW53YXRjaE91dHB1dFRhc2tzOiBudWxsLFxuICAgICAgICB1bndhdGNoT3V0cHV0T3B0aW9uczogbnVsbFxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtZXJnZURlZXAsXG4gICAgbWVyZ2VEZWVwUmVhY3RpdmUsXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaGVpZ2h0IG9mIHNjcm9sbGJhciBpbiBjdXJyZW50IGJyb3dzZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2Nyb2xsQmFySGVpZ2h0KCkge1xuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIG91dGVyLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSAnc2Nyb2xsYmFyJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgICAgdmFyIG5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgICAgdmFyIHdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG5vU2Nyb2xsIC0gd2l0aFNjcm9sbDtcbiAgICAgIHRoaXMuc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsJ11bJ21hcmdpbi1sZWZ0J10gPSBgLSR7aGVpZ2h0fXB4YDtcbiAgICAgIHJldHVybiAodGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbEJhckhlaWdodCA9IGhlaWdodCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEZpbGwgb3V0IGVtcHR5IHRhc2sgcHJvcGVydGllcyBhbmQgbWFrZSBpdCByZWFjdGl2ZVxuICAgICAqL1xuICAgIGZpbGxUYXNrcyh0YXNrcykge1xuICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBpZiAodHlwZW9mIHRhc2sueCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLnggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay55ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2sueSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLndpZHRoID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2sud2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5oZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5tb3VzZU92ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5tb3VzZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suY29sbGFwc2VkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2suY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmRlcGVuZGVudE9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2suZGVwZW5kZW50T24gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2sucGFyZW50SWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5wYXJlbnRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRhc2suc3R5bGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5hbGxDaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLmFsbENoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay5wYXJlbnRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnN0YXJ0VGltZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0YXNrLnN0YXJ0VGltZSA9IGRheWpzKHRhc2suc3RhcnQpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suZW5kVGltZSA9PT0gJ3VuZGVmaW5lZCcgJiYgdGFzay5oYXNPd25Qcm9wZXJ0eSgnZW5kJykpIHtcbiAgICAgICAgICB0YXNrLmVuZFRpbWUgPSBkYXlqcyh0YXNrLmVuZCkudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXNrLmVuZFRpbWUgPT09ICd1bmRlZmluZWQnICYmIHRhc2suaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykpIHtcbiAgICAgICAgICB0YXNrLmVuZFRpbWUgPSB0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmR1cmF0aW9uID09PSAndW5kZWZpbmVkJyAmJiB0YXNrLmhhc093blByb3BlcnR5KCdlbmRUaW1lJykpIHtcbiAgICAgICAgICB0YXNrLmR1cmF0aW9uID0gdGFzay5lbmRUaW1lIC0gdGFzay5zdGFydFRpbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwIHRhc2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgbWFwVGFza3ModGFza3MsIG9wdGlvbnMpIHtcbiAgICAgIGZvciAobGV0IFtpbmRleCwgdGFza10gb2YgdGFza3MuZW50cmllcygpKSB7XG4gICAgICAgIHRhc2tzW2luZGV4XSA9IHtcbiAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgIGlkOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuaWRdLFxuICAgICAgICAgIHN0YXJ0OiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuc3RhcnRdLFxuICAgICAgICAgIGxhYmVsOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcubGFiZWxdLFxuICAgICAgICAgIGR1cmF0aW9uOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuZHVyYXRpb25dLFxuICAgICAgICAgIHByb2dyZXNzOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcucHJvZ3Jlc3NdLFxuICAgICAgICAgIHR5cGU6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy50eXBlXSxcbiAgICAgICAgICBzdHlsZTogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLnN0eWxlXSxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5jb2xsYXBzZWRdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza3M7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50XG4gICAgICovXG4gICAgaW5pdGlhbGl6ZShpdHNVcGRhdGUgPSAnJykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBtZXJnZURlZXAoe30sIHRoaXMuc3RhdGUub3B0aW9ucywgZ2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgbGV0IHRhc2tzID0gdGhpcy5tYXBUYXNrcyh0aGlzLnRhc2tzLCBvcHRpb25zKTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmR5bmFtaWNTdHlsZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0eWxlKCk7XG4gICAgICB9XG4gICAgICBkYXlqcy5sb2NhbGUob3B0aW9ucy5sb2NhbGUsIG51bGwsIHRydWUpO1xuICAgICAgZGF5anMubG9jYWxlKG9wdGlvbnMubG9jYWxlLm5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRhc2tMaXN0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLnRhc2tMaXN0ID0ge307XG4gICAgICB9XG4gICAgICBvcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMgPSBvcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ID0gMTAwO1xuICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9IDA7XG4gICAgICAgIGNvbHVtbi5maW5hbFdpZHRoID0gMDtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW4uaGVpZ2h0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbHVtbi5oZWlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uLnN0eWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbHVtbi5zdHlsZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbi5faWQgPSBgJHtpbmRleH0tJHtjb2x1bW4ubGFiZWx9YDtcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRhc2tzID0gdGhpcy5maWxsVGFza3ModGFza3MpO1xuICAgICAgdGhpcy5zdGF0ZS50YXNrc0J5SWQgPSB0aGlzLnJlc2V0VGFza1RyZWUodGFza3MpO1xuICAgICAgdGhpcy5zdGF0ZS50YXNrVHJlZSA9IHRoaXMubWFrZVRhc2tUcmVlKHRoaXMuc3RhdGUucm9vdFRhc2ssIHRhc2tzKTtcbiAgICAgIHRoaXMuc3RhdGUudGFza3MgPSB0aGlzLnN0YXRlLnRhc2tUcmVlLmFsbENoaWxkcmVuLm1hcChjaGlsZElkID0+IHRoaXMuZ2V0VGFzayhjaGlsZElkKSk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVRhc2tMaXN0Q29sdW1uc0RpbWVuc2lvbnMoKTtcbiAgICAgIHRoaXMuZ2V0U2Nyb2xsQmFySGVpZ2h0KCk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxCYXJIZWlnaHQoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5vdXRlckhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0O1xuICAgICAgdGhpcy5nbG9iYWxPblJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHN0eWxlXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZVN0eWxlKCkge1xuICAgICAgdGhpcy5zdGF0ZS5keW5hbWljU3R5bGUgPSBtZXJnZURlZXAoe30sIHByZXBhcmVTdHlsZSh0aGlzLmR5bmFtaWNTdHlsZSksIHRoaXMuZHluYW1pY1N0eWxlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhbGVuZGFyIHJvd3Mgb3V0ZXIgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldENhbGVuZGFySGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuc3Ryb2tlV2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbWFsIGxldmVsIG9mIG5lc3RlZCB0YXNrIGNoaWxkcmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldE1heGltYWxMZXZlbCgpIHtcbiAgICAgIGxldCBtYXhpbWFsTGV2ZWwgPSAwO1xuICAgICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5wYXJlbnRzLmxlbmd0aCA+IG1heGltYWxMZXZlbCkge1xuICAgICAgICAgIG1heGltYWxMZXZlbCA9IHRhc2sucGFyZW50cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1heGltYWxMZXZlbCAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbWFsIGV4cGFuZGVyIHdpZHRoIC0gdG8gY2FsY3VsYXRlIHN0cmFpZ2h0IHRhc2sgbGlzdCB0ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldE1heGltYWxFeHBhbmRlcldpZHRoKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5nZXRNYXhpbWFsTGV2ZWwoKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5wYWRkaW5nICtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLm1hcmdpblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemUgc2Nyb2xsVG9wIHByb3BlcnR5IHdoZW4gcm93IGhlaWdodCBpcyBjaGFuZ2VkXG4gICAgICovXG4gICAgc3luY1Njcm9sbFRvcCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcykge1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnRvcCA9IHRoaXMuc3RhdGUucmVmcy50YXNrTGlzdEl0ZW1zLnNjcm9sbFRvcCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRhc2sgbGlzdCBjb2x1bW5zIGRpbWVuc2lvbnNcbiAgICAgKi9cbiAgICBjYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCkge1xuICAgICAgbGV0IGZpbmFsID0gMDtcbiAgICAgIGxldCBwZXJjZW50YWdlID0gMDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5leHBhbmRlcikge1xuICAgICAgICAgIGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlID1cbiAgICAgICAgICAgICgodGhpcy5nZXRNYXhpbWFsRXhwYW5kZXJXaWR0aCgpICsgY29sdW1uLndpZHRoKSAvIDEwMCkgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9IChjb2x1bW4ud2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LnBlcmNlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGVyY2VudGFnZSArPSBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZTtcbiAgICAgICAgY29sdW1uLmZpbmFsV2lkdGggPSAoY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgKiBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSkgLyAxMDA7XG4gICAgICAgIGZpbmFsICs9IGNvbHVtbi5maW5hbFdpZHRoO1xuICAgICAgICBjb2x1bW4uaGVpZ2h0ID0gdGhpcy5nZXRUYXNrSGVpZ2h0KCkgLSB0aGlzLnN0eWxlWydncmlkLWxpbmUtaG9yaXpvbnRhbCddWydzdHJva2Utd2lkdGgnXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggPSBmaW5hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGFzayB0cmVlIC0gd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgdHJlZSBsaWtlIHN0cnVjdHVyZSBpbnNpZGUgdGFzayBsaXN0XG4gICAgICovXG4gICAgcmVzZXRUYXNrVHJlZSh0YXNrcykge1xuICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhdGUsICdyb290VGFzaycsIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIGxhYmVsOiAncm9vdCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgYWxsQ2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnRzOiBbXSxcbiAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICBfX3Jvb3Q6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY29uc3QgdGFza3NCeUlkID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0YXNrc1tpXTtcbiAgICAgICAgY3VycmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICBjdXJyZW50LmFsbENoaWxkcmVuID0gW107XG4gICAgICAgIGN1cnJlbnQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY3VycmVudC5wYXJlbnRzID0gW107XG4gICAgICAgIHRhc2tzQnlJZFtjdXJyZW50LmlkXSA9IGN1cnJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza3NCeUlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIHRhc2sgdHJlZSwgYWZ0ZXIgcmVzZXQgLSBsb29rIGFib3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFza1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHRhc2tzIHdpdGggY2hpbGRyZW4gYW5kIHBhcmVudHNcbiAgICAgKi9cbiAgICBtYWtlVGFza1RyZWUodGFzaywgdGFza3MpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRhc2tzW2ldO1xuICAgICAgICBpZiAoY3VycmVudC5wYXJlbnRJZCA9PT0gdGFzay5pZCkge1xuICAgICAgICAgIGlmICh0YXNrLnBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXNrLnBhcmVudHMuZm9yRWFjaChwYXJlbnQgPT4gY3VycmVudC5wYXJlbnRzLnB1c2gocGFyZW50KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGFzay5wcm9wZXJ0eUlzRW51bWVyYWJsZSgnX19yb290JykpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50cy5wdXNoKHRhc2suaWQpO1xuICAgICAgICAgICAgY3VycmVudC5wYXJlbnQgPSB0YXNrLmlkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudCA9IHRoaXMubWFrZVRhc2tUcmVlKGN1cnJlbnQsIHRhc2tzKTtcbiAgICAgICAgICB0YXNrLmFsbENoaWxkcmVuLnB1c2goY3VycmVudC5pZCk7XG4gICAgICAgICAgdGFzay5jaGlsZHJlbi5wdXNoKGN1cnJlbnQuaWQpO1xuICAgICAgICAgIGN1cnJlbnQuYWxsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHRhc2suYWxsQ2hpbGRyZW4ucHVzaChjaGlsZElkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGFzayBieSBpZFxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH0gdGFza1xuICAgICAqL1xuICAgIGdldFRhc2sodGFza0lkKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUudGFza3NCeUlkW3Rhc2tJZF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzQnlJZFt0YXNrSWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGlsZHJlbiB0YXNrcyBmb3Igc3BlY2lmaWVkIHRhc2tJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxuICAgICAqIEByZXR1cm5zIHthcnJheX0gY2hpbGRyZW5cbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbih0YXNrSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSB0YXNrSWQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJcyB0YXNrIHZpc2libGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xUYXNrfSB0YXNrXG4gICAgICovXG4gICAgaXNUYXNrVmlzaWJsZSh0YXNrKSB7XG4gICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0YXNrID09PSAnc3RyaW5nJykge1xuICAgICAgICB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2spO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhc2sucGFyZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXRUYXNrKHRhc2sucGFyZW50c1tpXSkuY29sbGFwc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHN2Z1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gaHRtbCBzdmcgaW1hZ2Ugb2YgZ2FudHRcbiAgICAgKi9cbiAgICBnZXRTVkcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3Lm91dGVySFRNTDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBpbWFnZSBmb3JtYXRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gd2hlbiByZXNvbHZlZCByZXR1cm5zIGJhc2U2NCBpbWFnZSBzdHJpbmcgb2YgZ2FudHRcbiAgICAgKi9cbiAgICBnZXRJbWFnZSh0eXBlID0gJ2ltYWdlL3BuZycpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3LmNsaWVudFdpZHRoO1xuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodDtcbiAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwodHlwZSkpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0U1ZHKCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBnYW50dCB0b3RhbCBoZWlnaHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SGVpZ2h0KHZpc2libGVUYXNrcywgb3V0ZXIgPSBmYWxzZSkge1xuICAgICAgbGV0IGhlaWdodCA9XG4gICAgICAgIHZpc2libGVUYXNrcy5sZW5ndGggKiAodGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5zdHJva2VXaWR0aCArXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXA7XG4gICAgICBpZiAob3V0ZXIpIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgb25lIHRhc2sgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhc2tIZWlnaHQod2l0aFN0cm9rZSA9IGZhbHNlKSB7XG4gICAgICBpZiAod2l0aFN0cm9rZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ICtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIgK1xuICAgICAgICAgIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ11bJ3N0cm9rZS13aWR0aCddXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBzcGVjaWZpZWQgdGFza3MgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcykge1xuICAgICAgcmV0dXJuIHZpc2libGVUYXNrcy5sZW5ndGggKiB0aGlzLmdldFRhc2tIZWlnaHQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIHRvIHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBtc1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGltZVRvUGl4ZWxPZmZzZXRYKG1zKSB7XG4gICAgICBsZXQgeCA9IG1zIC0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZTtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHggPSB4IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnQgdG8gY29ycmVzcG9uZGluZyB0aW1lIG9mZnNldCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbE9mZnNldFhcbiAgICAgKiBAcmV0dXJucyB7aW50fSBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBwaXhlbE9mZnNldFhUb1RpbWUocGl4ZWxPZmZzZXRYKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gcGl4ZWxPZmZzZXRYICsgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddIC8gMjtcbiAgICAgIHJldHVybiBvZmZzZXQgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsICsgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGN1cnJlbnQgdmlldyBwb3J0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGVsZW1lbnQgcGxhY2VtZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gZWxlbWVudCB3aWR0aFxuICAgICAqIEBwYXJhbSB7aW50fSBidWZmZXIgLSBvciB0aHJlc2hvbGQsIGlmIGVsZW1lbnQgaXMgb3V0c2lkZSB2aWV3cG9ydCBidXQgb2Zmc2V0IGZyb20gdmlldyBwb3J0IGlzIGJlbG93IHRoaXMgdmFsdWUgcmV0dXJuIHRydWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0luc2lkZVZpZXdQb3J0KHgsIHdpZHRoLCBidWZmZXIgPSA1MDAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCAmJlxuICAgICAgICAgIHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5yaWdodCkgfHxcbiAgICAgICAgKHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5sZWZ0ICYmXG4gICAgICAgICAgeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtldmVudH0gZXZcbiAgICAgKi9cbiAgICBvblNjcm9sbENoYXJ0KGV2KSB7XG4gICAgICBjb25zdCBob3Jpem9udGFsID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbDtcbiAgICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWw7XG4gICAgICB0aGlzLl9vblNjcm9sbENoYXJ0KGhvcml6b250YWwuc2Nyb2xsTGVmdCwgdmVydGljYWwuc2Nyb2xsVG9wKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWZ0ZXIgc2FtZSBhcyBhYm92ZSBidXQgd2l0aCBkaWZmZXJlbnQgYXJndW1lbnRzIC0gbm9ybWFsaXplZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG9wXG4gICAgICovXG4gICAgX29uU2Nyb2xsQ2hhcnQobGVmdCwgdG9wKSB7XG4gICAgICBjb25zdCBjaGFydENvbnRhaW5lcldpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5sZWZ0ID0gbGVmdDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQgPSBsZWZ0ICsgY2hhcnRDb250YWluZXJXaWR0aDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucGVyY2VudCA9IChsZWZ0IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHgpICogMTAwO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50b3AgPSB0b3A7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWUgPSB0aGlzLnBpeGVsT2Zmc2V0WFRvVGltZShsZWZ0KTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudGltZUNlbnRlciA9IHRoaXMucGl4ZWxPZmZzZXRYVG9UaW1lKGxlZnQgKyBjaGFydENvbnRhaW5lcldpZHRoIC8gMik7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmRhdGVUaW1lLmxlZnQgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWUpLnZhbHVlT2YoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQuZGF0ZVRpbWUucmlnaHQgPSBkYXlqcyhcbiAgICAgICAgdGhpcy5waXhlbE9mZnNldFhUb1RpbWUobGVmdCArIHRoaXMuc3RhdGUucmVmcy5jaGFydC5jbGllbnRXaWR0aClcbiAgICAgICkudmFsdWVPZigpO1xuICAgICAgdGhpcy5zY3JvbGxUbyhsZWZ0LCB0b3ApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgY3VycmVudCBjaGFydCB0byBzcGVjaWZpZWQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR9IHRpbWVcbiAgICAgKi9cbiAgICBzY3JvbGxUb1RpbWUodGltZSkge1xuICAgICAgbGV0IHBvcyA9IHRoaXMudGltZVRvUGl4ZWxPZmZzZXRYKHRpbWUpO1xuICAgICAgY29uc3QgY2hhcnRDb250YWluZXJXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIHBvcyA9IHBvcyAtIGNoYXJ0Q29udGFpbmVyV2lkdGggLyAyO1xuICAgICAgaWYgKHBvcyA+IHRoaXMuc3RhdGUub3B0aW9ucy53aWR0aCkge1xuICAgICAgICBwb3MgPSB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGggLSBjaGFydENvbnRhaW5lcldpZHRoO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUbyhwb3MpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgY2hhcnQgb3IgdGFzayBsaXN0IHRvIHNwZWNpZmllZCBwaXhlbCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IGxlZnRcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfSB0b3BcbiAgICAgKi9cbiAgICBzY3JvbGxUbyhsZWZ0ID0gbnVsbCwgdG9wID0gbnVsbCkge1xuICAgICAgaWYgKGxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0Q2FsZW5kYXJDb250YWluZXIuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoQ29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmxlZnQgPSBsZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKHRvcCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLnRhc2tMaXN0SXRlbXMuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnRvcCA9IHRvcDtcbiAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVG9wKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFmdGVyIHNvbWUgYWN0aW9ucyBsaWtlIHRpbWUgem9vbSBjaGFuZ2Ugd2UgbmVlZCB0byByZWNvbXBlbnNhdGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICogc28gYXMgYSByZXN1bHQgZXZlcnl0aGluZyB3aWxsIGJlIGluIHNhbWUgcGxhY2VcbiAgICAgKi9cbiAgICBmaXhTY3JvbGxQb3MoKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvVGltZSh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWVDZW50ZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNb3VzZSB3aGVlbCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25XaGVlbENoYXJ0KGV2KSB7XG4gICAgICBpZiAoIWV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGxldCB0b3AgPSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnRvcCArIGV2LmRlbHRhWTtcbiAgICAgICAgY29uc3QgY2hhcnRDbGllbnRIZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGguc2Nyb2xsSGVpZ2h0IC0gY2hhcnRDbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICAgICAgdG9wID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0b3AgPiBzY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICB0b3AgPSBzY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhudWxsLCB0b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmxlZnQgKyBldi5kZWx0YVk7XG4gICAgICAgIGNvbnN0IGNoYXJ0Q2xpZW50V2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBzY3JvbGxXaWR0aCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsV2lkdGggLSBjaGFydENsaWVudFdpZHRoO1xuICAgICAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gc2Nyb2xsV2lkdGgpIHtcbiAgICAgICAgICBsZWZ0ID0gc2Nyb2xsV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhsZWZ0KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGltZSB6b29tIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25UaW1lWm9vbUNoYW5nZSh0aW1lWm9vbSkge1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tID0gdGltZVpvb207XG4gICAgICB0aGlzLnJlY2FsY3VsYXRlVGltZXMoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3RlcHMoKTtcbiAgICAgIHRoaXMuZml4U2Nyb2xsUG9zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJvdyBoZWlnaHQgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblJvd0hlaWdodENoYW5nZShoZWlnaHQpIHtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLnN5bmNTY3JvbGxUb3AoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2NvcGUgY2hhbmdlIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblNjb3BlQ2hhbmdlKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlID0gdmFsdWU7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYWZ0ZXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW5pdFRpbWVzKCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0ZXBzKCk7XG4gICAgICB0aGlzLmNvbXB1dGVDYWxlbmRhcldpZHRocygpO1xuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGFzayBsaXN0IHdpZHRoIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25UYXNrTGlzdFdpZHRoQ2hhbmdlKHZhbHVlKSB7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudCA9IHZhbHVlO1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUYXNrIGxpc3QgY29sdW1uIHdpZHRoIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25UYXNrTGlzdENvbHVtbldpZHRoQ2hhbmdlKCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gc3BlY2lmaWVkIGV2ZW50IG5hbWVzXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZUV2ZW50cygpIHtcbiAgICAgIHRoaXMuJG9uKCdjaGFydC1zY3JvbGwtaG9yaXpvbnRhbCcsIHRoaXMub25TY3JvbGxDaGFydCk7XG4gICAgICB0aGlzLiRvbignY2hhcnQtc2Nyb2xsLXZlcnRpY2FsJywgdGhpcy5vblNjcm9sbENoYXJ0KTtcbiAgICAgIHRoaXMuJG9uKCdjaGFydC13aGVlbCcsIHRoaXMub25XaGVlbENoYXJ0KTtcbiAgICAgIHRoaXMuJG9uKCd0aW1lcy10aW1lWm9vbS1jaGFuZ2UnLCB0aGlzLm9uVGltZVpvb21DaGFuZ2UpO1xuICAgICAgdGhpcy4kb24oJ3Jvdy1oZWlnaHQtY2hhbmdlJywgdGhpcy5vblJvd0hlaWdodENoYW5nZSk7XG4gICAgICB0aGlzLiRvbignc2NvcGUtY2hhbmdlJywgdGhpcy5vblNjb3BlQ2hhbmdlKTtcbiAgICAgIHRoaXMuJG9uKCd0YXNrTGlzdC13aWR0aC1jaGFuZ2UnLCB0aGlzLm9uVGFza0xpc3RXaWR0aENoYW5nZSk7XG4gICAgICB0aGlzLiRvbigndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZScsIHRoaXMub25UYXNrTGlzdENvbHVtbldpZHRoQ2hhbmdlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBzb21lIGFjdGlvbiB3YXMgcGVyZm9ybWVkIChzY2FsZSBjaGFuZ2UgZm9yIGV4YW1wbGUpIC0gcmVjYWxjdWxhdGUgdGltZSB2YXJpYWJsZXNcbiAgICAgKi9cbiAgICByZWNhbGN1bGF0ZVRpbWVzKCkge1xuICAgICAgbGV0IG1heCA9IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lU2NhbGUgKiA2MDtcbiAgICAgIGxldCBtaW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlO1xuICAgICAgbGV0IHN0ZXBzID0gbWF4IC8gbWluO1xuICAgICAgbGV0IHBlcmNlbnQgPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVpvb20gLyAxMDA7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsID1cbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVTY2FsZSAqIHN0ZXBzICogcGVyY2VudCArIE1hdGgucG93KDIsIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lWm9vbSk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25NcyA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSkuZGlmZihcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSxcbiAgICAgICAgJ21pbGxpc2Vjb25kcydcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25QeCA9XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvbk1zIC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy53aWR0aCA9XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvblB4ICsgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRpbWUgdmFyaWFibGVzXG4gICAgICovXG4gICAgaW5pdFRpbWVzKCkge1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRhc2tUaW1lKVxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAgIC5zdWJ0cmFjdCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlLCAnZGF5cycpXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUYXNrVGltZSlcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXG4gICAgICAgIC5lbmRPZignZGF5JylcbiAgICAgICAgLmFkZCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYWZ0ZXIsICdkYXlzJylcbiAgICAgICAgLmVuZE9mKCdkYXknKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVRpbWVzKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBzdGVwc1xuICAgICAqIFN0ZXBzIGFyZSBkYXlzIGJ5IGRlZmF1bHRcbiAgICAgKiBFYWNoIHN0ZXAgY29udGFpbiBpbmZvcm1hdGlvbiBhYm91dCB0aW1lIG9mZnNldCBhbmQgcGl4ZWwgb2Zmc2V0IG9mIHRoaXMgdGltZSBpbnNpZGUgZ2FudHQgY2hhcnRcbiAgICAgKi9cbiAgICBjYWxjdWxhdGVTdGVwcygpIHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gW107XG4gICAgICBjb25zdCBsYXN0TXMgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpLnZhbHVlT2YoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSk7XG4gICAgICBzdGVwcy5wdXNoKHtcbiAgICAgICAgdGltZTogY3VycmVudERhdGUudmFsdWVPZigpLFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICBtczogMCxcbiAgICAgICAgICBweDogMFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpXG4gICAgICAgICAgLmFkZCgxLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcER1cmF0aW9uKVxuICAgICAgICAgIC5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgY3VycmVudERhdGUudmFsdWVPZigpIDw9IGxhc3RNcztcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBEdXJhdGlvbikuc3RhcnRPZignZGF5JylcbiAgICAgICkge1xuICAgICAgICBjb25zdCBvZmZzZXRNcyA9IGN1cnJlbnREYXRlLmRpZmYodGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSwgJ21pbGxpc2Vjb25kcycpO1xuICAgICAgICBjb25zdCBvZmZzZXRQeCA9IG9mZnNldE1zIC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHtcbiAgICAgICAgICB0aW1lOiBjdXJyZW50RGF0ZS52YWx1ZU9mKCksXG4gICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICBtczogb2Zmc2V0TXMsXG4gICAgICAgICAgICBweDogb2Zmc2V0UHhcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHN0ZXBzW3N0ZXBzLmxlbmd0aCAtIDFdO1xuICAgICAgICBwcmV2aW91c1N0ZXAud2lkdGggPSB7XG4gICAgICAgICAgbXM6IG9mZnNldE1zIC0gcHJldmlvdXNTdGVwLm9mZnNldC5tcyxcbiAgICAgICAgICBweDogb2Zmc2V0UHggLSBwcmV2aW91c1N0ZXAub2Zmc2V0LnB4XG4gICAgICAgIH07XG4gICAgICAgIHN0ZXBzLnB1c2goc3RlcCk7XG4gICAgICB9XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN0ZXBzW3N0ZXBzLmxlbmd0aCAtIDFdO1xuICAgICAgbGFzdFN0ZXAud2lkdGggPSB7XG4gICAgICAgIG1zOiB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25NcyAtIGxhc3RTdGVwLm9mZnNldC5tcyxcbiAgICAgICAgcHg6IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvblB4IC0gbGFzdFN0ZXAub2Zmc2V0LnB4XG4gICAgICB9O1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzID0gc3RlcHM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBjYWxlbmRhciB3aWR0aHMgLSB3aGVuIHNjYWxlIHdhcyBjaGFuZ2VkIGZvciBleGFtcGxlXG4gICAgICovXG4gICAgY29tcHV0ZUNhbGVuZGFyV2lkdGhzKCkge1xuICAgICAgdGhpcy5jb21wdXRlRGF5V2lkdGhzKCk7XG4gICAgICB0aGlzLmNvbXB1dGVIb3VyV2lkdGhzKCk7XG4gICAgICB0aGlzLmNvbXB1dGVNb250aFdpZHRocygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIHdpZHRoIG9mIGNhbGVuZGFyIGhvdXJzIGNvbHVtbiB3aWR0aHMgYmFzaW5nIG9uIHRleHQgd2lkdGhzXG4gICAgICovXG4gICAgY29tcHV0ZUhvdXJXaWR0aHMoKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSwgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLWhvdXInXSB9O1xuICAgICAgdGhpcy5zdGF0ZS5jdHguZm9udCA9IHN0eWxlWydmb250LXNpemUnXSArICcgJyArIHN0eWxlWydmb250LWZhbWlseSddO1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anMoJzIwMTgtMDEtMDFUMDA6MDA6MDAnKTsgLy8gYW55IGRhdGUgd2lsbCBiZSBnb29kIGZvciBob3Vyc1xuICAgICAgbGV0IG1heFdpZHRocyA9IHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLm1heFdpZHRocztcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLndpZHRocyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSAwO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8IDI0OyBob3VyKyspIHtcbiAgICAgICAgY29uc3Qgd2lkdGhzID0ge1xuICAgICAgICAgIGhvdXJcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0W2Zvcm1hdE5hbWVdKGN1cnJlbnREYXRlLnRvRGF0ZSgpKVxuICAgICAgICAgICkud2lkdGg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci53aWR0aHMucHVzaCh3aWR0aHMpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xuICAgICAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gd2lkdGhzW2Zvcm1hdE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdob3VyJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbXB1dGUgY2FsZW5kYXIgZGF5cyBjb2x1bW4gd2lkdGhzIGJhc2luZyBvbiB0ZXh0IHdpZHRoc1xuICAgICAqL1xuICAgIGNvbXB1dGVEYXlXaWR0aHMoKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSwgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLWRheSddIH07XG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbMF0udGltZSk7XG4gICAgICBsZXQgbWF4V2lkdGhzID0gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5tYXhXaWR0aHM7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRocyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IDA7XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGRheSA9IDAsIGRheXNMZW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXkgPCBkYXlzTGVuOyBkYXkrKykge1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB7XG4gICAgICAgICAgZGF5XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUudG9EYXRlKCkpXG4gICAgICAgICAgKS53aWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkud2lkdGhzLnB1c2god2lkdGhzKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xuICAgICAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gd2lkdGhzW2Zvcm1hdE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdkYXknKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9udGhzIGNvdW50XG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyBudW1iZXIgb2YgZGlmZmVyZW50IG1vbnRocyBpbiBzcGVjaWZpZWQgdGltZSByYW5nZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZyb21UaW1lIC0gZGF0ZSBpbiBtc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b1RpbWUgLSBkYXRlIGluIG1zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBkaWZmZXJlbnQgbW9udGhzIGNvdW50XG4gICAgICovXG4gICAgbW9udGhzQ291bnQoZnJvbVRpbWUsIHRvVGltZSkge1xuICAgICAgaWYgKGZyb21UaW1lID4gdG9UaW1lKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgbGV0IGN1cnJlbnRNb250aCA9IGRheWpzKGZyb21UaW1lKTtcbiAgICAgIGxldCBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoLmNsb25lKCk7XG4gICAgICBsZXQgbW9udGhzQ291bnQgPSAxO1xuICAgICAgd2hpbGUgKGN1cnJlbnRNb250aC52YWx1ZU9mKCkgPD0gdG9UaW1lKSB7XG4gICAgICAgIGN1cnJlbnRNb250aCA9IGN1cnJlbnRNb250aC5hZGQoMSwgJ2RheScpO1xuICAgICAgICBpZiAocHJldmlvdXNNb250aC5tb250aCgpICE9PSBjdXJyZW50TW9udGgubW9udGgoKSkge1xuICAgICAgICAgIG1vbnRoc0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC5jbG9uZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vbnRoc0NvdW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIG1vbnRoIGNhbGVuZGFyIGNvbHVtbnMgd2lkdGhzIGJhc2luZyBvbiB0ZXh0IHdpZHRoc1xuICAgICAqL1xuICAgIGNvbXB1dGVNb250aFdpZHRocygpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0geyAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dCddLCAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dC0tbW9udGgnXSB9O1xuICAgICAgdGhpcy5zdGF0ZS5jdHguZm9udCA9IHN0eWxlWydmb250LXNpemUnXSArICcgJyArIHN0eWxlWydmb250LWZhbWlseSddO1xuICAgICAgbGV0IG1heFdpZHRocyA9IHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5tYXhXaWR0aHM7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzID0gW107XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSAwO1xuICAgICAgfSk7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcbiAgICAgIGNvbnN0IG1vbnRoc0NvdW50ID0gdGhpcy5tb250aHNDb3VudCh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpO1xuICAgICAgZm9yIChsZXQgbW9udGggPSAwOyBtb250aCA8IG1vbnRoc0NvdW50OyBtb250aCsrKSB7XG4gICAgICAgIGNvbnN0IHdpZHRocyA9IHtcbiAgICAgICAgICBtb250aFxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZS50b0RhdGUoKSlcbiAgICAgICAgICApLndpZHRoO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRocy5wdXNoKHdpZHRocyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xuICAgICAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gd2lkdGhzW2Zvcm1hdE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdtb250aCcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHRpbWUgYW5kIGRhdGUgdmFyaWFibGVzIGZvciBnYW50dFxuICAgICAqL1xuICAgIHByZXBhcmVEYXRlcygpIHtcbiAgICAgIGxldCBmaXJzdFRhc2tUaW1lID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICBsZXQgbGFzdFRhc2tUaW1lID0gMDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gdGhpcy5zdGF0ZS50YXNrcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gdGhpcy5zdGF0ZS50YXNrc1tpbmRleF07XG4gICAgICAgIGlmICh0YXNrLnN0YXJ0VGltZSA8IGZpcnN0VGFza1RpbWUpIHtcbiAgICAgICAgICBmaXJzdFRhc2tUaW1lID0gdGFzay5zdGFydFRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2suc3RhcnRUaW1lICsgdGFzay5kdXJhdGlvbiA+IGxhc3RUYXNrVGltZSkge1xuICAgICAgICAgIGxhc3RUYXNrVGltZSA9IHRhc2suc3RhcnRUaW1lICsgdGFzay5kdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGFza1RpbWUgPSBmaXJzdFRhc2tUaW1lO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUYXNrVGltZSA9IGxhc3RUYXNrVGltZTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUgPSBkYXlqcyhmaXJzdFRhc2tUaW1lKVxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAgIC5zdWJ0cmFjdCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYmVmb3JlLCAnZGF5cycpXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lID0gZGF5anMobGFzdFRhc2tUaW1lKVxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcbiAgICAgICAgLmVuZE9mKCdkYXknKVxuICAgICAgICAuYWRkKHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5hZnRlciwgJ2RheXMnKVxuICAgICAgICAuZW5kT2YoJ2RheScpXG4gICAgICAgIC52YWx1ZU9mKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHVwIGFuZCBjYWxjdWxhdGUgZXZlcnl0aGluZ1xuICAgICAqL1xuICAgIHNldHVwKGl0c1VwZGF0ZSA9ICcnKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoaXRzVXBkYXRlKTtcbiAgICAgIHRoaXMucHJlcGFyZURhdGVzKCk7XG4gICAgICB0aGlzLmluaXRUaW1lcygpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVTdGVwcygpO1xuICAgICAgdGhpcy5jb21wdXRlQ2FsZW5kYXJXaWR0aHMoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aCA9IHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLnJlZHVjZShcbiAgICAgICAgKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4geyB3aWR0aDogcHJldi53aWR0aCArIGN1cnJlbnQud2lkdGggfTtcbiAgICAgICAgfSxcbiAgICAgICAgeyB3aWR0aDogMCB9XG4gICAgICApLndpZHRoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHbG9iYWwgcmVzaXplIGV2ZW50IChmcm9tIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKVxuICAgICAqL1xuICAgIGdsb2JhbE9uUmVzaXplKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRoaXMuJGVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCA9IHRoaXMuJGVsLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhGcm9tUGVyY2VudGFnZSA+XG4gICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoVGhyZXNob2xkXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGlmZiA9XG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgLVxuICAgICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoVGhyZXNob2xkO1xuICAgICAgICBsZXQgZGlmZlBlcmNlbnQgPSAxMDAgLSAoZGlmZiAvIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aEZyb21QZXJjZW50YWdlKSAqIDEwMDtcbiAgICAgICAgaWYgKGRpZmZQZXJjZW50IDwgMCkge1xuICAgICAgICAgIGRpZmZQZXJjZW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgPSBkaWZmUGVyY2VudDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgPSAxMDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICB0aGlzLiRlbWl0KCdjYWxlbmRhci1yZWNhbGN1bGF0ZScpO1xuICAgICAgdGhpcy5zeW5jU2Nyb2xsVG9wKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHZpc2libGUgdGFza3NcbiAgICAgKiBWZXJ5IGltcG9ydGFudCBtZXRob2Qgd2hpY2ggd2lsbCBicmluZyB1cyBvbmx5IHRob3NlIHRhc2tzIHRoYXQgYXJlIHZpc2libGUgaW5zaWRlIGdhbnR0IGNoYXJ0XG4gICAgICogRm9yIGV4YW1wbGUgd2hlbiB0YXNrIGlzIGNvbGxhcHNlZCAtIGNoaWxkcmVuIG9mIHRoaXMgdGFzayBhcmUgbm90IHZpc2libGUgLSB3ZSBzaG91bGQgbm90IHJlbmRlciB0aGVtXG4gICAgICovXG4gICAgdmlzaWJsZVRhc2tzKCkge1xuICAgICAgY29uc3QgdmlzaWJsZVRhc2tzID0gdGhpcy5zdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0aGlzLmlzVGFza1Zpc2libGUodGFzaykpO1xuICAgICAgY29uc3QgbWF4Um93cyA9IHZpc2libGVUYXNrcy5zbGljZSgwLCB0aGlzLnN0YXRlLm9wdGlvbnMubWF4Um93cyk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCA9IHRoaXMuZ2V0VGFza3NIZWlnaHQobWF4Um93cyk7XG4gICAgICBsZXQgaGVpZ2h0Q29tcGVuc2F0aW9uID0gMDtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ID4gdGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodCkge1xuICAgICAgICBoZWlnaHRDb21wZW5zYXRpb24gPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCAtIHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQ7XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodChtYXhSb3dzKSAtIGhlaWdodENvbXBlbnNhdGlvbjtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgPSB0aGlzLmdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcyk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMub3V0ZXJIZWlnaHQgPSB0aGlzLmdldEhlaWdodChtYXhSb3dzLCB0cnVlKSAtIGhlaWdodENvbXBlbnNhdGlvbjtcbiAgICAgIGxldCBsZW4gPSB2aXNpYmxlVGFza3MubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgdGFzayA9IHZpc2libGVUYXNrc1tpbmRleF07XG4gICAgICAgIHRhc2sud2lkdGggPVxuICAgICAgICAgIHRhc2suZHVyYXRpb24gLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsIC0gdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddO1xuICAgICAgICBpZiAodGFzay53aWR0aCA8IDApIHtcbiAgICAgICAgICB0YXNrLndpZHRoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0YXNrLmhlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0O1xuICAgICAgICB0YXNrLnggPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WCh0YXNrLnN0YXJ0VGltZSk7XG4gICAgICAgIHRhc2sueSA9XG4gICAgICAgICAgKHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ICsgdGhpcy5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyKSAqIGluZGV4ICtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2aXNpYmxlVGFza3M7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0eWxlIHNob3J0Y3V0XG4gICAgICovXG4gICAgc3R5bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5keW5hbWljU3R5bGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjb2x1bW5zIGFuZCBjb21wdXRlIGRpbWVuc2lvbnMgb24gdGhlIGZseVxuICAgICAqL1xuICAgIGdldFRhc2tMaXN0Q29sdW1ucygpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUYXNrcyB1c2VkIGZvciBjb21tdW5pY2F0ZSB3aXRoIHBhcmVudCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBvdXRwdXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCBwYXJlbnQgY29tcG9uZW50XG4gICAgICovXG4gICAgb3V0cHV0T3B0aW9ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnM7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXYXRjaCB0YXNrcyBhZnRlciBnYW50dCBpbnN0YW5jZSBpcyBjcmVhdGVkIGFuZCByZWFjdCB3aGVuIHdlIGhhdmUgbmV3IGtpZHMgb24gdGhlIGJsb2NrXG4gICAqL1xuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hUYXNrcyA9IHRoaXMuJHdhdGNoKFxuICAgICAgJ3Rhc2tzJyxcbiAgICAgIHRhc2tzID0+IHtcbiAgICAgICAgY29uc3Qgbm90RXF1YWwgPSBub3RFcXVhbERlZXAodGFza3MsIHRoaXMub3V0cHV0VGFza3MpO1xuICAgICAgICBpZiAobm90RXF1YWwpIHtcbiAgICAgICAgICB0aGlzLnNldHVwKCd0YXNrcycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBkZWVwOiBmYWxzZSB9XG4gICAgKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPcHRpb25zID0gdGhpcy4kd2F0Y2goXG4gICAgICAnb3B0aW9ucycsXG4gICAgICBvcHRzID0+IHtcbiAgICAgICAgY29uc3Qgbm90RXF1YWwgPSBub3RFcXVhbERlZXAob3B0cywgdGhpcy5vdXRwdXRPcHRpb25zKTtcbiAgICAgICAgaWYgKG5vdEVxdWFsKSB7XG4gICAgICAgICAgdGhpcy5zZXR1cCgnb3B0aW9ucycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBkZWVwOiBmYWxzZSB9XG4gICAgKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hTdHlsZSA9IHRoaXMuJHdhdGNoKFxuICAgICAgJ2R5bmFtaWNTdHlsZScsXG4gICAgICBzdHlsZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdEVxdWFsID0gbm90RXF1YWxEZWVwKHN0eWxlLCB0aGlzLmR5bmFtaWNTdHlsZSk7XG4gICAgICAgIGlmIChub3RFcXVhbCkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0eWxlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGRlZXA6IHRydWUsIGltbWVkaWF0ZTogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFRhc2tzID0gdGhpcy4kd2F0Y2goXG4gICAgICAnb3V0cHV0VGFza3MnLFxuICAgICAgdGFza3MgPT4ge1xuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0aGlzLnRhc2tzLCB0YXNrcyk7XG4gICAgICAgIGlmIChub3RFcXVhbCAmJiB0aGlzLnN0YXRlLmVtaXRUYXNrc0NoYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCd0YXNrcy11cGRhdGVkJywgdGFza3MubWFwKHRhc2sgPT4gdGFzaykpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBkZWVwOiB0cnVlIH1cbiAgICApO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dE9wdGlvbnMgPSB0aGlzLiR3YXRjaChcbiAgICAgICdvdXRwdXRPcHRpb25zJyxcbiAgICAgIG9wdGlvbnMgPT4ge1xuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAobm90RXF1YWwgJiYgdGhpcy5zdGF0ZS5lbWl0T3B0aW9uc0NoYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdvcHRpb25zLXVwZGF0ZWQnLCBtZXJnZURlZXAoe30sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtY3JlYXRlZCcsIHRoaXMpO1xuICAgIHRoaXMuJGVtaXQoJ2NyZWF0ZWQnLCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogRW1pdCBiZWZvcmUtbW91bnQgZXZlbnRcbiAgICovXG4gIGJlZm9yZU1vdW50KCkge1xuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS1tb3VudCcsIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0IHJlYWR5L21vdW50ZWQgZXZlbnRzIGFuZCBkZWxpdmVyIHRoaXMgZ2FudHQgaW5zdGFuY2UgdG8gb3V0c2lkZSB3b3JsZCB3aGVuIG5lZWRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcbiAgICB0aGlzLnN0YXRlLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5nbG9iYWxPblJlc2l6ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICB0aGlzLmdsb2JhbE9uUmVzaXplKCk7XG4gICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2FudHQtZWxhc3RpYy1tb3VudGVkJywgdGhpcyk7XG4gICAgdGhpcy4kZW1pdCgnbW91bnRlZCcpO1xuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtcmVhZHknLCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogRW1pdCBldmVudCB3aGVuIGRhdGEgd2FzIGNoYW5nZWQgYW5kIGJlZm9yZSB1cGRhdGUgKHlvdSBjYW4gY2xlYW51cCBkb20gZXZlbnRzIGhlcmUgZm9yIGV4YW1wbGUpXG4gICAqL1xuICBiZWZvcmVVcGRhdGUoKSB7XG4gICAgdGhpcy4kZW1pdCgnYmVmb3JlLXVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0IGV2ZW50IHdoZW4gZ2FudHQtZWxhc3RpYyB2aWV3IHdhcyB1cGRhdGVkXG4gICAqL1xuICB1cGRhdGVkKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZWQnKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhbiB1cFxuICAgKi9cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hUYXNrcygpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE9wdGlvbnMoKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hTdHlsZSgpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFRhc2tzKCk7XG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0T3B0aW9ucygpO1xuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS1kZXN0cm95Jyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgYWZ0ZXIgZ2FudHQtZWxhc3RpYyB3YXMgZGVzdHJveWVkXG4gICAqL1xuICBkZXN0cm95ZWQoKSB7XG4gICAgdGhpcy4kZW1pdCgnZGVzdHJveWVkJyk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBHYW50dEVsYXN0aWM7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmdhbnR0LWVsYXN0aWMgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtaG9yaXpvbnRhbC1saW5lLFxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtdmVydGljYWwtbGluZSB7XG4gIHN0cm9rZTogI2EwYTBhMDtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuZm9yZWlnbk9iamVjdCA+ICoge1xuICBtYXJnaW46IDBweDtcbn1cbi5nYW50dC1lbGFzdGljIC5wLTIge1xuICBwYWRkaW5nOiAxMHJlbTtcbn1cbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXctbWFpbi1jb250YWluZXIsXG4uZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWNvbHVtbjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwNTA7XG59XG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA1MDtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuPC9zdHlsZT5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBDYWxlbmRhciBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jYWxlbmRhci13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXdyYXBwZXInXSwgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcgfVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyJ10sIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnIH1cIj5cbiAgICAgIDxjYWxlbmRhci1yb3cgOml0ZW1zPVwiZGF0ZXMubW9udGhzXCIgd2hpY2g9XCJtb250aFwiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZGlzcGxheVwiPjwvY2FsZW5kYXItcm93PlxuICAgICAgPGNhbGVuZGFyLXJvdyA6aXRlbXM9XCJkYXRlcy5kYXlzXCIgd2hpY2g9XCJkYXlcIiB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5XCI+PC9jYWxlbmRhci1yb3c+XG4gICAgICA8Y2FsZW5kYXItcm93IDppdGVtcz1cImRhdGVzLmhvdXJzXCIgd2hpY2g9XCJob3VyXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXlcIj48L2NhbGVuZGFyLXJvdz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBDYWxlbmRhclJvdyBmcm9tICcuL0NhbGVuZGFyUm93LnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDYWxlbmRhcicsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDYWxlbmRhclJvd1xuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgaG91cnMgd2lsbCBmaXQ/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGhvd01hbnlIb3Vyc0ZpdChkYXlJbmRleCkge1xuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxTcGFjZSA9IHN0cm9rZSArIDI7XG4gICAgICBsZXQgZnVsbENlbGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2RheUluZGV4XS53aWR0aC5weDtcbiAgICAgIGxldCBmb3JtYXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KTtcbiAgICAgIGZvciAobGV0IGhvdXJzID0gMjQ7IGhvdXJzID4gMTsgaG91cnMgPSBNYXRoLmNlaWwoaG91cnMgLyAyKSkge1xuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlKSAqIGhvdXJzIDw9IGZ1bGxDZWxsV2lkdGggJiZcbiAgICAgICAgICAgIGhvdXJzID4gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY291bnQ6IGhvdXJzLFxuICAgICAgICAgICAgICB0eXBlOiBmb3JtYXROYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIHR5cGU6ICcnXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSBkYXlzIHdpbGwgZml0P1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBob3dNYW55RGF5c0ZpdCgpIHtcbiAgICAgIGNvbnN0IHN0cm9rZSA9IDE7XG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3BhY2UgPSBzdHJva2UgKyAyO1xuICAgICAgbGV0IGZ1bGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoO1xuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdCk7XG4gICAgICBmb3IgKGxldCBkYXlzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXlzID4gMTsgZGF5cyA9IE1hdGguY2VpbChkYXlzIC8gMikpIHtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlKSAqIGRheXMgPD0gZnVsbFdpZHRoICYmXG4gICAgICAgICAgICBkYXlzID4gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY291bnQ6IGRheXMsXG4gICAgICAgICAgICAgIHR5cGU6IGZvcm1hdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgdHlwZTogJydcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IG1vbnRocyB3aWxsIGZpdD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgaG93TWFueU1vbnRoc0ZpdCgpIHtcbiAgICAgIGNvbnN0IHN0cm9rZSA9IDE7XG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3BhY2UgPSBzdHJva2UgKyAyO1xuICAgICAgbGV0IGZ1bGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoO1xuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KTtcbiAgICAgIGxldCBjdXJyZW50TW9udGggPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpO1xuICAgICAgbGV0IHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcbiAgICAgIGNvbnN0IGxhc3RUaW1lID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWU7XG4gICAgICBsZXQgbW9udGhzQ291bnQgPSB0aGlzLnJvb3QubW9udGhzQ291bnQoXG4gICAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSxcbiAgICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWVcbiAgICAgICk7XG4gICAgICBmb3IgKGxldCBtb250aHMgPSBtb250aHNDb3VudDsgbW9udGhzID4gMTsgbW9udGhzID0gTWF0aC5jZWlsKG1vbnRocyAvIDIpKSB7XG4gICAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgb2YgZm9ybWF0TmFtZXMpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlKSAqIG1vbnRocyA8PSBmdWxsV2lkdGggJiZcbiAgICAgICAgICAgIG1vbnRocyA+IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvdW50OiBtb250aHMsXG4gICAgICAgICAgICAgIHR5cGU6IGZvcm1hdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgdHlwZTogZm9ybWF0TmFtZXNbMF1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGhvdXJzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgZ2VuZXJhdGVIb3VycygpIHtcbiAgICAgIGxldCBhbGxIb3VycyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIGFsbEhvdXJzO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaG91ckluZGV4ID0gMCwgbGVuID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBob3VySW5kZXggPCBsZW47IGhvdXJJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJzQ291bnQgPSB0aGlzLmhvd01hbnlIb3Vyc0ZpdChob3VySW5kZXgpO1xuICAgICAgICBpZiAoaG91cnNDb3VudC5jb3VudCA9PT0gMCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhvdXJzID0geyBrZXk6IGhvdXJJbmRleCArICdzdGVwJywgY2hpbGRyZW46IFtdIH07XG4gICAgICAgIGNvbnN0IGhvdXJTdGVwID0gMjQgLyBob3Vyc0NvdW50LmNvdW50O1xuICAgICAgICBjb25zdCBob3VyV2lkdGhQeCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2hvdXJJbmRleF0ud2lkdGgucHggLyBob3Vyc0NvdW50LmNvdW50O1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaG91cnNDb3VudC5jb3VudDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2hvdXJJbmRleF0udGltZSkuYWRkKGkgKiBob3VyU3RlcCwgJ2hvdXInKTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBob3VySW5kZXg7XG4gICAgICAgICAgaWYgKGhvdXJJbmRleCA+IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gaG91ckluZGV4IC0gTWF0aC5mbG9vcihob3VySW5kZXggLyAyNCkgKiAyNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHRleHRXaWR0aCA9IDA7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLndpZHRoc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0ZXh0V2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLndpZHRoc1tpbmRleF1baG91cnNDb3VudC50eXBlXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tob3VySW5kZXhdLm9mZnNldC5weCArIGhvdXJXaWR0aFB4ICogaTtcbiAgICAgICAgICBob3Vycy5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBob3VySW5kZXgsXG4gICAgICAgICAgICBrZXk6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2hvdXJJbmRleF0udGltZSArICdoJyArIGksXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmhlaWdodCArIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiBob3VyV2lkdGhQeCxcbiAgICAgICAgICAgIHRleHRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5oZWlnaHQsXG4gICAgICAgICAgICBsYWJlbDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXRbaG91cnNDb3VudC50eXBlXShkYXRlLnRvRGF0ZSgpKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFsbEhvdXJzLnB1c2goaG91cnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsbEhvdXJzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBkYXlzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgZ2VuZXJhdGVEYXlzKCkge1xuICAgICAgbGV0IGRheXMgPSBbXTtcbiAgICAgIGlmICghdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXlzQ291bnQgPSB0aGlzLmhvd01hbnlEYXlzRml0KCk7XG4gICAgICBpZiAoZGF5c0NvdW50LmNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF5U3RlcCA9IE1hdGguY2VpbCh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5sZW5ndGggLyBkYXlzQ291bnQuY291bnQpO1xuICAgICAgZm9yIChsZXQgZGF5SW5kZXggPSAwLCBsZW4gPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5sZW5ndGg7IGRheUluZGV4IDwgbGVuOyBkYXlJbmRleCArPSBkYXlTdGVwKSB7XG4gICAgICAgIGxldCBkYXlXaWR0aFB4ID0gMDtcbiAgICAgICAgLy8gZGF5IGNvdWxkIGJlIHNob3J0ZXIgKGRheWxpZ2h0IHNhdmluZyB0aW1lKSBzbyBqb2luIHdpZHRocyBhbmQgZGl2aWRlXG4gICAgICAgIGZvciAobGV0IGN1cnJlbnRTdGVwID0gMDsgY3VycmVudFN0ZXAgPCBkYXlTdGVwOyBjdXJyZW50U3RlcCsrKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRheVdpZHRoUHggKz0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbZGF5SW5kZXggKyBjdXJyZW50U3RlcF0ud2lkdGgucHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tkYXlJbmRleF0udGltZSk7XG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSAwO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHNbZGF5SW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRleHRXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHNbZGF5SW5kZXhdW2RheXNDb3VudC50eXBlXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2RheUluZGV4XS5vZmZzZXQucHg7XG4gICAgICAgIGRheXMucHVzaCh7XG4gICAgICAgICAgaW5kZXg6IGRheUluZGV4LFxuICAgICAgICAgIGtleTogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbZGF5SW5kZXhdLnRpbWUgKyAnZCcsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5oZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IGRheVdpZHRoUHgsXG4gICAgICAgICAgdGV4dFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmhlaWdodCxcbiAgICAgICAgICBsYWJlbDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdFtkYXlzQ291bnQudHlwZV0oZGF0ZS50b0RhdGUoKSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF5cy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIG1vbnRoc1xuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGdlbmVyYXRlTW9udGhzKCkge1xuICAgICAgbGV0IG1vbnRocyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5KSB7XG4gICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICB9XG4gICAgICBjb25zdCBtb250aHNDb3VudCA9IHRoaXMuaG93TWFueU1vbnRoc0ZpdCgpO1xuICAgICAgaWYgKG1vbnRoc0NvdW50LmNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICB9XG4gICAgICBsZXQgZm9ybWF0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpO1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcbiAgICAgIGZvciAobGV0IG1vbnRoSW5kZXggPSAwOyBtb250aEluZGV4IDwgbW9udGhzQ291bnQuY291bnQ7IG1vbnRoSW5kZXgrKykge1xuICAgICAgICBsZXQgbW9udGhXaWR0aCA9IDA7XG4gICAgICAgIGxldCBtb250aE9mZnNldCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBsZXQgZmluYWxEYXRlID0gZGF5anMoY3VycmVudERhdGUpXG4gICAgICAgICAgLmFkZCgxLCAnbW9udGgnKVxuICAgICAgICAgIC5zdGFydE9mKCdtb250aCcpO1xuICAgICAgICBpZiAoZmluYWxEYXRlLnZhbHVlT2YoKSA+IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKSB7XG4gICAgICAgICAgZmluYWxEYXRlID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG11c3QgZmluZCBmaXJzdCBhbmQgbGFzdCBzdGVwIHRvIGdldCB0aGUgb2Zmc2V0cyAvIHdpZHRoc1xuICAgICAgICBmb3IgKGxldCBzdGVwID0gMCwgbGVuID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBzdGVwIDwgbGVuOyBzdGVwKyspIHtcbiAgICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tzdGVwXTtcbiAgICAgICAgICBpZiAoY3VycmVudFN0ZXAudGltZSA+PSBjdXJyZW50RGF0ZS52YWx1ZU9mKCkgJiYgY3VycmVudFN0ZXAudGltZSA8IGZpbmFsRGF0ZS52YWx1ZU9mKCkpIHtcbiAgICAgICAgICAgIG1vbnRoV2lkdGggKz0gY3VycmVudFN0ZXAud2lkdGgucHg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0ZXAub2Zmc2V0LnB4IDwgbW9udGhPZmZzZXQpIHtcbiAgICAgICAgICAgICAgbW9udGhPZmZzZXQgPSBjdXJyZW50U3RlcC5vZmZzZXQucHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBsYWJlbCA9ICcnO1xuICAgICAgICBsZXQgY2hvb3NlbkZvcm1hdE5hbWU7XG4gICAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgb2YgZm9ybWF0TmFtZXMpIHtcbiAgICAgICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgMiA8PSBtb250aFdpZHRoKSB7XG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZS50b0RhdGUoKSk7XG4gICAgICAgICAgICBjaG9vc2VuRm9ybWF0TmFtZSA9IGZvcm1hdE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSAwO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRoc1ttb250aEluZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0ZXh0V2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC53aWR0aHNbbW9udGhJbmRleF1bY2hvb3NlbkZvcm1hdE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gbW9udGhPZmZzZXQ7XG4gICAgICAgIG1vbnRocy5wdXNoKHtcbiAgICAgICAgICBpbmRleDogbW9udGhJbmRleCxcbiAgICAgICAgICBrZXk6IG1vbnRoSW5kZXggKyAnbScsXG4gICAgICAgICAgeCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIHdpZHRoOiBtb250aFdpZHRoLFxuICAgICAgICAgIHRleHRXaWR0aCxcbiAgICAgICAgICBjaG9vc2VuRm9ybWF0TmFtZSxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmhlaWdodCxcbiAgICAgICAgICBsYWJlbFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgJ21vbnRoJykuc3RhcnRPZignbW9udGgnKTtcbiAgICAgICAgaWYgKGN1cnJlbnREYXRlLnZhbHVlT2YoKSA+IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKSB7XG4gICAgICAgICAgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtb250aHMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAga2V5OiBpdGVtLmtleSxcbiAgICAgICAgY2hpbGRyZW46IFtpdGVtXVxuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdW0gYWxsIGNhbGVuZGFyIHJvd3MgaGVpZ2h0IGFuZCByZXR1cm4gcmVzdWx0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZUNhbGVuZGFyRGltZW5zaW9ucyh7IGhvdXJzLCBkYXlzLCBtb250aHMgfSkge1xuICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5kaXNwbGF5ICYmIGhvdXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5ICYmIGRheXMubGVuZ3RoID4gMCkge1xuICAgICAgICBoZWlnaHQgKz0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5ICYmIG1vbnRocy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGhlaWdodCArPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgZGF0ZXMoKSB7XG4gICAgICBjb25zdCBob3VycyA9IHRoaXMuZ2VuZXJhdGVIb3VycygpO1xuICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2VuZXJhdGVEYXlzKCk7XG4gICAgICBjb25zdCBtb250aHMgPSB0aGlzLmdlbmVyYXRlTW9udGhzKCk7XG4gICAgICBjb25zdCBhbGxEYXRlcyA9IHsgaG91cnMsIGRheXMsIG1vbnRocyB9O1xuICAgICAgdGhpcy5jYWxjdWxhdGVDYWxlbmRhckRpbWVuc2lvbnMoYWxsRGF0ZXMpO1xuICAgICAgcmV0dXJuIGFsbERhdGVzO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENhbGVuZGFyUm93IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdyBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctLScgKyB3aGljaFwiIDpzdHlsZT1cInJvd1N0eWxlXCI+XG4gICAgPGRpdlxuICAgICAgdi1mb3I9XCIoaXRlbSwgaXRlbUluZGV4KSBpbiBpdGVtc1wiXG4gICAgICA6a2V5PVwiaXRlbS5rZXlcIlxuICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgd2hpY2hcIlxuICAgICAgOnN0eWxlPVwicmVjdFN0eWxlXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tJyArIHdoaWNoXCJcbiAgICAgICAgdi1mb3I9XCIoY2hpbGQsIGNoaWxkSW5kZXgpIGluIGl0ZW0uY2hpbGRyZW5cIlxuICAgICAgICA6a2V5PVwiY2hpbGQua2V5XCJcbiAgICAgICAgOnN0eWxlPVwicmVjdENoaWxkU3R5bGVbaXRlbUluZGV4XVtjaGlsZEluZGV4XVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICA6Y2xhc3M9XCInZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXRleHQgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXRleHQtLScgKyB3aGljaFwiXG4gICAgICAgICAgOnN0eWxlPVwidGV4dFN0eWxlKGNoaWxkKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjaGlsZC5sYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDYWxlbmRhclJvdycsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ2l0ZW1zJywgJ3doaWNoJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHggcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VGV4dFgoaXRlbSkge1xuICAgICAgbGV0IHggPSBpdGVtLnggKyBpdGVtLndpZHRoIC8gMiAtIGl0ZW0udGV4dFdpZHRoIC8gMjtcbiAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnICYmIHRoaXMucm9vdC5pc0luc2lkZVZpZXdQb3J0KGl0ZW0ueCwgaXRlbS53aWR0aCwgMCkpIHtcbiAgICAgICAgbGV0IHNjcm9sbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0IC0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQ7XG4gICAgICAgIHggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCArIHNjcm9sbFdpZHRoIC8gMiAtIGl0ZW0udGV4dFdpZHRoIC8gMiArIDI7XG4gICAgICAgIGlmICh4ICsgaXRlbS50ZXh0V2lkdGggKyAyID4gaXRlbS54ICsgaXRlbS53aWR0aCkge1xuICAgICAgICAgIHggPSBpdGVtLnggKyBpdGVtLndpZHRoIC0gaXRlbS50ZXh0V2lkdGggLSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPCBpdGVtLngpIHtcbiAgICAgICAgICB4ID0gaXRlbS54ICsgMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHggLSBpdGVtLng7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHJvd1N0eWxlKCkge1xuICAgICAgcmV0dXJuIHsgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3cnXSwgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctLScgKyB0aGlzLndoaWNoXSB9O1xuICAgIH0sXG4gICAgcmVjdFN0eWxlKCkge1xuICAgICAgcmV0dXJuIHsgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdCddLCAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgdGhpcy53aGljaF0gfTtcbiAgICB9LFxuICAgIHJlY3RDaGlsZFN0eWxlKCkge1xuICAgICAgY29uc3QgYmFzaWNTdHlsZSA9IHtcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC1jaGlsZCddLFxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS0nICsgdGhpcy53aGljaF1cbiAgICAgIH07XG4gICAgICBjb25zdCBzdHlsZSA9IFtdO1xuICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuU3R5bGUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgIGNoaWxkcmVuU3R5bGUucHVzaCh7XG4gICAgICAgICAgICAuLi5iYXNpY1N0eWxlLFxuICAgICAgICAgICAgd2lkdGg6IGNoaWxkLndpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDogY2hpbGQuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLnB1c2goY2hpbGRyZW5TdHlsZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgICB0ZXh0U3R5bGUoKSB7XG4gICAgICBjb25zdCBiYXNpY1N0eWxlID0ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy10ZXh0J10sXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLScgKyB0aGlzLndoaWNoXVxuICAgICAgfTtcbiAgICAgIHJldHVybiBjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyAuLi5iYXNpY1N0eWxlIH07XG4gICAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnKSB7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IHRoaXMuZ2V0VGV4dFgoY2hpbGQpICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENoYXJ0IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydFwiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQnXSB9XCIgcmVmPVwiY2hhcnRcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnQtZWxhc3RpY19fY2hhcnQtY2FsZW5kYXItY29udGFpbmVyXCJcbiAgICAgIHJlZj1cImNoYXJ0Q2FsZW5kYXJDb250YWluZXJcIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1jYWxlbmRhci1jb250YWluZXInXSxcbiAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgJ21hcmdpbi1ib3R0b20nOiByb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgJ3B4J1xuICAgICAgfVwiXG4gICAgPlxuICAgICAgPGNhbGVuZGFyPjwvY2FsZW5kYXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJnYW50LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLWNvbnRhaW5lclwiXG4gICAgICByZWY9XCJjaGFydEdyYXBoQ29udGFpbmVyXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZ3JhcGgtY29udGFpbmVyJ10sXG4gICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyAncHgnXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1hcmVhJ10sXG4gICAgICAgICAgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArICdweCdcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoXCJcbiAgICAgICAgICByZWY9XCJjaGFydEdyYXBoXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWdyYXBoJ10sIGhlaWdodDogJzEwMCUnIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1ncmFwaC1zdmdcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1ncmFwaC1zdmcnXSB9XCJcbiAgICAgICAgICAgIHJlZj1cImNoYXJ0R3JhcGhTdmdcIlxuICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgeT1cIjBcIlxuICAgICAgICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4J1wiXG4gICAgICAgICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArICdweCdcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRheXMtaGlnaGxpZ2h0PjwvZGF5cy1oaWdobGlnaHQ+XG4gICAgICAgICAgICA8Z3JpZD48L2dyaWQ+XG4gICAgICAgICAgICA8ZGVwZW5kZW5jeS1saW5lcyA6dGFza3M9XCJyb290LnZpc2libGVUYXNrc1wiPjwvZGVwZW5kZW5jeS1saW5lcz5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXdyYXBwZXJcIlxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy13cmFwcGVyJ10gfVwiXG4gICAgICAgICAgICAgIHYtZm9yPVwidGFzayBpbiByb290LnZpc2libGVUYXNrc1wiXG4gICAgICAgICAgICAgIDp0YXNrPVwidGFza1wiXG4gICAgICAgICAgICAgIDprZXk9XCJ0YXNrLmlkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGNvbXBvbmVudCA6dGFzaz1cInRhc2tcIiA6aXM9XCJ0YXNrLnR5cGVcIj48L2NvbXBvbmVudD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLnZ1ZSc7XG5pbXBvcnQgRGF5c0hpZ2hsaWdodCBmcm9tICcuL0RheXNIaWdobGlnaHQudnVlJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuLi9DYWxlbmRhci9DYWxlbmRhci52dWUnO1xuaW1wb3J0IERlcGVuZGVuY3lMaW5lcyBmcm9tICcuL0RlcGVuZGVuY3lMaW5lcy52dWUnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9Sb3cvVGFzay52dWUnO1xuaW1wb3J0IE1pbGVzdG9uZSBmcm9tICcuL1Jvdy9NaWxlc3RvbmUudnVlJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUm93L1Byb2plY3QudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NoYXJ0JyxcbiAgY29tcG9uZW50czoge1xuICAgIEdyaWQsXG4gICAgRGVwZW5kZW5jeUxpbmVzLFxuICAgIENhbGVuZGFyLFxuICAgIFRhc2ssXG4gICAgTWlsZXN0b25lLFxuICAgIFByb2plY3QsXG4gICAgRGF5c0hpZ2hsaWdodFxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb3Zpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIE1vdW50ZWRcbiAgICovXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnQgPSB0aGlzLiRyZWZzLmNoYXJ0O1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0Q2FsZW5kYXJDb250YWluZXIgPSB0aGlzLiRyZWZzLmNoYXJ0Q2FsZW5kYXJDb250YWluZXI7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRHcmFwaENvbnRhaW5lciA9IHRoaXMuJHJlZnMuY2hhcnRHcmFwaENvbnRhaW5lcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydEdyYXBoID0gdGhpcy4kcmVmcy5jaGFydEdyYXBoO1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGhTdmcgPSB0aGlzLiRyZWZzLmNoYXJ0R3JhcGhTdmc7XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBib3hcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Vmlld0JveCgpIHtcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGh9ICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0fWA7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRGF5cyBoaWdobGlnaHQgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cblxuPHRlbXBsYXRlPlxuICA8Z1xuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGF5cy1oaWdobGlnaHQtY29udGFpbmVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRheXMtaGlnaGxpZ2h0LWNvbnRhaW5lciddIH1cIlxuICAgIHYtaWY9XCJzaG93V29ya2luZ0RheXNcIlxuICA+XG4gICAgPHJlY3RcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdFwiXG4gICAgICB2LWZvcj1cImRheSBpbiB3b3JraW5nRGF5c1wiXG4gICAgICA6a2V5PVwiZ2V0S2V5KGRheSlcIlxuICAgICAgOng9XCJkYXkub2Zmc2V0LnB4XCJcbiAgICAgIHk9XCIwXCJcbiAgICAgIDp3aWR0aD1cImRheS53aWR0aC5weFwiXG4gICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdCddIH1cIlxuICAgID48L3JlY3Q+XG4gIDwvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGF5c0hpZ2hsaWdodCcsXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRheVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGtleSBpZGVpbnRpZmllciBmb3IgbG9vcFxuICAgICAqL1xuICAgIGdldEtleShkYXkpIHtcbiAgICAgIHJldHVybiBkYXlqcyhkYXkudGltZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCB3b3JraW5nIGRheXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICB3b3JraW5nRGF5cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5maWx0ZXIoc3RlcCA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci53b3JraW5nRGF5cy5pbmRleE9mKGRheWpzKHN0ZXAudGltZSkuZGF5KCkpID09PSAtMTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93IHdvcmtpbmcgZGF5cz9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sfVxuICAgICAqL1xuICAgIHNob3dXb3JraW5nRGF5cygpIHtcbiAgICAgIGNvbnN0IGNhbGVuZGFyID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXI7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBjYWxlbmRhci53b3JraW5nRGF5cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShjYWxlbmRhci53b3JraW5nRGF5cykgJiZcbiAgICAgICAgY2FsZW5kYXIud29ya2luZ0RheXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRGVwZW5kZW5jeUxpbmVzIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxzdmdcbiAgICB4PVwiMFwiXG4gICAgeT1cIjBcIlxuICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1kZXBlbmRlbmN5LWxpbmVzLWNvbnRhaW5lclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kZXBlbmRlbmN5LWxpbmVzLWNvbnRhaW5lciddIH1cIlxuICA+XG4gICAgPGcgdi1mb3I9XCJ0YXNrIGluIGRlcGVuZGVuY3lUYXNrc1wiIDprZXk9XCJ0YXNrLmlkXCIgOnRhc2s9XCJ0YXNrXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aFwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aCddIH1cIlxuICAgICAgICB2LWZvcj1cImRlcGVuZGVuY3lMaW5lIGluIHRhc2suZGVwZW5kZW5jeUxpbmVzXCJcbiAgICAgICAgOmtleT1cImRlcGVuZGVuY3lMaW5lLmlkXCJcbiAgICAgICAgOnRhc2s9XCJ0YXNrXCJcbiAgICAgICAgOmQ9XCJkZXBlbmRlbmN5TGluZS5wb2ludHNcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0RlcGVuZGVuY3lMaW5lcycsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ3Rhc2tzJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHBhdGggcG9pbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZnJvbVRhc2tJZFxuICAgICAqIEBwYXJhbSB7YW55fSB0b1Rhc2tJZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UG9pbnRzKGZyb21UYXNrSWQsIHRvVGFza0lkKSB7XG4gICAgICBjb25zdCBmcm9tVGFzayA9IHRoaXMucm9vdC5nZXRUYXNrKGZyb21UYXNrSWQpO1xuICAgICAgY29uc3QgdG9UYXNrID0gdGhpcy5yb290LmdldFRhc2sodG9UYXNrSWQpO1xuICAgICAgaWYgKFxuICAgICAgICBmcm9tVGFzayA9PT0gbnVsbCB8fFxuICAgICAgICB0b1Rhc2sgPT09IG51bGwgfHxcbiAgICAgICAgIXRoaXMucm9vdC5pc1Rhc2tWaXNpYmxlKHRvVGFzaykgfHxcbiAgICAgICAgIXRoaXMucm9vdC5pc1Rhc2tWaXNpYmxlKGZyb21UYXNrKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRYID0gZnJvbVRhc2sueCArIGZyb21UYXNrLndpZHRoO1xuICAgICAgY29uc3Qgc3RhcnRZID0gZnJvbVRhc2sueSArIGZyb21UYXNrLmhlaWdodCAvIDI7XG4gICAgICBjb25zdCBzdG9wWCA9IHRvVGFzay54O1xuICAgICAgY29uc3Qgc3RvcFkgPSB0b1Rhc2sueSArIHRvVGFzay5oZWlnaHQgLyAyO1xuICAgICAgY29uc3QgZGlzdGFuY2VYID0gc3RvcFggLSBzdGFydFg7XG4gICAgICBsZXQgZGlzdGFuY2VZO1xuICAgICAgbGV0IHlNdWx0aXBsaWVyID0gMTtcbiAgICAgIGlmIChzdG9wWSA+PSBzdGFydFkpIHtcbiAgICAgICAgZGlzdGFuY2VZID0gc3RvcFkgLSBzdGFydFk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXN0YW5jZVkgPSBzdGFydFkgLSBzdG9wWTtcbiAgICAgICAgeU11bHRpcGxpZXIgPSAtMTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9IDEwO1xuICAgICAgY29uc3Qgcm91bmRuZXNzID0gNDtcbiAgICAgIGNvbnN0IGlzQmVmb3JlID0gZGlzdGFuY2VYIDw9IG9mZnNldCArIHJvdW5kbmVzcztcbiAgICAgIGxldCBwb2ludHMgPSBgTSAke3N0YXJ0WH0gJHtzdGFydFl9XG4gICAgICAgICAgTCAke3N0YXJ0WCArIG9mZnNldH0sJHtzdGFydFl9IGA7XG4gICAgICBpZiAoaXNCZWZvcmUpIHtcbiAgICAgICAgcG9pbnRzICs9IGBRICR7c3RhcnRYICsgb2Zmc2V0ICsgcm91bmRuZXNzfSwke3N0YXJ0WX0gJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZICtcbiAgICAgICAgICByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cbiAgICAgICAgICAgIEwgJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDIgLSByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cbiAgICAgICAgICAgIFEgJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDJ9ICR7c3RhcnRYICsgb2Zmc2V0fSwke3N0YXJ0WSArXG4gICAgICAgICAgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDJ9XG4gICAgICAgICAgICBMICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfVxuICAgICAgICAgICAgUSAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWCAtIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn0gJHtzdGFydFggLVxuICAgICAgICAgIG9mZnNldCArXG4gICAgICAgICAgZGlzdGFuY2VYIC1cbiAgICAgICAgICByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDIgKyByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cbiAgICAgICAgICAgIEwgJHtzdGFydFggLSBvZmZzZXQgKyBkaXN0YW5jZVggLSByb3VuZG5lc3N9LCR7c3RvcFkgLSByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cbiAgICAgICAgICAgIFEgJHtzdGFydFggLSBvZmZzZXQgKyBkaXN0YW5jZVggLSByb3VuZG5lc3N9LCR7c3RvcFl9ICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYfSwke3N0b3BZfVxuICAgICAgICAgICAgTCAke3N0b3BYfSwke3N0b3BZfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb2ludHMgKz0gYEwgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyIC0gcm91bmRuZXNzfSwke3N0YXJ0WX1cbiAgICAgICAgICAgIFEgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0YXJ0WX0gJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0YXJ0WSArIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxuICAgICAgICAgICAgTCAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDJ9LCR7c3RvcFkgLSByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cbiAgICAgICAgICAgIFEgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0b3BZfSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDIgKyByb3VuZG5lc3N9LCR7c3RvcFl9XG4gICAgICAgICAgICBMICR7c3RvcFh9LCR7c3RvcFl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwb2ludHM7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCB0YXNrcyB3aGljaCBhcmUgZGVwZW5kZW50IG9uIG90aGVyIHRhc2tzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgZGVwZW5kZW5jeVRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3NcbiAgICAgICAgLmZpbHRlcih0YXNrID0+IHR5cGVvZiB0YXNrLmRlcGVuZGVudE9uICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICB0YXNrLmRlcGVuZGVuY3lMaW5lcyA9IHRhc2suZGVwZW5kZW50T24ubWFwKGlkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IHBvaW50czogdGhpcy5nZXRQb2ludHMoaWQsIHRhc2suaWQpIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiB0YXNrLmRlcGVuZGVuY3lMaW5lcy5wb2ludHMgIT09IG51bGwpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEdyaWQgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPHN2Z1xuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lcy13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZXMtd3JhcHBlciddIH1cIlxuICAgIHJlZj1cImNoYXJ0XCJcbiAgICB4PVwiMFwiXG4gICAgeT1cIjBcIlxuICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy53aWR0aFwiXG4gICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPGcgY2xhc3M9XCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmVzXCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmVzJ10gfVwiPlxuICAgICAgPGxpbmVcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtaG9yaXpvbnRhbFwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lLWhvcml6b250YWwnXSB9XCJcbiAgICAgICAgdi1mb3I9XCJsaW5lIGluIGhvcml6b250YWxMaW5lc1wiXG4gICAgICAgIDprZXk9XCJsaW5lLmtleVwiXG4gICAgICAgIDp4MT1cImxpbmUueDFcIlxuICAgICAgICA6eTE9XCJsaW5lLnkxXCJcbiAgICAgICAgOngyPVwibGluZS54MlwiXG4gICAgICAgIDp5Mj1cImxpbmUueTJcIlxuICAgICAgPjwvbGluZT5cbiAgICAgIDxsaW5lXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lLXZlcnRpY2FsXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXSB9XCJcbiAgICAgICAgdi1mb3I9XCJsaW5lIGluIHZlcnRpY2FsTGluZXNcIlxuICAgICAgICA6a2V5PVwibGluZS5rZXlcIlxuICAgICAgICA6eDE9XCJsaW5lLngxXCJcbiAgICAgICAgOnkxPVwibGluZS55MVwiXG4gICAgICAgIDp4Mj1cImxpbmUueDJcIlxuICAgICAgICA6eTI9XCJsaW5lLnkyXCJcbiAgICAgID48L2xpbmU+XG4gICAgICA8bGluZVxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS10aW1lXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmUtdGltZSddIH1cIlxuICAgICAgICA6eDE9XCJ0aW1lTGluZVBvc2l0aW9uLnhcIlxuICAgICAgICA6eTE9XCJ0aW1lTGluZVBvc2l0aW9uLnkxXCJcbiAgICAgICAgOngyPVwidGltZUxpbmVQb3NpdGlvbi54XCJcbiAgICAgICAgOnkyPVwidGltZUxpbmVQb3NpdGlvbi55MlwiXG4gICAgICA+PC9saW5lPlxuICAgIDwvZz5cbiAgPC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnR3JpZCcsXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICAvKipcbiAgICogQ3JlYXRlZFxuICAgKi9cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnJvb3QuJG9uKCdyZWNlbnRlclBvc2l0aW9uJywgdGhpcy5yZWNlbnRlclBvc2l0aW9uKTtcbiAgfSxcblxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIGJlY2F1c2Ugb2Ygc3R1cGlkIHNsaWRlciA6L1xuICAgICAgICB0aGlzLnJvb3Quc2Nyb2xsVG9UaW1lKHRoaXMudGltZUxpbmVQb3NpdGlvbi50aW1lKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBSZWNlbnRlciBwb3NpdGlvbiAtIGdvIHRvIGN1cnJlbnQgdGltZSBsaW5lXG4gICAgICovXG4gICAgcmVjZW50ZXJQb3NpdGlvbigpIHtcbiAgICAgIHRoaXMucm9vdC5zY3JvbGxUb1RpbWUodGhpcy50aW1lTGluZVBvc2l0aW9uLnRpbWUpO1xuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHZlcnRpY2FsIGxpbmVzIG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgdmVydGljYWxMaW5lcygpIHtcbiAgICAgIGxldCBsaW5lcyA9IFtdO1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnJvb3Quc3RhdGU7XG4gICAgICBzdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QuaXNJbnNpZGVWaWV3UG9ydChzdGVwLm9mZnNldC5weCwgMSkpIHtcbiAgICAgICAgICBsaW5lcy5wdXNoKHtcbiAgICAgICAgICAgIGtleTogc3RlcC50aW1lLFxuICAgICAgICAgICAgeDE6IHN0ZXAub2Zmc2V0LnB4LFxuICAgICAgICAgICAgeTE6IDAsXG4gICAgICAgICAgICB4Mjogc3RlcC5vZmZzZXQucHgsXG4gICAgICAgICAgICB5MjpcbiAgICAgICAgICAgICAgc3RhdGUudGFza3MubGVuZ3RoICogKHN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgICAgICAgdGhpcy5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGhvcml6b250YWwgbGluZXMgb2YgdGhlIGdyaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBob3Jpem9udGFsTGluZXMoKSB7XG4gICAgICBsZXQgbGluZXMgPSBbXTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnM7XG4gICAgICBsZXQgdGFza3MgPSB0aGlzLnJvb3QudmlzaWJsZVRhc2tzO1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSB0YXNrcy5sZW5ndGg7IGluZGV4IDw9IGxlbjsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCB5ID1cbiAgICAgICAgICBpbmRleCAqIChzdGF0ZS5yb3cuaGVpZ2h0ICsgc3RhdGUuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgICB0aGlzLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXSAvIDI7XG4gICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgIGtleTogJ2hsJyArIGluZGV4LFxuICAgICAgICAgIHgxOiAwLFxuICAgICAgICAgIHkxOiB5LFxuICAgICAgICAgIHgyOiAnMTAwJScsXG4gICAgICAgICAgeTI6IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHNwZWNpZmllZCBsaW5lIGlzIGluc2lkZSB2aWV3cG9ydCAodmlzaWJsZSlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBpblZpZXdQb3J0KCkge1xuICAgICAgcmV0dXJuIGxpbmUgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zO1xuICAgICAgICByZXR1cm4gbGluZS54MSA+PSBzdGF0ZS5zY3JvbGwuY2hhcnQubGVmdCAmJiBsaW5lLngxIDw9IHN0YXRlLnNjcm9sbC5jaGFydC5yaWdodDtcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHRpbWUgbGluZSBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICB0aW1lTGluZVBvc2l0aW9uKCkge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZC5nZXRUaW1lKCk7XG4gICAgICBjb25zdCBjdXJyZW50T2Zmc2V0ID0gdGhpcy5yb290LnRpbWVUb1BpeGVsT2Zmc2V0WChjdXJyZW50KTtcbiAgICAgIGNvbnN0IHRpbWVMaW5lID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5MTogMCxcbiAgICAgICAgeTI6ICcxMDAlJyxcbiAgICAgICAgZGF0ZVRpbWU6ICcnLFxuICAgICAgICB0aW1lOiBjdXJyZW50XG4gICAgICB9O1xuICAgICAgdGltZUxpbmUueCA9IGN1cnJlbnRPZmZzZXQ7XG4gICAgICB0aW1lTGluZS5kYXRlVGltZSA9IGQudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdGltZUxpbmU7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgUHJvZ3Jlc3NCYXIgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyJ10gfVwiXG4gID5cbiAgICA8ZGVmcz5cbiAgICAgIDxwYXR0ZXJuXG4gICAgICAgIGlkPVwiZGlhZ29uYWxIYXRjaFwiXG4gICAgICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aFwiXG4gICAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcIlxuICAgICAgICBwYXR0ZXJuVHJhbnNmb3JtPVwicm90YXRlKDQ1IDAgMClcIlxuICAgICAgICBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICA+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgY2xhc3M9XCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmVcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItbGluZSddIH1cIlxuICAgICAgICAgIHgxPVwiMFwiXG4gICAgICAgICAgeTE9XCIwXCJcbiAgICAgICAgICB4Mj1cIjBcIlxuICAgICAgICAgIDp5Mj1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L3BhdHRlcm4+XG4gICAgPC9kZWZzPlxuICAgIDxyZWN0XG4gICAgICB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLmJhclwiXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWQnXSB9XCJcbiAgICAgIHg9XCIwXCJcbiAgICAgIHk9XCIwXCJcbiAgICAgIDp3aWR0aD1cImdldFByb2dyZXNzV2lkdGhcIlxuICAgID48L3JlY3Q+XG4gICAgPGcgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy5wYXR0ZXJuXCI+XG4gICAgICA8cmVjdFxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItcGF0dGVyblwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItcGF0dGVybiddIH1cIlxuICAgICAgICA6eD1cImdldFByb2dyZXNzV2lkdGhcIlxuICAgICAgICB5PVwiMFwiXG4gICAgICAgIDp3aWR0aD1cIjEwMCAtIHRhc2sucHJvZ3Jlc3MgKyAnJSdcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgID48L3JlY3Q+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZVwiXG4gICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmUnXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydiYXNlJ10sXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lJ11cbiAgICAgICAgfVwiXG4gICAgICAgIDpkPVwiZ2V0TGluZVBvaW50c1wiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvZz5cbiAgPC9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Byb2dyZXNzQmFyJyxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFzayddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCBwcm9ncmVzcyB3aWR0aFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQcm9ncmVzc1dpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFzay5wcm9ncmVzcyArICclJztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGxpbmUgcG9pbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldExpbmVQb2ludHMoKSB7XG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLnRhc2sud2lkdGggLyAxMDApICogdGhpcy50YXNrLnByb2dyZXNzO1xuICAgICAgcmV0dXJuIGBNICR7c3RhcnR9IDAgTCAke3N0YXJ0fSAke3RoaXMudGFzay5oZWlnaHR9YDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHNvbGlkIHN0eWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldFNvbGlkU3R5bGUoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Muc3R5bGVzLmJhci5zb2xpZCwgdGhpcy50YXNrLnByb2dyZXNzQmFyU3R5bGUuYmFyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGxpbmUgc3R5bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGluZVN0eWxlKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgc3Ryb2tlOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuc3R5bGVzLmJhci5zdHJva2UgKyAnYTAnLFxuICAgICAgICAgICdzdHJva2Utd2lkdGgnOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuc3R5bGVzLmJhclsnc3Ryb2tlLXdpZHRoJ10gLyAyXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMudGFzay5zdHlsZVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBNaWxlc3RvbmUgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctbWlsZXN0b25lLXdyYXBwZXJcIlxuICAgIDpzdHlsZT1cIntcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddLFxuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyJ10sXG4gICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXVxuICAgIH1cIlxuICA+XG4gICAgPGZvcmVpZ25PYmplY3RcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXItLW1pbGVzdG9uZVwiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyLS1taWxlc3RvbmUnXSxcbiAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtZXhwYW5kZXInXVxuICAgICAgfVwiXG4gICAgICA6eD1cInRhc2sueCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXG4gICAgICA6eT1cInRhc2sueSArIChyb290LnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvIDJcIlxuICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxuICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcbiAgICAgIHYtaWY9XCJkaXNwbGF5RXhwYW5kZXJcIlxuICAgID5cbiAgICAgIDxleHBhbmRlciA6dGFza3M9XCJbdGFza11cIiA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlclwiIHR5cGU9XCJjaGFydFwiPjwvZXhwYW5kZXI+XG4gICAgPC9mb3JlaWduT2JqZWN0PlxuICAgIDxzdmdcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctbWlsZXN0b25lXCJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhciddLCAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctbWlsZXN0b25lJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSB9XCJcbiAgICAgIDp4PVwidGFzay54XCJcbiAgICAgIDp5PVwidGFzay55XCJcbiAgICAgIDp3aWR0aD1cInRhc2sud2lkdGhcIlxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcbiAgICAgIDp2aWV3Qm94PVwiYDAgMCAke3Rhc2sud2lkdGh9ICR7dGFzay5oZWlnaHR9YFwiXG4gICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxuICAgICAgQG1vdXNlb3Zlcj1cImVtaXRFdmVudCgnbW91c2VvdmVyJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZWRvd249XCJlbWl0RXZlbnQoJ21vdXNlZG93bicsICRldmVudClcIlxuICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hzdGFydD1cImVtaXRFdmVudCgndG91Y2hzdGFydCcsICRldmVudClcIlxuICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIDppZD1cImNsaXBQYXRoSWRcIj5cbiAgICAgICAgICA8cG9seWdvbiA6cG9pbnRzPVwiZ2V0UG9pbnRzXCI+PC9wb2x5Z29uPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPHBvbHlnb25cbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddLFxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvbiddLFxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2Jhc2UnXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXVxuICAgICAgICB9XCJcbiAgICAgICAgOnBvaW50cz1cImdldFBvaW50c1wiXG4gICAgICA+PC9wb2x5Z29uPlxuICAgICAgPHByb2dyZXNzLWJhciA6dGFzaz1cInRhc2tcIiA6Y2xpcC1wYXRoPVwiJ3VybCgjJyArIGNsaXBQYXRoSWQgKyAnKSdcIj48L3Byb2dyZXNzLWJhcj5cbiAgICA8L3N2Zz5cbiAgICA8Y2hhcnQtdGV4dCA6dGFzaz1cInRhc2tcIiB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnRleHQuZGlzcGxheVwiPjwvY2hhcnQtdGV4dD5cbiAgPC9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDaGFydFRleHQgZnJvbSAnLi4vVGV4dC52dWUnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL1Byb2dyZXNzQmFyLnZ1ZSc7XG5pbXBvcnQgRXhwYW5kZXIgZnJvbSAnLi4vLi4vRXhwYW5kZXIudnVlJztcbmltcG9ydCB0YXNrTWl4aW4gZnJvbSAnLi9UYXNrLm1peGluLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01pbGVzdG9uZScsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaGFydFRleHQsXG4gICAgUHJvZ3Jlc3NCYXIsXG4gICAgRXhwYW5kZXJcbiAgfSxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFzayddLFxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNsaXBQYXRoSWQoKSB7XG4gICAgICByZXR1cm4gJ2dhbnR0LWVsYXN0aWNfX21pbGVzdG9uZS1jbGlwLXBhdGgtJyArIHRoaXMudGFzay5pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHBvaW50c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrO1xuICAgICAgY29uc3QgZmlmdHkgPSB0YXNrLmhlaWdodCAvIDI7XG4gICAgICBsZXQgb2Zmc2V0ID0gZmlmdHk7XG4gICAgICBpZiAodGFzay53aWR0aCAvIDIgLSBvZmZzZXQgPCAwKSB7XG4gICAgICAgIG9mZnNldCA9IHRhc2sud2lkdGggLyAyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAwLCR7ZmlmdHl9XG4gICAgICAgICR7b2Zmc2V0fSwwXG4gICAgICAgICR7dGFzay53aWR0aCAtIG9mZnNldH0sMFxuICAgICAgICAke3Rhc2sud2lkdGh9LCR7ZmlmdHl9XG4gICAgICAgICR7dGFzay53aWR0aCAtIG9mZnNldH0sJHt0YXNrLmhlaWdodH1cbiAgICAgICAgJHtvZmZzZXR9LCR7dGFzay5oZWlnaHR9YDtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBQcm9qZWN0IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxnXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2plY3Qtd3JhcHBlclwiXG4gICAgOnN0eWxlPVwie1xuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ10sXG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyJ10sXG4gICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXVxuICAgIH1cIlxuICA+XG4gICAgPGZvcmVpZ25PYmplY3RcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXItLXByb2plY3RcIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1leHBhbmRlciddLFxuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1leHBhbmRlci0tcHJvamVjdCddLFxuICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1leHBhbmRlciddXG4gICAgICB9XCJcbiAgICAgIDp4PVwidGFzay54IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcbiAgICAgIDp5PVwidGFzay55ICsgKHJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC8gMlwiXG4gICAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXG4gICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxuICAgICAgdi1pZj1cImRpc3BsYXlFeHBhbmRlclwiXG4gICAgPlxuICAgICAgPGV4cGFuZGVyIDp0YXNrcz1cIlt0YXNrXVwiIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyXCIgdHlwZT1cImNoYXJ0XCI+PC9leHBhbmRlcj5cbiAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gICAgPHN2Z1xuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0XCJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhciddLCAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvamVjdCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyJ10gfVwiXG4gICAgICA6eD1cInRhc2sueFwiXG4gICAgICA6eT1cInRhc2sueVwiXG4gICAgICA6d2lkdGg9XCJ0YXNrLndpZHRoXCJcbiAgICAgIDpoZWlnaHQ9XCJ0YXNrLmhlaWdodFwiXG4gICAgICA6dmlld0JveD1cImAwIDAgJHt0YXNrLndpZHRofSAke3Rhc2suaGVpZ2h0fWBcIlxuICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxuICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxuICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxuICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxuICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcbiAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxuICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCA6aWQ9XCJjbGlwUGF0aElkXCI+XG4gICAgICAgICAgPHBhdGggOmQ9XCJnZXRQb2ludHNcIj48L3BhdGg+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8cGF0aFxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdC1wb2x5Z29uXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddLFxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb24nXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydiYXNlJ10sXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cbiAgICAgICAgfVwiXG4gICAgICAgIDpkPVwiZ2V0UG9pbnRzXCJcbiAgICAgID48L3BhdGg+XG4gICAgICA8cHJvZ3Jlc3MtYmFyIDp0YXNrPVwidGFza1wiIDpjbGlwLXBhdGg9XCIndXJsKCMnICsgY2xpcFBhdGhJZCArICcpJ1wiPjwvcHJvZ3Jlc3MtYmFyPlxuICAgIDwvc3ZnPlxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxuICA8L2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0VGV4dCBmcm9tICcuLi9UZXh0LnZ1ZSc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcbmltcG9ydCBFeHBhbmRlciBmcm9tICcuLi8uLi9FeHBhbmRlci52dWUnO1xuaW1wb3J0IHRhc2tNaXhpbiBmcm9tICcuL1Rhc2subWl4aW4uanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUHJvamVjdCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaGFydFRleHQsXG4gICAgUHJvZ3Jlc3NCYXIsXG4gICAgRXhwYW5kZXJcbiAgfSxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFzayddLFxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNsaXBQYXRoSWQoKSB7XG4gICAgICByZXR1cm4gJ2dhbnR0LWVsYXN0aWNfX3Byb2plY3QtY2xpcC1wYXRoLScgKyB0aGlzLnRhc2suaWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBwb2ludHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UG9pbnRzKCkge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFzaztcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRhc2suaGVpZ2h0IC0gdGFzay5oZWlnaHQgLyA0O1xuICAgICAgY29uc3QgY29ybmVyID0gdGFzay5oZWlnaHQgLyA2O1xuICAgICAgY29uc3Qgc21hbGxDb3JuZXIgPSB0YXNrLmhlaWdodCAvIDg7XG4gICAgICByZXR1cm4gYE0gJHtzbWFsbENvcm5lcn0sMFxuICAgICAgICAgICAgICAgIEwgJHt0YXNrLndpZHRoIC0gc21hbGxDb3JuZXJ9IDBcbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aH0gJHtzbWFsbENvcm5lcn1cbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aH0gJHtib3R0b219XG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGggLSBjb3JuZXJ9ICR7dGFzay5oZWlnaHR9XG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGggLSBjb3JuZXIgKiAyfSAke2JvdHRvbX1cbiAgICAgICAgICAgICAgICBMICR7Y29ybmVyICogMn0gJHtib3R0b219XG4gICAgICAgICAgICAgICAgTCAke2Nvcm5lcn0gJHt0YXNrLmhlaWdodH1cbiAgICAgICAgICAgICAgICBMIDAgJHtib3R0b219XG4gICAgICAgICAgICAgICAgTCAwICR7c21hbGxDb3JuZXJ9XG4gICAgICAgICAgICAgICAgWlxuICAgICAgICBgO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBleHBhbmRlcj9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRpc3BsYXlFeHBhbmRlcigpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVyID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXI7XG4gICAgICByZXR1cm4gZXhwYW5kZXIuZGlzcGxheSB8fCAoZXhwYW5kZXIuZGlzcGxheUlmVGFza0xpc3RIaWRkZW4gJiYgIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2sgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7XG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXSxcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInXSxcbiAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddXG4gICAgfVwiXG4gID5cbiAgICA8Zm9yZWlnbk9iamVjdFxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tdGFza1wiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyLS10YXNrJ10sXG4gICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ11cbiAgICAgIH1cIlxuICAgICAgOng9XCJ0YXNrLnggLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxuICAgICAgOnk9XCJ0YXNrLnkgKyAocm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgLyAyXCJcbiAgICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcbiAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXG4gICAgICB2LWlmPVwiZGlzcGxheUV4cGFuZGVyXCJcbiAgICA+XG4gICAgICA8ZXhwYW5kZXIgOnRhc2tzPVwiW3Rhc2tdXCIgOm9wdGlvbnM9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXJcIiB0eXBlPVwiY2hhcnRcIj48L2V4cGFuZGVyPlxuICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2tcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyJ10sIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSB9XCJcbiAgICAgIDp4PVwidGFzay54XCJcbiAgICAgIDp5PVwidGFzay55XCJcbiAgICAgIDp3aWR0aD1cInRhc2sud2lkdGhcIlxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcbiAgICAgIDp2aWV3Qm94PVwiYDAgMCAke3Rhc2sud2lkdGh9ICR7dGFzay5oZWlnaHR9YFwiXG4gICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxuICAgICAgQG1vdXNlb3Zlcj1cImVtaXRFdmVudCgnbW91c2VvdmVyJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZWRvd249XCJlbWl0RXZlbnQoJ21vdXNlZG93bicsICRldmVudClcIlxuICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hzdGFydD1cImVtaXRFdmVudCgndG91Y2hzdGFydCcsICRldmVudClcIlxuICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIDppZD1cImNsaXBQYXRoSWRcIj5cbiAgICAgICAgICA8cG9seWdvbiA6cG9pbnRzPVwiZ2V0UG9pbnRzXCI+PC9wb2x5Z29uPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPHBvbHlnb25cbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2stcG9seWdvblwiXG4gICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXSxcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGFzay1wb2x5Z29uJ10sXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddXG4gICAgICAgIH1cIlxuICAgICAgICA6cG9pbnRzPVwiZ2V0UG9pbnRzXCJcbiAgICAgID48L3BvbHlnb24+XG4gICAgICA8cHJvZ3Jlc3MtYmFyIDp0YXNrPVwidGFza1wiIDpjbGlwLXBhdGg9XCIndXJsKCMnICsgY2xpcFBhdGhJZCArICcpJ1wiPjwvcHJvZ3Jlc3MtYmFyPlxuICAgIDwvc3ZnPlxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxuICA8L2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0VGV4dCBmcm9tICcuLi9UZXh0LnZ1ZSc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcbmltcG9ydCBFeHBhbmRlciBmcm9tICcuLi8uLi9FeHBhbmRlci52dWUnO1xuaW1wb3J0IHRhc2tNaXhpbiBmcm9tICcuL1Rhc2subWl4aW4uanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGFzaycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaGFydFRleHQsXG4gICAgUHJvZ3Jlc3NCYXIsXG4gICAgRXhwYW5kZXJcbiAgfSxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFzayddLFxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNsaXBQYXRoSWQoKSB7XG4gICAgICByZXR1cm4gJ2dhbnR0LWVsYXN0aWNfX3Rhc2stY2xpcC1wYXRoLScgKyB0aGlzLnRhc2suaWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBwb2ludHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UG9pbnRzKCkge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFzaztcbiAgICAgIHJldHVybiBgMCwwICR7dGFzay53aWR0aH0sMCAke3Rhc2sud2lkdGh9LCR7dGFzay5oZWlnaHR9IDAsJHt0YXNrLmhlaWdodH1gO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRleHQgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPHN2Z1xuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtd3JhcHBlclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC13cmFwcGVyJ10gfVwiXG4gICAgOng9XCJ0YXNrLnggKyB0YXNrLndpZHRoICsgcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnRleHQub2Zmc2V0XCJcbiAgICA6eT1cInRhc2sueSAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwXCJcbiAgICA6d2lkdGg9XCJnZXRXaWR0aFwiXG4gICAgOmhlaWdodD1cImdldEhlaWdodFwiXG4gID5cbiAgICA8Zm9yZWlnbk9iamVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgOmhlaWdodD1cImdldEhlaWdodFwiPlxuICAgICAgPGRpdlxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIlxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0XCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dCddIH1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50IGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHRcIlxuICAgICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQnXSxcbiAgICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHQnXSxcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZVxuICAgICAgICAgIH1cIlxuICAgICAgICAgIHYtaWY9XCIhaHRtbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2Pnt7IHRhc2subGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbFwiXG4gICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudCddLFxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbCddLFxuICAgICAgICAgICAgY29udGVudFN0eWxlXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgdi1pZj1cImh0bWxcIlxuICAgICAgICAgIHYtaHRtbD1cInRhc2subGFiZWxcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gIDwvc3ZnPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NoYXJ0VGV4dCcsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ3Rhc2snXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHdpZHRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFdpZHRoKCkge1xuICAgICAgY29uc3QgdGV4dFN0eWxlID0gdGhpcy5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dCddO1xuICAgICAgdGhpcy5yb290LnN0YXRlLmN0eC5mb250ID0gYCR7dGV4dFN0eWxlWydmb250LXdlaWdodCddfSAke3RleHRTdHlsZVsnZm9udC1zaXplJ119ICR7dGV4dFN0eWxlWydmb250LWZhbWlseSddfWA7XG4gICAgICBjb25zdCB0ZXh0V2lkdGggPSB0aGlzLnJvb3Quc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KHRoaXMudGFzay5sYWJlbCkud2lkdGg7XG4gICAgICByZXR1cm4gdGV4dFdpZHRoICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC54UGFkZGluZyAqIDI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBoZWlnaHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFzay5oZWlnaHQgKyB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbnRlbnQgc3R5bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29udGVudFN0eWxlKCkge1xuICAgICAgcmV0dXJuIHsgaGVpZ2h0OiAnMTAwJScsICdsaW5lLWhlaWdodCc6IHRoaXMuZ2V0SGVpZ2h0ICsgJ3B4JyB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgd2UgcmVuZGVyIHRleHQgYXMgaHRtbD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGh0bWwoKSB7XG4gICAgICBjb25zdCBjb2xzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucztcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjb2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IGNvbHNbaV07XG4gICAgICAgIGlmIChjb2wudmFsdWUgPT09ICdsYWJlbCcgJiYgdHlwZW9mIGNvbC5odG1sICE9PSAndW5kZWZpbmVkJyAmJiBjb2wuaHRtbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRXhwYW5kZXIgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy13cmFwcGVyJ1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLXdyYXBwZXInXSwgLi4uc3R5bGUgfVwiPlxuICAgIDxzdmdcbiAgICAgIDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLWNvbnRlbnQnXCJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWNvbnRlbnQnXSB9XCJcbiAgICAgIDp3aWR0aD1cIm9wdGlvbnMuc2l6ZVwiXG4gICAgICA6aGVpZ2h0PVwib3B0aW9ucy5zaXplXCJcbiAgICAgIHYtaWY9XCJhbGxDaGlsZHJlbi5sZW5ndGhcIlxuICAgICAgQGNsaWNrPVwidG9nZ2xlXCJcbiAgICA+XG4gICAgICA8cmVjdFxuICAgICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1ib3JkZXInXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlW2dldENsYXNzUHJlZml4KGZhbHNlKSArICctYm9yZGVyJ10sIGJvcmRlclN0eWxlIH1cIlxuICAgICAgICA6eD1cImJvcmRlclwiXG4gICAgICAgIDp5PVwiYm9yZGVyXCJcbiAgICAgICAgOndpZHRoPVwib3B0aW9ucy5zaXplIC0gYm9yZGVyICogMlwiXG4gICAgICAgIDpoZWlnaHQ9XCJvcHRpb25zLnNpemUgLSBib3JkZXIgKiAyXCJcbiAgICAgICAgcng9XCIyXCJcbiAgICAgICAgcnk9XCIyXCJcbiAgICAgID48L3JlY3Q+XG4gICAgICA8bGluZVxuICAgICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1saW5lJ1wiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWxpbmUnXSB9XCJcbiAgICAgICAgdi1pZj1cImFsbENoaWxkcmVuLmxlbmd0aFwiXG4gICAgICAgIDp4MT1cImxpbmVPZmZzZXRcIlxuICAgICAgICA6eTE9XCJvcHRpb25zLnNpemUgLyAyXCJcbiAgICAgICAgOngyPVwib3B0aW9ucy5zaXplIC0gbGluZU9mZnNldFwiXG4gICAgICAgIDp5Mj1cIm9wdGlvbnMuc2l6ZSAvIDJcIlxuICAgICAgPjwvbGluZT5cbiAgICAgIDxsaW5lXG4gICAgICAgIDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLWxpbmUnXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlW2dldENsYXNzUHJlZml4KGZhbHNlKSArICctbGluZSddIH1cIlxuICAgICAgICB2LWlmPVwiY29sbGFwc2VkXCJcbiAgICAgICAgOngxPVwib3B0aW9ucy5zaXplIC8gMlwiXG4gICAgICAgIDp5MT1cImxpbmVPZmZzZXRcIlxuICAgICAgICA6eDI9XCJvcHRpb25zLnNpemUgLyAyXCJcbiAgICAgICAgOnkyPVwib3B0aW9ucy5zaXplIC0gbGluZU9mZnNldFwiXG4gICAgICA+PC9saW5lPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdFeHBhbmRlcicsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ3Rhc2tzJywgJ29wdGlvbnMnLCAndHlwZSddLFxuICBkYXRhKCkge1xuICAgIGNvbnN0IGJvcmRlciA9IDAuNTtcbiAgICByZXR1cm4ge1xuICAgICAgYm9yZGVyLFxuICAgICAgYm9yZGVyU3R5bGU6IHtcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IGJvcmRlclxuICAgICAgfSxcbiAgICAgIGxpbmVPZmZzZXQ6IDVcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlKCkge1xuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gJ3Rhc2tMaXN0Jykge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCBtYXJnaW4gPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5tYXJnaW47XG4gICAgICBjb25zdCBwYWRkaW5nID0gdGhpcy50YXNrc1swXS5wYXJlbnRzLmxlbmd0aCAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLnBhZGRpbmc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAncGFkZGluZy1sZWZ0JzogcGFkZGluZyArIG1hcmdpbiArICdweCcsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8gMCdcbiAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRhc2tzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgYWxsQ2hpbGRyZW4oKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLmFsbENoaWxkcmVuLmZvckVhY2goY2hpbGRJZCA9PiB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZElkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIElzIGN1cnJlbnQgZXhwYW5kZXIgY29sbGFwc2VkP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgY29sbGFwc2VkKCkge1xuICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCBjb2xsYXBzZWQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMudGFza3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMudGFza3NbaV0uY29sbGFwc2VkKSB7XG4gICAgICAgICAgY29sbGFwc2VkKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2xsYXBzZWQgPT09IHRoaXMudGFza3MubGVuZ3RoO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEdldCBzcGVjaWZpYyBjbGFzcyBwcmVmaXhcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xhc3NQcmVmaXgoZnVsbCA9IHRydWUpIHtcbiAgICAgIHJldHVybiBgJHtmdWxsID8gJ2dhbnR0LWVsYXN0aWNfXycgOiAnJ30ke3RoaXMub3B0aW9ucy50eXBlfS1leHBhbmRlcmA7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUb2dnbGUgZXhwYW5kZXJcbiAgICAgKi9cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICB0YXNrLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgICAgZm9yIChsZXQgY2hpbGRJZCBvZiB0YXNrLmFsbENoaWxkcmVuKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLnJvb3QuZ2V0VGFzayhjaGlsZElkKTtcbiAgICAgICAgICBjaGlsZC5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1haW5WaWV3IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLXZpZXdcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ21haW4tdmlldyddIH1cIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyLXdyYXBwZXJcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydtYWluLWNvbnRhaW5lci13cmFwcGVyJ10sIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArICdweCcgfVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX21haW4tY29udGFpbmVyXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ21haW4tY29udGFpbmVyJ10sXG4gICAgICAgICAgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9XCJcbiAgICAgICAgcmVmPVwibWFpblZpZXdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jb250YWluZXJcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY29udGFpbmVyJ10gfVwiXG4gICAgICAgICAgQG1vdXNlbW92ZT1cIm1vdXNlTW92ZVwiXG4gICAgICAgICAgQG1vdXNldXA9XCJtb3VzZVVwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj1cInRhc2tMaXN0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWNvbnRhaW5lclwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5maW5hbFdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICB2LXNob3c9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRhc2stbGlzdD48L3Rhc2stbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1jb250YWluZXJcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydtYWluLXZpZXctY29udGFpbmVyJ10gfVwiXG4gICAgICAgICAgICByZWY9XCJjaGFydENvbnRhaW5lclwiXG4gICAgICAgICAgICBAbW91c2Vkb3duPVwiY2hhcnRNb3VzZURvd25cIlxuICAgICAgICAgICAgQHRvdWNoc3RhcnQ9XCJjaGFydE1vdXNlRG93blwiXG4gICAgICAgICAgICBAbW91c2V1cD1cImNoYXJ0TW91c2VVcFwiXG4gICAgICAgICAgICBAdG91Y2hlbmQ9XCJjaGFydE1vdXNlVXBcIlxuICAgICAgICAgICAgQG1vdXNlbW92ZS5wcmV2ZW50PVwiY2hhcnRNb3VzZU1vdmVcIlxuICAgICAgICAgICAgQHRvdWNobW92ZS5wcmV2ZW50PVwiY2hhcnRNb3VzZU1vdmVcIlxuICAgICAgICAgICAgQHdoZWVsLnByZXZlbnQ9XCJjaGFydFdoZWVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2hhcnQ+PC9jaGFydD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXInXSxcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbCddLFxuICAgICAgICAgIC4uLnZlcnRpY2FsU3R5bGVcbiAgICAgICAgfVwiXG4gICAgICAgIHJlZj1cImNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWxcIlxuICAgICAgICBAc2Nyb2xsPVwib25WZXJ0aWNhbFNjcm9sbFwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC0tdmVydGljYWxcIlxuICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6ICcxcHgnLCBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgKyAncHgnIH1cIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbFwiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXInXSxcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbCddLFxuICAgICAgICBtYXJnaW5MZWZ0OiBnZXRNYXJnaW5MZWZ0XG4gICAgICB9XCJcbiAgICAgIEBzY3JvbGw9XCJvbkhvcml6b250YWxTY3JvbGxcIlxuICAgICAgcmVmPVwiY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLS1ob3Jpem9udGFsXCJcbiAgICAgICAgOnN0eWxlPVwieyBoZWlnaHQ6ICcxcHgnLCB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4JyB9XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vVGFza0xpc3QvVGFza0xpc3QudnVlJztcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0L0NoYXJ0LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01haW5WaWV3JyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0LFxuICAgIENoYXJ0XG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZnM6ICcnLFxuICAgICAgbW91c2VQb3M6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgbW92ZW1lbnRYOiAwLFxuICAgICAgICBtb3ZlbWVudFk6IDAsXG4gICAgICAgIGxhc3RYOiAwLFxuICAgICAgICBsYXN0WTogMCxcbiAgICAgICAgcG9zaXRpdmVYOiAwLFxuICAgICAgICBwb3NpdGl2ZVk6IDAsXG4gICAgICAgIGN1cnJlbnRYOiAwLFxuICAgICAgICBjdXJyZW50WTogMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIC8qKlxuICAgKiBNb3VudGVkXG4gICAqL1xuICBtb3VudGVkKCkge1xuICAgIHRoaXMudmlld0JveFdpZHRoID0gdGhpcy4kZWwuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMubWFpblZpZXcgPSB0aGlzLiRyZWZzLm1haW5WaWV3O1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydENvbnRhaW5lcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdCA9IHRoaXMuJHJlZnMudGFza0xpc3Q7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWw7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5jaGFydE1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5jaGFydE1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmNoYXJ0TW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5jaGFydE1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IG1hcmdpbiBsZWZ0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldE1hcmdpbkxlZnQoKSB7XG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggKyAncHgnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmVydGljYWwgc3R5bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgdmVydGljYWxTdHlsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQgKyAncHgnLFxuICAgICAgICBoZWlnaHQ6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyAncHgnLFxuICAgICAgICAnbWFyZ2luLXRvcCc6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArICdweCdcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGJveFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRWaWV3Qm94KCkge1xuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoKSB7XG4gICAgICAgIHJldHVybiBgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggLSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHR9ICR7XG4gICAgICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgIH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGAwIDAgMCAke3RoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodH1gO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnQgd2hlbiBtb3VzZSBpcyBtb3ZpbmcgaW5zaWRlIG1haW4gdmlld1xuICAgICAqL1xuICAgIG1vdXNlTW92ZShldmVudCkge1xuICAgICAgdGhpcy5yb290LiRlbWl0KCdtYWluLXZpZXctbW91c2Vtb3ZlJywgZXZlbnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbWl0IG1vdXNldXAgZXZlbnQgaW5zaWRlIG1haW4gdmlld1xuICAgICAqL1xuICAgIG1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnbWFpbi12aWV3LW1vdXNldXAnLCBldmVudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgc2Nyb2xsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvbkhvcml6b250YWxTY3JvbGwoZXYpIHtcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnY2hhcnQtc2Nyb2xsLWhvcml6b250YWwnLCBldik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIHNjcm9sbCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25WZXJ0aWNhbFNjcm9sbChldikge1xuICAgICAgdGhpcy5yb290LiRlbWl0KCdjaGFydC1zY3JvbGwtdmVydGljYWwnLCBldik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBjaGFydFdoZWVsKGV2KSB7XG4gICAgICB0aGlzLnJvb3QuJGVtaXQoJ2NoYXJ0LXdoZWVsJywgZXYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBtb3VzZWRvd24gZXZlbnQgaGFuZGxlclxuICAgICAqIEluaXRpYXRlcyBkcmFnIHNjcm9sbGluZyBtb2RlXG4gICAgICovXG4gICAgY2hhcnRNb3VzZURvd24oZXYpIHtcbiAgICAgIGlmICh0eXBlb2YgZXYudG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdGhpcy5tb3VzZVBvcy5sYXN0WCA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gdGhpcy5tb3VzZVBvcy5sYXN0WSA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy5tb3ZlbWVudFggPSAwO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLm1vdmVtZW50WSA9IDA7XG4gICAgICAgIHRoaXMubW91c2VQb3MuY3VycmVudFggPSB0aGlzLiRyZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxMZWZ0O1xuICAgICAgICB0aGlzLm1vdXNlUG9zLmN1cnJlbnRZID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBtb3VzZXVwIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBEZWFjdGl2YXRlcyBkcmFnIHNjcm9sbGluZyBtb2RlXG4gICAgICovXG4gICAgY2hhcnRNb3VzZVVwKGV2KSB7XG4gICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYXJ0IG1vdXNlbW92ZSBldmVudCBoYW5kbGVyXG4gICAgICogV2hlbiBpbiBkcmFnIHNjcm9sbGluZyBtb2RlIHRoaXMgbWV0aG9kIGNhbGN1bGF0ZSBzY3JvbGwgbW92ZW1lbnRcbiAgICAgKi9cbiAgICBjaGFydE1vdXNlTW92ZShldikge1xuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0b3VjaCA9IHR5cGVvZiBldi50b3VjaGVzICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgbGV0IG1vdmVtZW50WCwgbW92ZW1lbnRZO1xuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICBjb25zdCBzY3JlZW5YID0gZXYudG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgIGNvbnN0IHNjcmVlblkgPSBldi50b3VjaGVzWzBdLnNjcmVlblk7XG4gICAgICAgICAgbW92ZW1lbnRYID0gdGhpcy5tb3VzZVBvcy54IC0gc2NyZWVuWDtcbiAgICAgICAgICBtb3ZlbWVudFkgPSB0aGlzLm1vdXNlUG9zLnkgLSBzY3JlZW5ZO1xuICAgICAgICAgIHRoaXMubW91c2VQb3MubGFzdFggPSBzY3JlZW5YO1xuICAgICAgICAgIHRoaXMubW91c2VQb3MubGFzdFkgPSBzY3JlZW5ZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVtZW50WCA9IGV2Lm1vdmVtZW50WDtcbiAgICAgICAgICBtb3ZlbWVudFkgPSBldi5tb3ZlbWVudFk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbDtcbiAgICAgICAgbGV0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICB4ID0gdGhpcy5tb3VzZVBvcy5jdXJyZW50WCArIG1vdmVtZW50WCAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWE1vdmVNdWx0aXBsaWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHggPSBob3Jpem9udGFsLnNjcm9sbExlZnQgLSBtb3ZlbWVudFggKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuZHJhZ1hNb3ZlTXVsdGlwbGllcjtcbiAgICAgICAgfVxuICAgICAgICBob3Jpem9udGFsLnNjcm9sbExlZnQgPSB4O1xuICAgICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgICB5ID0gdGhpcy5tb3VzZVBvcy5jdXJyZW50WSArIG1vdmVtZW50WSAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWU1vdmVNdWx0aXBsaWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB2ZXJ0aWNhbC5zY3JvbGxUb3AgLSBtb3ZlbWVudFkgKiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuZHJhZ1lNb3ZlTXVsdGlwbGllcjtcbiAgICAgICAgfVxuICAgICAgICB2ZXJ0aWNhbC5zY3JvbGxUb3AgPSB5O1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhbiB1cFxuICAgKi9cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5jaGFydE1vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5jaGFydE1vdXNlVXApO1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgSXRlbUNvbHVtbiBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIgOnN0eWxlPVwiaXRlbUNvbHVtblN0eWxlXCI+XG4gICAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXJcIiA6c3R5bGU9XCJ3cmFwcGVyU3R5bGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXJcIiA6c3R5bGU9XCJjb250YWluZXJTdHlsZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdi1pZj1cIiFodG1sXCJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcbiAgICAgICAgICA6c3R5bGU9XCJ2YWx1ZVN0eWxlXCJcbiAgICAgICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxuICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgdmFsdWUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcbiAgICAgICAgICA6c3R5bGU9XCJ2YWx1ZVN0eWxlXCJcbiAgICAgICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXG4gICAgICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxuICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxuICAgICAgICAgIHYtaHRtbD1cInZhbHVlXCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0l0ZW1Db2x1bW4nLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWydjb2x1bW4nLCAndGFzayddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGVtaXRFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLmV2ZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHRoaXMuY29sdW1uLmV2ZW50c1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY29sdW1uLmV2ZW50c1tldmVudE5hbWVdKHsgZXZlbnQsIGRhdGE6IHRoaXMudGFzaywgY29sdW1uOiB0aGlzLmNvbHVtbiB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm9vdC4kZW1pdChgdGFza0xpc3QtJHt0aGlzLnRhc2sudHlwZX0tJHtldmVudE5hbWV9YCwgeyBldmVudCwgZGF0YTogdGhpcy50YXNrLCBjb2x1bW46IHRoaXMuY29sdW1uIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBodG1sIG9yIGp1c3QgdGV4dD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGh0bWwoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLmh0bWwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuY29sdW1uLmh0bWwgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjb2x1bW4gdmFsdWVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthbnl8c3RyaW5nfVxuICAgICAqL1xuICAgIHZhbHVlKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4udmFsdWUodGhpcy50YXNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRhc2tbdGhpcy5jb2x1bW4udmFsdWVdO1xuICAgIH0sXG5cbiAgICBpdGVtQ29sdW1uU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLWNvbHVtbiddLFxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tY29sdW1uJ10sXG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbHVtbi5maW5hbFdpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbHVtbi5oZWlnaHQgKyAncHgnXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICB3cmFwcGVyU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXSxcbiAgICAgICAgLi4udGhpcy5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29udGFpbmVyU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciddLFxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJ11cbiAgICAgIH07XG4gICAgfSxcblxuICAgIHZhbHVlU3R5bGUoKSB7XG4gICAgICByZXR1cm4geyAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlJ10sIC4uLnRoaXMuY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZSddIH07XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGFza0xpc3QgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LXdyYXBwZXJcIlxuICAgIHJlZj1cInRhc2tMaXN0V3JhcHBlclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3Qtd3JhcHBlciddLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9XCJcbiAgICB2LXNob3c9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0XCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QnXSB9XCIgcmVmPVwidGFza0xpc3RcIj5cbiAgICAgIDx0YXNrLWxpc3QtaGVhZGVyPjwvdGFzay1saXN0LWhlYWRlcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbXNcIlxuICAgICAgICByZWY9XCJ0YXNrTGlzdEl0ZW1zXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbXMnXSwgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArICdweCcgfVwiXG4gICAgICA+XG4gICAgICAgIDx0YXNrLWxpc3QtaXRlbSB2LWZvcj1cInRhc2sgaW4gcm9vdC52aXNpYmxlVGFza3NcIiA6a2V5PVwidGFzay5pZFwiIDp0YXNrPVwidGFza1wiPjwvdGFzay1saXN0LWl0ZW0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0SGVhZGVyIGZyb20gJy4vVGFza0xpc3RIZWFkZXIudnVlJztcbmltcG9ydCBUYXNrTGlzdEl0ZW0gZnJvbSAnLi9UYXNrTGlzdEl0ZW0udnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Rhc2tMaXN0JyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0SGVhZGVyLFxuICAgIFRhc2tMaXN0SXRlbVxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdFdyYXBwZXIgPSB0aGlzLiRyZWZzLnRhc2tMaXN0V3JhcHBlcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdCA9IHRoaXMuJHJlZnMudGFza0xpc3Q7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcyA9IHRoaXMuJHJlZnMudGFza0xpc3RJdGVtcztcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0SGVhZGVyIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIlxuICAgIDpzdHlsZT1cIntcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXInXSxcbiAgICAgIGhlaWdodDogYCR7cm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodH1weGAsXG4gICAgICAnbWFyZ2luLWJvdHRvbSc6IGAke3Jvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXB9cHhgXG4gICAgfVwiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1jb2x1bW4nXSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWNvbHVtbiddLFxuICAgICAgICAuLi5nZXRTdHlsZShjb2x1bW4pXG4gICAgICB9XCJcbiAgICAgIHYtZm9yPVwiY29sdW1uIGluIHJvb3QuZ2V0VGFza0xpc3RDb2x1bW5zXCJcbiAgICAgIDprZXk9XCJjb2x1bW4uX2lkXCJcbiAgICA+XG4gICAgICA8dGFzay1saXN0LWV4cGFuZGVyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxuICAgICAgICA6dGFza3M9XCJjb2xsYXBzaWJsZVwiXG4gICAgICAgIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyXCJcbiAgICAgID48L3Rhc2stbGlzdC1leHBhbmRlcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWxhYmVsJ10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1sYWJlbCddIH1cIlxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcbiAgICAgICAgQG1vdXNldXA9XCJyZXNpemVyTW91c2VVcFwiXG4gICAgICA+XG4gICAgICAgIHt7IGNvbHVtbi5sYWJlbCB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXInXSxcbiAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJ11cbiAgICAgICAgfVwiXG4gICAgICAgIDpjb2x1bW49XCJjb2x1bW5cIlxuICAgICAgICBAbW91c2Vkb3duPVwicmVzaXplck1vdXNlRG93bigkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyJ10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyJ10gfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0RXhwYW5kZXIgZnJvbSAnLi4vRXhwYW5kZXIudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Rhc2tMaXN0SGVhZGVyJyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0RXhwYW5kZXJcbiAgfSxcblxuICBpbmplY3Q6IFsncm9vdCddLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2l6ZXI6IHtcbiAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgeDogMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBJcyB0aGlzIHJvdyBjb2xsYXBzaWJsZT9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sfVxuICAgICAqL1xuICAgIGNvbGxhcHNpYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmFsbENoaWxkcmVuLmxlbmd0aCA+IDApO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHN0eWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldFN0eWxlKGNvbHVtbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGNvbHVtbi5maW5hbFdpZHRoICsgJ3B4J1xuICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlc2l6ZXIgbW91c2UgZG93biBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgcmVzaXplck1vdXNlRG93bihldmVudCwgY29sdW1uKSB7XG4gICAgICBpZiAoIXRoaXMucmVzaXplck1vdmluZykge1xuICAgICAgICB0aGlzLnJlc2l6ZXIubW92aW5nID0gY29sdW1uO1xuICAgICAgICB0aGlzLnJlc2l6ZXIueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHRoaXMucmVzaXplci5pbml0aWFsV2lkdGggPSBjb2x1bW4ud2lkdGg7XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZS1zdGFydCcsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVyIG1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHJlc2l6ZXJNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJlc2l6ZXIubW92aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXplci5tb3Zpbmcud2lkdGggPSB0aGlzLnJlc2l6ZXIuaW5pdGlhbFdpZHRoICsgZXZlbnQuY2xpZW50WCAtIHRoaXMucmVzaXplci54O1xuICAgICAgICBpZiAodGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA8IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0Lm1pbldpZHRoKSB7XG4gICAgICAgICAgdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0Lm1pbldpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZScsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVyIG1vdXNlIHVwIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICByZXNpemVyTW91c2VVcChldmVudCkge1xuICAgICAgaWYgKHRoaXMucmVzaXplci5tb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5yb290LiRlbWl0KCd0YXNrTGlzdC1jb2x1bW4td2lkdGgtY2hhbmdlJywgdGhpcy5yZXNpemVyLm1vdmluZyk7XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZS1zdG9wJywgdGhpcy5yZXNpemVyLm1vdmluZyk7XG4gICAgICAgIHRoaXMucmVzaXplci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZWRcbiAgICovXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5tb3VzZVVwTGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMucm9vdC4kb24oJ21haW4tdmlldy1tb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZXJNb3VzZU1vdmUpO1xuICAgIHRoaXMucm9vdC4kb24oJ21haW4tdmlldy1tb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJlZm9yZSBkZXN0cm95IGV2ZW50IC0gY2xlYXIgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0SXRlbSBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1cIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtJ10gfVwiPlxuICAgIDxpdGVtLWNvbHVtbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5zXCIgOmtleT1cImNvbHVtbi5faWRcIiA6Y29sdW1uPVwiY29sdW1uXCIgOnRhc2s9XCJ0YXNrXCI+XG4gICAgICA8dGFzay1saXN0LWV4cGFuZGVyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxuICAgICAgICA6dGFza3M9XCJbdGFza11cIlxuICAgICAgICA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlclwiXG4gICAgICAgIHR5cGU9XCJ0YXNrTGlzdFwiXG4gICAgICA+PC90YXNrLWxpc3QtZXhwYW5kZXI+XG4gICAgPC9pdGVtLWNvbHVtbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBUYXNrTGlzdEV4cGFuZGVyIGZyb20gJy4uL0V4cGFuZGVyLnZ1ZSc7XG5pbXBvcnQgSXRlbUNvbHVtbiBmcm9tICcuL0l0ZW1Db2x1bW4udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGFza0xpc3RJdGVtJyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0RXhwYW5kZXIsXG4gICAgSXRlbUNvbHVtblxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbHVtbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucztcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNcIiwgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX3QoXCJoZWFkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJtYWluLXZpZXdcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZm9vdGVyXCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2FsZW5kYXItd3JhcHBlclwiXSwge1xuICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIlxuICAgICAgfSlcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjYWxlbmRhclwiXSwge1xuICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5XG4gICAgICAgICAgICA/IF9jKFwiY2FsZW5kYXItcm93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmRhdGVzLm1vbnRocywgd2hpY2g6IFwibW9udGhcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZGlzcGxheVxuICAgICAgICAgICAgPyBfYyhcImNhbGVuZGFyLXJvd1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5kYXRlcy5kYXlzLCB3aGljaDogXCJkYXlcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXlcbiAgICAgICAgICAgID8gX2MoXCJjYWxlbmRhci1yb3dcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZGF0ZXMuaG91cnMsIHdoaWNoOiBcImhvdXJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy0tXCIgKyBfdm0ud2hpY2gsXG4gICAgICBzdHlsZTogX3ZtLnJvd1N0eWxlXG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaXRlbS5rZXksXG4gICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LS1cIiArXG4gICAgICAgICAgICBfdm0ud2hpY2gsXG4gICAgICAgICAgc3R5bGU6IF92bS5yZWN0U3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKGl0ZW0uY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkLCBjaGlsZEluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBjaGlsZC5rZXksXG4gICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QtY2hpbGQgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLVwiICtcbiAgICAgICAgICAgICAgICBfdm0ud2hpY2gsXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0ucmVjdENoaWxkU3R5bGVbaXRlbUluZGV4XVtjaGlsZEluZGV4XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dC0tXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0ud2hpY2gsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLnRleHRTdHlsZShjaGlsZClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGNoaWxkLmxhYmVsKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2hhcnRcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0XCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydFwiXSlcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcImNoYXJ0Q2FsZW5kYXJDb250YWluZXJcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50LWVsYXN0aWNfX2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lclwiXSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArIFwicHhcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImNhbGVuZGFyXCIpXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJjaGFydEdyYXBoQ29udGFpbmVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudC1lbGFzdGljX19jaGFydC1ncmFwaC1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1ncmFwaC1jb250YWluZXJcIl0sIHtcbiAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgLVxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArXG4gICAgICAgICAgICAgIFwicHhcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWFyZWFcIl0sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGhcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWdyYXBoXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjaGFydEdyYXBoU3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZ3JhcGgtc3ZnXCJdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRheXMtaGlnaGxpZ2h0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJncmlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkZXBlbmRlbmN5LWxpbmVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2tzOiBfdm0ucm9vdC52aXNpYmxlVGFza3MgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yb290LnZpc2libGVUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdGFzay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy13cmFwcGVyXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0YXNrOiB0YXNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKHRhc2sudHlwZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5zaG93V29ya2luZ0RheXNcbiAgICA/IF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRheXMtaGlnaGxpZ2h0LWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWRheXMtaGlnaGxpZ2h0LWNvbnRhaW5lclwiXVxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS53b3JraW5nRGF5cywgZnVuY3Rpb24oZGF5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwicmVjdFwiLCB7XG4gICAgICAgICAgICBrZXk6IF92bS5nZXRLZXkoZGF5KSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRheXMtaGlnaGxpZ2h0LXJlY3RcIixcbiAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgeDogZGF5Lm9mZnNldC5weCxcbiAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBkYXkud2lkdGgucHgsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic3ZnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLWNvbnRhaW5lclwiXVxuICAgICAgKSxcbiAgICAgIGF0dHJzOiB7IHg6IFwiMFwiLCB5OiBcIjBcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH1cbiAgICB9LFxuICAgIF92bS5fbChfdm0uZGVwZW5kZW5jeVRhc2tzLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IGtleTogdGFzay5pZCwgYXR0cnM6IHsgdGFzazogdGFzayB9IH0sXG4gICAgICAgIF92bS5fbCh0YXNrLmRlcGVuZGVuY3lMaW5lcywgZnVuY3Rpb24oZGVwZW5kZW5jeUxpbmUpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIGtleTogZGVwZW5kZW5jeUxpbmUuaWQsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGhcIixcbiAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGhcIl0sXG4gICAgICAgICAgICAgIHRhc2suc3R5bGVbXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGhcIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyB0YXNrOiB0YXNrLCBkOiBkZXBlbmRlbmN5TGluZS5wb2ludHMgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHJlZjogXCJjaGFydFwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lcy13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmVzLXdyYXBwZXJcIl0pLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgeDogXCIwXCIsXG4gICAgICAgIHk6IFwiMFwiLFxuICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCxcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lc1wiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImdyaWQtbGluZXNcIl0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLmhvcml6b250YWxMaW5lcywgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgIGtleTogbGluZS5rZXksXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS1ob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImdyaWQtbGluZS1ob3Jpem9udGFsXCJdKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgeDE6IGxpbmUueDEsIHkxOiBsaW5lLnkxLCB4MjogbGluZS54MiwgeTI6IGxpbmUueTIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udmVydGljYWxMaW5lcywgZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgIGtleTogbGluZS5rZXksXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS12ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtdmVydGljYWxcIl0pLFxuICAgICAgICAgICAgICBhdHRyczogeyB4MTogbGluZS54MSwgeTE6IGxpbmUueTEsIHgyOiBsaW5lLngyLCB5MjogbGluZS55MiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS10aW1lXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtdGltZVwiXSksXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB4MTogX3ZtLnRpbWVMaW5lUG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTE6IF92bS50aW1lTGluZVBvc2l0aW9uLnkxLFxuICAgICAgICAgICAgICB4MjogX3ZtLnRpbWVMaW5lUG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgeTI6IF92bS50aW1lTGluZVBvc2l0aW9uLnkyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyXCJdLFxuICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiXVxuICAgICAgKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkZWZzXCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJwYXR0ZXJuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwiZGlhZ29uYWxIYXRjaFwiLFxuICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLndpZHRoLFxuICAgICAgICAgICAgICBwYXR0ZXJuVHJhbnNmb3JtOiBcInJvdGF0ZSg0NSAwIDApXCIsXG4gICAgICAgICAgICAgIHBhdHRlcm5Vbml0czogXCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmVcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmVcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmVcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4MTogXCIwXCIsXG4gICAgICAgICAgICAgICAgeTE6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHgyOiBcIjBcIixcbiAgICAgICAgICAgICAgICB5MjogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy5iYXJcbiAgICAgICAgPyBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZFwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZFwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHg6IFwiMFwiLCB5OiBcIjBcIiwgd2lkdGg6IF92bS5nZXRQcm9ncmVzc1dpZHRoIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3MucGF0dGVyblxuICAgICAgICA/IF9jKFwiZ1wiLCBbXG4gICAgICAgICAgICBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm5cIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm5cIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm5cIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4OiBfdm0uZ2V0UHJvZ3Jlc3NXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiBcIjBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwIC0gX3ZtLnRhc2sucHJvZ3Jlc3MgKyBcIiVcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZVwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZVwiXSxcbiAgICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImJhc2VcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZDogX3ZtLmdldExpbmVQb2ludHMgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdLFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5kaXNwbGF5RXhwYW5kZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS1taWxlc3RvbmVcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlclwiXSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyLS1taWxlc3RvbmVcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1leHBhbmRlclwiXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay54IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueSArXG4gICAgICAgICAgICAgICAgICAoX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImV4cGFuZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGFza3M6IFtfdm0udGFza10sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGFydFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctbWlsZXN0b25lXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LW1pbGVzdG9uZVwiXSxcbiAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXVxuICAgICAgICAgICksXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IF92bS50YXNrLngsXG4gICAgICAgICAgICB5OiBfdm0udGFzay55LFxuICAgICAgICAgICAgd2lkdGg6IF92bS50YXNrLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBfdm0udGFzay5oZWlnaHQsXG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCBcIiArIF92bS50YXNrLndpZHRoICsgXCIgXCIgKyBfdm0udGFzay5oZWlnaHQsXG4gICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcImNsaWNrXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWVudGVyXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3ZlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3V0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlbW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWRvd25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNldXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNld2hlZWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoc3RhcnRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2htb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hlbmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGVmc1wiLCBbXG4gICAgICAgICAgICBfYyhcImNsaXBQYXRoXCIsIHsgYXR0cnM6IHsgaWQ6IF92bS5jbGlwUGF0aElkIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInBvbHlnb25cIiwgeyBhdHRyczogeyBwb2ludHM6IF92bS5nZXRQb2ludHMgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicG9seWdvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJiYXNlXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHBvaW50czogX3ZtLmdldFBvaW50cyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0YXNrOiBfdm0udGFzayxcbiAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogXCJ1cmwoI1wiICsgX3ZtLmNsaXBQYXRoSWQgKyBcIilcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcbiAgICAgICAgPyBfYyhcImNoYXJ0LXRleHRcIiwgeyBhdHRyczogeyB0YXNrOiBfdm0udGFzayB9IH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0LXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2plY3Qtd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5kaXNwbGF5RXhwYW5kZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS1wcm9qZWN0XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tcHJvamVjdFwiXSxcbiAgICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrLnggLVxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplLFxuICAgICAgICAgICAgICAgIHk6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay55ICtcbiAgICAgICAgICAgICAgICAgIChfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC9cbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoYXJ0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0XCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2plY3RcIl0sXG4gICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl1cbiAgICAgICAgICApLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBfdm0udGFzay54LFxuICAgICAgICAgICAgeTogX3ZtLnRhc2sueSxcbiAgICAgICAgICAgIHdpZHRoOiBfdm0udGFzay53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgXCIgKyBfdm0udGFzay53aWR0aCArIFwiIFwiICsgX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHsgYXR0cnM6IHsgZDogX3ZtLmdldFBvaW50cyB9IH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdC1wb2x5Z29uXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiYmFzZVwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyBkOiBfdm0uZ2V0UG9pbnRzIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicHJvZ3Jlc3MtYmFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRhc2s6IF92bS50YXNrLFxuICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBcInVybCgjXCIgKyBfdm0uY2xpcFBhdGhJZCArIFwiKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnRleHQuZGlzcGxheVxuICAgICAgICA/IF9jKFwiY2hhcnQtdGV4dFwiLCB7IGF0dHJzOiB7IHRhc2s6IF92bS50YXNrIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2std3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGFzay13cmFwcGVyXCJdLFxuICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXVxuICAgICAgKVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLmRpc3BsYXlFeHBhbmRlclxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXItLXRhc2tcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlclwiXSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyLS10YXNrXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueCAtXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUsXG4gICAgICAgICAgICAgICAgeTpcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrLnkgK1xuICAgICAgICAgICAgICAgICAgKF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCAtXG4gICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgL1xuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJleHBhbmRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRhc2tzOiBbX3ZtLnRhc2tdLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hhcnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInN2Z1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2tcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyXCJdLFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGFza1wiXSxcbiAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXVxuICAgICAgICAgICksXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IF92bS50YXNrLngsXG4gICAgICAgICAgICB5OiBfdm0udGFzay55LFxuICAgICAgICAgICAgd2lkdGg6IF92bS50YXNrLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBfdm0udGFzay5oZWlnaHQsXG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCBcIiArIF92bS50YXNrLndpZHRoICsgXCIgXCIgKyBfdm0udGFzay5oZWlnaHQsXG4gICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcImNsaWNrXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWVudGVyXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3ZlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3V0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlbW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWRvd25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNldXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNld2hlZWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoc3RhcnRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2htb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hlbmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGVmc1wiLCBbXG4gICAgICAgICAgICBfYyhcImNsaXBQYXRoXCIsIHsgYXR0cnM6IHsgaWQ6IF92bS5jbGlwUGF0aElkIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInBvbHlnb25cIiwgeyBhdHRyczogeyBwb2ludHM6IF92bS5nZXRQb2ludHMgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicG9seWdvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2stcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGFzay1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImJhc2VcIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHsgcG9pbnRzOiBfdm0uZ2V0UG9pbnRzIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicHJvZ3Jlc3MtYmFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRhc2s6IF92bS50YXNrLFxuICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBcInVybCgjXCIgKyBfdm0uY2xpcFBhdGhJZCArIFwiKVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnRleHQuZGlzcGxheVxuICAgICAgICA/IF9jKFwiY2hhcnQtdGV4dFwiLCB7IGF0dHJzOiB7IHRhc2s6IF92bS50YXNrIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LXdyYXBwZXJcIl0pLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgeDpcbiAgICAgICAgICBfdm0udGFzay54ICtcbiAgICAgICAgICBfdm0udGFzay53aWR0aCArXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0Lm9mZnNldCxcbiAgICAgICAgeTogX3ZtLnRhc2sueSAtIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCxcbiAgICAgICAgd2lkdGg6IF92bS5nZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBfdm0uZ2V0SGVpZ2h0XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgeDogXCIwXCIsIHk6IFwiMFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogX3ZtLmdldEhlaWdodCB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0XCJdKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaHRtbFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29udGVudFN0eWxlOiBfdm0uY29udGVudFN0eWxlIH1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGFzay5sYWJlbCkpXSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmh0bWxcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50IGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLWh0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dC1jb250ZW50XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICB7IGNvbnRlbnRTdHlsZTogX3ZtLmNvbnRlbnRTdHlsZSB9XG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50YXNrLmxhYmVsKSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi13cmFwcGVyXCJdLFxuICAgICAgICBfdm0uc3R5bGVcbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5hbGxDaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3NQcmVmaXgoKSArIFwiLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWNvbnRlbnRcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IF92bS5vcHRpb25zLnNpemUsIGhlaWdodDogX3ZtLm9wdGlvbnMuc2l6ZSB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3NQcmVmaXgoKSArIFwiLWJvcmRlclwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItYm9yZGVyXCJdLFxuICAgICAgICAgICAgICAgICAgeyBib3JkZXJTdHlsZTogX3ZtLmJvcmRlclN0eWxlIH1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB4OiBfdm0uYm9yZGVyLFxuICAgICAgICAgICAgICAgICAgeTogX3ZtLmJvcmRlcixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ub3B0aW9ucy5zaXplIC0gX3ZtLmJvcmRlciAqIDIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5vcHRpb25zLnNpemUgLSBfdm0uYm9yZGVyICogMixcbiAgICAgICAgICAgICAgICAgIHJ4OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIHJ5OiBcIjJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5hbGxDaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3NQcmVmaXgoKSArIFwiLWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWxpbmVcIl1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB4MTogX3ZtLmxpbmVPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgeTE6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHgyOiBfdm0ub3B0aW9ucy5zaXplIC0gX3ZtLmxpbmVPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgeTI6IF92bS5vcHRpb25zLnNpemUgLyAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNvbGxhcHNlZFxuICAgICAgICAgICAgICAgID8gX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItbGluZVwiXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHgxOiBfdm0ub3B0aW9ucy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICB5MTogX3ZtLmxpbmVPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgeDI6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHkyOiBfdm0ub3B0aW9ucy5zaXplIC0gX3ZtLmxpbmVPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX21haW4tdmlld1wiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wibWFpbi12aWV3XCJdKVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lci13cmFwcGVyXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wibWFpbi1jb250YWluZXItd3JhcHBlclwiXSwge1xuICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArIFwicHhcIlxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJtYWluVmlld1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJtYWluLWNvbnRhaW5lclwiXSwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjb250YWluZXJcIl0pLFxuICAgICAgICAgICAgICAgICAgb246IHsgbW91c2Vtb3ZlOiBfdm0ubW91c2VNb3ZlLCBtb3VzZXVwOiBfdm0ubW91c2VVcCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRhc2tMaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZmluYWxXaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidGFzay1saXN0XCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjaGFydENvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJtYWluLXZpZXctY29udGFpbmVyXCJdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBfdm0uY2hhcnRNb3VzZURvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaHN0YXJ0OiBfdm0uY2hhcnRNb3VzZURvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXVwOiBfdm0uY2hhcnRNb3VzZVVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlbmQ6IF92bS5jaGFydE1vdXNlVXAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYXJ0TW91c2VNb3ZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYXJ0TW91c2VNb3ZlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVlbDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhcnRXaGVlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJjaGFydFwiKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1zY3JvbGwtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWxcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnZlcnRpY2FsU3R5bGVcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgb246IHsgc2Nyb2xsOiBfdm0ub25WZXJ0aWNhbFNjcm9sbCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLS12ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxcHhcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcImNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWxcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1zY3JvbGwtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsXCJdLFxuICAgICAgICAgICAgeyBtYXJnaW5MZWZ0OiBfdm0uZ2V0TWFyZ2luTGVmdCB9XG4gICAgICAgICAgKSxcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vbkhvcml6b250YWxTY3JvbGwgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLS1ob3Jpem9udGFsXCIsXG4gICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IFwiMXB4XCIsIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLWNvbHVtblwiLFxuICAgICAgc3R5bGU6IF92bS5pdGVtQ29sdW1uU3R5bGVcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiBfdm0ud3JhcHBlclN0eWxlXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS5jb250YWluZXJTdHlsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5odG1sXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS52YWx1ZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2V1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2V3aGVlbDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0udmFsdWUpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0udmFsdWVTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnZhbHVlKSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXksXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICByZWY6IFwidGFza0xpc3RXcmFwcGVyXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3Qtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LXdyYXBwZXJcIl0sIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICB9KVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwidGFza0xpc3RcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3RcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3RcIl0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRhc2stbGlzdC1oZWFkZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJ0YXNrTGlzdEl0ZW1zXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtc1wiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaXRlbXNcIl0sIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucm9vdC52aXNpYmxlVGFza3MsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGFzay1saXN0LWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgIGtleTogdGFzay5pZCxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YXNrOiB0YXNrIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyXCJdLCB7XG4gICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyBcInB4XCIsXG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArIFwicHhcIlxuICAgICAgfSlcbiAgICB9LFxuICAgIF92bS5fbChfdm0ucm9vdC5nZXRUYXNrTGlzdENvbHVtbnMsIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjb2x1bW4uX2lkLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1jb2x1bW5cIl0sXG4gICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWNvbHVtblwiXSxcbiAgICAgICAgICAgIF92bS5nZXRTdHlsZShjb2x1bW4pXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgY29sdW1uLmV4cGFuZGVyXG4gICAgICAgICAgICA/IF9jKFwidGFzay1saXN0LWV4cGFuZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGFza3M6IF92bS5jb2xsYXBzaWJsZSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1sYWJlbFwiXSxcbiAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uIH0sXG4gICAgICAgICAgICAgIG9uOiB7IG1vdXNldXA6IF92bS5yZXNpemVyTW91c2VVcCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKGNvbHVtbi5sYWJlbCkgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlclwiXSxcbiAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlclwiXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW46IGNvbHVtbiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2l6ZXJNb3VzZURvd24oJGV2ZW50LCBjb2x1bW4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplclwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplclwiXSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyXCJdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbVwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWl0ZW1cIl0pXG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLmNvbHVtbnMsIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcIml0ZW0tY29sdW1uXCIsXG4gICAgICAgIHsga2V5OiBjb2x1bW4uX2lkLCBhdHRyczogeyBjb2x1bW46IGNvbHVtbiwgdGFzazogX3ZtLnRhc2sgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgY29sdW1uLmV4cGFuZGVyXG4gICAgICAgICAgICA/IF9jKFwidGFzay1saXN0LWV4cGFuZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGFza3M6IFtfdm0udGFza10sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0YXNrTGlzdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImMzZTUwODVjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJjNjMwNGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyYzYzMDRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyYzYzMDRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYzYzMDRjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyYzYzMDRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvR2FudHRFbGFzdGljLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYzYzMDRjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlMTA4ZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RlZTEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RlZTEwOGUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlMTA4ZTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGVlMTA4ZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlZTEwOGUyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FsZW5kYXJSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkYWYwNmZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkYWYwNmZiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGRhZjA2ZmInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyUm93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FsZW5kYXJSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYWYwNmZiJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdjM2Y1Y2QmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3YzNmNWNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3YzNmNWNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdjM2Y1Y2QmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjdjM2Y1Y2QnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YzNmNWNkJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmZlNjRlOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFiZmU2NGU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFiZmU2NGU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmZlNjRlOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYmZlNjRlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmZlNjRlOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMWNiZjZiYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMWNiZjZiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMWNiZjZiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMWNiZjZiYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmMWNiZjZiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvRGVwZW5kZW5jeUxpbmVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmY5NzlhNyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiZjk3OWE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiZjk3OWE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmY5NzlhNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYmY5NzlhNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmY5NzlhNyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiYzM5MzU1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YmMzOTM1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YmMzOTM1NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiYzM5MzU1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiYzM5MzU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmMzOTM1NSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDEzMDA2YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMDEzMDA2YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMDEzMDA2YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDEzMDA2YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMDEzMDA2YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L01pbGVzdG9uZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01pbGVzdG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDEzMDA2YyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc3YmJkNzMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNzdiYmQ3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNzdiYmQ3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc3YmJkNzMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDc3YmJkNzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3N2JiZDczJlwiIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2sgbWl4aW5cbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGJveFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRWaWV3Qm94KCkge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFzaztcbiAgICAgIHJldHVybiBgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ3JvdXAgdHJhbnNmb3JtXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEdyb3VwVHJhbnNmb3JtKCkge1xuICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt0aGlzLnRhc2sueH0gJHt0aGlzLnRhc2sueX0pYDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHdlIGRpc3BsYXkgZXhwYW5kZXI/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkaXNwbGF5RXhwYW5kZXIoKSB7XG4gICAgICBjb25zdCBleHBhbmRlciA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyO1xuICAgICAgcmV0dXJuIGV4cGFuZGVyLmRpc3BsYXkgfHwgKGV4cGFuZGVyLmRpc3BsYXlJZlRhc2tMaXN0SGlkZGVuICYmICF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5KTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBFbWl0IGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBlbWl0RXZlbnQoZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nKSB7XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdChgY2hhcnQtJHt0aGlzLnRhc2sudHlwZX0tJHtldmVudE5hbWV9YCwgeyBldmVudCwgZGF0YTogdGhpcy50YXNrIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljMjNlY2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlOWMyM2VjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlOWMyM2VjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljMjNlY2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTljMjNlY2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5YzIzZWNhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTljMmZlNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ1OWMyZmU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ1OWMyZmU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTljMmZlNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NTljMmZlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvVGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTljMmZlNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOWEyMTE3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOWEyMTE3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA5YTIxMTc3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWEyMTE3NyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYmM0MjEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYmM0MjEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBiYzQyMTJlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9NYWluVmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmM0MjEyZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjYjVhNmM5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjYjVhNmM5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2I1YTZjOTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTExZjEyZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmUxMWYxMmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmUxMWYxMmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTExZjEyZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZTExZjEyZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUxMWYxMmYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWVmZGQ3YzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWVmZGQ3YzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhZWZkZDdjOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWVmZGQ3YzgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjI5M2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTcxNjI5M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTcxNjI5M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjI5M2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTcxNjI5M2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NzE2MjkzYyZcIiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBTdHlsZXMgZm9yIGdhbnR0LWVsYXN0aWNcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGUoZm9udFNpemUgPSAnMTJweCcsIGZvbnRGYW1pbHkgPSAnQXJpYWwsIHNhbnMtc2VyaWYnKSB7XG4gIHJldHVybiB7XG4gICAgZm9udFNpemUsXG4gICAgZm9udEZhbWlseSxcbiAgICAnbWFpbi12aWV3Jzoge1xuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnXG4gICAgfSxcbiAgICAnbWFpbi1jb250YWluZXItd3JhcHBlcic6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdib3JkZXItdG9wJzogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ21haW4tY29udGFpbmVyJzoge1xuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJSdcbiAgICB9LFxuICAgICdtYWluLXZpZXctY29udGFpbmVyJzoge30sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseSxcbiAgICAgIG1hcmdpbjogJzBweCBhdXRvJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZjNmNWY3NDcnLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtYmV0d2VlbidcbiAgICB9LFxuICAgICdoZWFkZXItdGl0bGUnOiB7IGZsb2F0OiAnbGVmdCcgfSxcbiAgICAnaGVhZGVyLW9wdGlvbnMnOiB7IGZsb2F0OiAncmlnaHQnIH0sXG4gICAgJ2hlYWRlci10aXRsZS0tdGV4dCc6IHtcbiAgICAgICdmb250LXNpemUnOiAnMjBweCcsXG4gICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJyxcbiAgICAgICdmb250LXdlaWdodCc6ICc0MDAnLFxuICAgICAgJ2xpbmUtaGVpZ2h0JzogJzM1cHgnLFxuICAgICAgJ3BhZGRpbmctbGVmdCc6ICcyMnB4JyxcbiAgICAgICdsZXR0ZXItc3BhY2luZyc6ICcxcHgnXG4gICAgfSxcbiAgICAnaGVhZGVyLXRpdGxlLS1odG1sJzoge1xuICAgICAgJ2ZvbnQtc2l6ZSc6ICcyMHB4JyxcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLFxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgICAnbGluZS1oZWlnaHQnOiAnMzVweCcsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJzIycHgnLFxuICAgICAgJ2xldHRlci1zcGFjaW5nJzogJzFweCdcbiAgICB9LFxuICAgICdoZWFkZXItYnRuLXJlY2VudGVyJzoge1xuICAgICAgYmFja2dyb3VuZDogJyM5NUE1QTYnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgJ2JvcmRlci1yYWRpdXMnOiAnM3B4JyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnMjdweCcsXG4gICAgICAnZm9udC1zaXplJzogJzE2cHgnLFxuICAgICAgcGFkZGluZzogJzhweCAxMnB4J1xuICAgIH0sXG4gICAgJ2hlYWRlci1zbGlkZXInOiB7fSxcbiAgICAnaGVhZGVyLXNsaWRlci13cmFwcGVyJzogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScgfSxcbiAgICAnaGVhZGVyLXNsaWRlci0tc2xpZGVyJzoge30sXG4gICAgJ2hlYWRlci1zbGlkZXItLXByb2Nlc3MnOiB7IGJhY2tncm91bmQ6ICcjY2NjJyB9LFxuICAgICdoZWFkZXItdGFzay1saXN0LXN3aXRjaC0tbGFiZWwnOiB7fSxcbiAgICAnaGVhZGVyLXRhc2stbGlzdC1zd2l0Y2gnOiB7IG1hcmdpbjogJzBweCAxNXB4JywgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScgfSxcbiAgICAnaGVhZGVyLWxhYmVsJzoge30sXG4gICAgJ2NhbGVuZGFyLXdyYXBwZXInOiB7XG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZSdcbiAgICB9LFxuICAgIGNhbGVuZGFyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmM2Y1ZjcnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0sXG4gICAgJ2NhbGVuZGFyLXJvdyc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtZXZlbmx5J1xuICAgIH0sXG4gICAgJ2NhbGVuZGFyLXJvdy0tbW9udGgnOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LS1kYXknOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LS1ob3VyJzoge1xuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnXG4gICAgfSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtLW1vbnRoJzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1kYXknOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtLWhvdXInOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgJ2JvcmRlci1yaWdodC13aWR0aCc6ICcxcHgnLCAvLyBDYWxlbmRhclxuICAgICAgJ2JvcmRlci1yaWdodC1jb2xvcic6ICcjZGFkYWRhJyxcbiAgICAgICdib3JkZXItcmlnaHQtc3R5bGUnOiAnc29saWQnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tbW9udGgnOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLWRheSc6IHsgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0taG91cic6IHsgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyB9LFxuICAgICdjYWxlbmRhci1yb3ctdGV4dCc6IHtcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksIC8vIEdhbnR0RWxhc3RpY1xuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLCAvL0dhbnR0RWxhc3RpY1xuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctdGV4dC0tbW9udGgnOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LXRleHQtLWRheSc6IHt9LFxuICAgICdjYWxlbmRhci1yb3ctdGV4dC0taG91cic6IHt9LFxuICAgICd0YXNrLWxpc3Qtd3JhcHBlcic6IHt9LFxuICAgICd0YXNrLWxpc3QnOiB7IGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsICdib3JkZXItY29sb3InOiAnI2VlZScgfSxcbiAgICAndGFzay1saXN0LWhlYWRlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLFxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItY29sdW1uJzoge1xuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjMDAwMDAwNTAnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2YzZjVmNycsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3RyYW5zcGFyZW50J1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci13cmFwcGVyJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICdmbGV4LXNocmluayc6ICcwJyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAnMCAwIDAgMTBweCdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtZXhwYW5kZXItY29udGVudCc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLWxpbmUnOiB7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogJzEnLFxuICAgICAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci1ib3JkZXInOiB7XG4gICAgICBmaWxsOiAnI2ZmZmZmZmEwJyxcbiAgICAgIHN0cm9rZTogJyMwMDAwMDA4MCdcbiAgICB9LFxuICAgICdjaGFydC1leHBhbmRlci13cmFwcGVyJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICdsaW5lLWhlaWdodCc6ICcxJyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgICdjaGFydC1leHBhbmRlci1jb250ZW50Jzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luOiAnYXV0byAwcHgnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZSdcbiAgICB9LFxuICAgICdjaGFydC1leHBhbmRlci1saW5lJzoge1xuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6ICcxJyxcbiAgICAgICdzdHJva2UtbGluZWNhcCc6ICdyb3VuZCdcbiAgICB9LFxuICAgICdjaGFydC1leHBhbmRlci1ib3JkZXInOiB7XG4gICAgICBmaWxsOiAnI2ZmZmZmZmEwJyxcbiAgICAgIHN0cm9rZTogJyMwMDAwMDA4MCdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtY29udGFpbmVyJzoge30sXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItbGFiZWwnOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAndGV4dC1vdmVyZmxvdyc6ICdlbGxpcHNpcycsXG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LFxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46ICdhdXRvIDZweCcsXG4gICAgICAnZmxleC1ncm93JzogJzEnLFxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZSdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnNnB4JyxcbiAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdjZW50ZXInXG4gICAgfSxcbiAgICAndGFzay1saXN0LWhlYWRlci1yZXNpemVyJzogeyBtYXJnaW46ICdhdXRvIDBweCcgfSxcbiAgICAndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCc6IHtcbiAgICAgIHdpZHRoOiAnM3B4JyxcbiAgICAgIGhlaWdodDogJzNweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2RkZCcsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICcxMDAlJyxcbiAgICAgIG1hcmdpbjogJzRweCAwcHgnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWl0ZW1zJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcbiAgICAndGFzay1saXN0LWl0ZW0nOiB7XG4gICAgICAnYm9yZGVyLXRvcCc6ICcxcHggc29saWQgI2VlZScsXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1pdGVtLWNvbHVtbic6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICAnZmxleC1zaHJpbmsnOiAnMCcsXG4gICAgICAnYm9yZGVyLWxlZnQnOiAnMXB4IHNvbGlkICMwMDAwMDA1MCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3JkZXItY29sb3InOiAnI2VlZSdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lcic6IHtcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1pdGVtLXZhbHVlJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICdmbGV4LXNocmluayc6ICcxMDAnLFxuICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseSxcbiAgICAgICdmb250LXNpemUnOiBmb250U2l6ZSxcbiAgICAgICdtYXJnaW4tdG9wJzogJ2F1dG8nLFxuICAgICAgJ21hcmdpbi1ib3R0b20nOiAnYXV0bycsXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnNnB4JywgLy8gVGFza0xpc3RcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnNnB4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICd0ZXh0LW92ZXJmbG93JzogJ2VsbGlwc2lzJyxcbiAgICAgICdsaW5lLWhlaWdodCc6ICcxLjVlbScsXG4gICAgICAnd29yZC1icmVhayc6ICdrZWVwLWFsbCcsXG4gICAgICAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJyxcbiAgICAgIGNvbG9yOiAnIzYwNjA2MCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRidcbiAgICB9LFxuICAgICdncmlkLWxpbmVzJzoge30sXG4gICAgJ2dyaWQtbGluZS1ob3Jpem9udGFsJzoge1xuICAgICAgc3Ryb2tlOiAnIzAwMDAwMDEwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAxXG4gICAgfSxcbiAgICAnZ3JpZC1saW5lLXZlcnRpY2FsJzoge1xuICAgICAgc3Ryb2tlOiAnIzAwMDAwMDEwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAxXG4gICAgfSxcbiAgICAnZ3JpZC1saW5lLXRpbWUnOiB7XG4gICAgICBzdHJva2U6ICcjRkYwMDAwODAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcbiAgICB9LFxuICAgIGNoYXJ0OiB7XG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICAgICdjaGFydC1jYWxlbmRhci1jb250YWluZXInOiB7XG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxuICAgICAgJ2JvcmRlci1yaWdodCc6ICcxcHggc29saWQgI2VlZSdcbiAgICB9LFxuICAgICdjaGFydC1ncmFwaC1jb250YWluZXInOiB7XG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxuICAgICAgJ2JvcmRlci1yaWdodCc6ICcxcHggc29saWQgI2VlZSdcbiAgICB9LFxuICAgICdjaGFydC1hcmVhJzoge30sXG4gICAgJ2NoYXJ0LWdyYXBoJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXRleHQtd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1yb3ctdGV4dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmYTAnLFxuICAgICAgJ2JvcmRlci1yYWRpdXMnOiAnMTBweCcsXG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LFxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLFxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogJ25vcm1hbCcsXG4gICAgICBjb2xvcjogJyMwMDAwMDBhMCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXRleHQtY29udGVudCc6IHtcbiAgICAgIHBhZGRpbmc6ICcwcHggNnB4J1xuICAgIH0sXG4gICAgJ2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHQnOiB7fSxcbiAgICAnY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbCc6IHt9LFxuICAgICdjaGFydC1yb3ctd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1yb3ctYmFyLXdyYXBwZXInOiB7fSxcbiAgICAnY2hhcnQtcm93LWJhcic6IHt9LFxuICAgICdjaGFydC1yb3ctYmFyLXBvbHlnb24nOiB7XG4gICAgICBzdHJva2U6ICcjRTc0QzNDJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAxLFxuICAgICAgZmlsbDogJyNGNzVDNEMnXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXByb2plY3Qtd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1yb3ctcHJvamVjdCc6IHt9LFxuICAgICdjaGFydC1yb3ctcHJvamVjdC1wb2x5Z29uJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1yb3ctbWlsZXN0b25lJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvbic6IHt9LFxuICAgICdjaGFydC1yb3ctdGFzay13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy10YXNrJzoge30sXG4gICAgJ2NoYXJ0LXJvdy10YXNrLXBvbHlnb24nOiB7fSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXInOiB7fSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lJzoge1xuICAgICAgc3Ryb2tlOiAnI2ZmZmZmZjI1JyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyMFxuICAgIH0sXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWQnOiB7XG4gICAgICBmaWxsOiAnIzBFQUM1MScsXG4gICAgICBoZWlnaHQ6ICcyMCUnXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuJzoge1xuICAgICAgZmlsbDogJ3VybCgjZGlhZ29uYWxIYXRjaCknLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwLjEpIHNjYWxlWSgwLjgpJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZSc6IHtcbiAgICAgIHN0cm9rZTogJyNFNzRDM0MnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcbiAgICB9LFxuICAgICdjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXdyYXBwZXInOiB7fSxcbiAgICAnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoJzoge1xuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHN0cm9rZTogJyNGRmEwMDA5MCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMlxuICAgIH0sXG4gICAgJ2NoYXJ0LXNjcm9sbC1jb250YWluZXInOiB7fSxcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbCc6IHtcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnXG4gICAgfSxcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnOiB7XG4gICAgICAnb3ZlcmZsb3cteSc6ICdhdXRvJyxcbiAgICAgICdvdmVyZmxvdy14JzogJ2hpZGRlbicsXG4gICAgICAnbWF4LWhlaWdodCc6ICcxMDAlJyxcbiAgICAgIGZsb2F0OiAncmlnaHQnXG4gICAgfSxcbiAgICAnY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdCc6IHtcbiAgICAgIGZpbGw6ICcjZjNmNWY3ODAnXG4gICAgfSxcbiAgICAnc2xvdC1oZWFkZXItYmVmb3JlT3B0aW9ucyc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=