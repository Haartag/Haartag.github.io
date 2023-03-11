(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'web-internal-web-core-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'web-internal-web-core-runtime'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'web-internal-web-core-runtime'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'web-internal-web-core-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'web-internal-web-core-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'web-internal-web-core-runtime'.");
    }
    root['web-internal-web-core-runtime'] = factory(typeof this['web-internal-web-core-runtime'] === 'undefined' ? {} : this['web-internal-web-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.e5;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var ensureNotNull = kotlin_kotlin.$_$.k6;
  var classMeta = kotlin_kotlin.$_$.u4;
  var AbstractApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var onBeginChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var onEndChanges = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d1;
  var CoroutineImpl = kotlin_kotlin.$_$.m4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.h5;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.k5;
  var SuspendFunction1 = kotlin_kotlin.$_$.n4;
  var CoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var plus = kotlin_kotlin.$_$.l4;
  var get = kotlin_kotlin.$_$.c4;
  var fold = kotlin_kotlin.$_$.g4;
  var minusKey = kotlin_kotlin.$_$.d4;
  var Recomposer = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var ControlledComposition = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var get_DefaultMonotonicFrameClock = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x3;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  //endregion
  //region block: pre-declaration
  DomApplier.prototype = Object.create(AbstractApplier.prototype);
  DomApplier.prototype.constructor = DomApplier;
  GlobalSnapshotManager$schedule$slambda.prototype = Object.create(CoroutineImpl.prototype);
  GlobalSnapshotManager$schedule$slambda.prototype.constructor = GlobalSnapshotManager$schedule$slambda;
  JsMicrotasksDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  JsMicrotasksDispatcher.prototype.constructor = JsMicrotasksDispatcher;
  renderComposable$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  renderComposable$composable$slambda.prototype.constructor = renderComposable$composable$slambda;
  //endregion
  function DOMScope() {
  }
  DOMScope.$metadata$ = interfaceMeta('DOMScope');
  function DomNodeWrapper(node) {
    this.i1r_1 = node;
    this.j1r_1 = 0;
  }
  DomNodeWrapper.prototype.u1k = function () {
    return this.i1r_1;
  };
  DomNodeWrapper.prototype.k1r = function (index, nodeWrapper) {
    var length = this.u1k().childNodes.length;
    if (index < length) {
      var tmp = this.u1k();
      var tmp_0 = nodeWrapper.u1k();
      var tmp$ret$1;
      // Inline function 'org.w3c.dom.get' call
      var tmp0_get = this.u1k().childNodes;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_get;
      tmp$ret$1 = tmp$ret$0[index];
      tmp.insertBefore(tmp_0, ensureNotNull(tmp$ret$1));
    } else {
      this.u1k().appendChild(nodeWrapper.u1k());
    }
  };
  DomNodeWrapper.prototype.pq = function (index, count) {
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.internal.runtime.DomNodeWrapper.remove.<anonymous>' call
        var tmp = this.u1k();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.u1k().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[index];
        tmp.removeChild(ensureNotNull(tmp$ret$1));
      }
       while (inductionVariable < count);
  };
  DomNodeWrapper.prototype.qq = function (from, to, count) {
    if (from === to) {
      return Unit_getInstance();
    }
    var inductionVariable = 0;
    if (inductionVariable < count)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromIndex = from > to ? from + i | 0 : from;
        var toIndex = from > to ? to + i | 0 : (to + count | 0) - 2 | 0;
        var tmp = this.u1k();
        var tmp$ret$1;
        // Inline function 'org.w3c.dom.get' call
        var tmp0_get = this.u1k().childNodes;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_get;
        tmp$ret$1 = tmp$ret$0[fromIndex];
        var child = tmp.removeChild(ensureNotNull(tmp$ret$1));
        var tmp_0 = this.u1k();
        var tmp$ret$3;
        // Inline function 'org.w3c.dom.get' call
        var tmp1_get = this.u1k().childNodes;
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp1_get;
        tmp$ret$3 = tmp$ret$2[toIndex];
        tmp_0.insertBefore(child, ensureNotNull(tmp$ret$3));
      }
       while (inductionVariable < count);
  };
  DomNodeWrapper.$metadata$ = classMeta('DomNodeWrapper');
  function DomApplier(root) {
    AbstractApplier.call(this, root);
    this.p1r_1 = 0;
  }
  DomApplier.prototype.q1r = function (index, instance) {
  };
  DomApplier.prototype.nq = function (index, instance) {
    return this.q1r(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  DomApplier.prototype.r1r = function (index, instance) {
    this.iq().k1r(index, instance);
  };
  DomApplier.prototype.oq = function (index, instance) {
    return this.r1r(index, instance instanceof DomNodeWrapper ? instance : THROW_CCE());
  };
  DomApplier.prototype.pq = function (index, count) {
    this.iq().pq(index, count);
  };
  DomApplier.prototype.qq = function (from, to, count) {
    this.iq().qq(from, to, count);
  };
  DomApplier.$metadata$ = classMeta('DomApplier', undefined, undefined, undefined, undefined, AbstractApplier.prototype);
  function NamedEventListener() {
  }
  NamedEventListener.$metadata$ = interfaceMeta('NamedEventListener');
  function synchronize($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.y1r_1;
    var tmp0_iterator = tmp0_forEach.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      // Inline function 'org.jetbrains.compose.web.internal.runtime.GlobalSnapshotManager.synchronize.<anonymous>' call
      element();
    }
    $this.y1r_1.t5();
    $this.z1r_1 = false;
  }
  function schedule($this, block) {
    $this.y1r_1.a(block);
    if (!$this.z1r_1) {
      $this.z1r_1 = true;
      launch$default($this.w1r_1, null, null, GlobalSnapshotManager$schedule$slambda_0(null), 3, null);
    }
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda(it) {
    if (!GlobalSnapshotManager_getInstance().u1r_1) {
      GlobalSnapshotManager_getInstance().u1r_1 = true;
      var tmp = GlobalSnapshotManager_getInstance();
      schedule(tmp, GlobalSnapshotManager$globalWriteObserver$lambda$lambda);
    }
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$globalWriteObserver$lambda$lambda() {
    GlobalSnapshotManager_getInstance().u1r_1 = false;
    Companion_getInstance().u19();
    return Unit_getInstance();
  }
  function GlobalSnapshotManager$schedule$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  GlobalSnapshotManager$schedule$slambda.prototype.g1a = function ($this$launch, $cont) {
    var tmp = this.h1a($this$launch, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  GlobalSnapshotManager$schedule$slambda.prototype.vc = function (p1, $cont) {
    return this.g1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  GlobalSnapshotManager$schedule$slambda.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        if (tmp === 0) {
          this.mc_1 = 1;
          synchronize(GlobalSnapshotManager_getInstance());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.oc_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  GlobalSnapshotManager$schedule$slambda.prototype.h1a = function ($this$launch, completion) {
    var i = new GlobalSnapshotManager$schedule$slambda(completion);
    i.j1s_1 = $this$launch;
    return i;
  };
  GlobalSnapshotManager$schedule$slambda.$metadata$ = classMeta('GlobalSnapshotManager$schedule$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function GlobalSnapshotManager$schedule$slambda_0(resultContinuation) {
    var i = new GlobalSnapshotManager$schedule$slambda(resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.g1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function GlobalSnapshotManager() {
    GlobalSnapshotManager_instance = this;
    this.t1r_1 = false;
    this.u1r_1 = false;
    this.v1r_1 = null;
    var tmp = this;
    var tmp_0 = new JsMicrotasksDispatcher();
    tmp.w1r_1 = CoroutineScope_0(tmp_0.y3(SupervisorJob$default(null, 1, null)));
    var tmp_1 = this;
    tmp_1.x1r_1 = GlobalSnapshotManager$globalWriteObserver$lambda;
    var tmp_2 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_2.y1r_1 = tmp$ret$0;
    this.z1r_1 = false;
    this.a1s_1 = 8;
  }
  GlobalSnapshotManager.prototype.k1s = function () {
    if (!this.t1r_1) {
      this.t1r_1 = true;
      this.v1r_1 = Companion_getInstance().v1l(this.x1r_1);
    }
  };
  GlobalSnapshotManager.$metadata$ = objectMeta('GlobalSnapshotManager');
  var GlobalSnapshotManager_instance;
  function GlobalSnapshotManager_getInstance() {
    if (GlobalSnapshotManager_instance == null)
      new GlobalSnapshotManager();
    return GlobalSnapshotManager_instance;
  }
  function JsMicrotasksDispatcher$dispatch$lambda($block) {
    return function (it) {
      $block.ki();
      return Unit_getInstance();
    };
  }
  function JsMicrotasksDispatcher() {
    CoroutineDispatcher.call(this);
    this.m1s_1 = 0;
  }
  JsMicrotasksDispatcher.prototype.wi = function (context, block) {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(JsMicrotasksDispatcher$dispatch$lambda(block));
  };
  JsMicrotasksDispatcher.$metadata$ = classMeta('JsMicrotasksDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function renderComposable$composable(rootElementId, content) {
    var tmp = ensureNotNull(document.getElementById(rootElementId));
    return renderComposable$composable$default(tmp, null, content, 2, null);
  }
  function renderComposable$composable_0(root, monotonicFrameClock, content) {
    GlobalSnapshotManager_getInstance().k1s();
    var context = monotonicFrameClock.y3(new JsMicrotasksDispatcher());
    var recomposer = new Recomposer(context);
    var tmp = CoroutineScope_0(context);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch$default(tmp, null, tmp_0, renderComposable$composable$slambda_0(recomposer, null), 1, null);
    var composition = ControlledComposition(new DomApplier(new DomNodeWrapper(root)), recomposer);
    var scope = new renderComposable$composable$scope$1(root);
    composition.o17(ComposableLambda$invoke$ref(composableLambdaInstance(-1520853124, true, renderComposable$composable$lambda(content, scope))));
    return composition;
  }
  function renderComposable$composable$default(root, monotonicFrameClock, content, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      monotonicFrameClock = get_DefaultMonotonicFrameClock();
    return renderComposable$composable_0(root, monotonicFrameClock, content);
  }
  function renderComposable$composable$slambda($recomposer, resultContinuation) {
    this.v1s_1 = $recomposer;
    CoroutineImpl.call(this, resultContinuation);
  }
  renderComposable$composable$slambda.prototype.g1a = function ($this$launch, $cont) {
    var tmp = this.h1a($this$launch, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  renderComposable$composable$slambda.prototype.vc = function (p1, $cont) {
    return this.g1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  renderComposable$composable$slambda.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 2;
            this.lc_1 = 1;
            suspendResult = this.v1s_1.a1d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.oc_1;
        }
      } catch ($p) {
        if (this.mc_1 === 2) {
          throw $p;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = $p;
        }
      }
     while (true);
  };
  renderComposable$composable$slambda.prototype.h1a = function ($this$launch, completion) {
    var i = new renderComposable$composable$slambda(this.v1s_1, completion);
    i.w1s_1 = $this$launch;
    return i;
  };
  renderComposable$composable$slambda.$metadata$ = classMeta('renderComposable$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function renderComposable$composable$slambda_0($recomposer, resultContinuation) {
    var i = new renderComposable$composable$slambda($recomposer, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.g1a($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function renderComposable$composable$scope$1($root) {
    this.x1s_1 = $root;
  }
  renderComposable$composable$scope$1.$metadata$ = classMeta(undefined, [DOMScope]);
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function renderComposable$composable$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(-1520853124, $changed, -1, 'org.jetbrains.compose.web.renderComposable$composable.<anonymous> (renderComposable.kt:59)');
        }
        $content($scope, $composer_0, 0);
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
  //region block: post-declaration
  DomApplier.prototype.jq = onBeginChanges;
  DomApplier.prototype.kq = onEndChanges;
  JsMicrotasksDispatcher.prototype.y3 = plus;
  JsMicrotasksDispatcher.prototype.r3 = get;
  JsMicrotasksDispatcher.prototype.x3 = fold;
  JsMicrotasksDispatcher.prototype.w3 = minusKey;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DOMScope;
  _.$_$.b = DomApplier;
  _.$_$.c = DomNodeWrapper;
  _.$_$.d = NamedEventListener;
  _.$_$.e = renderComposable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=web-internal-web-core-runtime.js.map
