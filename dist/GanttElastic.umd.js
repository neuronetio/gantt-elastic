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
exports.i(__webpack_require__(/*! -!../node_modules/css-loader!./styles/ganttElastic.css */ "./node_modules/css-loader/index.js!./src/styles/ganttElastic.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/styles/ganttElastic.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader!./src/styles/ganttElastic.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gantt-elastic__main-view svg{\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line, .gantt-elastic__grid-vertical-line{\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > *{\n  margin: 0px;\n}\n.gantt-elastic .p-2{\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container , .gantt-elastic__main-view-container{\n  overflow: hidden;\n  max-width:100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type{\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type{\n  border-bottom:1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container{\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value{\n  position: absolute;\n}\n", ""]);

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

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",i="hour",r="day",s="week",u="month",a="quarter",o="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+c(i,2,"0")+":"+c(r,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(e,u),r=n-i<0,s=t.clone().add(e+(r?-1:1),u);return Number(-(e+(n-i)/(r?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:r,h:i,m:e,s:n,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof S},M=function(t,n,e){var i;if(!t)return null;if("string"==typeof t)m[t]&&(i=t),n&&(m[t]=n,i=t);else{var r=t.name;m[r]=t,i=r}return e||(l=i),i},g=function(t,n,e){if(y(t))return t.clone();var i=n?"string"==typeof n?{format:n,pl:e}:n:{};return i.date=t,new S(i)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var S=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(h);if(i)return e?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",r)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",i)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var h=this,f=!!D.u(a)||a,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(r)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case o:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,S=(l<g?l+7:l)-g;return d(f?y-S:y+(6-S),m);case r:case"date":return $(M+"Hours",0);case i:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[r]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[o]=c+"FullYear",h[i]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===r?this.$D+(a-this.$W):a;if(f===u||f===o){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,a){var h,f=this;t=Number(t);var c=D.p(a),d=function(n){var e=new Date(f.$d);return e.setDate(e.getDate()+n*t),D.w(e,f)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===r)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[i]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),r=this.$locale(),s=r.weekdays,u=r.months,a=function(t,n,e,i){return t&&t[n]||e[n].substr(0,i)},o=function(t){return D.s(n.$H%12||12,t,"0")},h={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:D.s(this.$M+1,2,"0"),MMM:a(r.monthsShort,this.$M,u,3),MMMM:u[this.$M],D:String(this.$D),DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:a(r.weekdaysMin,this.$W,s,2),ddd:a(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:D.s(this.$H,2,"0"),h:o(1),hh:o(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:D.s(this.$m,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return e.replace(f,function(t,n){return n||h[t]||i.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[o]=y/12,c[u]=y,c[a]=y/3,c[s]=(m-l)/6048e5,c[r]=(m-l)/864e5,c[i]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=S.prototype,g.extend=function(t,n){return t(n,S,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


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
  let fontSize = '12px';
  let fontFamily = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-family')
    .toString();
  if (typeof userOptions.style !== 'undefined') {
    if (typeof userOptions.style.fontSize !== 'undefined') {
      fontSize = userOptions.fontSize;
    }
    if (typeof userOptions.style.fontFamily !== 'undefined') {
      fontFamily = userOptions.style.fontFamily;
    }
  }
  return {
    style: Object(_style_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fontSize, fontFamily),
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
          Object.assign(target, { [key]: {} });
        }
        target[key] = mergeDeep(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        target[key] = source[key].map(item => {
          if (isObject(item)) {
            return mergeDeep({}, item);
          }
          return item;
        });
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key];
        }
      } else {
        Object.assign(target, { [key]: source[key] });
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
function notEqualDeep(left, right, cache = []) {
  if (typeof right !== typeof left) {
    return { left, right, what: 'typeof' };
  } else if (Array.isArray(left) && !Array.isArray(right)) {
    return { left, right, what: 'isArray' };
  } else if (Array.isArray(right) && !Array.isArray(left)) {
    return { left, right, what: 'isArray' };
  } else if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) {
      return { left, right, what: 'length' };
    }
    let what;
    for (let index = 0, len = left.length; index < len; index++) {
      if ((what = notEqualDeep(left[index], right[index], cache))) {
        return what;
      }
    }
  } else if (isObject(left) && !isObject(right)) {
    return { left, right, what: 'isObject' };
  } else if (isObject(right) && !isObject(left)) {
    return { left, right, what: 'isObject' };
  } else if (isObject(left) && isObject(right)) {
    for (let key in left) {
      if (!left.hasOwnProperty(key) || !left.propertyIsEnumerable(key)) {
        continue;
      }
      if (!right.hasOwnProperty(key)) {
        return { left, right, what: key };
      }
      let what;
      if ((what = notEqualDeep(left[key], right[key], cache))) {
        return what;
      }
    }
  } else if (left !== right) {
    return { left, right, what: '!==' };
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
  props: ['tasks', 'options'],
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
          scroll: {
            left: 0,
            top: 0
          }
        },
        refs: {},
        tasksById: {},
        taskTree: {},
        ctx,
        emitTasksChanges: true, // some operations may pause emitting changes to parent component
        emitOptionsChanges: true, // some operations may pause emitting changes to parent component
        resizeObserver: null,
        unwatchTasks: null,
        unwatchOptions: null,
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
      this.state.options.style['chart-scroll-container--vertical']['margin-left'] = `-${height}px`;
      return (this.state.options.scrollBarHeight = height);
    },

    /**
     * Fill out empty task properties and make it reactive
     */
    refreshTasks() {
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
        if (typeof task.collapsed === 'undefined') {
          this.$set(task, 'collapsed', false);
        }
        if (typeof task.dependentOn === 'undefined') {
          this.$set(task, 'dependentOn', []);
        }
        if (typeof task.parentId === 'undefined') {
          this.$set(task, 'parentId', null);
        }
        if (typeof task.style === 'undefined') {
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
        if (typeof task.startTime === 'undefined') {
          this.$set(task, 'startTime', dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.start).valueOf());
        }
        if (typeof task.endTime === 'undefined' && task.hasOwnProperty('end')) {
          this.$set(task, 'endTime', dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.end).valueOf());
        } else if (typeof task.endTime === 'undefined' && task.hasOwnProperty('duration')) {
          this.$set(task, 'endTime', task.startTime + task.duration);
        }
        if (typeof task.duration === 'undefined' && task.hasOwnProperty('endTime')) {
          this.$set(task, 'duration', task.endTime - task.startTime);
        }
        return task;
      });
    },

    /**
     * Map tasks
     *
     * @param {Array} tasks
     * @param {Object} options
     */
    mapTasks(tasks, options) {
      return tasks.map(task => {
        return mergeDeep(
          {},
          {
            ...task,
            id: task[options.taskMapping.id],
            start: task[options.taskMapping.start],
            label: task[options.taskMapping.label],
            duration: task[options.taskMapping.duration],
            progress: task[options.taskMapping.progress],
            type: task[options.taskMapping.type],
            style: task[options.taskMapping.style],
            collapsed: task[options.taskMapping.collapsed]
          }
        );
      });
    },

    /**
     * Initialize component
     */
    initialize(itsUpdate = '') {
      const options = this.mergeDeep({}, getOptions(this.options), this.options);
      const tasks = this.tasks.map(task => mergeDeep({}, task));
      switch (itsUpdate) {
        case 'tasks':
          this.mergeDeepReactive(this, this.state, {
            tasks: this.mapTasks(tasks, options)
          });
          break;
        case 'options':
          this.mergeDeepReactive(this, this.state, { options });
          break;
        default:
          this.mergeDeepReactive(
            this,
            this.state,
            { options },
            {
              tasks: this.mapTasks(tasks, options)
            }
          );
      }
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(this.state.options.locale, null, true);
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(this.state.options.locale.name);
      if (typeof this.state.options.taskList === 'undefined') {
        this.$set(this.state.options, 'taskList', {});
      }
      if (typeof this.state.options.taskList.columns === 'undefined') {
        this.$set(this.state.options.taskList, 'columns', []);
      }
      this.state.options.taskList.columns = this.state.options.taskList.columns.map((column, index) => {
        this.$set(column, 'thresholdPercent', 100);
        this.$set(column, 'widthFromPercentage', 0);
        this.$set(column, 'finalWidth', 0);
        if (typeof column.height === 'undefined') {
          this.$set(column, 'height', 0);
        }
        if (typeof column.style === 'undefined') {
          this.$set(column, 'style', {});
        }
        this.$set(column, '_id', `${index}-${column.label}`);
        return column;
      });
      if (itsUpdate === '' || itsUpdate === 'tasks') {
        // initialize observer
        this.refreshTasks();
        this.$set(this.state, 'rootTask', {
          id: null,
          label: 'root',
          children: [],
          allChildren: [],
          parents: [],
          parent: null,
          __root: true
        });
        this.resetTaskTree();
        this.$set(this.state, 'taskTree', this.makeTaskTree(this.state.rootTask));
        this.$set(this.state, 'tasks', this.state.taskTree.allChildren.map(childId => this.getTask(childId)));
      }
      this.calculateTaskListColumnsDimensions();
      this.getScrollBarHeight();
      this.$set(this.state.options, 'scrollBarHeight', this.getScrollBarHeight());
      this.$set(this.state.options, 'outerHeight', this.state.options.height + this.state.options.scrollBarHeight);
      this.globalOnResize();
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
    resetTaskTree() {
      this.state.rootTask.children = [];
      this.state.rootTask.allChildren = [];
      this.state.rootTask.parent = null;
      this.state.rootTask.parents = [];
      this.state.tasksById = {};
      for (let i = 0, len = this.state.tasks.length; i < len; i++) {
        let current = this.state.tasks[i];
        current.children = [];
        current.allChildren = [];
        current.parent = null;
        current.parents = [];
        this.state.tasksById[current.id] = current;
      }
    },

    /**
     * Make task tree, after reset - look above
     *
     * @param {object} task
     * @returns {object} tasks with children and parents
     */
    makeTaskTree(task) {
      for (let i = 0, len = this.state.tasks.length; i < len; i++) {
        let current = this.state.tasks[i];
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
          current = this.makeTaskTree(current);
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
      this.state.options.scroll.chart.dateTime.left = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.scroll.chart.time);
      this.state.options.scroll.chart.dateTime.right = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(
        this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth)
      );
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
      const style = this.style[('calendar-row-text', 'calendar-row-text--hour')];
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
      const style = this.style[('calendar-row-text', 'calendar-row-text--day')];
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
      const style = this.style[('calendar-row-text', 'calendar-row-text--month')];
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
      return this.state.options.style;
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
      { deep: true }
    );
    this.state.unwatchOptions = this.$watch(
      'options',
      opts => {
        const notEqual = notEqualDeep(opts, this.outputOptions);
        if (notEqual) {
          this.setup('options');
        }
      },
      { deep: true }
    );

    this.state.unwatchOutputTasks = this.$watch(
      'outputTasks',
      tasks => {
        const notEqual = notEqualDeep(this.tasks, tasks);
        if (notEqual && this.state.emitTasksChanges) {
          this.$emit('tasks-updated', tasks);
        }
      },
      { deep: true }
    );
    this.state.unwatchOutputOptions = this.$watch(
      'outputOptions',
      options => {
        const notEqual = notEqualDeep(this.options, options);
        if (notEqual && this.state.emitOptionsChanges) {
          this.$emit('options-updated', options);
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
//
//
//
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
      return `0 0 ${Math.round(this.getWidth)} ${this.root.state.options.allVisibleTasksHeight}`;
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
     * Chceck if specified line is inside viewport (visible)
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
//
//
//
//
//
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
      style: Object.assign(
        {},
        _vm.root.style["calendar-row"],
        _vm.root.style["calendar-row--" + _vm.which]
      )
    },
    _vm._l(_vm.items, function(item) {
      return _c(
        "div",
        {
          key: item.key,
          class:
            "gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--" +
            _vm.which,
          style: Object.assign(
            {},
            _vm.root.style["calendar-row-rect"],
            _vm.root.style["calendar-row-rect--" + _vm.which]
          )
        },
        _vm._l(item.children, function(child) {
          return _c(
            "div",
            {
              key: child.key,
              class:
                "gantt-elastic__calendar-row-rect-child gantt-elastic__calendar-row-rect-child-" +
                _vm.which,
              style: Object.assign(
                {},
                _vm.root.style["calendar-row-rect-child"],
                _vm.root.style["calendar-row-rect-child-" + _vm.which],
                { width: child.width + "px", height: child.height + "px" }
              )
            },
            [
              _c(
                "div",
                {
                  class:
                    "gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--" +
                    _vm.which,
                  style: Object.assign(
                    {},
                    _vm.root.style["calendar-row-text"],
                    _vm.root.style["calendar-row-text--" + _vm.which],
                    { left: _vm.getTextX(child) + "px" }
                  )
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
                { verticalStyle: _vm.verticalStyle }
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
      style: Object.assign(
        {},
        _vm.root.style["task-list-item-column"],
        _vm.column.style["task-list-item-column"],
        {
          width: _vm.column.finalWidth + "px",
          height: _vm.column.height + "px"
        }
      )
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__task-list-item-value-wrapper",
          style: Object.assign(
            {},
            _vm.root.style["task-list-item-value-wrapper"],
            _vm.column.style["task-list-item-value-wrapper"]
          )
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-item-value-container",
              style: Object.assign(
                {},
                _vm.root.style["task-list-item-value-container"],
                _vm.column.style["task-list-item-value-container"]
              )
            },
            [
              !_vm.html
                ? _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__task-list-item-value",
                      style: Object.assign(
                        {},
                        _vm.root.style["task-list-item-value"],
                        _vm.column.style["task-list-item-value"]
                      ),
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
                    style: Object.assign(
                      {},
                      _vm.root.style["task-list-item-value"],
                      _vm.column.style["task-list-item-value"]
                    ),
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
    '*': {
      'box-sizing': 'border-box'
    },
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
    'calendar-row-rect-child': {
      display: 'inline-block',
      'border-right-width': '1px', // Calendar
      'border-right-color': '#dadada',
      'border-right-style': 'solid',
      position: 'relative'
    },
    'calendar-row-text': {
      'font-family': fontFamily, // GanttElastic
      'font-size': fontSize, //GanttElastic
      color: '#606060',
      display: 'inline-block',
      position: 'relative'
    },
    'calendar-row-rect--month': {},
    'calendar-row-text--month': {},
    'calendar-row-rect--day': {},
    'calendar-row-text--day': {},
    'calendar-row-rect--hour': {},
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
      stroke: '#000000'
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
      stroke: '#000000'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT83ZjFmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9zdHlsZXMvZ2FudHRFbGFzdGljLmNzcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvcmVzaXplLW9ic2VydmVyLXBvbHlmaWxsL2Rpc3QvUmVzaXplT2JzZXJ2ZXIuZXMuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9HYW50dEVsYXN0aWMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyUm93LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9EYXlzSGlnaGxpZ2h0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGVwZW5kZW5jeUxpbmVzLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Byb2dyZXNzQmFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L01pbGVzdG9uZS52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT8wZGY5Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZT9iYzA4Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyUm93LnZ1ZT8xMTM4Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZT8yODgxIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlPzQ1NmYiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGVwZW5kZW5jeUxpbmVzLnZ1ZT83ZWUyIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0dyaWQudnVlPzU5YjciLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlPzRhYzMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L01pbGVzdG9uZS52dWU/ZDdkYyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvUHJvamVjdC52dWU/OTBkZCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWU/NjdiYSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZT9jYWM0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZT83MGVjIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZT80YWRiIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlPzk2OWIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlPzFlOWIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlPzg4MDgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZT9jYmNiIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWU/MzBjNSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT9jYTJhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzVhMjAiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWU/NjUxNiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlPzQwZDUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlP2EwMjkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyUm93LnZ1ZT8yNTViIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyUm93LnZ1ZT9hYzFhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0NoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWU/N2Y5YyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWU/NGUzZCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EYXlzSGlnaGxpZ2h0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EYXlzSGlnaGxpZ2h0LnZ1ZT83ZTMzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlPzdlZDIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGVwZW5kZW5jeUxpbmVzLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzcxNjQiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGVwZW5kZW5jeUxpbmVzLnZ1ZT8zZGUzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0dyaWQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0dyaWQudnVlPzc3NjEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/NGZhMCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlPzlhYWIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlPzE4MDQiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L01pbGVzdG9uZS52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L01pbGVzdG9uZS52dWU/OTIzOSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZT8yZjNjIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvUHJvamVjdC52dWU/NTRjOSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvUHJvamVjdC52dWU/NjVlZiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay5taXhpbi5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlPzg2ODciLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlPzRhMTgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvVGV4dC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvVGV4dC52dWU/MTdiMSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZT9mMjdhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWU/MDg5OCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWU/OGRmMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9NYWluVmlldy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlP2Y1YjMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlP2VkODciLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWU/ODgxNCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9JdGVtQ29sdW1uLnZ1ZT8xNGFjIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWU/NzM1NCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWU/ZDlkZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlPzYzNTMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlP2JjNzIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlPzY0ZjgiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZT84N2JhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9zdHlsZS5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvZXh0ZXJuYWwgXCJ2dWVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzk0QlM7QUFDSjtBQUN1QjtBQUNmO0FBQ29COztBQUV0RDtBQUNBLGNBQWMsMENBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlEQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw0Q0FBSztBQUM1QztBQUNBO0FBQ0EscUNBQXFDLDRDQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsTUFBTSw0Q0FBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDRDQUFLO0FBQzNELHVEQUF1RCw0Q0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw0Q0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNENBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQUs7QUFDMUIsMEJBQTBCLDRDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDRDQUFLO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNENBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdFQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9oREY7QUFDa0I7QUFDN0I7QUFDZjtBQUNBO0FBQ0EsSUFBSSxxRUFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQUs7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUmE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y0QjtBQUNrQjtBQUNBO0FBQ0k7QUFDbEI7QUFDVTtBQUNKO0FBQ3pCO0FBQ2Y7QUFDQTtBQUNBLElBQUksdURBQUk7QUFDUixJQUFJLDZFQUFlO0FBQ25CLElBQUksd0VBQVE7QUFDWixJQUFJLDJEQUFJO0FBQ1IsSUFBSSxxRUFBUztBQUNiLElBQUksaUVBQU87QUFDWCxJQUFJLHlFQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGd0I7QUFDWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSw0Q0FBSztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR2E7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q2tDO0FBQ1M7QUFDSDtBQUNGO0FBQ3pCO0FBQ2Y7QUFDQTtBQUNBLElBQUksNERBQVM7QUFDYixJQUFJLHFFQUFXO0FBQ2YsSUFBSSwrREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0RBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Da0M7QUFDUztBQUNIO0FBQ0Y7QUFDekI7QUFDZjtBQUNBO0FBQ0EsSUFBSSw0REFBUztBQUNiLElBQUkscUVBQVc7QUFDZixJQUFJLCtEQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RrQztBQUNTO0FBQ0g7QUFDRjtBQUN6QjtBQUNmO0FBQ0E7QUFDQSxJQUFJLDREQUFTO0FBQ2IsSUFBSSxxRUFBVztBQUNmLElBQUksK0RBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0M2QztBQUNUOztBQUV2QjtBQUNmO0FBQ0E7QUFDQSxJQUFJLHdFQUFRO0FBQ1osSUFBSSwrREFBSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pOYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmdEO0FBQ0o7QUFDL0I7QUFDZjtBQUNBO0FBQ0EsSUFBSSwyRUFBYztBQUNsQixJQUFJLHVFQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0I2QztBQUNoQztBQUNmO0FBQ0E7QUFDQSxJQUFJLHVFQUFnQjtBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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bGFzdGljLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ2dWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR2FudHRFbGFzdGljXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHYW50dEVsYXN0aWNcIl0gPSBmYWN0b3J5KHJvb3RbXCJ2dWVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvR2FudHRFbGFzdGljLnZ1ZVwiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzL2dhbnR0RWxhc3RpYy5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldyBzdmd7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtaG9yaXpvbnRhbC1saW5lLCAuZ2FudHQtZWxhc3RpY19fZ3JpZC12ZXJ0aWNhbC1saW5le1xcbiAgc3Ryb2tlOiAjYTBhMGEwO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5mb3JlaWduT2JqZWN0ID4gKntcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4uZ2FudHQtZWxhc3RpYyAucC0ye1xcbiAgcGFkZGluZzogMTByZW07XFxufVxcbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXctbWFpbi1jb250YWluZXIgLCAuZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lcntcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6MTAwJTtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uOmxhc3Qtb2YtdHlwZXtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA1MDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtOmxhc3Qtb2YtdHlwZXtcXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDAwMDA1MDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIge1xcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIgPiAuZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIgPiAuZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWV7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOnQuZGF5anM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLG49XCJzZWNvbmRcIixlPVwibWludXRlXCIsaT1cImhvdXJcIixyPVwiZGF5XCIscz1cIndlZWtcIix1PVwibW9udGhcIixhPVwicXVhcnRlclwiLG89XCJ5ZWFyXCIsaD0vXihcXGR7NH0pLT8oXFxkezEsMn0pLT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT8uPyhcXGR7MSwzfSk/JC8sZj0vXFxbKFteXFxdXSspXXxZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csYz1mdW5jdGlvbih0LG4sZSl7dmFyIGk9U3RyaW5nKHQpO3JldHVybiFpfHxpLmxlbmd0aD49bj90OlwiXCIrQXJyYXkobisxLWkubGVuZ3RoKS5qb2luKGUpK3R9LGQ9e3M6Yyx6OmZ1bmN0aW9uKHQpe3ZhciBuPS10LnV0Y09mZnNldCgpLGU9TWF0aC5hYnMobiksaT1NYXRoLmZsb29yKGUvNjApLHI9ZSU2MDtyZXR1cm4objw9MD9cIitcIjpcIi1cIikrYyhpLDIsXCIwXCIpK1wiOlwiK2MociwyLFwiMFwiKX0sbTpmdW5jdGlvbih0LG4pe3ZhciBlPTEyKihuLnllYXIoKS10LnllYXIoKSkrKG4ubW9udGgoKS10Lm1vbnRoKCkpLGk9dC5jbG9uZSgpLmFkZChlLHUpLHI9bi1pPDAscz10LmNsb25lKCkuYWRkKGUrKHI/LTE6MSksdSk7cmV0dXJuIE51bWJlcigtKGUrKG4taSkvKHI/aS1zOnMtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKGgpe3JldHVybntNOnUseTpvLHc6cyxkOnIsaDppLG06ZSxzOm4sbXM6dCxROmF9W2hdfHxTdHJpbmcoaHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSwkPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIil9LGw9XCJlblwiLG09e307bVtsXT0kO3ZhciB5PWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgU30sTT1mdW5jdGlvbih0LG4sZSl7dmFyIGk7aWYoIXQpcmV0dXJuIG51bGw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpbVt0XSYmKGk9dCksbiYmKG1bdF09bixpPXQpO2Vsc2V7dmFyIHI9dC5uYW1lO21bcl09dCxpPXJ9cmV0dXJuIGV8fChsPWkpLGl9LGc9ZnVuY3Rpb24odCxuLGUpe2lmKHkodCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgaT1uP1wic3RyaW5nXCI9PXR5cGVvZiBuP3tmb3JtYXQ6bixwbDplfTpuOnt9O3JldHVybiBpLmRhdGU9dCxuZXcgUyhpKX0sRD1kO0QubD1NLEQuaT15LEQudz1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQse2xvY2FsZTpuLiRMLHV0YzpuLiR1fSl9O3ZhciBTPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYyh0KXt0aGlzLiRMPXRoaXMuJEx8fE0odC5sb2NhbGUsbnVsbCwhMCl8fGwsdGhpcy5wYXJzZSh0KX12YXIgZD1jLnByb3RvdHlwZTtyZXR1cm4gZC5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZGF0ZSxlPXQudXRjO2lmKG51bGw9PT1uKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKEQudShuKSlyZXR1cm4gbmV3IERhdGU7aWYobiBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKG4pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuJiYhL1okL2kudGVzdChuKSl7dmFyIGk9bi5tYXRjaChoKTtpZihpKXJldHVybiBlP25ldyBEYXRlKERhdGUuVVRDKGlbMV0saVsyXS0xLGlbM118fDEsaVs0XXx8MCxpWzVdfHwwLGlbNl18fDAsaVs3XXx8MCkpOm5ldyBEYXRlKGlbMV0saVsyXS0xLGlbM118fDEsaVs0XXx8MCxpWzVdfHwwLGlbNl18fDAsaVs3XXx8MCl9cmV0dXJuIG5ldyBEYXRlKG4pfSh0KSx0aGlzLmluaXQoKX0sZC5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sZC4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gRH0sZC5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuIShcIkludmFsaWQgRGF0ZVwiPT09dGhpcy4kZC50b1N0cmluZygpKX0sZC5pc1NhbWU9ZnVuY3Rpb24odCxuKXt2YXIgZT1nKHQpO3JldHVybiB0aGlzLnN0YXJ0T2Yobik8PWUmJmU8PXRoaXMuZW5kT2Yobil9LGQuaXNBZnRlcj1mdW5jdGlvbih0LG4pe3JldHVybiBnKHQpPHRoaXMuc3RhcnRPZihuKX0sZC5pc0JlZm9yZT1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmVuZE9mKG4pPGcodCl9LGQuJGc9ZnVuY3Rpb24odCxuLGUpe3JldHVybiBELnUodCk/dGhpc1tuXTp0aGlzLnNldChlLHQpfSxkLnllYXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiR5XCIsbyl9LGQubW9udGg9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRNXCIsdSl9LGQuZGF5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkV1wiLHIpfSxkLmRhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiREXCIsXCJkYXRlXCIpfSxkLmhvdXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuJGcodCxcIiRIXCIsaSl9LGQubWludXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRnKHQsXCIkbVwiLGUpfSxkLnNlY29uZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kZyh0LFwiJHNcIixuKX0sZC5taWxsaXNlY29uZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy4kZyhuLFwiJG1zXCIsdCl9LGQudW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LGQudmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sZC5zdGFydE9mPWZ1bmN0aW9uKHQsYSl7dmFyIGg9dGhpcyxmPSEhRC51KGEpfHxhLGM9RC5wKHQpLGQ9ZnVuY3Rpb24odCxuKXt2YXIgZT1ELncoaC4kdT9EYXRlLlVUQyhoLiR5LG4sdCk6bmV3IERhdGUoaC4keSxuLHQpLGgpO3JldHVybiBmP2U6ZS5lbmRPZihyKX0sJD1mdW5jdGlvbih0LG4pe3JldHVybiBELncoaC50b0RhdGUoKVt0XS5hcHBseShoLnRvRGF0ZSgpLChmP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UobikpLGgpfSxsPXRoaXMuJFcsbT10aGlzLiRNLHk9dGhpcy4kRCxNPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goYyl7Y2FzZSBvOnJldHVybiBmP2QoMSwwKTpkKDMxLDExKTtjYXNlIHU6cmV0dXJuIGY/ZCgxLG0pOmQoMCxtKzEpO2Nhc2Ugczp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsUz0obDxnP2wrNzpsKS1nO3JldHVybiBkKGY/eS1TOnkrKDYtUyksbSk7Y2FzZSByOmNhc2VcImRhdGVcIjpyZXR1cm4gJChNK1wiSG91cnNcIiwwKTtjYXNlIGk6cmV0dXJuICQoTStcIk1pbnV0ZXNcIiwxKTtjYXNlIGU6cmV0dXJuICQoTStcIlNlY29uZHNcIiwyKTtjYXNlIG46cmV0dXJuICQoTStcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LGQuZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sZC4kc2V0PWZ1bmN0aW9uKHMsYSl7dmFyIGgsZj1ELnAocyksYz1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksZD0oaD17fSxoW3JdPWMrXCJEYXRlXCIsaC5kYXRlPWMrXCJEYXRlXCIsaFt1XT1jK1wiTW9udGhcIixoW29dPWMrXCJGdWxsWWVhclwiLGhbaV09YytcIkhvdXJzXCIsaFtlXT1jK1wiTWludXRlc1wiLGhbbl09YytcIlNlY29uZHNcIixoW3RdPWMrXCJNaWxsaXNlY29uZHNcIixoKVtmXSwkPWY9PT1yP3RoaXMuJEQrKGEtdGhpcy4kVyk6YTtpZihmPT09dXx8Zj09PW8pe3ZhciBsPXRoaXMuY2xvbmUoKS5zZXQoXCJkYXRlXCIsMSk7bC4kZFtkXSgkKSxsLmluaXQoKSx0aGlzLiRkPWwuc2V0KFwiZGF0ZVwiLE1hdGgubWluKHRoaXMuJEQsbC5kYXlzSW5Nb250aCgpKSkudG9EYXRlKCl9ZWxzZSBkJiZ0aGlzLiRkW2RdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxkLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LG4pfSxkLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tELnAodCldKCl9LGQuYWRkPWZ1bmN0aW9uKHQsYSl7dmFyIGgsZj10aGlzO3Q9TnVtYmVyKHQpO3ZhciBjPUQucChhKSxkPWZ1bmN0aW9uKG4pe3ZhciBlPW5ldyBEYXRlKGYuJGQpO3JldHVybiBlLnNldERhdGUoZS5nZXREYXRlKCkrbip0KSxELncoZSxmKX07aWYoYz09PXUpcmV0dXJuIHRoaXMuc2V0KHUsdGhpcy4kTSt0KTtpZihjPT09bylyZXR1cm4gdGhpcy5zZXQobyx0aGlzLiR5K3QpO2lmKGM9PT1yKXJldHVybiBkKDEpO2lmKGM9PT1zKXJldHVybiBkKDcpO3ZhciAkPShoPXt9LGhbZV09NmU0LGhbaV09MzZlNSxoW25dPTFlMyxoKVtjXXx8MSxsPXRoaXMudmFsdWVPZigpK3QqJDtyZXR1cm4gRC53KGwsdGhpcyl9LGQuc3VidHJhY3Q9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxuKX0sZC5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuXCJJbnZhbGlkIERhdGVcIjt2YXIgZT10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1ELnoodGhpcykscj10aGlzLiRsb2NhbGUoKSxzPXIud2Vla2RheXMsdT1yLm1vbnRocyxhPWZ1bmN0aW9uKHQsbixlLGkpe3JldHVybiB0JiZ0W25dfHxlW25dLnN1YnN0cigwLGkpfSxvPWZ1bmN0aW9uKHQpe3JldHVybiBELnMobi4kSCUxMnx8MTIsdCxcIjBcIil9LGg9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTpTdHJpbmcodGhpcy4keSksTTpTdHJpbmcodGhpcy4kTSsxKSxNTTpELnModGhpcy4kTSsxLDIsXCIwXCIpLE1NTTphKHIubW9udGhzU2hvcnQsdGhpcy4kTSx1LDMpLE1NTU06dVt0aGlzLiRNXSxEOlN0cmluZyh0aGlzLiREKSxERDpELnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDphKHIud2Vla2RheXNNaW4sdGhpcy4kVyxzLDIpLGRkZDphKHIud2Vla2RheXNTaG9ydCx0aGlzLiRXLHMsMyksZGRkZDpzW3RoaXMuJFddLEg6U3RyaW5nKHRoaXMuJEgpLEhIOkQucyh0aGlzLiRILDIsXCIwXCIpLGg6bygxKSxoaDpvKDIpLGE6dGhpcy4kSDwxMj9cImFtXCI6XCJwbVwiLEE6dGhpcy4kSDwxMj9cIkFNXCI6XCJQTVwiLG06U3RyaW5nKHRoaXMuJG0pLG1tOkQucyh0aGlzLiRtLDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOkQucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpELnModGhpcy4kbXMsMyxcIjBcIiksWjppfTtyZXR1cm4gZS5yZXBsYWNlKGYsZnVuY3Rpb24odCxuKXtyZXR1cm4gbnx8aFt0XXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSl9LGQudXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LGQuZGlmZj1mdW5jdGlvbih0LGgsZil7dmFyIGMsZD1ELnAoaCksJD1nKHQpLGw9NmU0KigkLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpLG09dGhpcy0kLHk9RC5tKHRoaXMsJCk7cmV0dXJuIHk9KGM9e30sY1tvXT15LzEyLGNbdV09eSxjW2FdPXkvMyxjW3NdPShtLWwpLzYwNDhlNSxjW3JdPShtLWwpLzg2NGU1LGNbaV09bS8zNmU1LGNbZV09bS82ZTQsY1tuXT1tLzFlMyxjKVtkXXx8bSxmP3k6RC5hKHkpfSxkLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YodSkuJER9LGQuJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBtW3RoaXMuJExdfSxkLmxvY2FsZT1mdW5jdGlvbih0LG4pe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBlPXRoaXMuY2xvbmUoKTtyZXR1cm4gZS4kTD1NKHQsbiwhMCksZX0sZC5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBELncodGhpcy50b0RhdGUoKSx0aGlzKX0sZC50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy4kZCl9LGQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKX0sZC50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LGQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxjfSgpO3JldHVybiBnLnByb3RvdHlwZT1TLnByb3RvdHlwZSxnLmV4dGVuZD1mdW5jdGlvbih0LG4pe3JldHVybiB0KG4sUyxnKSxnfSxnLmxvY2FsZT1NLGcuaXNEYXlqcz15LGcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gZygxZTMqdCl9LGcuZW49bVtsXSxnLkxzPW0sZ30pO1xuIiwiLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBzaGltcyB0aGF0IHByb3ZpZGUgbWluaW1hbCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBFUzYgY29sbGVjdGlvbnMuXHJcbiAqXHJcbiAqIFRoZXNlIGltcGxlbWVudGF0aW9ucyBhcmUgbm90IG1lYW50IHRvIGJlIHVzZWQgb3V0c2lkZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJcclxuICogbW9kdWxlcyBhcyB0aGV5IGNvdmVyIG9ubHkgYSBsaW1pdGVkIHJhbmdlIG9mIHVzZSBjYXNlcy5cclxuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtanNkb2MsIHZhbGlkLWpzZG9jICovXHJcbnZhciBNYXBTaGltID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBNYXA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5kZXggaW4gcHJvdmlkZWQgYXJyYXkgdGhhdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQga2V5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBhcnJcclxuICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRJbmRleChhcnIsIGtleSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAtMTtcclxuICAgICAgICBhcnIuc29tZShmdW5jdGlvbiAoZW50cnksIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeVswXSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX2VudHJpZXNfXy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9fZW50cmllc19fW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5WzFdO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcGFyYW0geyp9IHZhbHVlXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfX1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18ucHVzaChba2V5LCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9fZW50cmllc19fO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleChlbnRyaWVzLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+Z2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnNwbGljZSgwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbY3R4PW51bGxdXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XHJcbiAgICAgICAgICAgIGlmIChjdHggPT09IHZvaWQgMCkgeyBjdHggPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9fZW50cmllc19fOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVudHJ5WzFdLCBlbnRyeVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgfSgpKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIERldGVjdHMgd2hldGhlciB3aW5kb3cgYW5kIGRvY3VtZW50IG9iamVjdHMgYXJlIGF2YWlsYWJsZSBpbiBjdXJyZW50IGVudmlyb25tZW50LlxyXG4gKi9cclxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ID09PSBkb2N1bWVudDtcblxuLy8gUmV0dXJucyBnbG9iYWwgb2JqZWN0IG9mIGEgY3VycmVudCBlbnZpcm9ubWVudC5cclxudmFyIGdsb2JhbCQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBBIHNoaW0gZm9yIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggZmFsbHMgYmFjayB0byB0aGUgc2V0VGltZW91dCBpZlxyXG4gKiBmaXJzdCBvbmUgaXMgbm90IHN1cHBvcnRlZC5cclxuICpcclxuICogQHJldHVybnMge251bWJlcn0gUmVxdWVzdHMnIGlkZW50aWZpZXIuXHJcbiAqL1xyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBJdCdzIHJlcXVpcmVkIHRvIHVzZSBhIGJvdW5kZWQgZnVuY3Rpb24gYmVjYXVzZSBJRSBzb21ldGltZXMgdGhyb3dzXHJcbiAgICAgICAgLy8gYW4gXCJJbnZhbGlkIGNhbGxpbmcgb2JqZWN0XCIgZXJyb3IgaWYgckFGIGlzIGludm9rZWQgd2l0aG91dCB0aGUgZ2xvYmFsXHJcbiAgICAgICAgLy8gb2JqZWN0IG9uIHRoZSBsZWZ0IGhhbmQgc2lkZS5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQoZ2xvYmFsJDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaykgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjayhEYXRlLm5vdygpKTsgfSwgMTAwMCAvIDYwKTsgfTtcclxufSkoKTtcblxuLy8gRGVmaW5lcyBtaW5pbXVtIHRpbWVvdXQgYmVmb3JlIGFkZGluZyBhIHRyYWlsaW5nIGNhbGwuXHJcbnZhciB0cmFpbGluZ1RpbWVvdXQgPSAyO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggZW5zdXJlcyB0aGF0IHByb3ZpZGVkIGNhbGxiYWNrIHdpbGwgYmVcclxuICogaW52b2tlZCBvbmx5IG9uY2UgZHVyaW5nIHRoZSBzcGVjaWZpZWQgZGVsYXkgcGVyaW9kLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGRlbGF5IHBlcmlvZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgYWZ0ZXIgd2hpY2ggdG8gaW52b2tlIGNhbGxiYWNrLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvdHRsZSAoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgICB2YXIgbGVhZGluZ0NhbGwgPSBmYWxzZSwgdHJhaWxpbmdDYWxsID0gZmFsc2UsIGxhc3RDYWxsVGltZSA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGFuZCBzY2hlZHVsZXMgbmV3IGludm9jYXRpb24gaWZcclxuICAgICAqIHRoZSBcInByb3h5XCIgd2FzIGNhbGxlZCBkdXJpbmcgY3VycmVudCByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZXNvbHZlUGVuZGluZygpIHtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyYWlsaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBwcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCBhZnRlciB0aGUgc3BlY2lmaWVkIGRlbGF5LiBJdCB3aWxsIGZ1cnRoZXIgcG9zdHBvbmVcclxuICAgICAqIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIGRlbGVnYXRpbmcgaXQgdG8gdGhlXHJcbiAgICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHRpbWVvdXRDYWxsYmFjaygpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMShyZXNvbHZlUGVuZGluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNjaGVkdWxlcyBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcHJveHkoKSB7XHJcbiAgICAgICAgdmFyIHRpbWVTdGFtcCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIC8vIFJlamVjdCBpbW1lZGlhdGVseSBmb2xsb3dpbmcgY2FsbHMuXHJcbiAgICAgICAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0Q2FsbFRpbWUgPCB0cmFpbGluZ1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXcgY2FsbCB0byBiZSBpbiBpbnZva2VkIHdoZW4gdGhlIHBlbmRpbmcgb25lIGlzIHJlc29sdmVkLlxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBmb3IgXCJ0cmFuc2l0aW9uc1wiIHdoaWNoIG5ldmVyIGFjdHVhbGx5IHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHNvIHRoZXJlIGlzIGEgY2hhbmNlIHRoYXQgd2UgbWlnaHQgbWlzcyBvbmUgaWYgY2hhbmdlXHJcbiAgICAgICAgICAgIC8vIGhhcHBlbnMgYW1pZHMgdGhlIHBlbmRpbmcgaW52b2NhdGlvbi5cclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJhaWxpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RDYWxsVGltZSA9IHRpbWVTdGFtcDtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm94eTtcclxufVxuXG4vLyBNaW5pbXVtIGRlbGF5IGJlZm9yZSBpbnZva2luZyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy5cclxudmFyIFJFRlJFU0hfREVMQVkgPSAyMDtcclxuLy8gQSBsaXN0IG9mIHN1YnN0cmluZ3Mgb2YgQ1NTIHByb3BlcnRpZXMgdXNlZCB0byBmaW5kIHRyYW5zaXRpb24gZXZlbnRzIHRoYXRcclxuLy8gbWlnaHQgYWZmZWN0IGRpbWVuc2lvbnMgb2Ygb2JzZXJ2ZWQgZWxlbWVudHMuXHJcbnZhciB0cmFuc2l0aW9uS2V5cyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdzaXplJywgJ3dlaWdodCddO1xyXG4vLyBDaGVjayBpZiBNdXRhdGlvbk9ic2VydmVyIGlzIGF2YWlsYWJsZS5cclxudmFyIG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XHJcbi8qKlxyXG4gKiBTaW5nbGV0b24gY29udHJvbGxlciBjbGFzcyB3aGljaCBoYW5kbGVzIHVwZGF0ZXMgb2YgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIERPTSBsaXN0ZW5lcnMgaGF2ZSBiZWVuIGFkZGVkLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgdGhhdCBjb250cm9sbGVyIGhhcyBzdWJzY3JpYmVkIGZvciBNdXRhdGlvbiBFdmVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogS2VlcHMgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiBNdXRhdGlvbk9ic2VydmVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge011dGF0aW9uT2JzZXJ2ZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgbGlzdCBvZiBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmVyU1BJPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmVyc18gPSBbXTtcclxuICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZF8gPSB0aGlzLm9uVHJhbnNpdGlvbkVuZF8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2ggPSB0aHJvdHRsZSh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgUkVGUkVTSF9ERUxBWSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSBhZGRlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgaWYgKCF+dGhpcy5vYnNlcnZlcnNfLmluZGV4T2Yob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzXy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGxpc3RlbmVycyBpZiB0aGV5IGhhdmVuJ3QgYmVlbiBhZGRlZCB5ZXQuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5jb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIHJlbW92ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc187XHJcbiAgICAgICAgdmFyIGluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvYnNlcnZlciBpZiBpdCdzIHByZXNlbnQgaW4gcmVnaXN0cnkuXHJcbiAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVycyBpZiBjb250cm9sbGVyIGhhcyBubyBjb25uZWN0ZWQgb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJzLmxlbmd0aCAmJiB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0XygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuIEl0IHdpbGwgY29udGludWUgcnVubmluZyB1cGRhdGVzIGluc29mYXJcclxuICAgICAqIGl0IGRldGVjdHMgY2hhbmdlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjaGFuZ2VzRGV0ZWN0ZWQgPSB0aGlzLnVwZGF0ZU9ic2VydmVyc18oKTtcclxuICAgICAgICAvLyBDb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaWYgY2hhbmdlcyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYXMgdGhlcmUgbWlnaHRcclxuICAgICAgICAvLyBiZSBmdXR1cmUgb25lcyBjYXVzZWQgYnkgQ1NTIHRyYW5zaXRpb25zLlxyXG4gICAgICAgIGlmIChjaGFuZ2VzRGV0ZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBldmVyeSBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0IGFuZCBub3RpZmllcyB0aGVtIG9mIHF1ZXVlZFxyXG4gICAgICogZW50cmllcy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgXCJ0cnVlXCIgaWYgYW55IG9ic2VydmVyIGhhcyBkZXRlY3RlZCBjaGFuZ2VzIGluXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgaXQncyBlbGVtZW50cy5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS51cGRhdGVPYnNlcnZlcnNfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENvbGxlY3Qgb2JzZXJ2ZXJzIHRoYXQgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHZhciBhY3RpdmVPYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVyc18uZmlsdGVyKGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZ2F0aGVyQWN0aXZlKCksIG9ic2VydmVyLmhhc0FjdGl2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIERlbGl2ZXIgbm90aWZpY2F0aW9ucyBpbiBhIHNlcGFyYXRlIGN5Y2xlIGluIG9yZGVyIHRvIGF2b2lkIGFueVxyXG4gICAgICAgIC8vIGNvbGxpc2lvbnMgYmV0d2VlbiBvYnNlcnZlcnMsIGUuZy4gd2hlbiBtdWx0aXBsZSBpbnN0YW5jZXMgb2ZcclxuICAgICAgICAvLyBSZXNpemVPYnNlcnZlciBhcmUgdHJhY2tpbmcgdGhlIHNhbWUgZWxlbWVudCBhbmQgdGhlIGNhbGxiYWNrIG9mIG9uZVxyXG4gICAgICAgIC8vIG9mIHRoZW0gY2hhbmdlcyBjb250ZW50IGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIHRhcmdldC4gU29tZXRpbWVzXHJcbiAgICAgICAgLy8gdGhpcyBtYXkgcmVzdWx0IGluIG5vdGlmaWNhdGlvbnMgYmVpbmcgYmxvY2tlZCBmb3IgdGhlIHJlc3Qgb2Ygb2JzZXJ2ZXJzLlxyXG4gICAgICAgIGFjdGl2ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gb2JzZXJ2ZXIuYnJvYWRjYXN0QWN0aXZlKCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVPYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmNvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IGFkZGVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8IHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFN1YnNjcmlwdGlvbiB0byB0aGUgXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaXMgdXNlZCBhcyBhIHdvcmthcm91bmQgZm9yXHJcbiAgICAgICAgLy8gZGVsYXllZCB0cmFuc2l0aW9ucy4gVGhpcyB3YXkgaXQncyBwb3NzaWJsZSB0byBjYXB0dXJlIGF0IGxlYXN0IHRoZVxyXG4gICAgICAgIC8vIGZpbmFsIHN0YXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5vYnNlcnZlKGRvY3VtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuZGlzY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgcmVtb3ZlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCAhdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kXyk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbkV2ZW50fSBldmVudFxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kXyA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hLnByb3BlcnR5TmFtZSwgcHJvcGVydHlOYW1lID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XHJcbiAgICAgICAgLy8gRGV0ZWN0IHdoZXRoZXIgdHJhbnNpdGlvbiBtYXkgYWZmZWN0IGRpbWVuc2lvbnMgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICB2YXIgaXNSZWZsb3dQcm9wZXJ0eSA9IHRyYW5zaXRpb25LZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF+cHJvcGVydHlOYW1lLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaXNSZWZsb3dQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluc3RhbmNlIG9mIHRoZSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZV8pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZV8gPSBuZXcgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEhvbGRzIHJlZmVyZW5jZSB0byB0aGUgY29udHJvbGxlcidzIGluc3RhbmNlLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5pbnN0YW5jZV8gPSBudWxsO1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcclxufSgpKTtcblxuLyoqXHJcbiAqIERlZmluZXMgbm9uLXdyaXRhYmxlL2VudW1lcmFibGUgcHJvcGVydGllcyBvZiB0aGUgcHJvdmlkZWQgdGFyZ2V0IG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtIE9iamVjdCBmb3Igd2hpY2ggdG8gZGVmaW5lIHByb3BlcnRpZXMuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIFByb3BlcnRpZXMgdG8gYmUgZGVmaW5lZC5cclxuICogQHJldHVybnMge09iamVjdH0gVGFyZ2V0IG9iamVjdC5cclxuICovXHJcbnZhciBkZWZpbmVDb25maWd1cmFibGUgPSAoZnVuY3Rpb24gKHRhcmdldCwgcHJvcHMpIHtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhwcm9wcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9hW19pXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgdmFsdWU6IHByb3BzW2tleV0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufSk7XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBnbG9iYWwgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCBwcm92aWRlZCBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG52YXIgZ2V0V2luZG93T2YgPSAoZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgdGhlIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgTm9kZSwgd2hpY2ggbWVhbnMgdGhhdCBpdFxyXG4gICAgLy8gaGFzIHRoZSBcIm93bmVyRG9jdW1lbnRcIiBwcm9wZXJ0eSBmcm9tIHdoaWNoIHdlIGNhbiByZXRyaWV2ZSBhXHJcbiAgICAvLyBjb3JyZXNwb25kaW5nIGdsb2JhbCBvYmplY3QuXHJcbiAgICB2YXIgb3duZXJHbG9iYWwgPSB0YXJnZXQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQgJiYgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGxvY2FsIGdsb2JhbCBvYmplY3QgaWYgaXQncyBub3QgcG9zc2libGUgZXh0cmFjdCBvbmUgZnJvbVxyXG4gICAgLy8gcHJvdmlkZWQgZWxlbWVudC5cclxuICAgIHJldHVybiBvd25lckdsb2JhbCB8fCBnbG9iYWwkMTtcclxufSk7XG5cbi8vIFBsYWNlaG9sZGVyIG9mIGFuIGVtcHR5IGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG52YXIgZW1wdHlSZWN0ID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBwcm92aWRlZCBzdHJpbmcgdG8gYSBudW1iZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdmFsdWVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHRvRmxvYXQodmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBib3JkZXJzIHNpemUgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwb3NpdGlvbnMgLSBCb3JkZXJzIHBvc2l0aW9ucyAodG9wLCByaWdodCwgLi4uKVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHBvc2l0aW9uc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChzaXplLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1snYm9yZGVyLScgKyBwb3NpdGlvbiArICctd2lkdGgnXTtcclxuICAgICAgICByZXR1cm4gc2l6ZSArIHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHBhZGRpbmdzIHNpemVzIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQYWRkaW5ncyBib3guXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRQYWRkaW5ncyhzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG4gICAgdmFyIHBhZGRpbmdzID0ge307XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHBvc2l0aW9uc18xID0gcG9zaXRpb25zOyBfaSA8IHBvc2l0aW9uc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHBvc2l0aW9uc18xW19pXTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ3BhZGRpbmctJyArIHBvc2l0aW9uXTtcclxuICAgICAgICBwYWRkaW5nc1twb3NpdGlvbl0gPSB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYWRkaW5ncztcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBTVkcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtTVkdHcmFwaGljc0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHNcclxuICogICAgICB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIHZhciBiYm94ID0gdGFyZ2V0LmdldEJCb3goKTtcclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdCgwLCAwLCBiYm94LndpZHRoLCBiYm94LmhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgSFRNTEVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgY29udGVudCByZWN0YW5nbGUuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICAvLyBDbGllbnQgd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBjYW4ndCBiZVxyXG4gICAgLy8gdXNlZCBleGNsdXNpdmVseSBhcyB0aGV5IHByb3ZpZGUgcm91bmRlZCB2YWx1ZXMuXHJcbiAgICB2YXIgY2xpZW50V2lkdGggPSB0YXJnZXQuY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICAvLyBCeSB0aGlzIGNvbmRpdGlvbiB3ZSBjYW4gY2F0Y2ggYWxsIG5vbi1yZXBsYWNlZCBpbmxpbmUsIGhpZGRlbiBhbmRcclxuICAgIC8vIGRldGFjaGVkIGVsZW1lbnRzLiBUaG91Z2ggZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGxlc3NcclxuICAgIC8vIHRoYW4gMC41IHdpbGwgYmUgZGlzY2FyZGVkIGFzIHdlbGwuXHJcbiAgICAvL1xyXG4gICAgLy8gV2l0aG91dCBpdCB3ZSB3b3VsZCBuZWVkIHRvIGltcGxlbWVudCBzZXBhcmF0ZSBtZXRob2RzIGZvciBlYWNoIG9mXHJcbiAgICAvLyB0aG9zZSBjYXNlcyBhbmQgaXQncyBub3QgcG9zc2libGUgdG8gcGVyZm9ybSBhIHByZWNpc2UgYW5kIHBlcmZvcm1hbmNlXHJcbiAgICAvLyBlZmZlY3RpdmUgdGVzdCBmb3IgaGlkZGVuIGVsZW1lbnRzLiBFLmcuIGV2ZW4galF1ZXJ5J3MgJzp2aXNpYmxlJyBmaWx0ZXJcclxuICAgIC8vIGdpdmVzIHdyb25nIHJlc3VsdHMgZm9yIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgbGVzcyB0aGFuIDAuNS5cclxuICAgIGlmICghY2xpZW50V2lkdGggJiYgIWNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICB2YXIgc3R5bGVzID0gZ2V0V2luZG93T2YodGFyZ2V0KS5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XHJcbiAgICB2YXIgcGFkZGluZ3MgPSBnZXRQYWRkaW5ncyhzdHlsZXMpO1xyXG4gICAgdmFyIGhvcml6UGFkID0gcGFkZGluZ3MubGVmdCArIHBhZGRpbmdzLnJpZ2h0O1xyXG4gICAgdmFyIHZlcnRQYWQgPSBwYWRkaW5ncy50b3AgKyBwYWRkaW5ncy5ib3R0b207XHJcbiAgICAvLyBDb21wdXRlZCBzdHlsZXMgb2Ygd2lkdGggJiBoZWlnaHQgYXJlIGJlaW5nIHVzZWQgYmVjYXVzZSB0aGV5IGFyZSB0aGVcclxuICAgIC8vIG9ubHkgZGltZW5zaW9ucyBhdmFpbGFibGUgdG8gSlMgdGhhdCBjb250YWluIG5vbi1yb3VuZGVkIHZhbHVlcy4gSXQgY291bGRcclxuICAgIC8vIGJlIHBvc3NpYmxlIHRvIHV0aWxpemUgdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpZiBvbmx5IGl0J3MgZGF0YSB3YXNuJ3RcclxuICAgIC8vIGFmZmVjdGVkIGJ5IENTUyB0cmFuc2Zvcm1hdGlvbnMgbGV0IGFsb25lIHBhZGRpbmdzLCBib3JkZXJzIGFuZCBzY3JvbGwgYmFycy5cclxuICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoc3R5bGVzLndpZHRoKSwgaGVpZ2h0ID0gdG9GbG9hdChzdHlsZXMuaGVpZ2h0KTtcclxuICAgIC8vIFdpZHRoICYgaGVpZ2h0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgd2hlbiB0aGUgJ2JvcmRlci1ib3gnIGJveFxyXG4gICAgLy8gbW9kZWwgaXMgYXBwbGllZCAoZXhjZXB0IGZvciBJRSkuXHJcbiAgICBpZiAoc3R5bGVzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XHJcbiAgICAgICAgLy8gRm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIHJlcXVpcmVkIHRvIGhhbmRsZSBJbnRlcm5ldCBFeHBsb3JlciB3aGljaFxyXG4gICAgICAgIC8vIGRvZXNuJ3QgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB0byBjb21wdXRlZCBDU1MgZGltZW5zaW9ucy5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGNhbiBzYXkgdGhhdCBpZiBDU1MgZGltZW5zaW9ucyArIHBhZGRpbmdzIGFyZSBlcXVhbCB0byB0aGUgXCJjbGllbnRcIlxyXG4gICAgICAgIC8vIHByb3BlcnRpZXMgdGhlbiBpdCdzIGVpdGhlciBJRSwgYW5kIHRodXMgd2UgZG9uJ3QgbmVlZCB0byBzdWJ0cmFjdFxyXG4gICAgICAgIC8vIGFueXRoaW5nLCBvciBhbiBlbGVtZW50IG1lcmVseSBkb2Vzbid0IGhhdmUgcGFkZGluZ3MvYm9yZGVycyBzdHlsZXMuXHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgIT09IGNsaWVudFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ2xlZnQnLCAncmlnaHQnKSArIGhvcml6UGFkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAhPT0gY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd0b3AnLCAnYm90dG9tJykgKyB2ZXJ0UGFkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZvbGxvd2luZyBzdGVwcyBjYW4ndCBiZSBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudCdzIHJvb3QgZWxlbWVudCBhcyBpdHNcclxuICAgIC8vIGNsaWVudFtXaWR0aC9IZWlnaHRdIHByb3BlcnRpZXMgcmVwcmVzZW50IHZpZXdwb3J0IGFyZWEgb2YgdGhlIHdpbmRvdy5cclxuICAgIC8vIEJlc2lkZXMsIGl0J3MgYXMgd2VsbCBub3QgbmVjZXNzYXJ5IGFzIHRoZSA8aHRtbD4gaXRzZWxmIG5laXRoZXIgaGFzXHJcbiAgICAvLyByZW5kZXJlZCBzY3JvbGwgYmFycyBub3IgaXQgY2FuIGJlIGNsaXBwZWQuXHJcbiAgICBpZiAoIWlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAvLyBJbiBzb21lIGJyb3dzZXJzIChvbmx5IGluIEZpcmVmb3gsIGFjdHVhbGx5KSBDU1Mgd2lkdGggJiBoZWlnaHRcclxuICAgICAgICAvLyBpbmNsdWRlIHNjcm9sbCBiYXJzIHNpemUgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYXQgdGhpcyBzdGVwIGFzIHNjcm9sbFxyXG4gICAgICAgIC8vIGJhcnMgYXJlIHRoZSBvbmx5IGRpZmZlcmVuY2UgYmV0d2VlbiByb3VuZGVkIGRpbWVuc2lvbnMgKyBwYWRkaW5nc1xyXG4gICAgICAgIC8vIGFuZCBcImNsaWVudFwiIHByb3BlcnRpZXMsIHRob3VnaCB0aGF0IGlzIG5vdCBhbHdheXMgdHJ1ZSBpbiBDaHJvbWUuXHJcbiAgICAgICAgdmFyIHZlcnRTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpIC0gY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGhvcml6U2Nyb2xsYmFyID0gTWF0aC5yb3VuZChoZWlnaHQgKyB2ZXJ0UGFkKSAtIGNsaWVudEhlaWdodDtcclxuICAgICAgICAvLyBDaHJvbWUgaGFzIGEgcmF0aGVyIHdlaXJkIHJvdW5kaW5nIG9mIFwiY2xpZW50XCIgcHJvcGVydGllcy5cclxuICAgICAgICAvLyBFLmcuIGZvciBhbiBlbGVtZW50IHdpdGggY29udGVudCB3aWR0aCBvZiAzMTQuMnB4IGl0IHNvbWV0aW1lcyBnaXZlc1xyXG4gICAgICAgIC8vIHRoZSBjbGllbnQgd2lkdGggb2YgMzE1cHggYW5kIGZvciB0aGUgd2lkdGggb2YgMzE0LjdweCBpdCBtYXkgZ2l2ZVxyXG4gICAgICAgIC8vIDMxNHB4LiBBbmQgaXQgZG9lc24ndCBoYXBwZW4gYWxsIHRoZSB0aW1lLiBTbyBqdXN0IGlnbm9yZSB0aGlzIGRlbHRhXHJcbiAgICAgICAgLy8gYXMgYSBub24tcmVsZXZhbnQuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlcnRTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHZlcnRTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLmFicyhob3JpelNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGhvcml6U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVSZWN0SW5pdChwYWRkaW5ncy5sZWZ0LCBwYWRkaW5ncy50b3AsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIHRoZSBTVkdHcmFwaGljc0VsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1NWR0dyYXBoaWNzRWxlbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTb21lIGJyb3dzZXJzLCBuYW1lbHkgSUUgYW5kIEVkZ2UsIGRvbid0IGhhdmUgdGhlIFNWR0dyYXBoaWNzRWxlbWVudFxyXG4gICAgLy8gaW50ZXJmYWNlLlxyXG4gICAgaWYgKHR5cGVvZiBTVkdHcmFwaGljc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHR3JhcGhpY3NFbGVtZW50OyB9O1xyXG4gICAgfVxyXG4gICAgLy8gSWYgaXQncyBzbywgdGhlbiBjaGVjayB0aGF0IGVsZW1lbnQgaXMgYXQgbGVhc3QgYW4gaW5zdGFuY2Ugb2YgdGhlXHJcbiAgICAvLyBTVkdFbGVtZW50IGFuZCB0aGF0IGl0IGhhcyB0aGUgXCJnZXRCQm94XCIgbWV0aG9kLlxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXBhcmVuc1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0VsZW1lbnQgJiZcclxuICAgICAgICB0eXBlb2YgdGFyZ2V0LmdldEJCb3ggPT09ICdmdW5jdGlvbicpOyB9O1xyXG59KSgpO1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhIGRvY3VtZW50IGVsZW1lbnQgKDxodG1sPikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBjaGVja2VkLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KHRhcmdldCkge1xyXG4gICAgcmV0dXJuIHRhcmdldCA9PT0gZ2V0V2luZG93T2YodGFyZ2V0KS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYW4gYXBwcm9wcmlhdGUgY29udGVudCByZWN0YW5nbGUgZm9yIHByb3ZpZGVkIGh0bWwgb3Igc3ZnIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkcyB0byBiZSBjYWxjdWxhdGVkLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIGlmICghaXNCcm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIGlmIChpc1NWR0dyYXBoaWNzRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIHJlY3RhbmdsZSB3aXRoIGFuIGludGVyZmFjZSBvZiB0aGUgRE9NUmVjdFJlYWRPbmx5LlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZG9tcmVjdHJlYWRvbmx5XHJcbiAqXHJcbiAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gT2JqZWN0IHdpdGggcmVjdGFuZ2xlJ3MgeC95IGNvb3JkaW5hdGVzIGFuZCBkaW1lbnNpb25zLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdFJlYWRPbmx5fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVhZE9ubHlSZWN0KF9hKSB7XHJcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XHJcbiAgICAvLyBJZiBET01SZWN0UmVhZE9ubHkgaXMgYXZhaWxhYmxlIHVzZSBpdCBhcyBhIHByb3RvdHlwZSBmb3IgdGhlIHJlY3RhbmdsZS5cclxuICAgIHZhciBDb25zdHIgPSB0eXBlb2YgRE9NUmVjdFJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJyA/IERPTVJlY3RSZWFkT25seSA6IE9iamVjdDtcclxuICAgIHZhciByZWN0ID0gT2JqZWN0LmNyZWF0ZShDb25zdHIucHJvdG90eXBlKTtcclxuICAgIC8vIFJlY3RhbmdsZSdzIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZSBhbmQgbm9uLWVudW1lcmFibGUuXHJcbiAgICBkZWZpbmVDb25maWd1cmFibGUocmVjdCwge1xyXG4gICAgICAgIHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgdG9wOiB5LFxyXG4gICAgICAgIHJpZ2h0OiB4ICsgd2lkdGgsXHJcbiAgICAgICAgYm90dG9tOiBoZWlnaHQgKyB5LFxyXG4gICAgICAgIGxlZnQ6IHhcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgRE9NUmVjdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBkaW1lbnNpb25zIGFuZCB0aGUgeC95IGNvb3JkaW5hdGVzLlxyXG4gKiBTcGVjOiBodHRwczovL2RyYWZ0cy5meHRmLm9yZy9nZW9tZXRyeS8jZGljdGRlZi1kb21yZWN0aW5pdFxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geCAtIFggY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBZIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFJlY3RhbmdsZSdzIHdpZHRoLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gUmVjdGFuZ2xlJ3MgaGVpZ2h0LlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWN0SW5pdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XHJcbn1cblxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGNvbXB1dGF0aW9ucyBvZiB0aGUgY29udGVudCByZWN0YW5nbGUgb2ZcclxuICogcHJvdmlkZWQgRE9NIGVsZW1lbnQgYW5kIGZvciBrZWVwaW5nIHRyYWNrIG9mIGl0J3MgY2hhbmdlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZhdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIHdpZHRoIG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCBoZWlnaHQgb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7RE9NUmVjdEluaXR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBjb250ZW50IHJlY3RhbmdsZSBhbmQgdGVsbHMgd2hldGhlciBpdCdzIHdpZHRoIG9yIGhlaWdodCBwcm9wZXJ0aWVzXHJcbiAgICAgKiBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgYnJvYWRjYXN0LlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBnZXRDb250ZW50UmVjdCh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdF8gPSByZWN0O1xyXG4gICAgICAgIHJldHVybiAocmVjdC53aWR0aCAhPT0gdGhpcy5icm9hZGNhc3RXaWR0aCB8fFxyXG4gICAgICAgICAgICByZWN0LmhlaWdodCAhPT0gdGhpcy5icm9hZGNhc3RIZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyAnYnJvYWRjYXN0V2lkdGgnIGFuZCAnYnJvYWRjYXN0SGVpZ2h0JyBwcm9wZXJ0aWVzIHdpdGggYSBkYXRhXHJcbiAgICAgKiBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnRpZXMgb2YgdGhlIGxhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0RPTVJlY3RJbml0fSBMYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuYnJvYWRjYXN0UmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY29udGVudFJlY3RfO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHJlY3Q7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlckVudHJ5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0aGF0IGlzIGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBEYXRhIG9mIHRoZSBlbGVtZW50J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0LCByZWN0SW5pdCkge1xyXG4gICAgICAgIHZhciBjb250ZW50UmVjdCA9IGNyZWF0ZVJlYWRPbmx5UmVjdChyZWN0SW5pdCk7XHJcbiAgICAgICAgLy8gQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGVcclxuICAgICAgICAvLyBhbmQgYXJlIGFsc28gbm90IGVudW1lcmFibGUgaW4gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFByb3BlcnR5IGFjY2Vzc29ycyBhcmUgbm90IGJlaW5nIHVzZWQgYXMgdGhleSdkIHJlcXVpcmUgdG8gZGVmaW5lIGFcclxuICAgICAgICAvLyBwcml2YXRlIFdlYWtNYXAgc3RvcmFnZSB3aGljaCBtYXkgY2F1c2UgbWVtb3J5IGxlYWtzIGluIGJyb3dzZXJzIHRoYXRcclxuICAgICAgICAvLyBkb24ndCBzdXBwb3J0IHRoaXMgdHlwZSBvZiBjb2xsZWN0aW9ucy5cclxuICAgICAgICBkZWZpbmVDb25maWd1cmFibGUodGhpcywgeyB0YXJnZXQ6IHRhcmdldCwgY29udGVudFJlY3Q6IGNvbnRlbnRSZWN0IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlclNQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkXHJcbiAgICAgKiAgICAgIHdoZW4gb25lIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2VzIGl0J3MgY29udGVudCBkaW1lbnNpb25zLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBDb250cm9sbGVyIGluc3RhbmNlIHdoaWNoXHJcbiAgICAgKiAgICAgIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgdXBkYXRlcyBvZiBvYnNlcnZlci5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJ9IGNhbGxiYWNrQ3R4IC0gUmVmZXJlbmNlIHRvIHRoZSBwdWJsaWNcclxuICAgICAqICAgICAgUmVzaXplT2JzZXJ2ZXIgaW5zdGFuY2Ugd2hpY2ggd2lsbCBiZSBwYXNzZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCBjYWxsYmFja0N0eCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbGxlY3Rpb24gb2YgcmVzaXplIG9ic2VydmF0aW9ucyB0aGF0IGhhdmUgZGV0ZWN0ZWQgY2hhbmdlcyBpbiBkaW1lbnNpb25zXHJcbiAgICAgICAgICogb2YgZWxlbWVudHMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdHJ5IG9mIHRoZSBSZXNpemVPYnNlcnZhdGlvbiBpbnN0YW5jZXMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TWFwPEVsZW1lbnQsIFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18gPSBuZXcgTWFwU2hpbSgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGxiYWNrXyA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8gPSBjb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tDdHhfID0gY2FsbGJhY2tDdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAob2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLnNldCh0YXJnZXQsIG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLmFkZE9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIC8vIEZvcmNlIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVmcmVzaCgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIHN0b3Agb2JzZXJ2aW5nLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjdXJyZW50IGVudmlyb25tZW50IGRvZXNuJ3QgaGF2ZSB0aGUgRWxlbWVudCBpbnRlcmZhY2UuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhKEVsZW1lbnQgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5FbGVtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSBcIkVsZW1lbnRcIi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmF0aW9ucyA9IHRoaXMub2JzZXJ2YXRpb25zXztcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGVsZW1lbnQgaXMgbm90IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2YXRpb25zLmRlbGV0ZSh0YXJnZXQpO1xyXG4gICAgICAgIGlmICghb2JzZXJ2YXRpb25zLnNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgYWxsIGVsZW1lbnRzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENvbGxlY3RzIG9ic2VydmF0aW9uIGluc3RhbmNlcyB0aGUgYXNzb2NpYXRlZCBlbGVtZW50IG9mIHdoaWNoIGhhcyBjaGFuZ2VkXHJcbiAgICAgKiBpdCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuZ2F0aGVyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YXRpb24uaXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5wdXNoKG9ic2VydmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyBpbml0aWFsIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYSBsaXN0IG9mIFJlc2l6ZU9ic2VydmVyRW50cnlcclxuICAgICAqIGluc3RhbmNlcyBjb2xsZWN0ZWQgZnJvbSBhY3RpdmUgcmVzaXplIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmJyb2FkY2FzdEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIG9ic2VydmVyIGRvZXNuJ3QgaGF2ZSBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNhbGxiYWNrQ3R4XztcclxuICAgICAgICAvLyBDcmVhdGUgUmVzaXplT2JzZXJ2ZXJFbnRyeSBpbnN0YW5jZSBmb3IgZXZlcnkgYWN0aXZlIG9ic2VydmF0aW9uLlxyXG4gICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLm1hcChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG9ic2VydmF0aW9uLnRhcmdldCwgb2JzZXJ2YXRpb24uYnJvYWRjYXN0UmVjdCgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrXy5jYWxsKGN0eCwgZW50cmllcywgY3R4KTtcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIGNvbGxlY3Rpb24gb2YgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmNsZWFyQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5zcGxpY2UoMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZWxscyB3aGV0aGVyIG9ic2VydmVyIGhhcyBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuaGFzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubGVuZ3RoID4gMDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTUEk7XHJcbn0oKSk7XG5cbi8vIFJlZ2lzdHJ5IG9mIGludGVybmFsIG9ic2VydmVycy4gSWYgV2Vha01hcCBpcyBub3QgYXZhaWxhYmxlIHVzZSBjdXJyZW50IHNoaW1cclxuLy8gZm9yIHRoZSBNYXAgY29sbGVjdGlvbiBhcyBpdCBoYXMgYWxsIHJlcXVpcmVkIG1ldGhvZHMgYW5kIGJlY2F1c2UgV2Vha01hcFxyXG4vLyBjYW4ndCBiZSBmdWxseSBwb2x5ZmlsbGVkIGFueXdheS5cclxudmFyIG9ic2VydmVycyA9IHR5cGVvZiBXZWFrTWFwICE9PSAndW5kZWZpbmVkJyA/IG5ldyBXZWFrTWFwKCkgOiBuZXcgTWFwU2hpbSgpO1xyXG4vKipcclxuICogUmVzaXplT2JzZXJ2ZXIgQVBJLiBFbmNhcHN1bGF0ZXMgdGhlIFJlc2l6ZU9ic2VydmVyIFNQSSBpbXBsZW1lbnRhdGlvblxyXG4gKiBleHBvc2luZyBvbmx5IHRob3NlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdGhhdCBhcmUgZGVmaW5lZCBpbiB0aGUgc3BlYy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBSZXNpemVPYnNlcnZlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ2FsbGJhY2t9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNpemVPYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udHJvbGxlciA9IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgdGhpcyk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnNldCh0aGlzLCBvYnNlcnZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0oKSk7XHJcbi8vIEV4cG9zZSBwdWJsaWMgbWV0aG9kcyBvZiBSZXNpemVPYnNlcnZlci5cclxuW1xyXG4gICAgJ29ic2VydmUnLFxyXG4gICAgJ3Vub2JzZXJ2ZScsXHJcbiAgICAnZGlzY29ubmVjdCdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcclxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gb2JzZXJ2ZXJzLmdldCh0aGlzKSlbbWV0aG9kXS5hcHBseShfYSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn0pO1xuXG52YXIgaW5kZXggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gRXhwb3J0IGV4aXN0aW5nIGltcGxlbWVudGF0aW9uIGlmIGF2YWlsYWJsZS5cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBHYW50dEVsYXN0aWMgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cbiAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgIDxtYWluLXZpZXc+PC9tYWluLXZpZXc+XG4gICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPjwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZUluc3RhbmNlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4vY29tcG9uZW50cy9NYWluVmlldy52dWUnO1xuaW1wb3J0IGdldFN0eWxlIGZyb20gJy4vc3R5bGUuanMnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5cbmNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG5sZXQgVnVlSW5zdCA9IFZ1ZUluc3RhbmNlO1xuZnVuY3Rpb24gaW5pdFZ1ZSgpIHtcbiAgaWYgKHR5cGVvZiBWdWUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBWdWVJbnN0ID09PSAndW5kZWZpbmVkJykge1xuICAgIFZ1ZUluc3QgPSBWdWU7XG4gIH1cbn1cbmluaXRWdWUoKTtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGZpbGwgb3V0IGVtcHR5IG9wdGlvbnMgaW4gdXNlciBzZXR0aW5nc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB1c2VyT3B0aW9ucyAtIGluaXRpYWwgdXNlciBvcHRpb25zIHRoYXQgd2lsbCBtZXJnZSB3aXRoIHRob3NlIGJlbG93XG4gKiBAcmV0dXJucyB7b2JqZWN0fSBtZXJnZWQgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBnZXRPcHRpb25zKHVzZXJPcHRpb25zKSB7XG4gIGxldCBsb2NhbGVOYW1lID0gJ2VuJztcbiAgaWYgKHR5cGVvZiB1c2VyT3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB1c2VyT3B0aW9ucy5sb2NhbGUubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbGVOYW1lID0gdXNlck9wdGlvbnMubG9jYWxlLm5hbWU7XG4gIH1cbiAgbGV0IGZvbnRTaXplID0gJzEycHgnO1xuICBsZXQgZm9udEZhbWlseSA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JylcbiAgICAudG9TdHJpbmcoKTtcbiAgaWYgKHR5cGVvZiB1c2VyT3B0aW9ucy5zdHlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHVzZXJPcHRpb25zLnN0eWxlLmZvbnRTaXplICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9udFNpemUgPSB1c2VyT3B0aW9ucy5mb250U2l6ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB1c2VyT3B0aW9ucy5zdHlsZS5mb250RmFtaWx5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9udEZhbWlseSA9IHVzZXJPcHRpb25zLnN0eWxlLmZvbnRGYW1pbHk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgc3R5bGU6IGdldFN0eWxlKGZvbnRTaXplLCBmb250RmFtaWx5KSxcbiAgICBzbG90czoge1xuICAgICAgaGVhZGVyOiB7fVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGxhYmVsOiAnZ2FudHQtZWxhc3RpYycsXG4gICAgICBodG1sOiBmYWxzZVxuICAgIH0sXG4gICAgdGFza01hcHBpbmc6IHtcbiAgICAgIGlkOiAnaWQnLFxuICAgICAgc3RhcnQ6ICdzdGFydCcsXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICAgIGR1cmF0aW9uOiAnZHVyYXRpb24nLFxuICAgICAgcHJvZ3Jlc3M6ICdwcm9ncmVzcycsXG4gICAgICB0eXBlOiAndHlwZScsXG4gICAgICBzdHlsZTogJ3N0eWxlJyxcbiAgICAgIGNvbGxhcHNlZDogJ2NvbGxhcHNlZCdcbiAgICB9LFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBjbGllbnRXaWR0aDogMCxcbiAgICBvdXRlckhlaWdodDogMCxcbiAgICByb3dzSGVpZ2h0OiAwLFxuICAgIGFsbFZpc2libGVUYXNrc0hlaWdodDogMCxcbiAgICByZWZzOiB7fSxcbiAgICBzY3JvbGw6IHtcbiAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICBkcmFnWE1vdmVNdWx0aXBsaWVyOiAzLFxuICAgICAgZHJhZ1lNb3ZlTXVsdGlwbGllcjogMixcbiAgICAgIHRvcDogMCxcbiAgICAgIHRhc2tMaXN0OiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSxcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBwZXJjZW50OiAwLFxuICAgICAgICB0aW1lUGVyY2VudDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHRpbWU6IDAsXG4gICAgICAgIHRpbWVDZW50ZXI6IDAsXG4gICAgICAgIGRhdGVUaW1lOiB7XG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgcmlnaHQ6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICBiZWZvcmU6IDEsXG4gICAgICBhZnRlcjogMVxuICAgIH0sXG4gICAgdGltZXM6IHtcbiAgICAgIHRpbWVTY2FsZTogNjAgKiAxMDAwLFxuICAgICAgdGltZVpvb206IDE3LFxuICAgICAgdGltZVBlclBpeGVsOiAwLFxuICAgICAgZmlyc3RUaW1lOiBudWxsLCAvLyBmaXJzdERhdGUgZ2V0VGltZSgpXG4gICAgICBsYXN0VGltZTogbnVsbCwgLy8gbGFzdCBkYXRlIGdldFRpbWUoKVxuICAgICAgZmlyc3RUYXNrVGltZTogMCxcbiAgICAgIGxhc3RUYXNrVGltZTogMCxcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uTXM6IDAsXG4gICAgICB0b3RhbFZpZXdEdXJhdGlvblB4OiAwLFxuICAgICAgc3RlcER1cmF0aW9uOiAnZGF5JywgLy8gaG91ciwgbW9udGhcbiAgICAgIHN0ZXBzOiBbXVxuICAgIH0sXG4gICAgcm93OiB7XG4gICAgICBoZWlnaHQ6IDI0XG4gICAgfSxcbiAgICBtYXhSb3dzOiAyMCxcbiAgICBtYXhIZWlnaHQ6IDAsXG4gICAgY2hhcnQ6IHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICAgIGdhcDogNlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICBoZWlnaHQ6IDYsXG4gICAgICAgIHBhdHRlcm46IHRydWUsXG4gICAgICAgIGJhcjogZmFsc2VcbiAgICAgIH0sXG4gICAgICB0ZXh0OiB7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgeFBhZGRpbmc6IDEwLFxuICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICB9LFxuICAgICAgZXhwYW5kZXI6IHtcbiAgICAgICAgdHlwZTogJ2NoYXJ0JyxcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIGRpc3BsYXlJZlRhc2tMaXN0SGlkZGVuOiB0cnVlLFxuICAgICAgICBvZmZzZXQ6IDQsXG4gICAgICAgIHNpemU6IDE4XG4gICAgICB9XG4gICAgfSxcbiAgICB0YXNrTGlzdDoge1xuICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgIHJlc2l6ZUFmdGVyVGhyZXNob2xkOiB0cnVlLFxuICAgICAgd2lkdGhUaHJlc2hvbGQ6IDc1LFxuICAgICAgY29sdW1uczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgbGFiZWw6ICdJRCcsXG4gICAgICAgICAgdmFsdWU6ICdpZCcsXG4gICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICByZXNpemVyV2lkdGg6IDAsXG4gICAgICBwZXJjZW50OiAxMDAsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGZpbmFsV2lkdGg6IDAsXG4gICAgICB3aWR0aEZyb21QZXJjZW50YWdlOiAwLFxuICAgICAgbWluV2lkdGg6IDE4LFxuICAgICAgZXhwYW5kZXI6IHtcbiAgICAgICAgdHlwZTogJ3Rhc2stbGlzdCcsXG4gICAgICAgIHNpemU6IDE2LFxuICAgICAgICBjb2x1bW5XaWR0aDogMjQsXG4gICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBzdHJhaWdodDogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbGVuZGFyOiB7XG4gICAgICB3b3JraW5nRGF5czogWzEsIDIsIDMsIDQsIDVdLFxuICAgICAgZ2FwOiA2LFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICBob3VyOiB7XG4gICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHdpZHRoczogW10sXG4gICAgICAgIG1heFdpZHRoczogeyBzaG9ydDogMCwgbWVkaXVtOiAwLCBsb25nOiAwIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIGxvbmcoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheWpzKGRhdGUpXG4gICAgICAgICAgICAgIC5sb2NhbGUobG9jYWxlTmFtZSlcbiAgICAgICAgICAgICAgLmZvcm1hdCgnSEg6bW0nKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lZGl1bShkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KCdISDptbScpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvcnQoZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheWpzKGRhdGUpXG4gICAgICAgICAgICAgIC5sb2NhbGUobG9jYWxlTmFtZSlcbiAgICAgICAgICAgICAgLmZvcm1hdCgnSEgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkYXk6IHtcbiAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgd2lkdGhzOiBbXSxcbiAgICAgICAgbWF4V2lkdGhzOiB7IHNob3J0OiAwLCBtZWRpdW06IDAsIGxvbmc6IDAgfSxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgbG9uZyhkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KCdERCBkZGRkJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheWpzKGRhdGUpXG4gICAgICAgICAgICAgIC5sb2NhbGUobG9jYWxlTmFtZSlcbiAgICAgICAgICAgICAgLmZvcm1hdCgnREQgZGRkJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5anMoZGF0ZSlcbiAgICAgICAgICAgICAgLmxvY2FsZShsb2NhbGVOYW1lKVxuICAgICAgICAgICAgICAuZm9ybWF0KCdERCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vbnRoOiB7XG4gICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHdpZHRoczogW10sXG4gICAgICAgIG1heFdpZHRoczogeyBzaG9ydDogMCwgbWVkaXVtOiAwLCBsb25nOiAwIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIHNob3J0KGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXlqcyhkYXRlKVxuICAgICAgICAgICAgICAubG9jYWxlKGxvY2FsZU5hbWUpXG4gICAgICAgICAgICAgIC5mb3JtYXQoJ01NJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheWpzKGRhdGUpXG4gICAgICAgICAgICAgIC5sb2NhbGUobG9jYWxlTmFtZSlcbiAgICAgICAgICAgICAgLmZvcm1hdChcIk1NTSAnWVlcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb25nKGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXlqcyhkYXRlKVxuICAgICAgICAgICAgICAubG9jYWxlKGxvY2FsZU5hbWUpXG4gICAgICAgICAgICAgIC5mb3JtYXQoJ01NTU0gWVlZWScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbG9jYWxlOiB7XG4gICAgICBuYW1lOiAnZW4nLFxuICAgICAgTm93OiAnTm93JyxcbiAgICAgICdYLVNjYWxlJzogJ1pvb20tWCcsXG4gICAgICAnWS1TY2FsZSc6ICdab29tLVknLFxuICAgICAgJ1Rhc2sgbGlzdCB3aWR0aCc6ICdUYXNrIGxpc3QnLFxuICAgICAgJ0JlZm9yZS9BZnRlcic6ICdFeHBhbmQnLFxuICAgICAgJ0Rpc3BsYXkgdGFzayBsaXN0JzogJ1Nob3cgdGFzayBsaXN0JyxcbiAgICAgIHdlZWtkYXlzOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXG4gICAgICB3ZWVrZGF5c1Nob3J0OiAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpLFxuICAgICAgd2Vla2RheXNNaW46ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcbiAgICAgIG1vbnRoczogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gICAgICBtb250aHNTaG9ydDogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgICAgd2Vla1N0YXJ0OiAxLFxuICAgICAgcmVsYXRpdmVUaW1lOiB7XG4gICAgICAgIGZ1dHVyZTogJ2luICVzJyxcbiAgICAgICAgcGFzdDogJyVzIGFnbycsXG4gICAgICAgIHM6ICdhIGZldyBzZWNvbmRzJyxcbiAgICAgICAgbTogJ2EgbWludXRlJyxcbiAgICAgICAgbW06ICclZCBtaW51dGVzJyxcbiAgICAgICAgaDogJ2FuIGhvdXInLFxuICAgICAgICBoaDogJyVkIGhvdXJzJyxcbiAgICAgICAgZDogJ2EgZGF5JyxcbiAgICAgICAgZGQ6ICclZCBkYXlzJyxcbiAgICAgICAgTTogJ2EgbW9udGgnLFxuICAgICAgICBNTTogJyVkIG1vbnRocycsXG4gICAgICAgIHk6ICdhIHllYXInLFxuICAgICAgICB5eTogJyVkIHllYXJzJ1xuICAgICAgfSxcbiAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgTFQ6ICdISDptbScsXG4gICAgICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICAgICAgTDogJ0REL01NL1lZWVknLFxuICAgICAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXG4gICAgICB9LFxuICAgICAgb3JkaW5hbDogbiA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ107XG4gICAgICAgIGNvbnN0IHYgPSBuICUgMTAwO1xuICAgICAgICByZXR1cm4gYFske259JHtzWyh2IC0gMjApICUgMTBdIHx8IHNbdl0gfHwgc1swXX1dYDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBzcGVjaWZpZWQgdmFyaWFibGUgaXMgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHthbnl9IGl0ZW1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKFxuICAgIGl0ZW0gJiZcbiAgICB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiZcbiAgICAhQXJyYXkuaXNBcnJheShpdGVtKSAmJlxuICAgICEoaXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSAmJlxuICAgICEoaXRlbSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgJiZcbiAgICB0eXBlb2YgaXRlbSAhPT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCB3aWxsIG1lcmdlIG9iamVjdHMgcmVjdXJzaXZlbHkgLSBjcmVhdGluZyBicmFuZCBuZXcgb25lIC0gbGlrZSBjbG9uZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbXMge29iamVjdH0gc291cmNlc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldLm1hcChpdGVtID0+IHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXJnZURlZXAoe30sIGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzb3VyY2Vba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoc291cmNlW2tleV0udG9TdHJpbmcoKS5pbmRleE9mKCdbbmF0aXZlIGNvZGVdJykgPT09IC0xKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGlmIG9iamVjdCBvciBhcnJheSBpcyBvYnNlcnZhYmxlXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9ialxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09ic2VydmFibGUob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouaGFzT3duUHJvcGVydHkoJ19fb2JfXycpO1xufVxuXG4vKipcbiAqIFNhbWUgYXMgYWJvdmUgYnV0IHdpdGggcmVhY3Rpdml0eSBpbiBtaW5kXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtcyB7b2JqZWN0fSBzb3VyY2VzXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcFJlYWN0aXZlKGNvbXBvbmVudCwgdGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VEZWVwUmVhY3RpdmUoY29tcG9uZW50LCB0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBjb21wb25lbnQuJHNldCh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtrZXldLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlXScpID09PSAtMSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC4kc2V0KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZURlZXBSZWFjdGl2ZShjb21wb25lbnQsIHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4vKipcbiAqIENoZWNrIGlmIG9iamVjdHMgb3IgYXJyYXlzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgbmVzdGVkIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBsZWZ0XG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gcmlnaHRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdEVxdWFsRGVlcChsZWZ0LCByaWdodCwgY2FjaGUgPSBbXSkge1xuICBpZiAodHlwZW9mIHJpZ2h0ICE9PSB0eXBlb2YgbGVmdCkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiAndHlwZW9mJyB9O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobGVmdCkgJiYgIUFycmF5LmlzQXJyYXkocmlnaHQpKSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6ICdpc0FycmF5JyB9O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmlnaHQpICYmICFBcnJheS5pc0FycmF5KGxlZnQpKSB7XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6ICdpc0FycmF5JyB9O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobGVmdCkgJiYgQXJyYXkuaXNBcnJheShyaWdodCkpIHtcbiAgICBpZiAobGVmdC5sZW5ndGggIT09IHJpZ2h0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6ICdsZW5ndGgnIH07XG4gICAgfVxuICAgIGxldCB3aGF0O1xuICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gbGVmdC5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgICBpZiAoKHdoYXQgPSBub3RFcXVhbERlZXAobGVmdFtpbmRleF0sIHJpZ2h0W2luZGV4XSwgY2FjaGUpKSkge1xuICAgICAgICByZXR1cm4gd2hhdDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGVmdCkgJiYgIWlzT2JqZWN0KHJpZ2h0KSkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiAnaXNPYmplY3QnIH07XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QocmlnaHQpICYmICFpc09iamVjdChsZWZ0KSkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiAnaXNPYmplY3QnIH07XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGVmdCkgJiYgaXNPYmplY3QocmlnaHQpKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGxlZnQpIHtcbiAgICAgIGlmICghbGVmdC5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFsZWZ0LnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIXJpZ2h0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IGtleSB9O1xuICAgICAgfVxuICAgICAgbGV0IHdoYXQ7XG4gICAgICBpZiAoKHdoYXQgPSBub3RFcXVhbERlZXAobGVmdFtrZXldLCByaWdodFtrZXldLCBjYWNoZSkpKSB7XG4gICAgICAgIHJldHVybiB3aGF0O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZWZ0ICE9PSByaWdodCkge1xuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiAnIT09JyB9O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3Qgc3R5bGVDYWNoZSA9IHt9O1xuXG4vKipcbiAqIEdhbnR0RWxhc3RpY1xuICogTWFpbiB2dWUgY29tcG9uZW50XG4gKi9cbmNvbnN0IEdhbnR0RWxhc3RpYyA9IHtcbiAgbmFtZTogJ0dhbnR0RWxhc3RpYycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBNYWluVmlld1xuICB9LFxuICBwcm9wczogWyd0YXNrcycsICdvcHRpb25zJ10sXG4gIHByb3ZpZGUoKSB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB7fTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdmlkZXIsICdyb290Jywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogKCkgPT4gc2VsZlxuICAgIH0pO1xuICAgIHJldHVybiBwcm92aWRlcjtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgc2Nyb2xsQmFySGVpZ2h0OiAwLFxuICAgICAgICAgIGFsbFZpc2libGVUYXNrc0hlaWdodDogMCxcbiAgICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlZnM6IHt9LFxuICAgICAgICB0YXNrc0J5SWQ6IHt9LFxuICAgICAgICB0YXNrVHJlZToge30sXG4gICAgICAgIGN0eCxcbiAgICAgICAgZW1pdFRhc2tzQ2hhbmdlczogdHJ1ZSwgLy8gc29tZSBvcGVyYXRpb25zIG1heSBwYXVzZSBlbWl0dGluZyBjaGFuZ2VzIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgZW1pdE9wdGlvbnNDaGFuZ2VzOiB0cnVlLCAvLyBzb21lIG9wZXJhdGlvbnMgbWF5IHBhdXNlIGVtaXR0aW5nIGNoYW5nZXMgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgICAgICByZXNpemVPYnNlcnZlcjogbnVsbCxcbiAgICAgICAgdW53YXRjaFRhc2tzOiBudWxsLFxuICAgICAgICB1bndhdGNoT3B0aW9uczogbnVsbCxcbiAgICAgICAgdW53YXRjaE91dHB1dFRhc2tzOiBudWxsLFxuICAgICAgICB1bndhdGNoT3V0cHV0T3B0aW9uczogbnVsbFxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBtZXJnZURlZXAsXG4gICAgbWVyZ2VEZWVwUmVhY3RpdmUsXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaGVpZ2h0IG9mIHNjcm9sbGJhciBpbiBjdXJyZW50IGJyb3dzZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U2Nyb2xsQmFySGVpZ2h0KCkge1xuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIG91dGVyLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgICBvdXRlci5zdHlsZS5tc092ZXJmbG93U3R5bGUgPSAnc2Nyb2xsYmFyJztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgICAgdmFyIG5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgICAgdmFyIHdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IG5vU2Nyb2xsIC0gd2l0aFNjcm9sbDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnXVsnbWFyZ2luLWxlZnQnXSA9IGAtJHtoZWlnaHR9cHhgO1xuICAgICAgcmV0dXJuICh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ID0gaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRmlsbCBvdXQgZW1wdHkgdGFzayBwcm9wZXJ0aWVzIGFuZCBtYWtlIGl0IHJlYWN0aXZlXG4gICAgICovXG4gICAgcmVmcmVzaFRhc2tzKCkge1xuICAgICAgdGhpcy5zdGF0ZS50YXNrcyA9IHRoaXMuc3RhdGUudGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRhc2sueCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLiRzZXQodGFzaywgJ3gnLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2sueSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLiRzZXQodGFzaywgJ3knLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2sud2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICd3aWR0aCcsIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdoZWlnaHQnLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2sudG9vbHRpcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLm1lcmdlRGVlcFJlYWN0aXZlKHRoaXMsIHRhc2ssIHsgdG9vbHRpcDogeyB2aXNpYmxlOiBmYWxzZSB9IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay50b29sdGlwLnZpc2libGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGFzay50b29sdGlwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2subW91c2VPdmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuJHNldCh0YXNrLCAnbW91c2VPdmVyJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5jb2xsYXBzZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdjb2xsYXBzZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmRlcGVuZGVudE9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuJHNldCh0YXNrLCAnZGVwZW5kZW50T24nLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudElkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuJHNldCh0YXNrLCAncGFyZW50SWQnLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdzdHlsZScsIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suY2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdjaGlsZHJlbicsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2suYWxsQ2hpbGRyZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdhbGxDaGlsZHJlbicsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRhc2sucGFyZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLiRzZXQodGFzaywgJ3BhcmVudHMnLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnBhcmVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLiRzZXQodGFzaywgJ3BhcmVudCcsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5zdGFydFRpbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdzdGFydFRpbWUnLCBkYXlqcyh0YXNrLnN0YXJ0KS52YWx1ZU9mKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5lbmRUaW1lID09PSAndW5kZWZpbmVkJyAmJiB0YXNrLmhhc093blByb3BlcnR5KCdlbmQnKSkge1xuICAgICAgICAgIHRoaXMuJHNldCh0YXNrLCAnZW5kVGltZScsIGRheWpzKHRhc2suZW5kKS52YWx1ZU9mKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXNrLmVuZFRpbWUgPT09ICd1bmRlZmluZWQnICYmIHRhc2suaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykpIHtcbiAgICAgICAgICB0aGlzLiRzZXQodGFzaywgJ2VuZFRpbWUnLCB0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5kdXJhdGlvbiA9PT0gJ3VuZGVmaW5lZCcgJiYgdGFzay5oYXNPd25Qcm9wZXJ0eSgnZW5kVGltZScpKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRhc2ssICdkdXJhdGlvbicsIHRhc2suZW5kVGltZSAtIHRhc2suc3RhcnRUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXAgdGFza3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBtYXBUYXNrcyh0YXNrcywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGVlcChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi50YXNrLFxuICAgICAgICAgICAgaWQ6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5pZF0sXG4gICAgICAgICAgICBzdGFydDogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLnN0YXJ0XSxcbiAgICAgICAgICAgIGxhYmVsOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcubGFiZWxdLFxuICAgICAgICAgICAgZHVyYXRpb246IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5kdXJhdGlvbl0sXG4gICAgICAgICAgICBwcm9ncmVzczogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLnByb2dyZXNzXSxcbiAgICAgICAgICAgIHR5cGU6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy50eXBlXSxcbiAgICAgICAgICAgIHN0eWxlOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuc3R5bGVdLFxuICAgICAgICAgICAgY29sbGFwc2VkOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuY29sbGFwc2VkXVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNvbXBvbmVudFxuICAgICAqL1xuICAgIGluaXRpYWxpemUoaXRzVXBkYXRlID0gJycpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm1lcmdlRGVlcCh7fSwgZ2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgY29uc3QgdGFza3MgPSB0aGlzLnRhc2tzLm1hcCh0YXNrID0+IG1lcmdlRGVlcCh7fSwgdGFzaykpO1xuICAgICAgc3dpdGNoIChpdHNVcGRhdGUpIHtcbiAgICAgICAgY2FzZSAndGFza3MnOlxuICAgICAgICAgIHRoaXMubWVyZ2VEZWVwUmVhY3RpdmUodGhpcywgdGhpcy5zdGF0ZSwge1xuICAgICAgICAgICAgdGFza3M6IHRoaXMubWFwVGFza3ModGFza3MsIG9wdGlvbnMpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICAgIHRoaXMubWVyZ2VEZWVwUmVhY3RpdmUodGhpcywgdGhpcy5zdGF0ZSwgeyBvcHRpb25zIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMubWVyZ2VEZWVwUmVhY3RpdmUoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHsgb3B0aW9ucyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0YXNrczogdGhpcy5tYXBUYXNrcyh0YXNrcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgZGF5anMubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUsIG51bGwsIHRydWUpO1xuICAgICAgZGF5anMubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhdGUub3B0aW9ucywgJ3Rhc2tMaXN0Jywge30pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdCwgJ2NvbHVtbnMnLCBbXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucyA9IHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQoY29sdW1uLCAndGhyZXNob2xkUGVyY2VudCcsIDEwMCk7XG4gICAgICAgIHRoaXMuJHNldChjb2x1bW4sICd3aWR0aEZyb21QZXJjZW50YWdlJywgMCk7XG4gICAgICAgIHRoaXMuJHNldChjb2x1bW4sICdmaW5hbFdpZHRoJywgMCk7XG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLiRzZXQoY29sdW1uLCAnaGVpZ2h0JywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW4uc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KGNvbHVtbiwgJ3N0eWxlJywge30pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHNldChjb2x1bW4sICdfaWQnLCBgJHtpbmRleH0tJHtjb2x1bW4ubGFiZWx9YCk7XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICB9KTtcbiAgICAgIGlmIChpdHNVcGRhdGUgPT09ICcnIHx8IGl0c1VwZGF0ZSA9PT0gJ3Rhc2tzJykge1xuICAgICAgICAvLyBpbml0aWFsaXplIG9ic2VydmVyXG4gICAgICAgIHRoaXMucmVmcmVzaFRhc2tzKCk7XG4gICAgICAgIHRoaXMuJHNldCh0aGlzLnN0YXRlLCAncm9vdFRhc2snLCB7XG4gICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgbGFiZWw6ICdyb290JyxcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgYWxsQ2hpbGRyZW46IFtdLFxuICAgICAgICAgIHBhcmVudHM6IFtdLFxuICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICBfX3Jvb3Q6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzZXRUYXNrVHJlZSgpO1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdGF0ZSwgJ3Rhc2tUcmVlJywgdGhpcy5tYWtlVGFza1RyZWUodGhpcy5zdGF0ZS5yb290VGFzaykpO1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5zdGF0ZSwgJ3Rhc2tzJywgdGhpcy5zdGF0ZS50YXNrVHJlZS5hbGxDaGlsZHJlbi5tYXAoY2hpbGRJZCA9PiB0aGlzLmdldFRhc2soY2hpbGRJZCkpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5nZXRTY3JvbGxCYXJIZWlnaHQoKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnN0YXRlLm9wdGlvbnMsICdzY3JvbGxCYXJIZWlnaHQnLCB0aGlzLmdldFNjcm9sbEJhckhlaWdodCgpKTtcbiAgICAgIHRoaXMuJHNldCh0aGlzLnN0YXRlLm9wdGlvbnMsICdvdXRlckhlaWdodCcsIHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0KTtcbiAgICAgIHRoaXMuZ2xvYmFsT25SZXNpemUoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhbGVuZGFyIHJvd3Mgb3V0ZXIgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldENhbGVuZGFySGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuc3Ryb2tlV2lkdGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbWFsIGxldmVsIG9mIG5lc3RlZCB0YXNrIGNoaWxkcmVuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldE1heGltYWxMZXZlbCgpIHtcbiAgICAgIGxldCBtYXhpbWFsTGV2ZWwgPSAwO1xuICAgICAgdGhpcy5zdGF0ZS50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5wYXJlbnRzLmxlbmd0aCA+IG1heGltYWxMZXZlbCkge1xuICAgICAgICAgIG1heGltYWxMZXZlbCA9IHRhc2sucGFyZW50cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1heGltYWxMZXZlbCAtIDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBtYXhpbWFsIGV4cGFuZGVyIHdpZHRoIC0gdG8gY2FsY3VsYXRlIHN0cmFpZ2h0IHRhc2sgbGlzdCB0ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7aW50fVxuICAgICAqL1xuICAgIGdldE1heGltYWxFeHBhbmRlcldpZHRoKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5nZXRNYXhpbWFsTGV2ZWwoKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5wYWRkaW5nICtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLm1hcmdpblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemUgc2Nyb2xsVG9wIHByb3BlcnR5IHdoZW4gcm93IGhlaWdodCBpcyBjaGFuZ2VkXG4gICAgICovXG4gICAgc3luY1Njcm9sbFRvcCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcykge1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnRvcCA9IHRoaXMuc3RhdGUucmVmcy50YXNrTGlzdEl0ZW1zLnNjcm9sbFRvcCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRhc2sgbGlzdCBjb2x1bW5zIGRpbWVuc2lvbnNcbiAgICAgKi9cbiAgICBjYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCkge1xuICAgICAgbGV0IGZpbmFsID0gMDtcbiAgICAgIGxldCBwZXJjZW50YWdlID0gMDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgaWYgKGNvbHVtbi5leHBhbmRlcikge1xuICAgICAgICAgIGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlID1cbiAgICAgICAgICAgICgodGhpcy5nZXRNYXhpbWFsRXhwYW5kZXJXaWR0aCgpICsgY29sdW1uLndpZHRoKSAvIDEwMCkgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QucGVyY2VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9IChjb2x1bW4ud2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LnBlcmNlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcGVyY2VudGFnZSArPSBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZTtcbiAgICAgICAgY29sdW1uLmZpbmFsV2lkdGggPSAoY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgKiBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSkgLyAxMDA7XG4gICAgICAgIGZpbmFsICs9IGNvbHVtbi5maW5hbFdpZHRoO1xuICAgICAgICBjb2x1bW4uaGVpZ2h0ID0gdGhpcy5nZXRUYXNrSGVpZ2h0KCkgLSB0aGlzLnN0eWxlWydncmlkLWxpbmUtaG9yaXpvbnRhbCddWydzdHJva2Utd2lkdGgnXTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggPSBmaW5hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGFzayB0cmVlIC0gd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgdHJlZSBsaWtlIHN0cnVjdHVyZSBpbnNpZGUgdGFzayBsaXN0XG4gICAgICovXG4gICAgcmVzZXRUYXNrVHJlZSgpIHtcbiAgICAgIHRoaXMuc3RhdGUucm9vdFRhc2suY2hpbGRyZW4gPSBbXTtcbiAgICAgIHRoaXMuc3RhdGUucm9vdFRhc2suYWxsQ2hpbGRyZW4gPSBbXTtcbiAgICAgIHRoaXMuc3RhdGUucm9vdFRhc2sucGFyZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUucm9vdFRhc2sucGFyZW50cyA9IFtdO1xuICAgICAgdGhpcy5zdGF0ZS50YXNrc0J5SWQgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnN0YXRlLnRhc2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZS50YXNrc1tpXTtcbiAgICAgICAgY3VycmVudC5jaGlsZHJlbiA9IFtdO1xuICAgICAgICBjdXJyZW50LmFsbENoaWxkcmVuID0gW107XG4gICAgICAgIGN1cnJlbnQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgY3VycmVudC5wYXJlbnRzID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUudGFza3NCeUlkW2N1cnJlbnQuaWRdID0gY3VycmVudDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFrZSB0YXNrIHRyZWUsIGFmdGVyIHJlc2V0IC0gbG9vayBhYm92ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhc2tcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB0YXNrcyB3aXRoIGNoaWxkcmVuIGFuZCBwYXJlbnRzXG4gICAgICovXG4gICAgbWFrZVRhc2tUcmVlKHRhc2spIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnN0YXRlLnRhc2tzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zdGF0ZS50YXNrc1tpXTtcbiAgICAgICAgaWYgKGN1cnJlbnQucGFyZW50SWQgPT09IHRhc2suaWQpIHtcbiAgICAgICAgICBpZiAodGFzay5wYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGFzay5wYXJlbnRzLmZvckVhY2gocGFyZW50ID0+IGN1cnJlbnQucGFyZW50cy5wdXNoKHBhcmVudCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRhc2sucHJvcGVydHlJc0VudW1lcmFibGUoJ19fcm9vdCcpKSB7XG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudHMucHVzaCh0YXNrLmlkKTtcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50ID0gdGFzay5pZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudC5wYXJlbnRzID0gW107XG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLm1ha2VUYXNrVHJlZShjdXJyZW50KTtcbiAgICAgICAgICB0YXNrLmFsbENoaWxkcmVuLnB1c2goY3VycmVudC5pZCk7XG4gICAgICAgICAgdGFzay5jaGlsZHJlbi5wdXNoKGN1cnJlbnQuaWQpO1xuICAgICAgICAgIGN1cnJlbnQuYWxsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHRhc2suYWxsQ2hpbGRyZW4ucHVzaChjaGlsZElkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGFzayBieSBpZFxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH0gdGFza1xuICAgICAqL1xuICAgIGdldFRhc2sodGFza0lkKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUudGFza3NCeUlkW3Rhc2tJZF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzQnlJZFt0YXNrSWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjaGlsZHJlbiB0YXNrcyBmb3Igc3BlY2lmaWVkIHRhc2tJZFxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IHRhc2tJZFxuICAgICAqIEByZXR1cm5zIHthcnJheX0gY2hpbGRyZW5cbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbih0YXNrSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSB0YXNrSWQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJcyB0YXNrIHZpc2libGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xUYXNrfSB0YXNrXG4gICAgICovXG4gICAgaXNUYXNrVmlzaWJsZSh0YXNrKSB7XG4gICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0YXNrID09PSAnc3RyaW5nJykge1xuICAgICAgICB0YXNrID0gdGhpcy5nZXRUYXNrKHRhc2spO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhc2sucGFyZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGhpcy5nZXRUYXNrKHRhc2sucGFyZW50c1tpXSkuY29sbGFwc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHN2Z1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gaHRtbCBzdmcgaW1hZ2Ugb2YgZ2FudHRcbiAgICAgKi9cbiAgICBnZXRTVkcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3Lm91dGVySFRNTDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGltYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBpbWFnZSBmb3JtYXRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gd2hlbiByZXNvbHZlZCByZXR1cm5zIGJhc2U2NCBpbWFnZSBzdHJpbmcgb2YgZ2FudHRcbiAgICAgKi9cbiAgICBnZXRJbWFnZSh0eXBlID0gJ2ltYWdlL3BuZycpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5zdGF0ZS5vcHRpb25zLm1haW5WaWV3LmNsaWVudFdpZHRoO1xuICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodDtcbiAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICByZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwodHlwZSkpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0U1ZHKCkpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBnYW50dCB0b3RhbCBoZWlnaHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SGVpZ2h0KHZpc2libGVUYXNrcywgb3V0ZXIgPSBmYWxzZSkge1xuICAgICAgbGV0IGhlaWdodCA9XG4gICAgICAgIHZpc2libGVUYXNrcy5sZW5ndGggKiAodGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5zdHJva2VXaWR0aCArXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXA7XG4gICAgICBpZiAob3V0ZXIpIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgb25lIHRhc2sgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhc2tIZWlnaHQod2l0aFN0cm9rZSA9IGZhbHNlKSB7XG4gICAgICBpZiAod2l0aFN0cm9rZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ICtcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIgK1xuICAgICAgICAgIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ11bJ3N0cm9rZS13aWR0aCddXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBzcGVjaWZpZWQgdGFza3MgaGVpZ2h0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcykge1xuICAgICAgcmV0dXJuIHZpc2libGVUYXNrcy5sZW5ndGggKiB0aGlzLmdldFRhc2tIZWlnaHQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0aW1lIChpbiBtaWxsaXNlY29uZHMpIHRvIHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBtc1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGltZVRvUGl4ZWxPZmZzZXRYKG1zKSB7XG4gICAgICBsZXQgeCA9IG1zIC0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZTtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIHggPSB4IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB4O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHBpeGVsIG9mZnNldCBpbnNpZGUgY2hhcnQgdG8gY29ycmVzcG9uZGluZyB0aW1lIG9mZnNldCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbE9mZnNldFhcbiAgICAgKiBAcmV0dXJucyB7aW50fSBtaWxsaXNlY29uZHNcbiAgICAgKi9cbiAgICBwaXhlbE9mZnNldFhUb1RpbWUocGl4ZWxPZmZzZXRYKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gcGl4ZWxPZmZzZXRYICsgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddIC8gMjtcbiAgICAgIHJldHVybiBvZmZzZXQgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsICsgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGN1cnJlbnQgdmlldyBwb3J0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCAtIGVsZW1lbnQgcGxhY2VtZW50XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gZWxlbWVudCB3aWR0aFxuICAgICAqIEBwYXJhbSB7aW50fSBidWZmZXIgLSBvciB0aHJlc2hvbGQsIGlmIGVsZW1lbnQgaXMgb3V0c2lkZSB2aWV3cG9ydCBidXQgb2Zmc2V0IGZyb20gdmlldyBwb3J0IGlzIGJlbG93IHRoaXMgdmFsdWUgcmV0dXJuIHRydWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0luc2lkZVZpZXdQb3J0KHgsIHdpZHRoLCBidWZmZXIgPSA1MDAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCAmJlxuICAgICAgICAgIHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5yaWdodCkgfHxcbiAgICAgICAgKHggLSBidWZmZXIgPD0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5sZWZ0ICYmXG4gICAgICAgICAgeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGFydCBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtldmVudH0gZXZcbiAgICAgKi9cbiAgICBvblNjcm9sbENoYXJ0KGV2KSB7XG4gICAgICBjb25zdCBob3Jpem9udGFsID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbDtcbiAgICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWw7XG4gICAgICB0aGlzLl9vblNjcm9sbENoYXJ0KGhvcml6b250YWwuc2Nyb2xsTGVmdCwgdmVydGljYWwuc2Nyb2xsVG9wKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWZ0ZXIgc2FtZSBhcyBhYm92ZSBidXQgd2l0aCBkaWZmZXJlbnQgYXJndW1lbnRzIC0gbm9ybWFsaXplZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG9wXG4gICAgICovXG4gICAgX29uU2Nyb2xsQ2hhcnQobGVmdCwgdG9wKSB7XG4gICAgICBjb25zdCBjaGFydENvbnRhaW5lcldpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5sZWZ0ID0gbGVmdDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQgPSBsZWZ0ICsgY2hhcnRDb250YWluZXJXaWR0aDtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucGVyY2VudCA9IChsZWZ0IC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHgpICogMTAwO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50b3AgPSB0b3A7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWUgPSB0aGlzLnBpeGVsT2Zmc2V0WFRvVGltZShsZWZ0KTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudGltZUNlbnRlciA9IHRoaXMucGl4ZWxPZmZzZXRYVG9UaW1lKGxlZnQgKyBjaGFydENvbnRhaW5lcldpZHRoIC8gMik7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmRhdGVUaW1lLmxlZnQgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWUpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5kYXRlVGltZS5yaWdodCA9IGRheWpzKFxuICAgICAgICB0aGlzLnBpeGVsT2Zmc2V0WFRvVGltZShsZWZ0ICsgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0LmNsaWVudFdpZHRoKVxuICAgICAgKTtcbiAgICAgIHRoaXMuc2Nyb2xsVG8obGVmdCwgdG9wKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGN1cnJlbnQgY2hhcnQgdG8gc3BlY2lmaWVkIHRpbWUgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSB0aW1lXG4gICAgICovXG4gICAgc2Nyb2xsVG9UaW1lKHRpbWUpIHtcbiAgICAgIGxldCBwb3MgPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WCh0aW1lKTtcbiAgICAgIGNvbnN0IGNoYXJ0Q29udGFpbmVyV2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRDb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICBwb3MgPSBwb3MgLSBjaGFydENvbnRhaW5lcldpZHRoIC8gMjtcbiAgICAgIGlmIChwb3MgPiB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgcG9zID0gdGhpcy5zdGF0ZS5vcHRpb25zLndpZHRoIC0gY2hhcnRDb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGNoYXJ0IG9yIHRhc2sgbGlzdCB0byBzcGVjaWZpZWQgcGl4ZWwgdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudWxsfSBsZWZ0XG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVsbH0gdG9wXG4gICAgICovXG4gICAgc2Nyb2xsVG8obGVmdCA9IG51bGwsIHRvcCA9IG51bGwpIHtcbiAgICAgIGlmIChsZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaENvbnRhaW5lci5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5sZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICAgIGlmICh0b3AgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy50YXNrTGlzdEl0ZW1zLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC50b3AgPSB0b3A7XG4gICAgICAgIHRoaXMuc3luY1Njcm9sbFRvcCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZnRlciBzb21lIGFjdGlvbnMgbGlrZSB0aW1lIHpvb20gY2hhbmdlIHdlIG5lZWQgdG8gcmVjb21wZW5zYXRlIHNjcm9sbCBwb3NpdGlvblxuICAgICAqIHNvIGFzIGEgcmVzdWx0IGV2ZXJ5dGhpbmcgd2lsbCBiZSBpbiBzYW1lIHBsYWNlXG4gICAgICovXG4gICAgZml4U2Nyb2xsUG9zKCkge1xuICAgICAgdGhpcy5zY3JvbGxUb1RpbWUodGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lQ2VudGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW91c2Ugd2hlZWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uV2hlZWxDaGFydChldikge1xuICAgICAgaWYgKCFldi5zaGlmdEtleSkge1xuICAgICAgICBsZXQgdG9wID0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC50b3AgKyBldi5kZWx0YVk7XG4gICAgICAgIGNvbnN0IGNoYXJ0Q2xpZW50SGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbEhlaWdodCAtIGNoYXJ0Q2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAodG9wIDwgMCkge1xuICAgICAgICAgIHRvcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodG9wID4gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgdG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8obnVsbCwgdG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5sZWZ0ICsgZXYuZGVsdGFZO1xuICAgICAgICBjb25zdCBjaGFydENsaWVudFdpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5jbGllbnRXaWR0aDtcbiAgICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLnNjcm9sbFdpZHRoIC0gY2hhcnRDbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICAgICAgbGVmdCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAobGVmdCA+IHNjcm9sbFdpZHRoKSB7XG4gICAgICAgICAgbGVmdCA9IHNjcm9sbFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8obGVmdCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRpbWUgem9vbSBjaGFuZ2UgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uVGltZVpvb21DaGFuZ2UodGltZVpvb20pIHtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lWm9vbSA9IHRpbWVab29tO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVRpbWVzKCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0ZXBzKCk7XG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSb3cgaGVpZ2h0IGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25Sb3dIZWlnaHRDaGFuZ2UoaGVpZ2h0KSB7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5zeW5jU2Nyb2xsVG9wKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNjb3BlIGNoYW5nZSBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgb25TY29wZUNoYW5nZSh2YWx1ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmJlZm9yZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmFmdGVyID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXRUaW1lcygpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVTdGVwcygpO1xuICAgICAgdGhpcy5jb21wdXRlQ2FsZW5kYXJXaWR0aHMoKTtcbiAgICAgIHRoaXMuZml4U2Nyb2xsUG9zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRhc2sgbGlzdCB3aWR0aCBjaGFuZ2UgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uVGFza0xpc3RXaWR0aENoYW5nZSh2YWx1ZSkge1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LnBlcmNlbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGFzayBsaXN0IGNvbHVtbiB3aWR0aCBjaGFuZ2UgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uVGFza0xpc3RDb2x1bW5XaWR0aENoYW5nZSgpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIHNwZWNpZmllZCBldmVudCBuYW1lc1xuICAgICAqL1xuICAgIGluaXRpYWxpemVFdmVudHMoKSB7XG4gICAgICB0aGlzLiRvbignY2hhcnQtc2Nyb2xsLWhvcml6b250YWwnLCB0aGlzLm9uU2Nyb2xsQ2hhcnQpO1xuICAgICAgdGhpcy4kb24oJ2NoYXJ0LXNjcm9sbC12ZXJ0aWNhbCcsIHRoaXMub25TY3JvbGxDaGFydCk7XG4gICAgICB0aGlzLiRvbignY2hhcnQtd2hlZWwnLCB0aGlzLm9uV2hlZWxDaGFydCk7XG4gICAgICB0aGlzLiRvbigndGltZXMtdGltZVpvb20tY2hhbmdlJywgdGhpcy5vblRpbWVab29tQ2hhbmdlKTtcbiAgICAgIHRoaXMuJG9uKCdyb3ctaGVpZ2h0LWNoYW5nZScsIHRoaXMub25Sb3dIZWlnaHRDaGFuZ2UpO1xuICAgICAgdGhpcy4kb24oJ3Njb3BlLWNoYW5nZScsIHRoaXMub25TY29wZUNoYW5nZSk7XG4gICAgICB0aGlzLiRvbigndGFza0xpc3Qtd2lkdGgtY2hhbmdlJywgdGhpcy5vblRhc2tMaXN0V2lkdGhDaGFuZ2UpO1xuICAgICAgdGhpcy4kb24oJ3Rhc2tMaXN0LWNvbHVtbi13aWR0aC1jaGFuZ2UnLCB0aGlzLm9uVGFza0xpc3RDb2x1bW5XaWR0aENoYW5nZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gc29tZSBhY3Rpb24gd2FzIHBlcmZvcm1lZCAoc2NhbGUgY2hhbmdlIGZvciBleGFtcGxlKSAtIHJlY2FsY3VsYXRlIHRpbWUgdmFyaWFibGVzXG4gICAgICovXG4gICAgcmVjYWxjdWxhdGVUaW1lcygpIHtcbiAgICAgIGxldCBtYXggPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlICogNjA7XG4gICAgICBsZXQgbWluID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVTY2FsZTtcbiAgICAgIGxldCBzdGVwcyA9IG1heCAvIG1pbjtcbiAgICAgIGxldCBwZXJjZW50ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tIC8gMTAwO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbCA9XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lU2NhbGUgKiBzdGVwcyAqIHBlcmNlbnQgKyBNYXRoLnBvdygyLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVpvb20pO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uTXMgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpLmRpZmYoXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUsXG4gICAgICAgICdtaWxsaXNlY29uZHMnXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHggPVxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25NcyAvIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lUGVyUGl4ZWw7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGggPVxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25QeCArIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aW1lIHZhcmlhYmxlc1xuICAgICAqL1xuICAgIGluaXRUaW1lcygpIHtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUYXNrVGltZSlcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxuICAgICAgICAuc3VidHJhY3QodGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmJlZm9yZSwgJ2RheXMnKVxuICAgICAgICAuc3RhcnRPZignZGF5JylcbiAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGFza1RpbWUpXG4gICAgICAgIC5sb2NhbGUodGhpcy5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lKVxuICAgICAgICAuZW5kT2YoJ2RheScpXG4gICAgICAgIC5hZGQodGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmFmdGVyLCAnZGF5cycpXG4gICAgICAgIC5lbmRPZignZGF5JylcbiAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVUaW1lcygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgc3RlcHNcbiAgICAgKiBTdGVwcyBhcmUgZGF5cyBieSBkZWZhdWx0XG4gICAgICogRWFjaCBzdGVwIGNvbnRhaW4gaW5mb3JtYXRpb24gYWJvdXQgdGltZSBvZmZzZXQgYW5kIHBpeGVsIG9mZnNldCBvZiB0aGlzIHRpbWUgaW5zaWRlIGdhbnR0IGNoYXJ0XG4gICAgICovXG4gICAgY2FsY3VsYXRlU3RlcHMoKSB7XG4gICAgICBjb25zdCBzdGVwcyA9IFtdO1xuICAgICAgY29uc3QgbGFzdE1zID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKS52YWx1ZU9mKCk7XG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpO1xuICAgICAgc3RlcHMucHVzaCh7XG4gICAgICAgIHRpbWU6IGN1cnJlbnREYXRlLnZhbHVlT2YoKSxcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgbXM6IDAsXG4gICAgICAgICAgcHg6IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKVxuICAgICAgICAgIC5hZGQoMSwgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBEdXJhdGlvbilcbiAgICAgICAgICAuc3RhcnRPZignZGF5Jyk7XG4gICAgICAgIGN1cnJlbnREYXRlLnZhbHVlT2YoKSA8PSBsYXN0TXM7XG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwRHVyYXRpb24pLnN0YXJ0T2YoJ2RheScpXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0TXMgPSBjdXJyZW50RGF0ZS5kaWZmKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUsICdtaWxsaXNlY29uZHMnKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0UHggPSBvZmZzZXRNcyAvIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lUGVyUGl4ZWw7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB7XG4gICAgICAgICAgdGltZTogY3VycmVudERhdGUudmFsdWVPZigpLFxuICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgbXM6IG9mZnNldE1zLFxuICAgICAgICAgICAgcHg6IG9mZnNldFB4XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwcmV2aW91c1N0ZXAgPSBzdGVwc1tzdGVwcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcHJldmlvdXNTdGVwLndpZHRoID0ge1xuICAgICAgICAgIG1zOiBvZmZzZXRNcyAtIHByZXZpb3VzU3RlcC5vZmZzZXQubXMsXG4gICAgICAgICAgcHg6IG9mZnNldFB4IC0gcHJldmlvdXNTdGVwLm9mZnNldC5weFxuICAgICAgICB9O1xuICAgICAgICBzdGVwcy5wdXNoKHN0ZXApO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBzdGVwc1tzdGVwcy5sZW5ndGggLSAxXTtcbiAgICAgIGxhc3RTdGVwLndpZHRoID0ge1xuICAgICAgICBtczogdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uTXMgLSBsYXN0U3RlcC5vZmZzZXQubXMsXG4gICAgICAgIHB4OiB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25QeCAtIGxhc3RTdGVwLm9mZnNldC5weFxuICAgICAgfTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgY2FsZW5kYXIgd2lkdGhzIC0gd2hlbiBzY2FsZSB3YXMgY2hhbmdlZCBmb3IgZXhhbXBsZVxuICAgICAqL1xuICAgIGNvbXB1dGVDYWxlbmRhcldpZHRocygpIHtcbiAgICAgIHRoaXMuY29tcHV0ZURheVdpZHRocygpO1xuICAgICAgdGhpcy5jb21wdXRlSG91cldpZHRocygpO1xuICAgICAgdGhpcy5jb21wdXRlTW9udGhXaWR0aHMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSB3aWR0aCBvZiBjYWxlbmRhciBob3VycyBjb2x1bW4gd2lkdGhzIGJhc2luZyBvbiB0ZXh0IHdpZHRoc1xuICAgICAqL1xuICAgIGNvbXB1dGVIb3VyV2lkdGhzKCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLnN0eWxlWygnY2FsZW5kYXItcm93LXRleHQnLCAnY2FsZW5kYXItcm93LXRleHQtLWhvdXInKV07XG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcygnMjAxOC0wMS0wMVQwMDowMDowMCcpOyAvLyBhbnkgZGF0ZSB3aWxsIGJlIGdvb2QgZm9yIGhvdXJzXG4gICAgICBsZXQgbWF4V2lkdGhzID0gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIubWF4V2lkdGhzO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIud2lkdGhzID0gW107XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IDA7XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGhvdXIgPSAwOyBob3VyIDwgMjQ7IGhvdXIrKykge1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB7XG4gICAgICAgICAgaG91clxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgICAgd2lkdGhzW2Zvcm1hdE5hbWVdID0gdGhpcy5zdGF0ZS5jdHgubWVhc3VyZVRleHQoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUudG9EYXRlKCkpXG4gICAgICAgICAgKS53aWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLndpZHRocy5wdXNoKHdpZHRocyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcbiAgICAgICAgICBpZiAod2lkdGhzW2Zvcm1hdE5hbWVdID4gbWF4V2lkdGhzW2Zvcm1hdE5hbWVdKSB7XG4gICAgICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSB3aWR0aHNbZm9ybWF0TmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgJ2hvdXInKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBjYWxlbmRhciBkYXlzIGNvbHVtbiB3aWR0aHMgYmFzaW5nIG9uIHRleHQgd2lkdGhzXG4gICAgICovXG4gICAgY29tcHV0ZURheVdpZHRocygpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5zdHlsZVsoJ2NhbGVuZGFyLXJvdy10ZXh0JywgJ2NhbGVuZGFyLXJvdy10ZXh0LS1kYXknKV07XG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbMF0udGltZSk7XG4gICAgICBsZXQgbWF4V2lkdGhzID0gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5tYXhXaWR0aHM7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRocyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IDA7XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGRheSA9IDAsIGRheXNMZW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXkgPCBkYXlzTGVuOyBkYXkrKykge1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB7XG4gICAgICAgICAgZGF5XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUudG9EYXRlKCkpXG4gICAgICAgICAgKS53aWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkud2lkdGhzLnB1c2god2lkdGhzKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xuICAgICAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gd2lkdGhzW2Zvcm1hdE5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGUuYWRkKDEsICdkYXknKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW9udGhzIGNvdW50XG4gICAgICpcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyBudW1iZXIgb2YgZGlmZmVyZW50IG1vbnRocyBpbiBzcGVjaWZpZWQgdGltZSByYW5nZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZyb21UaW1lIC0gZGF0ZSBpbiBtc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b1RpbWUgLSBkYXRlIGluIG1zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBkaWZmZXJlbnQgbW9udGhzIGNvdW50XG4gICAgICovXG4gICAgbW9udGhzQ291bnQoZnJvbVRpbWUsIHRvVGltZSkge1xuICAgICAgaWYgKGZyb21UaW1lID4gdG9UaW1lKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgbGV0IGN1cnJlbnRNb250aCA9IGRheWpzKGZyb21UaW1lKTtcbiAgICAgIGxldCBwcmV2aW91c01vbnRoID0gY3VycmVudE1vbnRoLmNsb25lKCk7XG4gICAgICBsZXQgbW9udGhzQ291bnQgPSAxO1xuICAgICAgd2hpbGUgKGN1cnJlbnRNb250aC52YWx1ZU9mKCkgPD0gdG9UaW1lKSB7XG4gICAgICAgIGN1cnJlbnRNb250aCA9IGN1cnJlbnRNb250aC5hZGQoMSwgJ2RheScpO1xuICAgICAgICBpZiAocHJldmlvdXNNb250aC5tb250aCgpICE9PSBjdXJyZW50TW9udGgubW9udGgoKSkge1xuICAgICAgICAgIG1vbnRoc0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC5jbG9uZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1vbnRoc0NvdW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlIG1vbnRoIGNhbGVuZGFyIGNvbHVtbnMgd2lkdGhzIGJhc2luZyBvbiB0ZXh0IHdpZHRoc1xuICAgICAqL1xuICAgIGNvbXB1dGVNb250aFdpZHRocygpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5zdHlsZVsoJ2NhbGVuZGFyLXJvdy10ZXh0JywgJ2NhbGVuZGFyLXJvdy10ZXh0LS1tb250aCcpXTtcbiAgICAgIHRoaXMuc3RhdGUuY3R4LmZvbnQgPSBzdHlsZVsnZm9udC1zaXplJ10gKyAnICcgKyBzdHlsZVsnZm9udC1mYW1pbHknXTtcbiAgICAgIGxldCBtYXhXaWR0aHMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRocyA9IFtdO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcbiAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gMDtcbiAgICAgIH0pO1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSk7XG4gICAgICBjb25zdCBtb250aHNDb3VudCA9IHRoaXMubW9udGhzQ291bnQodGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSwgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKTtcbiAgICAgIGZvciAobGV0IG1vbnRoID0gMDsgbW9udGggPCBtb250aHNDb3VudDsgbW9udGgrKykge1xuICAgICAgICBjb25zdCB3aWR0aHMgPSB7XG4gICAgICAgICAgbW9udGhcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcbiAgICAgICAgICB3aWR0aHNbZm9ybWF0TmFtZV0gPSB0aGlzLnN0YXRlLmN0eC5tZWFzdXJlVGV4dChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUudG9EYXRlKCkpXG4gICAgICAgICAgKS53aWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC53aWR0aHMucHVzaCh3aWR0aHMpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xuICAgICAgICAgIGlmICh3aWR0aHNbZm9ybWF0TmFtZV0gPiBtYXhXaWR0aHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IHdpZHRoc1tmb3JtYXROYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnbW9udGgnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aW1lIGFuZCBkYXRlIHZhcmlhYmxlcyBmb3IgZ2FudHRcbiAgICAgKi9cbiAgICBwcmVwYXJlRGF0ZXMoKSB7XG4gICAgICBsZXQgZmlyc3RUYXNrVGltZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgbGV0IGxhc3RUYXNrVGltZSA9IDA7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IHRoaXMuc3RhdGUudGFza3MubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgdGFzayA9IHRoaXMuc3RhdGUudGFza3NbaW5kZXhdO1xuICAgICAgICBpZiAodGFzay5zdGFydFRpbWUgPCBmaXJzdFRhc2tUaW1lKSB7XG4gICAgICAgICAgZmlyc3RUYXNrVGltZSA9IHRhc2suc3RhcnRUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb24gPiBsYXN0VGFza1RpbWUpIHtcbiAgICAgICAgICBsYXN0VGFza1RpbWUgPSB0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRhc2tUaW1lID0gZmlyc3RUYXNrVGltZTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGFza1RpbWUgPSBsYXN0VGFza1RpbWU7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lID0gZGF5anMoZmlyc3RUYXNrVGltZSlcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxuICAgICAgICAuc3VidHJhY3QodGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmJlZm9yZSwgJ2RheXMnKVxuICAgICAgICAuc3RhcnRPZignZGF5JylcbiAgICAgICAgLnZhbHVlT2YoKTtcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSA9IGRheWpzKGxhc3RUYXNrVGltZSlcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXG4gICAgICAgIC5lbmRPZignZGF5JylcbiAgICAgICAgLmFkZCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYWZ0ZXIsICdkYXlzJylcbiAgICAgICAgLmVuZE9mKCdkYXknKVxuICAgICAgICAudmFsdWVPZigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBhbmQgY2FsY3VsYXRlIGV2ZXJ5dGhpbmdcbiAgICAgKi9cbiAgICBzZXR1cChpdHNVcGRhdGUgPSAnJykge1xuICAgICAgdGhpcy5pbml0aWFsaXplKGl0c1VwZGF0ZSk7XG4gICAgICB0aGlzLnByZXBhcmVEYXRlcygpO1xuICAgICAgdGhpcy5pbml0VGltZXMoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3RlcHMoKTtcbiAgICAgIHRoaXMuY29tcHV0ZUNhbGVuZGFyV2lkdGhzKCk7XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGggPSB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5yZWR1Y2UoXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHByZXYud2lkdGggKyBjdXJyZW50LndpZHRoIH07XG4gICAgICAgIH0sXG4gICAgICAgIHsgd2lkdGg6IDAgfVxuICAgICAgKS53aWR0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIHJlc2l6ZSBldmVudCAoZnJvbSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgKi9cbiAgICBnbG9iYWxPblJlc2l6ZSgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy4kZWwgPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLiRlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgPlxuICAgICAgICAodGhpcy5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoIC8gMTAwKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aFRocmVzaG9sZFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRpZmYgPVxuICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aEZyb21QZXJjZW50YWdlIC1cbiAgICAgICAgICAodGhpcy5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoIC8gMTAwKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aFRocmVzaG9sZDtcbiAgICAgICAgbGV0IGRpZmZQZXJjZW50ID0gMTAwIC0gKGRpZmYgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhGcm9tUGVyY2VudGFnZSkgKiAxMDA7XG4gICAgICAgIGlmIChkaWZmUGVyY2VudCA8IDApIHtcbiAgICAgICAgICBkaWZmUGVyY2VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ID0gZGlmZlBlcmNlbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgIGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ID0gMTAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xuICAgICAgdGhpcy4kZW1pdCgnY2FsZW5kYXItcmVjYWxjdWxhdGUnKTtcbiAgICAgIHRoaXMuc3luY1Njcm9sbFRvcCgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCB2aXNpYmxlIHRhc2tzXG4gICAgICogVmVyeSBpbXBvcnRhbnQgbWV0aG9kIHdoaWNoIHdpbGwgYnJpbmcgdXMgb25seSB0aG9zZSB0YXNrcyB0aGF0IGFyZSB2aXNpYmxlIGluc2lkZSBnYW50dCBjaGFydFxuICAgICAqIEZvciBleGFtcGxlIHdoZW4gdGFzayBpcyBjb2xsYXBzZWQgLSBjaGlsZHJlbiBvZiB0aGlzIHRhc2sgYXJlIG5vdCB2aXNpYmxlIC0gd2Ugc2hvdWxkIG5vdCByZW5kZXIgdGhlbVxuICAgICAqL1xuICAgIHZpc2libGVUYXNrcygpIHtcbiAgICAgIGNvbnN0IHZpc2libGVUYXNrcyA9IHRoaXMuc3RhdGUudGFza3MuZmlsdGVyKHRhc2sgPT4gdGhpcy5pc1Rhc2tWaXNpYmxlKHRhc2spKTtcbiAgICAgIGNvbnN0IG1heFJvd3MgPSB2aXNpYmxlVGFza3Muc2xpY2UoMCwgdGhpcy5zdGF0ZS5vcHRpb25zLm1heFJvd3MpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgPSB0aGlzLmdldFRhc2tzSGVpZ2h0KG1heFJvd3MpO1xuICAgICAgbGV0IGhlaWdodENvbXBlbnNhdGlvbiA9IDA7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCA+IHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQpIHtcbiAgICAgICAgaGVpZ2h0Q29tcGVuc2F0aW9uID0gdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgLSB0aGlzLnN0YXRlLm9wdGlvbnMubWF4SGVpZ2h0O1xuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCA9IHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQobWF4Um93cykgLSBoZWlnaHRDb21wZW5zYXRpb247XG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0ID0gdGhpcy5nZXRUYXNrc0hlaWdodCh2aXNpYmxlVGFza3MpO1xuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLm91dGVySGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQobWF4Um93cywgdHJ1ZSkgLSBoZWlnaHRDb21wZW5zYXRpb247XG4gICAgICBsZXQgbGVuID0gdmlzaWJsZVRhc2tzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHRhc2sgPSB2aXNpYmxlVGFza3NbaW5kZXhdO1xuICAgICAgICB0YXNrLndpZHRoID1cbiAgICAgICAgICB0YXNrLmR1cmF0aW9uIC8gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbCAtIHRoaXMuc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXTtcbiAgICAgICAgaWYgKHRhc2sud2lkdGggPCAwKSB7XG4gICAgICAgICAgdGFzay53aWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGFzay5oZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodDtcbiAgICAgICAgdGFzay54ID0gdGhpcy50aW1lVG9QaXhlbE9mZnNldFgodGFzay5zdGFydFRpbWUpO1xuICAgICAgICB0YXNrLnkgPVxuICAgICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHRoaXMuc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMikgKiBpbmRleCArXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmlzaWJsZVRhc2tzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdHlsZSBzaG9ydGN1dFxuICAgICAqL1xuICAgIHN0eWxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy5zdHlsZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbHVtbnMgYW5kIGNvbXB1dGUgZGltZW5zaW9ucyBvbiB0aGUgZmx5XG4gICAgICovXG4gICAgZ2V0VGFza0xpc3RDb2x1bW5zKCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRhc2tzIHVzZWQgZm9yIGNvbW11bmljYXRlIHdpdGggcGFyZW50IGNvbXBvbmVudFxuICAgICAqL1xuICAgIG91dHB1dFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGFza3M7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdXNlZCB0byBjb21tdW5pY2F0ZSB3aXRoIHBhcmVudCBjb21wb25lbnRcbiAgICAgKi9cbiAgICBvdXRwdXRPcHRpb25zKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdhdGNoIHRhc2tzIGFmdGVyIGdhbnR0IGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHJlYWN0IHdoZW4gd2UgaGF2ZSBuZXcga2lkcyBvbiB0aGUgYmxvY2tcbiAgICovXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaFRhc2tzID0gdGhpcy4kd2F0Y2goXG4gICAgICAndGFza3MnLFxuICAgICAgdGFza3MgPT4ge1xuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0YXNrcywgdGhpcy5vdXRwdXRUYXNrcyk7XG4gICAgICAgIGlmIChub3RFcXVhbCkge1xuICAgICAgICAgIHRoaXMuc2V0dXAoJ3Rhc2tzJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGRlZXA6IHRydWUgfVxuICAgICk7XG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3B0aW9ucyA9IHRoaXMuJHdhdGNoKFxuICAgICAgJ29wdGlvbnMnLFxuICAgICAgb3B0cyA9PiB7XG4gICAgICAgIGNvbnN0IG5vdEVxdWFsID0gbm90RXF1YWxEZWVwKG9wdHMsIHRoaXMub3V0cHV0T3B0aW9ucyk7XG4gICAgICAgIGlmIChub3RFcXVhbCkge1xuICAgICAgICAgIHRoaXMuc2V0dXAoJ29wdGlvbnMnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFRhc2tzID0gdGhpcy4kd2F0Y2goXG4gICAgICAnb3V0cHV0VGFza3MnLFxuICAgICAgdGFza3MgPT4ge1xuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0aGlzLnRhc2tzLCB0YXNrcyk7XG4gICAgICAgIGlmIChub3RFcXVhbCAmJiB0aGlzLnN0YXRlLmVtaXRUYXNrc0NoYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCd0YXNrcy11cGRhdGVkJywgdGFza3MpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgeyBkZWVwOiB0cnVlIH1cbiAgICApO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dE9wdGlvbnMgPSB0aGlzLiR3YXRjaChcbiAgICAgICdvdXRwdXRPcHRpb25zJyxcbiAgICAgIG9wdGlvbnMgPT4ge1xuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAobm90RXF1YWwgJiYgdGhpcy5zdGF0ZS5lbWl0T3B0aW9uc0NoYW5nZXMpIHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdvcHRpb25zLXVwZGF0ZWQnLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtY3JlYXRlZCcsIHRoaXMpO1xuICAgIHRoaXMuJGVtaXQoJ2NyZWF0ZWQnLCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogRW1pdCBiZWZvcmUtbW91bnQgZXZlbnRcbiAgICovXG4gIGJlZm9yZU1vdW50KCkge1xuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS1tb3VudCcsIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0IHJlYWR5L21vdW50ZWQgZXZlbnRzIGFuZCBkZWxpdmVyIHRoaXMgZ2FudHQgaW5zdGFuY2UgdG8gb3V0c2lkZSB3b3JsZCB3aGVuIG5lZWRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcbiAgICB0aGlzLnN0YXRlLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5nbG9iYWxPblJlc2l6ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuc3RhdGUucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICB0aGlzLmdsb2JhbE9uUmVzaXplKCk7XG4gICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2FudHQtZWxhc3RpYy1tb3VudGVkJywgdGhpcyk7XG4gICAgdGhpcy4kZW1pdCgnbW91bnRlZCcpO1xuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtcmVhZHknLCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogRW1pdCBldmVudCB3aGVuIGRhdGEgd2FzIGNoYW5nZWQgYW5kIGJlZm9yZSB1cGRhdGUgKHlvdSBjYW4gY2xlYW51cCBkb20gZXZlbnRzIGhlcmUgZm9yIGV4YW1wbGUpXG4gICAqL1xuICBiZWZvcmVVcGRhdGUoKSB7XG4gICAgdGhpcy4kZW1pdCgnYmVmb3JlLXVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0IGV2ZW50IHdoZW4gZ2FudHQtZWxhc3RpYyB2aWV3IHdhcyB1cGRhdGVkXG4gICAqL1xuICB1cGRhdGVkKCkge1xuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZWQnKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhbiB1cFxuICAgKi9cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hUYXNrcygpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE9wdGlvbnMoKTtcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPdXRwdXRUYXNrcygpO1xuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dE9wdGlvbnMoKTtcbiAgICB0aGlzLiRlbWl0KCdiZWZvcmUtZGVzdHJveScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFbWl0IGV2ZW50IGFmdGVyIGdhbnR0LWVsYXN0aWMgd2FzIGRlc3Ryb3llZFxuICAgKi9cbiAgZGVzdHJveWVkKCkge1xuICAgIHRoaXMuJGVtaXQoJ2Rlc3Ryb3llZCcpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgR2FudHRFbGFzdGljO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbkBpbXBvcnQgdXJsKCcuL3N0eWxlcy9nYW50dEVsYXN0aWMuY3NzJyk7XG48L3N0eWxlPlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENhbGVuZGFyIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXdyYXBwZXJcIlxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXItd3JhcHBlciddLCB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4JyB9XCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jYWxlbmRhclwiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXInXSwgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcgfVwiPlxuICAgICAgPGNhbGVuZGFyLXJvdyA6aXRlbXM9XCJkYXRlcy5tb250aHNcIiB3aGljaD1cIm1vbnRoXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5XCI+PC9jYWxlbmRhci1yb3c+XG4gICAgICA8Y2FsZW5kYXItcm93IDppdGVtcz1cImRhdGVzLmRheXNcIiB3aGljaD1cImRheVwiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXlcIj48L2NhbGVuZGFyLXJvdz5cbiAgICAgIDxjYWxlbmRhci1yb3cgOml0ZW1zPVwiZGF0ZXMuaG91cnNcIiB3aGljaD1cImhvdXJcIiB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZGlzcGxheVwiPjwvY2FsZW5kYXItcm93PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IENhbGVuZGFyUm93IGZyb20gJy4vQ2FsZW5kYXJSb3cudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NhbGVuZGFyJyxcbiAgY29tcG9uZW50czoge1xuICAgIENhbGVuZGFyUm93XG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSBob3VycyB3aWxsIGZpdD9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgaG93TWFueUhvdXJzRml0KGRheUluZGV4KSB7XG4gICAgICBjb25zdCBzdHJva2UgPSAxO1xuICAgICAgY29uc3QgYWRkaXRpb25hbFNwYWNlID0gc3Ryb2tlICsgMjtcbiAgICAgIGxldCBmdWxsQ2VsbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbZGF5SW5kZXhdLndpZHRoLnB4O1xuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpO1xuICAgICAgZm9yIChsZXQgaG91cnMgPSAyNDsgaG91cnMgPiAxOyBob3VycyA9IE1hdGguY2VpbChob3VycyAvIDIpKSB7XG4gICAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgb2YgZm9ybWF0TmFtZXMpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UpICogaG91cnMgPD0gZnVsbENlbGxXaWR0aCAmJlxuICAgICAgICAgICAgaG91cnMgPiAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb3VudDogaG91cnMsXG4gICAgICAgICAgICAgIHR5cGU6IGZvcm1hdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgdHlwZTogJydcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhvdyBtYW55IGRheXMgd2lsbCBmaXQ/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGhvd01hbnlEYXlzRml0KCkge1xuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxTcGFjZSA9IHN0cm9rZSArIDI7XG4gICAgICBsZXQgZnVsbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGg7XG4gICAgICBsZXQgZm9ybWF0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0KTtcbiAgICAgIGZvciAobGV0IGRheXMgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5sZW5ndGg7IGRheXMgPiAxOyBkYXlzID0gTWF0aC5jZWlsKGRheXMgLyAyKSkge1xuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UpICogZGF5cyA8PSBmdWxsV2lkdGggJiZcbiAgICAgICAgICAgIGRheXMgPiAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb3VudDogZGF5cyxcbiAgICAgICAgICAgICAgdHlwZTogZm9ybWF0TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICB0eXBlOiAnJ1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSG93IG1hbnkgbW9udGhzIHdpbGwgZml0P1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBob3dNYW55TW9udGhzRml0KCkge1xuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcbiAgICAgIGNvbnN0IGFkZGl0aW9uYWxTcGFjZSA9IHN0cm9rZSArIDI7XG4gICAgICBsZXQgZnVsbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGg7XG4gICAgICBsZXQgZm9ybWF0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpO1xuICAgICAgbGV0IGN1cnJlbnRNb250aCA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSk7XG4gICAgICBsZXQgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC5jbG9uZSgpO1xuICAgICAgY29uc3QgbGFzdFRpbWUgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZTtcbiAgICAgIGxldCBtb250aHNDb3VudCA9IHRoaXMucm9vdC5tb250aHNDb3VudChcbiAgICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lLFxuICAgICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZVxuICAgICAgKTtcbiAgICAgIGZvciAobGV0IG1vbnRocyA9IG1vbnRoc0NvdW50OyBtb250aHMgPiAxOyBtb250aHMgPSBNYXRoLmNlaWwobW9udGhzIC8gMikpIHtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UpICogbW9udGhzIDw9IGZ1bGxXaWR0aCAmJlxuICAgICAgICAgICAgbW9udGhzID4gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY291bnQ6IG1vbnRocyxcbiAgICAgICAgICAgICAgdHlwZTogZm9ybWF0TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICB0eXBlOiBmb3JtYXROYW1lc1swXVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgaG91cnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUhvdXJzKCkge1xuICAgICAgbGV0IGFsbEhvdXJzID0gW107XG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZGlzcGxheSkge1xuICAgICAgICByZXR1cm4gYWxsSG91cnM7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBob3VySW5kZXggPSAwLCBsZW4gPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5sZW5ndGg7IGhvdXJJbmRleCA8IGxlbjsgaG91ckluZGV4KyspIHtcbiAgICAgICAgY29uc3QgaG91cnNDb3VudCA9IHRoaXMuaG93TWFueUhvdXJzRml0KGhvdXJJbmRleCk7XG4gICAgICAgIGlmIChob3Vyc0NvdW50LmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaG91cnMgPSB7IGtleTogaG91ckluZGV4ICsgJ3N0ZXAnLCBjaGlsZHJlbjogW10gfTtcbiAgICAgICAgY29uc3QgaG91clN0ZXAgPSAyNCAvIGhvdXJzQ291bnQuY291bnQ7XG4gICAgICAgIGNvbnN0IGhvdXJXaWR0aFB4ID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbaG91ckluZGV4XS53aWR0aC5weCAvIGhvdXJzQ291bnQuY291bnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBob3Vyc0NvdW50LmNvdW50OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbaG91ckluZGV4XS50aW1lKS5hZGQoaSAqIGhvdXJTdGVwLCAnaG91cicpO1xuICAgICAgICAgIGxldCBpbmRleCA9IGhvdXJJbmRleDtcbiAgICAgICAgICBpZiAoaG91ckluZGV4ID4gMCkge1xuICAgICAgICAgICAgaW5kZXggPSBob3VySW5kZXggLSBNYXRoLmZsb29yKGhvdXJJbmRleCAvIDI0KSAqIDI0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgdGV4dFdpZHRoID0gMDtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIud2lkdGhzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRleHRXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIud2lkdGhzW2luZGV4XVtob3Vyc0NvdW50LnR5cGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgeCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2hvdXJJbmRleF0ub2Zmc2V0LnB4ICsgaG91cldpZHRoUHggKiBpO1xuICAgICAgICAgIGhvdXJzLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IGhvdXJJbmRleCxcbiAgICAgICAgICAgIGtleTogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbaG91ckluZGV4XS50aW1lICsgJ2gnICsgaSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0ICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGhvdXJXaWR0aFB4LFxuICAgICAgICAgICAgdGV4dFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmhlaWdodCxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdFtob3Vyc0NvdW50LnR5cGVdKGRhdGUudG9EYXRlKCkpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxsSG91cnMucHVzaChob3Vycyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsSG91cnM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGRheXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZURheXMoKSB7XG4gICAgICBsZXQgZGF5cyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZGlzcGxheSkge1xuICAgICAgICByZXR1cm4gZGF5cztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRheXNDb3VudCA9IHRoaXMuaG93TWFueURheXNGaXQoKTtcbiAgICAgIGlmIChkYXlzQ291bnQuY291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXlTdGVwID0gTWF0aC5jZWlsKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmxlbmd0aCAvIGRheXNDb3VudC5jb3VudCk7XG4gICAgICBmb3IgKGxldCBkYXlJbmRleCA9IDAsIGxlbiA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmxlbmd0aDsgZGF5SW5kZXggPCBsZW47IGRheUluZGV4ICs9IGRheVN0ZXApIHtcbiAgICAgICAgbGV0IGRheVdpZHRoUHggPSAwO1xuICAgICAgICAvLyBkYXkgY291bGQgYmUgc2hvcnRlciAoZGF5bGlnaHQgc2F2aW5nIHRpbWUpIHNvIGpvaW4gd2lkdGhzIGFuZCBkaXZpZGVcbiAgICAgICAgZm9yIChsZXQgY3VycmVudFN0ZXAgPSAwOyBjdXJyZW50U3RlcCA8IGRheVN0ZXA7IGN1cnJlbnRTdGVwKyspIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2RheUluZGV4ICsgY3VycmVudFN0ZXBdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGF5V2lkdGhQeCArPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXS53aWR0aC5weDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW2RheUluZGV4XS50aW1lKTtcbiAgICAgICAgbGV0IHRleHRXaWR0aCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRoc1tkYXlJbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRoc1tkYXlJbmRleF1bZGF5c0NvdW50LnR5cGVdO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4ID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHNbZGF5SW5kZXhdLm9mZnNldC5weDtcbiAgICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgICBpbmRleDogZGF5SW5kZXgsXG4gICAgICAgICAga2V5OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tkYXlJbmRleF0udGltZSArICdkJyxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHk6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmhlaWdodCxcbiAgICAgICAgICB3aWR0aDogZGF5V2lkdGhQeCxcbiAgICAgICAgICB0ZXh0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0LFxuICAgICAgICAgIGxhYmVsOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0W2RheXNDb3VudC50eXBlXShkYXRlLnRvRGF0ZSgpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXlzLm1hcChpdGVtID0+ICh7XG4gICAgICAgIGtleTogaXRlbS5rZXksXG4gICAgICAgIGNoaWxkcmVuOiBbaXRlbV1cbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgbW9udGhzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgZ2VuZXJhdGVNb250aHMoKSB7XG4gICAgICBsZXQgbW9udGhzID0gW107XG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuIG1vbnRocztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1vbnRoc0NvdW50ID0gdGhpcy5ob3dNYW55TW9udGhzRml0KCk7XG4gICAgICBpZiAobW9udGhzQ291bnQuY291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG1vbnRocztcbiAgICAgIH1cbiAgICAgIGxldCBmb3JtYXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdCk7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpO1xuICAgICAgZm9yIChsZXQgbW9udGhJbmRleCA9IDA7IG1vbnRoSW5kZXggPCBtb250aHNDb3VudC5jb3VudDsgbW9udGhJbmRleCsrKSB7XG4gICAgICAgIGxldCBtb250aFdpZHRoID0gMDtcbiAgICAgICAgbGV0IG1vbnRoT2Zmc2V0ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICAgIGxldCBmaW5hbERhdGUgPSBkYXlqcyhjdXJyZW50RGF0ZSlcbiAgICAgICAgICAuYWRkKDEsICdtb250aCcpXG4gICAgICAgICAgLnN0YXJ0T2YoJ21vbnRoJyk7XG4gICAgICAgIGlmIChmaW5hbERhdGUudmFsdWVPZigpID4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpIHtcbiAgICAgICAgICBmaW5hbERhdGUgPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbXVzdCBmaW5kIGZpcnN0IGFuZCBsYXN0IHN0ZXAgdG8gZ2V0IHRoZSBvZmZzZXRzIC8gd2lkdGhzXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwLCBsZW4gPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5sZW5ndGg7IHN0ZXAgPCBsZW47IHN0ZXArKykge1xuICAgICAgICAgIGxldCBjdXJyZW50U3RlcCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzW3N0ZXBdO1xuICAgICAgICAgIGlmIChjdXJyZW50U3RlcC50aW1lID49IGN1cnJlbnREYXRlLnZhbHVlT2YoKSAmJiBjdXJyZW50U3RlcC50aW1lIDwgZmluYWxEYXRlLnZhbHVlT2YoKSkge1xuICAgICAgICAgICAgbW9udGhXaWR0aCArPSBjdXJyZW50U3RlcC53aWR0aC5weDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RlcC5vZmZzZXQucHggPCBtb250aE9mZnNldCkge1xuICAgICAgICAgICAgICBtb250aE9mZnNldCA9IGN1cnJlbnRTdGVwLm9mZnNldC5weDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICAgIGxldCBjaG9vc2VuRm9ybWF0TmFtZTtcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xuICAgICAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyAyIDw9IG1vbnRoV2lkdGgpIHtcbiAgICAgICAgICAgIGxhYmVsID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0W2Zvcm1hdE5hbWVdKGN1cnJlbnREYXRlLnRvRGF0ZSgpKTtcbiAgICAgICAgICAgIGNob29zZW5Gb3JtYXROYW1lID0gZm9ybWF0TmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRleHRXaWR0aCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzW21vbnRoSW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRleHRXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLndpZHRoc1ttb250aEluZGV4XVtjaG9vc2VuRm9ybWF0TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHggPSBtb250aE9mZnNldDtcbiAgICAgICAgbW9udGhzLnB1c2goe1xuICAgICAgICAgIGluZGV4OiBtb250aEluZGV4LFxuICAgICAgICAgIGtleTogbW9udGhJbmRleCArICdtJyxcbiAgICAgICAgICB4LFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IG1vbnRoV2lkdGgsXG4gICAgICAgICAgdGV4dFdpZHRoLFxuICAgICAgICAgIGNob29zZW5Gb3JtYXROYW1lLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpO1xuICAgICAgICBpZiAoY3VycmVudERhdGUudmFsdWVPZigpID4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpIHtcbiAgICAgICAgICBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1vbnRocy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN1bSBhbGwgY2FsZW5kYXIgcm93cyBoZWlnaHQgYW5kIHJldHVybiByZXN1bHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtpbnR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlQ2FsZW5kYXJEaW1lbnNpb25zKHsgaG91cnMsIGRheXMsIG1vbnRocyB9KSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gMDtcbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXkgJiYgaG91cnMubGVuZ3RoID4gMCkge1xuICAgICAgICBoZWlnaHQgKz0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5oZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXkgJiYgZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGhlaWdodCArPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXkgJiYgbW9udGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBkYXRlcygpIHtcbiAgICAgIGNvbnN0IGhvdXJzID0gdGhpcy5nZW5lcmF0ZUhvdXJzKCk7XG4gICAgICBjb25zdCBkYXlzID0gdGhpcy5nZW5lcmF0ZURheXMoKTtcbiAgICAgIGNvbnN0IG1vbnRocyA9IHRoaXMuZ2VuZXJhdGVNb250aHMoKTtcbiAgICAgIGNvbnN0IGFsbERhdGVzID0geyBob3VycywgZGF5cywgbW9udGhzIH07XG4gICAgICB0aGlzLmNhbGN1bGF0ZUNhbGVuZGFyRGltZW5zaW9ucyhhbGxEYXRlcyk7XG4gICAgICByZXR1cm4gYWxsRGF0ZXM7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2FsZW5kYXJSb3cgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3cgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LS0nICsgd2hpY2hcIlxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93J10sIC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy0tJyArIHdoaWNoXSB9XCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiXG4gICAgICA6a2V5PVwiaXRlbS5rZXlcIlxuICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgd2hpY2hcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdCddLCAuLi5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC0tJyArIHdoaWNoXSB9XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0nICsgd2hpY2hcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQnXSxcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0nICsgd2hpY2hdLFxuICAgICAgICAgIHdpZHRoOiBjaGlsZC53aWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiBjaGlsZC5oZWlnaHQgKyAncHgnXG4gICAgICAgIH1cIlxuICAgICAgICB2LWZvcj1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxuICAgICAgICA6a2V5PVwiY2hpbGQua2V5XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dC0tJyArIHdoaWNoXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dCddLFxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLScgKyB3aGljaF0sXG4gICAgICAgICAgICBsZWZ0OiBnZXRUZXh0WChjaGlsZCkgKyAncHgnXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjaGlsZC5sYWJlbCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDYWxlbmRhclJvdycsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ2l0ZW1zJywgJ3doaWNoJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHggcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VGV4dFgoaXRlbSkge1xuICAgICAgbGV0IHggPSBpdGVtLnggKyBpdGVtLndpZHRoIC8gMiAtIGl0ZW0udGV4dFdpZHRoIC8gMjtcbiAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnICYmIHRoaXMucm9vdC5pc0luc2lkZVZpZXdQb3J0KGl0ZW0ueCwgaXRlbS53aWR0aCwgMCkpIHtcbiAgICAgICAgbGV0IHNjcm9sbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0IC0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQ7XG4gICAgICAgIHggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCArIHNjcm9sbFdpZHRoIC8gMiAtIGl0ZW0udGV4dFdpZHRoIC8gMiArIDI7XG4gICAgICAgIGlmICh4ICsgaXRlbS50ZXh0V2lkdGggKyAyID4gaXRlbS54ICsgaXRlbS53aWR0aCkge1xuICAgICAgICAgIHggPSBpdGVtLnggKyBpdGVtLndpZHRoIC0gaXRlbS50ZXh0V2lkdGggLSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHggPCBpdGVtLngpIHtcbiAgICAgICAgICB4ID0gaXRlbS54ICsgMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHggLSBpdGVtLng7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ2hhcnQgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0XCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydCddIH1cIiByZWY9XCJjaGFydFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZ2FudC1lbGFzdGljX19jaGFydC1jYWxlbmRhci1jb250YWluZXJcIlxuICAgICAgcmVmPVwiY2hhcnRDYWxlbmRhckNvbnRhaW5lclwiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lciddLFxuICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyAncHgnLFxuICAgICAgICAnbWFyZ2luLWJvdHRvbSc6IHJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXAgKyAncHgnXG4gICAgICB9XCJcbiAgICA+XG4gICAgICA8Y2FsZW5kYXI+PC9jYWxlbmRhcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtY29udGFpbmVyXCJcbiAgICAgIHJlZj1cImNoYXJ0R3JhcGhDb250YWluZXJcIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1ncmFwaC1jb250YWluZXInXSxcbiAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArICdweCdcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWFyZWEnXSxcbiAgICAgICAgICB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGhcIlxuICAgICAgICAgIHJlZj1cImNoYXJ0R3JhcGhcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZ3JhcGgnXSwgaGVpZ2h0OiAnMTAwJScgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWdyYXBoLXN2ZyddIH1cIlxuICAgICAgICAgICAgcmVmPVwiY2hhcnRHcmFwaFN2Z1wiXG4gICAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgICB5PVwiMFwiXG4gICAgICAgICAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnXCJcbiAgICAgICAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0ICsgJ3B4J1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGF5cy1oaWdobGlnaHQ+PC9kYXlzLWhpZ2hsaWdodD5cbiAgICAgICAgICAgIDxncmlkPjwvZ3JpZD5cbiAgICAgICAgICAgIDxkZXBlbmRlbmN5LWxpbmVzIDp0YXNrcz1cInJvb3QudmlzaWJsZVRhc2tzXCI+PC9kZXBlbmRlbmN5LWxpbmVzPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctd3JhcHBlclwiXG4gICAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXdyYXBwZXInXSB9XCJcbiAgICAgICAgICAgICAgdi1mb3I9XCJ0YXNrIGluIHJvb3QudmlzaWJsZVRhc2tzXCJcbiAgICAgICAgICAgICAgOnRhc2s9XCJ0YXNrXCJcbiAgICAgICAgICAgICAgOmtleT1cInRhc2suaWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y29tcG9uZW50IDp0YXNrPVwidGFza1wiIDppcz1cInRhc2sudHlwZVwiPjwvY29tcG9uZW50PlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQudnVlJztcbmltcG9ydCBEYXlzSGlnaGxpZ2h0IGZyb20gJy4vRGF5c0hpZ2hsaWdodC52dWUnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSc7XG5pbXBvcnQgRGVwZW5kZW5jeUxpbmVzIGZyb20gJy4vRGVwZW5kZW5jeUxpbmVzLnZ1ZSc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Jvdy9UYXNrLnZ1ZSc7XG5pbXBvcnQgTWlsZXN0b25lIGZyb20gJy4vUm93L01pbGVzdG9uZS52dWUnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Sb3cvUHJvamVjdC52dWUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ2hhcnQnLFxuICBjb21wb25lbnRzOiB7XG4gICAgR3JpZCxcbiAgICBEZXBlbmRlbmN5TGluZXMsXG4gICAgQ2FsZW5kYXIsXG4gICAgVGFzayxcbiAgICBNaWxlc3RvbmUsXG4gICAgUHJvamVjdCxcbiAgICBEYXlzSGlnaGxpZ2h0XG4gIH0sXG4gIGluamVjdDogWydyb290J10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vdmluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydCA9IHRoaXMuJHJlZnMuY2hhcnQ7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRDYWxlbmRhckNvbnRhaW5lciA9IHRoaXMuJHJlZnMuY2hhcnRDYWxlbmRhckNvbnRhaW5lcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydEdyYXBoQ29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydEdyYXBoQ29udGFpbmVyO1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGggPSB0aGlzLiRyZWZzLmNoYXJ0R3JhcGg7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRHcmFwaFN2ZyA9IHRoaXMuJHJlZnMuY2hhcnRHcmFwaFN2ZztcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGJveFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRWaWV3Qm94KCkge1xuICAgICAgcmV0dXJuIGAwIDAgJHtNYXRoLnJvdW5kKHRoaXMuZ2V0V2lkdGgpfSAke3RoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodH1gO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERheXMgaGlnaGxpZ2h0IGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG5cbjx0ZW1wbGF0ZT5cbiAgPGdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRheXMtaGlnaGxpZ2h0LWNvbnRhaW5lclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXInXSB9XCJcbiAgICB2LWlmPVwic2hvd1dvcmtpbmdEYXlzXCJcbiAgPlxuICAgIDxyZWN0XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRheXMtaGlnaGxpZ2h0LXJlY3RcIlxuICAgICAgdi1mb3I9XCJkYXkgaW4gd29ya2luZ0RheXNcIlxuICAgICAgOmtleT1cImdldEtleShkYXkpXCJcbiAgICAgIDp4PVwiZGF5Lm9mZnNldC5weFwiXG4gICAgICB5PVwiMFwiXG4gICAgICA6d2lkdGg9XCJkYXkud2lkdGgucHhcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRheXMtaGlnaGxpZ2h0LXJlY3QnXSB9XCJcbiAgICA+PC9yZWN0PlxuICA8L2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0RheXNIaWdobGlnaHQnLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEdldCBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXlcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBrZXkgaWRlaW50aWZpZXIgZm9yIGxvb3BcbiAgICAgKi9cbiAgICBnZXRLZXkoZGF5KSB7XG4gICAgICByZXR1cm4gZGF5anMoZGF5LnRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgd29ya2luZyBkYXlzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgd29ya2luZ0RheXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMuZmlsdGVyKHN0ZXAgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIud29ya2luZ0RheXMuaW5kZXhPZihkYXlqcyhzdGVwLnRpbWUpLmRheSgpKSA9PT0gLTE7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvdyB3b3JraW5nIGRheXM/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbH1cbiAgICAgKi9cbiAgICBzaG93V29ya2luZ0RheXMoKSB7XG4gICAgICBjb25zdCBjYWxlbmRhciA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyO1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgY2FsZW5kYXIud29ya2luZ0RheXMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoY2FsZW5kYXIud29ya2luZ0RheXMpICYmXG4gICAgICAgIGNhbGVuZGFyLndvcmtpbmdEYXlzLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERlcGVuZGVuY3lMaW5lcyBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8c3ZnXG4gICAgeD1cIjBcIlxuICAgIHk9XCIwXCJcbiAgICB3aWR0aD1cIjEwMCVcIlxuICAgIGhlaWdodD1cIjEwMCVcIlxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXJcIlxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXInXSB9XCJcbiAgPlxuICAgIDxnIHYtZm9yPVwidGFzayBpbiBkZXBlbmRlbmN5VGFza3NcIiA6a2V5PVwidGFzay5pZFwiIDp0YXNrPVwidGFza1wiPlxuICAgICAgPHBhdGhcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGhcIlxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgnXSB9XCJcbiAgICAgICAgdi1mb3I9XCJkZXBlbmRlbmN5TGluZSBpbiB0YXNrLmRlcGVuZGVuY3lMaW5lc1wiXG4gICAgICAgIDprZXk9XCJkZXBlbmRlbmN5TGluZS5pZFwiXG4gICAgICAgIDp0YXNrPVwidGFza1wiXG4gICAgICAgIDpkPVwiZGVwZW5kZW5jeUxpbmUucG9pbnRzXCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9nPlxuICA8L3N2Zz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEZXBlbmRlbmN5TGluZXMnLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrcyddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEdldCBwYXRoIHBvaW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGZyb21UYXNrSWRcbiAgICAgKiBAcGFyYW0ge2FueX0gdG9UYXNrSWRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFBvaW50cyhmcm9tVGFza0lkLCB0b1Rhc2tJZCkge1xuICAgICAgY29uc3QgZnJvbVRhc2sgPSB0aGlzLnJvb3QuZ2V0VGFzayhmcm9tVGFza0lkKTtcbiAgICAgIGNvbnN0IHRvVGFzayA9IHRoaXMucm9vdC5nZXRUYXNrKHRvVGFza0lkKTtcbiAgICAgIGlmIChcbiAgICAgICAgZnJvbVRhc2sgPT09IG51bGwgfHxcbiAgICAgICAgdG9UYXNrID09PSBudWxsIHx8XG4gICAgICAgICF0aGlzLnJvb3QuaXNUYXNrVmlzaWJsZSh0b1Rhc2spIHx8XG4gICAgICAgICF0aGlzLnJvb3QuaXNUYXNrVmlzaWJsZShmcm9tVGFzaylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0WCA9IGZyb21UYXNrLnggKyBmcm9tVGFzay53aWR0aDtcbiAgICAgIGNvbnN0IHN0YXJ0WSA9IGZyb21UYXNrLnkgKyBmcm9tVGFzay5oZWlnaHQgLyAyO1xuICAgICAgY29uc3Qgc3RvcFggPSB0b1Rhc2sueDtcbiAgICAgIGNvbnN0IHN0b3BZID0gdG9UYXNrLnkgKyB0b1Rhc2suaGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IHN0b3BYIC0gc3RhcnRYO1xuICAgICAgbGV0IGRpc3RhbmNlWTtcbiAgICAgIGxldCB5TXVsdGlwbGllciA9IDE7XG4gICAgICBpZiAoc3RvcFkgPj0gc3RhcnRZKSB7XG4gICAgICAgIGRpc3RhbmNlWSA9IHN0b3BZIC0gc3RhcnRZO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzdGFuY2VZID0gc3RhcnRZIC0gc3RvcFk7XG4gICAgICAgIHlNdWx0aXBsaWVyID0gLTE7XG4gICAgICB9XG4gICAgICBjb25zdCBvZmZzZXQgPSAxMDtcbiAgICAgIGNvbnN0IHJvdW5kbmVzcyA9IDQ7XG4gICAgICBjb25zdCBpc0JlZm9yZSA9IGRpc3RhbmNlWCA8PSBvZmZzZXQgKyByb3VuZG5lc3M7XG4gICAgICBsZXQgcG9pbnRzID0gYE0gJHtzdGFydFh9ICR7c3RhcnRZfVxuICAgICAgICAgIEwgJHtzdGFydFggKyBvZmZzZXR9LCR7c3RhcnRZfSBgO1xuICAgICAgaWYgKGlzQmVmb3JlKSB7XG4gICAgICAgIHBvaW50cyArPSBgUSAke3N0YXJ0WCArIG9mZnNldCArIHJvdW5kbmVzc30sJHtzdGFydFl9ICR7c3RhcnRYICsgb2Zmc2V0ICsgcm91bmRuZXNzfSwke3N0YXJ0WSArXG4gICAgICAgICAgcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XG4gICAgICAgICAgICBMICR7c3RhcnRYICsgb2Zmc2V0ICsgcm91bmRuZXNzfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyIC0gcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XG4gICAgICAgICAgICBRICR7c3RhcnRYICsgb2Zmc2V0ICsgcm91bmRuZXNzfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfSAke3N0YXJ0WCArIG9mZnNldH0sJHtzdGFydFkgK1xuICAgICAgICAgIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfVxuICAgICAgICAgICAgTCAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWH0sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn1cbiAgICAgICAgICAgIFEgJHtzdGFydFggLSBvZmZzZXQgKyBkaXN0YW5jZVggLSByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDJ9ICR7c3RhcnRYIC1cbiAgICAgICAgICBvZmZzZXQgK1xuICAgICAgICAgIGRpc3RhbmNlWCAtXG4gICAgICAgICAgcm91bmRuZXNzfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyICsgcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XG4gICAgICAgICAgICBMICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYIC0gcm91bmRuZXNzfSwke3N0b3BZIC0gcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XG4gICAgICAgICAgICBRICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYIC0gcm91bmRuZXNzfSwke3N0b3BZfSAke3N0YXJ0WCAtIG9mZnNldCArIGRpc3RhbmNlWH0sJHtzdG9wWX1cbiAgICAgICAgICAgIEwgJHtzdG9wWH0sJHtzdG9wWX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9pbnRzICs9IGBMICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMiAtIHJvdW5kbmVzc30sJHtzdGFydFl9XG4gICAgICAgICAgICBRICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMn0sJHtzdGFydFl9ICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMn0sJHtzdGFydFkgKyByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cbiAgICAgICAgICAgIEwgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0b3BZIC0gcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XG4gICAgICAgICAgICBRICR7c3RhcnRYICsgZGlzdGFuY2VYIC8gMn0sJHtzdG9wWX0gJHtzdGFydFggKyBkaXN0YW5jZVggLyAyICsgcm91bmRuZXNzfSwke3N0b3BZfVxuICAgICAgICAgICAgTCAke3N0b3BYfSwke3N0b3BZfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gcG9pbnRzO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgdGFza3Mgd2hpY2ggYXJlIGRlcGVuZGVudCBvbiBvdGhlciB0YXNrc1xuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGRlcGVuZGVuY3lUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiB0eXBlb2YgdGFzay5kZXBlbmRlbnRPbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIC5tYXAodGFzayA9PiB7XG4gICAgICAgICAgdGFzay5kZXBlbmRlbmN5TGluZXMgPSB0YXNrLmRlcGVuZGVudE9uLm1hcChpZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBwb2ludHM6IHRoaXMuZ2V0UG9pbnRzKGlkLCB0YXNrLmlkKSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5kZXBlbmRlbmN5TGluZXMucG9pbnRzICE9PSBudWxsKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBHcmlkIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxzdmdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmVzLXdyYXBwZXInXSB9XCJcbiAgICByZWY9XCJjaGFydFwiXG4gICAgeD1cIjBcIlxuICAgIHk9XCIwXCJcbiAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMud2lkdGhcIlxuICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxnIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lc1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lcyddIH1cIj5cbiAgICAgIDxsaW5lXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lLWhvcml6b250YWxcIlxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ10gfVwiXG4gICAgICAgIHYtZm9yPVwibGluZSBpbiBob3Jpem9udGFsTGluZXNcIlxuICAgICAgICA6a2V5PVwibGluZS5rZXlcIlxuICAgICAgICA6eDE9XCJsaW5lLngxXCJcbiAgICAgICAgOnkxPVwibGluZS55MVwiXG4gICAgICAgIDp4Mj1cImxpbmUueDJcIlxuICAgICAgICA6eTI9XCJsaW5lLnkyXCJcbiAgICAgID48L2xpbmU+XG4gICAgICA8bGluZVxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS12ZXJ0aWNhbFwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ10gfVwiXG4gICAgICAgIHYtZm9yPVwibGluZSBpbiB2ZXJ0aWNhbExpbmVzXCJcbiAgICAgICAgOmtleT1cImxpbmUua2V5XCJcbiAgICAgICAgOngxPVwibGluZS54MVwiXG4gICAgICAgIDp5MT1cImxpbmUueTFcIlxuICAgICAgICA6eDI9XCJsaW5lLngyXCJcbiAgICAgICAgOnkyPVwibGluZS55MlwiXG4gICAgICA+PC9saW5lPlxuICAgICAgPGxpbmVcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtdGltZVwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lLXRpbWUnXSB9XCJcbiAgICAgICAgOngxPVwidGltZUxpbmVQb3NpdGlvbi54XCJcbiAgICAgICAgOnkxPVwidGltZUxpbmVQb3NpdGlvbi55MVwiXG4gICAgICAgIDp4Mj1cInRpbWVMaW5lUG9zaXRpb24ueFwiXG4gICAgICAgIDp5Mj1cInRpbWVMaW5lUG9zaXRpb24ueTJcIlxuICAgICAgPjwvbGluZT5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0dyaWQnLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgLyoqXG4gICAqIENyZWF0ZWRcbiAgICovXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5yb290LiRvbigncmVjZW50ZXJQb3NpdGlvbicsIHRoaXMucmVjZW50ZXJQb3NpdGlvbik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vdW50ZWRcbiAgICovXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAvLyBiZWNhdXNlIG9mIHN0dXBpZCBzbGlkZXIgOi9cbiAgICAgICAgdGhpcy5yb290LnNjcm9sbFRvVGltZSh0aGlzLnRpbWVMaW5lUG9zaXRpb24udGltZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogUmVjZW50ZXIgcG9zaXRpb24gLSBnbyB0byBjdXJyZW50IHRpbWUgbGluZVxuICAgICAqL1xuICAgIHJlY2VudGVyUG9zaXRpb24oKSB7XG4gICAgICB0aGlzLnJvb3Quc2Nyb2xsVG9UaW1lKHRoaXMudGltZUxpbmVQb3NpdGlvbi50aW1lKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB2ZXJ0aWNhbCBsaW5lcyBvZiB0aGUgZ3JpZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIHZlcnRpY2FsTGluZXMoKSB7XG4gICAgICBsZXQgbGluZXMgPSBbXTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5yb290LnN0YXRlO1xuICAgICAgc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBpZiAodGhpcy5yb290LmlzSW5zaWRlVmlld1BvcnQoc3RlcC5vZmZzZXQucHgsIDEpKSB7XG4gICAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICBrZXk6IHN0ZXAudGltZSxcbiAgICAgICAgICAgIHgxOiBzdGVwLm9mZnNldC5weCxcbiAgICAgICAgICAgIHkxOiAwLFxuICAgICAgICAgICAgeDI6IHN0ZXAub2Zmc2V0LnB4LFxuICAgICAgICAgICAgeTI6XG4gICAgICAgICAgICAgIHN0YXRlLnRhc2tzLmxlbmd0aCAqIChzdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgKyBzdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyKSArXG4gICAgICAgICAgICAgIHRoaXMucm9vdC5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBob3Jpem9udGFsIGxpbmVzIG9mIHRoZSBncmlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgaG9yaXpvbnRhbExpbmVzKCkge1xuICAgICAgbGV0IGxpbmVzID0gW107XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zO1xuICAgICAgbGV0IHRhc2tzID0gdGhpcy5yb290LnZpc2libGVUYXNrcztcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpbmRleCA8PSBsZW47IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgeSA9XG4gICAgICAgICAgaW5kZXggKiAoc3RhdGUucm93LmhlaWdodCArIHN0YXRlLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyKSArXG4gICAgICAgICAgdGhpcy5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ10gLyAyO1xuICAgICAgICBsaW5lcy5wdXNoKHtcbiAgICAgICAgICBrZXk6ICdobCcgKyBpbmRleCxcbiAgICAgICAgICB4MTogMCxcbiAgICAgICAgICB5MTogeSxcbiAgICAgICAgICB4MjogJzEwMCUnLFxuICAgICAgICAgIHkyOiB5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGNlY2sgaWYgc3BlY2lmaWVkIGxpbmUgaXMgaW5zaWRlIHZpZXdwb3J0ICh2aXNpYmxlKVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGluVmlld1BvcnQoKSB7XG4gICAgICByZXR1cm4gbGluZSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiBsaW5lLngxID49IHN0YXRlLnNjcm9sbC5jaGFydC5sZWZ0ICYmIGxpbmUueDEgPD0gc3RhdGUuc2Nyb2xsLmNoYXJ0LnJpZ2h0O1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGN1cnJlbnQgdGltZSBsaW5lIHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRpbWVMaW5lUG9zaXRpb24oKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBkLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSB0aGlzLnJvb3QudGltZVRvUGl4ZWxPZmZzZXRYKGN1cnJlbnQpO1xuICAgICAgY29uc3QgdGltZUxpbmUgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHkxOiAwLFxuICAgICAgICB5MjogJzEwMCUnLFxuICAgICAgICBkYXRlVGltZTogJycsXG4gICAgICAgIHRpbWU6IGN1cnJlbnRcbiAgICAgIH07XG4gICAgICB0aW1lTGluZS54ID0gY3VycmVudE9mZnNldDtcbiAgICAgIHRpbWVMaW5lLmRhdGVUaW1lID0gZC50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgIHJldHVybiB0aW1lTGluZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBQcm9ncmVzc0JhciBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8Z1xuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlciddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInXSB9XCJcbiAgPlxuICAgIDxkZWZzPlxuICAgICAgPHBhdHRlcm5cbiAgICAgICAgaWQ9XCJkaWFnb25hbEhhdGNoXCJcbiAgICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLndpZHRoXCJcbiAgICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aFwiXG4gICAgICAgIHBhdHRlcm5UcmFuc2Zvcm09XCJyb3RhdGUoNDUgMCAwKVwiXG4gICAgICAgIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgID5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICBjbGFzcz1cImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItbGluZVwiXG4gICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmUnXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lJ10gfVwiXG4gICAgICAgICAgeDE9XCIwXCJcbiAgICAgICAgICB5MT1cIjBcIlxuICAgICAgICAgIHgyPVwiMFwiXG4gICAgICAgICAgOnkyPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLndpZHRoXCJcbiAgICAgICAgLz5cbiAgICAgIDwvcGF0dGVybj5cbiAgICA8L2RlZnM+XG4gICAgPHJlY3RcbiAgICAgIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3MuYmFyXCJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZFwiXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWQnXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZCddIH1cIlxuICAgICAgeD1cIjBcIlxuICAgICAgeT1cIjBcIlxuICAgICAgOndpZHRoPVwiZ2V0UHJvZ3Jlc3NXaWR0aFwiXG4gICAgPjwvcmVjdD5cbiAgICA8ZyB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLnBhdHRlcm5cIj5cbiAgICAgIDxyZWN0XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm4nXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuJ10gfVwiXG4gICAgICAgIDp4PVwiZ2V0UHJvZ3Jlc3NXaWR0aFwiXG4gICAgICAgIHk9XCIwXCJcbiAgICAgICAgOndpZHRoPVwiMTAwIC0gdGFzay5wcm9ncmVzcyArICclJ1wiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgPjwvcmVjdD5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZSddLFxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2Jhc2UnXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmUnXVxuICAgICAgICB9XCJcbiAgICAgICAgOmQ9XCJnZXRMaW5lUG9pbnRzXCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9nPlxuICA8L2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUHJvZ3Jlc3NCYXInLFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHByb2dyZXNzIHdpZHRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFByb2dyZXNzV2lkdGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrLnByb2dyZXNzICsgJyUnO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGluZSBwb2ludHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0TGluZVBvaW50cygpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gKHRoaXMudGFzay53aWR0aCAvIDEwMCkgKiB0aGlzLnRhc2sucHJvZ3Jlc3M7XG4gICAgICByZXR1cm4gYE0gJHtzdGFydH0gMCBMICR7c3RhcnR9ICR7dGhpcy50YXNrLmhlaWdodH1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc29saWQgc3R5bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0U29saWRTdHlsZSgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy5zdHlsZXMuYmFyLnNvbGlkLCB0aGlzLnRhc2sucHJvZ3Jlc3NCYXJTdHlsZS5iYXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGluZSBzdHlsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMaW5lU3R5bGUoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBzdHJva2U6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5zdHlsZXMuYmFyLnN0cm9rZSArICdhMCcsXG4gICAgICAgICAgJ3N0cm9rZS13aWR0aCc6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5zdHlsZXMuYmFyWydzdHJva2Utd2lkdGgnXSAvIDJcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy50YXNrLnN0eWxlXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1pbGVzdG9uZSBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8Z1xuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlclwiXG4gICAgOnN0eWxlPVwie1xuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ10sXG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctbWlsZXN0b25lLXdyYXBwZXInXSxcbiAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddXG4gICAgfVwiXG4gID5cbiAgICA8Zm9yZWlnbk9iamVjdFxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXInXSxcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXItLW1pbGVzdG9uZSddLFxuICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1leHBhbmRlciddXG4gICAgICB9XCJcbiAgICAgIDp4PVwidGFzay54IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcbiAgICAgIDp5PVwidGFzay55ICsgKHJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC8gMlwiXG4gICAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXG4gICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxuICAgICAgdi1pZj1cImRpc3BsYXlFeHBhbmRlclwiXG4gICAgPlxuICAgICAgPGV4cGFuZGVyIDp0YXNrcz1cIlt0YXNrXVwiIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyXCIgdHlwZT1cImNoYXJ0XCI+PC9leHBhbmRlcj5cbiAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gICAgPHN2Z1xuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmVcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyJ10sIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1taWxlc3RvbmUnXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhciddIH1cIlxuICAgICAgOng9XCJ0YXNrLnhcIlxuICAgICAgOnk9XCJ0YXNrLnlcIlxuICAgICAgOndpZHRoPVwidGFzay53aWR0aFwiXG4gICAgICA6aGVpZ2h0PVwidGFzay5oZWlnaHRcIlxuICAgICAgOnZpZXdCb3g9XCJgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gXCJcbiAgICAgIEBjbGljaz1cImVtaXRFdmVudCgnY2xpY2snLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZWVudGVyPVwiZW1pdEV2ZW50KCdtb3VzZWVudGVyJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZW91dD1cImVtaXRFdmVudCgnbW91c2VvdXQnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZW1vdmU9XCJlbWl0RXZlbnQoJ21vdXNlbW92ZScsICRldmVudClcIlxuICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2V1cD1cImVtaXRFdmVudCgnbW91c2V1cCcsICRldmVudClcIlxuICAgICAgQG1vdXNld2hlZWw9XCJlbWl0RXZlbnQoJ21vdXNld2hlZWwnLCAkZXZlbnQpXCJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2htb3ZlPVwiZW1pdEV2ZW50KCd0b3VjaG1vdmUnLCAkZXZlbnQpXCJcbiAgICAgIEB0b3VjaGVuZD1cImVtaXRFdmVudCgndG91Y2hlbmQnLCAkZXZlbnQpXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggOmlkPVwiY2xpcFBhdGhJZFwiPlxuICAgICAgICAgIDxwb2x5Z29uIDpwb2ludHM9XCJnZXRQb2ludHNcIj48L3BvbHlnb24+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8cG9seWdvblxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctbWlsZXN0b25lLXBvbHlnb25cIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ10sXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uJ10sXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddXG4gICAgICAgIH1cIlxuICAgICAgICA6cG9pbnRzPVwiZ2V0UG9pbnRzXCJcbiAgICAgID48L3BvbHlnb24+XG4gICAgICA8cHJvZ3Jlc3MtYmFyIDp0YXNrPVwidGFza1wiIDpjbGlwLXBhdGg9XCIndXJsKCMnICsgY2xpcFBhdGhJZCArICcpJ1wiPjwvcHJvZ3Jlc3MtYmFyPlxuICAgIDwvc3ZnPlxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxuICA8L2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENoYXJ0VGV4dCBmcm9tICcuLi9UZXh0LnZ1ZSc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcbmltcG9ydCBFeHBhbmRlciBmcm9tICcuLi8uLi9FeHBhbmRlci52dWUnO1xuaW1wb3J0IHRhc2tNaXhpbiBmcm9tICcuL1Rhc2subWl4aW4uanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWlsZXN0b25lJyxcbiAgY29tcG9uZW50czoge1xuICAgIENoYXJ0VGV4dCxcbiAgICBQcm9ncmVzc0JhcixcbiAgICBFeHBhbmRlclxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrJ10sXG4gIG1peGluczogW3Rhc2tNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCBjbGlwIHBhdGggaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgY2xpcFBhdGhJZCgpIHtcbiAgICAgIHJldHVybiAnZ2FudHQtZWxhc3RpY19fbWlsZXN0b25lLWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgcG9pbnRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFBvaW50cygpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XG4gICAgICBjb25zdCBmaWZ0eSA9IHRhc2suaGVpZ2h0IC8gMjtcbiAgICAgIGxldCBvZmZzZXQgPSBmaWZ0eTtcbiAgICAgIGlmICh0YXNrLndpZHRoIC8gMiAtIG9mZnNldCA8IDApIHtcbiAgICAgICAgb2Zmc2V0ID0gdGFzay53aWR0aCAvIDI7XG4gICAgICB9XG4gICAgICByZXR1cm4gYDAsJHtmaWZ0eX1cbiAgICAgICAgJHtvZmZzZXR9LDBcbiAgICAgICAgJHt0YXNrLndpZHRoIC0gb2Zmc2V0fSwwXG4gICAgICAgICR7dGFzay53aWR0aH0sJHtmaWZ0eX1cbiAgICAgICAgJHt0YXNrLndpZHRoIC0gb2Zmc2V0fSwke3Rhc2suaGVpZ2h0fVxuICAgICAgICAke29mZnNldH0sJHt0YXNrLmhlaWdodH1gO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByb2plY3QgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGdcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdC13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7XG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXSxcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9qZWN0LXdyYXBwZXInXSxcbiAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddXG4gICAgfVwiXG4gID5cbiAgICA8Zm9yZWlnbk9iamVjdFxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tcHJvamVjdFwiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyLS1wcm9qZWN0J10sXG4gICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ11cbiAgICAgIH1cIlxuICAgICAgOng9XCJ0YXNrLnggLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxuICAgICAgOnk9XCJ0YXNrLnkgKyAocm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgLyAyXCJcbiAgICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcbiAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXG4gICAgICB2LWlmPVwiZGlzcGxheUV4cGFuZGVyXCJcbiAgICA+XG4gICAgICA8ZXhwYW5kZXIgOnRhc2tzPVwiW3Rhc2tdXCIgOm9wdGlvbnM9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXJcIiB0eXBlPVwiY2hhcnRcIj48L2V4cGFuZGVyPlxuICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2plY3RcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyJ10sIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9qZWN0J10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSB9XCJcbiAgICAgIDp4PVwidGFzay54XCJcbiAgICAgIDp5PVwidGFzay55XCJcbiAgICAgIDp3aWR0aD1cInRhc2sud2lkdGhcIlxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcbiAgICAgIDp2aWV3Qm94PVwiYDAgMCAke3Rhc2sud2lkdGh9ICR7dGFzay5oZWlnaHR9YFwiXG4gICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxuICAgICAgQG1vdXNlb3Zlcj1cImVtaXRFdmVudCgnbW91c2VvdmVyJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZWRvd249XCJlbWl0RXZlbnQoJ21vdXNlZG93bicsICRldmVudClcIlxuICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hzdGFydD1cImVtaXRFdmVudCgndG91Y2hzdGFydCcsICRldmVudClcIlxuICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIDppZD1cImNsaXBQYXRoSWRcIj5cbiAgICAgICAgICA8cGF0aCA6ZD1cImdldFBvaW50c1wiPjwvcGF0aD5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb25cIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ10sXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2plY3QtcG9seWdvbiddLFxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2Jhc2UnXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXVxuICAgICAgICB9XCJcbiAgICAgICAgOmQ9XCJnZXRQb2ludHNcIlxuICAgICAgPjwvcGF0aD5cbiAgICAgIDxwcm9ncmVzcy1iYXIgOnRhc2s9XCJ0YXNrXCIgOmNsaXAtcGF0aD1cIid1cmwoIycgKyBjbGlwUGF0aElkICsgJyknXCI+PC9wcm9ncmVzcy1iYXI+XG4gICAgPC9zdmc+XG4gICAgPGNoYXJ0LXRleHQgOnRhc2s9XCJ0YXNrXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcIj48L2NoYXJ0LXRleHQ+XG4gIDwvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2hhcnRUZXh0IGZyb20gJy4uL1RleHQudnVlJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9Qcm9ncmVzc0Jhci52dWUnO1xuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uLy4uL0V4cGFuZGVyLnZ1ZSc7XG5pbXBvcnQgdGFza01peGluIGZyb20gJy4vVGFzay5taXhpbi5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQcm9qZWN0JyxcbiAgY29tcG9uZW50czoge1xuICAgIENoYXJ0VGV4dCxcbiAgICBQcm9ncmVzc0JhcixcbiAgICBFeHBhbmRlclxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrJ10sXG4gIG1peGluczogW3Rhc2tNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCBjbGlwIHBhdGggaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgY2xpcFBhdGhJZCgpIHtcbiAgICAgIHJldHVybiAnZ2FudHQtZWxhc3RpY19fcHJvamVjdC1jbGlwLXBhdGgtJyArIHRoaXMudGFzay5pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHBvaW50c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrO1xuICAgICAgY29uc3QgYm90dG9tID0gdGFzay5oZWlnaHQgLSB0YXNrLmhlaWdodCAvIDQ7XG4gICAgICBjb25zdCBjb3JuZXIgPSB0YXNrLmhlaWdodCAvIDY7XG4gICAgICBjb25zdCBzbWFsbENvcm5lciA9IHRhc2suaGVpZ2h0IC8gODtcbiAgICAgIHJldHVybiBgTSAke3NtYWxsQ29ybmVyfSwwXG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGggLSBzbWFsbENvcm5lcn0gMFxuICAgICAgICAgICAgICAgIEwgJHt0YXNrLndpZHRofSAke3NtYWxsQ29ybmVyfVxuICAgICAgICAgICAgICAgIEwgJHt0YXNrLndpZHRofSAke2JvdHRvbX1cbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aCAtIGNvcm5lcn0gJHt0YXNrLmhlaWdodH1cbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aCAtIGNvcm5lciAqIDJ9ICR7Ym90dG9tfVxuICAgICAgICAgICAgICAgIEwgJHtjb3JuZXIgKiAyfSAke2JvdHRvbX1cbiAgICAgICAgICAgICAgICBMICR7Y29ybmVyfSAke3Rhc2suaGVpZ2h0fVxuICAgICAgICAgICAgICAgIEwgMCAke2JvdHRvbX1cbiAgICAgICAgICAgICAgICBMIDAgJHtzbWFsbENvcm5lcn1cbiAgICAgICAgICAgICAgICBaXG4gICAgICAgIGA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCB3ZSBkaXNwbGF5IGV4cGFuZGVyP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGlzcGxheUV4cGFuZGVyKCkge1xuICAgICAgY29uc3QgZXhwYW5kZXIgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlcjtcbiAgICAgIHJldHVybiBleHBhbmRlci5kaXNwbGF5IHx8IChleHBhbmRlci5kaXNwbGF5SWZUYXNrTGlzdEhpZGRlbiAmJiAhdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGFzayBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8Z1xuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrLXdyYXBwZXJcIlxuICAgIDpzdHlsZT1cIntcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddLFxuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRhc2std3JhcHBlciddLFxuICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ11cbiAgICB9XCJcbiAgPlxuICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS10YXNrXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXInXSxcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXItLXRhc2snXSxcbiAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtZXhwYW5kZXInXVxuICAgICAgfVwiXG4gICAgICA6eD1cInRhc2sueCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXG4gICAgICA6eT1cInRhc2sueSArIChyb290LnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvIDJcIlxuICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxuICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcbiAgICAgIHYtaWY9XCJkaXNwbGF5RXhwYW5kZXJcIlxuICAgID5cbiAgICAgIDxleHBhbmRlciA6dGFza3M9XCJbdGFza11cIiA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlclwiIHR5cGU9XCJjaGFydFwiPjwvZXhwYW5kZXI+XG4gICAgPC9mb3JlaWduT2JqZWN0PlxuICAgIDxzdmdcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFza1wiXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSwgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRhc2snXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhciddIH1cIlxuICAgICAgOng9XCJ0YXNrLnhcIlxuICAgICAgOnk9XCJ0YXNrLnlcIlxuICAgICAgOndpZHRoPVwidGFzay53aWR0aFwiXG4gICAgICA6aGVpZ2h0PVwidGFzay5oZWlnaHRcIlxuICAgICAgOnZpZXdCb3g9XCJgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gXCJcbiAgICAgIEBjbGljaz1cImVtaXRFdmVudCgnY2xpY2snLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZWVudGVyPVwiZW1pdEV2ZW50KCdtb3VzZWVudGVyJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZW91dD1cImVtaXRFdmVudCgnbW91c2VvdXQnLCAkZXZlbnQpXCJcbiAgICAgIEBtb3VzZW1vdmU9XCJlbWl0RXZlbnQoJ21vdXNlbW92ZScsICRldmVudClcIlxuICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXG4gICAgICBAbW91c2V1cD1cImVtaXRFdmVudCgnbW91c2V1cCcsICRldmVudClcIlxuICAgICAgQG1vdXNld2hlZWw9XCJlbWl0RXZlbnQoJ21vdXNld2hlZWwnLCAkZXZlbnQpXCJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXG4gICAgICBAdG91Y2htb3ZlPVwiZW1pdEV2ZW50KCd0b3VjaG1vdmUnLCAkZXZlbnQpXCJcbiAgICAgIEB0b3VjaGVuZD1cImVtaXRFdmVudCgndG91Y2hlbmQnLCAkZXZlbnQpXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggOmlkPVwiY2xpcFBhdGhJZFwiPlxuICAgICAgICAgIDxwb2x5Z29uIDpwb2ludHM9XCJnZXRQb2ludHNcIj48L3BvbHlnb24+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8cG9seWdvblxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay1wb2x5Z29uXCJcbiAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddLFxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXBvbHlnb24nXSxcbiAgICAgICAgICAuLi50YXNrLnN0eWxlWydiYXNlJ10sXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cbiAgICAgICAgfVwiXG4gICAgICAgIDpwb2ludHM9XCJnZXRQb2ludHNcIlxuICAgICAgPjwvcG9seWdvbj5cbiAgICAgIDxwcm9ncmVzcy1iYXIgOnRhc2s9XCJ0YXNrXCIgOmNsaXAtcGF0aD1cIid1cmwoIycgKyBjbGlwUGF0aElkICsgJyknXCI+PC9wcm9ncmVzcy1iYXI+XG4gICAgPC9zdmc+XG4gICAgPGNoYXJ0LXRleHQgOnRhc2s9XCJ0YXNrXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcIj48L2NoYXJ0LXRleHQ+XG4gIDwvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2hhcnRUZXh0IGZyb20gJy4uL1RleHQudnVlJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9Qcm9ncmVzc0Jhci52dWUnO1xuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uLy4uL0V4cGFuZGVyLnZ1ZSc7XG5pbXBvcnQgdGFza01peGluIGZyb20gJy4vVGFzay5taXhpbi5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUYXNrJyxcbiAgY29tcG9uZW50czoge1xuICAgIENoYXJ0VGV4dCxcbiAgICBQcm9ncmVzc0JhcixcbiAgICBFeHBhbmRlclxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrJ10sXG4gIG1peGluczogW3Rhc2tNaXhpbl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIEdldCBjbGlwIHBhdGggaWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgY2xpcFBhdGhJZCgpIHtcbiAgICAgIHJldHVybiAnZ2FudHQtZWxhc3RpY19fdGFzay1jbGlwLXBhdGgtJyArIHRoaXMudGFzay5pZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHBvaW50c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQb2ludHMoKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrO1xuICAgICAgcmV0dXJuIGAwLDAgJHt0YXNrLndpZHRofSwwICR7dGFzay53aWR0aH0sJHt0YXNrLmhlaWdodH0gMCwke3Rhc2suaGVpZ2h0fWA7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGV4dCBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8c3ZnXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC13cmFwcGVyXCJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0LXdyYXBwZXInXSB9XCJcbiAgICA6eD1cInRhc2sueCArIHRhc2sud2lkdGggKyByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5vZmZzZXRcIlxuICAgIDp5PVwidGFzay55IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXBcIlxuICAgIDp3aWR0aD1cImdldFdpZHRoXCJcbiAgICA6aGVpZ2h0PVwiZ2V0SGVpZ2h0XCJcbiAgPlxuICAgIDxmb3JlaWduT2JqZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiA6aGVpZ2h0PVwiZ2V0SGVpZ2h0XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHRcIlxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0J10gfVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dFwiXG4gICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudCddLFxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dCddLFxuICAgICAgICAgICAgY29udGVudFN0eWxlXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgdi1pZj1cIiFodG1sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e3sgdGFzay5sYWJlbCB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC1jb250ZW50J10sXG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sJ10sXG4gICAgICAgICAgICBjb250ZW50U3R5bGVcbiAgICAgICAgICB9XCJcbiAgICAgICAgICB2LWlmPVwiaHRtbFwiXG4gICAgICAgICAgdi1odG1sPVwidGFzay5sYWJlbFwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgPC9zdmc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ2hhcnRUZXh0JyxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFzayddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgd2lkdGhcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICBjb25zdCB0ZXh0U3R5bGUgPSB0aGlzLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0J107XG4gICAgICB0aGlzLnJvb3Quc3RhdGUuY3R4LmZvbnQgPSBgJHt0ZXh0U3R5bGVbJ2ZvbnQtd2VpZ2h0J119ICR7dGV4dFN0eWxlWydmb250LXNpemUnXX0gJHt0ZXh0U3R5bGVbJ2ZvbnQtZmFtaWx5J119YDtcbiAgICAgIGNvbnN0IHRleHRXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5jdHgubWVhc3VyZVRleHQodGhpcy50YXNrLmxhYmVsKS53aWR0aDtcbiAgICAgIHJldHVybiB0ZXh0V2lkdGggKyB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LnhQYWRkaW5nICogMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGhlaWdodFxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrLmhlaWdodCArIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29udGVudCBzdHlsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBjb250ZW50U3R5bGUoKSB7XG4gICAgICByZXR1cm4geyBoZWlnaHQ6ICcxMDAlJywgJ2xpbmUtaGVpZ2h0JzogdGhpcy5nZXRIZWlnaHQgKyAncHgnIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCB3ZSByZW5kZXIgdGV4dCBhcyBodG1sP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaHRtbCgpIHtcbiAgICAgIGNvbnN0IGNvbHMgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNvbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sID0gY29sc1tpXTtcbiAgICAgICAgaWYgKGNvbC52YWx1ZSA9PT0gJ2xhYmVsJyAmJiB0eXBlb2YgY29sLmh0bWwgIT09ICd1bmRlZmluZWQnICYmIGNvbC5odG1sKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBFeHBhbmRlciBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLXdyYXBwZXInXCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlW2dldENsYXNzUHJlZml4KGZhbHNlKSArICctd3JhcHBlciddLCAuLi5zdHlsZSB9XCI+XG4gICAgPHN2Z1xuICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctY29udGVudCdcIlxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlW2dldENsYXNzUHJlZml4KGZhbHNlKSArICctY29udGVudCddIH1cIlxuICAgICAgOndpZHRoPVwib3B0aW9ucy5zaXplXCJcbiAgICAgIDpoZWlnaHQ9XCJvcHRpb25zLnNpemVcIlxuICAgICAgdi1pZj1cImFsbENoaWxkcmVuLmxlbmd0aFwiXG4gICAgICBAY2xpY2s9XCJ0b2dnbGVcIlxuICAgID5cbiAgICAgIDxyZWN0XG4gICAgICAgIDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLWJvcmRlcidcIlxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1ib3JkZXInXSwgYm9yZGVyU3R5bGUgfVwiXG4gICAgICAgIDp4PVwiYm9yZGVyXCJcbiAgICAgICAgOnk9XCJib3JkZXJcIlxuICAgICAgICA6d2lkdGg9XCJvcHRpb25zLnNpemUgLSBib3JkZXIgKiAyXCJcbiAgICAgICAgOmhlaWdodD1cIm9wdGlvbnMuc2l6ZSAtIGJvcmRlciAqIDJcIlxuICAgICAgICByeD1cIjJcIlxuICAgICAgICByeT1cIjJcIlxuICAgICAgPjwvcmVjdD5cbiAgICAgIDxsaW5lXG4gICAgICAgIDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLWxpbmUnXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlW2dldENsYXNzUHJlZml4KGZhbHNlKSArICctbGluZSddIH1cIlxuICAgICAgICB2LWlmPVwiYWxsQ2hpbGRyZW4ubGVuZ3RoXCJcbiAgICAgICAgOngxPVwibGluZU9mZnNldFwiXG4gICAgICAgIDp5MT1cIm9wdGlvbnMuc2l6ZSAvIDJcIlxuICAgICAgICA6eDI9XCJvcHRpb25zLnNpemUgLSBsaW5lT2Zmc2V0XCJcbiAgICAgICAgOnkyPVwib3B0aW9ucy5zaXplIC8gMlwiXG4gICAgICA+PC9saW5lPlxuICAgICAgPGxpbmVcbiAgICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctbGluZSdcIlxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1saW5lJ10gfVwiXG4gICAgICAgIHYtaWY9XCJjb2xsYXBzZWRcIlxuICAgICAgICA6eDE9XCJvcHRpb25zLnNpemUgLyAyXCJcbiAgICAgICAgOnkxPVwibGluZU9mZnNldFwiXG4gICAgICAgIDp4Mj1cIm9wdGlvbnMuc2l6ZSAvIDJcIlxuICAgICAgICA6eTI9XCJvcHRpb25zLnNpemUgLSBsaW5lT2Zmc2V0XCJcbiAgICAgID48L2xpbmU+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0V4cGFuZGVyJyxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgcHJvcHM6IFsndGFza3MnLCAnb3B0aW9ucycsICd0eXBlJ10sXG4gIGRhdGEoKSB7XG4gICAgY29uc3QgYm9yZGVyID0gMC41O1xuICAgIHJldHVybiB7XG4gICAgICBib3JkZXIsXG4gICAgICBib3JkZXJTdHlsZToge1xuICAgICAgICAnc3Ryb2tlLXdpZHRoJzogYm9yZGVyXG4gICAgICB9LFxuICAgICAgbGluZU9mZnNldDogNVxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3R5bGUoKSB7XG4gICAgICBpZiAodGhpcy50eXBlICE9PSAndGFza0xpc3QnKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLm1hcmdpbjtcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLnRhc2tzWzBdLnBhcmVudHMubGVuZ3RoICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIucGFkZGluZztcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdwYWRkaW5nLWxlZnQnOiBwYWRkaW5nICsgbWFyZ2luICsgJ3B4JyxcbiAgICAgICAgbWFyZ2luOiAnYXV0byAwJ1xuICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGFza3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBhbGxDaGlsZHJlbigpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2suYWxsQ2hpbGRyZW4uZm9yRWFjaChjaGlsZElkID0+IHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkSWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogSXMgY3VycmVudCBleHBhbmRlciBjb2xsYXBzZWQ/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjb2xsYXBzZWQoKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IGNvbGxhcHNlZCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy50YXNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGhpcy50YXNrc1tpXS5jb2xsYXBzZWQpIHtcbiAgICAgICAgICBjb2xsYXBzZWQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxhcHNlZCA9PT0gdGhpcy50YXNrcy5sZW5ndGg7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHNwZWNpZmljIGNsYXNzIHByZWZpeFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbGFzc1ByZWZpeChmdWxsID0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGAke2Z1bGwgPyAnZ2FudHQtZWxhc3RpY19fJyA6ICcnfSR7dGhpcy5vcHRpb25zLnR5cGV9LWV4cGFuZGVyYDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBleHBhbmRlclxuICAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIHRhc2suY29sbGFwc2VkID0gY29sbGFwc2VkO1xuICAgICAgICBmb3IgKGxldCBjaGlsZElkIG9mIHRhc2suYWxsQ2hpbGRyZW4pIHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMucm9vdC5nZXRUYXNrKGNoaWxkSWQpO1xuICAgICAgICAgIGNoaWxkLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgTWFpblZpZXcgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX21haW4tdmlld1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnbWFpbi12aWV3J10gfVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi1jb250YWluZXItd3JhcHBlclwiXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ21haW4tY29udGFpbmVyLXdyYXBwZXInXSwgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgJ3B4JyB9XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi1jb250YWluZXJcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnbWFpbi1jb250YWluZXInXSxcbiAgICAgICAgICB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgKyAncHgnXG4gICAgICAgIH1cIlxuICAgICAgICByZWY9XCJtYWluVmlld1wiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NvbnRhaW5lclwiXG4gICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjb250YWluZXInXSB9XCJcbiAgICAgICAgICBAbW91c2Vtb3ZlPVwibW91c2VNb3ZlXCJcbiAgICAgICAgICBAbW91c2V1cD1cIm1vdXNlVXBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPVwidGFza0xpc3RcIlxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtY29udGFpbmVyXCJcbiAgICAgICAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgKyAncHgnXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIHYtc2hvdz1cInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGFzay1saXN0PjwvdGFzay1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lclwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ21haW4tdmlldy1jb250YWluZXInXSB9XCJcbiAgICAgICAgICAgIHJlZj1cImNoYXJ0Q29udGFpbmVyXCJcbiAgICAgICAgICAgIEBtb3VzZWRvd249XCJjaGFydE1vdXNlRG93blwiXG4gICAgICAgICAgICBAdG91Y2hzdGFydD1cImNoYXJ0TW91c2VEb3duXCJcbiAgICAgICAgICAgIEBtb3VzZXVwPVwiY2hhcnRNb3VzZVVwXCJcbiAgICAgICAgICAgIEB0b3VjaGVuZD1cImNoYXJ0TW91c2VVcFwiXG4gICAgICAgICAgICBAbW91c2Vtb3ZlLnByZXZlbnQ9XCJjaGFydE1vdXNlTW92ZVwiXG4gICAgICAgICAgICBAdG91Y2htb3ZlLnByZXZlbnQ9XCJjaGFydE1vdXNlTW92ZVwiXG4gICAgICAgICAgICBAd2hlZWwucHJldmVudD1cImNoYXJ0V2hlZWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjaGFydD48L2NoYXJ0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWxcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciddLFxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsJ10sXG4gICAgICAgICAgdmVydGljYWxTdHlsZVxuICAgICAgICB9XCJcbiAgICAgICAgcmVmPVwiY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbFwiXG4gICAgICAgIEBzY3JvbGw9XCJvblZlcnRpY2FsU2Nyb2xsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLS12ZXJ0aWNhbFwiXG4gICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogJzFweCcsIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArICdweCcgfVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciBnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciddLFxuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsJ10sXG4gICAgICAgIG1hcmdpbkxlZnQ6IGdldE1hcmdpbkxlZnRcbiAgICAgIH1cIlxuICAgICAgQHNjcm9sbD1cIm9uSG9yaXpvbnRhbFNjcm9sbFwiXG4gICAgICByZWY9XCJjaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWxcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLWhvcml6b250YWxcIlxuICAgICAgICA6c3R5bGU9XCJ7IGhlaWdodDogJzFweCcsIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnIH1cIlxuICAgICAgPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVGFza0xpc3QgZnJvbSAnLi9UYXNrTGlzdC9UYXNrTGlzdC52dWUnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQvQ2hhcnQudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWFpblZpZXcnLFxuICBjb21wb25lbnRzOiB7XG4gICAgVGFza0xpc3QsXG4gICAgQ2hhcnRcbiAgfSxcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmczogJycsXG4gICAgICBtb3VzZVBvczoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBtb3ZlbWVudFg6IDAsXG4gICAgICAgIG1vdmVtZW50WTogMCxcbiAgICAgICAgbGFzdFg6IDAsXG4gICAgICAgIGxhc3RZOiAwLFxuICAgICAgICBwb3NpdGl2ZVg6IDAsXG4gICAgICAgIHBvc2l0aXZlWTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIE1vdW50ZWRcbiAgICovXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy52aWV3Qm94V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5tYWluVmlldyA9IHRoaXMuJHJlZnMubWFpblZpZXc7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRDb250YWluZXIgPSB0aGlzLiRyZWZzLmNoYXJ0Q29udGFpbmVyO1xuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLnRhc2tMaXN0ID0gdGhpcy4kcmVmcy50YXNrTGlzdDtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwgPSB0aGlzLiRyZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbDtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmNoYXJ0TW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmNoYXJ0TW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmNoYXJ0TW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBHZXQgbWFyZ2luIGxlZnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0TWFyZ2luTGVmdCgpIHtcbiAgICAgIGlmICghdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSkge1xuICAgICAgICByZXR1cm4gJzBweCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZmluYWxXaWR0aCArICdweCc7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCB2ZXJ0aWNhbCBzdHlsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbFN0eWxlKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbEJhckhlaWdodCArICdweCcsXG4gICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArICdweCcsXG4gICAgICAgICdtYXJnaW4tdG9wJzogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaGVpZ2h0ICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgJ3B4J1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgYm94XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFZpZXdCb3goKSB7XG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIGAwIDAgJHt0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCAtIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbEJhckhlaWdodH0gJHtcbiAgICAgICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYDAgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0fWA7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogRW1pdCBldmVudCB3aGVuIG1vdXNlIGlzIG1vdmluZyBpbnNpZGUgbWFpbiB2aWV3XG4gICAgICovXG4gICAgbW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICB0aGlzLnJvb3QuJGVtaXQoJ21haW4tdmlldy1tb3VzZW1vdmUnLCBldmVudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVtaXQgbW91c2V1cCBldmVudCBpbnNpZGUgbWFpbiB2aWV3XG4gICAgICovXG4gICAgbW91c2VVcChldmVudCkge1xuICAgICAgdGhpcy5yb290LiRlbWl0KCdtYWluLXZpZXctbW91c2V1cCcsIGV2ZW50KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSG9yaXpvbnRhbCBzY3JvbGwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIG9uSG9yaXpvbnRhbFNjcm9sbChldikge1xuICAgICAgdGhpcy5yb290LiRlbWl0KCdjaGFydC1zY3JvbGwtaG9yaXpvbnRhbCcsIGV2KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgc2Nyb2xsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBvblZlcnRpY2FsU2Nyb2xsKGV2KSB7XG4gICAgICB0aGlzLnJvb3QuJGVtaXQoJ2NoYXJ0LXNjcm9sbC12ZXJ0aWNhbCcsIGV2KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTW91c2Ugd2hlZWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIGNoYXJ0V2hlZWwoZXYpIHtcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnY2hhcnQtd2hlZWwnLCBldik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYXJ0IG1vdXNlZG93biBldmVudCBoYW5kbGVyXG4gICAgICogSW5pdGlhdGVzIGRyYWcgc2Nyb2xsaW5nIG1vZGVcbiAgICAgKi9cbiAgICBjaGFydE1vdXNlRG93bihldikge1xuICAgICAgaWYgKHR5cGVvZiBldi50b3VjaGVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB0aGlzLm1vdXNlUG9zLmxhc3RYID0gZXYudG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB0aGlzLm1vdXNlUG9zLmxhc3RZID0gZXYudG91Y2hlc1swXS5zY3JlZW5ZO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLm1vdmVtZW50WCA9IDA7XG4gICAgICAgIHRoaXMubW91c2VQb3MubW92ZW1lbnRZID0gMDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy5jdXJyZW50WCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLnNjcm9sbExlZnQ7XG4gICAgICAgIHRoaXMubW91c2VQb3MuY3VycmVudFkgPSB0aGlzLiRyZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWwuc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnNjcm9sbGluZyA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYXJ0IG1vdXNldXAgZXZlbnQgaGFuZGxlclxuICAgICAqIERlYWN0aXZhdGVzIGRyYWcgc2Nyb2xsaW5nIG1vZGVcbiAgICAgKi9cbiAgICBjaGFydE1vdXNlVXAoZXYpIHtcbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhcnQgbW91c2Vtb3ZlIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBXaGVuIGluIGRyYWcgc2Nyb2xsaW5nIG1vZGUgdGhpcyBtZXRob2QgY2FsY3VsYXRlIHNjcm9sbCBtb3ZlbWVudFxuICAgICAqL1xuICAgIGNoYXJ0TW91c2VNb3ZlKGV2KSB7XG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnNjcm9sbGluZykge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gdHlwZW9mIGV2LnRvdWNoZXMgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICBsZXQgbW92ZW1lbnRYLCBtb3ZlbWVudFk7XG4gICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgIGNvbnN0IHNjcmVlblggPSBldi50b3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgY29uc3Qgc2NyZWVuWSA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWTtcbiAgICAgICAgICBtb3ZlbWVudFggPSB0aGlzLm1vdXNlUG9zLnggLSBzY3JlZW5YO1xuICAgICAgICAgIG1vdmVtZW50WSA9IHRoaXMubW91c2VQb3MueSAtIHNjcmVlblk7XG4gICAgICAgICAgdGhpcy5tb3VzZVBvcy5sYXN0WCA9IHNjcmVlblg7XG4gICAgICAgICAgdGhpcy5tb3VzZVBvcy5sYXN0WSA9IHNjcmVlblk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW92ZW1lbnRYID0gZXYubW92ZW1lbnRYO1xuICAgICAgICAgIG1vdmVtZW50WSA9IGV2Lm1vdmVtZW50WTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3Jpem9udGFsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWw7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsO1xuICAgICAgICBsZXQgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG4gICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgIHggPSB0aGlzLm1vdXNlUG9zLmN1cnJlbnRYICsgbW92ZW1lbnRYICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmRyYWdYTW92ZU11bHRpcGxpZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9IGhvcml6b250YWwuc2Nyb2xsTGVmdCAtIG1vdmVtZW50WCAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWE1vdmVNdWx0aXBsaWVyO1xuICAgICAgICB9XG4gICAgICAgIGhvcml6b250YWwuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICAgIGlmICh0b3VjaCkge1xuICAgICAgICAgIHkgPSB0aGlzLm1vdXNlUG9zLmN1cnJlbnRZICsgbW92ZW1lbnRZICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmRyYWdZTW92ZU11bHRpcGxpZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHZlcnRpY2FsLnNjcm9sbFRvcCAtIG1vdmVtZW50WSAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWU1vdmVNdWx0aXBsaWVyO1xuICAgICAgICB9XG4gICAgICAgIHZlcnRpY2FsLnNjcm9sbFRvcCA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBCZWZvcmUgZGVzdHJveSBldmVudCAtIGNsZWFuIHVwXG4gICAqL1xuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmNoYXJ0TW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5jaGFydE1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5jaGFydE1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmNoYXJ0TW91c2VVcCk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjwhLS1cbi8qKlxuICogQGZpbGVvdmVydmlldyBJdGVtQ29sdW1uIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLWNvbHVtblwiXG4gICAgOnN0eWxlPVwie1xuICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tY29sdW1uJ10sXG4gICAgICAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLWNvbHVtbiddLFxuICAgICAgd2lkdGg6IGNvbHVtbi5maW5hbFdpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDogY29sdW1uLmhlaWdodCArICdweCdcbiAgICB9XCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlclwiXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyJ10gfVwiXG4gICAgPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lclwiXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJ10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJ10gfVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB2LWlmPVwiIWh0bWxcIlxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUnXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZSddIH1cIlxuICAgICAgICAgIEBjbGljaz1cImVtaXRFdmVudCgnY2xpY2snLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxuICAgICAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxuICAgICAgICAgIEBtb3VzZW91dD1cImVtaXRFdmVudCgnbW91c2VvdXQnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2V1cD1cImVtaXRFdmVudCgnbW91c2V1cCcsICRldmVudClcIlxuICAgICAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAdG91Y2htb3ZlPVwiZW1pdEV2ZW50KCd0b3VjaG1vdmUnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyB2YWx1ZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUnXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZSddIH1cIlxuICAgICAgICAgIEBjbGljaz1cImVtaXRFdmVudCgnY2xpY2snLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxuICAgICAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxuICAgICAgICAgIEBtb3VzZW91dD1cImVtaXRFdmVudCgnbW91c2VvdXQnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcbiAgICAgICAgICBAbW91c2V1cD1cImVtaXRFdmVudCgnbW91c2V1cCcsICRldmVudClcIlxuICAgICAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXG4gICAgICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAdG91Y2htb3ZlPVwiZW1pdEV2ZW50KCd0b3VjaG1vdmUnLCAkZXZlbnQpXCJcbiAgICAgICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXG4gICAgICAgICAgdi1odG1sPVwidmFsdWVcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSXRlbUNvbHVtbicsXG4gIGluamVjdDogWydyb290J10sXG4gIHByb3BzOiBbJ2NvbHVtbicsICd0YXNrJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogRW1pdCBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgZW1pdEV2ZW50KGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uZXZlbnRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5jb2x1bW4uZXZlbnRzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5jb2x1bW4uZXZlbnRzW2V2ZW50TmFtZV0oeyBldmVudCwgZGF0YTogdGhpcy50YXNrLCBjb2x1bW46IHRoaXMuY29sdW1uIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5yb290LiRlbWl0KGB0YXNrTGlzdC0ke3RoaXMudGFzay50eXBlfS0ke2V2ZW50TmFtZX1gLCB7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2ssIGNvbHVtbjogdGhpcy5jb2x1bW4gfSk7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC8qKlxuICAgICAqIFNob3VsZCB3ZSBkaXNwbGF5IGh0bWwgb3IganVzdCB0ZXh0P1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaHRtbCgpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uaHRtbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5jb2x1bW4uaHRtbCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbHVtbiB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge2FueXxzdHJpbmd9XG4gICAgICovXG4gICAgdmFsdWUoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuY29sdW1uLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi52YWx1ZSh0aGlzLnRhc2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGFza1t0aGlzLmNvbHVtbi52YWx1ZV07XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGFza0xpc3QgY29tcG9uZW50XG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xuICovXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LXdyYXBwZXJcIlxuICAgIHJlZj1cInRhc2tMaXN0V3JhcHBlclwiXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3Qtd3JhcHBlciddLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9XCJcbiAgICB2LXNob3c9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0XCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QnXSB9XCIgcmVmPVwidGFza0xpc3RcIj5cbiAgICAgIDx0YXNrLWxpc3QtaGVhZGVyPjwvdGFzay1saXN0LWhlYWRlcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbXNcIlxuICAgICAgICByZWY9XCJ0YXNrTGlzdEl0ZW1zXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbXMnXSwgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArICdweCcgfVwiXG4gICAgICA+XG4gICAgICAgIDx0YXNrLWxpc3QtaXRlbSB2LWZvcj1cInRhc2sgaW4gcm9vdC52aXNpYmxlVGFza3NcIiA6a2V5PVwidGFzay5pZFwiIDp0YXNrPVwidGFza1wiPjwvdGFzay1saXN0LWl0ZW0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0SGVhZGVyIGZyb20gJy4vVGFza0xpc3RIZWFkZXIudnVlJztcbmltcG9ydCBUYXNrTGlzdEl0ZW0gZnJvbSAnLi9UYXNrTGlzdEl0ZW0udnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Rhc2tMaXN0JyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0SGVhZGVyLFxuICAgIFRhc2tMaXN0SXRlbVxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICAvKipcbiAgICogTW91bnRlZFxuICAgKi9cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdFdyYXBwZXIgPSB0aGlzLiRyZWZzLnRhc2tMaXN0V3JhcHBlcjtcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdCA9IHRoaXMuJHJlZnMudGFza0xpc3Q7XG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcyA9IHRoaXMuJHJlZnMudGFza0xpc3RJdGVtcztcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0SGVhZGVyIGNvbXBvbmVudFxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIlxuICAgIDpzdHlsZT1cIntcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXInXSxcbiAgICAgIGhlaWdodDogYCR7cm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodH1weGAsXG4gICAgICAnbWFyZ2luLWJvdHRvbSc6IGAke3Jvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXB9cHhgXG4gICAgfVwiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCJcbiAgICAgIDpzdHlsZT1cIntcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1jb2x1bW4nXSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWNvbHVtbiddLFxuICAgICAgICAuLi5nZXRTdHlsZShjb2x1bW4pXG4gICAgICB9XCJcbiAgICAgIHYtZm9yPVwiY29sdW1uIGluIHJvb3QuZ2V0VGFza0xpc3RDb2x1bW5zXCJcbiAgICAgIDprZXk9XCJjb2x1bW4uX2lkXCJcbiAgICA+XG4gICAgICA8dGFzay1saXN0LWV4cGFuZGVyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxuICAgICAgICA6dGFza3M9XCJjb2xsYXBzaWJsZVwiXG4gICAgICAgIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyXCJcbiAgICAgID48L3Rhc2stbGlzdC1leHBhbmRlcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWxhYmVsJ10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1sYWJlbCddIH1cIlxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcbiAgICAgICAgQG1vdXNldXA9XCJyZXNpemVyTW91c2VVcFwiXG4gICAgICA+XG4gICAgICAgIHt7IGNvbHVtbi5sYWJlbCB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIlxuICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXInXSxcbiAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJ11cbiAgICAgICAgfVwiXG4gICAgICAgIDpjb2x1bW49XCJjb2x1bW5cIlxuICAgICAgICBAbW91c2Vkb3duPVwicmVzaXplck1vdXNlRG93bigkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIlxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyJ10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyJ10gfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRhc2tMaXN0RXhwYW5kZXIgZnJvbSAnLi4vRXhwYW5kZXIudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Rhc2tMaXN0SGVhZGVyJyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0RXhwYW5kZXJcbiAgfSxcblxuICBpbmplY3Q6IFsncm9vdCddLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2l6ZXI6IHtcbiAgICAgICAgbW92aW5nOiBmYWxzZSxcbiAgICAgICAgeDogMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAvKipcbiAgICAgKiBJcyB0aGlzIHJvdyBjb2xsYXBzaWJsZT9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sfVxuICAgICAqL1xuICAgIGNvbGxhcHNpYmxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmFsbENoaWxkcmVuLmxlbmd0aCA+IDApO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHN0eWxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGdldFN0eWxlKGNvbHVtbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGNvbHVtbi5maW5hbFdpZHRoICsgJ3B4J1xuICAgICAgfTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlc2l6ZXIgbW91c2UgZG93biBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgcmVzaXplck1vdXNlRG93bihldmVudCwgY29sdW1uKSB7XG4gICAgICBpZiAoIXRoaXMucmVzaXplck1vdmluZykge1xuICAgICAgICB0aGlzLnJlc2l6ZXIubW92aW5nID0gY29sdW1uO1xuICAgICAgICB0aGlzLnJlc2l6ZXIueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHRoaXMucmVzaXplci5pbml0aWFsV2lkdGggPSBjb2x1bW4ud2lkdGg7XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZS1zdGFydCcsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVyIG1vdXNlIG1vdmUgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHJlc2l6ZXJNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnJlc2l6ZXIubW92aW5nKSB7XG4gICAgICAgIHRoaXMucmVzaXplci5tb3Zpbmcud2lkdGggPSB0aGlzLnJlc2l6ZXIuaW5pdGlhbFdpZHRoICsgZXZlbnQuY2xpZW50WCAtIHRoaXMucmVzaXplci54O1xuICAgICAgICBpZiAodGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA8IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0Lm1pbldpZHRoKSB7XG4gICAgICAgICAgdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0Lm1pbldpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZScsIHRoaXMucmVzaXplci5tb3ZpbmcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNpemVyIG1vdXNlIHVwIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICByZXNpemVyTW91c2VVcChldmVudCkge1xuICAgICAgaWYgKHRoaXMucmVzaXplci5tb3ZpbmcpIHtcbiAgICAgICAgdGhpcy5yb290LiRlbWl0KCd0YXNrTGlzdC1jb2x1bW4td2lkdGgtY2hhbmdlJywgdGhpcy5yZXNpemVyLm1vdmluZyk7XG4gICAgICAgIHRoaXMucm9vdC4kZW1pdCgndGFza0xpc3QtY29sdW1uLXdpZHRoLWNoYW5nZS1zdG9wJywgdGhpcy5yZXNpemVyLm1vdmluZyk7XG4gICAgICAgIHRoaXMucmVzaXplci5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZWRcbiAgICovXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5tb3VzZVVwTGlzdGVuZXIgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMucm9vdC4kb24oJ21haW4tdmlldy1tb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZXJNb3VzZU1vdmUpO1xuICAgIHRoaXMucm9vdC4kb24oJ21haW4tdmlldy1tb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJlZm9yZSBkZXN0cm95IGV2ZW50IC0gY2xlYXIgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgKi9cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPCEtLVxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRhc2tMaXN0SXRlbSBjb21wb25lbnRcbiAqIEBsaWNlbnNlIE1JVFxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXG4gKi9cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1cIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtJ10gfVwiPlxuICAgIDxpdGVtLWNvbHVtbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5zXCIgOmtleT1cImNvbHVtbi5faWRcIiA6Y29sdW1uPVwiY29sdW1uXCIgOnRhc2s9XCJ0YXNrXCI+XG4gICAgICA8dGFzay1saXN0LWV4cGFuZGVyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxuICAgICAgICA6dGFza3M9XCJbdGFza11cIlxuICAgICAgICA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlclwiXG4gICAgICAgIHR5cGU9XCJ0YXNrTGlzdFwiXG4gICAgICA+PC90YXNrLWxpc3QtZXhwYW5kZXI+XG4gICAgPC9pdGVtLWNvbHVtbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBUYXNrTGlzdEV4cGFuZGVyIGZyb20gJy4uL0V4cGFuZGVyLnZ1ZSc7XG5pbXBvcnQgSXRlbUNvbHVtbiBmcm9tICcuL0l0ZW1Db2x1bW4udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVGFza0xpc3RJdGVtJyxcbiAgY29tcG9uZW50czoge1xuICAgIFRhc2tMaXN0RXhwYW5kZXIsXG4gICAgSXRlbUNvbHVtblxuICB9LFxuICBpbmplY3Q6IFsncm9vdCddLFxuICBwcm9wczogWyd0YXNrJ10sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbHVtbnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucztcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNcIiwgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX3QoXCJoZWFkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJtYWluLXZpZXdcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZm9vdGVyXCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2FsZW5kYXItd3JhcHBlclwiXSwge1xuICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIlxuICAgICAgfSlcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjYWxlbmRhclwiXSwge1xuICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5XG4gICAgICAgICAgICA/IF9jKFwiY2FsZW5kYXItcm93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmRhdGVzLm1vbnRocywgd2hpY2g6IFwibW9udGhcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZGlzcGxheVxuICAgICAgICAgICAgPyBfYyhcImNhbGVuZGFyLXJvd1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5kYXRlcy5kYXlzLCB3aGljaDogXCJkYXlcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXlcbiAgICAgICAgICAgID8gX2MoXCJjYWxlbmRhci1yb3dcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZGF0ZXMuaG91cnMsIHdoaWNoOiBcImhvdXJcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy0tXCIgKyBfdm0ud2hpY2gsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2FsZW5kYXItcm93XCJdLFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXJvdy0tXCIgKyBfdm0ud2hpY2hdXG4gICAgICApXG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5LFxuICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC0tXCIgK1xuICAgICAgICAgICAgX3ZtLndoaWNoLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXJvdy1yZWN0XCJdLFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjYWxlbmRhci1yb3ctcmVjdC0tXCIgKyBfdm0ud2hpY2hdXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woaXRlbS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctcmVjdC1jaGlsZC1cIiArXG4gICAgICAgICAgICAgICAgX3ZtLndoaWNoLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXJvdy1yZWN0LWNoaWxkXCJdLFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtXCIgKyBfdm0ud2hpY2hdLFxuICAgICAgICAgICAgICAgIHsgd2lkdGg6IGNoaWxkLndpZHRoICsgXCJweFwiLCBoZWlnaHQ6IGNoaWxkLmhlaWdodCArIFwicHhcIiB9XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXRleHQgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXRleHQtLVwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLndoaWNoLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXJvdy10ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXJvdy10ZXh0LS1cIiArIF92bS53aGljaF0sXG4gICAgICAgICAgICAgICAgICAgIHsgbGVmdDogX3ZtLmdldFRleHRYKGNoaWxkKSArIFwicHhcIiB9XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhjaGlsZC5sYWJlbCkgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgcmVmOiBcImNoYXJ0XCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydFwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2hhcnRcIl0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJjaGFydENhbGVuZGFyQ29udGFpbmVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudC1lbGFzdGljX19jaGFydC1jYWxlbmRhci1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1jYWxlbmRhci1jb250YWluZXJcIl0sIHtcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXAgKyBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJjYWxlbmRhclwiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaENvbnRhaW5lclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtY29udGFpbmVyXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZ3JhcGgtY29udGFpbmVyXCJdLCB7XG4gICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgK1xuICAgICAgICAgICAgICBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1hcmVhXCJdLCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0R3JhcGhcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1ncmFwaFwiXSwge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaFN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWdyYXBoLXN2Z1wiXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkYXlzLWhpZ2hsaWdodFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZ3JpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGVwZW5kZW5jeS1saW5lc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0YXNrczogX3ZtLnJvb3QudmlzaWJsZVRhc2tzIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucm9vdC52aXNpYmxlVGFza3MsIGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRhc2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctd3JhcHBlclwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyh0YXNrLnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2s6IHRhc2sgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2hvd1dvcmtpbmdEYXlzXG4gICAgPyBfYyhcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIl1cbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ud29ya2luZ0RheXMsIGZ1bmN0aW9uKGRheSkge1xuICAgICAgICAgIHJldHVybiBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAga2V5OiBfdm0uZ2V0S2V5KGRheSksXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdFwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHg6IGRheS5vZmZzZXQucHgsXG4gICAgICAgICAgICAgIHk6IFwiMFwiLFxuICAgICAgICAgICAgICB3aWR0aDogZGF5LndpZHRoLnB4LFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtY29udGFpbmVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXJcIl1cbiAgICAgICksXG4gICAgICBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9XG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLmRlcGVuZGVuY3lUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBrZXk6IHRhc2suaWQsIGF0dHJzOiB7IHRhc2s6IHRhc2sgfSB9LFxuICAgICAgICBfdm0uX2wodGFzay5kZXBlbmRlbmN5TGluZXMsIGZ1bmN0aW9uKGRlcGVuZGVuY3lMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICBrZXk6IGRlcGVuZGVuY3lMaW5lLmlkLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCIsXG4gICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJdLFxuICAgICAgICAgICAgICB0YXNrLnN0eWxlW1wiY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzaywgZDogZGVwZW5kZW5jeUxpbmUucG9pbnRzIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2hhcnRcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lcy13cmFwcGVyXCJdKSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IFwiMFwiLFxuICAgICAgICB5OiBcIjBcIixcbiAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXNcIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmVzXCJdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5ob3Jpem9udGFsTGluZXMsIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICBrZXk6IGxpbmUua2V5LFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtaG9yaXpvbnRhbFwiXSksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHgxOiBsaW5lLngxLCB5MTogbGluZS55MSwgeDI6IGxpbmUueDIsIHkyOiBsaW5lLnkyIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLnZlcnRpY2FsTGluZXMsIGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICBrZXk6IGxpbmUua2V5LFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtdmVydGljYWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lLXZlcnRpY2FsXCJdKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgeDE6IGxpbmUueDEsIHkxOiBsaW5lLnkxLCB4MjogbGluZS54MiwgeTI6IGxpbmUueTIgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtdGltZVwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lLXRpbWVcIl0pLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgeDE6IF92bS50aW1lTGluZVBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHkxOiBfdm0udGltZUxpbmVQb3NpdGlvbi55MSxcbiAgICAgICAgICAgICAgeDI6IF92bS50aW1lTGluZVBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIHkyOiBfdm0udGltZUxpbmVQb3NpdGlvbi55MlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZ1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIl1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGVmc1wiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicGF0dGVyblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcImRpYWdvbmFsSGF0Y2hcIixcbiAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy53aWR0aCxcbiAgICAgICAgICAgICAgcGF0dGVyblRyYW5zZm9ybTogXCJyb3RhdGUoNDUgMCAwKVwiLFxuICAgICAgICAgICAgICBwYXR0ZXJuVW5pdHM6IFwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDE6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHkxOiBcIjBcIixcbiAgICAgICAgICAgICAgICB4MjogXCIwXCIsXG4gICAgICAgICAgICAgICAgeTI6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3MuYmFyXG4gICAgICAgID8gX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIixcbiAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBfdm0uZ2V0UHJvZ3Jlc3NXaWR0aCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLnBhdHRlcm5cbiAgICAgICAgPyBfYyhcImdcIiwgW1xuICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDogX3ZtLmdldFByb2dyZXNzV2lkdGgsXG4gICAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCAtIF92bS50YXNrLnByb2dyZXNzICsgXCIlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJiYXNlXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGQ6IF92bS5nZXRMaW5lUG9pbnRzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctbWlsZXN0b25lLXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uZGlzcGxheUV4cGFuZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCJdLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueCAtXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtXG4gICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUsXG4gICAgICAgICAgICAgICAgeTpcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrLnkgK1xuICAgICAgICAgICAgICAgICAgKF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCAtXG4gICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgL1xuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJleHBhbmRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRhc2tzOiBbX3ZtLnRhc2tdLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hhcnRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInN2Z1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZVwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1taWxlc3RvbmVcIl0sXG4gICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl1cbiAgICAgICAgICApLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBfdm0udGFzay54LFxuICAgICAgICAgICAgeTogX3ZtLnRhc2sueSxcbiAgICAgICAgICAgIHdpZHRoOiBfdm0udGFzay53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgXCIgKyBfdm0udGFzay53aWR0aCArIFwiIFwiICsgX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwb2x5Z29uXCIsIHsgYXR0cnM6IHsgcG9pbnRzOiBfdm0uZ2V0UG9pbnRzIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBvbHlnb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctbWlsZXN0b25lLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiYmFzZVwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhdHRyczogeyBwb2ludHM6IF92bS5nZXRQb2ludHMgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwcm9ncmVzcy1iYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGFzazogX3ZtLnRhc2ssXG4gICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IFwidXJsKCNcIiArIF92bS5jbGlwUGF0aElkICsgXCIpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XG4gICAgICAgID8gX2MoXCJjaGFydC10ZXh0XCIsIHsgYXR0cnM6IHsgdGFzazogX3ZtLnRhc2sgfSB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZ1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdLFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9qZWN0LXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uZGlzcGxheUV4cGFuZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tcHJvamVjdFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdLFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXItLXByb2plY3RcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1leHBhbmRlclwiXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay54IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueSArXG4gICAgICAgICAgICAgICAgICAoX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImV4cGFuZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGFza3M6IFtfdm0udGFza10sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGFydFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9qZWN0XCJdLFxuICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyXCJdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogX3ZtLnRhc2sueCxcbiAgICAgICAgICAgIHk6IF92bS50YXNrLnksXG4gICAgICAgICAgICB3aWR0aDogX3ZtLnRhc2sud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdCb3g6IFwiMCAwIFwiICsgX3ZtLnRhc2sud2lkdGggKyBcIiBcIiArIF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V3aGVlbDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkZWZzXCIsIFtcbiAgICAgICAgICAgIF9jKFwiY2xpcFBhdGhcIiwgeyBhdHRyczogeyBpZDogX3ZtLmNsaXBQYXRoSWQgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7IGF0dHJzOiB7IGQ6IF92bS5nZXRQb2ludHMgfSB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2plY3QtcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvamVjdC1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImJhc2VcIl0sXG4gICAgICAgICAgICAgIF92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgYXR0cnM6IHsgZDogX3ZtLmdldFBvaW50cyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0YXNrOiBfdm0udGFzayxcbiAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogXCJ1cmwoI1wiICsgX3ZtLmNsaXBQYXRoSWQgKyBcIilcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcbiAgICAgICAgPyBfYyhcImNoYXJ0LXRleHRcIiwgeyBhdHRyczogeyB0YXNrOiBfdm0udGFzayB9IH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJnXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci13cmFwcGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrLXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl0sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2std3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXdyYXBwZXJcIl1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5kaXNwbGF5RXhwYW5kZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS10YXNrXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tdGFza1wiXSxcbiAgICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrLnggLVxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplLFxuICAgICAgICAgICAgICAgIHk6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay55ICtcbiAgICAgICAgICAgICAgICAgIChfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC9cbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoYXJ0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrXCIsXG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXSxcbiAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2tcIl0sXG4gICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl1cbiAgICAgICAgICApLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBfdm0udGFzay54LFxuICAgICAgICAgICAgeTogX3ZtLnRhc2sueSxcbiAgICAgICAgICAgIHdpZHRoOiBfdm0udGFzay53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgXCIgKyBfdm0udGFzay53aWR0aCArIFwiIFwiICsgX3ZtLnRhc2suaGVpZ2h0LFxuICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwb2x5Z29uXCIsIHsgYXR0cnM6IHsgcG9pbnRzOiBfdm0uZ2V0UG9pbnRzIH0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBvbHlnb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrLXBvbHlnb25cIixcbiAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2stcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgX3ZtLnRhc2suc3R5bGVbXCJiYXNlXCJdLFxuICAgICAgICAgICAgICBfdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHBvaW50czogX3ZtLmdldFBvaW50cyB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0YXNrOiBfdm0udGFzayxcbiAgICAgICAgICAgICAgXCJjbGlwLXBhdGhcIjogXCJ1cmwoI1wiICsgX3ZtLmNsaXBQYXRoSWQgKyBcIilcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcbiAgICAgICAgPyBfYyhcImNoYXJ0LXRleHRcIiwgeyBhdHRyczogeyB0YXNrOiBfdm0udGFzayB9IH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dC13cmFwcGVyXCJdKSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6XG4gICAgICAgICAgX3ZtLnRhc2sueCArXG4gICAgICAgICAgX3ZtLnRhc2sud2lkdGggK1xuICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5vZmZzZXQsXG4gICAgICAgIHk6IF92bS50YXNrLnkgLSBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAsXG4gICAgICAgIHdpZHRoOiBfdm0uZ2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLmdldEhlaWdodFxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHg6IFwiMFwiLCB5OiBcIjBcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IF92bS5nZXRIZWlnaHQgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dFwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dFwiXSksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmh0bWxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LWNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvbnRlbnRTdHlsZTogX3ZtLmNvbnRlbnRTdHlsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRhc2subGFiZWwpKV0pXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5odG1sXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLWh0bWxcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgeyBjb250ZW50U3R5bGU6IF92bS5jb250ZW50U3R5bGUgfVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udGFzay5sYWJlbCkgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBfdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItd3JhcHBlclwiXSxcbiAgICAgICAgX3ZtLnN0eWxlXG4gICAgICApXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uYWxsQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1jb250ZW50XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1jb250ZW50XCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBfdm0ub3B0aW9ucy5zaXplLCBoZWlnaHQ6IF92bS5vcHRpb25zLnNpemUgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1ib3JkZXJcIixcbiAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWJvcmRlclwiXSxcbiAgICAgICAgICAgICAgICAgIHsgYm9yZGVyU3R5bGU6IF92bS5ib3JkZXJTdHlsZSB9XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeDogX3ZtLmJvcmRlcixcbiAgICAgICAgICAgICAgICAgIHk6IF92bS5ib3JkZXIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLm9wdGlvbnMuc2l6ZSAtIF92bS5ib3JkZXIgKiAyLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ub3B0aW9ucy5zaXplIC0gX3ZtLmJvcmRlciAqIDIsXG4gICAgICAgICAgICAgICAgICByeDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICByeTogXCIyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uYWxsQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1saW5lXCJdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgeDE6IF92bS5saW5lT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgIHkxOiBfdm0ub3B0aW9ucy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICB4MjogX3ZtLm9wdGlvbnMuc2l6ZSAtIF92bS5saW5lT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgIHkyOiBfdm0ub3B0aW9ucy5zaXplIC8gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jb2xsYXBzZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3NQcmVmaXgoKSArIFwiLWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWxpbmVcIl1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB4MTogX3ZtLm9wdGlvbnMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgeTE6IF92bS5saW5lT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgIHgyOiBfdm0ub3B0aW9ucy5zaXplIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICB5MjogX3ZtLm9wdGlvbnMuc2l6ZSAtIF92bS5saW5lT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19tYWluLXZpZXdcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcIm1haW4tdmlld1wiXSlcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi1jb250YWluZXItd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcIm1haW4tY29udGFpbmVyLXdyYXBwZXJcIl0sIHtcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibWFpblZpZXdcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wibWFpbi1jb250YWluZXJcIl0sIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIF92bS5yb290LnN0eWxlW1wiY29udGFpbmVyXCJdKSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IG1vdXNlbW92ZTogX3ZtLm1vdXNlTW92ZSwgbW91c2V1cDogX3ZtLm1vdXNlVXAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YXNrTGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInRhc2stbGlzdFwiKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2hhcnRDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19tYWluLXZpZXctY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wibWFpbi12aWV3LWNvbnRhaW5lclwiXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogX3ZtLmNoYXJ0TW91c2VEb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hzdGFydDogX3ZtLmNoYXJ0TW91c2VEb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2V1cDogX3ZtLmNoYXJ0TW91c2VVcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZW5kOiBfdm0uY2hhcnRNb3VzZVVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFydE1vdXNlTW92ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFydE1vdXNlTW92ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYXJ0V2hlZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiY2hhcnRcIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWxcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1wiY2hhcnQtc2Nyb2xsLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsXCJdLFxuICAgICAgICAgICAgICAgIHsgdmVydGljYWxTdHlsZTogX3ZtLnZlcnRpY2FsU3R5bGUgfVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vblZlcnRpY2FsU2Nyb2xsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLXZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWxcIl0sXG4gICAgICAgICAgICB7IG1hcmdpbkxlZnQ6IF92bS5nZXRNYXJnaW5MZWZ0IH1cbiAgICAgICAgICApLFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uSG9yaXpvbnRhbFNjcm9sbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLWhvcml6b250YWxcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogXCIxcHhcIiwgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyBcInB4XCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWl0ZW0tY29sdW1uXCJdLFxuICAgICAgICBfdm0uY29sdW1uLnN0eWxlW1widGFzay1saXN0LWl0ZW0tY29sdW1uXCJdLFxuICAgICAgICB7XG4gICAgICAgICAgd2lkdGg6IF92bS5jb2x1bW4uZmluYWxXaWR0aCArIFwicHhcIixcbiAgICAgICAgICBoZWlnaHQ6IF92bS5jb2x1bW4uaGVpZ2h0ICsgXCJweFwiXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXJcIl0sXG4gICAgICAgICAgICBfdm0uY29sdW1uLnN0eWxlW1widGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlclwiXVxuICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgICAgICBfdm0uY29sdW1uLnN0eWxlW1widGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyXCJdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uaHRtbFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtLXZhbHVlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1pdGVtLXZhbHVlXCJdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcImNsaWNrXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWVudGVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3ZlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3V0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlbW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWRvd25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNldXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNld2hlZWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoc3RhcnRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2htb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hlbmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnZhbHVlKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtLXZhbHVlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaXRlbS12YWx1ZVwiXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udmFsdWUpIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHJlZjogXCJ0YXNrTGlzdFdyYXBwZXJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3Qtd3JhcHBlclwiXSwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ0YXNrTGlzdFwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdFwiLFxuICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdFwiXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFzay1saXN0LWhlYWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInRhc2tMaXN0SXRlbXNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1zXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtc1wiXSwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3dzSGVpZ2h0ICsgXCJweFwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yb290LnZpc2libGVUYXNrcywgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0YXNrLWxpc3QtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiB0YXNrLmlkLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhc2s6IHRhc2sgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIixcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXJcIl0sIHtcbiAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgXCJtYXJnaW4tYm90dG9tXCI6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgXCJweFwiXG4gICAgICB9KVxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5yb290LmdldFRhc2tMaXN0Q29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGNvbHVtbi5faWQsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1jb2x1bW5cIixcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWNvbHVtblwiXSxcbiAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItY29sdW1uXCJdLFxuICAgICAgICAgICAgX3ZtLmdldFN0eWxlKGNvbHVtbilcbiAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogX3ZtLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItbGFiZWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJdLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItbGFiZWxcIl1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uOiBjb2x1bW4gfSxcbiAgICAgICAgICAgICAgb246IHsgbW91c2V1cDogX3ZtLnJlc2l6ZXJNb3VzZVVwIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoY29sdW1uLmxhYmVsKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCJdLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCJdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzaXplck1vdXNlRG93bigkZXZlbnQsIGNvbHVtbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyXCJdLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXJcIl1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtXCIsXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7fSwgX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaXRlbVwiXSlcbiAgICB9LFxuICAgIF92bS5fbChfdm0uY29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiaXRlbS1jb2x1bW5cIixcbiAgICAgICAgeyBrZXk6IGNvbHVtbi5faWQsIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uLCB0YXNrOiBfdm0udGFzayB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRhc2tMaXN0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYzNlNTA4NWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmM2MzA0YyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJjNjMwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJjNjMwNGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJjNjMwNGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJjNjMwNGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9HYW50dEVsYXN0aWMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJjNjMwNGMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWUxMDhlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGVlMTA4ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGVlMTA4ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWUxMDhlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkZWUxMDhlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlMTA4ZTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGFmMDZmYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGFmMDZmYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGFmMDZmYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2MzZjVjZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdjM2Y1Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdjM2Y1Y2QnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2MzZjVjZCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2N2MzZjVjZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdjM2Y1Y2QmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWJmZTY0ZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWJmZTY0ZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiZmU2NGU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9EYXlzSGlnaGxpZ2h0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXlzSGlnaGxpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YxY2JmNmJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjFjYmY2YmEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmJmOTc5YTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmJmOTc5YTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiZjk3OWE3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZjk3OWE3JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjMzkzNTUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiYzM5MzU1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiYzM5MzU1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjMzkzNTUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGJjMzkzNTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L1Byb2dyZXNzQmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiYzM5MzU1JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01pbGVzdG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01pbGVzdG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwMTMwMDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwMTMwMDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMwMTMwMDZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzdiYmQ3MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3N2JiZDczJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3N2JiZDczJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzdiYmQ3MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNzdiYmQ3MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc3YmJkNzMmXCIiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGFzayBtaXhpblxuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgYm94XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFZpZXdCb3goKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrO1xuICAgICAgcmV0dXJuIGAwIDAgJHt0YXNrLndpZHRofSAke3Rhc2suaGVpZ2h0fWA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBncm91cCB0cmFuc2Zvcm1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0R3JvdXBUcmFuc2Zvcm0oKSB7XG4gICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3RoaXMudGFzay54fSAke3RoaXMudGFzay55fSlgO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBleHBhbmRlcj9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGRpc3BsYXlFeHBhbmRlcigpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVyID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXI7XG4gICAgICByZXR1cm4gZXhwYW5kZXIuZGlzcGxheSB8fCAoZXhwYW5kZXIuZGlzcGxheUlmVGFza0xpc3RIaWRkZW4gJiYgIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEVtaXQgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGVtaXRFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5zY3JvbGxpbmcpIHtcbiAgICAgICAgdGhpcy5yb290LiRlbWl0KGBjaGFydC0ke3RoaXMudGFzay50eXBlfS0ke2V2ZW50TmFtZX1gLCB7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2sgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lOWMyM2VjYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U5YzIzZWNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U5YzIzZWNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lOWMyM2VjYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlOWMyM2VjYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljMjNlY2EmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OWMyZmU0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcZ2FudHQtZWxhc3RpY1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDU5YzJmZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDU5YzJmZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OWMyZmU0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1OWMyZmU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9UZXh0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OWMyZmU0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDlhMjExNzcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA5YTIxMTc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA5YTIxMTc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDlhMjExNzcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDlhMjExNzcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0V4cGFuZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWluVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJjNDIxMmUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBiYzQyMTJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBiYzQyMTJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWluVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJjNDIxMmUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGJjNDIxMmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjVhNmM5NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGdhbnR0LWVsYXN0aWNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NiNWE2Yzk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NiNWE2Yzk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjVhNmM5NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjYjVhNmM5NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjVhNmM5NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlMTFmMTJmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZTExZjEyZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZTExZjEyZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlMTFmMTJmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZlMTFmMTJmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTExZjEyZiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFlZmRkN2M4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhZWZkZDdjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhZWZkZDdjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFlZmRkN2M4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2FlZmRkN2M4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NzE2MjkzYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxnYW50dC1lbGFzdGljXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5NzE2MjkzYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5NzE2MjkzYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NzE2MjkzYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NzE2MjkzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk3MTYyOTNjJlwiIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFN0eWxlcyBmb3IgZ2FudHQtZWxhc3RpY1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdHlsZShmb250U2l6ZSA9ICcxMnB4JywgZm9udEZhbWlseSA9ICdBcmlhbCwgc2Fucy1zZXJpZicpIHtcbiAgcmV0dXJuIHtcbiAgICBmb250U2l6ZSxcbiAgICBmb250RmFtaWx5LFxuICAgICcqJzoge1xuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCdcbiAgICB9LFxuICAgICdtYWluLXZpZXcnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRidcbiAgICB9LFxuICAgICdtYWluLWNvbnRhaW5lci13cmFwcGVyJzoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgJ2JvcmRlci10b3AnOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnXG4gICAgfSxcbiAgICAnbWFpbi1jb250YWluZXInOiB7XG4gICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgJ21heC13aWR0aCc6ICcxMDAlJ1xuICAgIH0sXG4gICAgJ21haW4tdmlldy1jb250YWluZXInOiB7fSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LFxuICAgICAgbWFyZ2luOiAnMHB4IGF1dG8nLFxuICAgICAgYmFja2dyb3VuZDogJyNmM2Y1Zjc0NycsXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBjbGVhcjogJ2JvdGgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdzcGFjZS1iZXR3ZWVuJ1xuICAgIH0sXG4gICAgJ2hlYWRlci10aXRsZSc6IHsgZmxvYXQ6ICdsZWZ0JyB9LFxuICAgICdoZWFkZXItb3B0aW9ucyc6IHsgZmxvYXQ6ICdyaWdodCcgfSxcbiAgICAnaGVhZGVyLXRpdGxlLS10ZXh0Jzoge1xuICAgICAgJ2ZvbnQtc2l6ZSc6ICcyMHB4JyxcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLFxuICAgICAgJ2ZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgICAnbGluZS1oZWlnaHQnOiAnMzVweCcsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJzIycHgnLFxuICAgICAgJ2xldHRlci1zcGFjaW5nJzogJzFweCdcbiAgICB9LFxuICAgICdoZWFkZXItdGl0bGUtLWh0bWwnOiB7XG4gICAgICAnZm9udC1zaXplJzogJzIwcHgnLFxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScsXG4gICAgICAnZm9udC13ZWlnaHQnOiAnNDAwJyxcbiAgICAgICdsaW5lLWhlaWdodCc6ICczNXB4JyxcbiAgICAgICdwYWRkaW5nLWxlZnQnOiAnMjJweCcsXG4gICAgICAnbGV0dGVyLXNwYWNpbmcnOiAnMXB4J1xuICAgIH0sXG4gICAgJ2hlYWRlci1idG4tcmVjZW50ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzk1QTVBNicsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICczcHgnLFxuICAgICAgJ21hcmdpbi1yaWdodCc6ICcyN3B4JyxcbiAgICAgICdmb250LXNpemUnOiAnMTZweCcsXG4gICAgICBwYWRkaW5nOiAnOHB4IDEycHgnXG4gICAgfSxcbiAgICAnaGVhZGVyLXNsaWRlcic6IHt9LFxuICAgICdoZWFkZXItc2xpZGVyLXdyYXBwZXInOiB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJyB9LFxuICAgICdoZWFkZXItc2xpZGVyLS1zbGlkZXInOiB7fSxcbiAgICAnaGVhZGVyLXNsaWRlci0tcHJvY2Vzcyc6IHsgYmFja2dyb3VuZDogJyNjY2MnIH0sXG4gICAgJ2hlYWRlci10YXNrLWxpc3Qtc3dpdGNoLS1sYWJlbCc6IHt9LFxuICAgICdoZWFkZXItdGFzay1saXN0LXN3aXRjaCc6IHsgbWFyZ2luOiAnMHB4IDE1cHgnLCAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJyB9LFxuICAgICdoZWFkZXItbGFiZWwnOiB7fSxcbiAgICAnY2FsZW5kYXItd3JhcHBlcic6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJ1xuICAgIH0sXG4gICAgY2FsZW5kYXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2YzZjVmNycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICAnY2FsZW5kYXItcm93Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdzcGFjZS1ldmVubHknXG4gICAgfSxcbiAgICAnY2FsZW5kYXItcm93LS1tb250aCc6IHt9LFxuICAgICdjYWxlbmRhci1yb3ctLWRheSc6IHt9LFxuICAgICdjYWxlbmRhci1yb3ctLWhvdXInOiB7XG4gICAgICAnYm9yZGVyLWJvdHRvbSc6ICcxcHggc29saWQgI2VlZSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdC1jaGlsZCc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgJ2JvcmRlci1yaWdodC13aWR0aCc6ICcxcHgnLCAvLyBDYWxlbmRhclxuICAgICAgJ2JvcmRlci1yaWdodC1jb2xvcic6ICcjZGFkYWRhJyxcbiAgICAgICdib3JkZXItcmlnaHQtc3R5bGUnOiAnc29saWQnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctdGV4dCc6IHtcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksIC8vIEdhbnR0RWxhc3RpY1xuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLCAvL0dhbnR0RWxhc3RpY1xuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdC0tbW9udGgnOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LXRleHQtLW1vbnRoJzoge30sXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1kYXknOiB7fSxcbiAgICAnY2FsZW5kYXItcm93LXRleHQtLWRheSc6IHt9LFxuICAgICdjYWxlbmRhci1yb3ctcmVjdC0taG91cic6IHt9LFxuICAgICdjYWxlbmRhci1yb3ctdGV4dC0taG91cic6IHt9LFxuICAgICd0YXNrLWxpc3Qtd3JhcHBlcic6IHt9LFxuICAgICd0YXNrLWxpc3QnOiB7IGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsICdib3JkZXItY29sb3InOiAnI2VlZScgfSxcbiAgICAndGFzay1saXN0LWhlYWRlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLFxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItY29sdW1uJzoge1xuICAgICAgJ2JvcmRlci1sZWZ0JzogJzFweCBzb2xpZCAjMDAwMDAwNTAnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2YzZjVmNycsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3RyYW5zcGFyZW50J1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci13cmFwcGVyJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICdmbGV4LXNocmluayc6ICcwJyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAnMCAwIDAgMTBweCdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtZXhwYW5kZXItY29udGVudCc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLWxpbmUnOiB7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogJzEnLFxuICAgICAgJ3N0cm9rZS1saW5lY2FwJzogJ3JvdW5kJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci1ib3JkZXInOiB7XG4gICAgICBmaWxsOiAnI2ZmZmZmZmEwJyxcbiAgICAgIHN0cm9rZTogJyMwMDAwMDAnXG4gICAgfSxcbiAgICAnY2hhcnQtZXhwYW5kZXItd3JhcHBlcic6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAnbGluZS1oZWlnaHQnOiAnMScsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICAnY2hhcnQtZXhwYW5kZXItY29udGVudCc6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gMHB4JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ3VzZXItc2VsZWN0JzogJ25vbmUnXG4gICAgfSxcbiAgICAnY2hhcnQtZXhwYW5kZXItbGluZSc6IHtcbiAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXG4gICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAnMScsXG4gICAgICAnc3Ryb2tlLWxpbmVjYXAnOiAncm91bmQnXG4gICAgfSxcbiAgICAnY2hhcnQtZXhwYW5kZXItYm9yZGVyJzoge1xuICAgICAgZmlsbDogJyNmZmZmZmZhMCcsXG4gICAgICBzdHJva2U6ICcjMDAwMDAwJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1jb250YWluZXInOiB7fSxcbiAgICAndGFzay1saXN0LWhlYWRlci1sYWJlbCc6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICd0ZXh0LW92ZXJmbG93JzogJ2VsbGlwc2lzJyxcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXG4gICAgICAnZm9udC1zaXplJzogZm9udFNpemUsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gNnB4JyxcbiAgICAgICdmbGV4LWdyb3cnOiAnMScsXG4gICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyJzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6ICc2cHgnLFxuICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ2NlbnRlcidcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXInOiB7IG1hcmdpbjogJ2F1dG8gMHB4JyB9LFxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90Jzoge1xuICAgICAgd2lkdGg6ICczcHgnLFxuICAgICAgaGVpZ2h0OiAnM3B4JyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZGRkJyxcbiAgICAgICdib3JkZXItcmFkaXVzJzogJzEwMCUnLFxuICAgICAgbWFyZ2luOiAnNHB4IDBweCdcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbXMnOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICAgICd0YXNrLWxpc3QtaXRlbSc6IHtcbiAgICAgICdib3JkZXItdG9wJzogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICdib3JkZXItcmlnaHQnOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWl0ZW0tY29sdW1uJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICdmbGV4LXNocmluayc6ICcwJyxcbiAgICAgICdib3JkZXItbGVmdCc6ICcxcHggc29saWQgIzAwMDAwMDUwJyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ2JvcmRlci1jb2xvcic6ICcjZWVlJ1xuICAgIH0sXG4gICAgJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICAndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJzoge1xuICAgICAgbWFyZ2luOiAnYXV0byAwcHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcbiAgICAndGFzay1saXN0LWl0ZW0tdmFsdWUnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgJ2ZsZXgtc2hyaW5rJzogJzEwMCcsXG4gICAgICAnZm9udC1mYW1pbHknOiBmb250RmFtaWx5LFxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLFxuICAgICAgJ21hcmdpbi10b3AnOiAnYXV0bycsXG4gICAgICAnbWFyZ2luLWJvdHRvbSc6ICdhdXRvJyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICc2cHgnLCAvLyBUYXNrTGlzdFxuICAgICAgJ21hcmdpbi1yaWdodCc6ICc2cHgnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgJ3RleHQtb3ZlcmZsb3cnOiAnZWxsaXBzaXMnLFxuICAgICAgJ2xpbmUtaGVpZ2h0JzogJzEuNWVtJyxcbiAgICAgICd3b3JkLWJyZWFrJzogJ2tlZXAtYWxsJyxcbiAgICAgICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLFxuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJ1xuICAgIH0sXG4gICAgJ2dyaWQtbGluZXMnOiB7fSxcbiAgICAnZ3JpZC1saW5lLWhvcml6b250YWwnOiB7XG4gICAgICBzdHJva2U6ICcjMDAwMDAwMTAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcbiAgICB9LFxuICAgICdncmlkLWxpbmUtdmVydGljYWwnOiB7XG4gICAgICBzdHJva2U6ICcjMDAwMDAwMTAnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcbiAgICB9LFxuICAgICdncmlkLWxpbmUtdGltZSc6IHtcbiAgICAgIHN0cm9rZTogJyNGRjAwMDA4MCcsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxuICAgIH0sXG4gICAgY2hhcnQ6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lcic6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWdyYXBoLWNvbnRhaW5lcic6IHtcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJScsXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJ1xuICAgIH0sXG4gICAgJ2NoYXJ0LWFyZWEnOiB7fSxcbiAgICAnY2hhcnQtZ3JhcGgnOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuICAgICdjaGFydC1yb3ctdGV4dC13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy10ZXh0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmZhMCcsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICcxMHB4JyxcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXG4gICAgICAnZm9udC1zaXplJzogZm9udFNpemUsXG4gICAgICAnZm9udC13ZWlnaHQnOiAnbm9ybWFsJyxcbiAgICAgIGNvbG9yOiAnIzAwMDAwMGEwJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgICdjaGFydC1yb3ctdGV4dC1jb250ZW50Jzoge1xuICAgICAgcGFkZGluZzogJzBweCA2cHgnXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dCc6IHt9LFxuICAgICdjaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sJzoge30sXG4gICAgJ2NoYXJ0LXJvdy13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1iYXItd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1yb3ctYmFyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1iYXItcG9seWdvbic6IHtcbiAgICAgIHN0cm9rZTogJyNFNzRDM0MnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDEsXG4gICAgICBmaWxsOiAnI0Y3NUM0QydcbiAgICB9LFxuICAgICdjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1wcm9qZWN0Jzoge30sXG4gICAgJ2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb24nOiB7fSxcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyJzoge30sXG4gICAgJ2NoYXJ0LXJvdy1taWxlc3RvbmUnOiB7fSxcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uJzoge30sXG4gICAgJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInOiB7fSxcbiAgICAnY2hhcnQtcm93LXRhc2snOiB7fSxcbiAgICAnY2hhcnQtcm93LXRhc2stcG9seWdvbic6IHt9LFxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInOiB7fSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhcic6IHt9LFxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmUnOiB7XG4gICAgICBzdHJva2U6ICcjZmZmZmZmMjUnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDIwXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZCc6IHtcbiAgICAgIGZpbGw6ICcjMEVBQzUxJyxcbiAgICAgIGhlaWdodDogJzIwJSdcbiAgICB9LFxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm4nOiB7XG4gICAgICBmaWxsOiAndXJsKCNkaWFnb25hbEhhdGNoKScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAuMSkgc2NhbGVZKDAuOCknXG4gICAgfSxcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lJzoge1xuICAgICAgc3Ryb2tlOiAnI0U3NEMzQycsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxuICAgIH0sXG4gICAgJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtd3JhcHBlcic6IHt9LFxuICAgICdjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgnOiB7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgc3Ryb2tlOiAnI0ZGYTAwMDkwJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiAyXG4gICAgfSxcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lcic6IHt9LFxuICAgICdjaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsJzoge1xuICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJSdcbiAgICB9LFxuICAgICdjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbCc6IHtcbiAgICAgICdvdmVyZmxvdy15JzogJ2F1dG8nLFxuICAgICAgJ292ZXJmbG93LXgnOiAnaGlkZGVuJyxcbiAgICAgICdtYXgtaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICB9LFxuICAgICdjaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0Jzoge1xuICAgICAgZmlsbDogJyNmM2Y1Zjc4MCdcbiAgICB9LFxuICAgICdzbG90LWhlYWRlci1iZWZvcmVPcHRpb25zJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9XG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdnVlX187Il0sInNvdXJjZVJvb3QiOiIifQ==