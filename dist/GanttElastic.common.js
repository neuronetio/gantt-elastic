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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",a="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,h=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},f={padStart:d,padZoneStr:function(t){var n=Math.abs(t),e=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+d(e,2,"0")+":"+d(r,2,"0")},monthDiff:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,"months"),i=n-r<0,s=t.clone().add(e+(i?-1:1),"months");return Number(-(e+(n-r)/(i?r-s:s-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(o){return{M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t}[o]||String(o||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},$="en",l={};l[$]=c;var m=function(t){return t instanceof p},y=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),n&&(l[t]=n,r=t);else{var i=t.name;l[i]=t,r=i}return e||($=r),r},M=function(t,n){if(m(t))return t.clone();var e=n||{};return e.date=t,new p(e)},S=function(t,n){return M(t,{locale:n.$L})},D=f;D.parseLocale=y,D.isDayjs=m,D.wrapper=S;var p=function(){function c(t){this.parse(t)}var d=c.prototype;return d.parse=function(t){var n,e;this.$d=null===(n=t.date)?new Date(NaN):D.isUndefined(n)?new Date:n instanceof Date?n:"string"==typeof n&&/.*[^Z]$/i.test(n)&&(e=n.match(o))?new Date(e[1],e[2]-1,e[3]||1,e[5]||0,e[6]||0,e[7]||0,e[8]||0):new Date(n),this.init(t)},d.init=function(t){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||$},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=M(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return M(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<M(t)},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,c=!!D.isUndefined(o)||o,d=function(t,n){var e=S(new Date(h.$y,n,t),h);return c?e:e.endOf(i)},f=function(t,n){return S(h.toDate()[t].apply(h.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(n)),h)};switch(D.prettyUnit(t)){case a:return c?d(1,0):d(31,11);case u:return c?d(1,this.$M):d(0,this.$M+1);case s:return d(c?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case i:case"date":return f("setHours",0);case r:return f("setMinutes",1);case e:return f("setSeconds",2);case n:return f("setMilliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,c=D.prettyUnit(s),d=(h={},h[i]="setDate",h.date="setDate",h[u]="setMonth",h[a]="setFullYear",h[r]="setHours",h[e]="setMinutes",h[n]="setSeconds",h[t]="setMilliseconds",h)[c],f=c===i?this.$D+(o-this.$W):o;return this.$d[d]&&this.$d[d](f),this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.add=function(t,o){var h,c=this;t=Number(t);var d=D.prettyUnit(o),f=function(n,e){var r=c.set("date",1).set(n,e+t);return r.set("date",Math.min(c.$D,r.daysInMonth()))},$=function(n){var e=new Date(c.$d);return e.setDate(e.getDate()+n*t),S(e,c)};if(d===u)return f(u,this.$M);if(d===a)return f(a,this.$y);if(d===i)return $(1);if(d===s)return $(7);var l=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[d]||1,m=this.valueOf()+t*l;return S(m,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this,e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.padZoneStr(this.$d.getTimezoneOffset()),i=this.$locale(),s=i.weekdays,u=i.months,a=function(t,n,e,r){return t&&t[n]||e[n].substr(0,r)},o=function(t){return 0===n.$H?12:D.padStart(n.$H<13?n.$H:n.$H-12,"hh"===t?2:1,"0")};return e.replace(h,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):{YY:String(n.$y).slice(-2),YYYY:String(n.$y),M:String(n.$M+1),MM:D.padStart(n.$M+1,2,"0"),MMM:a(i.monthsShort,n.$M,u,3),MMMM:u[n.$M],D:String(n.$D),DD:D.padStart(n.$D,2,"0"),d:String(n.$W),dd:a(i.weekdaysMin,n.$W,s,2),ddd:a(i.weekdaysShort,n.$W,s,3),dddd:s[n.$W],H:String(n.$H),HH:D.padStart(n.$H,2,"0"),h:o(t),hh:o(t),a:n.$H<12?"am":"pm",A:n.$H<12?"AM":"PM",m:String(n.$m),mm:D.padStart(n.$m,2,"0"),s:String(n.$s),ss:D.padStart(n.$s,2,"0"),SSS:D.padStart(n.$ms,3,"0"),Z:r}[t]||r.replace(":","")})},d.diff=function(t,o,h){var c,d=D.prettyUnit(o),f=M(t),$=this-f,l=D.monthDiff(this,f);return l=(c={},c[a]=l/12,c[u]=l,c.quarter=l/3,c[s]=$/6048e5,c[i]=$/864e5,c[r]=$/36e5,c[e]=$/6e4,c[n]=$/1e3,c)[d]||$,h?l:D.absFloor(l)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,n){var e=this.clone();return e.$L=y(t,n,!0),e},d.clone=function(){return S(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},c}();return M.extend=function(t,n){return t(n,p,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[$],M});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(7).default
var update = add("c3e5085c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports
exports.i(__webpack_require__(5), "");

// module
exports.push([module.i, "\r\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".gantt-elastic__main-view svg{\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line, .gantt-elastic__grid-vertical-line{\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > *{\n  margin: 0px;\n}\n.gantt-elastic .p-2{\n  padding: 10rem;\n}\n.gantt-elastic__main-view-svg-container , .gantt-elastic__main-view-container{\n  overflow: hidden;\n  max-width:100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type{\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type{\n  border-bottom:1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container{\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value{\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
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
          staticClass: "gantt-elastic__svg-container-wrapper",
          style: _vm.root.style("svg-container-wrapper", {
            height: _vm.root.state.height + "px"
          })
        },
        [
          _c(
            "svg",
            {
              ref: "svgMainView",
              staticClass: "gantt-elastic__svg-container",
              style: _vm.root.style("svg-container", {
                "max-width":
                  "calc(100% - " + _vm.root.state.scrollBarHeight + "px)"
              }),
              attrs: {
                width: _vm.getWidth,
                height: _vm.root.state.height,
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c(
                "foreignObject",
                { attrs: { x: "0", y: "0", width: "100%", height: "100%" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__container",
                      style: _vm.root.style("container"),
                      attrs: { xmlns: "http://www.w3.org/1999/xhtml" },
                      on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "gantt-elastic__task-list-container" },
                        [
                          _c(
                            "svg",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    _vm.root.state.taskList.display &&
                                    _vm.root.state.taskList.displayAfterResize,
                                  expression:
                                    "root.state.taskList.display && root.state.taskList.displayAfterResize"
                                }
                              ],
                              ref: "svgTaskList",
                              staticClass: "gantt-elastic__task-list-svg",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: _vm.root.state.taskList.finalWidth,
                                height: _vm.root.state.height
                              }
                            },
                            [
                              _c("defs", {
                                domProps: { innerHTML: _vm._s(_vm.defs) }
                              }),
                              _vm._v(" "),
                              _c("task-list")
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          ref: "svgChartContainer",
                          staticClass: "gantt-elastic__main-view-container",
                          on: {
                            mousedown: _vm.chartMouseDown,
                            touchstart: function($event) {
                              $event.preventDefault()
                              return _vm.chartMouseDown($event)
                            },
                            mouseup: function($event) {
                              $event.preventDefault()
                              return _vm.chartMouseUp($event)
                            },
                            touchend: function($event) {
                              $event.preventDefault()
                              return _vm.chartMouseUp($event)
                            },
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
              )
            ],
            1
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
                  height: _vm.root.state.allVisibleTasksHeight + "px"
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
            style: { height: "1px", width: _vm.root.state.width + "px" }
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
    "foreignObject",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value:
            _vm.root.state.taskList.display &&
            _vm.root.state.taskList.displayAfterResize,
          expression:
            "root.state.taskList.display && root.state.taskList.displayAfterResize"
        }
      ],
      ref: "taskListWrapper",
      staticClass: "gantt-elastic__task-list-wrapper",
      style: _vm.root.style("task-list-wrapper"),
      attrs: { x: "0", y: "0", width: "100%", height: "100%" }
    },
    [
      _c(
        "div",
        {
          ref: "taskList",
          staticClass: "gantt-elastic__task-list",
          style: _vm.root.style("task-list"),
          attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
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
                height: _vm.root.state.rowsHeight + "px"
              })
            },
            _vm._l(_vm.root.state.tasks, function(task) {
              return _c("task-list-item", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: task.visible,
                    expression: "task.visible"
                  }
                ],
                key: task.id,
                attrs: {
                  task: task,
                  "expander-style": _vm.getListExpanderStyle(task)
                }
              })
            })
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
      style: _vm.root.style("task-list-header")
    },
    _vm._l(_vm.root.state.taskList.columns, function(column) {
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
            ? _c("task-list-expander", { attrs: { tasks: _vm.collapsible } })
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
            [_vm._v(_vm._s(column.label))]
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
                  _vm.resizerMouseDown($event, column)
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
    })
  )
}
var TaskListHeadervue_type_template_id_aefdd7c8_staticRenderFns = []
TaskListHeadervue_type_template_id_aefdd7c8_render._withStripped = true


// CONCATENATED MODULE: ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/Expander.vue?vue&type=template&id=5f156c33&
var Expandervue_type_template_id_5f156c33_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-column-expander-wrapper",
      style: _vm.root.style("task-list-column-expander-wrapper")
    },
    [
      _c(
        "svg",
        {
          staticClass: "gantt-elastic__task-list-column-expander-content",
          style: _vm.root.style("task-list-column-expander-content"),
          attrs: {
            width: _vm.root.state.taskList.expander.size,
            height: _vm.root.state.taskList.expander.size
          }
        },
        [
          _vm.allChildren.length
            ? _c("rect", {
                staticClass: "gantt-elastic__task-list-column-expander-border",
                style: _vm.root.style(
                  "task-list-column-expander-border",
                  _vm.borderStyle
                ),
                attrs: {
                  x: _vm.border,
                  y: _vm.border,
                  width: _vm.root.state.taskList.expander.size - _vm.border * 2,
                  height:
                    _vm.root.state.taskList.expander.size - _vm.border * 2,
                  rx: "2",
                  ry: "2"
                },
                on: { click: _vm.toggle }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.allChildren.length
            ? _c("line", {
                staticClass: "gantt-elastic__task-list-column-expander-line",
                style: _vm.root.style("task-list-column-expander-line"),
                attrs: {
                  x1: _vm.lineOffset,
                  y1: _vm.root.state.taskList.expander.size / 2,
                  x2: _vm.root.state.taskList.expander.size - _vm.lineOffset,
                  y2: _vm.root.state.taskList.expander.size / 2
                },
                on: { click: _vm.toggle }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.collapsed
            ? _c("line", {
                staticClass: "gantt-elastic__task-list-column-expander-line",
                style: _vm.root.style("task-list-column-expander-line"),
                attrs: {
                  x1: _vm.root.state.taskList.expander.size / 2,
                  y1: _vm.lineOffset,
                  x2: _vm.root.state.taskList.expander.size / 2,
                  y2: _vm.root.state.taskList.expander.size - _vm.lineOffset
                },
                on: { click: _vm.toggle }
              })
            : _vm._e()
        ]
      )
    ]
  )
}
var Expandervue_type_template_id_5f156c33_staticRenderFns = []
Expandervue_type_template_id_5f156c33_render._withStripped = true


// CONCATENATED MODULE: ./src/components/TaskList/Expander.vue?vue&type=template&id=5f156c33&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/Expander.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    /**
     * Get all tasks
     *
     * @returns {array}
     */
    allChildren () {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(child => {
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
    /**
     * Toggle expander
     */
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

// CONCATENATED MODULE: ./src/components/TaskList/Expander.vue





/* normalize component */

var component = normalizeComponent(
  TaskList_Expandervue_type_script_lang_js_,
  Expandervue_type_template_id_5f156c33_render,
  Expandervue_type_template_id_5f156c33_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/Expander.vue"
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

    /**
     * Get style
     * @returns {object}
     */
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

    /**
     * Is this row collapsible?
     * @returns {bool}
     */
    collapsible () {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    },
  },

  methods: {
    /**
     * Resizer mouse down event handler
     */
    resizerMouseDown (event, column) {
      if (!this.resizerMoving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.root.$emit("taskList-column-width-change-start", this.resizer.moving);
      }
    },

    /**
     * Resizer mouse move event handler
     */
    resizerMouseMove (event) {
      if (this.resizer.moving) {
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        if (this.resizer.moving.width < this.root.state.taskList.minWidth) {
          this.resizer.moving.width = this.root.state.taskList.minWidth;
        }
        this.root.$emit("taskList-column-width-change", this.resizer.moving);
      }
    },

    /**
     * Resizer mouse up event handler
     */
    resizerMouseUp (event) {
      if (this.resizer.moving) {
        this.root.$emit("taskList-column-width-change", this.resizer.moving);
        this.root.$emit("taskList-column-width-change-stop", this.resizer.moving);
        this.resizer.moving = false;
      }
    }
  },

  /**
   * Created
   */
  created () {
    this.mouseUpListener = document.addEventListener('mouseup', (event) => {
      this.resizerMouseUp(event);
    });
    this.mouseMoveListener = document.addEventListener('mousemove', (event) => {
      this.resizerMouseMove(event);
    });
    this.root.$on("main-view-mousemove", this.resizerMouseMove);
    this.root.$on("main-view-mouseup", this.resizerMouseUp);
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
    _vm._l(_vm.root.state.taskList.columns, function(column) {
      return _c(
        "item-column",
        { key: column._id, attrs: { column: column, task: _vm.task } },
        [
          column.expander
            ? _c("task-list-expander", {
                style: _vm.expanderStyle,
                attrs: { tasks: [_vm.task] }
              })
            : _vm._e()
        ],
        1
      )
    })
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
                      )
                    },
                    [_vm._v(_vm._s(_vm.value))]
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
                    domProps: { innerHTML: _vm._s(_vm.value) }
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
//
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
  mounted () {
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
  },
  computed: {

    getListExpanderStyle () {
      return task => {
        const state = this.root.state;
        const padding = (task.parents.length - 1) * state.taskList.expander.padding;
        const style = {
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
    "svg",
    {
      ref: "chart",
      staticClass: "gantt-elastic__chart",
      style: _vm.root.style("chart"),
      attrs: {
        x: "0",
        y: "0",
        width: _vm.getWidth + "px",
        height: _vm.getHeight + "px",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c("calendar"),
      _vm._v(" "),
      _c(
        "foreignObject",
        {
          attrs: {
            x: "0",
            y: _vm.root.getCalendarHeight(),
            width: "100%",
            height: _vm.root.state.rowsHeight
          }
        },
        [
          _c(
            "div",
            {
              ref: "chartGraph",
              staticClass: "gantt-elastic__chart-graph",
              style: _vm.root.style("chart-graph", { height: "100%" }),
              attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
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
                    height: _vm.root.state.allVisibleTasksHeight + "px",
                    viewBox: _vm.getViewBox,
                    xmlns: "http://www.w3.org/2000/svg"
                  }
                },
                [
                  _c("grid"),
                  _vm._v(" "),
                  _c("dependency-lines", {
                    attrs: { tasks: _vm.root.state.tasks }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.root.state.tasks, function(task) {
                    return _c(
                      "g",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: task.visible,
                            expression: "task.visible"
                          }
                        ],
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
        width: _vm.root.state.width,
        height: _vm.root.state.allVisibleTasksHeight,
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
  inject: ["root"],
  data () {
    return {};
  },
  created () {
    this.root.$on("recenterPosition", this.recenterPosition);
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
  },
  computed: {
    verticalLines () {
      let lines = [];
      const state = this.root.state;
      state.times.steps.forEach(step => {
        if (this.root.isInsideViewPort(step.offset.px, 1)) {
          lines.push({
            key: step.date.valueOf(),
            x1: step.offset.px,
            y1: 0,
            x2: step.offset.px,
            y2: state.tasks.length * (state.row.height + state.grid.horizontal.gap * 2) + this.root.style('grid-line-vertical')['stroke-width'],
          });
        }
      });
      return lines;
    },
    horizontalLines () {
      let lines = [];
      const state = this.root.state;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        const y = (index * (state.row.height + state.grid.horizontal.gap * 2) + this.root.style('grid-line-vertical')['stroke-width'] / 2);
        lines.push({
          key: "hl" + index,
          x1: 0,
          y1: y,
          x2: "100%",
          y2: y
        });
      }
      return lines;
    },
    inViewPort () {
      return line => {
        const state = this.root.state;
        return (line.x1 >= state.scroll.chart.left && line.x1 <= state.scroll.chart.right);
      };
    },
    timeLinePosition () {
      const d = new Date();
      const current = d.getTime();
      const currentOffset = this.root.timeToPixelOffsetX(current);
      const timeLine = {
        x: 0,
        y1: 0,
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2&
var Calendarvue_type_template_id_dee108e2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      staticClass: "gantt-elastic__calendar-wrapper",
      style: _vm.root.style("calendar-wrapper")
    },
    [
      _c(
        "foreignObject",
        {
          attrs: {
            x: _vm.getX,
            y: _vm.getY,
            width: _vm.getWidth,
            height: _vm.root.state.calendar.height
          }
        },
        [
          _c("div", {
            staticClass: "gantt-elastic__calendar",
            style: _vm.root.style("calendar"),
            attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
          })
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.getMonths, function(month) {
        return _c("calendar-row", {
          key: month.key,
          staticClass: "gantt-elastic__calendar-row--month",
          attrs: { item: month, which: "month" }
        })
      }),
      _vm._v(" "),
      _vm._l(_vm.getDays, function(day) {
        return _c("calendar-row", {
          key: day.key,
          staticClass: "gantt-elastic__calendar-row--day",
          attrs: { item: day, which: "day" }
        })
      }),
      _vm._v(" "),
      _vm._l(_vm.getHours, function(hour) {
        return _c("calendar-row", {
          key: hour.key,
          staticClass: "gantt-elastic__calendar-row--hour",
          attrs: { item: hour, which: "hour" }
        })
      })
    ],
    2
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
    "g",
    {
      staticClass: "gantt-elastic__calendar-row",
      style: _vm.root.style("calendar-row")
    },
    [
      _c("rect", {
        class: "gantt-elastic__calendar-row-rect--" + _vm.which,
        style: _vm.root.style("calendar-row-rect--" + _vm.which),
        attrs: {
          x: _vm.item.x,
          y: _vm.item.y,
          width: _vm.item.width,
          height: _vm.item.height
        }
      }),
      _vm._v(" "),
      _c(
        "text",
        {
          class: "gantt-elastic__calendar-row-text--" + _vm.which,
          style: _vm.root.style("calendar-row-text--" + _vm.which),
          attrs: {
            x: _vm.getTextX,
            y: _vm.getTextY,
            "alignment-baseline": "middle",
            "text-anchor": _vm.anchor
          }
        },
        [_vm._v(_vm._s(_vm.item.label))]
      )
    ]
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

/* harmony default export */ var CalendarRowvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["item", "which"],
  data () {
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
    getTextX () {
      let x = this.item.x + this.item.width / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(this.item.x, this.item.width, 0)) {
        this.anchor = 'start';
        let scrollWidth = this.root.state.scroll.chart.right - this.root.state.scroll.chart.left;
        x = this.root.state.scroll.chart.left + (scrollWidth / 2) - (this.item.textWidth / 2) + 2;
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
    this.root.$on("scope-change", this.regenerate);
    this.root.$on("times-timeZoom-change", this.regenerate);
    this.regenerate();
  },
  methods: {
    /**
     * How many hours will fit?
     *
     * @returns {object}
     */
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

    /**
     * How many days will fit?
     *
     * @returns {object}
     */
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

    /**
     * How many months will fit?
     *
     * @returns {object}
     */
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

    /**
     * Get hour text style
     *
     * @returns {string}
     */
    hourTextStyle () {
      return ("font-family:" + this.root.state.calendar.hour.fontFamily + ";font-size:" + this.root.state.calendar.hour.fontSize);
    },

    /**
     * Get text style
     *
     * @returns {string}
     */
    dayTextStyle () {
      return ("font-family:" + this.root.state.calendar.day.fontFamily + ";font-size:" + this.root.state.calendar.day.fontSize);
    },

    /**
     * Generate hours
     *
     * @returns {array}
     */
    generateHours () {
      let hours = [];
      for (let hourIndex = 0, len = this.root.state.times.steps.length; hourIndex < len; hourIndex++) {
        const hoursCount = this.howManyHoursFit(hourIndex);
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = this.root.state.times.steps[hourIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const date = dayjs_min_default()(this.root.state.times.steps[hourIndex].date).add(i * hourStep, "hour");
          let textWidth = 0;
          if (typeof this.root.state.calendar.hour.widths[hourIndex] !== 'undefined') {
            textWidth = this.root.state.calendar.hour.widths[hourIndex][hoursCount.type];
          }
          let x = this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.times.steps[hourIndex].offset.px + hourWidthPx * i;
          hours.push({
            index: hourIndex,
            key: this.root.state.times.steps[hourIndex].date.valueOf() + "h" + i,
            x,
            y: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.calendar.day.height + this.root.state.calendar.month.height,
            width: hourWidthPx,
            textWidth,
            height: this.root.state.calendar.hour.height,
            label: this.root.state.calendar.hour.format[hoursCount.type](date)
          });
        }
      }
      return (this.hours = hours);
    },

    /**
     * Generate days
     *
     * @returns {array}
     */
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
        let textWidth = 0;
        if (typeof this.root.state.calendar.day.widths[dayIndex] !== 'undefined') {
          textWidth = this.root.state.calendar.day.widths[dayIndex][daysCount.type];
        }
        let x = this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.times.steps[dayIndex].offset.px;
        days.push({
          index: dayIndex,
          key: this.root.state.times.steps[dayIndex].date.valueOf() + "d",
          x,
          y: this.root.style('calendar-row')["stroke-width"] / 2 + this.root.state.calendar.month.height,
          width: dayWidthPx,
          textWidth,
          height: this.root.state.calendar.day.height,
          label: this.root.state.calendar.day.format[daysCount.type](date)
        });
      }
      return (this.days = days);
    },

    /**
     * Generate months
     *
     * @returns {array}
     */
    generateMonths () {
      let months = [];
      const monthsCount = this.howManyMonthsFit();
      let formatNames = Object.keys(this.root.state.calendar.month.format);
      let currentDate = dayjs_min_default()(this.root.state.times.firstDate);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs_min_default()(currentDate).add(1, "month").startOf("month");
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
        let choosenFormatName;
        for (let formatName of formatNames) {
          if (this.root.state.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.root.state.calendar.month.format[formatName](currentDate);
            choosenFormatName = formatName;
          }
        }
        let textWidth = 0;
        if (typeof this.root.state.calendar.month.widths[monthIndex] !== 'undefined') {
          textWidth = this.root.state.calendar.month.widths[monthIndex][choosenFormatName];
        }
        let x = this.root.style('calendar-row')["stroke-width"] / 2 + monthOffset;
        months.push({
          index: monthIndex,
          key: monthIndex + "m",
          x,
          y: this.root.style('calendar-row')["stroke-width"] / 2,
          width: monthWidth,
          textWidth,
          choosenFormatName,
          height: this.root.state.calendar.month.height,
          label: label
        });
        currentDate = currentDate.add(1, "month").startOf("month");
        if (currentDate.valueOf() > this.root.state.times.lastDate.valueOf()) {
          currentDate = dayjs_min_default()(this.root.state.times.lastDate);
        }
      }
      return (this.months = months);
    },

    /**
     * Regenerate dates
     */
    regenerate () {
      //this.$nextTick(() => {
      this.generateHours();
      this.generateDays();
      this.generateMonths();
      //});
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
    },
    getDays () {
      return this.days.filter(day => this.root.isInsideViewPort(day.x, day.width));
    },
    getHours () {
      return this.hours.filter(hour => this.root.isInsideViewPort(hour.x, hour.width));
    },
    getMonths () {
      return this.months.filter(month => this.root.isInsideViewPort(month.x, month.width));
    },
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
      attrs: { width: "100%", height: "100%" }
    },
    _vm._l(_vm.dependencyTasks, function(task) {
      return _c(
        "g",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: task.visible,
              expression: "task.visible"
            }
          ],
          key: task.id,
          attrs: { task: task }
        },
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
        })
      )
    })
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

/* harmony default export */ var DependencyLinesvue_type_script_lang_js_ = ({
  inject: ["root"],
  props: ["tasks"],
  data () {
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
    getPoints (fromTaskId, toTaskId) {
      const fromTask = this.root.getTask(fromTaskId);
      const toTask = this.root.getTask(toTaskId);
      if (fromTask === null || toTask === null || !toTask.visible || !fromTask.visible) {
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
    /**
     * Get tasks which are dependent on other tasks
     *
     * @returns {array}
     */
    dependencyTasks () {
      return this.tasks
        .filter(task => typeof task.dependentOn !== "undefined")
        .map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return { points: this.getPoints(id, task.id) };
          });
          return task;
        }).filter(task => task.dependencyLines.points !== null);
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
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              _vm.emitEvent("touchend", $event)
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
      _vm.root.state.row.showText
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
        x: _vm.task.x + _vm.task.width + _vm.root.state.chartText.offset,
        y: _vm.task.y - _vm.root.state.grid.horizontal.gap,
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
  inject: ["root"],
  props: ["task"],
  data () {
    return {};
  },
  computed: {
    getWidth () {
      const textStyle = this.root.style('chart-row-text');
      this.root.state.ctx.font = `${textStyle["font-weight"]} ${textStyle["font-size"]} ${textStyle["font-family"]}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.chartText.xPadding * 2;
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
              width: _vm.root.state.progress.width,
              height: _vm.root.state.progress.width,
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
                y2: _vm.root.state.progress.width
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _vm.root.state.progress.bar
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
      _vm.root.state.progress.pattern
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



/* harmony default export */ var Taskvue_type_script_lang_js_ = ({
  components: {
    ChartText: Text,
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
    emitEvent (eventName, event) {
      if (!this.root.state.scroll.scrolling) {
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
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              _vm.emitEvent("touchend", $event)
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
      _vm.root.state.row.showText
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



/* harmony default export */ var Milestonevue_type_script_lang_js_ = ({
  components: {
    ChartText: Text,
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
    emitEvent (eventName, event) {
      if (!this.root.state.scroll.scrolling) {
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
            xmlns: "http://www.w3.org/2000/svg"
          },
          on: {
            click: function($event) {
              _vm.emitEvent("click", $event)
            },
            mouseenter: function($event) {
              _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function($event) {
              _vm.emitEvent("mouseover", $event)
            },
            mouseout: function($event) {
              _vm.emitEvent("mouseout", $event)
            },
            mousemove: function($event) {
              _vm.emitEvent("mousemove", $event)
            },
            mousedown: function($event) {
              _vm.emitEvent("mousedown", $event)
            },
            mouseup: function($event) {
              _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function($event) {
              _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function($event) {
              _vm.emitEvent("touchstart", $event)
            },
            touchmove: function($event) {
              _vm.emitEvent("touchmove", $event)
            },
            touchend: function($event) {
              _vm.emitEvent("touchend", $event)
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
      _vm.root.state.row.showText
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



/* harmony default export */ var Projectvue_type_script_lang_js_ = ({
  components: {
    ChartText: Text,
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
    emitEvent (eventName, event) {
      if (!this.root.state.scroll.scrolling) {
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
  mounted () {
    this.root.state.refs.chart = this.$refs.chart;
    this.root.state.refs.chartGraph = this.$refs.chartGraph;
  },
  computed: {
    getWidth () {
      const state = this.root.state;
      return state.width;
    },
    getHeight () {
      const state = this.root.state;
      return state.height;
    },
    getViewBox () {
      return `0 0 ${Math.round(this.getWidth)} ${this.root.state.allVisibleTasksHeight}`;
    }
  },
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




/* harmony default export */ var MainViewvue_type_script_lang_js_ = ({
  components: {
    TaskList: TaskList,
    Chart: Chart
  },
  inject: ["root"],
  props: ["tasks", "options"],
  data () {
    return {
      defs: "",
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
        currentY: 0,
      }
    };
  },
  mounted () {
    this.root.state.refs.svgMainView = this.$refs.svgMainView;
    this.root.state.refs.svgChart = this.$refs.svgChart;
    this.root.state.refs.svgChartContainer = this.$refs.svgChartContainer;
    this.root.state.refs.svgTaskList = this.$refs.svgTaskList;
    this.root.state.refs.chartScrollContainerHorizontal = this.$refs.chartScrollContainerHorizontal;
    this.root.state.refs.chartScrollContainerVertical = this.$refs.chartScrollContainerVertical;
    document.addEventListener('mouseup', this.chartMouseUp.bind(this));
    document.addEventListener('mousemove', this.chartMouseMove.bind(this));
    document.addEventListener('touchmove', this.chartMouseMove.bind(this));
    document.addEventListener('touchend', this.chartMouseUp.bind(this));
  },
  computed: {

    /**
     * Get width
     * @returns {number}
     */
    getWidth () {
      return this.root.state.width + this.root.state.taskList.finalWidth;
    },

    getMarginLeft () {
      if (!this.root.state.taskList.display) {
        return "0px";
      }
      return this.root.state.taskList.finalWidth + "px";
    },
    verticalStyle () {
      return {
        width: this.root.state.scrollBarHeight + 'px',
        height: this.root.state.rowsHeight + 'px',
        "margin-top": (this.root.state.calendar.height + this.root.state.calendar.gap) + 'px'
      };
    }
  },
  methods: {
    mouseMove (event) {
      this.root.$emit("main-view-mousemove", event);
    },
    mouseUp (event) {
      this.root.$emit("main-view-mouseup", event);
    },
    onHorizontalScroll (ev) {
      this.root.$emit("chart-scroll-horizontal", ev);
    },
    onVerticalScroll (ev) {
      this.root.$emit("chart-scroll-vertical", ev);
    },
    chartWheel (ev) {
      this.root.$emit("chart-wheel", ev);
    },
    chartMouseDown (ev) {
      if (typeof ev.touches !== 'undefined') {
        this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
        this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
        this.mousePos.movementX = 0;
        this.mousePos.movementY = 0;
        this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft;
        this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop;
      }
      this.root.state.scroll.scrolling = true;
    },
    chartMouseUp (ev) {
      this.root.state.scroll.scrolling = false;
    },
    chartMouseMove (ev) {
      if (this.root.state.scroll.scrolling) {
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
        let x = 0, y = 0;
        if (touch) {
          x = this.mousePos.currentX + (movementX * this.root.state.scroll.dragXMoveMultiplier);
        } else {
          x = horizontal.scrollLeft - (movementX * this.root.state.scroll.dragXMoveMultiplier);
        }
        horizontal.scrollLeft = x;
        if (touch) {
          y = this.mousePos.currentY + (movementY * this.root.state.scroll.dragYMoveMultiplier);
        } else {
          y = vertical.scrollTop - (movementY * this.root.state.scroll.dragYMoveMultiplier);
        }
        vertical.scrollTop = y;
      }
    }
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy () {
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
/* harmony default export */ var style = ({
  "main-view": {
    "background": "#FFFFFF"
  },
  "container": {
    "display": "flex",
    "max-width": "100%",
    "position": "absolute",
    "height": "100%"
  },
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
  "task-list-items": {
    "overflow": "hidden"
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
  "task-list-item-value-container": {
    "margin": "auto 0px",
    "overflow": "hidden"
  },
  "task-list-item-value": {
    "display": "block",
    "flex-shrink": "100",
    "font-family": fontFamily,
    "font-size": fontSize,
    "margin": "auto 6px",
    "overflow": "hidden",
    "text-overflow": "ellipsis",
    "line-height": "1.5em",
    "word-break": "keep-all",
    "white-space": "nowrap",
    "color": "#606060",
    "background": "#FFFFFF"
  },
  "grid-lines": {},
  "grid-line-horizontal": {
    "stroke": "#00000010",
    "stroke-width": 1
  },
  "grid-line-vertical": {
    "stroke": "#00000010",
    "stroke-width": 1
  },
  "grid-line-time": {
    "stroke": "#FF000080",
    "stroke-width": 1
  },
  "chart": {
    "user-select": "none",
    "overflow": "hidden"
  },
  "chart-graph": {
    "overflow": "hidden"
  },
  "chart-row-text-wrapper": {},
  "chart-row-text": {
    "background": "#ffffffa0",
    "border-radius": "10px",
    "font-family": fontFamily,
    "font-size": fontSize,
    "font-weight": "normal",
    "color": "#000000a0",
    "height": '100%'
  },
  "chart-row-text-content": {
    "padding": "0px 6px"
  },
  "chart-row-text-content--text": {},
  "chart-row-text-content--html": {},
  "chart-row-wrapper": {},
  "chart-row-bar-wrapper": {},
  "chart-row-bar": {},
  "chart-row-bar-polygon": {
    "stroke": "#E74C3C",
    "stroke-width": 1,
    "fill": "#F75C4C",
  },
  "chart-row-project-wrapper": {},
  "chart-row-project": {},
  "chart-row-project-polygon": {},
  "chart-row-milestone-wrapper": {},
  "chart-row-milestone": {},
  "chart-row-milestone-polygon": {},
  "chart-row-task-wrapper": {},
  "chart-row-task": {},
  "chart-row-task-polygon": {},
  "chart-row-progress-bar-wrapper": {},
  "chart-row-progress-bar": {},
  "chart-row-progress-bar-line": {
    "stroke": "#ffffff25",
    "stroke-width": 20
  },
  "chart-row-progress-bar-solid": {
    "fill": "#E74C3C",
    "height": "20%"
  },
  "chart-row-progress-bar-pattern": {
    "fill": "url(#diagonalHatch)",
    "transform": "translateY(0.1) scaleY(0.8)",
  },
  "chart-row-progress-bar-outline": {
    "stroke": "#E74C3C",
    "stroke-width": 1
  },
  "chart-dependency-lines-wrapper": {},
  "chart-dependency-lines-path": {
    "fill": "transparent",
    "stroke": "#FFa00090",
    "stroke-width": 2
  },
  "chart-scroll-container": {},
  "chart-scroll-container--horizontal": {
    "overflow": "auto",
    "max-width": "100%"
  },
  "chart-scroll-container--vertical": {
    "overflow-y": "auto",
    "overflow-x": "hidden",
    "max-height": "100%",
    "float": "right",
  },
  "svg-chart": {
    "overflow": "hidden"
  },
  "svg-container-wrapper": {
    "overflow": "hidden"
  },
  "svg-container": {
    "float": "left",
    "position": "relative",
    "max-width": "100%"
  },
  "slot-header-beforeOptions": {
    "display": "inline-block"
  }
});

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
function getOptions (userOptions) {
  return {
    style: style,
    slots: {
      header: {},
    },
    title: {
      label: "gantt-elastic",
      html: false
    },
    width: 0,
    height: 0,
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
    maxRows: 20,
    maxHeight: 0,
    chartText: {
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
      displayAfterResize: true,
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
      minWidth: 18,
      expander: {
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
              .format("MMM 'YY");
          },
          long (date) {
            return dayjs_min_default()(date)
              .locale(userOptions.locale.code)
              .format("MMMM YYYY");
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
    },
  };
}
/**
 * Helper function to determine if specified variable is an object
 *
 * @param {any} item
 * @returns {boolean}
 */
function isObject (item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
/**
 * Helper function which will merge objects recursively - creating brand new one - like clone
 *
 * @param {object} target
 * @params {object} sources
 * @returns {object}
 */
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
/**
 * Same as above but with reactivity in mind
 *
 * @param {Vue.component} component
 * @param {object} target
 * @params {object} sources
 * @returns {object}
 */
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
const styleCache = {};
let globalVisibleTasks = [];

/**
 * GanttElastic
 * Main vue component
 */
const GanttElastic = {
  components: {
    MainView: MainView
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
        tasks: [],
        scrollBarHeight: 0,
        allVisibleTasksHeight: 0,
        refs: {},
        tasksById: {},
      },
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
      return this.state.scrollBarHeight = noScroll - withScroll;
    },

    /**
     * Get style for specified class
     *
     * @param {object|string} mergeWith - merge multiple styles by className (without gantt-elastic__) or object with props
     * @returns {object}
     */
    style (...mergeWith) {
      const index = JSON.stringify(mergeWith);
      if (typeof styleCache[index] !== 'undefined') {
        return styleCache[index];
      }
      let merged = {};
      mergeWith.forEach(objOrClassName => {
        if (typeof objOrClassName === 'string') {
          merged = Object.assign({}, merged, this.state.style[objOrClassName])
        } else if (typeof objOrClassName === 'object') {
          merged = Object.assign({}, merged, objOrClassName);
        } else if (typeof objOrClassName === 'function') {
          merged = Object.assign({}, objOrClassName())
        }
      });
      styleCache[index] = merged;
      return merged;
    },

    /**
     * Fill out empty task properties and make it reactive
     */
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
      this.calculateTaskListColumnsDimensions();
      this.state.scrollBarHeight = this.getScrollBarHeight();
      this.state.outerHeight = this.state.height + this.state.scrollBarHeight;
    },

    /**
     * Get calendar rows outer height
     *
     * @returns {int}
     */
    getCalendarHeight () {
      return this.state.calendar.height + this.style('calendar-row')["stroke-width"] + this.state.calendar.gap;
    },

    /**
     * Sum all calendar rows height and return result
     *
     * @returns {int}
     */
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

    /**
     * Get maximal level of nested task children
     *
     * @returns {int}
     */
    getMaximalLevel () {
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
    getMaximalExpanderWidth () {
      return (this.getMaximalLevel() * this.state.taskList.expander.padding + this.state.taskList.expander.margin);
    },

    /**
     * Synchronize scrollTop property when row height is changed
     */
    syncScrollTop () {
      if (this.state.refs.taskListItems) {
        this.state.scroll.top = this.state.refs.taskListItems.scrollTop = this.state.refs.chartScrollContainerVertical.scrollTop = this.state.refs.chartGraph.scrollTop;
      }
    },

    /**
     * Calculate task list columns dimensions
     */
    calculateTaskListColumnsDimensions () {
      let final = 0;
      this.state.taskList.columns.forEach(column => {
        if (column.expander) {
          column.finalWidth = ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.taskList.percent;
        } else {
          column.finalWidth = (column.width / 100) * this.state.taskList.percent;
        }
        final += column.finalWidth;
        column.height = this.getTaskHeight() - this.style("grid-line-horizontal")["stroke-width"];
      });
      this.state.taskList.finalWidth = final;
      if (typeof document !== 'undefined') {
        if (final > document.body.clientWidth / 2) {
          this.state.taskList.displayAfterResize = false;
        }
      }
      this.syncScrollTop();
    },

    /**
     * Reset task tree - which is used to create tree like structure inside task list
     */
    resetTaskTree () {
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

    /**
     * Get task by id
     *
     * @param {any} taskId
     * @returns {object|null} task
     */
    getTask (taskId) {
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
    getChildren (taskId) {
      return this.state.tasks.filter(task => task.parent === taskId);
    },

    getSVG () {
      return this.state.svgMainView.outerHTML;
    },

    getImage (type = "image/png") {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = this.state.svgMainView.clientWidth;
          canvas.height = this.state.svgMainView.clientHeight;
          canvas.getContext("2d").drawImage(img, 0, 0);
          resolve(canvas.toDataURL(type));
        };
        img.src = "data:image/svg+xml," + encodeURIComponent(this.getSVG());
      });
    },

    /**
     * Get gantt total height
     *
     * @returns {number}
     */
    getHeight (visibleTasks, outer = false) {
      let height = visibleTasks.length * (this.state.row.height + this.state.grid.horizontal.gap * 2) + this.state.calendar.height + this.style('calendar-row')["stroke-width"] * 2 + this.state.calendar.gap;
      if (outer) {
        height += this.state.scrollBarHeight;
      }
      return height;
    },

    /**
     * Get one task height
     *
     * @returns {number}
     */
    getTaskHeight (withStroke = false) {
      if (withStroke) {
        return (this.state.row.height + this.state.grid.horizontal.gap * 2) + this.style("grid-line-horizontal")["stroke-width"];
      }
      return (this.state.row.height + this.state.grid.horizontal.gap * 2);
    },

    /**
     * Get specified tasks height
     *
     * @returns {number}
     */
    getTasksHeight (visibleTasks, outer = false) {
      return visibleTasks.length * this.getTaskHeight();
    },

    /**
     * Convert time (in milliseconds) to pixel offset inside chart
     *
     * @param {int} ms
     * @returns {number}
     */
    timeToPixelOffsetX (ms) {
      let x = ms - this.state.times.firstTime;
      if (x) {
        x = x / this.state.times.timePerPixel;
      }
      return x;
    },

    /**
     * Convert pixel offset inside chart to corresponding time offset in milliseconds
     *
     * @param {number} pixelOffsetX
     * @returns {int} milliseconds
     */
    pixelOffsetXToTime (pixelOffsetX) {
      let offset = pixelOffsetX + this.style('grid-line-vertical')["stroke-width"] / 2;
      return (offset * this.state.times.timePerPixel + this.state.times.firstTime);
    },

    /**
     * Determine if element is inside current view port
     *
     * @param {number} x - element placement
     * @param {number} width - element width
     * @param {int} buffer - or threshold, if element is outside viewport but offset from view port is below this value return true
     * @returns {boolean}
     */
    isInsideViewPort (x, width, buffer = 5000) {
      return ((x + width + buffer >= this.state.scroll.chart.left && x - buffer <= this.state.scroll.chart.right) || (x - buffer <= this.state.scroll.chart.left && x + width + buffer >= this.state.scroll.chart.right));
    },

    /**
     * Chart scroll event handler
     *
     * @param {event} ev
     */
    onScrollChart (ev) {
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
    _onScrollChart (left, top) {
      const chartContainerWidth = this.state.refs.svgChartContainer.clientWidth;
      this.state.scroll.chart.left = left;
      this.state.scroll.chart.right = left + chartContainerWidth;
      this.state.scroll.chart.percent = (left / this.state.times.totalViewDurationPx) * 100;
      this.state.scroll.chart.top = top;
      this.state.scroll.chart.time = this.pixelOffsetXToTime(left);
      this.state.scroll.chart.timeCenter = this.pixelOffsetXToTime(left + chartContainerWidth / 2);
      this.state.scroll.chart.dateTime.left = dayjs_min_default()(this.state.scroll.chart.time);
      this.state.scroll.chart.dateTime.right = dayjs_min_default()(this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth));
      this.scrollTo(left, top);
    },

    /**
     * Scroll current chart to specified time (in milliseconds)
     *
     * @param {int} time
     */
    scrollToTime (time) {
      let pos = this.timeToPixelOffsetX(time);
      const chartContainerWidth = this.state.refs.svgChartContainer.clientWidth;
      pos = pos - chartContainerWidth / 2;
      if (pos > this.state.width) {
        pos = this.state.width - chartContainerWidth;
      }
      this.scrollTo(pos);
    },

    /**
     * Scroll chart or task list to specified pixel values
     *
     * @param {number|null} left
     * @param {number|null} top
     */
    scrollTo (left = null, top = null) {
      if (left !== null) {
        this.state.refs.svgChartContainer.scrollLeft = left;
        this.state.refs.chartScrollContainerHorizontal.scrollLeft = left;
        this.state.scroll.left = left;
      }
      if (top !== null) {
        this.state.refs.chartScrollContainerVertical.scrollTop = top;
        this.state.refs.chartGraph.scrollTop = top;
        this.state.refs.taskListItems.scrollTop = top;
        this.state.scroll.top = top;
      }
    },

    /**
     * After some actions like time zoom change we need to recompensate scroll position
     * so as a result everything will be in same place
     */
    fixScrollPos () {
      this.$nextTick(() => {
        this.scrollToTime(this.state.scroll.chart.timeCenter);
      });
    },

    /**
     * Mouse wheel event handler
     */
    onWheelChart (ev) {
      if (!ev.shiftKey) {
        let top = this.state.scroll.top + ev.deltaY;
        const chartClientHeight = this.state.refs.chartGraph.clientHeight;
        const scrollHeight = this.state.refs.chartGraph.scrollHeight - chartClientHeight;
        if (top < 0) {
          top = 0;
        } else if (top > scrollHeight) {
          top = scrollHeight;
        }
        this.scrollTo(null, top);
      } else {
        let left = this.state.scroll.left + ev.deltaY;
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
    onTimeZoomChange (timeZoom) {
      this.state.times.timeZoom = timeZoom;
      this.recalculateTimes();
      this.calculateSteps();
      this.calculateCalendarDimensions();
      this.fixScrollPos();
    },

    /**
     * Row height change event handler
     */
    onRowHeightChange (height) {
      this.state.row.height = height;
      this.calculateTaskListColumnsDimensions();
    },

    /**
     * Scope change event handler
     */
    onScopeChange (value) {
      this.state.scope.before = value;
      this.state.scope.after = value;
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },

    /**
     * Task list width change event handler
     */
    onTaskListWidthChange (value) {
      this.state.taskList.percent = value;
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Task list column width change event handler
     */
    onTaskListColumnWidthChange (value) {
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Listen to speciefied event names
     */
    initializeEvents () {
      this.$on("chart-scroll-horizontal", this.onScrollChart);
      this.$on("chart-scroll-vertical", this.onScrollChart);
      this.$on("chart-wheel", this.onWheelChart);
      this.$on("times-timeZoom-change", this.onTimeZoomChange);
      this.$on("row-height-change", this.onRowHeightChange);
      this.$on("scope-change", this.onScopeChange);
      this.$on("taskList-width-change", this.onTaskListWidthChange);
      this.$on("taskList-column-width-change", this.onTaskListColumnWidthChange);
    },

    /**
     * When some action was performed (scale change for example) - recalculate time variables
     */
    recalculateTimes () {
      let max = this.state.times.timeScale * 60;
      let min = this.state.times.timeScale;
      let steps = max / min;
      let percent = this.state.times.timeZoom / 100;
      this.state.times.timePerPixel = this.state.times.timeScale * steps * percent + Math.pow(2, this.state.times.timeZoom);
      this.state.times.totalViewDurationMs = this.state.times.lastDate.diff(this.state.times.firstDate, "milisecods");
      this.state.times.totalViewDurationPx = this.state.times.totalViewDurationMs / this.state.times.timePerPixel;
      this.state.width = this.state.times.totalViewDurationPx + this.style('grid-line-vertical')["stroke-width"];
    },

    /**
     * Initialize time variables
     */
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

    /**
     * Calculate steps
     * Steps are days by default
     * Each step contain information about time offset and pixel offset of this time inside gantt chart
     */
    calculateSteps () {
      const steps = [];
      const lastMs = dayjs_min_default()(this.state.times.lastDate).valueOf();
      const currentDate = dayjs_min_default()(this.state.times.firstDate);
      steps.push({
        date: currentDate,
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (let currentDate = dayjs_min_default()(this.state.times.firstDate).add(1, this.state.times.stepDuration).startOf("day");
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.state.times.stepDuration).startOf("day")) {
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

    /**
     * Calculate calendar widths - when scale was changed for example
     */
    computeCalendarWidths () {
      this.computeDayWidths();
      this.computeHourWidths();
      this.computeMonthWidths();
    },

    /**
     * Compute width of calendar hours column widths basing on text widths
     */
    computeHourWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.hour.fontSize + " " + state.calendar.fontFamily;
      let currentDate = dayjs_min_default()("2018-01-01T00:00:00"); // any date will be good for hours
      let maxWidths = {};
      state.calendar.hour.widths = [];
      Object.keys(state.calendar.hour.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let hour = 0; hour < 24; hour++) {
        const widths = {
          hour
        };
        Object.keys(state.calendar.hour.format).forEach(formatName => {
          widths[formatName] = state.ctx.measureText(state.calendar.hour.format[formatName](currentDate.toDate())).width;
        });
        state.calendar.hour.widths.push(widths);
        Object.keys(state.calendar.hour.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, "hour");
      }
      state.calendar.hour.maxWidths = maxWidths;
    },

    /**
     * Compute calendar days column widths basing on text widths
     */
    computeDayWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.day.fontSize + " " + state.calendar.fontFamily;
      let currentDate = dayjs_min_default()(state.times.steps[0].date);
      let maxWidths = {};
      state.calendar.day.widths = [];
      Object.keys(state.calendar.day.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let day = 0, daysLen = state.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(state.calendar.day.format).forEach(formatName => {
          widths[formatName] = state.ctx.measureText(state.calendar.day.format[formatName](currentDate.toDate())).width;
        });
        state.calendar.day.widths.push(widths);
        Object.keys(state.calendar.day.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, "day");
      }
      state.calendar.day.maxWidths = maxWidths;
    },

    /**
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths () {
      const state = this.state;
      state.ctx.font = state.calendar.day.fontSize + " " + state.calendar.fontFamily;
      let maxWidths = {};
      state.calendar.month.widths = [];
      Object.keys(state.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      let currentDate = dayjs_min_default()(this.state.times.firstDate);
      const monthsCount = Math.ceil(this.state.times.lastDate.diff(this.state.times.firstDate, "months", true));
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(state.calendar.month.format).forEach(formatName => {
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

    /**
     * Prepare time and date variables for gantt
     */
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

    /**
     * Setup and calulate everything
     */
    setup () {
      this.initialize();
      this.state.tasksById = {};
      this.state.tasks.forEach(task => (this.state.tasksById[task.id] = task));
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.calculateCalendarDimensions();
      this.state.taskList.width = this.state.taskList.columns.reduce((prev, current) => {
        return { width: prev.width + current.width };
      }, { width: 0 }).width;
    },

    /**
     * Global resize event (from window.addEventListener)
     */
    globalOnResize (ev) {
      if (this.state.taskList.finalWidth > document.body.clientWidth / 2) {
        this.state.taskList.displayAfterResize = false;
      } else {
        this.state.taskList.displayAfterResize = true;
      }
    }

  },

  computed: {

    /**
     * Get visible tasks
     * Very importan method which will bring us only those tasks that are visible inside gantt chart
     * For example when task is collapsed - children of this task are not visible - we should not render them
     */
    visibleTasks () {
      const visibleTasks = this.state.tasks.filter(task => task.visible);
      const maxRows = visibleTasks.slice(0, this.state.maxRows);
      this.state.rowsHeight = this.getTasksHeight(maxRows);
      let heightCompensation = 0;
      if (this.state.maxHeight && this.state.rowsHeight > this.state.maxHeight) {
        heightCompensation = this.state.rowsHeight - this.state.maxHeight;
        this.state.rowsHeight = this.state.maxHeight;
      }
      this.state.height = this.getHeight(maxRows) - heightCompensation;
      this.state.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
      this.state.outerHeight = this.getHeight(maxRows, true) - heightCompensation;
      let len = visibleTasks.length;
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index];
        task.width = task.durationMs / this.state.times.timePerPixel - this.style('grid-line-vertical')["stroke-width"];
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        task.y = (this.state.row.height + this.state.grid.horizontal.gap * 2) * index + this.state.grid.horizontal.gap;
      }
      this.$nextTick(() => {
        this.syncScrollTop();
      });
      return visibleTasks;
    },
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created () {
    let previousTasks = [];
    this.$watch('state.tasks', function (newTasks, oldTasks) {
      let refresh = previousTasks.length !== newTasks.length;
      if (!refresh) {
        for (let i = 0, len = newTasks.length; i < len; i++) {
          if (typeof newTasks[i].parents === 'undefined') {
            refresh = true;
            break;
          }
        }
      }
      if (refresh) {
        this.refreshTasks();
        this.prepareDates();
        this.initTimes();
        this.state.tasks.forEach(task => (this.state.tasksById[task.id] = task));
        this.resetTaskTree();
        this.state.taskTree = this.makeTaskTree(this.state.rootTask);
        this.state.tasks = this.state.taskTree.allChildren;
      }
      previousTasks = newTasks.slice();
    }, { immediate: true, deep: false });
    this.initializeEvents();
    this.setup();
    this.$root.$emit('gantt-elastic-created', this);
  },

  /**
   * Emit ready/mounted events and deliver this gantt instance to outside world when needed
   */
  mounted () {
    window.addEventListener('resize', this.globalOnResize);
    this.$root.$emit('gantt-elastic-mounted', this);
    this.$root.$emit('gantt-elastic-ready', this);
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy () {
    window.removeEventListener('resize', this.globalOnResize);
  },

};
/* harmony default export */ var GanttElasticvue_type_script_lang_js_ = (GanttElastic);

// CONCATENATED MODULE: ./src/GanttElastic.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_GanttElasticvue_type_script_lang_js_ = (GanttElasticvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/GanttElastic.vue?vue&type=style&index=0&lang=css&
var GanttElasticvue_type_style_index_0_lang_css_ = __webpack_require__(3);

// CONCATENATED MODULE: ./src/GanttElastic.vue
/* concated harmony reexport mergeDeep */__webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* concated harmony reexport mergeDeepReactive */__webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });






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
/* 7 */
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