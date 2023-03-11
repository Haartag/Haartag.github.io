(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@material/dialog/mdc-dialog.scss', '@material/dialog', './androidx-runtime.js', './KMDC-kmdc-base.js', './kotlin-kotlin-stdlib-js-ir.js', './web-web-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@material/dialog/mdc-dialog.scss'), require('@material/dialog'), require('./androidx-runtime.js'), require('./KMDC-kmdc-base.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./web-web-core.js'));
  else {
    if (typeof dev_petuska_kmdc_dialog_Style_8kecik === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-dialog'. Its dependency '@material/dialog/mdc-dialog.scss' was not found. Please, check whether '@material/dialog/mdc-dialog.scss' is loaded prior to 'KMDC-kmdc-dialog'.");
    }
    if (typeof this['@material/dialog'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-dialog'. Its dependency '@material/dialog' was not found. Please, check whether '@material/dialog' is loaded prior to 'KMDC-kmdc-dialog'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-dialog'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'KMDC-kmdc-dialog'.");
    }
    if (typeof this['KMDC-kmdc-base'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-dialog'. Its dependency 'KMDC-kmdc-base' was not found. Please, check whether 'KMDC-kmdc-base' is loaded prior to 'KMDC-kmdc-dialog'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-dialog'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KMDC-kmdc-dialog'.");
    }
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-dialog'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'KMDC-kmdc-dialog'.");
    }
    root['KMDC-kmdc-dialog'] = factory(typeof this['KMDC-kmdc-dialog'] === 'undefined' ? {} : this['KMDC-kmdc-dialog'], dev_petuska_kmdc_dialog_Style_8kecik, this['@material/dialog'], this['androidx-runtime'], this['KMDC-kmdc-base'], this['kotlin-kotlin-stdlib-js-ir'], this['web-web-core']);
  }
}(this, function (_, dev_petuska_kmdc_dialog_Style_8kecik, $module$_material_dialog_3qvv5w, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_dev_petuska_kmdc_base, kotlin_kotlin, kotlin_org_jetbrains_compose_web_web_core) {
  'use strict';
  //region block: imports
  var MDCDialog = $module$_material_dialog_3qvv5w.MDCDialog;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var rememberUniqueDomElementId$composable = kotlin_dev_petuska_kmdc_base.$_$.g;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var applyAttrs = kotlin_dev_petuska_kmdc_base.$_$.c;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var classMeta = kotlin_kotlin.$_$.u4;
  var localMDC$composable = kotlin_dev_petuska_kmdc_base.$_$.e;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var reinterpret$composable = kotlin_dev_petuska_kmdc_base.$_$.f;
  var Div$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.p1;
  var MDCProvider$composable = kotlin_dev_petuska_kmdc_base.$_$.a;
  var KMutableProperty1 = kotlin_kotlin.$_$.r5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a5;
  var strictCompositionLocalOf = kotlin_dev_petuska_kmdc_base.$_$.i;
  var addMdcEventListener = kotlin_dev_petuska_kmdc_base.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_TitleIdLocal() {
    init_properties_MDCDialog_kt_fyie1s();
    return TitleIdLocal;
  }
  var TitleIdLocal;
  function get_ContentIdLocal() {
    init_properties_MDCDialog_kt_fyie1s();
    return ContentIdLocal;
  }
  var ContentIdLocal;
  function get_OpenLocal() {
    init_properties_MDCDialog_kt_fyie1s();
    return OpenLocal;
  }
  var OpenLocal;
  function MDCDialog$composable(open, fullscreen, stacked, scrimClickAction, escapeKeyAction, attrs, content, $composer, $changed, $default) {
    init_properties_MDCDialog_kt_fyie1s();
    var fullscreen_0 = {_v: fullscreen};
    var stacked_0 = {_v: stacked};
    var scrimClickAction_0 = {_v: scrimClickAction};
    var escapeKeyAction_0 = {_v: escapeKeyAction};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-910400896);
    sourceInformation($composer_0, 'C(MDCDialog$composable)P(4,3,6,5,2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.c13(open) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c13(fullscreen_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c13(stacked_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sr(scrimClickAction_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.sr(escapeKeyAction_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.h12()) {
      if (!(($default & 2) === 0)) {
        fullscreen_0._v = false;
      }
      if (!(($default & 4) === 0)) {
        stacked_0._v = true;
      }
      if (!(($default & 8) === 0)) {
        scrimClickAction_0._v = 'close';
      }
      if (!(($default & 16) === 0)) {
        escapeKeyAction_0._v = 'close';
      }
      if (!(($default & 32) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-910400896, $dirty, -1, 'dev.petuska.kmdc.dialog.MDCDialog$composable (MDCDialog.kt:24)');
      }
      dev_petuska_kmdc_dialog_Style_8kecik;
      var titleId = rememberUniqueDomElementId$composable(null, $composer_0, 0, 1);
      var contentId = rememberUniqueDomElementId$composable(null, $composer_0, 0, 1);
      var tmp = [get_TitleIdLocal().v17(titleId), get_ContentIdLocal().v17(contentId), get_OpenLocal().v17(open)];
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 828026443, true, MDCDialog$composable$lambda(fullscreen_0, stacked_0, attrs_0, $dirty, open, scrimClickAction_0, escapeKeyAction_0, titleId, contentId, content_0));
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.nr(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.sr(dispatchReceiver);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_2(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.pr(value);
        tmp_1 = value;
      } else {
        tmp_1 = tmp0_let;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      var tmp_2 = tmp$ret$2;
      tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.rr();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      CompositionLocalProvider$composable(tmp, tmp$ret$6, $composer_0, 48);
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
      tmp0_safe_receiver.q14(MDCDialog$composable$lambda_0(open, fullscreen_0, stacked_0, scrimClickAction_0, escapeKeyAction_0, attrs_0, content_0, $changed, $default));
    }
  }
  function MDCDialog$composable$lambda$lambda($fullscreen, $stacked, $attrs) {
    return function ($this$Div) {
      $this$Div.b1t(['mdc-dialog']);
      var tmp;
      if ($fullscreen._v) {
        $this$Div.b1t(['mdc-dialog--fullscreen']);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($stacked._v) {
        $this$Div.b1t(['mdc-dialog--stacked']);
        tmp_0 = Unit_getInstance();
      }
      applyAttrs($this$Div, $attrs._v);
      return Unit_getInstance();
    };
  }
  function MDCDialog$_init_$ref_ntwe0f() {
    var l = function (p0) {
      return new MDCDialog(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function _no_name_provided__qut3iv($onDispose, $mdc) {
    this.m22_1 = $onDispose;
    this.n22_1 = $mdc;
  }
  _no_name_provided__qut3iv.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable.<anonymous>.<anonymous>' call
    if (!(this.m22_1._v == null)) {
      var tmp0_safe_receiver = this.n22_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        this.m22_1._v(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCDialog$composable$lambda$lambda$lambda$lambda($mdc, $open, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = $mdc;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        if ($open) {
          tmp0_safe_receiver.open();
        } else {
          tmp0_safe_receiver.close();
        }
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($onDispose, $mdc);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_0($onDispose, $mdc) {
    this.o22_1 = $onDispose;
    this.p22_1 = $mdc;
  }
  _no_name_provided__qut3iv_0.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>.<anonymous>' call
    if (!(this.o22_1._v == null)) {
      var tmp0_safe_receiver = this.p22_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        this.o22_1._v(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCDialog$composable$lambda$lambda$lambda$lambda_0($mdc, $tmp4_MDCStateEffect$composable, $tmp3_MDCStateEffect$composable, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = $mdc;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>' call
        $tmp4_MDCStateEffect$composable.set(tmp0_safe_receiver, $tmp3_MDCStateEffect$composable);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($onDispose, $mdc);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_1($onDispose, $mdc) {
    this.q22_1 = $onDispose;
    this.r22_1 = $mdc;
  }
  _no_name_provided__qut3iv_1.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>.<anonymous>' call
    if (!(this.q22_1._v == null)) {
      var tmp0_safe_receiver = this.r22_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        this.q22_1._v(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCDialog$composable$lambda$lambda$lambda$lambda_1($mdc, $tmp8_MDCStateEffect$composable, $tmp7_MDCStateEffect$composable, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = $mdc;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>' call
        $tmp8_MDCStateEffect$composable.set(tmp0_safe_receiver, $tmp7_MDCStateEffect$composable);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1($onDispose, $mdc);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_2($onDispose, $mdc) {
    this.s22_1 = $onDispose;
    this.t22_1 = $mdc;
  }
  _no_name_provided__qut3iv_2.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>.<anonymous>' call
    if (!(this.s22_1._v == null)) {
      var tmp0_safe_receiver = this.t22_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        this.s22_1._v(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCDialog$composable$lambda$lambda$lambda$lambda_2($mdc, $tmp12_MDCStateEffect$composable, $tmp11_MDCStateEffect$composable, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = $mdc;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>' call
        $tmp12_MDCStateEffect$composable.set(tmp0_safe_receiver, $tmp11_MDCStateEffect$composable);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2($onDispose, $mdc);
      return tmp$ret$0;
    };
  }
  function MDCDialog$composable$lambda$lambda$lambda($open, $scrimClickAction, $$dirty, $escapeKeyAction, $stacked) {
    return function ($this$MDCProvider, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.sr($this$MDCProvider) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(2004953858, $dirty, -1, 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous> (MDCDialog.kt:49)');
        }
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable = null;
        var tmp1_MDCSideEffect$composable = $composer_0;
        var tmp2_MDCSideEffect$composable = 14 & $dirty;
        var onDispose = tmp0_MDCSideEffect$composable;
        var $composer_1 = tmp1_MDCSideEffect$composable;
        $composer_1.nr(-1868509044);
        sourceInformation($composer_1, 'CC(MDCSideEffect$composable)P(1,2)');
        if (!(2 === 0))
          onDispose = null;
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable_0 = [$open].slice();
        var tmp1_MDCSideEffect$composable_0 = onDispose;
        var tmp2_MDCSideEffect$composable_0 = $composer_1;
        var tmp3_MDCSideEffect$composable = 112 & tmp2_MDCSideEffect$composable >> 3 | 896 & tmp2_MDCSideEffect$composable >> 3;
        var onDispose_0 = {_v: tmp1_MDCSideEffect$composable_0};
        var $composer_2 = tmp2_MDCSideEffect$composable_0;
        $composer_2.nr(1931335148);
        sourceInformation($composer_2, 'CC(MDCSideEffect$composable)P(1,2)');
        if (!(0 === 0)) {
          onDispose_0._v = null;
        }
        var mdc = localMDC$composable($composer_2, 0);
        var tmp$ret$4;
        // Inline function 'kotlin.collections.plus' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_MDCSideEffect$composable_0;
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = [mdc];
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
        var tmp_1 = tmp$ret$4.slice();
        DisposableEffect$composable(tmp_1, MDCDialog$composable$lambda$lambda$lambda$lambda(mdc, $open, onDispose_0), $composer_2, 0);
        $composer_2.rr();
        $composer_1.rr();
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp3_MDCStateEffect$composable = $scrimClickAction._v;
        var tmp4_MDCStateEffect$composable = scrimClickAction$factory();
        var tmp5_MDCStateEffect$composable = $composer_0;
        var tmp6_MDCStateEffect$composable = 14 & $$dirty >> 9;
        var $composer_3 = tmp5_MDCStateEffect$composable;
        $composer_3.nr(308095606);
        sourceInformation($composer_3, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp2_MDCStateEffect$composable = $composer_3;
        var tmp3_MDCStateEffect$composable_0 = 8 & tmp6_MDCStateEffect$composable | 14 & tmp6_MDCStateEffect$composable;
        var $composer_4 = tmp2_MDCStateEffect$composable;
        $composer_4.nr(630048589);
        sourceInformation($composer_4, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable_1 = null;
        var tmp1_MDCSideEffect$composable_1 = $composer_4;
        var onDispose_1 = {_v: tmp0_MDCSideEffect$composable_1};
        var $composer_5 = tmp1_MDCSideEffect$composable_1;
        $composer_5.nr(1931335148);
        sourceInformation($composer_5, 'CC(MDCSideEffect$composable)P(1,2)');
        if (!(2 === 0)) {
          onDispose_1._v = null;
        }
        var mdc_0 = localMDC$composable($composer_5, 0);
        var tmp$ret$9;
        // Inline function 'kotlin.collections.plus' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$5 = [tmp3_MDCStateEffect$composable];
        var tmp$ret$8;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = [mdc_0];
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$5.concat(tmp$ret$8);
        var tmp_2 = tmp$ret$9.slice();
        DisposableEffect$composable(tmp_2, MDCDialog$composable$lambda$lambda$lambda$lambda_0(mdc_0, tmp4_MDCStateEffect$composable, tmp3_MDCStateEffect$composable, onDispose_1), $composer_5, 0);
        $composer_5.rr();
        $composer_4.rr();
        $composer_3.rr();
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp7_MDCStateEffect$composable = $escapeKeyAction._v;
        var tmp8_MDCStateEffect$composable = escapeKeyAction$factory();
        var tmp9_MDCStateEffect$composable = $composer_0;
        var tmp10_MDCStateEffect$composable = 14 & $$dirty >> 12;
        var $composer_6 = tmp9_MDCStateEffect$composable;
        $composer_6.nr(308095606);
        sourceInformation($composer_6, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp2_MDCStateEffect$composable_0 = $composer_6;
        var tmp3_MDCStateEffect$composable_1 = 8 & tmp10_MDCStateEffect$composable | 14 & tmp10_MDCStateEffect$composable;
        var $composer_7 = tmp2_MDCStateEffect$composable_0;
        $composer_7.nr(630048589);
        sourceInformation($composer_7, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable_2 = null;
        var tmp1_MDCSideEffect$composable_2 = $composer_7;
        var onDispose_2 = {_v: tmp0_MDCSideEffect$composable_2};
        var $composer_8 = tmp1_MDCSideEffect$composable_2;
        $composer_8.nr(1931335148);
        sourceInformation($composer_8, 'CC(MDCSideEffect$composable)P(1,2)');
        if (!(2 === 0)) {
          onDispose_2._v = null;
        }
        var mdc_1 = localMDC$composable($composer_8, 0);
        var tmp$ret$14;
        // Inline function 'kotlin.collections.plus' call
        var tmp$ret$10;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$10 = [tmp7_MDCStateEffect$composable];
        var tmp$ret$13;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$12;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$11;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$11 = [mdc_1];
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$10.concat(tmp$ret$13);
        var tmp_3 = tmp$ret$14.slice();
        DisposableEffect$composable(tmp_3, MDCDialog$composable$lambda$lambda$lambda$lambda_1(mdc_1, tmp8_MDCStateEffect$composable, tmp7_MDCStateEffect$composable, onDispose_2), $composer_8, 0);
        $composer_8.rr();
        $composer_7.rr();
        $composer_6.rr();
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp11_MDCStateEffect$composable = !$stacked._v;
        var tmp12_MDCStateEffect$composable = autoStackButtons$factory();
        var tmp13_MDCStateEffect$composable = $composer_0;
        var $composer_9 = tmp13_MDCStateEffect$composable;
        $composer_9.nr(308095606);
        sourceInformation($composer_9, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp2_MDCStateEffect$composable_1 = $composer_9;
        var tmp3_MDCStateEffect$composable_2 = 0;
        var $composer_10 = tmp2_MDCStateEffect$composable_1;
        $composer_10.nr(630048589);
        sourceInformation($composer_10, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable_3 = null;
        var tmp1_MDCSideEffect$composable_3 = $composer_10;
        var onDispose_3 = {_v: tmp0_MDCSideEffect$composable_3};
        var $composer_11 = tmp1_MDCSideEffect$composable_3;
        $composer_11.nr(1931335148);
        sourceInformation($composer_11, 'CC(MDCSideEffect$composable)P(1,2)');
        if (!(2 === 0)) {
          onDispose_3._v = null;
        }
        var mdc_2 = localMDC$composable($composer_11, 0);
        var tmp$ret$19;
        // Inline function 'kotlin.collections.plus' call
        var tmp$ret$15;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$15 = [tmp11_MDCStateEffect$composable];
        var tmp$ret$18;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$17;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$16;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$16 = [mdc_2];
        tmp$ret$17 = tmp$ret$16;
        tmp$ret$18 = tmp$ret$17;
        tmp$ret$19 = tmp$ret$15.concat(tmp$ret$18);
        var tmp_4 = tmp$ret$19.slice();
        DisposableEffect$composable(tmp_4, MDCDialog$composable$lambda$lambda$lambda$lambda_2(mdc_2, tmp12_MDCStateEffect$composable, tmp11_MDCStateEffect$composable, onDispose_3), $composer_11, 0);
        $composer_11.rr();
        $composer_10.rr();
        $composer_9.rr();
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_getInstance();
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.mx();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function MDCDialog$composable$lambda$lambda$lambda_0($this$Div) {
    init_properties_MDCDialog_kt_fyie1s();
    $this$Div.b1t(['mdc-dialog__container']);
    return Unit_getInstance();
  }
  function MDCDialog$composable$lambda$lambda$lambda$lambda_3($fullscreen, $titleId, $contentId) {
    return function ($this$Div) {
      $this$Div.b1t(['mdc-dialog__surface']);
      var tmp0_role = $fullscreen._v ? 'dialog' : 'alertdialog';
      $this$Div.y1s('role', tmp0_role);
      $this$Div.y1s('aria-modal', 'true');
      $this$Div.y1s('aria-labelledby', $titleId);
      $this$Div.y1s('aria-describedby', $contentId);
      return Unit_getInstance();
    };
  }
  function MDCDialog$composable$lambda$lambda$lambda_1($fullscreen, $$dirty, $titleId, $contentId, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-2024110643, $changed, -1, 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous> (MDCDialog.kt:58)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $fullscreen._v;
        var tmp1_remember$composable = $composer_0;
        var tmp2_remember$composable = 14 & $$dirty >> 3;
        var $composer_1 = tmp1_remember$composable;
        $composer_1.nr(-1058148781);
        sourceInformation($composer_1, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = !!(!!($composer_1.sr(tmp0_remember$composable) | $composer_1.sr($titleId)) | $composer_1.sr($contentId));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
          var tmp$ret$0;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = MDCDialog$composable$lambda$lambda$lambda$lambda_3($fullscreen, $titleId, $contentId);
          var value = tmp$ret$0;
          tmp1_cache.pr(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.rr();
        tmp$ret$4 = tmp0;
        Div$composable(tmp$ret$4, reinterpret$composable($content._v), $composer_0, 0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function MDCDialog$composable$lambda$lambda$lambda_2($this$Div) {
    init_properties_MDCDialog_kt_fyie1s();
    $this$Div.b1t(['mdc-dialog__scrim']);
    return Unit_getInstance();
  }
  function MDCDialog$composable$lambda$lambda_0($open, $scrimClickAction, $$dirty, $escapeKeyAction, $stacked, $fullscreen, $titleId, $contentId, $content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.sr($this$Div) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-325384404, $dirty, -1, 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous> (MDCDialog.kt:48)');
        }
        var tmp_1 = MDCDialog$_init_$ref_ntwe0f();
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 2004953858, true, MDCDialog$composable$lambda$lambda$lambda($open, $scrimClickAction, $$dirty, $escapeKeyAction, $stacked));
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.nr(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.sr(dispatchReceiver);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
          var tmp$ret$0;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.pr(value);
          tmp_3 = value;
        } else {
          tmp_3 = tmp0_let;
        }
        tmp$ret$1 = tmp_3;
        tmp$ret$2 = tmp$ret$1;
        var tmp_4 = tmp$ret$2;
        tmp$ret$3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.rr();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        MDCProvider$composable($this$Div, tmp_1, [], null, tmp$ret$6, $composer_0, 25088 | 14 & $dirty, 4);
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$9;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (false ? true : tmp0_let_0 === Companion_getInstance().qr_1) {
          var tmp$ret$7;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$7 = MDCDialog$composable$lambda$lambda$lambda_0;
          var value_0 = tmp$ret$7;
          tmp1_cache_0.pr(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$8 = tmp_5;
        tmp$ret$9 = tmp$ret$8;
        var tmp_6 = tmp$ret$9;
        tmp$ret$10 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$10;
        $composer_2.rr();
        tmp$ret$11 = tmp0_0;
        var tmp_7 = tmp$ret$11;
        var tmp$ret$18;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$17;
        // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_8 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_8, -2024110643, true, MDCDialog$composable$lambda$lambda$lambda_1($fullscreen, $$dirty, $titleId, $contentId, $content));
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_1 = $composer_0;
        var $composer_3 = tmp0_remember$composable_1;
        $composer_3.nr(-838505973);
        sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp2_cache_0 = $composer_3.sr(dispatchReceiver_0);
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_9;
        if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance().qr_1) {
          var tmp$ret$12;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = ComposableLambda$invoke$ref_0(dispatchReceiver_0);
          var value_1 = tmp$ret$12;
          tmp1_cache_1.pr(value_1);
          tmp_9 = value_1;
        } else {
          tmp_9 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_9;
        tmp$ret$14 = tmp$ret$13;
        var tmp_10 = tmp$ret$14;
        tmp$ret$15 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.rr();
        tmp$ret$16 = tmp0_1;
        tmp$ret$17 = tmp$ret$16;
        tmp$ret$18 = tmp$ret$17;
        Div$composable(tmp_7, tmp$ret$18, $composer_0, 48, 0);
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_4 = tmp1_remember$composable;
        $composer_4.nr(547886695);
        sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$22;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp$ret$21;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_11;
        if (false ? true : tmp0_let_2 === Companion_getInstance().qr_1) {
          var tmp$ret$19;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$19 = MDCDialog$composable$lambda$lambda$lambda_2;
          var value_2 = tmp$ret$19;
          tmp1_cache_2.pr(value_2);
          tmp_11 = value_2;
        } else {
          tmp_11 = tmp0_let_2;
        }
        tmp$ret$20 = tmp_11;
        tmp$ret$21 = tmp$ret$20;
        var tmp_12 = tmp$ret$21;
        tmp$ret$22 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_2 = tmp$ret$22;
        $composer_4.rr();
        tmp$ret$23 = tmp0_2;
        var tmp_13 = tmp$ret$23;
        Div$composable(tmp_13, null, $composer_0, 0, 2);
        var tmp_14;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_14 = Unit_getInstance();
        }
        tmp_0 = tmp_14;
      } else {
        $composer_0.mx();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function MDCDialog$composable$lambda($fullscreen, $stacked, $attrs, $$dirty, $open, $scrimClickAction, $escapeKeyAction, $titleId, $contentId, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(828026443, $changed, -1, 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous> (MDCDialog.kt:40)');
        }
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $fullscreen._v;
        var tmp1_remember$composable = $stacked._v;
        var tmp2_remember$composable = $attrs._v;
        var tmp3_remember$composable = $composer_0;
        var tmp4_remember$composable = 14 & $$dirty >> 3 | 112 & $$dirty >> 3 | 896 & $$dirty >> 9;
        var $composer_1 = tmp3_remember$composable;
        $composer_1.nr(-1058148781);
        sourceInformation($composer_1, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = !!(!!($composer_1.sr(tmp0_remember$composable) | $composer_1.sr(tmp1_remember$composable)) | $composer_1.sr(tmp2_remember$composable));
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
          var tmp$ret$0;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = MDCDialog$composable$lambda$lambda($fullscreen, $stacked, $attrs);
          var value = tmp$ret$0;
          tmp1_cache.pr(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_1 = tmp$ret$2;
        tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.rr();
        tmp$ret$4 = tmp0;
        var tmp_2 = tmp$ret$4;
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -325384404, true, MDCDialog$composable$lambda$lambda_0($open, $scrimClickAction, $$dirty, $escapeKeyAction, $stacked, $fullscreen, $titleId, $contentId, $content));
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
        var tmp_4;
        if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().qr_1) {
          var tmp$ret$5;
          // Inline function 'dev.petuska.kmdc.dialog.MDCDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_1(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        Div$composable(tmp_2, tmp$ret$11, $composer_0, 48, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp = tmp_6;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function MDCDialog$composable$lambda_0($open, $fullscreen, $stacked, $scrimClickAction, $escapeKeyAction, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MDCDialog$composable($open, $fullscreen._v, $stacked._v, $scrimClickAction._v, $escapeKeyAction._v, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function scrimClickAction$factory() {
    return getPropertyCallableRef('scrimClickAction', 1, KMutableProperty1, function (receiver) {
      return receiver.scrimClickAction;
    }, function (receiver, value) {
      return receiver.scrimClickAction = value;
    });
  }
  function escapeKeyAction$factory() {
    return getPropertyCallableRef('escapeKeyAction', 1, KMutableProperty1, function (receiver) {
      return receiver.escapeKeyAction;
    }, function (receiver, value) {
      return receiver.escapeKeyAction = value;
    });
  }
  function autoStackButtons$factory() {
    return getPropertyCallableRef('autoStackButtons', 1, KMutableProperty1, function (receiver) {
      return receiver.autoStackButtons;
    }, function (receiver, value) {
      return receiver.autoStackButtons = value;
    });
  }
  var properties_initialized_MDCDialog_kt_ukgqk;
  function init_properties_MDCDialog_kt_fyie1s() {
    if (properties_initialized_MDCDialog_kt_ukgqk) {
    } else {
      properties_initialized_MDCDialog_kt_ukgqk = true;
      TitleIdLocal = strictCompositionLocalOf();
      ContentIdLocal = strictCompositionLocalOf();
      OpenLocal = strictCompositionLocalOf();
    }
  }
  function onClosed(_this__u8e3s4, listener) {
    addMdcEventListener(_this__u8e3s4, 'MDCDialog:closed', listener);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MDCDialog$composable;
  _.$_$.b = onClosed;
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-dialog.js.map
