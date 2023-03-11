(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@material/base', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@material/base'), require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['@material/base'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-base'. Its dependency '@material/base' was not found. Please, check whether '@material/base' is loaded prior to 'KMDC-kmdc-base'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-base'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'KMDC-kmdc-base'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-base'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KMDC-kmdc-base'.");
    }
    root['KMDC-kmdc-base'] = factory(typeof this['KMDC-kmdc-base'] === 'undefined' ? {} : this['KMDC-kmdc-base'], this['@material/base'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, $module$_material_base_iegkj7, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var MDCComponent = $module$_material_base_iegkj7.MDCComponent;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var KMutableProperty0 = kotlin_kotlin.$_$.q5;
  var THROW_ISE = kotlin_kotlin.$_$.f6;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y4;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var classMeta = kotlin_kotlin.$_$.u4;
  var compositionLocalOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var toString = kotlin_kotlin.$_$.l5;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var mutableStateOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_MDCLocal() {
    init_properties_MDCProvider_kt_u3hnah();
    return MDCLocal;
  }
  var MDCLocal;
  function MDCProvider$composable(_this__u8e3s4, init, keys, onDispose, content, $composer, $changed, $default) {
    init_properties_MDCProvider_kt_u3hnah();
    var onDispose_0 = {_v: onDispose};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(868549772);
    sourceInformation($composer_0, 'C(MDCProvider$composable)P(1,2,3)');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(init) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sr(onDispose_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.sr(content) ? 16384 : 8192);
    $composer_0.uz(1549918284, keys.length);
    var indexedObject = keys;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $dirty = $dirty | ($composer_0.sr(value) ? 256 : 0);
    }
    $composer_0.xz();
    if (($dirty & 896) === 0)
      $dirty = $dirty | 128;
    if (!(($dirty & 46811) === 9362) ? true : !$composer_0.h12()) {
      if (!(($default & 4) === 0)) {
        onDispose_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(868549772, $dirty, -1, 'dev.petuska.kmdc.core.MDCProvider$composable (MDCProvider.kt:14)');
      }
      var mdc$delegate = rememberMutableStateOf$composable(null, $composer_0, 6);
      var tmp = keys.slice();
      DisposableEffect$composable(tmp, MDCProvider$composable$lambda_1(init, _this__u8e3s4, mdc$delegate, onDispose_0), $composer_0, 0);
      var tmp_0 = [get_MDCLocal().v17(MDCProvider$composable$lambda(mdc$delegate))];
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'dev.petuska.kmdc.core.MDCProvider$composable.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 1348031619, true, MDCProvider$composable$lambda_2(_this__u8e3s4, content, $dirty));
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
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.core.MDCProvider$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
        var value_0 = tmp$ret$0;
        tmp1_cache.pr(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$1 = tmp_2;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      tmp$ret$3 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.rr();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      CompositionLocalProvider$composable(tmp_0, tmp$ret$6, $composer_0, 48);
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
      tmp0_safe_receiver.q14(MDCProvider$composable$lambda_3(_this__u8e3s4, init, keys, onDispose_0, content, $changed, $default));
    }
  }
  function localMDC$composable($composer, $changed) {
    init_properties_MDCProvider_kt_u3hnah();
    var $composer_0 = $composer;
    $composer_0.nr(1065655813);
    sourceInformation($composer_0, 'C(localMDC$composable)');
    if (isTraceInProgress()) {
      traceEventStart(1065655813, $changed, -1, 'dev.petuska.kmdc.core.localMDC$composable (MDCProvider.kt:39)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_MDCLocal();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.h13(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'dev.petuska.kmdc.core.localMDC$composable.<anonymous>' call
      var tmp0_return = tmp0_safe_receiver instanceof MDCComponent ? tmp0_safe_receiver : null;
      tmp$ret$1 = tmp0_return;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
    return tmp0_0;
  }
  function MDCProvider$composable$lambda($mdc$delegate) {
    init_properties_MDCProvider_kt_u3hnah();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('mdc', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $mdc$delegate.z1();
    return tmp$ret$0;
  }
  function MDCProvider$composable$lambda_0($mdc$delegate, value) {
    init_properties_MDCProvider_kt_u3hnah();
    var tmp0_setValue = getLocalDelegateReference('mdc', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $mdc$delegate.sn(value);
  }
  function MDCLocal$lambda() {
    init_properties_MDCProvider_kt_u3hnah();
    return null;
  }
  function _no_name_provided__qut3iv($onDispose, $this_MDCProvider$composable, $this_DisposableEffect, $mdc$delegate) {
    this.f22_1 = $onDispose;
    this.g22_1 = $this_MDCProvider$composable;
    this.h22_1 = $this_DisposableEffect;
    this.i22_1 = $mdc$delegate;
  }
  _no_name_provided__qut3iv.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCProvider$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = MDCProvider$composable$lambda(this.i22_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_safe_receiver_0 = this.f22_1._v;
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0(tmp0_safe_receiver, this.g22_1.b20(this.h22_1));
      tmp0_safe_receiver.destroy();
      tmp$ret$0 = Unit_getInstance();
    }
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCProvider$composable$lambda_1($init, $this_MDCProvider$composable, $mdc$delegate, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = MDCProvider$composable$lambda($mdc$delegate);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.destroy();
        tmp$ret$0 = Unit_getInstance();
      }
      MDCProvider$composable$lambda_0($mdc$delegate, $init($this_MDCProvider$composable.b20($this$DisposableEffect)));
      var tmp;
      if (get_debug()) {
        set_mdc($this_MDCProvider$composable.b20($this$DisposableEffect), MDCProvider$composable$lambda($mdc$delegate));
        tmp = Unit_getInstance();
      }
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$1 = new _no_name_provided__qut3iv($onDispose, $this_MDCProvider$composable, $this$DisposableEffect, $mdc$delegate);
      return tmp$ret$1;
    };
  }
  function MDCProvider$composable$lambda_2($this_MDCProvider$composable, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1348031619, $changed, -1, 'dev.petuska.kmdc.core.MDCProvider$composable.<anonymous> (MDCProvider.kt:32)');
        }
        applyContent$composable($this_MDCProvider$composable, $content, $composer_0, 14 & $$dirty | 112 & $$dirty >> 9);
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
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function MDCProvider$composable$lambda_3($this_MDCProvider$composable, $init, $keys, $onDispose, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MDCProvider$composable($this_MDCProvider$composable, $init, $keys.slice(), $onDispose._v, $content, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_MDCProvider_kt_1uu9cd;
  function init_properties_MDCProvider_kt_u3hnah() {
    if (properties_initialized_MDCProvider_kt_1uu9cd) {
    } else {
      properties_initialized_MDCProvider_kt_1uu9cd = true;
      MDCLocal = compositionLocalOf$default(null, MDCLocal$lambda, 1, null);
    }
  }
  function role(_this__u8e3s4, value) {
    _this__u8e3s4.y1s('role', toString(value));
  }
  function aria(_this__u8e3s4, key, value) {
    _this__u8e3s4.y1s('aria-' + key, toString(value));
  }
  function classes(_this__u8e3s4, classes) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = classes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'dev.petuska.kmdc.core.classes.<anonymous>' call
      _this__u8e3s4.b1t([element]);
    }
  }
  function addMdcEventListener(_this__u8e3s4, eventName, listener) {
    _this__u8e3s4.d1t(eventName, addMdcEventListener$lambda(listener));
  }
  function addMdcEventListener$lambda($listener) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = it.l20_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      $listener(tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function set_mdc(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$0.mdc = value;
  }
  function get_debug() {
    init_properties_util_kt_59fjm0();
    return debug;
  }
  var debug;
  function strictCompositionLocalOf() {
    init_properties_util_kt_59fjm0();
    return compositionLocalOf$default(null, strictCompositionLocalOf$lambda, 1, null);
  }
  function rememberUniqueDomElementId$composable(suffix, $composer, $changed, $default) {
    init_properties_util_kt_59fjm0();
    var suffix_0 = {_v: suffix};
    var $composer_0 = $composer;
    $composer_0.nr(1565535728);
    sourceInformation($composer_0, 'C(rememberUniqueDomElementId$composable)');
    if (!(($default & 1) === 0)) {
      suffix_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(1565535728, $changed, -1, 'dev.petuska.kmdc.core.rememberUniqueDomElementId$composable (util.kt:129)');
    }
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.nr(547886695);
    sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$4;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().qr_1) {
      var tmp$ret$2;
      // Inline function 'dev.petuska.kmdc.core.rememberUniqueDomElementId$composable.<anonymous>' call
      var tmp_0 = uniqueDomElementId();
      var tmp0_safe_receiver = suffix_0._v;
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.core.rememberUniqueDomElementId$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = '-' + tmp0_safe_receiver;
        tmp$ret$1 = tmp$ret$0;
        tmp_1 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_1;
      tmp$ret$2 = tmp_0 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
      var value = tmp$ret$2;
      tmp1_cache.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    var tmp_2 = tmp$ret$4;
    tmp$ret$5 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0 = tmp$ret$5;
    $composer_1.rr();
    tmp$ret$6 = tmp0;
    var tmp0_0 = tmp$ret$6;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
    return tmp0_0;
  }
  function applyAttrs(_this__u8e3s4, block) {
    init_properties_util_kt_59fjm0();
    var tmp0_safe_receiver = block;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$1 = tmp$ret$0;
      tmp0_safe_receiver(tmp$ret$1);
    }
  }
  function reinterpret$composable(_this__u8e3s4) {
    init_properties_util_kt_59fjm0();
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'dev.petuska.kmdc.core.reinterpret$composable.<anonymous>' call
      tmp$ret$0 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-967767274, true, reinterpret$composable$lambda(tmp0_safe_receiver)));
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function applyContent$composable(_this__u8e3s4, block, $composer, $changed) {
    init_properties_util_kt_59fjm0();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(241979475);
    sourceInformation($composer_0, 'C(applyContent$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(_this__u8e3s4) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(block) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(241979475, $dirty, -1, 'dev.petuska.kmdc.core.applyContent$composable (util.kt:75)');
      }
      var tmp0_safe_receiver = block;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = _this__u8e3s4;
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp0_safe_receiver(tmp$ret$1, $composer_0, 112 & $dirty);
      }
      var tmp0_group = tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    var tmp1_safe_receiver = $composer_0.k13();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.q14(applyContent$composable$lambda(_this__u8e3s4, block, $changed));
    }
  }
  function uniqueDomElementId() {
    init_properties_util_kt_59fjm0();
    return 'kmdc-' + get_nextDomElementId();
  }
  function get_nextDomElementId() {
    init_properties_util_kt_59fjm0();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = window;
    tmp$ret$0 = tmp0_asDynamic;
    var dynamicWindow = tmp$ret$0;
    var tmp0_elvis_lhs = dynamicWindow['_kmdcCounter'];
    var next = (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) + 1;
    dynamicWindow['_kmdcCounter'] = next;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    tmp$ret$1 = next;
    return tmp$ret$1;
  }
  function rememberMutableStateOf$composable(initial, $composer, $changed) {
    init_properties_util_kt_59fjm0();
    var $composer_0 = $composer;
    $composer_0.nr(802522573);
    sourceInformation($composer_0, 'C(rememberMutableStateOf$composable)');
    if (isTraceInProgress()) {
      traceEventStart(802522573, $changed, -1, 'dev.petuska.kmdc.core.rememberMutableStateOf$composable (util.kt:134)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.nr(547886695);
    sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().qr_1) {
      var tmp$ret$0;
      // Inline function 'dev.petuska.kmdc.core.rememberMutableStateOf$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(initial, null, 2, null);
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
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
    return tmp0_0;
  }
  function strictCompositionLocalOf$lambda() {
    init_properties_util_kt_59fjm0();
    throw IllegalStateException_init_$Create$('CompositionLocal undefined');
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function reinterpret$composable$lambda($tmp0_safe_receiver) {
    return function ($this$null, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.sr($this$null) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-967767274, $changed, -1, 'dev.petuska.kmdc.core.reinterpret$composable.<anonymous>.<anonymous> (util.kt:32)');
        }
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = $this$null;
        tmp$ret$1 = tmp$ret$0;
        $tmp0_safe_receiver(tmp$ret$1, $composer_0, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        $composer_0.mx();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function applyContent$composable$lambda($this_applyContent$composable, $block, $$changed) {
    return function ($composer, $force) {
      applyContent$composable($this_applyContent$composable, $block, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  var properties_initialized_util_kt_qfsh5w;
  function init_properties_util_kt_59fjm0() {
    if (properties_initialized_util_kt_qfsh5w) {
    } else {
      properties_initialized_util_kt_qfsh5w = true;
      debug = process.env.NODE_ENV == 'development';
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MDCProvider$composable;
  _.$_$.b = addMdcEventListener;
  _.$_$.c = applyAttrs;
  _.$_$.d = applyContent$composable;
  _.$_$.e = localMDC$composable;
  _.$_$.f = reinterpret$composable;
  _.$_$.g = rememberUniqueDomElementId$composable;
  _.$_$.h = role;
  _.$_$.i = strictCompositionLocalOf;
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-base.js.map
