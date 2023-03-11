(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@material/card/mdc-card.scss', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './KMDC-kmdc-base.js', './web-web-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@material/card/mdc-card.scss'), require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./KMDC-kmdc-base.js'), require('./web-web-core.js'));
  else {
    if (typeof dev_petuska_kmdc_card_Style_s3sqms === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-card'. Its dependency '@material/card/mdc-card.scss' was not found. Please, check whether '@material/card/mdc-card.scss' is loaded prior to 'KMDC-kmdc-card'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-card'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'KMDC-kmdc-card'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-card'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KMDC-kmdc-card'.");
    }
    if (typeof this['KMDC-kmdc-base'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-card'. Its dependency 'KMDC-kmdc-base' was not found. Please, check whether 'KMDC-kmdc-base' is loaded prior to 'KMDC-kmdc-card'.");
    }
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-card'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'KMDC-kmdc-card'.");
    }
    root['KMDC-kmdc-card'] = factory(typeof this['KMDC-kmdc-card'] === 'undefined' ? {} : this['KMDC-kmdc-card'], dev_petuska_kmdc_card_Style_s3sqms, this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['KMDC-kmdc-base'], this['web-web-core']);
  }
}(this, function (_, dev_petuska_kmdc_card_Style_s3sqms, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_dev_petuska_kmdc_base, kotlin_org_jetbrains_compose_web_web_core) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var reinterpret$composable = kotlin_dev_petuska_kmdc_base.$_$.f;
  var Div$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.p1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Enum = kotlin_kotlin.$_$.y5;
  var classMeta = kotlin_kotlin.$_$.u4;
  var applyAttrs = kotlin_dev_petuska_kmdc_base.$_$.c;
  //endregion
  //region block: pre-declaration
  MDCCardType.prototype = Object.create(Enum.prototype);
  MDCCardType.prototype.constructor = MDCCardType;
  //endregion
  function MDCCard$composable(type, attrs, content, $composer, $changed, $default) {
    var type_0 = {_v: type};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1097692966);
    sourceInformation($composer_0, 'C(MDCCard$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(type_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        type_0._v = MDCCardType_Elevated_getInstance();
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1097692966, $dirty, -1, 'dev.petuska.kmdc.card.MDCCard$composable (MDCCard.kt:23)');
      }
      dev_petuska_kmdc_card_Style_s3sqms;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = type_0._v;
      var tmp1_remember$composable = attrs_0._v;
      var tmp2_remember$composable = $composer_0;
      var tmp3_remember$composable = 14 & $dirty | 112 & $dirty;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.nr(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.sr(tmp0_remember$composable) | $composer_1.sr(tmp1_remember$composable));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.card.MDCCard$composable.<anonymous>' call
        tmp$ret$0 = MDCCard$composable$lambda(type_0, attrs_0);
        var value = tmp$ret$0;
        tmp1_cache.pr(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
      var tmp_0 = tmp$ret$2;
      tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.rr();
      tmp$ret$4 = tmp0;
      Div$composable(tmp$ret$4, reinterpret$composable(content_0._v), $composer_0, 0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    var tmp0_safe_receiver = $composer_0.k13();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.q14(MDCCard$composable$lambda_0(type_0, attrs_0, content_0, $changed, $default));
    }
  }
  var MDCCardType_Elevated_instance;
  var MDCCardType_Outlined_instance;
  var MDCCardType_entriesInitialized;
  function MDCCardType_initEntries() {
    if (MDCCardType_entriesInitialized)
      return Unit_getInstance();
    MDCCardType_entriesInitialized = true;
    MDCCardType_Elevated_instance = new MDCCardType('Elevated', 0, []);
    MDCCardType_Outlined_instance = new MDCCardType('Outlined', 1, ['mdc-card--outlined']);
  }
  function MDCCardType(name, ordinal, classes) {
    Enum.call(this, name, ordinal);
    this.l22_1 = classes;
  }
  MDCCardType.prototype.s1t = function () {
    return this.l22_1;
  };
  MDCCardType.$metadata$ = classMeta('MDCCardType', undefined, undefined, undefined, undefined, Enum.prototype);
  function MDCCard$composable$lambda($type, $attrs) {
    return function ($this$Div) {
      $this$Div.b1t(['mdc-card']);
      var tmp0_classes = $type._v.l22_1;
      var indexedObject = tmp0_classes;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'dev.petuska.kmdc.core.classes.<anonymous>' call
        $this$Div.b1t([element]);
      }
      applyAttrs($this$Div, $attrs._v);
      return Unit_getInstance();
    };
  }
  function MDCCard$composable$lambda_0($type, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MDCCard$composable($type._v, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function MDCCardType_Elevated_getInstance() {
    MDCCardType_initEntries();
    return MDCCardType_Elevated_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MDCCard$composable;
  _.$_$.b = MDCCardType_Elevated_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-card.js.map
