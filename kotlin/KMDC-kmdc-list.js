(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@material/list/mdc-list.scss', '@material/list', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './web-web-core.js', './KMDC-kmdc-base.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@material/list/mdc-list.scss'), require('@material/list'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./web-web-core.js'), require('./KMDC-kmdc-base.js'));
  else {
    if (typeof dev_petuska_kmdc_list_Style_wtplfq === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-list'. Its dependency '@material/list/mdc-list.scss' was not found. Please, check whether '@material/list/mdc-list.scss' is loaded prior to 'KMDC-kmdc-list'.");
    }
    if (typeof this['@material/list'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-list'. Its dependency '@material/list' was not found. Please, check whether '@material/list' is loaded prior to 'KMDC-kmdc-list'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-list'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KMDC-kmdc-list'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-list'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'KMDC-kmdc-list'.");
    }
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-list'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'KMDC-kmdc-list'.");
    }
    if (typeof this['KMDC-kmdc-base'] === 'undefined') {
      throw new Error("Error loading module 'KMDC-kmdc-list'. Its dependency 'KMDC-kmdc-base' was not found. Please, check whether 'KMDC-kmdc-base' is loaded prior to 'KMDC-kmdc-list'.");
    }
    root['KMDC-kmdc-list'] = factory(typeof this['KMDC-kmdc-list'] === 'undefined' ? {} : this['KMDC-kmdc-list'], dev_petuska_kmdc_list_Style_wtplfq, this['@material/list'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['web-web-core'], this['KMDC-kmdc-base']);
  }
}(this, function (_, dev_petuska_kmdc_list_Style_wtplfq, $module$_material_list_iea0py, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_web_web_core, kotlin_dev_petuska_kmdc_base) {
  'use strict';
  //region block: imports
  var MDCList = $module$_material_list_iea0py.MDCList;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var Enum = kotlin_kotlin.$_$.y5;
  var classMeta = kotlin_kotlin.$_$.u4;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var Ul$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.c2;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var equals = kotlin_kotlin.$_$.w4;
  var localMDC$composable = kotlin_dev_petuska_kmdc_base.$_$.e;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var applyContent$composable = kotlin_dev_petuska_kmdc_base.$_$.d;
  var MDCProvider$composable = kotlin_dev_petuska_kmdc_base.$_$.a;
  var role = kotlin_dev_petuska_kmdc_base.$_$.h;
  var applyAttrs = kotlin_dev_petuska_kmdc_base.$_$.c;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var KMutableProperty1 = kotlin_kotlin.$_$.r5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a5;
  var strictCompositionLocalOf = kotlin_dev_petuska_kmdc_base.$_$.i;
  //endregion
  //region block: pre-declaration
  MDCListSelection.prototype = Object.create(Enum.prototype);
  MDCListSelection.prototype.constructor = MDCListSelection;
  MDCListType.prototype = Object.create(Enum.prototype);
  MDCListType.prototype.constructor = MDCListType;
  MDCListSize.prototype = Object.create(Enum.prototype);
  MDCListSize.prototype.constructor = MDCListSize;
  //endregion
  function get_MDCListSelectionLocal() {
    init_properties_MDCList_kt_x1v1qi();
    return MDCListSelectionLocal;
  }
  var MDCListSelectionLocal;
  var MDCListSelection_Single_instance;
  var MDCListSelection_SingleRadio_instance;
  var MDCListSelection_MultiCheckbox_instance;
  var MDCListSelection_Multi_instance;
  var MDCListSelection_entriesInitialized;
  function MDCListSelection_initEntries() {
    if (MDCListSelection_entriesInitialized)
      return Unit_getInstance();
    MDCListSelection_entriesInitialized = true;
    MDCListSelection_Single_instance = new MDCListSelection('Single', 0, 'listbox', 'option');
    MDCListSelection_SingleRadio_instance = new MDCListSelection('SingleRadio', 1, 'radiogroup', 'radio');
    MDCListSelection_MultiCheckbox_instance = new MDCListSelection('MultiCheckbox', 2, 'group', 'checkbox');
    MDCListSelection_Multi_instance = new MDCListSelection('Multi', 3, null, null);
  }
  function MDCListSelection(name, ordinal, listRole, itemRole) {
    Enum.call(this, name, ordinal);
    this.w22_1 = listRole;
    this.x22_1 = itemRole;
  }
  MDCListSelection.prototype.y22 = function () {
    return this.w22_1;
  };
  MDCListSelection.$metadata$ = classMeta('MDCListSelection', undefined, undefined, undefined, undefined, Enum.prototype);
  function MDCList$composable(type, size, selection, dense, wrapFocus, attrs, content, $composer, $changed, $default) {
    init_properties_MDCList_kt_x1v1qi();
    var type_0 = {_v: type};
    var size_0 = {_v: size};
    var selection_0 = {_v: selection};
    var dense_0 = {_v: dense};
    var wrapFocus_0 = {_v: wrapFocus};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-324662151);
    sourceInformation($composer_0, 'C(MDCList$composable)P(5,4,3,2,6)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(type_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(size_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(selection_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.c13(dense_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.c13(wrapFocus_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        type_0._v = MDCListType_Default_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = MDCListSize_SingleLine_getInstance();
      }
      if (!(($default & 4) === 0)) {
        selection_0._v = MDCListSelection_Single_getInstance();
      }
      if (!(($default & 8) === 0)) {
        dense_0._v = false;
      }
      if (!(($default & 16) === 0)) {
        wrapFocus_0._v = false;
      }
      if (!(($default & 32) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-324662151, $dirty, -1, 'dev.petuska.kmdc.list.MDCList$composable (MDCList.kt:46)');
      }
      var tmp = type_0._v;
      var tmp_0 = size_0._v;
      var tmp_1 = dense_0._v;
      var tmp_2 = selection_0._v;
      var tmp_3 = attrs_0._v;
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'dev.petuska.kmdc.list.MDCList$composable.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 988603814, true, MDCList$composable$lambda(selection_0, wrapFocus_0, $dirty, content_0));
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
      var tmp_5;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.list.MDCList$composable.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        var value = tmp$ret$0;
        tmp1_cache.pr(value);
        tmp_5 = value;
      } else {
        tmp_5 = tmp0_let;
      }
      tmp$ret$1 = tmp_5;
      tmp$ret$2 = tmp$ret$1;
      var tmp_6 = tmp$ret$2;
      tmp$ret$3 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.rr();
      tmp$ret$4 = tmp0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      MDCListLayout$composable(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$6, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 896 & $dirty >> 3 | 7168 & $dirty << 3 | 57344 & $dirty >> 3, 0);
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
      tmp0_safe_receiver.q14(MDCList$composable$lambda_0(type_0, size_0, selection_0, dense_0, wrapFocus_0, attrs_0, content_0, $changed, $default));
    }
  }
  var MDCListType_Default_instance;
  var MDCListType_Textual_instance;
  var MDCListType_Avatar_instance;
  var MDCListType_Icon_instance;
  var MDCListType_Image_instance;
  var MDCListType_Thumbnail_instance;
  var MDCListType_Video_instance;
  var MDCListType_entriesInitialized;
  function MDCListType_initEntries() {
    if (MDCListType_entriesInitialized)
      return Unit_getInstance();
    MDCListType_entriesInitialized = true;
    MDCListType_Default_instance = new MDCListType('Default', 0, []);
    MDCListType_Textual_instance = new MDCListType('Textual', 1, ['mdc-deprecated-list--textual-list']);
    MDCListType_Avatar_instance = new MDCListType('Avatar', 2, ['mdc-deprecated-list--avatar-list']);
    MDCListType_Icon_instance = new MDCListType('Icon', 3, ['mdc-deprecated-list--icon-list']);
    MDCListType_Image_instance = new MDCListType('Image', 4, ['mdc-deprecated-list--image-list']);
    MDCListType_Thumbnail_instance = new MDCListType('Thumbnail', 5, ['mdc-deprecated-list--thumbnail-list']);
    MDCListType_Video_instance = new MDCListType('Video', 6, ['mdc-deprecated-list--video-list']);
  }
  function MDCListType(name, ordinal, classes) {
    Enum.call(this, name, ordinal);
    this.b23_1 = classes;
  }
  MDCListType.prototype.s1t = function () {
    return this.b23_1;
  };
  MDCListType.$metadata$ = classMeta('MDCListType', undefined, undefined, undefined, undefined, Enum.prototype);
  var MDCListSize_SingleLine_instance;
  var MDCListSize_TwoLine_instance;
  var MDCListSize_entriesInitialized;
  function MDCListSize_initEntries() {
    if (MDCListSize_entriesInitialized)
      return Unit_getInstance();
    MDCListSize_entriesInitialized = true;
    MDCListSize_SingleLine_instance = new MDCListSize('SingleLine', 0, []);
    MDCListSize_TwoLine_instance = new MDCListSize('TwoLine', 1, ['mdc-deprecated-list--two-line']);
  }
  function MDCListSize(name, ordinal, classes) {
    Enum.call(this, name, ordinal);
    this.e23_1 = classes;
  }
  MDCListSize.prototype.s1t = function () {
    return this.e23_1;
  };
  MDCListSize.$metadata$ = classMeta('MDCListSize', undefined, undefined, undefined, undefined, Enum.prototype);
  function MDCListLayout$composable(type, size, dense, selection, attrs, content, $composer, $changed, $default) {
    init_properties_MDCList_kt_x1v1qi();
    var type_0 = {_v: type};
    var size_0 = {_v: size};
    var dense_0 = {_v: dense};
    var selection_0 = {_v: selection};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-184673265);
    sourceInformation($composer_0, 'C(MDCListLayout$composable)P(5,4,2,3)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(type_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(size_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.c13(dense_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sr(selection_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 131072 : 65536);
    if (!(($dirty & 374491) === 74898) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        type_0._v = MDCListType_Default_getInstance();
      }
      if (!(($default & 2) === 0)) {
        size_0._v = MDCListSize_SingleLine_getInstance();
      }
      if (!(($default & 4) === 0)) {
        dense_0._v = false;
      }
      if (!(($default & 8) === 0)) {
        selection_0._v = MDCListSelection_Single_getInstance();
      }
      if (!(($default & 16) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-184673265, $dirty, -1, 'dev.petuska.kmdc.list.MDCListLayout$composable (MDCList.kt:74)');
      }
      dev_petuska_kmdc_list_Style_wtplfq;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = [size_0._v, type_0._v, selection_0._v, dense_0._v, attrs_0._v];
      var tmp1_remember$composable = $composer_0;
      var $composer_1 = tmp1_remember$composable;
      $composer_1.nr(-1603429786);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var invalid = false;
      var indexedObject = tmp0_remember$composable;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var key = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        invalid = !!(invalid | $composer_1.sr(key));
      }
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = invalid;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous>' call
        tmp$ret$0 = MDCListLayout$composable$lambda(size_0, type_0, selection_0, dense_0, attrs_0);
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
      // Inline function 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 2072338915, true, MDCListLayout$composable$lambda_0(selection_0, content_0, $dirty));
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
        // Inline function 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_2(dispatchReceiver);
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
      Ul$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(MDCListLayout$composable$lambda_1(type_0, size_0, dense_0, selection_0, attrs_0, content_0, $changed, $default));
    }
  }
  function MDCList$_init_$ref_o82ghx() {
    var l = function (p0) {
      return new MDCList(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function _no_name_provided__qut3iv($onDispose, $mdc) {
    this.f23_1 = $onDispose;
    this.g23_1 = $mdc;
  }
  _no_name_provided__qut3iv.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable.<anonymous>.<anonymous>' call
    if (!(this.f23_1._v == null)) {
      var tmp0_safe_receiver = this.g23_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        this.f23_1._v(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCList$composable$lambda$lambda$lambda($mdc, $selection, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = $mdc;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'dev.petuska.kmdc.list.MDCList$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.singleSelection = !equals($selection._v, MDCListSelection_Multi_getInstance()) ? !equals($selection._v, MDCListSelection_MultiCheckbox_getInstance()) : false;
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($onDispose, $mdc);
      return tmp$ret$0;
    };
  }
  function _no_name_provided__qut3iv_0($onDispose, $mdc) {
    this.h23_1 = $onDispose;
    this.i23_1 = $mdc;
  }
  _no_name_provided__qut3iv_0.prototype.sh = function () {
    // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>.<anonymous>' call
    if (!(this.h23_1._v == null)) {
      var tmp0_safe_receiver = this.i23_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        this.h23_1._v(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function MDCList$composable$lambda$lambda$lambda_0($mdc, $tmp5_MDCStateEffect$composable, $tmp4_MDCStateEffect$composable, $onDispose) {
    return function ($this$DisposableEffect) {
      var tmp0_safe_receiver = $mdc;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable.<anonymous>' call
        $tmp5_MDCStateEffect$composable.set(tmp0_safe_receiver, $tmp4_MDCStateEffect$composable);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($onDispose, $mdc);
      return tmp$ret$0;
    };
  }
  function MDCList$composable$lambda$lambda($selection, $wrapFocus, $$dirty, $this_MDCListLayout, $content, $$dirty$1) {
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
          traceEventStart(573139344, $dirty, -1, 'dev.petuska.kmdc.list.MDCList$composable.<anonymous>.<anonymous> (MDCList.kt:62)');
        }
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable = [$selection._v];
        var tmp1_MDCSideEffect$composable = null;
        var tmp2_MDCSideEffect$composable = $composer_0;
        var tmp3_MDCSideEffect$composable = 14 & $dirty;
        var onDispose = tmp1_MDCSideEffect$composable;
        var $composer_1 = tmp2_MDCSideEffect$composable;
        $composer_1.nr(-1868509044);
        sourceInformation($composer_1, 'CC(MDCSideEffect$composable)P(1,2)');
        if (!(2 === 0))
          onDispose = null;
        // Inline function 'dev.petuska.kmdc.core.MDCSideEffect$composable' call
        var tmp0_MDCSideEffect$composable_0 = tmp0_MDCSideEffect$composable.slice();
        var tmp1_MDCSideEffect$composable_0 = onDispose;
        var tmp2_MDCSideEffect$composable_0 = $composer_1;
        var tmp3_MDCSideEffect$composable_0 = 112 & tmp3_MDCSideEffect$composable >> 3 | 896 & tmp3_MDCSideEffect$composable >> 3;
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
        DisposableEffect$composable(tmp_1, MDCList$composable$lambda$lambda$lambda(mdc, $selection, onDispose_0), $composer_2, 0);
        $composer_2.rr();
        $composer_1.rr();
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp4_MDCStateEffect$composable = $wrapFocus._v;
        var tmp5_MDCStateEffect$composable = wrapFocus$factory();
        var tmp6_MDCStateEffect$composable = $composer_0;
        var tmp7_MDCStateEffect$composable = 14 & $$dirty >> 12;
        var $composer_3 = tmp6_MDCStateEffect$composable;
        $composer_3.nr(308095606);
        sourceInformation($composer_3, 'CC(MDCStateEffect$composable)P(1)');
        // Inline function 'dev.petuska.kmdc.core.MDCStateEffect$composable' call
        var tmp2_MDCStateEffect$composable = $composer_3;
        var tmp3_MDCStateEffect$composable = 8 & tmp7_MDCStateEffect$composable | 14 & tmp7_MDCStateEffect$composable;
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
        tmp$ret$5 = [tmp4_MDCStateEffect$composable];
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
        DisposableEffect$composable(tmp_2, MDCList$composable$lambda$lambda$lambda_0(mdc_0, tmp5_MDCStateEffect$composable, tmp4_MDCStateEffect$composable, onDispose_1), $composer_5, 0);
        $composer_5.rr();
        $composer_4.rr();
        $composer_3.rr();
        applyContent$composable($this_MDCListLayout, $content._v, $composer_0, 14 & $$dirty$1 | 112 & $$dirty >> 15);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp_0 = tmp_3;
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
  function MDCList$composable$lambda($selection, $wrapFocus, $$dirty, $content) {
    return function ($this$MDCListLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.sr($this$MDCListLayout) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(988603814, $dirty, -1, 'dev.petuska.kmdc.list.MDCList$composable.<anonymous> (MDCList.kt:61)');
        }
        var tmp_1 = MDCList$_init_$ref_o82ghx();
        var tmp_2 = [$selection._v];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'dev.petuska.kmdc.list.MDCList$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 573139344, true, MDCList$composable$lambda$lambda($selection, $wrapFocus, $$dirty, $this$MDCListLayout, $content, $dirty));
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
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
          var tmp$ret$0;
          // Inline function 'dev.petuska.kmdc.list.MDCList$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref(dispatchReceiver);
          var value = tmp$ret$0;
          tmp1_cache.pr(value);
          tmp_4 = value;
        } else {
          tmp_4 = tmp0_let;
        }
        tmp$ret$1 = tmp_4;
        tmp$ret$2 = tmp$ret$1;
        var tmp_5 = tmp$ret$2;
        tmp$ret$3 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.rr();
        tmp$ret$4 = tmp0;
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        MDCProvider$composable($this$MDCListLayout, tmp_1, tmp_2, null, tmp$ret$6, $composer_0, 24576 | 14 & $dirty, 4);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_getInstance();
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.mx();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function MDCList$composable$lambda_0($type, $size, $selection, $dense, $wrapFocus, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MDCList$composable($type._v, $size._v, $selection._v, $dense._v, $wrapFocus._v, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function MDCListLayout$composable$lambda($size, $type, $selection, $dense, $attrs) {
    return function ($this$Ul) {
      $this$Ul.b1t(['mdc-deprecated-list']);
      var tmp0_classes = $size._v.e23_1;
      var indexedObject = tmp0_classes;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'dev.petuska.kmdc.core.classes.<anonymous>' call
        $this$Ul.b1t([element]);
      }
      var tmp1_classes = $type._v.b23_1;
      var indexedObject_0 = tmp1_classes;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'dev.petuska.kmdc.core.classes.<anonymous>' call
        $this$Ul.b1t([element_0]);
      }
      var tmp0_safe_receiver = $selection._v.w22_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        role($this$Ul, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp;
      if ($dense._v) {
        $this$Ul.b1t(['mdc-deprecated-list--dense']);
        tmp = Unit_getInstance();
      }
      applyAttrs($this$Ul, $attrs._v);
      return Unit_getInstance();
    };
  }
  function MDCListLayout$composable$lambda$lambda($this_Ul, $content, $$dirty, $$dirty$1) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(495756579, $changed, -1, 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous>.<anonymous> (MDCList.kt:91)');
        }
        applyContent$composable($this_Ul, $content._v, $composer_0, 14 & $$dirty | 112 & $$dirty$1 >> 12);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function MDCListLayout$composable$lambda_0($selection, $content, $$dirty) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.sr($this$Ul) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(2072338915, $dirty, -1, 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous> (MDCList.kt:90)');
        }
        var tmp_1 = [get_MDCListSelectionLocal().v17($selection._v)];
        var tmp$ret$6;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$5;
        // Inline function 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 495756579, true, MDCListLayout$composable$lambda$lambda($this$Ul, $content, $dirty, $$dirty));
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
          // Inline function 'dev.petuska.kmdc.list.MDCListLayout$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
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
        CompositionLocalProvider$composable(tmp_1, tmp$ret$6, $composer_0, 48);
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
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function MDCListLayout$composable$lambda_1($type, $size, $dense, $selection, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MDCListLayout$composable($type._v, $size._v, $dense._v, $selection._v, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function MDCListSelection_Single_getInstance() {
    MDCListSelection_initEntries();
    return MDCListSelection_Single_instance;
  }
  function MDCListSelection_MultiCheckbox_getInstance() {
    MDCListSelection_initEntries();
    return MDCListSelection_MultiCheckbox_instance;
  }
  function MDCListSelection_Multi_getInstance() {
    MDCListSelection_initEntries();
    return MDCListSelection_Multi_instance;
  }
  function MDCListType_Default_getInstance() {
    MDCListType_initEntries();
    return MDCListType_Default_instance;
  }
  function MDCListType_Textual_getInstance() {
    MDCListType_initEntries();
    return MDCListType_Textual_instance;
  }
  function MDCListSize_SingleLine_getInstance() {
    MDCListSize_initEntries();
    return MDCListSize_SingleLine_instance;
  }
  function wrapFocus$factory() {
    return getPropertyCallableRef('wrapFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.wrapFocus;
    }, function (receiver, value) {
      return receiver.wrapFocus = value;
    });
  }
  var properties_initialized_MDCList_kt_ewf95m;
  function init_properties_MDCList_kt_x1v1qi() {
    if (properties_initialized_MDCList_kt_ewf95m) {
    } else {
      properties_initialized_MDCList_kt_ewf95m = true;
      MDCListSelectionLocal = strictCompositionLocalOf();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MDCList$composable;
  _.$_$.b = MDCListType_Textual_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-list.js.map
