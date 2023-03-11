(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@material/typography/mdc-typography.scss', './androidx-runtime.js', './web-web-core.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@material/typography/mdc-typography.scss'), require('./androidx-runtime.js'), require('./web-web-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof dev_petuska_kmdc_typography_Style_vdhv3p === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-typography'. Its dependency '@material/typography/mdc-typography.scss' was not found. Please, check whether '@material/typography/mdc-typography.scss' is loaded prior to 'KMDC-kmdc-typography'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-typography'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'KMDC-kmdc-typography'.");
    }
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-typography'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'KMDC-kmdc-typography'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-typography'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KMDC-kmdc-typography'.");
    }
    root['KMDC-kmdc-typography'] = factory(typeof this['KMDC-kmdc-typography'] === 'undefined' ? {} : this['KMDC-kmdc-typography'], dev_petuska_kmdc_typography_Style_vdhv3p, this['androidx-runtime'], this['web-web-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, dev_petuska_kmdc_typography_Style_vdhv3p, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_web_web_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var H1$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.q1;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var H2$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.r1;
  var H3$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.s1;
  var H4$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.t1;
  var H5$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.u1;
  var H6$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.v1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var objectMeta = kotlin_kotlin.$_$.k5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var P$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.x1;
  var Span$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.z1;
  var Text$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.b2;
  var Enum = kotlin_kotlin.$_$.y5;
  var classMeta = kotlin_kotlin.$_$.u4;
  //endregion
  //region block: pre-declaration
  MDCTypographyStyle.prototype = Object.create(Enum.prototype);
  MDCTypographyStyle.prototype.constructor = MDCTypographyStyle;
  //endregion
  function MDCH4$composable(text, attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1690281887);
    sourceInformation($composer_0, 'C(MDCH4$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1690281887, $dirty, -1, 'dev.petuska.kmdc.typography.MDCH4$composable (Heading.kt:43)');
      }
      MDCText$composable(MDCTypographyStyle_Headline4_getInstance(), text, attrs_0._v, ComposableSingletons$HeadingKt_getInstance().m23_1, $composer_0, 3078 | 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(MDCH4$composable$lambda(text, attrs_0, $changed, $default));
    }
  }
  function MDCH5$composable(text, attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1671331072);
    sourceInformation($composer_0, 'C(MDCH5$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1671331072, $dirty, -1, 'dev.petuska.kmdc.typography.MDCH5$composable (Heading.kt:53)');
      }
      MDCText$composable(MDCTypographyStyle_Headline5_getInstance(), text, attrs_0._v, ComposableSingletons$HeadingKt_getInstance().n23_1, $composer_0, 3078 | 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(MDCH5$composable$lambda(text, attrs_0, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HeadingKt$lambda_1$lambda_rsymeg(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1506193832, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$HeadingKt.lambda-1.<anonymous> (Heading.kt:14)');
      }
      H1$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HeadingKt$lambda_2$lambda_10nunr(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1989869159, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$HeadingKt.lambda-2.<anonymous> (Heading.kt:24)');
      }
      H2$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HeadingKt$lambda_3$lambda_tuabpy(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1821422810, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$HeadingKt.lambda-3.<anonymous> (Heading.kt:34)');
      }
      H3$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HeadingKt$lambda_4$lambda_cd796z(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1337747483, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$HeadingKt.lambda-4.<anonymous> (Heading.kt:44)');
      }
      H4$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HeadingKt$lambda_5$lambda_ggf7v8(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(854072156, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$HeadingKt.lambda-5.<anonymous> (Heading.kt:54)');
      }
      H5$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$HeadingKt$lambda_6$lambda_pr2d1p(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(370396829, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$HeadingKt.lambda-6.<anonymous> (Heading.kt:64)');
      }
      H6$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeadingKt() {
    ComposableSingletons$HeadingKt_instance = this;
    var tmp = this;
    tmp.j23_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1506193832, false, ComposableSingletons$HeadingKt$lambda_1$lambda_rsymeg));
    var tmp_0 = this;
    tmp_0.k23_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1989869159, false, ComposableSingletons$HeadingKt$lambda_2$lambda_10nunr));
    var tmp_1 = this;
    tmp_1.l23_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1821422810, false, ComposableSingletons$HeadingKt$lambda_3$lambda_tuabpy));
    var tmp_2 = this;
    tmp_2.m23_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(1337747483, false, ComposableSingletons$HeadingKt$lambda_4$lambda_cd796z));
    var tmp_3 = this;
    tmp_3.n23_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(854072156, false, ComposableSingletons$HeadingKt$lambda_5$lambda_ggf7v8));
    var tmp_4 = this;
    tmp_4.o23_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(370396829, false, ComposableSingletons$HeadingKt$lambda_6$lambda_pr2d1p));
  }
  ComposableSingletons$HeadingKt.$metadata$ = objectMeta('ComposableSingletons$HeadingKt');
  var ComposableSingletons$HeadingKt_instance;
  function ComposableSingletons$HeadingKt_getInstance() {
    if (ComposableSingletons$HeadingKt_instance == null)
      new ComposableSingletons$HeadingKt();
    return ComposableSingletons$HeadingKt_instance;
  }
  function MDCH4$composable$lambda($text, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      MDCH4$composable($text, $attrs._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function MDCH5$composable$lambda($text, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      MDCH5$composable($text, $attrs._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function MDCBody1$composable(text, attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1749910710);
    sourceInformation($composer_0, 'C(MDCBody1$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1749910710, $dirty, -1, 'dev.petuska.kmdc.typography.MDCBody1$composable (MDCTypography.kt:74)');
      }
      MDCText$composable(MDCTypographyStyle_Body1_getInstance(), text, attrs_0._v, ComposableSingletons$MDCTypographyKt_getInstance().r23_1, $composer_0, 3078 | 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(MDCBody1$composable$lambda(text, attrs_0, $changed, $default));
    }
  }
  function MDCText$composable(style, text, attrs, element, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1328847575);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(style) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(text) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sr(element) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1328847575, $dirty, -1, 'dev.petuska.kmdc.typography.MDCText$composable (MDCTypography.kt:33)');
      }
      dev_petuska_kmdc_typography_Style_vdhv3p;
      var clazz = 'mdc-typography--' + style.y23_1;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 112 & $dirty >> 3;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.nr(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.sr(clazz) | $composer_1.sr(attrs));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.typography.MDCText$composable.<anonymous>' call
        tmp$ret$0 = MDCText$composable$lambda(clazz, attrs);
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
      var tmp_1 = tmp$ret$4;
      var tmp$ret$11;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'dev.petuska.kmdc.typography.MDCText$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1407082094, true, MDCText$composable$lambda_0(text, $dirty));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache_0 = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().qr_1) {
        var tmp$ret$5;
        // Inline function 'dev.petuska.kmdc.typography.MDCText$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_12(dispatchReceiver);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.pr(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_3;
      tmp$ret$7 = tmp$ret$6;
      var tmp_4 = tmp$ret$7;
      tmp$ret$8 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.rr();
      tmp$ret$9 = tmp0_0;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      element(tmp_1, tmp$ret$11, $composer_0, 48 | 896 & $dirty >> 3);
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
      tmp0_safe_receiver.q14(MDCText$composable$lambda_1(style, text, attrs, element, $changed));
    }
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_1$lambda_dnkq9b(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(975100989, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-1.<anonymous> (MDCTypography.kt:55)');
      }
      H6$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_2$lambda_f61qsw(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(988633790, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-2.<anonymous> (MDCTypography.kt:65)');
      }
      H6$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_3$lambda_r1fu41(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-2017969549, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-3.<anonymous> (MDCTypography.kt:75)');
      }
      P$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_4$lambda_1s6my6(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-2004436748, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-4.<anonymous> (MDCTypography.kt:85)');
      }
      P$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_5$lambda_ult40d(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1515787958, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-5.<anonymous> (MDCTypography.kt:95)');
      }
      Span$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_6$lambda_blogwk(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-2039827403, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-6.<anonymous> (MDCTypography.kt:105)');
      }
      Span$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.h1r(p0, p1, p2, p3);
    };
  }
  function ComposableSingletons$MDCTypographyKt$lambda_7$lambda_h7y05n(a, c, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(a) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(c) ? 32 : 16);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-484242370, $dirty, -1, 'dev.petuska.kmdc.typography.ComposableSingletons$MDCTypographyKt.lambda-7.<anonymous> (MDCTypography.kt:115)');
      }
      Span$composable(a, c, $composer_0, 14 & $dirty | 112 & $dirty, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MDCTypographyKt() {
    ComposableSingletons$MDCTypographyKt_instance = this;
    var tmp = this;
    tmp.p23_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(975100989, false, ComposableSingletons$MDCTypographyKt$lambda_1$lambda_dnkq9b));
    var tmp_0 = this;
    tmp_0.q23_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(988633790, false, ComposableSingletons$MDCTypographyKt$lambda_2$lambda_f61qsw));
    var tmp_1 = this;
    tmp_1.r23_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-2017969549, false, ComposableSingletons$MDCTypographyKt$lambda_3$lambda_r1fu41));
    var tmp_2 = this;
    tmp_2.s23_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-2004436748, false, ComposableSingletons$MDCTypographyKt$lambda_4$lambda_1s6my6));
    var tmp_3 = this;
    tmp_3.t23_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-1515787958, false, ComposableSingletons$MDCTypographyKt$lambda_5$lambda_ult40d));
    var tmp_4 = this;
    tmp_4.u23_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-2039827403, false, ComposableSingletons$MDCTypographyKt$lambda_6$lambda_blogwk));
    var tmp_5 = this;
    tmp_5.v23_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(-484242370, false, ComposableSingletons$MDCTypographyKt$lambda_7$lambda_h7y05n));
  }
  ComposableSingletons$MDCTypographyKt.$metadata$ = objectMeta('ComposableSingletons$MDCTypographyKt');
  var ComposableSingletons$MDCTypographyKt_instance;
  function ComposableSingletons$MDCTypographyKt_getInstance() {
    if (ComposableSingletons$MDCTypographyKt_instance == null)
      new ComposableSingletons$MDCTypographyKt();
    return ComposableSingletons$MDCTypographyKt_instance;
  }
  function MDCBody1$composable$lambda($text, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      MDCBody1$composable($text, $attrs._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function MDCText$composable$lambda($clazz, $attrs) {
    return function ($this$invoke) {
      $this$invoke.b1t([$clazz]);
      var tmp0_safe_receiver = $attrs;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$invoke);
      return Unit_getInstance();
    };
  }
  function MDCText$composable$lambda_0($text, $$dirty) {
    return function ($this$invoke, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1407082094, $changed, -1, 'dev.petuska.kmdc.typography.MDCText$composable.<anonymous> (MDCTypography.kt:44)');
        }
        Text$composable($text, $composer_0, 14 & $$dirty >> 3);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function MDCText$composable$lambda_1($style, $text, $attrs, $element, $$changed) {
    return function ($composer, $force) {
      MDCText$composable($style, $text, $attrs, $element, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  var MDCTypographyStyle_Headline1_instance;
  var MDCTypographyStyle_Headline2_instance;
  var MDCTypographyStyle_Headline3_instance;
  var MDCTypographyStyle_Headline4_instance;
  var MDCTypographyStyle_Headline5_instance;
  var MDCTypographyStyle_Headline6_instance;
  var MDCTypographyStyle_Subtitle1_instance;
  var MDCTypographyStyle_Subtitle2_instance;
  var MDCTypographyStyle_Body1_instance;
  var MDCTypographyStyle_Body2_instance;
  var MDCTypographyStyle_Caption_instance;
  var MDCTypographyStyle_Button_instance;
  var MDCTypographyStyle_Overline_instance;
  var MDCTypographyStyle_entriesInitialized;
  function MDCTypographyStyle_initEntries() {
    if (MDCTypographyStyle_entriesInitialized)
      return Unit_getInstance();
    MDCTypographyStyle_entriesInitialized = true;
    MDCTypographyStyle_Headline1_instance = new MDCTypographyStyle('Headline1', 0, 'headline1');
    MDCTypographyStyle_Headline2_instance = new MDCTypographyStyle('Headline2', 1, 'headline2');
    MDCTypographyStyle_Headline3_instance = new MDCTypographyStyle('Headline3', 2, 'headline3');
    MDCTypographyStyle_Headline4_instance = new MDCTypographyStyle('Headline4', 3, 'headline4');
    MDCTypographyStyle_Headline5_instance = new MDCTypographyStyle('Headline5', 4, 'headline5');
    MDCTypographyStyle_Headline6_instance = new MDCTypographyStyle('Headline6', 5, 'headline6');
    MDCTypographyStyle_Subtitle1_instance = new MDCTypographyStyle('Subtitle1', 6, 'subtitle1');
    MDCTypographyStyle_Subtitle2_instance = new MDCTypographyStyle('Subtitle2', 7, 'subtitle2');
    MDCTypographyStyle_Body1_instance = new MDCTypographyStyle('Body1', 8, 'body1');
    MDCTypographyStyle_Body2_instance = new MDCTypographyStyle('Body2', 9, 'body2');
    MDCTypographyStyle_Caption_instance = new MDCTypographyStyle('Caption', 10, 'caption');
    MDCTypographyStyle_Button_instance = new MDCTypographyStyle('Button', 11, 'button');
    MDCTypographyStyle_Overline_instance = new MDCTypographyStyle('Overline', 12, 'overline');
  }
  function MDCTypographyStyle(name, ordinal, style) {
    Enum.call(this, name, ordinal);
    this.y23_1 = style;
  }
  MDCTypographyStyle.$metadata$ = classMeta('MDCTypographyStyle', undefined, undefined, undefined, undefined, Enum.prototype);
  function MDCTypographyStyle_Headline4_getInstance() {
    MDCTypographyStyle_initEntries();
    return MDCTypographyStyle_Headline4_instance;
  }
  function MDCTypographyStyle_Headline5_getInstance() {
    MDCTypographyStyle_initEntries();
    return MDCTypographyStyle_Headline5_instance;
  }
  function MDCTypographyStyle_Body1_getInstance() {
    MDCTypographyStyle_initEntries();
    return MDCTypographyStyle_Body1_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MDCBody1$composable;
  _.$_$.b = MDCH4$composable;
  _.$_$.c = MDCH5$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-typography.js.map
