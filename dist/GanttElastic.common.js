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
/******/ 	return __webpack_require__(__webpack_require__.s = 214);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,h:r,m:e,s:n,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof S},M=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new S(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var S=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var h=this,f=!!D.u(a)||a,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case o:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,S=(l<g?l+7:l)-g;return d(f?y-S:y+(6-S),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[o]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(a-this.$W):a;return this.$d[d]&&this.$d[d]($),this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.add=function(t,a){var h,f=this;t=Number(t);var c=D.p(a),d=function(n,e){var r=f.clone().set("date",1).set(n,e+t);return r.set("date",Math.min(f.$D,r.daysInMonth()))},$=function(n){var e=new Date(f.$d);return e.setDate(e.getDate()+n*t),D.w(e,f)};if(c===u)return d(u,this.$M);if(c===o)return d(o,this.$y);if(c===i)return $(1);if(c===s)return $(7);var l=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,m=this.valueOf()+t*l;return D.w(m,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=i.weekdays,u=i.months,a=function(t,n,e,r){return t&&t[n]||e[n].substr(0,r)},o=function(t){return D.s(n.$H%12||12,t,"0")},h={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:D.s(this.$M+1,2,"0"),MMM:a(i.monthsShort,this.$M,u,3),MMMM:u[this.$M],D:String(this.$D),DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:a(i.weekdaysMin,this.$W,s,2),ddd:a(i.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:D.s(this.$H,2,"0"),h:o(1),hh:o(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:D.s(this.$m,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):h[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[o]=y/12,c[u]=y,c[a]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=S.prototype,g.extend=function(t,n){return t(n,S,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayExpression = isArrayExpression;
exports.isAssignmentExpression = isAssignmentExpression;
exports.isBinaryExpression = isBinaryExpression;
exports.isInterpreterDirective = isInterpreterDirective;
exports.isDirective = isDirective;
exports.isDirectiveLiteral = isDirectiveLiteral;
exports.isBlockStatement = isBlockStatement;
exports.isBreakStatement = isBreakStatement;
exports.isCallExpression = isCallExpression;
exports.isCatchClause = isCatchClause;
exports.isConditionalExpression = isConditionalExpression;
exports.isContinueStatement = isContinueStatement;
exports.isDebuggerStatement = isDebuggerStatement;
exports.isDoWhileStatement = isDoWhileStatement;
exports.isEmptyStatement = isEmptyStatement;
exports.isExpressionStatement = isExpressionStatement;
exports.isFile = isFile;
exports.isForInStatement = isForInStatement;
exports.isForStatement = isForStatement;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIdentifier = isIdentifier;
exports.isIfStatement = isIfStatement;
exports.isLabeledStatement = isLabeledStatement;
exports.isStringLiteral = isStringLiteral;
exports.isNumericLiteral = isNumericLiteral;
exports.isNullLiteral = isNullLiteral;
exports.isBooleanLiteral = isBooleanLiteral;
exports.isRegExpLiteral = isRegExpLiteral;
exports.isLogicalExpression = isLogicalExpression;
exports.isMemberExpression = isMemberExpression;
exports.isNewExpression = isNewExpression;
exports.isProgram = isProgram;
exports.isObjectExpression = isObjectExpression;
exports.isObjectMethod = isObjectMethod;
exports.isObjectProperty = isObjectProperty;
exports.isRestElement = isRestElement;
exports.isReturnStatement = isReturnStatement;
exports.isSequenceExpression = isSequenceExpression;
exports.isSwitchCase = isSwitchCase;
exports.isSwitchStatement = isSwitchStatement;
exports.isThisExpression = isThisExpression;
exports.isThrowStatement = isThrowStatement;
exports.isTryStatement = isTryStatement;
exports.isUnaryExpression = isUnaryExpression;
exports.isUpdateExpression = isUpdateExpression;
exports.isVariableDeclaration = isVariableDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
exports.isWhileStatement = isWhileStatement;
exports.isWithStatement = isWithStatement;
exports.isAssignmentPattern = isAssignmentPattern;
exports.isArrayPattern = isArrayPattern;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isClassBody = isClassBody;
exports.isClassDeclaration = isClassDeclaration;
exports.isClassExpression = isClassExpression;
exports.isExportAllDeclaration = isExportAllDeclaration;
exports.isExportDefaultDeclaration = isExportDefaultDeclaration;
exports.isExportNamedDeclaration = isExportNamedDeclaration;
exports.isExportSpecifier = isExportSpecifier;
exports.isForOfStatement = isForOfStatement;
exports.isImportDeclaration = isImportDeclaration;
exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
exports.isImportNamespaceSpecifier = isImportNamespaceSpecifier;
exports.isImportSpecifier = isImportSpecifier;
exports.isMetaProperty = isMetaProperty;
exports.isClassMethod = isClassMethod;
exports.isObjectPattern = isObjectPattern;
exports.isSpreadElement = isSpreadElement;
exports.isSuper = isSuper;
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
exports.isTemplateElement = isTemplateElement;
exports.isTemplateLiteral = isTemplateLiteral;
exports.isYieldExpression = isYieldExpression;
exports.isAnyTypeAnnotation = isAnyTypeAnnotation;
exports.isArrayTypeAnnotation = isArrayTypeAnnotation;
exports.isBooleanTypeAnnotation = isBooleanTypeAnnotation;
exports.isBooleanLiteralTypeAnnotation = isBooleanLiteralTypeAnnotation;
exports.isNullLiteralTypeAnnotation = isNullLiteralTypeAnnotation;
exports.isClassImplements = isClassImplements;
exports.isDeclareClass = isDeclareClass;
exports.isDeclareFunction = isDeclareFunction;
exports.isDeclareInterface = isDeclareInterface;
exports.isDeclareModule = isDeclareModule;
exports.isDeclareModuleExports = isDeclareModuleExports;
exports.isDeclareTypeAlias = isDeclareTypeAlias;
exports.isDeclareOpaqueType = isDeclareOpaqueType;
exports.isDeclareVariable = isDeclareVariable;
exports.isDeclareExportDeclaration = isDeclareExportDeclaration;
exports.isDeclareExportAllDeclaration = isDeclareExportAllDeclaration;
exports.isDeclaredPredicate = isDeclaredPredicate;
exports.isExistsTypeAnnotation = isExistsTypeAnnotation;
exports.isFunctionTypeAnnotation = isFunctionTypeAnnotation;
exports.isFunctionTypeParam = isFunctionTypeParam;
exports.isGenericTypeAnnotation = isGenericTypeAnnotation;
exports.isInferredPredicate = isInferredPredicate;
exports.isInterfaceExtends = isInterfaceExtends;
exports.isInterfaceDeclaration = isInterfaceDeclaration;
exports.isInterfaceTypeAnnotation = isInterfaceTypeAnnotation;
exports.isIntersectionTypeAnnotation = isIntersectionTypeAnnotation;
exports.isMixedTypeAnnotation = isMixedTypeAnnotation;
exports.isEmptyTypeAnnotation = isEmptyTypeAnnotation;
exports.isNullableTypeAnnotation = isNullableTypeAnnotation;
exports.isNumberLiteralTypeAnnotation = isNumberLiteralTypeAnnotation;
exports.isNumberTypeAnnotation = isNumberTypeAnnotation;
exports.isObjectTypeAnnotation = isObjectTypeAnnotation;
exports.isObjectTypeInternalSlot = isObjectTypeInternalSlot;
exports.isObjectTypeCallProperty = isObjectTypeCallProperty;
exports.isObjectTypeIndexer = isObjectTypeIndexer;
exports.isObjectTypeProperty = isObjectTypeProperty;
exports.isObjectTypeSpreadProperty = isObjectTypeSpreadProperty;
exports.isOpaqueType = isOpaqueType;
exports.isQualifiedTypeIdentifier = isQualifiedTypeIdentifier;
exports.isStringLiteralTypeAnnotation = isStringLiteralTypeAnnotation;
exports.isStringTypeAnnotation = isStringTypeAnnotation;
exports.isThisTypeAnnotation = isThisTypeAnnotation;
exports.isTupleTypeAnnotation = isTupleTypeAnnotation;
exports.isTypeofTypeAnnotation = isTypeofTypeAnnotation;
exports.isTypeAlias = isTypeAlias;
exports.isTypeAnnotation = isTypeAnnotation;
exports.isTypeCastExpression = isTypeCastExpression;
exports.isTypeParameter = isTypeParameter;
exports.isTypeParameterDeclaration = isTypeParameterDeclaration;
exports.isTypeParameterInstantiation = isTypeParameterInstantiation;
exports.isUnionTypeAnnotation = isUnionTypeAnnotation;
exports.isVariance = isVariance;
exports.isVoidTypeAnnotation = isVoidTypeAnnotation;
exports.isJSXAttribute = isJSXAttribute;
exports.isJSXClosingElement = isJSXClosingElement;
exports.isJSXElement = isJSXElement;
exports.isJSXEmptyExpression = isJSXEmptyExpression;
exports.isJSXExpressionContainer = isJSXExpressionContainer;
exports.isJSXSpreadChild = isJSXSpreadChild;
exports.isJSXIdentifier = isJSXIdentifier;
exports.isJSXMemberExpression = isJSXMemberExpression;
exports.isJSXNamespacedName = isJSXNamespacedName;
exports.isJSXOpeningElement = isJSXOpeningElement;
exports.isJSXSpreadAttribute = isJSXSpreadAttribute;
exports.isJSXText = isJSXText;
exports.isJSXFragment = isJSXFragment;
exports.isJSXOpeningFragment = isJSXOpeningFragment;
exports.isJSXClosingFragment = isJSXClosingFragment;
exports.isNoop = isNoop;
exports.isParenthesizedExpression = isParenthesizedExpression;
exports.isAwaitExpression = isAwaitExpression;
exports.isBindExpression = isBindExpression;
exports.isClassProperty = isClassProperty;
exports.isOptionalMemberExpression = isOptionalMemberExpression;
exports.isPipelineTopicExpression = isPipelineTopicExpression;
exports.isPipelineBareFunction = isPipelineBareFunction;
exports.isPipelinePrimaryTopicReference = isPipelinePrimaryTopicReference;
exports.isOptionalCallExpression = isOptionalCallExpression;
exports.isClassPrivateProperty = isClassPrivateProperty;
exports.isClassPrivateMethod = isClassPrivateMethod;
exports.isImport = isImport;
exports.isDecorator = isDecorator;
exports.isDoExpression = isDoExpression;
exports.isExportDefaultSpecifier = isExportDefaultSpecifier;
exports.isExportNamespaceSpecifier = isExportNamespaceSpecifier;
exports.isPrivateName = isPrivateName;
exports.isBigIntLiteral = isBigIntLiteral;
exports.isTSParameterProperty = isTSParameterProperty;
exports.isTSDeclareFunction = isTSDeclareFunction;
exports.isTSDeclareMethod = isTSDeclareMethod;
exports.isTSQualifiedName = isTSQualifiedName;
exports.isTSCallSignatureDeclaration = isTSCallSignatureDeclaration;
exports.isTSConstructSignatureDeclaration = isTSConstructSignatureDeclaration;
exports.isTSPropertySignature = isTSPropertySignature;
exports.isTSMethodSignature = isTSMethodSignature;
exports.isTSIndexSignature = isTSIndexSignature;
exports.isTSAnyKeyword = isTSAnyKeyword;
exports.isTSUnknownKeyword = isTSUnknownKeyword;
exports.isTSNumberKeyword = isTSNumberKeyword;
exports.isTSObjectKeyword = isTSObjectKeyword;
exports.isTSBooleanKeyword = isTSBooleanKeyword;
exports.isTSStringKeyword = isTSStringKeyword;
exports.isTSSymbolKeyword = isTSSymbolKeyword;
exports.isTSVoidKeyword = isTSVoidKeyword;
exports.isTSUndefinedKeyword = isTSUndefinedKeyword;
exports.isTSNullKeyword = isTSNullKeyword;
exports.isTSNeverKeyword = isTSNeverKeyword;
exports.isTSThisType = isTSThisType;
exports.isTSFunctionType = isTSFunctionType;
exports.isTSConstructorType = isTSConstructorType;
exports.isTSTypeReference = isTSTypeReference;
exports.isTSTypePredicate = isTSTypePredicate;
exports.isTSTypeQuery = isTSTypeQuery;
exports.isTSTypeLiteral = isTSTypeLiteral;
exports.isTSArrayType = isTSArrayType;
exports.isTSTupleType = isTSTupleType;
exports.isTSOptionalType = isTSOptionalType;
exports.isTSRestType = isTSRestType;
exports.isTSUnionType = isTSUnionType;
exports.isTSIntersectionType = isTSIntersectionType;
exports.isTSConditionalType = isTSConditionalType;
exports.isTSInferType = isTSInferType;
exports.isTSParenthesizedType = isTSParenthesizedType;
exports.isTSTypeOperator = isTSTypeOperator;
exports.isTSIndexedAccessType = isTSIndexedAccessType;
exports.isTSMappedType = isTSMappedType;
exports.isTSLiteralType = isTSLiteralType;
exports.isTSExpressionWithTypeArguments = isTSExpressionWithTypeArguments;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
exports.isTSInterfaceBody = isTSInterfaceBody;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
exports.isTSAsExpression = isTSAsExpression;
exports.isTSTypeAssertion = isTSTypeAssertion;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
exports.isTSEnumMember = isTSEnumMember;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
exports.isTSModuleBlock = isTSModuleBlock;
exports.isTSImportType = isTSImportType;
exports.isTSImportEqualsDeclaration = isTSImportEqualsDeclaration;
exports.isTSExternalModuleReference = isTSExternalModuleReference;
exports.isTSNonNullExpression = isTSNonNullExpression;
exports.isTSExportAssignment = isTSExportAssignment;
exports.isTSNamespaceExportDeclaration = isTSNamespaceExportDeclaration;
exports.isTSTypeAnnotation = isTSTypeAnnotation;
exports.isTSTypeParameterInstantiation = isTSTypeParameterInstantiation;
exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
exports.isTSTypeParameter = isTSTypeParameter;
exports.isExpression = isExpression;
exports.isBinary = isBinary;
exports.isScopable = isScopable;
exports.isBlockParent = isBlockParent;
exports.isBlock = isBlock;
exports.isStatement = isStatement;
exports.isTerminatorless = isTerminatorless;
exports.isCompletionStatement = isCompletionStatement;
exports.isConditional = isConditional;
exports.isLoop = isLoop;
exports.isWhile = isWhile;
exports.isExpressionWrapper = isExpressionWrapper;
exports.isFor = isFor;
exports.isForXStatement = isForXStatement;
exports.isFunction = isFunction;
exports.isFunctionParent = isFunctionParent;
exports.isPureish = isPureish;
exports.isDeclaration = isDeclaration;
exports.isPatternLike = isPatternLike;
exports.isLVal = isLVal;
exports.isTSEntityName = isTSEntityName;
exports.isLiteral = isLiteral;
exports.isImmutable = isImmutable;
exports.isUserWhitespacable = isUserWhitespacable;
exports.isMethod = isMethod;
exports.isObjectMember = isObjectMember;
exports.isProperty = isProperty;
exports.isUnaryLike = isUnaryLike;
exports.isPattern = isPattern;
exports.isClass = isClass;
exports.isModuleDeclaration = isModuleDeclaration;
exports.isExportDeclaration = isExportDeclaration;
exports.isModuleSpecifier = isModuleSpecifier;
exports.isFlow = isFlow;
exports.isFlowType = isFlowType;
exports.isFlowBaseAnnotation = isFlowBaseAnnotation;
exports.isFlowDeclaration = isFlowDeclaration;
exports.isFlowPredicate = isFlowPredicate;
exports.isJSX = isJSX;
exports.isPrivate = isPrivate;
exports.isTSTypeElement = isTSTypeElement;
exports.isTSType = isTSType;
exports.isNumberLiteral = isNumberLiteral;
exports.isRegexLiteral = isRegexLiteral;
exports.isRestProperty = isRestProperty;
exports.isSpreadProperty = isSpreadProperty;

var _shallowEqual = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isArrayExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBinaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BinaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterpreterDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterpreterDirective") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDirective(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Directive") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDirectiveLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DirectiveLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlockStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBreakStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BreakStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCatchClause(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CatchClause") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isConditionalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ConditionalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isContinueStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ContinueStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDebuggerStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DebuggerStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDoWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoWhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEmptyStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpressionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "File") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForInStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForInStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Identifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLabeledStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LabeledStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumericLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumericLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRegExpLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegExpLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLogicalExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LogicalExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNewExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NewExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isProgram(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Program") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRestElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isReturnStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ReturnStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSequenceExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SequenceExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSwitchCase(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchCase") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSwitchStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SwitchStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThisExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThrowStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThrowStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTryStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TryStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnaryExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUpdateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UpdateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariableDeclarator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VariableDeclarator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWhileStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WhileStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWithStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "WithStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAssignmentPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AssignmentPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrayPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrowFunctionExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrowFunctionExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportNamedDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamedDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForOfStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForOfStatement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImportSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ImportSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMetaProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MetaProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectPattern") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSpreadElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSuper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Super") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTaggedTemplateExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TaggedTemplateExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTemplateElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTemplateLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TemplateLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isYieldExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "YieldExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAnyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AnyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isArrayTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ArrayTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBooleanLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BooleanLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassImplements(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassImplements") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareClass") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareInterface(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareInterface") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModule(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModule") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareModuleExports(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareModuleExports") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareTypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareOpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareVariable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareVariable") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclareExportAllDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclareExportAllDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclaredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DeclaredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExistsTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExistsTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionTypeParam(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionTypeParam") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isGenericTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "GenericTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInferredPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InferredPredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceExtends(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceExtends") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isInterfaceTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "InterfaceTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isIntersectionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "IntersectionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMixedTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "MixedTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isEmptyTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "EmptyTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNullableTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NullableTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeInternalSlot(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeInternalSlot") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeCallProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeCallProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeIndexer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeIndexer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectTypeSpreadProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectTypeSpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOpaqueType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OpaqueType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isQualifiedTypeIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "QualifiedTypeIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringLiteralTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringLiteralTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStringTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "StringTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isThisTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ThisTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTupleTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TupleTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeofTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeofTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeAlias(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAlias") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeCastExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeCastExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnionTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnionTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVariance(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Variance") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isVoidTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "VoidTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXEmptyExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXEmptyExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXExpressionContainer(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXExpressionContainer") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadChild(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadChild") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXIdentifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXIdentifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXNamespacedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXNamespacedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningElement") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXSpreadAttribute(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXSpreadAttribute") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXText(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXText") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXOpeningFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXOpeningFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSXClosingFragment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSXClosingFragment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Noop") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isParenthesizedExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ParenthesizedExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isAwaitExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "AwaitExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBindExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BindExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOptionalMemberExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalMemberExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelineTopicExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineTopicExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelineBareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelineBareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPipelinePrimaryTopicReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PipelinePrimaryTopicReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isOptionalCallExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "OptionalCallExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClassPrivateMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ClassPrivateMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImport(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Import") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDecorator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Decorator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDoExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "DoExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDefaultSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDefaultSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportNamespaceSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportNamespaceSpecifier") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPrivateName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PrivateName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBigIntLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BigIntLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSParameterProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParameterProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareFunction") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSDeclareMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSDeclareMethod") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSQualifiedName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSQualifiedName") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSCallSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSCallSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructSignatureDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructSignatureDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSPropertySignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSPropertySignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSMethodSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMethodSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexSignature(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexSignature") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSAnyKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAnyKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUnknownKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnknownKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNumberKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNumberKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSObjectKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSObjectKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSBooleanKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSBooleanKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSStringKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSStringKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSSymbolKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSSymbolKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSVoidKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSVoidKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUndefinedKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUndefinedKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNullKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNullKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNeverKeyword(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNeverKeyword") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSThisType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSThisType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSFunctionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSFunctionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConstructorType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConstructorType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypePredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypePredicate") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeQuery(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeQuery") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSArrayType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSArrayType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTupleType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTupleType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSOptionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSOptionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSRestType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSRestType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSUnionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSUnionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIntersectionType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIntersectionType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSConditionalType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSConditionalType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInferType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInferType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSParenthesizedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSParenthesizedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeOperator(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeOperator") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSIndexedAccessType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSIndexedAccessType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSMappedType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSMappedType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSLiteralType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSLiteralType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExpressionWithTypeArguments(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExpressionWithTypeArguments") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSInterfaceBody(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSInterfaceBody") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAliasDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAliasDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSAsExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSAsExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAssertion(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAssertion") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEnumMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEnumMember") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSModuleBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSModuleBlock") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSImportType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportType") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSImportEqualsDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSImportEqualsDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExternalModuleReference(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExternalModuleReference") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNonNullExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNonNullExpression") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSExportAssignment(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSExportAssignment") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSNamespaceExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSNamespaceExportDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeAnnotation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterInstantiation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterInstantiation") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameterDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameterDeclaration") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeParameter(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeParameter") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpression(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Expression" || "ArrayExpression" === nodeType || "AssignmentExpression" === nodeType || "BinaryExpression" === nodeType || "CallExpression" === nodeType || "ConditionalExpression" === nodeType || "FunctionExpression" === nodeType || "Identifier" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "LogicalExpression" === nodeType || "MemberExpression" === nodeType || "NewExpression" === nodeType || "ObjectExpression" === nodeType || "SequenceExpression" === nodeType || "ThisExpression" === nodeType || "UnaryExpression" === nodeType || "UpdateExpression" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassExpression" === nodeType || "MetaProperty" === nodeType || "Super" === nodeType || "TaggedTemplateExpression" === nodeType || "TemplateLiteral" === nodeType || "YieldExpression" === nodeType || "TypeCastExpression" === nodeType || "JSXElement" === nodeType || "JSXFragment" === nodeType || "ParenthesizedExpression" === nodeType || "AwaitExpression" === nodeType || "BindExpression" === nodeType || "OptionalMemberExpression" === nodeType || "PipelinePrimaryTopicReference" === nodeType || "OptionalCallExpression" === nodeType || "Import" === nodeType || "DoExpression" === nodeType || "BigIntLiteral" === nodeType || "TSAsExpression" === nodeType || "TSTypeAssertion" === nodeType || "TSNonNullExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBinary(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Binary" || "BinaryExpression" === nodeType || "LogicalExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isScopable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Scopable" || "BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassDeclaration" === nodeType || "ClassExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlockParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "BlockParent" || "BlockStatement" === nodeType || "CatchClause" === nodeType || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "Program" === nodeType || "ObjectMethod" === nodeType || "SwitchStatement" === nodeType || "WhileStatement" === nodeType || "ArrowFunctionExpression" === nodeType || "ForOfStatement" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isBlock(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Block" || "BlockStatement" === nodeType || "Program" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Statement" || "BlockStatement" === nodeType || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "DebuggerStatement" === nodeType || "DoWhileStatement" === nodeType || "EmptyStatement" === nodeType || "ExpressionStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "FunctionDeclaration" === nodeType || "IfStatement" === nodeType || "LabeledStatement" === nodeType || "ReturnStatement" === nodeType || "SwitchStatement" === nodeType || "ThrowStatement" === nodeType || "TryStatement" === nodeType || "VariableDeclaration" === nodeType || "WhileStatement" === nodeType || "WithStatement" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ForOfStatement" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType || "TSImportEqualsDeclaration" === nodeType || "TSExportAssignment" === nodeType || "TSNamespaceExportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTerminatorless(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Terminatorless" || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType || "YieldExpression" === nodeType || "AwaitExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isCompletionStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "CompletionStatement" || "BreakStatement" === nodeType || "ContinueStatement" === nodeType || "ReturnStatement" === nodeType || "ThrowStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isConditional(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Conditional" || "ConditionalExpression" === nodeType || "IfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLoop(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Loop" || "DoWhileStatement" === nodeType || "ForInStatement" === nodeType || "ForStatement" === nodeType || "WhileStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isWhile(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "While" || "DoWhileStatement" === nodeType || "WhileStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExpressionWrapper(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExpressionWrapper" || "ExpressionStatement" === nodeType || "TypeCastExpression" === nodeType || "ParenthesizedExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFor(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "For" || "ForInStatement" === nodeType || "ForStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isForXStatement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ForXStatement" || "ForInStatement" === nodeType || "ForOfStatement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunction(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Function" || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFunctionParent(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FunctionParent" || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "ObjectMethod" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPureish(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Pureish" || "FunctionDeclaration" === nodeType || "FunctionExpression" === nodeType || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "ArrowFunctionExpression" === nodeType || "ClassDeclaration" === nodeType || "ClassExpression" === nodeType || "BigIntLiteral" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Declaration" || "FunctionDeclaration" === nodeType || "VariableDeclaration" === nodeType || "ClassDeclaration" === nodeType || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType || "TSDeclareFunction" === nodeType || "TSInterfaceDeclaration" === nodeType || "TSTypeAliasDeclaration" === nodeType || "TSEnumDeclaration" === nodeType || "TSModuleDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPatternLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "PatternLike" || "Identifier" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLVal(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "LVal" || "Identifier" === nodeType || "MemberExpression" === nodeType || "RestElement" === nodeType || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType || "TSParameterProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSEntityName(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSEntityName" || "Identifier" === nodeType || "TSQualifiedName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isLiteral(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Literal" || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "RegExpLiteral" === nodeType || "TemplateLiteral" === nodeType || "BigIntLiteral" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isImmutable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Immutable" || "StringLiteral" === nodeType || "NumericLiteral" === nodeType || "NullLiteral" === nodeType || "BooleanLiteral" === nodeType || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXOpeningElement" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType || "BigIntLiteral" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUserWhitespacable(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UserWhitespacable" || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isMethod(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Method" || "ObjectMethod" === nodeType || "ClassMethod" === nodeType || "ClassPrivateMethod" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isObjectMember(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ObjectMember" || "ObjectMethod" === nodeType || "ObjectProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isProperty(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Property" || "ObjectProperty" === nodeType || "ClassProperty" === nodeType || "ClassPrivateProperty" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isUnaryLike(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "UnaryLike" || "UnaryExpression" === nodeType || "SpreadElement" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPattern(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Pattern" || "AssignmentPattern" === nodeType || "ArrayPattern" === nodeType || "ObjectPattern" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isClass(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Class" || "ClassDeclaration" === nodeType || "ClassExpression" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleDeclaration" || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType || "ImportDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isExportDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ExportDeclaration" || "ExportAllDeclaration" === nodeType || "ExportDefaultDeclaration" === nodeType || "ExportNamedDeclaration" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isModuleSpecifier(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "ModuleSpecifier" || "ExportSpecifier" === nodeType || "ImportDefaultSpecifier" === nodeType || "ImportNamespaceSpecifier" === nodeType || "ImportSpecifier" === nodeType || "ExportDefaultSpecifier" === nodeType || "ExportNamespaceSpecifier" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlow(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Flow" || "AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ClassImplements" === nodeType || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "DeclaredPredicate" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "FunctionTypeParam" === nodeType || "GenericTypeAnnotation" === nodeType || "InferredPredicate" === nodeType || "InterfaceExtends" === nodeType || "InterfaceDeclaration" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "ObjectTypeInternalSlot" === nodeType || "ObjectTypeCallProperty" === nodeType || "ObjectTypeIndexer" === nodeType || "ObjectTypeProperty" === nodeType || "ObjectTypeSpreadProperty" === nodeType || "OpaqueType" === nodeType || "QualifiedTypeIdentifier" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "TypeAlias" === nodeType || "TypeAnnotation" === nodeType || "TypeCastExpression" === nodeType || "TypeParameter" === nodeType || "TypeParameterDeclaration" === nodeType || "TypeParameterInstantiation" === nodeType || "UnionTypeAnnotation" === nodeType || "Variance" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowType" || "AnyTypeAnnotation" === nodeType || "ArrayTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "BooleanLiteralTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "ExistsTypeAnnotation" === nodeType || "FunctionTypeAnnotation" === nodeType || "GenericTypeAnnotation" === nodeType || "InterfaceTypeAnnotation" === nodeType || "IntersectionTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NullableTypeAnnotation" === nodeType || "NumberLiteralTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "ObjectTypeAnnotation" === nodeType || "StringLiteralTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "TupleTypeAnnotation" === nodeType || "TypeofTypeAnnotation" === nodeType || "UnionTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowBaseAnnotation(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowBaseAnnotation" || "AnyTypeAnnotation" === nodeType || "BooleanTypeAnnotation" === nodeType || "NullLiteralTypeAnnotation" === nodeType || "MixedTypeAnnotation" === nodeType || "EmptyTypeAnnotation" === nodeType || "NumberTypeAnnotation" === nodeType || "StringTypeAnnotation" === nodeType || "ThisTypeAnnotation" === nodeType || "VoidTypeAnnotation" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowDeclaration(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowDeclaration" || "DeclareClass" === nodeType || "DeclareFunction" === nodeType || "DeclareInterface" === nodeType || "DeclareModule" === nodeType || "DeclareModuleExports" === nodeType || "DeclareTypeAlias" === nodeType || "DeclareOpaqueType" === nodeType || "DeclareVariable" === nodeType || "DeclareExportDeclaration" === nodeType || "DeclareExportAllDeclaration" === nodeType || "InterfaceDeclaration" === nodeType || "OpaqueType" === nodeType || "TypeAlias" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isFlowPredicate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "FlowPredicate" || "DeclaredPredicate" === nodeType || "InferredPredicate" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isJSX(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "JSX" || "JSXAttribute" === nodeType || "JSXClosingElement" === nodeType || "JSXElement" === nodeType || "JSXEmptyExpression" === nodeType || "JSXExpressionContainer" === nodeType || "JSXSpreadChild" === nodeType || "JSXIdentifier" === nodeType || "JSXMemberExpression" === nodeType || "JSXNamespacedName" === nodeType || "JSXOpeningElement" === nodeType || "JSXSpreadAttribute" === nodeType || "JSXText" === nodeType || "JSXFragment" === nodeType || "JSXOpeningFragment" === nodeType || "JSXClosingFragment" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isPrivate(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "Private" || "ClassPrivateProperty" === nodeType || "ClassPrivateMethod" === nodeType || "PrivateName" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSTypeElement(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSTypeElement" || "TSCallSignatureDeclaration" === nodeType || "TSConstructSignatureDeclaration" === nodeType || "TSPropertySignature" === nodeType || "TSMethodSignature" === nodeType || "TSIndexSignature" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isTSType(node, opts) {
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "TSType" || "TSAnyKeyword" === nodeType || "TSUnknownKeyword" === nodeType || "TSNumberKeyword" === nodeType || "TSObjectKeyword" === nodeType || "TSBooleanKeyword" === nodeType || "TSStringKeyword" === nodeType || "TSSymbolKeyword" === nodeType || "TSVoidKeyword" === nodeType || "TSUndefinedKeyword" === nodeType || "TSNullKeyword" === nodeType || "TSNeverKeyword" === nodeType || "TSThisType" === nodeType || "TSFunctionType" === nodeType || "TSConstructorType" === nodeType || "TSTypeReference" === nodeType || "TSTypePredicate" === nodeType || "TSTypeQuery" === nodeType || "TSTypeLiteral" === nodeType || "TSArrayType" === nodeType || "TSTupleType" === nodeType || "TSOptionalType" === nodeType || "TSRestType" === nodeType || "TSUnionType" === nodeType || "TSIntersectionType" === nodeType || "TSConditionalType" === nodeType || "TSInferType" === nodeType || "TSParenthesizedType" === nodeType || "TSTypeOperator" === nodeType || "TSIndexedAccessType" === nodeType || "TSMappedType" === nodeType || "TSLiteralType" === nodeType || "TSExpressionWithTypeArguments" === nodeType || "TSImportType" === nodeType) {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "NumberLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RegexLiteral") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "RestProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

function isSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  if (!node) return false;
  const nodeType = node.type;

  if (nodeType === "SpreadProperty") {
    if (typeof opts === "undefined") {
      return true;
    } else {
      return (0, _shallowEqual.default)(node, opts);
    }
  }

  return false;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayExpression = exports.ArrayExpression = ArrayExpression;
exports.assignmentExpression = exports.AssignmentExpression = AssignmentExpression;
exports.binaryExpression = exports.BinaryExpression = BinaryExpression;
exports.interpreterDirective = exports.InterpreterDirective = InterpreterDirective;
exports.directive = exports.Directive = Directive;
exports.directiveLiteral = exports.DirectiveLiteral = DirectiveLiteral;
exports.blockStatement = exports.BlockStatement = BlockStatement;
exports.breakStatement = exports.BreakStatement = BreakStatement;
exports.callExpression = exports.CallExpression = CallExpression;
exports.catchClause = exports.CatchClause = CatchClause;
exports.conditionalExpression = exports.ConditionalExpression = ConditionalExpression;
exports.continueStatement = exports.ContinueStatement = ContinueStatement;
exports.debuggerStatement = exports.DebuggerStatement = DebuggerStatement;
exports.doWhileStatement = exports.DoWhileStatement = DoWhileStatement;
exports.emptyStatement = exports.EmptyStatement = EmptyStatement;
exports.expressionStatement = exports.ExpressionStatement = ExpressionStatement;
exports.file = exports.File = File;
exports.forInStatement = exports.ForInStatement = ForInStatement;
exports.forStatement = exports.ForStatement = ForStatement;
exports.functionDeclaration = exports.FunctionDeclaration = FunctionDeclaration;
exports.functionExpression = exports.FunctionExpression = FunctionExpression;
exports.identifier = exports.Identifier = Identifier;
exports.ifStatement = exports.IfStatement = IfStatement;
exports.labeledStatement = exports.LabeledStatement = LabeledStatement;
exports.stringLiteral = exports.StringLiteral = StringLiteral;
exports.numericLiteral = exports.NumericLiteral = NumericLiteral;
exports.nullLiteral = exports.NullLiteral = NullLiteral;
exports.booleanLiteral = exports.BooleanLiteral = BooleanLiteral;
exports.regExpLiteral = exports.RegExpLiteral = RegExpLiteral;
exports.logicalExpression = exports.LogicalExpression = LogicalExpression;
exports.memberExpression = exports.MemberExpression = MemberExpression;
exports.newExpression = exports.NewExpression = NewExpression;
exports.program = exports.Program = Program;
exports.objectExpression = exports.ObjectExpression = ObjectExpression;
exports.objectMethod = exports.ObjectMethod = ObjectMethod;
exports.objectProperty = exports.ObjectProperty = ObjectProperty;
exports.restElement = exports.RestElement = RestElement;
exports.returnStatement = exports.ReturnStatement = ReturnStatement;
exports.sequenceExpression = exports.SequenceExpression = SequenceExpression;
exports.switchCase = exports.SwitchCase = SwitchCase;
exports.switchStatement = exports.SwitchStatement = SwitchStatement;
exports.thisExpression = exports.ThisExpression = ThisExpression;
exports.throwStatement = exports.ThrowStatement = ThrowStatement;
exports.tryStatement = exports.TryStatement = TryStatement;
exports.unaryExpression = exports.UnaryExpression = UnaryExpression;
exports.updateExpression = exports.UpdateExpression = UpdateExpression;
exports.variableDeclaration = exports.VariableDeclaration = VariableDeclaration;
exports.variableDeclarator = exports.VariableDeclarator = VariableDeclarator;
exports.whileStatement = exports.WhileStatement = WhileStatement;
exports.withStatement = exports.WithStatement = WithStatement;
exports.assignmentPattern = exports.AssignmentPattern = AssignmentPattern;
exports.arrayPattern = exports.ArrayPattern = ArrayPattern;
exports.arrowFunctionExpression = exports.ArrowFunctionExpression = ArrowFunctionExpression;
exports.classBody = exports.ClassBody = ClassBody;
exports.classDeclaration = exports.ClassDeclaration = ClassDeclaration;
exports.classExpression = exports.ClassExpression = ClassExpression;
exports.exportAllDeclaration = exports.ExportAllDeclaration = ExportAllDeclaration;
exports.exportDefaultDeclaration = exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
exports.exportNamedDeclaration = exports.ExportNamedDeclaration = ExportNamedDeclaration;
exports.exportSpecifier = exports.ExportSpecifier = ExportSpecifier;
exports.forOfStatement = exports.ForOfStatement = ForOfStatement;
exports.importDeclaration = exports.ImportDeclaration = ImportDeclaration;
exports.importDefaultSpecifier = exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
exports.importNamespaceSpecifier = exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
exports.importSpecifier = exports.ImportSpecifier = ImportSpecifier;
exports.metaProperty = exports.MetaProperty = MetaProperty;
exports.classMethod = exports.ClassMethod = ClassMethod;
exports.objectPattern = exports.ObjectPattern = ObjectPattern;
exports.spreadElement = exports.SpreadElement = SpreadElement;
exports.super = exports.Super = Super;
exports.taggedTemplateExpression = exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.templateElement = exports.TemplateElement = TemplateElement;
exports.templateLiteral = exports.TemplateLiteral = TemplateLiteral;
exports.yieldExpression = exports.YieldExpression = YieldExpression;
exports.anyTypeAnnotation = exports.AnyTypeAnnotation = AnyTypeAnnotation;
exports.arrayTypeAnnotation = exports.ArrayTypeAnnotation = ArrayTypeAnnotation;
exports.booleanTypeAnnotation = exports.BooleanTypeAnnotation = BooleanTypeAnnotation;
exports.booleanLiteralTypeAnnotation = exports.BooleanLiteralTypeAnnotation = BooleanLiteralTypeAnnotation;
exports.nullLiteralTypeAnnotation = exports.NullLiteralTypeAnnotation = NullLiteralTypeAnnotation;
exports.classImplements = exports.ClassImplements = ClassImplements;
exports.declareClass = exports.DeclareClass = DeclareClass;
exports.declareFunction = exports.DeclareFunction = DeclareFunction;
exports.declareInterface = exports.DeclareInterface = DeclareInterface;
exports.declareModule = exports.DeclareModule = DeclareModule;
exports.declareModuleExports = exports.DeclareModuleExports = DeclareModuleExports;
exports.declareTypeAlias = exports.DeclareTypeAlias = DeclareTypeAlias;
exports.declareOpaqueType = exports.DeclareOpaqueType = DeclareOpaqueType;
exports.declareVariable = exports.DeclareVariable = DeclareVariable;
exports.declareExportDeclaration = exports.DeclareExportDeclaration = DeclareExportDeclaration;
exports.declareExportAllDeclaration = exports.DeclareExportAllDeclaration = DeclareExportAllDeclaration;
exports.declaredPredicate = exports.DeclaredPredicate = DeclaredPredicate;
exports.existsTypeAnnotation = exports.ExistsTypeAnnotation = ExistsTypeAnnotation;
exports.functionTypeAnnotation = exports.FunctionTypeAnnotation = FunctionTypeAnnotation;
exports.functionTypeParam = exports.FunctionTypeParam = FunctionTypeParam;
exports.genericTypeAnnotation = exports.GenericTypeAnnotation = GenericTypeAnnotation;
exports.inferredPredicate = exports.InferredPredicate = InferredPredicate;
exports.interfaceExtends = exports.InterfaceExtends = InterfaceExtends;
exports.interfaceDeclaration = exports.InterfaceDeclaration = InterfaceDeclaration;
exports.interfaceTypeAnnotation = exports.InterfaceTypeAnnotation = InterfaceTypeAnnotation;
exports.intersectionTypeAnnotation = exports.IntersectionTypeAnnotation = IntersectionTypeAnnotation;
exports.mixedTypeAnnotation = exports.MixedTypeAnnotation = MixedTypeAnnotation;
exports.emptyTypeAnnotation = exports.EmptyTypeAnnotation = EmptyTypeAnnotation;
exports.nullableTypeAnnotation = exports.NullableTypeAnnotation = NullableTypeAnnotation;
exports.numberLiteralTypeAnnotation = exports.NumberLiteralTypeAnnotation = NumberLiteralTypeAnnotation;
exports.numberTypeAnnotation = exports.NumberTypeAnnotation = NumberTypeAnnotation;
exports.objectTypeAnnotation = exports.ObjectTypeAnnotation = ObjectTypeAnnotation;
exports.objectTypeInternalSlot = exports.ObjectTypeInternalSlot = ObjectTypeInternalSlot;
exports.objectTypeCallProperty = exports.ObjectTypeCallProperty = ObjectTypeCallProperty;
exports.objectTypeIndexer = exports.ObjectTypeIndexer = ObjectTypeIndexer;
exports.objectTypeProperty = exports.ObjectTypeProperty = ObjectTypeProperty;
exports.objectTypeSpreadProperty = exports.ObjectTypeSpreadProperty = ObjectTypeSpreadProperty;
exports.opaqueType = exports.OpaqueType = OpaqueType;
exports.qualifiedTypeIdentifier = exports.QualifiedTypeIdentifier = QualifiedTypeIdentifier;
exports.stringLiteralTypeAnnotation = exports.StringLiteralTypeAnnotation = StringLiteralTypeAnnotation;
exports.stringTypeAnnotation = exports.StringTypeAnnotation = StringTypeAnnotation;
exports.thisTypeAnnotation = exports.ThisTypeAnnotation = ThisTypeAnnotation;
exports.tupleTypeAnnotation = exports.TupleTypeAnnotation = TupleTypeAnnotation;
exports.typeofTypeAnnotation = exports.TypeofTypeAnnotation = TypeofTypeAnnotation;
exports.typeAlias = exports.TypeAlias = TypeAlias;
exports.typeAnnotation = exports.TypeAnnotation = TypeAnnotation;
exports.typeCastExpression = exports.TypeCastExpression = TypeCastExpression;
exports.typeParameter = exports.TypeParameter = TypeParameter;
exports.typeParameterDeclaration = exports.TypeParameterDeclaration = TypeParameterDeclaration;
exports.typeParameterInstantiation = exports.TypeParameterInstantiation = TypeParameterInstantiation;
exports.unionTypeAnnotation = exports.UnionTypeAnnotation = UnionTypeAnnotation;
exports.variance = exports.Variance = Variance;
exports.voidTypeAnnotation = exports.VoidTypeAnnotation = VoidTypeAnnotation;
exports.jSXAttribute = exports.jsxAttribute = exports.JSXAttribute = JSXAttribute;
exports.jSXClosingElement = exports.jsxClosingElement = exports.JSXClosingElement = JSXClosingElement;
exports.jSXElement = exports.jsxElement = exports.JSXElement = JSXElement;
exports.jSXEmptyExpression = exports.jsxEmptyExpression = exports.JSXEmptyExpression = JSXEmptyExpression;
exports.jSXExpressionContainer = exports.jsxExpressionContainer = exports.JSXExpressionContainer = JSXExpressionContainer;
exports.jSXSpreadChild = exports.jsxSpreadChild = exports.JSXSpreadChild = JSXSpreadChild;
exports.jSXIdentifier = exports.jsxIdentifier = exports.JSXIdentifier = JSXIdentifier;
exports.jSXMemberExpression = exports.jsxMemberExpression = exports.JSXMemberExpression = JSXMemberExpression;
exports.jSXNamespacedName = exports.jsxNamespacedName = exports.JSXNamespacedName = JSXNamespacedName;
exports.jSXOpeningElement = exports.jsxOpeningElement = exports.JSXOpeningElement = JSXOpeningElement;
exports.jSXSpreadAttribute = exports.jsxSpreadAttribute = exports.JSXSpreadAttribute = JSXSpreadAttribute;
exports.jSXText = exports.jsxText = exports.JSXText = JSXText;
exports.jSXFragment = exports.jsxFragment = exports.JSXFragment = JSXFragment;
exports.jSXOpeningFragment = exports.jsxOpeningFragment = exports.JSXOpeningFragment = JSXOpeningFragment;
exports.jSXClosingFragment = exports.jsxClosingFragment = exports.JSXClosingFragment = JSXClosingFragment;
exports.noop = exports.Noop = Noop;
exports.parenthesizedExpression = exports.ParenthesizedExpression = ParenthesizedExpression;
exports.awaitExpression = exports.AwaitExpression = AwaitExpression;
exports.bindExpression = exports.BindExpression = BindExpression;
exports.classProperty = exports.ClassProperty = ClassProperty;
exports.optionalMemberExpression = exports.OptionalMemberExpression = OptionalMemberExpression;
exports.pipelineTopicExpression = exports.PipelineTopicExpression = PipelineTopicExpression;
exports.pipelineBareFunction = exports.PipelineBareFunction = PipelineBareFunction;
exports.pipelinePrimaryTopicReference = exports.PipelinePrimaryTopicReference = PipelinePrimaryTopicReference;
exports.optionalCallExpression = exports.OptionalCallExpression = OptionalCallExpression;
exports.classPrivateProperty = exports.ClassPrivateProperty = ClassPrivateProperty;
exports.classPrivateMethod = exports.ClassPrivateMethod = ClassPrivateMethod;
exports.import = exports.Import = Import;
exports.decorator = exports.Decorator = Decorator;
exports.doExpression = exports.DoExpression = DoExpression;
exports.exportDefaultSpecifier = exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
exports.exportNamespaceSpecifier = exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
exports.privateName = exports.PrivateName = PrivateName;
exports.bigIntLiteral = exports.BigIntLiteral = BigIntLiteral;
exports.tSParameterProperty = exports.tsParameterProperty = exports.TSParameterProperty = TSParameterProperty;
exports.tSDeclareFunction = exports.tsDeclareFunction = exports.TSDeclareFunction = TSDeclareFunction;
exports.tSDeclareMethod = exports.tsDeclareMethod = exports.TSDeclareMethod = TSDeclareMethod;
exports.tSQualifiedName = exports.tsQualifiedName = exports.TSQualifiedName = TSQualifiedName;
exports.tSCallSignatureDeclaration = exports.tsCallSignatureDeclaration = exports.TSCallSignatureDeclaration = TSCallSignatureDeclaration;
exports.tSConstructSignatureDeclaration = exports.tsConstructSignatureDeclaration = exports.TSConstructSignatureDeclaration = TSConstructSignatureDeclaration;
exports.tSPropertySignature = exports.tsPropertySignature = exports.TSPropertySignature = TSPropertySignature;
exports.tSMethodSignature = exports.tsMethodSignature = exports.TSMethodSignature = TSMethodSignature;
exports.tSIndexSignature = exports.tsIndexSignature = exports.TSIndexSignature = TSIndexSignature;
exports.tSAnyKeyword = exports.tsAnyKeyword = exports.TSAnyKeyword = TSAnyKeyword;
exports.tSUnknownKeyword = exports.tsUnknownKeyword = exports.TSUnknownKeyword = TSUnknownKeyword;
exports.tSNumberKeyword = exports.tsNumberKeyword = exports.TSNumberKeyword = TSNumberKeyword;
exports.tSObjectKeyword = exports.tsObjectKeyword = exports.TSObjectKeyword = TSObjectKeyword;
exports.tSBooleanKeyword = exports.tsBooleanKeyword = exports.TSBooleanKeyword = TSBooleanKeyword;
exports.tSStringKeyword = exports.tsStringKeyword = exports.TSStringKeyword = TSStringKeyword;
exports.tSSymbolKeyword = exports.tsSymbolKeyword = exports.TSSymbolKeyword = TSSymbolKeyword;
exports.tSVoidKeyword = exports.tsVoidKeyword = exports.TSVoidKeyword = TSVoidKeyword;
exports.tSUndefinedKeyword = exports.tsUndefinedKeyword = exports.TSUndefinedKeyword = TSUndefinedKeyword;
exports.tSNullKeyword = exports.tsNullKeyword = exports.TSNullKeyword = TSNullKeyword;
exports.tSNeverKeyword = exports.tsNeverKeyword = exports.TSNeverKeyword = TSNeverKeyword;
exports.tSThisType = exports.tsThisType = exports.TSThisType = TSThisType;
exports.tSFunctionType = exports.tsFunctionType = exports.TSFunctionType = TSFunctionType;
exports.tSConstructorType = exports.tsConstructorType = exports.TSConstructorType = TSConstructorType;
exports.tSTypeReference = exports.tsTypeReference = exports.TSTypeReference = TSTypeReference;
exports.tSTypePredicate = exports.tsTypePredicate = exports.TSTypePredicate = TSTypePredicate;
exports.tSTypeQuery = exports.tsTypeQuery = exports.TSTypeQuery = TSTypeQuery;
exports.tSTypeLiteral = exports.tsTypeLiteral = exports.TSTypeLiteral = TSTypeLiteral;
exports.tSArrayType = exports.tsArrayType = exports.TSArrayType = TSArrayType;
exports.tSTupleType = exports.tsTupleType = exports.TSTupleType = TSTupleType;
exports.tSOptionalType = exports.tsOptionalType = exports.TSOptionalType = TSOptionalType;
exports.tSRestType = exports.tsRestType = exports.TSRestType = TSRestType;
exports.tSUnionType = exports.tsUnionType = exports.TSUnionType = TSUnionType;
exports.tSIntersectionType = exports.tsIntersectionType = exports.TSIntersectionType = TSIntersectionType;
exports.tSConditionalType = exports.tsConditionalType = exports.TSConditionalType = TSConditionalType;
exports.tSInferType = exports.tsInferType = exports.TSInferType = TSInferType;
exports.tSParenthesizedType = exports.tsParenthesizedType = exports.TSParenthesizedType = TSParenthesizedType;
exports.tSTypeOperator = exports.tsTypeOperator = exports.TSTypeOperator = TSTypeOperator;
exports.tSIndexedAccessType = exports.tsIndexedAccessType = exports.TSIndexedAccessType = TSIndexedAccessType;
exports.tSMappedType = exports.tsMappedType = exports.TSMappedType = TSMappedType;
exports.tSLiteralType = exports.tsLiteralType = exports.TSLiteralType = TSLiteralType;
exports.tSExpressionWithTypeArguments = exports.tsExpressionWithTypeArguments = exports.TSExpressionWithTypeArguments = TSExpressionWithTypeArguments;
exports.tSInterfaceDeclaration = exports.tsInterfaceDeclaration = exports.TSInterfaceDeclaration = TSInterfaceDeclaration;
exports.tSInterfaceBody = exports.tsInterfaceBody = exports.TSInterfaceBody = TSInterfaceBody;
exports.tSTypeAliasDeclaration = exports.tsTypeAliasDeclaration = exports.TSTypeAliasDeclaration = TSTypeAliasDeclaration;
exports.tSAsExpression = exports.tsAsExpression = exports.TSAsExpression = TSAsExpression;
exports.tSTypeAssertion = exports.tsTypeAssertion = exports.TSTypeAssertion = TSTypeAssertion;
exports.tSEnumDeclaration = exports.tsEnumDeclaration = exports.TSEnumDeclaration = TSEnumDeclaration;
exports.tSEnumMember = exports.tsEnumMember = exports.TSEnumMember = TSEnumMember;
exports.tSModuleDeclaration = exports.tsModuleDeclaration = exports.TSModuleDeclaration = TSModuleDeclaration;
exports.tSModuleBlock = exports.tsModuleBlock = exports.TSModuleBlock = TSModuleBlock;
exports.tSImportType = exports.tsImportType = exports.TSImportType = TSImportType;
exports.tSImportEqualsDeclaration = exports.tsImportEqualsDeclaration = exports.TSImportEqualsDeclaration = TSImportEqualsDeclaration;
exports.tSExternalModuleReference = exports.tsExternalModuleReference = exports.TSExternalModuleReference = TSExternalModuleReference;
exports.tSNonNullExpression = exports.tsNonNullExpression = exports.TSNonNullExpression = TSNonNullExpression;
exports.tSExportAssignment = exports.tsExportAssignment = exports.TSExportAssignment = TSExportAssignment;
exports.tSNamespaceExportDeclaration = exports.tsNamespaceExportDeclaration = exports.TSNamespaceExportDeclaration = TSNamespaceExportDeclaration;
exports.tSTypeAnnotation = exports.tsTypeAnnotation = exports.TSTypeAnnotation = TSTypeAnnotation;
exports.tSTypeParameterInstantiation = exports.tsTypeParameterInstantiation = exports.TSTypeParameterInstantiation = TSTypeParameterInstantiation;
exports.tSTypeParameterDeclaration = exports.tsTypeParameterDeclaration = exports.TSTypeParameterDeclaration = TSTypeParameterDeclaration;
exports.tSTypeParameter = exports.tsTypeParameter = exports.TSTypeParameter = TSTypeParameter;
exports.numberLiteral = exports.NumberLiteral = NumberLiteral;
exports.regexLiteral = exports.RegexLiteral = RegexLiteral;
exports.restProperty = exports.RestProperty = RestProperty;
exports.spreadProperty = exports.SpreadProperty = SpreadProperty;

var _builder = _interopRequireDefault(__webpack_require__(82));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ArrayExpression(...args) {
  return (0, _builder.default)("ArrayExpression", ...args);
}

function AssignmentExpression(...args) {
  return (0, _builder.default)("AssignmentExpression", ...args);
}

function BinaryExpression(...args) {
  return (0, _builder.default)("BinaryExpression", ...args);
}

function InterpreterDirective(...args) {
  return (0, _builder.default)("InterpreterDirective", ...args);
}

function Directive(...args) {
  return (0, _builder.default)("Directive", ...args);
}

function DirectiveLiteral(...args) {
  return (0, _builder.default)("DirectiveLiteral", ...args);
}

function BlockStatement(...args) {
  return (0, _builder.default)("BlockStatement", ...args);
}

function BreakStatement(...args) {
  return (0, _builder.default)("BreakStatement", ...args);
}

function CallExpression(...args) {
  return (0, _builder.default)("CallExpression", ...args);
}

function CatchClause(...args) {
  return (0, _builder.default)("CatchClause", ...args);
}

function ConditionalExpression(...args) {
  return (0, _builder.default)("ConditionalExpression", ...args);
}

function ContinueStatement(...args) {
  return (0, _builder.default)("ContinueStatement", ...args);
}

function DebuggerStatement(...args) {
  return (0, _builder.default)("DebuggerStatement", ...args);
}

function DoWhileStatement(...args) {
  return (0, _builder.default)("DoWhileStatement", ...args);
}

function EmptyStatement(...args) {
  return (0, _builder.default)("EmptyStatement", ...args);
}

function ExpressionStatement(...args) {
  return (0, _builder.default)("ExpressionStatement", ...args);
}

function File(...args) {
  return (0, _builder.default)("File", ...args);
}

function ForInStatement(...args) {
  return (0, _builder.default)("ForInStatement", ...args);
}

function ForStatement(...args) {
  return (0, _builder.default)("ForStatement", ...args);
}

function FunctionDeclaration(...args) {
  return (0, _builder.default)("FunctionDeclaration", ...args);
}

function FunctionExpression(...args) {
  return (0, _builder.default)("FunctionExpression", ...args);
}

function Identifier(...args) {
  return (0, _builder.default)("Identifier", ...args);
}

function IfStatement(...args) {
  return (0, _builder.default)("IfStatement", ...args);
}

function LabeledStatement(...args) {
  return (0, _builder.default)("LabeledStatement", ...args);
}

function StringLiteral(...args) {
  return (0, _builder.default)("StringLiteral", ...args);
}

function NumericLiteral(...args) {
  return (0, _builder.default)("NumericLiteral", ...args);
}

function NullLiteral(...args) {
  return (0, _builder.default)("NullLiteral", ...args);
}

function BooleanLiteral(...args) {
  return (0, _builder.default)("BooleanLiteral", ...args);
}

function RegExpLiteral(...args) {
  return (0, _builder.default)("RegExpLiteral", ...args);
}

function LogicalExpression(...args) {
  return (0, _builder.default)("LogicalExpression", ...args);
}

function MemberExpression(...args) {
  return (0, _builder.default)("MemberExpression", ...args);
}

function NewExpression(...args) {
  return (0, _builder.default)("NewExpression", ...args);
}

function Program(...args) {
  return (0, _builder.default)("Program", ...args);
}

function ObjectExpression(...args) {
  return (0, _builder.default)("ObjectExpression", ...args);
}

function ObjectMethod(...args) {
  return (0, _builder.default)("ObjectMethod", ...args);
}

function ObjectProperty(...args) {
  return (0, _builder.default)("ObjectProperty", ...args);
}

function RestElement(...args) {
  return (0, _builder.default)("RestElement", ...args);
}

function ReturnStatement(...args) {
  return (0, _builder.default)("ReturnStatement", ...args);
}

function SequenceExpression(...args) {
  return (0, _builder.default)("SequenceExpression", ...args);
}

function SwitchCase(...args) {
  return (0, _builder.default)("SwitchCase", ...args);
}

function SwitchStatement(...args) {
  return (0, _builder.default)("SwitchStatement", ...args);
}

function ThisExpression(...args) {
  return (0, _builder.default)("ThisExpression", ...args);
}

function ThrowStatement(...args) {
  return (0, _builder.default)("ThrowStatement", ...args);
}

function TryStatement(...args) {
  return (0, _builder.default)("TryStatement", ...args);
}

function UnaryExpression(...args) {
  return (0, _builder.default)("UnaryExpression", ...args);
}

function UpdateExpression(...args) {
  return (0, _builder.default)("UpdateExpression", ...args);
}

function VariableDeclaration(...args) {
  return (0, _builder.default)("VariableDeclaration", ...args);
}

function VariableDeclarator(...args) {
  return (0, _builder.default)("VariableDeclarator", ...args);
}

function WhileStatement(...args) {
  return (0, _builder.default)("WhileStatement", ...args);
}

function WithStatement(...args) {
  return (0, _builder.default)("WithStatement", ...args);
}

function AssignmentPattern(...args) {
  return (0, _builder.default)("AssignmentPattern", ...args);
}

function ArrayPattern(...args) {
  return (0, _builder.default)("ArrayPattern", ...args);
}

function ArrowFunctionExpression(...args) {
  return (0, _builder.default)("ArrowFunctionExpression", ...args);
}

function ClassBody(...args) {
  return (0, _builder.default)("ClassBody", ...args);
}

function ClassDeclaration(...args) {
  return (0, _builder.default)("ClassDeclaration", ...args);
}

function ClassExpression(...args) {
  return (0, _builder.default)("ClassExpression", ...args);
}

function ExportAllDeclaration(...args) {
  return (0, _builder.default)("ExportAllDeclaration", ...args);
}

function ExportDefaultDeclaration(...args) {
  return (0, _builder.default)("ExportDefaultDeclaration", ...args);
}

function ExportNamedDeclaration(...args) {
  return (0, _builder.default)("ExportNamedDeclaration", ...args);
}

function ExportSpecifier(...args) {
  return (0, _builder.default)("ExportSpecifier", ...args);
}

function ForOfStatement(...args) {
  return (0, _builder.default)("ForOfStatement", ...args);
}

function ImportDeclaration(...args) {
  return (0, _builder.default)("ImportDeclaration", ...args);
}

function ImportDefaultSpecifier(...args) {
  return (0, _builder.default)("ImportDefaultSpecifier", ...args);
}

function ImportNamespaceSpecifier(...args) {
  return (0, _builder.default)("ImportNamespaceSpecifier", ...args);
}

function ImportSpecifier(...args) {
  return (0, _builder.default)("ImportSpecifier", ...args);
}

function MetaProperty(...args) {
  return (0, _builder.default)("MetaProperty", ...args);
}

function ClassMethod(...args) {
  return (0, _builder.default)("ClassMethod", ...args);
}

function ObjectPattern(...args) {
  return (0, _builder.default)("ObjectPattern", ...args);
}

function SpreadElement(...args) {
  return (0, _builder.default)("SpreadElement", ...args);
}

function Super(...args) {
  return (0, _builder.default)("Super", ...args);
}

function TaggedTemplateExpression(...args) {
  return (0, _builder.default)("TaggedTemplateExpression", ...args);
}

function TemplateElement(...args) {
  return (0, _builder.default)("TemplateElement", ...args);
}

function TemplateLiteral(...args) {
  return (0, _builder.default)("TemplateLiteral", ...args);
}

function YieldExpression(...args) {
  return (0, _builder.default)("YieldExpression", ...args);
}

function AnyTypeAnnotation(...args) {
  return (0, _builder.default)("AnyTypeAnnotation", ...args);
}

function ArrayTypeAnnotation(...args) {
  return (0, _builder.default)("ArrayTypeAnnotation", ...args);
}

function BooleanTypeAnnotation(...args) {
  return (0, _builder.default)("BooleanTypeAnnotation", ...args);
}

function BooleanLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("BooleanLiteralTypeAnnotation", ...args);
}

function NullLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("NullLiteralTypeAnnotation", ...args);
}

function ClassImplements(...args) {
  return (0, _builder.default)("ClassImplements", ...args);
}

function DeclareClass(...args) {
  return (0, _builder.default)("DeclareClass", ...args);
}

function DeclareFunction(...args) {
  return (0, _builder.default)("DeclareFunction", ...args);
}

function DeclareInterface(...args) {
  return (0, _builder.default)("DeclareInterface", ...args);
}

function DeclareModule(...args) {
  return (0, _builder.default)("DeclareModule", ...args);
}

function DeclareModuleExports(...args) {
  return (0, _builder.default)("DeclareModuleExports", ...args);
}

function DeclareTypeAlias(...args) {
  return (0, _builder.default)("DeclareTypeAlias", ...args);
}

function DeclareOpaqueType(...args) {
  return (0, _builder.default)("DeclareOpaqueType", ...args);
}

function DeclareVariable(...args) {
  return (0, _builder.default)("DeclareVariable", ...args);
}

function DeclareExportDeclaration(...args) {
  return (0, _builder.default)("DeclareExportDeclaration", ...args);
}

function DeclareExportAllDeclaration(...args) {
  return (0, _builder.default)("DeclareExportAllDeclaration", ...args);
}

function DeclaredPredicate(...args) {
  return (0, _builder.default)("DeclaredPredicate", ...args);
}

function ExistsTypeAnnotation(...args) {
  return (0, _builder.default)("ExistsTypeAnnotation", ...args);
}

function FunctionTypeAnnotation(...args) {
  return (0, _builder.default)("FunctionTypeAnnotation", ...args);
}

function FunctionTypeParam(...args) {
  return (0, _builder.default)("FunctionTypeParam", ...args);
}

function GenericTypeAnnotation(...args) {
  return (0, _builder.default)("GenericTypeAnnotation", ...args);
}

function InferredPredicate(...args) {
  return (0, _builder.default)("InferredPredicate", ...args);
}

function InterfaceExtends(...args) {
  return (0, _builder.default)("InterfaceExtends", ...args);
}

function InterfaceDeclaration(...args) {
  return (0, _builder.default)("InterfaceDeclaration", ...args);
}

function InterfaceTypeAnnotation(...args) {
  return (0, _builder.default)("InterfaceTypeAnnotation", ...args);
}

function IntersectionTypeAnnotation(...args) {
  return (0, _builder.default)("IntersectionTypeAnnotation", ...args);
}

function MixedTypeAnnotation(...args) {
  return (0, _builder.default)("MixedTypeAnnotation", ...args);
}

function EmptyTypeAnnotation(...args) {
  return (0, _builder.default)("EmptyTypeAnnotation", ...args);
}

function NullableTypeAnnotation(...args) {
  return (0, _builder.default)("NullableTypeAnnotation", ...args);
}

function NumberLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("NumberLiteralTypeAnnotation", ...args);
}

function NumberTypeAnnotation(...args) {
  return (0, _builder.default)("NumberTypeAnnotation", ...args);
}

function ObjectTypeAnnotation(...args) {
  return (0, _builder.default)("ObjectTypeAnnotation", ...args);
}

function ObjectTypeInternalSlot(...args) {
  return (0, _builder.default)("ObjectTypeInternalSlot", ...args);
}

function ObjectTypeCallProperty(...args) {
  return (0, _builder.default)("ObjectTypeCallProperty", ...args);
}

function ObjectTypeIndexer(...args) {
  return (0, _builder.default)("ObjectTypeIndexer", ...args);
}

function ObjectTypeProperty(...args) {
  return (0, _builder.default)("ObjectTypeProperty", ...args);
}

function ObjectTypeSpreadProperty(...args) {
  return (0, _builder.default)("ObjectTypeSpreadProperty", ...args);
}

function OpaqueType(...args) {
  return (0, _builder.default)("OpaqueType", ...args);
}

function QualifiedTypeIdentifier(...args) {
  return (0, _builder.default)("QualifiedTypeIdentifier", ...args);
}

function StringLiteralTypeAnnotation(...args) {
  return (0, _builder.default)("StringLiteralTypeAnnotation", ...args);
}

function StringTypeAnnotation(...args) {
  return (0, _builder.default)("StringTypeAnnotation", ...args);
}

function ThisTypeAnnotation(...args) {
  return (0, _builder.default)("ThisTypeAnnotation", ...args);
}

function TupleTypeAnnotation(...args) {
  return (0, _builder.default)("TupleTypeAnnotation", ...args);
}

function TypeofTypeAnnotation(...args) {
  return (0, _builder.default)("TypeofTypeAnnotation", ...args);
}

function TypeAlias(...args) {
  return (0, _builder.default)("TypeAlias", ...args);
}

function TypeAnnotation(...args) {
  return (0, _builder.default)("TypeAnnotation", ...args);
}

function TypeCastExpression(...args) {
  return (0, _builder.default)("TypeCastExpression", ...args);
}

function TypeParameter(...args) {
  return (0, _builder.default)("TypeParameter", ...args);
}

function TypeParameterDeclaration(...args) {
  return (0, _builder.default)("TypeParameterDeclaration", ...args);
}

function TypeParameterInstantiation(...args) {
  return (0, _builder.default)("TypeParameterInstantiation", ...args);
}

function UnionTypeAnnotation(...args) {
  return (0, _builder.default)("UnionTypeAnnotation", ...args);
}

function Variance(...args) {
  return (0, _builder.default)("Variance", ...args);
}

function VoidTypeAnnotation(...args) {
  return (0, _builder.default)("VoidTypeAnnotation", ...args);
}

function JSXAttribute(...args) {
  return (0, _builder.default)("JSXAttribute", ...args);
}

function JSXClosingElement(...args) {
  return (0, _builder.default)("JSXClosingElement", ...args);
}

function JSXElement(...args) {
  return (0, _builder.default)("JSXElement", ...args);
}

function JSXEmptyExpression(...args) {
  return (0, _builder.default)("JSXEmptyExpression", ...args);
}

function JSXExpressionContainer(...args) {
  return (0, _builder.default)("JSXExpressionContainer", ...args);
}

function JSXSpreadChild(...args) {
  return (0, _builder.default)("JSXSpreadChild", ...args);
}

function JSXIdentifier(...args) {
  return (0, _builder.default)("JSXIdentifier", ...args);
}

function JSXMemberExpression(...args) {
  return (0, _builder.default)("JSXMemberExpression", ...args);
}

function JSXNamespacedName(...args) {
  return (0, _builder.default)("JSXNamespacedName", ...args);
}

function JSXOpeningElement(...args) {
  return (0, _builder.default)("JSXOpeningElement", ...args);
}

function JSXSpreadAttribute(...args) {
  return (0, _builder.default)("JSXSpreadAttribute", ...args);
}

function JSXText(...args) {
  return (0, _builder.default)("JSXText", ...args);
}

function JSXFragment(...args) {
  return (0, _builder.default)("JSXFragment", ...args);
}

function JSXOpeningFragment(...args) {
  return (0, _builder.default)("JSXOpeningFragment", ...args);
}

function JSXClosingFragment(...args) {
  return (0, _builder.default)("JSXClosingFragment", ...args);
}

function Noop(...args) {
  return (0, _builder.default)("Noop", ...args);
}

function ParenthesizedExpression(...args) {
  return (0, _builder.default)("ParenthesizedExpression", ...args);
}

function AwaitExpression(...args) {
  return (0, _builder.default)("AwaitExpression", ...args);
}

function BindExpression(...args) {
  return (0, _builder.default)("BindExpression", ...args);
}

function ClassProperty(...args) {
  return (0, _builder.default)("ClassProperty", ...args);
}

function OptionalMemberExpression(...args) {
  return (0, _builder.default)("OptionalMemberExpression", ...args);
}

function PipelineTopicExpression(...args) {
  return (0, _builder.default)("PipelineTopicExpression", ...args);
}

function PipelineBareFunction(...args) {
  return (0, _builder.default)("PipelineBareFunction", ...args);
}

function PipelinePrimaryTopicReference(...args) {
  return (0, _builder.default)("PipelinePrimaryTopicReference", ...args);
}

function OptionalCallExpression(...args) {
  return (0, _builder.default)("OptionalCallExpression", ...args);
}

function ClassPrivateProperty(...args) {
  return (0, _builder.default)("ClassPrivateProperty", ...args);
}

function ClassPrivateMethod(...args) {
  return (0, _builder.default)("ClassPrivateMethod", ...args);
}

function Import(...args) {
  return (0, _builder.default)("Import", ...args);
}

function Decorator(...args) {
  return (0, _builder.default)("Decorator", ...args);
}

function DoExpression(...args) {
  return (0, _builder.default)("DoExpression", ...args);
}

function ExportDefaultSpecifier(...args) {
  return (0, _builder.default)("ExportDefaultSpecifier", ...args);
}

function ExportNamespaceSpecifier(...args) {
  return (0, _builder.default)("ExportNamespaceSpecifier", ...args);
}

function PrivateName(...args) {
  return (0, _builder.default)("PrivateName", ...args);
}

function BigIntLiteral(...args) {
  return (0, _builder.default)("BigIntLiteral", ...args);
}

function TSParameterProperty(...args) {
  return (0, _builder.default)("TSParameterProperty", ...args);
}

function TSDeclareFunction(...args) {
  return (0, _builder.default)("TSDeclareFunction", ...args);
}

function TSDeclareMethod(...args) {
  return (0, _builder.default)("TSDeclareMethod", ...args);
}

function TSQualifiedName(...args) {
  return (0, _builder.default)("TSQualifiedName", ...args);
}

function TSCallSignatureDeclaration(...args) {
  return (0, _builder.default)("TSCallSignatureDeclaration", ...args);
}

function TSConstructSignatureDeclaration(...args) {
  return (0, _builder.default)("TSConstructSignatureDeclaration", ...args);
}

function TSPropertySignature(...args) {
  return (0, _builder.default)("TSPropertySignature", ...args);
}

function TSMethodSignature(...args) {
  return (0, _builder.default)("TSMethodSignature", ...args);
}

function TSIndexSignature(...args) {
  return (0, _builder.default)("TSIndexSignature", ...args);
}

function TSAnyKeyword(...args) {
  return (0, _builder.default)("TSAnyKeyword", ...args);
}

function TSUnknownKeyword(...args) {
  return (0, _builder.default)("TSUnknownKeyword", ...args);
}

function TSNumberKeyword(...args) {
  return (0, _builder.default)("TSNumberKeyword", ...args);
}

function TSObjectKeyword(...args) {
  return (0, _builder.default)("TSObjectKeyword", ...args);
}

function TSBooleanKeyword(...args) {
  return (0, _builder.default)("TSBooleanKeyword", ...args);
}

function TSStringKeyword(...args) {
  return (0, _builder.default)("TSStringKeyword", ...args);
}

function TSSymbolKeyword(...args) {
  return (0, _builder.default)("TSSymbolKeyword", ...args);
}

function TSVoidKeyword(...args) {
  return (0, _builder.default)("TSVoidKeyword", ...args);
}

function TSUndefinedKeyword(...args) {
  return (0, _builder.default)("TSUndefinedKeyword", ...args);
}

function TSNullKeyword(...args) {
  return (0, _builder.default)("TSNullKeyword", ...args);
}

function TSNeverKeyword(...args) {
  return (0, _builder.default)("TSNeverKeyword", ...args);
}

function TSThisType(...args) {
  return (0, _builder.default)("TSThisType", ...args);
}

function TSFunctionType(...args) {
  return (0, _builder.default)("TSFunctionType", ...args);
}

function TSConstructorType(...args) {
  return (0, _builder.default)("TSConstructorType", ...args);
}

function TSTypeReference(...args) {
  return (0, _builder.default)("TSTypeReference", ...args);
}

function TSTypePredicate(...args) {
  return (0, _builder.default)("TSTypePredicate", ...args);
}

function TSTypeQuery(...args) {
  return (0, _builder.default)("TSTypeQuery", ...args);
}

function TSTypeLiteral(...args) {
  return (0, _builder.default)("TSTypeLiteral", ...args);
}

function TSArrayType(...args) {
  return (0, _builder.default)("TSArrayType", ...args);
}

function TSTupleType(...args) {
  return (0, _builder.default)("TSTupleType", ...args);
}

function TSOptionalType(...args) {
  return (0, _builder.default)("TSOptionalType", ...args);
}

function TSRestType(...args) {
  return (0, _builder.default)("TSRestType", ...args);
}

function TSUnionType(...args) {
  return (0, _builder.default)("TSUnionType", ...args);
}

function TSIntersectionType(...args) {
  return (0, _builder.default)("TSIntersectionType", ...args);
}

function TSConditionalType(...args) {
  return (0, _builder.default)("TSConditionalType", ...args);
}

function TSInferType(...args) {
  return (0, _builder.default)("TSInferType", ...args);
}

function TSParenthesizedType(...args) {
  return (0, _builder.default)("TSParenthesizedType", ...args);
}

function TSTypeOperator(...args) {
  return (0, _builder.default)("TSTypeOperator", ...args);
}

function TSIndexedAccessType(...args) {
  return (0, _builder.default)("TSIndexedAccessType", ...args);
}

function TSMappedType(...args) {
  return (0, _builder.default)("TSMappedType", ...args);
}

function TSLiteralType(...args) {
  return (0, _builder.default)("TSLiteralType", ...args);
}

function TSExpressionWithTypeArguments(...args) {
  return (0, _builder.default)("TSExpressionWithTypeArguments", ...args);
}

function TSInterfaceDeclaration(...args) {
  return (0, _builder.default)("TSInterfaceDeclaration", ...args);
}

function TSInterfaceBody(...args) {
  return (0, _builder.default)("TSInterfaceBody", ...args);
}

function TSTypeAliasDeclaration(...args) {
  return (0, _builder.default)("TSTypeAliasDeclaration", ...args);
}

function TSAsExpression(...args) {
  return (0, _builder.default)("TSAsExpression", ...args);
}

function TSTypeAssertion(...args) {
  return (0, _builder.default)("TSTypeAssertion", ...args);
}

function TSEnumDeclaration(...args) {
  return (0, _builder.default)("TSEnumDeclaration", ...args);
}

function TSEnumMember(...args) {
  return (0, _builder.default)("TSEnumMember", ...args);
}

function TSModuleDeclaration(...args) {
  return (0, _builder.default)("TSModuleDeclaration", ...args);
}

function TSModuleBlock(...args) {
  return (0, _builder.default)("TSModuleBlock", ...args);
}

function TSImportType(...args) {
  return (0, _builder.default)("TSImportType", ...args);
}

function TSImportEqualsDeclaration(...args) {
  return (0, _builder.default)("TSImportEqualsDeclaration", ...args);
}

function TSExternalModuleReference(...args) {
  return (0, _builder.default)("TSExternalModuleReference", ...args);
}

function TSNonNullExpression(...args) {
  return (0, _builder.default)("TSNonNullExpression", ...args);
}

function TSExportAssignment(...args) {
  return (0, _builder.default)("TSExportAssignment", ...args);
}

function TSNamespaceExportDeclaration(...args) {
  return (0, _builder.default)("TSNamespaceExportDeclaration", ...args);
}

function TSTypeAnnotation(...args) {
  return (0, _builder.default)("TSTypeAnnotation", ...args);
}

function TSTypeParameterInstantiation(...args) {
  return (0, _builder.default)("TSTypeParameterInstantiation", ...args);
}

function TSTypeParameterDeclaration(...args) {
  return (0, _builder.default)("TSTypeParameterDeclaration", ...args);
}

function TSTypeParameter(...args) {
  return (0, _builder.default)("TSTypeParameter", ...args);
}

function NumberLiteral(...args) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  return NumberLiteral("NumberLiteral", ...args);
}

function RegexLiteral(...args) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  return RegexLiteral("RegexLiteral", ...args);
}

function RestProperty(...args) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  return RestProperty("RestProperty", ...args);
}

function SpreadProperty(...args) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  return SpreadProperty("SpreadProperty", ...args);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(43);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VISITOR_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.VISITOR_KEYS;
  }
});
Object.defineProperty(exports, "ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "FLIPPED_ALIAS_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.FLIPPED_ALIAS_KEYS;
  }
});
Object.defineProperty(exports, "NODE_FIELDS", {
  enumerable: true,
  get: function () {
    return _utils.NODE_FIELDS;
  }
});
Object.defineProperty(exports, "BUILDER_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.BUILDER_KEYS;
  }
});
Object.defineProperty(exports, "DEPRECATED_KEYS", {
  enumerable: true,
  get: function () {
    return _utils.DEPRECATED_KEYS;
  }
});
exports.TYPES = void 0;

function _toFastProperties() {
  const data = _interopRequireDefault(__webpack_require__(153));

  _toFastProperties = function () {
    return data;
  };

  return data;
}

__webpack_require__(34);

__webpack_require__(37);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

__webpack_require__(160);

__webpack_require__(161);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _toFastProperties().default)(_utils.VISITOR_KEYS);
(0, _toFastProperties().default)(_utils.ALIAS_KEYS);
(0, _toFastProperties().default)(_utils.FLIPPED_ALIAS_KEYS);
(0, _toFastProperties().default)(_utils.NODE_FIELDS);
(0, _toFastProperties().default)(_utils.BUILDER_KEYS);
(0, _toFastProperties().default)(_utils.DEPRECATED_KEYS);
const TYPES = Object.keys(_utils.VISITOR_KEYS).concat(Object.keys(_utils.FLIPPED_ALIAS_KEYS)).concat(Object.keys(_utils.DEPRECATED_KEYS));
exports.TYPES = TYPES;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
exports.typeIs = typeIs;
exports.validateType = validateType;
exports.validateOptional = validateOptional;
exports.validateOptionalType = validateOptionalType;
exports.arrayOf = arrayOf;
exports.arrayOfType = arrayOfType;
exports.validateArrayOfType = validateArrayOfType;
exports.assertEach = assertEach;
exports.assertOneOf = assertOneOf;
exports.assertNodeType = assertNodeType;
exports.assertNodeOrValueType = assertNodeOrValueType;
exports.assertValueType = assertValueType;
exports.chain = chain;
exports.default = defineType;
exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.FLIPPED_ALIAS_KEYS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = void 0;

var _is = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const VISITOR_KEYS = {};
exports.VISITOR_KEYS = VISITOR_KEYS;
const ALIAS_KEYS = {};
exports.ALIAS_KEYS = ALIAS_KEYS;
const FLIPPED_ALIAS_KEYS = {};
exports.FLIPPED_ALIAS_KEYS = FLIPPED_ALIAS_KEYS;
const NODE_FIELDS = {};
exports.NODE_FIELDS = NODE_FIELDS;
const BUILDER_KEYS = {};
exports.BUILDER_KEYS = BUILDER_KEYS;
const DEPRECATED_KEYS = {};
exports.DEPRECATED_KEYS = DEPRECATED_KEYS;

function getType(val) {
  if (Array.isArray(val)) {
    return "array";
  } else if (val === null) {
    return "null";
  } else if (val === undefined) {
    return "undefined";
  } else {
    return typeof val;
  }
}

function validate(validate) {
  return {
    validate
  };
}

function typeIs(typeName) {
  return typeof typeName === "string" ? assertNodeType(typeName) : assertNodeType(...typeName);
}

function validateType(typeName) {
  return validate(typeIs(typeName));
}

function validateOptional(validate) {
  return {
    validate,
    optional: true
  };
}

function validateOptionalType(typeName) {
  return {
    validate: typeIs(typeName),
    optional: true
  };
}

function arrayOf(elementType) {
  return chain(assertValueType("array"), assertEach(elementType));
}

function arrayOfType(typeName) {
  return arrayOf(typeIs(typeName));
}

function validateArrayOfType(typeName) {
  return validate(arrayOfType(typeName));
}

function assertEach(callback) {
  function validator(node, key, val) {
    if (!Array.isArray(val)) return;

    for (let i = 0; i < val.length; i++) {
      callback(node, `${key}[${i}]`, val[i]);
    }
  }

  validator.each = callback;
  return validator;
}

function assertOneOf(...values) {
  function validate(node, key, val) {
    if (values.indexOf(val) < 0) {
      throw new TypeError(`Property ${key} expected value to be one of ${JSON.stringify(values)} but got ${JSON.stringify(val)}`);
    }
  }

  validate.oneOf = values;
  return validate;
}

function assertNodeType(...types) {
  function validate(node, key, val) {
    let valid = false;

    for (const type of types) {
      if ((0, _is.default)(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} ` + `but instead got ${JSON.stringify(val && val.type)}`);
    }
  }

  validate.oneOfNodeTypes = types;
  return validate;
}

function assertNodeOrValueType(...types) {
  function validate(node, key, val) {
    let valid = false;

    for (const type of types) {
      if (getType(val) === type || (0, _is.default)(type, val)) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      throw new TypeError(`Property ${key} of ${node.type} expected node to be of a type ${JSON.stringify(types)} ` + `but instead got ${JSON.stringify(val && val.type)}`);
    }
  }

  validate.oneOfNodeOrValueTypes = types;
  return validate;
}

function assertValueType(type) {
  function validate(node, key, val) {
    const valid = getType(val) === type;

    if (!valid) {
      throw new TypeError(`Property ${key} expected type of ${type} but got ${getType(val)}`);
    }
  }

  validate.type = type;
  return validate;
}

function chain(...fns) {
  function validate(...args) {
    for (const fn of fns) {
      fn(...args);
    }
  }

  validate.chainOf = fns;
  return validate;
}

function defineType(type, opts = {}) {
  const inherits = opts.inherits && store[opts.inherits] || {};
  const fields = opts.fields || inherits.fields || {};
  const visitor = opts.visitor || inherits.visitor || [];
  const aliases = opts.aliases || inherits.aliases || [];
  const builder = opts.builder || inherits.builder || opts.visitor || [];

  if (opts.deprecatedAlias) {
    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
  }

  for (const key of visitor.concat(builder)) {
    fields[key] = fields[key] || {};
  }

  for (const key in fields) {
    const field = fields[key];

    if (builder.indexOf(key) === -1) {
      field.optional = true;
    }

    if (field.default === undefined) {
      field.default = null;
    } else if (!field.validate) {
      field.validate = assertValueType(getType(field.default));
    }
  }

  VISITOR_KEYS[type] = opts.visitor = visitor;
  BUILDER_KEYS[type] = opts.builder = builder;
  NODE_FIELDS[type] = opts.fields = fields;
  ALIAS_KEYS[type] = opts.aliases = aliases;
  aliases.forEach(alias => {
    FLIPPED_ALIAS_KEYS[alias] = FLIPPED_ALIAS_KEYS[alias] || [];
    FLIPPED_ALIAS_KEYS[alias].push(type);
  });
  store[type] = opts;
}

const store = {};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(96),
    getValue = __webpack_require__(102);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = void 0;
const STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
exports.STATEMENT_OR_BLOCK_KEYS = STATEMENT_OR_BLOCK_KEYS;
const FLATTENABLE_KEYS = ["body", "expressions"];
exports.FLATTENABLE_KEYS = FLATTENABLE_KEYS;
const FOR_INIT_KEYS = ["left", "init"];
exports.FOR_INIT_KEYS = FOR_INIT_KEYS;
const COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
exports.COMMENT_KEYS = COMMENT_KEYS;
const LOGICAL_OPERATORS = ["||", "&&", "??"];
exports.LOGICAL_OPERATORS = LOGICAL_OPERATORS;
const UPDATE_OPERATORS = ["++", "--"];
exports.UPDATE_OPERATORS = UPDATE_OPERATORS;
const BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
exports.BOOLEAN_NUMBER_BINARY_OPERATORS = BOOLEAN_NUMBER_BINARY_OPERATORS;
const EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
exports.EQUALITY_BINARY_OPERATORS = EQUALITY_BINARY_OPERATORS;
const COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
exports.COMPARISON_BINARY_OPERATORS = COMPARISON_BINARY_OPERATORS;
const BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
exports.BOOLEAN_BINARY_OPERATORS = BOOLEAN_BINARY_OPERATORS;
const NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
exports.NUMBER_BINARY_OPERATORS = NUMBER_BINARY_OPERATORS;
const BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS];
exports.BINARY_OPERATORS = BINARY_OPERATORS;
const BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
exports.BOOLEAN_UNARY_OPERATORS = BOOLEAN_UNARY_OPERATORS;
const NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
exports.NUMBER_UNARY_OPERATORS = NUMBER_UNARY_OPERATORS;
const STRING_UNARY_OPERATORS = ["typeof"];
exports.STRING_UNARY_OPERATORS = STRING_UNARY_OPERATORS;
const UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
exports.UNARY_OPERATORS = UNARY_OPERATORS;
const INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.INHERIT_KEYS = INHERIT_KEYS;
const BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.BLOCK_SCOPED_SYMBOL = BLOCK_SCOPED_SYMBOL;
const NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");
exports.NOT_LOCAL_BINDING = NOT_LOCAL_BINDING;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25),
    getRawTag = __webpack_require__(98),
    objectToString = __webpack_require__(99);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidIdentifier;

function _esutils() {
  const data = _interopRequireDefault(__webpack_require__(154));

  _esutils = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidIdentifier(name) {
  if (typeof name !== "string" || _esutils().default.keyword.isReservedWordES6(name, true)) {
    return false;
  } else if (name === "await") {
    return false;
  } else {
    return _esutils().default.keyword.isIdentifierNameES6(name);
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneNode;

var _definitions = __webpack_require__(4);

const has = Function.call.bind(Object.prototype.hasOwnProperty);

function cloneIfNode(obj, deep) {
  if (obj && typeof obj.type === "string" && obj.type !== "CommentLine" && obj.type !== "CommentBlock") {
    return cloneNode(obj, deep);
  }

  return obj;
}

function cloneIfNodeOrArray(obj, deep) {
  if (Array.isArray(obj)) {
    return obj.map(node => cloneIfNode(node, deep));
  }

  return cloneIfNode(obj, deep);
}

function cloneNode(node, deep = true) {
  if (!node) return node;
  const {
    type
  } = node;
  const newNode = {
    type
  };

  if (type === "Identifier") {
    newNode.name = node.name;

    if (has(node, "optional") && typeof node.optional === "boolean") {
      newNode.optional = node.optional;
    }

    if (has(node, "typeAnnotation")) {
      newNode.typeAnnotation = deep ? cloneIfNodeOrArray(node.typeAnnotation, true) : node.typeAnnotation;
    }
  } else if (!has(_definitions.NODE_FIELDS, type)) {
    throw new Error(`Unknown node type: "${type}"`);
  } else {
    for (const field of Object.keys(_definitions.NODE_FIELDS[type])) {
      if (has(node, field)) {
        newNode[field] = deep ? cloneIfNodeOrArray(node[field], true) : node[field];
      }
    }
  }

  if (has(node, "loc")) {
    newNode.loc = node.loc;
  }

  if (has(node, "leadingComments")) {
    newNode.leadingComments = node.leadingComments;
  }

  if (has(node, "innerComments")) {
    newNode.innerComments = node.innerCmments;
  }

  if (has(node, "trailingComments")) {
    newNode.trailingComments = node.trailingComments;
  }

  if (has(node, "extra")) {
    newNode.extra = Object.assign({}, node.extra);
  }

  return newNode;
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("Vue");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(86),
    listCacheDelete = __webpack_require__(87),
    listCacheGet = __webpack_require__(88),
    listCacheHas = __webpack_require__(89),
    listCacheSet = __webpack_require__(90);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(41);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(111);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(46),
    baseAssignValue = __webpack_require__(47);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(43);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBindingIdentifiers;

var _generated = __webpack_require__(1);

function getBindingIdentifiers(node, duplicates, outerOnly) {
  let search = [].concat(node);
  const ids = Object.create(null);

  while (search.length) {
    const id = search.shift();
    if (!id) continue;
    const keys = getBindingIdentifiers.keys[id.type];

    if ((0, _generated.isIdentifier)(id)) {
      if (duplicates) {
        const _ids = ids[id.name] = ids[id.name] || [];

        _ids.push(id);
      } else {
        ids[id.name] = id;
      }

      continue;
    }

    if ((0, _generated.isExportDeclaration)(id)) {
      if ((0, _generated.isDeclaration)(id.declaration)) {
        search.push(id.declaration);
      }

      continue;
    }

    if (outerOnly) {
      if ((0, _generated.isFunctionDeclaration)(id)) {
        search.push(id.id);
        continue;
      }

      if ((0, _generated.isFunctionExpression)(id)) {
        continue;
      }
    }

    if (keys) {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (id[key]) {
          search = search.concat(id[key]);
        }
      }
    }
  }

  return ids;
}

getBindingIdentifiers.keys = {
  DeclareClass: ["id"],
  DeclareFunction: ["id"],
  DeclareModule: ["id"],
  DeclareVariable: ["id"],
  DeclareInterface: ["id"],
  DeclareTypeAlias: ["id"],
  DeclareOpaqueType: ["id"],
  InterfaceDeclaration: ["id"],
  TypeAlias: ["id"],
  OpaqueType: ["id"],
  CatchClause: ["param"],
  LabeledStatement: ["label"],
  UnaryExpression: ["argument"],
  AssignmentExpression: ["left"],
  ImportSpecifier: ["local"],
  ImportNamespaceSpecifier: ["local"],
  ImportDefaultSpecifier: ["local"],
  ImportDeclaration: ["specifiers"],
  ExportSpecifier: ["exported"],
  ExportNamespaceSpecifier: ["exported"],
  ExportDefaultSpecifier: ["exported"],
  FunctionDeclaration: ["id", "params"],
  FunctionExpression: ["id", "params"],
  ArrowFunctionExpression: ["params"],
  ObjectMethod: ["params"],
  ClassMethod: ["params"],
  ForInStatement: ["left"],
  ForOfStatement: ["left"],
  ClassDeclaration: ["id"],
  ClassExpression: ["id"],
  RestElement: ["argument"],
  UpdateExpression: ["argument"],
  ObjectProperty: ["value"],
  AssignmentPattern: ["left"],
  ArrayPattern: ["elements"],
  ObjectPattern: ["properties"],
  VariableDeclaration: ["declarations"],
  VariableDeclarator: ["id"]
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(215).default
var update = add("c3e5085c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;

function shallowEqual(actual, expected) {
  const keys = Object.keys(expected);

  for (const key of keys) {
    if (actual[key] !== expected[key]) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(48),
    baseKeys = __webpack_require__(125),
    isArrayLike = __webpack_require__(52);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(133),
    stubArray = __webpack_require__(54);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(51);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(137),
    Map = __webpack_require__(24),
    Promise = __webpack_require__(138),
    Set = __webpack_require__(58),
    WeakMap = __webpack_require__(139),
    baseGetTag = __webpack_require__(9),
    toSource = __webpack_require__(44);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(142);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patternLikeCommon = exports.functionDeclarationCommon = exports.functionTypeAnnotationCommon = exports.functionCommon = void 0;

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(11));

var _constants = __webpack_require__(8);

var _utils = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _utils.default)("ArrayExpression", {
  fields: {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
      default: []
    }
  },
  visitor: ["elements"],
  aliases: ["Expression"]
});
(0, _utils.default)("AssignmentExpression", {
  fields: {
    operator: {
      validate: (0, _utils.assertValueType)("string")
    },
    left: {
      validate: (0, _utils.assertNodeType)("LVal")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Expression"]
});
(0, _utils.default)("BinaryExpression", {
  builder: ["operator", "left", "right"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.BINARY_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"]
});
(0, _utils.default)("InterpreterDirective", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("Directive", {
  visitor: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertNodeType)("DirectiveLiteral")
    }
  }
});
(0, _utils.default)("DirectiveLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("BlockStatement", {
  builder: ["body", "directives"],
  visitor: ["directives", "body"],
  fields: {
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
});
(0, _utils.default)("BreakStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("CallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName")))
    },
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    },
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("CatchClause", {
  visitor: ["param", "body"],
  fields: {
    param: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  },
  aliases: ["Scopable", "BlockParent"]
});
(0, _utils.default)("ConditionalExpression", {
  visitor: ["test", "consequent", "alternate"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    alternate: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Expression", "Conditional"]
});
(0, _utils.default)("ContinueStatement", {
  visitor: ["label"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    }
  },
  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
});
(0, _utils.default)("DebuggerStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("DoWhileStatement", {
  visitor: ["test", "body"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  },
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
});
(0, _utils.default)("EmptyStatement", {
  aliases: ["Statement"]
});
(0, _utils.default)("ExpressionStatement", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  },
  aliases: ["Statement", "ExpressionWrapper"]
});
(0, _utils.default)("File", {
  builder: ["program", "comments", "tokens"],
  visitor: ["program"],
  fields: {
    program: {
      validate: (0, _utils.assertNodeType)("Program")
    }
  }
});
(0, _utils.default)("ForInStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("ForStatement", {
  visitor: ["init", "test", "update", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
  fields: {
    init: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "Expression"),
      optional: true
    },
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    update: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
const functionCommon = {
  params: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Identifier", "Pattern", "RestElement", "TSParameterProperty")))
  },
  generator: {
    default: false,
    validate: (0, _utils.assertValueType)("boolean")
  },
  async: {
    validate: (0, _utils.assertValueType)("boolean"),
    default: false
  }
};
exports.functionCommon = functionCommon;
const functionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
exports.functionTypeAnnotationCommon = functionTypeAnnotationCommon;
const functionDeclarationCommon = Object.assign({}, functionCommon, {
  declare: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  id: {
    validate: (0, _utils.assertNodeType)("Identifier"),
    optional: true
  }
});
exports.functionDeclarationCommon = functionDeclarationCommon;
(0, _utils.default)("FunctionDeclaration", {
  builder: ["id", "params", "body", "generator", "async"],
  visitor: ["id", "params", "body", "returnType", "typeParameters"],
  fields: Object.assign({}, functionDeclarationCommon, functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
});
(0, _utils.default)("FunctionExpression", {
  inherits: "FunctionDeclaration",
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
const patternLikeCommon = {
  typeAnnotation: {
    validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
  }
};
exports.patternLikeCommon = patternLikeCommon;
(0, _utils.default)("Identifier", {
  builder: ["name"],
  visitor: ["typeAnnotation", "decorators"],
  aliases: ["Expression", "PatternLike", "LVal", "TSEntityName"],
  fields: Object.assign({}, patternLikeCommon, {
    name: {
      validate: (0, _utils.chain)(function (node, key, val) {
        if (!(0, _isValidIdentifier.default)(val)) {}
      }, (0, _utils.assertValueType)("string"))
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _utils.default)("IfStatement", {
  visitor: ["test", "consequent", "alternate"],
  aliases: ["Statement", "Conditional"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    consequent: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    alternate: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("LabeledStatement", {
  visitor: ["label", "body"],
  aliases: ["Statement"],
  fields: {
    label: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    }
  }
});
(0, _utils.default)("StringLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NumericLiteral", {
  builder: ["value"],
  deprecatedAlias: "NumberLiteral",
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("number")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("NullLiteral", {
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("BooleanLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});
(0, _utils.default)("RegExpLiteral", {
  builder: ["pattern", "flags"],
  deprecatedAlias: "RegexLiteral",
  aliases: ["Expression", "Literal"],
  fields: {
    pattern: {
      validate: (0, _utils.assertValueType)("string")
    },
    flags: {
      validate: (0, _utils.assertValueType)("string"),
      default: ""
    }
  }
});
(0, _utils.default)("LogicalExpression", {
  builder: ["operator", "left", "right"],
  visitor: ["left", "right"],
  aliases: ["Binary", "Expression"],
  fields: {
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.LOGICAL_OPERATORS)
    },
    left: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("MemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression", "LVal"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "PrivateName");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _utils.assertOneOf)(true, false),
      optional: true
    }
  }
});
(0, _utils.default)("NewExpression", {
  inherits: "CallExpression"
});
(0, _utils.default)("Program", {
  visitor: ["directives", "body"],
  builder: ["body", "directives", "sourceType", "interpreter"],
  fields: {
    sourceFile: {
      validate: (0, _utils.assertValueType)("string")
    },
    sourceType: {
      validate: (0, _utils.assertOneOf)("script", "module"),
      default: "script"
    },
    interpreter: {
      validate: (0, _utils.assertNodeType)("InterpreterDirective"),
      default: null,
      optional: true
    },
    directives: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Directive"))),
      default: []
    },
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  },
  aliases: ["Scopable", "BlockParent", "Block"]
});
(0, _utils.default)("ObjectExpression", {
  visitor: ["properties"],
  aliases: ["Expression"],
  fields: {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadElement")))
    }
  }
});
(0, _utils.default)("ObjectMethod", {
  builder: ["kind", "key", "params", "body", "computed"],
  fields: Object.assign({}, functionCommon, functionTypeAnnotationCommon, {
    kind: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("method", "get", "set")),
      default: "method"
    },
    computed: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }),
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
});
(0, _utils.default)("ObjectProperty", {
  builder: ["key", "value", "computed", "shorthand", "decorators"],
  fields: {
    computed: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    key: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression", "PatternLike")
    },
    shorthand: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  },
  visitor: ["key", "value", "decorators"],
  aliases: ["UserWhitespacable", "Property", "ObjectMember"]
});
(0, _utils.default)("RestElement", {
  visitor: ["argument", "typeAnnotation"],
  builder: ["argument"],
  aliases: ["LVal", "PatternLike"],
  deprecatedAlias: "RestProperty",
  fields: Object.assign({}, patternLikeCommon, {
    argument: {
      validate: (0, _utils.assertNodeType)("LVal")
    }
  })
});
(0, _utils.default)("ReturnStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, _utils.default)("SequenceExpression", {
  visitor: ["expressions"],
  fields: {
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  },
  aliases: ["Expression"]
});
(0, _utils.default)("SwitchCase", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    consequent: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Statement")))
    }
  }
});
(0, _utils.default)("SwitchStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Statement", "BlockParent", "Scopable"],
  fields: {
    discriminant: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    cases: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("SwitchCase")))
    }
  }
});
(0, _utils.default)("ThisExpression", {
  aliases: ["Expression"]
});
(0, _utils.default)("ThrowStatement", {
  visitor: ["argument"],
  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("TryStatement", {
  visitor: ["block", "handler", "finalizer"],
  aliases: ["Statement"],
  fields: {
    block: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    },
    handler: {
      optional: true,
      validate: (0, _utils.assertNodeType)("CatchClause")
    },
    finalizer: {
      optional: true,
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("UnaryExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: true
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.UNARY_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["UnaryLike", "Expression"]
});
(0, _utils.default)("UpdateExpression", {
  builder: ["operator", "argument", "prefix"],
  fields: {
    prefix: {
      default: false
    },
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    operator: {
      validate: (0, _utils.assertOneOf)(..._constants.UPDATE_OPERATORS)
    }
  },
  visitor: ["argument"],
  aliases: ["Expression"]
});
(0, _utils.default)("VariableDeclaration", {
  builder: ["kind", "declarations"],
  visitor: ["declarations"],
  aliases: ["Statement", "Declaration"],
  fields: {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    kind: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("var", "let", "const"))
    },
    declarations: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("VariableDeclarator")))
    }
  }
});
(0, _utils.default)("VariableDeclarator", {
  visitor: ["id", "init"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("LVal")
    },
    definite: {
      optional: true,
      validate: (0, _utils.assertValueType)("boolean")
    },
    init: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("WhileStatement", {
  visitor: ["test", "body"],
  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
  fields: {
    test: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Statement")
    }
  }
});
(0, _utils.default)("WithStatement", {
  visitor: ["object", "body"],
  aliases: ["Statement"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Statement")
    }
  }
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = is;

var _shallowEqual = _interopRequireDefault(__webpack_require__(23));

var _isType = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function is(type, node, opts) {
  if (!node) return false;
  const matches = (0, _isType.default)(node.type, type);
  if (!matches) return false;

  if (typeof opts === "undefined") {
    return true;
  } else {
    return (0, _shallowEqual.default)(node, opts);
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isType;

var _definitions = __webpack_require__(4);

function isType(nodeType, targetType) {
  if (nodeType === targetType) return true;
  if (_definitions.ALIAS_KEYS[targetType]) return false;
  const aliases = _definitions.FLIPPED_ALIAS_KEYS[targetType];

  if (aliases) {
    if (aliases[0] === nodeType) return true;

    for (const alias of aliases) {
      if (nodeType === alias) return true;
    }
  }

  return false;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classMethodOrDeclareMethodCommon = exports.classMethodOrPropertyCommon = void 0;

var _utils = _interopRequireWildcard(__webpack_require__(5));

var _core = __webpack_require__(34);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("AssignmentPattern", {
  visitor: ["left", "right", "decorators"],
  builder: ["left", "right"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, _core.patternLikeCommon, {
    left: {
      validate: (0, _utils.assertNodeType)("Identifier", "ObjectPattern", "ArrayPattern")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    }
  })
});
(0, _utils.default)("ArrayPattern", {
  visitor: ["elements", "typeAnnotation"],
  builder: ["elements"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, _core.patternLikeCommon, {
    elements: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("PatternLike")))
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator")))
    }
  })
});
(0, _utils.default)("ArrowFunctionExpression", {
  builder: ["params", "body", "async"],
  visitor: ["params", "body", "returnType", "typeParameters"],
  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
  fields: Object.assign({}, _core.functionCommon, _core.functionTypeAnnotationCommon, {
    expression: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement", "Expression")
    }
  })
});
(0, _utils.default)("ClassBody", {
  visitor: ["body"],
  fields: {
    body: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassPrivateProperty", "TSDeclareMethod", "TSIndexSignature")))
    }
  }
});
const classCommon = {
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterDeclaration", "TSTypeParameterDeclaration", "Noop"),
    optional: true
  },
  body: {
    validate: (0, _utils.assertNodeType)("ClassBody")
  },
  superClass: {
    optional: true,
    validate: (0, _utils.assertNodeType)("Expression")
  },
  superTypeParameters: {
    validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
    optional: true
  },
  implements: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSExpressionWithTypeArguments", "ClassImplements"))),
    optional: true
  }
};
(0, _utils.default)("ClassDeclaration", {
  builder: ["id", "superClass", "body", "decorators"],
  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
  fields: Object.assign({}, classCommon, {
    declare: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    abstract: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    id: {
      validate: (0, _utils.assertNodeType)("Identifier"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ClassExpression", {
  inherits: "ClassDeclaration",
  aliases: ["Scopable", "Class", "Expression", "Pureish"],
  fields: Object.assign({}, classCommon, {
    id: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    body: {
      validate: (0, _utils.assertNodeType)("ClassBody")
    },
    superClass: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    }
  })
});
(0, _utils.default)("ExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    }
  }
});
(0, _utils.default)("ExportDefaultDeclaration", {
  visitor: ["declaration"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("FunctionDeclaration", "TSDeclareFunction", "ClassDeclaration", "Expression")
    }
  }
});
(0, _utils.default)("ExportNamedDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
  fields: {
    declaration: {
      validate: (0, _utils.assertNodeType)("Declaration"),
      optional: true
    },
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ExportSpecifier", "ExportDefaultSpecifier", "ExportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral"),
      optional: true
    }
  }
});
(0, _utils.default)("ExportSpecifier", {
  visitor: ["local", "exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ForOfStatement", {
  visitor: ["left", "right", "body"],
  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
  fields: {
    left: {
      validate: (0, _utils.assertNodeType)("VariableDeclaration", "LVal")
    },
    right: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    body: {
      validate: (0, _utils.assertNodeType)("Statement")
    },
    await: {
      default: false,
      validate: (0, _utils.assertValueType)("boolean")
    }
  }
});
(0, _utils.default)("ImportDeclaration", {
  visitor: ["specifiers", "source"],
  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
  fields: {
    specifiers: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
    },
    source: {
      validate: (0, _utils.assertNodeType)("StringLiteral")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof", "value"),
      optional: true
    }
  }
});
(0, _utils.default)("ImportDefaultSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportNamespaceSpecifier", {
  visitor: ["local"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ImportSpecifier", {
  visitor: ["local", "imported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    local: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    imported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    importKind: {
      validate: (0, _utils.assertOneOf)("type", "typeof"),
      optional: true
    }
  }
});
(0, _utils.default)("MetaProperty", {
  visitor: ["meta", "property"],
  aliases: ["Expression"],
  fields: {
    meta: {
      validate: (0, _utils.assertNodeType)("Identifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
const classMethodOrPropertyCommon = {
  abstract: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  accessibility: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  static: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  computed: {
    default: false,
    validate: (0, _utils.assertValueType)("boolean")
  },
  optional: {
    validate: (0, _utils.assertValueType)("boolean"),
    optional: true
  },
  key: {
    validate: (0, _utils.chain)(function () {
      const normal = (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral");
      const computed = (0, _utils.assertNodeType)("Expression");
      return function (node, key, val) {
        const validator = node.computed ? computed : normal;
        validator(node, key, val);
      };
    }(), (0, _utils.assertNodeType)("Identifier", "StringLiteral", "NumericLiteral", "Expression"))
  }
};
exports.classMethodOrPropertyCommon = classMethodOrPropertyCommon;
const classMethodOrDeclareMethodCommon = Object.assign({}, _core.functionCommon, classMethodOrPropertyCommon, {
  kind: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("get", "set", "method", "constructor")),
    default: "method"
  },
  access: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("string"), (0, _utils.assertOneOf)("public", "private", "protected")),
    optional: true
  },
  decorators: {
    validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
    optional: true
  }
});
exports.classMethodOrDeclareMethodCommon = classMethodOrDeclareMethodCommon;
(0, _utils.default)("ClassMethod", {
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
  builder: ["kind", "key", "params", "body", "computed", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  fields: Object.assign({}, classMethodOrDeclareMethodCommon, _core.functionTypeAnnotationCommon, {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("ObjectPattern", {
  visitor: ["properties", "typeAnnotation", "decorators"],
  builder: ["properties"],
  aliases: ["Pattern", "PatternLike", "LVal"],
  fields: Object.assign({}, _core.patternLikeCommon, {
    properties: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("RestElement", "ObjectProperty")))
    }
  })
});
(0, _utils.default)("SpreadElement", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  deprecatedAlias: "SpreadProperty",
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("Super", {
  aliases: ["Expression"]
});
(0, _utils.default)("TaggedTemplateExpression", {
  visitor: ["tag", "quasi"],
  aliases: ["Expression"],
  fields: {
    tag: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    quasi: {
      validate: (0, _utils.assertNodeType)("TemplateLiteral")
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("TemplateElement", {
  builder: ["value", "tail"],
  fields: {
    value: {},
    tail: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    }
  }
});
(0, _utils.default)("TemplateLiteral", {
  visitor: ["quasis", "expressions"],
  aliases: ["Expression", "Literal"],
  fields: {
    quasis: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TemplateElement")))
    },
    expressions: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression")))
    }
  }
});
(0, _utils.default)("YieldExpression", {
  builder: ["argument", "delegate"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    delegate: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    argument: {
      optional: true,
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherit;

function _uniq() {
  const data = _interopRequireDefault(__webpack_require__(169));

  _uniq = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherit(key, child, parent) {
  if (child && parent) {
    child[key] = (0, _uniq().default)([].concat(child[key], parent[key]).filter(Boolean));
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMatchMemberExpression;

var _matchesPattern = _interopRequireDefault(__webpack_require__(40));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildMatchMemberExpression(match, allowPartial) {
  const parts = match.split(".");
  return member => (0, _matchesPattern.default)(member, parts, allowPartial);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesPattern;

var _generated = __webpack_require__(1);

function matchesPattern(member, match, allowPartial) {
  if (!(0, _generated.isMemberExpression)(member)) return false;
  const parts = Array.isArray(match) ? match : match.split(".");
  const nodes = [];
  let node;

  for (node = member; (0, _generated.isMemberExpression)(node); node = node.object) {
    nodes.push(node.property);
  }

  nodes.push(node);
  if (nodes.length < parts.length) return false;
  if (!allowPartial && nodes.length > parts.length) return false;

  for (let i = 0, j = nodes.length - 1; i < parts.length; i++, j--) {
    const node = nodes[j];
    let value;

    if ((0, _generated.isIdentifier)(node)) {
      value = node.name;
    } else if ((0, _generated.isStringLiteral)(node)) {
      value = node.value;
    } else {
      return false;
    }

    if (parts[i] !== value) return false;
  }

  return true;
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(10);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(97)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(103),
    mapCacheDelete = __webpack_require__(110),
    mapCacheGet = __webpack_require__(112),
    mapCacheHas = __webpack_require__(113),
    mapCacheSet = __webpack_require__(114);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(47),
    eq = __webpack_require__(41);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(116);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(118),
    isArguments = __webpack_require__(119),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(49),
    isIndex = __webpack_require__(122),
    isTypedArray = __webpack_require__(123);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(121);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(42),
    isLength = __webpack_require__(50);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(48),
    baseKeysIn = __webpack_require__(128),
    isArrayLike = __webpack_require__(52);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(56),
    getPrototype = __webpack_require__(31),
    getSymbols = __webpack_require__(30),
    stubArray = __webpack_require__(54);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(56),
    isArray = __webpack_require__(27);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

    // See `tools/generate-identifier-regex.js`.
    ES5Regex = {
        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
    };

    ES6Regex = {
        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    };

    function isDecimalDigit(ch) {
        return 0x30 <= ch && ch <= 0x39;  // 0..9
    }

    function isHexDigit(ch) {
        return 0x30 <= ch && ch <= 0x39 ||  // 0..9
            0x61 <= ch && ch <= 0x66 ||     // a..f
            0x41 <= ch && ch <= 0x46;       // A..F
    }

    function isOctalDigit(ch) {
        return ch >= 0x30 && ch <= 0x37;  // 0..7
    }

    // 7.2 White Space

    NON_ASCII_WHITESPACES = [
        0x1680, 0x180E,
        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
        0x202F, 0x205F,
        0x3000,
        0xFEFF
    ];

    function isWhiteSpace(ch) {
        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 ||
            ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
    }

    // 7.3 Line Terminators

    function isLineTerminator(ch) {
        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
    }

    // 7.6 Identifier Names and Identifiers

    function fromCodePoint(cp) {
        if (cp <= 0xFFFF) { return String.fromCharCode(cp); }
        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
        var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
        return cu1 + cu2;
    }

    IDENTIFIER_START = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_START[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    IDENTIFIER_PART = new Array(0x80);
    for(ch = 0; ch < 0x80; ++ch) {
        IDENTIFIER_PART[ch] =
            ch >= 0x61 && ch <= 0x7A ||  // a..z
            ch >= 0x41 && ch <= 0x5A ||  // A..Z
            ch >= 0x30 && ch <= 0x39 ||  // 0..9
            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
    }

    function isIdentifierStartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES5(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    function isIdentifierStartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
    }

    function isIdentifierPartES6(ch) {
        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
    }

    module.exports = {
        isDecimalDigit: isDecimalDigit,
        isHexDigit: isHexDigit,
        isOctalDigit: isOctalDigit,
        isWhiteSpace: isWhiteSpace,
        isLineTerminator: isLineTerminator,
        isIdentifierStartES5: isIdentifierStartES5,
        isIdentifierPartES5: isIdentifierPartES5,
        isIdentifierStartES6: isIdentifierStartES6,
        isIdentifierPartES6: isIdentifierPartES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _definitions = __webpack_require__(4);

function validate(node, key, val) {
  if (!node) return;
  const fields = _definitions.NODE_FIELDS[node.type];
  if (!fields) return;
  const field = fields[key];
  if (!field || !field.validate) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNode;

var _definitions = __webpack_require__(4);

function isNode(node) {
  return !!(node && _definitions.VISITOR_KEYS[node.type]);
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTypeDuplicates;

var _generated = __webpack_require__(1);

function removeTypeDuplicates(nodes) {
  const generics = {};
  const bases = {};
  const typeGroups = [];
  const types = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (types.indexOf(node) >= 0) {
      continue;
    }

    if ((0, _generated.isAnyTypeAnnotation)(node)) {
      return [node];
    }

    if ((0, _generated.isFlowBaseAnnotation)(node)) {
      bases[node.type] = node;
      continue;
    }

    if ((0, _generated.isUnionTypeAnnotation)(node)) {
      if (typeGroups.indexOf(node.types) < 0) {
        nodes = nodes.concat(node.types);
        typeGroups.push(node.types);
      }

      continue;
    }

    if ((0, _generated.isGenericTypeAnnotation)(node)) {
      const name = node.id.name;

      if (generics[name]) {
        let existing = generics[name];

        if (existing.typeParameters) {
          if (node.typeParameters) {
            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
          }
        } else {
          existing = node.typeParameters;
        }
      } else {
        generics[name] = node;
      }

      continue;
    }

    types.push(node);
  }

  for (const type in bases) {
    types.push(bases[type]);
  }

  for (const name in generics) {
    types.push(generics[name]);
  }

  return types;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

var _cloneNode = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clone(node) {
  return (0, _cloneNode.default)(node, false);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComments;

function addComments(node, type, comments) {
  if (!comments || !node) return node;
  const key = `${type}Comments`;

  if (node[key]) {
    if (type === "leading") {
      node[key] = comments.concat(node[key]);
    } else {
      node[key] = node[key].concat(comments);
    }
  } else {
    node[key] = comments;
  }

  return node;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritInnerComments;

var _inherit = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritInnerComments(child, parent) {
  (0, _inherit.default)("innerComments", child, parent);
}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritLeadingComments;

var _inherit = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritLeadingComments(child, parent) {
  (0, _inherit.default)("leadingComments", child, parent);
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritsComments;

var _inheritTrailingComments = _interopRequireDefault(__webpack_require__(69));

var _inheritLeadingComments = _interopRequireDefault(__webpack_require__(67));

var _inheritInnerComments = _interopRequireDefault(__webpack_require__(65));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritsComments(child, parent) {
  (0, _inheritTrailingComments.default)(child, parent);
  (0, _inheritLeadingComments.default)(child, parent);
  (0, _inheritInnerComments.default)(child, parent);
  return child;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inheritTrailingComments;

var _inherit = _interopRequireDefault(__webpack_require__(38));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inheritTrailingComments(child, parent) {
  (0, _inherit.default)("trailingComments", child, parent);
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBlock;

var _generated = __webpack_require__(1);

var _generated2 = __webpack_require__(2);

function toBlock(node, parent) {
  if ((0, _generated.isBlockStatement)(node)) {
    return node;
  }

  let blockNodes = [];

  if ((0, _generated.isEmptyStatement)(node)) {
    blockNodes = [];
  } else {
    if (!(0, _generated.isStatement)(node)) {
      if ((0, _generated.isFunction)(parent)) {
        node = (0, _generated2.returnStatement)(node);
      } else {
        node = (0, _generated2.expressionStatement)(node);
      }
    }

    blockNodes = [node];
  }

  return (0, _generated2.blockStatement)(blockNodes);
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toIdentifier;

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toIdentifier(name) {
  name = name + "";
  name = name.replace(/[^a-zA-Z0-9$_]/g, "-");
  name = name.replace(/^[-0-9]+/, "");
  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (!(0, _isValidIdentifier.default)(name)) {
    name = `_${name}`;
  }

  return name || "_";
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removePropertiesDeep;

var _traverseFast = _interopRequireDefault(__webpack_require__(73));

var _removeProperties = _interopRequireDefault(__webpack_require__(74));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removePropertiesDeep(tree, opts) {
  (0, _traverseFast.default)(tree, _removeProperties.default, opts);
  return tree;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverseFast;

var _definitions = __webpack_require__(4);

function traverseFast(node, enter, opts) {
  if (!node) return;
  const keys = _definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  opts = opts || {};
  enter(node, opts);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        traverseFast(node, enter, opts);
      }
    } else {
      traverseFast(subNode, enter, opts);
    }
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeProperties;

var _constants = __webpack_require__(8);

const CLEAR_KEYS = ["tokens", "start", "end", "loc", "raw", "rawValue"];

const CLEAR_KEYS_PLUS_COMMENTS = _constants.COMMENT_KEYS.concat(["comments"]).concat(CLEAR_KEYS);

function removeProperties(node, opts = {}) {
  const map = opts.preserveComments ? CLEAR_KEYS : CLEAR_KEYS_PLUS_COMMENTS;

  for (const key of map) {
    if (node[key] != null) node[key] = undefined;
  }

  for (const key in node) {
    if (key[0] === "_" && node[key] != null) node[key] = undefined;
  }

  const symbols = Object.getOwnPropertySymbols(node);

  for (const sym of symbols) {
    node[sym] = null;
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLet;

var _generated = __webpack_require__(1);

var _constants = __webpack_require__(8);

function isLet(node) {
  return (0, _generated.isVariableDeclaration)(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
}

/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  react: true,
  assertNode: true,
  createTypeAnnotationBasedOnTypeof: true,
  createUnionTypeAnnotation: true,
  cloneNode: true,
  clone: true,
  cloneDeep: true,
  cloneWithoutLoc: true,
  addComment: true,
  addComments: true,
  inheritInnerComments: true,
  inheritLeadingComments: true,
  inheritsComments: true,
  inheritTrailingComments: true,
  removeComments: true,
  ensureBlock: true,
  toBindingIdentifierName: true,
  toBlock: true,
  toComputedKey: true,
  toExpression: true,
  toIdentifier: true,
  toKeyAlias: true,
  toSequenceExpression: true,
  toStatement: true,
  valueToNode: true,
  appendToMemberExpression: true,
  inherits: true,
  prependToMemberExpression: true,
  removeProperties: true,
  removePropertiesDeep: true,
  removeTypeDuplicates: true,
  getBindingIdentifiers: true,
  getOuterBindingIdentifiers: true,
  traverse: true,
  traverseFast: true,
  shallowEqual: true,
  is: true,
  isBinding: true,
  isBlockScoped: true,
  isImmutable: true,
  isLet: true,
  isNode: true,
  isNodesEquivalent: true,
  isReferenced: true,
  isScope: true,
  isSpecifierDefault: true,
  isType: true,
  isValidES3Identifier: true,
  isValidIdentifier: true,
  isVar: true,
  matchesPattern: true,
  validate: true,
  buildMatchMemberExpression: true
};
Object.defineProperty(exports, "assertNode", {
  enumerable: true,
  get: function () {
    return _assertNode.default;
  }
});
Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
  enumerable: true,
  get: function () {
    return _createTypeAnnotationBasedOnTypeof.default;
  }
});
Object.defineProperty(exports, "createUnionTypeAnnotation", {
  enumerable: true,
  get: function () {
    return _createUnionTypeAnnotation.default;
  }
});
Object.defineProperty(exports, "cloneNode", {
  enumerable: true,
  get: function () {
    return _cloneNode.default;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return _clone.default;
  }
});
Object.defineProperty(exports, "cloneDeep", {
  enumerable: true,
  get: function () {
    return _cloneDeep.default;
  }
});
Object.defineProperty(exports, "cloneWithoutLoc", {
  enumerable: true,
  get: function () {
    return _cloneWithoutLoc.default;
  }
});
Object.defineProperty(exports, "addComment", {
  enumerable: true,
  get: function () {
    return _addComment.default;
  }
});
Object.defineProperty(exports, "addComments", {
  enumerable: true,
  get: function () {
    return _addComments.default;
  }
});
Object.defineProperty(exports, "inheritInnerComments", {
  enumerable: true,
  get: function () {
    return _inheritInnerComments.default;
  }
});
Object.defineProperty(exports, "inheritLeadingComments", {
  enumerable: true,
  get: function () {
    return _inheritLeadingComments.default;
  }
});
Object.defineProperty(exports, "inheritsComments", {
  enumerable: true,
  get: function () {
    return _inheritsComments.default;
  }
});
Object.defineProperty(exports, "inheritTrailingComments", {
  enumerable: true,
  get: function () {
    return _inheritTrailingComments.default;
  }
});
Object.defineProperty(exports, "removeComments", {
  enumerable: true,
  get: function () {
    return _removeComments.default;
  }
});
Object.defineProperty(exports, "ensureBlock", {
  enumerable: true,
  get: function () {
    return _ensureBlock.default;
  }
});
Object.defineProperty(exports, "toBindingIdentifierName", {
  enumerable: true,
  get: function () {
    return _toBindingIdentifierName.default;
  }
});
Object.defineProperty(exports, "toBlock", {
  enumerable: true,
  get: function () {
    return _toBlock.default;
  }
});
Object.defineProperty(exports, "toComputedKey", {
  enumerable: true,
  get: function () {
    return _toComputedKey.default;
  }
});
Object.defineProperty(exports, "toExpression", {
  enumerable: true,
  get: function () {
    return _toExpression.default;
  }
});
Object.defineProperty(exports, "toIdentifier", {
  enumerable: true,
  get: function () {
    return _toIdentifier.default;
  }
});
Object.defineProperty(exports, "toKeyAlias", {
  enumerable: true,
  get: function () {
    return _toKeyAlias.default;
  }
});
Object.defineProperty(exports, "toSequenceExpression", {
  enumerable: true,
  get: function () {
    return _toSequenceExpression.default;
  }
});
Object.defineProperty(exports, "toStatement", {
  enumerable: true,
  get: function () {
    return _toStatement.default;
  }
});
Object.defineProperty(exports, "valueToNode", {
  enumerable: true,
  get: function () {
    return _valueToNode.default;
  }
});
Object.defineProperty(exports, "appendToMemberExpression", {
  enumerable: true,
  get: function () {
    return _appendToMemberExpression.default;
  }
});
Object.defineProperty(exports, "inherits", {
  enumerable: true,
  get: function () {
    return _inherits.default;
  }
});
Object.defineProperty(exports, "prependToMemberExpression", {
  enumerable: true,
  get: function () {
    return _prependToMemberExpression.default;
  }
});
Object.defineProperty(exports, "removeProperties", {
  enumerable: true,
  get: function () {
    return _removeProperties.default;
  }
});
Object.defineProperty(exports, "removePropertiesDeep", {
  enumerable: true,
  get: function () {
    return _removePropertiesDeep.default;
  }
});
Object.defineProperty(exports, "removeTypeDuplicates", {
  enumerable: true,
  get: function () {
    return _removeTypeDuplicates.default;
  }
});
Object.defineProperty(exports, "getBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "getOuterBindingIdentifiers", {
  enumerable: true,
  get: function () {
    return _getOuterBindingIdentifiers.default;
  }
});
Object.defineProperty(exports, "traverse", {
  enumerable: true,
  get: function () {
    return _traverse.default;
  }
});
Object.defineProperty(exports, "traverseFast", {
  enumerable: true,
  get: function () {
    return _traverseFast.default;
  }
});
Object.defineProperty(exports, "shallowEqual", {
  enumerable: true,
  get: function () {
    return _shallowEqual.default;
  }
});
Object.defineProperty(exports, "is", {
  enumerable: true,
  get: function () {
    return _is.default;
  }
});
Object.defineProperty(exports, "isBinding", {
  enumerable: true,
  get: function () {
    return _isBinding.default;
  }
});
Object.defineProperty(exports, "isBlockScoped", {
  enumerable: true,
  get: function () {
    return _isBlockScoped.default;
  }
});
Object.defineProperty(exports, "isImmutable", {
  enumerable: true,
  get: function () {
    return _isImmutable.default;
  }
});
Object.defineProperty(exports, "isLet", {
  enumerable: true,
  get: function () {
    return _isLet.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function () {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isNodesEquivalent", {
  enumerable: true,
  get: function () {
    return _isNodesEquivalent.default;
  }
});
Object.defineProperty(exports, "isReferenced", {
  enumerable: true,
  get: function () {
    return _isReferenced.default;
  }
});
Object.defineProperty(exports, "isScope", {
  enumerable: true,
  get: function () {
    return _isScope.default;
  }
});
Object.defineProperty(exports, "isSpecifierDefault", {
  enumerable: true,
  get: function () {
    return _isSpecifierDefault.default;
  }
});
Object.defineProperty(exports, "isType", {
  enumerable: true,
  get: function () {
    return _isType.default;
  }
});
Object.defineProperty(exports, "isValidES3Identifier", {
  enumerable: true,
  get: function () {
    return _isValidES3Identifier.default;
  }
});
Object.defineProperty(exports, "isValidIdentifier", {
  enumerable: true,
  get: function () {
    return _isValidIdentifier.default;
  }
});
Object.defineProperty(exports, "isVar", {
  enumerable: true,
  get: function () {
    return _isVar.default;
  }
});
Object.defineProperty(exports, "matchesPattern", {
  enumerable: true,
  get: function () {
    return _matchesPattern.default;
  }
});
Object.defineProperty(exports, "validate", {
  enumerable: true,
  get: function () {
    return _validate.default;
  }
});
Object.defineProperty(exports, "buildMatchMemberExpression", {
  enumerable: true,
  get: function () {
    return _buildMatchMemberExpression.default;
  }
});
exports.react = void 0;

var _isReactComponent = _interopRequireDefault(__webpack_require__(78));

var _isCompatTag = _interopRequireDefault(__webpack_require__(79));

var _buildChildren = _interopRequireDefault(__webpack_require__(80));

var _assertNode = _interopRequireDefault(__webpack_require__(162));

var _generated = __webpack_require__(163);

Object.keys(_generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated[key];
    }
  });
});

var _createTypeAnnotationBasedOnTypeof = _interopRequireDefault(__webpack_require__(164));

var _createUnionTypeAnnotation = _interopRequireDefault(__webpack_require__(165));

var _generated2 = __webpack_require__(2);

Object.keys(_generated2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated2[key];
    }
  });
});

var _cloneNode = _interopRequireDefault(__webpack_require__(12));

var _clone = _interopRequireDefault(__webpack_require__(63));

var _cloneDeep = _interopRequireDefault(__webpack_require__(166));

var _cloneWithoutLoc = _interopRequireDefault(__webpack_require__(167));

var _addComment = _interopRequireDefault(__webpack_require__(168));

var _addComments = _interopRequireDefault(__webpack_require__(64));

var _inheritInnerComments = _interopRequireDefault(__webpack_require__(65));

var _inheritLeadingComments = _interopRequireDefault(__webpack_require__(67));

var _inheritsComments = _interopRequireDefault(__webpack_require__(68));

var _inheritTrailingComments = _interopRequireDefault(__webpack_require__(69));

var _removeComments = _interopRequireDefault(__webpack_require__(183));

var _generated3 = __webpack_require__(184);

Object.keys(_generated3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated3[key];
    }
  });
});

var _constants = __webpack_require__(8);

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _ensureBlock = _interopRequireDefault(__webpack_require__(185));

var _toBindingIdentifierName = _interopRequireDefault(__webpack_require__(186));

var _toBlock = _interopRequireDefault(__webpack_require__(70));

var _toComputedKey = _interopRequireDefault(__webpack_require__(187));

var _toExpression = _interopRequireDefault(__webpack_require__(188));

var _toIdentifier = _interopRequireDefault(__webpack_require__(71));

var _toKeyAlias = _interopRequireDefault(__webpack_require__(189));

var _toSequenceExpression = _interopRequireDefault(__webpack_require__(190));

var _toStatement = _interopRequireDefault(__webpack_require__(192));

var _valueToNode = _interopRequireDefault(__webpack_require__(193));

var _definitions = __webpack_require__(4);

Object.keys(_definitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _definitions[key];
    }
  });
});

var _appendToMemberExpression = _interopRequireDefault(__webpack_require__(197));

var _inherits = _interopRequireDefault(__webpack_require__(198));

var _prependToMemberExpression = _interopRequireDefault(__webpack_require__(199));

var _removeProperties = _interopRequireDefault(__webpack_require__(74));

var _removePropertiesDeep = _interopRequireDefault(__webpack_require__(72));

var _removeTypeDuplicates = _interopRequireDefault(__webpack_require__(62));

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(21));

var _getOuterBindingIdentifiers = _interopRequireDefault(__webpack_require__(200));

var _traverse = _interopRequireDefault(__webpack_require__(201));

var _traverseFast = _interopRequireDefault(__webpack_require__(73));

var _shallowEqual = _interopRequireDefault(__webpack_require__(23));

var _is = _interopRequireDefault(__webpack_require__(35));

var _isBinding = _interopRequireDefault(__webpack_require__(202));

var _isBlockScoped = _interopRequireDefault(__webpack_require__(203));

var _isImmutable = _interopRequireDefault(__webpack_require__(204));

var _isLet = _interopRequireDefault(__webpack_require__(75));

var _isNode = _interopRequireDefault(__webpack_require__(61));

var _isNodesEquivalent = _interopRequireDefault(__webpack_require__(205));

var _isReferenced = _interopRequireDefault(__webpack_require__(206));

var _isScope = _interopRequireDefault(__webpack_require__(207));

var _isSpecifierDefault = _interopRequireDefault(__webpack_require__(208));

var _isType = _interopRequireDefault(__webpack_require__(36));

var _isValidES3Identifier = _interopRequireDefault(__webpack_require__(209));

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(11));

var _isVar = _interopRequireDefault(__webpack_require__(210));

var _matchesPattern = _interopRequireDefault(__webpack_require__(40));

var _validate = _interopRequireDefault(__webpack_require__(60));

var _buildMatchMemberExpression = _interopRequireDefault(__webpack_require__(39));

var _generated4 = __webpack_require__(1);

Object.keys(_generated4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generated4[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const react = {
  isReactComponent: _isReactComponent.default,
  isCompatTag: _isCompatTag.default,
  buildChildren: _buildChildren.default
};
exports.react = react;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buildMatchMemberExpression = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isReactComponent = (0, _buildMatchMemberExpression.default)("React.Component");
var _default = isReactComponent;
exports.default = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCompatTag;

function isCompatTag(tagName) {
  return !!tagName && /^[a-z]/.test(tagName);
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildChildren;

var _generated = __webpack_require__(1);

var _cleanJSXElementLiteralChild = _interopRequireDefault(__webpack_require__(81));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildChildren(node) {
  const elements = [];

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];

    if ((0, _generated.isJSXText)(child)) {
      (0, _cleanJSXElementLiteralChild.default)(child, elements);
      continue;
    }

    if ((0, _generated.isJSXExpressionContainer)(child)) child = child.expression;
    if ((0, _generated.isJSXEmptyExpression)(child)) continue;
    elements.push(child);
  }

  return elements;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanJSXElementLiteralChild;

var _generated = __webpack_require__(2);

function cleanJSXElementLiteralChild(child, args) {
  const lines = child.value.split(/\r\n|\n|\r/);
  let lastNonEmptyLine = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/[^ \t]/)) {
      lastNonEmptyLine = i;
    }
  }

  let str = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isFirstLine = i === 0;
    const isLastLine = i === lines.length - 1;
    const isLastNonEmptyLine = i === lastNonEmptyLine;
    let trimmedLine = line.replace(/\t/g, " ");

    if (!isFirstLine) {
      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
    }

    if (!isLastLine) {
      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
    }

    if (trimmedLine) {
      if (!isLastNonEmptyLine) {
        trimmedLine += " ";
      }

      str += trimmedLine;
    }
  }

  if (str) args.push((0, _generated.stringLiteral)(str));
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = builder;

function _clone() {
  const data = _interopRequireDefault(__webpack_require__(83));

  _clone = function () {
    return data;
  };

  return data;
}

var _definitions = __webpack_require__(4);

var _validate = _interopRequireDefault(__webpack_require__(60));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function builder(type, ...args) {
  const keys = _definitions.BUILDER_KEYS[type];
  const countArgs = args.length;

  if (countArgs > keys.length) {
    throw new Error(`${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`);
  }

  const node = {
    type
  };
  let i = 0;
  keys.forEach(key => {
    const field = _definitions.NODE_FIELDS[type][key];
    let arg;
    if (i < countArgs) arg = args[i];
    if (arg === undefined) arg = (0, _clone().default)(field.default);
    node[key] = arg;
    i++;
  });

  for (const key in node) {
    (0, _validate.default)(node, key, node[key]);
  }

  return node;
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(84);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(85),
    arrayEach = __webpack_require__(115),
    assignValue = __webpack_require__(46),
    baseAssign = __webpack_require__(117),
    baseAssignIn = __webpack_require__(127),
    cloneBuffer = __webpack_require__(130),
    copyArray = __webpack_require__(131),
    copySymbols = __webpack_require__(132),
    copySymbolsIn = __webpack_require__(134),
    getAllKeys = __webpack_require__(135),
    getAllKeysIn = __webpack_require__(136),
    getTag = __webpack_require__(32),
    initCloneArray = __webpack_require__(140),
    initCloneByTag = __webpack_require__(141),
    initCloneObject = __webpack_require__(147),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(49),
    isMap = __webpack_require__(149),
    isObject = __webpack_require__(10),
    isSet = __webpack_require__(151),
    keys = __webpack_require__(26);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(14),
    stackClear = __webpack_require__(91),
    stackDelete = __webpack_require__(92),
    stackGet = __webpack_require__(93),
    stackHas = __webpack_require__(94),
    stackSet = __webpack_require__(95);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(14);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(14),
    Map = __webpack_require__(24),
    MapCache = __webpack_require__(45);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(42),
    isMasked = __webpack_require__(100),
    isObject = __webpack_require__(10),
    toSource = __webpack_require__(44);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(101);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(104),
    ListCache = __webpack_require__(14),
    Map = __webpack_require__(24);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(105),
    hashDelete = __webpack_require__(106),
    hashGet = __webpack_require__(107),
    hashHas = __webpack_require__(108),
    hashSet = __webpack_require__(109);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(16);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(18),
    keys = __webpack_require__(26);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(120),
    isObjectLike = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(124),
    baseUnary = __webpack_require__(19),
    nodeUtil = __webpack_require__(20);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isLength = __webpack_require__(50),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(29),
    nativeKeys = __webpack_require__(126);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(51);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(18),
    keysIn = __webpack_require__(53);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isPrototype = __webpack_require__(29),
    nativeKeysIn = __webpack_require__(129);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)(module)))

/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(18),
    getSymbols = __webpack_require__(30);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(18),
    getSymbolsIn = __webpack_require__(55);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(57),
    getSymbols = __webpack_require__(30),
    keys = __webpack_require__(26);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(57),
    getSymbolsIn = __webpack_require__(55),
    keysIn = __webpack_require__(53);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(33),
    cloneDataView = __webpack_require__(143),
    cloneRegExp = __webpack_require__(144),
    cloneSymbol = __webpack_require__(145),
    cloneTypedArray = __webpack_require__(146);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(33);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(33);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(148),
    getPrototype = __webpack_require__(31),
    isPrototype = __webpack_require__(29);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(150),
    baseUnary = __webpack_require__(19),
    nodeUtil = __webpack_require__(20);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(32),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(152),
    baseUnary = __webpack_require__(19),
    nodeUtil = __webpack_require__(20);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(32),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let fastProto = null;

// Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.
function FastObject(o) {
	// A prototype object will have "fast properties" enabled once it is checked
	// against the inline property cache of a function, e.g. fastProto.property:
	// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63
	if (fastProto !== null && typeof fastProto.property) {
		const result = fastProto;
		fastProto = FastObject.prototype = null;
		return result;
	}
	fastProto = FastObject.prototype = o == null ? Object.create(null) : o;
	return new FastObject;
}

// Initialize the inline property cache of FastObject
FastObject();

module.exports = function toFastproperties(o) {
	return FastObject(o);
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


(function () {
    'use strict';

    exports.ast = __webpack_require__(155);
    exports.code = __webpack_require__(59);
    exports.keyword = __webpack_require__(156);
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    function isExpression(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'ArrayExpression':
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'CallExpression':
            case 'ConditionalExpression':
            case 'FunctionExpression':
            case 'Identifier':
            case 'Literal':
            case 'LogicalExpression':
            case 'MemberExpression':
            case 'NewExpression':
            case 'ObjectExpression':
            case 'SequenceExpression':
            case 'ThisExpression':
            case 'UnaryExpression':
            case 'UpdateExpression':
                return true;
        }
        return false;
    }

    function isIterationStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'DoWhileStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'WhileStatement':
                return true;
        }
        return false;
    }

    function isStatement(node) {
        if (node == null) { return false; }
        switch (node.type) {
            case 'BlockStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'DebuggerStatement':
            case 'DoWhileStatement':
            case 'EmptyStatement':
            case 'ExpressionStatement':
            case 'ForInStatement':
            case 'ForStatement':
            case 'IfStatement':
            case 'LabeledStatement':
            case 'ReturnStatement':
            case 'SwitchStatement':
            case 'ThrowStatement':
            case 'TryStatement':
            case 'VariableDeclaration':
            case 'WhileStatement':
            case 'WithStatement':
                return true;
        }
        return false;
    }

    function isSourceElement(node) {
      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
    }

    function trailingStatement(node) {
        switch (node.type) {
        case 'IfStatement':
            if (node.alternate != null) {
                return node.alternate;
            }
            return node.consequent;

        case 'LabeledStatement':
        case 'ForStatement':
        case 'ForInStatement':
        case 'WhileStatement':
        case 'WithStatement':
            return node.body;
        }
        return null;
    }

    function isProblematicIfStatement(node) {
        var current;

        if (node.type !== 'IfStatement') {
            return false;
        }
        if (node.alternate == null) {
            return false;
        }
        current = node.consequent;
        do {
            if (current.type === 'IfStatement') {
                if (current.alternate == null)  {
                    return true;
                }
            }
            current = trailingStatement(current);
        } while (current);

        return false;
    }

    module.exports = {
        isExpression: isExpression,
        isStatement: isStatement,
        isIterationStatement: isIterationStatement,
        isSourceElement: isSourceElement,
        isProblematicIfStatement: isProblematicIfStatement,

        trailingStatement: trailingStatement
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function () {
    'use strict';

    var code = __webpack_require__(59);

    function isStrictModeReservedWordES6(id) {
        switch (id) {
        case 'implements':
        case 'interface':
        case 'package':
        case 'private':
        case 'protected':
        case 'public':
        case 'static':
        case 'let':
            return true;
        default:
            return false;
        }
    }

    function isKeywordES5(id, strict) {
        // yield should not be treated as keyword under non-strict mode.
        if (!strict && id === 'yield') {
            return false;
        }
        return isKeywordES6(id, strict);
    }

    function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
            return true;
        }

        switch (id.length) {
        case 2:
            return (id === 'if') || (id === 'in') || (id === 'do');
        case 3:
            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        case 4:
            return (id === 'this') || (id === 'else') || (id === 'case') ||
                (id === 'void') || (id === 'with') || (id === 'enum');
        case 5:
            return (id === 'while') || (id === 'break') || (id === 'catch') ||
                (id === 'throw') || (id === 'const') || (id === 'yield') ||
                (id === 'class') || (id === 'super');
        case 6:
            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                (id === 'switch') || (id === 'export') || (id === 'import');
        case 7:
            return (id === 'default') || (id === 'finally') || (id === 'extends');
        case 8:
            return (id === 'function') || (id === 'continue') || (id === 'debugger');
        case 10:
            return (id === 'instanceof');
        default:
            return false;
        }
    }

    function isReservedWordES5(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
    }

    function isReservedWordES6(id, strict) {
        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
    }

    function isRestrictedWord(id) {
        return id === 'eval' || id === 'arguments';
    }

    function isIdentifierNameES5(id) {
        var i, iz, ch;

        if (id.length === 0) { return false; }

        ch = id.charCodeAt(0);
        if (!code.isIdentifierStartES5(ch)) {
            return false;
        }

        for (i = 1, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (!code.isIdentifierPartES5(ch)) {
                return false;
            }
        }
        return true;
    }

    function decodeUtf16(lead, trail) {
        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    }

    function isIdentifierNameES6(id) {
        var i, iz, ch, lowCh, check;

        if (id.length === 0) { return false; }

        check = code.isIdentifierStartES6;
        for (i = 0, iz = id.length; i < iz; ++i) {
            ch = id.charCodeAt(i);
            if (0xD800 <= ch && ch <= 0xDBFF) {
                ++i;
                if (i >= iz) { return false; }
                lowCh = id.charCodeAt(i);
                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
                    return false;
                }
                ch = decodeUtf16(ch, lowCh);
            }
            if (!check(ch)) {
                return false;
            }
            check = code.isIdentifierPartES6;
        }
        return true;
    }

    function isIdentifierES5(id, strict) {
        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
    }

    function isIdentifierES6(id, strict) {
        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
    }

    module.exports = {
        isKeywordES5: isKeywordES5,
        isKeywordES6: isKeywordES6,
        isReservedWordES5: isReservedWordES5,
        isReservedWordES6: isReservedWordES6,
        isRestrictedWord: isRestrictedWord,
        isIdentifierNameES5: isIdentifierNameES5,
        isIdentifierNameES6: isIdentifierNameES6,
        isIdentifierES5: isIdentifierES5,
        isIdentifierES6: isIdentifierES6
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const defineInterfaceishType = (name, typeParameterType = "TypeParameterDeclaration") => {
  (0, _utils.default)(name, {
    builder: ["id", "typeParameters", "extends", "body"],
    visitor: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
    aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
    fields: {
      id: (0, _utils.validateType)("Identifier"),
      typeParameters: (0, _utils.validateOptionalType)(typeParameterType),
      extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      mixins: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
      implements: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ClassImplements")),
      body: (0, _utils.validateType)("ObjectTypeAnnotation")
    }
  });
};

(0, _utils.default)("AnyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ArrayTypeAnnotation", {
  visitor: ["elementType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    elementType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("BooleanTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("BooleanLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("NullLiteralTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ClassImplements", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("DeclareClass");
(0, _utils.default)("DeclareFunction", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    predicate: (0, _utils.validateOptionalType)("DeclaredPredicate")
  }
});
defineInterfaceishType("DeclareInterface");
(0, _utils.default)("DeclareModule", {
  builder: ["id", "body", "kind"],
  visitor: ["id", "body"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)("BlockStatement"),
    kind: (0, _utils.validateOptional)((0, _utils.assertOneOf)("CommonJS", "ES"))
  }
});
(0, _utils.default)("DeclareModuleExports", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("DeclareTypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("DeclareOpaqueType", {
  visitor: ["id", "typeParameters", "supertype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType")
  }
});
(0, _utils.default)("DeclareVariable", {
  visitor: ["id"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("DeclareExportDeclaration", {
  visitor: ["declaration", "specifiers", "source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    declaration: (0, _utils.validateOptionalType)("Flow"),
    specifiers: (0, _utils.validateOptional)((0, _utils.arrayOfType)(["ExportSpecifier", "ExportNamespaceSpecifier"])),
    source: (0, _utils.validateOptionalType)("StringLiteral"),
    default: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("DeclareExportAllDeclaration", {
  visitor: ["source"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    source: (0, _utils.validateType)("StringLiteral"),
    exportKind: (0, _utils.validateOptional)((0, _utils.assertOneOf)(["type", "value"]))
  }
});
(0, _utils.default)("DeclaredPredicate", {
  visitor: ["value"],
  aliases: ["Flow", "FlowPredicate"],
  fields: {
    value: (0, _utils.validateType)("Flow")
  }
});
(0, _utils.default)("ExistsTypeAnnotation", {
  aliases: ["Flow", "FlowType"]
});
(0, _utils.default)("FunctionTypeAnnotation", {
  visitor: ["typeParameters", "params", "rest", "returnType"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FunctionTypeParam")),
    rest: (0, _utils.validateOptionalType)("FunctionTypeParam"),
    returnType: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("FunctionTypeParam", {
  visitor: ["name", "typeAnnotation"],
  aliases: ["Flow"],
  fields: {
    name: (0, _utils.validateOptionalType)("Identifier"),
    typeAnnotation: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("GenericTypeAnnotation", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow", "FlowType"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
(0, _utils.default)("InferredPredicate", {
  aliases: ["Flow", "FlowPredicate"]
});
(0, _utils.default)("InterfaceExtends", {
  visitor: ["id", "typeParameters"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"]),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterInstantiation")
  }
});
defineInterfaceishType("InterfaceDeclaration");
(0, _utils.default)("InterfaceTypeAnnotation", {
  visitor: ["extends", "body"],
  aliases: ["Flow", "FlowType"],
  fields: {
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("InterfaceExtends")),
    body: (0, _utils.validateType)("ObjectTypeAnnotation")
  }
});
(0, _utils.default)("IntersectionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("MixedTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("EmptyTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("NullableTypeAnnotation", {
  visitor: ["typeAnnotation"],
  aliases: ["Flow", "FlowType"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("NumberLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("number"))
  }
});
(0, _utils.default)("NumberTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ObjectTypeAnnotation", {
  visitor: ["properties", "indexers", "callProperties", "internalSlots"],
  aliases: ["Flow", "FlowType"],
  builder: ["properties", "indexers", "callProperties", "internalSlots", "exact"],
  fields: {
    properties: (0, _utils.validate)((0, _utils.arrayOfType)(["ObjectTypeProperty", "ObjectTypeSpreadProperty"])),
    indexers: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeIndexer")),
    callProperties: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeCallProperty")),
    internalSlots: (0, _utils.validateOptional)((0, _utils.arrayOfType)("ObjectTypeInternalSlot")),
    exact: {
      validate: (0, _utils.assertValueType)("boolean"),
      default: false
    },
    inexact: (0, _utils.validateOptional)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeInternalSlot", {
  visitor: ["id", "value", "optional", "static", "method"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    value: (0, _utils.validateType)("FlowType"),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    method: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeCallProperty", {
  visitor: ["value"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean"))
  }
});
(0, _utils.default)("ObjectTypeIndexer", {
  visitor: ["id", "key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    id: (0, _utils.validateOptionalType)("Identifier"),
    key: (0, _utils.validateType)("FlowType"),
    value: (0, _utils.validateType)("FlowType"),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeProperty", {
  visitor: ["key", "value", "variance"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    key: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    value: (0, _utils.validateType)("FlowType"),
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("init", "get", "set")),
    static: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    proto: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    optional: (0, _utils.validate)((0, _utils.assertValueType)("boolean")),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("ObjectTypeSpreadProperty", {
  visitor: ["argument"],
  aliases: ["Flow", "UserWhitespacable"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("OpaqueType", {
  visitor: ["id", "typeParameters", "supertype", "impltype"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    supertype: (0, _utils.validateOptionalType)("FlowType"),
    impltype: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("QualifiedTypeIdentifier", {
  visitor: ["id", "qualification"],
  aliases: ["Flow"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    qualification: (0, _utils.validateType)(["Identifier", "QualifiedTypeIdentifier"])
  }
});
(0, _utils.default)("StringLiteralTypeAnnotation", {
  builder: ["value"],
  aliases: ["Flow", "FlowType"],
  fields: {
    value: (0, _utils.validate)((0, _utils.assertValueType)("string"))
  }
});
(0, _utils.default)("StringTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("ThisTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});
(0, _utils.default)("TupleTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("TypeofTypeAnnotation", {
  visitor: ["argument"],
  aliases: ["Flow", "FlowType"],
  fields: {
    argument: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAlias", {
  visitor: ["id", "typeParameters", "right"],
  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
  fields: {
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TypeParameterDeclaration"),
    right: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeAnnotation", {
  aliases: ["Flow"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("FlowType")
  }
});
(0, _utils.default)("TypeCastExpression", {
  visitor: ["expression", "typeAnnotation"],
  aliases: ["Flow", "ExpressionWrapper", "Expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TypeAnnotation")
  }
});
(0, _utils.default)("TypeParameter", {
  aliases: ["Flow"],
  visitor: ["bound", "default", "variance"],
  fields: {
    name: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    bound: (0, _utils.validateOptionalType)("TypeAnnotation"),
    default: (0, _utils.validateOptionalType)("FlowType"),
    variance: (0, _utils.validateOptionalType)("Variance")
  }
});
(0, _utils.default)("TypeParameterDeclaration", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("TypeParameter"))
  }
});
(0, _utils.default)("TypeParameterInstantiation", {
  aliases: ["Flow"],
  visitor: ["params"],
  fields: {
    params: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("UnionTypeAnnotation", {
  visitor: ["types"],
  aliases: ["Flow", "FlowType"],
  fields: {
    types: (0, _utils.validate)((0, _utils.arrayOfType)("FlowType"))
  }
});
(0, _utils.default)("Variance", {
  aliases: ["Flow"],
  builder: ["kind"],
  fields: {
    kind: (0, _utils.validate)((0, _utils.assertOneOf)("minus", "plus"))
  }
});
(0, _utils.default)("VoidTypeAnnotation", {
  aliases: ["Flow", "FlowType", "FlowBaseAnnotation"]
});

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("JSXAttribute", {
  visitor: ["name", "value"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
    },
    value: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXElement", "JSXFragment", "StringLiteral", "JSXExpressionContainer")
    }
  }
});
(0, _utils.default)("JSXClosingElement", {
  visitor: ["name"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
    }
  }
});
(0, _utils.default)("JSXElement", {
  builder: ["openingElement", "closingElement", "children", "selfClosing"],
  visitor: ["openingElement", "children", "closingElement"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingElement: {
      validate: (0, _utils.assertNodeType)("JSXOpeningElement")
    },
    closingElement: {
      optional: true,
      validate: (0, _utils.assertNodeType)("JSXClosingElement")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXEmptyExpression", {
  aliases: ["JSX"]
});
(0, _utils.default)("JSXExpressionContainer", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression", "JSXEmptyExpression")
    }
  }
});
(0, _utils.default)("JSXSpreadChild", {
  visitor: ["expression"],
  aliases: ["JSX", "Immutable"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXIdentifier", {
  builder: ["name"],
  aliases: ["JSX"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXMemberExpression", {
  visitor: ["object", "property"],
  aliases: ["JSX"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
    },
    property: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXNamespacedName", {
  visitor: ["namespace", "name"],
  aliases: ["JSX"],
  fields: {
    namespace: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    },
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier")
    }
  }
});
(0, _utils.default)("JSXOpeningElement", {
  builder: ["name", "attributes", "selfClosing"],
  visitor: ["name", "attributes"],
  aliases: ["JSX", "Immutable"],
  fields: {
    name: {
      validate: (0, _utils.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
    },
    selfClosing: {
      default: false,
      validate: (0, _utils.assertValueType)("boolean")
    },
    attributes: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation", "TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("JSXSpreadAttribute", {
  visitor: ["argument"],
  aliases: ["JSX"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("JSXText", {
  aliases: ["JSX", "Immutable"],
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  }
});
(0, _utils.default)("JSXFragment", {
  builder: ["openingFragment", "closingFragment", "children"],
  visitor: ["openingFragment", "children", "closingFragment"],
  aliases: ["JSX", "Immutable", "Expression"],
  fields: {
    openingFragment: {
      validate: (0, _utils.assertNodeType)("JSXOpeningFragment")
    },
    closingFragment: {
      validate: (0, _utils.assertNodeType)("JSXClosingFragment")
    },
    children: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement", "JSXFragment")))
    }
  }
});
(0, _utils.default)("JSXOpeningFragment", {
  aliases: ["JSX", "Immutable"]
});
(0, _utils.default)("JSXClosingFragment", {
  aliases: ["JSX", "Immutable"]
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("Noop", {
  visitor: []
});
(0, _utils.default)("ParenthesizedExpression", {
  visitor: ["expression"],
  aliases: ["Expression", "ExpressionWrapper"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(5));

var _es = __webpack_require__(37);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(0, _utils.default)("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: {}
});
(0, _utils.default)("ClassProperty", {
  visitor: ["key", "value", "typeAnnotation", "decorators"],
  builder: ["key", "value", "typeAnnotation", "decorators", "computed"],
  aliases: ["Property"],
  fields: Object.assign({}, _es.classMethodOrPropertyCommon, {
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    },
    definite: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TypeAnnotation", "TSTypeAnnotation", "Noop"),
      optional: true
    },
    decorators: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Decorator"))),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    }
  })
});
(0, _utils.default)("OptionalMemberExpression", {
  builder: ["object", "property", "computed", "optional"],
  visitor: ["object", "property"],
  aliases: ["Expression"],
  fields: {
    object: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    property: {
      validate: function () {
        const normal = (0, _utils.assertNodeType)("Identifier");
        const computed = (0, _utils.assertNodeType)("Expression");
        return function (node, key, val) {
          const validator = node.computed ? computed : normal;
          validator(node, key, val);
        };
      }()
    },
    computed: {
      default: false
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean")
    }
  }
});
(0, _utils.default)("PipelineTopicExpression", {
  builder: ["expression"],
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("PipelineBareFunction", {
  builder: ["callee"],
  visitor: ["callee"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("PipelinePrimaryTopicReference", {
  aliases: ["Expression"]
});
(0, _utils.default)("OptionalCallExpression", {
  visitor: ["callee", "arguments", "typeParameters", "typeArguments"],
  builder: ["callee", "arguments", "optional"],
  aliases: ["Expression"],
  fields: {
    callee: {
      validate: (0, _utils.assertNodeType)("Expression")
    },
    arguments: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("Expression", "SpreadElement", "JSXNamespacedName")))
    },
    optional: {
      validate: (0, _utils.assertValueType)("boolean")
    },
    typeArguments: {
      validate: (0, _utils.assertNodeType)("TypeParameterInstantiation"),
      optional: true
    },
    typeParameters: {
      validate: (0, _utils.assertNodeType)("TSTypeParameterInstantiation"),
      optional: true
    }
  }
});
(0, _utils.default)("ClassPrivateProperty", {
  visitor: ["key", "value"],
  builder: ["key", "value"],
  aliases: ["Property", "Private"],
  fields: {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    value: {
      validate: (0, _utils.assertNodeType)("Expression"),
      optional: true
    }
  }
});
(0, _utils.default)("ClassPrivateMethod", {
  builder: ["kind", "key", "params", "body", "static"],
  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method", "Private"],
  fields: Object.assign({}, _es.classMethodOrDeclareMethodCommon, {
    key: {
      validate: (0, _utils.assertNodeType)("PrivateName")
    },
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  })
});
(0, _utils.default)("Import", {
  aliases: ["Expression"]
});
(0, _utils.default)("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: (0, _utils.assertNodeType)("Expression")
    }
  }
});
(0, _utils.default)("DoExpression", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: (0, _utils.assertNodeType)("BlockStatement")
    }
  }
});
(0, _utils.default)("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("PrivateName", {
  visitor: ["id"],
  aliases: ["Private"],
  fields: {
    id: {
      validate: (0, _utils.assertNodeType)("Identifier")
    }
  }
});
(0, _utils.default)("BigIntLiteral", {
  builder: ["value"],
  fields: {
    value: {
      validate: (0, _utils.assertValueType)("string")
    }
  },
  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = _interopRequireWildcard(__webpack_require__(5));

var _core = __webpack_require__(34);

var _es = __webpack_require__(37);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const bool = (0, _utils.assertValueType)("boolean");
const tSFunctionTypeAnnotationCommon = {
  returnType: {
    validate: (0, _utils.assertNodeType)("TSTypeAnnotation", "Noop"),
    optional: true
  },
  typeParameters: {
    validate: (0, _utils.assertNodeType)("TSTypeParameterDeclaration", "Noop"),
    optional: true
  }
};
(0, _utils.default)("TSParameterProperty", {
  aliases: ["LVal"],
  visitor: ["parameter"],
  fields: {
    accessibility: {
      validate: (0, _utils.assertOneOf)("public", "private", "protected"),
      optional: true
    },
    readonly: {
      validate: (0, _utils.assertValueType)("boolean"),
      optional: true
    },
    parameter: {
      validate: (0, _utils.assertNodeType)("Identifier", "AssignmentPattern")
    }
  }
});
(0, _utils.default)("TSDeclareFunction", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, _core.functionDeclarationCommon, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSDeclareMethod", {
  visitor: ["decorators", "key", "typeParameters", "params", "returnType"],
  fields: Object.assign({}, _es.classMethodOrDeclareMethodCommon, tSFunctionTypeAnnotationCommon)
});
(0, _utils.default)("TSQualifiedName", {
  aliases: ["TSEntityName"],
  visitor: ["left", "right"],
  fields: {
    left: (0, _utils.validateType)("TSEntityName"),
    right: (0, _utils.validateType)("Identifier")
  }
});
const signatureDeclarationCommon = {
  typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
  parameters: (0, _utils.validateArrayOfType)(["Identifier", "RestElement"]),
  typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
};
const callConstructSignatureDeclaration = {
  aliases: ["TSTypeElement"],
  visitor: ["typeParameters", "parameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSCallSignatureDeclaration", callConstructSignatureDeclaration);
(0, _utils.default)("TSConstructSignatureDeclaration", callConstructSignatureDeclaration);
const namedTypeElementCommon = {
  key: (0, _utils.validateType)("Expression"),
  computed: (0, _utils.validate)(bool),
  optional: (0, _utils.validateOptional)(bool)
};
(0, _utils.default)("TSPropertySignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeAnnotation", "initializer"],
  fields: Object.assign({}, namedTypeElementCommon, {
    readonly: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  })
});
(0, _utils.default)("TSMethodSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["key", "typeParameters", "parameters", "typeAnnotation"],
  fields: Object.assign({}, signatureDeclarationCommon, namedTypeElementCommon)
});
(0, _utils.default)("TSIndexSignature", {
  aliases: ["TSTypeElement"],
  visitor: ["parameters", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    parameters: (0, _utils.validateArrayOfType)("Identifier"),
    typeAnnotation: (0, _utils.validateOptionalType)("TSTypeAnnotation")
  }
});
const tsKeywordTypes = ["TSAnyKeyword", "TSUnknownKeyword", "TSNumberKeyword", "TSObjectKeyword", "TSBooleanKeyword", "TSStringKeyword", "TSSymbolKeyword", "TSVoidKeyword", "TSUndefinedKeyword", "TSNullKeyword", "TSNeverKeyword"];

for (const type of tsKeywordTypes) {
  (0, _utils.default)(type, {
    aliases: ["TSType"],
    visitor: [],
    fields: {}
  });
}

(0, _utils.default)("TSThisType", {
  aliases: ["TSType"],
  visitor: [],
  fields: {}
});
const fnOrCtr = {
  aliases: ["TSType"],
  visitor: ["typeParameters", "typeAnnotation"],
  fields: signatureDeclarationCommon
};
(0, _utils.default)("TSFunctionType", fnOrCtr);
(0, _utils.default)("TSConstructorType", fnOrCtr);
(0, _utils.default)("TSTypeReference", {
  aliases: ["TSType"],
  visitor: ["typeName", "typeParameters"],
  fields: {
    typeName: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSTypePredicate", {
  aliases: ["TSType"],
  visitor: ["parameterName", "typeAnnotation"],
  fields: {
    parameterName: (0, _utils.validateType)(["Identifier", "TSThisType"]),
    typeAnnotation: (0, _utils.validateType)("TSTypeAnnotation")
  }
});
(0, _utils.default)("TSTypeQuery", {
  aliases: ["TSType"],
  visitor: ["exprName"],
  fields: {
    exprName: (0, _utils.validateType)(["TSEntityName", "TSImportType"])
  }
});
(0, _utils.default)("TSTypeLiteral", {
  aliases: ["TSType"],
  visitor: ["members"],
  fields: {
    members: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSArrayType", {
  aliases: ["TSType"],
  visitor: ["elementType"],
  fields: {
    elementType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTupleType", {
  aliases: ["TSType"],
  visitor: ["elementTypes"],
  fields: {
    elementTypes: (0, _utils.validateArrayOfType)("TSType")
  }
});
(0, _utils.default)("TSOptionalType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSRestType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
const unionOrIntersection = {
  aliases: ["TSType"],
  visitor: ["types"],
  fields: {
    types: (0, _utils.validateArrayOfType)("TSType")
  }
};
(0, _utils.default)("TSUnionType", unionOrIntersection);
(0, _utils.default)("TSIntersectionType", unionOrIntersection);
(0, _utils.default)("TSConditionalType", {
  aliases: ["TSType"],
  visitor: ["checkType", "extendsType", "trueType", "falseType"],
  fields: {
    checkType: (0, _utils.validateType)("TSType"),
    extendsType: (0, _utils.validateType)("TSType"),
    trueType: (0, _utils.validateType)("TSType"),
    falseType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSInferType", {
  aliases: ["TSType"],
  visitor: ["typeParameter"],
  fields: {
    typeParameter: (0, _utils.validateType)("TSTypeParameter")
  }
});
(0, _utils.default)("TSParenthesizedType", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeOperator", {
  aliases: ["TSType"],
  visitor: ["typeAnnotation"],
  fields: {
    operator: (0, _utils.validate)((0, _utils.assertValueType)("string")),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSIndexedAccessType", {
  aliases: ["TSType"],
  visitor: ["objectType", "indexType"],
  fields: {
    objectType: (0, _utils.validateType)("TSType"),
    indexType: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSMappedType", {
  aliases: ["TSType"],
  visitor: ["typeParameter", "typeAnnotation"],
  fields: {
    readonly: (0, _utils.validateOptional)(bool),
    typeParameter: (0, _utils.validateType)("TSTypeParameter"),
    optional: (0, _utils.validateOptional)(bool),
    typeAnnotation: (0, _utils.validateOptionalType)("TSType")
  }
});
(0, _utils.default)("TSLiteralType", {
  aliases: ["TSType"],
  visitor: ["literal"],
  fields: {
    literal: (0, _utils.validateType)(["NumericLiteral", "StringLiteral", "BooleanLiteral"])
  }
});
(0, _utils.default)("TSExpressionWithTypeArguments", {
  aliases: ["TSType"],
  visitor: ["expression", "typeParameters"],
  fields: {
    expression: (0, _utils.validateType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSInterfaceDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "extends", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    extends: (0, _utils.validateOptional)((0, _utils.arrayOfType)("TSExpressionWithTypeArguments")),
    body: (0, _utils.validateType)("TSInterfaceBody")
  }
});
(0, _utils.default)("TSInterfaceBody", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("TSTypeElement")
  }
});
(0, _utils.default)("TSTypeAliasDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "typeParameters", "typeAnnotation"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterDeclaration"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSAsExpression", {
  aliases: ["Expression"],
  visitor: ["expression", "typeAnnotation"],
  fields: {
    expression: (0, _utils.validateType)("Expression"),
    typeAnnotation: (0, _utils.validateType)("TSType")
  }
});
(0, _utils.default)("TSTypeAssertion", {
  aliases: ["Expression"],
  visitor: ["typeAnnotation", "expression"],
  fields: {
    typeAnnotation: (0, _utils.validateType)("TSType"),
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSEnumDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "members"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    const: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)("Identifier"),
    members: (0, _utils.validateArrayOfType)("TSEnumMember"),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSEnumMember", {
  visitor: ["id", "initializer"],
  fields: {
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    initializer: (0, _utils.validateOptionalType)("Expression")
  }
});
(0, _utils.default)("TSModuleDeclaration", {
  aliases: ["Statement", "Declaration"],
  visitor: ["id", "body"],
  fields: {
    declare: (0, _utils.validateOptional)(bool),
    global: (0, _utils.validateOptional)(bool),
    id: (0, _utils.validateType)(["Identifier", "StringLiteral"]),
    body: (0, _utils.validateType)(["TSModuleBlock", "TSModuleDeclaration"])
  }
});
(0, _utils.default)("TSModuleBlock", {
  visitor: ["body"],
  fields: {
    body: (0, _utils.validateArrayOfType)("Statement")
  }
});
(0, _utils.default)("TSImportType", {
  aliases: ["TSType"],
  visitor: ["argument", "qualifier", "typeParameters"],
  fields: {
    argument: (0, _utils.validateType)("StringLiteral"),
    qualifier: (0, _utils.validateOptionalType)("TSEntityName"),
    typeParameters: (0, _utils.validateOptionalType)("TSTypeParameterInstantiation")
  }
});
(0, _utils.default)("TSImportEqualsDeclaration", {
  aliases: ["Statement"],
  visitor: ["id", "moduleReference"],
  fields: {
    isExport: (0, _utils.validate)(bool),
    id: (0, _utils.validateType)("Identifier"),
    moduleReference: (0, _utils.validateType)(["TSEntityName", "TSExternalModuleReference"])
  }
});
(0, _utils.default)("TSExternalModuleReference", {
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("StringLiteral")
  }
});
(0, _utils.default)("TSNonNullExpression", {
  aliases: ["Expression"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSExportAssignment", {
  aliases: ["Statement"],
  visitor: ["expression"],
  fields: {
    expression: (0, _utils.validateType)("Expression")
  }
});
(0, _utils.default)("TSNamespaceExportDeclaration", {
  aliases: ["Statement"],
  visitor: ["id"],
  fields: {
    id: (0, _utils.validateType)("Identifier")
  }
});
(0, _utils.default)("TSTypeAnnotation", {
  visitor: ["typeAnnotation"],
  fields: {
    typeAnnotation: {
      validate: (0, _utils.assertNodeType)("TSType")
    }
  }
});
(0, _utils.default)("TSTypeParameterInstantiation", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSType")))
    }
  }
});
(0, _utils.default)("TSTypeParameterDeclaration", {
  visitor: ["params"],
  fields: {
    params: {
      validate: (0, _utils.chain)((0, _utils.assertValueType)("array"), (0, _utils.assertEach)((0, _utils.assertNodeType)("TSTypeParameter")))
    }
  }
});
(0, _utils.default)("TSTypeParameter", {
  visitor: ["constraint", "default"],
  fields: {
    name: {
      validate: (0, _utils.assertValueType)("string")
    },
    constraint: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    },
    default: {
      validate: (0, _utils.assertNodeType)("TSType"),
      optional: true
    }
  }
});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertNode;

var _isNode = _interopRequireDefault(__webpack_require__(61));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertNode(node) {
  if (!(0, _isNode.default)(node)) {
    const type = node && node.type || JSON.stringify(node);
    throw new TypeError(`Not a valid node of type "${type}"`);
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertArrayExpression = assertArrayExpression;
exports.assertAssignmentExpression = assertAssignmentExpression;
exports.assertBinaryExpression = assertBinaryExpression;
exports.assertInterpreterDirective = assertInterpreterDirective;
exports.assertDirective = assertDirective;
exports.assertDirectiveLiteral = assertDirectiveLiteral;
exports.assertBlockStatement = assertBlockStatement;
exports.assertBreakStatement = assertBreakStatement;
exports.assertCallExpression = assertCallExpression;
exports.assertCatchClause = assertCatchClause;
exports.assertConditionalExpression = assertConditionalExpression;
exports.assertContinueStatement = assertContinueStatement;
exports.assertDebuggerStatement = assertDebuggerStatement;
exports.assertDoWhileStatement = assertDoWhileStatement;
exports.assertEmptyStatement = assertEmptyStatement;
exports.assertExpressionStatement = assertExpressionStatement;
exports.assertFile = assertFile;
exports.assertForInStatement = assertForInStatement;
exports.assertForStatement = assertForStatement;
exports.assertFunctionDeclaration = assertFunctionDeclaration;
exports.assertFunctionExpression = assertFunctionExpression;
exports.assertIdentifier = assertIdentifier;
exports.assertIfStatement = assertIfStatement;
exports.assertLabeledStatement = assertLabeledStatement;
exports.assertStringLiteral = assertStringLiteral;
exports.assertNumericLiteral = assertNumericLiteral;
exports.assertNullLiteral = assertNullLiteral;
exports.assertBooleanLiteral = assertBooleanLiteral;
exports.assertRegExpLiteral = assertRegExpLiteral;
exports.assertLogicalExpression = assertLogicalExpression;
exports.assertMemberExpression = assertMemberExpression;
exports.assertNewExpression = assertNewExpression;
exports.assertProgram = assertProgram;
exports.assertObjectExpression = assertObjectExpression;
exports.assertObjectMethod = assertObjectMethod;
exports.assertObjectProperty = assertObjectProperty;
exports.assertRestElement = assertRestElement;
exports.assertReturnStatement = assertReturnStatement;
exports.assertSequenceExpression = assertSequenceExpression;
exports.assertSwitchCase = assertSwitchCase;
exports.assertSwitchStatement = assertSwitchStatement;
exports.assertThisExpression = assertThisExpression;
exports.assertThrowStatement = assertThrowStatement;
exports.assertTryStatement = assertTryStatement;
exports.assertUnaryExpression = assertUnaryExpression;
exports.assertUpdateExpression = assertUpdateExpression;
exports.assertVariableDeclaration = assertVariableDeclaration;
exports.assertVariableDeclarator = assertVariableDeclarator;
exports.assertWhileStatement = assertWhileStatement;
exports.assertWithStatement = assertWithStatement;
exports.assertAssignmentPattern = assertAssignmentPattern;
exports.assertArrayPattern = assertArrayPattern;
exports.assertArrowFunctionExpression = assertArrowFunctionExpression;
exports.assertClassBody = assertClassBody;
exports.assertClassDeclaration = assertClassDeclaration;
exports.assertClassExpression = assertClassExpression;
exports.assertExportAllDeclaration = assertExportAllDeclaration;
exports.assertExportDefaultDeclaration = assertExportDefaultDeclaration;
exports.assertExportNamedDeclaration = assertExportNamedDeclaration;
exports.assertExportSpecifier = assertExportSpecifier;
exports.assertForOfStatement = assertForOfStatement;
exports.assertImportDeclaration = assertImportDeclaration;
exports.assertImportDefaultSpecifier = assertImportDefaultSpecifier;
exports.assertImportNamespaceSpecifier = assertImportNamespaceSpecifier;
exports.assertImportSpecifier = assertImportSpecifier;
exports.assertMetaProperty = assertMetaProperty;
exports.assertClassMethod = assertClassMethod;
exports.assertObjectPattern = assertObjectPattern;
exports.assertSpreadElement = assertSpreadElement;
exports.assertSuper = assertSuper;
exports.assertTaggedTemplateExpression = assertTaggedTemplateExpression;
exports.assertTemplateElement = assertTemplateElement;
exports.assertTemplateLiteral = assertTemplateLiteral;
exports.assertYieldExpression = assertYieldExpression;
exports.assertAnyTypeAnnotation = assertAnyTypeAnnotation;
exports.assertArrayTypeAnnotation = assertArrayTypeAnnotation;
exports.assertBooleanTypeAnnotation = assertBooleanTypeAnnotation;
exports.assertBooleanLiteralTypeAnnotation = assertBooleanLiteralTypeAnnotation;
exports.assertNullLiteralTypeAnnotation = assertNullLiteralTypeAnnotation;
exports.assertClassImplements = assertClassImplements;
exports.assertDeclareClass = assertDeclareClass;
exports.assertDeclareFunction = assertDeclareFunction;
exports.assertDeclareInterface = assertDeclareInterface;
exports.assertDeclareModule = assertDeclareModule;
exports.assertDeclareModuleExports = assertDeclareModuleExports;
exports.assertDeclareTypeAlias = assertDeclareTypeAlias;
exports.assertDeclareOpaqueType = assertDeclareOpaqueType;
exports.assertDeclareVariable = assertDeclareVariable;
exports.assertDeclareExportDeclaration = assertDeclareExportDeclaration;
exports.assertDeclareExportAllDeclaration = assertDeclareExportAllDeclaration;
exports.assertDeclaredPredicate = assertDeclaredPredicate;
exports.assertExistsTypeAnnotation = assertExistsTypeAnnotation;
exports.assertFunctionTypeAnnotation = assertFunctionTypeAnnotation;
exports.assertFunctionTypeParam = assertFunctionTypeParam;
exports.assertGenericTypeAnnotation = assertGenericTypeAnnotation;
exports.assertInferredPredicate = assertInferredPredicate;
exports.assertInterfaceExtends = assertInterfaceExtends;
exports.assertInterfaceDeclaration = assertInterfaceDeclaration;
exports.assertInterfaceTypeAnnotation = assertInterfaceTypeAnnotation;
exports.assertIntersectionTypeAnnotation = assertIntersectionTypeAnnotation;
exports.assertMixedTypeAnnotation = assertMixedTypeAnnotation;
exports.assertEmptyTypeAnnotation = assertEmptyTypeAnnotation;
exports.assertNullableTypeAnnotation = assertNullableTypeAnnotation;
exports.assertNumberLiteralTypeAnnotation = assertNumberLiteralTypeAnnotation;
exports.assertNumberTypeAnnotation = assertNumberTypeAnnotation;
exports.assertObjectTypeAnnotation = assertObjectTypeAnnotation;
exports.assertObjectTypeInternalSlot = assertObjectTypeInternalSlot;
exports.assertObjectTypeCallProperty = assertObjectTypeCallProperty;
exports.assertObjectTypeIndexer = assertObjectTypeIndexer;
exports.assertObjectTypeProperty = assertObjectTypeProperty;
exports.assertObjectTypeSpreadProperty = assertObjectTypeSpreadProperty;
exports.assertOpaqueType = assertOpaqueType;
exports.assertQualifiedTypeIdentifier = assertQualifiedTypeIdentifier;
exports.assertStringLiteralTypeAnnotation = assertStringLiteralTypeAnnotation;
exports.assertStringTypeAnnotation = assertStringTypeAnnotation;
exports.assertThisTypeAnnotation = assertThisTypeAnnotation;
exports.assertTupleTypeAnnotation = assertTupleTypeAnnotation;
exports.assertTypeofTypeAnnotation = assertTypeofTypeAnnotation;
exports.assertTypeAlias = assertTypeAlias;
exports.assertTypeAnnotation = assertTypeAnnotation;
exports.assertTypeCastExpression = assertTypeCastExpression;
exports.assertTypeParameter = assertTypeParameter;
exports.assertTypeParameterDeclaration = assertTypeParameterDeclaration;
exports.assertTypeParameterInstantiation = assertTypeParameterInstantiation;
exports.assertUnionTypeAnnotation = assertUnionTypeAnnotation;
exports.assertVariance = assertVariance;
exports.assertVoidTypeAnnotation = assertVoidTypeAnnotation;
exports.assertJSXAttribute = assertJSXAttribute;
exports.assertJSXClosingElement = assertJSXClosingElement;
exports.assertJSXElement = assertJSXElement;
exports.assertJSXEmptyExpression = assertJSXEmptyExpression;
exports.assertJSXExpressionContainer = assertJSXExpressionContainer;
exports.assertJSXSpreadChild = assertJSXSpreadChild;
exports.assertJSXIdentifier = assertJSXIdentifier;
exports.assertJSXMemberExpression = assertJSXMemberExpression;
exports.assertJSXNamespacedName = assertJSXNamespacedName;
exports.assertJSXOpeningElement = assertJSXOpeningElement;
exports.assertJSXSpreadAttribute = assertJSXSpreadAttribute;
exports.assertJSXText = assertJSXText;
exports.assertJSXFragment = assertJSXFragment;
exports.assertJSXOpeningFragment = assertJSXOpeningFragment;
exports.assertJSXClosingFragment = assertJSXClosingFragment;
exports.assertNoop = assertNoop;
exports.assertParenthesizedExpression = assertParenthesizedExpression;
exports.assertAwaitExpression = assertAwaitExpression;
exports.assertBindExpression = assertBindExpression;
exports.assertClassProperty = assertClassProperty;
exports.assertOptionalMemberExpression = assertOptionalMemberExpression;
exports.assertPipelineTopicExpression = assertPipelineTopicExpression;
exports.assertPipelineBareFunction = assertPipelineBareFunction;
exports.assertPipelinePrimaryTopicReference = assertPipelinePrimaryTopicReference;
exports.assertOptionalCallExpression = assertOptionalCallExpression;
exports.assertClassPrivateProperty = assertClassPrivateProperty;
exports.assertClassPrivateMethod = assertClassPrivateMethod;
exports.assertImport = assertImport;
exports.assertDecorator = assertDecorator;
exports.assertDoExpression = assertDoExpression;
exports.assertExportDefaultSpecifier = assertExportDefaultSpecifier;
exports.assertExportNamespaceSpecifier = assertExportNamespaceSpecifier;
exports.assertPrivateName = assertPrivateName;
exports.assertBigIntLiteral = assertBigIntLiteral;
exports.assertTSParameterProperty = assertTSParameterProperty;
exports.assertTSDeclareFunction = assertTSDeclareFunction;
exports.assertTSDeclareMethod = assertTSDeclareMethod;
exports.assertTSQualifiedName = assertTSQualifiedName;
exports.assertTSCallSignatureDeclaration = assertTSCallSignatureDeclaration;
exports.assertTSConstructSignatureDeclaration = assertTSConstructSignatureDeclaration;
exports.assertTSPropertySignature = assertTSPropertySignature;
exports.assertTSMethodSignature = assertTSMethodSignature;
exports.assertTSIndexSignature = assertTSIndexSignature;
exports.assertTSAnyKeyword = assertTSAnyKeyword;
exports.assertTSUnknownKeyword = assertTSUnknownKeyword;
exports.assertTSNumberKeyword = assertTSNumberKeyword;
exports.assertTSObjectKeyword = assertTSObjectKeyword;
exports.assertTSBooleanKeyword = assertTSBooleanKeyword;
exports.assertTSStringKeyword = assertTSStringKeyword;
exports.assertTSSymbolKeyword = assertTSSymbolKeyword;
exports.assertTSVoidKeyword = assertTSVoidKeyword;
exports.assertTSUndefinedKeyword = assertTSUndefinedKeyword;
exports.assertTSNullKeyword = assertTSNullKeyword;
exports.assertTSNeverKeyword = assertTSNeverKeyword;
exports.assertTSThisType = assertTSThisType;
exports.assertTSFunctionType = assertTSFunctionType;
exports.assertTSConstructorType = assertTSConstructorType;
exports.assertTSTypeReference = assertTSTypeReference;
exports.assertTSTypePredicate = assertTSTypePredicate;
exports.assertTSTypeQuery = assertTSTypeQuery;
exports.assertTSTypeLiteral = assertTSTypeLiteral;
exports.assertTSArrayType = assertTSArrayType;
exports.assertTSTupleType = assertTSTupleType;
exports.assertTSOptionalType = assertTSOptionalType;
exports.assertTSRestType = assertTSRestType;
exports.assertTSUnionType = assertTSUnionType;
exports.assertTSIntersectionType = assertTSIntersectionType;
exports.assertTSConditionalType = assertTSConditionalType;
exports.assertTSInferType = assertTSInferType;
exports.assertTSParenthesizedType = assertTSParenthesizedType;
exports.assertTSTypeOperator = assertTSTypeOperator;
exports.assertTSIndexedAccessType = assertTSIndexedAccessType;
exports.assertTSMappedType = assertTSMappedType;
exports.assertTSLiteralType = assertTSLiteralType;
exports.assertTSExpressionWithTypeArguments = assertTSExpressionWithTypeArguments;
exports.assertTSInterfaceDeclaration = assertTSInterfaceDeclaration;
exports.assertTSInterfaceBody = assertTSInterfaceBody;
exports.assertTSTypeAliasDeclaration = assertTSTypeAliasDeclaration;
exports.assertTSAsExpression = assertTSAsExpression;
exports.assertTSTypeAssertion = assertTSTypeAssertion;
exports.assertTSEnumDeclaration = assertTSEnumDeclaration;
exports.assertTSEnumMember = assertTSEnumMember;
exports.assertTSModuleDeclaration = assertTSModuleDeclaration;
exports.assertTSModuleBlock = assertTSModuleBlock;
exports.assertTSImportType = assertTSImportType;
exports.assertTSImportEqualsDeclaration = assertTSImportEqualsDeclaration;
exports.assertTSExternalModuleReference = assertTSExternalModuleReference;
exports.assertTSNonNullExpression = assertTSNonNullExpression;
exports.assertTSExportAssignment = assertTSExportAssignment;
exports.assertTSNamespaceExportDeclaration = assertTSNamespaceExportDeclaration;
exports.assertTSTypeAnnotation = assertTSTypeAnnotation;
exports.assertTSTypeParameterInstantiation = assertTSTypeParameterInstantiation;
exports.assertTSTypeParameterDeclaration = assertTSTypeParameterDeclaration;
exports.assertTSTypeParameter = assertTSTypeParameter;
exports.assertExpression = assertExpression;
exports.assertBinary = assertBinary;
exports.assertScopable = assertScopable;
exports.assertBlockParent = assertBlockParent;
exports.assertBlock = assertBlock;
exports.assertStatement = assertStatement;
exports.assertTerminatorless = assertTerminatorless;
exports.assertCompletionStatement = assertCompletionStatement;
exports.assertConditional = assertConditional;
exports.assertLoop = assertLoop;
exports.assertWhile = assertWhile;
exports.assertExpressionWrapper = assertExpressionWrapper;
exports.assertFor = assertFor;
exports.assertForXStatement = assertForXStatement;
exports.assertFunction = assertFunction;
exports.assertFunctionParent = assertFunctionParent;
exports.assertPureish = assertPureish;
exports.assertDeclaration = assertDeclaration;
exports.assertPatternLike = assertPatternLike;
exports.assertLVal = assertLVal;
exports.assertTSEntityName = assertTSEntityName;
exports.assertLiteral = assertLiteral;
exports.assertImmutable = assertImmutable;
exports.assertUserWhitespacable = assertUserWhitespacable;
exports.assertMethod = assertMethod;
exports.assertObjectMember = assertObjectMember;
exports.assertProperty = assertProperty;
exports.assertUnaryLike = assertUnaryLike;
exports.assertPattern = assertPattern;
exports.assertClass = assertClass;
exports.assertModuleDeclaration = assertModuleDeclaration;
exports.assertExportDeclaration = assertExportDeclaration;
exports.assertModuleSpecifier = assertModuleSpecifier;
exports.assertFlow = assertFlow;
exports.assertFlowType = assertFlowType;
exports.assertFlowBaseAnnotation = assertFlowBaseAnnotation;
exports.assertFlowDeclaration = assertFlowDeclaration;
exports.assertFlowPredicate = assertFlowPredicate;
exports.assertJSX = assertJSX;
exports.assertPrivate = assertPrivate;
exports.assertTSTypeElement = assertTSTypeElement;
exports.assertTSType = assertTSType;
exports.assertNumberLiteral = assertNumberLiteral;
exports.assertRegexLiteral = assertRegexLiteral;
exports.assertRestProperty = assertRestProperty;
exports.assertSpreadProperty = assertSpreadProperty;

var _is = _interopRequireDefault(__webpack_require__(35));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(type, node, opts) {
  if (!(0, _is.default)(type, node, opts)) {
    throw new Error(`Expected type "${type}" with option ${JSON.stringify(opts)}, but instead got "${node.type}".`);
  }
}

function assertArrayExpression(node, opts = {}) {
  assert("ArrayExpression", node, opts);
}

function assertAssignmentExpression(node, opts = {}) {
  assert("AssignmentExpression", node, opts);
}

function assertBinaryExpression(node, opts = {}) {
  assert("BinaryExpression", node, opts);
}

function assertInterpreterDirective(node, opts = {}) {
  assert("InterpreterDirective", node, opts);
}

function assertDirective(node, opts = {}) {
  assert("Directive", node, opts);
}

function assertDirectiveLiteral(node, opts = {}) {
  assert("DirectiveLiteral", node, opts);
}

function assertBlockStatement(node, opts = {}) {
  assert("BlockStatement", node, opts);
}

function assertBreakStatement(node, opts = {}) {
  assert("BreakStatement", node, opts);
}

function assertCallExpression(node, opts = {}) {
  assert("CallExpression", node, opts);
}

function assertCatchClause(node, opts = {}) {
  assert("CatchClause", node, opts);
}

function assertConditionalExpression(node, opts = {}) {
  assert("ConditionalExpression", node, opts);
}

function assertContinueStatement(node, opts = {}) {
  assert("ContinueStatement", node, opts);
}

function assertDebuggerStatement(node, opts = {}) {
  assert("DebuggerStatement", node, opts);
}

function assertDoWhileStatement(node, opts = {}) {
  assert("DoWhileStatement", node, opts);
}

function assertEmptyStatement(node, opts = {}) {
  assert("EmptyStatement", node, opts);
}

function assertExpressionStatement(node, opts = {}) {
  assert("ExpressionStatement", node, opts);
}

function assertFile(node, opts = {}) {
  assert("File", node, opts);
}

function assertForInStatement(node, opts = {}) {
  assert("ForInStatement", node, opts);
}

function assertForStatement(node, opts = {}) {
  assert("ForStatement", node, opts);
}

function assertFunctionDeclaration(node, opts = {}) {
  assert("FunctionDeclaration", node, opts);
}

function assertFunctionExpression(node, opts = {}) {
  assert("FunctionExpression", node, opts);
}

function assertIdentifier(node, opts = {}) {
  assert("Identifier", node, opts);
}

function assertIfStatement(node, opts = {}) {
  assert("IfStatement", node, opts);
}

function assertLabeledStatement(node, opts = {}) {
  assert("LabeledStatement", node, opts);
}

function assertStringLiteral(node, opts = {}) {
  assert("StringLiteral", node, opts);
}

function assertNumericLiteral(node, opts = {}) {
  assert("NumericLiteral", node, opts);
}

function assertNullLiteral(node, opts = {}) {
  assert("NullLiteral", node, opts);
}

function assertBooleanLiteral(node, opts = {}) {
  assert("BooleanLiteral", node, opts);
}

function assertRegExpLiteral(node, opts = {}) {
  assert("RegExpLiteral", node, opts);
}

function assertLogicalExpression(node, opts = {}) {
  assert("LogicalExpression", node, opts);
}

function assertMemberExpression(node, opts = {}) {
  assert("MemberExpression", node, opts);
}

function assertNewExpression(node, opts = {}) {
  assert("NewExpression", node, opts);
}

function assertProgram(node, opts = {}) {
  assert("Program", node, opts);
}

function assertObjectExpression(node, opts = {}) {
  assert("ObjectExpression", node, opts);
}

function assertObjectMethod(node, opts = {}) {
  assert("ObjectMethod", node, opts);
}

function assertObjectProperty(node, opts = {}) {
  assert("ObjectProperty", node, opts);
}

function assertRestElement(node, opts = {}) {
  assert("RestElement", node, opts);
}

function assertReturnStatement(node, opts = {}) {
  assert("ReturnStatement", node, opts);
}

function assertSequenceExpression(node, opts = {}) {
  assert("SequenceExpression", node, opts);
}

function assertSwitchCase(node, opts = {}) {
  assert("SwitchCase", node, opts);
}

function assertSwitchStatement(node, opts = {}) {
  assert("SwitchStatement", node, opts);
}

function assertThisExpression(node, opts = {}) {
  assert("ThisExpression", node, opts);
}

function assertThrowStatement(node, opts = {}) {
  assert("ThrowStatement", node, opts);
}

function assertTryStatement(node, opts = {}) {
  assert("TryStatement", node, opts);
}

function assertUnaryExpression(node, opts = {}) {
  assert("UnaryExpression", node, opts);
}

function assertUpdateExpression(node, opts = {}) {
  assert("UpdateExpression", node, opts);
}

function assertVariableDeclaration(node, opts = {}) {
  assert("VariableDeclaration", node, opts);
}

function assertVariableDeclarator(node, opts = {}) {
  assert("VariableDeclarator", node, opts);
}

function assertWhileStatement(node, opts = {}) {
  assert("WhileStatement", node, opts);
}

function assertWithStatement(node, opts = {}) {
  assert("WithStatement", node, opts);
}

function assertAssignmentPattern(node, opts = {}) {
  assert("AssignmentPattern", node, opts);
}

function assertArrayPattern(node, opts = {}) {
  assert("ArrayPattern", node, opts);
}

function assertArrowFunctionExpression(node, opts = {}) {
  assert("ArrowFunctionExpression", node, opts);
}

function assertClassBody(node, opts = {}) {
  assert("ClassBody", node, opts);
}

function assertClassDeclaration(node, opts = {}) {
  assert("ClassDeclaration", node, opts);
}

function assertClassExpression(node, opts = {}) {
  assert("ClassExpression", node, opts);
}

function assertExportAllDeclaration(node, opts = {}) {
  assert("ExportAllDeclaration", node, opts);
}

function assertExportDefaultDeclaration(node, opts = {}) {
  assert("ExportDefaultDeclaration", node, opts);
}

function assertExportNamedDeclaration(node, opts = {}) {
  assert("ExportNamedDeclaration", node, opts);
}

function assertExportSpecifier(node, opts = {}) {
  assert("ExportSpecifier", node, opts);
}

function assertForOfStatement(node, opts = {}) {
  assert("ForOfStatement", node, opts);
}

function assertImportDeclaration(node, opts = {}) {
  assert("ImportDeclaration", node, opts);
}

function assertImportDefaultSpecifier(node, opts = {}) {
  assert("ImportDefaultSpecifier", node, opts);
}

function assertImportNamespaceSpecifier(node, opts = {}) {
  assert("ImportNamespaceSpecifier", node, opts);
}

function assertImportSpecifier(node, opts = {}) {
  assert("ImportSpecifier", node, opts);
}

function assertMetaProperty(node, opts = {}) {
  assert("MetaProperty", node, opts);
}

function assertClassMethod(node, opts = {}) {
  assert("ClassMethod", node, opts);
}

function assertObjectPattern(node, opts = {}) {
  assert("ObjectPattern", node, opts);
}

function assertSpreadElement(node, opts = {}) {
  assert("SpreadElement", node, opts);
}

function assertSuper(node, opts = {}) {
  assert("Super", node, opts);
}

function assertTaggedTemplateExpression(node, opts = {}) {
  assert("TaggedTemplateExpression", node, opts);
}

function assertTemplateElement(node, opts = {}) {
  assert("TemplateElement", node, opts);
}

function assertTemplateLiteral(node, opts = {}) {
  assert("TemplateLiteral", node, opts);
}

function assertYieldExpression(node, opts = {}) {
  assert("YieldExpression", node, opts);
}

function assertAnyTypeAnnotation(node, opts = {}) {
  assert("AnyTypeAnnotation", node, opts);
}

function assertArrayTypeAnnotation(node, opts = {}) {
  assert("ArrayTypeAnnotation", node, opts);
}

function assertBooleanTypeAnnotation(node, opts = {}) {
  assert("BooleanTypeAnnotation", node, opts);
}

function assertBooleanLiteralTypeAnnotation(node, opts = {}) {
  assert("BooleanLiteralTypeAnnotation", node, opts);
}

function assertNullLiteralTypeAnnotation(node, opts = {}) {
  assert("NullLiteralTypeAnnotation", node, opts);
}

function assertClassImplements(node, opts = {}) {
  assert("ClassImplements", node, opts);
}

function assertDeclareClass(node, opts = {}) {
  assert("DeclareClass", node, opts);
}

function assertDeclareFunction(node, opts = {}) {
  assert("DeclareFunction", node, opts);
}

function assertDeclareInterface(node, opts = {}) {
  assert("DeclareInterface", node, opts);
}

function assertDeclareModule(node, opts = {}) {
  assert("DeclareModule", node, opts);
}

function assertDeclareModuleExports(node, opts = {}) {
  assert("DeclareModuleExports", node, opts);
}

function assertDeclareTypeAlias(node, opts = {}) {
  assert("DeclareTypeAlias", node, opts);
}

function assertDeclareOpaqueType(node, opts = {}) {
  assert("DeclareOpaqueType", node, opts);
}

function assertDeclareVariable(node, opts = {}) {
  assert("DeclareVariable", node, opts);
}

function assertDeclareExportDeclaration(node, opts = {}) {
  assert("DeclareExportDeclaration", node, opts);
}

function assertDeclareExportAllDeclaration(node, opts = {}) {
  assert("DeclareExportAllDeclaration", node, opts);
}

function assertDeclaredPredicate(node, opts = {}) {
  assert("DeclaredPredicate", node, opts);
}

function assertExistsTypeAnnotation(node, opts = {}) {
  assert("ExistsTypeAnnotation", node, opts);
}

function assertFunctionTypeAnnotation(node, opts = {}) {
  assert("FunctionTypeAnnotation", node, opts);
}

function assertFunctionTypeParam(node, opts = {}) {
  assert("FunctionTypeParam", node, opts);
}

function assertGenericTypeAnnotation(node, opts = {}) {
  assert("GenericTypeAnnotation", node, opts);
}

function assertInferredPredicate(node, opts = {}) {
  assert("InferredPredicate", node, opts);
}

function assertInterfaceExtends(node, opts = {}) {
  assert("InterfaceExtends", node, opts);
}

function assertInterfaceDeclaration(node, opts = {}) {
  assert("InterfaceDeclaration", node, opts);
}

function assertInterfaceTypeAnnotation(node, opts = {}) {
  assert("InterfaceTypeAnnotation", node, opts);
}

function assertIntersectionTypeAnnotation(node, opts = {}) {
  assert("IntersectionTypeAnnotation", node, opts);
}

function assertMixedTypeAnnotation(node, opts = {}) {
  assert("MixedTypeAnnotation", node, opts);
}

function assertEmptyTypeAnnotation(node, opts = {}) {
  assert("EmptyTypeAnnotation", node, opts);
}

function assertNullableTypeAnnotation(node, opts = {}) {
  assert("NullableTypeAnnotation", node, opts);
}

function assertNumberLiteralTypeAnnotation(node, opts = {}) {
  assert("NumberLiteralTypeAnnotation", node, opts);
}

function assertNumberTypeAnnotation(node, opts = {}) {
  assert("NumberTypeAnnotation", node, opts);
}

function assertObjectTypeAnnotation(node, opts = {}) {
  assert("ObjectTypeAnnotation", node, opts);
}

function assertObjectTypeInternalSlot(node, opts = {}) {
  assert("ObjectTypeInternalSlot", node, opts);
}

function assertObjectTypeCallProperty(node, opts = {}) {
  assert("ObjectTypeCallProperty", node, opts);
}

function assertObjectTypeIndexer(node, opts = {}) {
  assert("ObjectTypeIndexer", node, opts);
}

function assertObjectTypeProperty(node, opts = {}) {
  assert("ObjectTypeProperty", node, opts);
}

function assertObjectTypeSpreadProperty(node, opts = {}) {
  assert("ObjectTypeSpreadProperty", node, opts);
}

function assertOpaqueType(node, opts = {}) {
  assert("OpaqueType", node, opts);
}

function assertQualifiedTypeIdentifier(node, opts = {}) {
  assert("QualifiedTypeIdentifier", node, opts);
}

function assertStringLiteralTypeAnnotation(node, opts = {}) {
  assert("StringLiteralTypeAnnotation", node, opts);
}

function assertStringTypeAnnotation(node, opts = {}) {
  assert("StringTypeAnnotation", node, opts);
}

function assertThisTypeAnnotation(node, opts = {}) {
  assert("ThisTypeAnnotation", node, opts);
}

function assertTupleTypeAnnotation(node, opts = {}) {
  assert("TupleTypeAnnotation", node, opts);
}

function assertTypeofTypeAnnotation(node, opts = {}) {
  assert("TypeofTypeAnnotation", node, opts);
}

function assertTypeAlias(node, opts = {}) {
  assert("TypeAlias", node, opts);
}

function assertTypeAnnotation(node, opts = {}) {
  assert("TypeAnnotation", node, opts);
}

function assertTypeCastExpression(node, opts = {}) {
  assert("TypeCastExpression", node, opts);
}

function assertTypeParameter(node, opts = {}) {
  assert("TypeParameter", node, opts);
}

function assertTypeParameterDeclaration(node, opts = {}) {
  assert("TypeParameterDeclaration", node, opts);
}

function assertTypeParameterInstantiation(node, opts = {}) {
  assert("TypeParameterInstantiation", node, opts);
}

function assertUnionTypeAnnotation(node, opts = {}) {
  assert("UnionTypeAnnotation", node, opts);
}

function assertVariance(node, opts = {}) {
  assert("Variance", node, opts);
}

function assertVoidTypeAnnotation(node, opts = {}) {
  assert("VoidTypeAnnotation", node, opts);
}

function assertJSXAttribute(node, opts = {}) {
  assert("JSXAttribute", node, opts);
}

function assertJSXClosingElement(node, opts = {}) {
  assert("JSXClosingElement", node, opts);
}

function assertJSXElement(node, opts = {}) {
  assert("JSXElement", node, opts);
}

function assertJSXEmptyExpression(node, opts = {}) {
  assert("JSXEmptyExpression", node, opts);
}

function assertJSXExpressionContainer(node, opts = {}) {
  assert("JSXExpressionContainer", node, opts);
}

function assertJSXSpreadChild(node, opts = {}) {
  assert("JSXSpreadChild", node, opts);
}

function assertJSXIdentifier(node, opts = {}) {
  assert("JSXIdentifier", node, opts);
}

function assertJSXMemberExpression(node, opts = {}) {
  assert("JSXMemberExpression", node, opts);
}

function assertJSXNamespacedName(node, opts = {}) {
  assert("JSXNamespacedName", node, opts);
}

function assertJSXOpeningElement(node, opts = {}) {
  assert("JSXOpeningElement", node, opts);
}

function assertJSXSpreadAttribute(node, opts = {}) {
  assert("JSXSpreadAttribute", node, opts);
}

function assertJSXText(node, opts = {}) {
  assert("JSXText", node, opts);
}

function assertJSXFragment(node, opts = {}) {
  assert("JSXFragment", node, opts);
}

function assertJSXOpeningFragment(node, opts = {}) {
  assert("JSXOpeningFragment", node, opts);
}

function assertJSXClosingFragment(node, opts = {}) {
  assert("JSXClosingFragment", node, opts);
}

function assertNoop(node, opts = {}) {
  assert("Noop", node, opts);
}

function assertParenthesizedExpression(node, opts = {}) {
  assert("ParenthesizedExpression", node, opts);
}

function assertAwaitExpression(node, opts = {}) {
  assert("AwaitExpression", node, opts);
}

function assertBindExpression(node, opts = {}) {
  assert("BindExpression", node, opts);
}

function assertClassProperty(node, opts = {}) {
  assert("ClassProperty", node, opts);
}

function assertOptionalMemberExpression(node, opts = {}) {
  assert("OptionalMemberExpression", node, opts);
}

function assertPipelineTopicExpression(node, opts = {}) {
  assert("PipelineTopicExpression", node, opts);
}

function assertPipelineBareFunction(node, opts = {}) {
  assert("PipelineBareFunction", node, opts);
}

function assertPipelinePrimaryTopicReference(node, opts = {}) {
  assert("PipelinePrimaryTopicReference", node, opts);
}

function assertOptionalCallExpression(node, opts = {}) {
  assert("OptionalCallExpression", node, opts);
}

function assertClassPrivateProperty(node, opts = {}) {
  assert("ClassPrivateProperty", node, opts);
}

function assertClassPrivateMethod(node, opts = {}) {
  assert("ClassPrivateMethod", node, opts);
}

function assertImport(node, opts = {}) {
  assert("Import", node, opts);
}

function assertDecorator(node, opts = {}) {
  assert("Decorator", node, opts);
}

function assertDoExpression(node, opts = {}) {
  assert("DoExpression", node, opts);
}

function assertExportDefaultSpecifier(node, opts = {}) {
  assert("ExportDefaultSpecifier", node, opts);
}

function assertExportNamespaceSpecifier(node, opts = {}) {
  assert("ExportNamespaceSpecifier", node, opts);
}

function assertPrivateName(node, opts = {}) {
  assert("PrivateName", node, opts);
}

function assertBigIntLiteral(node, opts = {}) {
  assert("BigIntLiteral", node, opts);
}

function assertTSParameterProperty(node, opts = {}) {
  assert("TSParameterProperty", node, opts);
}

function assertTSDeclareFunction(node, opts = {}) {
  assert("TSDeclareFunction", node, opts);
}

function assertTSDeclareMethod(node, opts = {}) {
  assert("TSDeclareMethod", node, opts);
}

function assertTSQualifiedName(node, opts = {}) {
  assert("TSQualifiedName", node, opts);
}

function assertTSCallSignatureDeclaration(node, opts = {}) {
  assert("TSCallSignatureDeclaration", node, opts);
}

function assertTSConstructSignatureDeclaration(node, opts = {}) {
  assert("TSConstructSignatureDeclaration", node, opts);
}

function assertTSPropertySignature(node, opts = {}) {
  assert("TSPropertySignature", node, opts);
}

function assertTSMethodSignature(node, opts = {}) {
  assert("TSMethodSignature", node, opts);
}

function assertTSIndexSignature(node, opts = {}) {
  assert("TSIndexSignature", node, opts);
}

function assertTSAnyKeyword(node, opts = {}) {
  assert("TSAnyKeyword", node, opts);
}

function assertTSUnknownKeyword(node, opts = {}) {
  assert("TSUnknownKeyword", node, opts);
}

function assertTSNumberKeyword(node, opts = {}) {
  assert("TSNumberKeyword", node, opts);
}

function assertTSObjectKeyword(node, opts = {}) {
  assert("TSObjectKeyword", node, opts);
}

function assertTSBooleanKeyword(node, opts = {}) {
  assert("TSBooleanKeyword", node, opts);
}

function assertTSStringKeyword(node, opts = {}) {
  assert("TSStringKeyword", node, opts);
}

function assertTSSymbolKeyword(node, opts = {}) {
  assert("TSSymbolKeyword", node, opts);
}

function assertTSVoidKeyword(node, opts = {}) {
  assert("TSVoidKeyword", node, opts);
}

function assertTSUndefinedKeyword(node, opts = {}) {
  assert("TSUndefinedKeyword", node, opts);
}

function assertTSNullKeyword(node, opts = {}) {
  assert("TSNullKeyword", node, opts);
}

function assertTSNeverKeyword(node, opts = {}) {
  assert("TSNeverKeyword", node, opts);
}

function assertTSThisType(node, opts = {}) {
  assert("TSThisType", node, opts);
}

function assertTSFunctionType(node, opts = {}) {
  assert("TSFunctionType", node, opts);
}

function assertTSConstructorType(node, opts = {}) {
  assert("TSConstructorType", node, opts);
}

function assertTSTypeReference(node, opts = {}) {
  assert("TSTypeReference", node, opts);
}

function assertTSTypePredicate(node, opts = {}) {
  assert("TSTypePredicate", node, opts);
}

function assertTSTypeQuery(node, opts = {}) {
  assert("TSTypeQuery", node, opts);
}

function assertTSTypeLiteral(node, opts = {}) {
  assert("TSTypeLiteral", node, opts);
}

function assertTSArrayType(node, opts = {}) {
  assert("TSArrayType", node, opts);
}

function assertTSTupleType(node, opts = {}) {
  assert("TSTupleType", node, opts);
}

function assertTSOptionalType(node, opts = {}) {
  assert("TSOptionalType", node, opts);
}

function assertTSRestType(node, opts = {}) {
  assert("TSRestType", node, opts);
}

function assertTSUnionType(node, opts = {}) {
  assert("TSUnionType", node, opts);
}

function assertTSIntersectionType(node, opts = {}) {
  assert("TSIntersectionType", node, opts);
}

function assertTSConditionalType(node, opts = {}) {
  assert("TSConditionalType", node, opts);
}

function assertTSInferType(node, opts = {}) {
  assert("TSInferType", node, opts);
}

function assertTSParenthesizedType(node, opts = {}) {
  assert("TSParenthesizedType", node, opts);
}

function assertTSTypeOperator(node, opts = {}) {
  assert("TSTypeOperator", node, opts);
}

function assertTSIndexedAccessType(node, opts = {}) {
  assert("TSIndexedAccessType", node, opts);
}

function assertTSMappedType(node, opts = {}) {
  assert("TSMappedType", node, opts);
}

function assertTSLiteralType(node, opts = {}) {
  assert("TSLiteralType", node, opts);
}

function assertTSExpressionWithTypeArguments(node, opts = {}) {
  assert("TSExpressionWithTypeArguments", node, opts);
}

function assertTSInterfaceDeclaration(node, opts = {}) {
  assert("TSInterfaceDeclaration", node, opts);
}

function assertTSInterfaceBody(node, opts = {}) {
  assert("TSInterfaceBody", node, opts);
}

function assertTSTypeAliasDeclaration(node, opts = {}) {
  assert("TSTypeAliasDeclaration", node, opts);
}

function assertTSAsExpression(node, opts = {}) {
  assert("TSAsExpression", node, opts);
}

function assertTSTypeAssertion(node, opts = {}) {
  assert("TSTypeAssertion", node, opts);
}

function assertTSEnumDeclaration(node, opts = {}) {
  assert("TSEnumDeclaration", node, opts);
}

function assertTSEnumMember(node, opts = {}) {
  assert("TSEnumMember", node, opts);
}

function assertTSModuleDeclaration(node, opts = {}) {
  assert("TSModuleDeclaration", node, opts);
}

function assertTSModuleBlock(node, opts = {}) {
  assert("TSModuleBlock", node, opts);
}

function assertTSImportType(node, opts = {}) {
  assert("TSImportType", node, opts);
}

function assertTSImportEqualsDeclaration(node, opts = {}) {
  assert("TSImportEqualsDeclaration", node, opts);
}

function assertTSExternalModuleReference(node, opts = {}) {
  assert("TSExternalModuleReference", node, opts);
}

function assertTSNonNullExpression(node, opts = {}) {
  assert("TSNonNullExpression", node, opts);
}

function assertTSExportAssignment(node, opts = {}) {
  assert("TSExportAssignment", node, opts);
}

function assertTSNamespaceExportDeclaration(node, opts = {}) {
  assert("TSNamespaceExportDeclaration", node, opts);
}

function assertTSTypeAnnotation(node, opts = {}) {
  assert("TSTypeAnnotation", node, opts);
}

function assertTSTypeParameterInstantiation(node, opts = {}) {
  assert("TSTypeParameterInstantiation", node, opts);
}

function assertTSTypeParameterDeclaration(node, opts = {}) {
  assert("TSTypeParameterDeclaration", node, opts);
}

function assertTSTypeParameter(node, opts = {}) {
  assert("TSTypeParameter", node, opts);
}

function assertExpression(node, opts = {}) {
  assert("Expression", node, opts);
}

function assertBinary(node, opts = {}) {
  assert("Binary", node, opts);
}

function assertScopable(node, opts = {}) {
  assert("Scopable", node, opts);
}

function assertBlockParent(node, opts = {}) {
  assert("BlockParent", node, opts);
}

function assertBlock(node, opts = {}) {
  assert("Block", node, opts);
}

function assertStatement(node, opts = {}) {
  assert("Statement", node, opts);
}

function assertTerminatorless(node, opts = {}) {
  assert("Terminatorless", node, opts);
}

function assertCompletionStatement(node, opts = {}) {
  assert("CompletionStatement", node, opts);
}

function assertConditional(node, opts = {}) {
  assert("Conditional", node, opts);
}

function assertLoop(node, opts = {}) {
  assert("Loop", node, opts);
}

function assertWhile(node, opts = {}) {
  assert("While", node, opts);
}

function assertExpressionWrapper(node, opts = {}) {
  assert("ExpressionWrapper", node, opts);
}

function assertFor(node, opts = {}) {
  assert("For", node, opts);
}

function assertForXStatement(node, opts = {}) {
  assert("ForXStatement", node, opts);
}

function assertFunction(node, opts = {}) {
  assert("Function", node, opts);
}

function assertFunctionParent(node, opts = {}) {
  assert("FunctionParent", node, opts);
}

function assertPureish(node, opts = {}) {
  assert("Pureish", node, opts);
}

function assertDeclaration(node, opts = {}) {
  assert("Declaration", node, opts);
}

function assertPatternLike(node, opts = {}) {
  assert("PatternLike", node, opts);
}

function assertLVal(node, opts = {}) {
  assert("LVal", node, opts);
}

function assertTSEntityName(node, opts = {}) {
  assert("TSEntityName", node, opts);
}

function assertLiteral(node, opts = {}) {
  assert("Literal", node, opts);
}

function assertImmutable(node, opts = {}) {
  assert("Immutable", node, opts);
}

function assertUserWhitespacable(node, opts = {}) {
  assert("UserWhitespacable", node, opts);
}

function assertMethod(node, opts = {}) {
  assert("Method", node, opts);
}

function assertObjectMember(node, opts = {}) {
  assert("ObjectMember", node, opts);
}

function assertProperty(node, opts = {}) {
  assert("Property", node, opts);
}

function assertUnaryLike(node, opts = {}) {
  assert("UnaryLike", node, opts);
}

function assertPattern(node, opts = {}) {
  assert("Pattern", node, opts);
}

function assertClass(node, opts = {}) {
  assert("Class", node, opts);
}

function assertModuleDeclaration(node, opts = {}) {
  assert("ModuleDeclaration", node, opts);
}

function assertExportDeclaration(node, opts = {}) {
  assert("ExportDeclaration", node, opts);
}

function assertModuleSpecifier(node, opts = {}) {
  assert("ModuleSpecifier", node, opts);
}

function assertFlow(node, opts = {}) {
  assert("Flow", node, opts);
}

function assertFlowType(node, opts = {}) {
  assert("FlowType", node, opts);
}

function assertFlowBaseAnnotation(node, opts = {}) {
  assert("FlowBaseAnnotation", node, opts);
}

function assertFlowDeclaration(node, opts = {}) {
  assert("FlowDeclaration", node, opts);
}

function assertFlowPredicate(node, opts = {}) {
  assert("FlowPredicate", node, opts);
}

function assertJSX(node, opts = {}) {
  assert("JSX", node, opts);
}

function assertPrivate(node, opts = {}) {
  assert("Private", node, opts);
}

function assertTSTypeElement(node, opts = {}) {
  assert("TSTypeElement", node, opts);
}

function assertTSType(node, opts = {}) {
  assert("TSType", node, opts);
}

function assertNumberLiteral(node, opts) {
  console.trace("The node type NumberLiteral has been renamed to NumericLiteral");
  assert("NumberLiteral", node, opts);
}

function assertRegexLiteral(node, opts) {
  console.trace("The node type RegexLiteral has been renamed to RegExpLiteral");
  assert("RegexLiteral", node, opts);
}

function assertRestProperty(node, opts) {
  console.trace("The node type RestProperty has been renamed to RestElement");
  assert("RestProperty", node, opts);
}

function assertSpreadProperty(node, opts) {
  console.trace("The node type SpreadProperty has been renamed to SpreadElement");
  assert("SpreadProperty", node, opts);
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypeAnnotationBasedOnTypeof;

var _generated = __webpack_require__(2);

function createTypeAnnotationBasedOnTypeof(type) {
  if (type === "string") {
    return (0, _generated.stringTypeAnnotation)();
  } else if (type === "number") {
    return (0, _generated.numberTypeAnnotation)();
  } else if (type === "undefined") {
    return (0, _generated.voidTypeAnnotation)();
  } else if (type === "boolean") {
    return (0, _generated.booleanTypeAnnotation)();
  } else if (type === "function") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Function"));
  } else if (type === "object") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Object"));
  } else if (type === "symbol") {
    return (0, _generated.genericTypeAnnotation)((0, _generated.identifier)("Symbol"));
  } else {
    throw new Error("Invalid typeof value");
  }
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUnionTypeAnnotation;

var _generated = __webpack_require__(2);

var _removeTypeDuplicates = _interopRequireDefault(__webpack_require__(62));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createUnionTypeAnnotation(types) {
  const flattened = (0, _removeTypeDuplicates.default)(types);

  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _generated.unionTypeAnnotation)(flattened);
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneDeep;

var _cloneNode = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneDeep(node) {
  return (0, _cloneNode.default)(node);
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithoutLoc;

var _clone = _interopRequireDefault(__webpack_require__(63));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithoutLoc(node) {
  const newNode = (0, _clone.default)(node);
  newNode.loc = null;
  return newNode;
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addComment;

var _addComments = _interopRequireDefault(__webpack_require__(64));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addComment(node, type, content, line) {
  return (0, _addComments.default)(node, type, [{
    type: line ? "CommentLine" : "CommentBlock",
    value: content
  }]);
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(170);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(171),
    arrayIncludes = __webpack_require__(174),
    arrayIncludesWith = __webpack_require__(179),
    cacheHas = __webpack_require__(180),
    createSet = __webpack_require__(181),
    setToArray = __webpack_require__(66);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(45),
    setCacheAdd = __webpack_require__(172),
    setCacheHas = __webpack_require__(173);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(175);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(176),
    baseIsNaN = __webpack_require__(177),
    strictIndexOf = __webpack_require__(178);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 180 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(58),
    noop = __webpack_require__(182),
    setToArray = __webpack_require__(66);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeComments;

var _constants = __webpack_require__(8);

function removeComments(node) {
  _constants.COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });

  return node;
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTYPE_TYPES = exports.TSTYPEELEMENT_TYPES = exports.PRIVATE_TYPES = exports.JSX_TYPES = exports.FLOWPREDICATE_TYPES = exports.FLOWDECLARATION_TYPES = exports.FLOWBASEANNOTATION_TYPES = exports.FLOWTYPE_TYPES = exports.FLOW_TYPES = exports.MODULESPECIFIER_TYPES = exports.EXPORTDECLARATION_TYPES = exports.MODULEDECLARATION_TYPES = exports.CLASS_TYPES = exports.PATTERN_TYPES = exports.UNARYLIKE_TYPES = exports.PROPERTY_TYPES = exports.OBJECTMEMBER_TYPES = exports.METHOD_TYPES = exports.USERWHITESPACABLE_TYPES = exports.IMMUTABLE_TYPES = exports.LITERAL_TYPES = exports.TSENTITYNAME_TYPES = exports.LVAL_TYPES = exports.PATTERNLIKE_TYPES = exports.DECLARATION_TYPES = exports.PUREISH_TYPES = exports.FUNCTIONPARENT_TYPES = exports.FUNCTION_TYPES = exports.FORXSTATEMENT_TYPES = exports.FOR_TYPES = exports.EXPRESSIONWRAPPER_TYPES = exports.WHILE_TYPES = exports.LOOP_TYPES = exports.CONDITIONAL_TYPES = exports.COMPLETIONSTATEMENT_TYPES = exports.TERMINATORLESS_TYPES = exports.STATEMENT_TYPES = exports.BLOCK_TYPES = exports.BLOCKPARENT_TYPES = exports.SCOPABLE_TYPES = exports.BINARY_TYPES = exports.EXPRESSION_TYPES = void 0;

var _definitions = __webpack_require__(4);

const EXPRESSION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Expression"];
exports.EXPRESSION_TYPES = EXPRESSION_TYPES;
const BINARY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Binary"];
exports.BINARY_TYPES = BINARY_TYPES;
const SCOPABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Scopable"];
exports.SCOPABLE_TYPES = SCOPABLE_TYPES;
const BLOCKPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["BlockParent"];
exports.BLOCKPARENT_TYPES = BLOCKPARENT_TYPES;
const BLOCK_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Block"];
exports.BLOCK_TYPES = BLOCK_TYPES;
const STATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Statement"];
exports.STATEMENT_TYPES = STATEMENT_TYPES;
const TERMINATORLESS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Terminatorless"];
exports.TERMINATORLESS_TYPES = TERMINATORLESS_TYPES;
const COMPLETIONSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["CompletionStatement"];
exports.COMPLETIONSTATEMENT_TYPES = COMPLETIONSTATEMENT_TYPES;
const CONDITIONAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Conditional"];
exports.CONDITIONAL_TYPES = CONDITIONAL_TYPES;
const LOOP_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Loop"];
exports.LOOP_TYPES = LOOP_TYPES;
const WHILE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["While"];
exports.WHILE_TYPES = WHILE_TYPES;
const EXPRESSIONWRAPPER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExpressionWrapper"];
exports.EXPRESSIONWRAPPER_TYPES = EXPRESSIONWRAPPER_TYPES;
const FOR_TYPES = _definitions.FLIPPED_ALIAS_KEYS["For"];
exports.FOR_TYPES = FOR_TYPES;
const FORXSTATEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ForXStatement"];
exports.FORXSTATEMENT_TYPES = FORXSTATEMENT_TYPES;
const FUNCTION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Function"];
exports.FUNCTION_TYPES = FUNCTION_TYPES;
const FUNCTIONPARENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FunctionParent"];
exports.FUNCTIONPARENT_TYPES = FUNCTIONPARENT_TYPES;
const PUREISH_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pureish"];
exports.PUREISH_TYPES = PUREISH_TYPES;
const DECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Declaration"];
exports.DECLARATION_TYPES = DECLARATION_TYPES;
const PATTERNLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["PatternLike"];
exports.PATTERNLIKE_TYPES = PATTERNLIKE_TYPES;
const LVAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["LVal"];
exports.LVAL_TYPES = LVAL_TYPES;
const TSENTITYNAME_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSEntityName"];
exports.TSENTITYNAME_TYPES = TSENTITYNAME_TYPES;
const LITERAL_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Literal"];
exports.LITERAL_TYPES = LITERAL_TYPES;
const IMMUTABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Immutable"];
exports.IMMUTABLE_TYPES = IMMUTABLE_TYPES;
const USERWHITESPACABLE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UserWhitespacable"];
exports.USERWHITESPACABLE_TYPES = USERWHITESPACABLE_TYPES;
const METHOD_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Method"];
exports.METHOD_TYPES = METHOD_TYPES;
const OBJECTMEMBER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ObjectMember"];
exports.OBJECTMEMBER_TYPES = OBJECTMEMBER_TYPES;
const PROPERTY_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Property"];
exports.PROPERTY_TYPES = PROPERTY_TYPES;
const UNARYLIKE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["UnaryLike"];
exports.UNARYLIKE_TYPES = UNARYLIKE_TYPES;
const PATTERN_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Pattern"];
exports.PATTERN_TYPES = PATTERN_TYPES;
const CLASS_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Class"];
exports.CLASS_TYPES = CLASS_TYPES;
const MODULEDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleDeclaration"];
exports.MODULEDECLARATION_TYPES = MODULEDECLARATION_TYPES;
const EXPORTDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ExportDeclaration"];
exports.EXPORTDECLARATION_TYPES = EXPORTDECLARATION_TYPES;
const MODULESPECIFIER_TYPES = _definitions.FLIPPED_ALIAS_KEYS["ModuleSpecifier"];
exports.MODULESPECIFIER_TYPES = MODULESPECIFIER_TYPES;
const FLOW_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Flow"];
exports.FLOW_TYPES = FLOW_TYPES;
const FLOWTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowType"];
exports.FLOWTYPE_TYPES = FLOWTYPE_TYPES;
const FLOWBASEANNOTATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowBaseAnnotation"];
exports.FLOWBASEANNOTATION_TYPES = FLOWBASEANNOTATION_TYPES;
const FLOWDECLARATION_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowDeclaration"];
exports.FLOWDECLARATION_TYPES = FLOWDECLARATION_TYPES;
const FLOWPREDICATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["FlowPredicate"];
exports.FLOWPREDICATE_TYPES = FLOWPREDICATE_TYPES;
const JSX_TYPES = _definitions.FLIPPED_ALIAS_KEYS["JSX"];
exports.JSX_TYPES = JSX_TYPES;
const PRIVATE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["Private"];
exports.PRIVATE_TYPES = PRIVATE_TYPES;
const TSTYPEELEMENT_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSTypeElement"];
exports.TSTYPEELEMENT_TYPES = TSTYPEELEMENT_TYPES;
const TSTYPE_TYPES = _definitions.FLIPPED_ALIAS_KEYS["TSType"];
exports.TSTYPE_TYPES = TSTYPE_TYPES;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureBlock;

var _toBlock = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureBlock(node, key = "body") {
  return node[key] = (0, _toBlock.default)(node[key], node);
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBindingIdentifierName;

var _toIdentifier = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBindingIdentifierName(name) {
  name = (0, _toIdentifier.default)(name);
  if (name === "eval" || name === "arguments") name = "_" + name;
  return name;
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toComputedKey;

var _generated = __webpack_require__(1);

var _generated2 = __webpack_require__(2);

function toComputedKey(node, key = node.key || node.property) {
  if (!node.computed && (0, _generated.isIdentifier)(key)) key = (0, _generated2.stringLiteral)(key.name);
  return key;
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toExpression;

var _generated = __webpack_require__(1);

function toExpression(node) {
  if ((0, _generated.isExpressionStatement)(node)) {
    node = node.expression;
  }

  if ((0, _generated.isExpression)(node)) {
    return node;
  }

  if ((0, _generated.isClass)(node)) {
    node.type = "ClassExpression";
  } else if ((0, _generated.isFunction)(node)) {
    node.type = "FunctionExpression";
  }

  if (!(0, _generated.isExpression)(node)) {
    throw new Error(`cannot turn ${node.type} to an expression`);
  }

  return node;
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toKeyAlias;

var _generated = __webpack_require__(1);

var _cloneNode = _interopRequireDefault(__webpack_require__(12));

var _removePropertiesDeep = _interopRequireDefault(__webpack_require__(72));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toKeyAlias(node, key = node.key) {
  let alias;

  if (node.kind === "method") {
    return toKeyAlias.increment() + "";
  } else if ((0, _generated.isIdentifier)(key)) {
    alias = key.name;
  } else if ((0, _generated.isStringLiteral)(key)) {
    alias = JSON.stringify(key.value);
  } else {
    alias = JSON.stringify((0, _removePropertiesDeep.default)((0, _cloneNode.default)(key)));
  }

  if (node.computed) {
    alias = `[${alias}]`;
  }

  if (node.static) {
    alias = `static:${alias}`;
  }

  return alias;
}

toKeyAlias.uid = 0;

toKeyAlias.increment = function () {
  if (toKeyAlias.uid >= Number.MAX_SAFE_INTEGER) {
    return toKeyAlias.uid = 0;
  } else {
    return toKeyAlias.uid++;
  }
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toSequenceExpression;

var _gatherSequenceExpressions = _interopRequireDefault(__webpack_require__(191));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toSequenceExpression(nodes, scope) {
  if (!nodes || !nodes.length) return;
  const declars = [];
  const result = (0, _gatherSequenceExpressions.default)(nodes, scope, declars);
  if (!result) return;

  for (const declar of declars) {
    scope.push(declar);
  }

  return result;
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gatherSequenceExpressions;

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(21));

var _generated = __webpack_require__(1);

var _generated2 = __webpack_require__(2);

var _cloneNode = _interopRequireDefault(__webpack_require__(12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gatherSequenceExpressions(nodes, scope, declars) {
  const exprs = [];
  let ensureLastUndefined = true;

  for (const node of nodes) {
    ensureLastUndefined = false;

    if ((0, _generated.isExpression)(node)) {
      exprs.push(node);
    } else if ((0, _generated.isExpressionStatement)(node)) {
      exprs.push(node.expression);
    } else if ((0, _generated.isVariableDeclaration)(node)) {
      if (node.kind !== "var") return;

      for (const declar of node.declarations) {
        const bindings = (0, _getBindingIdentifiers.default)(declar);

        for (const key in bindings) {
          declars.push({
            kind: node.kind,
            id: (0, _cloneNode.default)(bindings[key])
          });
        }

        if (declar.init) {
          exprs.push((0, _generated2.assignmentExpression)("=", declar.id, declar.init));
        }
      }

      ensureLastUndefined = true;
    } else if ((0, _generated.isIfStatement)(node)) {
      const consequent = node.consequent ? gatherSequenceExpressions([node.consequent], scope, declars) : scope.buildUndefinedNode();
      const alternate = node.alternate ? gatherSequenceExpressions([node.alternate], scope, declars) : scope.buildUndefinedNode();
      if (!consequent || !alternate) return;
      exprs.push((0, _generated2.conditionalExpression)(node.test, consequent, alternate));
    } else if ((0, _generated.isBlockStatement)(node)) {
      const body = gatherSequenceExpressions(node.body, scope, declars);
      if (!body) return;
      exprs.push(body);
    } else if ((0, _generated.isEmptyStatement)(node)) {
      ensureLastUndefined = true;
    } else {
      return;
    }
  }

  if (ensureLastUndefined) {
    exprs.push(scope.buildUndefinedNode());
  }

  if (exprs.length === 1) {
    return exprs[0];
  } else {
    return (0, _generated2.sequenceExpression)(exprs);
  }
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toStatement;

var _generated = __webpack_require__(1);

var _generated2 = __webpack_require__(2);

function toStatement(node, ignore) {
  if ((0, _generated.isStatement)(node)) {
    return node;
  }

  let mustHaveId = false;
  let newType;

  if ((0, _generated.isClass)(node)) {
    mustHaveId = true;
    newType = "ClassDeclaration";
  } else if ((0, _generated.isFunction)(node)) {
    mustHaveId = true;
    newType = "FunctionDeclaration";
  } else if ((0, _generated.isAssignmentExpression)(node)) {
    return (0, _generated2.expressionStatement)(node);
  }

  if (mustHaveId && !node.id) {
    newType = false;
  }

  if (!newType) {
    if (ignore) {
      return false;
    } else {
      throw new Error(`cannot turn ${node.type} to a statement`);
    }
  }

  node.type = newType;
  return node;
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valueToNode;

function _isPlainObject() {
  const data = _interopRequireDefault(__webpack_require__(194));

  _isPlainObject = function () {
    return data;
  };

  return data;
}

function _isRegExp() {
  const data = _interopRequireDefault(__webpack_require__(195));

  _isRegExp = function () {
    return data;
  };

  return data;
}

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(11));

var _generated = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function valueToNode(value) {
  if (value === undefined) {
    return (0, _generated.identifier)("undefined");
  }

  if (value === true || value === false) {
    return (0, _generated.booleanLiteral)(value);
  }

  if (value === null) {
    return (0, _generated.nullLiteral)();
  }

  if (typeof value === "string") {
    return (0, _generated.stringLiteral)(value);
  }

  if (typeof value === "number") {
    let result;

    if (Number.isFinite(value)) {
      result = (0, _generated.numericLiteral)(Math.abs(value));
    } else {
      let numerator;

      if (Number.isNaN(value)) {
        numerator = (0, _generated.numericLiteral)(0);
      } else {
        numerator = (0, _generated.numericLiteral)(1);
      }

      result = (0, _generated.binaryExpression)("/", numerator, (0, _generated.numericLiteral)(0));
    }

    if (value < 0 || Object.is(value, -0)) {
      result = (0, _generated.unaryExpression)("-", result);
    }

    return result;
  }

  if ((0, _isRegExp().default)(value)) {
    const pattern = value.source;
    const flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return (0, _generated.regExpLiteral)(pattern, flags);
  }

  if (Array.isArray(value)) {
    return (0, _generated.arrayExpression)(value.map(valueToNode));
  }

  if ((0, _isPlainObject().default)(value)) {
    const props = [];

    for (const key in value) {
      let nodeKey;

      if ((0, _isValidIdentifier.default)(key)) {
        nodeKey = (0, _generated.identifier)(key);
      } else {
        nodeKey = (0, _generated.stringLiteral)(key);
      }

      props.push((0, _generated.objectProperty)(nodeKey, valueToNode(value[key])));
    }

    return (0, _generated.objectExpression)(props);
  }

  throw new Error("don't know how to turn this value into a node");
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    getPrototype = __webpack_require__(31),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(196),
    baseUnary = __webpack_require__(19),
    nodeUtil = __webpack_require__(20);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendToMemberExpression;

var _generated = __webpack_require__(2);

function appendToMemberExpression(member, append, computed = false) {
  member.object = (0, _generated.memberExpression)(member.object, member.property, member.computed);
  member.property = append;
  member.computed = !!computed;
  return member;
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;

var _constants = __webpack_require__(8);

var _inheritsComments = _interopRequireDefault(__webpack_require__(68));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inherits(child, parent) {
  if (!child || !parent) return child;

  for (const key of _constants.INHERIT_KEYS.optional) {
    if (child[key] == null) {
      child[key] = parent[key];
    }
  }

  for (const key in parent) {
    if (key[0] === "_" && key !== "__clone") child[key] = parent[key];
  }

  for (const key of _constants.INHERIT_KEYS.force) {
    child[key] = parent[key];
  }

  (0, _inheritsComments.default)(child, parent);
  return child;
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependToMemberExpression;

var _generated = __webpack_require__(2);

function prependToMemberExpression(member, prepend) {
  member.object = (0, _generated.memberExpression)(prepend, member.object);
  return member;
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOuterBindingIdentifiers;

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOuterBindingIdentifiers(node, duplicates) {
  return (0, _getBindingIdentifiers.default)(node, duplicates, true);
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = traverse;

var _definitions = __webpack_require__(4);

function traverse(node, handlers, state) {
  if (typeof handlers === "function") {
    handlers = {
      enter: handlers
    };
  }

  const {
    enter,
    exit
  } = handlers;
  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl(node, enter, exit, state, ancestors) {
  const keys = _definitions.VISITOR_KEYS[node.type];
  if (!keys) return;
  if (enter) enter(node, ancestors, state);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;
        ancestors.push({
          node,
          key,
          index: i
        });
        traverseSimpleImpl(child, enter, exit, state, ancestors);
        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key
      });
      traverseSimpleImpl(subNode, enter, exit, state, ancestors);
      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBinding;

var _getBindingIdentifiers = _interopRequireDefault(__webpack_require__(21));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBinding(node, parent) {
  const keys = _getBindingIdentifiers.default.keys[parent.type];

  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = parent[key];

      if (Array.isArray(val)) {
        if (val.indexOf(node) >= 0) return true;
      } else {
        if (val === node) return true;
      }
    }
  }

  return false;
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBlockScoped;

var _generated = __webpack_require__(1);

var _isLet = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBlockScoped(node) {
  return (0, _generated.isFunctionDeclaration)(node) || (0, _generated.isClassDeclaration)(node) || (0, _isLet.default)(node);
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isImmutable;

var _isType = _interopRequireDefault(__webpack_require__(36));

var _generated = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isImmutable(node) {
  if ((0, _isType.default)(node.type, "Immutable")) return true;

  if ((0, _generated.isIdentifier)(node)) {
    if (node.name === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  return false;
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNodesEquivalent;

var _definitions = __webpack_require__(4);

function isNodesEquivalent(a, b) {
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null) {
    return a === b;
  }

  if (a.type !== b.type) {
    return false;
  }

  const fields = Object.keys(_definitions.NODE_FIELDS[a.type] || a.type);
  const visitorKeys = _definitions.VISITOR_KEYS[a.type];

  for (const field of fields) {
    if (typeof a[field] !== typeof b[field]) {
      return false;
    }

    if (Array.isArray(a[field])) {
      if (!Array.isArray(b[field])) {
        return false;
      }

      if (a[field].length !== b[field].length) {
        return false;
      }

      for (let i = 0; i < a[field].length; i++) {
        if (!isNodesEquivalent(a[field][i], b[field][i])) {
          return false;
        }
      }

      continue;
    }

    if (typeof a[field] === "object" && (!visitorKeys || !visitorKeys.includes(field))) {
      for (const key in a[field]) {
        if (a[field][key] !== b[field][key]) {
          return false;
        }
      }

      continue;
    }

    if (!isNodesEquivalent(a[field], b[field])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isReferenced;

function isReferenced(node, parent) {
  switch (parent.type) {
    case "MemberExpression":
    case "JSXMemberExpression":
    case "OptionalMemberExpression":
      if (parent.property === node) {
        return !!parent.computed;
      }

      return parent.object === node;

    case "VariableDeclarator":
      return parent.init === node;

    case "ArrowFunctionExpression":
      return parent.body === node;

    case "ExportSpecifier":
      if (parent.source) {
        return false;
      }

      return parent.local === node;

    case "ObjectProperty":
    case "ClassProperty":
    case "ClassPrivateProperty":
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "ObjectMethod":
      if (parent.key === node) {
        return !!parent.computed;
      }

      return parent.value === node;

    case "ClassDeclaration":
    case "ClassExpression":
      return parent.superClass === node;

    case "AssignmentExpression":
      return parent.right === node;

    case "AssignmentPattern":
      return parent.right === node;

    case "LabeledStatement":
      return false;

    case "CatchClause":
      return false;

    case "RestElement":
      return false;

    case "BreakStatement":
    case "ContinueStatement":
      return false;

    case "FunctionDeclaration":
    case "FunctionExpression":
      return false;

    case "ExportNamespaceSpecifier":
    case "ExportDefaultSpecifier":
      return false;

    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
    case "ImportSpecifier":
      return false;

    case "JSXAttribute":
      return false;

    case "ObjectPattern":
    case "ArrayPattern":
      return false;

    case "MetaProperty":
      return false;

    case "ObjectTypeProperty":
      return parent.key !== node;
  }

  return true;
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScope;

var _generated = __webpack_require__(1);

function isScope(node, parent) {
  if ((0, _generated.isBlockStatement)(node) && (0, _generated.isFunction)(parent, {
    body: node
  })) {
    return false;
  }

  if ((0, _generated.isBlockStatement)(node) && (0, _generated.isCatchClause)(parent, {
    body: node
  })) {
    return false;
  }

  return (0, _generated.isScopable)(node);
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSpecifierDefault;

var _generated = __webpack_require__(1);

function isSpecifierDefault(specifier) {
  return (0, _generated.isImportDefaultSpecifier)(specifier) || (0, _generated.isIdentifier)(specifier.imported || specifier.exported, {
    name: "default"
  });
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidES3Identifier;

var _isValidIdentifier = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RESERVED_WORDS_ES3_ONLY = new Set(["abstract", "boolean", "byte", "char", "double", "enum", "final", "float", "goto", "implements", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "synchronized", "throws", "transient", "volatile"]);

function isValidES3Identifier(name) {
  return (0, _isValidIdentifier.default)(name) && !RESERVED_WORDS_ES3_ONLY.has(name);
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVar;

var _generated = __webpack_require__(1);

var _constants = __webpack_require__(8);

function isVar(node) {
  return (0, _generated.isVariableDeclaration)(node, {
    kind: "var"
  }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports
exports.i(__webpack_require__(213), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports


// module
exports.push([module.i, ".gantt-elastic__main-view svg{\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line, .gantt-elastic__grid-vertical-line{\n  stroke: #a0a0a0;\n  stroke-width: 1;\n}\nforeignObject > *{\n  margin: 0px;\n}\n.gantt-elastic .p-2{\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container , .gantt-elastic__main-view-container{\n  overflow: hidden;\n  max-width:100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type{\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type{\n  border-bottom:1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container{\n  position: relative;\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value{\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 214 */
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


// CONCATENATED MODULE: ./src/GanttElastic.vue?vue&type=template&id=02c6304c&

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(13);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

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
          staticClass: "gantt-elastic__main-container-wrapper",
          style: _vm.root.style("main-container-wrapper", {
            height: _vm.root.state.options.height + "px"
          })
        },
        [
          _c(
            "div",
            {
              ref: "mainView",
              staticClass: "gantt-elastic__main-container",
              style: _vm.root.style("main-container", {
                width: _vm.root.state.options.clientWidth + "px",
                height: _vm.root.state.options.height + "px"
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
                          value: _vm.root.state.options.taskList.display,
                          expression: "root.state.options.taskList.display"
                        }
                      ],
                      ref: "taskList",
                      staticClass: "gantt-elastic__task-list-container",
                      style: _vm.root.style("task-list-container", {
                        width:
                          _vm.root.state.options.taskList.finalWidth + "px",
                        height: _vm.root.state.options.height + "px"
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
            style: { height: "1px", width: _vm.root.state.options.width + "px" }
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
          value: _vm.root.state.options.taskList.display,
          expression: "root.state.options.taskList.display"
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
                height: _vm.root.state.options.rowsHeight + "px"
              })
            },
            _vm._l(_vm.root.visibleTasks, function(task) {
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
                  options: _vm.root.state.options.taskList.expander
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
      style: _vm.root.style(
        _vm.getClassPrefix(false) + "-wrapper",
        this.type === "taskList" ? _vm.style : {}
      )
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
//
//
//

/* harmony default export */ var Expandervue_type_script_lang_js_ = ({
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
      if (this.allChildren.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
        task.allChildren.forEach(childId => {
          const child = this.root.getTask(childId);
          const parent = this.root.getTask(child.parent);
          child.visible = !collapsed && !parent.collapsed;
        });
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
        height: this.root.state.options.calendar.height + this.root.state.options.calendar.strokeWidth + 'px',
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
                : _c("div", {
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




/* harmony default export */ var TaskListItemvue_type_script_lang_js_ = ({
  name: 'TaskListItem',
  components: {
    TaskListExpander: Expander,
    ItemColumn: ItemColumn
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
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
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
        width: _vm.root.state.options.width + "px",
        height: _vm.root.state.options.height + "px"
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
            height: _vm.root.state.options.rowsHeight + "px"
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
                  ref: "chartGraphSvg",
                  staticClass: "gantt-elastic__chart-graph-svg",
                  style: _vm.root.style("chart-graph-svg"),
                  attrs: {
                    x: "0",
                    y: "0",
                    width: _vm.root.state.options.width + "px",
                    height: _vm.root.state.options.allVisibleTasksHeight + "px",
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
      const state = this.root.state.options;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        const y =
          index * (state.row.height + state.chart.grid.horizontal.gap * 2) +
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
      return this.root.state.options.times.steps.filter(step => {
        return this.root.state.options.calendar.workingDays.indexOf(dayjs_min_default()(step.time).day()) === -1;
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
        "margin-bottom": _vm.root.state.options.calendar.gap + "px"
      })
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__calendar",
          style: _vm.root.style("calendar", {
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
            "calendar-row-rect--" + _vm.which
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
              style: _vm.root.style(
                "calendar-row-rect-child",
                "calendar-row-rect-child-" + _vm.which,
                {
                  width: child.width + "px",
                  height: child.height + "px"
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



/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  name: 'Calendar',
  components: {
    CalendarRow: CalendarRow
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
      let currentMonth = dayjs_min_default()(this.root.state.options.times.firstTime);
      let previousMonth = currentMonth.clone();
      const lastTime = this.root.state.options.times.lastTime;
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
        return (this.root.state.options.calendar.hours = hours);
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
          const date = dayjs_min_default()(this.root.state.options.times.steps[hourIndex].time).add(i * hourStep, 'hour');
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
        return (this.root.state.options.calendar.days = days);
      }
      const daysCount = this.howManyDaysFit();
      if (daysCount.count === 0) {
        return;
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
        const date = dayjs_min_default()(this.root.state.options.times.steps[dayIndex].time);
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
        return (this.root.state.options.calendar.months = months);
      }
      const monthsCount = this.howManyMonthsFit();
      if (monthsCount.count === 0) {
        return;
      }
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentDate = dayjs_min_default()(this.root.state.options.times.firstTime);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs_min_default()(currentDate)
          .add(1, 'month')
          .startOf('month');
        if (finalDate.valueOf() > this.root.state.options.times.lastTime) {
          finalDate = dayjs_min_default()(this.root.state.options.times.lastTime);
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
          currentDate = dayjs_min_default()(this.root.state.options.times.lastTime);
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
          task.dependencyLines = task.dependentOn.map(id => {
            return { points: this.getPoints(id, task.id) };
          });
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
      _vm.root.state.options.chart.text.display
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
              width: _vm.root.state.options.chart.progress.width,
              height: _vm.root.state.options.chart.progress.width,
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
            style: _vm.root.style(
              "chart-row-progress-bar-solid",
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
      _vm.root.state.options.chart.text.display
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
      _vm.root.state.options.chart.text.display
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
    this.root.state.refs.chart = this.$refs.chart;
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
    display: 'flex',
    'justify-content': 'space-evenly'
  },
  'calendar-row--month': {},
  'calendar-row--day': {},
  'calendar-row--hour': {},
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
  chart: {
    overflow: 'hidden'
  },
  'slot-header-beforeOptions': {
    display: 'inline-block'
  }
});

// EXTERNAL MODULE: ./node_modules/@babel/types/lib/index.js
var lib = __webpack_require__(77);

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







const ctx = document.createElement('canvas').getContext('2d');
let VueInst = external_Vue_default.a;
function initVue() {
  if (typeof external_Vue_default.a !== 'undefined' && typeof VueInst === 'undefined') {
    VueInst = external_Vue_default.a;
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
            return dayjs_min_default()(date)
              .locale(localeName)
              .format('HH:mm');
          },
          medium(date) {
            return dayjs_min_default()(date)
              .locale(localeName)
              .format('HH:mm');
          },
          short(date) {
            return dayjs_min_default()(date)
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
            return dayjs_min_default()(date)
              .locale(localeName)
              .format('DD dddd');
          },
          medium(date) {
            return dayjs_min_default()(date)
              .locale(localeName)
              .format('DD ddd');
          },
          short(date) {
            return dayjs_min_default()(date)
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
            return dayjs_min_default()(date)
              .locale(localeName)
              .format('MM');
          },
          medium(date) {
            return dayjs_min_default()(date)
              .locale(localeName)
              .format("MMM 'YY");
          },
          long(date) {
            return dayjs_min_default()(date)
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
      weekdays: 'Niedziela_Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota'.split('_'),
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
function equalDeep(left, right, cache = []) {
  if (typeof right !== typeof left) {
    return false;
  } else if (Array.isArray(left) && !Array.isArray(right)) {
    return false;
  } else if (Array.isArray(right) && !Array.isArray(left)) {
    return false;
  } else if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) {
      return false;
    }
    for (let index = 0, len = left.length; index < len; index++) {
      if (!equalDeep(left[index], right[index], cache)) {
        return false;
      }
    }
  } else if (isObject(left) && !isObject(right)) {
    return false;
  } else if (isObject(right) && !isObject(left)) {
    return false;
  } else if (isObject(left) && isObject(right)) {
    for (let key in left) {
      if (!left.hasOwnProperty(key) || !left.propertyIsEnumerable(key)) {
        continue;
      }
      if (typeof right[key] === 'undefined') {
        return false;
      }
      if (!equalDeep(left[key], right[key], cache)) {
        return false;
      }
    }
  } else if (left !== right) {
    return false;
  }
  return true;
}

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
        ctx
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
     * Get style for specified class
     *
     * @param {object|string} mergeWith - merge multiple styles by className (without gantt-elastic__) or object with props
     * @returns {object}
     */
    style(...mergeWith) {
      let merged = this.state.options.style['*'];
      mergeWith.forEach(objOrClassName => {
        if (typeof objOrClassName === 'string') {
          merged = Object.assign({}, merged, this.state.options.style[objOrClassName]);
        } else if (typeof objOrClassName === 'object') {
          merged = this.mergeDeepReactive(this, {}, merged, objOrClassName);
        } else if (typeof objOrClassName === 'function') {
          merged = Object.assign({}, objOrClassName());
        }
      });
      return merged;
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
        if (typeof task.visible === 'undefined') {
          this.$set(task, 'visible', true);
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
        if (typeof task.durationMs === 'undefined') {
          this.$set(task, 'durationMs', []);
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
      dayjs_min_default.a.locale(this.state.options.locale, null, true);
      dayjs_min_default.a.locale(this.state.options.locale.name);
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
        column.height = this.getTaskHeight() - this.style('grid-line-horizontal')['stroke-width'];
      });
      this.state.options.taskList.widthFromPercentage = percentage;
      this.state.options.taskList.finalWidth = final;
      this.syncScrollTop();
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
    makeTaskTree(task, collapsed = false) {
      collapsed = collapsed || task.collapsed;
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
          current = this.makeTaskTree(current, collapsed || current.collapsed);
          current.visible = !collapsed;
          current.children.forEach(childId => {
            const child = this.getTask(childId);
            child.visible = !(collapsed || current.collapsed);
          });
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
          this.style('grid-line-horizontal')['stroke-width']
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
      let offset = pixelOffsetX + this.style('grid-line-vertical')['stroke-width'] / 2;
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
      this.state.options.scroll.chart.dateTime.left = dayjs_min_default()(this.state.options.scroll.chart.time);
      this.state.options.scroll.chart.dateTime.right = dayjs_min_default()(
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
        this.state.refs.chartContainer.scrollLeft = left;
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
      let max = this.state.options.times.timeScale * 60;
      let min = this.state.options.times.timeScale;
      let steps = max / min;
      let percent = this.state.options.times.timeZoom / 100;
      this.state.options.times.timePerPixel =
        this.state.options.times.timeScale * steps * percent + Math.pow(2, this.state.options.times.timeZoom);
      this.state.options.times.totalViewDurationMs = dayjs_min_default()(this.state.options.times.lastTime).diff(
        this.state.options.times.firstTime,
        'milisecods'
      );
      this.state.options.times.totalViewDurationPx =
        this.state.options.times.totalViewDurationMs / this.state.options.times.timePerPixel;
      this.state.options.width =
        this.state.options.times.totalViewDurationPx + this.style('grid-line-vertical')['stroke-width'];
    },

    /**
     * Initialize time variables
     */
    initTimes() {
      this.state.options.times.firstTime = dayjs_min_default()(this.state.options.times.firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        .subtract(this.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs_min_default()(this.state.options.times.lastTaskTime)
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
      const lastMs = dayjs_min_default()(this.state.options.times.lastTime).valueOf();
      const currentDate = dayjs_min_default()(this.state.options.times.firstTime);
      steps.push({
        time: currentDate.valueOf(),
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (
        let currentDate = dayjs_min_default()(this.state.options.times.firstTime)
          .add(1, this.state.options.times.stepDuration)
          .startOf('day');
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.state.options.times.stepDuration).startOf('day')
      ) {
        const offsetMs = currentDate.diff(this.state.options.times.firstTime, 'milisecods');
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
      const style = this.style('calendar-row-text', 'calendar-row-text--hour');
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let currentDate = dayjs_min_default()('2018-01-01T00:00:00'); // any date will be good for hours
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
      const style = this.style('calendar-row-text', 'calendar-row-text--day');
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let currentDate = dayjs_min_default()(this.state.options.times.steps[0].time);
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
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths() {
      const style = this.style('calendar-row-text', 'calendar-row-text--month');
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let maxWidths = this.state.options.calendar.month.maxWidths;
      this.state.options.calendar.month.widths = [];
      Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      let currentDate = dayjs_min_default()(this.state.options.times.firstDate);
      const monthsCount = Math.ceil(
        dayjs_min_default()(this.state.options.times.lastTime).diff(this.state.options.times.firstTime, 'months', true)
      );
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
        task.startTime = dayjs_min_default()(task.start).valueOf();
        task.durationMs = task.duration * 1000;
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
        }
        if (task.startTime + task.durationMs > lastTaskTime) {
          lastTaskTime = task.startTime + task.durationMs;
        }
      }
      this.state.options.times.firstTaskTime = firstTaskTime;
      this.state.options.times.lastTaskTime = lastTaskTime;
      this.state.options.times.firstTime = dayjs_min_default()(firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        .subtract(this.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs_min_default()(lastTaskTime)
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
      this.globalOnResize();
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
      const visibleTasks = this.state.tasks.filter(task => task.visible);
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
          task.durationMs / this.state.options.times.timePerPixel - this.style('grid-line-vertical')['stroke-width'];
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.options.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        task.y =
          (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) * index +
          this.state.options.chart.grid.horizontal.gap;
      }
      this.globalOnResize();
      return visibleTasks;
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
      return this.state.tasks.map(task => mergeDeep({}, task));
    },

    /**
     * Options used to communicate with parent component
     */
    outputOptions() {
      return mergeDeep({}, this.state.options);
    }
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created() {
    this.$watch('tasks', tasks => {
      if (!equalDeep(this.outputTasks, tasks)) {
        this.setup('tasks');
      }
    });
    this.$watch('options', opts => {
      if (!equalDeep(this.outputOptions, opts)) {
        this.setup('options');
      }
    });

    this.$watch('outputTasks', tasks => {
      if (!equalDeep(tasks, this.tasks)) {
        this.$emit('tasks-updated', tasks.map(task => mergeDeep({}, task)));
      }
    });
    this.$watch('outputOptions', options => {
      if (!equalDeep(options, this.options)) {
        this.$emit('options-updated', mergeDeep({}, options));
      }
    });

    this.initializeEvents();
    this.setup();
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
var GanttElasticvue_type_style_index_0_lang_css_ = __webpack_require__(211);

// CONCATENATED MODULE: ./src/GanttElastic.vue
/* concated harmony reexport mergeDeep */__webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* concated harmony reexport mergeDeepReactive */__webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });
/* concated harmony reexport equalDeep */__webpack_require__.d(__webpack_exports__, "equalDeep", function() { return equalDeep; });






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
/* 215 */
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
//# sourceMappingURL=GanttElastic.common.js.map