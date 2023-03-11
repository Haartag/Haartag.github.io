(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './web-internal-web-core-runtime.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./web-internal-web-core-runtime.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'web-web-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'web-web-core'.");
    }
    if (typeof this['web-internal-web-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-web-core'. Its dependency 'web-internal-web-core-runtime' was not found. Please, check whether 'web-internal-web-core-runtime' is loaded prior to 'web-web-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-web-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'web-web-core'.");
    }
    root['web-web-core'] = factory(typeof this['web-web-core'] === 'undefined' ? {} : this['web-web-core'], this['kotlin-kotlin-stdlib-js-ir'], this['web-internal-web-core-runtime'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_web_internal_web_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var asList = kotlin_kotlin.$_$.t2;
  var interfaceMeta = kotlin_kotlin.$_$.e5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var addAll = kotlin_kotlin.$_$.q2;
  var classMeta = kotlin_kotlin.$_$.u4;
  var objectMeta = kotlin_kotlin.$_$.k5;
  var NamedEventListener = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.d;
  var charSequenceLength = kotlin_kotlin.$_$.t4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.k6;
  var toString = kotlin_kotlin.$_$.r6;
  var equals = kotlin_kotlin.$_$.w4;
  var hashCode = kotlin_kotlin.$_$.c5;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var numberToDouble = kotlin_kotlin.$_$.j5;
  var getNumberHashCode = kotlin_kotlin.$_$.z4;
  var getStringHashCode = kotlin_kotlin.$_$.b5;
  var isInterface = kotlin_kotlin.$_$.h5;
  var Collection = kotlin_kotlin.$_$.a2;
  var toString_0 = kotlin_kotlin.$_$.l5;
  var ReadOnlyProperty = kotlin_kotlin.$_$.m5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var to = kotlin_kotlin.$_$.s6;
  var listOf = kotlin_kotlin.$_$.l3;
  var listOfNotNull = kotlin_kotlin.$_$.j3;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var joinToString$default_0 = kotlin_kotlin.$_$.g;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var isObject = kotlin_kotlin.$_$.i5;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var DisposableEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.c;
  var emptyList = kotlin_kotlin.$_$.b3;
  var copyToArray = kotlin_kotlin.$_$.z2;
  var DOMScope = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.a;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.q6;
  var lazy = kotlin_kotlin.$_$.l6;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var DomApplier = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.b;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffectResult = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var DisposableEffect$composable_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var KProperty1 = kotlin_kotlin.$_$.s5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a5;
  //endregion
  //region block: pre-declaration
  function onClick(listener) {
    Companion_getInstance_0();
    this.m1t(new MouseEventListener('click', listener));
  }
  function addEventListener(eventName, listener) {
    this.m1t(new SyntheticEventListener(eventName, listener));
  }
  function classes(classes) {
    return this.a1t(asList(classes));
  }
  MouseEventListener.prototype = Object.create(SyntheticEventListener.prototype);
  MouseEventListener.prototype.constructor = MouseEventListener;
  function property(propertyName, value) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return this.s1w(propertyName, tmp$ret$2);
  }
  function add(selector, style) {
    this.g1w(new CSSStyleRuleDeclaration(selector, style));
  }
  function returnUniversalSelector() {
    return get_Universal();
  }
  function get_universal() {
    return get_Universal();
  }
  function desc(parent, selected) {
    return new Descendant(parent, selected);
  }
  function returnHoverSelector() {
    return this.w1w();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  function style(_this__u8e3s4, cssRule) {
    this.m1w(_this__u8e3s4, cssRule);
  }
  CSSRuleBuilderImpl.prototype = Object.create(StyleScopeBuilder.prototype);
  CSSRuleBuilderImpl.prototype.constructor = CSSRuleBuilderImpl;
  CSSBuilderImpl.prototype = Object.create(CSSRuleBuilderImpl.prototype);
  CSSBuilderImpl.prototype.constructor = CSSBuilderImpl;
  StyleSheet$CSSHolder$provideDelegate$selector$1.prototype = Object.create(CSSSelector.prototype);
  StyleSheet$CSSHolder$provideDelegate$selector$1.prototype.constructor = StyleSheet$CSSHolder$provideDelegate$selector$1;
  CSSSelfSelector.prototype = Object.create(CSSSelector.prototype);
  CSSSelfSelector.prototype.constructor = CSSSelfSelector;
  function style_0(selector, cssRule) {
    this.h1w(selector, buildCSSStyleRule(cssRule));
  }
  RawSelector.prototype = Object.create(CSSSelector.prototype);
  RawSelector.prototype.constructor = RawSelector;
  Descendant.prototype = Object.create(CSSSelector.prototype);
  Descendant.prototype.constructor = Descendant;
  PseudoClassInternal.prototype = Object.create(CSSSelector.prototype);
  PseudoClassInternal.prototype.constructor = PseudoClassInternal;
  DomElementWrapper.prototype = Object.create(DomNodeWrapper.prototype);
  DomElementWrapper.prototype.constructor = DomElementWrapper;
  ElementScopeImpl.prototype = Object.create(ElementScopeBase.prototype);
  ElementScopeImpl.prototype.constructor = ElementScopeImpl;
  SyntheticMouseEvent.prototype = Object.create(SyntheticEvent.prototype);
  SyntheticMouseEvent.prototype.constructor = SyntheticMouseEvent;
  //endregion
  var setInputValue;
  var setTextAreaDefaultValue;
  var setCheckedValue;
  function alt(_this__u8e3s4, value) {
    init_properties_Attrs_kt_mv9v1q();
    return _this__u8e3s4.y1s('alt', value);
  }
  function src(_this__u8e3s4, value) {
    init_properties_Attrs_kt_mv9v1q();
    return _this__u8e3s4.y1s('src', value);
  }
  function href(_this__u8e3s4, value) {
    init_properties_Attrs_kt_mv9v1q();
    return _this__u8e3s4.y1s('href', value);
  }
  function setInputValue$lambda(e, v) {
    init_properties_Attrs_kt_mv9v1q();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    init_properties_Attrs_kt_mv9v1q();
    e.innerText = v;
    return Unit_getInstance();
  }
  function setCheckedValue$lambda(e, v) {
    init_properties_Attrs_kt_mv9v1q();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_getInstance();
  }
  var properties_initialized_Attrs_kt_uypsku;
  function init_properties_Attrs_kt_mv9v1q() {
    if (properties_initialized_Attrs_kt_uypsku) {
    } else {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  AttrsScope.$metadata$ = interfaceMeta('AttrsScope', [EventsListenerScope]);
  function AttrsScopeBuilder_init_$Init$(eventsListenerScopeBuilder, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      eventsListenerScopeBuilder = new EventsListenerScopeBuilder();
    AttrsScopeBuilder.call($this, eventsListenerScopeBuilder);
    return $this;
  }
  function AttrsScopeBuilder_init_$Create$(eventsListenerScopeBuilder, $mask0, $marker) {
    return AttrsScopeBuilder_init_$Init$(eventsListenerScopeBuilder, $mask0, $marker, Object.create(AttrsScopeBuilder.prototype));
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    this.e1t_1 = eventsListenerScopeBuilder;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.f1t_1 = tmp$ret$0;
    this.g1t_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.h1t_1 = tmp$ret$1;
    this.i1t_1 = null;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.j1t_1 = tmp$ret$2;
    this.k1t_1 = 8;
  }
  AttrsScopeBuilder.prototype.l1t = function () {
    return this.e1t_1;
  };
  AttrsScopeBuilder.prototype.d1t = function (eventName, listener) {
    this.e1t_1.d1t(eventName, listener);
  };
  AttrsScopeBuilder.prototype.c1t = function (listener) {
    this.e1t_1.c1t(listener);
  };
  AttrsScopeBuilder.prototype.m1t = function (listener) {
    this.e1t_1.m1t(listener);
  };
  AttrsScopeBuilder.prototype.p1t = function () {
    return this.g1t_1;
  };
  AttrsScopeBuilder.prototype.q1t = function () {
    return this.h1t_1;
  };
  AttrsScopeBuilder.prototype.r1t = function () {
    return this.i1t_1;
  };
  AttrsScopeBuilder.prototype.s1t = function () {
    return this.j1t_1;
  };
  AttrsScopeBuilder.prototype.a1t = function (classes) {
    this.j1t_1.a3(classes);
  };
  AttrsScopeBuilder.prototype.b1t = function (classes) {
    addAll(this.j1t_1, classes);
  };
  AttrsScopeBuilder.prototype.z1s = function (builder) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.g1t_1;
    // Inline function 'kotlin.contracts.contract' call
    builder(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
  };
  AttrsScopeBuilder.prototype.y1s = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.f1t_1;
    tmp0_set.w2(attr, value);
    return this;
  };
  AttrsScopeBuilder.prototype.t1t = function () {
    return this.f1t_1;
  };
  AttrsScopeBuilder.$metadata$ = classMeta('AttrsScopeBuilder', [AttrsScope, EventsListenerScope]);
  function Companion() {
    Companion_instance = this;
    this.u1t_1 = 'copy';
    this.v1t_1 = 'cut';
    this.w1t_1 = 'paste';
    this.x1t_1 = 'contextmenu';
    this.y1t_1 = 'click';
    this.z1t_1 = 'dblclick';
    this.a1u_1 = 'focus';
    this.b1u_1 = 'blur';
    this.c1u_1 = 'focusin';
    this.d1u_1 = 'focusout';
    this.e1u_1 = 'keydown';
    this.f1u_1 = 'keyup';
    this.g1u_1 = 'mousedown';
    this.h1u_1 = 'mouseup';
    this.i1u_1 = 'mouseenter';
    this.j1u_1 = 'mouseleave';
    this.k1u_1 = 'mousemove';
    this.l1u_1 = 'mouseout';
    this.m1u_1 = 'mouseover';
    this.n1u_1 = 'wheel';
    this.o1u_1 = 'scroll';
    this.p1u_1 = 'select';
    this.q1u_1 = 'touchcancel';
    this.r1u_1 = 'touchend';
    this.s1u_1 = 'touchmove';
    this.t1u_1 = 'touchstart';
    this.u1u_1 = 'animationcancel';
    this.v1u_1 = 'animationend';
    this.w1u_1 = 'animationiteration';
    this.x1u_1 = 'animationstart';
    this.y1u_1 = 'beforeinput';
    this.z1u_1 = 'input';
    this.a1v_1 = 'change';
    this.b1v_1 = 'invalid';
    this.c1v_1 = 'drag';
    this.d1v_1 = 'drop';
    this.e1v_1 = 'dragstart';
    this.f1v_1 = 'dragend';
    this.g1v_1 = 'dragover';
    this.h1v_1 = 'dragenter';
    this.i1v_1 = 'dragleave';
    this.j1v_1 = 'submit';
    this.k1v_1 = 'reset';
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function EventsListenerScope() {
  }
  EventsListenerScope.$metadata$ = interfaceMeta('EventsListenerScope');
  function EventsListenerScopeBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.n1t_1 = tmp$ret$0;
    this.o1t_1 = 8;
  }
  EventsListenerScopeBuilder.prototype.m1t = function (listener) {
    this.n1t_1.a(listener);
  };
  EventsListenerScopeBuilder.prototype.l1v = function () {
    return this.n1t_1;
  };
  EventsListenerScopeBuilder.$metadata$ = classMeta('EventsListenerScopeBuilder', [EventsListenerScope]);
  function SyntheticEventListener(event, listener) {
    this.m1v_1 = event;
    this.n1v_1 = listener;
    this.o1v_1 = this.m1v_1;
    this.p1v_1 = 0;
  }
  SyntheticEventListener.prototype.s1r = function () {
    return this.o1v_1;
  };
  SyntheticEventListener.prototype.q1v = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = new SyntheticEvent(event);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    this.n1v_1(tmp$ret$1);
  };
  SyntheticEventListener.prototype.handleEvent = function (event) {
    return this.q1v(event);
  };
  SyntheticEventListener.$metadata$ = classMeta('SyntheticEventListener', [NamedEventListener]);
  function MouseEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
  }
  MouseEventListener.prototype.q1v = function (event) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = event;
    tmp$ret$1 = tmp$ret$0;
    this.n1v_1(new SyntheticMouseEvent(tmp$ret$1));
  };
  MouseEventListener.prototype.handleEvent = function (event) {
    return this.q1v(event);
  };
  MouseEventListener.$metadata$ = classMeta('MouseEventListener', undefined, undefined, undefined, undefined, SyntheticEventListener.prototype);
  function get_controlledInputsValuesWeakMap() {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    init_properties_InternalControlledInputUtils_kt_yo4x4o();
    var tmp;
    if (element.type === 'radio') {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var tmp0_isNotEmpty = element.name;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().g2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var tmp1_set = get_controlledRadioGroups();
        var tmp2_set = element.name;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableSetOf' call
        tmp$ret$1 = LinkedHashSet_init_$Create$();
        var tmp3_set = tmp$ret$1;
        tmp1_set.w2(tmp2_set, tmp3_set);
      }
      ensureNotNull(get_controlledRadioGroups().k2(element.name)).a(element);
    }
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function init_properties_InternalControlledInputUtils_kt_yo4x4o() {
    if (properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
    } else {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new WeakMap();
      tmp$ret$0 = tmp0_unsafeCast;
      controlledInputsValuesWeakMap = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0_0 = LinkedHashMap_init_$Create$();
      controlledRadioGroups = tmp$ret$0_0;
    }
  }
  function appendRule(_this__u8e3s4, cssRule) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$0.appendRule(cssRule);
  }
  function CSSBuilder() {
  }
  CSSBuilder.$metadata$ = interfaceMeta('CSSBuilder', [CSSStyleRuleBuilder, GenericStyleSheetBuilder]);
  function CSSBuilderImpl(currentRoot, self_0, rulesHolder) {
    CSSRuleBuilderImpl.call(this);
    this.b1w_1 = currentRoot;
    this.c1w_1 = self_0;
    this.d1w_1 = rulesHolder;
    this.e1w_1 = 8;
  }
  CSSBuilderImpl.prototype.v1v = function () {
    return this.c1w_1;
  };
  CSSBuilderImpl.prototype.f1w = function () {
    return this.d1w_1.f1w();
  };
  CSSBuilderImpl.prototype.g1w = function (cssRule) {
    this.d1w_1.g1w(cssRule);
  };
  CSSBuilderImpl.prototype.h1w = function (selector, style) {
    this.d1w_1.h1w(selector, style);
  };
  CSSBuilderImpl.prototype.i1w = function (selector, cssRule) {
    var tmp;
    if (selector.l1w(this.c1w_1) ? true : selector.l1w(this.b1w_1)) {
      tmp = selector;
    } else {
      tmp = this.j1w(this.c1w_1, selector);
    }
    var resolvedSelector = tmp;
    var tmp0_container = buildCSS(this.b1w_1, resolvedSelector, cssRule);
    var style = tmp0_container.i5();
    var rules = tmp0_container.j5();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = rules.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.css.CSSBuilderImpl.style.<anonymous>' call
      this.g1w(element);
    }
    this.h1w(resolvedSelector, style);
  };
  CSSBuilderImpl.prototype.m1w = function (selector, cssRule) {
    return this.i1w(selector, cssRule);
  };
  CSSBuilderImpl.prototype.n1w = function (rulesBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBuilderImpl(this.b1w_1, this.c1w_1, new StyleSheetBuilderImpl());
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.f1w();
  };
  CSSBuilderImpl.prototype.o1w = function (rulesBuild) {
    return this.n1w(rulesBuild);
  };
  CSSBuilderImpl.$metadata$ = classMeta('CSSBuilderImpl', [CSSBuilder, CSSRulesHolder], undefined, undefined, undefined, CSSRuleBuilderImpl.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.x1w = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_0.prototype.y1w = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.z1w = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'row';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_1.prototype.a1x = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'column';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.b1x = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'space-between';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.c1x = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'solid';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_3.prototype.d1x = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'double';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.e1x = function () {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'center';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function get_value(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function DisplayStyle(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function FlexDirection(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function JustifyContent(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function LineStyle(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function AlignItems(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function CSSNamedKeyframes() {
  }
  CSSNamedKeyframes.$metadata$ = interfaceMeta('CSSNamedKeyframes');
  function CSSKeyframesRuleDeclaration() {
  }
  CSSKeyframesRuleDeclaration.$metadata$ = classMeta('CSSKeyframesRuleDeclaration', [CSSRuleDeclaration, CSSNamedKeyframes]);
  function media(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.o1w(rulesBuild);
    _this__u8e3s4.g1w(new CSSMediaRuleDeclaration(query, rules));
  }
  function Invertible() {
  }
  Invertible.$metadata$ = interfaceMeta('Invertible', [CSSMediaQuery]);
  function Combinable() {
  }
  Combinable.$metadata$ = interfaceMeta('Combinable', [CSSMediaQuery]);
  function Atomic() {
  }
  Atomic.$metadata$ = interfaceMeta('Atomic', [Invertible, Combinable]);
  function MediaFeature(name, value) {
    this.f1x_1 = name;
    this.g1x_1 = value;
    this.h1x_1 = 8;
  }
  MediaFeature.prototype.z1 = function () {
    return this.g1x_1;
  };
  MediaFeature.prototype.equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.f1x_1 === other.f1x_1 ? toString(this.g1x_1) === toString(other.g1x_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  MediaFeature.prototype.toString = function () {
    var tmp0_safe_receiver = this.g1x_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp$ret$0 = ': ' + this.g1x_1 + ')';
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.f1x_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  MediaFeature.$metadata$ = classMeta('MediaFeature', [CSSMediaQuery, Atomic]);
  function CSSMediaQuery() {
  }
  CSSMediaQuery.$metadata$ = interfaceMeta('CSSMediaQuery');
  function mediaMaxWidth(_this__u8e3s4, value) {
    return new MediaFeature('max-width', value);
  }
  function mediaMinWidth(_this__u8e3s4, value) {
    return new MediaFeature('min-width', value);
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.i1x_1 = query;
    this.j1x_1 = rules;
    this.k1x_1 = 0;
  }
  CSSMediaRuleDeclaration.prototype.l1x = function () {
    return this.j1x_1;
  };
  CSSMediaRuleDeclaration.prototype.m1x = function () {
    return '@media ' + this.i1x_1;
  };
  CSSMediaRuleDeclaration.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.j1x_1, other.j1x_1) ? equals(this.i1x_1, other.i1x_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  CSSMediaRuleDeclaration.$metadata$ = classMeta('CSSMediaRuleDeclaration', [CSSGroupingRuleDeclaration]);
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSStyleRuleBuilder() {
  }
  CSSStyleRuleBuilder.$metadata$ = interfaceMeta('CSSStyleRuleBuilder', [StyleScope]);
  function CSSRuleDeclaration() {
  }
  CSSRuleDeclaration.$metadata$ = interfaceMeta('CSSRuleDeclaration');
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.q1x_1 = 0;
  }
  CSSRuleBuilderImpl.$metadata$ = classMeta('CSSRuleBuilderImpl', [CSSStyleRuleBuilder], undefined, undefined, undefined, StyleScopeBuilder.prototype);
  function CSSGroupingRuleDeclaration() {
  }
  CSSGroupingRuleDeclaration.$metadata$ = interfaceMeta('CSSGroupingRuleDeclaration', [CSSRuleDeclaration]);
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.r1x_1 = selector;
    this.s1x_1 = style;
    this.t1x_1 = 8;
  }
  CSSStyleRuleDeclaration.prototype.u1x = function () {
    return this.s1x_1;
  };
  CSSStyleRuleDeclaration.prototype.m1x = function () {
    return this.r1x_1.v1x();
  };
  CSSStyleRuleDeclaration.prototype.toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.r1x_1 + ', style=' + this.s1x_1 + ')';
  };
  CSSStyleRuleDeclaration.prototype.hashCode = function () {
    var result = hashCode(this.r1x_1);
    result = imul(result, 31) + hashCode(this.s1x_1) | 0;
    return result;
  };
  CSSStyleRuleDeclaration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.r1x_1, tmp0_other_with_cast.r1x_1))
      return false;
    if (!equals(this.s1x_1, tmp0_other_with_cast.s1x_1))
      return false;
    return true;
  };
  CSSStyleRuleDeclaration.$metadata$ = classMeta('CSSStyleRuleDeclaration', [CSSRuleDeclaration, CSSStyledRuleDeclaration]);
  function CSSStyledRuleDeclaration() {
  }
  CSSStyledRuleDeclaration.$metadata$ = interfaceMeta('CSSStyledRuleDeclaration');
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.w1x = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '%';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_5.prototype.x1x = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'px';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    var tmp0__get_px__p4dvcn = Companion_getInstance_6();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'px';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    var tmp0__get_percent__ps7yqu = Companion_getInstance_6();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = '%';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return new CSSUnitValueTyped(tmp, tmp$ret$2);
  }
  function CSSUnitValueTyped(value, unit) {
    this.y1x_1 = value;
    this.z1x_1 = unit;
    this.a1y_1 = 0;
  }
  CSSUnitValueTyped.prototype.z1 = function () {
    return this.y1x_1;
  };
  CSSUnitValueTyped.prototype.b1y = function () {
    return this.z1x_1;
  };
  CSSUnitValueTyped.prototype.toString = function () {
    return '' + this.y1x_1 + this.z1x_1;
  };
  CSSUnitValueTyped.prototype.hashCode = function () {
    var result = getNumberHashCode(this.y1x_1);
    result = imul(result, 31) + hashCode(this.z1x_1) | 0;
    return result;
  };
  CSSUnitValueTyped.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.y1x_1, tmp0_other_with_cast.y1x_1))
      return false;
    if (!equals(this.z1x_1, tmp0_other_with_cast.z1x_1))
      return false;
    return true;
  };
  CSSUnitValueTyped.$metadata$ = classMeta('CSSUnitValueTyped');
  Object.defineProperty(CSSUnitValueTyped.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.z1();
    }
  });
  Object.defineProperty(CSSUnitValueTyped.prototype, 'unit', {
    configurable: true,
    get: function () {
      return this.b1y();
    }
  });
  function Color(name) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = name;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StylePropertyValue(value) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = value;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function StyleScope() {
  }
  StyleScope.$metadata$ = interfaceMeta('StyleScope');
  function StyleHolder() {
  }
  StyleHolder.$metadata$ = interfaceMeta('StyleHolder');
  function StylePropertyDeclaration(name, value) {
    this.c1y_1 = name;
    this.d1y_1 = value;
    this.e1y_1 = 8;
  }
  StylePropertyDeclaration.prototype.s1r = function () {
    return this.c1y_1;
  };
  StylePropertyDeclaration.prototype.z1 = function () {
    return this.d1y_1;
  };
  StylePropertyDeclaration.prototype.i5 = function () {
    return this.c1y_1;
  };
  StylePropertyDeclaration.prototype.j5 = function () {
    return this.d1y_1;
  };
  StylePropertyDeclaration.prototype.toString = function () {
    return 'StylePropertyDeclaration(name=' + this.c1y_1 + ', value=' + this.d1y_1 + ')';
  };
  StylePropertyDeclaration.prototype.hashCode = function () {
    var result = getStringHashCode(this.c1y_1);
    result = imul(result, 31) + hashCode(this.d1y_1) | 0;
    return result;
  };
  StylePropertyDeclaration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.c1y_1 === tmp0_other_with_cast.c1y_1))
      return false;
    if (!equals(this.d1y_1, tmp0_other_with_cast.d1y_1))
      return false;
    return true;
  };
  StylePropertyDeclaration.$metadata$ = classMeta('StylePropertyDeclaration');
  function StyleScopeBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.p1w_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.q1w_1 = tmp$ret$1;
    this.r1w_1 = 0;
  }
  StyleScopeBuilder.prototype.t1w = function () {
    return this.p1w_1;
  };
  StyleScopeBuilder.prototype.u1w = function () {
    return this.q1w_1;
  };
  StyleScopeBuilder.prototype.s1w = function (propertyName, value) {
    this.t1w().a(new StylePropertyDeclaration(propertyName, value));
  };
  StyleScopeBuilder.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.t1w(), other.t1w()) ? nativeEquals(this.u1w(), other.u1w()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  StyleScopeBuilder.$metadata$ = classMeta('StyleScopeBuilder', [StyleScope, StyleHolder]);
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.h() === properties.h()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$1;
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.i(tmp0);
        tmp$ret$1 = element.c1y_1 === otherProp.c1y_1 ? toString_0(element.d1y_1) === toString_0(otherProp.d1y_1) : false;
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function sam$kotlin_properties_ReadOnlyProperty$0(function_0) {
    this.f1y_1 = function_0;
  }
  sam$kotlin_properties_ReadOnlyProperty$0.prototype.h4 = function (thisRef, property) {
    return this.f1y_1(thisRef, property);
  };
  sam$kotlin_properties_ReadOnlyProperty$0.$metadata$ = classMeta('sam$kotlin_properties_ReadOnlyProperty$0', [ReadOnlyProperty]);
  function StyleSheet$CSSHolder$provideDelegate$selector$1($className) {
    this.h1y_1 = $className;
    CSSSelector.call(this);
  }
  StyleSheet$CSSHolder$provideDelegate$selector$1.prototype.v1x = function () {
    return '.' + this.h1y_1;
  };
  StyleSheet$CSSHolder$provideDelegate$selector$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, CSSSelector.prototype);
  function StyleSheet$CSSHolder$provideDelegate$lambda($className) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return $className;
    };
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      rulesHolder = new CSSRulesHolderState();
    if (!(($mask0 & 2) === 0))
      usePrefix = true;
    StyleSheet.call($this, rulesHolder, usePrefix);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix, $mask0, $marker) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, $mask0, $marker, Object.create(StyleSheet.prototype));
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.i1y_1 = 0;
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function CSSSelfSelector(selector) {
    CSSSelector.call(this);
    this.k1y_1 = selector;
  }
  CSSSelfSelector.prototype.toString = function () {
    throw IllegalStateException_init_$Create$("You can't concatenate `String + CSSSelector` which contains `self` or `root`. Use `selector(<your string>)` to convert `String` to `CSSSelector` for proper work. https://github.com/JetBrains/compose-jb/issues/1440");
  };
  CSSSelfSelector.prototype.v1x = function () {
    var tmp0_safe_receiver = this.k1y_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1x();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("You can't instantiate self");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  CSSSelfSelector.prototype.equals = function (other) {
    return other instanceof CSSSelfSelector;
  };
  CSSSelfSelector.$metadata$ = classMeta('CSSSelfSelector', undefined, undefined, undefined, undefined, CSSSelector.prototype);
  function CSSHolder(usePrefix, cssBuilder) {
    this.l1y_1 = usePrefix;
    this.m1y_1 = cssBuilder;
  }
  CSSHolder.prototype.n1y = function (sheet, property) {
    var sheetName = this.l1y_1 ? '' + getKClassFromExpression(sheet).b9() + '-' : '';
    var className = sheetName + property.callableName;
    var selector = new StyleSheet$CSSHolder$provideDelegate$selector$1(className);
    var tmp0_container = buildCSS(selector, selector, this.m1y_1);
    var properties = tmp0_container.i5();
    var rules = tmp0_container.j5();
    sheet.h1w(selector, properties);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = rules.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.css.CSSHolder.provideDelegate.<anonymous>' call
      sheet.g1w(element);
    }
    var tmp = StyleSheet$CSSHolder$provideDelegate$lambda(className);
    return new sam$kotlin_properties_ReadOnlyProperty$0(tmp);
  };
  CSSHolder.$metadata$ = classMeta('CSSHolder');
  function StyleSheet(rulesHolder, usePrefix) {
    Companion_getInstance_7();
    this.o1y_1 = rulesHolder;
    this.p1y_1 = usePrefix;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.q1y_1 = tmp$ret$0;
    this.r1y_1 = 0;
  }
  StyleSheet.prototype.f1w = function () {
    return this.o1y_1.f1w();
  };
  StyleSheet.prototype.g1w = function (cssRule) {
    this.o1y_1.g1w(cssRule);
  };
  StyleSheet.prototype.h1w = function (selector, style) {
    this.o1y_1.h1w(selector, style);
  };
  StyleSheet.prototype.s1y = function (cssRule) {
    return new CSSHolder(this.p1y_1, cssRule);
  };
  StyleSheet.prototype.t1y = function (rulesBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StyleSheet_init_$Create$(null, false, 3, null);
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.f1w();
  };
  StyleSheet.prototype.o1w = function (rulesBuild) {
    return this.t1y(rulesBuild);
  };
  StyleSheet.prototype.m1w = function (selector, cssRule) {
    return this.u1y(selector, cssRule);
  };
  StyleSheet.$metadata$ = classMeta('StyleSheet', [StyleSheetBuilder, CSSRulesHolder]);
  function Style$composable(styleSheet, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(-168645675);
    sourceInformation($composer_0, 'CC(Style$composable)');
    Style$composable_0(null, styleSheet.f1w(), $composer_0, 0, 1);
    $composer_0.rr();
  }
  function CSSRulesHolderState() {
    this.v1y_1 = mutableStateListOf();
    this.w1y_1 = 0;
  }
  CSSRulesHolderState.prototype.f1w = function () {
    return this.v1y_1;
  };
  CSSRulesHolderState.prototype.g1w = function (cssRule) {
    this.v1y_1.d15(cssRule);
  };
  CSSRulesHolderState.$metadata$ = classMeta('CSSRulesHolderState', [CSSRulesHolder]);
  function buildCSS(thisClass, thisContext, cssRule) {
    var styleSheet = new StyleSheetBuilderImpl();
    var tmp0_elvis_lhs = thisClass instanceof CSSSelfSelector ? thisClass : null;
    var root = tmp0_elvis_lhs == null ? new CSSSelfSelector(thisClass) : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = thisContext instanceof CSSSelfSelector ? thisContext : null;
    var self_0 = tmp1_elvis_lhs == null ? new CSSSelfSelector(thisContext) : tmp1_elvis_lhs;
    var builder = new CSSBuilderImpl(root, self_0, styleSheet);
    cssRule(builder);
    return to(builder, styleSheet.f1w());
  }
  function get_Universal() {
    init_properties_StyleSheetBuilder_kt_hdubw9();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.a1z_1 = selector;
  }
  RawSelector.prototype.toString = function () {
    return this.a1z_1;
  };
  RawSelector.prototype.hashCode = function () {
    return getStringHashCode(this.a1z_1);
  };
  RawSelector.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.a1z_1 === tmp0_other_with_cast.a1z_1))
      return false;
    return true;
  };
  RawSelector.$metadata$ = classMeta('RawSelector', undefined, undefined, undefined, undefined, CSSSelector.prototype);
  function SelectorsScope() {
  }
  SelectorsScope.$metadata$ = interfaceMeta('SelectorsScope');
  function Descendant(parent, selected) {
    CSSSelector.call(this);
    this.d1z_1 = parent;
    this.e1z_1 = selected;
  }
  Descendant.prototype.l1w = function (other) {
    return this.f1z(this, other, listOf([this.d1z_1, this.e1z_1]));
  };
  Descendant.prototype.toString = function () {
    return '' + this.d1z_1 + ' ' + this.e1z_1;
  };
  Descendant.prototype.v1x = function () {
    return this.d1z_1.v1x() + ' ' + this.e1z_1.v1x();
  };
  Descendant.prototype.hashCode = function () {
    var result = hashCode(this.d1z_1);
    result = imul(result, 31) + hashCode(this.e1z_1) | 0;
    return result;
  };
  Descendant.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Descendant))
      return false;
    var tmp0_other_with_cast = other instanceof Descendant ? other : THROW_CCE();
    if (!equals(this.d1z_1, tmp0_other_with_cast.d1z_1))
      return false;
    if (!equals(this.e1z_1, tmp0_other_with_cast.e1z_1))
      return false;
    return true;
  };
  Descendant.$metadata$ = classMeta('Descendant', undefined, undefined, undefined, undefined, CSSSelector.prototype);
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.h1z_1 = name;
  }
  PseudoClassInternal.prototype.equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.h1z_1 === other.h1z_1 ? this.i1z() == other.i1z() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  PseudoClassInternal.prototype.i1z = function () {
    return null;
  };
  PseudoClassInternal.prototype.toString = function () {
    var tmp0_safe_receiver = this.i1z();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp$ret$0 = '(' + tmp0_safe_receiver + ')';
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.h1z_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  PseudoClassInternal.$metadata$ = classMeta('PseudoClassInternal', undefined, undefined, undefined, undefined, CSSSelector.prototype);
  function GenericStyleSheetBuilder() {
  }
  GenericStyleSheetBuilder.$metadata$ = interfaceMeta('GenericStyleSheetBuilder', [CSSRulesHolder, SelectorsScope]);
  function StyleSheetBuilder() {
  }
  StyleSheetBuilder.$metadata$ = interfaceMeta('StyleSheetBuilder', [CSSRulesHolder, GenericStyleSheetBuilder]);
  function CSSRulesHolder() {
  }
  CSSRulesHolder.$metadata$ = interfaceMeta('CSSRulesHolder');
  function StyleSheetBuilderImpl() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.x1y_1 = tmp$ret$0;
    this.y1y_1 = 8;
  }
  StyleSheetBuilderImpl.prototype.f1w = function () {
    return this.x1y_1;
  };
  StyleSheetBuilderImpl.prototype.g1w = function (cssRule) {
    this.f1w().a(cssRule);
  };
  StyleSheetBuilderImpl.prototype.t1y = function (rulesBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new StyleSheetBuilderImpl();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.f1w();
  };
  StyleSheetBuilderImpl.prototype.o1w = function (rulesBuild) {
    return this.t1y(rulesBuild);
  };
  StyleSheetBuilderImpl.prototype.m1w = function (selector, cssRule) {
    return this.u1y(selector, cssRule);
  };
  StyleSheetBuilderImpl.$metadata$ = classMeta('StyleSheetBuilderImpl', [StyleSheetBuilder]);
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function init_properties_StyleSheetBuilder_kt_hdubw9() {
    if (properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
    } else {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('background-color', value);
  }
  function backgroundImage(_this__u8e3s4, value) {
    _this__u8e3s4.w1v('background-image', value);
  }
  function border(_this__u8e3s4, width, style, color) {
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function border_0(_this__u8e3s4, borderBuild) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    _this__u8e3s4.s1w('border', tmp$ret$0);
  }
  function CSSBorder() {
    this.j1z_1 = null;
    this.k1z_1 = null;
    this.l1z_1 = null;
    this.m1z_1 = 8;
  }
  CSSBorder.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.j1z_1, other.j1z_1) ? equals(this.k1z_1, other.k1z_1) : false) ? equals(this.l1z_1, other.l1z_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  CSSBorder.prototype.toString = function () {
    var values = listOfNotNull([this.j1z_1, this.k1z_1, this.l1z_1]);
    return joinToString$default(values, ' ', null, null, 0, null, null, 62, null);
  };
  CSSBorder.$metadata$ = classMeta('CSSBorder');
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.j1z_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.k1z_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.l1z_1 = color;
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
        tmp$ret$2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('height', value);
  }
  function maxHeight(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('max-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.w1v('box-sizing', value);
  }
  function outline(_this__u8e3s4, style) {
    _this__u8e3s4.w1v('outline', style);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = flexDirection;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.w1v('flex-direction', tmp$ret$2);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = justifyContent;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.w1v('justify-content', tmp$ret$2);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = alignItems;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.w1v('align-items', tmp$ret$2);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.w1v('margin', joinToString$default_0(value, ' ', null, null, 0, null, null, 62, null));
  }
  function marginLeft(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('margin-left', value);
  }
  function marginTop(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('margin-top', value);
  }
  function marginBottom(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('margin-bottom', value);
  }
  function paddingTop(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('padding-top', value);
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.w1v('padding', joinToString$default_0(value, ' ', null, null, 0, null, null, 62, null));
  }
  function paddingLeft(_this__u8e3s4, value) {
    _this__u8e3s4.s1w('padding-left', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.value' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = displayStyle;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    _this__u8e3s4.w1v('display', tmp$ret$2);
  }
  function fontStyle(_this__u8e3s4, value) {
    _this__u8e3s4.w1v('font-style', value);
  }
  function CSSSelector() {
    this.k1w_1 = 0;
  }
  CSSSelector.prototype.l1w = function (other) {
    return this === other;
  };
  CSSSelector.prototype.f1z = function (that, other, children) {
    var tmp;
    if (that === other) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(children, Collection)) {
          tmp_0 = children.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = children.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$1;
          // Inline function 'org.jetbrains.compose.web.css.selectors.CSSSelector.contains.<anonymous>' call
          tmp$ret$1 = element.l1w(other);
          if (tmp$ret$1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  CSSSelector.prototype.v1x = function () {
    return toString_0(this);
  };
  CSSSelector.$metadata$ = classMeta('CSSSelector');
  function TagElement$composable(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1594897193);
    sourceInformation($composer_0, 'C(TagElement$composable)P(2)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1594897193, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement$composable (Base.kt:106)');
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
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
        tmp$ret$0 = new ElementScopeImpl();
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
      var scope = tmp$ret$4;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode$composable' call
      var tmp1_ComposeDomNode$composable = $composer_0;
      var $composer_2 = tmp1_ComposeDomNode$composable;
      $composer_2.px();
      if ($composer_2.u12()) {
        var tmp_1 = $composer_2;
        tmp_1.x12(TagElement$composable$lambda(elementBuilder, scope));
      } else {
        $composer_2.z12();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var tmp3__anonymous__ufb84q = $composer_2;
      var tmp4__anonymous__pkmkx7 = 0;
      var $composer_3 = tmp3__anonymous__ufb84q;
      $composer_3.nr(-1674465861);
      var $dirty_0 = tmp4__anonymous__pkmkx7;
      if ((tmp4__anonymous__pkmkx7 & 14) === 0)
        $dirty_0 = $dirty_0 | ($composer_3.sr(_SkippableUpdater___get_composer__impl__6t7yne(tmp2__anonymous__z9zvc9)) ? 4 : 2);
      if (!(($dirty_0 & 91) === 18) ? true : !$composer_3.h12()) {
        var attrsScope = AttrsScopeBuilder_init_$Create$(null, 1, null);
        var tmp0_safe_receiver = applyAttrs;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(attrsScope);
        refEffect = attrsScope.i1t_1;
        // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
        _SkippableUpdater___get_composer__impl__6t7yne(tmp2__anonymous__z9zvc9).nr(509942095);
        // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne(tmp2__anonymous__z9zvc9));
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, attrsScope.j1t_1, DomElementWrapper$updateClasses$ref());
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, attrsScope.g1t_1, DomElementWrapper$updateStyleDeclarations$ref());
        var tmp_2 = attrsScope.t1t();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_2, DomElementWrapper$updateAttrs$ref());
        var tmp_3 = attrsScope.e1t_1.l1v();
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, tmp_3, DomElementWrapper$updateEventListeners$ref());
        Updater__set_impl_v7kwss(tmp0__anonymous__q1qw7t, attrsScope.h1t_1, DomElementWrapper$updateProperties$ref());
        _SkippableUpdater___get_composer__impl__6t7yne(tmp2__anonymous__z9zvc9).rr();
      } else {
        $composer_3.mx();
      }
      $composer_3.rr();
      $composer_2.nr(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var tmp5__anonymous__kpxxpo = $composer_2;
      var tmp6__anonymous__fv9ai5 = 8;
      var $composer_4 = tmp5__anonymous__kpxxpo;
      $composer_4.nr(-573984490);
      var $dirty_1 = tmp6__anonymous__fv9ai5;
      if ((tmp6__anonymous__fv9ai5 & 14) === 0)
        $dirty_1 = $dirty_1 | ($composer_4.sr(scope) ? 4 : 2);
      if (!(($dirty_1 & 91) === 18) ? true : !$composer_4.h12()) {
        var tmp0_safe_receiver_0 = content;
        $composer_0.nr(-1128047990);
        var tmp0_group = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0(scope, $composer_4, 14 & $dirty_1 | 112 & $dirty >> 3);
        $composer_0.rr();
      } else {
        $composer_4.mx();
      }
      $composer_4.rr();
      $composer_2.rr();
      $composer_2.a13();
      var tmp0_safe_receiver_1 = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver_1 == null) {
        tmp_4 = null;
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect$composable(null, TagElement$composable$lambda_0(tmp0_safe_receiver_1, scope), $composer_0, 6);
        tmp$ret$5 = Unit_getInstance();
        tmp_4 = Unit_getInstance();
      }
      var tmp0_group_0 = tmp_4;
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
      tmp1_safe_receiver.q14(TagElement$composable$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function ComposeDomNode$composable(factory, elementScope, attrsSkippableUpdate, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.px();
    if ($composer_0.u12()) {
      var tmp = $composer_0;
      tmp.x12(ComposeDomNode$composable$lambda(factory));
    } else {
      $composer_0.z12();
    }
    attrsSkippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_0)), $composer_0, 112 & $changed >> 3);
    $composer_0.nr(2058660585);
    content(elementScope, $composer_0, 8 & $changed >> 3 | 14 & $changed >> 3 | 112 & $changed >> 6);
    $composer_0.rr();
    $composer_0.a13();
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.p1z_1 = node;
    this.q1z_1 = emptyList();
  }
  DomElementWrapper.prototype.u1k = function () {
    return this.p1z_1;
  };
  DomElementWrapper.prototype.r1z = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.q1z_1;
    var tmp0_iterator = tmp0_forEach.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.p1z_1.removeEventListener(element.s1r(), element);
    }
    this.q1z_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.q1z_1;
    var tmp0_iterator_0 = tmp1_forEach.e();
    while (tmp0_iterator_0.f()) {
      var element_0 = tmp0_iterator_0.g();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.p1z_1.addEventListener(element_0.s1r(), element_0);
    }
  };
  DomElementWrapper.prototype.s1z = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.i5();
      var item = element.j5();
      applicator(this.p1z_1, item);
    }
  };
  DomElementWrapper.prototype.t1z = function (styleApplier) {
    var tmp0_subject = this.p1z_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.p1z_1.removeAttribute('style');
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.p1z_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      var style = tmp$ret$1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = styleApplier.t1w();
      var tmp0_iterator = tmp1_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.i5();
        var value = element.j5();
        style.setProperty(name, toString_0(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp2_forEach = styleApplier.u1w();
      var tmp0_iterator_0 = tmp2_forEach.e();
      while (tmp0_iterator_0.f()) {
        var element_0 = tmp0_iterator_0.g();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.i5();
        var value_0 = element_0.j5();
        style.setProperty(name_0, toString_0(value_0));
      }
    }
  };
  DomElementWrapper.prototype.u1z = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.p1z_1.getAttributeNames();
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      var tmp0_subject = element;
      switch (tmp0_subject) {
        case 'style':
        case 'class':
          break;
        default:
          this.p1z_1.removeAttribute(element);
          ;
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = attrs.u().e();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.f()) {
      var element_0 = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.p1z_1.setAttribute(element_0.x1(), element_0.z1());
    }
  };
  DomElementWrapper.prototype.v1z = function (classes) {
    this.p1z_1.removeAttribute('class');
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !classes.j();
    if (tmp$ret$0) {
      var tmp = this.p1z_1.classList;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  DomElementWrapper.$metadata$ = classMeta('DomElementWrapper', undefined, undefined, undefined, undefined, DomNodeWrapper.prototype);
  function TagElement$composable$lambda($elementBuilder, $scope) {
    return function () {
      var tmp$ret$0;
      // Inline function 'org.jetbrains.compose.web.dom.TagElement$composable.<anonymous>' call
      var node = $elementBuilder.n1e();
      $scope.z1z(node);
      tmp$ret$0 = new DomElementWrapper(node);
      return tmp$ret$0;
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.v1z(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.t1z(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.u1z(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.r1z(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.s1z(p1);
      return Unit_getInstance();
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$composable$lambda_0($tmp0_safe_receiver, $scope) {
    return function ($this$DisposableEffect) {
      return $tmp0_safe_receiver($this$DisposableEffect, $scope.a20());
    };
  }
  function TagElement$composable$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement$composable($elementBuilder, $applyAttrs, $content, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposeDomNode$composable$lambda($factory) {
    return function () {
      return $factory();
    };
  }
  function ElementScope() {
  }
  ElementScope.$metadata$ = interfaceMeta('ElementScope', [DOMScope]);
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
  }
  ElementScopeImpl.prototype.z1z = function (_set____db54di) {
    this.y1z_1 = _set____db54di;
  };
  ElementScopeImpl.prototype.a20 = function () {
    var tmp = this.y1z_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  ElementScopeImpl.prototype.b20 = function (_this__u8e3s4) {
    return this.a20();
  };
  ElementScopeImpl.$metadata$ = classMeta('ElementScopeImpl', undefined, undefined, undefined, undefined, ElementScopeBase.prototype);
  function ElementScopeBase() {
    this.c20_1 = 0;
    this.d20_1 = 8;
  }
  ElementScopeBase.$metadata$ = classMeta('ElementScopeBase', [ElementScope]);
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    init_properties_Elements_kt_bp8qwz();
    return Div;
  }
  var Div;
  function get_A() {
    init_properties_Elements_kt_bp8qwz();
    return A;
  }
  var A;
  var Input;
  var Button;
  function get_H1() {
    init_properties_Elements_kt_bp8qwz();
    return H1;
  }
  var H1;
  function get_H2() {
    init_properties_Elements_kt_bp8qwz();
    return H2;
  }
  var H2;
  function get_H3() {
    init_properties_Elements_kt_bp8qwz();
    return H3;
  }
  var H3;
  function get_H4() {
    init_properties_Elements_kt_bp8qwz();
    return H4;
  }
  var H4;
  function get_H5() {
    init_properties_Elements_kt_bp8qwz();
    return H5;
  }
  var H5;
  function get_H6() {
    init_properties_Elements_kt_bp8qwz();
    return H6;
  }
  var H6;
  function get_P() {
    init_properties_Elements_kt_bp8qwz();
    return P;
  }
  var P;
  var Em;
  var I;
  var B;
  var Small;
  function get_Span() {
    init_properties_Elements_kt_bp8qwz();
    return Span;
  }
  var Span;
  var Br;
  function get_Ul() {
    init_properties_Elements_kt_bp8qwz();
    return Ul;
  }
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    init_properties_Elements_kt_bp8qwz();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  function get_Section() {
    init_properties_Elements_kt_bp8qwz();
    return Section;
  }
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    init_properties_Elements_kt_bp8qwz();
    return Style;
  }
  var Style;
  function ElementBuilder() {
  }
  ElementBuilder.$metadata$ = interfaceMeta('ElementBuilder');
  function _get_el__ndc0ck($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = el$factory();
    tmp$ret$0 = $this.f20_1.z1();
    return tmp$ret$0;
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.e20_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.e20_1 = tagName;
    var tmp = this;
    tmp.f20_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  ElementBuilderImplementation.prototype.n1e = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  ElementBuilderImplementation.$metadata$ = classMeta('ElementBuilderImplementation', [ElementBuilder]);
  function Img$composable(src, alt, attrs, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-878444342);
    sourceInformation($composer_0, 'C(Img$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-878444342, $dirty, -1, 'org.jetbrains.compose.web.dom.Img$composable (Elements.kt:621)');
      }
      var tmp = get_Img();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = alt_0._v;
      var tmp1_remember$composable = attrs_0._v;
      var tmp2_remember$composable = $composer_0;
      var tmp3_remember$composable = 14 & $dirty | 112 & $dirty | 896 & $dirty;
      var $composer_1 = tmp2_remember$composable;
      $composer_1.nr(-1058148781);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!(!!($composer_1.sr(src) | $composer_1.sr(tmp0_remember$composable)) | $composer_1.sr(tmp1_remember$composable));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.Img$composable.<anonymous>' call
        tmp$ret$0 = Img$composable$lambda(src, alt_0, attrs_0);
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
      TagElement$composable(tmp, tmp$ret$4, null, $composer_0, 384);
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
      tmp0_safe_receiver.q14(Img$composable$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Div$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1021009996);
    sourceInformation($composer_0, 'C(Div$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1021009996, $dirty, -1, 'org.jetbrains.compose.web.dom.Div$composable (Elements.kt:489)');
      }
      TagElement$composable(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(Div$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Section$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1563163512);
    sourceInformation($composer_0, 'C(Section$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1563163512, $dirty, -1, 'org.jetbrains.compose.web.dom.Section$composable (Elements.kt:701)');
      }
      TagElement$composable(get_Section(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(Section$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function A$composable(href, attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var href_0 = {_v: href};
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(294823474);
    sourceInformation($composer_0, 'C(A$composable)P(2)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(href_0._v) ? 4 : 2);
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
        href_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 4) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(294823474, $dirty, -1, 'org.jetbrains.compose.web.dom.A$composable (Elements.kt:501)');
      }
      var tmp = get_A();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = href_0._v;
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
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.A$composable.<anonymous>' call
        tmp$ret$0 = A$composable$lambda(href_0, attrs_0);
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
      TagElement$composable(tmp, tmp$ret$4, content_0._v, $composer_0, 896 & $dirty);
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
      tmp0_safe_receiver.q14(A$composable$lambda_0(href_0, attrs_0, content_0, $changed, $default));
    }
  }
  function Text$composable(value, $composer, $changed) {
    init_properties_Elements_kt_bp8qwz();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-363526853);
    sourceInformation($composer_0, 'C(Text$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-363526853, $changed, -1, 'org.jetbrains.compose.web.dom.Text$composable (Elements.kt:479)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode$composable' call
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
        // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
        tmp$ret$0 = Text$composable$lambda;
        var value_0 = tmp$ret$0;
        tmp1_cache.pr(value_0);
        tmp = value_0;
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
      var tmp1_ComposeNode$composable = tmp$ret$4;
      var tmp2_ComposeNode$composable = $composer_0;
      var $composer_2 = tmp2_ComposeNode$composable;
      $composer_2.nr(-1846754774);
      sourceInformation($composer_2, 'C(ComposeNode$composable):Composables.kt#9igjgp');
      var tmp_1 = $composer_2.q12();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_2.px();
      if ($composer_2.u12()) {
        var tmp_2 = $composer_2;
        tmp_2.x12(Text$composable$lambda_0(tmp1_ComposeNode$composable));
      } else {
        $composer_2.z12();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text$composable.<anonymous>' call
      var tmp3__anonymous__ufb84q = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss(tmp3__anonymous__ufb84q, value, Text$composable$lambda_1);
      $composer_2.a13();
      $composer_2.rr();
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
      tmp0_safe_receiver.q14(Text$composable$lambda_2(value, $changed));
    }
  }
  function H1$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-583188148);
    sourceInformation($composer_0, 'C(H1$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-583188148, $dirty, -1, 'org.jetbrains.compose.web.dom.H1$composable (Elements.kt:527)');
      }
      TagElement$composable(get_H1(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(H1$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H4$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1065330793);
    sourceInformation($composer_0, 'C(H4$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1065330793, $dirty, -1, 'org.jetbrains.compose.web.dom.H4$composable (Elements.kt:545)');
      }
      TagElement$composable(get_H4(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(H4$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Style$composable_0(applyAttrs, cssRules, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1688263201);
    sourceInformation($composer_0, 'C(Style$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1688263201, $dirty, -1, 'org.jetbrains.compose.web.dom.Style$composable (Elements.kt:978)');
      }
      var tmp = get_Style();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = applyAttrs_0._v;
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 14 & $dirty;
      var $composer_1 = tmp1_remember$composable;
      $composer_1.nr(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.sr(tmp0_remember$composable);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().qr_1) {
        var tmp$ret$0;
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
        tmp$ret$0 = Style$composable$lambda(applyAttrs_0);
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
      // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 962227798, true, Style$composable$lambda_0(cssRules, $dirty));
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
        // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref(dispatchReceiver);
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
      TagElement$composable(tmp, tmp_2, tmp$ret$11, $composer_0, 384);
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
      tmp0_safe_receiver.q14(Style$composable$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    init_properties_Elements_kt_bp8qwz();
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < tmp0_repeat);
  }
  function Ul$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-114341698);
    sourceInformation($composer_0, 'C(Ul$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-114341698, $dirty, -1, 'org.jetbrains.compose.web.dom.Ul$composable (Elements.kt:603)');
      }
      TagElement$composable(get_Ul(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(Ul$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H2$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1397973931);
    sourceInformation($composer_0, 'C(H2$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1397973931, $dirty, -1, 'org.jetbrains.compose.web.dom.H2$composable (Elements.kt:533)');
      }
      TagElement$composable(get_H2(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(H2$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H3$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-915831286);
    sourceInformation($composer_0, 'C(H3$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-915831286, $dirty, -1, 'org.jetbrains.compose.web.dom.H3$composable (Elements.kt:539)');
      }
      TagElement$composable(get_H3(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(H3$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H5$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1248474424);
    sourceInformation($composer_0, 'C(H5$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1248474424, $dirty, -1, 'org.jetbrains.compose.web.dom.H5$composable (Elements.kt:551)');
      }
      TagElement$composable(get_H5(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(H5$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function H6$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(732687655);
    sourceInformation($composer_0, 'C(H6$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(732687655, $dirty, -1, 'org.jetbrains.compose.web.dom.H6$composable (Elements.kt:557)');
      }
      TagElement$composable(get_H6(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(H6$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function P$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-100692211);
    sourceInformation($composer_0, 'C(P$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-100692211, $dirty, -1, 'org.jetbrains.compose.web.dom.P$composable (Elements.kt:563)');
      }
      TagElement$composable(get_P(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(P$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span$composable(attrs, content, $composer, $changed, $default) {
    init_properties_Elements_kt_bp8qwz();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-155327957);
    sourceInformation($composer_0, 'C(Span$composable)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-155327957, $dirty, -1, 'org.jetbrains.compose.web.dom.Span$composable (Elements.kt:593)');
      }
      TagElement$composable(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.q14(Span$composable$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Img$composable$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function Img$composable$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img$composable($src, $alt._v, $attrs._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Div$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Section$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Section$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function A$composable$lambda($href, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($href._v == null)) {
        href($this$TagElement, $href._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($attrs._v == null)) {
        tmp_0 = $attrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function A$composable$lambda_0($href, $attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      A$composable($href._v, $attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda() {
    init_properties_Elements_kt_bp8qwz();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$composable$lambda_0($tmp1_ComposeNode$composable) {
    return function () {
      return $tmp1_ComposeNode$composable();
    };
  }
  function Text$composable$lambda_1($this$set, value) {
    init_properties_Elements_kt_bp8qwz();
    var tmp = $this$set.u1k();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_getInstance();
  }
  function Text$composable$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text$composable($value, $composer, $$changed | 1);
      return Unit_getInstance();
    };
  }
  function H1$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H1$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function H4$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H4$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Style$composable$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv($cssStylesheet) {
    this.g20_1 = $cssStylesheet;
  }
  _no_name_provided__qut3iv.prototype.sh = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.g20_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function Style$composable$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.b20($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      var tmp0_safe_receiver = cssStylesheet;
      if (tmp0_safe_receiver == null)
        null;
      else {
        setCSSRules(tmp0_safe_receiver, $cssRules);
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(cssStylesheet);
      return tmp$ret$0;
    };
  }
  function Style$composable$lambda_0($cssRules, $$dirty) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.sr($this$TagElement) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $changed, -1, 'org.jetbrains.compose.web.dom.Style$composable.<anonymous> (Elements.kt:989)');
        }
        var tmp_1 = $cssRules.h();
        DisposableEffect$composable_0($cssRules, tmp_1, Style$composable$lambda$lambda($this$TagElement, $cssRules), $composer_0, 14 & $$dirty >> 3);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
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
  function Style$composable$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style$composable_0($applyAttrs._v, $cssRules, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Ul$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Ul$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function H2$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H2$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function H3$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H3$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function H5$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H5$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function H6$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      H6$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function P$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      P$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function Span$composable$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span$composable($attrs._v, $content._v, $composer, $$changed | 1, $$default);
      return Unit_getInstance();
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function init_properties_Elements_kt_bp8qwz() {
    if (properties_initialized_Elements_kt_gtqiqv) {
    } else {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.m1x() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    var tmp0_subject = cssRuleDeclaration;
    if (isInterface(tmp0_subject, CSSStyledRuleDeclaration)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = cssRule;
      tmp$ret$1 = tmp$ret$0;
      var cssStyleRule = tmp$ret$1;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = cssRuleDeclaration.u1x().t1w();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.i5();
        var value = element.j5();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = cssRuleDeclaration.u1x().u1w();
      var tmp0_iterator_0 = tmp1_forEach.e();
      while (tmp0_iterator_0.f()) {
        var element_0 = tmp0_iterator_0.g();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.i5();
        var value_0 = element_0.j5();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(tmp0_subject, CSSGroupingRuleDeclaration)) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = cssRule;
        tmp$ret$3 = tmp$ret$2;
        var cssGroupingRule = tmp$ret$3;
        // Inline function 'kotlin.collections.forEach' call
        var tmp2_forEach = cssRuleDeclaration.l1x();
        var tmp0_iterator_1 = tmp2_forEach.e();
        while (tmp0_iterator_1.f()) {
          var element_1 = tmp0_iterator_1.g();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (tmp0_subject instanceof CSSKeyframesRuleDeclaration) {
          var tmp$ret$5;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$4;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$4 = cssRule;
          tmp$ret$5 = tmp$ret$4;
          var cssGroupingRule_0 = tmp$ret$5;
          // Inline function 'kotlin.collections.forEach' call
          var tmp3_forEach = cssRuleDeclaration.h20_1;
          var tmp0_iterator_2 = tmp3_forEach.e();
          while (tmp0_iterator_2.f()) {
            var element_2 = tmp0_iterator_2.g();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString_0(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString_0(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.m1x() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.m1x() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$0.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticEvent(nativeEvent) {
    this.l20_1 = nativeEvent;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = this.l20_1.target;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp.m20_1 = tmp$ret$1;
    this.n20_1 = this.l20_1.bubbles;
    this.o20_1 = this.l20_1.cancelable;
    this.p20_1 = this.l20_1.composed;
    this.q20_1 = this.l20_1.currentTarget;
    this.r20_1 = this.l20_1.eventPhase;
    this.s20_1 = this.l20_1.defaultPrevented;
    this.t20_1 = this.l20_1.timeStamp;
    this.u20_1 = this.l20_1.type;
    this.v20_1 = this.l20_1.isTrusted;
    this.w20_1 = 0;
  }
  SyntheticEvent.$metadata$ = classMeta('SyntheticEvent');
  function SyntheticMouseEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.j21_1 = nativeEvent;
    this.k21_1 = nativeEvent.altKey;
    this.l21_1 = nativeEvent.button;
    this.m21_1 = nativeEvent.buttons;
    this.n21_1 = nativeEvent.clientX;
    this.o21_1 = nativeEvent.clientY;
    this.p21_1 = nativeEvent.ctrlKey;
    this.q21_1 = nativeEvent.metaKey;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = nativeEvent;
    var tmp_0 = tmp$ret$0.movementX;
    var tmp0_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : null;
    tmp.r21_1 = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = nativeEvent;
    var tmp_2 = tmp$ret$1.movementY;
    var tmp0_elvis_lhs_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : null;
    tmp_1.s21_1 = tmp0_elvis_lhs_0 == null ? 0 : tmp0_elvis_lhs_0;
    this.t21_1 = nativeEvent.offsetX;
    this.u21_1 = nativeEvent.offsetY;
    this.v21_1 = nativeEvent.pageX;
    this.w21_1 = nativeEvent.pageY;
    this.x21_1 = nativeEvent.region;
    this.y21_1 = nativeEvent.relatedTarget;
    this.z21_1 = nativeEvent.screenX;
    this.a22_1 = nativeEvent.screenY;
    this.b22_1 = nativeEvent.shiftKey;
    this.c22_1 = nativeEvent.x;
    this.d22_1 = nativeEvent.y;
    this.e22_1 = 0;
  }
  SyntheticMouseEvent.$metadata$ = classMeta('SyntheticMouseEvent', undefined, undefined, undefined, undefined, SyntheticEvent.prototype);
  //region block: post-declaration
  EventsListenerScopeBuilder.prototype.c1t = onClick;
  EventsListenerScopeBuilder.prototype.d1t = addEventListener;
  StyleScopeBuilder.prototype.w1v = property;
  CSSRuleBuilderImpl.prototype.w1v = property;
  CSSBuilderImpl.prototype.w1v = property;
  CSSBuilderImpl.prototype.v1w = style;
  CSSBuilderImpl.prototype.returnUniversalSelector = returnUniversalSelector;
  CSSBuilderImpl.prototype.j1w = desc;
  CSSBuilderImpl.prototype.returnHoverSelector = returnHoverSelector;
  CSSBuilderImpl.prototype.w1w = get_hover;
  StyleSheet.prototype.u1y = style_0;
  StyleSheet.prototype.v1w = style;
  StyleSheet.prototype.returnUniversalSelector = returnUniversalSelector;
  StyleSheet.prototype.returnHoverSelector = returnHoverSelector;
  StyleSheet.prototype.w1w = get_hover;
  CSSRulesHolderState.prototype.h1w = add;
  StyleSheetBuilderImpl.prototype.u1y = style_0;
  StyleSheetBuilderImpl.prototype.v1w = style;
  StyleSheetBuilderImpl.prototype.h1w = add;
  StyleSheetBuilderImpl.prototype.returnUniversalSelector = returnUniversalSelector;
  StyleSheetBuilderImpl.prototype.returnHoverSelector = returnHoverSelector;
  StyleSheetBuilderImpl.prototype.w1w = get_hover;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = Companion_getInstance_5;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = Companion_getInstance_3;
  _.$_$.f = Companion_getInstance_4;
  _.$_$.g = Color;
  _.$_$.h = style;
  _.$_$.i = get_hover;
  _.$_$.j = returnHoverSelector;
  _.$_$.k = get_universal;
  _.$_$.l = returnUniversalSelector;
  _.$_$.m = style_0;
  _.$_$.n = StyleSheet;
  _.$_$.o = alignItems;
  _.$_$.p = backgroundColor;
  _.$_$.q = backgroundImage;
  _.$_$.r = border;
  _.$_$.s = boxSizing;
  _.$_$.t = display;
  _.$_$.u = flexDirection;
  _.$_$.v = fontStyle;
  _.$_$.w = height;
  _.$_$.x = justifyContent;
  _.$_$.y = marginBottom;
  _.$_$.z = marginLeft;
  _.$_$.a1 = marginTop;
  _.$_$.b1 = margin;
  _.$_$.c1 = maxHeight;
  _.$_$.d1 = mediaMaxWidth;
  _.$_$.e1 = mediaMinWidth;
  _.$_$.f1 = media;
  _.$_$.g1 = outline;
  _.$_$.h1 = paddingLeft;
  _.$_$.i1 = paddingTop;
  _.$_$.j1 = padding;
  _.$_$.k1 = get_percent;
  _.$_$.l1 = get_px;
  _.$_$.m1 = unaryMinus;
  _.$_$.n1 = width_0;
  _.$_$.o1 = A$composable;
  _.$_$.p1 = Div$composable;
  _.$_$.q1 = H1$composable;
  _.$_$.r1 = H2$composable;
  _.$_$.s1 = H3$composable;
  _.$_$.t1 = H4$composable;
  _.$_$.u1 = H5$composable;
  _.$_$.v1 = H6$composable;
  _.$_$.w1 = Img$composable;
  _.$_$.x1 = P$composable;
  _.$_$.y1 = Section$composable;
  _.$_$.z1 = Span$composable;
  _.$_$.a2 = Style$composable_0;
  _.$_$.b2 = Text$composable;
  _.$_$.c2 = Ul$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=web-web-core.js.map
