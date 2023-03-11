(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './web-web-core.js', './kotlin-kotlin-stdlib-js-ir.js', './web-internal-web-core-runtime.js', './androidx-runtime.js', './KMDC-kmdc-list.js', './KMDC-kmdc-typography.js', './KMDC-kmdc-dialog.js', './KMDC-kmdc-card.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./web-web-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./web-internal-web-core-runtime.js'), require('./androidx-runtime.js'), require('./KMDC-kmdc-list.js'), require('./KMDC-kmdc-typography.js'), require('./KMDC-kmdc-dialog.js'), require('./KMDC-kmdc-card.js'));
  else {
    if (typeof this['web-web-core'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'web-web-core' was not found. Please, check whether 'web-web-core' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['web-internal-web-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'web-internal-web-core-runtime' was not found. Please, check whether 'web-internal-web-core-runtime' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['KMDC-kmdc-list'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'KMDC-kmdc-list' was not found. Please, check whether 'KMDC-kmdc-list' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['KMDC-kmdc-typography'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'KMDC-kmdc-typography' was not found. Please, check whether 'KMDC-kmdc-typography' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['KMDC-kmdc-dialog'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'KMDC-kmdc-dialog' was not found. Please, check whether 'KMDC-kmdc-dialog' is loaded prior to 'PortfolioWebsite'.");
    }
    if (typeof this['KMDC-kmdc-card'] === 'undefined') {
      throw new Error("Error loading module 'PortfolioWebsite'. Its dependency 'KMDC-kmdc-card' was not found. Please, check whether 'KMDC-kmdc-card' is loaded prior to 'PortfolioWebsite'.");
    }
    root.PortfolioWebsite = factory(typeof PortfolioWebsite === 'undefined' ? {} : PortfolioWebsite, this['web-web-core'], this['kotlin-kotlin-stdlib-js-ir'], this['web-internal-web-core-runtime'], this['androidx-runtime'], this['KMDC-kmdc-list'], this['KMDC-kmdc-typography'], this['KMDC-kmdc-dialog'], this['KMDC-kmdc-card']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_web_web_core, kotlin_kotlin, kotlin_org_jetbrains_compose_web_internal_web_core_runtime, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_dev_petuska_kmdc_list, kotlin_dev_petuska_kmdc_typography, kotlin_dev_petuska_kmdc_dialog, kotlin_dev_petuska_kmdc_card) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_px = kotlin_org_jetbrains_compose_web_web_core.$_$.l1;
  var margin = kotlin_org_jetbrains_compose_web_web_core.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var mediaMaxWidth = kotlin_org_jetbrains_compose_web_web_core.$_$.d1;
  var media = kotlin_org_jetbrains_compose_web_web_core.$_$.f1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_web_web_core.$_$.c;
  var display = kotlin_org_jetbrains_compose_web_web_core.$_$.t;
  var mediaMinWidth = kotlin_org_jetbrains_compose_web_web_core.$_$.e1;
  var get_percent = kotlin_org_jetbrains_compose_web_web_core.$_$.k1;
  var width = kotlin_org_jetbrains_compose_web_web_core.$_$.n1;
  var height = kotlin_org_jetbrains_compose_web_web_core.$_$.w;
  var Color = kotlin_org_jetbrains_compose_web_web_core.$_$.g;
  var backgroundColor = kotlin_org_jetbrains_compose_web_web_core.$_$.p;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_web_web_core.$_$.d;
  var flexDirection = kotlin_org_jetbrains_compose_web_web_core.$_$.u;
  var marginLeft = kotlin_org_jetbrains_compose_web_web_core.$_$.z;
  var maxHeight = kotlin_org_jetbrains_compose_web_web_core.$_$.c1;
  var paddingTop = kotlin_org_jetbrains_compose_web_web_core.$_$.i1;
  var padding = kotlin_org_jetbrains_compose_web_web_core.$_$.j1;
  var paddingLeft = kotlin_org_jetbrains_compose_web_web_core.$_$.h1;
  var marginTop = kotlin_org_jetbrains_compose_web_web_core.$_$.a1;
  var boxSizing = kotlin_org_jetbrains_compose_web_web_core.$_$.s;
  var StyleSheet = kotlin_org_jetbrains_compose_web_web_core.$_$.n;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_web_web_core.$_$.a;
  var style = kotlin_org_jetbrains_compose_web_web_core.$_$.m;
  var style_0 = kotlin_org_jetbrains_compose_web_web_core.$_$.h;
  var returnUniversalSelector = kotlin_org_jetbrains_compose_web_web_core.$_$.l;
  var get_universal = kotlin_org_jetbrains_compose_web_web_core.$_$.k;
  var returnHoverSelector = kotlin_org_jetbrains_compose_web_web_core.$_$.j;
  var get_hover = kotlin_org_jetbrains_compose_web_web_core.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.k5;
  var KProperty1 = kotlin_kotlin.$_$.s5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a5;
  var renderComposable$composable = kotlin_org_jetbrains_compose_web_internal_web_core_runtime.$_$.e;
  var Comparator = kotlin_kotlin.$_$.x5;
  var classMeta = kotlin_kotlin.$_$.u4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var Style$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.a2;
  var sortedWith = kotlin_kotlin.$_$.q3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var compareValues = kotlin_kotlin.$_$.v3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var Img$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.w1;
  var Div$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.p1;
  var MDCListType_Textual_getInstance = kotlin_dev_petuska_kmdc_list.$_$.b;
  var MDCList$composable = kotlin_dev_petuska_kmdc_list.$_$.a;
  var Section$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.y1;
  var MDCH4$composable = kotlin_dev_petuska_kmdc_typography.$_$.b;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_web_web_core.$_$.e;
  var justifyContent = kotlin_org_jetbrains_compose_web_web_core.$_$.x;
  var fontStyle = kotlin_org_jetbrains_compose_web_web_core.$_$.v;
  var MDCBody1$composable = kotlin_dev_petuska_kmdc_typography.$_$.a;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_web_web_core.$_$.f;
  var border = kotlin_org_jetbrains_compose_web_web_core.$_$.r;
  var unaryMinus = kotlin_org_jetbrains_compose_web_web_core.$_$.m1;
  var checkIndexOverflow = kotlin_kotlin.$_$.u2;
  var outline = kotlin_org_jetbrains_compose_web_web_core.$_$.g1;
  var A$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.o1;
  var drop = kotlin_kotlin.$_$.a3;
  var MDCDialog$composable = kotlin_dev_petuska_kmdc_dialog.$_$.a;
  var onClosed = kotlin_dev_petuska_kmdc_dialog.$_$.b;
  var KMutableProperty0 = kotlin_kotlin.$_$.q5;
  var THROW_ISE = kotlin_kotlin.$_$.f6;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y4;
  var take = kotlin_kotlin.$_$.r3;
  var mutableStateOf$default = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var toMutableStateList = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Text$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.b2;
  var H1$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.q1;
  var H4$composable = kotlin_org_jetbrains_compose_web_web_core.$_$.t1;
  var MDCCardType_Elevated_getInstance = kotlin_dev_petuska_kmdc_card.$_$.b;
  var MDCCard$composable = kotlin_dev_petuska_kmdc_card.$_$.a;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_web_web_core.$_$.b;
  var alignItems = kotlin_org_jetbrains_compose_web_web_core.$_$.o;
  var backgroundImage = kotlin_org_jetbrains_compose_web_web_core.$_$.q;
  var marginBottom = kotlin_org_jetbrains_compose_web_web_core.$_$.y;
  var MDCH5$composable = kotlin_dev_petuska_kmdc_typography.$_$.c;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.b5;
  var listOf = kotlin_kotlin.$_$.l3;
  var listOf_0 = kotlin_kotlin.$_$.k3;
  var Enum = kotlin_kotlin.$_$.y5;
  //endregion
  //region block: pre-declaration
  AppStyle.prototype = Object.create(StyleSheet.prototype);
  AppStyle.prototype.constructor = AppStyle;
  PortfolioData.prototype = Object.create(Enum.prototype);
  PortfolioData.prototype.constructor = PortfolioData;
  //endregion
  function AppStyle$lambda($this$null) {
    margin($this$null, [get_px(0)]);
    return Unit_getInstance();
  }
  function AppStyle$DialogHideOnSmall$delegate$lambda($this$style) {
    var tmp = mediaMaxWidth($this$style, get_px(1200));
    media($this$style, tmp, AppStyle$DialogHideOnSmall$delegate$lambda$lambda($this$style));
    return Unit_getInstance();
  }
  function AppStyle$DialogHideOnSmall$delegate$lambda$lambda$lambda($this$null) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$null, tmp$ret$3);
    return Unit_getInstance();
  }
  function AppStyle$DialogHideOnSmall$delegate$lambda$lambda($this_style) {
    return function ($this$media) {
      var tmp = $this_style.v1v();
      $this$media.v1w(tmp, AppStyle$DialogHideOnSmall$delegate$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function AppStyle$DialogShowOnSmall$delegate$lambda($this$style) {
    var tmp = mediaMinWidth($this$style, get_px(1200));
    media($this$style, tmp, AppStyle$DialogShowOnSmall$delegate$lambda$lambda($this$style));
    return Unit_getInstance();
  }
  function AppStyle$DialogShowOnSmall$delegate$lambda$lambda$lambda($this$null) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    var tmp0__get_None__7x727t = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'none';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$null, tmp$ret$3);
    return Unit_getInstance();
  }
  function AppStyle$DialogShowOnSmall$delegate$lambda$lambda($this_style) {
    return function ($this$media) {
      var tmp = $this_style.v1v();
      $this$media.v1w(tmp, AppStyle$DialogShowOnSmall$delegate$lambda$lambda$lambda);
      return Unit_getInstance();
    };
  }
  function AppStyle$HeaderDarkGray$delegate$lambda($this$style) {
    width($this$style, get_percent(100));
    height($this$style, get_px(80));
    backgroundColor($this$style, Color('#323236'));
    return Unit_getInstance();
  }
  function AppStyle$Logo$delegate$lambda($this$style) {
    width($this$style, get_percent(100));
    return Unit_getInstance();
  }
  function AppStyle$MainIntro$delegate$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    width($this$style, get_percent(100));
    height($this$style, get_px(320));
    backgroundColor($this$style, Color('#99988E'));
    return Unit_getInstance();
  }
  function AppStyle$Photo$delegate$lambda($this$style) {
    marginLeft($this$style, get_percent(10));
    maxHeight($this$style, get_percent(80));
    paddingTop($this$style, get_px(32));
    return Unit_getInstance();
  }
  function AppStyle$TextBoxPadding$delegate$lambda($this$style) {
    padding($this$style, [get_percent(5)]);
    return Unit_getInstance();
  }
  function AppStyle$TextBoxMargin$delegate$lambda($this$style) {
    paddingTop($this$style, get_px(24));
    return Unit_getInstance();
  }
  function AppStyle$CardTitle$delegate$lambda($this$style) {
    paddingTop($this$style, get_px(24));
    paddingLeft($this$style, get_px(24));
    return Unit_getInstance();
  }
  function AppStyle$CardText$delegate$lambda($this$style) {
    paddingLeft($this$style, get_px(24));
    return Unit_getInstance();
  }
  function AppStyle$Icon$delegate$lambda($this$style) {
    marginLeft($this$style, get_percent(5));
    marginTop($this$style, get_percent(5));
    height($this$style, get_px(104));
    width($this$style, get_px(104));
    return Unit_getInstance();
  }
  function AppStyle$Screenshot$delegate$lambda($this$style) {
    height($this$style, get_percent(100));
    padding($this$style, [get_px(24)]);
    return Unit_getInstance();
  }
  function AppStyle$DialogScreenshot$delegate$lambda($this$style) {
    boxSizing($this$style, 'border-box');
    $this$style.w1v('width', 'auto');
    padding($this$style, [get_px(12)]);
    return Unit_getInstance();
  }
  function AppStyle$DialogScreenshotSmall$delegate$lambda($this$style) {
    height($this$style, get_px(160));
    padding($this$style, [get_px(8)]);
    return Unit_getInstance();
  }
  function AppStyle$LinkIcon$delegate$lambda($this$style) {
    width($this$style, get_px(140));
    return Unit_getInstance();
  }
  function AppStyle() {
    AppStyle_instance = this;
    StyleSheet_init_$Init$(null, false, 3, null, this);
    var tmp = this.b1z();
    this.v1w(tmp, AppStyle$lambda);
    var tmp_0 = this;
    tmp_0.d24_1 = this.s1y(AppStyle$DialogHideOnSmall$delegate$lambda).n1y(this, DialogHideOnSmall$factory());
    var tmp_1 = this;
    tmp_1.e24_1 = this.s1y(AppStyle$DialogShowOnSmall$delegate$lambda).n1y(this, DialogShowOnSmall$factory());
    var tmp_2 = this;
    tmp_2.f24_1 = this.s1y(AppStyle$HeaderDarkGray$delegate$lambda).n1y(this, HeaderDarkGray$factory());
    var tmp_3 = this;
    tmp_3.g24_1 = this.s1y(AppStyle$Logo$delegate$lambda).n1y(this, Logo$factory());
    var tmp_4 = this;
    tmp_4.h24_1 = this.s1y(AppStyle$MainIntro$delegate$lambda).n1y(this, MainIntro$factory());
    var tmp_5 = this;
    tmp_5.i24_1 = this.s1y(AppStyle$Photo$delegate$lambda).n1y(this, Photo$factory());
    var tmp_6 = this;
    tmp_6.j24_1 = this.s1y(AppStyle$TextBoxPadding$delegate$lambda).n1y(this, TextBoxPadding$factory());
    var tmp_7 = this;
    tmp_7.k24_1 = this.s1y(AppStyle$TextBoxMargin$delegate$lambda).n1y(this, TextBoxMargin$factory());
    var tmp_8 = this;
    tmp_8.l24_1 = this.s1y(AppStyle$CardTitle$delegate$lambda).n1y(this, CardTitle$factory());
    var tmp_9 = this;
    tmp_9.m24_1 = this.s1y(AppStyle$CardText$delegate$lambda).n1y(this, CardText$factory());
    var tmp_10 = this;
    tmp_10.n24_1 = this.s1y(AppStyle$Icon$delegate$lambda).n1y(this, Icon$factory());
    var tmp_11 = this;
    tmp_11.o24_1 = this.s1y(AppStyle$Screenshot$delegate$lambda).n1y(this, Screenshot$factory());
    var tmp_12 = this;
    tmp_12.p24_1 = this.s1y(AppStyle$DialogScreenshot$delegate$lambda).n1y(this, DialogScreenshot$factory());
    var tmp_13 = this;
    tmp_13.q24_1 = this.s1y(AppStyle$DialogScreenshotSmall$delegate$lambda).n1y(this, DialogScreenshotSmall$factory());
    var tmp_14 = this;
    tmp_14.r24_1 = this.s1y(AppStyle$LinkIcon$delegate$lambda).n1y(this, LinkIcon$factory());
    this.s24_1 = 0;
  }
  AppStyle.prototype.t24 = function () {
    return this.d24_1.h4(this, DialogHideOnSmall$factory_0());
  };
  AppStyle.prototype.u24 = function () {
    return this.e24_1.h4(this, DialogShowOnSmall$factory_0());
  };
  AppStyle.prototype.v24 = function () {
    return this.f24_1.h4(this, HeaderDarkGray$factory_0());
  };
  AppStyle.prototype.w24 = function () {
    return this.g24_1.h4(this, Logo$factory_0());
  };
  AppStyle.prototype.x24 = function () {
    return this.h24_1.h4(this, MainIntro$factory_0());
  };
  AppStyle.prototype.y24 = function () {
    return this.i24_1.h4(this, Photo$factory_0());
  };
  AppStyle.prototype.z24 = function () {
    return this.j24_1.h4(this, TextBoxPadding$factory_0());
  };
  AppStyle.prototype.a25 = function () {
    return this.k24_1.h4(this, TextBoxMargin$factory_0());
  };
  AppStyle.prototype.b25 = function () {
    return this.l24_1.h4(this, CardTitle$factory_0());
  };
  AppStyle.prototype.c25 = function () {
    return this.m24_1.h4(this, CardText$factory_0());
  };
  AppStyle.prototype.d25 = function () {
    return this.n24_1.h4(this, Icon$factory_0());
  };
  AppStyle.prototype.e25 = function () {
    return this.o24_1.h4(this, Screenshot$factory_0());
  };
  AppStyle.prototype.f25 = function () {
    return this.p24_1.h4(this, DialogScreenshot$factory_0());
  };
  AppStyle.prototype.g25 = function () {
    return this.q24_1.h4(this, DialogScreenshotSmall$factory_0());
  };
  AppStyle.prototype.h25 = function () {
    return this.r24_1.h4(this, LinkIcon$factory_0());
  };
  AppStyle.prototype.m1w = function (selector, cssRule) {
    return this.u1y(selector, cssRule);
  };
  AppStyle.$metadata$ = objectMeta('AppStyle', undefined, undefined, undefined, undefined, StyleSheet.prototype);
  var AppStyle_instance;
  function AppStyle_getInstance() {
    if (AppStyle_instance == null)
      new AppStyle();
    return AppStyle_instance;
  }
  function DialogHideOnSmall$factory() {
    return getPropertyCallableRef('DialogHideOnSmall', 1, KProperty1, function (receiver) {
      return receiver.t24();
    }, null);
  }
  function DialogShowOnSmall$factory() {
    return getPropertyCallableRef('DialogShowOnSmall', 1, KProperty1, function (receiver) {
      return receiver.u24();
    }, null);
  }
  function HeaderDarkGray$factory() {
    return getPropertyCallableRef('HeaderDarkGray', 1, KProperty1, function (receiver) {
      return receiver.v24();
    }, null);
  }
  function Logo$factory() {
    return getPropertyCallableRef('Logo', 1, KProperty1, function (receiver) {
      return receiver.w24();
    }, null);
  }
  function MainIntro$factory() {
    return getPropertyCallableRef('MainIntro', 1, KProperty1, function (receiver) {
      return receiver.x24();
    }, null);
  }
  function Photo$factory() {
    return getPropertyCallableRef('Photo', 1, KProperty1, function (receiver) {
      return receiver.y24();
    }, null);
  }
  function TextBoxPadding$factory() {
    return getPropertyCallableRef('TextBoxPadding', 1, KProperty1, function (receiver) {
      return receiver.z24();
    }, null);
  }
  function TextBoxMargin$factory() {
    return getPropertyCallableRef('TextBoxMargin', 1, KProperty1, function (receiver) {
      return receiver.a25();
    }, null);
  }
  function CardTitle$factory() {
    return getPropertyCallableRef('CardTitle', 1, KProperty1, function (receiver) {
      return receiver.b25();
    }, null);
  }
  function CardText$factory() {
    return getPropertyCallableRef('CardText', 1, KProperty1, function (receiver) {
      return receiver.c25();
    }, null);
  }
  function Icon$factory() {
    return getPropertyCallableRef('Icon', 1, KProperty1, function (receiver) {
      return receiver.d25();
    }, null);
  }
  function Screenshot$factory() {
    return getPropertyCallableRef('Screenshot', 1, KProperty1, function (receiver) {
      return receiver.e25();
    }, null);
  }
  function DialogScreenshot$factory() {
    return getPropertyCallableRef('DialogScreenshot', 1, KProperty1, function (receiver) {
      return receiver.f25();
    }, null);
  }
  function DialogScreenshotSmall$factory() {
    return getPropertyCallableRef('DialogScreenshotSmall', 1, KProperty1, function (receiver) {
      return receiver.g25();
    }, null);
  }
  function LinkIcon$factory() {
    return getPropertyCallableRef('LinkIcon', 1, KProperty1, function (receiver) {
      return receiver.h25();
    }, null);
  }
  function DialogHideOnSmall$factory_0() {
    return getPropertyCallableRef('DialogHideOnSmall', 1, KProperty1, function (receiver) {
      return receiver.t24();
    }, null);
  }
  function DialogShowOnSmall$factory_0() {
    return getPropertyCallableRef('DialogShowOnSmall', 1, KProperty1, function (receiver) {
      return receiver.u24();
    }, null);
  }
  function HeaderDarkGray$factory_0() {
    return getPropertyCallableRef('HeaderDarkGray', 1, KProperty1, function (receiver) {
      return receiver.v24();
    }, null);
  }
  function Logo$factory_0() {
    return getPropertyCallableRef('Logo', 1, KProperty1, function (receiver) {
      return receiver.w24();
    }, null);
  }
  function MainIntro$factory_0() {
    return getPropertyCallableRef('MainIntro', 1, KProperty1, function (receiver) {
      return receiver.x24();
    }, null);
  }
  function Photo$factory_0() {
    return getPropertyCallableRef('Photo', 1, KProperty1, function (receiver) {
      return receiver.y24();
    }, null);
  }
  function TextBoxPadding$factory_0() {
    return getPropertyCallableRef('TextBoxPadding', 1, KProperty1, function (receiver) {
      return receiver.z24();
    }, null);
  }
  function TextBoxMargin$factory_0() {
    return getPropertyCallableRef('TextBoxMargin', 1, KProperty1, function (receiver) {
      return receiver.a25();
    }, null);
  }
  function CardTitle$factory_0() {
    return getPropertyCallableRef('CardTitle', 1, KProperty1, function (receiver) {
      return receiver.b25();
    }, null);
  }
  function CardText$factory_0() {
    return getPropertyCallableRef('CardText', 1, KProperty1, function (receiver) {
      return receiver.c25();
    }, null);
  }
  function Icon$factory_0() {
    return getPropertyCallableRef('Icon', 1, KProperty1, function (receiver) {
      return receiver.d25();
    }, null);
  }
  function Screenshot$factory_0() {
    return getPropertyCallableRef('Screenshot', 1, KProperty1, function (receiver) {
      return receiver.e25();
    }, null);
  }
  function DialogScreenshot$factory_0() {
    return getPropertyCallableRef('DialogScreenshot', 1, KProperty1, function (receiver) {
      return receiver.f25();
    }, null);
  }
  function DialogScreenshotSmall$factory_0() {
    return getPropertyCallableRef('DialogScreenshotSmall', 1, KProperty1, function (receiver) {
      return receiver.g25();
    }, null);
  }
  function LinkIcon$factory_0() {
    return getPropertyCallableRef('LinkIcon', 1, KProperty1, function (receiver) {
      return receiver.h25();
    }, null);
  }
  function main() {
    renderComposable$composable('root', ComposableSingletons$MainKt_getInstance().i25_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.j25_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.d = function (a, b) {
    return this.j25_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.d(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($this$renderComposable, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1521502105, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:11)');
      }
      // Inline function 'org.jetbrains.compose.web.css.Style$composable' call
      var tmp0_Style$composable = AppStyle_getInstance();
      var tmp1_Style$composable = $composer_0;
      var $composer_1 = tmp1_Style$composable;
      $composer_1.nr(-168645675);
      sourceInformation($composer_1, 'CC(Style$composable)');
      Style$composable(null, tmp0_Style$composable.f1w(), $composer_1, 0, 1);
      $composer_1.rr();
      Header$composable($composer_0, 0);
      Intro$composable($composer_0, 0);
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_2 = tmp2_remember$composable;
      $composer_2.nr(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$2;
        // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.sortedBy' call
        var tmp0_sortedBy = values();
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.compareBy' call
        var tmp_0 = ComposableSingletons$MainKt$lambda_1$lambda$lambda_xloqma;
        tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
        tmp$ret$1 = sortedWith(tmp0_sortedBy, tmp$ret$0);
        tmp$ret$2 = tmp$ret$1;
        var value = tmp$ret$2;
        tmp1_cache.pr(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      tmp$ret$3 = tmp;
      tmp$ret$4 = tmp$ret$3;
      var tmp_1 = tmp$ret$4;
      tmp$ret$5 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$5;
      $composer_2.rr();
      tmp$ret$6 = tmp0;
      var portfolioList = tmp$ret$6;
      var inductionVariable = 0;
      var last = portfolioList.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_2;
          if (index < 1) {
            tmp_2 = '#99988E';
          } else {
            tmp_2 = portfolioList.i(index - 1 | 0).q25_1;
          }
          var tmp_3 = tmp_2;
          var tmp_4 = portfolioList.i(index).q25_1;
          var tmp$ret$13;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$12;
          // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>' call
          var tmp_5 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_5, 1972599278, true, ComposableSingletons$MainKt$lambda_1$lambda$lambda_xloqma_0(portfolioList, index));
          var tmp$ret$11;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var $composer_3 = tmp0_remember$composable;
          $composer_3.nr(-838505973);
          sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$10;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_0 = $composer_3;
          var tmp2_cache = $composer_3.sr(dispatchReceiver);
          var tmp$ret$9;
          // Inline function 'kotlin.let' call
          var tmp0_let_0 = tmp1_cache_0.or();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$8;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_6;
          if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
            var tmp$ret$7;
            // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$7 = ComposableLambda$invoke$ref_0(dispatchReceiver);
            var value_0 = tmp$ret$7;
            tmp1_cache_0.pr(value_0);
            tmp_6 = value_0;
          } else {
            tmp_6 = tmp0_let_0;
          }
          tmp$ret$8 = tmp_6;
          tmp$ret$9 = tmp$ret$8;
          var tmp_7 = tmp$ret$9;
          tmp$ret$10 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
          var tmp0_0 = tmp$ret$10;
          $composer_3.rr();
          tmp$ret$11 = tmp0_0;
          tmp$ret$12 = tmp$ret$11;
          tmp$ret$13 = tmp$ret$12;
          PortfolioLayout$composable(tmp_3, tmp_4, tmp$ret$13, $composer_0, 384);
        }
         while (inductionVariable <= last);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_1$lambda$lambda_xloqma(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.m25_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.m25_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposableSingletons$MainKt$lambda_1$lambda$lambda_xloqma_0($portfolioList, $index) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1972599278, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous>.<anonymous> (Main.kt:28)');
        }
        PortfolioTile$composable($portfolioList.i($index), $composer_0, 0);
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
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.i25_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1521502105, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  ComposableSingletons$MainKt.$metadata$ = objectMeta('ComposableSingletons$MainKt');
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$DialogComposablesKt$lambda_1$lambda_y8hcok($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-416754308, $changed, -1, 'composables.Dialog.ComposableSingletons$DialogComposablesKt.lambda-1.<anonymous> (DialogComposables.kt:192)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.ComposableSingletons$DialogComposablesKt.lambda-1.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$DialogComposablesKt$lambda_1$lambda$lambda_lyopah;
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
      Img$composable('playIcon.png', null, tmp$ret$4, $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DialogComposablesKt$lambda_1$lambda$lambda_lyopah($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().h25()]);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$DialogComposablesKt$lambda_2$lambda_7z088d($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-742826847, $changed, -1, 'composables.Dialog.ComposableSingletons$DialogComposablesKt.lambda-2.<anonymous> (DialogComposables.kt:205)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.ComposableSingletons$DialogComposablesKt.lambda-2.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$DialogComposablesKt$lambda_2$lambda$lambda_2yvd4o;
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
      Img$composable('gitHubIcon.png', null, tmp$ret$4, $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$DialogComposablesKt$lambda_2$lambda$lambda_2yvd4o($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().h25()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$DialogComposablesKt() {
    ComposableSingletons$DialogComposablesKt_instance = this;
    var tmp = this;
    tmp.v25_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-416754308, false, ComposableSingletons$DialogComposablesKt$lambda_1$lambda_y8hcok));
    var tmp_0 = this;
    tmp_0.w25_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-742826847, false, ComposableSingletons$DialogComposablesKt$lambda_2$lambda_7z088d));
  }
  ComposableSingletons$DialogComposablesKt.prototype.x25 = function () {
    return this.v25_1;
  };
  ComposableSingletons$DialogComposablesKt.prototype.y25 = function () {
    return this.w25_1;
  };
  ComposableSingletons$DialogComposablesKt.$metadata$ = objectMeta('ComposableSingletons$DialogComposablesKt');
  var ComposableSingletons$DialogComposablesKt_instance;
  function ComposableSingletons$DialogComposablesKt_getInstance() {
    if (ComposableSingletons$DialogComposablesKt_instance == null)
      new ComposableSingletons$DialogComposablesKt();
    return ComposableSingletons$DialogComposablesKt_instance;
  }
  function MainImage$composable(img, height, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-890958388);
    sourceInformation($composer_0, 'C(MainImage$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(img) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(height) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-890958388, $dirty, -1, 'composables.Dialog.MainImage$composable (DialogComposables.kt:19)');
      }
      Img$composable(img, null, MainImage$composable$lambda_0(height), $composer_0, 14 & $dirty, 2);
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
      tmp0_safe_receiver.q14(MainImage$composable$lambda$ref(img, height, $changed));
    }
  }
  function Title$composable(icon, name, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(962183118);
    sourceInformation($composer_0, 'C(Title$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(icon) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(name) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(962183118, $dirty, -1, 'composables.Dialog.Title$composable (DialogComposables.kt:32)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.Title$composable.<anonymous>' call
        tmp$ret$0 = Title$composable$lambda_0;
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
      // Inline function 'composables.Dialog.Title$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -829646597, true, Title$composable$lambda_1(icon, $dirty, name));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.Title$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_3(dispatchReceiver);
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
      Div$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(Title$composable$lambda$ref(icon, name, $changed));
    }
  }
  function Texts$composable(shortText, longText, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(468783068);
    sourceInformation($composer_0, 'C(Texts$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(shortText) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(longText) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(468783068, $dirty, -1, 'composables.Dialog.Texts$composable (DialogComposables.kt:54)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.Texts$composable.<anonymous>' call
        tmp$ret$0 = Texts$composable$lambda_0;
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
      // Inline function 'composables.Dialog.Texts$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1267298441, true, Texts$composable$lambda_1(shortText, $dirty, longText));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.Texts$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_4(dispatchReceiver);
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
      Div$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(Texts$composable$lambda$ref(shortText, longText, $changed));
    }
  }
  function Techs$composable(techs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1120665904);
    sourceInformation($composer_0, 'C(Techs$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(techs) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1120665904, $changed, -1, 'composables.Dialog.Techs$composable (DialogComposables.kt:82)');
      }
      var tmp = MDCListType_Textual_getInstance();
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.Techs$composable.<anonymous>' call
        tmp$ret$0 = Techs$composable$lambda_0;
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
      // Inline function 'composables.Dialog.Techs$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1126086012, true, Techs$composable$lambda_1(techs));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.Techs$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_5(dispatchReceiver);
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
      MDCList$composable(tmp, null, null, false, false, tmp_2, tmp$ret$11, $composer_0, 1572870, 30);
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
      tmp0_safe_receiver.q14(Techs$composable$lambda$ref(techs, $changed));
    }
  }
  function SmallTechs$composable(techs, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-530261787);
    sourceInformation($composer_0, 'C(SmallTechs$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(techs) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-530261787, $changed, -1, 'composables.Dialog.SmallTechs$composable (DialogComposables.kt:111)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>' call
        tmp$ret$0 = SmallTechs$composable$lambda_0;
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
      // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1412756253, true, SmallTechs$composable$lambda_1(techs));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_8(dispatchReceiver);
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
      Section$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(SmallTechs$composable$lambda$ref(techs, $changed));
    }
  }
  function LinkButtons$composable(links, column, $composer, $changed, $default) {
    var column_0 = {_v: column};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1185986363);
    sourceInformation($composer_0, 'C(LinkButtons$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(links) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.c13(column_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (!(($default & 2) === 0)) {
        column_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(1185986363, $dirty, -1, 'composables.Dialog.LinkButtons$composable (DialogComposables.kt:167)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = column_0._v;
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 14 & $dirty >> 3;
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
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.LinkButtons$composable.<anonymous>' call
        tmp$ret$0 = LinkButtons$composable$lambda_0(column_0);
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
      // Inline function 'composables.Dialog.LinkButtons$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1504093517, true, LinkButtons$composable$lambda_1(links));
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
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.LinkButtons$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_9(dispatchReceiver);
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
      Div$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(LinkButtons$composable$lambda$ref(links, column_0, $changed, $default));
    }
  }
  function SmallImages$composable(imgs, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-981668936);
    sourceInformation($composer_0, 'C(SmallImages$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(imgs) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(onClick) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-981668936, $dirty, -1, 'composables.Dialog.SmallImages$composable (DialogComposables.kt:217)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.SmallImages$composable.<anonymous>' call
        tmp$ret$0 = SmallImages$composable$lambda_0;
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
      // Inline function 'composables.Dialog.SmallImages$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -1108475471, true, SmallImages$composable$lambda_1(imgs, $dirty, onClick));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.SmallImages$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_10(dispatchReceiver);
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
      Div$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(SmallImages$composable$lambda$ref(imgs, onClick, $changed));
    }
  }
  function MainImage$composable$lambda($img, $height, $$changed, $composer, $force) {
    return MainImage$composable($img, $height, $composer, $$changed | 1);
  }
  function Title$composable$lambda($icon, $name, $$changed, $composer, $force) {
    return Title$composable($icon, $name, $composer, $$changed | 1);
  }
  function Texts$composable$lambda($shortText, $longText, $$changed, $composer, $force) {
    return Texts$composable($shortText, $longText, $composer, $$changed | 1);
  }
  function Techs$composable$lambda($techs, $$changed, $composer, $force) {
    return Techs$composable($techs, $composer, $$changed | 1);
  }
  function SmallTechs$composable$lambda($techs, $$changed, $composer, $force) {
    return SmallTechs$composable($techs, $composer, $$changed | 1);
  }
  function LinkButtons$composable$lambda($links, $column, $$changed, $$default, $composer, $force) {
    return LinkButtons$composable($links, $column._v, $composer, $$changed | 1, $$default);
  }
  function SmallImages$composable$lambda($imgs, $onClick, $$changed, $composer, $force) {
    return SmallImages$composable($imgs, $onClick, $composer, $$changed | 1);
  }
  function MainImage$composable$lambda$lambda($height) {
    return function ($this$style) {
      height($this$style, $height);
      return Unit_getInstance();
    };
  }
  function MainImage$composable$lambda_0($height) {
    return function ($this$Img) {
      $this$Img.z1s(MainImage$composable$lambda$lambda($height));
      $this$Img.b1t([AppStyle_getInstance().f25()]);
      return Unit_getInstance();
    };
  }
  function MainImage$composable$lambda$ref($img, $height, $$changed) {
    return function (p0, p1) {
      MainImage$composable$lambda($img, $height, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Title$composable$lambda_0($this$Div) {
    $this$Div.z1s(Title$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function Title$composable$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function Title$composable$lambda$lambda_0($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().d25()]);
    return Unit_getInstance();
  }
  function Title$composable$lambda$lambda_1($this$MDCH4) {
    $this$MDCH4.z1s(Title$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function Title$composable$lambda$lambda$lambda($this$style) {
    padding($this$style, [get_px(36)]);
    return Unit_getInstance();
  }
  function Title$composable$lambda_1($icon, $$dirty, $name) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-829646597, $changed, -1, 'composables.Dialog.Title$composable.<anonymous> (DialogComposables.kt:43)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.Title$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Title$composable$lambda$lambda_0;
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
        Img$composable($icon, null, tmp$ret$4, $composer_0, 14 & $$dirty, 2);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.nr(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.Title$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = Title$composable$lambda$lambda_1;
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = tmp$ret$7;
        tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        MDCH4$composable($name, tmp$ret$9, $composer_0, 14 & $$dirty >> 3, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function Title$composable$lambda$ref($icon, $name, $$changed) {
    return function (p0, p1) {
      Title$composable$lambda($icon, $name, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Texts$composable$lambda_0($this$Div) {
    $this$Div.z1s(Texts$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function Texts$composable$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    paddingTop($this$style, get_px(24));
    var tmp$ret$11;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    var tmp2__get_SpaceBetween__v7m8zx = Companion_getInstance_2();
    var tmp$ret$10;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'space-between';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    justifyContent($this$style, tmp$ret$11);
    return Unit_getInstance();
  }
  function Texts$composable$lambda$lambda_0($this$MDCBody1) {
    $this$MDCBody1.z1s(Texts$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function Texts$composable$lambda$lambda$lambda($this$style) {
    fontStyle($this$style, 'Italic');
    return Unit_getInstance();
  }
  function Texts$composable$lambda$lambda_1($this$MDCBody1) {
    $this$MDCBody1.z1s(Texts$composable$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function Texts$composable$lambda$lambda$lambda_0($this$style) {
    paddingTop($this$style, get_px(24));
    return Unit_getInstance();
  }
  function Texts$composable$lambda_1($shortText, $$dirty, $longText) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1267298441, $changed, -1, 'composables.Dialog.Texts$composable.<anonymous> (DialogComposables.kt:67)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.Texts$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Texts$composable$lambda$lambda_0;
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
        MDCBody1$composable($shortText, tmp$ret$4, $composer_0, 14 & $$dirty, 0);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.nr(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.Texts$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = Texts$composable$lambda$lambda_1;
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = tmp$ret$7;
        tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        MDCBody1$composable($longText, tmp$ret$9, $composer_0, 14 & $$dirty >> 3, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function Texts$composable$lambda$ref($shortText, $longText, $$changed) {
    return function (p0, p1) {
      Texts$composable$lambda($shortText, $longText, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Techs$composable$lambda_0($this$MDCList) {
    $this$MDCList.z1s(Techs$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function Techs$composable$lambda$lambda($this$style) {
    width($this$style, get_percent(20));
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp0__get_Column__6kh1d1 = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'column';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    flexDirection($this$style, tmp$ret$3);
    return Unit_getInstance();
  }
  function Techs$composable$lambda$lambda$lambda($tmp0__anonymous__1nv1x1) {
    return function ($this$style) {
      var tmp = get_px(1);
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Double' call
      var tmp0__get_Double__88j8hs = Companion_getInstance_3();
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'double';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      border($this$style, tmp, tmp$ret$3, Color('#000000'));
      padding($this$style, [get_px(8)]);
      var tmp_0;
      if (!($tmp0__anonymous__1nv1x1 === 0)) {
        marginTop($this$style, unaryMinus(get_px(1)));
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Techs$composable$lambda$lambda_0($tmp0__anonymous__1nv1x1) {
    return function ($this$MDCBody1) {
      $this$MDCBody1.z1s(Techs$composable$lambda$lambda$lambda($tmp0__anonymous__1nv1x1));
      return Unit_getInstance();
    };
  }
  function Techs$composable$lambda_1($techs) {
    return function ($this$MDCList, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1126086012, $changed, -1, 'composables.Dialog.Techs$composable.<anonymous> (DialogComposables.kt:93)');
        }
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = $techs.e();
        while (tmp0_iterator.f()) {
          var item = tmp0_iterator.g();
          // Inline function 'composables.Dialog.Techs$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__anonymous__q1qw7t = checkIndexOverflow(tmp1);
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.nr(-838505973);
          sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp2_cache = $composer_1.sr(tmp0__anonymous__q1qw7t);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.or();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_0;
          if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
            var tmp$ret$0;
            // Inline function 'composables.Dialog.Techs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = Techs$composable$lambda$lambda_0(tmp0__anonymous__q1qw7t);
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
          MDCBody1$composable(item, tmp$ret$4, $composer_0, 0, 0);
        }
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
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function Techs$composable$lambda$ref($techs, $$changed) {
    return function (p0, p1) {
      Techs$composable$lambda($techs, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function SmallTechs$composable$lambda_0($this$Section) {
    $this$Section.z1s(SmallTechs$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function SmallTechs$composable$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function SmallTechs$composable$lambda$lambda_0($this$MDCList) {
    $this$MDCList.z1s(SmallTechs$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function SmallTechs$composable$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp0__get_Column__6kh1d1 = Companion_getInstance_0();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'column';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    flexDirection($this$style, tmp$ret$3);
    return Unit_getInstance();
  }
  function SmallTechs$composable$lambda$lambda$lambda$lambda($index) {
    return function ($this$style) {
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      var tmp0__get_Flex__7sqmag = Companion_getInstance();
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'flex';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      display($this$style, tmp$ret$3);
      var tmp$ret$7;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
      var tmp1__get_Row__r63lke = Companion_getInstance_0();
      var tmp$ret$6;
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'row';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      flexDirection($this$style, tmp$ret$7);
      var tmp;
      if (!($index === 0)) {
        marginTop($this$style, unaryMinus(get_px(1)));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SmallTechs$composable$lambda$lambda$lambda_0($index) {
    return function ($this$Div) {
      $this$Div.z1s(SmallTechs$composable$lambda$lambda$lambda$lambda($index));
      return Unit_getInstance();
    };
  }
  function SmallTechs$composable$lambda$lambda$lambda$lambda$lambda($index) {
    return function ($this$style) {
      var tmp = get_px(1);
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      var tmp0__get_Solid__yuxops = Companion_getInstance_3();
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'solid';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      border($this$style, tmp, tmp$ret$3, Color('#000000'));
      padding($this$style, [get_px(8)]);
      width($this$style, get_percent(20));
      var tmp_0;
      if (!($index === 0)) {
        marginLeft($this$style, unaryMinus(get_px(1)));
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SmallTechs$composable$lambda$lambda$lambda$lambda_0($index) {
    return function ($this$MDCBody1) {
      $this$MDCBody1.z1s(SmallTechs$composable$lambda$lambda$lambda$lambda$lambda($index));
      return Unit_getInstance();
    };
  }
  function SmallTechs$composable$lambda$lambda$lambda_1($columns, $techs, $index) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1527427115, $changed, -1, 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (DialogComposables.kt:142)');
        }
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < $columns)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_0 = $techs.i(imul($index, 3) + index | 0);
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp0_remember$composable = $composer_0;
            var $composer_1 = tmp0_remember$composable;
            $composer_1.nr(-838505973);
            sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache = $composer_1;
            var tmp2_cache = $composer_1.sr(index);
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp1_cache.or();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_1;
            if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
              var tmp$ret$0;
              // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$0 = SmallTechs$composable$lambda$lambda$lambda$lambda_0(index);
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
            MDCBody1$composable(tmp_0, tmp$ret$4, $composer_0, 0, 0);
          }
           while (inductionVariable < $columns);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function SmallTechs$composable$lambda$lambda_1($rows, $techs) {
    return function ($this$MDCList, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1740709180, $changed, -1, 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous> (DialogComposables.kt:131)');
        }
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < $rows)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var columns = ($techs.h() - imul(index, 3) | 0) >= 3 ? 3 : $techs.h() - imul(index, 3) | 0;
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp0_remember$composable = $composer_0;
            var $composer_1 = tmp0_remember$composable;
            $composer_1.nr(-838505973);
            sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache = $composer_1;
            var tmp2_cache = $composer_1.sr(index);
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp1_cache.or();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_0;
            if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
              var tmp$ret$0;
              // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$0 = SmallTechs$composable$lambda$lambda$lambda_0(index);
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
            // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = $composer_0;
            var dispatchReceiver = composableLambda(tmp_3, -1527427115, true, SmallTechs$composable$lambda$lambda$lambda_1(columns, $techs, index));
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
            if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
              var tmp$ret$5;
              // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$5 = ComposableLambda$invoke$ref_6(dispatchReceiver);
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
          }
           while (inductionVariable < $rows);
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
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function SmallTechs$composable$lambda_1($techs) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1412756253, $changed, -1, 'composables.Dialog.SmallTechs$composable.<anonymous> (DialogComposables.kt:121)');
        }
        var rows = ($techs.h() % 3 | 0) === 0 ? $techs.h() / 3 | 0 : ($techs.h() / 3 | 0) + 1 | 0;
        var tmp_0 = MDCListType_Textual_getInstance();
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
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = SmallTechs$composable$lambda$lambda_0;
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
        var tmp_3 = tmp$ret$4;
        var tmp$ret$11;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_4 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_4, -1740709180, true, SmallTechs$composable$lambda$lambda_1(rows, $techs));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.SmallTechs$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_7(dispatchReceiver);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_5;
        tmp$ret$7 = tmp$ret$6;
        var tmp_6 = tmp$ret$7;
        tmp$ret$8 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        MDCList$composable(tmp_0, null, null, false, false, tmp_3, tmp$ret$11, $composer_0, 1572870, 30);
        var tmp_7;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_7 = Unit_getInstance();
        }
        tmp = tmp_7;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function SmallTechs$composable$lambda$ref($techs, $$changed) {
    return function (p0, p1) {
      SmallTechs$composable$lambda($techs, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function LinkButtons$composable$lambda$lambda($column) {
    return function ($this$style) {
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      var tmp0__get_Flex__7sqmag = Companion_getInstance();
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'flex';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      display($this$style, tmp$ret$3);
      var tmp;
      if ($column._v) {
        var tmp$ret$7;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
        var tmp1__get_Column__exgww6 = Companion_getInstance_0();
        var tmp$ret$6;
        // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = 'column';
        tmp$ret$5 = tmp$ret$4;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        flexDirection($this$style, tmp$ret$7);
        tmp = Unit_getInstance();
      } else {
        var tmp$ret$11;
        // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
        var tmp2__get_Row__e55jv7 = Companion_getInstance_0();
        var tmp$ret$10;
        // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
        var tmp$ret$9;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$8;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$8 = 'row';
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        tmp$ret$11 = tmp$ret$10;
        flexDirection($this$style, tmp$ret$11);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function LinkButtons$composable$lambda_0($column) {
    return function ($this$Div) {
      $this$Div.z1s(LinkButtons$composable$lambda$lambda($column));
      return Unit_getInstance();
    };
  }
  function LinkButtons$composable$lambda$lambda_0($this$A) {
    $this$A.z1s(LinkButtons$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function LinkButtons$composable$lambda$lambda$lambda($this$style) {
    outline($this$style, 'none');
    return Unit_getInstance();
  }
  function LinkButtons$composable$lambda$lambda_1($this$A) {
    $this$A.z1s(LinkButtons$composable$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function LinkButtons$composable$lambda$lambda$lambda_0($this$style) {
    outline($this$style, 'none');
    return Unit_getInstance();
  }
  function LinkButtons$composable$lambda_1($links) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1504093517, $changed, -1, 'composables.Dialog.LinkButtons$composable.<anonymous> (DialogComposables.kt:183)');
        }
        $composer_0.nr(-1019840414);
        if (!($links.a26_1 == null)) {
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
          var tmp_0;
          if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
            var tmp$ret$0;
            // Inline function 'composables.Dialog.LinkButtons$composable.<anonymous>.<anonymous>.<anonymous>' call
            tmp$ret$0 = LinkButtons$composable$lambda$lambda_0;
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
          A$composable($links.a26_1, tmp$ret$4, ComposableSingletons$DialogComposablesKt_getInstance().v25_1, $composer_0, 384, 0);
        }
        $composer_0.rr();
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.nr(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.LinkButtons$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = LinkButtons$composable$lambda$lambda_1;
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = tmp$ret$7;
        tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        A$composable($links.z25_1, tmp$ret$9, ComposableSingletons$DialogComposablesKt_getInstance().w25_1, $composer_0, 384, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function LinkButtons$composable$lambda$ref($links, $column, $$changed, $$default) {
    return function (p0, p1) {
      LinkButtons$composable$lambda($links, $column, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function SmallImages$composable$lambda_0($this$Div) {
    $this$Div.z1s(SmallImages$composable$lambda$lambda);
    return Unit_getInstance();
  }
  function SmallImages$composable$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function SmallImages$composable$lambda$lambda$lambda($onClick, $index) {
    return function (it) {
      $onClick($index);
      return Unit_getInstance();
    };
  }
  function SmallImages$composable$lambda$lambda_0($onClick, $index) {
    return function ($this$Img) {
      $this$Img.b1t([AppStyle_getInstance().g25()]);
      $this$Img.c1t(SmallImages$composable$lambda$lambda$lambda($onClick, $index));
      return Unit_getInstance();
    };
  }
  function SmallImages$composable$lambda_1($imgs, $$dirty, $onClick) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1108475471, $changed, -1, 'composables.Dialog.SmallImages$composable.<anonymous> (DialogComposables.kt:228)');
        }
        var inductionVariable = 0;
        var last = $imgs.h() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_0 = $imgs.i(index);
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.remember$composable' call
            var tmp0_remember$composable = $composer_0;
            var tmp1_remember$composable = 14 & $$dirty >> 3;
            var $composer_1 = tmp0_remember$composable;
            $composer_1.nr(-1124426577);
            sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.cache' call
            var tmp1_cache = $composer_1;
            var tmp2_cache = !!($composer_1.sr($onClick) | $composer_1.sr(index));
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = tmp1_cache.or();
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var tmp_1;
            if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
              var tmp$ret$0;
              // Inline function 'composables.Dialog.SmallImages$composable.<anonymous>.<anonymous>.<anonymous>' call
              tmp$ret$0 = SmallImages$composable$lambda$lambda_0($onClick, index);
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
            Img$composable(tmp_0, null, tmp$ret$4, $composer_0, 0, 2);
          }
           while (inductionVariable <= last);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function SmallImages$composable$lambda$ref($imgs, $onClick, $$changed) {
    return function (p0, p1) {
      SmallImages$composable$lambda($imgs, $onClick, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function LongDialog$composable(mainScreenshot, icon, name, shortText, longText, screenshots, links, techs, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1800699177);
    sourceInformation($composer_0, 'C(LongDialog$composable)P(3!1,4,7,2,6!1,8)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(mainScreenshot) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(icon) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(name) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sr(shortText) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.sr(longText) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.sr(screenshots) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.sr(links) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.sr(techs) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.sr(onClick) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1800699177, $dirty, -1, 'composables.Dialog.LongDialog$composable (LongDialog.kt:14)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>' call
        tmp$ret$0 = LongDialog$composable$lambda_0;
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
      // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1011348804, true, LongDialog$composable$lambda_1(mainScreenshot, $dirty, techs, icon, name, shortText, longText, links, screenshots, onClick));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_13(dispatchReceiver);
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
      Section$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(LongDialog$composable$lambda$ref(mainScreenshot, icon, name, shortText, longText, screenshots, links, techs, onClick, $changed));
    }
  }
  function LongDialog$composable$lambda($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $$changed, $composer, $force) {
    return LongDialog$composable($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $composer, $$changed | 1);
  }
  function LongDialog$composable$lambda_0($this$Section) {
    $this$Section.b1t([AppStyle_getInstance().t24()]);
    return Unit_getInstance();
  }
  function LongDialog$composable$lambda$lambda($this$Div) {
    $this$Div.z1s(LongDialog$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function LongDialog$composable$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    var tmp$ret$11;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    var tmp2__get_SpaceBetween__v7m8zx = Companion_getInstance_2();
    var tmp$ret$10;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'space-between';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    justifyContent($this$style, tmp$ret$11);
    return Unit_getInstance();
  }
  function LongDialog$composable$lambda$lambda$lambda_0($this$Div) {
    $this$Div.z1s(LongDialog$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function LongDialog$composable$lambda$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    width($this$style, get_percent(55));
    return Unit_getInstance();
  }
  function LongDialog$composable$lambda$lambda$lambda$lambda_0($onClick) {
    return function (it) {
      $onClick(it + 1 | 0);
      return Unit_getInstance();
    };
  }
  function LongDialog$composable$lambda$lambda$lambda_1($icon, $name, $$dirty, $shortText, $longText, $links, $screenshots, $onClick) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1129569734, $changed, -1, 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous> (LongDialog.kt:50)');
        }
        Title$composable($icon, $name, $composer_0, 14 & $$dirty >> 3 | 112 & $$dirty >> 3);
        Texts$composable($shortText, $longText, $composer_0, 14 & $$dirty >> 9 | 112 & $$dirty >> 9);
        LinkButtons$composable($links, false, $composer_0, 14 & $$dirty >> 18, 2);
        var tmp_0 = drop($screenshots, 1);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 24;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.nr(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.sr($onClick);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = LongDialog$composable$lambda$lambda$lambda$lambda_0($onClick);
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
        SmallImages$composable(tmp_0, tmp$ret$4, $composer_0, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function LongDialog$composable$lambda$lambda_0($mainScreenshot, $$dirty, $techs, $icon, $name, $shortText, $longText, $links, $screenshots, $onClick) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-91101531, $changed, -1, 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous> (LongDialog.kt:36)');
        }
        MainImage$composable($mainScreenshot, get_px(480), $composer_0, 14 & $$dirty);
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = LongDialog$composable$lambda$lambda$lambda_0;
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
        // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 1129569734, true, LongDialog$composable$lambda$lambda$lambda_1($icon, $name, $$dirty, $shortText, $longText, $links, $screenshots, $onClick));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_11(dispatchReceiver);
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
        Techs$composable($techs, $composer_0, 14 & $$dirty >> 21);
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
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function LongDialog$composable$lambda_1($mainScreenshot, $$dirty, $techs, $icon, $name, $shortText, $longText, $links, $screenshots, $onClick) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1011348804, $changed, -1, 'composables.Dialog.LongDialog$composable.<anonymous> (LongDialog.kt:27)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = LongDialog$composable$lambda$lambda;
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
        // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -91101531, true, LongDialog$composable$lambda$lambda_0($mainScreenshot, $$dirty, $techs, $icon, $name, $shortText, $longText, $links, $screenshots, $onClick));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.LongDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_12(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function LongDialog$composable$lambda$ref($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $$changed) {
    return function (p0, p1) {
      LongDialog$composable$lambda($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function PopUpScreen$composable(portfolioData, isDialogOpen, closeDialog, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-732460119);
    sourceInformation($composer_0, 'C(PopUpScreen$composable)P(2,1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(portfolioData) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(isDialogOpen) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(closeDialog) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-732460119, $dirty, -1, 'composables.Dialog.PopUpScreen$composable (PopUpScreen.kt:11)');
      }
      var tmp = isDialogOpen();
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty >> 6;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.nr(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.sr(closeDialog);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>' call
        tmp$ret$0 = PopUpScreen$composable$lambda_0(closeDialog);
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
      // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, 1448667510, true, PopUpScreen$composable$lambda_1(portfolioData));
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
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_14(dispatchReceiver);
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
      MDCDialog$composable(tmp, true, false, null, null, tmp_2, tmp$ret$11, $composer_0, 1572912, 28);
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
      tmp0_safe_receiver.q14(PopUpScreen$composable$lambda$ref(portfolioData, isDialogOpen, closeDialog, $changed));
    }
  }
  function PopUpScreen$composable$lambda($portfolioData, $isDialogOpen, $closeDialog, $$changed, $composer, $force) {
    return PopUpScreen$composable($portfolioData, $isDialogOpen, $closeDialog, $composer, $$changed | 1);
  }
  function PopUpScreen$composable$lambda$lambda($closeDialog) {
    return function (it) {
      $closeDialog(false);
      return Unit_getInstance();
    };
  }
  function PopUpScreen$composable$lambda_0($closeDialog) {
    return function ($this$MDCDialog) {
      onClosed($this$MDCDialog, PopUpScreen$composable$lambda$lambda($closeDialog));
      return Unit_getInstance();
    };
  }
  function invoke$lambda($currentScreenshot$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currentScreenshot', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currentScreenshot$delegate.z1();
    return tmp$ret$0;
  }
  function invoke$lambda_0($currentScreenshot$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('currentScreenshot', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $currentScreenshot$delegate.sn(value);
  }
  function PopUpScreen$composable$lambda$lambda_0($smallScreenshots, $currentScreenshot$delegate) {
    return function (it) {
      invoke$lambda_0($currentScreenshot$delegate, $smallScreenshots.i(it));
      var skip = take($smallScreenshots, it);
      $smallScreenshots.j6(0, it);
      $smallScreenshots.z1e(skip);
      return Unit_getInstance();
    };
  }
  function PopUpScreen$composable$lambda$lambda_1($smallScreenshots, $currentScreenshot$delegate) {
    return function (it) {
      invoke$lambda_0($currentScreenshot$delegate, $smallScreenshots.i(it));
      var skip = take($smallScreenshots, it);
      $smallScreenshots.j6(0, it);
      $smallScreenshots.z1e(skip);
      return Unit_getInstance();
    };
  }
  function PopUpScreen$composable$lambda_1($portfolioData) {
    return function ($this$MDCDialog, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1448667510, $changed, -1, 'composables.Dialog.PopUpScreen$composable.<anonymous> (PopUpScreen.kt:22)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $portfolioData.p25_1.i(0);
          tmp$ret$0 = mutableStateOf$default(tmp_1, null, 2, null);
          var value = tmp$ret$0;
          tmp1_cache.pr(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        tmp$ret$1 = tmp_0;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.rr();
        tmp$ret$4 = tmp0;
        var currentScreenshot$delegate = tmp$ret$4;
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.nr(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_3;
        if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = toMutableStateList($portfolioData.p25_1);
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
        var smallScreenshots = tmp$ret$9;
        var tmp0_mainScreenshot = invoke$lambda(currentScreenshot$delegate);
        var tmp1_icon = $portfolioData.o25_1;
        var tmp2_name = $portfolioData.n25_1;
        var tmp3_shortText = $portfolioData.r25_1;
        var tmp4_longText = $portfolioData.s25_1;
        var tmp5_links = $portfolioData.u25_1;
        var tmp6_techs = $portfolioData.t25_1;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_3 = tmp2_remember$composable;
        $composer_3.nr(-1124426577);
        sourceInformation($composer_3, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp2_cache = !!($composer_3.sr(currentScreenshot$delegate) | $composer_3.sr(smallScreenshots));
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_5;
        if (tmp2_cache ? true : tmp0_let_1 === Companion_getInstance_1().qr_1) {
          var tmp$ret$10;
          // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$10 = PopUpScreen$composable$lambda$lambda_0(smallScreenshots, currentScreenshot$delegate);
          var value_1 = tmp$ret$10;
          tmp1_cache_1.pr(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_5;
        tmp$ret$12 = tmp$ret$11;
        var tmp_6 = tmp$ret$12;
        tmp$ret$13 = (tmp_6 == null ? true : isObject(tmp_6)) ? tmp_6 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.rr();
        tmp$ret$14 = tmp0_1;
        LongDialog$composable(tmp0_mainScreenshot, tmp1_icon, tmp2_name, tmp3_shortText, tmp4_longText, smallScreenshots, tmp5_links, tmp6_techs, tmp$ret$14, $composer_0, 0);
        var tmp7_mainScreenshot = invoke$lambda(currentScreenshot$delegate);
        var tmp8_icon = $portfolioData.o25_1;
        var tmp9_name = $portfolioData.n25_1;
        var tmp10_shortText = $portfolioData.r25_1;
        var tmp11_longText = $portfolioData.s25_1;
        var tmp12_links = $portfolioData.u25_1;
        var tmp13_techs = $portfolioData.t25_1;
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_4 = tmp3_remember$composable;
        $composer_4.nr(-1124426577);
        sourceInformation($composer_4, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp2_cache_0 = !!($composer_4.sr(currentScreenshot$delegate) | $composer_4.sr(smallScreenshots));
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (tmp2_cache_0 ? true : tmp0_let_2 === Companion_getInstance_1().qr_1) {
          var tmp$ret$15;
          // Inline function 'composables.Dialog.PopUpScreen$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$15 = PopUpScreen$composable$lambda$lambda_1(smallScreenshots, currentScreenshot$delegate);
          var value_2 = tmp$ret$15;
          tmp1_cache_2.pr(value_2);
          tmp_7 = value_2;
        } else {
          tmp_7 = tmp0_let_2;
        }
        tmp$ret$16 = tmp_7;
        tmp$ret$17 = tmp$ret$16;
        var tmp_8 = tmp$ret$17;
        tmp$ret$18 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_2 = tmp$ret$18;
        $composer_4.rr();
        tmp$ret$19 = tmp0_2;
        ShortDialog$composable(tmp7_mainScreenshot, tmp8_icon, tmp9_name, tmp10_shortText, tmp11_longText, smallScreenshots, tmp12_links, tmp13_techs, tmp$ret$19, $composer_0, 0);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function PopUpScreen$composable$lambda$ref($portfolioData, $isDialogOpen, $closeDialog, $$changed) {
    return function (p0, p1) {
      PopUpScreen$composable$lambda($portfolioData, $isDialogOpen, $closeDialog, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function ShortDialog$composable(mainScreenshot, icon, name, shortText, longText, screenshots, links, techs, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(1878530459);
    sourceInformation($composer_0, 'C(ShortDialog$composable)P(3!1,4,7,2,6!1,8)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(mainScreenshot) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(icon) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(name) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sr(shortText) ? 2048 : 1024);
    if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.sr(longText) ? 16384 : 8192);
    if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.sr(screenshots) ? 131072 : 65536);
    if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.sr(links) ? 1048576 : 524288);
    if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.sr(techs) ? 8388608 : 4194304);
    if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.sr(onClick) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1878530459, $dirty, -1, 'composables.Dialog.ShortDialog$composable (ShortDialog.kt:11)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>' call
        tmp$ret$0 = ShortDialog$composable$lambda_0;
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
      // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 792834072, true, ShortDialog$composable$lambda_1(techs, $dirty, mainScreenshot, icon, name, shortText, longText, screenshots, onClick, links));
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_2 = tmp0_remember$composable_0;
      $composer_2.nr(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = $composer_2.sr(dispatchReceiver);
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_19(dispatchReceiver);
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
      Section$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(ShortDialog$composable$lambda$ref(mainScreenshot, icon, name, shortText, longText, screenshots, links, techs, onClick, $changed));
    }
  }
  function ShortDialog$composable$lambda($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $$changed, $composer, $force) {
    return ShortDialog$composable($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $composer, $$changed | 1);
  }
  function ShortDialog$composable$lambda_0($this$Section) {
    $this$Section.b1t([AppStyle_getInstance().u24()]);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda($this$Div) {
    $this$Div.z1s(ShortDialog$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda_0($this$Div) {
    $this$Div.z1s(ShortDialog$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    var tmp$ret$11;
    // Inline function 'org.jetbrains.compose.web.css.Companion.SpaceBetween' call
    var tmp2__get_SpaceBetween__v7m8zx = Companion_getInstance_2();
    var tmp$ret$10;
    // Inline function 'org.jetbrains.compose.web.css.JustifyContent' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'space-between';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    justifyContent($this$style, tmp$ret$11);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda$lambda_0($this$Div) {
    $this$Div.z1s(ShortDialog$composable$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda$lambda_1($icon, $name, $$dirty, $shortText, $longText) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1828005701, $changed, -1, 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (ShortDialog.kt:51)');
        }
        Title$composable($icon, $name, $composer_0, 14 & $$dirty >> 3 | 112 & $$dirty >> 3);
        Texts$composable($shortText, $longText, $composer_0, 14 & $$dirty >> 9 | 112 & $$dirty >> 9);
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
  function ComposableLambda$invoke$ref_15($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ShortDialog$composable$lambda$lambda$lambda_1($mainScreenshot, $$dirty, $icon, $name, $shortText, $longText) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1560969190, $changed, -1, 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous> (ShortDialog.kt:42)');
        }
        MainImage$composable($mainScreenshot, get_px(400), $composer_0, 14 & $$dirty);
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ShortDialog$composable$lambda$lambda$lambda$lambda_0;
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
        // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1828005701, true, ShortDialog$composable$lambda$lambda$lambda$lambda_1($icon, $name, $$dirty, $shortText, $longText));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_15(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_16($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ShortDialog$composable$lambda$lambda$lambda_2($this$Div) {
    $this$Div.z1s(ShortDialog$composable$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda$lambda_2($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function ShortDialog$composable$lambda$lambda$lambda$lambda_3($onClick) {
    return function (it) {
      $onClick(it + 1 | 0);
      return Unit_getInstance();
    };
  }
  function ShortDialog$composable$lambda$lambda$lambda_3($screenshots, $$dirty, $onClick, $links) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-293903677, $changed, -1, 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous> (ShortDialog.kt:65)');
        }
        var tmp_0 = drop($screenshots, 1);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var tmp1_remember$composable = 14 & $$dirty >> 24;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.nr(-838505973);
        sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = $composer_1;
        var tmp2_cache = $composer_1.sr($onClick);
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp1_cache.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ShortDialog$composable$lambda$lambda$lambda$lambda_3($onClick);
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
        SmallImages$composable(tmp_0, tmp$ret$4, $composer_0, 0);
        LinkButtons$composable($links, true, $composer_0, 48 | 14 & $$dirty >> 18, 0);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_getInstance();
        }
        tmp = tmp_3;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ShortDialog$composable$lambda$lambda_0($techs, $$dirty, $mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $onClick, $links) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-2099983047, $changed, -1, 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous> (ShortDialog.kt:32)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ShortDialog$composable$lambda$lambda$lambda_0;
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
        // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1560969190, true, ShortDialog$composable$lambda$lambda$lambda_1($mainScreenshot, $$dirty, $icon, $name, $shortText, $longText));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_16(dispatchReceiver);
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
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_3 = tmp1_remember$composable;
        $composer_3.nr(547886695);
        sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let_1 === Companion_getInstance_1().qr_1) {
          var tmp$ret$12;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = ShortDialog$composable$lambda$lambda$lambda_2;
          var value_1 = tmp$ret$12;
          tmp1_cache_1.pr(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_6;
        tmp$ret$14 = tmp$ret$13;
        var tmp_7 = tmp$ret$14;
        tmp$ret$15 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.rr();
        tmp$ret$16 = tmp0_1;
        var tmp_8 = tmp$ret$16;
        var tmp$ret$23;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$22;
        // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_9 = $composer_0;
        var dispatchReceiver_0 = composableLambda(tmp_9, -293903677, true, ShortDialog$composable$lambda$lambda$lambda_3($screenshots, $$dirty, $onClick, $links));
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_1 = $composer_0;
        var $composer_4 = tmp0_remember$composable_1;
        $composer_4.nr(-838505973);
        sourceInformation($composer_4, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp2_cache_0 = $composer_4.sr(dispatchReceiver_0);
        var tmp$ret$19;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_10;
        if (tmp2_cache_0 ? true : tmp0_let_2 === Companion_getInstance_1().qr_1) {
          var tmp$ret$17;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$17 = ComposableLambda$invoke$ref_17(dispatchReceiver_0);
          var value_2 = tmp$ret$17;
          tmp1_cache_2.pr(value_2);
          tmp_10 = value_2;
        } else {
          tmp_10 = tmp0_let_2;
        }
        tmp$ret$18 = tmp_10;
        tmp$ret$19 = tmp$ret$18;
        var tmp_11 = tmp$ret$19;
        tmp$ret$20 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        var tmp0_2 = tmp$ret$20;
        $composer_4.rr();
        tmp$ret$21 = tmp0_2;
        tmp$ret$22 = tmp$ret$21;
        tmp$ret$23 = tmp$ret$22;
        Div$composable(tmp_8, tmp$ret$23, $composer_0, 48, 0);
        SmallTechs$composable($techs, $composer_0, 14 & $$dirty >> 21);
        var tmp_12;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_12 = Unit_getInstance();
        }
        tmp = tmp_12;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ShortDialog$composable$lambda_1($techs, $$dirty, $mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $onClick, $links) {
    return function ($this$Section, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(792834072, $changed, -1, 'composables.Dialog.ShortDialog$composable.<anonymous> (ShortDialog.kt:24)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = ShortDialog$composable$lambda$lambda;
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
        // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -2099983047, true, ShortDialog$composable$lambda$lambda_0($techs, $$dirty, $mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $onClick, $links));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.Dialog.ShortDialog$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_18(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_19($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ShortDialog$composable$lambda$ref($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $$changed) {
    return function (p0, p1) {
      ShortDialog$composable$lambda($mainScreenshot, $icon, $name, $shortText, $longText, $screenshots, $links, $techs, $onClick, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1492108060, $changed, -1, 'composables.ComposableSingletons$HeaderKt.lambda-1.<anonymous> (Header.kt:20)');
      }
      Logo$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_2$lambda_derfuo($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1820828581, $changed, -1, 'composables.ComposableSingletons$HeaderKt.lambda-2.<anonymous> (Header.kt:17)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.ComposableSingletons$HeaderKt.lambda-2.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$HeaderKt$lambda_2$lambda$lambda_8z6ajv;
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
      Div$composable(tmp$ret$4, ComposableSingletons$HeaderKt_getInstance().c26_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt$lambda_2$lambda$lambda_8z6ajv($this$Div) {
    $this$Div.b1t([AppStyle_getInstance().w24()]);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$HeaderKt$lambda_3$lambda_ssq529($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1369460659, $changed, -1, 'composables.ComposableSingletons$HeaderKt.lambda-3.<anonymous> (Header.kt:30)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.ComposableSingletons$HeaderKt.lambda-3.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$HeaderKt$lambda_3$lambda$lambda_xwqcz0;
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
      Img$composable('logo.jpg', null, tmp$ret$4, $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt$lambda_3$lambda$lambda_xwqcz0($this$Img) {
    $this$Img.z1s(ComposableSingletons$HeaderKt$lambda_3$lambda$lambda$lambda_dhx7ep);
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt$lambda_3$lambda$lambda$lambda_dhx7ep($this$style) {
    height($this$style, get_px(80));
    paddingLeft($this$style, get_px(80));
    return Unit_getInstance();
  }
  function ComposableSingletons$HeaderKt() {
    ComposableSingletons$HeaderKt_instance = this;
    var tmp = this;
    tmp.c26_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-1492108060, false, ComposableSingletons$HeaderKt$lambda_1$lambda_fev17j));
    var tmp_0 = this;
    tmp_0.d26_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(1820828581, false, ComposableSingletons$HeaderKt$lambda_2$lambda_derfuo));
    var tmp_1 = this;
    tmp_1.e26_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(1369460659, false, ComposableSingletons$HeaderKt$lambda_3$lambda_ssq529));
  }
  ComposableSingletons$HeaderKt.$metadata$ = objectMeta('ComposableSingletons$HeaderKt');
  var ComposableSingletons$HeaderKt_instance;
  function ComposableSingletons$HeaderKt_getInstance() {
    if (ComposableSingletons$HeaderKt_instance == null)
      new ComposableSingletons$HeaderKt();
    return ComposableSingletons$HeaderKt_instance;
  }
  function Header$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-803989131);
    sourceInformation($composer_0, 'C(Header$composable)');
    if (!($changed === 0) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-803989131, $changed, -1, 'composables.Header$composable (Header.kt:14)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Header$composable.<anonymous>' call
        tmp$ret$0 = Header$composable$lambda_0;
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
      Section$composable(tmp$ret$4, ComposableSingletons$HeaderKt_getInstance().d26_1, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(Header$composable$lambda$ref($changed));
    }
  }
  function Logo$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-802022637);
    if (!($changed === 0) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-802022637, $changed, -1, 'composables.Logo$composable (Header.kt:27)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Logo$composable.<anonymous>' call
        tmp$ret$0 = Logo$composable$lambda_0;
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
      Div$composable(tmp$ret$4, ComposableSingletons$HeaderKt_getInstance().e26_1, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(Logo$composable$lambda$ref($changed));
    }
  }
  function Header$composable$lambda($$changed, $composer, $force) {
    return Header$composable($composer, $$changed | 1);
  }
  function Logo$composable$lambda($$changed, $composer, $force) {
    return Logo$composable($composer, $$changed | 1);
  }
  function Header$composable$lambda_0($this$Section) {
    $this$Section.b1t([AppStyle_getInstance().v24()]);
    return Unit_getInstance();
  }
  function Header$composable$lambda$ref($$changed) {
    return function (p0, p1) {
      Header$composable$lambda($$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Logo$composable$lambda_0($this$Div) {
    return Unit_getInstance();
  }
  function Logo$composable$lambda$ref($$changed) {
    return function (p0, p1) {
      Logo$composable$lambda($$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_1$lambda_sn9q9u($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(913091573, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-1.<anonymous> (Intro.kt:24)');
      }
      Text$composable(IntroDataObject_getInstance().p26_1.h26_1, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_2$lambda_dk7un3($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(2004161772, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-2.<anonymous> (Intro.kt:31)');
      }
      Text$composable(IntroDataObject_getInstance().p26_1.g26_1, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_3$lambda_f9emf4($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1212004424, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-3.<anonymous> (Intro.kt:38)');
      }
      Text$composable(IntroDataObject_getInstance().p26_1.i26_1, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_4$lambda_qy2yht($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-438604136, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-4.<anonymous> (Intro.kt:23)');
      }
      H1$composable(null, ComposableSingletons$IntroKt_getInstance().r26_1, $composer_0, 48, 1);
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$IntroKt$lambda_4$lambda$lambda_yu8f8s;
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
      H1$composable(tmp$ret$4, ComposableSingletons$IntroKt_getInstance().s26_1, $composer_0, 48, 0);
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.nr(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_1;
      if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-4.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableSingletons$IntroKt$lambda_4$lambda$lambda_yu8f8s_0;
        var value_0 = tmp$ret$5;
        tmp1_cache_0.pr(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      var tmp_2 = tmp$ret$7;
      tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.rr();
      tmp$ret$9 = tmp0_0;
      H4$composable(tmp$ret$9, ComposableSingletons$IntroKt_getInstance().t26_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_4$lambda$lambda_yu8f8s($this$H1) {
    $this$H1.b1t([AppStyle_getInstance().a25()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_4$lambda$lambda_yu8f8s_0($this$H4) {
    $this$H4.b1t([AppStyle_getInstance().a25()]);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_5$lambda_1vjike($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1886575299, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-5.<anonymous> (Intro.kt:55)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-5.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$IntroKt$lambda_5$lambda$lambda_b9bkb7;
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
      Img$composable('icLinked.png', null, tmp$ret$4, $composer_0, 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_5$lambda$lambda_b9bkb7($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().h25()]);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_6$lambda_up5zml($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(459571919, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-6.<anonymous> (Intro.kt:47)');
      }
      var tmp = IntroDataObject_getInstance().p26_1.l26_1;
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-6.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$IntroKt$lambda_6$lambda$lambda_do8i3y;
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
      A$composable(tmp, tmp$ret$4, ComposableSingletons$IntroKt_getInstance().v26_1, $composer_0, 384, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_6$lambda$lambda_do8i3y($this$A) {
    $this$A.z1s(ComposableSingletons$IntroKt$lambda_6$lambda$lambda$lambda_oi5fgd);
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_6$lambda$lambda$lambda_oi5fgd($this$style) {
    outline($this$style, 'none');
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function ComposableSingletons$IntroKt$lambda_7$lambda_biblac($this$Section, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1473221017, $changed, -1, 'composables.ComposableSingletons$IntroKt.lambda-7.<anonymous> (Intro.kt:15)');
      }
      var tmp = IntroDataObject_getInstance().p26_1.f26_1;
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-7.<anonymous>.<anonymous>' call
        tmp$ret$0 = ComposableSingletons$IntroKt$lambda_7$lambda$lambda_wfbhg1;
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
      Img$composable(tmp, null, tmp$ret$4, $composer_0, 0, 2);
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.nr(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-7.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableSingletons$IntroKt$lambda_7$lambda$lambda_wfbhg1_0;
        var value_0 = tmp$ret$5;
        tmp1_cache_0.pr(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.rr();
      tmp$ret$9 = tmp0_0;
      Div$composable(tmp$ret$9, ComposableSingletons$IntroKt_getInstance().u26_1, $composer_0, 48, 0);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.nr(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_1().qr_1) {
        var tmp$ret$10;
        // Inline function 'composables.ComposableSingletons$IntroKt.lambda-7.<anonymous>.<anonymous>' call
        tmp$ret$10 = ComposableSingletons$IntroKt$lambda_7$lambda$lambda_wfbhg1_1;
        var value_1 = tmp$ret$10;
        tmp1_cache_1.pr(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.rr();
      tmp$ret$14 = tmp0_1;
      Div$composable(tmp$ret$14, ComposableSingletons$IntroKt_getInstance().w26_1, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_7$lambda$lambda_wfbhg1($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().y24()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_7$lambda$lambda_wfbhg1_0($this$Div) {
    $this$Div.b1t([AppStyle_getInstance().z24()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt$lambda_7$lambda$lambda_wfbhg1_1($this$Div) {
    $this$Div.b1t([AppStyle_getInstance().z24()]);
    return Unit_getInstance();
  }
  function ComposableSingletons$IntroKt() {
    ComposableSingletons$IntroKt_instance = this;
    var tmp = this;
    tmp.r26_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(913091573, false, ComposableSingletons$IntroKt$lambda_1$lambda_sn9q9u));
    var tmp_0 = this;
    tmp_0.s26_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(2004161772, false, ComposableSingletons$IntroKt$lambda_2$lambda_dk7un3));
    var tmp_1 = this;
    tmp_1.t26_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-1212004424, false, ComposableSingletons$IntroKt$lambda_3$lambda_f9emf4));
    var tmp_2 = this;
    tmp_2.u26_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-438604136, false, ComposableSingletons$IntroKt$lambda_4$lambda_qy2yht));
    var tmp_3 = this;
    tmp_3.v26_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1886575299, false, ComposableSingletons$IntroKt$lambda_5$lambda_1vjike));
    var tmp_4 = this;
    tmp_4.w26_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(459571919, false, ComposableSingletons$IntroKt$lambda_6$lambda_up5zml));
    var tmp_5 = this;
    tmp_5.x26_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(1473221017, false, ComposableSingletons$IntroKt$lambda_7$lambda_biblac));
  }
  ComposableSingletons$IntroKt.$metadata$ = objectMeta('ComposableSingletons$IntroKt');
  var ComposableSingletons$IntroKt_instance;
  function ComposableSingletons$IntroKt_getInstance() {
    if (ComposableSingletons$IntroKt_instance == null)
      new ComposableSingletons$IntroKt();
    return ComposableSingletons$IntroKt_instance;
  }
  function Intro$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(35561092);
    sourceInformation($composer_0, 'C(Intro$composable)');
    if (!($changed === 0) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(35561092, $changed, -1, 'composables.Intro$composable (Intro.kt:12)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.Intro$composable.<anonymous>' call
        tmp$ret$0 = Intro$composable$lambda_0;
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
      Section$composable(tmp$ret$4, ComposableSingletons$IntroKt_getInstance().x26_1, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(Intro$composable$lambda$ref($changed));
    }
  }
  function Intro$composable$lambda($$changed, $composer, $force) {
    return Intro$composable($composer, $$changed | 1);
  }
  function Intro$composable$lambda_0($this$Section) {
    $this$Section.b1t([AppStyle_getInstance().x24()]);
    return Unit_getInstance();
  }
  function Intro$composable$lambda$ref($$changed) {
    return function (p0, p1) {
      Intro$composable$lambda($$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function PortfolioLayout$composable(color1, color2, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-116167965);
    sourceInformation($composer_0, 'C(PortfolioLayout$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(color1) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.sr(color2) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sr(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-116167965, $dirty, -1, 'composables.PortfolioLayout$composable (Portfolio.kt:18)');
      }
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var tmp1_remember$composable = 14 & $dirty | 112 & $dirty;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.nr(-1124426577);
      sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = !!($composer_1.sr(color1) | $composer_1.sr(color2));
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.PortfolioLayout$composable.<anonymous>' call
        tmp$ret$0 = PortfolioLayout$composable$lambda_0(color1, color2);
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
      // Inline function 'composables.PortfolioLayout$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 1494387041, true, PortfolioLayout$composable$lambda_1(content, $dirty));
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
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
        var tmp$ret$5;
        // Inline function 'composables.PortfolioLayout$composable.<anonymous>.<anonymous>' call
        tmp$ret$5 = ComposableLambda$invoke$ref_30(dispatchReceiver);
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
      Div$composable(tmp_1, tmp$ret$11, $composer_0, 48, 0);
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
      tmp0_safe_receiver.q14(PortfolioLayout$composable$lambda$ref(color1, color2, content, $changed));
    }
  }
  function PortfolioTile$composable(portfolioData, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-1534297488);
    sourceInformation($composer_0, 'C(PortfolioTile$composable)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.sr(portfolioData) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(-1534297488, $dirty, -1, 'composables.PortfolioTile$composable (Portfolio.kt:41)');
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
      if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
        var tmp$ret$0;
        // Inline function 'composables.PortfolioTile$composable.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
      var clicked$delegate = tmp$ret$4;
      $composer_0.nr(-2093514207);
      if (PortfolioTile$composable$lambda(clicked$delegate)) {
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(clicked$delegate);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>' call
          tmp$ret$5 = PortfolioTile$composable$lambda_2(clicked$delegate);
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_1;
        tmp$ret$7 = tmp$ret$6;
        var tmp_2 = tmp$ret$7;
        tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        var tmp_3 = tmp$ret$9;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_3 = tmp2_remember$composable;
        $composer_3.nr(-838505973);
        sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp2_cache_0 = $composer_3.sr(clicked$delegate);
        var tmp$ret$12;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_1().qr_1) {
          var tmp$ret$10;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>' call
          tmp$ret$10 = PortfolioTile$composable$lambda_3(clicked$delegate);
          var value_1 = tmp$ret$10;
          tmp1_cache_1.pr(value_1);
          tmp_4 = value_1;
        } else {
          tmp_4 = tmp0_let_1;
        }
        tmp$ret$11 = tmp_4;
        tmp$ret$12 = tmp$ret$11;
        var tmp_5 = tmp$ret$12;
        tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_1 = tmp$ret$13;
        $composer_3.rr();
        tmp$ret$14 = tmp0_1;
        PopUpScreen$composable(portfolioData, tmp_3, tmp$ret$14, $composer_0, 14 & $dirty);
      }
      $composer_0.rr();
      var tmp_6 = MDCCardType_Elevated_getInstance();
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.nr(-838505973);
      sourceInformation($composer_4, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$18;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp2_cache_1 = $composer_4.sr(clicked$delegate);
      var tmp$ret$17;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_7;
      if (tmp2_cache_1 ? true : tmp0_let_2 === Companion_getInstance_1().qr_1) {
        var tmp$ret$15;
        // Inline function 'composables.PortfolioTile$composable.<anonymous>' call
        tmp$ret$15 = PortfolioTile$composable$lambda_4(clicked$delegate);
        var value_2 = tmp$ret$15;
        tmp1_cache_2.pr(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = tmp0_let_2;
      }
      tmp$ret$16 = tmp_7;
      tmp$ret$17 = tmp$ret$16;
      var tmp_8 = tmp$ret$17;
      tmp$ret$18 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
      var tmp0_2 = tmp$ret$18;
      $composer_4.rr();
      tmp$ret$19 = tmp0_2;
      var tmp_9 = tmp$ret$19;
      var tmp$ret$26;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$25;
      // Inline function 'composables.PortfolioTile$composable.<anonymous>' call
      var tmp_10 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_10, -346998471, true, PortfolioTile$composable$lambda_5(portfolioData));
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_0;
      var $composer_5 = tmp0_remember$composable_0;
      $composer_5.nr(-838505973);
      sourceInformation($composer_5, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$23;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp2_cache_2 = $composer_5.sr(dispatchReceiver);
      var tmp$ret$22;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.or();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$21;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_11;
      if (tmp2_cache_2 ? true : tmp0_let_3 === Companion_getInstance_1().qr_1) {
        var tmp$ret$20;
        // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>' call
        tmp$ret$20 = ComposableLambda$invoke$ref_34(dispatchReceiver);
        var value_3 = tmp$ret$20;
        tmp1_cache_3.pr(value_3);
        tmp_11 = value_3;
      } else {
        tmp_11 = tmp0_let_3;
      }
      tmp$ret$21 = tmp_11;
      tmp$ret$22 = tmp$ret$21;
      var tmp_12 = tmp$ret$22;
      tmp$ret$23 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
      var tmp0_3 = tmp$ret$23;
      $composer_5.rr();
      tmp$ret$24 = tmp0_3;
      tmp$ret$25 = tmp$ret$24;
      tmp$ret$26 = tmp$ret$25;
      MDCCard$composable(tmp_6, tmp_9, tmp$ret$26, $composer_0, 390, 0);
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
      tmp0_safe_receiver.q14(PortfolioTile$composable$lambda$ref(portfolioData, $changed));
    }
  }
  function PortfolioLayout$composable$lambda($color1, $color2, $content, $$changed, $composer, $force) {
    return PortfolioLayout$composable($color1, $color2, $content, $composer, $$changed | 1);
  }
  function PortfolioTile$composable$lambda($clicked$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('clicked', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $clicked$delegate.z1();
    return tmp$ret$0;
  }
  function PortfolioTile$composable$lambda_0($clicked$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('clicked', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $clicked$delegate.sn(value);
  }
  function PortfolioTile$composable$lambda_1($portfolioData, $$changed, $composer, $force) {
    return PortfolioTile$composable($portfolioData, $composer, $$changed | 1);
  }
  function PortfolioLayout$composable$lambda$lambda($color1, $color2) {
    return function ($this$style) {
      width($this$style, get_percent(100));
      var tmp$ret$3;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      var tmp0__get_Flex__7sqmag = Companion_getInstance();
      var tmp$ret$2;
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'flex';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      display($this$style, tmp$ret$3);
      var tmp$ret$7;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
      var tmp1__get_Column__exgww6 = Companion_getInstance_0();
      var tmp$ret$6;
      // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'column';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      flexDirection($this$style, tmp$ret$7);
      var tmp$ret$11;
      // Inline function 'org.jetbrains.compose.web.css.Companion.Center' call
      var tmp2__get_Center__rzu806 = Companion_getInstance_4();
      var tmp$ret$10;
      // Inline function 'org.jetbrains.compose.web.css.AlignItems' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'center';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      alignItems($this$style, tmp$ret$11);
      boxSizing($this$style, 'border-box');
      backgroundImage($this$style, 'linear-gradient(180deg, ' + $color1 + ' 0%, ' + $color2 + ' 100%)');
      return Unit_getInstance();
    };
  }
  function PortfolioLayout$composable$lambda_0($color1, $color2) {
    return function ($this$Div) {
      $this$Div.z1s(PortfolioLayout$composable$lambda$lambda($color1, $color2));
      return Unit_getInstance();
    };
  }
  function PortfolioLayout$composable$lambda_1($content, $$dirty) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1494387041, $changed, -1, 'composables.PortfolioLayout$composable.<anonymous> (Portfolio.kt:32)');
        }
        $content($composer_0, 14 & $$dirty >> 6);
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
  function ComposableLambda$invoke$ref_30($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function PortfolioLayout$composable$lambda$ref($color1, $color2, $content, $$changed) {
    return function (p0, p1) {
      PortfolioLayout$composable$lambda($color1, $color2, $content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function PortfolioTile$composable$lambda_2($clicked$delegate) {
    return function () {
      return PortfolioTile$composable$lambda($clicked$delegate);
    };
  }
  function PortfolioTile$composable$lambda_3($clicked$delegate) {
    return function (it) {
      PortfolioTile$composable$lambda_0($clicked$delegate, it);
      return Unit_getInstance();
    };
  }
  function PortfolioTile$composable$lambda$lambda($this$style) {
    width($this$style, get_percent(50));
    height($this$style, get_px(420));
    marginTop($this$style, get_percent(10));
    marginBottom($this$style, get_percent(10));
    backgroundColor($this$style, Color('#AAAAAA'));
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda_0($clicked$delegate) {
    return function (it) {
      PortfolioTile$composable$lambda_0($clicked$delegate, !PortfolioTile$composable$lambda($clicked$delegate));
      return Unit_getInstance();
    };
  }
  function PortfolioTile$composable$lambda_4($clicked$delegate) {
    return function ($this$MDCCard) {
      $this$MDCCard.z1s(PortfolioTile$composable$lambda$lambda);
      $this$MDCCard.c1t(PortfolioTile$composable$lambda$lambda_0($clicked$delegate));
      return Unit_getInstance();
    };
  }
  function PortfolioTile$composable$lambda$lambda_1($this$Div) {
    $this$Div.z1s(PortfolioTile$composable$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda($this$style) {
    width($this$style, get_percent(100));
    height($this$style, get_percent(100));
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda_0($this$Div) {
    $this$Div.z1s(PortfolioTile$composable$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Column' call
    var tmp1__get_Column__exgww6 = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'column';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda_0($this$Div) {
    $this$Div.z1s(PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda($this$style) {
    var tmp$ret$3;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    var tmp0__get_Flex__7sqmag = Companion_getInstance();
    var tmp$ret$2;
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'flex';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    display($this$style, tmp$ret$3);
    var tmp$ret$7;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Row' call
    var tmp1__get_Row__r63lke = Companion_getInstance_0();
    var tmp$ret$6;
    // Inline function 'org.jetbrains.compose.web.css.FlexDirection' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'row';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    flexDirection($this$style, tmp$ret$7);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_0($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().d25()]);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_1($this$MDCH5) {
    $this$MDCH5.b1t([AppStyle_getInstance().b25()]);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda_1($portfolioData) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1256273380, $changed, -1, 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous> (Portfolio.kt:95)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_0;
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
        Img$composable($portfolioData.o25_1, null, tmp$ret$4, $composer_0, 0, 2);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.nr(547886695);
        sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_2;
        if (false ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_1;
          var value_0 = tmp$ret$5;
          tmp1_cache_0.pr(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_2;
        tmp$ret$7 = tmp$ret$6;
        var tmp_3 = tmp$ret$7;
        tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.rr();
        tmp$ret$9 = tmp0_0;
        MDCH5$composable($portfolioData.n25_1, tmp$ret$9, $composer_0, 0, 0);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda_2($this$MDCBody1) {
    $this$MDCBody1.b1t([AppStyle_getInstance().b25()]);
    $this$MDCBody1.z1s(PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_2($this$style) {
    fontStyle($this$style, 'Italic');
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda_3($this$Div) {
    $this$Div.z1s(PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_3);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_3($this$style) {
    height($this$style, get_percent(20));
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda_4($this$MDCBody1) {
    $this$MDCBody1.b1t([AppStyle_getInstance().b25()]);
    $this$MDCBody1.z1s(PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_4);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda$lambda_4($this$style) {
    fontStyle($this$style, 'Bold');
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda$lambda_5($this$MDCBody1) {
    $this$MDCBody1.b1t([AppStyle_getInstance().c25()]);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda$lambda_1($portfolioData) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1346928965, $changed, -1, 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous> (Portfolio.kt:87)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = PortfolioTile$composable$lambda$lambda$lambda$lambda_0;
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
        // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1256273380, true, PortfolioTile$composable$lambda$lambda$lambda$lambda_1($portfolioData));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_31(dispatchReceiver);
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
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_3 = tmp1_remember$composable;
        $composer_3.nr(547886695);
        sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_6;
        if (false ? true : tmp0_let_1 === Companion_getInstance_1().qr_1) {
          var tmp$ret$12;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = PortfolioTile$composable$lambda$lambda$lambda$lambda_2;
          var value_1 = tmp$ret$12;
          tmp1_cache_1.pr(value_1);
          tmp_6 = value_1;
        } else {
          tmp_6 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_6;
        tmp$ret$14 = tmp$ret$13;
        var tmp_7 = tmp$ret$14;
        tmp$ret$15 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.rr();
        tmp$ret$16 = tmp0_1;
        MDCBody1$composable($portfolioData.r25_1, tmp$ret$16, $composer_0, 0, 0);
        var tmp$ret$21;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp2_remember$composable = $composer_0;
        var $composer_4 = tmp2_remember$composable;
        $composer_4.nr(547886695);
        sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$20;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp$ret$19;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (false ? true : tmp0_let_2 === Companion_getInstance_1().qr_1) {
          var tmp$ret$17;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$17 = PortfolioTile$composable$lambda$lambda$lambda$lambda_3;
          var value_2 = tmp$ret$17;
          tmp1_cache_2.pr(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = tmp0_let_2;
        }
        tmp$ret$18 = tmp_8;
        tmp$ret$19 = tmp$ret$18;
        var tmp_9 = tmp$ret$19;
        tmp$ret$20 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_2 = tmp$ret$20;
        $composer_4.rr();
        tmp$ret$21 = tmp0_2;
        var tmp_10 = tmp$ret$21;
        Div$composable(tmp_10, null, $composer_0, 0, 2);
        var tmp$ret$26;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_5 = tmp3_remember$composable;
        $composer_5.nr(547886695);
        sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$25;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_3 = $composer_5;
        var tmp$ret$24;
        // Inline function 'kotlin.let' call
        var tmp0_let_3 = tmp1_cache_3.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$23;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_11;
        if (false ? true : tmp0_let_3 === Companion_getInstance_1().qr_1) {
          var tmp$ret$22;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$22 = PortfolioTile$composable$lambda$lambda$lambda$lambda_4;
          var value_3 = tmp$ret$22;
          tmp1_cache_3.pr(value_3);
          tmp_11 = value_3;
        } else {
          tmp_11 = tmp0_let_3;
        }
        tmp$ret$23 = tmp_11;
        tmp$ret$24 = tmp$ret$23;
        var tmp_12 = tmp$ret$24;
        tmp$ret$25 = (tmp_12 == null ? true : isObject(tmp_12)) ? tmp_12 : THROW_CCE();
        var tmp0_3 = tmp$ret$25;
        $composer_5.rr();
        tmp$ret$26 = tmp0_3;
        MDCBody1$composable('Main technologies:', tmp$ret$26, $composer_0, 6, 0);
        var tmp_13 = joinToString$default($portfolioData.t25_1, ', ', null, '.', 0, null, null, 58, null);
        var tmp$ret$31;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp4_remember$composable = $composer_0;
        var $composer_6 = tmp4_remember$composable;
        $composer_6.nr(547886695);
        sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$30;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_4 = $composer_6;
        var tmp$ret$29;
        // Inline function 'kotlin.let' call
        var tmp0_let_4 = tmp1_cache_4.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$28;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_14;
        if (false ? true : tmp0_let_4 === Companion_getInstance_1().qr_1) {
          var tmp$ret$27;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$27 = PortfolioTile$composable$lambda$lambda$lambda$lambda_5;
          var value_4 = tmp$ret$27;
          tmp1_cache_4.pr(value_4);
          tmp_14 = value_4;
        } else {
          tmp_14 = tmp0_let_4;
        }
        tmp$ret$28 = tmp_14;
        tmp$ret$29 = tmp$ret$28;
        var tmp_15 = tmp$ret$29;
        tmp$ret$30 = (tmp_15 == null ? true : isObject(tmp_15)) ? tmp_15 : THROW_CCE();
        var tmp0_4 = tmp$ret$30;
        $composer_6.rr();
        tmp$ret$31 = tmp0_4;
        MDCBody1$composable(tmp_13, tmp$ret$31, $composer_0, 0, 0);
        var tmp_16;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_16 = Unit_getInstance();
        }
        tmp = tmp_16;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function PortfolioTile$composable$lambda$lambda$lambda_2($this$Img) {
    $this$Img.b1t([AppStyle_getInstance().e25()]);
    return Unit_getInstance();
  }
  function PortfolioTile$composable$lambda$lambda_2($portfolioData) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(1250863386, $changed, -1, 'composables.PortfolioTile$composable.<anonymous>.<anonymous> (Portfolio.kt:79)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = PortfolioTile$composable$lambda$lambda$lambda_0;
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
        // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, -1346928965, true, PortfolioTile$composable$lambda$lambda$lambda_1($portfolioData));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_32(dispatchReceiver);
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
        var tmp_6 = $portfolioData.p25_1.i(0);
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_3 = tmp1_remember$composable;
        $composer_3.nr(547886695);
        sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_1 = $composer_3;
        var tmp$ret$14;
        // Inline function 'kotlin.let' call
        var tmp0_let_1 = tmp1_cache_1.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_7;
        if (false ? true : tmp0_let_1 === Companion_getInstance_1().qr_1) {
          var tmp$ret$12;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = PortfolioTile$composable$lambda$lambda$lambda_2;
          var value_1 = tmp$ret$12;
          tmp1_cache_1.pr(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = tmp0_let_1;
        }
        tmp$ret$13 = tmp_7;
        tmp$ret$14 = tmp$ret$13;
        var tmp_8 = tmp$ret$14;
        tmp$ret$15 = (tmp_8 == null ? true : isObject(tmp_8)) ? tmp_8 : THROW_CCE();
        var tmp0_1 = tmp$ret$15;
        $composer_3.rr();
        tmp$ret$16 = tmp0_1;
        Img$composable(tmp_6, null, tmp$ret$16, $composer_0, 0, 2);
        var tmp_9;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_9 = Unit_getInstance();
        }
        tmp = tmp_9;
      } else {
        $composer_0.mx();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function PortfolioTile$composable$lambda_5($portfolioData) {
    return function ($this$MDCCard, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 81) === 16) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-346998471, $changed, -1, 'composables.PortfolioTile$composable.<anonymous> (Portfolio.kt:69)');
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
        var tmp_0;
        if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
          var tmp$ret$0;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = PortfolioTile$composable$lambda$lambda_1;
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
        // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_3 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_3, 1250863386, true, PortfolioTile$composable$lambda$lambda_2($portfolioData));
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable_0 = $composer_0;
        var $composer_2 = tmp0_remember$composable_0;
        $composer_2.nr(-838505973);
        sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_0 = $composer_2;
        var tmp2_cache = $composer_2.sr(dispatchReceiver);
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp1_cache_0.or();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_1().qr_1) {
          var tmp$ret$5;
          // Inline function 'composables.PortfolioTile$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = ComposableLambda$invoke$ref_33(dispatchReceiver);
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
  function ComposableLambda$invoke$ref_34($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.g1r(p0, p1, p2);
    };
  }
  function PortfolioTile$composable$lambda$ref($portfolioData, $$changed) {
    return function (p0, p1) {
      PortfolioTile$composable$lambda_1($portfolioData, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function IntroDataObject() {
    IntroDataObject_instance = this;
    this.p26_1 = new IntroData('photo.png', 'Mobile Developer', 'Valeriy Timofeev', 'Some text about me.', '', '', 'https://www.linkedin.com/in/valeriy-timofeev-03861b233/', 'llin.first@gmail.com', '@llinFirst');
    this.q26_1 = 0;
  }
  IntroDataObject.$metadata$ = objectMeta('IntroDataObject');
  var IntroDataObject_instance;
  function IntroDataObject_getInstance() {
    if (IntroDataObject_instance == null)
      new IntroDataObject();
    return IntroDataObject_instance;
  }
  function IntroData(img, title, subTitle, text, cvEnLink, cvRuLink, linkedIn, email, tg) {
    this.f26_1 = img;
    this.g26_1 = title;
    this.h26_1 = subTitle;
    this.i26_1 = text;
    this.j26_1 = cvEnLink;
    this.k26_1 = cvRuLink;
    this.l26_1 = linkedIn;
    this.m26_1 = email;
    this.n26_1 = tg;
    this.o26_1 = 0;
  }
  IntroData.prototype.toString = function () {
    return 'IntroData(img=' + this.f26_1 + ', title=' + this.g26_1 + ', subTitle=' + this.h26_1 + ', text=' + this.i26_1 + ', cvEnLink=' + this.j26_1 + ', cvRuLink=' + this.k26_1 + ', linkedIn=' + this.l26_1 + ', email=' + this.m26_1 + ', tg=' + this.n26_1 + ')';
  };
  IntroData.prototype.hashCode = function () {
    var result = getStringHashCode(this.f26_1);
    result = imul(result, 31) + getStringHashCode(this.g26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m26_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.n26_1) | 0;
    return result;
  };
  IntroData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntroData))
      return false;
    var tmp0_other_with_cast = other instanceof IntroData ? other : THROW_CCE();
    if (!(this.f26_1 === tmp0_other_with_cast.f26_1))
      return false;
    if (!(this.g26_1 === tmp0_other_with_cast.g26_1))
      return false;
    if (!(this.h26_1 === tmp0_other_with_cast.h26_1))
      return false;
    if (!(this.i26_1 === tmp0_other_with_cast.i26_1))
      return false;
    if (!(this.j26_1 === tmp0_other_with_cast.j26_1))
      return false;
    if (!(this.k26_1 === tmp0_other_with_cast.k26_1))
      return false;
    if (!(this.l26_1 === tmp0_other_with_cast.l26_1))
      return false;
    if (!(this.m26_1 === tmp0_other_with_cast.m26_1))
      return false;
    if (!(this.n26_1 === tmp0_other_with_cast.n26_1))
      return false;
    return true;
  };
  IntroData.$metadata$ = classMeta('IntroData');
  function Links_init_$Init$(git, googlePlay, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      googlePlay = null;
    Links.call($this, git, googlePlay);
    return $this;
  }
  function Links_init_$Create$(git, googlePlay, $mask0, $marker) {
    return Links_init_$Init$(git, googlePlay, $mask0, $marker, Object.create(Links.prototype));
  }
  function Links(git, googlePlay) {
    this.z25_1 = git;
    this.a26_1 = googlePlay;
    this.b26_1 = 0;
  }
  Links.prototype.y26 = function () {
    return this.z25_1;
  };
  Links.prototype.z26 = function () {
    return this.a26_1;
  };
  Links.prototype.toString = function () {
    return 'Links(git=' + this.z25_1 + ', googlePlay=' + this.a26_1 + ')';
  };
  Links.prototype.hashCode = function () {
    var result = getStringHashCode(this.z25_1);
    result = imul(result, 31) + (this.a26_1 == null ? 0 : getStringHashCode(this.a26_1)) | 0;
    return result;
  };
  Links.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Links))
      return false;
    var tmp0_other_with_cast = other instanceof Links ? other : THROW_CCE();
    if (!(this.z25_1 === tmp0_other_with_cast.z25_1))
      return false;
    if (!(this.a26_1 == tmp0_other_with_cast.a26_1))
      return false;
    return true;
  };
  Links.$metadata$ = classMeta('Links');
  var PortfolioData_ISS_instance;
  var PortfolioData_FOOD_instance;
  var PortfolioData_HH_instance;
  var PortfolioData_WEB_instance;
  var PortfolioData_TEST_instance;
  function values() {
    return [PortfolioData_ISS_getInstance(), PortfolioData_FOOD_getInstance(), PortfolioData_HH_getInstance(), PortfolioData_WEB_getInstance(), PortfolioData_TEST_getInstance()];
  }
  var PortfolioData_entriesInitialized;
  function PortfolioData_initEntries() {
    if (PortfolioData_entriesInitialized)
      return Unit_getInstance();
    PortfolioData_entriesInitialized = true;
    var tmp = listOf(['scISS1.png', 'scISS2.png', 'scISS3.png']);
    var tmp_0 = listOf(['Jetpack Compose', 'Clean architecture', 'Hilt', 'Google maps API', 'Retrofit2']);
    PortfolioData_ISS_instance = new PortfolioData('ISS', 0, 30, 'ISS locator', 'icIss.png', tmp, '#bd7270', 'You can always know where the International Space Station is now.', 'The app shows in real time the point on the world map over which the ISS is located. "Well, the space station orbits Earth about every 90 minutes, so that means in a 24 hour day, the space station orbits approximately 16 times."', tmp_0, Links_init_$Create$('https://github.com/Haartag/GoogleMapsIssLocation', null, 2, null));
    PortfolioData_FOOD_instance = new PortfolioData('FOOD', 1, 20, '3akroma', 'icFood.png', listOf(['scFood1.png', 'scFood2.png', 'scFood3.png', 'scFood4.png']), '#e88c5d', 'Simple app to manage storage of something.', '3akroma is a simple and easy to learn and manage app to track and store anything - groceries, supplies, tools, and anything else you can think of!', listOf(['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Kotlin Coroutines', 'Room', 'Hilt', 'Coil', 'JUnit']), new Links('https://github.com/Haartag/ComposedStorage', 'https://play.google.com/store/apps/details?id=com.valerytimofeev.composedstorage'));
    PortfolioData_HH_instance = new PortfolioData('HH', 2, 10, 'Heroes Helper', 'icH3Pand.png', listOf(['scH3Pand1.png', 'scH3Pand2.png', 'scH3Pand3.png', 'scH3Pand4.png']), '#E0BF59', "Advanced pandora's box calculator for Heroes III HotA.", "Heroes Helper is a simple and easy-to-use app for Heroes III HotA that allows you to determine the correct contents of Pandora's Box. You will be able to find out the percentage chance of rewards, the possible range of the number of guards and the most probable guards of the box.", listOf(['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Kotlin Coroutines', 'Room', 'Hilt', 'JUnit']), new Links('https://github.com/Haartag/H3Pand', 'https://play.google.com/store/apps/details?id=com.valerytimofeev.h3pand'));
    var tmp_1 = listOf_0('');
    var tmp_2 = listOf(['Kotlin Multiplatform', 'Compose Web', 'KMDC']);
    PortfolioData_WEB_instance = new PortfolioData('WEB', 3, 99, '...and this website!', 'icWeb.png', tmp_1, '#748392', 'Simple portfolio website on Kotlin Compose Web', '', tmp_2, Links_init_$Create$('https://github.com/Haartag/PortfolioWebsite', null, 2, null));
    var tmp_3 = listOf(['scTest1.png', 'scTest2.png', 'scTest3.png']);
    var tmp_4 = listOf(['Kotlin', 'Jetpack Compose', 'Clean Architecture', 'Hilt', 'Kotlin Coroutines', 'Coil', 'Retrofit', 'OkHttp', 'Google Maps API', 'Palette', 'JUnit', 'Mockk']);
    PortfolioData_TEST_instance = new PortfolioData('TEST', 4, 77, 'Various test tasks', 'icTest.png', tmp_3, '#104090', '', '', tmp_4, Links_init_$Create$('https://github.com/Haartag/LiveHackTestTask', null, 2, null));
  }
  function PortfolioData(name, ordinal, id, itemName, img, screenshot, color, shortDescription, longDescription, techDescription, links) {
    Enum.call(this, name, ordinal);
    this.m25_1 = id;
    this.n25_1 = itemName;
    this.o25_1 = img;
    this.p25_1 = screenshot;
    this.q25_1 = color;
    this.r25_1 = shortDescription;
    this.s25_1 = longDescription;
    this.t25_1 = techDescription;
    this.u25_1 = links;
  }
  PortfolioData.prototype.c11 = function () {
    return this.m25_1;
  };
  PortfolioData.prototype.a27 = function () {
    return this.n25_1;
  };
  PortfolioData.prototype.b27 = function () {
    return this.o25_1;
  };
  PortfolioData.prototype.c27 = function () {
    return this.p25_1;
  };
  PortfolioData.prototype.d27 = function () {
    return this.r25_1;
  };
  PortfolioData.prototype.e27 = function () {
    return this.s25_1;
  };
  PortfolioData.prototype.f27 = function () {
    return this.t25_1;
  };
  PortfolioData.prototype.g27 = function () {
    return this.u25_1;
  };
  PortfolioData.$metadata$ = classMeta('PortfolioData', undefined, undefined, undefined, undefined, Enum.prototype);
  function PortfolioData_ISS_getInstance() {
    PortfolioData_initEntries();
    return PortfolioData_ISS_instance;
  }
  function PortfolioData_FOOD_getInstance() {
    PortfolioData_initEntries();
    return PortfolioData_FOOD_instance;
  }
  function PortfolioData_HH_getInstance() {
    PortfolioData_initEntries();
    return PortfolioData_HH_instance;
  }
  function PortfolioData_WEB_getInstance() {
    PortfolioData_initEntries();
    return PortfolioData_WEB_instance;
  }
  function PortfolioData_TEST_getInstance() {
    PortfolioData_initEntries();
    return PortfolioData_TEST_instance;
  }
  //region block: post-declaration
  AppStyle.prototype.u1y = style;
  AppStyle.prototype.v1w = style_0;
  AppStyle.prototype.returnUniversalSelector = returnUniversalSelector;
  AppStyle.prototype.b1z = get_universal;
  AppStyle.prototype.returnHoverSelector = returnHoverSelector;
  AppStyle.prototype.w1w = get_hover;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=PortfolioWebsite.js.map
