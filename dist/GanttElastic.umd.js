(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["GanttElastic"] = factory(require("Vue"));
	else
		root["GanttElastic"] = factory(root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",i="hour",r="day",s="week",u="month",o="year",a=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,h=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var i=String(t);return!i||i.length>=n?t:""+Array(n+1-i.length).join(e)+t},f={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),i=Math.floor(e/60),r=e%60;return(n<=0?"+":"-")+c(i,2,"0")+":"+c(r,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(e,u),r=n-i<0,s=t.clone().add(e+(r?-1:1),u);return Number(-(e+(n-i)/(r?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(a){return{M:u,y:o,w:s,d:r,h:i,m:e,s:n,ms:t}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$="en",l={};l[$]=d;var m=function(t){return t instanceof S},y=function(t,n,e){var i;if(!t)return null;if("string"==typeof t)l[t]&&(i=t),n&&(l[t]=n,i=t);else{var r=t.name;l[r]=t,i=r}return e||($=i),i},M=function(t,n,e){if(m(t))return t.clone();var i=n?"string"==typeof n?{format:n,pl:e}:n:{};return i.date=t,new S(i)},D=f;D.l=y,D.i=m,D.w=function(t,n){return M(t,{locale:n.$L,utc:n.$u})};var S=function(){function c(t){this.$L=this.$L||y(t.locale,null,!0)||$,this.parse(t)}var f=c.prototype;return f.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var i=n.match(a);if(i)return e?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(n)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return D},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,n){var e=M(t);return this.startOf(n)<=e&&e<=this.endOf(n)},f.isAfter=function(t,n){return M(t)<this.startOf(n)},f.isBefore=function(t,n){return this.endOf(n)<M(t)},f.year=function(){return this.$y},f.month=function(){return this.$M},f.day=function(){return this.$W},f.date=function(){return this.$D},f.hour=function(){return this.$H},f.minute=function(){return this.$m},f.second=function(){return this.$s},f.millisecond=function(){return this.$ms},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,a){var h=this,c=!!D.u(a)||a,f=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return c?e:e.endOf(r)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(f){case o:return c?d(1,0):d(31,11);case u:return c?d(1,m):d(0,m+1);case s:var S=this.$locale().weekStart||0,g=(l<S?l+7:l)-S;return d(c?y-g:y+(6-g),m);case r:case"date":return $(M+"Hours",0);case i:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,a){var h,c=D.p(s),f="set"+(this.$u?"UTC":""),d=(h={},h[r]=f+"Date",h.date=f+"Date",h[u]=f+"Month",h[o]=f+"FullYear",h[i]=f+"Hours",h[e]=f+"Minutes",h[n]=f+"Seconds",h[t]=f+"Milliseconds",h)[c],$=c===r?this.$D+(a-this.$W):a;return this.$d[d]&&this.$d[d]($),this.init(),this},f.set=function(t,n){return this.clone().$set(t,n)},f.add=function(t,a){var h,c=this;t=Number(t);var f=D.p(a),d=function(n,e){var i=c.set("date",1).set(n,e+t);return i.set("date",Math.min(c.$D,i.daysInMonth()))},$=function(n){var e=new Date(c.$d);return e.setDate(e.getDate()+n*t),D.w(e,c)};if(f===u)return d(u,this.$M);if(f===o)return d(o,this.$y);if(f===r)return $(1);if(f===s)return $(7);var l=(h={},h[e]=6e4,h[i]=36e5,h[n]=1e3,h)[f]||1,m=this.valueOf()+t*l;return D.w(m,this)},f.subtract=function(t,n){return this.add(-1*t,n)},f.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),r=this.$locale(),s=r.weekdays,u=r.months,o=function(t,n,e,i){return t&&t[n]||e[n].substr(0,i)},a=function(t){return D.s(n.$H%12||12,t,"0")},c={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:D.s(this.$M+1,2,"0"),MMM:o(r.monthsShort,this.$M,u,3),MMMM:u[this.$M],D:String(this.$D),DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:o(r.weekdaysMin,this.$W,s,2),ddd:o(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:D.s(this.$H,2,"0"),h:a(1),hh:a(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:D.s(this.$m,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return e.replace(h,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):c[t]||i.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,a,h){var c,f=D.p(a),d=M(t),$=6e4*(d.utcOffset()-this.utcOffset()),l=this-d,m=D.m(this,d);return m=(c={},c[o]=m/12,c[u]=m,c.quarter=m/3,c[s]=(l-$)/6048e5,c[r]=(l-$)/864e5,c[i]=l/36e5,c[e]=l/6e4,c[n]=l/1e3,c)[f]||l,h?m:D.a(m)},f.daysInMonth=function(){return this.endOf(u).$D},f.$locale=function(){return l[this.$L]},f.locale=function(t,n){var e=this.clone();return e.$L=y(t,n,!0),e},f.clone=function(){return D.w(this.toDate(),this)},f.toDate=function(){return new Date(this.$d)},f.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},f.toJSON=function(){return this.toISOString()},f.toISOString=function(){return this.$d.toISOString()},f.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},f.toString=function(){return this.$d.toUTCString()},c}();return M.prototype=S.prototype,M.extend=function(t,n){return t(n,S,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[$],M.Ls=l,M});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(8).default
var update = add("c3e5085c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports
exports.i(__webpack_require__(6), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".gantt-elastic__main-view svg{\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line, .gantt-elastic__grid-vertical-line{\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > *{\n  margin: 0px;\n}\n.gantt-elastic .p-2{\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container , .gantt-elastic__main-view-container{\n  overflow: hidden;\n  max-width:100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type{\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type{\n  border-bottom:1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container{\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value{\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=template&id=02c6304c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "gantt-elastic" },
    [
      _vm._t("header"),
      _vm._v(" "),
      _c("main-view", { attrs: { tasks: _vm.tasks, options: _vm.options } }),
      _vm._v(" "),
      _vm._t("footer")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/GanttElastic.vue?vue&type=template&id=02c6304c&

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(0);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(1);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=template&id=0bc4212e&
var MainViewvue_type_template_id_0bc4212e_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__main-view",
      style: _vm.root.style("main-view")
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__main-container-wrapper",
          style: _vm.root.style("main-container-wrapper", {
            height: _vm.$store.state.GanttElastic.options.height + "px"
          })
        },
        [
          _c(
            "div",
            {
              ref: "mainView",
              staticClass: "gantt-elastic__main-container",
              style: _vm.root.style("main-container", {
                width: _vm.getWidth + "px",
                height: _vm.$store.state.GanttElastic.options.height + "px"
              })
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__container",
                  style: _vm.root.style("container"),
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
                          value:
                            _vm.$store.state.GanttElastic.options.taskList
                              .display,
                          expression:
                            "$store.state.GanttElastic.options.taskList.display"
                        }
                      ],
                      ref: "taskList",
                      staticClass: "gantt-elastic__task-list-container",
                      style: _vm.root.style("task-list-container", {
                        width:
                          _vm.$store.state.GanttElastic.options.taskList
                            .finalWidth + "px",
                        height:
                          _vm.$store.state.GanttElastic.options.height + "px"
                      })
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
              style: _vm.root.style(
                "chart-scroll-container",
                "chart-scroll-container--vertical",
                _vm.verticalStyle
              ),
              on: { scroll: _vm.onVerticalScroll }
            },
            [
              _c("div", {
                staticClass: "gantt-elastic__chart-scroll--vertical",
                style: {
                  width: "1px",
                  height:
                    _vm.$store.state.GanttElastic.options
                      .allVisibleTasksHeight + "px"
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
          style: _vm.root.style(
            "chart-scroll-container",
            "chart-scroll-container--horizontal",
            { marginLeft: _vm.getMarginLeft }
          ),
          on: { scroll: _vm.onHorizontalScroll }
        },
        [
          _c("div", {
            staticClass: "gantt-elastic__chart-scroll--horizontal",
            style: {
              height: "1px",
              width: _vm.$store.state.GanttElastic.options.width + "px"
            }
          })
        ]
      )
    ]
  )
}
var MainViewvue_type_template_id_0bc4212e_staticRenderFns = []
MainViewvue_type_template_id_0bc4212e_render._withStripped = true


// CONCATENATED MODULE: ./src/components/MainView.vue?vue&type=template&id=0bc4212e&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&
var TaskListvue_type_template_id_6e11f12f_render = function() {
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
          value: _vm.$store.state.GanttElastic.options.taskList.display,
          expression: "$store.state.GanttElastic.options.taskList.display"
        }
      ],
      ref: "taskListWrapper",
      staticClass: "gantt-elastic__task-list-wrapper",
      style: _vm.root.style("task-list-wrapper", {
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
          style: _vm.root.style("task-list")
        },
        [
          _c("task-list-header"),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "taskListItems",
              staticClass: "gantt-elastic__task-list-items",
              style: _vm.root.style("task-list-items", {
                height: _vm.$store.state.GanttElastic.options.rowsHeight + "px"
              })
            },
            _vm._l(_vm.root.visibleTasks, function(task) {
              return _c("task-list-item", {
                key: task.id,
                attrs: {
                  task: task,
                  "expander-style": _vm.getListExpanderStyle(task)
                }
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
var TaskListvue_type_template_id_6e11f12f_staticRenderFns = []
TaskListvue_type_template_id_6e11f12f_render._withStripped = true


// CONCATENATED MODULE: ./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&
var TaskListHeadervue_type_template_id_aefdd7c8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-header",
      style: _vm.root.style("task-list-header", {
        height: _vm.$store.state.GanttElastic.options.calendar.height + "px",
        "margin-bottom":
          _vm.$store.state.GanttElastic.options.calendar.gap + "px"
      })
    },
    _vm._l(_vm.root.getTaskListColumns, function(column) {
      return _c(
        "div",
        {
          key: column._id,
          staticClass: "gantt-elastic__task-list-header-column",
          style: _vm.root.style(
            "task-list-header-column",
            column.style["task-list-header-column"],
            _vm.getStyle(column)
          )
        },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: _vm.collapsible,
                  options:
                    _vm.$store.state.GanttElastic.options.taskList.expander
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-label",
              style: _vm.root.style(
                "task-list-header-label",
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
              style: _vm.root.style(
                "task-list-header-resizer-wrapper",
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
                  style: _vm.root.style(
                    "task-list-header-resizer",
                    column.style["task-list-header-resizer"]
                  )
                },
                [
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: _vm.root.style(
                      "task-list-header-resizer-dot",
                      column.style["task-list-header-resizer-dot"]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: _vm.root.style(
                      "task-list-header-resizer-dot",
                      column.style["task-list-header-resizer-dot"]
                    )
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: _vm.root.style(
                      "task-list-header-resizer-dot",
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
var TaskListHeadervue_type_template_id_aefdd7c8_staticRenderFns = []
TaskListHeadervue_type_template_id_aefdd7c8_render._withStripped = true


// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=template&id=09a21177&
var Expandervue_type_template_id_09a21177_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.getClassPrefix() + "-wrapper",
      style: this.root.style(this.getClassPrefix(false) + "-wrapper")
    },
    [
      _vm.allChildren.length
        ? _c(
            "svg",
            {
              class: _vm.getClassPrefix() + "-content",
              style: _vm.root.style(_vm.getClassPrefix(false) + "-content"),
              attrs: { width: _vm.options.size, height: _vm.options.size }
            },
            [
              _c("rect", {
                class: _vm.getClassPrefix() + "-border",
                style: _vm.root.style(
                  _vm.getClassPrefix(false) + "-border",
                  _vm.borderStyle
                ),
                attrs: {
                  x: _vm.border,
                  y: _vm.border,
                  width: _vm.options.size - _vm.border * 2,
                  height: _vm.options.size - _vm.border * 2,
                  rx: "2",
                  ry: "2"
                },
                on: { click: _vm.toggle }
              }),
              _vm._v(" "),
              _vm.allChildren.length
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: _vm.root.style(_vm.getClassPrefix(false) + "-line"),
                    attrs: {
                      x1: _vm.lineOffset,
                      y1: _vm.options.size / 2,
                      x2: _vm.options.size - _vm.lineOffset,
                      y2: _vm.options.size / 2
                    },
                    on: { click: _vm.toggle }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.collapsed
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: _vm.root.style(_vm.getClassPrefix(false) + "-line"),
                    attrs: {
                      x1: _vm.options.size / 2,
                      y1: _vm.lineOffset,
                      x2: _vm.options.size / 2,
                      y2: _vm.options.size - _vm.lineOffset
                    },
                    on: { click: _vm.toggle }
                  })
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var Expandervue_type_template_id_09a21177_staticRenderFns = []
Expandervue_type_template_id_09a21177_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Expander.vue?vue&type=template&id=09a21177&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Expander',
  inject: ['root'],
  props: ['tasks', 'options'],
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
    /**
     * Get all tasks
     *
     * @returns {array}
     */
    allChildren() {
      const children = [];
      this.tasks.forEach(task => {
        task.children.forEach(child => {
          children.push(child);
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
      if (this.allChildren.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        this.$store.commit(this.root.updateTaskMut, { id: task.id, collapsed });
      });
    }
  }
});

// CONCATENATED MODULE: ./src/components/Expander.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Expandervue_type_script_lang_js_ = (Expandervue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/components/Expander.vue





/* normalize component */

var component = normalizeComponent(
  components_Expandervue_type_script_lang_js_,
  Expandervue_type_template_id_09a21177_render,
  Expandervue_type_template_id_09a21177_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Expander.vue"
/* harmony default export */ var Expander = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TaskListHeader',
  components: {
    TaskListExpander: Expander
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
     * Get style
     *
     * @returns {object}
     */
    getStyle() {
      return column => {
        const options = this.$store.state.GanttElastic.options;
        return {
          height: options.calendar.height + this.root.style('calendar-row-rect')['border-width'] + 'px',
          width: column.finalWidth + 'px'
        };
      };
    },

    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.$store.state.GanttElastic.tasks.filter(task => task.children.length > 0);
    }
  },

  methods: {
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
        if (this.resizer.moving.width < this.$store.state.GanttElastic.options.taskList.minWidth) {
          this.resizer.moving.width = this.$store.state.GanttElastic.options.taskList.minWidth;
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

// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_TaskListHeadervue_type_script_lang_js_ = (TaskListHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue





/* normalize component */

var TaskListHeader_component = normalizeComponent(
  TaskList_TaskListHeadervue_type_script_lang_js_,
  TaskListHeadervue_type_template_id_aefdd7c8_render,
  TaskListHeadervue_type_template_id_aefdd7c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TaskListHeader_api; }
TaskListHeader_component.options.__file = "src/components/TaskList/TaskListHeader.vue"
/* harmony default export */ var TaskListHeader = (TaskListHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&
var TaskListItemvue_type_template_id_9716293c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item",
      style: _vm.root.style("task-list-item")
    },
    _vm._l(_vm.$store.state.GanttElastic.options.taskList.columns, function(
      column
    ) {
      return _c(
        "item-column",
        { key: column._id, attrs: { column: column, task: _vm.task } },
        [
          column.expander
            ? _c("task-list-expander", {
                style: _vm.expanderStyle,
                attrs: {
                  tasks: [_vm.task],
                  options:
                    _vm.$store.state.GanttElastic.options.taskList.expander
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
var TaskListItemvue_type_template_id_9716293c_staticRenderFns = []
TaskListItemvue_type_template_id_9716293c_render._withStripped = true


// CONCATENATED MODULE: ./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&
var ItemColumnvue_type_template_id_cb5a6c96_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item-column",
      style: _vm.root.style(
        "task-list-item-column",
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
          style: _vm.root.style(
            "task-list-item-value-wrapper",
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
              style: _vm.root.style(
                "task-list-item-value-container",
                _vm.column.style["task-list-item-value-container"]
              )
            },
            [
              !_vm.html
                ? _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__task-list-item-value",
                      style: _vm.root.style(
                        "task-list-item-value",
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
                : _vm._e(),
              _vm._v(" "),
              _vm.html
                ? _c("div", {
                    staticClass: "gantt-elastic__task-list-item-value",
                    style: _vm.root.style(
                      "task-list-item-value",
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
                : _vm._e()
            ]
          )
        ],
        2
      )
    ]
  )
}
var ItemColumnvue_type_template_id_cb5a6c96_staticRenderFns = []
ItemColumnvue_type_template_id_cb5a6c96_render._withStripped = true


// CONCATENATED MODULE: ./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// CONCATENATED MODULE: ./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_ItemColumnvue_type_script_lang_js_ = (ItemColumnvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/ItemColumn.vue





/* normalize component */

var ItemColumn_component = normalizeComponent(
  TaskList_ItemColumnvue_type_script_lang_js_,
  ItemColumnvue_type_template_id_cb5a6c96_render,
  ItemColumnvue_type_template_id_cb5a6c96_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ItemColumn_api; }
ItemColumn_component.options.__file = "src/components/TaskList/ItemColumn.vue"
/* harmony default export */ var ItemColumn = (ItemColumn_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TaskListItemvue_type_script_lang_js_ = ({
  name: 'TaskListItem',
  components: {
    TaskListExpander: Expander,
    ItemColumn: ItemColumn
  },
  inject: ['root'],
  props: ['task', 'expanderStyle'],
  data() {
    return {};
  }
});

// CONCATENATED MODULE: ./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var TaskList_TaskListItemvue_type_script_lang_js_ = (TaskListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TaskList/TaskListItem.vue





/* normalize component */

var TaskListItem_component = normalizeComponent(
  TaskList_TaskListItemvue_type_script_lang_js_,
  TaskListItemvue_type_template_id_9716293c_render,
  TaskListItemvue_type_template_id_9716293c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TaskListItem_api; }
TaskListItem_component.options.__file = "src/components/TaskList/TaskListItem.vue"
/* harmony default export */ var TaskListItem = (TaskListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TaskList',
  components: {
    TaskListHeader: TaskListHeader,
    TaskListItem: TaskListItem
  },
  inject: ['root'],
  data() {
    return {};
  },
  /**
   * Mounted
   */
  mounted() {
    this.$store.commit(this.root.updateOptionsMut, {
      refs: {
        taskListWrapper: this.$refs.taskListWrapper,
        taskList: this.$refs.taskList,
        taskListItems: this.$refs.taskListItems
      }
    });
  },

  computed: {
    /**
     * Calculate task list expander style
     *
     * @returns {object}
     */
    getListExpanderStyle() {
      return task => {
        const options = this.$store.state.GanttElastic.options;
        const padding = (task.parents.length - 1) * options.taskList.expander.padding;
        const style = {
          'padding-left': padding + options.taskList.expander.margin + 'px',
          margin: `auto 0px auto 10px`
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
  TaskListvue_type_template_id_6e11f12f_render,
  TaskListvue_type_template_id_6e11f12f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TaskList_api; }
TaskList_component.options.__file = "src/components/TaskList/TaskList.vue"
/* harmony default export */ var TaskList = (TaskList_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&
var Chartvue_type_template_id_67c3f5cd_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "chart",
      staticClass: "gantt-elastic__chart",
      style: _vm.root.style("chart", {
        width: _vm.getWidth + "px",
        height: _vm.getHeight + "px"
      })
    },
    [
      _c("calendar"),
      _vm._v(" "),
      _c(
        "div",
        {
          style: _vm.root.style("chart-area", {
            width: "100%",
            height: _vm.$store.state.GanttElastic.options.rowsHeight + "px"
          })
        },
        [
          _c(
            "div",
            {
              ref: "chartGraph",
              staticClass: "gantt-elastic__chart-graph",
              style: _vm.root.style("chart-graph", { height: "100%" })
            },
            [
              _c(
                "svg",
                {
                  ref: "chart",
                  staticClass: "gantt-elastic__chart",
                  style: _vm.root.style("chart"),
                  attrs: {
                    x: "0",
                    y: "0",
                    width: _vm.getWidth + "px",
                    height:
                      _vm.$store.state.GanttElastic.options
                        .allVisibleTasksHeight + "px",
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
                        style: _vm.root.style("chart-row-wrapper"),
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
    ],
    1
  )
}
var Chartvue_type_template_id_67c3f5cd_staticRenderFns = []
Chartvue_type_template_id_67c3f5cd_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&
var Gridvue_type_template_id_2bf979a7_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      ref: "chart",
      staticClass: "gantt-elastic__grid-lines-wrapper",
      style: _vm.root.style("grid-lines-wrapper"),
      attrs: {
        x: "0",
        y: "0",
        width: _vm.$store.state.GanttElastic.options.width,
        height: _vm.$store.state.GanttElastic.options.allVisibleTasksHeight,
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c(
        "g",
        {
          staticClass: "gantt-elastic__grid-lines",
          style: _vm.root.style("grid-lines")
        },
        [
          _vm._l(_vm.horizontalLines, function(line) {
            return _c("line", {
              key: line.key,
              staticClass: "gantt-elastic__grid-line-horizontal",
              style: _vm.root.style("grid-line-horizontal"),
              attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
            })
          }),
          _vm._v(" "),
          _vm._l(_vm.verticalLines, function(line) {
            return _c("line", {
              key: line.key,
              staticClass: "gantt-elastic__grid-line-vertical",
              style: _vm.root.style("grid-line-vertical"),
              attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 }
            })
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "gantt-elastic__grid-line-time",
            style: _vm.root.style("grid-line-time"),
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
var Gridvue_type_template_id_2bf979a7_staticRenderFns = []
Gridvue_type_template_id_2bf979a7_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      const options = this.$store.state.GanttElastic.options;
      options.times.steps.forEach(step => {
        if (this.root.isInsideViewPort(step.offset.px, 1)) {
          lines.push({
            key: step.time,
            x1: step.offset.px,
            y1: 0,
            x2: step.offset.px,
            y2:
              this.$store.state.GanttElastic.tasks.length *
                (options.row.height + options.chart.grid.horizontal.gap * 2) +
              this.root.style('grid-line-vertical')['stroke-width']
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
      const options = this.$store.state.GanttElastic.options;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        const y =
          index * (options.row.height + options.chart.grid.horizontal.gap * 2) +
          this.root.style('grid-line-vertical')['stroke-width'] / 2;
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
        const options = this.$store.state.GanttElastic.options;
        return line.x1 >= options.scroll.chart.left && line.x1 <= options.scroll.chart.right;
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

// CONCATENATED MODULE: ./src/components/Chart/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chart_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/Grid.vue





/* normalize component */

var Grid_component = normalizeComponent(
  Chart_Gridvue_type_script_lang_js_,
  Gridvue_type_template_id_2bf979a7_render,
  Gridvue_type_template_id_2bf979a7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Grid_api; }
Grid_component.options.__file = "src/components/Chart/Grid.vue"
/* harmony default export */ var Grid = (Grid_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&
var DaysHighlightvue_type_template_id_1bfe64e8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showWorkingDays
    ? _c(
        "g",
        {
          staticClass: "gantt-elastic__chart-days-highlight-container",
          style: _vm.root.style("chart-days-highlight-container")
        },
        _vm._l(_vm.workingDays, function(day) {
          return _c("rect", {
            key: _vm.getKey(day),
            staticClass: "gantt-elastic__chart-days-highlight-rect",
            style: _vm.root.style("chart-days-highlight-rect"),
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
var DaysHighlightvue_type_template_id_1bfe64e8_staticRenderFns = []
DaysHighlightvue_type_template_id_1bfe64e8_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var DaysHighlightvue_type_script_lang_js_ = ({
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
      return dayjs_min_default()(day.time).format('YYYY-MM-DD');
    }
  },
  computed: {
    /**
     * Get working days
     *
     * @returns {array}
     */
    workingDays() {
      return this.$store.state.GanttElastic.options.times.steps.filter(step => {
        return this.$store.state.GanttElastic.options.calendar.workingDays.indexOf(dayjs_min_default()(step.time).day()) === -1;
      });
    },

    /**
     * Show working days?
     *
     * @returns {bool}
     */
    showWorkingDays() {
      const calendar = this.$store.state.GanttElastic.options.calendar;
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

// CONCATENATED MODULE: ./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chart_DaysHighlightvue_type_script_lang_js_ = (DaysHighlightvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/DaysHighlight.vue





/* normalize component */

var DaysHighlight_component = normalizeComponent(
  Chart_DaysHighlightvue_type_script_lang_js_,
  DaysHighlightvue_type_template_id_1bfe64e8_render,
  DaysHighlightvue_type_template_id_1bfe64e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DaysHighlight_api; }
DaysHighlight_component.options.__file = "src/components/Chart/DaysHighlight.vue"
/* harmony default export */ var DaysHighlight = (DaysHighlight_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&
var Calendarvue_type_template_id_dee108e2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__calendar-wrapper",
      style: _vm.root.style("calendar-wrapper", {
        "margin-bottom":
          _vm.$store.state.GanttElastic.options.calendar.gap + "px"
      })
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__calendar",
          style: _vm.root.style("calendar", { width: _vm.getWidth + "px" })
        },
        [
          _vm.$store.state.GanttElastic.options.calendar.month.display
            ? _c("calendar-row", {
                attrs: {
                  items: _vm.$store.state.GanttElastic.options.calendar.months,
                  which: "month"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$store.state.GanttElastic.options.calendar.day.display
            ? _c("calendar-row", {
                attrs: {
                  items: _vm.$store.state.GanttElastic.options.calendar.days,
                  which: "day"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.$store.state.GanttElastic.options.calendar.hour.display
            ? _c("calendar-row", {
                attrs: {
                  items: _vm.$store.state.GanttElastic.options.calendar.hours,
                  which: "hour"
                }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var Calendarvue_type_template_id_dee108e2_staticRenderFns = []
Calendarvue_type_template_id_dee108e2_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&
var CalendarRowvue_type_template_id_0daf06fb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class:
        "gantt-elastic__calendar-row gantt-elastic__calendar-row-" + _vm.which,
      style: _vm.root.style("calendar-row", "calendar-row-" + _vm.which)
    },
    _vm._l(_vm.items, function(item) {
      return _c(
        "div",
        {
          key: item.key,
          class:
            "gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--" +
            _vm.which,
          style: _vm.root.style(
            "calendar-row-rect",
            "calendar-row-rect--" + _vm.which,
            {
              width: item.width + "px",
              height: item.height + "px"
            }
          )
        },
        [
          _c(
            "div",
            {
              class:
                "gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--" +
                _vm.which,
              style: _vm.root.style(
                "calendar-row-text",
                "calendar-row-text--" + _vm.which,
                _vm.getStyle(item)
              )
            },
            [_vm._v("\n      " + _vm._s(item.label) + "\n    ")]
          )
        ]
      )
    }),
    0
  )
}
var CalendarRowvue_type_template_id_0daf06fb_staticRenderFns = []
CalendarRowvue_type_template_id_0daf06fb_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CalendarRowvue_type_script_lang_js_ = ({
  name: 'CalendarRow',
  inject: ['root'],
  props: ['items', 'which'],
  data() {
    return {
      anchor: 'middle'
    };
  },
  computed: {
    /**
     * Get x position
     *
     * @returns {number}
     */
    getTextX() {
      let x = this.item.x + this.item.width / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(this.item.x, this.item.width, 0)) {
        this.anchor = 'start';
        let scrollWidth =
          this.$store.state.GanttElastic.options.scroll.chart.right -
          this.$store.state.GanttElastic.options.scroll.chart.left;
        x = this.$store.state.GanttElastic.options.scroll.chart.left + scrollWidth / 2 - this.item.textWidth / 2 + 2;
        if (x + this.item.textWidth + 2 > this.item.x + this.item.width) {
          x = this.item.x + this.item.width - this.item.textWidth - 2;
        } else if (x < this.item.x) {
          x = this.item.x + 2;
        }
      }
      return x;
    },

    /**
     * Get y position
     *
     * @returns {number}
     */
    getTextY() {
      return this.item.y + this.item.height / 2;
    },

    /**
     * Get style for an item
     *
     * @returns {function}
     */
    getStyle() {
      return item => {
        return {
          'line-height':
            item.height -
            parseFloat(this.root.style('calendar-row-rect', 'calendar-row-rect--' + this.which)['border-width']) * 2 +
            'px'
        };
      };
    }
  }
});

// CONCATENATED MODULE: ./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var Calendar_CalendarRowvue_type_script_lang_js_ = (CalendarRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Calendar/CalendarRow.vue





/* normalize component */

var CalendarRow_component = normalizeComponent(
  Calendar_CalendarRowvue_type_script_lang_js_,
  CalendarRowvue_type_template_id_0daf06fb_render,
  CalendarRowvue_type_template_id_0daf06fb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var CalendarRow_api; }
CalendarRow_component.options.__file = "src/components/Calendar/CalendarRow.vue"
/* harmony default export */ var CalendarRow = (CalendarRow_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Calendar',
  components: {
    CalendarRow: CalendarRow
  },
  inject: ['root'],
  data() {
    return {};
  },

  /**
   * Created
   */
  created() {
    this.root.$on('scope-change', this.regenerate);
    this.root.$on('times-timeZoom-change', this.regenerate);
    this.root.$on('tasks-updated', this.regenerate);
    this.root.$on('options-updated', this.regenerate);
    this.root.$on('calendar-recalculate', this.regenerate);
  },

  /**
   * Mounted
   */
  mounted() {
    this.regenerate();
  },

  methods: {
    /**
     * How many hours will fit?
     *
     * @returns {object}
     */
    howManyHoursFit(dayIndex) {
      const stroke = parseFloat(this.root.style('calendar-row-rect')['border-width']);
      const additionalSpace = stroke * 2 + 2;
      let fullCellWidth = this.$store.state.GanttElastic.options.times.steps[dayIndex].width.px;
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.hour.format);
      for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.$store.state.GanttElastic.options.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <=
              fullCellWidth &&
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
      const stroke = parseFloat(this.root.style('calendar-row-rect')['border-width']);
      const additionalSpace = stroke * 2 + 2;
      let fullWidth = this.$store.state.GanttElastic.options.width;
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.day.format);
      for (let days = this.$store.state.GanttElastic.options.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.$store.state.GanttElastic.options.calendar.day.maxWidths[formatName] + additionalSpace) * days <=
              fullWidth &&
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
      const stroke = parseFloat(this.root.style('calendar-row-rect')['border-width']);
      const additionalSpace = stroke * 2 + 2;
      let fullWidth = this.$store.state.GanttElastic.options.width;
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.month.format);
      let currentMonth = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
      let previousMonth = currentMonth.clone();
      const lastTime = this.$store.state.GanttElastic.options.times.lastTime;
      let monthsCount = 1;
      while (currentMonth.valueOf() <= lastTime) {
        currentMonth = currentMonth.add(1, 'day');
        if (previousMonth.month() !== currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.$store.state.GanttElastic.options.calendar.month.maxWidths[formatName] + additionalSpace) * months <=
              fullWidth &&
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
        count: 1,
        type: formatNames[0]
      };
    },

    /**
     * Get hour text style
     *
     * @returns {string}
     */
    hourTextStyle() {
      return (
        'font-family:' +
        this.$store.state.GanttElastic.options.calendar.hour.fontFamily +
        ';font-size:' +
        this.$store.state.GanttElastic.options.calendar.hour.fontSize
      );
    },

    /**
     * Get text style
     *
     * @returns {string}
     */
    dayTextStyle() {
      return (
        'font-family:' +
        this.$store.state.GanttElastic.options.calendar.day.fontFamily +
        ';font-size:' +
        this.$store.state.GanttElastic.options.calendar.day.fontSize
      );
    },

    /**
     * Generate hours
     *
     * @returns {array}
     */
    generateHours() {
      let hours = [];
      if (!this.$store.state.GanttElastic.options.calendar.hour.display) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours: [] } });
      }
      for (
        let hourIndex = 0, len = this.$store.state.GanttElastic.options.times.steps.length;
        hourIndex < len;
        hourIndex++
      ) {
        const hoursCount = this.howManyHoursFit(hourIndex);
        if (hoursCount.count === 0) {
          return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours } });
        }
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.$store.state.GanttElastic.options.times.steps[hourIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs_min_default()(this.$store.state.GanttElastic.options.times.steps[hourIndex].time).add(
            i * hourStep,
            'hour'
          );
          let textWidth = 0;
          if (typeof this.$store.state.GanttElastic.options.calendar.hour.widths[hourIndex] !== 'undefined') {
            textWidth = this.$store.state.GanttElastic.options.calendar.hour.widths[hourIndex][hoursCount.type];
          }
          let x = this.$store.state.GanttElastic.options.times.steps[hourIndex].offset.px + hourWidthPx * i;
          hours.push({
            index: hourIndex,
            key: this.$store.state.GanttElastic.options.times.steps[hourIndex].time + 'h' + i,
            x,
            y:
              this.$store.state.GanttElastic.options.calendar.day.height +
              this.$store.state.GanttElastic.options.calendar.month.height,
            width: hourWidthPx,
            textWidth,
            height: this.$store.state.GanttElastic.options.calendar.hour.height,
            label: this.$store.state.GanttElastic.options.calendar.hour.format[hoursCount.type](date),
            type: hoursCount.type
          });
        }
      }
      return this.$store.commit(this.root.updateOptionsMut, { calendar: { hours } });
    },

    /**
     * Generate days
     *
     * @returns {array}
     */
    generateDays() {
      let days = [];
      if (!this.$store.state.GanttElastic.options.calendar.day.display) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { days: [] } });
      }
      const daysCount = this.howManyDaysFit();
      if (daysCount.count === 0) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { days } });
      }
      const dayStep = Math.ceil(this.$store.state.GanttElastic.options.times.steps.length / daysCount.count);
      for (
        let dayIndex = 0, len = this.$store.state.GanttElastic.options.times.steps.length;
        dayIndex < len;
        dayIndex += dayStep
      ) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof this.$store.state.GanttElastic.options.times.steps[dayIndex + currentStep] !== 'undefined') {
            dayWidthPx += this.$store.state.GanttElastic.options.times.steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs_min_default()(this.$store.state.GanttElastic.options.times.steps[dayIndex].time);
        let textWidth = 0;
        if (typeof this.$store.state.GanttElastic.options.calendar.day.widths[dayIndex] !== 'undefined') {
          textWidth = this.$store.state.GanttElastic.options.calendar.day.widths[dayIndex][daysCount.type];
        }
        let x = this.$store.state.GanttElastic.options.times.steps[dayIndex].offset.px;
        days.push({
          index: dayIndex,
          key: this.$store.state.GanttElastic.options.times.steps[dayIndex].time + 'd',
          x,
          y: this.$store.state.GanttElastic.options.calendar.month.height,
          width: dayWidthPx,
          textWidth,
          height: this.$store.state.GanttElastic.options.calendar.day.height,
          label: this.$store.state.GanttElastic.options.calendar.day.format[daysCount.type](date),
          type: daysCount.type
        });
      }
      return this.$store.commit(this.root.updateOptionsMut, { calendar: { days } });
    },

    /**
     * Generate months
     *
     * @returns {array}
     */
    generateMonths() {
      let months = [];
      if (!this.$store.state.GanttElastic.options.calendar.month.display) {
        return this.$store.commit(this.root.updateOptionsMut, { calendar: { months: [] } });
      }
      const monthsCount = this.howManyMonthsFit();
      let formatNames = Object.keys(this.$store.state.GanttElastic.options.calendar.month.format);
      let currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs_min_default()(currentDate)
          .add(1, 'month')
          .startOf('month');
        if (finalDate.valueOf() > this.$store.state.GanttElastic.options.times.lastTime) {
          finalDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTime);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.$store.state.GanttElastic.options.times.steps.length; step < len; step++) {
          let currentStep = this.$store.state.GanttElastic.options.times.steps[step];
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
          if (this.$store.state.GanttElastic.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.$store.state.GanttElastic.options.calendar.month.format[formatName](currentDate.toDate());
            choosenFormatName = formatName;
          }
        }
        let textWidth = 0;
        if (typeof this.$store.state.GanttElastic.options.calendar.month.widths[monthIndex] !== 'undefined') {
          textWidth = this.$store.state.GanttElastic.options.calendar.month.widths[monthIndex][choosenFormatName];
        }
        let x = monthOffset;
        months.push({
          index: monthIndex,
          key: monthIndex + 'm',
          x,
          y: 0,
          width: monthWidth,
          textWidth,
          type: choosenFormatName,
          height: this.$store.state.GanttElastic.options.calendar.month.height,
          label
        });
        currentDate = currentDate.add(1, 'month').startOf('month');
        if (currentDate.valueOf() > this.$store.state.GanttElastic.options.times.lastDate) {
          currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastDate);
        }
      }
      return this.$store.commit(this.root.updateOptionsMut, { calendar: { months } });
    },

    /**
     * Regenerate dates
     */
    regenerate() {
      this.generateHours();
      this.generateDays();
      this.generateMonths();
      this.root.calculateCalendarDimensions();
    }
  },

  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      let width = this.$store.state.GanttElastic.options.width;
      return width;
    },

    /**
     * Get month style
     *
     * @returns {object}
     */
    monthsStyle() {
      return this.root.mergeDeep(
        {},
        this.$store.state.GanttElastic.options.calendar.styles.row,
        this.$store.state.GanttElastic.options.calendar.month.style
      );
    },

    /**
     * Get day style
     *
     * @returns {object}
     */
    daysStyle() {
      return this.root.mergeDeep(
        {},
        this.$store.state.GanttElastic.options.calendar.styles.row,
        this.$store.state.GanttElastic.options.calendar.day.style
      );
    },

    /**
     * Get hour styke
     *
     * @returns {object}
     */
    hoursStyle() {
      return this.root.mergeDeep(
        {},
        this.$store.state.GanttElastic.options.calendar.styles.row,
        this.$store.state.GanttElastic.options.calendar.hour.style
      );
    },

    /**
     * Get visible days
     *
     * @returns {array}
     */
    getDays() {
      return this.days.filter(day => this.root.isInsideViewPort(day.x, day.width));
    },

    /**
     * Get visible hours
     *
     * @returns {array}
     */
    getHours() {
      return this.hours.filter(hour => this.root.isInsideViewPort(hour.x, hour.width));
    },

    /**
     * Get visible months
     *
     * @returns {array}
     */
    getMonths() {
      return this.months.filter(month => this.root.isInsideViewPort(month.x, month.width));
    }
  }
});

// CONCATENATED MODULE: ./src/components/Calendar/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Calendar_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Calendar/Calendar.vue





/* normalize component */

var Calendar_component = normalizeComponent(
  Calendar_Calendarvue_type_script_lang_js_,
  Calendarvue_type_template_id_dee108e2_render,
  Calendarvue_type_template_id_dee108e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Calendar_api; }
Calendar_component.options.__file = "src/components/Calendar/Calendar.vue"
/* harmony default export */ var Calendar = (Calendar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&
var DependencyLinesvue_type_template_id_f1cbf6ba_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-dependency-lines-container",
      style: _vm.root.style("chart-dependency-lines-container"),
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
            style: _vm.root.style(
              "chart-dependency-lines-path",
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
var DependencyLinesvue_type_template_id_f1cbf6ba_staticRenderFns = []
DependencyLinesvue_type_template_id_f1cbf6ba_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
          const props = { id: task.id };
          props.dependencyLines = task.dependentOn.map(id => {
            return { points: this.getPoints(id, task.id) };
          });
          this.$store.commit(this.root.updateTaskMut, props);
          return task;
        })
        .filter(task => task.dependencyLines.points !== null);
    }
  }
});

// CONCATENATED MODULE: ./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chart_DependencyLinesvue_type_script_lang_js_ = (DependencyLinesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/DependencyLines.vue





/* normalize component */

var DependencyLines_component = normalizeComponent(
  Chart_DependencyLinesvue_type_script_lang_js_,
  DependencyLinesvue_type_template_id_f1cbf6ba_render,
  DependencyLinesvue_type_template_id_f1cbf6ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DependencyLines_api; }
DependencyLines_component.options.__file = "src/components/Chart/DependencyLines.vue"
/* harmony default export */ var DependencyLines = (DependencyLines_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&
var Taskvue_type_template_id_e9c23eca_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper",
      style: _vm.root.style(
        "chart-row-bar-wrapper",
        "chart-row-task-wrapper",
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
              style: _vm.root.style(
                "chart-expander",
                "chart-expander--task",
                _vm.task.style["chart-expander"]
              ),
              attrs: {
                x:
                  _vm.task.x -
                  _vm.$store.state.GanttElastic.options.chart.expander.offset -
                  _vm.$store.state.GanttElastic.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.$store.state.GanttElastic.options.row.height -
                    _vm.$store.state.GanttElastic.options.chart.expander.size) /
                    2,
                width:
                  _vm.$store.state.GanttElastic.options.chart.expander.size,
                height:
                  _vm.$store.state.GanttElastic.options.chart.expander.size
              }
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.$store.state.GanttElastic.options.chart.expander
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
          style: _vm.root.style(
            "chart-row-bar",
            "chart-row-task",
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
            style: _vm.root.style(
              "chart-row-bar-polygon",
              "chart-row-task-polygon",
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
      _vm.$store.state.GanttElastic.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e()
    ],
    1
  )
}
var Taskvue_type_template_id_e9c23eca_staticRenderFns = []
Taskvue_type_template_id_e9c23eca_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&
var Textvue_type_template_id_459c2fe4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-row-text-wrapper",
      style: _vm.root.style("chart-row-text-wrapper"),
      attrs: {
        x:
          _vm.task.x +
          _vm.task.width +
          _vm.$store.state.GanttElastic.options.chart.text.offset,
        y:
          _vm.task.y -
          _vm.$store.state.GanttElastic.options.chart.grid.horizontal.gap,
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
              style: _vm.root.style("chart-row-text"),
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
                        _vm.root.style(
                          "chart-row-text-content",
                          "chart-row-text-content--text"
                        ),
                        _vm.contentStyle
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
                      _vm.root.style(
                        "chart-row-text-content",
                        "chart-row-text-content--html"
                      ),
                      _vm.contentStyle
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
var Textvue_type_template_id_459c2fe4_staticRenderFns = []
Textvue_type_template_id_459c2fe4_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      const textStyle = this.root.style('chart-row-text');
      this.$store.state.GanttElastic.options.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${
        textStyle['font-family']
      }`;
      const textWidth = this.$store.state.GanttElastic.options.ctx.measureText(this.task.label).width;
      return textWidth + this.$store.state.GanttElastic.options.chart.text.xPadding * 2;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.task.height + this.$store.state.GanttElastic.options.chart.grid.horizontal.gap * 2;
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
      const cols = this.$store.state.GanttElastic.options.taskList.columns;
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

// CONCATENATED MODULE: ./src/components/Chart/Text.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chart_Textvue_type_script_lang_js_ = (Textvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/Text.vue





/* normalize component */

var Text_component = normalizeComponent(
  Chart_Textvue_type_script_lang_js_,
  Textvue_type_template_id_459c2fe4_render,
  Textvue_type_template_id_459c2fe4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Text_api; }
Text_component.options.__file = "src/components/Chart/Text.vue"
/* harmony default export */ var Text = (Text_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&
var ProgressBarvue_type_template_id_4bc39355_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass: "gantt-elastic__chart-row-progress-bar-wrapper",
      style: _vm.root.style(
        "chart-row-progress-bar-wrapper",
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
              width: _vm.$store.state.GanttElastic.options.chart.progress.width,
              height:
                _vm.$store.state.GanttElastic.options.chart.progress.width,
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse"
            }
          },
          [
            _c("line", {
              staticClass: "chart-row-progress-bar-line",
              style: _vm.root.style(
                "chart-row-progress-bar-line",
                _vm.task.style["chart-row-progress-bar-line"]
              ),
              attrs: {
                x1: "0",
                y1: "0",
                x2: "0",
                y2: _vm.$store.state.GanttElastic.options.chart.progress.width
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _vm.$store.state.GanttElastic.options.chart.progress.bar
        ? _c("rect", {
            staticClass: "gantt-elastic__chart-row-progress-bar-solid",
            style: _vm.root.style(
              "chart-row-progress-bar-solid",
              _vm.task.style["chart-row-progress-bar-solid"]
            ),
            attrs: { x: "0", y: "0", width: _vm.getProgressWidth }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.$store.state.GanttElastic.options.chart.progress.pattern
        ? _c("g", [
            _c("rect", {
              staticClass: "gantt-elastic__chart-row-progress-bar-pattern",
              style: _vm.root.style(
                "chart-row-progress-bar-pattern",
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
              style: _vm.root.style(
                "chart-row-progress-bar-outline",
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
var ProgressBarvue_type_template_id_4bc39355_staticRenderFns = []
ProgressBarvue_type_template_id_4bc39355_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return Object.assign(
        {},
        this.$store.state.GanttElastic.options.chart.progress.styles.bar.solid,
        this.task.progressBarStyle.bar
      );
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
          stroke: this.$store.state.GanttElastic.options.row.styles.bar.stroke + 'a0',
          'stroke-width': this.$store.state.GanttElastic.options.row.styles.bar['stroke-width'] / 2
        },
        this.task.style
      );
    }
  }
});

// CONCATENATED MODULE: ./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chart_ProgressBarvue_type_script_lang_js_ = (ProgressBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/ProgressBar.vue





/* normalize component */

var ProgressBar_component = normalizeComponent(
  Chart_ProgressBarvue_type_script_lang_js_,
  ProgressBarvue_type_template_id_4bc39355_render,
  ProgressBarvue_type_template_id_4bc39355_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ProgressBar_api; }
ProgressBar_component.options.__file = "src/components/Chart/ProgressBar.vue"
/* harmony default export */ var ProgressBar = (ProgressBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Task',
  components: {
    ChartText: Text,
    ProgressBar: ProgressBar,
    Expander: Expander
  },
  inject: ['root'],
  props: ['task'],
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
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
      const task = this.task;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
    },

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.$store.state.GanttElastic.options.chart.expander;
      return (
        expander.display ||
        (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
      );
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
      if (!this.$store.state.GanttElastic.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Chart/Row/Task.vue?vue&type=script&lang=js&
 /* harmony default export */ var Row_Taskvue_type_script_lang_js_ = (Taskvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/Row/Task.vue





/* normalize component */

var Task_component = normalizeComponent(
  Row_Taskvue_type_script_lang_js_,
  Taskvue_type_template_id_e9c23eca_render,
  Taskvue_type_template_id_e9c23eca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Task_api; }
Task_component.options.__file = "src/components/Chart/Row/Task.vue"
/* harmony default export */ var Task = (Task_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&
var Milestonevue_type_template_id_3013006c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-milestone-wrapper",
      style: _vm.root.style(
        "chart-row-bar-wrapper",
        "chart-row-milestone-wrapper",
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
              style: _vm.root.style(
                "chart-expander",
                "chart-expander--milestone",
                _vm.task.style["chart-expander"]
              ),
              attrs: {
                x:
                  _vm.task.x -
                  _vm.$store.state.GanttElastic.options.chart.expander.offset -
                  _vm.$store.state.GanttElastic.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.$store.state.GanttElastic.options.row.height -
                    _vm.$store.state.GanttElastic.options.chart.expander.size) /
                    2,
                width:
                  _vm.$store.state.GanttElastic.options.chart.expander.size,
                height:
                  _vm.$store.state.GanttElastic.options.chart.expander.size
              }
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.$store.state.GanttElastic.options.chart.expander
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
          style: _vm.root.style(
            "chart-row-bar",
            "chart-row-milestone",
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
            style: _vm.root.style(
              "chart-row-bar-polygon",
              "chart-row-milestone-polygon",
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
      _vm.$store.state.GanttElastic.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e()
    ],
    1
  )
}
var Milestonevue_type_template_id_3013006c_staticRenderFns = []
Milestonevue_type_template_id_3013006c_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Milestone',
  components: {
    ChartText: Text,
    ProgressBar: ProgressBar,
    Expander: Expander
  },
  inject: ['root'],
  props: ['task'],
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
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${this.task.width} ${this.task.height}`;
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
    },

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.$store.state.GanttElastic.options.chart.expander;
      return (
        expander.display ||
        (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
      );
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
      if (!this.$store.state.GanttElastic.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js&
 /* harmony default export */ var Row_Milestonevue_type_script_lang_js_ = (Milestonevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/Row/Milestone.vue





/* normalize component */

var Milestone_component = normalizeComponent(
  Row_Milestonevue_type_script_lang_js_,
  Milestonevue_type_template_id_3013006c_render,
  Milestonevue_type_template_id_3013006c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Milestone_api; }
Milestone_component.options.__file = "src/components/Chart/Row/Milestone.vue"
/* harmony default export */ var Milestone = (Milestone_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&
var Projectvue_type_template_id_077bbd73_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-project-wrapper",
      style: _vm.root.style(
        "chart-row-bar-wrapper",
        _vm.root.style("chart-row-project-wrapper"),
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
              style: _vm.root.style(
                "chart-expander",
                "chart-expander--project",
                _vm.task.style["chart-expander"]
              ),
              attrs: {
                x:
                  _vm.task.x -
                  _vm.$store.state.GanttElastic.options.chart.expander.offset -
                  _vm.$store.state.GanttElastic.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.$store.state.GanttElastic.options.row.height -
                    _vm.$store.state.GanttElastic.options.chart.expander.size) /
                    2,
                width:
                  _vm.$store.state.GanttElastic.options.chart.expander.size,
                height:
                  _vm.$store.state.GanttElastic.options.chart.expander.size
              }
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.$store.state.GanttElastic.options.chart.expander
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
          style: _vm.root.style(
            "chart-row-bar",
            "chart-row-project",
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
            style: _vm.root.style(
              "chart-row-bar-polygon",
              "chart-row-project-polygon",
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
      _vm.$store.state.GanttElastic.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e()
    ],
    1
  )
}
var Projectvue_type_template_id_077bbd73_staticRenderFns = []
Projectvue_type_template_id_077bbd73_render._withStripped = true


// CONCATENATED MODULE: ./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Project',
  components: {
    ChartText: Text,
    ProgressBar: ProgressBar,
    Expander: Expander
  },
  inject: ['root'],
  props: ['task'],
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
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${this.task.width} ${this.task.height}`;
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
      const expander = this.$store.state.GanttElastic.options.chart.expander;
      return (
        expander.display ||
        (expander.displayIfTaskListHidden && !this.$store.state.GanttElastic.options.taskList.display)
      );
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
      if (!this.$store.state.GanttElastic.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/Chart/Row/Project.vue?vue&type=script&lang=js&
 /* harmony default export */ var Row_Projectvue_type_script_lang_js_ = (Projectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/Row/Project.vue





/* normalize component */

var Project_component = normalizeComponent(
  Row_Projectvue_type_script_lang_js_,
  Projectvue_type_template_id_077bbd73_render,
  Projectvue_type_template_id_077bbd73_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Project_api; }
Project_component.options.__file = "src/components/Chart/Row/Project.vue"
/* harmony default export */ var Project = (Project_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Chartvue_type_script_lang_js_ = ({
  name: 'Chart',
  components: {
    Grid: Grid,
    DependencyLines: DependencyLines,
    Calendar: Calendar,
    Task: Task,
    Milestone: Milestone,
    Project: Project,
    DaysHighlight: DaysHighlight
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
    this.$store.commit(this.root.updateOptionsMut, {
      refs: {
        chart: this.$refs.chart,
        chartGraph: this.$refs.chartGraph
      }
    });
  },

  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      return this.$store.state.GanttElastic.options.width;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.$store.state.GanttElastic.options.height;
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${Math.round(this.getWidth)} ${this.$store.state.GanttElastic.options.allVisibleTasksHeight}`;
    }
  }
});

// CONCATENATED MODULE: ./src/components/Chart/Chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chart_Chartvue_type_script_lang_js_ = (Chartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chart/Chart.vue





/* normalize component */

var Chart_component = normalizeComponent(
  Chart_Chartvue_type_script_lang_js_,
  Chartvue_type_template_id_67c3f5cd_render,
  Chartvue_type_template_id_67c3f5cd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Chart_api; }
Chart_component.options.__file = "src/components/Chart/Chart.vue"
/* harmony default export */ var Chart = (Chart_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var MainViewvue_type_script_lang_js_ = ({
  name: 'MainView',
  components: {
    TaskList: TaskList,
    Chart: Chart
  },
  inject: ['root'],
  props: ['tasks', 'options'],
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
    this.$store.commit(this.root.updateOptionsMut, {
      refs: {
        mainView: this.$refs.mainView,
        svgChart: this.$refs.svgChart,
        chartContainer: this.$refs.chartContainer,
        taskList: this.$refs.taskList,
        chartScrollContainerHorizontal: this.$refs.chartScrollContainerHorizontal,
        chartScrollContainerVertical: this.$refs.chartScrollContainerVertical
      }
    });
    document.addEventListener('mouseup', this.chartMouseUp.bind(this));
    document.addEventListener('mousemove', this.chartMouseMove.bind(this));
    document.addEventListener('touchmove', this.chartMouseMove.bind(this));
    document.addEventListener('touchend', this.chartMouseUp.bind(this));
  },
  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      let width = this.$store.state.GanttElastic.options.clientWidth;
      if (width < 0) {
        return 0;
      }
      return width;
    },

    /**
     * Get margin left
     *
     * @returns {string}
     */
    getMarginLeft() {
      if (!this.$store.state.GanttElastic.options.taskList.display) {
        return '0px';
      }
      return this.$store.state.GanttElastic.options.taskList.finalWidth + 'px';
    },

    /**
     * Get vertical style
     *
     * @returns {object}
     */
    verticalStyle() {
      return {
        width: this.$store.state.GanttElastic.options.scrollBarHeight + 'px',
        'margin-left': -this.$store.state.GanttElastic.options.scrollBarHeight + 'px',
        height: this.$store.state.GanttElastic.options.rowsHeight + 'px',
        'margin-top':
          this.$store.state.GanttElastic.options.calendar.height +
          this.$store.state.GanttElastic.options.calendar.gap +
          'px'
      };
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      if (this.$store.state.GanttElastic.options.clientWidth) {
        return `0 0 ${this.$store.state.GanttElastic.options.clientWidth -
          this.$store.state.GanttElastic.options.scrollBarHeight} ${this.$store.state.GanttElastic.options.height}`;
      }
      return `0 0 0 ${this.$store.state.GanttElastic.options.height}`;
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
      this.$store.commit(this.root.updateOptionsMut, { scroll: { scrolling: true } });
    },

    /**
     * Chart mouseup event handler
     * Deactivates drag scrolling mode
     */
    chartMouseUp(ev) {
      this.$store.commit(this.root.updateOptionsMut, { scroll: { scrolling: false } });
    },

    /**
     * Chart mousemove event handler
     * When in drag scrolling mode this method calculate scroll movement
     */
    chartMouseMove(ev) {
      if (this.$store.state.GanttElastic.options.scroll.scrolling) {
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
          x = this.mousePos.currentX + movementX * this.$store.state.GanttElastic.options.scroll.dragXMoveMultiplier;
        } else {
          x = horizontal.scrollLeft - movementX * this.$store.state.GanttElastic.options.scroll.dragXMoveMultiplier;
        }
        horizontal.scrollLeft = x;
        if (touch) {
          y = this.mousePos.currentY + movementY * this.$store.state.GanttElastic.options.scroll.dragYMoveMultiplier;
        } else {
          y = vertical.scrollTop - movementY * this.$store.state.GanttElastic.options.scroll.dragYMoveMultiplier;
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

// CONCATENATED MODULE: ./src/components/MainView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainViewvue_type_script_lang_js_ = (MainViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MainView.vue





/* normalize component */

var MainView_component = normalizeComponent(
  components_MainViewvue_type_script_lang_js_,
  MainViewvue_type_template_id_0bc4212e_render,
  MainViewvue_type_template_id_0bc4212e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MainView_api; }
MainView_component.options.__file = "src/components/MainView.vue"
/* harmony default export */ var MainView = (MainView_component.exports);
// CONCATENATED MODULE: ./src/style.js
/**
 * @fileoverview Styles for gantt-elastic
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */
const fontSize = '12px';
const fontFamily = 'Arial, sans-serif';
/* harmony default export */ var src_style = ({
  '*': {
    'box-sizing': 'border-box'
  },
  'main-view': {
    background: '#FFFFFF'
  },
  'main-container-wrapper': {
    overflow: 'hidden'
  },
  'main-container': {
    float: 'left',
    'max-width': '100%'
  },
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
    display: 'flex'
  },
  'calendar-row--month': {},
  'calendar-row--day': {},
  'calendar-row--hour': {},
  'calendar-row-rect': {
    background: 'transparent',
    'border-width': '0px', // Calendar
    'border-right-width': '1px',
    'border-color': '#dadada',
    'border-style': 'solid',
    'flex-shrink': '0'
  },
  'calendar-row-text': {
    'font-family': fontFamily, // GanttElastic
    'font-size': fontSize, //GanttElastic
    color: '#606060',
    'text-align': 'center'
  },
  'calendar-row-rect--month': {
    'border-top': '1px solid #dadada'
  },
  'calendar-row-text--month': {},
  'calendar-row-rect--day': {},
  'calendar-row-text--day': {},
  'calendar-row-rect--hour': {
    'border-bottom': '1px solid #dadada'
  },
  'calendar-row-text--hour': {},
  'task-list-wrapper': {},
  'task-list': { background: 'transparent', 'border-color': '#eee' },
  'task-list-header': { display: 'flex', 'user-select': 'none', 'vertical-align': 'middle' },
  'task-list-header-column': {
    border: '1px solid #00000050',
    'border-top': 'none',
    'border-right': 'none',
    'box-sizing': 'border-box',
    display: 'flex',
    background: '#f3f5f7',
    'border-color': 'transparent'
  },
  'task-list-expander-wrapper': {
    display: 'inline-flex',
    'flex-shrink': '0',
    'box-sizing': 'border-box',
    margin: '0px 0px 0px 10px'
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
});

// CONCATENATED MODULE: ./src/GanttElastic.vuex.js

const GanttElasticVuexModule = {
  state: {
    tasks: [],
    options: {
      scrollBarHeight: 0,
      allVisibleTasksHeight: 0,
      refs: {},
      tasksById: {},
      times: {}
    }
  },
  mutations: {
    /**
     * Update tasks
     */
    ['GanttElastic/updateTasks'](state, tasks) {
      state.tasks = tasks.map(task => mergeDeepReactive({}, task));
    },

    /**
     * Update task
     */
    ['GanttElastic/updateTask'](state, task) {
      for (let index = 0, len = state.tasks.length; index < len; index++) {
        const current = state.tasks[index];
        if (current.id === task.id) {
          mergeDeepReactive(state.tasks[index], task);
        }
      }
    },

    /**
     * Update options
     */
    ['GanttElastic/updateOptions'](state, payload) {
      state.options = mergeDeepReactive(state.options, payload);
    }
  }
};
window.GanttElasticVuexModule = GanttElasticVuexModule;
/* harmony default export */ var GanttElastic_vuex = (GanttElasticVuexModule);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/**
 * Helper function to fill out empty options in user settings
 *
 * @param {object} userOptions - initial user options that will merge with those below
 * @returns {object} merged options
 */
function getOptions(userOptions) {
  let localeCode = 'en';
  if (typeof userOptions.locale !== 'undefined' && typeof userOptions.locale.code === 'string') {
    localeCode = userOptions.locale.code;
  }
  return {
    style: src_style,
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
    rowsHeight: 0,
    allVisibleTasksHeight: 0,
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
      firstTime: 0,
      lastTime: 0,
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
      hours: [],
      days: [],
      months: [],
      workingDays: [1, 2, 3, 4, 5],
      gap: 6,
      height: 0,
      hour: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('HH:mm');
          },
          medium(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('HH:mm');
          },
          short(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('HH');
          }
        }
      },
      day: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          long(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('DD dddd');
          },
          medium(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('DD ddd');
          },
          short(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('DD');
          }
        }
      },
      month: {
        height: 20,
        display: true,
        widths: [],
        maxWidths: {},
        format: {
          short(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('MM');
          },
          medium(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format("MMM 'YY");
          },
          long(date) {
            return dayjs_min_default()(date)
              .locale(localeCode)
              .format('MMMM YYYY');
          }
        }
      }
    },
    locale: {
      code: 'en',
      Now: 'Now',
      'X-Scale': 'Zoom-X',
      'Y-Scale': 'Zoom-Y',
      'Task list width': 'Task list',
      'Before/After': 'Expand',
      'Display task list': 'Show task list'
      /*weekdays: 'Niedziela_Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota'.split('_'),
      weekdaysShort: 'Ndz_Pon_Wt_Śr_Czw_Pt_Sob'.split('_'),
      weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
      months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split(
        '_'
      ),
      ordinal: n => `${n}.`,
      weekStart: 1,
      relativeTime: {
        future: 'za %s',
        past: 'po %s',
        s: 'kilka sekund',
        m: 'minuta',
        mm: '%d minut',
        h: 'godzina',
        hh: '%d godzin',
        d: 'tydzień',
        dd: '%d tygodni',
        M: 'miesiąc',
        MM: '%d miesięcy',
        y: 'rok',
        yy: '%d lat'
      }*/
    }
  };
}
/**
 * Helper function to determine if specified variable is an object
 *
 * @param {any} item
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
        mergeDeep(target[key], source[key]);
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
 */
function isObservable(obj) {
  return obj.hasOwnProperty('__ob__');
}

/**
 * Same as above but with reactivity in mind
 *
 * @param {object} target
 * @params {object} sources
 * @returns {object}
 */
function mergeDeepReactive(target, ...sources) {
  if (!sources.length) {
    if (!isObservable(target)) {
      return external_Vue_default.a.observable(target);
    }
    return target;
  }
  if (!isObservable(target)) {
    target = external_Vue_default.a.observable(target);
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          if (isObservable(source[key])) {
            target[key] = source[key];
          } else {
            target[key] = {};
          }
        }
        mergeDeepReactive(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        external_Vue_default.a.set(target, key, source[key]);
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key];
        }
      } else {
        external_Vue_default.a.set(target, key, source[key]);
      }
    }
  }
  return mergeDeepReactive(target, ...sources);
}

/**
 * Check if objects or arrays are equal by comparing nested values
 *
 * @param {object|array} left
 * @param {object|array} right
 *
 * @returns {boolean}
 */
function equalDeep(left, right) {
  if (typeof right !== typeof left) {
    return false;
  }
  if (Array.isArray(left)) {
    if (left.length !== right.length) {
      return false;
    }
    for (let [index, value] of left.entries()) {
      if (typeof value !== typeof right[index]) {
        return false;
      }
      if (isObject(value) || Array.isArray(value)) {
        if (!equalDeep(value, right[index])) {
          return false;
        }
      } else if (value !== right[index]) {
        return false;
      }
    }
  } else {
    for (let key in left) {
      if (typeof left[key] !== typeof right[key]) {
        return false;
      }
      if (isObject(left[key]) || Array.isArray(left[key])) {
        if (!equalDeep(left[key], right[key])) {
          return false;
        }
      } else if (left[key] !== right[key]) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Synchronize properties that exist in left object with values from right
 *
 * @param {object|array} left
 * @param {object|array} right
 *
 * @returns {object|array}
 */
function synchronizeDeep(left, right) {
  for (let key in left) {
    if (isObject(right[key])) {
      left[key] = synchronizeDeep(left[key], right[key]);
    } else if (Array.isArray(right[key])) {
      left[key] = right[key].map((item, index) => {
        if (isObject(item)) {
          // we predict that array want change inside gantt elastic itself
          item = synchronizeDeep(mergeDeep({}, left[key][index]), item);
        }
        return item;
      });
    } else {
      left[key] = right[key];
    }
  }
  return left;
}

const styleCache = {};
let globalVisibleTasks = [];

/**
 * GanttElastic
 * Main vue component
 */
const GanttElastic = {
  name: 'GanttElastic',
  components: {
    MainView: MainView
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
      updateTasksMut: 'GanttElastic/updateTasks',
      updateTaskMut: 'GanttElastic/updateTask',
      updateOptionsMut: 'GanttElastic/updateOptions'
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
      return this.$store.commit(this.updateOptionsMut, { scrollBarHeight: noScroll - withScroll });
    },

    /**
     * Get style for specified class
     *
     * @param {object|string} mergeWith - merge multiple styles by className (without gantt-elastic__) or object with props
     * @returns {object}
     */
    style(...mergeWith) {
      const index = JSON.stringify(mergeWith);
      if (typeof styleCache[index] !== 'undefined') {
        return styleCache[index];
      }
      let merged = this.$store.state.GanttElastic.options.style['*'];
      mergeWith.forEach(objOrClassName => {
        if (typeof objOrClassName === 'string') {
          merged = Object.assign({}, merged, this.$store.state.GanttElastic.options.style[objOrClassName]);
        } else if (typeof objOrClassName === 'object') {
          merged = Object.assign({}, merged, objOrClassName);
        } else if (typeof objOrClassName === 'function') {
          merged = Object.assign({}, objOrClassName());
        }
      });
      styleCache[index] = merged;
      return merged;
    },

    /**
     * Fill out empty task properties and make it reactive
     */
    refreshTasks(tasks) {
      tasks = tasks.map(task => {
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
        if (typeof task.parents === 'undefined') {
          task.parents = [];
        }
        if (typeof task.parent === 'undefined') {
          task.parent = null;
        }
        if (typeof task.durationMs === 'undefined') {
          task.durationMs = task.duration * 1000;
        }
        return task;
      });
      return tasks;
    },

    /**
     * Map tasks
     *
     * @param {Array} tasks
     * @param {Object} options
     */
    mapTasks(tasks, options) {
      return tasks.map(task => {
        return {
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
      });
    },

    /**
     * Initialize component
     */
    initialize(itsUpdate = '', data = null) {
      let tasks;
      if (itsUpdate === '' || itsUpdate === 'tasks') {
        tasks = external_Vue_default.a.observable(
          this.tasks.map(task => {
            return this.mergeDeepReactive({}, task);
          })
        );
        tasks = tasks.map(task => {
          task.startTime = dayjs_min_default()(task.start).valueOf();
          task.durationMs = task.duration * 1000;
          task.endTime = task.startTime + task.durationMs;
          return task;
        });
        tasks = this.refreshTasks(tasks);
        const rootTask = {
          id: null,
          parent: null,
          root: true,
          parents: [],
          children: [],
          allChildren: []
        };
        tasks = this.resetTaskTree(tasks);
        tasks = this.makeTaskTree(rootTask, tasks).allChildren.map(taskId => {
          return tasks[tasks.findIndex(task => task.id === taskId)];
        });
        this.$store.commit(this.updateTasksMut, tasks);
      }

      let options;
      if (itsUpdate === '') {
        options = this.mergeDeep({}, getOptions(this.options), this.options);
      } else if (itsUpdate === 'options') {
        options = this.mergeDeep({}, this.$store.state.GanttElastic.options, this.options);
      }
      if (itsUpdate === '' || itsUpdate === 'options') {
        options.tasksById = {};
        dayjs_min_default.a.locale(options.locale, null, true);
        options.taskList.columns = options.taskList.columns.map((column, index) => {
          const columnOptions = {
            thresholdPercent: 100,
            widthFromPercentage: 0,
            finalWidth: 0
          };
          if (typeof column.height === 'undefined') {
            columnOptions.height = 0;
          }
          if (typeof column.style === 'undefined') {
            columnOptions.style = {};
          }
          columnOptions._id = `${index}-${column.label}`;
          return this.mergeDeep({}, column, columnOptions);
        });
        if (itsUpdate === '') {
          options.ctx = document.createElement('canvas').getContext('2d');
        }
        this.$store.commit(this.updateOptionsMut, options);
        this.calculateTaskListColumnsDimensions();
        this.getScrollBarHeight();
        this.$store.commit(this.updateOptionsMut, {
          outerHeight:
            this.$store.state.GanttElastic.options.height + this.$store.state.GanttElastic.options.scrollBarHeight
        });
      }

      this.globalOnResize();
    },

    /**
     * Get calendar rows outer height
     *
     * @returns {int}
     */
    getCalendarHeight() {
      return (
        this.$store.state.GanttElastic.options.calendar.height +
        this.style('calendar-row')['border-width'] +
        this.$store.state.GanttElastic.options.calendar.gap
      );
    },

    /**
     * Sum all calendar rows height and return result
     *
     * @returns {int}
     */
    calculateCalendarDimensions() {
      let height = 0;
      if (
        this.$store.state.GanttElastic.options.calendar.hour.display &&
        this.$store.state.GanttElastic.options.calendar.hours.length > 0
      ) {
        height += this.$store.state.GanttElastic.options.calendar.hour.height;
      }
      if (
        this.$store.state.GanttElastic.options.calendar.day.display &&
        this.$store.state.GanttElastic.options.calendar.days.length > 0
      ) {
        height += this.$store.state.GanttElastic.options.calendar.day.height;
      }
      if (
        this.$store.state.GanttElastic.options.calendar.month.display &&
        this.$store.state.GanttElastic.options.calendar.months.length > 0
      ) {
        height += this.$store.state.GanttElastic.options.calendar.month.height;
      }
      this.$store.commit(this.updateOptionsMut, { calendar: { height } });
      return height;
    },

    /**
     * Get maximal level of nested task children
     *
     * @returns {int}
     */
    getMaximalLevel() {
      let maximalLevel = 0;
      this.$store.state.GanttElastic.tasks.forEach(task => {
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
        this.getMaximalLevel() * this.$store.state.GanttElastic.options.taskList.expander.padding +
        this.$store.state.GanttElastic.options.taskList.expander.margin
      );
    },

    /**
     * Synchronize scrollTop property when row height is changed
     */
    syncScrollTop() {
      if (this.$store.state.GanttElastic.options.refs.taskListItems) {
        const scrollTop = this.$store.state.GanttElastic.options.refs.chartGraph.scrollTop;
        this.$store.commit(this.updateOptionsMut, {
          scroll: { top: scrollTop }
        });
        this.$store.state.GanttElastic.options.refs.taskListItems.scrollTop = scrollTop;
        this.$store.state.GanttElastic.options.refs.chartScrollContainerVertical.scrollTop = scrollTop;
      }
    },

    /**
     * Calculate task list columns dimensions
     */
    calculateTaskListColumnsDimensions(columns) {
      let final = 0;
      let percentage = 0;
      this.$store.state.GanttElastic.options.taskList.columns.forEach(column => {
        if (column.expander) {
          column.widthFromPercentage =
            ((this.getMaximalExpanderWidth() + column.width) / 100) *
            this.$store.state.GanttElastic.options.taskList.percent;
        } else {
          column.widthFromPercentage = (column.width / 100) * this.$store.state.GanttElastic.options.taskList.percent;
        }
        percentage += column.widthFromPercentage;
        column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100;
        final += column.finalWidth;
        column.height = this.getTaskHeight() - this.style('grid-line-horizontal')['stroke-width'];
      });
      this.$store.commit(this.updateOptionsMut, {
        taskList: {
          widthFromPercentage: percentage,
          finalWidth: final
        }
      });
      this.syncScrollTop();
    },

    /**
     * Reset task tree - which is used to create tree like structure inside task list
     */
    resetTaskTree(tasks) {
      for (let i = 0, len = tasks.length; i < len; i++) {
        let task = tasks[i];
        tasks[i] = Object.assign(task, {
          children: [],
          allChildren: [],
          parent: null,
          parents: []
        });
      }
      return tasks;
    },

    /**
     * Make task tree, after reset - look above
     *
     * @param {object} parent
     * @returns {object} tasks with children and parents
     */
    makeTaskTree(parent, tasks) {
      tasks.forEach(current => {
        if (current.parentId === parent.id) {
          if (parent.parents.length) {
            current.parents = parent.parents.map(parentId => parentId);
          }
          if (typeof parent.root === 'undefined') {
            current.parents.push(parent.id);
            current.parent = parent.id;
          } else {
            current.parents = [];
            current.parent = null;
          }
          current = this.makeTaskTree(current, tasks);
          parent.allChildren.push(current.id);
          parent.children.push(current.id);
          current.allChildren.forEach(childId => parent.allChildren.push(childId));
        }
      });
      return parent;
    },

    /**
     * Get task by id
     *
     * @param {any} taskId
     * @returns {object|null} task
     */
    getTask(taskId) {
      for (let i = 0, len = this.$store.state.GanttElastic.tasks.length; i < len; i++) {
        const current = this.$store.state.GanttElastic.tasks[i];
        if (current.id === taskId) {
          return current;
        }
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
      return this.$store.state.GanttElastic.tasks.filter(task => task.parent === taskId);
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
      return this.$store.state.GanttElastic.options.mainView.outerHTML;
    },

    /**
     * Get image
     *
     * @param {string} type image format
     * @returns {Promise} when resolved returns base64 image string of gantt
     */
    getImage(type = 'image/png') {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = this.$store.state.GanttElastic.options.mainView.clientWidth;
          canvas.height = this.$store.state.GanttElastic.options.rowsHeight;
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
        visibleTasks.length *
          (this.$store.state.GanttElastic.options.row.height +
            this.$store.state.GanttElastic.options.chart.grid.horizontal.gap * 2) +
        this.$store.state.GanttElastic.options.calendar.height +
        parseFloat(this.style('calendar-row-rect')['border-width']) * 2 +
        this.$store.state.GanttElastic.options.calendar.gap;
      if (outer) {
        height += this.$store.state.GanttElastic.options.scrollBarHeight;
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
          this.$store.state.GanttElastic.options.row.height +
          this.$store.state.GanttElastic.options.chart.grid.horizontal.gap * 2 +
          this.style('grid-line-horizontal')['stroke-width']
        );
      }
      return (
        this.$store.state.GanttElastic.options.row.height +
        this.$store.state.GanttElastic.options.chart.grid.horizontal.gap * 2
      );
    },

    /**
     * Get specified tasks height
     *
     * @returns {number}
     */
    getTasksHeight(visibleTasks, outer = false) {
      return visibleTasks.length * this.getTaskHeight();
    },

    /**
     * Convert time (in milliseconds) to pixel offset inside chart
     *
     * @param {int} ms
     * @returns {number}
     */
    timeToPixelOffsetX(ms) {
      let x = ms - this.$store.state.GanttElastic.options.times.firstTime;
      if (x) {
        x = x / this.$store.state.GanttElastic.options.times.timePerPixel;
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
      let offset = pixelOffsetX + this.style('grid-line-vertical')['stroke-width'] / 2;
      return (
        offset * this.$store.state.GanttElastic.options.times.timePerPixel +
        this.$store.state.GanttElastic.options.times.firstTime
      );
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
        (x + width + buffer >= this.$store.state.GanttElastic.options.scroll.chart.left &&
          x - buffer <= this.$store.state.GanttElastic.options.scroll.chart.right) ||
        (x - buffer <= this.$store.state.GanttElastic.options.scroll.chart.left &&
          x + width + buffer >= this.$store.state.GanttElastic.options.scroll.chart.right)
      );
    },

    /**
     * Chart scroll event handler
     *
     * @param {event} ev
     */
    onScrollChart(ev) {
      const horizontal = this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal;
      const vertical = this.$store.state.GanttElastic.options.refs.chartScrollContainerVertical;
      this._onScrollChart(horizontal.scrollLeft, vertical.scrollTop);
    },

    /**
     * After same as above but with different arguments - normalized
     *
     * @param {number} left
     * @param {number} top
     */
    _onScrollChart(left, top) {
      const chartContainerWidth = this.$store.state.GanttElastic.options.refs.chartContainer.clientWidth;
      const options = {
        scroll: {
          chart: {
            left: left,
            right: left + chartContainerWidth,
            percent: (left / this.$store.state.GanttElastic.options.times.totalViewDurationPx) * 100,
            top: top,
            time: this.pixelOffsetXToTime(left),
            timeCenter: this.pixelOffsetXToTime(left + chartContainerWidth / 2),
            dateTime: {
              left: this.$store.state.GanttElastic.options.scroll.chart.time,
              right: this.pixelOffsetXToTime(left + this.$store.state.GanttElastic.options.refs.chart.clientWidth)
            }
          }
        }
      };
      this.$store.commit(this.updateOptionsMut, options);
      this.scrollTo(left, top);
    },

    /**
     * Scroll current chart to specified time (in milliseconds)
     *
     * @param {int} time
     */
    scrollToTime(time) {
      let pos = this.timeToPixelOffsetX(time);
      const chartContainerWidth = this.$store.state.GanttElastic.options.refs.chartContainer.clientWidth;
      pos = pos - chartContainerWidth / 2;
      if (pos > this.$store.state.GanttElastic.options.width) {
        pos = this.$store.state.GanttElastic.options.width - chartContainerWidth;
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
        this.$store.state.GanttElastic.options.refs.chartContainer.scrollLeft = left;
        this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal.scrollLeft = left;
        this.$store.commit(this.updateOptionsMut, { scroll: { left } });
      }
      if (top !== null) {
        this.$store.state.GanttElastic.options.refs.chartScrollContainerVertical.scrollTop = top;
        this.$store.state.GanttElastic.options.refs.chartGraph.scrollTop = top;
        this.$store.state.GanttElastic.options.refs.taskListItems.scrollTop = top;
        this.$store.commit(this.updateOptionsMut, { scroll: { top } });
      }
    },

    /**
     * After some actions like time zoom change we need to recompensate scroll position
     * so as a result everything will be in same place
     */
    fixScrollPos() {
      this.$nextTick(() => {
        this.scrollToTime(this.$store.state.GanttElastic.options.scroll.chart.timeCenter);
      });
    },

    /**
     * Mouse wheel event handler
     */
    onWheelChart(ev) {
      if (!ev.shiftKey) {
        let top = this.$store.state.GanttElastic.options.scroll.top + ev.deltaY;
        const chartClientHeight = this.$store.state.GanttElastic.options.rowsHeight;
        const scrollHeight = this.$store.state.GanttElastic.options.refs.chartGraph.scrollHeight - chartClientHeight;
        if (top < 0) {
          top = 0;
        } else if (top > scrollHeight) {
          top = scrollHeight;
        }
        this.scrollTo(null, top);
      } else {
        let left = this.$store.state.GanttElastic.options.scroll.left + ev.deltaY;
        const chartClientWidth = this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth =
          this.$store.state.GanttElastic.options.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
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
      this.$store.commit(this.updateOptionsMut, { times: { timeZoom: timeZoom } });
      this.recalculateTimes();
      this.calculateSteps();
      this.calculateCalendarDimensions();
      this.fixScrollPos();
    },

    /**
     * Row height change event handler
     */
    onRowHeightChange(height) {
      this.$store.commit(this.updateOptionsMut, { row: { height: height } });
      this.calculateTaskListColumnsDimensions();
    },

    /**
     * Scope change event handler
     */
    onScopeChange(value) {
      this.$store.commit(this.updateOptionsMut, { scope: { before: value, after: value } });
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },

    /**
     * Task list width change event handler
     */
    onTaskListWidthChange(value) {
      this.$store.commit(this.updateOptionsMut, { taskList: { percent: value } });
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Task list column width change event handler
     */
    onTaskListColumnWidthChange(value) {
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Listen to speciefied event names
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
      let max = this.$store.state.GanttElastic.options.times.timeScale * 60;
      let min = this.$store.state.GanttElastic.options.times.timeScale;
      let steps = max / min;
      let percent = this.$store.state.GanttElastic.options.times.timeZoom / 100;
      const timePerPixel =
        this.$store.state.GanttElastic.options.times.timeScale * steps * percent +
        Math.pow(2, this.$store.state.GanttElastic.options.times.timeZoom);
      const totalViewDurationMs = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTime).diff(
        dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime),
        'milisecods'
      );
      const totalViewDurationPx = totalViewDurationMs / timePerPixel;
      this.$store.commit(this.updateOptionsMut, {
        times: {
          timePerPixel,
          totalViewDurationMs,
          totalViewDurationPx
        },
        width: totalViewDurationPx + this.style('grid-line-vertical')['stroke-width']
      });
    },

    /**
     * Initialize time variables
     */
    initTimes() {
      const firstTime = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTaskTime)
        .locale(this.locale)
        .startOf('day')
        .subtract(this.$store.state.GanttElastic.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      const lastTime = dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTaskTime)
        .locale(this.locale)
        .endOf('day')
        .add(this.$store.state.GanttElastic.options.scope.after, 'days')
        .endOf('day')
        .valueOf();
      this.$store.commit(this.updateOptionsMut, {
        times: {
          firstTime,
          lastTime
        }
      });
      this.recalculateTimes();
    },

    /**
     * Calculate steps
     * Steps are days by default
     * Each step contain information about time offset and pixel offset of this time inside gantt chart
     */
    calculateSteps() {
      const steps = [];
      const lastMs = this.$store.state.GanttElastic.options.times.lastTime;
      const currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
      steps.push({
        time: currentDate.valueOf(),
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (
        let currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime)
          .add(1, this.$store.state.GanttElastic.options.times.stepDuration)
          .startOf('day');
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.$store.state.GanttElastic.options.times.stepDuration).startOf('day')
      ) {
        const offsetMs = currentDate.diff(this.$store.state.GanttElastic.options.times.firstTime, 'milisecods');
        const offsetPx = offsetMs / this.$store.state.GanttElastic.options.times.timePerPixel;
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
        ms: this.$store.state.GanttElastic.options.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.$store.state.GanttElastic.options.times.totalViewDurationPx - lastStep.offset.px
      };
      this.$store.commit(this.updateOptionsMut, { times: { steps } });
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
      const options = this.$store.state.GanttElastic.options;
      const newOptions = {
        calendar: {
          hour: {
            widths: []
          }
        }
      };
      const style = this.style('calendar-row-text', 'calendar-row-text--hour');
      options.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let currentDate = dayjs_min_default()('2018-01-01T00:00:00'); // any date will be good for hours
      let maxWidths = {};
      Object.keys(options.calendar.hour.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let hour = 0; hour < 24; hour++) {
        const widths = {
          hour
        };
        Object.keys(options.calendar.hour.format).forEach(formatName => {
          widths[formatName] = options.ctx.measureText(
            options.calendar.hour.format[formatName](currentDate.toDate())
          ).width;
        });
        newOptions.calendar.hour.widths.push(widths);
        Object.keys(options.calendar.hour.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'hour');
      }
      newOptions.calendar.hour.maxWidths = maxWidths;
      this.$store.commit(this.updateOptionsMut, newOptions);
    },

    /**
     * Compute calendar days column widths basing on text widths
     */
    computeDayWidths() {
      const options = this.$store.state.GanttElastic.options;
      const newOptions = {
        calendar: {
          day: {
            widths: []
          }
        }
      };
      const style = this.style('calendar-row-text', 'calendar-row-text--day');
      options.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let currentDate = dayjs_min_default()(options.times.steps[0].date);
      let maxWidths = {};
      Object.keys(options.calendar.day.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let day = 0, daysLen = options.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(options.calendar.day.format).forEach(formatName => {
          widths[formatName] = options.ctx.measureText(
            options.calendar.day.format[formatName](currentDate.toDate())
          ).width;
        });
        newOptions.calendar.day.widths.push(widths);
        Object.keys(options.calendar.day.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'day');
      }
      newOptions.calendar.day.maxWidths = maxWidths;
      this.$store.commit(this.updateOptionsMut, newOptions);
    },

    /**
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths() {
      const options = this.$store.state.GanttElastic.options;
      const newOptions = {
        calendar: {
          month: {
            widths: []
          }
        }
      };
      const style = this.style('calendar-row-text', 'calendar-row-text--month');
      options.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let maxWidths = {};
      Object.keys(options.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      let currentDate = dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime);
      const monthsCount = Math.ceil(
        dayjs_min_default()(this.$store.state.GanttElastic.options.times.lastTime).diff(
          dayjs_min_default()(this.$store.state.GanttElastic.options.times.firstTime),
          'months',
          true
        )
      );
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(options.calendar.month.format).forEach(formatName => {
          widths[formatName] = options.ctx.measureText(
            options.calendar.month.format[formatName](currentDate.toDate())
          ).width;
        });
        newOptions.calendar.month.widths.push(widths);
        Object.keys(options.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'month');
      }
      newOptions.calendar.month.maxWidths = maxWidths;
      this.$store.commit(this.updateOptionsMut, newOptions);
    },

    /**
     * Prepare time and date variables for gantt
     */
    prepareDates() {
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      for (let index = 0, len = this.$store.state.GanttElastic.tasks.length; index < len; index++) {
        let task = this.$store.state.GanttElastic.tasks[index];
        const newProps = {
          id: task.id
        };
        newProps.startTime = dayjs_min_default()(task.start).valueOf();
        newProps.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
        }
        if (newProps.startTime + newProps.durationMs > lastTaskTime) {
          lastTaskTime = newProps.startTime + newProps.durationMs;
        }
        this.$store.commit(this.updateTaskMut, newProps);
      }
      const firstTime = dayjs_min_default()(firstTaskTime)
        .locale(this.locale)
        .startOf('day')
        .subtract(this.$store.state.GanttElastic.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      const lastTime = dayjs_min_default()(lastTaskTime)
        .locale(this.locale)
        .endOf('day')
        .add(this.$store.state.GanttElastic.options.scope.after, 'days')
        .endOf('day')
        .valueOf();
      this.$store.commit(this.updateOptionsMut, {
        times: {
          firstTaskTime,
          lastTaskTime,
          firstTime,
          lastTime
        }
      });
    },

    /**
     * Setup and calculate everything
     */
    setup(itsUpdate = '', data = null) {
      this.initialize(itsUpdate, data);
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.$emit('calendar-recalculate');
      const width = this.$store.state.GanttElastic.options.taskList.columns.reduce(
        (prev, current) => {
          return { width: prev.width + current.width };
        },
        { width: 0 }
      ).width;
      this.$store.commit(this.updateOptionsMut, { taskList: { width } });
    },

    /**
     * Global resize event (from window.addEventListener)
     */
    globalOnResize(ev) {
      if (typeof this.$el === 'undefined' || !this.$el) {
        return;
      }
      const options = {
        clientWidth: this.$el.clientWidth,
        taskList: {
          columns: []
        }
      };
      if (
        this.$store.state.GanttElastic.options.taskList.widthFromPercentage >
        (this.$store.state.GanttElastic.options.clientWidth / 100) *
          this.$store.state.GanttElastic.options.taskList.widthThreshold
      ) {
        const diff =
          this.$store.state.GanttElastic.options.taskList.widthFromPercentage -
          (this.$store.state.GanttElastic.options.clientWidth / 100) *
            this.$store.state.GanttElastic.options.taskList.widthThreshold;
        let diffPercent = 100 - (diff / this.$store.state.GanttElastic.options.taskList.widthFromPercentage) * 100;
        if (diffPercent < 0) {
          diffPercent = 0;
        }
        options.taskList.columns = this.$store.state.GanttElastic.options.taskList.columns.map(column => {
          column.thresholdPercent = diffPercent;
          return column;
        });
      } else {
        options.taskList.columns = this.$store.state.GanttElastic.options.taskList.columns.map(column => {
          column.thresholdPercent = 100;
          return column;
        });
      }
      this.$store.commit(this.updateOptionsMut, options);
      this.calculateTaskListColumnsDimensions();
    }
  },

  computed: {
    /**
     * Getter for watcher
     */
    internalTasks() {
      return this.$store.state.GanttElastic.tasks.map(task => task);
    },

    /**
     * Getter for watcher
     */
    internalOptions() {
      return mergeDeep({}, this.$store.state.GanttElastic.options);
    },

    /**
     * Get visible tasks
     * Very important method which will bring us only those tasks that are visible inside gantt chart
     * For example when task is collapsed - children of this task are not visible - we should not render them
     */
    visibleTasks() {
      const visibleTasks = this.$store.state.GanttElastic.tasks.filter(task => this.isTaskVisible(task));
      const maxRows = visibleTasks.slice(0, this.$store.state.GanttElastic.options.maxRows);
      const options = {};
      options.rowsHeight = this.getTasksHeight(maxRows);
      let heightCompensation = 0;
      if (
        this.$store.state.GanttElastic.options.maxHeight &&
        options.rowsHeight > this.$store.state.GanttElastic.options.maxHeight
      ) {
        heightCompensation = options.rowsHeight - this.$store.state.GanttElastic.options.maxHeight;
        options.rowsHeight = this.$store.state.GanttElastic.options.maxHeight;
      }
      options.height = this.getHeight(maxRows) - heightCompensation;
      options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
      options.outerHeight = this.getHeight(maxRows, true) - heightCompensation;
      let len = visibleTasks.length;
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index];
        const props = { id: task.id };
        props.width =
          task.durationMs / this.$store.state.GanttElastic.options.times.timePerPixel -
          this.style('grid-line-vertical')['stroke-width'];
        if (props.width < 0) {
          props.width = 0;
        }
        props.height = this.$store.state.GanttElastic.options.row.height;
        props.x = this.timeToPixelOffsetX(task.startTime);
        props.y =
          (this.$store.state.GanttElastic.options.row.height +
            this.$store.state.GanttElastic.options.chart.grid.horizontal.gap * 2) *
            index +
          this.$store.state.GanttElastic.options.chart.grid.horizontal.gap;
        this.$store.commit(this.updateTaskMut, props);
      }
      this.$store.commit(this.updateOptionsMut, options);
      this.$nextTick(() => {
        this.syncScrollTop();
      });
      return visibleTasks;
    },

    /**
     * Get columns and compute dimensions on the fly
     */
    getTaskListColumns() {
      this.calculateTaskListColumnsDimensions();
      return this.$store.state.GanttElastic.options.taskList.columns;
    }
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created() {
    this.$store.registerModule('GanttElastic', GanttElastic_vuex);

    this.$watch('internalTasks', tasks => {
      const newTasks = tasks.map(task => {
        const source = this.tasks.find(sourceTask => sourceTask.id === task.id);
        const dest = synchronizeDeep(mergeDeep({}, source), task);
        return dest;
      });
      if (!equalDeep(this.tasks, newTasks)) {
        this.$emit('tasks-updated', newTasks);
      }
    });

    this.$watch('tasks', tasks => {
      const oldTasks = this.$store.state.GanttElastic.tasks.map((task, index) => {
        return synchronizeDeep(mergeDeep({}, this.tasks[index]), task);
      });
      const newTasks = tasks.map(task => mergeDeep({}, task));
      if (!equalDeep(newTasks, oldTasks)) {
        this.setup('tasks', newTasks);
      }
    });

    this.$watch('internalOptions', options => {
      const newOptions = synchronizeDeep(mergeDeep({}, this.options), this.$store.state.GanttElastic.options);
      if (!equalDeep(this.options, newOptions)) {
        this.$emit('options-updated', newOptions);
      }
    });

    this.$watch(
      'options',
      options => {
        const newOptions = mergeDeep({}, options);
        const oldOptions = mergeDeep({}, this.$store.state.GanttElastic.options);
        if (!equalDeep(newOptions, oldOptions)) {
          this.setup('options', newOptions);
        }
      },
      { deep: true }
    );

    this.$root.$emit('gantt-elastic-created', this);
    this.$emit('created', this);
    this.initializeEvents();
    this.setup();
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
    this.$store.commit(this.updateOptionsMut, { clientWidth: this.$el.clientWidth });
    window.addEventListener('resize', this.globalOnResize);
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
    window.removeEventListener('resize', this.globalOnResize);
    this.$emit('before-destroy');
  },

  /**
   * Emit event after gantt-elastic was destroyed
   */
  destroyed() {
    this.$emit('destroyed');
  }
};
/* harmony default export */ var GanttElasticvue_type_script_lang_js_ = (GanttElastic);

// CONCATENATED MODULE: ./src/GanttElastic.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_GanttElasticvue_type_script_lang_js_ = (GanttElasticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/GanttElastic.vue?vue&type=style&index=0&lang=css&
var GanttElasticvue_type_style_index_0_lang_css_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/GanttElastic.vue
/* concated harmony reexport mergeDeep */__webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* concated harmony reexport mergeDeepReactive */__webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });
/* concated harmony reexport equalDeep */__webpack_require__.d(__webpack_exports__, "equalDeep", function() { return equalDeep; });
/* concated harmony reexport synchronizeDeep */__webpack_require__.d(__webpack_exports__, "synchronizeDeep", function() { return synchronizeDeep; });






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

/* hot reload */
if (false) { var GanttElastic_api; }
GanttElastic_component.options.__file = "src/GanttElastic.vue"
/* harmony default export */ var src_GanttElastic = __webpack_exports__["default"] = (GanttElastic_component.exports);

/***/ }),
/* 8 */
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


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=GanttElastic.umd.js.map