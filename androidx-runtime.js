(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-runtime'.");
    }
    root['androidx-runtime'] = factory(typeof this['androidx-runtime'] === 'undefined' ? {} : this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.e5;
  var Unit_getInstance = kotlin_kotlin.$_$.r1;
  var toString = kotlin_kotlin.$_$.l5;
  var classMeta = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.e6;
  var isObject = kotlin_kotlin.$_$.i5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var rotateLeft = kotlin_kotlin.$_$.n6;
  var rotateRight = kotlin_kotlin.$_$.o6;
  var Companion_getInstance = kotlin_kotlin.$_$.q1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.j1;
  var createFailure = kotlin_kotlin.$_$.j6;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.q6;
  var intercepted = kotlin_kotlin.$_$.z3;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get = kotlin_kotlin.$_$.h4;
  var fold = kotlin_kotlin.$_$.g4;
  var minusKey = kotlin_kotlin.$_$.i4;
  var plus = kotlin_kotlin.$_$.l4;
  var isInterface = kotlin_kotlin.$_$.h5;
  var equals = kotlin_kotlin.$_$.w4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var fill$default = kotlin_kotlin.$_$.e;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var hashCode = kotlin_kotlin.$_$.c5;
  var Enum = kotlin_kotlin.$_$.y5;
  var emptyList = kotlin_kotlin.$_$.b3;
  var toMutableList = kotlin_kotlin.$_$.u3;
  var sortWith = kotlin_kotlin.$_$.p3;
  var Comparator = kotlin_kotlin.$_$.x5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var to = kotlin_kotlin.$_$.s6;
  var compareValues = kotlin_kotlin.$_$.v3;
  var objectMeta = kotlin_kotlin.$_$.k5;
  var IllegalStateException = kotlin_kotlin.$_$.b6;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.s4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x;
  var lazy = kotlin_kotlin.$_$.l6;
  var firstOrNull = kotlin_kotlin.$_$.d3;
  var compareTo = kotlin_kotlin.$_$.v4;
  var KProperty1 = kotlin_kotlin.$_$.s5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.a5;
  var isArray = kotlin_kotlin.$_$.f5;
  var Set = kotlin_kotlin.$_$.p2;
  var ensureNotNull = kotlin_kotlin.$_$.k6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var plus_0 = kotlin_kotlin.$_$.m3;
  var Exception = kotlin_kotlin.$_$.a6;
  var fillArrayVal = kotlin_kotlin.$_$.x4;
  var toString_0 = kotlin_kotlin.$_$.r6;
  var Key = kotlin_kotlin.$_$.k4;
  var Element = kotlin_kotlin.$_$.j4;
  var getStringHashCode = kotlin_kotlin.$_$.b5;
  var Collection = kotlin_kotlin.$_$.a2;
  var addAll = kotlin_kotlin.$_$.r2;
  var CoroutineImpl = kotlin_kotlin.$_$.m4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x3;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var toList = kotlin_kotlin.$_$.t3;
  var flatten = kotlin_kotlin.$_$.f3;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r;
  var CancellationException = kotlin_kotlin.$_$.w3;
  var addSuppressed = kotlin_kotlin.$_$.h6;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var returnIfSuspended = kotlin_kotlin.$_$.d;
  var Long = kotlin_kotlin.$_$.c6;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var removeFirst = kotlin_kotlin.$_$.n3;
  var SuspendFunction1 = kotlin_kotlin.$_$.n4;
  var SuspendFunction2 = kotlin_kotlin.$_$.o4;
  var arrayCopy = kotlin_kotlin.$_$.s2;
  var fill = kotlin_kotlin.$_$.c3;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o1;
  var Iterator = kotlin_kotlin.$_$.c2;
  var Iterable = kotlin_kotlin.$_$.b2;
  var first = kotlin_kotlin.$_$.e3;
  var last = kotlin_kotlin.$_$.i3;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.u;
  var copyOf = kotlin_kotlin.$_$.y2;
  var copyOf_0 = kotlin_kotlin.$_$.x2;
  var RandomAccess = kotlin_kotlin.$_$.o2;
  var MutableCollection = kotlin_kotlin.$_$.h2;
  var MutableList = kotlin_kotlin.$_$.k2;
  var List = kotlin_kotlin.$_$.e2;
  var MutableMap = kotlin_kotlin.$_$.m2;
  var Map = kotlin_kotlin.$_$.g2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ListIterator = kotlin_kotlin.$_$.d2;
  var AbstractList = kotlin_kotlin.$_$.s1;
  var coerceAtMost = kotlin_kotlin.$_$.n5;
  var arrayIterator = kotlin_kotlin.$_$.r4;
  var AbstractMutableList = kotlin_kotlin.$_$.v1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var MutableListIterator = kotlin_kotlin.$_$.j2;
  var indexOf = kotlin_kotlin.$_$.g3;
  var lastIndexOf = kotlin_kotlin.$_$.h3;
  var AbstractMap = kotlin_kotlin.$_$.t1;
  var AbstractMutableMap = kotlin_kotlin.$_$.w1;
  var MutableIterator = kotlin_kotlin.$_$.i2;
  var MutableEntry = kotlin_kotlin.$_$.l2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var AbstractMutableSet = kotlin_kotlin.$_$.x1;
  var MutableSet = kotlin_kotlin.$_$.n2;
  var AbstractMutableCollection = kotlin_kotlin.$_$.u1;
  var Entry = kotlin_kotlin.$_$.f2;
  var AbstractSet = kotlin_kotlin.$_$.y1;
  var until = kotlin_kotlin.$_$.p5;
  var step = kotlin_kotlin.$_$.o5;
  var countOneBits = kotlin_kotlin.$_$.i6;
  var takeLowestOneBit = kotlin_kotlin.$_$.p6;
  var ConcurrentModificationException_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.t;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var Char = kotlin_kotlin.$_$.w5;
  var isCharSequence = kotlin_kotlin.$_$.g5;
  var contains = kotlin_kotlin.$_$.w2;
  var primitiveArrayConcat = kotlin_kotlin.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.o3;
  var SequenceScope = kotlin_kotlin.$_$.t5;
  var intArrayIterator = kotlin_kotlin.$_$.d5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p1;
  var toIntArray = kotlin_kotlin.$_$.s3;
  var sequence = kotlin_kotlin.$_$.u5;
  var anyToString = kotlin_kotlin.$_$.q4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.c;
  var toDuration = kotlin_kotlin.$_$.v5;
  var _Duration___get_inWholeNanoseconds__impl__r5x4mr = kotlin_kotlin.$_$.i1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  function onBeginChanges() {
  }
  function onEndChanges() {
  }
  function get_key() {
    return Key_getInstance_0();
  }
  function changed(value) {
    return this.c13(value);
  }
  InvalidationResult.prototype = Object.create(Enum.prototype);
  InvalidationResult.prototype.constructor = InvalidationResult;
  ComposeRuntimeError.prototype = Object.create(IllegalStateException.prototype);
  ComposeRuntimeError.prototype.constructor = ComposeRuntimeError;
  ProvidableCompositionLocal.prototype = Object.create(CompositionLocal.prototype);
  ProvidableCompositionLocal.prototype.constructor = ProvidableCompositionLocal;
  StaticProvidableCompositionLocal.prototype = Object.create(ProvidableCompositionLocal.prototype);
  StaticProvidableCompositionLocal.prototype.constructor = StaticProvidableCompositionLocal;
  DynamicProvidableCompositionLocal.prototype = Object.create(ProvidableCompositionLocal.prototype);
  DynamicProvidableCompositionLocal.prototype.constructor = DynamicProvidableCompositionLocal;
  Recomposer$recompositionRunner$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Recomposer$recompositionRunner$slambda$slambda.prototype.constructor = Recomposer$recompositionRunner$slambda$slambda;
  State.prototype = Object.create(Enum.prototype);
  State.prototype.constructor = State;
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.constructor = Recomposer$runRecomposeAndApplyChanges$slambda;
  Recomposer$recompositionRunner$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Recomposer$recompositionRunner$slambda.prototype.constructor = Recomposer$recompositionRunner$slambda;
  $awaitWorkAvailableCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitWorkAvailableCOROUTINE$1.prototype.constructor = $awaitWorkAvailableCOROUTINE$1;
  Recomposer.prototype = Object.create(CompositionContext.prototype);
  Recomposer.prototype.constructor = Recomposer;
  function merge(previous, current, applied) {
    return null;
  }
  StateStateRecord.prototype = Object.create(StateRecord.prototype);
  StateStateRecord.prototype.constructor = StateStateRecord;
  function mergeRecords(previous, current, applied) {
    return null;
  }
  SingleElementListIterator.prototype = Object.create(AbstractListIterator.prototype);
  SingleElementListIterator.prototype.constructor = SingleElementListIterator;
  AbstractPersistentList.prototype = Object.create(AbstractList.prototype);
  AbstractPersistentList.prototype.constructor = AbstractPersistentList;
  BufferIterator.prototype = Object.create(AbstractListIterator.prototype);
  BufferIterator.prototype.constructor = BufferIterator;
  PersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  PersistentVector.prototype.constructor = PersistentVector;
  PersistentVectorBuilder.prototype = Object.create(AbstractMutableList.prototype);
  PersistentVectorBuilder.prototype.constructor = PersistentVectorBuilder;
  PersistentVectorIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorIterator.prototype.constructor = PersistentVectorIterator;
  PersistentVectorMutableIterator.prototype = Object.create(AbstractListIterator.prototype);
  PersistentVectorMutableIterator.prototype.constructor = PersistentVectorMutableIterator;
  SmallPersistentVector.prototype = Object.create(AbstractPersistentList.prototype);
  SmallPersistentVector.prototype.constructor = SmallPersistentVector;
  TrieIterator.prototype = Object.create(AbstractListIterator.prototype);
  TrieIterator.prototype.constructor = TrieIterator;
  PersistentHashMap.prototype = Object.create(AbstractMap.prototype);
  PersistentHashMap.prototype.constructor = PersistentHashMap;
  PersistentHashMapBuilder.prototype = Object.create(AbstractMutableMap.prototype);
  PersistentHashMapBuilder.prototype.constructor = PersistentHashMapBuilder;
  PersistentHashMapBuilderBaseIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapBuilderBaseIterator.prototype.constructor = PersistentHashMapBuilderBaseIterator;
  PersistentHashMapBuilderKeysIterator.prototype = Object.create(PersistentHashMapBuilderBaseIterator.prototype);
  PersistentHashMapBuilderKeysIterator.prototype.constructor = PersistentHashMapBuilderKeysIterator;
  PersistentHashMapBuilderValuesIterator.prototype = Object.create(PersistentHashMapBuilderBaseIterator.prototype);
  PersistentHashMapBuilderValuesIterator.prototype.constructor = PersistentHashMapBuilderValuesIterator;
  TrieNodeMutableEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeMutableEntriesIterator.prototype.constructor = TrieNodeMutableEntriesIterator;
  MutableMapEntry.prototype = Object.create(MapEntry.prototype);
  MutableMapEntry.prototype.constructor = MutableMapEntry;
  AbstractMapBuilderEntries.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractMapBuilderEntries.prototype.constructor = AbstractMapBuilderEntries;
  PersistentHashMapBuilderEntries.prototype = Object.create(AbstractMapBuilderEntries.prototype);
  PersistentHashMapBuilderEntries.prototype.constructor = PersistentHashMapBuilderEntries;
  PersistentHashMapBuilderKeys.prototype = Object.create(AbstractMutableSet.prototype);
  PersistentHashMapBuilderKeys.prototype.constructor = PersistentHashMapBuilderKeys;
  PersistentHashMapBuilderValues.prototype = Object.create(AbstractMutableCollection.prototype);
  PersistentHashMapBuilderValues.prototype.constructor = PersistentHashMapBuilderValues;
  PersistentHashMapKeysIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapKeysIterator.prototype.constructor = PersistentHashMapKeysIterator;
  PersistentHashMapEntriesIterator.prototype = Object.create(PersistentHashMapBaseIterator.prototype);
  PersistentHashMapEntriesIterator.prototype.constructor = PersistentHashMapEntriesIterator;
  TrieNodeKeysIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeKeysIterator.prototype.constructor = TrieNodeKeysIterator;
  TrieNodeValuesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeValuesIterator.prototype.constructor = TrieNodeValuesIterator;
  TrieNodeEntriesIterator.prototype = Object.create(TrieNodeBaseIterator.prototype);
  TrieNodeEntriesIterator.prototype.constructor = TrieNodeEntriesIterator;
  PersistentHashMapKeys.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapKeys.prototype.constructor = PersistentHashMapKeys;
  PersistentHashMapEntries.prototype = Object.create(AbstractSet.prototype);
  PersistentHashMapEntries.prototype.constructor = PersistentHashMapEntries;
  PersistentOrderedSet.prototype = Object.create(AbstractSet.prototype);
  PersistentOrderedSet.prototype.constructor = PersistentOrderedSet;
  MutableSnapshot.prototype = Object.create(Snapshot.prototype);
  MutableSnapshot.prototype.constructor = MutableSnapshot;
  Success.prototype = Object.create(SnapshotApplyResult.prototype);
  Success.prototype.constructor = Success;
  Failure.prototype = Object.create(SnapshotApplyResult.prototype);
  Failure.prototype.constructor = Failure;
  GlobalSnapshot.prototype = Object.create(MutableSnapshot.prototype);
  GlobalSnapshot.prototype.constructor = GlobalSnapshot;
  NestedMutableSnapshot.prototype = Object.create(MutableSnapshot.prototype);
  NestedMutableSnapshot.prototype.constructor = NestedMutableSnapshot;
  SnapshotIdSet$iterator$slambda.prototype = Object.create(CoroutineImpl.prototype);
  SnapshotIdSet$iterator$slambda.prototype.constructor = SnapshotIdSet$iterator$slambda;
  StateListStateRecord.prototype = Object.create(StateRecord.prototype);
  StateListStateRecord.prototype.constructor = StateListStateRecord;
  $withFrameNanosCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $withFrameNanosCOROUTINE$4.prototype.constructor = $withFrameNanosCOROUTINE$4;
  //endregion
  function Applier() {
  }
  Applier.$metadata$ = interfaceMeta('Applier');
  function OffsetApplier(applier, offset) {
    this.rq_1 = applier;
    this.sq_1 = offset;
    this.tq_1 = 0;
  }
  OffsetApplier.prototype.iq = function () {
    return this.rq_1.iq();
  };
  OffsetApplier.prototype.lq = function (node) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.tq_1;
    tmp0_this.tq_1 = tmp1 + 1 | 0;
    this.rq_1.lq(node);
  };
  OffsetApplier.prototype.mq = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.tq_1 > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.OffsetApplier.up.<anonymous>' call
      tmp$ret$0 = 'OffsetApplier up called with no corresponding down';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.tq_1;
    tmp0_this.tq_1 = tmp1 - 1 | 0;
    this.rq_1.mq();
  };
  OffsetApplier.prototype.nq = function (index, instance) {
    this.rq_1.nq(index + (this.tq_1 === 0 ? this.sq_1 : 0) | 0, instance);
  };
  OffsetApplier.prototype.oq = function (index, instance) {
    this.rq_1.oq(index + (this.tq_1 === 0 ? this.sq_1 : 0) | 0, instance);
  };
  OffsetApplier.prototype.pq = function (index, count) {
    this.rq_1.pq(index + (this.tq_1 === 0 ? this.sq_1 : 0) | 0, count);
  };
  OffsetApplier.prototype.qq = function (from, to, count) {
    var effectiveOffset = this.tq_1 === 0 ? this.sq_1 : 0;
    this.rq_1.qq(from + effectiveOffset | 0, to + effectiveOffset | 0, count);
  };
  OffsetApplier.$metadata$ = classMeta('OffsetApplier', [Applier]);
  function AbstractApplier(root) {
    this.uq_1 = root;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.vq_1 = tmp$ret$0;
    this.wq_1 = this.uq_1;
    this.xq_1 = 8;
  }
  AbstractApplier.prototype.yq = function (_set____db54di) {
    this.wq_1 = _set____db54di;
  };
  AbstractApplier.prototype.iq = function () {
    return this.wq_1;
  };
  AbstractApplier.prototype.zq = function (node) {
    this.vq_1.a(this.iq());
    this.yq(node);
  };
  AbstractApplier.prototype.lq = function (node) {
    return this.zq((node == null ? true : isObject(node)) ? node : THROW_CCE());
  };
  AbstractApplier.prototype.mq = function () {
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.vq_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    var tmp1_check = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.yq(this.vq_1.z2(this.vq_1.h() - 1 | 0));
  };
  AbstractApplier.$metadata$ = classMeta('AbstractApplier', [Applier]);
  function rol(_this__u8e3s4, other) {
    return rotateLeft(_this__u8e3s4, other);
  }
  function ror(_this__u8e3s4, other) {
    return rotateRight(_this__u8e3s4, other);
  }
  function FrameAwaiter(onFrame, continuation) {
    this.ar_1 = onFrame;
    this.br_1 = continuation;
  }
  FrameAwaiter.prototype.cr = function () {
    return this.ar_1;
  };
  FrameAwaiter.prototype.go = function () {
    return this.br_1;
  };
  FrameAwaiter.prototype.dr = function (timeNanos) {
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.FrameAwaiter.resume.<anonymous>' call
      tmp$ret$0 = this.ar_1(timeNanos);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    this.br_1.j3(tmp$ret$3);
  };
  FrameAwaiter.$metadata$ = classMeta('FrameAwaiter');
  function fail($this, cause) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.fr_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    if (!($this.gr_1 == null))
      return Unit_getInstance();
    $this.gr_1 = cause;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = $this.hr_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.i(index);
        // Inline function 'androidx.compose.runtime.BroadcastFrameClock.fail.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = item.br_1;
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        tmp0_resumeWithException.j3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
      }
       while (inductionVariable <= last);
    $this.hr_1.t5();
    tmp$ret$2 = Unit_getInstance();
    tmp$ret$3 = tmp$ret$2;
  }
  function BroadcastFrameClock$withFrameNanos$lambda(this$0, $awaiter) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.fr_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0.hr_1;
      var tmp_0;
      if ($awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = $awaiter._v;
      }
      tmp.y2(tmp_0);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function BroadcastFrameClock(onNewAwaiters) {
    this.er_1 = onNewAwaiters;
    this.fr_1 = createSynchronizedObject();
    this.gr_1 = null;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.hr_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.ir_1 = tmp$ret$1;
    this.jr_1 = 8;
  }
  BroadcastFrameClock.prototype.kr = function () {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.fr_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.BroadcastFrameClock.<get-hasAwaiters>.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.hr_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  BroadcastFrameClock.prototype.lr = function (timeNanos) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.fr_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var toResume = this.hr_1;
    this.hr_1 = this.ir_1;
    this.ir_1 = toResume;
    var inductionVariable = 0;
    var last = toResume.h();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        toResume.i(i).dr(timeNanos);
      }
       while (inductionVariable < last);
    toResume.t5();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  BroadcastFrameClock.prototype.mr = function (onFrame, $cont) {
    var tmp$ret$7;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.rh();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>' call
      var awaiter = {_v: null};
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this.fr_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.BroadcastFrameClock.withFrameNanos.<anonymous>.<anonymous>' call
      var cause = this.gr_1;
      if (!(cause == null)) {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
        cancellable.j3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = Unit_getInstance();
        break $l$block;
      }
      awaiter._v = new FrameAwaiter(onFrame, cancellable);
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = this.hr_1;
      tmp$ret$3 = !tmp0_isNotEmpty.j();
      var hadAwaiters = tmp$ret$3;
      var tmp = this.hr_1;
      var tmp_0;
      if (awaiter._v == null) {
        throwUninitializedPropertyAccessException('awaiter');
      } else {
        tmp_0 = awaiter._v;
      }
      tmp.a(tmp_0);
      tmp$ret$4 = !hadAwaiters;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var hasNewAwaiters = tmp$ret$6;
      cancellable.tg(BroadcastFrameClock$withFrameNanos$lambda(this, awaiter));
      if (hasNewAwaiters ? !(this.er_1 == null) : false) {
        try {
          this.er_1();
        } catch ($p) {
          if ($p instanceof Error) {
            fail(this, $p);
          } else {
            throw $p;
          }
        }
      }
    }
    tmp$ret$7 = cancellable.fg();
    return tmp$ret$7;
  };
  BroadcastFrameClock.$metadata$ = classMeta('BroadcastFrameClock', [MonotonicFrameClock]);
  function remember$composable(calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(547886695);
    sourceInformation($composer_0, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var value = calculation();
      tmp1_cache.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.rr();
    return tmp0;
  }
  function remember$composable_0(key1, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(-838505973);
    sourceInformation($composer_0, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = $composer_0.sr(key1);
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var value = calculation();
      tmp1_cache.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.rr();
    return tmp0;
  }
  function remember$composable_1(key1, key2, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(-1124426577);
    sourceInformation($composer_0, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = !!($composer_0.sr(key1) | $composer_0.sr(key2));
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var value = calculation();
      tmp1_cache.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.rr();
    return tmp0;
  }
  function remember$composable_2(key1, key2, key3, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(-1058148781);
    sourceInformation($composer_0, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = !!(!!($composer_0.sr(key1) | $composer_0.sr(key2)) | $composer_0.sr(key3));
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var value = calculation();
      tmp1_cache.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.rr();
    return tmp0;
  }
  function remember$composable_3(keys, calculation, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(-1603429786);
    sourceInformation($composer_0, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = keys;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_0.sr(key));
    }
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_0;
    var tmp2_cache = invalid;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var value = calculation();
      tmp1_cache.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    tmp$ret$2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$2;
    $composer_0.rr();
    return tmp0;
  }
  function invalidApplier() {
    throw IllegalStateException_init_$Create$('Invalid applier');
  }
  function get_compositionTracer() {
    init_properties_Composer_kt_de8r5y();
    return compositionTracer;
  }
  var compositionTracer;
  function get_removeCurrentGroupInstance() {
    init_properties_Composer_kt_de8r5y();
    return removeCurrentGroupInstance;
  }
  var removeCurrentGroupInstance;
  function get_skipToGroupEndInstance() {
    init_properties_Composer_kt_de8r5y();
    return skipToGroupEndInstance;
  }
  var skipToGroupEndInstance;
  function get_endGroupInstance() {
    init_properties_Composer_kt_de8r5y();
    return endGroupInstance;
  }
  var endGroupInstance;
  function get_startRootGroup() {
    init_properties_Composer_kt_de8r5y();
    return startRootGroup;
  }
  var startRootGroup;
  function get_resetSlotsInstance() {
    init_properties_Composer_kt_de8r5y();
    return resetSlotsInstance;
  }
  var resetSlotsInstance;
  function get_invocation() {
    init_properties_Composer_kt_de8r5y();
    return invocation;
  }
  var invocation;
  function get_provider() {
    init_properties_Composer_kt_de8r5y();
    return provider;
  }
  var provider;
  function get_compositionLocalMap() {
    init_properties_Composer_kt_de8r5y();
    return compositionLocalMap;
  }
  var compositionLocalMap;
  function get_providerValues() {
    init_properties_Composer_kt_de8r5y();
    return providerValues;
  }
  var providerValues;
  function get_providerMaps() {
    init_properties_Composer_kt_de8r5y();
    return providerMaps;
  }
  var providerMaps;
  function get_reference() {
    init_properties_Composer_kt_de8r5y();
    return reference;
  }
  var reference;
  function RememberManager() {
  }
  RememberManager.$metadata$ = interfaceMeta('RememberManager');
  function removeCurrentGroup(_this__u8e3s4, rememberManager) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.qs();
    tmp$ret$0 = tmp0_iterator;
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.f()) {
      var slot = tmp0_iterator_0.g();
      var tmp1_subject = slot;
      if (!(tmp1_subject == null) ? isInterface(tmp1_subject, RememberObserver) : false) {
        rememberManager.ur(slot);
      } else {
        if (tmp1_subject instanceof RecomposeScopeImpl) {
          var composition = slot.ss_1;
          if (!(composition == null)) {
            composition.lt_1 = true;
            slot.xi();
          }
        }
      }
    }
    _this__u8e3s4.tt();
  }
  function startRoot($this) {
    $this.av_1 = $this.wt_1.dw();
    startGroup($this, 100);
    $this.vt_1.fw();
    $this.ou_1 = $this.vt_1.gw();
    $this.ru_1.jw(asInt($this.qu_1));
    $this.qu_1 = $this.sr($this.ou_1);
    $this.ev_1 = null;
    if (!$this.ju_1) {
      $this.ju_1 = $this.vt_1.kw();
    }
    var tmp0_safe_receiver = resolveCompositionLocal($this, get_LocalInspectionTables(), $this.ou_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.a($this.wt_1);
      $this.vt_1.lw(tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
    startGroup($this, $this.vt_1.mw());
  }
  function endRoot($this) {
    endGroup($this);
    $this.vt_1.nw();
    endGroup($this);
    recordEndRoot($this);
    finalizeCompose($this);
    $this.av_1.ax();
    $this.ku_1 = false;
  }
  function abortRoot($this) {
    cleanUpCompose($this);
    $this.bu_1.t5();
    $this.eu_1.t5();
    $this.gu_1.t5();
    $this.nu_1.t5();
    $this.ru_1.t5();
    $this.pu_1.t5();
    if (!$this.av_1.tw_1) {
      $this.av_1.ax();
    }
    if (!$this.cv_1.os_1) {
      $this.cv_1.ax();
    }
    createFreshInsertTable($this);
    $this.jv_1 = 0;
    $this.uu_1 = 0;
    $this.lu_1 = false;
    $this.iv_1 = false;
    $this.su_1 = false;
    $this.yu_1 = false;
    $this.ku_1 = false;
  }
  function startGroup($this, key) {
    return start($this, key, null, false, null);
  }
  function startGroup_0($this, key, dataKey) {
    return start($this, key, dataKey, false, null);
  }
  function endGroup($this) {
    return end($this, false);
  }
  function skipGroup($this) {
    var tmp0_this = $this;
    tmp0_this.fu_1 = tmp0_this.fu_1 + $this.av_1.cx() | 0;
  }
  function currentCompositionLocalScope($this, group) {
    if (group == null) {
      var tmp0_safe_receiver = $this.ev_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if ($this.iv_1 ? $this.dv_1 : false) {
      var current = $this.cv_1.ns_1;
      while (current > 0) {
        if ($this.cv_1.fx(current) === 202 ? equals($this.cv_1.ex(current), get_compositionLocalMap()) : false) {
          var tmp = $this.cv_1.dx(current);
          var providers = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
          $this.ev_1 = providers;
          return providers;
        }
        current = $this.cv_1.gx(current);
      }
    }
    if ($this.av_1.h() > 0) {
      var tmp1_elvis_lhs = group;
      var current_0 = tmp1_elvis_lhs == null ? $this.av_1.ww_1 : tmp1_elvis_lhs;
      while (current_0 > 0) {
        if ($this.av_1.fx(current_0) === 202 ? equals($this.av_1.ex(current_0), get_compositionLocalMap()) : false) {
          var tmp2_elvis_lhs = $this.pu_1.k2(current_0);
          var tmp_0;
          if (tmp2_elvis_lhs == null) {
            var tmp_1 = $this.av_1.dx(current_0);
            tmp_0 = (!(tmp_1 == null) ? isInterface(tmp_1, PersistentMap) : false) ? tmp_1 : THROW_CCE();
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }
          var providers_0 = tmp_0;
          $this.ev_1 = providers_0;
          return providers_0;
        }
        current_0 = $this.av_1.gx(current_0);
      }
    }
    $this.ev_1 = $this.ou_1;
    return $this.ou_1;
  }
  function currentCompositionLocalScope$default($this, group, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      group = null;
    return currentCompositionLocalScope($this, group);
  }
  function updateProviderMapGroup($this, parentScope, currentProviders) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = parentScope.hx();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.updateProviderMapGroup.<anonymous>' call
    tmp0_apply.a7(currentProviders);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.ix();
    var providerScope = tmp$ret$1;
    startGroup_0($this, 204, get_providerMaps());
    $this.sr(providerScope);
    $this.sr(currentProviders);
    endGroup($this);
    return providerScope;
  }
  function resolveCompositionLocal($this, key, scope) {
    var tmp;
    if (contains_0(scope, key)) {
      tmp = getValueOf(scope, key);
    } else {
      tmp = key.jx_1.z1();
    }
    return tmp;
  }
  function ensureWriter($this) {
    if ($this.cv_1.os_1) {
      $this.cv_1 = $this.bv_1.lx();
      $this.cv_1.mx();
      $this.dv_1 = false;
      $this.ev_1 = null;
    }
  }
  function createFreshInsertTable($this) {
    runtimeCheck($this.cv_1.os_1);
    $this.bv_1 = new SlotTable();
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.bv_1.lx();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.createFreshInsertTable.<anonymous>' call
    tmp0_also.ax();
    tmp$ret$0 = tmp0_also;
    tmp.cv_1 = tmp$ret$0;
  }
  function startReaderGroup($this, isNode, data) {
    if (isNode) {
      $this.av_1.px();
    } else {
      if (!(data == null) ? !($this.av_1.nx() === data) : false) {
        recordSlotTableOperation$default($this, false, ComposerImpl$startReaderGroup$lambda(data), 2, null);
      }
      $this.av_1.ox();
    }
  }
  function start($this, key, objectKey, isNode, data) {
    validateNodeNotExpected($this);
    updateCompoundKeyWhenWeEnterGroup($this, key, objectKey, data);
    if ($this.iv_1) {
      $this.av_1.qx();
      var startIndex = $this.cv_1.ms_1;
      if (isNode) {
        $this.cv_1.tx(Companion_getInstance_1().qr_1);
      } else if (!(data == null)) {
        var tmp = $this.cv_1;
        var tmp0_elvis_lhs = objectKey;
        tmp.sx(key, tmp0_elvis_lhs == null ? Companion_getInstance_1().qr_1 : tmp0_elvis_lhs, data);
      } else {
        var tmp_0 = $this.cv_1;
        var tmp1_elvis_lhs = objectKey;
        tmp_0.rx(key, tmp1_elvis_lhs == null ? Companion_getInstance_1().qr_1 : tmp1_elvis_lhs);
      }
      var tmp2_safe_receiver = $this.cu_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.start.<anonymous>' call
        var insertKeyInfo = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex), -1, 0);
        tmp2_safe_receiver.ay(insertKeyInfo, $this.du_1 - tmp2_safe_receiver.vx_1 | 0);
        tmp$ret$0 = tmp2_safe_receiver.by(insertKeyInfo);
        tmp$ret$1 = tmp$ret$0;
      }
      enterGroup($this, isNode, null);
      return Unit_getInstance();
    }
    if ($this.cu_1 == null) {
      var slotKey = $this.av_1.cy();
      if (slotKey === key ? equals(objectKey, $this.av_1.ey()) : false) {
        startReaderGroup($this, isNode, data);
      } else {
        $this.cu_1 = new Pending($this.av_1.dy(), $this.du_1);
      }
    }
    var pending = $this.cu_1;
    var newPending = null;
    if (!(pending == null)) {
      var keyInfo = pending.fy(key, objectKey);
      if (!(keyInfo == null)) {
        pending.by(keyInfo);
        var location = keyInfo.ky_1;
        $this.du_1 = pending.ny(keyInfo) + pending.vx_1 | 0;
        var relativePosition = pending.oy(keyInfo);
        var currentRelativePosition = relativePosition - pending.wx_1 | 0;
        pending.py(relativePosition, pending.wx_1);
        recordReaderMoving($this, location);
        $this.av_1.qy(location);
        if (currentRelativePosition > 0) {
          recordSlotEditingOperation($this, ComposerImpl$start$lambda(currentRelativePosition));
        }
        startReaderGroup($this, isNode, data);
      } else {
        $this.av_1.qx();
        $this.iv_1 = true;
        $this.ev_1 = null;
        ensureWriter($this);
        $this.cv_1.gy();
        var startIndex_0 = $this.cv_1.ms_1;
        if (isNode) {
          $this.cv_1.tx(Companion_getInstance_1().qr_1);
        } else if (!(data == null)) {
          var tmp_1 = $this.cv_1;
          var tmp3_elvis_lhs = objectKey;
          tmp_1.sx(key, tmp3_elvis_lhs == null ? Companion_getInstance_1().qr_1 : tmp3_elvis_lhs, data);
        } else {
          var tmp_2 = $this.cv_1;
          var tmp4_elvis_lhs = objectKey;
          tmp_2.rx(key, tmp4_elvis_lhs == null ? Companion_getInstance_1().qr_1 : tmp4_elvis_lhs);
        }
        $this.gv_1 = $this.cv_1.hy(startIndex_0);
        var insertKeyInfo_0 = new KeyInfo(key, -1, insertedGroupVirtualIndex($this, startIndex_0), -1, 0);
        pending.ay(insertKeyInfo_0, $this.du_1 - pending.vx_1 | 0);
        pending.by(insertKeyInfo_0);
        var tmp$ret$2;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$2 = ArrayList_init_$Create$();
        newPending = new Pending(tmp$ret$2, isNode ? 0 : $this.du_1);
      }
    }
    enterGroup($this, isNode, newPending);
  }
  function enterGroup($this, isNode, newPending) {
    $this.bu_1.ry($this.cu_1);
    $this.cu_1 = newPending;
    $this.eu_1.jw($this.du_1);
    if (isNode)
      $this.du_1 = 0;
    $this.gu_1.jw($this.fu_1);
    $this.fu_1 = 0;
  }
  function exitGroup($this, expectedNodeCount, inserting) {
    var previousPending = $this.bu_1.sy();
    if (!(previousPending == null) ? !inserting : false) {
      var tmp0_this = previousPending;
      var tmp1 = tmp0_this.wx_1;
      tmp0_this.wx_1 = tmp1 + 1 | 0;
    }
    $this.cu_1 = previousPending;
    $this.du_1 = $this.eu_1.sy() + expectedNodeCount | 0;
    $this.fu_1 = $this.gu_1.sy() + expectedNodeCount | 0;
  }
  function end($this, isNode) {
    if ($this.iv_1) {
      var parent = $this.cv_1.ns_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.cv_1.fx(parent), $this.cv_1.ex(parent), $this.cv_1.dx(parent));
    } else {
      var parent_0 = $this.av_1.ww_1;
      updateCompoundKeyWhenWeExitGroup($this, $this.av_1.fx(parent_0), $this.av_1.ex(parent_0), $this.av_1.dx(parent_0));
    }
    var expectedNodeCount = $this.fu_1;
    var pending = $this.cu_1;
    if (!(pending == null) ? pending.ux_1.h() > 0 : false) {
      var previous = pending.ux_1;
      var current = pending.ty();
      var usedKeys = fastToSet(current);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableSetOf' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var placedKeys = tmp$ret$0;
      var currentIndex = 0;
      var currentEnd = current.h();
      var previousIndex = 0;
      var previousEnd = previous.h();
      var nodeOffset = 0;
      $l$loop_0: while (previousIndex < previousEnd) {
        var previousInfo = previous.i(previousIndex);
        if (!usedKeys.k(previousInfo)) {
          var deleteOffset = pending.ny(previousInfo);
          recordRemoveNode($this, deleteOffset + pending.vx_1 | 0, previousInfo.ly_1);
          pending.uy(previousInfo.ky_1, 0);
          recordReaderMoving($this, previousInfo.ky_1);
          $this.av_1.qy(previousInfo.ky_1);
          recordDelete($this);
          $this.av_1.cx();
          removeRange($this.mu_1, previousInfo.ky_1, previousInfo.ky_1 + $this.av_1.vy(previousInfo.ky_1) | 0);
          var tmp0 = previousIndex;
          previousIndex = tmp0 + 1 | 0;
          continue $l$loop_0;
        }
        if (placedKeys.k(previousInfo)) {
          var tmp1 = previousIndex;
          previousIndex = tmp1 + 1 | 0;
          continue $l$loop_0;
        }
        if (currentIndex < currentEnd) {
          var currentInfo = current.i(currentIndex);
          if (!(currentInfo === previousInfo)) {
            var nodePosition = pending.ny(currentInfo);
            placedKeys.a(currentInfo);
            if (!(nodePosition === nodeOffset)) {
              var updatedCount = pending.wy(currentInfo);
              recordMoveNode($this, nodePosition + pending.vx_1 | 0, nodeOffset + pending.vx_1 | 0, updatedCount);
              pending.xy(nodePosition, nodeOffset, updatedCount);
            }
          } else {
            var tmp2 = previousIndex;
            previousIndex = tmp2 + 1 | 0;
          }
          var tmp3 = currentIndex;
          currentIndex = tmp3 + 1 | 0;
          nodeOffset = nodeOffset + pending.wy(currentInfo) | 0;
        }
      }
      realizeMovement($this);
      if (previous.h() > 0) {
        recordReaderMoving($this, $this.av_1.yy());
        $this.av_1.mx();
      }
    }
    var removeIndex = $this.du_1;
    while (!$this.av_1.zy()) {
      var startSlot = $this.av_1.uw_1;
      recordDelete($this);
      var nodesToRemove = $this.av_1.cx();
      recordRemoveNode($this, removeIndex, nodesToRemove);
      removeRange($this.mu_1, startSlot, $this.av_1.uw_1);
    }
    var inserting = $this.iv_1;
    if (inserting) {
      if (isNode) {
        registerInsertUpFixup($this);
        expectedNodeCount = 1;
      }
      $this.av_1.bz();
      var parentGroup = $this.cv_1.ns_1;
      $this.cv_1.cz();
      if (!$this.av_1.ez()) {
        var virtualIndex = insertedGroupVirtualIndex($this, parentGroup);
        $this.cv_1.dz();
        $this.cv_1.ax();
        recordInsert($this, $this.gv_1);
        $this.iv_1 = false;
        if (!$this.wt_1.mj()) {
          updateNodeCount($this, virtualIndex, 0);
          updateNodeCountOverrides($this, virtualIndex, expectedNodeCount);
        }
      }
    } else {
      if (isNode) {
        recordUp($this);
      }
      recordEndGroup($this);
      var parentGroup_0 = $this.av_1.ww_1;
      var parentNodeCount = updatedNodeCount($this, parentGroup_0);
      if (!(expectedNodeCount === parentNodeCount)) {
        updateNodeCountOverrides($this, parentGroup_0, expectedNodeCount);
      }
      if (isNode) {
        expectedNodeCount = 1;
      }
      $this.av_1.az();
      realizeMovement($this);
    }
    exitGroup($this, expectedNodeCount, inserting);
  }
  function recomposeToGroupEnd($this) {
    var wasComposing = $this.yu_1;
    $this.yu_1 = true;
    var recomposed = false;
    var parent = $this.av_1.ww_1;
    var end = parent + $this.av_1.vy(parent) | 0;
    var recomposeIndex = $this.du_1;
    var recomposeCompoundKey = $this.jv_1;
    var oldGroupNodeCount = $this.fu_1;
    var oldGroup = parent;
    var firstInRange_0 = firstInRange($this.mu_1, $this.av_1.uw_1, end);
    while (!(firstInRange_0 == null)) {
      var location = firstInRange_0.gz_1;
      removeLocation($this.mu_1, location);
      if (firstInRange_0.lz()) {
        recomposed = true;
        $this.av_1.qy(location);
        var newGroup = $this.av_1.uw_1;
        recordUpsAndDowns($this, oldGroup, newGroup, parent);
        oldGroup = newGroup;
        $this.du_1 = nodeIndexOf($this, location, newGroup, parent, recomposeIndex);
        $this.jv_1 = compoundKeyOf($this, $this.av_1.gx(newGroup), parent, recomposeCompoundKey);
        $this.ev_1 = null;
        firstInRange_0.fz_1.jz($this);
        $this.ev_1 = null;
        $this.av_1.kz(parent);
      } else {
        $this.xu_1.ry(firstInRange_0.fz_1);
        firstInRange_0.fz_1.iz();
        $this.xu_1.sy();
      }
      firstInRange_0 = firstInRange($this.mu_1, $this.av_1.uw_1, end);
    }
    if (recomposed) {
      recordUpsAndDowns($this, oldGroup, parent, parent);
      $this.av_1.mx();
      var parentGroupNodes = updatedNodeCount($this, parent);
      $this.du_1 = recomposeIndex + parentGroupNodes | 0;
      $this.fu_1 = oldGroupNodeCount + parentGroupNodes | 0;
    } else {
      skipReaderToGroupEnd($this);
    }
    $this.jv_1 = recomposeCompoundKey;
    $this.yu_1 = wasComposing;
  }
  function insertedGroupVirtualIndex($this, index) {
    return -2 - index | 0;
  }
  function updateNodeCountOverrides($this, group, newCount) {
    var currentCount = updatedNodeCount($this, group);
    if (!(currentCount === newCount)) {
      var delta = newCount - currentCount | 0;
      var current = group;
      var minPending = $this.bu_1.h() - 1 | 0;
      $l$loop_0: while (!(current === -1)) {
        var newCurrentNodes = updatedNodeCount($this, current) + delta | 0;
        updateNodeCount($this, current, newCurrentNodes);
        var inductionVariable = minPending;
        if (0 <= inductionVariable)
          $l$loop: do {
            var pendingIndex = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            var pending = $this.bu_1.mz(pendingIndex);
            if (!(pending == null) ? pending.uy(current, newCurrentNodes) : false) {
              minPending = pendingIndex - 1 | 0;
              break $l$loop;
            }
          }
           while (0 <= inductionVariable);
        if (current < 0) {
          current = $this.av_1.ww_1;
        } else {
          if ($this.av_1.nz(current))
            break $l$loop_0;
          current = $this.av_1.gx(current);
        }
      }
    }
  }
  function nodeIndexOf($this, groupLocation, group, recomposeGroup, recomposeIndex) {
    var anchorGroup = $this.av_1.gx(group);
    $l$loop: while (!(anchorGroup === recomposeGroup)) {
      if ($this.av_1.nz(anchorGroup))
        break $l$loop;
      anchorGroup = $this.av_1.gx(anchorGroup);
    }
    var index = $this.av_1.nz(anchorGroup) ? 0 : recomposeIndex;
    if (anchorGroup === group)
      return index;
    var current = anchorGroup;
    var nodeIndexLimit = index + (updatedNodeCount($this, anchorGroup) - $this.av_1.oz(group) | 0) | 0;
    loop: while (index < nodeIndexLimit) {
      if (current === groupLocation)
        break loop;
      var tmp0 = current;
      current = tmp0 + 1 | 0;
      while (current < groupLocation) {
        var end = current + $this.av_1.vy(current) | 0;
        if (groupLocation < end)
          continue loop;
        index = index + updatedNodeCount($this, current) | 0;
        current = end;
      }
      break loop;
    }
    return index;
  }
  function updatedNodeCount($this, group) {
    if (group < 0) {
      var tmp0_safe_receiver = $this.iu_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.updatedNodeCount.<anonymous>' call
        tmp$ret$0 = tmp0_safe_receiver.k2(group);
        tmp$ret$1 = tmp$ret$0;
        tmp = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp;
      return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    var nodeCounts = $this.hu_1;
    if (!(nodeCounts == null)) {
      var override = nodeCounts[group];
      if (override >= 0)
        return override;
    }
    return $this.av_1.oz(group);
  }
  function updateNodeCount($this, group, count) {
    if (!(updatedNodeCount($this, group) === count)) {
      if (group < 0) {
        var tmp0_elvis_lhs = $this.iu_1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts = HashMap_init_$Create$();
          $this.iu_1 = newCounts;
          tmp$ret$0 = newCounts;
          tmp$ret$1 = tmp$ret$0;
          tmp = tmp$ret$1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var virtualCounts = tmp;
        // Inline function 'kotlin.collections.set' call
        virtualCounts.w2(group, count);
      } else {
        var tmp1_elvis_lhs = $this.hu_1;
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          var tmp$ret$3;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.updateNodeCount.<anonymous>' call
          var newCounts_0 = new Int32Array($this.av_1.h());
          fill$default(newCounts_0, -1, 0, 0, 6, null);
          $this.hu_1 = newCounts_0;
          tmp$ret$2 = newCounts_0;
          tmp$ret$3 = tmp$ret$2;
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var nodeCounts = tmp_0;
        nodeCounts[group] = count;
      }
    }
  }
  function clearUpdatedNodeCounts($this) {
    $this.hu_1 = null;
    $this.iu_1 = null;
  }
  function recordUpsAndDowns($this, oldGroup, newGroup, commonRoot) {
    var reader = $this.av_1;
    var nearestCommonRoot = nearestCommonRootOf(reader, oldGroup, newGroup, commonRoot);
    var current = oldGroup;
    while (current > 0 ? !(current === nearestCommonRoot) : false) {
      if (reader.nz(current)) {
        recordUp($this);
      }
      current = reader.gx(current);
    }
    doRecordDownsFor($this, newGroup, nearestCommonRoot);
  }
  function doRecordDownsFor($this, group, nearestCommonRoot) {
    if (group > 0 ? !(group === nearestCommonRoot) : false) {
      doRecordDownsFor($this, $this.av_1.gx(group), nearestCommonRoot);
      if ($this.av_1.nz(group)) {
        recordDown($this, nodeAt($this.av_1, $this, group));
      }
    }
  }
  function compoundKeyOf($this, group, recomposeGroup, recomposeKey) {
    var tmp;
    if (group === recomposeGroup) {
      tmp = recomposeKey;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.compoundKeyOf.<anonymous>' call
      var groupKey = groupCompoundKeyPart($this.av_1, $this, group);
      var tmp_0;
      if (groupKey === get_movableContentKey()) {
        tmp_0 = groupKey;
      } else {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rol' call
        var tmp0_rol = compoundKeyOf($this, $this.av_1.gx(group), recomposeGroup, recomposeKey);
        tmp$ret$0 = rotateLeft(tmp0_rol, 3);
        tmp_0 = tmp$ret$0 ^ groupKey;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function groupCompoundKeyPart(_this__u8e3s4, $this, group) {
    var tmp;
    if (_this__u8e3s4.pz(group)) {
      var tmp0_safe_receiver = _this__u8e3s4.ex(group);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
        var tmp0_subject = tmp0_safe_receiver;
        var tmp_1;
        if (tmp0_subject instanceof Enum) {
          tmp_1 = tmp0_safe_receiver.e4_1;
        } else {
          if (tmp0_subject instanceof MovableContent) {
            tmp_1 = get_movableContentKey();
          } else {
            tmp_1 = hashCode(tmp0_safe_receiver);
          }
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp_0 = tmp$ret$1;
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.fx(group);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>' call
      var tmp_2;
      if (tmp0_let === 207) {
        var tmp0_safe_receiver_0 = _this__u8e3s4.dx(group);
        var tmp_3;
        if (tmp0_safe_receiver_0 == null) {
          tmp_3 = null;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.ComposerImpl.groupCompoundKeyPart.<anonymous>.<anonymous>' call
          tmp$ret$2 = equals(tmp0_safe_receiver_0, Companion_getInstance_1().qr_1) ? tmp0_let : hashCode(tmp0_safe_receiver_0);
          tmp$ret$3 = tmp$ret$2;
          tmp_3 = tmp$ret$3;
        }
        var tmp1_elvis_lhs_0 = tmp_3;
        tmp_2 = tmp1_elvis_lhs_0 == null ? tmp0_let : tmp1_elvis_lhs_0;
      } else {
        tmp_2 = tmp0_let;
      }
      tmp$ret$4 = tmp_2;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    return tmp;
  }
  function skipReaderToGroupEnd($this) {
    $this.fu_1 = $this.av_1.qz();
    $this.av_1.mx();
  }
  function addRecomposeScope($this) {
    if ($this.iv_1) {
      var tmp = $this.au_1;
      var scope = new RecomposeScopeImpl(tmp instanceof CompositionImpl ? tmp : THROW_CCE());
      $this.xu_1.ry(scope);
      $this.rz(scope);
      scope.tz($this.wu_1);
    } else {
      var invalidation = removeLocation($this.mu_1, $this.av_1.ww_1);
      var slot = $this.av_1.g();
      var tmp_0;
      if (equals(slot, Companion_getInstance_1().qr_1)) {
        var tmp_1 = $this.au_1;
        var newScope = new RecomposeScopeImpl(tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE());
        $this.rz(newScope);
        tmp_0 = newScope;
      } else {
        tmp_0 = slot instanceof RecomposeScopeImpl ? slot : THROW_CCE();
      }
      var scope_0 = tmp_0;
      scope_0.sz(!(invalidation == null));
      $this.xu_1.ry(scope_0);
      scope_0.tz($this.wu_1);
    }
  }
  function invokeMovableContentLambda($this, content, locals, parameter, force) {
    $this.uz(get_movableContentKey(), content);
    $this.sr(parameter);
    var savedCompoundKeyHash = $this.jv_1;
    try {
      $this.jv_1 = get_movableContentKey();
      if ($this.iv_1) {
        var tmp = $this.cv_1;
        tmp.vz(0, 1, null);
      }
      var providersChanged = $this.iv_1 ? false : !equals($this.av_1.nx(), locals);
      if (providersChanged) {
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.pu_1;
        var tmp1_set = $this.av_1.uw_1;
        tmp0_set.w2(tmp1_set, locals);
      }
      start($this, 202, get_compositionLocalMap(), false, locals);
      if ($this.iv_1 ? !force : false) {
        $this.dv_1 = true;
        $this.ev_1 = null;
        var anchor = $this.cv_1.hy($this.cv_1.gx($this.cv_1.ns_1));
        var tmp_0 = $this.bv_1;
        var tmp_1 = emptyList();
        var reference = new MovableContentStateReference(content, parameter, $this.au_1, tmp_0, anchor, tmp_1, currentCompositionLocalScope$default($this, null, 2, null));
        $this.vt_1.wz(reference);
      } else {
        var savedProvidersInvalid = $this.qu_1;
        $this.qu_1 = providersChanged;
        invokeComposable$composable($this, ComposableLambda$invoke$ref(composableLambdaInstance(694380496, true, ComposerImpl$invokeMovableContentLambda$lambda(content, parameter))));
        $this.qu_1 = savedProvidersInvalid;
      }
    }finally {
      endGroup($this);
      $this.jv_1 = savedCompoundKeyHash;
      $this.xz();
    }
  }
  function insertMovableContentGuarded($this, references) {
    var tmp$ret$13;
    $l$block_1: {
      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
      var tmp0_withChanges = $this.zt_1;
      var savedChanges = $this.yt_1;
      try {
        $this.yt_1 = tmp0_withChanges;
        record($this, get_resetSlotsInstance());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = references.h() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = references.i(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>' call
            var to = item.i5();
            var from = item.j5();
            var anchor = to.c10_1;
            var location = to.b10_1.g10(anchor);
            var effectiveNodeIndex = {_v: 0};
            realizeUps($this);
            record($this, ComposerImpl$insertMovableContentGuarded$lambda(effectiveNodeIndex, anchor));
            if (from == null) {
              var toSlotTable = to.b10_1;
              if (equals(toSlotTable, $this.bv_1)) {
                createFreshInsertTable($this);
              }
              var tmp$ret$4;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp1_read = to.b10_1;
              var tmp$ret$3;
              // Inline function 'kotlin.let' call
              var tmp0_let = tmp1_read.dw();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$2;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp;
              try {
                tmp0_let.qy(location);
                $this.mv_1 = location;
                var tmp$ret$0;
                // Inline function 'kotlin.collections.mutableListOf' call
                tmp$ret$0 = ArrayList_init_$Create$();
                var offsetChanges = tmp$ret$0;
                recomposeMovableContent$default($this, null, null, null, null, ComposerImpl$insertMovableContentGuarded$lambda_0($this, offsetChanges, tmp0_let, to), 30, null);
                var tmp_0;
                var tmp$ret$1;
                // Inline function 'kotlin.collections.isNotEmpty' call
                tmp$ret$1 = !offsetChanges.j();
                if (tmp$ret$1) {
                  record($this, ComposerImpl$insertMovableContentGuarded$lambda_1(effectiveNodeIndex, offsetChanges));
                  tmp_0 = Unit_getInstance();
                }
                tmp = tmp_0;
              }finally {
                tmp0_let.ax();
              }
              tmp$ret$2 = tmp;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = tmp$ret$3;
            } else {
              var resolvedState = $this.vt_1.h10(from);
              var tmp0_safe_receiver = resolvedState;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i10_1;
              var fromTable = tmp1_elvis_lhs == null ? from.b10_1 : tmp1_elvis_lhs;
              var tmp2_safe_receiver = resolvedState;
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.i10_1;
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.hy(0);
              var fromAnchor = tmp4_elvis_lhs == null ? from.c10_1 : tmp4_elvis_lhs;
              var nodesToInsert = collectNodesFrom(fromTable, fromAnchor);
              var tmp$ret$5;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$5 = !nodesToInsert.j();
              if (tmp$ret$5) {
                record($this, ComposerImpl$insertMovableContentGuarded$lambda_2(effectiveNodeIndex, nodesToInsert));
                if (equals(to.b10_1, $this.wt_1)) {
                  var group = $this.wt_1.g10(anchor);
                  updateNodeCount($this, group, updatedNodeCount($this, group) + nodesToInsert.h() | 0);
                }
              }
              record($this, ComposerImpl$insertMovableContentGuarded$lambda_3(resolvedState, $this, from, to));
              var tmp$ret$12;
              // Inline function 'androidx.compose.runtime.SlotTable.read' call
              var tmp$ret$11;
              // Inline function 'kotlin.let' call
              var tmp2_let = fromTable.dw();
              // Inline function 'kotlin.contracts.contract' call
              var tmp$ret$10;
              // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
              var tmp_1;
              try {
                var tmp$ret$9;
                $l$block_0: {
                  // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
                  var savedReader = $this.av_1;
                  var savedCountOverrides = $this.hu_1;
                  $this.hu_1 = null;
                  try {
                    $this.av_1 = tmp2_let;
                    var newLocation = fromTable.g10(fromAnchor);
                    tmp2_let.qy(newLocation);
                    $this.mv_1 = newLocation;
                    var tmp$ret$6;
                    // Inline function 'kotlin.collections.mutableListOf' call
                    tmp$ret$6 = ArrayList_init_$Create$();
                    var offsetChanges_0 = tmp$ret$6;
                    var tmp$ret$7;
                    $l$block: {
                      // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
                      var savedChanges_0 = $this.yt_1;
                      try {
                        $this.yt_1 = offsetChanges_0;
                        var tmp_2 = tmp2_let.uw_1;
                        tmp$ret$7 = recomposeMovableContent($this, from.a10_1, to.a10_1, tmp_2, from.d10_1, ComposerImpl$insertMovableContentGuarded$lambda_4($this, to));
                        break $l$block;
                      }finally {
                        $this.yt_1 = savedChanges_0;
                      }
                    }
                    var tmp_3;
                    var tmp$ret$8;
                    // Inline function 'kotlin.collections.isNotEmpty' call
                    tmp$ret$8 = !offsetChanges_0.j();
                    if (tmp$ret$8) {
                      record($this, ComposerImpl$insertMovableContentGuarded$lambda_5(effectiveNodeIndex, offsetChanges_0));
                      tmp_3 = Unit_getInstance();
                    }
                    tmp$ret$9 = tmp_3;
                    break $l$block_0;
                  }finally {
                    $this.av_1 = savedReader;
                    $this.hu_1 = savedCountOverrides;
                  }
                }
                tmp_1 = tmp$ret$9;
              }finally {
                tmp2_let.ax();
              }
              tmp$ret$10 = tmp_1;
              tmp$ret$11 = tmp$ret$10;
              tmp$ret$12 = tmp$ret$11;
            }
            record($this, get_skipToGroupEndInstance());
          }
           while (inductionVariable <= last);
        record($this, ComposerImpl$insertMovableContentGuarded$lambda_6);
        $this.mv_1 = 0;
        tmp$ret$13 = Unit_getInstance();
        break $l$block_1;
      }finally {
        $this.yt_1 = savedChanges;
      }
    }
  }
  function recomposeMovableContent($this, from, to, index, invalidations, block) {
    var savedImplicitRootStart = $this.ov_1;
    var savedIsComposing = $this.yu_1;
    var savedNodeIndex = $this.du_1;
    try {
      $this.ov_1 = false;
      $this.yu_1 = true;
      $this.du_1 = 0;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = invalidations.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = invalidations.i(index_0);
          // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>' call
          var scope = item.i5();
          var instances = item.j5();
          if (!(instances == null)) {
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable_0 = 0;
            var last_0 = instances.l10_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.compose.runtime.ComposerImpl.recomposeMovableContent.<anonymous>.<anonymous>' call
                var tmp0__anonymous__q1qw7t = instances.i(i);
                $this.k10(scope, tmp0__anonymous__q1qw7t);
              }
               while (inductionVariable_0 < last_0);
          } else {
            $this.k10(scope, null);
          }
        }
         while (inductionVariable <= last);
      var tmp1_safe_receiver = from;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp0_elvis_lhs = index;
        tmp = tmp1_safe_receiver.n10(to, tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs, block);
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? block() : tmp2_elvis_lhs;
    }finally {
      $this.ov_1 = savedImplicitRootStart;
      $this.yu_1 = savedIsComposing;
      $this.du_1 = savedNodeIndex;
    }
  }
  function recomposeMovableContent$default($this, from, to, index, invalidations, block, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      from = null;
    if (!(($mask0 & 4) === 0))
      to = null;
    if (!(($mask0 & 8) === 0))
      index = null;
    if (!(($mask0 & 16) === 0))
      invalidations = emptyList();
    return recomposeMovableContent($this, from, to, index, invalidations, block);
  }
  function _get_node__db0vwp(_this__u8e3s4, $this) {
    return _this__u8e3s4.o10(_this__u8e3s4.ww_1);
  }
  function nodeAt(_this__u8e3s4, $this, index) {
    return _this__u8e3s4.o10(index);
  }
  function validateNodeExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.lu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected was not expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.lu_1 = false;
  }
  function validateNodeNotExpected($this) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.lu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.validateNodeNotExpected.<anonymous>' call
      tmp$ret$0 = 'A call to createNode(), emitNode() or useNode() expected';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
  }
  function record($this, change) {
    $this.yt_1.a(change);
  }
  function recordApplierOperation($this, change) {
    realizeUps($this);
    realizeDowns_0($this);
    record($this, change);
  }
  function recordSlotEditingOperation($this, change) {
    realizeOperationLocation$default($this, false, 2, null);
    recordSlotEditing($this);
    record($this, change);
  }
  function recordSlotTableOperation($this, forParent, change) {
    realizeOperationLocation($this, forParent);
    record($this, change);
  }
  function recordSlotTableOperation$default($this, forParent, change, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      forParent = false;
    return recordSlotTableOperation($this, forParent, change);
  }
  function realizeUps($this) {
    var count = $this.kv_1;
    if (count > 0) {
      $this.kv_1 = 0;
      record($this, ComposerImpl$realizeUps$lambda(count));
    }
  }
  function realizeDowns($this, nodes) {
    record($this, ComposerImpl$realizeDowns$lambda(nodes));
  }
  function realizeDowns_0($this) {
    if ($this.lv_1.p10()) {
      realizeDowns($this, $this.lv_1.c7());
      $this.lv_1.t5();
    }
  }
  function recordDown($this, node) {
    $this.lv_1.ry(node);
  }
  function recordUp($this) {
    if ($this.lv_1.p10()) {
      $this.lv_1.sy();
    } else {
      var tmp0_this = $this;
      var tmp1 = tmp0_this.kv_1;
      tmp0_this.kv_1 = tmp1 + 1 | 0;
    }
  }
  function realizeOperationLocation($this, forParent) {
    var location = forParent ? $this.av_1.ww_1 : $this.av_1.uw_1;
    var distance = location - $this.mv_1 | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = distance >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.realizeOperationLocation.<anonymous>' call
      tmp$ret$0 = 'Tried to seek backward';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if (distance > 0) {
      record($this, ComposerImpl$realizeOperationLocation$lambda(distance));
      $this.mv_1 = location;
    }
  }
  function realizeOperationLocation$default($this, forParent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      forParent = false;
    return realizeOperationLocation($this, forParent);
  }
  function recordInsert($this, anchor) {
    if ($this.hv_1.j()) {
      var insertTable = $this.bv_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda(insertTable, anchor));
    } else {
      var fixups = toMutableList($this.hv_1);
      $this.hv_1.t5();
      realizeUps($this);
      realizeDowns_0($this);
      var insertTable_0 = $this.bv_1;
      recordSlotEditingOperation($this, ComposerImpl$recordInsert$lambda_0(insertTable_0, fixups, anchor));
    }
  }
  function recordFixup($this, change) {
    $this.hv_1.a(change);
  }
  function recordInsertUpFixup($this, change) {
    $this.qv_1.ry(change);
  }
  function registerInsertUpFixup($this) {
    $this.hv_1.a($this.qv_1.sy());
  }
  function recordDelete($this) {
    reportFreeMovableContent($this, $this.av_1.uw_1);
    recordSlotEditingOperation($this, get_removeCurrentGroupInstance());
    var tmp0_this = $this;
    tmp0_this.mv_1 = tmp0_this.mv_1 + $this.av_1.q10() | 0;
  }
  function reportFreeMovableContent($this, groupBeingRemoved) {
    reportFreeMovableContent$reportGroup($this, groupBeingRemoved, false, 0);
    realizeMovement($this);
  }
  function releaseMovableGroupAtCurrent($this, reference, slots) {
    var slotTable = new SlotTable();
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.lx();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp0_let.gy();
      tmp0_let.rx(get_movableContentKey(), reference.yz_1);
      tmp0_let.vz(0, 1, null);
      tmp0_let.r10(reference.zz_1);
      slots.s10(reference.c10_1, 1, tmp0_let);
      tmp0_let.cx();
      tmp0_let.cz();
      tmp0_let.dz();
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var state = new MovableContentState(slotTable);
    $this.vt_1.t10(reference, state);
  }
  function reportAllMovableContent($this) {
    if ($this.wt_1.u10()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      var changes = tmp$ret$0;
      $this.fv_1 = changes;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.SlotTable.read' call
      var tmp1_read = $this.wt_1;
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_read.dw();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
      var tmp;
      try {
        $this.av_1 = tmp0_let;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
          var savedChanges = $this.yt_1;
          try {
            $this.yt_1 = changes;
            reportFreeMovableContent($this, 0);
            realizeUps($this);
            var tmp_0;
            if ($this.nv_1) {
              record($this, get_skipToGroupEndInstance());
              recordEndRoot($this);
              tmp_0 = Unit_getInstance();
            }
            tmp$ret$1 = tmp_0;
            break $l$block;
          }finally {
            $this.yt_1 = savedChanges;
          }
        }
        tmp = tmp$ret$1;
      }finally {
        tmp0_let.ax();
      }
      tmp$ret$2 = tmp;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    }
  }
  function recordReaderMoving($this, location) {
    var distance = $this.av_1.uw_1 - $this.mv_1 | 0;
    $this.mv_1 = location - distance | 0;
  }
  function recordSlotEditing($this) {
    if ($this.av_1.h() > 0) {
      var reader = $this.av_1;
      var location = reader.ww_1;
      if (!($this.pv_1.v10(-2) === location)) {
        if (!$this.nv_1 ? $this.ov_1 : false) {
          recordSlotTableOperation$default($this, false, get_startRootGroup(), 2, null);
          $this.nv_1 = true;
        }
        if (location > 0) {
          var anchor = reader.hy(location);
          $this.pv_1.jw(location);
          recordSlotTableOperation$default($this, false, ComposerImpl$recordSlotEditing$lambda(anchor), 2, null);
        }
      }
    }
  }
  function recordEndGroup($this) {
    var location = $this.av_1.ww_1;
    var currentStartedGroup = $this.pv_1.v10(-1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = currentStartedGroup <= location;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recordEndGroup.<anonymous>' call
      tmp$ret$0 = 'Missed recording an endGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    if ($this.pv_1.v10(-1) === location) {
      $this.pv_1.sy();
      recordSlotTableOperation$default($this, false, get_endGroupInstance(), 2, null);
    }
  }
  function recordEndRoot($this) {
    if ($this.nv_1) {
      recordSlotTableOperation$default($this, false, get_endGroupInstance(), 2, null);
      $this.nv_1 = false;
    }
  }
  function finalizeCompose($this) {
    realizeUps($this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = $this.bu_1.j();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$0 = 'Start/end imbalance';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = $this.pv_1.j();
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.ComposerImpl.finalizeCompose.<anonymous>' call
      tmp$ret$1 = 'Missed recording an endGroup()';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    cleanUpCompose($this);
  }
  function cleanUpCompose($this) {
    $this.cu_1 = null;
    $this.du_1 = 0;
    $this.fu_1 = 0;
    $this.mv_1 = 0;
    $this.jv_1 = 0;
    $this.lu_1 = false;
    $this.nv_1 = false;
    $this.pv_1.t5();
    $this.xu_1.t5();
    clearUpdatedNodeCounts($this);
  }
  function recordRemoveNode($this, nodeIndex, count) {
    if (count > 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = nodeIndex >= 0;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.ComposerImpl.recordRemoveNode.<anonymous>' call
        tmp$ret$0 = 'Invalid remove index ' + nodeIndex;
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      if ($this.rv_1 === nodeIndex) {
        var tmp0_this = $this;
        tmp0_this.uv_1 = tmp0_this.uv_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.rv_1 = nodeIndex;
        $this.uv_1 = count;
      }
    }
  }
  function recordMoveNode($this, from, to, count) {
    if (count > 0) {
      if (($this.uv_1 > 0 ? $this.sv_1 === (from - $this.uv_1 | 0) : false) ? $this.tv_1 === (to - $this.uv_1 | 0) : false) {
        var tmp0_this = $this;
        tmp0_this.uv_1 = tmp0_this.uv_1 + count | 0;
      } else {
        realizeMovement($this);
        $this.sv_1 = from;
        $this.tv_1 = to;
        $this.uv_1 = count;
      }
    }
  }
  function realizeMovement($this) {
    var count = $this.uv_1;
    $this.uv_1 = 0;
    if (count > 0) {
      if ($this.rv_1 >= 0) {
        var removeIndex = $this.rv_1;
        $this.rv_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda(removeIndex, count));
      } else {
        var from = $this.sv_1;
        $this.sv_1 = -1;
        var to = $this.tv_1;
        $this.tv_1 = -1;
        recordApplierOperation($this, ComposerImpl$realizeMovement$lambda_0(from, to, count));
      }
    }
  }
  function CompositionContextHolder() {
  }
  CompositionContextHolder.$metadata$ = classMeta('CompositionContextHolder', [RememberObserver]);
  function updateCompoundKeyWhenWeEnterGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().qr_1) : false) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, dataKey.e4_1);
      } else {
        updateCompoundKeyWhenWeEnterGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeEnterGroupKeyHash($this, keyHash) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.rol' call
    var tmp0_rol = $this.jv_1;
    tmp$ret$0 = rotateLeft(tmp0_rol, 3);
    tmp.jv_1 = tmp$ret$0 ^ keyHash;
  }
  function updateCompoundKeyWhenWeExitGroup($this, groupKey, dataKey, data) {
    if (dataKey == null)
      if ((!(data == null) ? groupKey === 207 : false) ? !equals(data, Companion_getInstance_1().qr_1) : false) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(data));
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey);
      }
     else {
      if (dataKey instanceof Enum) {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, dataKey.e4_1);
      } else {
        updateCompoundKeyWhenWeExitGroupKeyHash($this, hashCode(dataKey));
      }
    }
  }
  function updateCompoundKeyWhenWeExitGroupKeyHash($this, groupKey) {
    var tmp = $this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ror' call
    var tmp0_ror = $this.jv_1 ^ groupKey;
    tmp$ret$0 = rotateRight(tmp0_ror, 3);
    tmp.jv_1 = tmp$ret$0;
  }
  function doCompose$composable($this, invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !$this.yu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>' call
      tmp$ret$0 = 'Reentrant composition is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.runtime.trace' call
      var token = Trace_getInstance().w10('Compose:recompose');
      try {
        $this.vu_1 = currentSnapshot();
        $this.wu_1 = $this.vu_1.c11();
        $this.pu_1.t5();
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayMap.forEach' call
        var inductionVariable = 0;
        var last = invalidationsRequested.f11_1;
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
            var tmp = invalidationsRequested.d11_1[index];
            var tmp0__anonymous__q1qw7t = isObject(tmp) ? tmp : THROW_CCE();
            var tmp_0 = invalidationsRequested.e11_1[index];
            var tmp1__anonymous__uwfjfc = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp0_safe_receiver = tmp0__anonymous__q1qw7t.ts_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g11_1;
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }
            var location = tmp_1;
            $this.mu_1.a(new Invalidation(tmp0__anonymous__q1qw7t, location, tmp1__anonymous__uwfjfc));
          }
           while (inductionVariable < last);
        // Inline function 'kotlin.collections.sortBy' call
        var tmp2_sortBy = $this.mu_1;
        if (tmp2_sortBy.h() > 1) {
          var tmp$ret$1;
          // Inline function 'kotlin.comparisons.compareBy' call
          var tmp_2 = ComposerImpl$doCompose$composable$lambda;
          tmp$ret$1 = new sam$kotlin_Comparator$0(tmp_2);
          sortWith(tmp2_sortBy, tmp$ret$1);
        }
        $this.du_1 = 0;
        var complete = false;
        $this.yu_1 = true;
        var tmp_3;
        try {
          startRoot($this);
          var savedContent = $this.h11();
          if (!(savedContent === content) ? !(content == null) : false) {
            $this.rz((content == null ? true : isObject(content)) ? content : THROW_CCE());
          }
          var tmp_4 = ComposerImpl$doCompose$composable$lambda_0($this);
          var tmp_5 = ComposerImpl$doCompose$composable$lambda_1($this);
          observeDerivedStateRecalculations(tmp_4, tmp_5, ComposerImpl$doCompose$composable$lambda_2(content, $this, savedContent));
          endRoot($this);
          complete = true;
          tmp_3 = Unit_getInstance();
        }finally {
          $this.yu_1 = false;
          $this.mu_1.t5();
          if (!complete) {
            abortRoot($this);
          }
        }
        tmp$ret$2 = tmp_3;
        break $l$block;
      }finally {
        Trace_getInstance().i11(token);
      }
    }
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.j11_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.d = function (a, b) {
    return this.j11_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.d(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function insertMovableContentGuarded$positionToParentOf(slots, applier, index) {
    while (!slots.k11(index)) {
      slots.mx();
      if (slots.nz(slots.ns_1)) {
        applier.mq();
      }
      slots.cz();
    }
  }
  function insertMovableContentGuarded$currentNodeIndex(slots) {
    var original = slots.ms_1;
    var current = slots.ns_1;
    while (current >= 0 ? !slots.nz(current) : false) {
      current = slots.gx(current);
    }
    var index = 0;
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    while (current < original) {
      if (slots.l11(original, current)) {
        if (slots.nz(current))
          index = 0;
        var tmp1 = current;
        current = tmp1 + 1 | 0;
      } else {
        index = index + (slots.nz(current) ? 1 : slots.oz(current)) | 0;
        current = current + slots.vy(current) | 0;
      }
    }
    return index;
  }
  function insertMovableContentGuarded$positionToInsert(slots, anchor, applier) {
    var destination = slots.g10(anchor);
    runtimeCheck(slots.ms_1 < destination);
    insertMovableContentGuarded$positionToParentOf(slots, applier, destination);
    var nodeIndex = insertMovableContentGuarded$currentNodeIndex(slots);
    while (slots.ms_1 < destination) {
      if (slots.n11(destination)) {
        if (slots.m11()) {
          applier.lq(slots.o10(slots.ms_1));
          nodeIndex = 0;
        }
        slots.ox();
      } else
        nodeIndex = nodeIndex + slots.cx() | 0;
    }
    runtimeCheck(slots.ms_1 === destination);
    return nodeIndex;
  }
  function reportFreeMovableContent$reportGroup(this$0, group, needsNodeDelete, nodeIndex) {
    var tmp;
    if (this$0.av_1.z11(group)) {
      var key = this$0.av_1.fx(group);
      var objectKey = this$0.av_1.ex(group);
      var tmp_0;
      var tmp_1;
      if (key === get_movableContentKey()) {
        tmp_1 = objectKey instanceof MovableContent;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var movableContent = objectKey instanceof MovableContent ? objectKey : THROW_CCE();
        var parameter = this$0.av_1.p11(group, 0);
        var anchor = this$0.av_1.hy(group);
        var end = group + this$0.av_1.vy(group) | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
        var tmp0_fastMap = filterToRange(this$0.mu_1, group, end);
        // Inline function 'kotlin.contracts.contract' call
        var target = ArrayList_init_$Create$_0(tmp0_fastMap.h());
        // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_fastMap.h() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_fastMap.i(index);
            // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
            tmp$ret$0 = to(item.fz_1, item.hz_1);
            var tmp0_plusAssign = tmp$ret$0;
            target.a(tmp0_plusAssign);
          }
           while (inductionVariable <= last);
        tmp$ret$1 = target;
        var invalidations = tmp$ret$1;
        var reference = new MovableContentStateReference(movableContent, parameter, this$0.au_1, this$0.wt_1, anchor, invalidations, currentCompositionLocalScope(this$0, group));
        this$0.vt_1.y11(reference);
        recordSlotEditing(this$0);
        record(this$0, ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, reference));
        var tmp_2;
        if (needsNodeDelete) {
          realizeMovement(this$0);
          realizeUps(this$0);
          realizeDowns_0(this$0);
          var nodeCount = this$0.av_1.nz(group) ? 1 : this$0.av_1.oz(group);
          if (nodeCount > 0) {
            recordRemoveNode(this$0, nodeIndex, nodeCount);
          }
          tmp_2 = 0;
        } else {
          tmp_2 = this$0.av_1.oz(group);
        }
        tmp_0 = tmp_2;
      } else {
        if (key === 206 ? equals(objectKey, get_reference()) : false) {
          var tmp_3 = this$0.av_1.p11(group, 0);
          var contextHolder = tmp_3 instanceof CompositionContextHolder ? tmp_3 : null;
          if (!(contextHolder == null)) {
            var compositionContext = contextHolder.q11_1;
            // Inline function 'kotlin.collections.forEach' call
            var tmp1_forEach = compositionContext.v11_1;
            var tmp0_iterator = tmp1_forEach.e();
            while (tmp0_iterator.f()) {
              var element = tmp0_iterator.g();
              // Inline function 'androidx.compose.runtime.ComposerImpl.reportFreeMovableContent.reportGroup.<anonymous>' call
              reportAllMovableContent(element);
            }
          }
          tmp_0 = this$0.av_1.oz(group);
        } else {
          tmp_0 = this$0.av_1.oz(group);
        }
      }
      tmp = tmp_0;
    } else if (this$0.av_1.o11(group)) {
      var size = this$0.av_1.vy(group);
      var end_0 = group + size | 0;
      var current = group + 1 | 0;
      var runningNodeCount = 0;
      while (current < end_0) {
        var isNode = this$0.av_1.nz(current);
        if (isNode) {
          realizeMovement(this$0);
          recordDown(this$0, this$0.av_1.o10(current));
        }
        runningNodeCount = runningNodeCount + reportFreeMovableContent$reportGroup(this$0, current, isNode ? true : needsNodeDelete, isNode ? 0 : nodeIndex + runningNodeCount | 0) | 0;
        if (isNode) {
          realizeMovement(this$0);
          recordUp(this$0);
        }
        current = current + this$0.av_1.vy(current) | 0;
      }
      tmp = runningNodeCount;
    } else {
      tmp = this$0.av_1.oz(group);
    }
    return tmp;
  }
  function ComposerImpl$createNode$lambda($factory, $groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var node = $factory();
      slots.a12($groupAnchor, node);
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.nq($insertIndex, node);
      applier.lq(node);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$createNode$lambda_0($groupAnchor, $insertIndex) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      var nodeToInsert = slots.b12($groupAnchor);
      applier.mq();
      var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
      nodeApplier.oq($insertIndex, nodeToInsert);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$apply$lambda($block, $value) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var tmp = applier.iq();
      $block((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), $value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda($value) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, rememberManager) {
      rememberManager.tr($value);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$updateValue$lambda_0($value, $groupSlotIndex) {
    return function (_anonymous_parameter_0__qggqh8, slots, rememberManager) {
      var tmp;
      if (!($value == null) ? isInterface($value, RememberObserver) : false) {
        rememberManager.tr($value);
        tmp = Unit_getInstance();
      }
      var previous = slots.c12($groupSlotIndex, $value);
      var tmp_0;
      if (!(previous == null) ? isInterface(previous, RememberObserver) : false) {
        rememberManager.ur(previous);
        tmp_0 = Unit_getInstance();
      } else {
        if (previous instanceof RecomposeScopeImpl) {
          var composition = previous.ss_1;
          var tmp_1;
          if (!(composition == null)) {
            previous.xi();
            composition.lt_1 = true;
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$startProviders$lambda($values, $parentScope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.nr(935231726);
      sourceInformation($composer_0, 'C1894@69916L42:Composer.kt#9igjgp');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(935231726, $changed, -1, 'androidx.compose.runtime.ComposerImpl.startProviders.<anonymous> (Composer.kt:1893)');
        tmp = Unit_getInstance();
      }
      var tmp0 = compositionLocalMapOf$composable($values, $parentScope, $composer_0, 0);
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_getInstance();
      }
      $composer_0.rr();
      return tmp0;
    };
  }
  function ComposerImpl$startReaderGroup$lambda($data) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.d12($data);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$start$lambda($currentRelativePosition) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.e12($currentRelativePosition);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$endRestartGroup$lambda($tmp2_safe_receiver, this$0) {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      $tmp2_safe_receiver(this$0.au_1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function ComposerImpl$invokeMovableContentLambda$lambda($content, $parameter) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2848@108576L18:Composer.kt#9igjgp');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
        if (isTraceInProgress()) {
          traceEventStart(694380496, $changed, -1, 'androidx.compose.runtime.ComposerImpl.invokeMovableContentLambda.<anonymous> (Composer.kt:2848)');
        }
        $content.g12_1($parameter, $composer_0, 0);
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
  function ComposerImpl$insertMovableContentGuarded$lambda($effectiveNodeIndex, $anchor) {
    return function (applier, slots, _anonymous_parameter_2__qggqfi) {
      if (isInterface(applier, Applier))
        applier;
      else
        THROW_CCE();
      $effectiveNodeIndex._v = insertMovableContentGuarded$positionToInsert(slots, $anchor, applier);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_0(this$0, $offsetChanges, $tmp0_let, $to) {
    return function () {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.ComposerImpl.withChanges' call
        var savedChanges = this$0.yt_1;
        try {
          this$0.yt_1 = $offsetChanges;
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.ComposerImpl.withReader' call
            var savedReader = this$0.av_1;
            var savedCountOverrides = this$0.hu_1;
            this$0.hu_1 = null;
            try {
              this$0.av_1 = $tmp0_let;
              invokeMovableContentLambda(this$0, $to.yz_1, $to.e10_1, $to.zz_1, true);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              this$0.av_1 = savedReader;
              this$0.hu_1 = savedCountOverrides;
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          this$0.yt_1 = savedChanges;
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_1($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.h() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.i(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_2($effectiveNodeIndex, $nodesToInsert) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var base = $effectiveNodeIndex._v;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $nodesToInsert.h() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $nodesToInsert.i(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (isInterface(applier, Applier))
            applier;
          else
            THROW_CCE();
          applier.oq(base + index | 0, item);
          applier.nq(base + index | 0, item);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_3($resolvedState, this$0, $from, $to) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      var tmp0_elvis_lhs = $resolvedState;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.vt_1.h10($from) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        composeRuntimeError('Could not resolve state for movable content');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var state = tmp;
      var anchors = slots.i12(1, state.i10_1, 2);
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.j();
      if (tmp$ret$0) {
        var tmp_1 = $to.a10_1;
        var toComposition = tmp_1 instanceof CompositionImpl ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = anchors.h() - 1 | 0;
        var tmp_2;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = anchors.i(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp_3 = slots.j12(item, 0);
            var recomposeScope = tmp_3 instanceof RecomposeScopeImpl ? tmp_3 : null;
            var tmp0_safe_receiver = recomposeScope;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.k12(toComposition);
            }
          }
           while (inductionVariable <= last);
          tmp_2 = Unit_getInstance();
        }
        tmp_0 = tmp_2;
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_4(this$0, $to) {
    return function () {
      invokeMovableContentLambda(this$0, $to.yz_1, $to.e10_1, $to.zz_1, true);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_5($effectiveNodeIndex, $offsetChanges) {
    return function (applier, slots, rememberManager) {
      var offsetApplier = $effectiveNodeIndex._v > 0 ? new OffsetApplier(applier, $effectiveNodeIndex._v) : applier;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $offsetChanges.h() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $offsetChanges.i(index);
          // Inline function 'androidx.compose.runtime.ComposerImpl.insertMovableContentGuarded.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(offsetApplier, slots, rememberManager);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$insertMovableContentGuarded$lambda_6(applier, slots, _anonymous_parameter_2__qggqfi) {
    if (isInterface(applier, Applier))
      applier;
    else
      THROW_CCE();
    insertMovableContentGuarded$positionToParentOf(slots, applier, 0);
    slots.cz();
    return Unit_getInstance();
  }
  function ComposerImpl$realizeUps$lambda($count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < $count) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.ComposerImpl.realizeUps.<anonymous>.<anonymous>' call
          applier.mq();
        }
         while (inductionVariable < $count);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeDowns$lambda($nodes) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      var inductionVariable = 0;
      var last = $nodes.length - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var nodeApplier = isInterface(applier, Applier) ? applier : THROW_CCE();
          nodeApplier.lq($nodes[index]);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeOperationLocation$lambda($distance) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.l12($distance);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda($insertTable, $anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.gy();
      slots.n12($insertTable, $anchor.m12($insertTable));
      slots.dz();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordInsert$lambda_0($insertTable, $fixups, $anchor) {
    return function (applier, slots, rememberManager) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.write' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = $insertTable.lx();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
      var tmp;
      try {
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = $fixups.h() - 1 | 0;
        var tmp_0;
        if (inductionVariable <= last) {
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = $fixups.i(index);
            // Inline function 'androidx.compose.runtime.ComposerImpl.recordInsert.<anonymous>.<anonymous>.<anonymous>' call
            item(applier, tmp0_let, rememberManager);
          }
           while (inductionVariable <= last);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }finally {
        tmp0_let.ax();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      slots.gy();
      slots.n12($insertTable, $anchor.m12($insertTable));
      slots.dz();
      return Unit_getInstance();
    };
  }
  function ComposerImpl$recordSlotEditing$lambda($anchor) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      slots.o12($anchor);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda($removeIndex, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.pq($removeIndex, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$realizeMovement$lambda_0($from, $to, $count) {
    return function (applier, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
      applier.qq($from, $to, $count);
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$0 = a.gz_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.ComposerImpl.doCompose$composable.<anonymous>.<anonymous>' call
    tmp$ret$1 = b.gz_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function ComposerImpl$doCompose$composable$lambda_0(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.uu_1;
      tmp0_this.uu_1 = tmp1 + 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_1(this$0) {
    return function (it) {
      var tmp0_this = this$0;
      var tmp1 = tmp0_this.uu_1;
      tmp0_this.uu_1 = tmp1 - 1 | 0;
      return Unit_getInstance();
    };
  }
  function ComposerImpl$doCompose$composable$lambda_2($content, this$0, $savedContent) {
    return function () {
      var tmp;
      if (!($content == null)) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, $content);
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else if ((this$0.ku_1 ? !($savedContent == null) : false) ? !equals($savedContent, Companion_getInstance_1().qr_1) : false) {
        startGroup_0(this$0, 200, get_invocation());
        invokeComposable$composable(this$0, (!($savedContent == null) ? typeof $savedContent === 'function' : false) ? $savedContent : THROW_CCE());
        endGroup(this$0);
        tmp = Unit_getInstance();
      } else {
        this$0.p12();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposerImpl$reportFreeMovableContent$reportGroup$lambda(this$0, $reference) {
    return function (_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
      releaseMovableGroupAtCurrent(this$0, $reference, slots);
      return Unit_getInstance();
    };
  }
  function ComposerImpl(applier, parentContext, slotTable, abandonSet, changes, lateChanges, composition) {
    this.ut_1 = applier;
    this.vt_1 = parentContext;
    this.wt_1 = slotTable;
    this.xt_1 = abandonSet;
    this.yt_1 = changes;
    this.zt_1 = lateChanges;
    this.au_1 = composition;
    this.bu_1 = new Stack();
    this.cu_1 = null;
    this.du_1 = 0;
    this.eu_1 = new IntStack();
    this.fu_1 = 0;
    this.gu_1 = new IntStack();
    this.hu_1 = null;
    this.iu_1 = null;
    this.ju_1 = false;
    this.ku_1 = false;
    this.lu_1 = false;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.mu_1 = tmp$ret$0;
    this.nu_1 = new IntStack();
    this.ou_1 = persistentHashMapOf();
    this.pu_1 = HashMap_init_$Create$();
    this.qu_1 = false;
    this.ru_1 = new IntStack();
    this.su_1 = false;
    this.tu_1 = -1;
    this.uu_1 = 0;
    this.vu_1 = currentSnapshot();
    this.wu_1 = 0;
    this.xu_1 = new Stack();
    this.yu_1 = false;
    this.zu_1 = false;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.wt_1.dw();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.reader.<anonymous>' call
    tmp0_also.ax();
    tmp$ret$1 = tmp0_also;
    tmp_0.av_1 = tmp$ret$1;
    this.bv_1 = new SlotTable();
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.bv_1.lx();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.ComposerImpl.writer.<anonymous>' call
    tmp0_also_0.ax();
    tmp$ret$2 = tmp0_also_0;
    tmp_1.cv_1 = tmp$ret$2;
    this.dv_1 = false;
    this.ev_1 = null;
    this.fv_1 = null;
    var tmp_2 = this;
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp1_read = this.bv_1;
    var tmp$ret$5;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_read.dw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp_3;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.ComposerImpl.insertAnchor.<anonymous>' call
      tmp$ret$3 = tmp0_let.hy(0);
      tmp_3 = tmp$ret$3;
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$4 = tmp_3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp_2.gv_1 = tmp$ret$6;
    var tmp_4 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$7 = ArrayList_init_$Create$();
    tmp_4.hv_1 = tmp$ret$7;
    this.iv_1 = false;
    this.jv_1 = 0;
    this.kv_1 = 0;
    this.lv_1 = new Stack();
    this.mv_1 = 0;
    this.nv_1 = false;
    this.ov_1 = true;
    this.pv_1 = new IntStack();
    this.qv_1 = new Stack();
    this.rv_1 = -1;
    this.sv_1 = -1;
    this.tv_1 = -1;
    this.uv_1 = 0;
  }
  ComposerImpl.prototype.q12 = function () {
    return this.ut_1;
  };
  ComposerImpl.prototype.r12 = function () {
    return this.uu_1 > 0;
  };
  ComposerImpl.prototype.s12 = function () {
    return this.bv_1;
  };
  ComposerImpl.prototype.nr = function (key) {
    return start(this, key, null, false, null);
  };
  ComposerImpl.prototype.rr = function () {
    return endGroup(this);
  };
  ComposerImpl.prototype.uz = function (key, dataKey) {
    return start(this, key, dataKey, false, null);
  };
  ComposerImpl.prototype.xz = function () {
    return endGroup(this);
  };
  ComposerImpl.prototype.t12 = function () {
    this.pu_1.t5();
  };
  ComposerImpl.prototype.u12 = function () {
    return this.iv_1;
  };
  ComposerImpl.prototype.h12 = function () {
    var tmp;
    var tmp_0;
    if ((!this.iv_1 ? !this.su_1 : false) ? !this.qu_1 : false) {
      var tmp0_safe_receiver = this.v12();
      tmp_0 = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w12()) === false;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !this.ku_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  ComposerImpl.prototype.px = function () {
    var key = this.iv_1 ? 125 : this.su_1 ? this.av_1.cy() === 125 ? 126 : 125 : this.av_1.cy() === 126 ? 126 : 125;
    start(this, key, null, true, null);
    this.lu_1 = true;
  };
  ComposerImpl.prototype.x12 = function (factory) {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.iv_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.createNode.<anonymous>' call
      tmp$ret$0 = 'createNode() can only be called when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var insertIndex = this.eu_1.y12();
    var groupAnchor = this.cv_1.hy(this.cv_1.ns_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.fu_1;
    tmp0_this.fu_1 = tmp1 + 1 | 0;
    recordFixup(this, ComposerImpl$createNode$lambda(factory, groupAnchor, insertIndex));
    recordInsertUpFixup(this, ComposerImpl$createNode$lambda_0(groupAnchor, insertIndex));
  };
  ComposerImpl.prototype.z12 = function () {
    validateNodeExpected(this);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.iv_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.useNode.<anonymous>' call
      tmp$ret$0 = 'useNode() called while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recordDown(this, _get_node__db0vwp(this.av_1, this));
  };
  ComposerImpl.prototype.a13 = function () {
    return end(this, true);
  };
  ComposerImpl.prototype.b13 = function (value, block) {
    var operation = ComposerImpl$apply$lambda(block, value);
    if (this.iv_1) {
      recordFixup(this, operation);
    } else {
      recordApplierOperation(this, operation);
    }
  };
  ComposerImpl.prototype.h11 = function () {
    var tmp;
    if (this.iv_1) {
      validateNodeNotExpected(this);
      tmp = Companion_getInstance_1().qr_1;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.av_1.g();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.nextSlot.<anonymous>' call
      tmp$ret$0 = this.su_1 ? Companion_getInstance_1().qr_1 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  ComposerImpl.prototype.sr = function (value) {
    var tmp;
    if (!equals(this.h11(), value)) {
      this.rz(value);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  ComposerImpl.prototype.c13 = function (value) {
    var next = this.h11();
    if (!(next == null) ? typeof next === 'boolean' : false) {
      var nextPrimitive = next;
      if (value === nextPrimitive)
        return false;
    }
    this.rz(value);
    return true;
  };
  ComposerImpl.prototype.rz = function (value) {
    if (this.iv_1) {
      this.cv_1.r10(value);
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        record(this, ComposerImpl$updateValue$lambda(value));
        this.xt_1.a(value);
      }
    } else {
      var groupSlotIndex = this.av_1.d13() - 1 | 0;
      if (!(value == null) ? isInterface(value, RememberObserver) : false) {
        this.xt_1.a(value);
      }
      recordSlotTableOperation(this, true, ComposerImpl$updateValue$lambda_0(value, groupSlotIndex));
    }
  };
  ComposerImpl.prototype.e13 = function (values) {
    var parentScope = currentCompositionLocalScope$default(this, null, 2, null);
    startGroup_0(this, 201, get_provider());
    startGroup_0(this, 203, get_providerValues());
    var currentProviders = invokeComposableForResult$composable(this, ComposerImpl$startProviders$lambda(values, parentScope));
    endGroup(this);
    var providers;
    var invalid;
    if (this.iv_1) {
      providers = updateProviderMapGroup(this, parentScope, currentProviders);
      invalid = false;
      this.dv_1 = true;
    } else {
      var tmp = this.av_1.f13(0);
      var oldScope = (!(tmp == null) ? isInterface(tmp, PersistentMap) : false) ? tmp : THROW_CCE();
      var tmp_0 = this.av_1.f13(1);
      var oldValues = (!(tmp_0 == null) ? isInterface(tmp_0, PersistentMap) : false) ? tmp_0 : THROW_CCE();
      if (!this.h12() ? true : !equals(oldValues, currentProviders)) {
        providers = updateProviderMapGroup(this, parentScope, currentProviders);
        invalid = !equals(providers, oldScope);
      } else {
        skipGroup(this);
        providers = oldScope;
        invalid = false;
      }
    }
    if (invalid ? !this.iv_1 : false) {
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.pu_1;
      var tmp1_set = this.av_1.uw_1;
      tmp0_set.w2(tmp1_set, providers);
    }
    this.ru_1.jw(asInt(this.qu_1));
    this.qu_1 = invalid;
    this.ev_1 = providers;
    start(this, 202, get_compositionLocalMap(), false, providers);
  };
  ComposerImpl.prototype.g13 = function () {
    endGroup(this);
    endGroup(this);
    this.qu_1 = asBool(this.ru_1.sy());
    this.ev_1 = null;
  };
  ComposerImpl.prototype.h13 = function (key) {
    return resolveCompositionLocal(this, key, currentCompositionLocalScope$default(this, null, 2, null));
  };
  ComposerImpl.prototype.v12 = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.xu_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.ComposerImpl.<get-currentRecomposeScope>.<anonymous>' call
    tmp$ret$0 = (this.uu_1 === 0 ? tmp0_let.p10() : false) ? tmp0_let.y12() : null;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ComposerImpl.prototype.k10 = function (scope, instance) {
    var tmp0_elvis_lhs = scope.ts_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var anchor = tmp;
    var location = anchor.m12(this.wt_1);
    if (this.yu_1 ? location >= this.av_1.uw_1 : false) {
      insertIfMissing(this.mu_1, location, scope, instance);
      return true;
    }
    return false;
  };
  ComposerImpl.prototype.p12 = function () {
    if (this.mu_1.j()) {
      skipGroup(this);
    } else {
      var reader = this.av_1;
      var key = reader.cy();
      var dataKey = reader.ey();
      var aux = reader.nx();
      updateCompoundKeyWhenWeEnterGroup(this, key, dataKey, aux);
      startReaderGroup(this, reader.m11(), null);
      recomposeToGroupEnd(this);
      reader.az();
      updateCompoundKeyWhenWeExitGroup(this, key, dataKey, aux);
    }
  };
  ComposerImpl.prototype.mx = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.fu_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'No nodes can be emitted before calling skipAndEndGroup';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_safe_receiver = this.v12();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i13();
    }
    if (this.mu_1.j()) {
      skipReaderToGroupEnd(this);
    } else {
      recomposeToGroupEnd(this);
    }
  };
  ComposerImpl.prototype.j13 = function (key) {
    start(this, key, null, false, null);
    addRecomposeScope(this);
    return this;
  };
  ComposerImpl.prototype.k13 = function () {
    var scope = this.xu_1.p10() ? this.xu_1.sy() : null;
    var tmp0_safe_receiver = scope;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.sz(false);
    }
    var tmp1_safe_receiver = scope;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l13(this.wu_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      record(this, ComposerImpl$endRestartGroup$lambda(tmp2_safe_receiver, this));
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp;
    if ((!(scope == null) ? !scope.n13() : false) ? scope.ty() ? true : this.ju_1 : false) {
      if (scope.ts_1 == null) {
        var tmp_0 = scope;
        var tmp_1;
        if (this.iv_1) {
          tmp_1 = this.cv_1.hy(this.cv_1.ns_1);
        } else {
          tmp_1 = this.av_1.hy(this.av_1.ww_1);
        }
        tmp_0.ts_1 = tmp_1;
      }
      scope.m13(false);
      tmp = scope;
    } else {
      tmp = null;
    }
    var result = tmp;
    end(this, false);
    return result;
  };
  ComposerImpl.prototype.o13 = function (references) {
    var completed = false;
    try {
      insertMovableContentGuarded(this, references);
      completed = true;
    }finally {
      if (completed) {
        cleanUpCompose(this);
      } else {
        abortRoot(this);
      }
    }
  };
  ComposerImpl.prototype.p13 = function (sourceInformation) {
    if (this.iv_1) {
      this.cv_1.q13(sourceInformation);
    }
  };
  ComposerImpl.prototype.r13 = function (key, sourceInformation) {
    start(this, key, null, false, sourceInformation);
  };
  ComposerImpl.prototype.s13 = function () {
    end(this, false);
  };
  ComposerImpl.prototype.t13 = function (block) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.yu_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.prepareCompose.<anonymous>' call
      tmp$ret$0 = 'Preparing a composition while composing is not supported';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.yu_1 = true;
    try {
      block();
    }finally {
      this.yu_1 = false;
    }
  };
  ComposerImpl.prototype.u13 = function (invalidationsRequested) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.yt_1.j();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.recompose.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp;
    var tmp_0;
    if (invalidationsRequested.p10()) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.mu_1;
      tmp$ret$1 = !tmp1_isNotEmpty.j();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.ku_1;
    }
    if (tmp) {
      doCompose$composable(this, invalidationsRequested, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp2_isNotEmpty = this.yt_1;
      tmp$ret$2 = !tmp2_isNotEmpty.j();
      return tmp$ret$2;
    }
    return false;
  };
  ComposerImpl.prototype.v13 = function () {
    return this.v12();
  };
  ComposerImpl.prototype.or = function () {
    return this.h11();
  };
  ComposerImpl.prototype.pr = function (value) {
    return this.rz(value);
  };
  ComposerImpl.prototype.w13 = function (scope) {
    var tmp0_safe_receiver = scope instanceof RecomposeScopeImpl ? scope : null;
    if (tmp0_safe_receiver == null) {
    } else {
      tmp0_safe_receiver.x13(true);
    }
  };
  ComposerImpl.prototype.y13 = function (invalidationsRequested, content) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.yt_1.j();
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.ComposerImpl.composeContent$composable.<anonymous>' call
      tmp$ret$0 = 'Expected applyChanges() to have been called';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    doCompose$composable(this, invalidationsRequested, content);
  };
  ComposerImpl.$metadata$ = classMeta('ComposerImpl', [Composer]);
  function Composer$Companion$Empty$1() {
  }
  Composer$Companion$Empty$1.prototype.toString = function () {
    return 'Empty';
  };
  Composer$Companion$Empty$1.$metadata$ = classMeta();
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.qr_1 = new Composer$Companion$Empty$1();
  }
  Companion.prototype.z13 = function () {
    return this.qr_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Composer() {
  }
  Composer.$metadata$ = interfaceMeta('Composer');
  var InvalidationResult_IGNORED_instance;
  var InvalidationResult_SCHEDULED_instance;
  var InvalidationResult_DEFERRED_instance;
  var InvalidationResult_IMMINENT_instance;
  var InvalidationResult_entriesInitialized;
  function InvalidationResult_initEntries() {
    if (InvalidationResult_entriesInitialized)
      return Unit_getInstance();
    InvalidationResult_entriesInitialized = true;
    InvalidationResult_IGNORED_instance = new InvalidationResult('IGNORED', 0);
    InvalidationResult_SCHEDULED_instance = new InvalidationResult('SCHEDULED', 1);
    InvalidationResult_DEFERRED_instance = new InvalidationResult('DEFERRED', 2);
    InvalidationResult_IMMINENT_instance = new InvalidationResult('IMMINENT', 3);
  }
  function InvalidationResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  InvalidationResult.$metadata$ = classMeta('InvalidationResult', undefined, undefined, undefined, undefined, Enum.prototype);
  function composeRuntimeError(message) {
    init_properties_Composer_kt_de8r5y();
    throw new ComposeRuntimeError('Compose Runtime internal error. Unexpected or incorrect use of the Compose ' + ('internal runtime API (' + message + '). Please report to Google or use ') + 'https://goo.gle/compose-feedback');
  }
  function MovableContentStateReference(content, parameter, composition, slotTable, anchor, invalidations, locals) {
    this.yz_1 = content;
    this.zz_1 = parameter;
    this.a10_1 = composition;
    this.b10_1 = slotTable;
    this.c10_1 = anchor;
    this.d10_1 = invalidations;
    this.e10_1 = locals;
    this.f10_1 = 8;
  }
  MovableContentStateReference.prototype.a14 = function () {
    return this.yz_1;
  };
  MovableContentStateReference.prototype.b14 = function () {
    return this.zz_1;
  };
  MovableContentStateReference.prototype.c14 = function () {
    return this.a10_1;
  };
  MovableContentStateReference.prototype.d14 = function () {
    return this.b10_1;
  };
  MovableContentStateReference.prototype.e14 = function () {
    return this.c10_1;
  };
  MovableContentStateReference.prototype.f14 = function () {
    return this.d10_1;
  };
  MovableContentStateReference.prototype.g14 = function () {
    return this.e10_1;
  };
  MovableContentStateReference.$metadata$ = classMeta('MovableContentStateReference');
  function runtimeCheck(value) {
    init_properties_Composer_kt_de8r5y();
    var tmp;
    if (!value) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.runtimeCheck.<anonymous>' call
      tmp$ret$0 = 'Check failed';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    return tmp;
  }
  function MovableContentState(slotTable) {
    this.i10_1 = slotTable;
    this.j10_1 = 8;
  }
  MovableContentState.prototype.d14 = function () {
    return this.i10_1;
  };
  MovableContentState.$metadata$ = classMeta('MovableContentState');
  function sourceInformation(composer, sourceInformation) {
    init_properties_Composer_kt_de8r5y();
    composer.p13(sourceInformation);
  }
  function isTraceInProgress() {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = get_compositionTracer();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.isTraceInProgress.<anonymous>' call
    tmp$ret$0 = !(tmp0_let == null) ? tmp0_let.h14() : false;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function traceEventStart(key, dirty1, dirty2, info) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i14(key, dirty1, dirty2, info);
    }
  }
  function traceEventEnd() {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = get_compositionTracer();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j14();
    }
  }
  function sourceInformationMarkerStart(composer, key, sourceInformation) {
    init_properties_Composer_kt_de8r5y();
    composer.r13(key, sourceInformation);
  }
  function sourceInformationMarkerEnd(composer) {
    init_properties_Composer_kt_de8r5y();
    composer.s13();
  }
  function ProvidedValue(compositionLocal, value, canOverride) {
    this.k14_1 = compositionLocal;
    this.l14_1 = value;
    this.m14_1 = canOverride;
    this.n14_1 = 0;
  }
  ProvidedValue.prototype.o14 = function () {
    return this.k14_1;
  };
  ProvidedValue.prototype.z1 = function () {
    return this.l14_1;
  };
  ProvidedValue.prototype.p14 = function () {
    return this.m14_1;
  };
  ProvidedValue.$metadata$ = classMeta('ProvidedValue');
  function ScopeUpdateScope() {
  }
  ScopeUpdateScope.$metadata$ = interfaceMeta('ScopeUpdateScope');
  function MovableContent() {
  }
  MovableContent.$metadata$ = classMeta('MovableContent');
  function ComposeRuntimeError(message) {
    IllegalStateException_init_$Init$(this);
    this.r14_1 = message;
    captureStack(this, ComposeRuntimeError);
  }
  ComposeRuntimeError.prototype.h1 = function () {
    return this.r14_1;
  };
  ComposeRuntimeError.$metadata$ = classMeta('ComposeRuntimeError', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(ComposeRuntimeError.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.h1();
    }
  });
  function runtimeCheck_0(value, lazyMessage) {
    init_properties_Composer_kt_de8r5y();
    if (!value) {
      var message = lazyMessage();
      composeRuntimeError(toString(message));
    }
  }
  function Pending$keyMap$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = multiMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Pending.keyMap$delegate.<anonymous>.<anonymous>' call
      var inductionVariable = 0;
      var last = this$0.ux_1.h();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var keyInfo = this$0.ux_1.i(index);
          put(tmp0_also, get_joinedKey(keyInfo), keyInfo);
        }
         while (inductionVariable < last);
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    };
  }
  function Pending(keyInfos, startIndex) {
    this.ux_1 = keyInfos;
    this.vx_1 = startIndex;
    this.wx_1 = 0;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.vx_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Pending.<anonymous>' call
      tmp$ret$0 = 'Invalid start index';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp.xx_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Pending.groupInfos.<anonymous>' call
    var runningNodeIndex = 0;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    var result = tmp$ret$2;
    var inductionVariable = 0;
    var last = this.ux_1.h();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var keyInfo = this.ux_1.i(index);
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = keyInfo.ky_1;
        var tmp1_set = new GroupInfo(index, runningNodeIndex, keyInfo.ly_1);
        result.w2(tmp0_set, tmp1_set);
        runningNodeIndex = runningNodeIndex + keyInfo.ly_1 | 0;
      }
       while (inductionVariable < last);
    tmp$ret$3 = result;
    tmp$ret$4 = tmp$ret$3;
    tmp_0.yx_1 = tmp$ret$4;
    var tmp_1 = this;
    tmp_1.zx_1 = lazy(Pending$keyMap$delegate$lambda(this));
  }
  Pending.prototype.s14 = function () {
    return this.ux_1;
  };
  Pending.prototype.t14 = function () {
    return this.vx_1;
  };
  Pending.prototype.u14 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = keyMap$factory();
    tmp$ret$0 = this.zx_1.z1();
    return tmp$ret$0;
  };
  Pending.prototype.fy = function (key, dataKey) {
    var joinedKey = !(dataKey == null) ? new JoinedKey(key, dataKey) : key;
    return pop(this.u14(), joinedKey);
  };
  Pending.prototype.by = function (keyInfo) {
    return this.xx_1.a(keyInfo);
  };
  Pending.prototype.ty = function () {
    return this.xx_1;
  };
  Pending.prototype.py = function (from, to) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.yx_1.b7();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position = element.v14_1;
        if (position === from)
          element.v14_1 = to;
        else if (to <= position ? position < from : false)
          element.v14_1 = position + 1 | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.yx_1.b7();
      var tmp0_iterator_0 = tmp1_forEach.e();
      while (tmp0_iterator_0.f()) {
        var element_0 = tmp0_iterator_0.g();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveSlot.<anonymous>' call
        var position_0 = element_0.v14_1;
        if (position_0 === from)
          element_0.v14_1 = to;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.v14_1 = position_0 - 1 | 0;
      }
    }
  };
  Pending.prototype.xy = function (from, to, count) {
    if (from > to) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = this.yx_1.b7();
      var tmp0_iterator = tmp0_forEach.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position = element.w14_1;
        if (from <= position ? position < (from + count | 0) : false)
          element.w14_1 = to + (position - from | 0) | 0;
        else if (to <= position ? position < from : false)
          element.w14_1 = position + count | 0;
      }
    } else if (to > from) {
      // Inline function 'kotlin.collections.forEach' call
      var tmp1_forEach = this.yx_1.b7();
      var tmp0_iterator_0 = tmp1_forEach.e();
      while (tmp0_iterator_0.f()) {
        var element_0 = tmp0_iterator_0.g();
        // Inline function 'androidx.compose.runtime.Pending.registerMoveNode.<anonymous>' call
        var position_0 = element_0.w14_1;
        if (from <= position_0 ? position_0 < (from + count | 0) : false)
          element_0.w14_1 = to + (position_0 - from | 0) | 0;
        else if ((from + 1 | 0) <= position_0 ? position_0 < to : false)
          element_0.w14_1 = position_0 - count | 0;
      }
    }
  };
  Pending.prototype.ay = function (keyInfo, insertIndex) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.yx_1;
    var tmp1_set = keyInfo.ky_1;
    var tmp2_set = new GroupInfo(-1, insertIndex, 0);
    tmp0_set.w2(tmp1_set, tmp2_set);
  };
  Pending.prototype.uy = function (group, newCount) {
    var groupInfo = this.yx_1.k2(group);
    if (!(groupInfo == null)) {
      var index = groupInfo.w14_1;
      var difference = newCount - groupInfo.x14_1 | 0;
      groupInfo.x14_1 = newCount;
      if (!(difference === 0)) {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_forEach = this.yx_1.b7();
        var tmp0_iterator = tmp0_forEach.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          // Inline function 'androidx.compose.runtime.Pending.updateNodeCount.<anonymous>' call
          if (element.w14_1 >= index ? !equals(element, groupInfo) : false) {
            var newIndex = element.w14_1 + difference | 0;
            if (newIndex >= 0)
              element.w14_1 = newIndex;
          }
        }
      }
      return true;
    }
    return false;
  };
  Pending.prototype.oy = function (keyInfo) {
    var tmp0_safe_receiver = this.yx_1.k2(keyInfo.ky_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v14_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  Pending.prototype.ny = function (keyInfo) {
    var tmp0_safe_receiver = this.yx_1.k2(keyInfo.ky_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w14_1;
    return tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
  };
  Pending.prototype.wy = function (keyInfo) {
    var tmp0_safe_receiver = this.yx_1.k2(keyInfo.ky_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x14_1;
    return tmp1_elvis_lhs == null ? keyInfo.ly_1 : tmp1_elvis_lhs;
  };
  Pending.$metadata$ = classMeta('Pending');
  function Invalidation(scope, location, instances) {
    this.fz_1 = scope;
    this.gz_1 = location;
    this.hz_1 = instances;
  }
  Invalidation.prototype.y14 = function () {
    return this.fz_1;
  };
  Invalidation.prototype.z14 = function () {
    return this.gz_1;
  };
  Invalidation.prototype.a15 = function () {
    return this.hz_1;
  };
  Invalidation.prototype.lz = function () {
    return this.fz_1.b15(this.hz_1);
  };
  Invalidation.$metadata$ = classMeta('Invalidation');
  function asInt(_this__u8e3s4) {
    init_properties_Composer_kt_de8r5y();
    return _this__u8e3s4 ? 1 : 0;
  }
  function mutate(_this__u8e3s4, mutator) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4.hx();
    // Inline function 'kotlin.contracts.contract' call
    mutator(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.ix();
  }
  function compositionLocalMapOf$composable(values, parentScope, $composer, $changed) {
    init_properties_Composer_kt_de8r5y();
    var $composer_0 = $composer;
    $composer_0.nr(692276709);
    sourceInformation($composer_0, 'C(compositionLocalMapOf$composable)P(1):Composer.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(692276709, $changed, -1, 'androidx.compose.runtime.compositionLocalMapOf$composable (Composer.kt:307)');
    }
    var result = persistentHashMapOf();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = result.hx();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.compositionLocalMapOf$composable.<anonymous>' call
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var provided = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      $composer_0.nr(1391442818);
      sourceInformation($composer_0, '*317@11596L24');
      if (provided.m14_1 ? true : !contains_0(parentScope, provided.k14_1)) {
        // Inline function 'kotlin.collections.set' call
        var tmp = provided.k14_1;
        var tmp0_set = tmp instanceof CompositionLocal ? tmp : THROW_CCE();
        var tmp1_set = provided.k14_1.c15(provided.l14_1, $composer_0, 0);
        tmp0_apply.w2(tmp0_set, tmp1_set);
      }
      $composer_0.rr();
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.ix();
    var tmp1_group = tmp$ret$1;
    var tmp0 = tmp1_group;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
    return tmp0;
  }
  function asBool(_this__u8e3s4) {
    init_properties_Composer_kt_de8r5y();
    return !(_this__u8e3s4 === 0);
  }
  function contains_0(_this__u8e3s4, key) {
    init_properties_Composer_kt_de8r5y();
    return _this__u8e3s4.g2(key instanceof CompositionLocal ? key : THROW_CCE());
  }
  function getValueOf(_this__u8e3s4, key) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = _this__u8e3s4.k2(key instanceof CompositionLocal ? key : THROW_CCE());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function removeRange(_this__u8e3s4, start, end) {
    init_properties_Composer_kt_de8r5y();
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.h()) {
      var validation = _this__u8e3s4.i(index);
      if (validation.gz_1 < end) {
        _this__u8e3s4.z2(index);
      } else
        break $l$loop;
    }
  }
  function firstInRange(_this__u8e3s4, start, end) {
    init_properties_Composer_kt_de8r5y();
    var index = findInsertLocation(_this__u8e3s4, start);
    if (index < _this__u8e3s4.h()) {
      var firstInvalidation = _this__u8e3s4.i(index);
      if (firstInvalidation.gz_1 < end)
        return firstInvalidation;
    }
    return null;
  }
  function removeLocation(_this__u8e3s4, location) {
    init_properties_Composer_kt_de8r5y();
    var index = findLocation(_this__u8e3s4, location);
    return index >= 0 ? _this__u8e3s4.z2(index) : null;
  }
  function nearestCommonRootOf(_this__u8e3s4, a, b, common) {
    init_properties_Composer_kt_de8r5y();
    if (a === b)
      return a;
    if (a === common ? true : b === common)
      return common;
    if (_this__u8e3s4.gx(a) === b)
      return b;
    if (_this__u8e3s4.gx(b) === a)
      return a;
    if (_this__u8e3s4.gx(a) === _this__u8e3s4.gx(b))
      return _this__u8e3s4.gx(a);
    var currentA = a;
    var currentB = b;
    var aDistance = distanceFrom(_this__u8e3s4, a, common);
    var bDistance = distanceFrom(_this__u8e3s4, b, common);
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = aDistance - bDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentA = _this__u8e3s4.gx(currentA);
      }
       while (inductionVariable < tmp0_repeat);
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = bDistance - aDistance | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < tmp1_repeat)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.runtime.nearestCommonRootOf.<anonymous>' call
        currentB = _this__u8e3s4.gx(currentB);
      }
       while (inductionVariable_0 < tmp1_repeat);
    while (!(currentA === currentB)) {
      currentA = _this__u8e3s4.gx(currentA);
      currentB = _this__u8e3s4.gx(currentB);
    }
    return currentA;
  }
  function get_reuseKey() {
    return reuseKey;
  }
  var reuseKey;
  function insertIfMissing(_this__u8e3s4, location, scope, instance) {
    init_properties_Composer_kt_de8r5y();
    var index = findLocation(_this__u8e3s4, location);
    if (index < 0) {
      var tmp = -(index + 1 | 0) | 0;
      var tmp0_safe_receiver = instance;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.insertIfMissing.<anonymous>.<anonymous>' call
        tmp0_also.d15(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_also;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp_0 = tmp$ret$2;
      }
      _this__u8e3s4.g6(tmp, new Invalidation(scope, location, tmp_0));
    } else {
      if (instance == null) {
        _this__u8e3s4.i(index).hz_1 = null;
      } else {
        var tmp1_safe_receiver = _this__u8e3s4.i(index).hz_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.d15(instance);
      }
    }
  }
  function collectNodesFrom(_this__u8e3s4, anchor) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.read' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.dw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      var index = _this__u8e3s4.g10(anchor);
      collectNodesFrom$collectFromGroup(tmp0_let, result, index);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return result;
  }
  function filterToRange(_this__u8e3s4, start, end) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    var index = findInsertLocation(_this__u8e3s4, start);
    $l$loop: while (index < _this__u8e3s4.h()) {
      var invalidation = _this__u8e3s4.i(index);
      if (invalidation.gz_1 < end) {
        result.a(invalidation);
      } else
        break $l$loop;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
    }
    return result;
  }
  function GroupInfo(slotIndex, nodeIndex, nodeCount) {
    this.v14_1 = slotIndex;
    this.w14_1 = nodeIndex;
    this.x14_1 = nodeCount;
  }
  GroupInfo.prototype.e15 = function (_set____db54di) {
    this.v14_1 = _set____db54di;
  };
  GroupInfo.prototype.f15 = function () {
    return this.v14_1;
  };
  GroupInfo.prototype.g15 = function (_set____db54di) {
    this.w14_1 = _set____db54di;
  };
  GroupInfo.prototype.h15 = function () {
    return this.w14_1;
  };
  GroupInfo.$metadata$ = classMeta('GroupInfo');
  function put(_this__u8e3s4, key, value) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.k2(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.put.<anonymous>' call
      tmp$ret$0 = LinkedHashSet_init_$Create$();
      var answer = tmp$ret$0;
      _this__u8e3s4.w2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1.a(value);
  }
  function get_joinedKey(_this__u8e3s4) {
    init_properties_Composer_kt_de8r5y();
    return !(_this__u8e3s4.jy_1 == null) ? new JoinedKey(_this__u8e3s4.iy_1, _this__u8e3s4.jy_1) : _this__u8e3s4.iy_1;
  }
  function multiMap() {
    init_properties_Composer_kt_de8r5y();
    return HashMap_init_$Create$();
  }
  function pop(_this__u8e3s4, key) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = _this__u8e3s4.k2(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.pop.<anonymous>' call
      remove(_this__u8e3s4, key, tmp1_safe_receiver);
      tmp$ret$0 = tmp1_safe_receiver;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function findInsertLocation(_this__u8e3s4, location) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = findLocation(_this__u8e3s4, location);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.findInsertLocation.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? -(tmp0_let + 1 | 0) | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function findLocation(_this__u8e3s4, location) {
    init_properties_Composer_kt_de8r5y();
    var low = 0;
    var high = _this__u8e3s4.h() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4.i(mid);
      var cmp = compareTo(midVal.gz_1, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function distanceFrom(_this__u8e3s4, index, root) {
    init_properties_Composer_kt_de8r5y();
    var count = 0;
    var current = index;
    while (current > 0 ? !(current === root) : false) {
      current = _this__u8e3s4.gx(current);
      var tmp0 = count;
      count = tmp0 + 1 | 0;
    }
    return count;
  }
  function remove(_this__u8e3s4, key, value) {
    init_properties_Composer_kt_de8r5y();
    var tmp0_safe_receiver = _this__u8e3s4.k2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.y2(value);
      var tmp_0;
      if (tmp0_safe_receiver.j()) {
        _this__u8e3s4.x2(key);
        tmp_0 = Unit_getInstance();
      }
      tmp$ret$0 = tmp_0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function cache(_this__u8e3s4, invalid, block) {
    init_properties_Composer_kt_de8r5y();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = _this__u8e3s4.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (invalid ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var value = block();
      _this__u8e3s4.pr(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var tmp_0 = tmp$ret$1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  }
  function _Updater___init__impl__rbfxm8(composer) {
    return composer;
  }
  function _Updater___get_composer__impl__9ty7av($this) {
    return $this;
  }
  function Updater__set_impl_v7kwss($this, value, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _Updater___get_composer__impl__9ty7av($this);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (tmp0_with.u12() ? true : !equals(tmp0_with.or(), value)) {
      tmp0_with.pr(value);
      _Updater___get_composer__impl__9ty7av($this).b13(value, block);
      tmp = Unit_getInstance();
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  }
  function Updater__toString_impl_xbgnns($this) {
    return 'Updater(composer=' + $this + ')';
  }
  function Updater__hashCode_impl_fyhhih($this) {
    return hashCode($this);
  }
  function Updater__equals_impl_pu56kb($this, other) {
    if (!(other instanceof Updater))
      return false;
    var tmp0_other_with_cast = other instanceof Updater ? other.i15_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Updater(composer) {
    this.i15_1 = composer;
  }
  Updater.prototype.toString = function () {
    return Updater__toString_impl_xbgnns(this.i15_1);
  };
  Updater.prototype.hashCode = function () {
    return Updater__hashCode_impl_fyhhih(this.i15_1);
  };
  Updater.prototype.equals = function (other) {
    return Updater__equals_impl_pu56kb(this.i15_1, other);
  };
  Updater.$metadata$ = classMeta('Updater');
  function _SkippableUpdater___init__impl__4ft0t9(composer) {
    return composer;
  }
  function _SkippableUpdater___get_composer__impl__6t7yne($this) {
    return $this;
  }
  function SkippableUpdater__update_impl_yrdzqy($this, block) {
    _SkippableUpdater___get_composer__impl__6t7yne($this).nr(509942095);
    block(new Updater(_Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this))));
    _SkippableUpdater___get_composer__impl__6t7yne($this).rr();
  }
  function SkippableUpdater__toString_impl_9wisn1($this) {
    return 'SkippableUpdater(composer=' + $this + ')';
  }
  function SkippableUpdater__hashCode_impl_vnopfw($this) {
    return hashCode($this);
  }
  function SkippableUpdater__equals_impl_vm8qds($this, other) {
    if (!(other instanceof SkippableUpdater))
      return false;
    var tmp0_other_with_cast = other instanceof SkippableUpdater ? other.j15_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SkippableUpdater(composer) {
    this.j15_1 = composer;
  }
  SkippableUpdater.prototype.toString = function () {
    return SkippableUpdater__toString_impl_9wisn1(this.j15_1);
  };
  SkippableUpdater.prototype.hashCode = function () {
    return SkippableUpdater__hashCode_impl_vnopfw(this.j15_1);
  };
  SkippableUpdater.prototype.equals = function (other) {
    return SkippableUpdater__equals_impl_vm8qds(this.j15_1, other);
  };
  SkippableUpdater.$metadata$ = classMeta('SkippableUpdater');
  function collectNodesFrom$collectFromGroup(tmp0_let, result, group) {
    if (tmp0_let.nz(group)) {
      result.a(tmp0_let.o10(group));
    } else {
      var current = group + 1 | 0;
      var end = group + tmp0_let.vy(group) | 0;
      while (current < end) {
        collectNodesFrom$collectFromGroup(tmp0_let, result, current);
        current = current + tmp0_let.vy(current) | 0;
      }
    }
  }
  function removeCurrentGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, rememberManager) {
    init_properties_Composer_kt_de8r5y();
    removeCurrentGroup(slots, rememberManager);
    return Unit_getInstance();
  }
  function skipToGroupEndInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.mx();
    return Unit_getInstance();
  }
  function endGroupInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.cz();
    return Unit_getInstance();
  }
  function startRootGroup$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.k15(0);
    return Unit_getInstance();
  }
  function resetSlotsInstance$lambda(_anonymous_parameter_0__qggqh8, slots, _anonymous_parameter_2__qggqfi) {
    init_properties_Composer_kt_de8r5y();
    slots.l15();
    return Unit_getInstance();
  }
  function InvalidationResult_IGNORED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IGNORED_instance;
  }
  function InvalidationResult_SCHEDULED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_SCHEDULED_instance;
  }
  function InvalidationResult_DEFERRED_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_DEFERRED_instance;
  }
  function InvalidationResult_IMMINENT_getInstance() {
    InvalidationResult_initEntries();
    return InvalidationResult_IMMINENT_instance;
  }
  function keyMap$factory() {
    return getPropertyCallableRef('keyMap', 1, KProperty1, function (receiver) {
      return receiver.u14();
    }, null);
  }
  var properties_initialized_Composer_kt_89qzc2;
  function init_properties_Composer_kt_de8r5y() {
    if (properties_initialized_Composer_kt_89qzc2) {
    } else {
      properties_initialized_Composer_kt_89qzc2 = true;
      compositionTracer = null;
      removeCurrentGroupInstance = removeCurrentGroupInstance$lambda;
      skipToGroupEndInstance = skipToGroupEndInstance$lambda;
      endGroupInstance = endGroupInstance$lambda;
      startRootGroup = startRootGroup$lambda;
      resetSlotsInstance = resetSlotsInstance$lambda;
      invocation = new OpaqueKey('provider');
      provider = new OpaqueKey('provider');
      compositionLocalMap = new OpaqueKey('compositionLocalMap');
      providerValues = new OpaqueKey('providerValues');
      providerMaps = new OpaqueKey('providers');
      reference = new OpaqueKey('reference');
    }
  }
  function get_PendingApplyNoModifications() {
    init_properties_Composition_kt_ckysay();
    return PendingApplyNoModifications;
  }
  var PendingApplyNoModifications;
  function CompositionImpl_init_$Init$(parent, applier, recomposeContext, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      recomposeContext = null;
    CompositionImpl.call($this, parent, applier, recomposeContext);
    return $this;
  }
  function CompositionImpl_init_$Create$(parent, applier, recomposeContext, $mask0, $marker) {
    return CompositionImpl_init_$Init$(parent, applier, recomposeContext, $mask0, $marker, Object.create(CompositionImpl.prototype));
  }
  function _get_areChildrenComposing__c1uwup($this) {
    return $this.ot_1.r12();
  }
  function drainPendingModificationsForCompositionLocked($this) {
    var toRecord = $this.at_1.o15(get_PendingApplyNoModifications());
    if (toRecord == null) {
    } else {
      if (equals(toRecord, get_PendingApplyNoModifications())) {
        composeRuntimeError('pending composition has not been applied');
      } else {
        if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
          addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), true);
        } else {
          if (!(toRecord == null) ? isArray(toRecord) : false) {
            var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var changed = indexedObject[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              addPendingInvalidationsLocked($this, changed, true);
            }
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.at_1);
          }
        }
      }
    }
  }
  function drainPendingModificationsLocked($this) {
    var toRecord = $this.at_1.o15(null);
    if (equals(toRecord, get_PendingApplyNoModifications())) {
    } else {
      if (!(toRecord == null) ? isInterface(toRecord, Set) : false) {
        addPendingInvalidationsLocked($this, (!(toRecord == null) ? isInterface(toRecord, Set) : false) ? toRecord : THROW_CCE(), false);
      } else {
        if (!(toRecord == null) ? isArray(toRecord) : false) {
          var indexedObject = (!(toRecord == null) ? isArray(toRecord) : false) ? toRecord : THROW_CCE();
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var changed = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            addPendingInvalidationsLocked($this, changed, false);
          }
        } else {
          if (toRecord == null) {
            composeRuntimeError('calling recordModificationsOf and applyChanges concurrently is not supported');
          } else {
            composeRuntimeError('corrupt pendingModifications drain: ' + $this.at_1);
          }
        }
      }
    }
  }
  function addPendingInvalidationsLocked($this, values, forgetConditionalScopes) {
    var invalidated = {_v: null};
    var tmp0_iterator = values.e();
    while (tmp0_iterator.f()) {
      var value = tmp0_iterator.g();
      if (value instanceof RecomposeScopeImpl) {
        value.p15(null);
      } else {
        addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, value);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
        var tmp1_forEachScopeOf = $this.gt_1;
        var index = find_2(tmp1_forEachScopeOf, value);
        if (index >= 0) {
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
          var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.l10_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.i(i);
              addPendingInvalidationsLocked$invalidate($this, forgetConditionalScopes, invalidated, tmp2__anonymous__z9zvc9);
            }
             while (inductionVariable < last);
        }
      }
    }
    var tmp;
    if (forgetConditionalScopes) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp3_isNotEmpty = $this.ft_1;
      tmp$ret$0 = !tmp3_isNotEmpty.j();
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
      var tmp4_removeValueIf = $this.et_1;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
      var destinationIndex = 0;
      var inductionVariable_0 = 0;
      var last_0 = tmp4_removeValueIf.t15_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var valueIndex = tmp4_removeValueIf.q15_1[i_0];
          var set = ensureNotNull(tmp4_removeValueIf.s15_1[valueIndex]);
          // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
          // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
          var destinationIndex_0 = 0;
          var inductionVariable_1 = 0;
          var last_1 = set.l10_1;
          if (inductionVariable_1 < last_1)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var tmp_0 = set.m10_1[i_1];
              var item = isObject(tmp_0) ? tmp_0 : THROW_CCE();
              var tmp$ret$3;
              // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>' call
              var tmp_1;
              if ($this.ft_1.k(item)) {
                tmp_1 = true;
              } else {
                var tmp0_safe_receiver = invalidated._v;
                var tmp_2;
                if (tmp0_safe_receiver == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$2;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  var tmp$ret$1;
                  // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                  tmp$ret$1 = tmp0_safe_receiver.k(item);
                  tmp$ret$2 = tmp$ret$1;
                  tmp_2 = tmp$ret$2;
                }
                tmp_1 = tmp_2 === true;
              }
              tmp$ret$3 = tmp_1;
              if (!tmp$ret$3) {
                if (!(destinationIndex_0 === i_1)) {
                  set.m10_1[destinationIndex_0] = item;
                }
                var tmp1 = destinationIndex_0;
                destinationIndex_0 = tmp1 + 1 | 0;
              }
            }
             while (inductionVariable_1 < last_1);
          var inductionVariable_2 = destinationIndex_0;
          var last_2 = set.l10_1;
          if (inductionVariable_2 < last_2)
            do {
              var i_2 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              set.m10_1[i_2] = null;
            }
             while (inductionVariable_2 < last_2);
          set.l10_1 = destinationIndex_0;
          if (set.l10_1 > 0) {
            if (!(destinationIndex === i_0)) {
              var destinationKeyOrder = tmp4_removeValueIf.q15_1[destinationIndex];
              tmp4_removeValueIf.q15_1[destinationIndex] = valueIndex;
              tmp4_removeValueIf.q15_1[i_0] = destinationKeyOrder;
            }
            var tmp1_0 = destinationIndex;
            destinationIndex = tmp1_0 + 1 | 0;
          }
        }
         while (inductionVariable_0 < last_0);
      var inductionVariable_3 = destinationIndex;
      var last_3 = tmp4_removeValueIf.t15_1;
      if (inductionVariable_3 < last_3)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          tmp4_removeValueIf.r15_1[tmp4_removeValueIf.q15_1[i_3]] = null;
        }
         while (inductionVariable_3 < last_3);
      tmp4_removeValueIf.t15_1 = destinationIndex;
      cleanUpDerivedStateObservations($this);
      $this.ft_1.t5();
    } else {
      var tmp1_safe_receiver = invalidated._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
        var tmp0_removeValueIf = $this.et_1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
        var destinationIndex_1 = 0;
        var inductionVariable_4 = 0;
        var last_4 = tmp0_removeValueIf.t15_1;
        if (inductionVariable_4 < last_4)
          do {
            var i_4 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var valueIndex_0 = tmp0_removeValueIf.q15_1[i_4];
            var set_0 = ensureNotNull(tmp0_removeValueIf.s15_1[valueIndex_0]);
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
            // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
            var destinationIndex_2 = 0;
            var inductionVariable_5 = 0;
            var last_5 = set_0.l10_1;
            if (inductionVariable_5 < last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_3 = set_0.m10_1[i_5];
                var item_0 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
                var tmp$ret$4;
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.<anonymous>.<anonymous>' call
                tmp$ret$4 = tmp1_safe_receiver.k(item_0);
                if (!tmp$ret$4) {
                  if (!(destinationIndex_2 === i_5)) {
                    set_0.m10_1[destinationIndex_2] = item_0;
                  }
                  var tmp1_1 = destinationIndex_2;
                  destinationIndex_2 = tmp1_1 + 1 | 0;
                }
              }
               while (inductionVariable_5 < last_5);
            var inductionVariable_6 = destinationIndex_2;
            var last_6 = set_0.l10_1;
            if (inductionVariable_6 < last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                set_0.m10_1[i_6] = null;
              }
               while (inductionVariable_6 < last_6);
            set_0.l10_1 = destinationIndex_2;
            if (set_0.l10_1 > 0) {
              if (!(destinationIndex_1 === i_4)) {
                var destinationKeyOrder_0 = tmp0_removeValueIf.q15_1[destinationIndex_1];
                tmp0_removeValueIf.q15_1[destinationIndex_1] = valueIndex_0;
                tmp0_removeValueIf.q15_1[i_4] = destinationKeyOrder_0;
              }
              var tmp1_2 = destinationIndex_1;
              destinationIndex_1 = tmp1_2 + 1 | 0;
            }
          }
           while (inductionVariable_4 < last_4);
        var inductionVariable_7 = destinationIndex_1;
        var last_7 = tmp0_removeValueIf.t15_1;
        if (inductionVariable_7 < last_7)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            tmp0_removeValueIf.r15_1[tmp0_removeValueIf.q15_1[i_7]] = null;
          }
           while (inductionVariable_7 < last_7);
        tmp0_removeValueIf.t15_1 = destinationIndex_1;
        cleanUpDerivedStateObservations($this);
        tmp$ret$5 = Unit_getInstance();
      }
    }
  }
  function cleanUpDerivedStateObservations($this) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
    var tmp0_removeValueIf = $this.gt_1;
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = tmp0_removeValueIf.t15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = tmp0_removeValueIf.q15_1[i];
        var set = ensureNotNull(tmp0_removeValueIf.s15_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.l10_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.m10_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
            tmp$ret$0 = !$this.et_1.u15(item);
            if (!tmp$ret$0) {
              if (!(destinationIndex_0 === i_0)) {
                set.m10_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.l10_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.m10_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.l10_1 = destinationIndex_0;
        if (set.l10_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = tmp0_removeValueIf.q15_1[destinationIndex];
            tmp0_removeValueIf.q15_1[destinationIndex] = valueIndex;
            tmp0_removeValueIf.q15_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = tmp0_removeValueIf.t15_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        tmp0_removeValueIf.r15_1[tmp0_removeValueIf.q15_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    tmp0_removeValueIf.t15_1 = destinationIndex;
    // Inline function 'androidx.compose.runtime.removeValueIf' call
    var tmp1_removeValueIf = $this.ft_1;
    var iter = tmp1_removeValueIf.e();
    while (iter.f()) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.CompositionImpl.cleanUpDerivedStateObservations.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = iter.g();
      tmp$ret$1 = !tmp2__anonymous__z9zvc9.v15();
      if (tmp$ret$1) {
        iter.b3();
      }
    }
  }
  function invalidateScopeOfLocked($this, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = $this.et_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.l10_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateScopeOfLocked.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.i(i);
          if (tmp2__anonymous__z9zvc9.p15(value).equals(InvalidationResult_IMMINENT_getInstance())) {
            $this.jt_1.w15(value, tmp2__anonymous__z9zvc9);
          }
        }
         while (inductionVariable < last);
    }
  }
  function applyChangesInLocked($this, changes) {
    var manager = new RememberEventDispatcher($this.ct_1);
    try {
      if (changes.j())
        return Unit_getInstance();
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().w10('Compose:applyChanges');
        try {
          $this.zs_1.jq();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.SlotTable.write' call
          var tmp1_write = $this.dt_1;
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_write.lx();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
          var tmp;
          try {
            var applier = $this.zs_1;
            // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
            // Inline function 'kotlin.contracts.contract' call
            var inductionVariable = 0;
            var last = changes.h() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = changes.i(index);
                // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>.<anonymous>' call
                item(applier, tmp0_let, manager);
              }
               while (inductionVariable <= last);
            changes.t5();
            tmp = Unit_getInstance();
          }finally {
            tmp0_let.ax();
          }
          tmp$ret$0 = tmp;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          $this.zs_1.kq();
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().i11(token);
        }
      }
      manager.b16();
      manager.c16();
      if ($this.lt_1) {
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token_0 = Trace_getInstance().w10('Compose:unobserve');
          try {
            $this.lt_1 = false;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf' call
            var tmp0_removeValueIf = $this.et_1;
            // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
            var destinationIndex = 0;
            var inductionVariable_0 = 0;
            var last_0 = tmp0_removeValueIf.t15_1;
            if (inductionVariable_0 < last_0)
              do {
                var i = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var valueIndex = tmp0_removeValueIf.q15_1[i];
                var set = ensureNotNull(tmp0_removeValueIf.s15_1[valueIndex]);
                // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
                // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
                var destinationIndex_0 = 0;
                var inductionVariable_1 = 0;
                var last_1 = set.l10_1;
                if (inductionVariable_1 < last_1)
                  do {
                    var i_0 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    var tmp_0 = set.m10_1[i_0];
                    var item_0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
                    var tmp$ret$4;
                    // Inline function 'androidx.compose.runtime.CompositionImpl.applyChangesInLocked.<anonymous>.<anonymous>' call
                    tmp$ret$4 = !item_0.d16();
                    if (!tmp$ret$4) {
                      if (!(destinationIndex_0 === i_0)) {
                        set.m10_1[destinationIndex_0] = item_0;
                      }
                      var tmp1 = destinationIndex_0;
                      destinationIndex_0 = tmp1 + 1 | 0;
                    }
                  }
                   while (inductionVariable_1 < last_1);
                var inductionVariable_2 = destinationIndex_0;
                var last_2 = set.l10_1;
                if (inductionVariable_2 < last_2)
                  do {
                    var i_1 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    set.m10_1[i_1] = null;
                  }
                   while (inductionVariable_2 < last_2);
                set.l10_1 = destinationIndex_0;
                if (set.l10_1 > 0) {
                  if (!(destinationIndex === i)) {
                    var destinationKeyOrder = tmp0_removeValueIf.q15_1[destinationIndex];
                    tmp0_removeValueIf.q15_1[destinationIndex] = valueIndex;
                    tmp0_removeValueIf.q15_1[i] = destinationKeyOrder;
                  }
                  var tmp1_0 = destinationIndex;
                  destinationIndex = tmp1_0 + 1 | 0;
                }
              }
               while (inductionVariable_0 < last_0);
            var inductionVariable_3 = destinationIndex;
            var last_3 = tmp0_removeValueIf.t15_1;
            if (inductionVariable_3 < last_3)
              do {
                var i_2 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                tmp0_removeValueIf.r15_1[tmp0_removeValueIf.q15_1[i_2]] = null;
              }
               while (inductionVariable_3 < last_3);
            tmp0_removeValueIf.t15_1 = destinationIndex;
            cleanUpDerivedStateObservations($this);
            tmp$ret$5 = Unit_getInstance();
            break $l$block_0;
          }finally {
            Trace_getInstance().i11(token_0);
          }
        }
      }
    }finally {
      if ($this.it_1.j()) {
        manager.e16();
      }
    }
  }
  function abandonChanges($this) {
    $this.at_1.f16(null);
    $this.ht_1.t5();
    $this.it_1.t5();
    $this.ct_1.t5();
  }
  function invalidateChecked($this, scope, anchor, instance) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.bt_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>' call
    var tmp0_safe_receiver = $this.mt_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateChecked.<anonymous>.<anonymous>' call
      var tmp_0;
      if ($this.dt_1.g16($this.nt_1, anchor)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var delegate = tmp;
    if (delegate == null) {
      if ($this.h16() ? $this.ot_1.k10(scope, instance) : false) {
        return InvalidationResult_IMMINENT_getInstance();
      }
      if (instance == null) {
        $this.kt_1.i16(scope, null);
      } else {
        addValue($this.kt_1, scope, instance);
      }
    }
    tmp$ret$2 = delegate;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var delegate_0 = tmp$ret$4;
    if (!(delegate_0 == null)) {
      return invalidateChecked(delegate_0, scope, anchor, instance);
    }
    $this.ys_1.j16($this);
    return $this.h16() ? InvalidationResult_DEFERRED_getInstance() : InvalidationResult_SCHEDULED_getInstance();
  }
  function takeInvalidations($this) {
    var invalidations = $this.kt_1;
    var tmp = $this;
    tmp.kt_1 = IdentityArrayMap_init_$Create$(0, 1, null);
    return invalidations;
  }
  function RememberEventDispatcher(abandoning) {
    this.x15_1 = abandoning;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.y15_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.z15_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_1.a16_1 = tmp$ret$2;
  }
  RememberEventDispatcher.prototype.tr = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.z15_1.v1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.remembering.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.z15_1.z2(tmp0_let);
      tmp = this.x15_1.y2(instance);
    } else {
      tmp = this.y15_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  RememberEventDispatcher.prototype.ur = function (instance) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.y15_1.v1(instance);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.RememberEventDispatcher.forgetting.<anonymous>' call
    var tmp;
    if (tmp0_let >= 0) {
      this.y15_1.z2(tmp0_let);
      tmp = this.x15_1.y2(instance);
    } else {
      tmp = this.z15_1.a(instance);
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
  };
  RememberEventDispatcher.prototype.b16 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.z15_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().w10('Compose:onForgotten');
        try {
          var inductionVariable = this.z15_1.h() - 1 | 0;
          var tmp;
          if (0 <= inductionVariable) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              var instance = this.z15_1.i(i);
              if (!this.x15_1.k(instance)) {
                instance.k16();
              }
            }
             while (0 <= inductionVariable);
            tmp = Unit_getInstance();
          }
          tmp$ret$1 = tmp;
          break $l$block;
        }finally {
          Trace_getInstance().i11(token);
        }
      }
    }
    var tmp$ret$2;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.y15_1;
    tmp$ret$2 = !tmp1_isNotEmpty.j();
    if (tmp$ret$2) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().w10('Compose:onRemembered');
        try {
          var tmp0_fastForEach = this.y15_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last = tmp0_fastForEach.h() - 1 | 0;
          var tmp_0;
          if (inductionVariable_0 <= last) {
            do {
              var index = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item = tmp0_fastForEach.i(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchRememberObservers.<anonymous>.<anonymous>' call
              this.x15_1.y2(item);
              item.l16();
            }
             while (inductionVariable_0 <= last);
            tmp_0 = Unit_getInstance();
          }
          tmp$ret$3 = tmp_0;
          break $l$block_0;
        }finally {
          Trace_getInstance().i11(token_0);
        }
      }
    }
  };
  RememberEventDispatcher.prototype.c16 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.a16_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().w10('Compose:sideeffects');
        try {
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this.a16_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.h() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.i(index);
              // Inline function 'androidx.compose.runtime.RememberEventDispatcher.dispatchSideEffects.<anonymous>.<anonymous>' call
              item();
            }
             while (inductionVariable <= last);
          this.a16_1.t5();
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().i11(token);
        }
      }
    }
  };
  RememberEventDispatcher.prototype.e16 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.x15_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token = Trace_getInstance().w10('Compose:abandons');
        try {
          var iterator = this.x15_1.e();
          while (iterator.f()) {
            var instance = iterator.g();
            iterator.b3();
            instance.m16();
          }
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }finally {
          Trace_getInstance().i11(token);
        }
      }
    }
  };
  RememberEventDispatcher.$metadata$ = classMeta('RememberEventDispatcher', [RememberManager]);
  function addPendingInvalidationsLocked$invalidate(this$0, $forgetConditionalScopes, invalidated, value) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.forEachScopeOf' call
    var tmp1_forEachScopeOf = this$0.et_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.l10_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.i(i);
          if (!this$0.jt_1.n16(value, tmp2__anonymous__z9zvc9) ? !tmp2__anonymous__z9zvc9.p15(value).equals(InvalidationResult_IGNORED_getInstance()) : false) {
            if (tmp2__anonymous__z9zvc9.v15() ? !$forgetConditionalScopes : false) {
              this$0.ft_1.a(tmp2__anonymous__z9zvc9);
            } else {
              var tmp0_elvis_lhs = invalidated._v;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                var tmp$ret$0;
                // Inline function 'kotlin.also' call
                var tmp0_also = HashSet_init_$Create$();
                // Inline function 'kotlin.contracts.contract' call
                // Inline function 'androidx.compose.runtime.CompositionImpl.addPendingInvalidationsLocked.invalidate.<anonymous>.<anonymous>' call
                invalidated._v = tmp0_also;
                tmp$ret$0 = tmp0_also;
                tmp = tmp$ret$0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var set = tmp;
              set.a(tmp2__anonymous__z9zvc9);
            }
          }
        }
         while (inductionVariable < last);
    }
  }
  function CompositionImpl(parent, applier, recomposeContext) {
    this.ys_1 = parent;
    this.zs_1 = applier;
    this.at_1 = new AtomicReference(null);
    this.bt_1 = createSynchronizedObject();
    this.ct_1 = HashSet_init_$Create$();
    this.dt_1 = new SlotTable();
    this.et_1 = new IdentityScopeMap();
    this.ft_1 = HashSet_init_$Create$();
    this.gt_1 = new IdentityScopeMap();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.ht_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.it_1 = tmp$ret$1;
    this.jt_1 = new IdentityScopeMap();
    var tmp_1 = this;
    tmp_1.kt_1 = IdentityArrayMap_init_$Create$(0, 1, null);
    this.lt_1 = false;
    this.mt_1 = null;
    this.nt_1 = 0;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ComposerImpl(this.zs_1, this.ys_1, this.dt_1, this.ct_1, this.ht_1, this.it_1, this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.CompositionImpl.composer.<anonymous>' call
    this.ys_1.o16(tmp0_also);
    tmp$ret$2 = tmp0_also;
    tmp_2.ot_1 = tmp$ret$2;
    this.pt_1 = recomposeContext;
    var tmp_3 = this;
    var tmp_4 = this.ys_1;
    tmp_3.qt_1 = tmp_4 instanceof Recomposer;
    this.rt_1 = false;
    this.st_1 = ComposableSingletons$CompositionKt_getInstance().p16_1;
  }
  CompositionImpl.prototype.d14 = function () {
    return this.dt_1;
  };
  CompositionImpl.prototype.h16 = function () {
    return this.ot_1.yu_1;
  };
  CompositionImpl.prototype.r16 = function () {
    return this.rt_1;
  };
  CompositionImpl.prototype.s16 = function (values) {
    $l$loop: while (true) {
      var old = this.at_1.tj();
      var tmp0_subject = old;
      var tmp;
      if (tmp0_subject == null ? true : equals(tmp0_subject, get_PendingApplyNoModifications())) {
        tmp = values;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Set) : false) {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [old, values];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          tmp = tmp$ret$2;
        } else {
          if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
            tmp = plus_0((!(old == null) ? isArray(old) : false) ? old : THROW_CCE(), values);
          } else {
            var tmp1_error = 'corrupt pendingModifications: ' + this.at_1;
            throw IllegalStateException_init_$Create$(toString(tmp1_error));
          }
        }
      }
      var new_0 = tmp;
      if (this.at_1.t16(old, new_0)) {
        if (old == null) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp2_synchronized = this.bt_1;
          var tmp$ret$3;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          drainPendingModificationsLocked(this);
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$4 = tmp$ret$3;
        }
        break $l$loop;
      }
    }
  };
  CompositionImpl.prototype.u16 = function (values) {
    var tmp0_iterator = values.e();
    while (tmp0_iterator.f()) {
      var value = tmp0_iterator.g();
      if (this.et_1.u15(value) ? true : this.gt_1.u15(value))
        return true;
    }
    return false;
  };
  CompositionImpl.prototype.t13 = function (block) {
    return this.ot_1.t13(block);
  };
  CompositionImpl.prototype.v16 = function (value) {
    if (!_get_areChildrenComposing__c1uwup(this)) {
      var tmp0_safe_receiver = this.ot_1.v12();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.x13(true);
        this.et_1.w15(value, tmp0_safe_receiver);
        if (isInterface(value, DerivedState)) {
          this.gt_1.w16(value);
          var indexedObject = value.x16();
          var inductionVariable = 0;
          var last = indexedObject.length;
          $l$loop: while (inductionVariable < last) {
            var dependency = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (dependency == null)
              break $l$loop;
            this.gt_1.w15(dependency, value);
          }
        }
        tmp0_safe_receiver.y16(value);
        tmp$ret$0 = Unit_getInstance();
      }
    }
  };
  CompositionImpl.prototype.z16 = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.bt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    invalidateScopeOfLocked(this, value);
    var tmp1_forEachScopeOf = this.gt_1;
    var index = find_2(tmp1_forEachScopeOf, value);
    var tmp;
    if (index >= 0) {
      var tmp0_fastForEach = scopeSetAt(tmp1_forEachScopeOf, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.l10_1;
      var tmp_0;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recordWriteOf.<anonymous>.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = tmp0_fastForEach.i(i);
          invalidateScopeOfLocked(this, tmp2__anonymous__z9zvc9);
        }
         while (inductionVariable < last);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  CompositionImpl.prototype.a17 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.bt_1;
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>' call
    drainPendingModificationsForCompositionLocked(this);
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'kotlin.also' call
          var tmp0_also = this.ot_1.u13(invalidations);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.CompositionImpl.recompose.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          if (!tmp0_also) {
            drainPendingModificationsLocked(this);
          }
          tmp$ret$0 = tmp0_also;
          tmp$ret$1 = tmp$ret$0;
          tmp_1 = tmp$ret$1;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            this.kt_1 = invalidations;
            throw $p;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$2 = tmp_1;
        tmp$ret$3 = tmp$ret$2;
        var tmp0_also_0 = tmp$ret$3;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$4 = tmp0_also_0;
        tmp_0 = tmp$ret$4;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.ct_1;
          tmp$ret$5 = !tmp1_isNotEmpty.j();
          tmp_3 = tmp$ret$5;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.ct_1)).e16();
        }
      }
      tmp$ret$6 = tmp_0;
      tmp = tmp$ret$6;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$7 = tmp;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  CompositionImpl.prototype.b17 = function (references) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.CompositionImpl.insertMovableContent.<anonymous>' call
          tmp$ret$0 = equals(item.f5_1.a10_1, this);
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    runtimeCheck(tmp$ret$1);
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$2;
        // Inline function 'kotlin.also' call
        this.ot_1.o13(references);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$2 = tmp0_also;
        tmp_0 = tmp$ret$2;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.ct_1;
          tmp$ret$3 = !tmp1_isNotEmpty.j();
          tmp_1 = tmp$ret$3;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.ct_1)).e16();
        }
      }
      tmp$ret$4 = tmp_0;
      tmp = tmp$ret$4;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$5 = tmp;
  };
  CompositionImpl.prototype.c17 = function (state) {
    var manager = new RememberEventDispatcher(this.ct_1);
    var slotTable = state.i10_1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = slotTable.lx();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      removeCurrentGroup(tmp0_let, manager);
      tmp = Unit_getInstance();
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    manager.b16();
  };
  CompositionImpl.prototype.d17 = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.bt_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        applyChangesInLocked(this, this.ht_1);
        drainPendingModificationsLocked(this);
        var tmp0_also = Unit_getInstance();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      }finally {
        var tmp_1;
        if (!success) {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.ct_1;
          tmp$ret$1 = !tmp1_isNotEmpty.j();
          tmp_1 = tmp$ret$1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          (new RememberEventDispatcher(this.ct_1)).e16();
        }
      }
      tmp$ret$2 = tmp_0;
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
  };
  CompositionImpl.prototype.e17 = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.bt_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.it_1;
        tmp$ret$0 = !tmp0_isNotEmpty.j();
        if (tmp$ret$0) {
          applyChangesInLocked(this, this.it_1);
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.ct_1;
          tmp$ret$2 = !tmp1_isNotEmpty.j();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.ct_1)).e16();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  CompositionImpl.prototype.t12 = function () {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.bt_1;
    var tmp$ret$5;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        this.ot_1.t12();
        var tmp_1;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = this.ct_1;
        tmp$ret$0 = !tmp0_isNotEmpty.j();
        if (tmp$ret$0) {
          (new RememberEventDispatcher(this.ct_1)).e16();
          tmp_1 = Unit_getInstance();
        }
        var tmp0_also = tmp_1;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      }finally {
        var tmp_2;
        if (!success) {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.ct_1;
          tmp$ret$2 = !tmp1_isNotEmpty.j();
          tmp_2 = tmp$ret$2;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          (new RememberEventDispatcher(this.ct_1)).e16();
        }
      }
      tmp$ret$3 = tmp_0;
      tmp = tmp$ret$3;
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_3;
    }
    tmp$ret$4 = tmp;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
  };
  CompositionImpl.prototype.f17 = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.bt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_forEach = this.dt_1.xv_1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.invalidateAll.<anonymous>.<anonymous>' call
      var tmp0_safe_receiver = element instanceof RecomposeScopeImpl ? element : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.g17();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  CompositionImpl.prototype.n10 = function (to, groupIndex, block) {
    var tmp;
    if ((!(to == null) ? !equals(to, this) : false) ? groupIndex >= 0 : false) {
      var tmp_0 = this;
      tmp_0.mt_1 = to instanceof CompositionImpl ? to : THROW_CCE();
      this.nt_1 = groupIndex;
      var tmp_1;
      try {
        tmp_1 = block();
      }finally {
        this.mt_1 = null;
        this.nt_1 = 0;
      }
      tmp = tmp_1;
    } else {
      tmp = block();
    }
    return tmp;
  };
  CompositionImpl.prototype.h17 = function (scope, instance) {
    if (scope.i17()) {
      scope.m13(true);
    }
    var anchor = scope.ts_1;
    if ((anchor == null ? true : !this.dt_1.j17(anchor)) ? true : !anchor.d16())
      return InvalidationResult_IGNORED_getInstance();
    if (!anchor.d16())
      return InvalidationResult_IGNORED_getInstance();
    if (!scope.k17())
      return InvalidationResult_IGNORED_getInstance();
    return invalidateChecked(this, scope, anchor, instance);
  };
  CompositionImpl.prototype.l17 = function (instance, scope) {
    this.et_1.n16(instance, scope);
  };
  CompositionImpl.prototype.m17 = function (state) {
    if (!this.et_1.u15(state)) {
      this.gt_1.w16(state);
    }
  };
  CompositionImpl.prototype.n17 = function (set__$_ezb9bk) {
    this.st_1 = set__$_ezb9bk;
  };
  CompositionImpl.prototype.o17 = function (content) {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.rt_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionImpl.setContent$composable.<anonymous>' call
      tmp$ret$0 = 'The composition is disposed';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.n17(content);
    this.ys_1.p17(this, this.st_1);
  };
  CompositionImpl.prototype.q17 = function (content) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.CompositionImpl.guardChanges' call
    var tmp;
    try {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues' call
      var success = false;
      var tmp_0;
      try {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized = this.bt_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        drainPendingModificationsForCompositionLocked(this);
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.CompositionImpl.guardInvalidationsLocked' call
        var invalidations = takeInvalidations(this);
        var tmp_1;
        try {
          this.ot_1.y13(invalidations, content);
          tmp_1 = Unit_getInstance();
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Exception) {
            this.kt_1 = invalidations;
            throw $p;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$0 = tmp_1;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        var tmp0_also = tmp$ret$2;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.CompositionImpl.trackAbandonedValues.<anonymous>' call
        success = true;
        tmp$ret$3 = tmp0_also;
        tmp_0 = tmp$ret$3;
      }finally {
        var tmp_3;
        if (!success) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = this.ct_1;
          tmp$ret$4 = !tmp1_isNotEmpty.j();
          tmp_3 = tmp$ret$4;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          (new RememberEventDispatcher(this.ct_1)).e16();
        }
      }
      tmp$ret$5 = tmp_0;
      tmp = tmp$ret$5;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Exception) {
        abandonChanges(this);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_4;
    }
    tmp$ret$6 = tmp;
  };
  CompositionImpl.$metadata$ = classMeta('CompositionImpl', [ControlledComposition]);
  function ControlledComposition() {
  }
  ControlledComposition.$metadata$ = interfaceMeta('ControlledComposition', [Composition]);
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(954879418, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-1.<anonymous> (Composition.kt:505)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.f12(p0, p1);
    };
  }
  function ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Composition.kt#9igjgp');
    if (!(($changed & 11) === 2) ? true : !$composer_0.h12()) {
      if (isTraceInProgress()) {
        traceEventStart(1918065384, $changed, -1, 'androidx.compose.runtime.ComposableSingletons$CompositionKt.lambda-2.<anonymous> (Composition.kt:596)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.mx();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$CompositionKt() {
    ComposableSingletons$CompositionKt_instance = this;
    var tmp = this;
    tmp.p16_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(954879418, false, ComposableSingletons$CompositionKt$lambda_1$lambda_xm0u9s));
    var tmp_0 = this;
    tmp_0.q16_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1918065384, false, ComposableSingletons$CompositionKt$lambda_2$lambda_8lgqn5));
  }
  ComposableSingletons$CompositionKt.$metadata$ = objectMeta('ComposableSingletons$CompositionKt');
  var ComposableSingletons$CompositionKt_instance;
  function ComposableSingletons$CompositionKt_getInstance() {
    if (ComposableSingletons$CompositionKt_instance == null)
      new ComposableSingletons$CompositionKt();
    return ComposableSingletons$CompositionKt_instance;
  }
  function removeValueIf(_this__u8e3s4, predicate) {
    init_properties_Composition_kt_ckysay();
    var iter = _this__u8e3s4.e();
    while (iter.f()) {
      if (predicate(iter.g())) {
        iter.b3();
      }
    }
  }
  function addValue(_this__u8e3s4, key, value) {
    init_properties_Composition_kt_ckysay();
    if (_this__u8e3s4.s17(key)) {
      var tmp0_safe_receiver = _this__u8e3s4.r17(key);
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.d15(value);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArraySet();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.addValue.<anonymous>' call
      tmp0_also.d15(value);
      tmp$ret$0 = tmp0_also;
      _this__u8e3s4.i16(key, tmp$ret$0);
    }
  }
  function Composition() {
  }
  Composition.$metadata$ = interfaceMeta('Composition');
  function ControlledComposition_0(applier, parent) {
    init_properties_Composition_kt_ckysay();
    return CompositionImpl_init_$Create$(parent, applier, null, 4, null);
  }
  var properties_initialized_Composition_kt_u7hvq2;
  function init_properties_Composition_kt_ckysay() {
    if (properties_initialized_Composition_kt_u7hvq2) {
    } else {
      properties_initialized_Composition_kt_u7hvq2 = true;
      PendingApplyNoModifications = new Object();
    }
  }
  function get_EmptyCompositionLocalMap() {
    init_properties_CompositionContext_kt_yh8t7v();
    return EmptyCompositionLocalMap;
  }
  var EmptyCompositionLocalMap;
  function CompositionContext() {
    this.ew_1 = 0;
  }
  CompositionContext.prototype.lw = function (table) {
  };
  CompositionContext.prototype.o16 = function (composer) {
  };
  CompositionContext.prototype.gw = function () {
    return get_EmptyCompositionLocalMap();
  };
  CompositionContext.prototype.fw = function () {
  };
  CompositionContext.prototype.nw = function () {
  };
  CompositionContext.prototype.h10 = function (reference) {
    return null;
  };
  CompositionContext.$metadata$ = classMeta('CompositionContext');
  var properties_initialized_CompositionContext_kt_mk393b;
  function init_properties_CompositionContext_kt_yh8t7v() {
    if (properties_initialized_CompositionContext_kt_mk393b) {
    } else {
      properties_initialized_CompositionContext_kt_mk393b = true;
      EmptyCompositionLocalMap = persistentHashMapOf();
    }
  }
  function CompositionLocal(defaultFactory) {
    this.jx_1 = new LazyValueHolder(defaultFactory);
  }
  CompositionLocal.prototype.t17 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_0.h13(this);
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  CompositionLocal.$metadata$ = classMeta('CompositionLocal');
  function ProvidableCompositionLocal(defaultFactory) {
    CompositionLocal.call(this, defaultFactory);
  }
  ProvidableCompositionLocal.prototype.v17 = function (value) {
    return new ProvidedValue(this, value, true);
  };
  ProvidableCompositionLocal.$metadata$ = classMeta('ProvidableCompositionLocal', undefined, undefined, undefined, undefined, CompositionLocal.prototype);
  function staticCompositionLocalOf(defaultFactory) {
    return new StaticProvidableCompositionLocal(defaultFactory);
  }
  function StaticProvidableCompositionLocal(defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
  }
  StaticProvidableCompositionLocal.prototype.c15 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(571516549);
    sourceInformation($composer_0, 'C(provided$composable):CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(571516549, $changed, -1, 'androidx.compose.runtime.StaticProvidableCompositionLocal.provided$composable (CompositionLocal.kt:139)');
    }
    var tmp0 = new StaticValueHolder(value);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
    return tmp0;
  };
  StaticProvidableCompositionLocal.$metadata$ = classMeta('StaticProvidableCompositionLocal', undefined, undefined, undefined, undefined, ProvidableCompositionLocal.prototype);
  function compositionLocalOf(policy, defaultFactory) {
    return new DynamicProvidableCompositionLocal(policy, defaultFactory);
  }
  function compositionLocalOf$default(policy, defaultFactory, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      policy = structuralEqualityPolicy();
    return compositionLocalOf(policy, defaultFactory);
  }
  function DynamicProvidableCompositionLocal(policy, defaultFactory) {
    ProvidableCompositionLocal.call(this, defaultFactory);
    this.y17_1 = policy;
  }
  DynamicProvidableCompositionLocal.prototype.c15 = function (value, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.nr(-1327537144);
    sourceInformation($composer_0, 'C(provided$composable)*125@5325L42:CompositionLocal.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1327537144, $changed, -1, 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable (CompositionLocal.kt:125)');
    }
    var tmp$ret$5;
    // Inline function 'kotlin.apply' call
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
      // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf(value, this.y17_1);
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
    var tmp1_apply = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.DynamicProvidableCompositionLocal.provided$composable.<anonymous>' call
    tmp1_apply.sn(value);
    tmp$ret$5 = tmp1_apply;
    var tmp0_0 = tmp$ret$5;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
    return tmp0_0;
  };
  DynamicProvidableCompositionLocal.$metadata$ = classMeta('DynamicProvidableCompositionLocal', undefined, undefined, undefined, undefined, ProvidableCompositionLocal.prototype);
  function CompositionLocalProvider$composable(values, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j13(-266554972);
    sourceInformation($composer_0, 'C(CompositionLocalProvider$composable)P(1)227@9992L9:CompositionLocal.kt#9igjgp');
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-266554972, $dirty, -1, 'androidx.compose.runtime.CompositionLocalProvider$composable (CompositionLocal.kt:225)');
    }
    $composer_0.e13(values);
    content($composer_0, 14 & $dirty >> 3);
    $composer_0.g13();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.k13();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.q14(CompositionLocalProvider$composable$lambda$ref(values, content, $changed));
    }
  }
  function CompositionLocalProvider$composable$lambda($values, $content, $$changed, $composer, $force) {
    return CompositionLocalProvider$composable($values.slice(), $content, $composer, $$changed | 1);
  }
  function CompositionLocalProvider$composable$lambda$ref($values, $content, $$changed) {
    return function (p0, p1) {
      CompositionLocalProvider$composable$lambda($values, $content, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  var calculationBlockNestedLevel;
  function get_derivedStateObservers() {
    init_properties_DerivedState_kt_59k4km();
    return derivedStateObservers;
  }
  var derivedStateObservers;
  function DerivedState() {
  }
  DerivedState.$metadata$ = interfaceMeta('DerivedState', [State_0]);
  function observeDerivedStateRecalculations(start, done, block) {
    init_properties_DerivedState_kt_59k4km();
    var tmp0_elvis_lhs = get_derivedStateObservers().tj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'kotlin.also' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.collection.MutableVector' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(16), null);
      tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
      tmp$ret$2 = tmp$ret$1;
      var tmp0_also = tmp$ret$2;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.observeDerivedStateRecalculations.<anonymous>' call
      get_derivedStateObservers().c18(tmp0_also);
      tmp$ret$3 = tmp0_also;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var observers = tmp;
    var observer = to(start, done);
    try {
      observers.d15(observer);
      block();
    }finally {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
      tmp$ret$4 = observers.f18_1 - 1 | 0;
      observers.z2(tmp$ret$4);
    }
  }
  var properties_initialized_DerivedState_kt_scch8q;
  function init_properties_DerivedState_kt_59k4km() {
    if (properties_initialized_DerivedState_kt_scch8q) {
    } else {
      properties_initialized_DerivedState_kt_scch8q = true;
      calculationBlockNestedLevel = new SnapshotThreadLocal();
      derivedStateObservers = new SnapshotThreadLocal();
    }
  }
  function get_InternalDisposableEffectScope() {
    init_properties_Effects_kt_ajl6oe();
    return InternalDisposableEffectScope;
  }
  var InternalDisposableEffectScope;
  function _no_name_provided__qut3iv($onDisposeEffect) {
    this.h18_1 = $onDisposeEffect;
  }
  _no_name_provided__qut3iv.prototype.sh = function () {
    this.h18_1();
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function DisposableEffectScope() {
    this.i18_1 = 0;
  }
  DisposableEffectScope.prototype.j18 = function (onDisposeEffect) {
    return new _no_name_provided__qut3iv(onDisposeEffect);
  };
  DisposableEffectScope.$metadata$ = classMeta('DisposableEffectScope');
  function DisposableEffectResult() {
  }
  DisposableEffectResult.$metadata$ = interfaceMeta('DisposableEffectResult');
  function DisposableEffect$composable(key1, effect, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.nr(927399050);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)154@6171L47:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(927399050, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:150)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.nr(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.sr(key1);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
  }
  function DisposableEffect$composable_0(key1, key2, effect, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.nr(235732070);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1,2)194@8057L53:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(235732070, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:189)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.nr(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.sr(key1) | $composer_1.sr(key2));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.or();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
  }
  function DisposableEffectImpl(effect) {
    this.k18_1 = effect;
    this.l18_1 = null;
  }
  DisposableEffectImpl.prototype.l16 = function () {
    this.l18_1 = this.k18_1(get_InternalDisposableEffectScope());
  };
  DisposableEffectImpl.prototype.k16 = function () {
    var tmp0_safe_receiver = this.l18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sh();
    }
    this.l18_1 = null;
  };
  DisposableEffectImpl.prototype.m16 = function () {
  };
  DisposableEffectImpl.$metadata$ = classMeta('DisposableEffectImpl', [RememberObserver]);
  function DisposableEffect$composable_1(keys, effect, $composer, $changed) {
    init_properties_Effects_kt_ajl6oe();
    var $composer_0 = $composer;
    $composer_0.nr(-1541565433);
    sourceInformation($composer_0, 'C(DisposableEffect$composable)P(1)275@11877L48:Effects.kt#9igjgp');
    if (isTraceInProgress()) {
      traceEventStart(-1541565433, $changed, -1, 'androidx.compose.runtime.DisposableEffect$composable (Effects.kt:271)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = keys.slice();
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
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_1().qr_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffect$composable.<anonymous>' call
      tmp$ret$0 = new DisposableEffectImpl(effect);
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
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.rr();
  }
  var properties_initialized_Effects_kt_cj8kem;
  function init_properties_Effects_kt_ajl6oe() {
    if (properties_initialized_Effects_kt_cj8kem) {
    } else {
      properties_initialized_Effects_kt_cj8kem = true;
      InternalDisposableEffectScope = new DisposableEffectScope();
    }
  }
  function hashCodeOf($this, value) {
    var tmp;
    if (value instanceof Enum) {
      tmp = value.e4_1;
    } else {
      var tmp0_safe_receiver = value;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    }
    return tmp;
  }
  function JoinedKey(left, right) {
    this.m18_1 = left;
    this.n18_1 = right;
  }
  JoinedKey.prototype.hashCode = function () {
    return imul(hashCodeOf(this, this.m18_1), 31) + hashCodeOf(this, this.n18_1) | 0;
  };
  JoinedKey.prototype.toString = function () {
    return 'JoinedKey(left=' + toString_0(this.m18_1) + ', right=' + toString_0(this.n18_1) + ')';
  };
  JoinedKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JoinedKey))
      return false;
    var tmp0_other_with_cast = other instanceof JoinedKey ? other : THROW_CCE();
    if (!equals(this.m18_1, tmp0_other_with_cast.m18_1))
      return false;
    if (!equals(this.n18_1, tmp0_other_with_cast.n18_1))
      return false;
    return true;
  };
  JoinedKey.$metadata$ = classMeta('JoinedKey');
  function Key_0() {
    Key_instance = this;
  }
  Key_0.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function MonotonicFrameClock() {
  }
  MonotonicFrameClock.$metadata$ = interfaceMeta('MonotonicFrameClock', [Element]);
  function get_monotonicFrameClock(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.r3(Key_getInstance_0());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_movableContentKey() {
    return movableContentKey;
  }
  var movableContentKey;
  function OpaqueKey(key) {
    this.o18_1 = key;
  }
  OpaqueKey.prototype.toString = function () {
    return 'OpaqueKey(key=' + this.o18_1 + ')';
  };
  OpaqueKey.prototype.hashCode = function () {
    return getStringHashCode(this.o18_1);
  };
  OpaqueKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OpaqueKey))
      return false;
    var tmp0_other_with_cast = other instanceof OpaqueKey ? other : THROW_CCE();
    if (!(this.o18_1 === tmp0_other_with_cast.o18_1))
      return false;
    return true;
  };
  OpaqueKey.$metadata$ = classMeta('OpaqueKey');
  function _set_rereading__pnqtpo($this, value) {
    if (value) {
      $this.rs_1 = $this.rs_1 | 32;
    } else {
      $this.rs_1 = $this.rs_1 & -33;
    }
  }
  function _get_rereading__g2iruw($this) {
    return !(($this.rs_1 & 32) === 0);
  }
  function _set_skipped__p8q2c5($this, value) {
    if (value) {
      $this.rs_1 = $this.rs_1 | 16;
    } else {
      $this.rs_1 = $this.rs_1 & -17;
    }
  }
  function RecomposeScopeImpl$end$lambda(this$0, $token, $tmp0_safe_receiver) {
    return function (composition) {
      var tmp;
      var tmp_0;
      if (this$0.vs_1 === $token ? equals($tmp0_safe_receiver, this$0.ws_1) : false) {
        tmp_0 = composition instanceof CompositionImpl;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.removeValueIf' call
        var destinationIndex = 0;
        var inductionVariable = 0;
        var last = $tmp0_safe_receiver.p18_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_1 = $tmp0_safe_receiver.q18_1[i];
            var key = isObject(tmp_1) ? tmp_1 : THROW_CCE();
            var value = $tmp0_safe_receiver.r18_1[i];
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp0_also = !(value === $token);
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_also) {
              composition.l17(key, this$0);
              var tmp0_safe_receiver = isInterface(key, DerivedState) ? key : null;
              if (tmp0_safe_receiver == null)
                null;
              else {
                var tmp$ret$2;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$1;
                // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                composition.m17(tmp0_safe_receiver);
                var tmp0_safe_receiver_0 = this$0.xs_1;
                var tmp_2;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_2 = null;
                } else {
                  var tmp$ret$0;
                  // Inline function 'kotlin.let' call
                  // Inline function 'kotlin.contracts.contract' call
                  tmp0_safe_receiver_0.s18(tmp0_safe_receiver);
                  var tmp_3;
                  if (tmp0_safe_receiver_0.f11_1 === 0) {
                    this$0.xs_1 = null;
                    tmp_3 = Unit_getInstance();
                  }
                  tmp$ret$0 = tmp_3;
                  tmp_2 = Unit_getInstance();
                }
                tmp$ret$1 = tmp_2;
                tmp$ret$2 = tmp$ret$1;
              }
            }
            tmp$ret$3 = tmp0_also;
            tmp$ret$4 = tmp$ret$3;
            if (!tmp$ret$4) {
              if (!(destinationIndex === i)) {
                $tmp0_safe_receiver.q18_1[destinationIndex] = key;
                $tmp0_safe_receiver.r18_1[destinationIndex] = value;
              }
              var tmp1 = destinationIndex;
              destinationIndex = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable < last);
        var inductionVariable_0 = destinationIndex;
        var last_0 = $tmp0_safe_receiver.p18_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            $tmp0_safe_receiver.q18_1[i_0] = null;
          }
           while (inductionVariable_0 < last_0);
        $tmp0_safe_receiver.p18_1 = destinationIndex;
        var tmp_4;
        if ($tmp0_safe_receiver.p18_1 === 0) {
          this$0.ws_1 = null;
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      }
      return Unit_getInstance();
    };
  }
  function RecomposeScopeImpl(composition) {
    this.rs_1 = 0;
    this.ss_1 = composition;
    this.ts_1 = null;
    this.us_1 = null;
    this.vs_1 = 0;
    this.ws_1 = null;
    this.xs_1 = null;
  }
  RecomposeScopeImpl.prototype.e14 = function () {
    return this.ts_1;
  };
  RecomposeScopeImpl.prototype.d16 = function () {
    var tmp;
    if (!(this.ss_1 == null)) {
      var tmp0_safe_receiver = this.ts_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d16();
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    } else {
      tmp = false;
    }
    return tmp;
  };
  RecomposeScopeImpl.prototype.k17 = function () {
    return !(this.us_1 == null);
  };
  RecomposeScopeImpl.prototype.x13 = function (value) {
    if (value) {
      this.rs_1 = this.rs_1 | 1;
    } else {
      this.rs_1 = this.rs_1 & -2;
    }
  };
  RecomposeScopeImpl.prototype.ty = function () {
    return !((this.rs_1 & 1) === 0);
  };
  RecomposeScopeImpl.prototype.i17 = function () {
    return !((this.rs_1 & 2) === 0);
  };
  RecomposeScopeImpl.prototype.m13 = function (value) {
    if (value) {
      this.rs_1 = this.rs_1 | 4;
    } else {
      this.rs_1 = this.rs_1 & -5;
    }
  };
  RecomposeScopeImpl.prototype.sz = function (value) {
    if (value) {
      this.rs_1 = this.rs_1 | 8;
    } else {
      this.rs_1 = this.rs_1 & -9;
    }
  };
  RecomposeScopeImpl.prototype.w12 = function () {
    return !((this.rs_1 & 8) === 0);
  };
  RecomposeScopeImpl.prototype.jz = function (composer) {
    var tmp0_safe_receiver = this.us_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(composer, 1);
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Invalid restart scope');
    } else {
    }
  };
  RecomposeScopeImpl.prototype.p15 = function (value) {
    var tmp0_safe_receiver = this.ss_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h17(this, value);
    return tmp1_elvis_lhs == null ? InvalidationResult_IGNORED_getInstance() : tmp1_elvis_lhs;
  };
  RecomposeScopeImpl.prototype.xi = function () {
    this.ss_1 = null;
    this.ws_1 = null;
    this.xs_1 = null;
  };
  RecomposeScopeImpl.prototype.k12 = function (composition) {
    this.ss_1 = composition;
  };
  RecomposeScopeImpl.prototype.g17 = function () {
    var tmp0_safe_receiver = this.ss_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.h17(this, null);
  };
  RecomposeScopeImpl.prototype.q14 = function (block) {
    this.us_1 = block;
  };
  RecomposeScopeImpl.prototype.n13 = function () {
    return !((this.rs_1 & 16) === 0);
  };
  RecomposeScopeImpl.prototype.tz = function (token) {
    this.vs_1 = token;
    _set_skipped__p8q2c5(this, false);
  };
  RecomposeScopeImpl.prototype.i13 = function () {
    _set_skipped__p8q2c5(this, true);
  };
  RecomposeScopeImpl.prototype.y16 = function (instance) {
    if (_get_rereading__g2iruw(this))
      return Unit_getInstance();
    var tmp0_elvis_lhs = this.ws_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new IdentityArrayIntMap();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
      this.ws_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.t18(instance, this.vs_1);
    if (isInterface(instance, DerivedState)) {
      var tmp1_elvis_lhs = this.xs_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp1_also = IdentityArrayMap_init_$Create$(0, 1, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.recordRead.<anonymous>' call
        this.xs_1 = tmp1_also;
        tmp$ret$1 = tmp1_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var tracked = tmp_0;
      tracked.i16(instance, instance.z17());
    }
  };
  RecomposeScopeImpl.prototype.v15 = function () {
    return !(this.xs_1 == null);
  };
  RecomposeScopeImpl.prototype.b15 = function (instances) {
    if (instances == null)
      return true;
    var tmp0_elvis_lhs = this.xs_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var trackedDependencies = tmp;
    var tmp_0;
    if (instances.p10()) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_1;
        if (!(instances == null) ? isInterface(instances, Collection) : false) {
          tmp_1 = instances.j();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = instances.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>' call
          var tmp_2;
          if (isInterface(element, DerivedState)) {
            var tmp$ret$2;
            // Inline function 'kotlin.let' call
            var tmp0_let = element;
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$1;
            // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.isInvalidFor.<anonymous>.<anonymous>' call
            if (isInterface(tmp0_let, DerivedState))
              tmp0_let;
            else
              THROW_CCE();
            var tmp0_elvis_lhs_0 = tmp0_let.a18();
            var policy = tmp0_elvis_lhs_0 == null ? structuralEqualityPolicy() : tmp0_elvis_lhs_0;
            tmp$ret$1 = policy.u18(tmp0_let.z17(), trackedDependencies.r17(tmp0_let));
            tmp$ret$2 = tmp$ret$1;
            tmp_2 = tmp$ret$2;
          } else {
            tmp_2 = false;
          }
          tmp$ret$3 = tmp_2;
          if (!tmp$ret$3) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0)
      return false;
    return true;
  };
  RecomposeScopeImpl.prototype.iz = function () {
    var tmp0_safe_receiver = this.ss_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>' call
      var tmp0_safe_receiver_0 = this.ws_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        _set_rereading__pnqtpo(this, true);
        var tmp_0;
        try {
          var inductionVariable = 0;
          var last = tmp0_safe_receiver_0.p18_1;
          var tmp_1;
          if (inductionVariable < last) {
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.rereadTrackedInstances.<anonymous>.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver_0.q18_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver_0.r18_1[i];
              tmp0_safe_receiver.v16(tmp0__anonymous__q1qw7t);
            }
             while (inductionVariable < last);
            tmp_1 = Unit_getInstance();
          }
          tmp_0 = tmp_1;
        }finally {
          _set_rereading__pnqtpo(this, false);
        }
        tmp$ret$0 = tmp_0;
        tmp = Unit_getInstance();
      }
      tmp$ret$1 = tmp;
      tmp$ret$2 = tmp$ret$1;
    }
  };
  RecomposeScopeImpl.prototype.l13 = function (token) {
    var tmp0_safe_receiver = this.ws_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>' call
      var tmp_0;
      var tmp_1;
      if (!this.n13()) {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.collection.IdentityArrayIntMap.any' call
          var inductionVariable = 0;
          var last = tmp0_safe_receiver.p18_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var tmp$ret$0;
              // Inline function 'androidx.compose.runtime.RecomposeScopeImpl.end.<anonymous>.<anonymous>' call
              var tmp_2 = tmp0_safe_receiver.q18_1[i];
              var tmp0__anonymous__q1qw7t = isObject(tmp_2) ? tmp_2 : THROW_CCE();
              var tmp1__anonymous__uwfjfc = tmp0_safe_receiver.r18_1[i];
              tmp$ret$0 = !(tmp1__anonymous__uwfjfc === token);
              if (tmp$ret$0) {
                tmp$ret$1 = true;
                break $l$block;
              }
            }
             while (inductionVariable < last);
          tmp$ret$1 = false;
        }
        tmp_1 = tmp$ret$1;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = RecomposeScopeImpl$end$lambda(this, token, tmp0_safe_receiver);
      } else {
        tmp_0 = null;
      }
      tmp$ret$2 = tmp_0;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  RecomposeScopeImpl.$metadata$ = classMeta('RecomposeScopeImpl', [ScopeUpdateScope, RecomposeScope]);
  function RecomposeScope() {
  }
  RecomposeScope.$metadata$ = interfaceMeta('RecomposeScope');
  var ProduceAnotherFrame;
  var FramePending;
  var State_ShutDown_instance;
  var State_ShuttingDown_instance;
  var State_Inactive_instance;
  var State_InactivePendingWork_instance;
  var State_Idle_instance;
  var State_PendingWork_instance;
  var State_entriesInitialized;
  function State_initEntries() {
    if (State_entriesInitialized)
      return Unit_getInstance();
    State_entriesInitialized = true;
    State_ShutDown_instance = new State('ShutDown', 0);
    State_ShuttingDown_instance = new State('ShuttingDown', 1);
    State_Inactive_instance = new State('Inactive', 2);
    State_InactivePendingWork_instance = new State('InactivePendingWork', 3);
    State_Idle_instance = new State('Idle', 4);
    State_PendingWork_instance = new State('PendingWork', 5);
  }
  function addRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v18_1.z1();
      var new_0 = old.a(info);
      if (old === new_0 ? true : $this.v18_1.tn(old, new_0))
        break $l$loop;
    }
  }
  function removeRunning($this, info) {
    $l$loop: while (true) {
      var old = $this.v18_1.z1();
      var new_0 = old.y2(info);
      if (old === new_0 ? true : $this.v18_1.tn(old, new_0))
        break $l$loop;
    }
  }
  function invoke$clearRecompositionState(toRecompose, toInsert, toApply, toLateApply, toComplete) {
    toRecompose.t5();
    toInsert.t5();
    toApply.t5();
    toLateApply.t5();
    toComplete.t5();
  }
  function invoke$fillToInsert(toInsert, this$0) {
    toInsert.t5();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.c19_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    var tmp0_fastForEach = this$0.j19_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0_fastForEach.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0_fastForEach.i(index);
        // Inline function 'androidx.compose.runtime.Recomposer$runRecomposeAndApplyChanges$slambda.invoke.fillToInsert.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        toInsert.a(item);
      }
       while (inductionVariable <= last);
    this$0.j19_1.t5();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this$0, $toRecompose, $toInsert, $toApply, $toLateApply, $toComplete) {
    return function (frameTime) {
      var tmp;
      if (this$0.z18_1.kr()) {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.runtime.trace' call
          var token = Trace_getInstance().w10('Recomposer:animation');
          try {
            this$0.z18_1.lr(frameTime);
            Companion_getInstance_8().u19();
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }finally {
            Trace_getInstance().i11(token);
          }
        }
        tmp = tmp$ret$0;
      }
      var tmp$ret$16;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.trace' call
        var token_0 = Trace_getInstance().w10('Recomposer:recompose');
        try {
          var tmp$ret$15;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = this$0.c19_1;
          var tmp$ret$1;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          recordComposerModificationsLocked(this$0);
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = this$0.h19_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable = 0;
          var last = tmp0_fastForEach.h() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0_fastForEach.i(index);
              // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.collections.plusAssign' call
              $toRecompose.a(item);
            }
             while (inductionVariable <= last);
          this$0.h19_1.t5();
          tmp$ret$1 = Unit_getInstance();
          tmp$ret$2 = tmp$ret$1;
          var modifiedValues = new IdentityArraySet();
          var alreadyComposed = new IdentityArraySet();
          $l$loop: while (true) {
            var tmp_0;
            var tmp$ret$3;
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp$ret$3 = !$toRecompose.j();
            if (tmp$ret$3) {
              tmp_0 = true;
            } else {
              var tmp$ret$4;
              // Inline function 'kotlin.collections.isNotEmpty' call
              tmp$ret$4 = !$toInsert.j();
              tmp_0 = tmp$ret$4;
            }
            if (!tmp_0) {
              break $l$loop;
            }
            try {
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = $toRecompose.h() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = $toRecompose.i(index_0);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  alreadyComposed.d15(item_0);
                  var tmp0_safe_receiver = performRecompose(this$0, item_0, modifiedValues);
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$5;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    $toApply.a(tmp0_safe_receiver);
                    tmp$ret$5 = Unit_getInstance();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, true, 4, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toRecompose.t5();
            }
            if (modifiedValues.p10()) {
              var tmp$ret$7;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp1_synchronized = this$0.c19_1;
              var tmp$ret$6;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp0_fastForEach_0 = this$0.f19_1;
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_1 = 0;
              var last_1 = tmp0_fastForEach_0.h() - 1 | 0;
              var tmp_1;
              if (inductionVariable_1 <= last_1) {
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_fastForEach_0.i(index_1);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  if (!alreadyComposed.u2(item_1) ? item_1.u16(modifiedValues) : false) {
                    // Inline function 'kotlin.collections.plusAssign' call
                    $toRecompose.a(item_1);
                  }
                }
                 while (inductionVariable_1 <= last_1);
                tmp_1 = Unit_getInstance();
              }
              tmp$ret$6 = tmp_1;
              tmp$ret$7 = tmp$ret$6;
            }
            if ($toRecompose.j()) {
              try {
                invoke$fillToInsert($toInsert, this$0);
                $l$loop_0: while (true) {
                  var tmp$ret$8;
                  // Inline function 'kotlin.collections.isNotEmpty' call
                  tmp$ret$8 = !$toInsert.j();
                  if (!tmp$ret$8) {
                    break $l$loop_0;
                  }
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp2_plusAssign = performInsertValues(this$0, $toInsert, modifiedValues);
                  addAll($toLateApply, tmp2_plusAssign);
                  invoke$fillToInsert($toInsert, this$0);
                }
              } catch ($p) {
                if ($p instanceof Exception) {
                  processCompositionError$default(this$0, $p, null, true, 4, null);
                  invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                  return Unit_getInstance();
                } else {
                  throw $p;
                }
              }
            }
          }
          var tmp$ret$9;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$9 = !$toApply.j();
          if (tmp$ret$9) {
            var tmp0_this = this$0;
            var tmp1 = tmp0_this.y18_1;
            tmp0_this.y18_1 = tmp1.fc();
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toApply);
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_2 = 0;
              var last_2 = $toApply.h() - 1 | 0;
              if (inductionVariable_2 <= last_2)
                do {
                  var index_2 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  var item_2 = $toApply.i(index_2);
                  // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                  item_2.d17();
                }
                 while (inductionVariable_2 <= last_2);
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, false, 12, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toApply.t5();
            }
          }
          var tmp$ret$10;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$10 = !$toLateApply.j();
          if (tmp$ret$10) {
            try {
              // Inline function 'kotlin.collections.plusAssign' call
              addAll($toComplete, $toLateApply);
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator = $toLateApply.e();
              while (tmp0_iterator.f()) {
                var element = tmp0_iterator.g();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element.e17();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, false, 12, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toLateApply.t5();
            }
          }
          var tmp$ret$11;
          // Inline function 'kotlin.collections.isNotEmpty' call
          tmp$ret$11 = !$toComplete.j();
          if (tmp$ret$11) {
            try {
              // Inline function 'kotlin.collections.forEach' call
              var tmp0_iterator_0 = $toComplete.e();
              while (tmp0_iterator_0.f()) {
                var element_0 = tmp0_iterator_0.g();
                // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
                element_0.t12();
              }
            } catch ($p) {
              if ($p instanceof Exception) {
                processCompositionError$default(this$0, $p, null, false, 12, null);
                invoke$clearRecompositionState($toRecompose, $toInsert, $toApply, $toLateApply, $toComplete);
                return Unit_getInstance();
              } else {
                throw $p;
              }
            }
            finally {
              $toComplete.t5();
            }
          }
          var tmp$ret$14;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp3_synchronized = this$0.c19_1;
          var tmp$ret$13;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          var tmp$ret$12;
          // Inline function 'androidx.compose.runtime.Recomposer.runRecomposeAndApplyChanges.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$12 = deriveStateLocked(this$0);
          tmp$ret$13 = tmp$ret$12;
          tmp$ret$14 = tmp$ret$13;
          tmp$ret$15 = tmp$ret$14;
          tmp$ret$16 = tmp$ret$15;
          break $l$block_0;
        }finally {
          Trace_getInstance().i11(token_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$lambda(this$0) {
    return function (changed, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.c19_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.recompositionRunner.<anonymous>.<anonymous>.<anonymous>' call
      var tmp;
      if (this$0.r19_1.z1().g4(State_Idle_getInstance()) >= 0) {
        var tmp0_this = this$0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = tmp0_this.g19_1;
        tmp0_plusAssign.a(changed);
        tmp = deriveStateLocked(this$0);
      } else {
        tmp = null;
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = tmp$ret$2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.j3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation) {
    this.d1a_1 = $block;
    this.e1a_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  Recomposer$recompositionRunner$slambda$slambda.prototype.g1a = function ($this$coroutineScope, $cont) {
    var tmp = this.h1a($this$coroutineScope, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  Recomposer$recompositionRunner$slambda$slambda.prototype.vc = function (p1, $cont) {
    return this.g1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Recomposer$recompositionRunner$slambda$slambda.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 2;
            this.lc_1 = 1;
            suspendResult = this.d1a_1(this.f1a_1, this.e1a_1, this);
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
  Recomposer$recompositionRunner$slambda$slambda.prototype.h1a = function ($this$coroutineScope, completion) {
    var i = new Recomposer$recompositionRunner$slambda$slambda(this.d1a_1, this.e1a_1, completion);
    i.f1a_1 = $this$coroutineScope;
    return i;
  };
  Recomposer$recompositionRunner$slambda$slambda.$metadata$ = classMeta('Recomposer$recompositionRunner$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Recomposer$recompositionRunner$slambda$slambda_0($block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda$slambda($block, $parentFrameClock, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.g1a($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function State(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  State.$metadata$ = classMeta('State', undefined, undefined, undefined, undefined, Enum.prototype);
  function deriveStateLocked($this) {
    if ($this.r19_1.z1().g4(State_ShuttingDown_getInstance()) <= 0) {
      $this.f19_1.t5();
      $this.g19_1.t5();
      $this.h19_1.t5();
      $this.i19_1.t5();
      $this.j19_1.t5();
      $this.m19_1 = null;
      var tmp0_safe_receiver = $this.n19_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.sg(null, 1, null);
      }
      $this.n19_1 = null;
      $this.q19_1 = null;
      return null;
    }
    var tmp;
    if (!($this.q19_1 == null)) {
      tmp = State_Inactive_getInstance();
    } else {
      if ($this.d19_1 == null) {
        $this.g19_1.t5();
        $this.h19_1.t5();
        tmp = $this.z18_1.kr() ? State_InactivePendingWork_getInstance() : State_Inactive_getInstance();
      } else {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        var tmp0_isNotEmpty = $this.h19_1;
        tmp$ret$0 = !tmp0_isNotEmpty.j();
        if (tmp$ret$0) {
          tmp_4 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp1_isNotEmpty = $this.g19_1;
          tmp$ret$1 = !tmp1_isNotEmpty.j();
          tmp_4 = tmp$ret$1;
        }
        if (tmp_4) {
          tmp_3 = true;
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp2_isNotEmpty = $this.i19_1;
          tmp$ret$2 = !tmp2_isNotEmpty.j();
          tmp_3 = tmp$ret$2;
        }
        if (tmp_3) {
          tmp_2 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'kotlin.collections.isNotEmpty' call
          var tmp3_isNotEmpty = $this.j19_1;
          tmp$ret$3 = !tmp3_isNotEmpty.j();
          tmp_2 = tmp$ret$3;
        }
        if (tmp_2) {
          tmp_1 = true;
        } else {
          tmp_1 = $this.o19_1 > 0;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = $this.z18_1.kr();
        }
        if (tmp_0) {
          tmp = State_PendingWork_getInstance();
        } else {
          tmp = State_Idle_getInstance();
        }
      }
    }
    var newState = tmp;
    $this.r19_1.sn(newState);
    var tmp_5;
    if (newState.equals(State_PendingWork_getInstance())) {
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp4_also = $this.n19_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.deriveStateLocked.<anonymous>' call
      $this.n19_1 = null;
      tmp$ret$4 = tmp4_also;
      tmp_5 = tmp$ret$4;
    } else {
      tmp_5 = null;
    }
    return tmp_5;
  }
  function _get_shouldKeepRecomposing__5j79sd($this) {
    var tmp;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.c19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
    tmp$ret$0 = !$this.p19_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2) {
      tmp = true;
    } else {
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.sequences.any' call
        var tmp1_any = $this.a19_1.ri();
        var tmp0_iterator = tmp1_any.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.Recomposer.<get-shouldKeepRecomposing>.<anonymous>' call
          tmp$ret$3 = element.he();
          if (tmp$ret$3) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function RecomposerInfoImpl($outer) {
    this.i1a_1 = $outer;
  }
  RecomposerInfoImpl.$metadata$ = classMeta('RecomposerInfoImpl', [RecomposerInfo]);
  function RecomposerErrorState(recoverable, cause) {
    this.j1a_1 = recoverable;
    this.k1a_1 = cause;
  }
  RecomposerErrorState.$metadata$ = classMeta('RecomposerErrorState', [RecomposerErrorInfo]);
  function recordComposerModificationsLocked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.g19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      var tmp1_fastForEach = $this.g19_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_fastForEach.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_fastForEach.i(index);
          // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>' call
          // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
          var tmp0_fastForEach = $this.f19_1;
          // Inline function 'kotlin.contracts.contract' call
          var inductionVariable_0 = 0;
          var last_0 = tmp0_fastForEach.h() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_0 = tmp0_fastForEach.i(index_0);
              // Inline function 'androidx.compose.runtime.Recomposer.recordComposerModificationsLocked.<anonymous>.<anonymous>' call
              item_0.s16(item);
            }
             while (inductionVariable_0 <= last_0);
        }
         while (inductionVariable <= last);
      $this.g19_1.t5();
      if (!(deriveStateLocked($this) == null)) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('called outside of runRecomposeAndApplyChanges');
      }
    }
  }
  function registerRunnerJob($this, callingJob) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.c19_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.Recomposer.registerRunnerJob.<anonymous>' call
    var tmp0_safe_receiver = $this.e19_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
    if ($this.r19_1.z1().g4(State_ShuttingDown_getInstance()) <= 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer shut down');
    }
    if (!($this.d19_1 == null)) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Recomposer already running');
    }
    $this.d19_1 = callingJob;
    tmp$ret$1 = deriveStateLocked($this);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
  }
  function processCompositionError($this, e, failedInitialComposition, recoverable) {
    var tmp;
    if (Companion_getInstance_2().w18_1.tj()) {
      tmp = !(e instanceof ComposeRuntimeError);
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = $this.c19_1;
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>' call
      $this.i19_1.t5();
      $this.h19_1.t5();
      $this.g19_1.t5();
      $this.j19_1.t5();
      $this.k19_1.t5();
      $this.l19_1.t5();
      $this.q19_1 = new RecomposerErrorState(recoverable, e);
      if (!(failedInitialComposition == null)) {
        var tmp0_elvis_lhs = $this.m19_1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.also' call
          var tmp$ret$0;
          // Inline function 'kotlin.collections.mutableListOf' call
          tmp$ret$0 = ArrayList_init_$Create$();
          var tmp0_also = tmp$ret$0;
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.Recomposer.processCompositionError.<anonymous>.<anonymous>' call
          $this.m19_1 = tmp0_also;
          tmp$ret$1 = tmp0_also;
          tmp_0 = tmp$ret$1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var failedCompositions = tmp_0;
        if (!failedCompositions.k(failedInitialComposition)) {
          // Inline function 'kotlin.collections.plusAssign' call
          failedCompositions.a(failedInitialComposition);
        }
        var tmp1_this = $this;
        // Inline function 'kotlin.collections.minusAssign' call
        var tmp1_minusAssign = tmp1_this.f19_1;
        tmp1_minusAssign.y2(failedInitialComposition);
      }
      tmp$ret$2 = deriveStateLocked($this);
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
    } else {
      throw e;
    }
  }
  function processCompositionError$default($this, e, failedInitialComposition, recoverable, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      failedInitialComposition = null;
    if (!(($mask0 & 8) === 0))
      recoverable = false;
    return processCompositionError($this, e, failedInitialComposition, recoverable);
  }
  function _get_hasSchedulingWork__b617oy($this) {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.c19_1;
    var tmp$ret$3;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.Recomposer.<get-hasSchedulingWork>.<anonymous>' call
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.g19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      tmp_0 = true;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = $this.h19_1;
      tmp$ret$1 = !tmp1_isNotEmpty.j();
      tmp_0 = tmp$ret$1;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = $this.z18_1.kr();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  }
  function awaitWorkAvailable($this, $cont) {
    var tmp = new $awaitWorkAvailableCOROUTINE$1($this, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  }
  function recompositionRunner($this, block, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.l3();
    var parentFrameClock = get_monotonicFrameClock(tmp$ret$0);
    return withContext($this.z18_1, Recomposer$recompositionRunner$slambda_0($this, block, parentFrameClock, null), $cont);
  }
  function performInitialMovableContentInserts($this, composition) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.c19_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.runtime.snapshots.fastAny' call
      var tmp0_fastAny = $this.j19_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.performInitialMovableContentInserts.<anonymous>.<anonymous>' call
          tmp$ret$0 = equals(item.a10_1, composition);
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (!tmp$ret$1) {
      return Unit_getInstance();
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    var toInsert = tmp$ret$4;
    performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    $l$loop: while (true) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !toInsert.j();
      if (!tmp$ret$5) {
        break $l$loop;
      }
      performInsertValues($this, toInsert, null);
      performInitialMovableContentInserts$fillToInsert(toInsert, $this, composition);
    }
  }
  function performRecompose($this, composition, modifiedValues) {
    if (composition.h16() ? true : composition.r16())
      return null;
    var tmp;
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'androidx.compose.runtime.Recomposer.composing' call
      var snapshot = Companion_getInstance_8().x1a(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
      try {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
          var previous = snapshot.y1a();
          try {
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>' call
            var tmp0_safe_receiver = modifiedValues;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p10()) === true) {
              composition.t13(Recomposer$performRecompose$lambda(modifiedValues, composition));
            }
            tmp$ret$0 = composition.a17();
            tmp$ret$1 = tmp$ret$0;
            break $l$block;
          }finally {
            snapshot.z1a(previous);
          }
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_0;
      }finally {
        applyAndCheck($this, snapshot);
      }
    }
    if (tmp$ret$2) {
      tmp = composition;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function performInsertValues($this, references, modifiedValues) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy' call
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(references.h());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = references.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = references.i(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>' call
        tmp$ret$0 = item.a10_1;
        var key = tmp$ret$0;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.k2(key);
        var tmp;
        if (value == null) {
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$1 = ArrayList_init_$Create$();
          var answer = tmp$ret$1;
          destination.w2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        tmp$ret$2 = tmp;
        var list = tmp$ret$2;
        list.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$3 = destination;
    var tasks = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$4 = tasks.u().e();
    var tmp0_iterator = tmp$ret$4;
    while (tmp0_iterator.f()) {
      var tmp1_loop_parameter = tmp0_iterator.g();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$5 = tmp1_loop_parameter.x1();
      var composition = tmp$ret$5;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$6 = tmp1_loop_parameter.z1();
      var refs = tmp$ret$6;
      runtimeCheck(!composition.h16());
      var tmp$ret$13;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_8().x1a(readObserverOf($this, composition), writeObserverOf($this, composition, modifiedValues));
        try {
          var tmp$ret$12;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y1a();
            try {
              var tmp$ret$11;
              // Inline function 'androidx.compose.runtime.synchronized' call
              var tmp0_synchronized = $this.c19_1;
              var tmp$ret$10;
              // Inline function 'kotlinx.atomicfu.locks.synchronized' call
              var tmp$ret$9;
              // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>' call
              var tmp$ret$8;
              // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
              // Inline function 'kotlin.contracts.contract' call
              var target = ArrayList_init_$Create$_0(refs.h());
              // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
              // Inline function 'kotlin.contracts.contract' call
              var inductionVariable_0 = 0;
              var last_0 = refs.h() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = refs.i(index_0);
                  // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
                  // Inline function 'kotlin.collections.plusAssign' call
                  var tmp$ret$7;
                  // Inline function 'androidx.compose.runtime.Recomposer.performInsertValues.<anonymous>.<anonymous>.<anonymous>' call
                  tmp$ret$7 = to(item_0, removeLastMultiValue($this.k19_1, item_0.yz_1));
                  var tmp0_plusAssign = tmp$ret$7;
                  target.a(tmp0_plusAssign);
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$8 = target;
              tmp$ret$9 = tmp$ret$8;
              tmp$ret$10 = tmp$ret$9;
              tmp$ret$11 = tmp$ret$10;
              var pairs = tmp$ret$11;
              composition.b17(pairs);
              tmp$ret$12 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.z1a(previous);
            }
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_0;
        }finally {
          applyAndCheck($this, snapshot);
        }
      }
    }
    return toList(tasks.l2());
  }
  function discardUnusedValues($this) {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = $this.c19_1;
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.k19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      var references = flatten($this.k19_1.b7());
      $this.k19_1.t5();
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.fastMap' call
      // Inline function 'kotlin.contracts.contract' call
      var target = ArrayList_init_$Create$_0(references.h());
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = references.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = references.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>.<anonymous>' call
          tmp$ret$1 = to(item, $this.l19_1.k2(item));
          var tmp0_plusAssign = tmp$ret$1;
          target.a(tmp0_plusAssign);
        }
         while (inductionVariable <= last);
      tmp$ret$2 = target;
      var unusedValues = tmp$ret$2;
      $this.l19_1.t5();
      tmp = unusedValues;
    } else {
      tmp = emptyList();
    }
    tmp$ret$3 = tmp;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    var unusedValues_0 = tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = unusedValues_0.h() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = unusedValues_0.i(index_0);
        // Inline function 'androidx.compose.runtime.Recomposer.discardUnusedValues.<anonymous>' call
        var reference = item_0.i5();
        var state = item_0.j5();
        if (!(state == null)) {
          reference.a10_1.c17(state);
        }
      }
       while (inductionVariable_0 <= last_0);
  }
  function readObserverOf($this, composition) {
    return Recomposer$readObserverOf$lambda(composition);
  }
  function writeObserverOf($this, composition, modifiedValues) {
    return Recomposer$writeObserverOf$lambda(composition, modifiedValues);
  }
  function applyAndCheck($this, snapshot) {
    try {
      var applyResult = snapshot.n1b();
      if (applyResult instanceof Failure) {
        // Inline function 'kotlin.error' call
        var tmp0_error = 'Unsupported concurrent change during composition. A state object was modified by composition as well as being modified outside composition.';
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }finally {
      snapshot.sh();
    }
  }
  function _get_hasFrameWorkLocked__1gtyf7($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = $this.h19_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.z18_1.kr();
    }
    return tmp;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.v18_1 = MutableStateFlow(persistentSetOf());
    this.w18_1 = new AtomicReference(false);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function performInitialMovableContentInserts$fillToInsert(toInsert, this$0, $composition) {
    toInsert.t5();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this$0.c19_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var iterator = this$0.j19_1.e();
    while (iterator.f()) {
      var value = iterator.g();
      if (equals(value.a10_1, $composition)) {
        toInsert.a(value);
        iterator.b3();
      }
    }
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function Recomposer$broadcastFrameClock$lambda(this$0) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.c19_1;
      var tmp$ret$2;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = deriveStateLocked(this$0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.Recomposer.broadcastFrameClock.<anonymous>.<anonymous>.<anonymous>' call
      if (this$0.r19_1.z1().g4(State_ShuttingDown_getInstance()) <= 0)
        throw CancellationException_init_$Create$('Recomposer shutdown; frame clock awaiter will never resume', this$0.e19_1);
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp0_safe_receiver = tmp$ret$3;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$5;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$4;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.j3(tmp$ret$4);
        tmp$ret$5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda$lambda(this$0, $throwable) {
    return function (runnerJobCause) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.c19_1;
      var tmp$ret$4;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp = this$0;
      var tmp0_safe_receiver = $throwable;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.apply' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver_0 = runnerJobCause;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.takeIf' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2;
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = !(tmp0_safe_receiver_0 instanceof CancellationException);
          if (tmp$ret$0) {
            tmp_2 = tmp0_safe_receiver_0;
          } else {
            tmp_2 = null;
          }
          tmp$ret$1 = tmp_2;
          tmp_1 = tmp$ret$1;
        }
        var tmp1_safe_receiver = tmp_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp0_safe_receiver, tmp1_safe_receiver);
          tmp$ret$2 = Unit_getInstance();
        }
        tmp$ret$3 = tmp0_safe_receiver;
        tmp_0 = tmp$ret$3;
      }
      tmp.e19_1 = tmp_0;
      this$0.r19_1.sn(State_ShutDown_getInstance());
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$5 = tmp$ret$4;
      return Unit_getInstance();
    };
  }
  function Recomposer$effectJob$lambda(this$0) {
    return function (throwable) {
      var cancellation = CancellationException_init_$Create$('Recomposer effect job completed', throwable);
      var continuationToResume = null;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = this$0.c19_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>.<anonymous>.<anonymous>' call
      var runnerJob = this$0.d19_1;
      var tmp;
      if (!(runnerJob == null)) {
        this$0.r19_1.sn(State_ShuttingDown_getInstance());
        if (!this$0.p19_1) {
          runnerJob.mf(cancellation);
        } else if (!(this$0.n19_1 == null)) {
          continuationToResume = this$0.n19_1;
        }
        this$0.n19_1 = null;
        tmp = runnerJob.hf(Recomposer$effectJob$lambda$lambda(this$0, throwable));
      } else {
        this$0.e19_1 = cancellation;
        this$0.r19_1.sn(State_ShutDown_getInstance());
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp0_safe_receiver = continuationToResume;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$4;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp0_safe_receiver.j3(tmp$ret$3);
        tmp$ret$4 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation) {
    this.w1b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.f1c = function ($this$recompositionRunner, parentFrameClock, $cont) {
    var tmp = this.g1c($this$recompositionRunner, parentFrameClock, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.sd = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.f1c(tmp, (!(p2 == null) ? isInterface(p2, MonotonicFrameClock) : false) ? p2 : THROW_CCE(), $cont);
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 6;
            var tmp_0 = this;
            tmp_0.z1b_1 = ArrayList_init_$Create$();
            var tmp_1 = this;
            tmp_1.a1c_1 = ArrayList_init_$Create$();
            var tmp_2 = this;
            tmp_2.b1c_1 = ArrayList_init_$Create$();
            var tmp_3 = this;
            tmp_3.c1c_1 = LinkedHashSet_init_$Create$();
            var tmp_4 = this;
            tmp_4.d1c_1 = LinkedHashSet_init_$Create$();
            this.lc_1 = 1;
            continue $sm;
          case 1:
            if (!_get_shouldKeepRecomposing__5j79sd(this.w1b_1)) {
              this.lc_1 = 5;
              continue $sm;
            }

            this.lc_1 = 2;
            suspendResult = awaitWorkAvailable(this.w1b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_5 = this;
            tmp_5.e1c_1 = this.w1b_1.c19_1;
            var tmp_6;
            if (!_get_hasFrameWorkLocked__1gtyf7(this.w1b_1)) {
              recordComposerModificationsLocked(this.w1b_1);
              tmp_6 = !_get_hasFrameWorkLocked__1gtyf7(this.w1b_1);
            } else {
              tmp_6 = false;
            }

            if (tmp_6) {
              this.lc_1 = 1;
              continue $sm;
            } else {
              this.lc_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.lc_1 = 4;
            suspendResult = this.y1b_1.mr(Recomposer$runRecomposeAndApplyChanges$slambda$lambda(this.w1b_1, this.z1b_1, this.a1c_1, this.b1c_1, this.c1c_1, this.d1c_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            discardUnusedValues(this.w1b_1);
            this.lc_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.oc_1;
        }
      } catch ($p) {
        if (this.mc_1 === 6) {
          throw $p;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = $p;
        }
      }
     while (true);
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.prototype.g1c = function ($this$recompositionRunner, parentFrameClock, completion) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this.w1b_1, completion);
    i.x1b_1 = $this$recompositionRunner;
    i.y1b_1 = parentFrameClock;
    return i;
  };
  Recomposer$runRecomposeAndApplyChanges$slambda.$metadata$ = classMeta('Recomposer$runRecomposeAndApplyChanges$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function Recomposer$runRecomposeAndApplyChanges$slambda_0(this$0, resultContinuation) {
    var i = new Recomposer$runRecomposeAndApplyChanges$slambda(this$0, resultContinuation);
    var l = function ($this$recompositionRunner, parentFrameClock, $cont) {
      return i.f1c($this$recompositionRunner, parentFrameClock, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation) {
    this.p1c_1 = this$0;
    this.q1c_1 = $block;
    this.r1c_1 = $parentFrameClock;
    CoroutineImpl.call(this, resultContinuation);
  }
  Recomposer$recompositionRunner$slambda.prototype.g1a = function ($this$withContext, $cont) {
    var tmp = this.h1a($this$withContext, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  Recomposer$recompositionRunner$slambda.prototype.vc = function (p1, $cont) {
    return this.g1a((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Recomposer$recompositionRunner$slambda.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 5;
            this.t1c_1 = get_job(this.s1c_1.ge());
            registerRunnerJob(this.p1c_1, this.t1c_1);
            var tmp_0 = this;
            var tmp_1 = Companion_getInstance_8();
            tmp_0.u1c_1 = tmp_1.y1c(Recomposer$recompositionRunner$slambda$lambda(this.p1c_1));
            addRunning(Companion_getInstance_2(), this.p1c_1.s19_1);
            this.lc_1 = 1;
            continue $sm;
          case 1:
            this.mc_1 = 4;
            var tmp_2 = this;
            tmp_2.w1c_1 = this.p1c_1.c19_1;
            var tmp_3 = this;
            tmp_3.x1c_1 = this.p1c_1.f19_1;
            var inductionVariable = 0;
            var last = this.x1c_1.h() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = this.x1c_1.i(index);
                item.f17();
              }
               while (inductionVariable <= last);
            this.lc_1 = 2;
            suspendResult = coroutineScope(Recomposer$recompositionRunner$slambda$slambda_0(this.q1c_1, this.r1c_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v1c_1 = suspendResult;
            this.mc_1 = 5;
            this.lc_1 = 3;
            continue $sm;
          case 3:
            this.u1c_1.sh();
            var tmp1_synchronized = this.p1c_1.c19_1;
            if (this.p1c_1.d19_1 === this.t1c_1) {
              this.p1c_1.d19_1 = null;
            }

            deriveStateLocked(this.p1c_1);
            ;
            removeRunning(Companion_getInstance_2(), this.p1c_1.s19_1);
            ;
            return Unit_getInstance();
          case 4:
            this.mc_1 = 5;
            var t = this.oc_1;
            this.u1c_1.sh();
            var tmp1_synchronized_0 = this.p1c_1.c19_1;
            if (this.p1c_1.d19_1 === this.t1c_1) {
              this.p1c_1.d19_1 = null;
            }

            deriveStateLocked(this.p1c_1);
            ;
            removeRunning(Companion_getInstance_2(), this.p1c_1.s19_1);
            ;
            throw t;
          case 5:
            throw this.oc_1;
        }
      } catch ($p) {
        if (this.mc_1 === 5) {
          throw $p;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = $p;
        }
      }
     while (true);
  };
  Recomposer$recompositionRunner$slambda.prototype.h1a = function ($this$withContext, completion) {
    var i = new Recomposer$recompositionRunner$slambda(this.p1c_1, this.q1c_1, this.r1c_1, completion);
    i.s1c_1 = $this$withContext;
    return i;
  };
  Recomposer$recompositionRunner$slambda.$metadata$ = classMeta('Recomposer$recompositionRunner$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Recomposer$recompositionRunner$slambda_0(this$0, $block, $parentFrameClock, resultContinuation) {
    var i = new Recomposer$recompositionRunner$slambda(this$0, $block, $parentFrameClock, resultContinuation);
    var l = function ($this$withContext, $cont) {
      return i.g1a($this$withContext, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Recomposer$performRecompose$lambda($modifiedValues, $composition) {
    return function () {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $modifiedValues.l10_1;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.runtime.Recomposer.performRecompose.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0__anonymous__q1qw7t = $modifiedValues.i(i);
          $composition.z16(tmp0__anonymous__q1qw7t);
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Recomposer$readObserverOf$lambda($composition) {
    return function (value) {
      $composition.v16(value);
      return Unit_getInstance();
    };
  }
  function Recomposer$writeObserverOf$lambda($composition, $modifiedValues) {
    return function (value) {
      $composition.z16(value);
      var tmp0_safe_receiver = $modifiedValues;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.d15(value);
      return Unit_getInstance();
    };
  }
  function State_ShutDown_getInstance() {
    State_initEntries();
    return State_ShutDown_instance;
  }
  function State_ShuttingDown_getInstance() {
    State_initEntries();
    return State_ShuttingDown_instance;
  }
  function State_Inactive_getInstance() {
    State_initEntries();
    return State_Inactive_instance;
  }
  function State_InactivePendingWork_getInstance() {
    State_initEntries();
    return State_InactivePendingWork_instance;
  }
  function State_Idle_getInstance() {
    State_initEntries();
    return State_Idle_instance;
  }
  function State_PendingWork_getInstance() {
    State_initEntries();
    return State_PendingWork_instance;
  }
  function $awaitWorkAvailableCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1a_1 = _this__u8e3s4;
  }
  $awaitWorkAvailableCOROUTINE$1.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 3;
            if (!_get_hasSchedulingWork__b617oy(this.t1a_1)) {
              this.lc_1 = 1;
              var tmp_0 = this;
              tmp_0.u1a_1 = this;
              this.v1a_1 = new CancellableContinuationImpl(intercepted(this.u1a_1), get_MODE_CANCELLABLE());
              this.v1a_1.rh();
              var tmp_1 = this;
              tmp_1.w1a_1 = this.t1a_1.c19_1;
              if (_get_hasSchedulingWork__b617oy(this.t1a_1)) {
                var tmp0_success = Companion_getInstance();
                this.v1a_1.j3(_Result___init__impl__xyqfz8(Unit_getInstance()));
              } else {
                this.t1a_1.n19_1 = this.v1a_1;
              }
              suspendResult = returnIfSuspended(this.v1a_1.fg(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.lc_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.lc_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.oc_1;
        }
      } catch ($p) {
        if (this.mc_1 === 3) {
          throw $p;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = $p;
        }
      }
     while (true);
  };
  $awaitWorkAvailableCOROUTINE$1.$metadata$ = classMeta('$awaitWorkAvailableCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Recomposer(effectCoroutineContext) {
    Companion_getInstance_2();
    CompositionContext.call(this);
    this.y18_1 = new Long(0, 0);
    var tmp = this;
    tmp.z18_1 = new BroadcastFrameClock(Recomposer$broadcastFrameClock$lambda(this));
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = Job(effectCoroutineContext.r3(Key_getInstance()));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.Recomposer.effectJob.<anonymous>' call
    tmp0_apply.hf(Recomposer$effectJob$lambda(this));
    tmp$ret$0 = tmp0_apply;
    tmp_0.a19_1 = tmp$ret$0;
    this.b19_1 = effectCoroutineContext.y3(this.z18_1).y3(this.a19_1);
    this.c19_1 = createSynchronizedObject();
    this.d19_1 = null;
    this.e19_1 = null;
    var tmp_1 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_1.f19_1 = tmp$ret$1;
    var tmp_2 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_2.g19_1 = tmp$ret$2;
    var tmp_3 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$3 = ArrayList_init_$Create$();
    tmp_3.h19_1 = tmp$ret$3;
    var tmp_4 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$4 = ArrayList_init_$Create$();
    tmp_4.i19_1 = tmp$ret$4;
    var tmp_5 = this;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$5 = ArrayList_init_$Create$();
    tmp_5.j19_1 = tmp$ret$5;
    var tmp_6 = this;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$6 = LinkedHashMap_init_$Create$();
    tmp_6.k19_1 = tmp$ret$6;
    var tmp_7 = this;
    var tmp$ret$7;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$7 = LinkedHashMap_init_$Create$();
    tmp_7.l19_1 = tmp$ret$7;
    this.m19_1 = null;
    this.n19_1 = null;
    this.o19_1 = 0;
    this.p19_1 = false;
    this.q19_1 = null;
    this.r19_1 = MutableStateFlow(State_Inactive_getInstance());
    this.s19_1 = new RecomposerInfoImpl(this);
    this.t19_1 = 8;
  }
  Recomposer.prototype.z1c = function () {
    return this.y18_1;
  };
  Recomposer.prototype.a1d = function ($cont) {
    return recompositionRunner(this, Recomposer$runRecomposeAndApplyChanges$slambda_0(this, null), $cont);
  };
  Recomposer.prototype.mw = function () {
    return 1000;
  };
  Recomposer.prototype.kw = function () {
    return false;
  };
  Recomposer.prototype.lw = function (table) {
  };
  Recomposer.prototype.j16 = function (composition) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.c19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.invalidate.<anonymous>' call
    var tmp;
    if (!this.h19_1.k(composition)) {
      var tmp0_this = this;
      // Inline function 'kotlin.collections.plusAssign' call
      var tmp0_plusAssign = tmp0_this.h19_1;
      tmp0_plusAssign.a(composition);
      tmp = deriveStateLocked(this);
    } else {
      tmp = null;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.j3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  Recomposer.prototype.wz = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.c19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.insertMovableContent.<anonymous>' call
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.j19_1;
    tmp0_plusAssign.a(reference);
    tmp$ret$0 = deriveStateLocked(this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_safe_receiver = tmp$ret$2;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp0_safe_receiver.j3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  };
  Recomposer.prototype.y11 = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.c19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.deletedMovableContent.<anonymous>' call
    tmp$ret$0 = addMultiValue(this.k19_1, reference.yz_1, reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  Recomposer.prototype.t10 = function (reference, data) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.c19_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_set = this.l19_1;
    tmp0_set.w2(reference, data);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  Recomposer.prototype.h10 = function (reference) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.c19_1;
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.Recomposer.movableContentStateResolve.<anonymous>' call
    tmp$ret$0 = this.l19_1.x2(reference);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  Recomposer.prototype.p17 = function (composition, content) {
    var composerWasComposing = composition.h16();
    try {
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'androidx.compose.runtime.Recomposer.composing' call
        var snapshot = Companion_getInstance_8().x1a(readObserverOf(this, composition), writeObserverOf(this, composition, null));
        try {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.runtime.snapshots.Snapshot.enter' call
            var previous = snapshot.y1a();
            try {
              composition.q17(content);
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }finally {
              snapshot.z1a(previous);
            }
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }finally {
          applyAndCheck(this, snapshot);
        }
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        processCompositionError(this, $p, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_8().b1d();
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = this.c19_1;
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp;
    if (this.r19_1.z1().g4(State_ShuttingDown_getInstance()) > 0) {
      var tmp_0;
      if (!this.f19_1.k(composition)) {
        var tmp0_this = this;
        var tmp0_plusAssign = tmp0_this.f19_1;
        tmp0_plusAssign.a(composition);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = tmp$ret$2;
    try {
      performInitialMovableContentInserts(this, composition);
    } catch ($p) {
      if ($p instanceof Exception) {
        processCompositionError(this, $p, composition, true);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    try {
      composition.d17();
      composition.e17();
    } catch ($p) {
      if ($p instanceof Exception) {
        processCompositionError$default(this, $p, null, false, 12, null);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    if (!composerWasComposing) {
      Companion_getInstance_8().b1d();
    }
  };
  Recomposer.$metadata$ = classMeta('Recomposer', undefined, undefined, undefined, undefined, CompositionContext.prototype);
  function RecomposerInfo() {
  }
  RecomposerInfo.$metadata$ = interfaceMeta('RecomposerInfo');
  function RecomposerErrorInfo() {
  }
  RecomposerErrorInfo.$metadata$ = interfaceMeta('RecomposerErrorInfo');
  function removeLastMultiValue(_this__u8e3s4, key) {
    init_properties_Recomposer_kt_qypup3();
    var tmp0_safe_receiver = _this__u8e3s4.k2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = removeFirst(tmp0_safe_receiver);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.removeLastMultiValue.<anonymous>.<anonymous>' call
      if (tmp0_safe_receiver.j()) {
        _this__u8e3s4.x2(key);
      }
      tmp$ret$0 = tmp0_also;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function addMultiValue(_this__u8e3s4, key, value) {
    init_properties_Recomposer_kt_qypup3();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.getOrPut' call
    var value_0 = _this__u8e3s4.k2(key);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.addMultiValue.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$1 = tmp$ret$0;
      var answer = tmp$ret$1;
      _this__u8e3s4.w2(key, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2.a(value);
  }
  var properties_initialized_Recomposer_kt_k8q2ph;
  function init_properties_Recomposer_kt_qypup3() {
    if (properties_initialized_Recomposer_kt_k8q2ph) {
    } else {
      properties_initialized_Recomposer_kt_k8q2ph = true;
      ProduceAnotherFrame = new Object();
      FramePending = new Object();
    }
  }
  function RememberObserver() {
  }
  RememberObserver.$metadata$ = interfaceMeta('RememberObserver');
  function moveGroup($this, fromWriter, fromIndex, toWriter, updateFromCursor, updateToCursor) {
    var groupsToMove = fromWriter.vy(fromIndex);
    var sourceGroupsEnd = fromIndex + groupsToMove | 0;
    var sourceSlotsStart = dataIndex(fromWriter, fromIndex);
    var sourceSlotsEnd = dataIndex(fromWriter, sourceGroupsEnd);
    var slotsToMove = sourceSlotsEnd - sourceSlotsStart | 0;
    var hasMarks = containsAnyGroupMarks(fromWriter, fromIndex);
    insertGroups(toWriter, groupsToMove);
    insertSlots(toWriter, slotsToMove, toWriter.ms_1);
    if (fromWriter.zr_1 < sourceGroupsEnd) {
      moveGroupGapTo(fromWriter, sourceGroupsEnd);
    }
    if (fromWriter.es_1 < sourceSlotsEnd) {
      moveSlotGapTo(fromWriter, sourceSlotsEnd, sourceGroupsEnd);
    }
    var groups = toWriter.wr_1;
    var currentGroup = toWriter.ms_1;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = fromWriter.wr_1;
    var tmp1_copyInto = imul(currentGroup, 5);
    var tmp2_copyInto = imul(fromIndex, 5);
    var tmp3_copyInto = imul(sourceGroupsEnd, 5);
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = groups;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, tmp1_copyInto, tmp2_copyInto, tmp3_copyInto);
    tmp$ret$4 = groups;
    var slots = toWriter.xr_1;
    var currentSlot = toWriter.cs_1;
    var tmp$ret$5;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = fromWriter.xr_1;
    arrayCopy(tmp4_copyInto, slots, currentSlot, sourceSlotsStart, sourceSlotsEnd);
    tmp$ret$5 = slots;
    var parent = toWriter.ns_1;
    updateParentAnchor(groups, currentGroup, parent);
    var parentDelta = currentGroup - fromIndex | 0;
    var moveEnd = currentGroup + groupsToMove | 0;
    var tmp$ret$7;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
    tmp$ret$6 = dataIndex_0(groups, toWriter, currentGroup);
    tmp$ret$7 = tmp$ret$6;
    var dataIndexDelta = currentSlot - tmp$ret$7 | 0;
    var slotsGapOwner = toWriter.gs_1;
    var slotsGapLen = toWriter.fs_1;
    var slotsCapacity = slots.length;
    var inductionVariable = currentGroup;
    if (inductionVariable < moveEnd)
      do {
        var groupAddress = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(groupAddress === currentGroup)) {
          var previousParent = parentAnchor(groups, groupAddress);
          updateParentAnchor(groups, groupAddress, previousParent + parentDelta | 0);
        }
        var tmp$ret$9;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$8 = dataIndex_0(groups, toWriter, groupAddress) + dataIndexDelta | 0;
        tmp$ret$9 = tmp$ret$8;
        var newDataIndex = tmp$ret$9;
        var tmp$ret$11;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$10;
        // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
        tmp$ret$10 = dataIndexToDataAnchor(toWriter, newDataIndex, slotsGapOwner < groupAddress ? 0 : toWriter.es_1, slotsGapLen, slotsCapacity);
        tmp$ret$11 = tmp$ret$10;
        var newDataAnchor = tmp$ret$11;
        updateDataAnchor(groups, groupAddress, newDataAnchor);
        if (groupAddress === slotsGapOwner) {
          var tmp1 = slotsGapOwner;
          slotsGapOwner = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < moveEnd);
    toWriter.gs_1 = slotsGapOwner;
    var startAnchors = locationOf(fromWriter.yr_1, fromIndex, fromWriter.h());
    var endAnchors = locationOf(fromWriter.yr_1, sourceGroupsEnd, fromWriter.h());
    var tmp_0;
    if (startAnchors < endAnchors) {
      var sourceAnchors = fromWriter.yr_1;
      var anchors = ArrayList_init_$Create$_0(endAnchors - startAnchors | 0);
      var anchorDelta = currentGroup - fromIndex | 0;
      var inductionVariable_0 = startAnchors;
      if (inductionVariable_0 < endAnchors)
        do {
          var anchorIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var sourceAnchor = sourceAnchors.i(anchorIndex);
          var tmp3_this = sourceAnchor;
          tmp3_this.g11_1 = tmp3_this.g11_1 + anchorDelta | 0;
          anchors.a(sourceAnchor);
        }
         while (inductionVariable_0 < endAnchors);
      var insertLocation = locationOf(toWriter.yr_1, toWriter.ms_1, toWriter.h());
      toWriter.yr_1.h6(insertLocation, anchors);
      sourceAnchors.i6(startAnchors, endAnchors).t5();
      tmp_0 = anchors;
    } else {
      tmp_0 = emptyList();
    }
    var anchors_0 = tmp_0;
    var parentGroup = fromWriter.gx(fromIndex);
    var tmp_1;
    if (updateFromCursor) {
      var needsStartGroups = parentGroup >= 0;
      if (needsStartGroups) {
        fromWriter.ox();
        fromWriter.l12(parentGroup - fromWriter.ms_1 | 0);
        fromWriter.ox();
      }
      fromWriter.l12(fromIndex - fromWriter.ms_1 | 0);
      var anchorsRemoved = fromWriter.tt();
      if (needsStartGroups) {
        fromWriter.mx();
        fromWriter.cz();
        fromWriter.mx();
        fromWriter.cz();
      }
      tmp_1 = anchorsRemoved;
    } else {
      var anchorsRemoved_0 = removeGroups(fromWriter, fromIndex, groupsToMove);
      removeSlots(fromWriter, sourceSlotsStart, slotsToMove, fromIndex - 1 | 0);
      tmp_1 = anchorsRemoved_0;
    }
    var anchorsRemoved_1 = tmp_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp5_runtimeCheck = !anchorsRemoved_1;
    if (!tmp5_runtimeCheck) {
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.Companion.moveGroup.<anonymous>' call
      tmp$ret$12 = 'Unexpectedly removed anchors';
      var message = tmp$ret$12;
      composeRuntimeError(toString(message));
    }
    var tmp4_this = toWriter;
    tmp4_this.is_1 = tmp4_this.is_1 + (isNode(groups, currentGroup) ? 1 : nodeCount(groups, currentGroup)) | 0;
    if (updateToCursor) {
      toWriter.ms_1 = currentGroup + groupsToMove | 0;
      toWriter.cs_1 = currentSlot + slotsToMove | 0;
    }
    if (hasMarks) {
      updateContainsMark(toWriter, parent);
    }
    return anchors_0;
  }
  function startGroup_1($this, key, objectKey, isNode, aux) {
    var inserting = $this.hs_1 > 0;
    $this.ls_1.jw($this.is_1);
    var tmp = $this;
    var tmp_0;
    if (inserting) {
      insertGroups($this, 1);
      var current = $this.ms_1;
      var currentAddress = groupIndexToAddress($this, current);
      var hasObjectKey = !(objectKey === Companion_getInstance_1().qr_1);
      var hasAux = !isNode ? !(aux === Companion_getInstance_1().qr_1) : false;
      initGroup($this.wr_1, currentAddress, key, isNode, hasObjectKey, hasAux, $this.ns_1, $this.cs_1);
      $this.ds_1 = $this.cs_1;
      var dataSlotsNeeded = ((isNode ? 1 : 0) + (hasObjectKey ? 1 : 0) | 0) + (hasAux ? 1 : 0) | 0;
      if (dataSlotsNeeded > 0) {
        insertSlots($this, dataSlotsNeeded, current);
        var slots = $this.xr_1;
        var currentSlot = $this.cs_1;
        if (isNode) {
          var tmp0 = currentSlot;
          currentSlot = tmp0 + 1 | 0;
          slots[tmp0] = aux;
        }
        if (hasObjectKey) {
          var tmp1 = currentSlot;
          currentSlot = tmp1 + 1 | 0;
          slots[tmp1] = objectKey;
        }
        if (hasAux) {
          var tmp2 = currentSlot;
          currentSlot = tmp2 + 1 | 0;
          slots[tmp2] = aux;
        }
        $this.cs_1 = currentSlot;
      }
      $this.is_1 = 0;
      var newCurrent = current + 1 | 0;
      $this.ns_1 = current;
      $this.ms_1 = newCurrent;
      tmp_0 = newCurrent;
    } else {
      var previousParent = $this.ns_1;
      $this.js_1.jw(previousParent);
      saveCurrentGroupEnd($this);
      var currentGroup = $this.ms_1;
      var currentGroupAddress = groupIndexToAddress($this, currentGroup);
      if (!equals(aux, Companion_getInstance_1().qr_1)) {
        if (isNode) {
          $this.c1d(aux);
        } else {
          $this.d12(aux);
        }
      }
      $this.cs_1 = slotIndex($this.wr_1, $this, currentGroupAddress);
      $this.ds_1 = dataIndex_0($this.wr_1, $this, groupIndexToAddress($this, $this.ms_1 + 1 | 0));
      $this.is_1 = nodeCount($this.wr_1, currentGroupAddress);
      $this.ns_1 = currentGroup;
      $this.ms_1 = currentGroup + 1 | 0;
      tmp_0 = currentGroup + groupSize($this.wr_1, currentGroupAddress) | 0;
    }
    tmp.bs_1 = tmp_0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function containsGroupMark($this, group) {
    return group >= 0 ? containsMark($this.wr_1, groupIndexToAddress($this, group)) : false;
  }
  function containsAnyGroupMarks($this, group) {
    return group >= 0 ? containsAnyMark($this.wr_1, groupIndexToAddress($this, group)) : false;
  }
  function recalculateMarks($this) {
    var tmp0_safe_receiver = $this.ps_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.p10()) {
        updateContainsMarkNow($this, tmp0_safe_receiver.e1d(), tmp0_safe_receiver);
      }
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function updateContainsMark($this, group) {
    if (group >= 0) {
      var tmp0_elvis_lhs = $this.ps_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = PrioritySet_init_$Create$(null, 1, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SlotWriter.updateContainsMark.<anonymous>' call
        $this.ps_1 = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.f1d(group);
    }
  }
  function updateContainsMarkNow($this, group, set) {
    var groupAddress = groupIndexToAddress($this, group);
    var containsAnyMarks = childContainsAnyMarks($this, group);
    var markChanges = !(containsMark($this.wr_1, groupAddress) === containsAnyMarks);
    if (markChanges) {
      updateContainsMark_0($this.wr_1, groupAddress, containsAnyMarks);
      var parent = $this.gx(group);
      if (parent >= 0) {
        set.f1d(parent);
      }
    }
  }
  function childContainsAnyMarks($this, group) {
    var child = group + 1 | 0;
    var end = group + $this.vy(group) | 0;
    while (child < end) {
      if (containsAnyMark($this.wr_1, groupIndexToAddress($this, child)))
        return true;
      child = child + $this.vy(child) | 0;
    }
    return false;
  }
  function saveCurrentGroupEnd($this) {
    $this.ks_1.jw((_get_capacity__a9k9f3($this) - $this.as_1 | 0) - $this.bs_1 | 0);
  }
  function restoreCurrentGroupEnd($this) {
    var newGroupEnd = (_get_capacity__a9k9f3($this) - $this.as_1 | 0) - $this.ks_1.sy() | 0;
    $this.bs_1 = newGroupEnd;
    return newGroupEnd;
  }
  function fixParentAnchorsFor($this, parent, endGroup, firstChild) {
    var parentAnchor = parentIndexToAnchor($this, parent, $this.zr_1);
    var child = firstChild;
    while (child < endGroup) {
      updateParentAnchor($this.wr_1, groupIndexToAddress($this, child), parentAnchor);
      var childEnd = child + groupSize($this.wr_1, groupIndexToAddress($this, child)) | 0;
      fixParentAnchorsFor($this, child, childEnd, child + 1 | 0);
      child = childEnd;
    }
  }
  function moveGroupGapTo($this, index) {
    var gapLen = $this.as_1;
    var gapStart = $this.zr_1;
    if (!(gapStart === index)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp0_isNotEmpty = $this.yr_1;
      tmp$ret$0 = !tmp0_isNotEmpty.j();
      if (tmp$ret$0) {
        updateAnchors($this, gapStart, index);
      }
      if (gapLen > 0) {
        var groups = $this.wr_1;
        var groupPhysicalAddress = imul(index, 5);
        var groupPhysicalGapLen = imul(gapLen, 5);
        var groupPhysicalGapStart = imul(gapStart, 5);
        if (index < gapStart) {
          var tmp$ret$5;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp1_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$2;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = groups;
          tmp$ret$2 = tmp$ret$1;
          var tmp = tmp$ret$2;
          var tmp$ret$4;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$3;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$3 = groups;
          tmp$ret$4 = tmp$ret$3;
          arrayCopy(tmp, tmp$ret$4, tmp1_copyInto, groupPhysicalAddress, groupPhysicalGapStart);
          tmp$ret$5 = groups;
        } else {
          var tmp$ret$10;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp2_copyInto = groupPhysicalGapStart + groupPhysicalGapLen | 0;
          var tmp3_copyInto = groupPhysicalAddress + groupPhysicalGapLen | 0;
          var tmp$ret$7;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$6;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$6 = groups;
          tmp$ret$7 = tmp$ret$6;
          var tmp_0 = tmp$ret$7;
          var tmp$ret$9;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$8;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$8 = groups;
          tmp$ret$9 = tmp$ret$8;
          arrayCopy(tmp_0, tmp$ret$9, groupPhysicalGapStart, tmp2_copyInto, tmp3_copyInto);
          tmp$ret$10 = groups;
        }
      }
      var groupAddress = index < gapStart ? index + gapLen | 0 : gapStart;
      var capacity = _get_capacity__a9k9f3($this);
      runtimeCheck(groupAddress < capacity);
      while (groupAddress < capacity) {
        var oldAnchor = parentAnchor($this.wr_1, groupAddress);
        var oldIndex = parentAnchorToIndex($this, oldAnchor);
        var newAnchor = parentIndexToAnchor($this, oldIndex, index);
        if (!(newAnchor === oldAnchor)) {
          updateParentAnchor($this.wr_1, groupAddress, newAnchor);
        }
        var tmp0 = groupAddress;
        groupAddress = tmp0 + 1 | 0;
        if (groupAddress === index)
          groupAddress = groupAddress + gapLen | 0;
      }
    }
    $this.zr_1 = index;
  }
  function moveSlotGapTo($this, index, group) {
    var gapLen = $this.fs_1;
    var gapStart = $this.es_1;
    var slotsGapOwner = $this.gs_1;
    if (!(gapStart === index)) {
      var slots = $this.xr_1;
      if (index < gapStart) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, tmp0_copyInto, index, gapStart);
        tmp$ret$0 = slots;
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = gapStart + gapLen | 0;
        var tmp2_copyInto = index + gapLen | 0;
        arrayCopy(slots, slots, gapStart, tmp1_copyInto, tmp2_copyInto);
        tmp$ret$1 = slots;
      }
      fill(slots, null, index, index + gapLen | 0);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.math.min' call
    var tmp3_min = group + 1 | 0;
    var tmp4_min = $this.h();
    tmp$ret$2 = Math.min(tmp3_min, tmp4_min);
    var newSlotsGapOwner = tmp$ret$2;
    if (!(slotsGapOwner === newSlotsGapOwner)) {
      var slotsSize = $this.xr_1.length - gapLen | 0;
      if (newSlotsGapOwner < slotsGapOwner) {
        var updateAddress = groupIndexToAddress($this, newSlotsGapOwner);
        var stopUpdateAddress = groupIndexToAddress($this, slotsGapOwner);
        var groupGapStart = $this.zr_1;
        while (updateAddress < stopUpdateAddress) {
          var anchor = dataAnchor($this.wr_1, updateAddress);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp5_runtimeCheck = anchor >= 0;
          if (!tmp5_runtimeCheck) {
            var tmp$ret$3;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$3 = 'Unexpected anchor value, expected a positive anchor';
            var message = tmp$ret$3;
            composeRuntimeError(toString(message));
          }
          updateDataAnchor($this.wr_1, updateAddress, -((slotsSize - anchor | 0) + 1 | 0) | 0);
          var tmp0 = updateAddress;
          updateAddress = tmp0 + 1 | 0;
          if (updateAddress === groupGapStart)
            updateAddress = updateAddress + $this.as_1 | 0;
        }
      } else {
        var updateAddress_0 = groupIndexToAddress($this, slotsGapOwner);
        var stopUpdateAddress_0 = groupIndexToAddress($this, newSlotsGapOwner);
        while (updateAddress_0 < stopUpdateAddress_0) {
          var anchor_0 = dataAnchor($this.wr_1, updateAddress_0);
          // Inline function 'androidx.compose.runtime.runtimeCheck' call
          var tmp6_runtimeCheck = anchor_0 < 0;
          if (!tmp6_runtimeCheck) {
            var tmp$ret$4;
            // Inline function 'androidx.compose.runtime.SlotWriter.moveSlotGapTo.<anonymous>' call
            tmp$ret$4 = 'Unexpected anchor value, expected a negative anchor';
            var message_0 = tmp$ret$4;
            composeRuntimeError(toString(message_0));
          }
          updateDataAnchor($this.wr_1, updateAddress_0, (slotsSize + anchor_0 | 0) + 1 | 0);
          var tmp1 = updateAddress_0;
          updateAddress_0 = tmp1 + 1 | 0;
          if (updateAddress_0 === $this.zr_1)
            updateAddress_0 = updateAddress_0 + $this.as_1 | 0;
        }
      }
      $this.gs_1 = newSlotsGapOwner;
    }
    $this.es_1 = index;
  }
  function insertGroups($this, size) {
    if (size > 0) {
      var currentGroup = $this.ms_1;
      moveGroupGapTo($this, currentGroup);
      var gapStart = $this.zr_1;
      var gapLen = $this.as_1;
      var oldCapacity = $this.wr_1.length / 5 | 0;
      var oldSize = oldCapacity - gapLen | 0;
      if (gapLen < size) {
        var groups = $this.wr_1;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var newGroups = new Int32Array(imul(newCapacity, 5));
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$6;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = imul(gapStart, 5);
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = groups;
        tmp$ret$3 = tmp$ret$2;
        var tmp = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = newGroups;
        tmp$ret$5 = tmp$ret$4;
        arrayCopy(tmp, tmp$ret$5, 0, 0, tmp4_copyInto);
        tmp$ret$6 = newGroups;
        var tmp$ret$11;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp5_copyInto = imul(newGapEndAddress, 5);
        var tmp6_copyInto = imul(oldGapEndAddress, 5);
        var tmp7_copyInto = imul(oldCapacity, 5);
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = groups;
        tmp$ret$8 = tmp$ret$7;
        var tmp_0 = tmp$ret$8;
        var tmp$ret$10;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$9 = newGroups;
        tmp$ret$10 = tmp$ret$9;
        arrayCopy(tmp_0, tmp$ret$10, tmp5_copyInto, tmp6_copyInto, tmp7_copyInto);
        tmp$ret$11 = newGroups;
        $this.wr_1 = newGroups;
        gapLen = newGapLen;
      }
      var currentEnd = $this.bs_1;
      if (currentEnd >= gapStart)
        $this.bs_1 = currentEnd + size | 0;
      $this.zr_1 = gapStart + size | 0;
      $this.as_1 = gapLen - size | 0;
      var index = oldSize > 0 ? dataIndex($this, currentGroup + size | 0) : 0;
      var anchor = dataIndexToDataAnchor($this, index, $this.gs_1 < gapStart ? 0 : $this.es_1, $this.fs_1, $this.xr_1.length);
      var inductionVariable = gapStart;
      var last = gapStart + size | 0;
      if (inductionVariable < last)
        do {
          var groupAddress = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          updateDataAnchor($this.wr_1, groupAddress, anchor);
        }
         while (inductionVariable < last);
      var slotsGapOwner = $this.gs_1;
      if (slotsGapOwner >= gapStart) {
        $this.gs_1 = slotsGapOwner + size | 0;
      }
    }
  }
  function insertSlots($this, size, group) {
    if (size > 0) {
      moveSlotGapTo($this, $this.cs_1, group);
      var gapStart = $this.es_1;
      var gapLen = $this.fs_1;
      if (gapLen < size) {
        var slots = $this.xr_1;
        var oldCapacity = slots.length;
        var oldSize = oldCapacity - gapLen | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = imul(oldCapacity, 2);
        var tmp1_max = oldSize + size | 0;
        tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
        var tmp2_max = tmp$ret$0;
        var tmp3_max = 32;
        tmp$ret$1 = Math.max(tmp2_max, tmp3_max);
        var newCapacity = tmp$ret$1;
        var tmp = 0;
        var tmp_0 = newCapacity;
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$2 = fillArrayVal(Array(tmp_0), null);
        var tmp_1 = tmp$ret$2;
        while (tmp < tmp_0) {
          var tmp_2 = tmp;
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.SlotWriter.insertSlots.<anonymous>' call
          tmp$ret$3 = null;
          tmp_1[tmp_2] = tmp$ret$3;
          tmp = tmp + 1 | 0;
        }
        var newData = tmp_1;
        var newGapLen = newCapacity - oldSize | 0;
        var oldGapEndAddress = gapStart + gapLen | 0;
        var newGapEndAddress = gapStart + newGapLen | 0;
        var tmp$ret$4;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, 0, 0, gapStart);
        tmp$ret$4 = newData;
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        arrayCopy(slots, newData, newGapEndAddress, oldGapEndAddress, oldCapacity);
        tmp$ret$5 = newData;
        $this.xr_1 = newData;
        gapLen = newGapLen;
      }
      var currentDataEnd = $this.ds_1;
      if (currentDataEnd >= gapStart)
        $this.ds_1 = currentDataEnd + size | 0;
      $this.es_1 = gapStart + size | 0;
      $this.fs_1 = gapLen - size | 0;
    }
  }
  function removeGroups($this, start, len) {
    var tmp;
    if (len > 0) {
      var anchorsRemoved = false;
      var anchors = $this.yr_1;
      moveGroupGapTo($this, start);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !anchors.j();
      if (tmp$ret$0)
        anchorsRemoved = removeAnchors($this, start, len);
      $this.zr_1 = start;
      var previousGapLen = $this.as_1;
      var newGapLen = previousGapLen + len | 0;
      $this.as_1 = newGapLen;
      var slotsGapOwner = $this.gs_1;
      if (slotsGapOwner > start) {
        var tmp_0 = $this;
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = slotsGapOwner - len | 0;
        tmp$ret$1 = Math.max(start, tmp0_max);
        tmp_0.gs_1 = tmp$ret$1;
      }
      if ($this.bs_1 >= $this.zr_1) {
        var tmp0_this = $this;
        tmp0_this.bs_1 = tmp0_this.bs_1 - len | 0;
      }
      if (containsGroupMark($this, $this.ns_1)) {
        updateContainsMark($this, $this.ns_1);
      }
      tmp = anchorsRemoved;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function removeSlots($this, start, len, group) {
    if (len > 0) {
      var gapLen = $this.fs_1;
      var removeEnd = start + len | 0;
      moveSlotGapTo($this, removeEnd, group);
      $this.es_1 = start;
      $this.fs_1 = gapLen + len | 0;
      fill($this.xr_1, null, start, start + len | 0);
      var currentDataEnd = $this.ds_1;
      if (currentDataEnd >= start)
        $this.ds_1 = currentDataEnd - len | 0;
    }
  }
  function updateNodeOfGroup($this, index, value) {
    var address = groupIndexToAddress($this, index);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = address < $this.wr_1.length ? isNode($this.wr_1, address) : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateNodeOfGroup.<anonymous>' call
      tmp$ret$0 = 'Updating the node of a group at ' + index + ' that was not created with as a node group';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    $this.xr_1[dataIndexToDataAddress($this, nodeIndex($this.wr_1, $this, address))] = value;
  }
  function updateAnchors($this, previousGapStart, newGapStart) {
    var gapLen = $this.as_1;
    var size = _get_capacity__a9k9f3($this) - gapLen | 0;
    if (previousGapStart < newGapStart) {
      var index = locationOf($this.yr_1, previousGapStart, size);
      $l$loop_0: while (index < $this.yr_1.h()) {
        var anchor = $this.yr_1.i(index);
        var location = anchor.g11_1;
        if (location < 0) {
          var newLocation = size + location | 0;
          if (newLocation < newGapStart) {
            anchor.g11_1 = size + location | 0;
            var tmp0 = index;
            index = tmp0 + 1 | 0;
          } else
            break $l$loop_0;
        } else
          break $l$loop_0;
      }
    } else {
      var index_0 = locationOf($this.yr_1, newGapStart, size);
      $l$loop_1: while (index_0 < $this.yr_1.h()) {
        var anchor_0 = $this.yr_1.i(index_0);
        var location_0 = anchor_0.g11_1;
        if (location_0 >= 0) {
          anchor_0.g11_1 = -(size - location_0 | 0) | 0;
          var tmp1 = index_0;
          index_0 = tmp1 + 1 | 0;
        } else
          break $l$loop_1;
      }
    }
  }
  function removeAnchors($this, gapStart, size) {
    var gapLen = $this.as_1;
    var removeEnd = gapStart + size | 0;
    var groupsSize = _get_capacity__a9k9f3($this) - gapLen | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = locationOf($this.yr_1, gapStart + size | 0, groupsSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    tmp$ret$0 = tmp0_let >= $this.yr_1.h() ? tmp0_let - 1 | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    var index = tmp$ret$1;
    var removeAnchorEnd = 0;
    var removeAnchorStart = index + 1 | 0;
    $l$loop: while (index >= 0) {
      var anchor = $this.yr_1.i(index);
      var location = $this.g10(anchor);
      if (location >= gapStart) {
        if (location < removeEnd) {
          anchor.g11_1 = IntCompanionObject_getInstance().w_1;
          removeAnchorStart = index;
          if (removeAnchorEnd === 0)
            removeAnchorEnd = index + 1 | 0;
        }
        var tmp0 = index;
        index = tmp0 - 1 | 0;
      } else
        break $l$loop;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp1_also = removeAnchorStart < removeAnchorEnd;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.SlotWriter.removeAnchors.<anonymous>' call
    if (tmp1_also) {
      $this.yr_1.i6(removeAnchorStart, removeAnchorEnd).t5();
    }
    tmp$ret$2 = tmp1_also;
    return tmp$ret$2;
  }
  function moveAnchors($this, originalLocation, newLocation, size) {
    var end = originalLocation + size | 0;
    var groupsSize = $this.h();
    var index = locationOf($this.yr_1, originalLocation, groupsSize);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var removedAnchors = tmp$ret$0;
    if (index >= 0) {
      $l$loop: while (index < $this.yr_1.h()) {
        var anchor = $this.yr_1.i(index);
        var location = $this.g10(anchor);
        if (location >= originalLocation ? location < end : false) {
          removedAnchors.a(anchor);
          $this.yr_1.z2(index);
        } else
          break $l$loop;
      }
    }
    var moveDelta = newLocation - originalLocation | 0;
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = removedAnchors.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = removedAnchors.i(index_0);
        // Inline function 'androidx.compose.runtime.SlotWriter.moveAnchors.<anonymous>' call
        var anchorIndex = $this.g10(item);
        var newAnchorIndex = anchorIndex + moveDelta | 0;
        if (newAnchorIndex >= $this.zr_1) {
          item.g11_1 = -(groupsSize - newAnchorIndex | 0) | 0;
        } else {
          item.g11_1 = newAnchorIndex;
        }
        var insertIndex = locationOf($this.yr_1, newAnchorIndex, groupsSize);
        $this.yr_1.g6(insertIndex, item);
      }
       while (inductionVariable <= last);
  }
  function _get_capacity__a9k9f3($this) {
    return $this.wr_1.length / 5 | 0;
  }
  function groupIndexToAddress($this, index) {
    return index < $this.zr_1 ? index : index + $this.as_1 | 0;
  }
  function dataIndexToDataAddress($this, dataIndex) {
    return dataIndex < $this.es_1 ? dataIndex : dataIndex + $this.fs_1 | 0;
  }
  function parent(_this__u8e3s4, $this, index) {
    return parentAnchorToIndex($this, parentAnchor(_this__u8e3s4, groupIndexToAddress($this, index)));
  }
  function dataIndex($this, index) {
    return dataIndex_0($this.wr_1, $this, groupIndexToAddress($this, index));
  }
  function dataIndex_0(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.xr_1.length - $this.fs_1 | 0 : dataAnchorToDataIndex($this, dataAnchor(_this__u8e3s4, address), $this.fs_1, $this.xr_1.length);
  }
  function slotIndex(_this__u8e3s4, $this, address) {
    return address >= _get_capacity__a9k9f3($this) ? $this.xr_1.length - $this.fs_1 | 0 : dataAnchorToDataIndex($this, slotAnchor(_this__u8e3s4, address), $this.fs_1, $this.xr_1.length);
  }
  function updateDataIndex(_this__u8e3s4, $this, address, dataIndex) {
    updateDataAnchor(_this__u8e3s4, address, dataIndexToDataAnchor($this, dataIndex, $this.es_1, $this.fs_1, $this.xr_1.length));
  }
  function nodeIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address);
  }
  function auxIndex(_this__u8e3s4, $this, address) {
    return dataIndex_0(_this__u8e3s4, $this, address) + countOneBits_0(groupInfo(_this__u8e3s4, address) >> 29) | 0;
  }
  function dataIndexToDataAnchor($this, index, gapStart, gapLen, capacity) {
    return index > gapStart ? -(((capacity - gapLen | 0) - index | 0) + 1 | 0) | 0 : index;
  }
  function dataAnchorToDataIndex($this, anchor, gapLen, capacity) {
    return anchor < 0 ? ((capacity - gapLen | 0) + anchor | 0) + 1 | 0 : anchor;
  }
  function parentIndexToAnchor($this, index, gapStart) {
    return index < gapStart ? index : -(($this.h() - index | 0) - -2 | 0) | 0;
  }
  function parentAnchorToIndex($this, index) {
    return index > -2 ? index : ($this.h() + index | 0) - -2 | 0;
  }
  function SlotWriter$groupSlots$1($start, $end, this$0) {
    this.h1d_1 = $end;
    this.i1d_1 = this$0;
    this.g1d_1 = $start;
  }
  SlotWriter$groupSlots$1.prototype.f = function () {
    return this.g1d_1 < this.h1d_1;
  };
  SlotWriter$groupSlots$1.prototype.g = function () {
    var tmp;
    if (this.f()) {
      var tmp_0 = this.i1d_1.xr_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.g1d_1;
      tmp0_this.g1d_1 = tmp1 + 1 | 0;
      tmp = tmp_0[dataIndexToDataAddress(this.i1d_1, tmp1)];
    } else {
      tmp = null;
    }
    return tmp;
  };
  SlotWriter$groupSlots$1.$metadata$ = classMeta(undefined, [Iterator]);
  function SlotWriter(table) {
    Companion_getInstance_3();
    this.vr_1 = table;
    this.wr_1 = this.vr_1.vv_1;
    this.xr_1 = this.vr_1.xv_1;
    this.yr_1 = this.vr_1.cw_1;
    this.zr_1 = this.vr_1.wv_1;
    this.as_1 = (this.wr_1.length / 5 | 0) - this.vr_1.wv_1 | 0;
    this.bs_1 = this.vr_1.wv_1;
    this.cs_1 = 0;
    this.ds_1 = 0;
    this.es_1 = this.vr_1.yv_1;
    this.fs_1 = this.xr_1.length - this.vr_1.yv_1 | 0;
    this.gs_1 = this.vr_1.wv_1;
    this.hs_1 = 0;
    this.is_1 = 0;
    this.js_1 = new IntStack();
    this.ks_1 = new IntStack();
    this.ls_1 = new IntStack();
    this.ms_1 = 0;
    this.ns_1 = -1;
    this.os_1 = false;
    this.ps_1 = null;
  }
  SlotWriter.prototype.j1d = function () {
    return this.ms_1;
  };
  SlotWriter.prototype.m11 = function () {
    return this.ms_1 < this.bs_1 ? isNode(this.wr_1, groupIndexToAddress(this, this.ms_1)) : false;
  };
  SlotWriter.prototype.nz = function (index) {
    return isNode(this.wr_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.oz = function (index) {
    return nodeCount(this.wr_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.fx = function (index) {
    return key(this.wr_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.ex = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasObjectKey(this.wr_1, address) ? this.xr_1[objectKeyIndex(this.wr_1, address)] : null;
  };
  SlotWriter.prototype.vy = function (index) {
    return groupSize(this.wr_1, groupIndexToAddress(this, index));
  };
  SlotWriter.prototype.dx = function (index) {
    var address = groupIndexToAddress(this, index);
    return hasAux(this.wr_1, address) ? this.xr_1[auxIndex(this.wr_1, this, address)] : Companion_getInstance_1().qr_1;
  };
  SlotWriter.prototype.k11 = function (index) {
    return (index > this.ns_1 ? index < this.bs_1 : false) ? true : this.ns_1 === 0 ? index === 0 : false;
  };
  SlotWriter.prototype.n11 = function (index) {
    return this.l11(index, this.ms_1);
  };
  SlotWriter.prototype.l11 = function (index, group) {
    var tmp;
    if (group === this.ns_1) {
      tmp = this.bs_1;
    } else if (group > this.js_1.v10(0)) {
      tmp = group + this.vy(group) | 0;
    } else {
      var openIndex = this.js_1.k1d(group);
      tmp = openIndex < 0 ? group + this.vy(group) | 0 : (_get_capacity__a9k9f3(this) - this.as_1 | 0) - this.ks_1.mz(openIndex) | 0;
    }
    var end = tmp;
    return index > group ? index < end : false;
  };
  SlotWriter.prototype.o10 = function (index) {
    var address = groupIndexToAddress(this, index);
    return isNode(this.wr_1, address) ? this.xr_1[dataIndexToDataAddress(this, nodeIndex(this.wr_1, this, address))] : null;
  };
  SlotWriter.prototype.b12 = function (anchor) {
    return this.o10(anchor.l1d(this));
  };
  SlotWriter.prototype.m1d = function () {
    return this.ns_1;
  };
  SlotWriter.prototype.gx = function (index) {
    return parent(this.wr_1, this, index);
  };
  SlotWriter.prototype.ax = function () {
    this.os_1 = true;
    if (this.js_1.j()) {
      moveGroupGapTo(this, this.h());
      moveSlotGapTo(this, this.xr_1.length - this.fs_1 | 0, this.zr_1);
      recalculateMarks(this);
    }
    this.vr_1.n1d(this, this.wr_1, this.zr_1, this.xr_1, this.es_1, this.yr_1);
  };
  SlotWriter.prototype.l15 = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.hs_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.reset.<anonymous>' call
      tmp$ret$0 = 'Cannot reset when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    recalculateMarks(this);
    this.ms_1 = 0;
    this.bs_1 = _get_capacity__a9k9f3(this) - this.as_1 | 0;
    this.cs_1 = 0;
    this.ds_1 = 0;
    this.is_1 = 0;
  };
  SlotWriter.prototype.r10 = function (value) {
    var result = this.o1d();
    this.p1d(value);
    return result;
  };
  SlotWriter.prototype.d12 = function (value) {
    var address = groupIndexToAddress(this, this.ms_1);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = hasAux(this.wr_1, address);
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.updateAux.<anonymous>' call
      tmp$ret$0 = 'Updating the data of a group that was not created with a data slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.xr_1[dataIndexToDataAddress(this, auxIndex(this.wr_1, this, address))] = value;
  };
  SlotWriter.prototype.q13 = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.hs_1 >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$0 = 'Cannot insert auxiliary data when not inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.ns_1;
    var parentGroupAddress = groupIndexToAddress(this, parent);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = !hasAux(this.wr_1, parentGroupAddress);
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
      tmp$ret$1 = 'Group already has auxiliary data';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    insertSlots(this, 1, parent);
    var auxIndex_0 = auxIndex(this.wr_1, this, parentGroupAddress);
    var auxAddress = dataIndexToDataAddress(this, auxIndex_0);
    if (this.cs_1 > auxIndex_0) {
      var slotsToMove = this.cs_1 - auxIndex_0 | 0;
      // Inline function 'kotlin.check' call
      var tmp2_check = slotsToMove < 3;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp2_check) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.insertAux.<anonymous>' call
        tmp$ret$2 = 'Moving more than two slot not supported';
        var message_1 = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      if (slotsToMove > 1) {
        this.xr_1[auxAddress + 2 | 0] = this.xr_1[auxAddress + 1 | 0];
      }
      this.xr_1[auxAddress + 1 | 0] = this.xr_1[auxAddress];
    }
    addAux(this.wr_1, parentGroupAddress);
    this.xr_1[auxAddress] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.cs_1;
    tmp0_this.cs_1 = tmp1 + 1 | 0;
  };
  SlotWriter.prototype.c1d = function (value) {
    return updateNodeOfGroup(this, this.ms_1, value);
  };
  SlotWriter.prototype.a12 = function (anchor, value) {
    return updateNodeOfGroup(this, anchor.l1d(this), value);
  };
  SlotWriter.prototype.p1d = function (value) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.cs_1 <= this.ds_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Writing to an invalid slot';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.xr_1[dataIndexToDataAddress(this, this.cs_1 - 1 | 0)] = value;
  };
  SlotWriter.prototype.c12 = function (index, value) {
    var address = groupIndexToAddress(this, this.ms_1);
    var slotsStart = slotIndex(this.wr_1, this, address);
    var slotsEnd = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, this.ms_1 + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = slotsIndex >= slotsStart ? slotsIndex < slotsEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.set.<anonymous>' call
      tmp$ret$0 = 'Write to an invalid slot index ' + index + ' for group ' + this.ms_1;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    var result = this.xr_1[slotAddress];
    this.xr_1[slotAddress] = value;
    return result;
  };
  SlotWriter.prototype.o1d = function () {
    if (this.hs_1 > 0) {
      insertSlots(this, 1, this.ns_1);
    }
    var tmp = this.xr_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.cs_1;
    tmp0_this.cs_1 = tmp1 + 1 | 0;
    return tmp[dataIndexToDataAddress(this, tmp1)];
  };
  SlotWriter.prototype.j12 = function (anchor, index) {
    return this.q1d(this.g10(anchor), index);
  };
  SlotWriter.prototype.q1d = function (groupIndex, index) {
    var address = groupIndexToAddress(this, groupIndex);
    var slotsStart = slotIndex(this.wr_1, this, address);
    var slotsEnd = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, groupIndex + 1 | 0));
    var slotsIndex = slotsStart + index | 0;
    if (!(slotsStart <= slotsIndex ? slotsIndex < slotsEnd : false)) {
      return Companion_getInstance_1().qr_1;
    }
    var slotAddress = dataIndexToDataAddress(this, slotsIndex);
    return this.xr_1[slotAddress];
  };
  SlotWriter.prototype.l12 = function (amount) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = amount >= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$0 = 'Cannot seek backwards';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = this.hs_1 <= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$1 = 'Cannot call seek() while inserting';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (amount === 0)
      return Unit_getInstance();
    var index = this.ms_1 + amount | 0;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp2_runtimeCheck = index >= this.ns_1 ? index <= this.bs_1 : false;
    if (!tmp2_runtimeCheck) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotWriter.advanceBy.<anonymous>' call
      tmp$ret$2 = 'Cannot seek outside the current group (' + this.ns_1 + '-' + this.bs_1 + ')';
      var message_1 = tmp$ret$2;
      composeRuntimeError(toString(message_1));
    }
    this.ms_1 = index;
    var newSlot = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, index));
    this.cs_1 = newSlot;
    this.ds_1 = newSlot;
  };
  SlotWriter.prototype.mx = function () {
    var newGroup = this.bs_1;
    this.ms_1 = newGroup;
    this.cs_1 = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, newGroup));
  };
  SlotWriter.prototype.gy = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.hs_1;
    tmp0_this.hs_1 = tmp1 + 1 | 0;
    if (tmp1 === 0) {
      saveCurrentGroupEnd(this);
    }
  };
  SlotWriter.prototype.dz = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.hs_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end insert';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.hs_1 = tmp0_this.hs_1 - 1 | 0;
    if (tmp0_this.hs_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = this.ls_1.h() === this.js_1.h();
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.endInsert.<anonymous>' call
        tmp$ret$1 = 'startGroup/endGroup mismatch while inserting';
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      restoreCurrentGroupEnd(this);
    }
  };
  SlotWriter.prototype.ox = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.hs_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.startGroup.<anonymous>' call
      tmp$ret$0 = 'Key must be supplied when inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    startGroup_1(this, 0, Companion_getInstance_1().qr_1, false, Companion_getInstance_1().qr_1);
  };
  SlotWriter.prototype.rx = function (key, dataKey) {
    return startGroup_1(this, key, dataKey, false, Companion_getInstance_1().qr_1);
  };
  SlotWriter.prototype.tx = function (key) {
    return startGroup_1(this, 125, key, true, Companion_getInstance_1().qr_1);
  };
  SlotWriter.prototype.sx = function (key, objectKey, aux) {
    return startGroup_1(this, key, objectKey, false, aux);
  };
  SlotWriter.prototype.cz = function () {
    var inserting = this.hs_1 > 0;
    var currentGroup = this.ms_1;
    var currentGroupEnd = this.bs_1;
    var groupIndex = this.ns_1;
    var groupAddress = groupIndexToAddress(this, groupIndex);
    var newNodes = this.is_1;
    var newGroupSize = currentGroup - groupIndex | 0;
    var isNode_0 = isNode(this.wr_1, groupAddress);
    if (inserting) {
      updateGroupSize(this.wr_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.wr_1, groupAddress, newNodes);
      this.is_1 = this.ls_1.sy() + (isNode_0 ? 1 : newNodes) | 0;
      this.ns_1 = parent(this.wr_1, this, groupIndex);
    } else {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = currentGroup === currentGroupEnd;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotWriter.endGroup.<anonymous>' call
        tmp$ret$0 = 'Expected to be at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var oldGroupSize = groupSize(this.wr_1, groupAddress);
      var oldNodes = nodeCount(this.wr_1, groupAddress);
      updateGroupSize(this.wr_1, groupAddress, newGroupSize);
      updateNodeCount_0(this.wr_1, groupAddress, newNodes);
      var newParent = this.js_1.sy();
      restoreCurrentGroupEnd(this);
      this.ns_1 = newParent;
      var groupParent = parent(this.wr_1, this, groupIndex);
      this.is_1 = this.ls_1.sy();
      if (groupParent === newParent) {
        var tmp0_this = this;
        tmp0_this.is_1 = tmp0_this.is_1 + (isNode_0 ? 0 : newNodes - oldNodes | 0) | 0;
      } else {
        var groupSizeDelta = newGroupSize - oldGroupSize | 0;
        var nodesDelta = isNode_0 ? 0 : newNodes - oldNodes | 0;
        if (!(groupSizeDelta === 0) ? true : !(nodesDelta === 0)) {
          var current = groupParent;
          while ((!(current === 0) ? !(current === newParent) : false) ? !(nodesDelta === 0) ? true : !(groupSizeDelta === 0) : false) {
            var currentAddress = groupIndexToAddress(this, current);
            if (!(groupSizeDelta === 0)) {
              var newSize = groupSize(this.wr_1, currentAddress) + groupSizeDelta | 0;
              updateGroupSize(this.wr_1, currentAddress, newSize);
            }
            if (!(nodesDelta === 0)) {
              updateNodeCount_0(this.wr_1, currentAddress, nodeCount(this.wr_1, currentAddress) + nodesDelta | 0);
            }
            if (isNode(this.wr_1, currentAddress))
              nodesDelta = 0;
            current = parent(this.wr_1, this, current);
          }
        }
        var tmp1_this = this;
        tmp1_this.is_1 = tmp1_this.is_1 + nodesDelta | 0;
      }
    }
    return newNodes;
  };
  SlotWriter.prototype.k15 = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.hs_1 <= 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
      tmp$ret$0 = 'Cannot call ensureStarted() while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var parent = this.ns_1;
    if (!(parent === index)) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp1_runtimeCheck = index >= parent ? index < this.bs_1 : false;
      if (!tmp1_runtimeCheck) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.SlotWriter.ensureStarted.<anonymous>' call
        tmp$ret$1 = 'Started group at ' + index + ' must be a subgroup of the group at ' + parent;
        var message_0 = tmp$ret$1;
        composeRuntimeError(toString(message_0));
      }
      var oldCurrent = this.ms_1;
      var oldCurrentSlot = this.cs_1;
      var oldCurrentSlotEnd = this.ds_1;
      this.ms_1 = index;
      this.ox();
      this.ms_1 = oldCurrent;
      this.cs_1 = oldCurrentSlot;
      this.ds_1 = oldCurrentSlotEnd;
    }
  };
  SlotWriter.prototype.o12 = function (anchor) {
    return this.k15(anchor.l1d(this));
  };
  SlotWriter.prototype.cx = function () {
    var groupAddress = groupIndexToAddress(this, this.ms_1);
    var newGroup = this.ms_1 + groupSize(this.wr_1, groupAddress) | 0;
    this.ms_1 = newGroup;
    this.cs_1 = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, newGroup));
    return isNode(this.wr_1, groupAddress) ? 1 : nodeCount(this.wr_1, groupAddress);
  };
  SlotWriter.prototype.tt = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.hs_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.removeGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot remove group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var oldGroup = this.ms_1;
    var oldSlot = this.cs_1;
    var count = this.cx();
    var tmp0_safe_receiver = this.ps_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      while (tmp0_safe_receiver.p10() ? tmp0_safe_receiver.y12() >= oldGroup : false) {
        tmp0_safe_receiver.e1d();
      }
      tmp$ret$1 = Unit_getInstance();
    }
    var anchorsRemoved = removeGroups(this, oldGroup, this.ms_1 - oldGroup | 0);
    removeSlots(this, oldSlot, this.cs_1 - oldSlot | 0, oldGroup - 1 | 0);
    this.ms_1 = oldGroup;
    this.cs_1 = oldSlot;
    var tmp1_this = this;
    tmp1_this.is_1 = tmp1_this.is_1 - count | 0;
    return anchorsRemoved;
  };
  SlotWriter.prototype.qs = function () {
    var start = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, this.ms_1));
    var end = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, this.ms_1 + this.vy(this.ms_1) | 0));
    return new SlotWriter$groupSlots$1(start, end, this);
  };
  SlotWriter.prototype.e12 = function (offset) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.hs_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot move a group while inserting';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = offset >= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$1 = 'Parameter offset is out of bounds';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    if (offset === 0)
      return Unit_getInstance();
    var current = this.ms_1;
    var parent = this.ns_1;
    var parentEnd = this.bs_1;
    var count = offset;
    var groupToMove = current;
    while (count > 0) {
      groupToMove = groupToMove + groupSize(this.wr_1, groupIndexToAddress(this, groupToMove)) | 0;
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp2_runtimeCheck = groupToMove <= parentEnd;
      if (!tmp2_runtimeCheck) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
        tmp$ret$2 = 'Parameter offset is out of bounds';
        var message_1 = tmp$ret$2;
        composeRuntimeError(toString(message_1));
      }
      var tmp0 = count;
      count = tmp0 - 1 | 0;
    }
    var moveLen = groupSize(this.wr_1, groupIndexToAddress(this, groupToMove));
    var currentSlot = this.cs_1;
    var dataStart = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, groupToMove));
    var dataEnd = dataIndex_0(this.wr_1, this, groupIndexToAddress(this, groupToMove + moveLen | 0));
    var moveDataLen = dataEnd - dataStart | 0;
    var tmp$ret$3;
    // Inline function 'kotlin.math.max' call
    var tmp3_max = this.ms_1 - 1 | 0;
    tmp$ret$3 = Math.max(tmp3_max, 0);
    insertSlots(this, moveDataLen, tmp$ret$3);
    insertGroups(this, moveLen);
    var groups = this.wr_1;
    var moveLocationAddress = groupIndexToAddress(this, groupToMove + moveLen | 0);
    var moveLocationOffset = imul(moveLocationAddress, 5);
    var currentAddress = groupIndexToAddress(this, current);
    var tmp$ret$8;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp4_copyInto = imul(currentAddress, 5);
    var tmp5_copyInto = moveLocationOffset + imul(moveLen, 5) | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = groups;
    tmp$ret$5 = tmp$ret$4;
    var tmp = tmp$ret$5;
    var tmp$ret$7;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$6;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$6 = groups;
    tmp$ret$7 = tmp$ret$6;
    arrayCopy(tmp, tmp$ret$7, tmp4_copyInto, moveLocationOffset, tmp5_copyInto);
    tmp$ret$8 = groups;
    if (moveDataLen > 0) {
      var slots = this.xr_1;
      var tmp$ret$9;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = dataIndexToDataAddress(this, dataStart + moveDataLen | 0);
      var tmp7_copyInto = dataIndexToDataAddress(this, dataEnd + moveDataLen | 0);
      arrayCopy(slots, slots, currentSlot, tmp6_copyInto, tmp7_copyInto);
      tmp$ret$9 = slots;
    }
    var dataMoveDistance = (dataStart + moveDataLen | 0) - currentSlot | 0;
    var slotsGapStart = this.es_1;
    var slotsGapLen = this.fs_1;
    var slotsCapacity = this.xr_1.length;
    var slotsGapOwner = this.gs_1;
    var inductionVariable = current;
    var last = current + moveLen | 0;
    if (inductionVariable < last)
      do {
        var group = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var groupAddress = groupIndexToAddress(this, group);
        var oldIndex = dataIndex_0(groups, this, groupAddress);
        var newIndex = oldIndex - dataMoveDistance | 0;
        var newAnchor = dataIndexToDataAnchor(this, newIndex, slotsGapOwner < groupAddress ? 0 : slotsGapStart, slotsGapLen, slotsCapacity);
        updateDataIndex(groups, this, groupAddress, newAnchor);
      }
       while (inductionVariable < last);
    moveAnchors(this, groupToMove + moveLen | 0, current, moveLen);
    var anchorsRemoved = removeGroups(this, groupToMove + moveLen | 0, moveLen);
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp8_runtimeCheck = !anchorsRemoved;
    if (!tmp8_runtimeCheck) {
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveGroup.<anonymous>' call
      tmp$ret$10 = 'Unexpectedly removed anchors';
      var message_2 = tmp$ret$10;
      composeRuntimeError(toString(message_2));
    }
    fixParentAnchorsFor(this, parent, this.bs_1, current);
    if (moveDataLen > 0) {
      removeSlots(this, dataStart + moveDataLen | 0, moveDataLen, (groupToMove + moveLen | 0) - 1 | 0);
    }
  };
  SlotWriter.prototype.s10 = function (anchor, offset, writer) {
    runtimeCheck(writer.hs_1 > 0);
    runtimeCheck(this.hs_1 === 0);
    runtimeCheck(anchor.d16());
    var location = this.g10(anchor) + offset | 0;
    var currentGroup = this.ms_1;
    runtimeCheck(currentGroup <= location ? location < this.bs_1 : false);
    var parent = this.gx(location);
    var size = this.vy(location);
    var nodes = this.nz(location) ? 1 : this.oz(location);
    var result = moveGroup(Companion_getInstance_3(), this, location, writer, false, false);
    updateContainsMark(this, parent);
    var current = parent;
    var updatingNodes = nodes > 0;
    while (current >= currentGroup) {
      var currentAddress = groupIndexToAddress(this, current);
      updateGroupSize(this.wr_1, currentAddress, groupSize(this.wr_1, currentAddress) - size | 0);
      if (updatingNodes) {
        if (isNode(this.wr_1, currentAddress))
          updatingNodes = false;
        else {
          updateNodeCount_0(this.wr_1, currentAddress, nodeCount(this.wr_1, currentAddress) - nodes | 0);
        }
      }
      current = this.gx(current);
    }
    if (updatingNodes) {
      runtimeCheck(this.is_1 >= nodes);
      var tmp0_this = this;
      tmp0_this.is_1 = tmp0_this.is_1 - nodes | 0;
    }
    return result;
  };
  SlotWriter.prototype.n12 = function (table, index) {
    runtimeCheck(this.hs_1 > 0);
    if ((index === 0 ? this.ms_1 === 0 : false) ? this.vr_1.wv_1 === 0 : false) {
      var myGroups = this.wr_1;
      var mySlots = this.xr_1;
      var myAnchors = this.yr_1;
      var groups = table.vv_1;
      var groupsSize = table.wv_1;
      var slots = table.xv_1;
      var slotsSize = table.yv_1;
      this.wr_1 = groups;
      this.xr_1 = slots;
      this.yr_1 = table.cw_1;
      this.zr_1 = groupsSize;
      this.as_1 = (groups.length / 5 | 0) - groupsSize | 0;
      this.es_1 = slotsSize;
      this.fs_1 = slots.length - slotsSize | 0;
      this.gs_1 = groupsSize;
      table.r1d(myGroups, 0, mySlots, 0, myAnchors);
      return this.yr_1;
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.lx();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_3(), tmp0_let, index, this, true, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  SlotWriter.prototype.i12 = function (offset, table, index) {
    runtimeCheck(this.hs_1 <= 0 ? this.vy(this.ms_1 + offset | 0) === 1 : false);
    var previousCurrentGroup = this.ms_1;
    var previousCurrentSlot = this.cs_1;
    var previousCurrentSlotEnd = this.ds_1;
    this.l12(offset);
    this.ox();
    this.gy();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.SlotTable.write' call
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = table.lx();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.moveIntoGroupFrom.<anonymous>' call
      tmp$ret$0 = moveGroup(Companion_getInstance_3(), tmp0_let, index, this, false, true);
      tmp = tmp$ret$0;
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var anchors = tmp$ret$3;
    this.dz();
    this.cz();
    this.ms_1 = previousCurrentGroup;
    this.cs_1 = previousCurrentSlot;
    this.ds_1 = previousCurrentSlotEnd;
    return anchors;
  };
  SlotWriter.prototype.hy = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.yr_1;
    var tmp1_getOrAdd = this.h();
    var location = search$accessor$v4m42o(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotWriter.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index <= this.zr_1 ? index : -(this.h() - index | 0) | 0);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.g6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.i(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  SlotWriter.prototype.s1d = function (group) {
    var groupAddress = groupIndexToAddress(this, group);
    if (!hasMark(this.wr_1, groupAddress)) {
      updateMark(this.wr_1, groupAddress, true);
      if (!containsMark(this.wr_1, groupAddress)) {
        updateContainsMark(this, this.gx(group));
      }
    }
  };
  SlotWriter.prototype.vz = function (group, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      group = this.ns_1;
    return this.s1d(group);
  };
  SlotWriter.prototype.g10 = function (anchor) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = anchor.g11_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotWriter.anchorIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let < 0 ? this.h() + tmp0_let | 0 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SlotWriter.prototype.toString = function () {
    return 'SlotWriter(current = ' + this.ms_1 + ' end=' + this.bs_1 + ' size = ' + this.h() + ' ' + ('gap=' + this.zr_1 + '-' + (this.zr_1 + this.as_1 | 0) + ')');
  };
  SlotWriter.prototype.h = function () {
    return _get_capacity__a9k9f3(this) - this.as_1 | 0;
  };
  SlotWriter.$metadata$ = classMeta('SlotWriter');
  function SlotTable() {
    this.vv_1 = new Int32Array(0);
    this.wv_1 = 0;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.slots.<anonymous>' call
      tmp$ret$1 = null;
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.xv_1 = tmp_2;
    this.yv_1 = 0;
    this.zv_1 = 0;
    this.aw_1 = false;
    this.bw_1 = 0;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$2 = ArrayList_init_$Create$();
    tmp_4.cw_1 = tmp$ret$2;
  }
  SlotTable.prototype.t1d = function () {
    return this.cw_1;
  };
  SlotTable.prototype.mj = function () {
    return this.wv_1 === 0;
  };
  SlotTable.prototype.u1d = function (block) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.dw();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.read.<anonymous>' call
    var tmp;
    try {
      tmp = block(tmp0_let);
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SlotTable.prototype.v1d = function (block) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.lx();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SlotTable.write.<anonymous>' call
    var tmp;
    try {
      tmp = block(tmp0_let);
    }finally {
      tmp0_let.ax();
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SlotTable.prototype.dw = function () {
    if (this.aw_1) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Cannot read while a writer is pending');
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.zv_1;
    tmp0_this.zv_1 = tmp1 + 1 | 0;
    return new SlotReader(this);
  };
  SlotTable.prototype.lx = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.aw_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$0 = 'Cannot start a writer when another writer is pending';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = this.zv_1 <= 0;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.openWriter.<anonymous>' call
      tmp$ret$1 = 'Cannot start a writer when a reader is pending';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    this.aw_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.bw_1;
    tmp0_this.bw_1 = tmp1 + 1 | 0;
    return new SlotWriter(this);
  };
  SlotTable.prototype.hy = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.aw_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$0 = 'use active SlotWriter to create an anchor location instead ';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = 0 <= index ? index < this.wv_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$1 = 'Parameter index is out of range';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp2_getOrAdd = this.cw_1;
    var tmp3_getOrAdd = this.wv_1;
    var location = search$accessor$v4m42o(tmp2_getOrAdd, index, tmp3_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.SlotTable.anchor.<anonymous>' call
      tmp$ret$2 = new Anchor(index);
      var anchor = tmp$ret$2;
      tmp2_getOrAdd.g6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp2_getOrAdd.i(location);
    }
    tmp$ret$3 = tmp;
    return tmp$ret$3;
  };
  SlotTable.prototype.g10 = function (anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.aw_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$0 = 'Use active SlotWriter to determine anchor location instead';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = anchor.d16();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.anchorIndex.<anonymous>' call
      tmp$ret$1 = 'Anchor refers to a group that was removed';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return anchor.g11_1;
  };
  SlotTable.prototype.j17 = function (anchor) {
    var tmp;
    if (anchor.d16()) {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = search$accessor$v4m42o(this.cw_1, anchor.g11_1, this.wv_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.ownsAnchor.<anonymous>' call
      tmp$ret$0 = tmp0_let >= 0 ? equals(this.cw_1.i(tmp0_let), anchor) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SlotTable.prototype.g16 = function (groupIndex, anchor) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = !this.aw_1;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$0 = 'Writer is active';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp1_runtimeCheck = 0 <= groupIndex ? groupIndex < this.wv_1 : false;
    if (!tmp1_runtimeCheck) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.SlotTable.groupContainsAnchor.<anonymous>' call
      tmp$ret$1 = 'Invalid group index';
      var message_0 = tmp$ret$1;
      composeRuntimeError(toString(message_0));
    }
    var tmp;
    if (this.j17(anchor)) {
      var containsUpper = groupIndex + groupSize(this.vv_1, groupIndex) | 0;
      var containsArg = anchor.g11_1;
      tmp = groupIndex <= containsArg ? containsArg < containsUpper : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SlotTable.prototype.w1d = function (reader) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = reader.ow_1 === this ? this.zv_1 > 0 : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected reader close()';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.zv_1;
    tmp0_this.zv_1 = tmp1 - 1 | 0;
  };
  SlotTable.prototype.n1d = function (writer, groups, groupsSize, slots, slotsSize, anchors) {
    // Inline function 'kotlin.require' call
    var tmp0_require = writer.vr_1 === this ? this.aw_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotTable.close.<anonymous>' call
      tmp$ret$0 = 'Unexpected writer close()';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.aw_1 = false;
    this.r1d(groups, groupsSize, slots, slotsSize, anchors);
  };
  SlotTable.prototype.r1d = function (groups, groupsSize, slots, slotsSize, anchors) {
    this.vv_1 = groups;
    this.wv_1 = groupsSize;
    this.xv_1 = slots;
    this.yv_1 = slotsSize;
    this.cw_1 = anchors;
  };
  SlotTable.prototype.u10 = function () {
    return this.wv_1 > 0 ? containsMark(this.vv_1, 0) : false;
  };
  SlotTable.prototype.e = function () {
    return new GroupIterator(this, 0, this.wv_1);
  };
  SlotTable.$metadata$ = classMeta('SlotTable', [CompositionData, Iterable]);
  function Anchor(loc) {
    this.g11_1 = loc;
  }
  Anchor.prototype.x1d = function (_set____db54di) {
    this.g11_1 = _set____db54di;
  };
  Anchor.prototype.z14 = function () {
    return this.g11_1;
  };
  Anchor.prototype.d16 = function () {
    return !(this.g11_1 === IntCompanionObject_getInstance().w_1);
  };
  Anchor.prototype.m12 = function (slots) {
    return slots.g10(this);
  };
  Anchor.prototype.l1d = function (writer) {
    return writer.g10(this);
  };
  Anchor.$metadata$ = classMeta('Anchor');
  function isNode(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 1073741824) === 0);
  }
  function nodeCount(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0] & 67108863;
  }
  function key(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5)];
  }
  function hasObjectKey(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 536870912) === 0);
  }
  function objectKeyIndex(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.objectKeyIndex.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 30) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function groupSize(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 3 | 0];
  }
  function hasAux(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 268435456) === 0);
  }
  function addAux(_this__u8e3s4, address) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 268435456;
  }
  function initGroup(_this__u8e3s4, address, key, isNode, hasDataKey, hasData, parentAnchor, dataAnchor) {
    var nodeBit = isNode ? 1073741824 : 0;
    var dataKeyBit = hasDataKey ? 536870912 : 0;
    var dataBit = hasData ? 268435456 : 0;
    var arrayIndex = imul(address, 5);
    _this__u8e3s4[arrayIndex + 0 | 0] = key;
    _this__u8e3s4[arrayIndex + 1 | 0] = nodeBit | dataKeyBit | dataBit;
    _this__u8e3s4[arrayIndex + 2 | 0] = parentAnchor;
    _this__u8e3s4[arrayIndex + 3 | 0] = 0;
    _this__u8e3s4[arrayIndex + 4 | 0] = dataAnchor;
  }
  function updateGroupSize(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0);
    _this__u8e3s4[imul(address, 5) + 3 | 0] = value;
  }
  function updateNodeCount_0(_this__u8e3s4, address, value) {
    runtimeCheck(value >= 0 ? value < 67108863 : false);
    _this__u8e3s4[imul(address, 5) + 1 | 0] = _this__u8e3s4[imul(address, 5) + 1 | 0] & -67108864 | value;
  }
  function PrioritySet_init_$Init$(list, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      tmp$ret$0_0 = Unit_getInstance();
      list = tmp$ret$0;
    }
    PrioritySet.call($this, list);
    return $this;
  }
  function PrioritySet_init_$Create$(list, $mask0, $marker) {
    return PrioritySet_init_$Init$(list, $mask0, $marker, Object.create(PrioritySet.prototype));
  }
  function PrioritySet(list) {
    this.d1d_1 = list;
  }
  PrioritySet.prototype.f1d = function (value) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.d1d_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      tmp = this.d1d_1.i(0) === value ? true : this.d1d_1.i(this.d1d_1.h() - 1 | 0) === value;
    } else {
      tmp = false;
    }
    if (tmp)
      return Unit_getInstance();
    var index = this.d1d_1.h();
    this.d1d_1.a(value);
    $l$loop: while (index > 0) {
      var parent = ((index + 1 | 0) >>> 1 | 0) - 1 | 0;
      var parentValue = this.d1d_1.i(parent);
      if (value > parentValue) {
        this.d1d_1.q5(index, parentValue);
      } else
        break $l$loop;
      index = parent;
    }
    this.d1d_1.q5(index, value);
  };
  PrioritySet.prototype.p10 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = this.d1d_1;
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    return tmp$ret$0;
  };
  PrioritySet.prototype.y12 = function () {
    return first(this.d1d_1);
  };
  PrioritySet.prototype.e1d = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.d1d_1.h() > 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.PrioritySet.takeMax.<anonymous>' call
      tmp$ret$0 = 'Set is empty';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var value = this.d1d_1.i(0);
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp1_isNotEmpty = this.d1d_1;
      tmp$ret$1 = !tmp1_isNotEmpty.j();
      if (tmp$ret$1) {
        tmp = this.d1d_1.i(0) === value;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      this.d1d_1.q5(0, last(this.d1d_1));
      this.d1d_1.z2(this.d1d_1.h() - 1 | 0);
      var index = 0;
      var size = this.d1d_1.h();
      var max = this.d1d_1.h() >>> 1 | 0;
      $l$loop_2: while (index < max) {
        var indexValue = this.d1d_1.i(index);
        var left = imul(index + 1 | 0, 2) - 1 | 0;
        var leftValue = this.d1d_1.i(left);
        var right = imul(index + 1 | 0, 2);
        if (right < size) {
          var rightValue = this.d1d_1.i(right);
          if (rightValue > leftValue) {
            if (rightValue > indexValue) {
              this.d1d_1.q5(index, rightValue);
              this.d1d_1.q5(right, indexValue);
              index = right;
              continue $l$loop_2;
            } else
              break $l$loop_2;
          }
        }
        if (leftValue > indexValue) {
          this.d1d_1.q5(index, leftValue);
          this.d1d_1.q5(left, indexValue);
          index = left;
        } else
          break $l$loop_2;
      }
    }
    return value;
  };
  PrioritySet.$metadata$ = classMeta('PrioritySet');
  function updateParentAnchor(_this__u8e3s4, address, value) {
    _this__u8e3s4[imul(address, 5) + 2 | 0] = value;
  }
  function parentAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 2 | 0];
  }
  function updateDataAnchor(_this__u8e3s4, address, anchor) {
    _this__u8e3s4[imul(address, 5) + 4 | 0] = anchor;
  }
  function locationOf(_this__u8e3s4, index, effectiveSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = search$accessor$v4m42o(_this__u8e3s4, index, effectiveSize);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.locationOf.<anonymous>' call
    tmp$ret$0 = tmp0_let >= 0 ? tmp0_let : -(tmp0_let + 1 | 0) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function dataAnchor(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function getOrAdd(_this__u8e3s4, index, effectiveSize, block) {
    var location = search$accessor$v4m42o(_this__u8e3s4, index, effectiveSize);
    var tmp;
    if (location < 0) {
      var anchor = block();
      _this__u8e3s4.g6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = _this__u8e3s4.i(location);
    }
    return tmp;
  }
  function hasMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 134217728) === 0);
  }
  function updateMark(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 134217728;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -134217729;
    }
  }
  function containsMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 67108864) === 0);
  }
  function containsAnyMark(_this__u8e3s4, address) {
    return !((_this__u8e3s4[imul(address, 5) + 1 | 0] & 201326592) === 0);
  }
  function updateContainsMark_0(_this__u8e3s4, address, value) {
    var arrayIndex = imul(address, 5) + 1 | 0;
    if (value) {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] | 67108864;
    } else {
      _this__u8e3s4[arrayIndex] = _this__u8e3s4[arrayIndex] & -67108865;
    }
  }
  function slotAnchor(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.slotAnchor.<anonymous>' call
    tmp$ret$0 = _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 28) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function countOneBits_0(value) {
    var tmp0_subject = value;
    switch (tmp0_subject) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 2;
      case 4:
        return 1;
      case 5:
        return 2;
      case 6:
        return 2;
      default:
        return 3;
    }
  }
  function get_Aux_Shift() {
    return Aux_Shift;
  }
  var Aux_Shift;
  function groupInfo(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 1 | 0];
  }
  function node(_this__u8e3s4, $this, index) {
    var tmp;
    if (isNode(_this__u8e3s4, index)) {
      tmp = $this.rw_1[nodeIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().qr_1;
    }
    return tmp;
  }
  function aux(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasAux(_this__u8e3s4, index)) {
      tmp = $this.rw_1[auxIndex_0(_this__u8e3s4, index)];
    } else {
      tmp = Companion_getInstance_1().qr_1;
    }
    return tmp;
  }
  function objectKey(_this__u8e3s4, $this, index) {
    var tmp;
    if (hasObjectKey(_this__u8e3s4, index)) {
      tmp = $this.rw_1[objectKeyIndex(_this__u8e3s4, index)];
    } else {
      tmp = null;
    }
    return tmp;
  }
  function SlotReader(table) {
    this.ow_1 = table;
    this.pw_1 = this.ow_1.vv_1;
    this.qw_1 = this.ow_1.wv_1;
    this.rw_1 = this.ow_1.xv_1;
    this.sw_1 = this.ow_1.yv_1;
    this.tw_1 = false;
    this.uw_1 = 0;
    this.vw_1 = this.qw_1;
    this.ww_1 = -1;
    this.xw_1 = 0;
    this.yw_1 = 0;
    this.zw_1 = 0;
  }
  SlotReader.prototype.j1d = function () {
    return this.uw_1;
  };
  SlotReader.prototype.h = function () {
    return this.qw_1;
  };
  SlotReader.prototype.gx = function (index) {
    return parentAnchor(this.pw_1, index);
  };
  SlotReader.prototype.m11 = function () {
    return isNode(this.pw_1, this.uw_1);
  };
  SlotReader.prototype.nz = function (index) {
    return isNode(this.pw_1, index);
  };
  SlotReader.prototype.oz = function (index) {
    return nodeCount(this.pw_1, index);
  };
  SlotReader.prototype.o10 = function (index) {
    return isNode(this.pw_1, index) ? node(this.pw_1, this, index) : null;
  };
  SlotReader.prototype.zy = function () {
    return this.ez() ? true : this.uw_1 === this.vw_1;
  };
  SlotReader.prototype.ez = function () {
    return this.xw_1 > 0;
  };
  SlotReader.prototype.q10 = function () {
    return groupSize(this.pw_1, this.uw_1);
  };
  SlotReader.prototype.vy = function (index) {
    return groupSize(this.pw_1, index);
  };
  SlotReader.prototype.yy = function () {
    return this.vw_1;
  };
  SlotReader.prototype.cy = function () {
    var tmp;
    if (this.uw_1 < this.vw_1) {
      tmp = key(this.pw_1, this.uw_1);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  SlotReader.prototype.fx = function (index) {
    return key(this.pw_1, index);
  };
  SlotReader.prototype.d13 = function () {
    return this.yw_1 - slotAnchor(this.pw_1, this.ww_1) | 0;
  };
  SlotReader.prototype.pz = function (index) {
    return hasObjectKey(this.pw_1, index);
  };
  SlotReader.prototype.ey = function () {
    return this.uw_1 < this.vw_1 ? objectKey(this.pw_1, this, this.uw_1) : null;
  };
  SlotReader.prototype.ex = function (index) {
    return objectKey(this.pw_1, this, index);
  };
  SlotReader.prototype.nx = function () {
    return this.uw_1 < this.vw_1 ? aux(this.pw_1, this, this.uw_1) : 0;
  };
  SlotReader.prototype.dx = function (index) {
    return aux(this.pw_1, this, index);
  };
  SlotReader.prototype.z11 = function (index) {
    return hasMark(this.pw_1, index);
  };
  SlotReader.prototype.o11 = function (index) {
    return containsMark(this.pw_1, index);
  };
  SlotReader.prototype.qz = function () {
    return this.ww_1 >= 0 ? nodeCount(this.pw_1, this.ww_1) : 0;
  };
  SlotReader.prototype.f13 = function (index) {
    return this.p11(this.uw_1, index);
  };
  SlotReader.prototype.p11 = function (group, index) {
    var start = slotAnchor(this.pw_1, group);
    var next = group + 1 | 0;
    var end = next < this.qw_1 ? dataAnchor(this.pw_1, next) : this.sw_1;
    var address = start + index | 0;
    return address < end ? this.rw_1[address] : Companion_getInstance_1().qr_1;
  };
  SlotReader.prototype.g = function () {
    if (this.xw_1 > 0 ? true : this.yw_1 >= this.zw_1)
      return Companion_getInstance_1().qr_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.yw_1;
    tmp0_this.yw_1 = tmp1 + 1 | 0;
    return this.rw_1[tmp1];
  };
  SlotReader.prototype.qx = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.xw_1;
    tmp0_this.xw_1 = tmp1 + 1 | 0;
  };
  SlotReader.prototype.bz = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.xw_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.endEmpty.<anonymous>' call
      tmp$ret$0 = 'Unbalanced begin/end empty';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.xw_1;
    tmp0_this.xw_1 = tmp1 - 1 | 0;
  };
  SlotReader.prototype.ax = function () {
    this.tw_1 = true;
    this.ow_1.w1d(this);
  };
  SlotReader.prototype.ox = function () {
    if (this.xw_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = parentAnchor(this.pw_1, this.uw_1) === this.ww_1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startGroup.<anonymous>' call
        tmp$ret$0 = 'Invalid slot table detected';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.ww_1 = this.uw_1;
      this.vw_1 = this.uw_1 + groupSize(this.pw_1, this.uw_1) | 0;
      var tmp0_this = this;
      var tmp1 = tmp0_this.uw_1;
      tmp0_this.uw_1 = tmp1 + 1 | 0;
      var current = tmp1;
      this.yw_1 = slotAnchor(this.pw_1, current);
      this.zw_1 = current >= (this.qw_1 - 1 | 0) ? this.sw_1 : dataAnchor(this.pw_1, current + 1 | 0);
    }
  };
  SlotReader.prototype.px = function () {
    if (this.xw_1 <= 0) {
      // Inline function 'kotlin.require' call
      var tmp0_require = isNode(this.pw_1, this.uw_1);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.startNode.<anonymous>' call
        tmp$ret$0 = 'Expected a node group';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      this.ox();
    }
  };
  SlotReader.prototype.cx = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.xw_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipGroup.<anonymous>' call
      tmp$ret$0 = 'Cannot skip while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    var count = isNode(this.pw_1, this.uw_1) ? 1 : nodeCount(this.pw_1, this.uw_1);
    var tmp0_this = this;
    tmp0_this.uw_1 = tmp0_this.uw_1 + groupSize(this.pw_1, this.uw_1) | 0;
    return count;
  };
  SlotReader.prototype.mx = function () {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.xw_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.skipToGroupEnd.<anonymous>' call
      tmp$ret$0 = 'Cannot skip the enclosing group while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.uw_1 = this.vw_1;
  };
  SlotReader.prototype.qy = function (index) {
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = this.xw_1 === 0;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.reposition.<anonymous>' call
      tmp$ret$0 = 'Cannot reposition while in an empty region';
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.uw_1 = index;
    var parent = index < this.qw_1 ? parentAnchor(this.pw_1, index) : -1;
    this.ww_1 = parent;
    if (parent < 0)
      this.vw_1 = this.qw_1;
    else
      this.vw_1 = parent + groupSize(this.pw_1, parent) | 0;
    this.yw_1 = 0;
    this.zw_1 = 0;
  };
  SlotReader.prototype.kz = function (index) {
    var newCurrentEnd = index + groupSize(this.pw_1, index) | 0;
    var current = this.uw_1;
    // Inline function 'androidx.compose.runtime.runtimeCheck' call
    var tmp0_runtimeCheck = current >= index ? current <= newCurrentEnd : false;
    if (!tmp0_runtimeCheck) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.restoreParent.<anonymous>' call
      tmp$ret$0 = 'Index ' + index + ' is not a parent of ' + current;
      var message = tmp$ret$0;
      composeRuntimeError(toString(message));
    }
    this.ww_1 = index;
    this.vw_1 = newCurrentEnd;
    this.yw_1 = 0;
    this.zw_1 = 0;
  };
  SlotReader.prototype.az = function () {
    if (this.xw_1 === 0) {
      // Inline function 'androidx.compose.runtime.runtimeCheck' call
      var tmp0_runtimeCheck = this.uw_1 === this.vw_1;
      if (!tmp0_runtimeCheck) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.SlotReader.endGroup.<anonymous>' call
        tmp$ret$0 = 'endGroup() not called at the end of a group';
        var message = tmp$ret$0;
        composeRuntimeError(toString(message));
      }
      var parent = parentAnchor(this.pw_1, this.ww_1);
      this.ww_1 = parent;
      this.vw_1 = parent < 0 ? this.qw_1 : parent + groupSize(this.pw_1, parent) | 0;
    }
  };
  SlotReader.prototype.dy = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    if (this.xw_1 > 0)
      return result;
    var index = 0;
    var childIndex = this.uw_1;
    while (childIndex < this.vw_1) {
      var tmp = key(this.pw_1, childIndex);
      var tmp_0 = objectKey(this.pw_1, this, childIndex);
      var tmp_1 = childIndex;
      var tmp_2 = isNode(this.pw_1, childIndex) ? 1 : nodeCount(this.pw_1, childIndex);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result.a(new KeyInfo(tmp, tmp_0, tmp_1, tmp_2, tmp0));
      childIndex = childIndex + groupSize(this.pw_1, childIndex) | 0;
    }
    return result;
  };
  SlotReader.prototype.toString = function () {
    return 'SlotReader(current=' + this.uw_1 + ', key=' + this.cy() + ', ' + ('parent=' + this.ww_1 + ', end=' + this.vw_1 + ')');
  };
  SlotReader.prototype.hy = function (index) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.getOrAdd' call
    var tmp0_getOrAdd = this.ow_1.cw_1;
    var tmp1_getOrAdd = this.qw_1;
    var location = search$accessor$v4m42o(tmp0_getOrAdd, index, tmp1_getOrAdd);
    var tmp;
    if (location < 0) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.SlotReader.anchor.<anonymous>' call
      tmp$ret$0 = new Anchor(index);
      var anchor = tmp$ret$0;
      tmp0_getOrAdd.g6(-(location + 1 | 0) | 0, anchor);
      tmp = anchor;
    } else {
      tmp = tmp0_getOrAdd.i(location);
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1;
  };
  SlotReader.$metadata$ = classMeta('SlotReader');
  function search(_this__u8e3s4, location, effectiveSize) {
    var low = 0;
    var high = _this__u8e3s4.h() - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = _this__u8e3s4.i(mid).g11_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.search.<anonymous>' call
      tmp$ret$0 = tmp0_let < 0 ? effectiveSize + tmp0_let | 0 : tmp0_let;
      tmp$ret$1 = tmp$ret$0;
      var midVal = tmp$ret$1;
      var cmp = compareTo(midVal, location);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function nodeIndex_0(_this__u8e3s4, address) {
    return _this__u8e3s4[imul(address, 5) + 4 | 0];
  }
  function auxIndex_0(_this__u8e3s4, address) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = imul(address, 5);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.auxIndex.<anonymous>' call
    tmp$ret$0 = tmp0_let >= _this__u8e3s4.length ? _this__u8e3s4.length : _this__u8e3s4[tmp0_let + 4 | 0] + countOneBits_0(_this__u8e3s4[tmp0_let + 1 | 0] >> 29) | 0;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function validateRead($this) {
    if (!($this.y1d_1.bw_1 === $this.b1e_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function GroupIterator(table, start, end) {
    this.y1d_1 = table;
    this.z1d_1 = end;
    this.a1e_1 = start;
    this.b1e_1 = this.y1d_1.bw_1;
    if (this.y1d_1.aw_1)
      throw ConcurrentModificationException_init_$Create$();
  }
  GroupIterator.prototype.f = function () {
    return this.a1e_1 < this.z1d_1;
  };
  GroupIterator.prototype.g = function () {
    validateRead(this);
    var group = this.a1e_1;
    var tmp0_this = this;
    tmp0_this.a1e_1 = tmp0_this.a1e_1 + groupSize(this.y1d_1.vv_1, group) | 0;
    return new SlotTableGroup(this.y1d_1, group, this.b1e_1);
  };
  GroupIterator.$metadata$ = classMeta('GroupIterator', [Iterator]);
  function validateRead_0($this) {
    if (!($this.c1e_1.bw_1 === $this.e1e_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SlotTableGroup(table, group, version) {
    this.c1e_1 = table;
    this.d1e_1 = group;
    this.e1e_1 = version;
  }
  SlotTableGroup.prototype.e = function () {
    validateRead_0(this);
    return new GroupIterator(this.c1e_1, this.d1e_1 + 1 | 0, this.d1e_1 + groupSize(this.c1e_1.vv_1, this.d1e_1) | 0);
  };
  SlotTableGroup.$metadata$ = classMeta('SlotTableGroup', [CompositionGroup, Iterable]);
  function get_GroupInfo_Offset() {
    return GroupInfo_Offset;
  }
  var GroupInfo_Offset;
  function get_ObjectKey_Shift() {
    return ObjectKey_Shift;
  }
  var ObjectKey_Shift;
  function get_DataAnchor_Offset() {
    return DataAnchor_Offset;
  }
  var DataAnchor_Offset;
  function get_Slots_Shift() {
    return Slots_Shift;
  }
  var Slots_Shift;
  function KeyInfo(key, objectKey, location, nodes, index) {
    this.iy_1 = key;
    this.jy_1 = objectKey;
    this.ky_1 = location;
    this.ly_1 = nodes;
    this.my_1 = index;
  }
  KeyInfo.prototype.z14 = function () {
    return this.ky_1;
  };
  KeyInfo.prototype.f1e = function () {
    return this.ly_1;
  };
  KeyInfo.$metadata$ = classMeta('KeyInfo');
  function search$accessor$v4m42o(_this__u8e3s4, location, effectiveSize) {
    return search(_this__u8e3s4, location, effectiveSize);
  }
  function SnapshotMutationPolicy() {
  }
  SnapshotMutationPolicy.$metadata$ = interfaceMeta('SnapshotMutationPolicy');
  function structuralEqualityPolicy() {
    var tmp = StructuralEqualityPolicy_getInstance();
    return isInterface(tmp, SnapshotMutationPolicy) ? tmp : THROW_CCE();
  }
  function StructuralEqualityPolicy() {
    StructuralEqualityPolicy_instance = this;
  }
  StructuralEqualityPolicy.prototype.h1e = function (a, b) {
    return equals(a, b);
  };
  StructuralEqualityPolicy.prototype.u18 = function (a, b) {
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    return this.h1e(tmp, (b == null ? true : isObject(b)) ? b : THROW_CCE());
  };
  StructuralEqualityPolicy.prototype.toString = function () {
    return 'StructuralEqualityPolicy';
  };
  StructuralEqualityPolicy.$metadata$ = objectMeta('StructuralEqualityPolicy', [SnapshotMutationPolicy]);
  var StructuralEqualityPolicy_instance;
  function StructuralEqualityPolicy_getInstance() {
    if (StructuralEqualityPolicy_instance == null)
      new StructuralEqualityPolicy();
    return StructuralEqualityPolicy_instance;
  }
  function State_0() {
  }
  State_0.$metadata$ = interfaceMeta('State');
  function MutableState() {
  }
  MutableState.$metadata$ = interfaceMeta('MutableState', [State_0]);
  function getValue(_this__u8e3s4, thisObj, property) {
    return _this__u8e3s4.z1();
  }
  function setValue(_this__u8e3s4, thisObj, property, value) {
    _this__u8e3s4.sn(value);
  }
  function mutableStateOf(value, policy) {
    return createSnapshotMutableState(value, policy);
  }
  function mutableStateOf$default(value, policy, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      policy = structuralEqualityPolicy();
    return mutableStateOf(value, policy);
  }
  function StateStateRecord(myValue) {
    StateRecord.call(this);
    this.l1e_1 = myValue;
  }
  StateStateRecord.prototype.m1e = function (value) {
    var tmp = this;
    tmp.l1e_1 = (value instanceof StateStateRecord ? value : THROW_CCE()).l1e_1;
  };
  StateStateRecord.prototype.n1e = function () {
    return new StateStateRecord(this.l1e_1);
  };
  StateStateRecord.prototype.sn = function (_set____db54di) {
    this.l1e_1 = _set____db54di;
  };
  StateStateRecord.prototype.z1 = function () {
    return this.l1e_1;
  };
  StateStateRecord.$metadata$ = classMeta('StateStateRecord', undefined, undefined, undefined, undefined, StateRecord.prototype);
  function SnapshotMutableStateImpl(value, policy) {
    this.t1e_1 = policy;
    this.u1e_1 = new StateStateRecord(value);
  }
  SnapshotMutableStateImpl.prototype.a18 = function () {
    return this.t1e_1;
  };
  SnapshotMutableStateImpl.prototype.sn = function (value) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.u1e_1;
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    var tmp;
    if (!this.a18().u18(tmp1__anonymous__uwfjfc.l1e_1, value)) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable' call
      var tmp2_overwritable = this.u1e_1;
      var snapshot = get_snapshotInitializer();
      var tmp$ret$4;
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp3__anonymous__ufb84q = overwritableRecord(tmp2_overwritable, this, snapshot, tmp1__anonymous__uwfjfc);
      tmp3__anonymous__ufb84q.l1e_1 = value;
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp1_also = tmp$ret$3;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$4 = tmp1_also;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    }
    tmp$ret$6 = tmp;
    return tmp$ret$6;
  };
  SnapshotMutableStateImpl.prototype.z1 = function () {
    return readable_0(this.u1e_1, this).l1e_1;
  };
  SnapshotMutableStateImpl.prototype.v1e = function () {
    return this.u1e_1;
  };
  SnapshotMutableStateImpl.prototype.w1e = function (value) {
    var tmp = this;
    tmp.u1e_1 = value instanceof StateStateRecord ? value : THROW_CCE();
  };
  SnapshotMutableStateImpl.prototype.x1e = function (previous, current, applied) {
    var previousRecord = previous instanceof StateStateRecord ? previous : THROW_CCE();
    var currentRecord = current instanceof StateStateRecord ? current : THROW_CCE();
    var appliedRecord = applied instanceof StateStateRecord ? applied : THROW_CCE();
    var tmp;
    if (this.a18().u18(currentRecord.l1e_1, appliedRecord.l1e_1)) {
      tmp = current;
    } else {
      var merged = this.a18().g1e(previousRecord.l1e_1, currentRecord.l1e_1, appliedRecord.l1e_1);
      var tmp_0;
      if (!(merged == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = appliedRecord.n1e();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.mergeRecords.<anonymous>' call
        (tmp0_also instanceof StateStateRecord ? tmp0_also : THROW_CCE()).l1e_1 = merged;
        tmp$ret$0 = tmp0_also;
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  SnapshotMutableStateImpl.prototype.toString = function () {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp0_withCurrent = this.u1e_1;
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.SnapshotMutableStateImpl.toString.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = 'MutableState(value=' + tmp1__anonymous__uwfjfc.l1e_1 + ')@' + hashCode(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  SnapshotMutableStateImpl.$metadata$ = classMeta('SnapshotMutableStateImpl', [StateObject, SnapshotMutableState]);
  function toMutableStateList(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SnapshotStateList();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.toMutableStateList.<anonymous>' call
    tmp0_also.z1e(_this__u8e3s4);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function mutableStateListOf() {
    return new SnapshotStateList();
  }
  function IntStack() {
    this.hw_1 = new Int32Array(10);
    this.iw_1 = 0;
  }
  IntStack.prototype.h = function () {
    return this.iw_1;
  };
  IntStack.prototype.jw = function (value) {
    if (this.iw_1 >= this.hw_1.length) {
      this.hw_1 = copyOf(this.hw_1, imul(this.hw_1.length, 2));
    }
    var tmp = this.hw_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.iw_1;
    tmp0_this.iw_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  IntStack.prototype.sy = function () {
    var tmp = this.hw_1;
    var tmp0_this = this;
    tmp0_this.iw_1 = tmp0_this.iw_1 - 1 | 0;
    return tmp[tmp0_this.iw_1];
  };
  IntStack.prototype.v10 = function (default_0) {
    return this.iw_1 > 0 ? this.y12() : default_0;
  };
  IntStack.prototype.y12 = function () {
    return this.hw_1[this.iw_1 - 1 | 0];
  };
  IntStack.prototype.mz = function (index) {
    return this.hw_1[index];
  };
  IntStack.prototype.j = function () {
    return this.iw_1 === 0;
  };
  IntStack.prototype.t5 = function () {
    this.iw_1 = 0;
  };
  IntStack.prototype.k1d = function (value) {
    var inductionVariable = 0;
    var last = this.iw_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.hw_1[i] === value)
          return i;
      }
       while (inductionVariable < last);
    return -1;
  };
  IntStack.$metadata$ = classMeta('IntStack');
  function Stack() {
    this.bx_1 = ArrayList_init_$Create$();
  }
  Stack.prototype.h = function () {
    return this.bx_1.h();
  };
  Stack.prototype.ry = function (value) {
    return this.bx_1.a(value);
  };
  Stack.prototype.sy = function () {
    return this.bx_1.z2(this.h() - 1 | 0);
  };
  Stack.prototype.y12 = function () {
    return this.bx_1.i(this.h() - 1 | 0);
  };
  Stack.prototype.mz = function (index) {
    return this.bx_1.i(index);
  };
  Stack.prototype.j = function () {
    return this.bx_1.j();
  };
  Stack.prototype.p10 = function () {
    return !this.j();
  };
  Stack.prototype.t5 = function () {
    return this.bx_1.t5();
  };
  Stack.prototype.c7 = function () {
    var tmp = 0;
    var tmp_0 = this.bx_1.h();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.Stack.toArray.<anonymous>' call
      tmp$ret$1 = this.bx_1.i(tmp_2);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var tmp_3 = tmp_1;
    return isArray(tmp_3) ? tmp_3 : THROW_CCE();
  };
  Stack.$metadata$ = classMeta('Stack');
  function SynchronizedObject() {
  }
  SynchronizedObject.$metadata$ = classMeta('SynchronizedObject');
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function synchronized(lock, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    return tmp$ret$0;
  }
  function trace(sectionName, block) {
    var token = Trace_getInstance().w10(sectionName);
    try {
      return block();
    }finally {
      Trace_getInstance().i11(token);
    }
  }
  function _get_current__qcrdxk($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = current$factory();
    tmp$ret$0 = $this.kx_1.z1();
    return tmp$ret$0;
  }
  function LazyValueHolder(valueProducer) {
    this.kx_1 = lazy(valueProducer);
  }
  LazyValueHolder.prototype.z1 = function () {
    return _get_current__qcrdxk(this);
  };
  LazyValueHolder.$metadata$ = classMeta('LazyValueHolder', [State_0]);
  function StaticValueHolder(value) {
    this.a1f_1 = value;
  }
  StaticValueHolder.prototype.z1 = function () {
    return this.a1f_1;
  };
  StaticValueHolder.prototype.toString = function () {
    return 'StaticValueHolder(value=' + this.a1f_1 + ')';
  };
  StaticValueHolder.prototype.hashCode = function () {
    return this.a1f_1 == null ? 0 : hashCode(this.a1f_1);
  };
  StaticValueHolder.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StaticValueHolder))
      return false;
    var tmp0_other_with_cast = other instanceof StaticValueHolder ? other : THROW_CCE();
    if (!equals(this.a1f_1, tmp0_other_with_cast.a1f_1))
      return false;
    return true;
  };
  StaticValueHolder.$metadata$ = classMeta('StaticValueHolder', [State_0]);
  function current$factory() {
    return getPropertyCallableRef('current', 1, KProperty1, function (receiver) {
      return _get_current__qcrdxk(receiver);
    }, null);
  }
  function find($this, key) {
    var low = 0;
    var high = $this.p18_1 - 1 | 0;
    var valueIdentity = identityHashCode(key);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.q18_1[mid];
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === key)
        return mid;
      else
        return findExactIndex($this, mid, key, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.q18_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.p18_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.q18_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.p18_1 + 1 | 0) | 0;
  }
  function IdentityArrayIntMap() {
    this.p18_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(4), null);
    tmp.q18_1 = tmp$ret$0;
    this.r18_1 = new Int32Array(4);
  }
  IdentityArrayIntMap.prototype.b1f = function (_set____db54di) {
    this.p18_1 = _set____db54di;
  };
  IdentityArrayIntMap.prototype.h = function () {
    return this.p18_1;
  };
  IdentityArrayIntMap.prototype.l2 = function () {
    return this.q18_1;
  };
  IdentityArrayIntMap.prototype.b7 = function () {
    return this.r18_1;
  };
  IdentityArrayIntMap.prototype.t18 = function (key, value) {
    var index;
    if (this.p18_1 > 0) {
      index = find(this, key);
      if (index >= 0) {
        var previousValue = this.r18_1[index];
        this.r18_1[index] = value;
        return previousValue;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.p18_1 === this.q18_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.q18_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newKeys = tmp$ret$0;
      var newValues = new Int32Array(imul(this.q18_1.length, 2));
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.q18_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.p18_1;
      arrayCopy(tmp1_copyInto, newKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newKeys;
      var tmp$ret$6;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.r18_1;
      var tmp5_copyInto = insertIndex + 1 | 0;
      var tmp6_copyInto = this.p18_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp4_copyInto;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = newValues;
      tmp$ret$5 = tmp$ret$4;
      arrayCopy(tmp, tmp$ret$5, tmp5_copyInto, insertIndex, tmp6_copyInto);
      tmp$ret$6 = newValues;
      var tmp$ret$7;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp7_copyInto = this.q18_1;
      arrayCopy(tmp7_copyInto, newKeys, 0, 0, insertIndex);
      tmp$ret$7 = newKeys;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = this.r18_1;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = tmp8_copyInto;
      tmp$ret$9 = tmp$ret$8;
      var tmp_0 = tmp$ret$9;
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = newValues;
      tmp$ret$11 = tmp$ret$10;
      arrayCopy(tmp_0, tmp$ret$11, 0, 0, insertIndex);
      tmp$ret$12 = newValues;
      this.q18_1 = newKeys;
      this.r18_1 = newValues;
    } else {
      var tmp$ret$13;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp9_copyInto = this.q18_1;
      var tmp10_copyInto = this.q18_1;
      var tmp11_copyInto = insertIndex + 1 | 0;
      var tmp12_copyInto = this.p18_1;
      arrayCopy(tmp9_copyInto, tmp10_copyInto, tmp11_copyInto, insertIndex, tmp12_copyInto);
      tmp$ret$13 = tmp10_copyInto;
      var tmp$ret$18;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp13_copyInto = this.r18_1;
      var tmp14_copyInto = this.r18_1;
      var tmp15_copyInto = insertIndex + 1 | 0;
      var tmp16_copyInto = this.p18_1;
      var tmp$ret$15;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$14;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$14 = tmp13_copyInto;
      tmp$ret$15 = tmp$ret$14;
      var tmp_1 = tmp$ret$15;
      var tmp$ret$17;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$16;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$16 = tmp14_copyInto;
      tmp$ret$17 = tmp$ret$16;
      arrayCopy(tmp_1, tmp$ret$17, tmp15_copyInto, insertIndex, tmp16_copyInto);
      tmp$ret$18 = tmp14_copyInto;
    }
    this.q18_1[insertIndex] = key;
    this.r18_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.p18_1;
    tmp0_this.p18_1 = tmp1 + 1 | 0;
    return -1;
  };
  IdentityArrayIntMap.prototype.c1f = function (predicate) {
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.p18_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.q18_1[i];
        var key = isObject(tmp) ? tmp : THROW_CCE();
        var value = this.r18_1[i];
        if (!predicate(key, value)) {
          if (!(destinationIndex === i)) {
            this.q18_1[destinationIndex] = key;
            this.r18_1[destinationIndex] = value;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.p18_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.q18_1[i_0] = null;
      }
       while (inductionVariable_0 < last_0);
    this.p18_1 = destinationIndex;
  };
  IdentityArrayIntMap.prototype.d1f = function (predicate) {
    var inductionVariable = 0;
    var last = this.p18_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.q18_1[i];
        if (predicate(isObject(tmp) ? tmp : THROW_CCE(), this.r18_1[i]))
          return true;
      }
       while (inductionVariable < last);
    return false;
  };
  IdentityArrayIntMap.prototype.e1f = function (block) {
    var inductionVariable = 0;
    var last = this.p18_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.q18_1[i];
        block(isObject(tmp) ? tmp : THROW_CCE(), this.r18_1[i]);
      }
       while (inductionVariable < last);
  };
  IdentityArrayIntMap.$metadata$ = classMeta('IdentityArrayIntMap');
  function IdentityArrayMap_init_$Init$(capacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      capacity = 16;
    IdentityArrayMap.call($this, capacity);
    return $this;
  }
  function IdentityArrayMap_init_$Create$(capacity, $mask0, $marker) {
    return IdentityArrayMap_init_$Init$(capacity, $mask0, $marker, Object.create(IdentityArrayMap.prototype));
  }
  function find_0($this, key) {
    var keyIdentity = identityHashCode(key);
    var low = 0;
    var high = $this.f11_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midKey = $this.d11_1[mid];
      var midKeyHash = identityHashCode(midKey);
      if (midKeyHash < keyIdentity)
        low = mid + 1 | 0;
      else if (midKeyHash > keyIdentity)
        high = mid - 1 | 0;
      else if (key === midKey)
        return mid;
      else
        return findExactIndex_0($this, mid, key, keyIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_0($this, midIndex, key, keyHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var k = $this.d11_1[i];
        if (k === key) {
          return i;
        }
        if (!(identityHashCode(k) === keyHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.f11_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var k_0 = $this.d11_1[i_0];
        if (k_0 === key) {
          return i_0;
        }
        if (!(identityHashCode(k_0) === keyHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.f11_1 + 1 | 0) | 0;
  }
  function IdentityArrayMap(capacity) {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    tmp.d11_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(capacity), null);
    tmp_0.e11_1 = tmp$ret$1;
    this.f11_1 = 0;
  }
  IdentityArrayMap.prototype.h = function () {
    return this.f11_1;
  };
  IdentityArrayMap.prototype.p10 = function () {
    return this.f11_1 > 0;
  };
  IdentityArrayMap.prototype.s17 = function (key) {
    return find_0(this, key) >= 0;
  };
  IdentityArrayMap.prototype.r17 = function (key) {
    var index = find_0(this, key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.e11_1[index];
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  IdentityArrayMap.prototype.i16 = function (key, value) {
    var index = find_0(this, key);
    if (index >= 0) {
      this.e11_1[index] = value;
    } else {
      var insertIndex = -(index + 1 | 0) | 0;
      var resize = this.f11_1 === this.d11_1.length;
      var tmp;
      if (resize) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = imul(this.f11_1, 2);
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = this.d11_1;
      }
      var destKeys = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.d11_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.f11_1;
      arrayCopy(tmp1_copyInto, destKeys, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = destKeys;
      if (resize) {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp4_copyInto = this.d11_1;
        arrayCopy(tmp4_copyInto, destKeys, 0, 0, insertIndex);
        tmp$ret$2 = destKeys;
      }
      destKeys[insertIndex] = key;
      this.d11_1 = destKeys;
      var tmp_0;
      if (resize) {
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp5_arrayOfNulls = imul(this.f11_1, 2);
        tmp$ret$3 = fillArrayVal(Array(tmp5_arrayOfNulls), null);
        tmp_0 = tmp$ret$3;
      } else {
        tmp_0 = this.e11_1;
      }
      var destValues = tmp_0;
      var tmp$ret$4;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp6_copyInto = this.e11_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.f11_1;
      arrayCopy(tmp6_copyInto, destValues, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$4 = destValues;
      if (resize) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp9_copyInto = this.e11_1;
        arrayCopy(tmp9_copyInto, destValues, 0, 0, insertIndex);
        tmp$ret$5 = destValues;
      }
      destValues[insertIndex] = value;
      this.e11_1 = destValues;
      var tmp0_this = this;
      var tmp1 = tmp0_this.f11_1;
      tmp0_this.f11_1 = tmp1 + 1 | 0;
    }
  };
  IdentityArrayMap.prototype.s18 = function (key) {
    var index = find_0(this, key);
    if (index >= 0) {
      var size = this.f11_1;
      var keys = this.d11_1;
      var values = this.e11_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      arrayCopy(keys, keys, index, tmp0_copyInto, size);
      tmp$ret$0 = keys;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(values, values, index, tmp1_copyInto, size);
      tmp$ret$1 = values;
      var newSize = size - 1 | 0;
      keys[newSize] = null;
      values[newSize] = null;
      this.f11_1 = newSize;
      return true;
    }
    return false;
  };
  IdentityArrayMap.prototype.f1f = function (block) {
    var inductionVariable = 0;
    var last = this.f11_1;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.d11_1[index];
        var tmp_0 = isObject(tmp) ? tmp : THROW_CCE();
        var tmp_1 = this.e11_1[index];
        block(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
      }
       while (inductionVariable < last);
  };
  IdentityArrayMap.$metadata$ = classMeta('IdentityArrayMap');
  function find_1($this, value) {
    var low = 0;
    var high = $this.l10_1 - 1 | 0;
    var valueIdentity = identityHashCode(value);
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = $this.i(mid);
      var midIdentity = identityHashCode(midVal);
      if (midIdentity < valueIdentity)
        low = mid + 1 | 0;
      else if (midIdentity > valueIdentity)
        high = mid - 1 | 0;
      else if (midVal === value)
        return mid;
      else
        return findExactIndex_1($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_1($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var v = $this.m10_1[i];
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.l10_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var v_0 = $this.m10_1[i_0];
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.l10_1 + 1 | 0) | 0;
  }
  function IdentityArraySet$iterator$1(this$0) {
    this.h1f_1 = this$0;
    this.g1f_1 = 0;
  }
  IdentityArraySet$iterator$1.prototype.f = function () {
    return this.g1f_1 < this.h1f_1.l10_1;
  };
  IdentityArraySet$iterator$1.prototype.g = function () {
    var tmp = this.h1f_1.m10_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.g1f_1;
    tmp0_this.g1f_1 = tmp1 + 1 | 0;
    var tmp_0 = tmp[tmp1];
    return isObject(tmp_0) ? tmp_0 : THROW_CCE();
  };
  IdentityArraySet$iterator$1.$metadata$ = classMeta(undefined, [Iterator]);
  function IdentityArraySet() {
    this.l10_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.m10_1 = tmp$ret$0;
  }
  IdentityArraySet.prototype.b1f = function (_set____db54di) {
    this.l10_1 = _set____db54di;
  };
  IdentityArraySet.prototype.h = function () {
    return this.l10_1;
  };
  IdentityArraySet.prototype.b7 = function () {
    return this.m10_1;
  };
  IdentityArraySet.prototype.u2 = function (element) {
    return find_1(this, element) >= 0;
  };
  IdentityArraySet.prototype.k = function (element) {
    if (!isObject(element))
      return false;
    return this.u2(isObject(element) ? element : THROW_CCE());
  };
  IdentityArraySet.prototype.i = function (index) {
    var tmp = this.m10_1[index];
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  IdentityArraySet.prototype.d15 = function (value) {
    var index;
    if (this.l10_1 > 0) {
      index = find_1(this, value);
      if (index >= 0) {
        return false;
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if (this.l10_1 === this.m10_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = imul(this.m10_1.length, 2);
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var newSorted = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.m10_1;
      var tmp2_copyInto = insertIndex + 1 | 0;
      var tmp3_copyInto = this.l10_1;
      arrayCopy(tmp1_copyInto, newSorted, tmp2_copyInto, insertIndex, tmp3_copyInto);
      tmp$ret$1 = newSorted;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.m10_1;
      arrayCopy(tmp4_copyInto, newSorted, 0, 0, insertIndex);
      tmp$ret$2 = newSorted;
      this.m10_1 = newSorted;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = this.m10_1;
      var tmp6_copyInto = this.m10_1;
      var tmp7_copyInto = insertIndex + 1 | 0;
      var tmp8_copyInto = this.l10_1;
      arrayCopy(tmp5_copyInto, tmp6_copyInto, tmp7_copyInto, insertIndex, tmp8_copyInto);
      tmp$ret$3 = tmp6_copyInto;
    }
    this.m10_1[insertIndex] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.l10_1;
    tmp0_this.l10_1 = tmp1 + 1 | 0;
    return true;
  };
  IdentityArraySet.prototype.i1f = function (block) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this.l10_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        block(this.i(i));
      }
       while (inductionVariable < last);
  };
  IdentityArraySet.prototype.j = function () {
    return this.l10_1 === 0;
  };
  IdentityArraySet.prototype.p10 = function () {
    return this.l10_1 > 0;
  };
  IdentityArraySet.prototype.j1f = function (value) {
    var index = find_1(this, value);
    if (index >= 0) {
      if (index < (this.l10_1 - 1 | 0)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp0_copyInto = this.m10_1;
        var tmp1_copyInto = this.m10_1;
        var tmp2_copyInto = index + 1 | 0;
        var tmp3_copyInto = this.l10_1;
        arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tmp3_copyInto);
        tmp$ret$0 = tmp1_copyInto;
      }
      var tmp0_this = this;
      var tmp1 = tmp0_this.l10_1;
      tmp0_this.l10_1 = tmp1 - 1 | 0;
      this.m10_1[this.l10_1] = null;
      return true;
    }
    return false;
  };
  IdentityArraySet.prototype.k1f = function (predicate) {
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.l10_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.m10_1[i];
        var item = isObject(tmp) ? tmp : THROW_CCE();
        if (!predicate(item)) {
          if (!(destinationIndex === i)) {
            this.m10_1[destinationIndex] = item;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.l10_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.m10_1[i_0] = null;
      }
       while (inductionVariable_0 < last_0);
    this.l10_1 = destinationIndex;
  };
  IdentityArraySet.prototype.v2 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.containsAll.<anonymous>' call
        tmp$ret$1 = this.u2(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  IdentityArraySet.prototype.j1 = function (elements) {
    return this.v2(elements);
  };
  IdentityArraySet.prototype.e = function () {
    return new IdentityArraySet$iterator$1(this);
  };
  IdentityArraySet.$metadata$ = classMeta('IdentityArraySet', [Set]);
  function scopeSetAt($this, index) {
    return ensureNotNull($this.s15_1[$this.q15_1[index]]);
  }
  function getOrCreateIdentitySet($this, value) {
    var index;
    if ($this.t15_1 > 0) {
      index = find_2($this, value);
      if (index >= 0) {
        return scopeSetAt($this, index);
      }
    } else {
      index = -1;
    }
    var insertIndex = -(index + 1 | 0) | 0;
    if ($this.t15_1 < $this.q15_1.length) {
      var valueIndex = $this.q15_1[$this.t15_1];
      $this.r15_1[valueIndex] = value;
      var tmp0_elvis_lhs = $this.s15_1[valueIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = new IdentityArraySet();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.getOrCreateIdentitySet.<anonymous>' call
        $this.s15_1[valueIndex] = tmp0_also;
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var scopeSet = tmp;
      if (insertIndex < $this.t15_1) {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.copyInto' call
        var tmp1_copyInto = $this.q15_1;
        var tmp2_copyInto = $this.q15_1;
        var tmp3_copyInto = insertIndex + 1 | 0;
        var tmp4_copyInto = $this.t15_1;
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp1_copyInto;
        tmp$ret$2 = tmp$ret$1;
        var tmp_0 = tmp$ret$2;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = tmp2_copyInto;
        tmp$ret$4 = tmp$ret$3;
        arrayCopy(tmp_0, tmp$ret$4, tmp3_copyInto, insertIndex, tmp4_copyInto);
        tmp$ret$5 = tmp2_copyInto;
      }
      $this.q15_1[insertIndex] = valueIndex;
      var tmp1_this = $this;
      var tmp2 = tmp1_this.t15_1;
      tmp1_this.t15_1 = tmp2 + 1 | 0;
      return scopeSet;
    }
    var newSize = imul($this.q15_1.length, 2);
    var valueIndex_0 = $this.t15_1;
    $this.s15_1 = copyOf_0($this.s15_1, newSize);
    var scopeSet_0 = new IdentityArraySet();
    $this.s15_1[valueIndex_0] = scopeSet_0;
    $this.r15_1 = copyOf_0($this.r15_1, newSize);
    $this.r15_1[valueIndex_0] = value;
    var newKeyOrder = new Int32Array(newSize);
    var inductionVariable = $this.t15_1 + 1 | 0;
    if (inductionVariable < newSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newKeyOrder[i] = i;
      }
       while (inductionVariable < newSize);
    if (insertIndex < $this.t15_1) {
      var tmp$ret$10;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp5_copyInto = $this.q15_1;
      var tmp6_copyInto = insertIndex + 1 | 0;
      var tmp7_copyInto = $this.t15_1;
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp5_copyInto;
      tmp$ret$7 = tmp$ret$6;
      var tmp_1 = tmp$ret$7;
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = newKeyOrder;
      tmp$ret$9 = tmp$ret$8;
      arrayCopy(tmp_1, tmp$ret$9, tmp6_copyInto, insertIndex, tmp7_copyInto);
      tmp$ret$10 = newKeyOrder;
    }
    newKeyOrder[insertIndex] = valueIndex_0;
    if (insertIndex > 0) {
      var tmp$ret$15;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp8_copyInto = $this.q15_1;
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp8_copyInto;
      tmp$ret$12 = tmp$ret$11;
      var tmp_2 = tmp$ret$12;
      var tmp$ret$14;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$13 = newKeyOrder;
      tmp$ret$14 = tmp$ret$13;
      arrayCopy(tmp_2, tmp$ret$14, 0, 0, insertIndex);
      tmp$ret$15 = newKeyOrder;
    }
    $this.q15_1 = newKeyOrder;
    var tmp4_this = $this;
    var tmp5 = tmp4_this.t15_1;
    tmp4_this.t15_1 = tmp5 + 1 | 0;
    return scopeSet_0;
  }
  function find_2($this, value) {
    var valueIdentity = identityHashCode(value);
    var low = 0;
    var high = $this.t15_1 - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
      tmp$ret$0 = ensureNotNull($this.r15_1[$this.q15_1[mid]]);
      var midValue = tmp$ret$0;
      var midValHash = identityHashCode(midValue);
      if (midValHash < valueIdentity)
        low = mid + 1 | 0;
      else if (midValHash > valueIdentity)
        high = mid - 1 | 0;
      else if (value === midValue)
        return mid;
      else
        return findExactIndex_2($this, mid, value, valueIdentity);
    }
    return -(low + 1 | 0) | 0;
  }
  function findExactIndex_2($this, midIndex, value, valueHash) {
    var inductionVariable = midIndex - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$0 = ensureNotNull($this.r15_1[$this.q15_1[i]]);
        var v = tmp$ret$0;
        if (v === value) {
          return i;
        }
        if (!(identityHashCode(v) === valueHash)) {
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
    var inductionVariable_0 = midIndex + 1 | 0;
    var last = $this.t15_1;
    if (inductionVariable_0 < last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueAt' call
        tmp$ret$1 = ensureNotNull($this.r15_1[$this.q15_1[i_0]]);
        var v_0 = tmp$ret$1;
        if (v_0 === value) {
          return i_0;
        }
        if (!(identityHashCode(v_0) === valueHash)) {
          return -(i_0 + 1 | 0) | 0;
        }
      }
       while (inductionVariable_0 < last);
    return -($this.t15_1 + 1 | 0) | 0;
  }
  function IdentityScopeMap() {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 50;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.valueOrder.<anonymous>' call
      tmp$ret$0 = tmp_3;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.q15_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(50), null);
    tmp_4.r15_1 = tmp$ret$1;
    var tmp_5 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(50), null);
    tmp_5.s15_1 = tmp$ret$2;
    this.t15_1 = 0;
  }
  IdentityScopeMap.prototype.l1f = function () {
    return this.q15_1;
  };
  IdentityScopeMap.prototype.b7 = function () {
    return this.r15_1;
  };
  IdentityScopeMap.prototype.m1f = function () {
    return this.s15_1;
  };
  IdentityScopeMap.prototype.b1f = function (_set____db54di) {
    this.t15_1 = _set____db54di;
  };
  IdentityScopeMap.prototype.h = function () {
    return this.t15_1;
  };
  IdentityScopeMap.prototype.w15 = function (value, scope) {
    var valueSet = getOrCreateIdentitySet(this, value);
    return valueSet.d15(scope);
  };
  IdentityScopeMap.prototype.u15 = function (element) {
    return find_2(this, element) >= 0;
  };
  IdentityScopeMap.prototype.n1f = function (value, block) {
    var index = find_2(this, value);
    if (index >= 0) {
      // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.fastForEach' call
      var tmp0_fastForEach = scopeSetAt(this, index);
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastForEach.l10_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          block(tmp0_fastForEach.i(i));
        }
         while (inductionVariable < last);
    }
  };
  IdentityScopeMap.prototype.n16 = function (value, scope) {
    var index = find_2(this, value);
    if (index >= 0) {
      var valueOrderIndex = this.q15_1[index];
      var tmp0_elvis_lhs = this.s15_1[valueOrderIndex];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var set = tmp;
      var removed = set.j1f(scope);
      if (set.l10_1 === 0) {
        var startIndex = index + 1 | 0;
        var endIndex = this.t15_1;
        if (startIndex < endIndex) {
          var tmp$ret$4;
          // Inline function 'kotlin.collections.copyInto' call
          var tmp0_copyInto = this.q15_1;
          var tmp1_copyInto = this.q15_1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyInto;
          tmp$ret$1 = tmp$ret$0;
          var tmp_0 = tmp$ret$1;
          var tmp$ret$3;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$2;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$2 = tmp1_copyInto;
          tmp$ret$3 = tmp$ret$2;
          arrayCopy(tmp_0, tmp$ret$3, index, startIndex, endIndex);
          tmp$ret$4 = tmp1_copyInto;
        }
        this.q15_1[this.t15_1 - 1 | 0] = valueOrderIndex;
        this.r15_1[valueOrderIndex] = null;
        var tmp1_this = this;
        var tmp2 = tmp1_this.t15_1;
        tmp1_this.t15_1 = tmp2 - 1 | 0;
      }
      return removed;
    }
    return false;
  };
  IdentityScopeMap.prototype.k1f = function (predicate) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.t15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.q15_1[i];
        var set = ensureNotNull(this.s15_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeValueIf.<anonymous>' call
        // Inline function 'androidx.compose.runtime.collection.IdentityArraySet.removeValueIf' call
        var destinationIndex_0 = 0;
        var inductionVariable_0 = 0;
        var last_0 = set.l10_1;
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = set.m10_1[i_0];
            var item = isObject(tmp) ? tmp : THROW_CCE();
            if (!predicate(item)) {
              if (!(destinationIndex_0 === i_0)) {
                set.m10_1[destinationIndex_0] = item;
              }
              var tmp1 = destinationIndex_0;
              destinationIndex_0 = tmp1 + 1 | 0;
            }
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = destinationIndex_0;
        var last_1 = set.l10_1;
        if (inductionVariable_1 < last_1)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set.m10_1[i_1] = null;
          }
           while (inductionVariable_1 < last_1);
        set.l10_1 = destinationIndex_0;
        if (set.l10_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.q15_1[destinationIndex];
            this.q15_1[destinationIndex] = valueIndex;
            this.q15_1[i] = destinationKeyOrder;
          }
          var tmp1_0 = destinationIndex;
          destinationIndex = tmp1_0 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_2 = destinationIndex;
    var last_2 = this.t15_1;
    if (inductionVariable_2 < last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        this.r15_1[this.q15_1[i_2]] = null;
      }
       while (inductionVariable_2 < last_2);
    this.t15_1 = destinationIndex;
  };
  IdentityScopeMap.prototype.w16 = function (scope) {
    // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removingScopes' call
    var destinationIndex = 0;
    var inductionVariable = 0;
    var last = this.t15_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var valueIndex = this.q15_1[i];
        var set = ensureNotNull(this.s15_1[valueIndex]);
        // Inline function 'androidx.compose.runtime.collection.IdentityScopeMap.removeScope.<anonymous>' call
        set.j1f(scope);
        if (set.l10_1 > 0) {
          if (!(destinationIndex === i)) {
            var destinationKeyOrder = this.q15_1[destinationIndex];
            this.q15_1[destinationIndex] = valueIndex;
            this.q15_1[i] = destinationKeyOrder;
          }
          var tmp1 = destinationIndex;
          destinationIndex = tmp1 + 1 | 0;
        }
      }
       while (inductionVariable < last);
    var inductionVariable_0 = destinationIndex;
    var last_0 = this.t15_1;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.r15_1[this.q15_1[i_0]] = null;
      }
       while (inductionVariable_0 < last_0);
    this.t15_1 = destinationIndex;
  };
  IdentityScopeMap.$metadata$ = classMeta('IdentityScopeMap');
  function MutableVector(content, size) {
    this.d18_1 = content;
    this.e18_1 = null;
    this.f18_1 = size;
    this.g18_1 = 8;
  }
  MutableVector.prototype.o1f = function () {
    return this.f18_1 - 1 | 0;
  };
  MutableVector.prototype.d15 = function (element) {
    this.p1f(this.f18_1 + 1 | 0);
    this.d18_1[this.f18_1] = element;
    var tmp0_this = this;
    var tmp1 = tmp0_this.f18_1;
    tmp0_this.f18_1 = tmp1 + 1 | 0;
    return true;
  };
  MutableVector.prototype.p1f = function (capacity) {
    var oldContent = this.d18_1;
    if (oldContent.length < capacity) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = imul(oldContent.length, 2);
      tmp$ret$0 = Math.max(capacity, tmp0_max);
      var newSize = tmp$ret$0;
      this.d18_1 = copyOf_0(oldContent, newSize);
    }
  };
  MutableVector.prototype.z2 = function (index) {
    var content = this.d18_1;
    var tmp = content[index];
    var item = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.lastIndex' call
    tmp$ret$0 = this.f18_1 - 1 | 0;
    if (!(index === tmp$ret$0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = index + 1 | 0;
      var tmp1_copyInto = this.f18_1;
      arrayCopy(content, content, index, tmp0_copyInto, tmp1_copyInto);
      tmp$ret$1 = content;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.f18_1;
    tmp0_this.f18_1 = tmp1 - 1 | 0;
    content[this.f18_1] = null;
    return item;
  };
  MutableVector.$metadata$ = classMeta('MutableVector', [RandomAccess]);
  function ImmutableCollection() {
  }
  ImmutableCollection.$metadata$ = interfaceMeta('ImmutableCollection', [Collection]);
  function Builder() {
  }
  Builder.$metadata$ = interfaceMeta('Builder', [MutableCollection]);
  function PersistentCollection() {
  }
  PersistentCollection.$metadata$ = interfaceMeta('PersistentCollection', [ImmutableCollection]);
  function Builder_0() {
  }
  Builder_0.$metadata$ = interfaceMeta('Builder', [MutableList, Builder]);
  function PersistentList() {
  }
  PersistentList.$metadata$ = interfaceMeta('PersistentList', [ImmutableList, PersistentCollection]);
  function ImmutableList() {
  }
  ImmutableList.$metadata$ = interfaceMeta('ImmutableList', [List, ImmutableCollection]);
  function Builder_1() {
  }
  Builder_1.$metadata$ = interfaceMeta('Builder', [MutableMap]);
  function PersistentMap() {
  }
  PersistentMap.$metadata$ = interfaceMeta('PersistentMap', [ImmutableMap]);
  function ImmutableMap() {
  }
  ImmutableMap.$metadata$ = interfaceMeta('ImmutableMap', [Map]);
  function PersistentSet() {
  }
  PersistentSet.$metadata$ = interfaceMeta('PersistentSet', [ImmutableSet, PersistentCollection]);
  function ImmutableSet() {
  }
  ImmutableSet.$metadata$ = interfaceMeta('ImmutableSet', [Set, ImmutableCollection]);
  function persistentHashMapOf() {
    return Companion_getInstance_5().s1f();
  }
  function persistentSetOf() {
    return Companion_getInstance_7().u1f();
  }
  function persistentListOf() {
    return persistentVectorOf();
  }
  function mutate_0(_this__u8e3s4, mutator) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = _this__u8e3s4.hx();
    // Inline function 'kotlin.contracts.contract' call
    mutator(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.ix();
  }
  function SingleElementListIterator(element, index) {
    AbstractListIterator.call(this, index, 1);
    this.x1f_1 = element;
  }
  SingleElementListIterator.prototype.g = function () {
    this.a1g();
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1f_1;
    tmp0_this.y1f_1 = tmp1 + 1 | 0;
    return this.x1f_1;
  };
  SingleElementListIterator.prototype.s = function () {
    this.b1g();
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1f_1;
    tmp0_this.y1f_1 = tmp1 - 1 | 0;
    return this.x1f_1;
  };
  SingleElementListIterator.$metadata$ = classMeta('SingleElementListIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function AbstractListIterator(index, size) {
    this.y1f_1 = index;
    this.z1f_1 = size;
  }
  AbstractListIterator.prototype.f = function () {
    return this.y1f_1 < this.z1f_1;
  };
  AbstractListIterator.prototype.q = function () {
    return this.y1f_1 > 0;
  };
  AbstractListIterator.prototype.r = function () {
    return this.y1f_1;
  };
  AbstractListIterator.prototype.q1 = function () {
    return this.y1f_1 - 1 | 0;
  };
  AbstractListIterator.prototype.a1g = function () {
    if (!this.f())
      throw NoSuchElementException_init_$Create$();
  };
  AbstractListIterator.prototype.b1g = function () {
    if (!this.q())
      throw NoSuchElementException_init_$Create$();
  };
  AbstractListIterator.$metadata$ = classMeta('AbstractListIterator', [ListIterator]);
  function AbstractPersistentList() {
    AbstractList.call(this);
  }
  AbstractPersistentList.prototype.a3 = function (elements) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.hx();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.addAll.<anonymous>' call
    tmp0_apply.a3(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.ix();
    return tmp$ret$1;
  };
  AbstractPersistentList.prototype.y2 = function (element) {
    var index = this.p(element);
    if (!(index === -1)) {
      return this.z2(index);
    }
    return this;
  };
  AbstractPersistentList.prototype.k = function (element) {
    return !(this.p(element) === -1);
  };
  AbstractPersistentList.prototype.j1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.AbstractPersistentList.containsAll.<anonymous>' call
        tmp$ret$1 = this.k(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  AbstractPersistentList.prototype.e = function () {
    return this.c1g();
  };
  AbstractPersistentList.prototype.c1g = function () {
    return this.l(0);
  };
  AbstractPersistentList.$metadata$ = classMeta('AbstractPersistentList', [PersistentList], undefined, undefined, undefined, AbstractList.prototype);
  function BufferIterator(buffer, index, size) {
    AbstractListIterator.call(this, index, size);
    this.f1g_1 = buffer;
  }
  BufferIterator.prototype.g = function () {
    if (!this.f()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.y1f_1;
    tmp0_this.y1f_1 = tmp1 + 1 | 0;
    return this.f1g_1[tmp1];
  };
  BufferIterator.prototype.s = function () {
    if (!this.q()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.y1f_1 = tmp0_this.y1f_1 - 1 | 0;
    return this.f1g_1[tmp0_this.y1f_1];
  };
  BufferIterator.$metadata$ = classMeta('BufferIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function rootSize($this) {
    return rootSize_1($this.i1g_1);
  }
  function pushFilledTail($this, root, filledTail, newTail) {
    if ($this.i1g_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.j1g_1) {
      var newRoot = presizedBufferWith(root);
      var newRootShift = $this.j1g_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      newRoot = pushTail($this, newRoot, newRootShift, filledTail);
      return new PersistentVector(newRoot, newTail, $this.i1g_1 + 1 | 0, newRootShift);
    }
    var newRoot_0 = pushTail($this, root, $this.j1g_1, filledTail);
    return new PersistentVector(newRoot_0, newTail, $this.i1g_1 + 1 | 0, $this.j1g_1);
  }
  function pushTail($this, root, shift, tail) {
    var bufferIndex = indexSegment($this.i1g_1 - 1 | 0, shift);
    var tmp0_safe_receiver = root;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copyOf_0(tmp0_safe_receiver, get_MAX_BUFFER_SIZE());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var newRootNode = tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      newRootNode[bufferIndex] = tail;
    } else {
      var tmp_0 = newRootNode[bufferIndex];
      newRootNode[bufferIndex] = pushTail($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, tail);
    }
    return newRootNode;
  }
  function insertIntoTail($this, root, tailIndex, element) {
    var tailSize = $this.i1g_1 - rootSize($this) | 0;
    var newTail = copyOf_0($this.h1g_1, get_MAX_BUFFER_SIZE());
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.h1g_1;
      var tmp1_copyInto = tailIndex + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, tmp1_copyInto, tailIndex, tailSize);
      tmp$ret$0 = newTail;
      newTail[tailIndex] = element;
      return new PersistentVector(root, newTail, $this.i1g_1 + 1 | 0, $this.j1g_1);
    }
    var lastElement = $this.h1g_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.h1g_1;
    var tmp3_copyInto = tailIndex + 1 | 0;
    var tmp4_copyInto = tailSize - 1 | 0;
    arrayCopy(tmp2_copyInto, newTail, tmp3_copyInto, tailIndex, tmp4_copyInto);
    tmp$ret$1 = newTail;
    newTail[tailIndex] = element;
    return pushFilledTail($this, root, newTail, presizedBufferWith(lastElement));
  }
  function insertIntoRoot($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, newRoot, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      elementCarry.k1g_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      newRoot[bufferIndex] = element;
      return newRoot;
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp_0 = root[bufferIndex];
    newRoot_0[bufferIndex] = insertIntoRoot($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (newRoot_0[i] == null)
          break $l$loop;
        var tmp_1 = root[i];
        newRoot_0[i] = insertIntoRoot($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, 0, elementCarry.k1g_1, elementCarry);
      }
       while (inductionVariable < last);
    return newRoot_0;
  }
  function removeFromTailAt($this, root, rootSize, shift, index) {
    var tailSize = $this.i1g_1 - rootSize | 0;
    assert(index < tailSize);
    if (tailSize === 1) {
      return pullLastBufferFromRoot($this, root, rootSize, shift);
    }
    var newTail = copyOf_0($this.h1g_1, get_MAX_BUFFER_SIZE());
    if (index < (tailSize - 1 | 0)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.h1g_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, newTail, index, tmp1_copyInto, tailSize);
      tmp$ret$0 = newTail;
    }
    newTail[tailSize - 1 | 0] = null;
    return new PersistentVector(root, newTail, (rootSize + tailSize | 0) - 1 | 0, shift);
  }
  function pullLastBufferFromRoot($this, root, rootSize, shift) {
    if (shift === 0) {
      var buffer = root.length === get_MUTABLE_BUFFER_SIZE() ? copyOf_0(root, get_MAX_BUFFER_SIZE()) : root;
      return new SmallPersistentVector(buffer);
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer($this, root, shift, rootSize - 1 | 0, tailCarry));
    var tmp = tailCarry.k1g_1;
    var newTail = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    if (newRoot[1] == null) {
      var tmp_0 = newRoot[0];
      var lowerLevelRoot = (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE();
      return new PersistentVector(lowerLevelRoot, newTail, rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return new PersistentVector(newRoot, newTail, rootSize, shift);
  }
  function pullLastBuffer($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.k1g_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    newRoot[bufferIndex] = newBufferAtIndex;
    return newRoot;
  }
  function removeFromRootAt($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var tmp;
      if (bufferIndex === 0) {
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp0_arrayOfNulls = get_MAX_BUFFER_SIZE();
        tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp = tmp$ret$0;
      } else {
        tmp = copyOf_0(root, get_MAX_BUFFER_SIZE());
      }
      var newRoot = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, newRoot, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$1 = newRoot;
      newRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.k1g_1;
      tailCarry.k1g_1 = root[bufferIndex];
      return newRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize($this) - 1 | 0, shift);
    }
    var newRoot_0 = copyOf_0(root, get_MAX_BUFFER_SIZE());
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0 = newRoot_0[i];
        newRoot_0[i] = removeFromRootAt($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_1 = newRoot_0[bufferIndex];
    newRoot_0[bufferIndex] = removeFromRootAt($this, (!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return newRoot_0;
  }
  function bufferFor($this, index) {
    if (rootSize($this) <= index) {
      return $this.h1g_1;
    }
    var buffer = $this.g1g_1;
    var shift = $this.j1g_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function setInRoot($this, root, shift, index, e) {
    var bufferIndex = indexSegment(index, shift);
    var newRoot = copyOf_0(root, get_MAX_BUFFER_SIZE());
    if (shift === 0) {
      newRoot[bufferIndex] = e;
    } else {
      var tmp = newRoot[bufferIndex];
      newRoot[bufferIndex] = setInRoot($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e);
    }
    return newRoot;
  }
  function PersistentVector(root, tail, size, rootShift) {
    AbstractPersistentList.call(this);
    this.g1g_1 = root;
    this.h1g_1 = tail;
    this.i1g_1 = size;
    this.j1g_1 = rootShift;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.i1g_1 > get_MAX_BUFFER_SIZE();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.PersistentVector.<anonymous>' call
      tmp$ret$0 = 'Trie-based persistent vector should have at least ' + (get_MAX_BUFFER_SIZE() + 1 | 0) + ' elements, got ' + this.i1g_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    assert((this.i1g_1 - rootSize_1(this.i1g_1) | 0) <= coerceAtMost(this.h1g_1.length, get_MAX_BUFFER_SIZE()));
  }
  PersistentVector.prototype.h = function () {
    return this.i1g_1;
  };
  PersistentVector.prototype.a = function (element) {
    var tailSize = this.i1g_1 - rootSize(this) | 0;
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var newTail = copyOf_0(this.h1g_1, get_MAX_BUFFER_SIZE());
      newTail[tailSize] = element;
      return new PersistentVector(this.g1g_1, newTail, this.i1g_1 + 1 | 0, this.j1g_1);
    }
    var newTail_0 = presizedBufferWith(element);
    return pushFilledTail(this, this.g1g_1, this.h1g_1, newTail_0);
  };
  PersistentVector.prototype.q1f = function (index, element) {
    ListImplementation_getInstance().p1(index, this.i1g_1);
    if (index === this.i1g_1) {
      return this.a(element);
    }
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return insertIntoTail(this, this.g1g_1, index - rootSize_0 | 0, element);
    }
    var elementCarry = new ObjectRef(null);
    var newRoot = insertIntoRoot(this, this.g1g_1, this.j1g_1, index, element, elementCarry);
    return insertIntoTail(this, newRoot, 0, elementCarry.k1g_1);
  };
  PersistentVector.prototype.z2 = function (index) {
    ListImplementation_getInstance().r1(index, this.i1g_1);
    var rootSize_0 = rootSize(this);
    if (index >= rootSize_0) {
      return removeFromTailAt(this, this.g1g_1, rootSize_0, this.j1g_1, index - rootSize_0 | 0);
    }
    var newRoot = removeFromRootAt(this, this.g1g_1, this.j1g_1, index, new ObjectRef(this.h1g_1[0]));
    return removeFromTailAt(this, newRoot, rootSize_0, this.j1g_1, 0);
  };
  PersistentVector.prototype.hx = function () {
    return new PersistentVectorBuilder(this, this.g1g_1, this.h1g_1, this.j1g_1);
  };
  PersistentVector.prototype.l = function (index) {
    ListImplementation_getInstance().p1(index, this.i1g_1);
    var tmp = this.h1g_1;
    return new PersistentVectorIterator(this.g1g_1, isArray(tmp) ? tmp : THROW_CCE(), index, this.i1g_1, (this.j1g_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0);
  };
  PersistentVector.prototype.i = function (index) {
    ListImplementation_getInstance().r1(index, this.i1g_1);
    var buffer = bufferFor(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVector.prototype.q5 = function (index, element) {
    ListImplementation_getInstance().r1(index, this.i1g_1);
    if (rootSize(this) <= index) {
      var newTail = copyOf_0(this.h1g_1, get_MAX_BUFFER_SIZE());
      newTail[index & get_MAX_BUFFER_SIZE_MINUS_ONE()] = element;
      return new PersistentVector(this.g1g_1, newTail, this.i1g_1, this.j1g_1);
    }
    var newRoot = setInRoot(this, this.g1g_1, this.j1g_1, index, element);
    return new PersistentVector(newRoot, this.h1g_1, this.i1g_1, this.j1g_1);
  };
  PersistentVector.$metadata$ = classMeta('PersistentVector', [PersistentList], undefined, undefined, undefined, AbstractPersistentList.prototype);
  function rootSize_0($this) {
    if ($this.t1g_1 <= get_MAX_BUFFER_SIZE()) {
      return 0;
    }
    return rootSize_1($this.t1g_1);
  }
  function tailSize($this, size) {
    if (size <= get_MAX_BUFFER_SIZE()) {
      return size;
    }
    return size - rootSize_1(size) | 0;
  }
  function tailSize_0($this) {
    return tailSize($this, $this.t1g_1);
  }
  function isMutable($this, buffer) {
    return buffer.length === get_MUTABLE_BUFFER_SIZE() ? buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] === $this.q1g_1 : false;
  }
  function makeMutable($this, buffer) {
    if (buffer == null) {
      return mutableBuffer($this);
    }
    if (isMutable($this, buffer)) {
      return buffer;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = mutableBuffer($this);
    var tmp1_copyInto = coerceAtMost(buffer.length, get_MAX_BUFFER_SIZE());
    arrayCopy(buffer, tmp0_copyInto, 0, 0, tmp1_copyInto);
    tmp$ret$0 = tmp0_copyInto;
    return tmp$ret$0;
  }
  function makeMutableShiftingRight($this, buffer, distance) {
    if (isMutable($this, buffer)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = get_MAX_BUFFER_SIZE() - distance | 0;
      arrayCopy(buffer, buffer, distance, 0, tmp0_copyInto);
      tmp$ret$0 = buffer;
      return tmp$ret$0;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = mutableBuffer($this);
    var tmp2_copyInto = get_MAX_BUFFER_SIZE() - distance | 0;
    arrayCopy(buffer, tmp1_copyInto, distance, 0, tmp2_copyInto);
    tmp$ret$1 = tmp1_copyInto;
    return tmp$ret$1;
  }
  function mutableBufferWith($this, element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.q1g_1;
    return buffer;
  }
  function mutableBuffer($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = get_MUTABLE_BUFFER_SIZE();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[get_MUTABLE_BUFFER_SIZE() - 1 | 0] = $this.q1g_1;
    return buffer;
  }
  function pushFilledTail_0($this, root, filledTail, newTail) {
    var tmp;
    if ($this.t1g_1 >> get_LOG_MAX_BUFFER_SIZE() > 1 << $this.p1g_1) {
      $this.r1g_1 = pushTail_0($this, mutableBufferWith($this, root), filledTail, $this.p1g_1 + get_LOG_MAX_BUFFER_SIZE() | 0);
      $this.s1g_1 = newTail;
      var tmp0_this = $this;
      tmp0_this.p1g_1 = tmp0_this.p1g_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      var tmp1_this = $this;
      tmp1_this.t1g_1 = tmp1_this.t1g_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else if (root == null) {
      $this.r1g_1 = filledTail;
      $this.s1g_1 = newTail;
      var tmp2_this = $this;
      tmp2_this.t1g_1 = tmp2_this.t1g_1 + 1 | 0;
      tmp = Unit_getInstance();
    } else {
      $this.r1g_1 = pushTail_0($this, root, filledTail, $this.p1g_1);
      $this.s1g_1 = newTail;
      var tmp3_this = $this;
      tmp3_this.t1g_1 = tmp3_this.t1g_1 + 1 | 0;
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function pushTail_0($this, root, tail, shift) {
    var index = indexSegment($this.t1g_1 - 1 | 0, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      mutableRoot[index] = tail;
    } else {
      var tmp = mutableRoot[index];
      mutableRoot[index] = pushTail_0($this, (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE(), tail, shift - get_LOG_MAX_BUFFER_SIZE() | 0);
    }
    return mutableRoot;
  }
  function copyToBuffer($this, buffer, bufferIndex, sourceIterator) {
    var index = bufferIndex;
    while (index < get_MAX_BUFFER_SIZE() ? sourceIterator.f() : false) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      buffer[tmp0] = sourceIterator.g();
    }
    return buffer;
  }
  function pushBuffersIncreasingHeightIfNeeded($this, root, rootSize, buffers) {
    var buffersIterator = arrayIterator(buffers);
    var mutableRoot = rootSize >> get_LOG_MAX_BUFFER_SIZE() < 1 << $this.p1g_1 ? pushBuffers($this, root, rootSize, $this.p1g_1, buffersIterator) : makeMutable($this, root);
    while (buffersIterator.f()) {
      var tmp0_this = $this;
      tmp0_this.p1g_1 = tmp0_this.p1g_1 + get_LOG_MAX_BUFFER_SIZE() | 0;
      mutableRoot = mutableBufferWith($this, mutableRoot);
      pushBuffers($this, mutableRoot, 1 << $this.p1g_1, $this.p1g_1, buffersIterator);
    }
    return mutableRoot;
  }
  function pushBuffers($this, root, rootSize, shift, buffersIterator) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffersIterator.f();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp1_check = shift >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (shift === 0) {
      return buffersIterator.g();
    }
    var mutableRoot = makeMutable($this, root);
    var index = indexSegment(rootSize, shift);
    var tmp = index;
    var tmp_0 = mutableRoot[index];
    mutableRoot[tmp] = pushBuffers($this, (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE(), rootSize, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    $l$loop: while (true) {
      var tmp_1;
      index = index + 1 | 0;
      if (index < get_MAX_BUFFER_SIZE()) {
        tmp_1 = buffersIterator.f();
      } else {
        tmp_1 = false;
      }
      if (!tmp_1) {
        break $l$loop;
      }
      var tmp_2 = index;
      var tmp_3 = mutableRoot[index];
      mutableRoot[tmp_2] = pushBuffers($this, (tmp_3 == null ? true : isArray(tmp_3)) ? tmp_3 : THROW_CCE(), 0, shift - get_LOG_MAX_BUFFER_SIZE() | 0, buffersIterator);
    }
    return mutableRoot;
  }
  function insertIntoTail_0($this, root, index, element) {
    var tailSize = tailSize_0($this);
    var mutableTail = makeMutable($this, $this.s1g_1);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.s1g_1;
      var tmp1_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, mutableTail, tmp1_copyInto, index, tailSize);
      tmp$ret$0 = mutableTail;
      mutableTail[index] = element;
      $this.r1g_1 = root;
      $this.s1g_1 = mutableTail;
      var tmp0_this = $this;
      tmp0_this.t1g_1 = tmp0_this.t1g_1 + 1 | 0;
    } else {
      var lastElement = $this.s1g_1[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp2_copyInto = $this.s1g_1;
      var tmp3_copyInto = index + 1 | 0;
      var tmp4_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(tmp2_copyInto, mutableTail, tmp3_copyInto, index, tmp4_copyInto);
      tmp$ret$1 = mutableTail;
      mutableTail[index] = element;
      pushFilledTail_0($this, root, mutableTail, mutableBufferWith($this, lastElement));
    }
  }
  function insertIntoRoot_0($this, root, shift, index, element, elementCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      elementCarry.k1g_1 = root[get_MAX_BUFFER_SIZE_MINUS_ONE()];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE_MINUS_ONE();
      arrayCopy(root, tmp0_copyInto, tmp1_copyInto, bufferIndex, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[bufferIndex] = element;
      return mutableRoot;
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var tmp = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = insertIntoRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, index, element, elementCarry);
    var inductionVariable = bufferIndex + 1 | 0;
    var last = get_MAX_BUFFER_SIZE();
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (mutableRoot_0[i] == null)
          break $l$loop;
        var tmp_0 = mutableRoot_0[i];
        mutableRoot_0[i] = insertIntoRoot_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, 0, elementCarry.k1g_1, elementCarry);
      }
       while (inductionVariable < last);
    return mutableRoot_0;
  }
  function insertIntoRoot_1($this, elements, index, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp$ret$2;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.r1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var startLeafIndex = index >> get_LOG_MAX_BUFFER_SIZE();
    var startLeaf = shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer);
    var lastLeafIndex = (rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE()) - 1 | 0;
    var newNullBuffers = nullBuffers - (lastLeafIndex - startLeafIndex | 0) | 0;
    var newNextBuffer = newNullBuffers < nullBuffers ? ensureNotNull(buffers[newNullBuffers]) : nextBuffer;
    splitToBuffers($this, elements, index, startLeaf, get_MAX_BUFFER_SIZE(), buffers, newNullBuffers, newNextBuffer);
  }
  function shiftLeafBuffers($this, startLeafIndex, rightShift, buffers, nullBuffers, nextBuffer) {
    var tmp$ret$2;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.r1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    var leafBufferIterator_0 = leafBufferIterator($this, leafCount);
    var bufferIndex = nullBuffers;
    var buffer = nextBuffer;
    while (!(leafBufferIterator_0.q1() === startLeafIndex)) {
      var currentBuffer = leafBufferIterator_0.s();
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = buffer;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE() - rightShift | 0;
      var tmp3_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(currentBuffer, tmp1_copyInto, 0, tmp2_copyInto, tmp3_copyInto);
      tmp$ret$3 = tmp1_copyInto;
      buffer = makeMutableShiftingRight($this, currentBuffer, rightShift);
      bufferIndex = bufferIndex - 1 | 0;
      buffers[bufferIndex] = buffer;
    }
    return leafBufferIterator_0.s();
  }
  function splitToBuffers($this, elements, index, startBuffer, startBufferSize, buffers, nullBuffers, nextBuffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = nullBuffers >= 1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var firstBuffer = makeMutable($this, startBuffer);
    buffers[0] = firstBuffer;
    var newNextBuffer = nextBuffer;
    var newNullBuffers = nullBuffers;
    var startBufferStartIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var endBufferEndIndex = ((index + elements.h() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var elementsToShift = startBufferSize - startBufferStartIndex | 0;
    if ((endBufferEndIndex + elementsToShift | 0) < get_MAX_BUFFER_SIZE()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = newNextBuffer;
      var tmp2_copyInto = endBufferEndIndex + 1 | 0;
      arrayCopy(firstBuffer, tmp1_copyInto, tmp2_copyInto, startBufferStartIndex, startBufferSize);
      tmp$ret$1 = tmp1_copyInto;
    } else {
      var toCopyToLast = ((endBufferEndIndex + elementsToShift | 0) - get_MAX_BUFFER_SIZE() | 0) + 1 | 0;
      if (nullBuffers === 1) {
        newNextBuffer = firstBuffer;
      } else {
        newNextBuffer = mutableBuffer($this);
        newNullBuffers = newNullBuffers - 1 | 0;
        buffers[newNullBuffers] = newNextBuffer;
      }
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp3_copyInto = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, nextBuffer, 0, tmp3_copyInto, startBufferSize);
      tmp$ret$2 = nextBuffer;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = newNextBuffer;
      var tmp5_copyInto = endBufferEndIndex + 1 | 0;
      var tmp6_copyInto = startBufferSize - toCopyToLast | 0;
      arrayCopy(firstBuffer, tmp4_copyInto, tmp5_copyInto, startBufferStartIndex, tmp6_copyInto);
      tmp$ret$3 = tmp4_copyInto;
    }
    var elementsIterator = elements.e();
    copyToBuffer($this, firstBuffer, startBufferStartIndex, elementsIterator);
    var inductionVariable = 1;
    var last = newNullBuffers;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        buffers[i] = copyToBuffer($this, mutableBuffer($this), 0, elementsIterator);
      }
       while (inductionVariable < last);
    copyToBuffer($this, newNextBuffer, 0, elementsIterator);
  }
  function bufferFor_0($this, index) {
    if (rootSize_0($this) <= index) {
      return $this.s1g_1;
    }
    var buffer = ensureNotNull($this.r1g_1);
    var shift = $this.p1g_1;
    while (shift > 0) {
      var tmp = buffer[indexSegment(index, shift)];
      buffer = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    return buffer;
  }
  function removeFromTailAt_0($this, root, rootSize, shift, index) {
    var tailSize = $this.t1g_1 - rootSize | 0;
    assert(index < tailSize);
    var removedElement;
    if (tailSize === 1) {
      removedElement = $this.s1g_1[0];
      pullLastBufferFromRoot_0($this, root, rootSize, shift);
    } else {
      removedElement = $this.s1g_1[index];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.s1g_1;
      var tmp1_copyInto = makeMutable($this, $this.s1g_1);
      var tmp2_copyInto = index + 1 | 0;
      arrayCopy(tmp0_copyInto, tmp1_copyInto, index, tmp2_copyInto, tailSize);
      tmp$ret$0 = tmp1_copyInto;
      var mutableTail = tmp$ret$0;
      mutableTail[tailSize - 1 | 0] = null;
      $this.r1g_1 = root;
      $this.s1g_1 = mutableTail;
      $this.t1g_1 = (rootSize + tailSize | 0) - 1 | 0;
      $this.p1g_1 = shift;
    }
    return removedElement;
  }
  function removeFromRootAt_0($this, root, shift, index, tailCarry) {
    var bufferIndex = indexSegment(index, shift);
    if (shift === 0) {
      var removedElement = root[bufferIndex];
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = makeMutable($this, root);
      var tmp1_copyInto = bufferIndex + 1 | 0;
      var tmp2_copyInto = get_MAX_BUFFER_SIZE();
      arrayCopy(root, tmp0_copyInto, bufferIndex, tmp1_copyInto, tmp2_copyInto);
      tmp$ret$0 = tmp0_copyInto;
      var mutableRoot = tmp$ret$0;
      mutableRoot[get_MAX_BUFFER_SIZE() - 1 | 0] = tailCarry.k1g_1;
      tailCarry.k1g_1 = removedElement;
      return mutableRoot;
    }
    var bufferLastIndex = get_MAX_BUFFER_SIZE_MINUS_ONE();
    if (root[bufferLastIndex] == null) {
      bufferLastIndex = indexSegment(rootSize_0($this) - 1 | 0, shift);
    }
    var mutableRoot_0 = makeMutable($this, root);
    var lowerLevelShift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    var inductionVariable = bufferLastIndex;
    var last = bufferIndex + 1 | 0;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp = mutableRoot_0[i];
        mutableRoot_0[i] = removeFromRootAt_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), lowerLevelShift, 0, tailCarry);
      }
       while (!(i === last));
    var tmp_0 = mutableRoot_0[bufferIndex];
    mutableRoot_0[bufferIndex] = removeFromRootAt_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), lowerLevelShift, index, tailCarry);
    return mutableRoot_0;
  }
  function pullLastBufferFromRoot_0($this, root, rootSize, shift) {
    if (shift === 0) {
      $this.r1g_1 = null;
      var tmp = $this;
      var tmp0_elvis_lhs = root;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.emptyArray' call
        tmp$ret$0 = [];
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp.s1g_1 = tmp_0;
      $this.t1g_1 = rootSize;
      $this.p1g_1 = shift;
      return Unit_getInstance();
    }
    var tailCarry = new ObjectRef(null);
    var newRoot = ensureNotNull(pullLastBuffer_0($this, ensureNotNull(root), shift, rootSize, tailCarry));
    var tmp_1 = $this;
    var tmp_2 = tailCarry.k1g_1;
    tmp_1.s1g_1 = (!(tmp_2 == null) ? isArray(tmp_2) : false) ? tmp_2 : THROW_CCE();
    $this.t1g_1 = rootSize;
    if (newRoot[1] == null) {
      var tmp_3 = $this;
      var tmp_4 = newRoot[0];
      tmp_3.r1g_1 = (tmp_4 == null ? true : isArray(tmp_4)) ? tmp_4 : THROW_CCE();
      $this.p1g_1 = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
    } else {
      $this.r1g_1 = newRoot;
      $this.p1g_1 = shift;
    }
  }
  function pullLastBuffer_0($this, root, shift, rootSize, tailCarry) {
    var bufferIndex = indexSegment(rootSize - 1 | 0, shift);
    var tmp;
    if (shift === get_LOG_MAX_BUFFER_SIZE()) {
      tailCarry.k1g_1 = root[bufferIndex];
      tmp = null;
    } else {
      var tmp_0 = root[bufferIndex];
      tmp = pullLastBuffer_0($this, (!(tmp_0 == null) ? isArray(tmp_0) : false) ? tmp_0 : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, rootSize, tailCarry);
    }
    var newBufferAtIndex = tmp;
    if (newBufferAtIndex == null ? bufferIndex === 0 : false) {
      return null;
    }
    var mutableRoot = makeMutable($this, root);
    mutableRoot[bufferIndex] = newBufferAtIndex;
    return mutableRoot;
  }
  function setInRoot_0($this, root, shift, index, e, oldElementCarry) {
    var bufferIndex = indexSegment(index, shift);
    var mutableRoot = makeMutable($this, root);
    if (shift === 0) {
      if (!(mutableRoot === root)) {
        var tmp0_this = $this;
        var tmp1 = tmp0_this.x5_1;
        tmp0_this.x5_1 = tmp1 + 1 | 0;
      }
      oldElementCarry.k1g_1 = mutableRoot[bufferIndex];
      mutableRoot[bufferIndex] = e;
      return mutableRoot;
    }
    var tmp = mutableRoot[bufferIndex];
    mutableRoot[bufferIndex] = setInRoot_0($this, (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), shift - get_LOG_MAX_BUFFER_SIZE() | 0, index, e, oldElementCarry);
    return mutableRoot;
  }
  function leafBufferIterator($this, index) {
    var tmp$ret$2;
    // Inline function 'kotlin.checkNotNull' call
    var tmp0_checkNotNull = $this.r1g_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_checkNotNull == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.checkNotNull.<anonymous>' call
        tmp$ret$0 = 'Required value was null.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_checkNotNull;
        break $l$block;
      }
    }
    tmp$ret$2 = tmp$ret$1;
    var leafCount = rootSize_0($this) >> get_LOG_MAX_BUFFER_SIZE();
    ListImplementation_getInstance().p1(index, leafCount);
    if ($this.p1g_1 === 0) {
      return new SingleElementListIterator(ensureNotNull($this.r1g_1), index);
    }
    var trieHeight = $this.p1g_1 / get_LOG_MAX_BUFFER_SIZE() | 0;
    return new TrieIterator(ensureNotNull($this.r1g_1), index, leafCount, trieHeight);
  }
  function PersistentVectorBuilder(vector, vectorRoot, vectorTail, rootShift) {
    AbstractMutableList.call(this);
    this.m1g_1 = vector;
    this.n1g_1 = vectorRoot;
    this.o1g_1 = vectorTail;
    this.p1g_1 = rootShift;
    this.q1g_1 = new MutabilityOwnership();
    this.r1g_1 = this.n1g_1;
    this.s1g_1 = this.o1g_1;
    this.t1g_1 = this.m1g_1.h();
  }
  PersistentVectorBuilder.prototype.h = function () {
    return this.t1g_1;
  };
  PersistentVectorBuilder.prototype.u1g = function () {
    return this.x5_1;
  };
  PersistentVectorBuilder.prototype.ix = function () {
    var tmp = this;
    var tmp_0;
    if (this.r1g_1 === this.n1g_1 ? this.s1g_1 === this.o1g_1 : false) {
      tmp_0 = this.m1g_1;
    } else {
      this.q1g_1 = new MutabilityOwnership();
      this.n1g_1 = this.r1g_1;
      this.o1g_1 = this.s1g_1;
      var tmp_1;
      if (this.r1g_1 == null) {
        var tmp_2;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isEmpty' call
        var tmp0_isEmpty = this.s1g_1;
        tmp$ret$0 = tmp0_isEmpty.length === 0;
        if (tmp$ret$0) {
          tmp_2 = persistentVectorOf();
        } else {
          tmp_2 = new SmallPersistentVector(copyOf_0(this.s1g_1, this.t1g_1));
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = new PersistentVector(ensureNotNull(this.r1g_1), this.s1g_1, this.t1g_1, this.p1g_1);
      }
      tmp_0 = tmp_1;
    }
    tmp.m1g_1 = tmp_0;
    return this.m1g_1;
  };
  PersistentVectorBuilder.prototype.a = function (element) {
    var tmp0_this = this;
    tmp0_this.x5_1 = tmp0_this.x5_1 + 1 | 0;
    var tailSize = tailSize_0(this);
    if (tailSize < get_MAX_BUFFER_SIZE()) {
      var mutableTail = makeMutable(this, this.s1g_1);
      mutableTail[tailSize] = element;
      this.s1g_1 = mutableTail;
      var tmp1_this = this;
      tmp1_this.t1g_1 = tmp1_this.t1g_1 + 1 | 0;
    } else {
      var newTail = mutableBufferWith(this, element);
      pushFilledTail_0(this, this.r1g_1, this.s1g_1, newTail);
    }
    return true;
  };
  PersistentVectorBuilder.prototype.a3 = function (elements) {
    if (elements.j()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.x5_1;
    tmp0_this.x5_1 = tmp1 + 1 | 0;
    var tailSize = tailSize_0(this);
    var elementsIterator = elements.e();
    if ((get_MAX_BUFFER_SIZE() - tailSize | 0) >= elements.h()) {
      this.s1g_1 = copyToBuffer(this, makeMutable(this, this.s1g_1), tailSize, elementsIterator);
      var tmp2_this = this;
      tmp2_this.t1g_1 = tmp2_this.t1g_1 + elements.h() | 0;
    } else {
      var buffersSize = ((elements.h() + tailSize | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(buffersSize), null);
      var buffers = tmp$ret$0;
      buffers[0] = copyToBuffer(this, makeMutable(this, this.s1g_1), tailSize, elementsIterator);
      var inductionVariable = 1;
      if (inductionVariable < buffersSize)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffers[index] = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
        }
         while (inductionVariable < buffersSize);
      var tmp = this;
      var tmp_0 = this.r1g_1;
      var tmp_1 = rootSize_0(this);
      tmp.r1g_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, tmp_1, isArray(buffers) ? buffers : THROW_CCE());
      this.s1g_1 = copyToBuffer(this, mutableBuffer(this), 0, elementsIterator);
      var tmp4_this = this;
      tmp4_this.t1g_1 = tmp4_this.t1g_1 + elements.h() | 0;
    }
    return true;
  };
  PersistentVectorBuilder.prototype.g6 = function (index, element) {
    ListImplementation_getInstance().p1(index, this.t1g_1);
    if (index === this.t1g_1) {
      this.a(element);
      return Unit_getInstance();
    }
    var tmp0_this = this;
    tmp0_this.x5_1 = tmp0_this.x5_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      insertIntoTail_0(this, this.r1g_1, index - rootSize | 0, element);
      return Unit_getInstance();
    }
    var elementCarry = new ObjectRef(null);
    var newRest = insertIntoRoot_0(this, ensureNotNull(this.r1g_1), this.p1g_1, index, element, elementCarry);
    var tmp = elementCarry.k1g_1;
    insertIntoTail_0(this, newRest, 0, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
  };
  PersistentVectorBuilder.prototype.h6 = function (index, elements) {
    ListImplementation_getInstance().p1(index, this.t1g_1);
    if (index === this.t1g_1) {
      return this.a3(elements);
    }
    if (elements.j()) {
      return false;
    }
    var tmp0_this = this;
    var tmp1 = tmp0_this.x5_1;
    tmp0_this.x5_1 = tmp1 + 1 | 0;
    var unaffectedElementsCount = index >> get_LOG_MAX_BUFFER_SIZE() << get_LOG_MAX_BUFFER_SIZE();
    var buffersSize = (((this.t1g_1 - unaffectedElementsCount | 0) + elements.h() | 0) - 1 | 0) / get_MAX_BUFFER_SIZE() | 0;
    if (buffersSize === 0) {
      assert(index >= rootSize_0(this));
      var startIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var endIndex = ((index + elements.h() | 0) - 1 | 0) & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.s1g_1;
      var tmp1_copyInto = makeMutable(this, this.s1g_1);
      var tmp2_copyInto = endIndex + 1 | 0;
      var tmp3_copyInto = tailSize_0(this);
      arrayCopy(tmp0_copyInto, tmp1_copyInto, tmp2_copyInto, startIndex, tmp3_copyInto);
      tmp$ret$0 = tmp1_copyInto;
      var newTail = tmp$ret$0;
      copyToBuffer(this, newTail, startIndex, elements.e());
      this.s1g_1 = newTail;
      var tmp2_this = this;
      tmp2_this.t1g_1 = tmp2_this.t1g_1 + elements.h() | 0;
      return true;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(buffersSize), null);
    var buffers = tmp$ret$1;
    var tailSize_1 = tailSize_0(this);
    var newTailSize = tailSize(this, this.t1g_1 + elements.h() | 0);
    var newTail_0;
    if (index >= rootSize_0(this)) {
      newTail_0 = mutableBuffer(this);
      splitToBuffers(this, elements, index, this.s1g_1, tailSize_1, buffers, buffersSize, newTail_0);
    } else if (newTailSize > tailSize_1) {
      var rightShift = newTailSize - tailSize_1 | 0;
      newTail_0 = makeMutableShiftingRight(this, this.s1g_1, rightShift);
      insertIntoRoot_1(this, elements, index, rightShift, buffers, buffersSize, newTail_0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp4_copyInto = this.s1g_1;
      var tmp5_copyInto = mutableBuffer(this);
      var tmp6_copyInto = tailSize_1 - newTailSize | 0;
      arrayCopy(tmp4_copyInto, tmp5_copyInto, 0, tmp6_copyInto, tailSize_1);
      tmp$ret$2 = tmp5_copyInto;
      newTail_0 = tmp$ret$2;
      var rightShift_0 = get_MAX_BUFFER_SIZE() - (tailSize_1 - newTailSize | 0) | 0;
      var lastBuffer = makeMutableShiftingRight(this, this.s1g_1, rightShift_0);
      buffers[buffersSize - 1 | 0] = lastBuffer;
      insertIntoRoot_1(this, elements, index, rightShift_0, buffers, buffersSize - 1 | 0, lastBuffer);
    }
    var tmp = this;
    var tmp_0 = this.r1g_1;
    tmp.r1g_1 = pushBuffersIncreasingHeightIfNeeded(this, tmp_0, unaffectedElementsCount, isArray(buffers) ? buffers : THROW_CCE());
    this.s1g_1 = newTail_0;
    var tmp3_this = this;
    tmp3_this.t1g_1 = tmp3_this.t1g_1 + elements.h() | 0;
    return true;
  };
  PersistentVectorBuilder.prototype.i = function (index) {
    ListImplementation_getInstance().r1(index, this.t1g_1);
    var buffer = bufferFor_0(this, index);
    var tmp = buffer[index & get_MAX_BUFFER_SIZE_MINUS_ONE()];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.z2 = function (index) {
    ListImplementation_getInstance().r1(index, this.t1g_1);
    var tmp0_this = this;
    tmp0_this.x5_1 = tmp0_this.x5_1 + 1 | 0;
    var rootSize = rootSize_0(this);
    if (index >= rootSize) {
      var tmp = removeFromTailAt_0(this, this.r1g_1, rootSize, this.p1g_1, index - rootSize | 0);
      return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    }
    var elementCarry = new ObjectRef(this.s1g_1[0]);
    var newRoot = removeFromRootAt_0(this, ensureNotNull(this.r1g_1), this.p1g_1, index, elementCarry);
    removeFromTailAt_0(this, newRoot, rootSize, this.p1g_1, 0);
    var tmp_0 = elementCarry.k1g_1;
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.q5 = function (index, element) {
    ListImplementation_getInstance().r1(index, this.t1g_1);
    if (rootSize_0(this) <= index) {
      var mutableTail = makeMutable(this, this.s1g_1);
      if (!(mutableTail === this.s1g_1)) {
        var tmp0_this = this;
        var tmp1 = tmp0_this.x5_1;
        tmp0_this.x5_1 = tmp1 + 1 | 0;
      }
      var tailIndex = index & get_MAX_BUFFER_SIZE_MINUS_ONE();
      var oldElement = mutableTail[tailIndex];
      mutableTail[tailIndex] = element;
      this.s1g_1 = mutableTail;
      return (oldElement == null ? true : isObject(oldElement)) ? oldElement : THROW_CCE();
    }
    var oldElementCarry = new ObjectRef(null);
    this.r1g_1 = setInRoot_0(this, ensureNotNull(this.r1g_1), this.p1g_1, index, element, oldElementCarry);
    var tmp = oldElementCarry.k1g_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  PersistentVectorBuilder.prototype.e = function () {
    return this.c1g();
  };
  PersistentVectorBuilder.prototype.c1g = function () {
    return this.l(0);
  };
  PersistentVectorBuilder.prototype.l = function (index) {
    ListImplementation_getInstance().p1(index, this.t1g_1);
    return new PersistentVectorMutableIterator(this, index);
  };
  PersistentVectorBuilder.$metadata$ = classMeta('PersistentVectorBuilder', [Builder_0], undefined, undefined, undefined, AbstractMutableList.prototype);
  function PersistentVectorIterator(root, tail, index, size, trieHeight) {
    AbstractListIterator.call(this, index, size);
    this.x1g_1 = tail;
    var trieSize = rootSize_1(size);
    var trieIndex = coerceAtMost(index, trieSize);
    this.y1g_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
  }
  PersistentVectorIterator.prototype.g = function () {
    this.a1g();
    if (this.y1g_1.f()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.y1f_1;
      tmp0_this.y1f_1 = tmp1 + 1 | 0;
      return this.y1g_1.g();
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.y1f_1;
    tmp2_this.y1f_1 = tmp3 + 1 | 0;
    return this.x1g_1[tmp3 - this.y1g_1.z1f_1 | 0];
  };
  PersistentVectorIterator.prototype.s = function () {
    this.b1g();
    if (this.y1f_1 > this.y1g_1.z1f_1) {
      var tmp0_this = this;
      tmp0_this.y1f_1 = tmp0_this.y1f_1 - 1 | 0;
      return this.x1g_1[tmp0_this.y1f_1 - this.y1g_1.z1f_1 | 0];
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this.y1f_1;
    tmp1_this.y1f_1 = tmp2 - 1 | 0;
    return this.y1g_1.s();
  };
  PersistentVectorIterator.$metadata$ = classMeta('PersistentVectorIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function reset($this) {
    $this.z1f_1 = $this.g1h_1.t1g_1;
    $this.h1h_1 = $this.g1h_1.u1g();
    $this.j1h_1 = -1;
    setupTrieIterator($this);
  }
  function setupTrieIterator($this) {
    var root = $this.g1h_1.r1g_1;
    if (root == null) {
      $this.i1h_1 = null;
      return Unit_getInstance();
    }
    var trieSize = rootSize_1($this.g1h_1.t1g_1);
    var trieIndex = coerceAtMost($this.y1f_1, trieSize);
    var trieHeight = ($this.g1h_1.p1g_1 / get_LOG_MAX_BUFFER_SIZE() | 0) + 1 | 0;
    if ($this.i1h_1 == null) {
      $this.i1h_1 = new TrieIterator(root, trieIndex, trieSize, trieHeight);
    } else {
      ensureNotNull($this.i1h_1).k1h(root, trieIndex, trieSize, trieHeight);
    }
  }
  function checkForComodification($this) {
    if (!($this.h1h_1 === $this.g1h_1.u1g()))
      throw ConcurrentModificationException_init_$Create$();
  }
  function checkHasIterated($this) {
    if ($this.j1h_1 === -1)
      throw IllegalStateException_init_$Create$_0();
  }
  function PersistentVectorMutableIterator(builder, index) {
    AbstractListIterator.call(this, index, builder.t1g_1);
    this.g1h_1 = builder;
    this.h1h_1 = this.g1h_1.u1g();
    this.i1h_1 = null;
    this.j1h_1 = -1;
    setupTrieIterator(this);
  }
  PersistentVectorMutableIterator.prototype.s = function () {
    checkForComodification(this);
    this.b1g();
    this.j1h_1 = this.y1f_1 - 1 | 0;
    var tmp1_elvis_lhs = this.i1h_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0 = this.g1h_1.s1g_1;
      var tmp0_this = this;
      tmp0_this.y1f_1 = tmp0_this.y1f_1 - 1 | 0;
      var tmp_1 = tmp_0[tmp0_this.y1f_1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var trieIterator = tmp;
    if (this.y1f_1 > trieIterator.z1f_1) {
      var tmp_2 = this.g1h_1.s1g_1;
      var tmp2_this = this;
      tmp2_this.y1f_1 = tmp2_this.y1f_1 - 1 | 0;
      var tmp_3 = tmp_2[tmp2_this.y1f_1 - trieIterator.z1f_1 | 0];
      return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    }
    var tmp3_this = this;
    var tmp4 = tmp3_this.y1f_1;
    tmp3_this.y1f_1 = tmp4 - 1 | 0;
    return trieIterator.s();
  };
  PersistentVectorMutableIterator.prototype.g = function () {
    checkForComodification(this);
    this.a1g();
    this.j1h_1 = this.y1f_1;
    var tmp2_elvis_lhs = this.i1h_1;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp_0 = this.g1h_1.s1g_1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.y1f_1;
      tmp0_this.y1f_1 = tmp1 + 1 | 0;
      var tmp_1 = tmp_0[tmp1];
      return (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = tmp2_elvis_lhs;
    }
    var trieIterator = tmp;
    if (trieIterator.f()) {
      var tmp3_this = this;
      var tmp4 = tmp3_this.y1f_1;
      tmp3_this.y1f_1 = tmp4 + 1 | 0;
      return trieIterator.g();
    }
    var tmp_2 = this.g1h_1.s1g_1;
    var tmp5_this = this;
    var tmp6 = tmp5_this.y1f_1;
    tmp5_this.y1f_1 = tmp6 + 1 | 0;
    var tmp_3 = tmp_2[tmp6 - trieIterator.z1f_1 | 0];
    return (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
  };
  PersistentVectorMutableIterator.prototype.b3 = function () {
    checkForComodification(this);
    checkHasIterated(this);
    this.g1h_1.z2(this.j1h_1);
    if (this.j1h_1 < this.y1f_1)
      this.y1f_1 = this.j1h_1;
    reset(this);
  };
  PersistentVectorMutableIterator.$metadata$ = classMeta('PersistentVectorMutableIterator', [MutableListIterator], undefined, undefined, undefined, AbstractListIterator.prototype);
  function bufferOfSize($this, size) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(size), null);
    return tmp$ret$0;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.l1h_1 = new SmallPersistentVector(tmp$ret$0);
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function SmallPersistentVector(buffer) {
    Companion_getInstance_4();
    AbstractPersistentList.call(this);
    this.m1h_1 = buffer;
    assert(this.m1h_1.length <= get_MAX_BUFFER_SIZE());
  }
  SmallPersistentVector.prototype.h = function () {
    return this.m1h_1.length;
  };
  SmallPersistentVector.prototype.a = function (element) {
    if (this.h() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.m1h_1, this.h() + 1 | 0);
      newBuffer[this.h()] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tail = presizedBufferWith(element);
    return new PersistentVector(this.m1h_1, tail, this.h() + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.a3 = function (elements) {
    if ((this.h() + elements.h() | 0) <= get_MAX_BUFFER_SIZE()) {
      var newBuffer = copyOf_0(this.m1h_1, this.h() + elements.h() | 0);
      var index = this.h();
      var tmp0_iterator = elements.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        newBuffer[tmp1] = element;
      }
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.mutate' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.hx();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector.addAll.<anonymous>' call
    tmp0_apply.a3(elements);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.ix();
    return tmp$ret$1;
  };
  SmallPersistentVector.prototype.q1f = function (index, element) {
    ListImplementation_getInstance().p1(index, this.h());
    if (index === this.h()) {
      return this.a(element);
    }
    if (this.h() < get_MAX_BUFFER_SIZE()) {
      var newBuffer = bufferOfSize(this, this.h() + 1 | 0);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = this.m1h_1;
      arrayCopy(tmp0_copyInto, newBuffer, 0, 0, index);
      tmp$ret$0 = newBuffer;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp1_copyInto = this.m1h_1;
      var tmp2_copyInto = index + 1 | 0;
      var tmp3_copyInto = this.h();
      arrayCopy(tmp1_copyInto, newBuffer, tmp2_copyInto, index, tmp3_copyInto);
      tmp$ret$1 = newBuffer;
      newBuffer[index] = element;
      return new SmallPersistentVector(newBuffer);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp4_copyOf = this.m1h_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp4_copyOf;
    tmp$ret$3 = tmp$ret$2.slice();
    var root = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp5_copyInto = this.m1h_1;
    var tmp6_copyInto = index + 1 | 0;
    var tmp7_copyInto = this.h() - 1 | 0;
    arrayCopy(tmp5_copyInto, root, tmp6_copyInto, index, tmp7_copyInto);
    tmp$ret$4 = root;
    root[index] = element;
    var tail = presizedBufferWith(this.m1h_1[get_MAX_BUFFER_SIZE_MINUS_ONE()]);
    return new PersistentVector(root, tail, this.h() + 1 | 0, 0);
  };
  SmallPersistentVector.prototype.z2 = function (index) {
    ListImplementation_getInstance().r1(index, this.h());
    if (this.h() === 1) {
      return Companion_getInstance_4().l1h_1;
    }
    var newBuffer = copyOf_0(this.m1h_1, this.h() - 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = this.m1h_1;
    var tmp1_copyInto = index + 1 | 0;
    var tmp2_copyInto = this.h();
    arrayCopy(tmp0_copyInto, newBuffer, index, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    return new SmallPersistentVector(newBuffer);
  };
  SmallPersistentVector.prototype.hx = function () {
    return new PersistentVectorBuilder(this, null, this.m1h_1, 0);
  };
  SmallPersistentVector.prototype.p = function (element) {
    return indexOf(this.m1h_1, element);
  };
  SmallPersistentVector.prototype.v1 = function (element) {
    return lastIndexOf(this.m1h_1, element);
  };
  SmallPersistentVector.prototype.l = function (index) {
    ListImplementation_getInstance().p1(index, this.h());
    var tmp = this.m1h_1;
    return new BufferIterator(isArray(tmp) ? tmp : THROW_CCE(), index, this.h());
  };
  SmallPersistentVector.prototype.i = function (index) {
    ListImplementation_getInstance().r1(index, this.h());
    var tmp = this.m1h_1[index];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  SmallPersistentVector.prototype.q5 = function (index, element) {
    ListImplementation_getInstance().r1(index, this.h());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.m1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[index] = element;
    return new SmallPersistentVector(newBuffer);
  };
  SmallPersistentVector.$metadata$ = classMeta('SmallPersistentVector', [ImmutableList], undefined, undefined, undefined, AbstractPersistentList.prototype);
  function fillPath($this, index, startLevel) {
    var shift = imul($this.b1h_1 - startLevel | 0, get_LOG_MAX_BUFFER_SIZE());
    var i = startLevel;
    while (i < $this.b1h_1) {
      var tmp = $this.c1h_1;
      var tmp_0 = i;
      var tmp_1 = $this.c1h_1[i - 1 | 0];
      tmp[tmp_0] = ((!(tmp_1 == null) ? isArray(tmp_1) : false) ? tmp_1 : THROW_CCE())[indexSegment(index, shift)];
      shift = shift - get_LOG_MAX_BUFFER_SIZE() | 0;
      i = i + 1 | 0;
    }
  }
  function fillPathIfNeeded($this, indexPredicate) {
    var shift = 0;
    while (indexSegment($this.y1f_1, shift) === indexPredicate) {
      shift = shift + get_LOG_MAX_BUFFER_SIZE() | 0;
    }
    if (shift > 0) {
      var level = ($this.b1h_1 - 1 | 0) - (shift / get_LOG_MAX_BUFFER_SIZE() | 0) | 0;
      fillPath($this, $this.y1f_1, level + 1 | 0);
    }
  }
  function elementAtCurrentIndex($this) {
    var leafBufferIndex = $this.y1f_1 & get_MAX_BUFFER_SIZE_MINUS_ONE();
    var tmp = $this.c1h_1[$this.b1h_1 - 1 | 0];
    return ((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE())[leafBufferIndex];
  }
  function TrieIterator(root, index, size, height) {
    AbstractListIterator.call(this, index, size);
    this.b1h_1 = height;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.b1h_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.c1h_1 = tmp$ret$0;
    this.d1h_1 = index === size;
    this.c1h_1[0] = root;
    fillPath(this, index - (this.d1h_1 ? 1 : 0) | 0, 1);
  }
  TrieIterator.prototype.k1h = function (root, index, size, height) {
    this.y1f_1 = index;
    this.z1f_1 = size;
    this.b1h_1 = height;
    if (this.c1h_1.length < height) {
      var tmp = this;
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(height), null);
      tmp.c1h_1 = tmp$ret$0;
    }
    this.c1h_1[0] = root;
    this.d1h_1 = index === size;
    fillPath(this, index - (this.d1h_1 ? 1 : 0) | 0, 1);
  };
  TrieIterator.prototype.g = function () {
    if (!this.f()) {
      throw NoSuchElementException_init_$Create$();
    }
    var result = elementAtCurrentIndex(this);
    var tmp0_this = this;
    tmp0_this.y1f_1 = tmp0_this.y1f_1 + 1 | 0;
    if (this.y1f_1 === this.z1f_1) {
      this.d1h_1 = true;
      return result;
    }
    fillPathIfNeeded(this, 0);
    return result;
  };
  TrieIterator.prototype.s = function () {
    if (!this.q()) {
      throw NoSuchElementException_init_$Create$();
    }
    var tmp0_this = this;
    tmp0_this.y1f_1 = tmp0_this.y1f_1 - 1 | 0;
    if (this.d1h_1) {
      this.d1h_1 = false;
      return elementAtCurrentIndex(this);
    }
    fillPathIfNeeded(this, get_MAX_BUFFER_SIZE_MINUS_ONE());
    return elementAtCurrentIndex(this);
  };
  TrieIterator.$metadata$ = classMeta('TrieIterator', undefined, undefined, undefined, undefined, AbstractListIterator.prototype);
  function persistentVectorOf() {
    return Companion_getInstance_4().l1h_1;
  }
  function get_MAX_BUFFER_SIZE() {
    return MAX_BUFFER_SIZE;
  }
  var MAX_BUFFER_SIZE;
  function presizedBufferWith(element) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = 32;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var buffer = tmp$ret$0;
    buffer[0] = element;
    return buffer;
  }
  function get_MAX_BUFFER_SIZE_MINUS_ONE() {
    return MAX_BUFFER_SIZE_MINUS_ONE;
  }
  var MAX_BUFFER_SIZE_MINUS_ONE;
  function rootSize_1(vectorSize) {
    return (vectorSize - 1 | 0) & -32;
  }
  function get_LOG_MAX_BUFFER_SIZE() {
    return LOG_MAX_BUFFER_SIZE;
  }
  var LOG_MAX_BUFFER_SIZE;
  function indexSegment(index, shift) {
    return index >> shift & 31;
  }
  function ObjectRef(value) {
    this.k1g_1 = value;
  }
  ObjectRef.$metadata$ = classMeta('ObjectRef');
  function get_MUTABLE_BUFFER_SIZE() {
    return MUTABLE_BUFFER_SIZE;
  }
  var MUTABLE_BUFFER_SIZE;
  function createEntries($this) {
    return new PersistentHashMapEntries($this);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.r1f_1 = new PersistentHashMap(Companion_getInstance_6().n1h_1, 0);
  }
  Companion_3.prototype.s1f = function () {
    var tmp = this.r1f_1;
    return tmp instanceof PersistentHashMap ? tmp : THROW_CCE();
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PersistentHashMap(node, size) {
    Companion_getInstance_5();
    AbstractMap.call(this);
    this.q1h_1 = node;
    this.r1h_1 = size;
  }
  PersistentHashMap.prototype.h = function () {
    return this.r1h_1;
  };
  PersistentHashMap.prototype.l2 = function () {
    return new PersistentHashMapKeys(this);
  };
  PersistentHashMap.prototype.u = function () {
    return createEntries(this);
  };
  PersistentHashMap.prototype.g2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.q1h_1.w1h(tmp$ret$0, key, 0);
  };
  PersistentHashMap.prototype.k2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return this.q1h_1.x1h(tmp$ret$0, key, 0);
  };
  PersistentHashMap.prototype.w2 = function (key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = this.q1h_1.y1h(tmp$ret$0, key, value, 0);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var newNodeResult = tmp;
    return new PersistentHashMap(newNodeResult.z1h_1, this.r1h_1 + newNodeResult.a1i_1 | 0);
  };
  PersistentHashMap.prototype.x2 = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var newNode = this.q1h_1.b1i(tmp$ret$0, key, 0);
    if (this.q1h_1 === newNode) {
      return this;
    }
    if (newNode == null) {
      return Companion_getInstance_5().s1f();
    }
    return new PersistentHashMap(newNode, this.r1h_1 - 1 | 0);
  };
  PersistentHashMap.prototype.hx = function () {
    return new PersistentHashMapBuilder(this);
  };
  PersistentHashMap.$metadata$ = classMeta('PersistentHashMap', [PersistentMap], undefined, undefined, undefined, AbstractMap.prototype);
  function PersistentHashMapBuilder(map) {
    AbstractMutableMap.call(this);
    this.g1i_1 = map;
    this.h1i_1 = new MutabilityOwnership();
    this.i1i_1 = this.g1i_1.q1h_1;
    this.j1i_1 = null;
    this.k1i_1 = 0;
    this.l1i_1 = this.g1i_1.r1h_1;
  }
  PersistentHashMapBuilder.prototype.b1f = function (value) {
    this.l1i_1 = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1i_1;
    tmp0_this.k1i_1 = tmp1 + 1 | 0;
  };
  PersistentHashMapBuilder.prototype.h = function () {
    return this.l1i_1;
  };
  PersistentHashMapBuilder.prototype.ix = function () {
    var tmp = this;
    var tmp_0;
    if (this.i1i_1 === this.g1i_1.q1h_1) {
      tmp_0 = this.g1i_1;
    } else {
      this.h1i_1 = new MutabilityOwnership();
      tmp_0 = new PersistentHashMap(this.i1i_1, this.l1i_1);
    }
    tmp.g1i_1 = tmp_0;
    return this.g1i_1;
  };
  PersistentHashMapBuilder.prototype.u = function () {
    return new PersistentHashMapBuilderEntries(this);
  };
  PersistentHashMapBuilder.prototype.l2 = function () {
    return new PersistentHashMapBuilderKeys(this);
  };
  PersistentHashMapBuilder.prototype.b7 = function () {
    return new PersistentHashMapBuilderValues(this);
  };
  PersistentHashMapBuilder.prototype.g2 = function (key) {
    var tmp = this.i1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.w1h(tmp$ret$0, key, 0);
  };
  PersistentHashMapBuilder.prototype.k2 = function (key) {
    var tmp = this.i1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp.x1h(tmp$ret$0, key, 0);
  };
  PersistentHashMapBuilder.prototype.w2 = function (key, value) {
    this.j1i_1 = null;
    var tmp = this;
    var tmp_0 = this.i1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    tmp.i1i_1 = tmp_0.m1i(tmp$ret$0, key, value, 0, this);
    return this.j1i_1;
  };
  PersistentHashMapBuilder.prototype.a7 = function (from) {
    var tmp1_elvis_lhs = from instanceof PersistentHashMap ? from : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = from instanceof PersistentHashMapBuilder ? from : null;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ix();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var map = tmp;
    if (!(map == null)) {
      var intersectionCounter = DeltaCounter_init_$Create$(0, 1, null);
      var oldSize = this.l1i_1;
      var tmp_0 = this;
      var tmp_1 = this.i1i_1;
      var tmp_2 = map.q1h_1;
      tmp_0.i1i_1 = tmp_1.n1i(tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE(), 0, intersectionCounter, this);
      var newSize = (oldSize + map.r1h_1 | 0) - intersectionCounter.o1i_1 | 0;
      if (!(oldSize === newSize)) {
        this.b1f(newSize);
      }
    } else {
      AbstractMutableMap.prototype.a7.call(this, from);
    }
  };
  PersistentHashMapBuilder.prototype.x2 = function (key) {
    this.j1i_1 = null;
    var tmp = this;
    var tmp_0 = this.i1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.p1i(tmp$ret$0, key, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_6().n1h_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.i1i_1 = tmp_1;
    return this.j1i_1;
  };
  PersistentHashMapBuilder.prototype.q1i = function (key, value) {
    var oldSize = this.l1i_1;
    var tmp = this;
    var tmp_0 = this.i1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = key;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp0_elvis_lhs = tmp_0.r1i(tmp$ret$0, key, value, 0, this);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2 = Companion_getInstance_6().n1h_1;
      tmp_1 = tmp_2 instanceof TrieNode ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp.i1i_1 = tmp_1;
    return !(oldSize === this.l1i_1);
  };
  PersistentHashMapBuilder.prototype.t5 = function () {
    var tmp = this;
    var tmp_0 = Companion_getInstance_6().n1h_1;
    tmp.i1i_1 = tmp_0 instanceof TrieNode ? tmp_0 : THROW_CCE();
    this.b1f(0);
  };
  PersistentHashMapBuilder.$metadata$ = classMeta('PersistentHashMapBuilder', [Builder_1], undefined, undefined, undefined, AbstractMutableMap.prototype);
  function PersistentHashMapBuilderEntriesIterator(builder) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntriesIterator.base.<anonymous>' call
      tmp$ret$1 = new TrieNodeMutableEntriesIterator(this);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.s1i_1 = new PersistentHashMapBuilderBaseIterator(builder, tmp_2);
  }
  PersistentHashMapBuilderEntriesIterator.prototype.f = function () {
    return this.s1i_1.f();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.g = function () {
    return this.s1i_1.g();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.b3 = function () {
    return this.s1i_1.b3();
  };
  PersistentHashMapBuilderEntriesIterator.prototype.d1j = function (key, newValue) {
    return this.s1i_1.d1j(key, newValue);
  };
  PersistentHashMapBuilderEntriesIterator.$metadata$ = classMeta('PersistentHashMapBuilderEntriesIterator', [MutableIterator]);
  function PersistentHashMapBuilderKeysIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  PersistentHashMapBuilderKeysIterator.$metadata$ = classMeta('PersistentHashMapBuilderKeysIterator', undefined, undefined, undefined, undefined, PersistentHashMapBuilderBaseIterator.prototype);
  function PersistentHashMapBuilderValuesIterator(builder) {
    var tmp = 0;
    var tmp_0 = get_TRIE_MAX_HEIGHT() + 1 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderValuesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeValuesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBuilderBaseIterator.call(this, builder, tmp_1);
  }
  PersistentHashMapBuilderValuesIterator.$metadata$ = classMeta('PersistentHashMapBuilderValuesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBuilderBaseIterator.prototype);
  function resetPath($this, keyHash, node, key, pathIndex) {
    var shift = imul(pathIndex, get_LOG_MAX_BRANCHING_FACTOR());
    if (shift > get_MAX_SHIFT()) {
      $this.t1i_1[pathIndex].i1j(node.v1h_1, node.v1h_1.length, 0);
      while (!equals($this.t1i_1[pathIndex].e1j(), key)) {
        $this.t1i_1[pathIndex].j1j();
      }
      $this.u1i_1 = pathIndex;
      return Unit_getInstance();
    }
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (node.m1j(keyPositionMask)) {
      var keyIndex = node.k1j(keyPositionMask);
      $this.t1i_1[pathIndex].i1j(node.v1h_1, imul(get_ENTRY_SIZE(), node.l1j()), keyIndex);
      $this.u1i_1 = pathIndex;
      return Unit_getInstance();
    }
    var nodeIndex = node.n1j(keyPositionMask);
    var targetNode = node.o1j(nodeIndex);
    $this.t1i_1[pathIndex].i1j(node.v1h_1, imul(get_ENTRY_SIZE(), node.l1j()), nodeIndex);
    resetPath($this, keyHash, targetNode, key, pathIndex + 1 | 0);
  }
  function checkNextWasInvoked($this) {
    if (!$this.b1j_1)
      throw IllegalStateException_init_$Create$_0();
  }
  function checkForComodification_0($this) {
    if (!($this.z1i_1.k1i_1 === $this.c1j_1))
      throw ConcurrentModificationException_init_$Create$();
  }
  function PersistentHashMapBuilderBaseIterator(builder, path) {
    PersistentHashMapBaseIterator.call(this, builder.i1i_1, path);
    this.z1i_1 = builder;
    this.a1j_1 = null;
    this.b1j_1 = false;
    this.c1j_1 = this.z1i_1.k1i_1;
  }
  PersistentHashMapBuilderBaseIterator.prototype.g = function () {
    checkForComodification_0(this);
    this.a1j_1 = this.e1j();
    this.b1j_1 = true;
    return PersistentHashMapBaseIterator.prototype.g.call(this);
  };
  PersistentHashMapBuilderBaseIterator.prototype.b3 = function () {
    checkNextWasInvoked(this);
    if (this.f()) {
      var currentKey = this.e1j();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.remove' call
      var tmp0_remove = this.z1i_1;
      var tmp1_remove = this.a1j_1;
      tmp$ret$0 = (isInterface(tmp0_remove, MutableMap) ? tmp0_remove : THROW_CCE()).x2(tmp1_remove);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$1, this.z1i_1.i1i_1, currentKey, 0);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.remove' call
      var tmp2_remove = this.z1i_1;
      var tmp3_remove = this.a1j_1;
      tmp$ret$2 = (isInterface(tmp2_remove, MutableMap) ? tmp2_remove : THROW_CCE()).x2(tmp3_remove);
    }
    this.a1j_1 = null;
    this.b1j_1 = false;
    this.c1j_1 = this.z1i_1.k1i_1;
  };
  PersistentHashMapBuilderBaseIterator.prototype.d1j = function (key, newValue) {
    if (!this.z1i_1.g2(key))
      return Unit_getInstance();
    if (this.f()) {
      var currentKey = this.e1j();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.z1i_1;
      tmp0_set.w2(key, newValue);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = currentKey;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      resetPath(this, tmp$ret$0, this.z1i_1.i1i_1, currentKey, 0);
    } else {
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = this.z1i_1;
      tmp1_set.w2(key, newValue);
    }
    this.c1j_1 = this.z1i_1.k1i_1;
  };
  PersistentHashMapBuilderBaseIterator.$metadata$ = classMeta('PersistentHashMapBuilderBaseIterator', [MutableIterator], undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function TrieNodeMutableEntriesIterator(parentIterator) {
    TrieNodeBaseIterator.call(this);
    this.s1j_1 = parentIterator;
  }
  TrieNodeMutableEntriesIterator.prototype.g = function () {
    assert(this.t1j());
    var tmp0_this = this;
    tmp0_this.h1j_1 = tmp0_this.h1j_1 + 2 | 0;
    var tmp = this.f1j_1[this.h1j_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.f1j_1[this.h1j_1 - 1 | 0];
    return new MutableMapEntry(this.s1j_1, tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  TrieNodeMutableEntriesIterator.$metadata$ = classMeta('TrieNodeMutableEntriesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function MutableMapEntry(parentIterator, key, value) {
    MapEntry.call(this, key, value);
    this.a1k_1 = parentIterator;
    this.b1k_1 = value;
  }
  MutableMapEntry.prototype.z1 = function () {
    return this.b1k_1;
  };
  MutableMapEntry.prototype.o6 = function (newValue) {
    var result = this.b1k_1;
    this.b1k_1 = newValue;
    this.a1k_1.d1j(this.x1(), newValue);
    return result;
  };
  MutableMapEntry.$metadata$ = classMeta('MutableMapEntry', [MutableEntry], undefined, undefined, undefined, MapEntry.prototype);
  function PersistentHashMapBuilderEntries(builder) {
    AbstractMapBuilderEntries.call(this);
    this.e1k_1 = builder;
  }
  PersistentHashMapBuilderEntries.prototype.g7 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  PersistentHashMapBuilderEntries.prototype.a = function (element) {
    return this.g7((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderEntries.prototype.t5 = function () {
    this.e1k_1.t5();
  };
  PersistentHashMapBuilderEntries.prototype.e = function () {
    return new PersistentHashMapBuilderEntriesIterator(this.e1k_1);
  };
  PersistentHashMapBuilderEntries.prototype.q6 = function (element) {
    return this.e1k_1.q1i(element.x1(), element.z1());
  };
  PersistentHashMapBuilderEntries.prototype.h = function () {
    return this.e1k_1.l1i_1;
  };
  PersistentHashMapBuilderEntries.prototype.p6 = function (element) {
    var tmp0_safe_receiver = this.e1k_1.k2(element.x1());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilderEntries.containsEntry.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.z1());
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? element.z1() == null ? this.e1k_1.g2(element.x1()) : false : tmp1_elvis_lhs;
  };
  PersistentHashMapBuilderEntries.$metadata$ = classMeta('PersistentHashMapBuilderEntries', undefined, undefined, undefined, undefined, AbstractMapBuilderEntries.prototype);
  function PersistentHashMapBuilderKeys(builder) {
    AbstractMutableSet.call(this);
    this.f1k_1 = builder;
  }
  PersistentHashMapBuilderKeys.prototype.s6 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  PersistentHashMapBuilderKeys.prototype.a = function (element) {
    return this.s6((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderKeys.prototype.t5 = function () {
    this.f1k_1.t5();
  };
  PersistentHashMapBuilderKeys.prototype.e = function () {
    return new PersistentHashMapBuilderKeysIterator(this.f1k_1);
  };
  PersistentHashMapBuilderKeys.prototype.x2 = function (element) {
    if (this.f1k_1.g2(element)) {
      this.f1k_1.x2(element);
      return true;
    }
    return false;
  };
  PersistentHashMapBuilderKeys.prototype.y2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.x2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderKeys.prototype.h = function () {
    return this.f1k_1.l1i_1;
  };
  PersistentHashMapBuilderKeys.prototype.d2 = function (element) {
    return this.f1k_1.g2(element);
  };
  PersistentHashMapBuilderKeys.prototype.k = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.d2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderKeys.$metadata$ = classMeta('PersistentHashMapBuilderKeys', [MutableSet], undefined, undefined, undefined, AbstractMutableSet.prototype);
  function PersistentHashMapBuilderValues(builder) {
    AbstractMutableCollection.call(this);
    this.g1k_1 = builder;
  }
  PersistentHashMapBuilderValues.prototype.h = function () {
    return this.g1k_1.l1i_1;
  };
  PersistentHashMapBuilderValues.prototype.z6 = function (element) {
    return this.g1k_1.i2(element);
  };
  PersistentHashMapBuilderValues.prototype.k = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.z6((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderValues.prototype.y6 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  PersistentHashMapBuilderValues.prototype.a = function (element) {
    return this.y6((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapBuilderValues.prototype.e = function () {
    return new PersistentHashMapBuilderValuesIterator(this.g1k_1);
  };
  PersistentHashMapBuilderValues.$metadata$ = classMeta('PersistentHashMapBuilderValues', [MutableCollection], undefined, undefined, undefined, AbstractMutableCollection.prototype);
  function AbstractMapBuilderEntries() {
    AbstractMutableSet.call(this);
  }
  AbstractMapBuilderEntries.prototype.k = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.p6(element);
  };
  AbstractMapBuilderEntries.prototype.y2 = function (element) {
    var tmp = isObject(element) ? element : null;
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    return this.q6(element);
  };
  AbstractMapBuilderEntries.$metadata$ = classMeta('AbstractMapBuilderEntries', undefined, undefined, undefined, undefined, AbstractMutableSet.prototype);
  function PersistentHashMapKeysIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeKeysIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapKeysIterator.$metadata$ = classMeta('PersistentHashMapKeysIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function PersistentHashMapEntriesIterator(node) {
    var tmp = 0;
    var tmp_0 = 8;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntriesIterator.<init>.<anonymous>' call
      tmp$ret$1 = new TrieNodeEntriesIterator();
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    PersistentHashMapBaseIterator.call(this, node, tmp_1);
  }
  PersistentHashMapEntriesIterator.$metadata$ = classMeta('PersistentHashMapEntriesIterator', undefined, undefined, undefined, undefined, PersistentHashMapBaseIterator.prototype);
  function TrieNodeBaseIterator() {
    this.f1j_1 = Companion_getInstance_6().n1h_1.v1h_1;
    this.g1j_1 = 0;
    this.h1j_1 = 0;
  }
  TrieNodeBaseIterator.prototype.i1j = function (buffer, dataSize, index) {
    this.f1j_1 = buffer;
    this.g1j_1 = dataSize;
    this.h1j_1 = index;
  };
  TrieNodeBaseIterator.prototype.u1j = function (buffer, dataSize) {
    this.i1j(buffer, dataSize, 0);
  };
  TrieNodeBaseIterator.prototype.t1j = function () {
    return this.h1j_1 < this.g1j_1;
  };
  TrieNodeBaseIterator.prototype.e1j = function () {
    assert(this.t1j());
    var tmp = this.f1j_1[this.h1j_1];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeBaseIterator.prototype.j1j = function () {
    assert(this.t1j());
    var tmp0_this = this;
    tmp0_this.h1j_1 = tmp0_this.h1j_1 + 2 | 0;
  };
  TrieNodeBaseIterator.prototype.v1j = function () {
    assert(this.h1j_1 >= this.g1j_1);
    return this.h1j_1 < this.f1j_1.length;
  };
  TrieNodeBaseIterator.prototype.w1j = function () {
    assert(this.v1j());
    var tmp = this.f1j_1[this.h1j_1];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  TrieNodeBaseIterator.prototype.x1j = function () {
    assert(this.v1j());
    var tmp0_this = this;
    var tmp1 = tmp0_this.h1j_1;
    tmp0_this.h1j_1 = tmp1 + 1 | 0;
  };
  TrieNodeBaseIterator.prototype.f = function () {
    return this.t1j();
  };
  TrieNodeBaseIterator.$metadata$ = classMeta('TrieNodeBaseIterator', [Iterator]);
  function get_TRIE_MAX_HEIGHT() {
    return TRIE_MAX_HEIGHT;
  }
  var TRIE_MAX_HEIGHT;
  function TrieNodeKeysIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeKeysIterator.prototype.g = function () {
    assert(this.t1j());
    var tmp0_this = this;
    tmp0_this.h1j_1 = tmp0_this.h1j_1 + 2 | 0;
    var tmp = this.f1j_1[this.h1j_1 - 2 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeKeysIterator.$metadata$ = classMeta('TrieNodeKeysIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function TrieNodeValuesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeValuesIterator.prototype.g = function () {
    assert(this.t1j());
    var tmp0_this = this;
    tmp0_this.h1j_1 = tmp0_this.h1j_1 + 2 | 0;
    var tmp = this.f1j_1[this.h1j_1 - 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  TrieNodeValuesIterator.$metadata$ = classMeta('TrieNodeValuesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function moveToNextNodeWithData($this, pathIndex) {
    if ($this.t1i_1[pathIndex].t1j()) {
      return pathIndex;
    }
    if ($this.t1i_1[pathIndex].v1j()) {
      var node = $this.t1i_1[pathIndex].w1j();
      if (pathIndex === 6) {
        $this.t1i_1[pathIndex + 1 | 0].u1j(node.v1h_1, node.v1h_1.length);
      } else {
        $this.t1i_1[pathIndex + 1 | 0].u1j(node.v1h_1, imul(get_ENTRY_SIZE(), node.l1j()));
      }
      return moveToNextNodeWithData($this, pathIndex + 1 | 0);
    }
    return -1;
  }
  function ensureNextEntryIsReady($this) {
    if ($this.t1i_1[$this.u1i_1].t1j()) {
      return Unit_getInstance();
    }
    var inductionVariable = $this.u1i_1;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var result = moveToNextNodeWithData($this, i);
        if (result === -1 ? $this.t1i_1[i].v1j() : false) {
          $this.t1i_1[i].x1j();
          result = moveToNextNodeWithData($this, i);
        }
        if (!(result === -1)) {
          $this.u1i_1 = result;
          return Unit_getInstance();
        }
        if (i > 0) {
          $this.t1i_1[i - 1 | 0].x1j();
        }
        $this.t1i_1[i].u1j(Companion_getInstance_6().n1h_1.v1h_1, 0);
      }
       while (0 <= inductionVariable);
    $this.v1i_1 = false;
  }
  function checkHasNext($this) {
    if (!$this.f())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentHashMapBaseIterator(node, path) {
    this.t1i_1 = path;
    this.u1i_1 = 0;
    this.v1i_1 = true;
    this.t1i_1[0].u1j(node.v1h_1, imul(get_ENTRY_SIZE(), node.l1j()));
    this.u1i_1 = 0;
    ensureNextEntryIsReady(this);
  }
  PersistentHashMapBaseIterator.prototype.e1j = function () {
    checkHasNext(this);
    return this.t1i_1[this.u1i_1].e1j();
  };
  PersistentHashMapBaseIterator.prototype.f = function () {
    return this.v1i_1;
  };
  PersistentHashMapBaseIterator.prototype.g = function () {
    checkHasNext(this);
    var result = this.t1i_1[this.u1i_1].g();
    ensureNextEntryIsReady(this);
    return result;
  };
  PersistentHashMapBaseIterator.$metadata$ = classMeta('PersistentHashMapBaseIterator', [Iterator]);
  function MapEntry(key, value) {
    this.c1k_1 = key;
    this.d1k_1 = value;
  }
  MapEntry.prototype.x1 = function () {
    return this.c1k_1;
  };
  MapEntry.prototype.z1 = function () {
    return this.d1k_1;
  };
  MapEntry.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.x1();
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.z1();
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp ^ tmp$ret$1;
  };
  MapEntry.prototype.equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, Entry) : false) ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.MapEntry.equals.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver.x1(), this.x1()) ? equals(tmp0_safe_receiver.z1(), this.z1()) : false;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  MapEntry.prototype.toString = function () {
    return toString_0(this.x1()) + '=' + toString_0(this.z1());
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function TrieNodeEntriesIterator() {
    TrieNodeBaseIterator.call(this);
  }
  TrieNodeEntriesIterator.prototype.g = function () {
    assert(this.t1j());
    var tmp0_this = this;
    tmp0_this.h1j_1 = tmp0_this.h1j_1 + 2 | 0;
    var tmp = this.f1j_1[this.h1j_1 - 2 | 0];
    var tmp_0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp_1 = this.f1j_1[this.h1j_1 - 1 | 0];
    return new MapEntry(tmp_0, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
  };
  TrieNodeEntriesIterator.$metadata$ = classMeta('TrieNodeEntriesIterator', undefined, undefined, undefined, undefined, TrieNodeBaseIterator.prototype);
  function PersistentHashMapKeys(map) {
    AbstractSet.call(this);
    this.q1k_1 = map;
  }
  PersistentHashMapKeys.prototype.h = function () {
    return this.q1k_1.r1h_1;
  };
  PersistentHashMapKeys.prototype.d2 = function (element) {
    return this.q1k_1.g2(element);
  };
  PersistentHashMapKeys.prototype.k = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.d2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  PersistentHashMapKeys.prototype.e = function () {
    return new PersistentHashMapKeysIterator(this.q1k_1.q1h_1);
  };
  PersistentHashMapKeys.$metadata$ = classMeta('PersistentHashMapKeys', [ImmutableSet], undefined, undefined, undefined, AbstractSet.prototype);
  function PersistentHashMapEntries(map) {
    AbstractSet.call(this);
    this.r1k_1 = map;
  }
  PersistentHashMapEntries.prototype.h = function () {
    return this.r1k_1.r1h_1;
  };
  PersistentHashMapEntries.prototype.s1k = function (element) {
    var tmp = isObject(element) ? element : THROW_CCE();
    if (!(!(tmp == null) ? isInterface(tmp, Entry) : false))
      return false;
    var tmp0_safe_receiver = this.r1k_1.k2(element.x1());
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapEntries.contains.<anonymous>' call
      tmp$ret$0 = equals(tmp0_safe_receiver, element.z1());
      tmp$ret$1 = tmp$ret$0;
      tmp_0 = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? element.z1() == null ? this.r1k_1.g2(element.x1()) : false : tmp1_elvis_lhs;
  };
  PersistentHashMapEntries.prototype.k = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.s1k((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  PersistentHashMapEntries.prototype.e = function () {
    return new PersistentHashMapEntriesIterator(this.r1k_1.q1h_1);
  };
  PersistentHashMapEntries.$metadata$ = classMeta('PersistentHashMapEntries', [ImmutableSet], undefined, undefined, undefined, AbstractSet.prototype);
  function TrieNode_init_$Init$(dataMap, nodeMap, buffer, $this) {
    TrieNode.call($this, dataMap, nodeMap, buffer, null);
    return $this;
  }
  function TrieNode_init_$Create$(dataMap, nodeMap, buffer) {
    return TrieNode_init_$Init$(dataMap, nodeMap, buffer, Object.create(TrieNode.prototype));
  }
  function ModificationResult(node, sizeDelta) {
    this.z1h_1 = node;
    this.a1i_1 = sizeDelta;
  }
  ModificationResult.prototype.t1k = function (_set____db54di) {
    this.z1h_1 = _set____db54di;
  };
  ModificationResult.prototype.u1k = function () {
    return this.z1h_1;
  };
  ModificationResult.prototype.v1k = function (operation) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
    this.z1h_1 = operation(this.z1h_1);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ModificationResult.$metadata$ = classMeta('ModificationResult');
  function asInsertResult($this) {
    return new ModificationResult($this, 1);
  }
  function asUpdateResult($this) {
    return new ModificationResult($this, 0);
  }
  function hasNodeAt($this, positionMask) {
    return !(($this.t1h_1 & positionMask) === 0);
  }
  function keyAtIndex($this, keyIndex) {
    var tmp = $this.v1h_1[keyIndex];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function valueAtKeyIndex($this, keyIndex) {
    var tmp = $this.v1h_1[keyIndex + 1 | 0];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function insertEntryAt($this, positionMask, key, value) {
    var keyIndex = $this.k1j(positionMask);
    var newBuffer = insertEntryAtIndex($this.v1h_1, keyIndex, key, value);
    return TrieNode_init_$Create$($this.s1h_1 | positionMask, $this.t1h_1, newBuffer);
  }
  function mutableInsertEntryAt($this, positionMask, key, value, owner) {
    var keyIndex = $this.k1j(positionMask);
    if ($this.u1h_1 === owner) {
      $this.v1h_1 = insertEntryAtIndex($this.v1h_1, keyIndex, key, value);
      $this.s1h_1 = $this.s1h_1 | positionMask;
      return $this;
    }
    var newBuffer = insertEntryAtIndex($this.v1h_1, keyIndex, key, value);
    return new TrieNode($this.s1h_1 | positionMask, $this.t1h_1, newBuffer, owner);
  }
  function updateValueAtIndex($this, keyIndex, value) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.v1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return TrieNode_init_$Create$($this.s1h_1, $this.t1h_1, newBuffer);
  }
  function mutableUpdateValueAtIndex($this, keyIndex, value, mutator) {
    if ($this.u1h_1 === mutator.h1i_1) {
      $this.v1h_1[keyIndex + 1 | 0] = value;
      return $this;
    }
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.k1i_1;
    tmp0_this.k1i_1 = tmp1 + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.v1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[keyIndex + 1 | 0] = value;
    return new TrieNode($this.s1h_1, $this.t1h_1, newBuffer, mutator.h1i_1);
  }
  function updateNodeAtIndex($this, nodeIndex, positionMask, newNode) {
    var newNodeBuffer = newNode.v1h_1;
    if (newNodeBuffer.length === 2 ? newNode.t1h_1 === 0 : false) {
      if ($this.v1h_1.length === 1) {
        newNode.s1h_1 = $this.t1h_1;
        return newNode;
      }
      var keyIndex = $this.k1j(positionMask);
      var newBuffer = replaceNodeWithEntry($this.v1h_1, nodeIndex, keyIndex, newNodeBuffer[0], newNodeBuffer[1]);
      return TrieNode_init_$Create$($this.s1h_1 ^ positionMask, $this.t1h_1 ^ positionMask, newBuffer);
    }
    var newBuffer_0 = copyOf_0($this.v1h_1, $this.v1h_1.length);
    newBuffer_0[nodeIndex] = newNode;
    return TrieNode_init_$Create$($this.s1h_1, $this.t1h_1, newBuffer_0);
  }
  function mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) {
    if (($this.v1h_1.length === 1 ? newNode.v1h_1.length === 2 : false) ? newNode.t1h_1 === 0 : false) {
      newNode.s1h_1 = $this.t1h_1;
      return newNode;
    }
    if ($this.u1h_1 === owner) {
      $this.v1h_1[nodeIndex] = newNode;
      return $this;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = $this.v1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    var newBuffer = tmp$ret$1;
    newBuffer[nodeIndex] = newNode;
    return new TrieNode($this.s1h_1, $this.t1h_1, newBuffer, owner);
  }
  function removeNodeAtIndex($this, nodeIndex, positionMask) {
    if ($this.v1h_1.length === 1)
      return null;
    var newBuffer = removeNodeAtIndex_0($this.v1h_1, nodeIndex);
    return TrieNode_init_$Create$($this.s1h_1, $this.t1h_1 ^ positionMask, newBuffer);
  }
  function mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) {
    if ($this.v1h_1.length === 1)
      return null;
    if ($this.u1h_1 === owner) {
      $this.v1h_1 = removeNodeAtIndex_0($this.v1h_1, nodeIndex);
      $this.t1h_1 = $this.t1h_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeNodeAtIndex_0($this.v1h_1, nodeIndex);
    return new TrieNode($this.s1h_1, $this.t1h_1 ^ positionMask, newBuffer, owner);
  }
  function bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    var storedKey = keyAtIndex($this, keyIndex);
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = storedKey;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var storedKeyHash = tmp$ret$0;
    var storedValue = valueAtKeyIndex($this, keyIndex);
    var newNode = makeNode($this, storedKeyHash, storedKey, storedValue, newKeyHash, newKey, newValue, shift + 5 | 0, owner);
    var nodeIndex = $this.n1j(positionMask) + 1 | 0;
    return replaceEntryWithNode($this.v1h_1, keyIndex, nodeIndex, newNode);
  }
  function moveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift) {
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, null);
    return TrieNode_init_$Create$($this.s1h_1 ^ positionMask, $this.t1h_1 | positionMask, newBuffer);
  }
  function mutableMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner) {
    if ($this.u1h_1 === owner) {
      $this.v1h_1 = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
      $this.s1h_1 = $this.s1h_1 ^ positionMask;
      $this.t1h_1 = $this.t1h_1 | positionMask;
      return $this;
    }
    var newBuffer = bufferMoveEntryToNode($this, keyIndex, positionMask, newKeyHash, newKey, newValue, shift, owner);
    return new TrieNode($this.s1h_1 ^ positionMask, $this.t1h_1 | positionMask, newBuffer, owner);
  }
  function makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift, owner) {
    if (shift > 30) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [key1, value1, key2, value2];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return new TrieNode(0, 0, tmp$ret$2, owner);
    }
    var setBit1 = indexSegment_0(keyHash1, shift);
    var setBit2 = indexSegment_0(keyHash2, shift);
    if (!(setBit1 === setBit2)) {
      var tmp;
      if (setBit1 < setBit2) {
        var tmp$ret$5;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = [key1, value1, key2, value2];
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } else {
        var tmp$ret$8;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = [key2, value2, key1, value1];
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp = tmp$ret$8;
      }
      var nodeBuffer = tmp;
      return new TrieNode(1 << setBit1 | 1 << setBit2, 0, nodeBuffer, owner);
    }
    var node = makeNode($this, keyHash1, key1, value1, keyHash2, key2, value2, shift + 5 | 0, owner);
    var tmp_0 = 1 << setBit1;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$10;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$9 = [node];
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    return new TrieNode(0, tmp_0, tmp$ret$11, owner);
  }
  function removeEntryAtIndex($this, keyIndex, positionMask) {
    if ($this.v1h_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.v1h_1, keyIndex);
    return TrieNode_init_$Create$($this.s1h_1 ^ positionMask, $this.t1h_1, newBuffer);
  }
  function mutableRemoveEntryAtIndex($this, keyIndex, positionMask, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.l1i_1;
    tmp0_this.b1f(tmp1 - 1 | 0);
    mutator.j1i_1 = valueAtKeyIndex($this, keyIndex);
    if ($this.v1h_1.length === 2)
      return null;
    if ($this.u1h_1 === mutator.h1i_1) {
      $this.v1h_1 = removeEntryAtIndex_0($this.v1h_1, keyIndex);
      $this.s1h_1 = $this.s1h_1 ^ positionMask;
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.v1h_1, keyIndex);
    return new TrieNode($this.s1h_1 ^ positionMask, $this.t1h_1, newBuffer, mutator.h1i_1);
  }
  function collisionRemoveEntryAtIndex($this, i) {
    if ($this.v1h_1.length === 2)
      return null;
    var newBuffer = removeEntryAtIndex_0($this.v1h_1, i);
    return TrieNode_init_$Create$(0, 0, newBuffer);
  }
  function mutableCollisionRemoveEntryAtIndex($this, i, mutator) {
    var tmp0_this = mutator;
    var tmp1 = tmp0_this.l1i_1;
    tmp0_this.b1f(tmp1 - 1 | 0);
    mutator.j1i_1 = valueAtKeyIndex($this, i);
    if ($this.v1h_1.length === 2)
      return null;
    if ($this.u1h_1 === mutator.h1i_1) {
      $this.v1h_1 = removeEntryAtIndex_0($this.v1h_1, i);
      return $this;
    }
    var newBuffer = removeEntryAtIndex_0($this.v1h_1, i);
    return new TrieNode(0, 0, newBuffer, mutator.h1i_1);
  }
  function collisionContainsKey($this, key) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, $this.v1h_1[i]))
          return true;
      }
       while (!(i === last));
    return false;
  }
  function collisionGet($this, key) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return valueAtKeyIndex($this, i);
        }
      }
       while (!(i === last));
    return null;
  }
  function collisionPut($this, key, value) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          if (value === valueAtKeyIndex($this, i)) {
            return null;
          }
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.v1h_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return asUpdateResult(TrieNode_init_$Create$(0, 0, newBuffer));
        }
      }
       while (!(i === last));
    var newBuffer_0 = insertEntryAtIndex($this.v1h_1, 0, key, value);
    return asInsertResult(TrieNode_init_$Create$(0, 0, newBuffer_0));
  }
  function mutableCollisionPut($this, key, value, mutator) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          mutator.j1i_1 = valueAtKeyIndex($this, i);
          if ($this.u1h_1 === mutator.h1i_1) {
            $this.v1h_1[i + 1 | 0] = value;
            return $this;
          }
          var tmp1_this = mutator;
          var tmp2 = tmp1_this.k1i_1;
          tmp1_this.k1i_1 = tmp2 + 1 | 0;
          var tmp$ret$1;
          // Inline function 'kotlin.collections.copyOf' call
          var tmp0_copyOf = $this.v1h_1;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_copyOf;
          tmp$ret$1 = tmp$ret$0.slice();
          var newBuffer = tmp$ret$1;
          newBuffer[i + 1 | 0] = value;
          return new TrieNode(0, 0, newBuffer, mutator.h1i_1);
        }
      }
       while (!(i === last));
    var tmp3_this = mutator;
    var tmp4 = tmp3_this.l1i_1;
    tmp3_this.b1f(tmp4 + 1 | 0);
    var newBuffer_0 = insertEntryAtIndex($this.v1h_1, 0, key, value);
    return new TrieNode(0, 0, newBuffer_0, mutator.h1i_1);
  }
  function collisionRemove($this, key) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return collisionRemoveEntryAtIndex($this, i);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove($this, key, mutator) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i))) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionRemove_0($this, key, value, mutator) {
    var progression = step(until(0, $this.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        if (equals(key, keyAtIndex($this, i)) ? equals(value, valueAtKeyIndex($this, i)) : false) {
          return mutableCollisionRemoveEntryAtIndex($this, i, mutator);
        }
      }
       while (!(i === last));
    return $this;
  }
  function mutableCollisionPutAll($this, otherNode, intersectionCounter, owner) {
    assert($this.t1h_1 === 0);
    assert($this.s1h_1 === 0);
    assert(otherNode.t1h_1 === 0);
    assert(otherNode.s1h_1 === 0);
    var tempBuffer = copyOf_0($this.v1h_1, $this.v1h_1.length + otherNode.v1h_1.length | 0);
    var i = $this.v1h_1.length;
    var progression = step(until(0, otherNode.v1h_1.length), 2);
    var inductionVariable = progression.d1_1;
    var last = progression.e1_1;
    var step_0 = progression.f1_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        var tmp = otherNode.v1h_1[j];
        if (!collisionContainsKey($this, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE())) {
          tempBuffer[i] = otherNode.v1h_1[j];
          tempBuffer[i + 1 | 0] = otherNode.v1h_1[j + 1 | 0];
          i = i + 2 | 0;
        } else {
          var tmp1_this = intersectionCounter;
          var tmp2 = tmp1_this.o1i_1;
          tmp1_this.o1i_1 = tmp2 + 1 | 0;
        }
      }
       while (!(j === last));
    var newSize = i;
    return newSize === $this.v1h_1.length ? $this : newSize === otherNode.v1h_1.length ? otherNode : newSize === tempBuffer.length ? new TrieNode(0, 0, tempBuffer, owner) : new TrieNode(0, 0, copyOf_0(tempBuffer, newSize), owner);
  }
  function mutablePutAllFromOtherNodeCell($this, otherNode, positionMask, shift, intersectionCounter, mutator) {
    var tmp;
    if (hasNodeAt($this, positionMask)) {
      var targetNode = $this.o1j($this.n1j(positionMask));
      var tmp_0;
      if (hasNodeAt(otherNode, positionMask)) {
        var otherTargetNode = otherNode.o1j(otherNode.n1j(positionMask));
        tmp_0 = targetNode.n1i(otherTargetNode, shift + 5 | 0, intersectionCounter, mutator);
      } else if (otherNode.m1j(positionMask)) {
        var keyIndex = otherNode.k1j(positionMask);
        var key = keyAtIndex(otherNode, keyIndex);
        var value = valueAtKeyIndex(otherNode, keyIndex);
        var oldSize = mutator.l1i_1;
        var tmp$ret$1;
        // Inline function 'kotlin.also' call
        var tmp$ret$0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = key;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var tmp0_also = targetNode.m1i(tmp$ret$0, key, value, shift + 5 | 0, mutator);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAllFromOtherNodeCell.<anonymous>' call
        if (mutator.l1i_1 === oldSize) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.o1i_1;
          tmp0_this.o1i_1 = tmp1 + 1 | 0;
        }
        tmp$ret$1 = tmp0_also;
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = targetNode;
      }
      tmp = tmp_0;
    } else if (hasNodeAt(otherNode, positionMask)) {
      var otherTargetNode_0 = otherNode.o1j(otherNode.n1j(positionMask));
      var tmp_1;
      if ($this.m1j(positionMask)) {
        var keyIndex_0 = $this.k1j(positionMask);
        var key_0 = keyAtIndex($this, keyIndex_0);
        var tmp_2;
        var tmp$ret$2;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = key_0;
        var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        tmp$ret$2 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
        if (otherTargetNode_0.w1h(tmp$ret$2, key_0, shift + 5 | 0)) {
          var tmp0_this_0 = intersectionCounter;
          var tmp1_0 = tmp0_this_0.o1i_1;
          tmp0_this_0.o1i_1 = tmp1_0 + 1 | 0;
          tmp_2 = otherTargetNode_0;
        } else {
          var value_0 = valueAtKeyIndex($this, keyIndex_0);
          var tmp$ret$3;
          // Inline function 'kotlin.hashCode' call
          var tmp0_safe_receiver_1 = key_0;
          var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
          tmp$ret$3 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
          tmp_2 = otherTargetNode_0.m1i(tmp$ret$3, key_0, value_0, shift + 5 | 0, mutator);
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = otherTargetNode_0;
      }
      tmp = tmp_1;
    } else {
      var thisKeyIndex = $this.k1j(positionMask);
      var thisKey = keyAtIndex($this, thisKeyIndex);
      var thisValue = valueAtKeyIndex($this, thisKeyIndex);
      var otherKeyIndex = otherNode.k1j(positionMask);
      var otherKey = keyAtIndex(otherNode, otherKeyIndex);
      var otherValue = valueAtKeyIndex(otherNode, otherKeyIndex);
      var tmp$ret$4;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = thisKey;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      tmp$ret$4 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = otherKey;
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      tmp$ret$5 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
      tmp = makeNode($this, tmp_3, thisKey, thisValue, tmp$ret$5, otherKey, otherValue, shift + 5 | 0, mutator.h1i_1);
    }
    return tmp;
  }
  function calculateSize($this) {
    if ($this.t1h_1 === 0)
      return $this.v1h_1.length / 2 | 0;
    var numValues = countOneBits($this.s1h_1);
    var result = numValues;
    var inductionVariable = imul(numValues, 2);
    var last = $this.v1h_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + calculateSize($this.o1j(i)) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function elementsIdentityEquals($this, otherNode) {
    if ($this === otherNode)
      return true;
    if (!($this.t1h_1 === otherNode.t1h_1))
      return false;
    if (!($this.s1h_1 === otherNode.s1h_1))
      return false;
    var inductionVariable = 0;
    var last = $this.v1h_1.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!($this.v1h_1[i] === otherNode.v1h_1[i]))
          return false;
      }
       while (inductionVariable < last);
    return true;
  }
  function replaceNode($this, targetNode, newNode, nodeIndex, positionMask) {
    return newNode == null ? removeNodeAtIndex($this, nodeIndex, positionMask) : !(targetNode === newNode) ? updateNodeAtIndex($this, nodeIndex, positionMask, newNode) : $this;
  }
  function mutableReplaceNode($this, targetNode, newNode, nodeIndex, positionMask, owner) {
    return newNode == null ? mutableRemoveNodeAtIndex($this, nodeIndex, positionMask, owner) : ($this.u1h_1 === owner ? true : !(targetNode === newNode)) ? mutableUpdateNodeAtIndex($this, nodeIndex, newNode, owner) : $this;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    tmp.n1h_1 = TrieNode_init_$Create$(0, 0, tmp$ret$0);
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function TrieNode(dataMap, nodeMap, buffer, ownedBy) {
    Companion_getInstance_6();
    this.s1h_1 = dataMap;
    this.t1h_1 = nodeMap;
    this.u1h_1 = ownedBy;
    this.v1h_1 = buffer;
  }
  TrieNode.prototype.w1k = function () {
    return this.v1h_1;
  };
  TrieNode.prototype.l1j = function () {
    return countOneBits(this.s1h_1);
  };
  TrieNode.prototype.m1j = function (positionMask) {
    return !((this.s1h_1 & positionMask) === 0);
  };
  TrieNode.prototype.k1j = function (positionMask) {
    return imul(2, countOneBits(this.s1h_1 & (positionMask - 1 | 0)));
  };
  TrieNode.prototype.n1j = function (positionMask) {
    return (this.v1h_1.length - 1 | 0) - countOneBits(this.t1h_1 & (positionMask - 1 | 0)) | 0;
  };
  TrieNode.prototype.o1j = function (nodeIndex) {
    var tmp = this.v1h_1[nodeIndex];
    return tmp instanceof TrieNode ? tmp : THROW_CCE();
  };
  TrieNode.prototype.w1h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      return equals(key, keyAtIndex(this, this.k1j(keyPositionMask)));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o1j(this.n1j(keyPositionMask));
      if (shift === 30) {
        return collisionContainsKey(targetNode, key);
      }
      return targetNode.w1h(keyHash, key, shift + 5 | 0);
    }
    return false;
  };
  TrieNode.prototype.x1h = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      var keyIndex = this.k1j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return valueAtKeyIndex(this, keyIndex);
      }
      return null;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var targetNode = this.o1j(this.n1j(keyPositionMask));
      if (shift === 30) {
        return collisionGet(targetNode, key);
      }
      return targetNode.x1h(keyHash, key, shift + 5 | 0);
    }
    return null;
  };
  TrieNode.prototype.n1i = function (otherNode, shift, intersectionCounter, mutator) {
    if (this === otherNode) {
      intersectionCounter.x1k(calculateSize(this));
      return this;
    }
    if (shift > 30) {
      return mutableCollisionPutAll(this, otherNode, intersectionCounter, mutator.h1i_1);
    }
    var newNodeMap = this.t1h_1 | otherNode.t1h_1;
    var newDataMap = (this.s1h_1 ^ otherNode.s1h_1) & ~newNodeMap;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp0_forEachOneBit = this.s1h_1 & otherNode.s1h_1;
    var mask = tmp0_forEachOneBit;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp1__anonymous__uwfjfc = index;
      var leftKey = keyAtIndex(this, this.k1j(bit));
      var rightKey = keyAtIndex(otherNode, otherNode.k1j(bit));
      if (equals(leftKey, rightKey))
        newDataMap = newDataMap | bit;
      else
        newNodeMap = newNodeMap | bit;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      mask = mask ^ bit;
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = (newNodeMap & newDataMap) === 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if ((equals(this.u1h_1, mutator.h1i_1) ? this.s1h_1 === newDataMap : false) ? this.t1h_1 === newNodeMap : false) {
      tmp = this;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp3_arrayOfNulls = imul(countOneBits(newDataMap), 2) + countOneBits(newNodeMap) | 0;
      tmp$ret$1 = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      var newBuffer = tmp$ret$1;
      tmp = TrieNode_init_$Create$(newDataMap, newNodeMap, newBuffer);
    }
    var mutableNode = tmp;
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp4_forEachOneBit = newNodeMap;
    var mask_0 = tmp4_forEachOneBit;
    var index_0 = 0;
    while (!(mask_0 === 0)) {
      var bit_0 = takeLowestOneBit(mask_0);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp5__anonymous__kpxxpo = index_0;
      var newNodeIndex = (mutableNode.v1h_1.length - 1 | 0) - tmp5__anonymous__kpxxpo | 0;
      mutableNode.v1h_1[newNodeIndex] = mutablePutAllFromOtherNodeCell(this, otherNode, bit_0, shift, intersectionCounter, mutator);
      var tmp0_0 = index_0;
      index_0 = tmp0_0 + 1 | 0;
      mask_0 = mask_0 ^ bit_0;
    }
    // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.internal.forEachOneBit' call
    var tmp6_forEachOneBit = newDataMap;
    var mask_1 = tmp6_forEachOneBit;
    var index_1 = 0;
    while (!(mask_1 === 0)) {
      var bit_1 = takeLowestOneBit(mask_1);
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.mutablePutAll.<anonymous>' call
      var tmp7__anonymous__b0knam = index_1;
      var newKeyIndex = imul(tmp7__anonymous__b0knam, 2);
      if (!otherNode.m1j(bit_1)) {
        var oldKeyIndex = this.k1j(bit_1);
        mutableNode.v1h_1[newKeyIndex] = keyAtIndex(this, oldKeyIndex);
        mutableNode.v1h_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(this, oldKeyIndex);
      } else {
        var oldKeyIndex_0 = otherNode.k1j(bit_1);
        mutableNode.v1h_1[newKeyIndex] = keyAtIndex(otherNode, oldKeyIndex_0);
        mutableNode.v1h_1[newKeyIndex + 1 | 0] = valueAtKeyIndex(otherNode, oldKeyIndex_0);
        if (this.m1j(bit_1)) {
          var tmp0_this = intersectionCounter;
          var tmp1 = tmp0_this.o1i_1;
          tmp0_this.o1i_1 = tmp1 + 1 | 0;
        }
      }
      var tmp0_1 = index_1;
      index_1 = tmp0_1 + 1 | 0;
      mask_1 = mask_1 ^ bit_1;
    }
    return elementsIdentityEquals(this, mutableNode) ? this : elementsIdentityEquals(otherNode, mutableNode) ? otherNode : mutableNode;
  };
  TrieNode.prototype.y1h = function (keyHash, key, value, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      var keyIndex = this.k1j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        if (valueAtKeyIndex(this, keyIndex) === value)
          return null;
        return asUpdateResult(updateValueAtIndex(this, keyIndex, value));
      }
      return asInsertResult(moveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift));
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1j(keyPositionMask);
      var targetNode = this.o1j(nodeIndex);
      var tmp;
      if (shift === 30) {
        var tmp0_elvis_lhs = collisionPut(targetNode, key, value);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp = tmp_0;
      } else {
        var tmp1_elvis_lhs = targetNode.y1h(keyHash, key, value, shift + 5 | 0);
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      }
      var putResult = tmp;
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.ModificationResult.replaceNode.<anonymous>' call
      var tmp_2 = putResult;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.external.kotlinx.collections.immutable.implementations.immutableMap.TrieNode.put.<anonymous>' call
      var tmp0__anonymous__q1qw7t = putResult.z1h_1;
      tmp$ret$0 = updateNodeAtIndex(this, nodeIndex, keyPositionMask, tmp0__anonymous__q1qw7t);
      tmp_2.z1h_1 = tmp$ret$0;
      tmp$ret$1 = putResult;
      tmp$ret$2 = tmp$ret$1;
      return tmp$ret$2;
    }
    return asInsertResult(insertEntryAt(this, keyPositionMask, key, value));
  };
  TrieNode.prototype.m1i = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      var keyIndex = this.k1j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        mutator.j1i_1 = valueAtKeyIndex(this, keyIndex);
        if (valueAtKeyIndex(this, keyIndex) === value) {
          return this;
        }
        return mutableUpdateValueAtIndex(this, keyIndex, value, mutator);
      }
      var tmp0_this = mutator;
      var tmp1 = tmp0_this.l1i_1;
      tmp0_this.b1f(tmp1 + 1 | 0);
      return mutableMoveEntryToNode(this, keyIndex, keyPositionMask, keyHash, key, value, shift, mutator.h1i_1);
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1j(keyPositionMask);
      var targetNode = this.o1j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionPut(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.m1i(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      if (targetNode === newNode) {
        return this;
      }
      return mutableUpdateNodeAtIndex(this, nodeIndex, newNode, mutator.h1i_1);
    }
    var tmp2_this = mutator;
    var tmp3 = tmp2_this.l1i_1;
    tmp2_this.b1f(tmp3 + 1 | 0);
    return mutableInsertEntryAt(this, keyPositionMask, key, value, mutator.h1i_1);
  };
  TrieNode.prototype.b1i = function (keyHash, key, shift) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      var keyIndex = this.k1j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return removeEntryAtIndex(this, keyIndex, keyPositionMask);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1j(keyPositionMask);
      var targetNode = this.o1j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = collisionRemove(targetNode, key);
      } else {
        tmp = targetNode.b1i(keyHash, key, shift + 5 | 0);
      }
      var newNode = tmp;
      return replaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask);
    }
    return this;
  };
  TrieNode.prototype.p1i = function (keyHash, key, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      var keyIndex = this.k1j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex))) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1j(keyPositionMask);
      var targetNode = this.o1j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove(targetNode, key, mutator);
      } else {
        tmp = targetNode.p1i(keyHash, key, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.h1i_1);
    }
    return this;
  };
  TrieNode.prototype.r1i = function (keyHash, key, value, shift, mutator) {
    var keyPositionMask = 1 << indexSegment_0(keyHash, shift);
    if (this.m1j(keyPositionMask)) {
      var keyIndex = this.k1j(keyPositionMask);
      if (equals(key, keyAtIndex(this, keyIndex)) ? equals(value, valueAtKeyIndex(this, keyIndex)) : false) {
        return mutableRemoveEntryAtIndex(this, keyIndex, keyPositionMask, mutator);
      }
      return this;
    }
    if (hasNodeAt(this, keyPositionMask)) {
      var nodeIndex = this.n1j(keyPositionMask);
      var targetNode = this.o1j(nodeIndex);
      var tmp;
      if (shift === 30) {
        tmp = mutableCollisionRemove_0(targetNode, key, value, mutator);
      } else {
        tmp = targetNode.r1i(keyHash, key, value, shift + 5 | 0, mutator);
      }
      var newNode = tmp;
      return mutableReplaceNode(this, targetNode, newNode, nodeIndex, keyPositionMask, mutator.h1i_1);
    }
    return this;
  };
  TrieNode.$metadata$ = classMeta('TrieNode');
  function get_ENTRY_SIZE() {
    return ENTRY_SIZE;
  }
  var ENTRY_SIZE;
  function insertEntryAtIndex(_this__u8e3s4, keyIndex, key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length + 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp1_copyInto, keyIndex, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function replaceNodeWithEntry(_this__u8e3s4, nodeIndex, keyIndex, key, value) {
    var newBuffer = copyOf_0(_this__u8e3s4, _this__u8e3s4.length + 1 | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = nodeIndex + 2 | 0;
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(newBuffer, newBuffer, tmp0_copyInto, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$0 = newBuffer;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = keyIndex + 2 | 0;
    arrayCopy(newBuffer, newBuffer, tmp3_copyInto, keyIndex, nodeIndex);
    tmp$ret$1 = newBuffer;
    newBuffer[keyIndex] = key;
    newBuffer[keyIndex + 1 | 0] = value;
    return newBuffer;
  }
  function removeNodeAtIndex_0(_this__u8e3s4, nodeIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, nodeIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = nodeIndex + 1 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, nodeIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function get_LOG_MAX_BRANCHING_FACTOR() {
    return LOG_MAX_BRANCHING_FACTOR;
  }
  var LOG_MAX_BRANCHING_FACTOR;
  function replaceEntryWithNode(_this__u8e3s4, keyIndex, nodeIndex, newNode) {
    var newNodeIndex = nodeIndex - 2 | 0;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = (_this__u8e3s4.length - 2 | 0) + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, nodeIndex);
    tmp$ret$2 = newBuffer;
    newBuffer[newNodeIndex] = newNode;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = newNodeIndex + 1 | 0;
    var tmp3_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, tmp2_copyInto, nodeIndex, tmp3_copyInto);
    tmp$ret$3 = newBuffer;
    return newBuffer;
  }
  function get_MAX_SHIFT() {
    return MAX_SHIFT;
  }
  var MAX_SHIFT;
  function indexSegment_0(index, shift) {
    return index >> shift & 31;
  }
  function removeEntryAtIndex_0(_this__u8e3s4, keyIndex) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = _this__u8e3s4.length - 2 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var newBuffer = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(_this__u8e3s4, newBuffer, 0, 0, keyIndex);
    tmp$ret$1 = newBuffer;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp1_copyInto = keyIndex + 2 | 0;
    var tmp2_copyInto = _this__u8e3s4.length;
    arrayCopy(_this__u8e3s4, newBuffer, keyIndex, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$2 = newBuffer;
    return newBuffer;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.t1f_1 = new PersistentOrderedSet(EndOfChain_getInstance(), EndOfChain_getInstance(), Companion_getInstance_5().s1f());
  }
  Companion_5.prototype.u1f = function () {
    return this.t1f_1;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PersistentOrderedSet(firstElement, lastElement, hashMap) {
    Companion_getInstance_7();
    AbstractSet.call(this);
    this.y1k_1 = firstElement;
    this.z1k_1 = lastElement;
    this.a1l_1 = hashMap;
  }
  PersistentOrderedSet.prototype.h = function () {
    return this.a1l_1.r1h_1;
  };
  PersistentOrderedSet.prototype.k = function (element) {
    return this.a1l_1.g2(element);
  };
  PersistentOrderedSet.prototype.a = function (element) {
    if (this.a1l_1.g2(element)) {
      return this;
    }
    if (this.j()) {
      var newMap = this.a1l_1.w2(element, Links_init_$Create$());
      return new PersistentOrderedSet(element, element, newMap);
    }
    var tmp = this.z1k_1;
    var lastElement = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var lastLinks = ensureNotNull(this.a1l_1.k2(lastElement));
    var newMap_0 = this.a1l_1.w2(lastElement, lastLinks.d1l(element)).w2(element, Links_init_$Create$_0(lastElement));
    return new PersistentOrderedSet(this.y1k_1, element, newMap_0);
  };
  PersistentOrderedSet.prototype.y2 = function (element) {
    var tmp0_elvis_lhs = this.a1l_1.k2(element);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var links = tmp;
    var newMap = this.a1l_1.x2(element);
    if (links.e1l()) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      var tmp0_get = newMap;
      var tmp1_get = links.b1l_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).k2(tmp1_get);
      var previousLinks = ensureNotNull(tmp$ret$0);
      var tmp_0 = newMap;
      var tmp_1 = links.b1l_1;
      newMap = tmp_0.w2((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), previousLinks.d1l(links.c1l_1));
    }
    if (links.g1l()) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.get' call
      var tmp2_get = newMap;
      var tmp3_get = links.c1l_1;
      tmp$ret$1 = (isInterface(tmp2_get, Map) ? tmp2_get : THROW_CCE()).k2(tmp3_get);
      var nextLinks = ensureNotNull(tmp$ret$1);
      var tmp_2 = newMap;
      var tmp_3 = links.c1l_1;
      newMap = tmp_2.w2((tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE(), nextLinks.f1l(links.b1l_1));
    }
    var newFirstElement = !links.e1l() ? links.c1l_1 : this.y1k_1;
    var newLastElement = !links.g1l() ? links.b1l_1 : this.z1k_1;
    return new PersistentOrderedSet(newFirstElement, newLastElement, newMap);
  };
  PersistentOrderedSet.prototype.e = function () {
    return new PersistentOrderedSetIterator(this.y1k_1, this.a1l_1);
  };
  PersistentOrderedSet.$metadata$ = classMeta('PersistentOrderedSet', [PersistentSet], undefined, undefined, undefined, AbstractSet.prototype);
  function Links_init_$Init$($this) {
    Links.call($this, EndOfChain_getInstance(), EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$() {
    return Links_init_$Init$(Object.create(Links.prototype));
  }
  function Links_init_$Init$_0(previous, $this) {
    Links.call($this, previous, EndOfChain_getInstance());
    return $this;
  }
  function Links_init_$Create$_0(previous) {
    return Links_init_$Init$_0(previous, Object.create(Links.prototype));
  }
  function Links(previous, next) {
    this.b1l_1 = previous;
    this.c1l_1 = next;
  }
  Links.prototype.d1l = function (newNext) {
    return new Links(this.b1l_1, newNext);
  };
  Links.prototype.f1l = function (newPrevious) {
    return new Links(newPrevious, this.c1l_1);
  };
  Links.prototype.g1l = function () {
    return !(this.c1l_1 === EndOfChain_getInstance());
  };
  Links.prototype.e1l = function () {
    return !(this.b1l_1 === EndOfChain_getInstance());
  };
  Links.$metadata$ = classMeta('Links');
  function checkHasNext_0($this) {
    if (!$this.f())
      throw NoSuchElementException_init_$Create$();
  }
  function PersistentOrderedSetIterator(nextElement, map) {
    this.h1l_1 = nextElement;
    this.i1l_1 = map;
    this.j1l_1 = 0;
  }
  PersistentOrderedSetIterator.prototype.f = function () {
    return this.j1l_1 < this.i1l_1.h();
  };
  PersistentOrderedSetIterator.prototype.g = function () {
    checkHasNext_0(this);
    var tmp = this.h1l_1;
    var result = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    var tmp0_this = this;
    var tmp1 = tmp0_this.j1l_1;
    tmp0_this.j1l_1 = tmp1 + 1 | 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_getOrElse = this.i1l_1;
    var tmp0_elvis_lhs = tmp0_getOrElse.k2(result);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw ConcurrentModificationException_init_$Create$_0('Hash code of an element (' + result + ') has changed after it was added to the persistent set.');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    tmp$ret$0 = tmp_1;
    tmp_0.h1l_1 = tmp$ret$0.c1l_1;
    return result;
  };
  PersistentOrderedSetIterator.$metadata$ = classMeta('PersistentOrderedSetIterator', [Iterator]);
  function EndOfChain() {
    EndOfChain_instance = this;
  }
  EndOfChain.$metadata$ = objectMeta('EndOfChain');
  var EndOfChain_instance;
  function EndOfChain_getInstance() {
    if (EndOfChain_instance == null)
      new EndOfChain();
    return EndOfChain_instance;
  }
  function forEachOneBit(_this__u8e3s4, body) {
    var mask = _this__u8e3s4;
    var index = 0;
    while (!(mask === 0)) {
      var bit = takeLowestOneBit(mask);
      body(bit, index);
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      mask = mask ^ bit;
    }
  }
  function ListImplementation() {
    ListImplementation_instance = this;
  }
  ListImplementation.prototype.r1 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  ListImplementation.prototype.p1 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  ListImplementation.$metadata$ = objectMeta('ListImplementation');
  var ListImplementation_instance;
  function ListImplementation_getInstance() {
    if (ListImplementation_instance == null)
      new ListImplementation();
    return ListImplementation_instance;
  }
  function MutabilityOwnership() {
  }
  MutabilityOwnership.$metadata$ = classMeta('MutabilityOwnership');
  function DeltaCounter_init_$Init$(count, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      count = 0;
    DeltaCounter.call($this, count);
    return $this;
  }
  function DeltaCounter_init_$Create$(count, $mask0, $marker) {
    return DeltaCounter_init_$Init$(count, $mask0, $marker, Object.create(DeltaCounter.prototype));
  }
  function DeltaCounter(count) {
    this.o1i_1 = count;
  }
  DeltaCounter.prototype.k1l = function (_set____db54di) {
    this.o1i_1 = _set____db54di;
  };
  DeltaCounter.prototype.l1l = function () {
    return this.o1i_1;
  };
  DeltaCounter.prototype.x1k = function (that) {
    var tmp0_this = this;
    tmp0_this.o1i_1 = tmp0_this.o1i_1 + that | 0;
  };
  DeltaCounter.prototype.toString = function () {
    return 'DeltaCounter(count=' + this.o1i_1 + ')';
  };
  DeltaCounter.prototype.hashCode = function () {
    return this.o1i_1;
  };
  DeltaCounter.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeltaCounter))
      return false;
    var tmp0_other_with_cast = other instanceof DeltaCounter ? other : THROW_CCE();
    if (!(this.o1i_1 === tmp0_other_with_cast.o1i_1))
      return false;
    return true;
  };
  DeltaCounter.$metadata$ = classMeta('DeltaCounter');
  function assert(condition) {
  }
  function composableLambdaInstance(key, tracked, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ComposableLambdaImpl(key, tracked);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.internal.composableLambdaInstance.<anonymous>' call
    tmp0_apply.r1l(block);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function replacableWith(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (_this__u8e3s4 instanceof RecomposeScopeImpl) {
        tmp_1 = other instanceof RecomposeScopeImpl;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = (!_this__u8e3s4.d16() ? true : equals(_this__u8e3s4, other)) ? true : equals(_this__u8e3s4.ts_1, other.ts_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function differentBits(slot) {
    return bitsForSlot(2, slot);
  }
  function sameBits(slot) {
    return bitsForSlot(1, slot);
  }
  function bitsForSlot(bits, slot) {
    var realSlot = slot % 10 | 0;
    return bits << (imul(realSlot, 3) + 1 | 0);
  }
  function composableLambda(composer, key, tracked, block) {
    composer.nr(key);
    var slot = composer.or();
    var tmp;
    if (slot === Companion_getInstance_1().qr_1) {
      var value = new ComposableLambdaImpl(key, tracked);
      composer.pr(value);
      tmp = value;
    } else {
      tmp = slot instanceof ComposableLambdaImpl ? slot : THROW_CCE();
    }
    var result = tmp;
    result.r1l(block);
    composer.rr();
    return result;
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastAny.<anonymous>' call
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastAll.<anonymous>' call
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function fastForEach(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.h());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = transform(item);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastGroupBy(_this__u8e3s4, keySelector) {
    // Inline function 'kotlin.contracts.contract' call
    var destination = HashMap_init_$Create$_0(_this__u8e3s4.h());
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>' call
        var key = keySelector(item);
        var tmp$ret$1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.k2(key);
        var tmp;
        if (value == null) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.fastGroupBy.<anonymous>.<anonymous>' call
          tmp$ret$0 = ArrayList_init_$Create$();
          var answer = tmp$ret$0;
          destination.w2(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        tmp$ret$1 = tmp;
        var list = tmp$ret$1;
        list.a(item);
      }
       while (inductionVariable <= last);
    return destination;
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinToString$default(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform);
  }
  function fastToSet(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = HashSet_init_$Create$_0(_this__u8e3s4.h());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.i(index);
        // Inline function 'androidx.compose.runtime.snapshots.fastToSet.<anonymous>.<anonymous>' call
        tmp0_also.a(item);
      }
       while (inductionVariable <= last);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.b(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.h() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.i(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.b(separator);
        }
        if (limit < 0 ? true : count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 ? count > limit : false) {
      buffer.b(truncated);
    }
    buffer.b(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.b(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.b(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.r4(element.q4_1);
        } else {
          _this__u8e3s4.b(toString_0(element));
        }
      }
    }
  }
  function get_emptyLambda() {
    init_properties_Snapshot_kt_28wf56();
    return emptyLambda;
  }
  var emptyLambda;
  function get_threadSnapshot() {
    init_properties_Snapshot_kt_28wf56();
    return threadSnapshot;
  }
  var threadSnapshot;
  function get_lock() {
    init_properties_Snapshot_kt_28wf56();
    return lock;
  }
  var lock;
  function set_openSnapshots(_set____db54di) {
    init_properties_Snapshot_kt_28wf56();
    openSnapshots = _set____db54di;
  }
  function get_openSnapshots() {
    init_properties_Snapshot_kt_28wf56();
    return openSnapshots;
  }
  var openSnapshots;
  function set_nextSnapshotId(_set____db54di) {
    init_properties_Snapshot_kt_28wf56();
    nextSnapshotId = _set____db54di;
  }
  function get_nextSnapshotId() {
    init_properties_Snapshot_kt_28wf56();
    return nextSnapshotId;
  }
  var nextSnapshotId;
  function get_pinningTable() {
    init_properties_Snapshot_kt_28wf56();
    return pinningTable;
  }
  var pinningTable;
  function get_applyObservers() {
    init_properties_Snapshot_kt_28wf56();
    return applyObservers;
  }
  var applyObservers;
  function get_globalWriteObservers() {
    init_properties_Snapshot_kt_28wf56();
    return globalWriteObservers;
  }
  var globalWriteObservers;
  function get_currentGlobalSnapshot() {
    init_properties_Snapshot_kt_28wf56();
    return currentGlobalSnapshot;
  }
  var currentGlobalSnapshot;
  function get_snapshotInitializer() {
    init_properties_Snapshot_kt_28wf56();
    return snapshotInitializer;
  }
  var snapshotInitializer;
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0(function_0) {
    this.s1l_1 = function_0;
  }
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0.prototype.sh = function () {
    return this.s1l_1();
  };
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0.$metadata$ = classMeta('sam$androidx_compose_runtime_snapshots_ObserverHandle$0', [ObserverHandle]);
  function sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(function_0) {
    this.t1l_1 = function_0;
  }
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0.prototype.sh = function () {
    return this.t1l_1();
  };
  sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0.$metadata$ = classMeta('sam$androidx_compose_runtime_snapshots_ObserverHandle$0', [ObserverHandle]);
  function Snapshot$Companion$registerApplyObserver$lambda($observer) {
    return function () {
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      get_applyObservers().y2($observer);
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return Unit_getInstance();
    };
  }
  function Snapshot$Companion$registerGlobalWriteObserver$lambda($observer) {
    return function () {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>.<anonymous>' call
      tmp$ret$0 = get_globalWriteObservers().y2($observer);
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      advanceGlobalSnapshot_0();
      return Unit_getInstance();
    };
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.iq = function () {
    return currentSnapshot();
  };
  Companion_6.prototype.x1a = function (readObserver, writeObserver) {
    var tmp = currentSnapshot();
    var tmp0_safe_receiver = tmp instanceof MutableSnapshot ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1l(readObserver, writeObserver);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot create a mutable snapshot of an read-only snapshot');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  Companion_6.prototype.y1c = function (observer) {
    advanceGlobalSnapshot(get_emptyLambda());
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerApplyObserver.<anonymous>' call
    tmp$ret$0 = get_applyObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = Snapshot$Companion$registerApplyObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0(tmp);
  };
  Companion_6.prototype.v1l = function (observer) {
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.registerGlobalWriteObserver.<anonymous>' call
    tmp$ret$0 = get_globalWriteObservers().a(observer);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    advanceGlobalSnapshot_0();
    var tmp = Snapshot$Companion$registerGlobalWriteObserver$lambda(observer);
    return new sam$androidx_compose_runtime_snapshots_ObserverHandle$0_0(tmp);
  };
  Companion_6.prototype.b1d = function () {
    return currentSnapshot().b1d();
  };
  Companion_6.prototype.u19 = function () {
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.Companion.sendApplyNotifications.<anonymous>' call
    var tmp0_safe_receiver = get_currentGlobalSnapshot().tj().w1l();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$0 = !tmp0_safe_receiver.j();
      tmp = tmp$ret$0;
    }
    tmp$ret$1 = tmp === true;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var changes = tmp$ret$4;
    if (changes) {
      advanceGlobalSnapshot_0();
    }
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_8() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Snapshot(id, invalid) {
    Companion_getInstance_8();
    this.x10_1 = invalid;
    this.y10_1 = id;
    this.z10_1 = false;
    this.a11_1 = !(id === 0) ? trackPinning(id, this.x1l()) : -1;
    this.b11_1 = 8;
  }
  Snapshot.prototype.y1l = function (_set____db54di) {
    this.x10_1 = _set____db54di;
  };
  Snapshot.prototype.x1l = function () {
    return this.x10_1;
  };
  Snapshot.prototype.z1l = function (_set____db54di) {
    this.y10_1 = _set____db54di;
  };
  Snapshot.prototype.c11 = function () {
    return this.y10_1;
  };
  Snapshot.prototype.sh = function () {
    this.z10_1 = true;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1m();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  Snapshot.prototype.c1m = function (block) {
    var previous = this.y1a();
    try {
      return block();
    }finally {
      this.z1a(previous);
    }
  };
  Snapshot.prototype.y1a = function () {
    var previous = get_threadSnapshot().tj();
    get_threadSnapshot().c18(this);
    return previous;
  };
  Snapshot.prototype.z1a = function (snapshot) {
    get_threadSnapshot().c18(snapshot);
  };
  Snapshot.prototype.d1m = function () {
    return this.z10_1;
  };
  Snapshot.prototype.e1m = function () {
    return this.a11_1 >= 0;
  };
  Snapshot.prototype.i1m = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.j1m();
    this.k1m();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  Snapshot.prototype.j1m = function () {
    set_openSnapshots(get_openSnapshots().p1m(this.c11()));
  };
  Snapshot.prototype.k1m = function () {
    this.b1m();
  };
  Snapshot.prototype.q1m = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = !this.z10_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.validateNotDisposed.<anonymous>' call
      tmp$ret$0 = 'Cannot use a disposed snapshot';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  Snapshot.prototype.b1m = function () {
    if (this.a11_1 >= 0) {
      releasePinningLocked(this.a11_1);
      this.a11_1 = -1;
    }
  };
  Snapshot.prototype.r1m = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.a11_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.Snapshot.takeoverPinnedSnapshot.<anonymous>' call
    this.a11_1 = -1;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Snapshot.$metadata$ = classMeta('Snapshot');
  function ObserverHandle() {
  }
  ObserverHandle.$metadata$ = interfaceMeta('ObserverHandle');
  function abandon($this) {
    var modified = $this.w1l();
    if (!(modified == null)) {
      $this.s1m();
      $this.t1m(null);
      var id = $this.c11();
      var tmp0_iterator = modified.e();
      while (tmp0_iterator.f()) {
        var state = tmp0_iterator.g();
        var current = state.v1e();
        while (!(current == null)) {
          if (current.o1e_1 === id ? true : contains($this.i1b_1, current.o1e_1)) {
            current.o1e_1 = 0;
          }
          current = current.p1e_1;
        }
      }
    }
    $this.i1m();
  }
  function MutableSnapshot(id, invalid, readObserver, writeObserver) {
    Snapshot.call(this, id, invalid);
    this.f1b_1 = readObserver;
    this.g1b_1 = writeObserver;
    this.h1b_1 = null;
    this.i1b_1 = Companion_getInstance_9().u1m_1;
    this.j1b_1 = new Int32Array(0);
    this.k1b_1 = 1;
    this.l1b_1 = false;
    this.m1b_1 = 8;
  }
  MutableSnapshot.prototype.f1m = function () {
    return this.f1b_1;
  };
  MutableSnapshot.prototype.g1m = function () {
    return this.g1b_1;
  };
  MutableSnapshot.prototype.u1l = function (readObserver, writeObserver) {
    this.q1m();
    this.v1m();
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.w1m(this.c11());
    var tmp$ret$8;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var newId = tmp0;
    set_openSnapshots(get_openSnapshots().x1m(newId));
    var currentInvalid = this.x1l();
    this.y1l(currentInvalid.x1m(newId));
    var tmp = addRange(currentInvalid, this.c11() + 1 | 0, newId);
    var tmp_0 = this.f1m();
    tmp$ret$0 = new NestedMutableSnapshot(newId, tmp, mergedReadObserver$default(readObserver, tmp_0, false, 4, null), mergedWriteObserver(writeObserver, this.g1m()), this);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.l1b_1 ? !this.z10_1 : false) {
      var previousId = this.c11();
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0_0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0_0 + 1 | 0);
      this.z1l(tmp0_0);
      set_openSnapshots(get_openSnapshots().x1m(this.c11()));
      tmp$ret$5 = Unit_getInstance();
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      this.y1l(addRange(this.x1l(), previousId + 1 | 0, this.c11()));
    }
    tmp$ret$8 = tmp0_also;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  };
  MutableSnapshot.prototype.n1b = function () {
    var modified = this.w1l();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(get_currentGlobalSnapshot().tj(), this, get_openSnapshots().p1m(get_currentGlobalSnapshot().tj().c11())) : null;
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
    validateOpen(this);
    var tmp;
    if (modified == null ? true : modified.h() === 0) {
      this.j1m();
      var previousGlobalSnapshot = get_currentGlobalSnapshot().tj();
      takeNewGlobalSnapshot(previousGlobalSnapshot, get_emptyLambda());
      var globalModified = previousGlobalSnapshot.w1l();
      var tmp_0;
      var tmp_1;
      if (!(globalModified == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp$ret$0 = !globalModified.j();
        tmp_1 = tmp$ret$0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = to(toMutableList(get_applyObservers()), globalModified);
      } else {
        tmp_0 = to(emptyList(), null);
      }
      tmp = tmp_0;
    } else {
      var previousGlobalSnapshot_0 = get_currentGlobalSnapshot().tj();
      var result = this.y1m(get_nextSnapshotId(), optimisticMerges_0, get_openSnapshots().p1m(previousGlobalSnapshot_0.c11()));
      if (!equals(result, Success_getInstance()))
        return result;
      this.j1m();
      takeNewGlobalSnapshot(previousGlobalSnapshot_0, get_emptyLambda());
      var globalModified_0 = previousGlobalSnapshot_0.w1l();
      this.t1m(null);
      previousGlobalSnapshot_0.t1m(null);
      tmp = to(toMutableList(get_applyObservers()), globalModified_0);
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_container = tmp$ret$4;
    var observers = tmp0_container.i5();
    var globalModified_1 = tmp0_container.j5();
    this.l1b_1 = true;
    var tmp_2;
    if (!(globalModified_1 == null)) {
      var tmp$ret$5;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$5 = !globalModified_1.j();
      tmp_2 = tmp$ret$5;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item(globalModified_1, this);
        }
         while (inductionVariable <= last);
    }
    var tmp_3;
    if (!(modified == null)) {
      var tmp$ret$6;
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp$ret$6 = !modified.j();
      tmp_3 = tmp$ret$6;
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = observers.h() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = observers.i(index_0);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.apply.<anonymous>' call
          item_0(modified, this);
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp1_synchronized = get_lock();
    var tmp$ret$7;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.k1m();
    tmp$ret$7 = Unit_getInstance();
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    return Success_getInstance();
  };
  MutableSnapshot.prototype.a1m = function () {
    return false;
  };
  MutableSnapshot.prototype.sh = function () {
    if (!this.z10_1) {
      Snapshot.prototype.sh.call(this);
      this.z1m(this);
    }
  };
  MutableSnapshot.prototype.a1n = function (snapshot) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.k1b_1;
    tmp0_this.k1b_1 = tmp1 + 1 | 0;
  };
  MutableSnapshot.prototype.z1m = function (snapshot) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.k1b_1 > 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    tmp0_this.k1b_1 = tmp0_this.k1b_1 - 1 | 0;
    if (tmp0_this.k1b_1 === 0) {
      if (!this.l1b_1) {
        abandon(this);
      }
    }
  };
  MutableSnapshot.prototype.b1d = function () {
    if (this.l1b_1 ? true : this.z10_1)
      return Unit_getInstance();
    this.b1n();
  };
  MutableSnapshot.prototype.j1m = function () {
    set_openSnapshots(get_openSnapshots().p1m(this.c11()).c1n(this.i1b_1));
  };
  MutableSnapshot.prototype.k1m = function () {
    this.d1n();
    Snapshot.prototype.k1m.call(this);
  };
  MutableSnapshot.prototype.s1m = function () {
    // Inline function 'kotlin.check' call
    var tmp0_check = !this.l1b_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotApplied.<anonymous>' call
      tmp$ret$0 = 'Unsupported operation on a snapshot that has been applied';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  MutableSnapshot.prototype.v1m = function () {
    // Inline function 'kotlin.check' call
    var tmp;
    if (!this.l1b_1) {
      tmp = true;
    } else {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.Snapshot.isPinned' call
      tmp$ret$0 = this.a11_1 >= 0;
      tmp = tmp$ret$0;
    }
    var tmp0_check = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.validateNotAppliedOrPinned.<anonymous>' call
      tmp$ret$1 = 'Unsupported operation on a disposed or applied snapshot';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  };
  MutableSnapshot.prototype.y1m = function (snapshotId, optimisticMerges, invalidSnapshots) {
    var mergedRecords = null;
    var start = this.x1l().x1m(this.c11()).e1n(this.i1b_1);
    var modified = ensureNotNull(this.w1l());
    var statesToRemove = null;
    var tmp0_iterator = modified.e();
    $l$loop_0: while (tmp0_iterator.f()) {
      var state = tmp0_iterator.g();
      var first = state.v1e();
      var tmp1_elvis_lhs = readable(first, snapshotId, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, this.c11(), start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, this.c11(), this.x1l());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var tmp4_safe_receiver = optimisticMerges;
        var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.k2(current);
        var tmp_2;
        if (tmp5_elvis_lhs == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
          tmp$ret$0 = state.x1e(previous, current, applied);
          tmp$ret$1 = tmp$ret$0;
          tmp_2 = tmp$ret$1;
        } else {
          tmp_2 = tmp5_elvis_lhs;
        }
        var merged = tmp_2;
        var tmp6_subject = merged;
        if (tmp6_subject == null)
          return new Failure(this);
        else if (equals(tmp6_subject, applied)) {
        } else if (equals(tmp6_subject, current)) {
          var tmp7_elvis_lhs = mergedRecords;
          var tmp_3;
          if (tmp7_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.also' call
            var tmp$ret$2;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$2 = ArrayList_init_$Create$();
            var tmp0_also = tmp$ret$2;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp0_also;
            tmp$ret$3 = tmp0_also;
            tmp_3 = tmp$ret$3;
          } else {
            tmp_3 = tmp7_elvis_lhs;
          }
          tmp_3.a(to(state, current.n1e()));
          var tmp8_elvis_lhs = statesToRemove;
          var tmp_4;
          if (tmp8_elvis_lhs == null) {
            var tmp$ret$5;
            // Inline function 'kotlin.also' call
            var tmp$ret$4;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$4 = ArrayList_init_$Create$();
            var tmp1_also = tmp$ret$4;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            statesToRemove = tmp1_also;
            tmp$ret$5 = tmp1_also;
            tmp_4 = tmp$ret$5;
          } else {
            tmp_4 = tmp8_elvis_lhs;
          }
          tmp_4.a(state);
        } else {
          var tmp9_elvis_lhs = mergedRecords;
          var tmp_5;
          if (tmp9_elvis_lhs == null) {
            var tmp$ret$7;
            // Inline function 'kotlin.also' call
            var tmp$ret$6;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$6 = ArrayList_init_$Create$();
            var tmp2_also = tmp$ret$6;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
            mergedRecords = tmp2_also;
            tmp$ret$7 = tmp2_also;
            tmp_5 = tmp$ret$7;
          } else {
            tmp_5 = tmp9_elvis_lhs;
          }
          tmp_5.a(!equals(merged, previous) ? to(state, merged) : to(state, previous.n1e()));
        }
      }
    }
    var tmp10_safe_receiver = mergedRecords;
    if (tmp10_safe_receiver == null)
      null;
    else {
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.b1n();
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp10_safe_receiver.h() - 1 | 0;
      var tmp_6;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp10_safe_receiver.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>.<anonymous>' call
          var tmp0_container = item;
          var state_0 = tmp0_container.i5();
          var stateRecord = tmp0_container.j5();
          stateRecord.o1e_1 = this.c11();
          var tmp$ret$10;
          // Inline function 'androidx.compose.runtime.snapshots.sync' call
          var tmp$ret$9;
          // Inline function 'androidx.compose.runtime.synchronized' call
          var tmp0_synchronized = get_lock();
          var tmp$ret$8;
          // Inline function 'kotlinx.atomicfu.locks.synchronized' call
          stateRecord.p1e_1 = state_0.v1e();
          state_0.w1e(stateRecord);
          tmp$ret$8 = Unit_getInstance();
          tmp$ret$9 = tmp$ret$8;
          tmp$ret$10 = tmp$ret$9;
        }
         while (inductionVariable <= last);
        tmp_6 = Unit_getInstance();
      }
      tmp$ret$11 = tmp_6;
    }
    var tmp11_safe_receiver = statesToRemove;
    if (tmp11_safe_receiver == null)
      null;
    else {
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.innerApplyLocked.<anonymous>' call
      tmp$ret$12 = modified.s5(tmp11_safe_receiver);
      tmp$ret$13 = tmp$ret$12;
    }
    return Success_getInstance();
  };
  MutableSnapshot.prototype.f1n = function (block) {
    this.w1m(this.c11());
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.l1b_1 ? !this.z10_1 : false) {
      var previousId = this.c11();
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.z1l(tmp0);
      set_openSnapshots(get_openSnapshots().x1m(this.c11()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      this.y1l(addRange(this.x1l(), previousId + 1 | 0, this.c11()));
    }
    tmp$ret$3 = tmp0_also;
    return tmp$ret$3;
  };
  MutableSnapshot.prototype.b1n = function () {
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance' call
    this.w1m(this.c11());
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    var tmp0_also = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.advance.<anonymous>' call
    if (!this.l1b_1 ? !this.z10_1 : false) {
      var previousId = this.c11();
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      this.z1l(tmp0);
      set_openSnapshots(get_openSnapshots().x1m(this.c11()));
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      this.y1l(addRange(this.x1l(), previousId + 1 | 0, this.c11()));
    }
    tmp$ret$4 = tmp0_also;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  MutableSnapshot.prototype.w1m = function (id) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i1b_1 = this.i1b_1.x1m(id);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  MutableSnapshot.prototype.g1n = function (id) {
    if (id >= 0) {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      var tmp0_plus = this.j1b_1;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.plus' call
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([id]);
      var tmp0_plus_0 = tmp$ret$0;
      tmp$ret$1 = primitiveArrayConcat([tmp0_plus, tmp0_plus_0]);
      tmp$ret$2 = tmp$ret$1;
      tmp.j1b_1 = tmp$ret$2;
    }
  };
  MutableSnapshot.prototype.h1n = function (handles) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = handles.length === 0;
    if (tmp$ret$0)
      return Unit_getInstance();
    var pinned = this.j1b_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$1 = pinned.length === 0;
    if (tmp$ret$1)
      this.j1b_1 = handles;
    else {
      var tmp = this;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.plus' call
      tmp$ret$2 = primitiveArrayConcat([pinned, handles]);
      tmp.j1b_1 = tmp$ret$2;
    }
  };
  MutableSnapshot.prototype.d1n = function () {
    var inductionVariable = 0;
    var last = this.j1b_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        releasePinningLocked(this.j1b_1[index]);
      }
       while (inductionVariable <= last);
  };
  MutableSnapshot.prototype.i1n = function (snapshots) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.i1b_1 = this.i1b_1.e1n(snapshots);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  MutableSnapshot.prototype.h1m = function (state) {
    var tmp0_elvis_lhs = this.w1l();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = HashSet_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.MutableSnapshot.recordModified.<anonymous>' call
      this.t1m(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp.a(state);
  };
  MutableSnapshot.prototype.t1m = function (_set____db54di) {
    this.h1b_1 = _set____db54di;
  };
  MutableSnapshot.prototype.w1l = function () {
    return this.h1b_1;
  };
  MutableSnapshot.prototype.j1n = function () {
    return this.l1b_1;
  };
  MutableSnapshot.$metadata$ = classMeta('MutableSnapshot', undefined, undefined, undefined, undefined, Snapshot.prototype);
  function Success() {
    Success_instance = this;
    SnapshotApplyResult.call(this);
    this.l1n_1 = 0;
  }
  Success.$metadata$ = objectMeta('Success', undefined, undefined, undefined, undefined, SnapshotApplyResult.prototype);
  var Success_instance;
  function Success_getInstance() {
    if (Success_instance == null)
      new Success();
    return Success_instance;
  }
  function Failure(snapshot) {
    SnapshotApplyResult.call(this);
    this.n1n_1 = snapshot;
    this.o1n_1 = 8;
  }
  Failure.$metadata$ = classMeta('Failure', undefined, undefined, undefined, undefined, SnapshotApplyResult.prototype);
  function SnapshotApplyResult() {
    this.p1n_1 = 0;
  }
  SnapshotApplyResult.$metadata$ = classMeta('SnapshotApplyResult');
  function GlobalSnapshot$_init_$lambda_36kgl8($tmp0_safe_receiver) {
    return function (state) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $tmp0_safe_receiver.h() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $tmp0_safe_receiver.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          item(state);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function GlobalSnapshot$takeNestedMutableSnapshot$lambda($readObserver, $writeObserver) {
    return function (invalid) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.takeNestedMutableSnapshot.<anonymous>.<anonymous>' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      tmp$ret$0 = tmp0;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      return new MutableSnapshot(tmp$ret$3, invalid, $readObserver, $writeObserver);
    };
  }
  function GlobalSnapshot(id, invalid) {
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$4;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp0_isNotEmpty = get_globalWriteObservers();
    tmp$ret$0 = !tmp0_isNotEmpty.j();
    if (tmp$ret$0) {
      tmp = toMutableList(get_globalWriteObservers());
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.GlobalSnapshot.<init>.<anonymous>.<anonymous>' call
      var tmp0_elvis_lhs = singleOrNull(tmp0_safe_receiver);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        tmp_1 = GlobalSnapshot$_init_$lambda_36kgl8(tmp0_safe_receiver);
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      tmp$ret$1 = tmp_1;
      tmp$ret$2 = tmp$ret$1;
      tmp_0 = tmp$ret$2;
    }
    tmp$ret$3 = tmp_0;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    MutableSnapshot.call(this, id, invalid, null, tmp$ret$6);
  }
  GlobalSnapshot.prototype.u1l = function (readObserver, writeObserver) {
    return takeNewSnapshot(GlobalSnapshot$takeNestedMutableSnapshot$lambda(readObserver, writeObserver));
  };
  GlobalSnapshot.prototype.b1d = function () {
    advanceGlobalSnapshot_0();
  };
  GlobalSnapshot.prototype.d1o = function (snapshot) {
    unsupported();
  };
  GlobalSnapshot.prototype.z1m = function (snapshot) {
    return this.d1o(snapshot);
  };
  GlobalSnapshot.prototype.e1o = function (snapshot) {
    unsupported();
  };
  GlobalSnapshot.prototype.a1n = function (snapshot) {
    return this.e1o(snapshot);
  };
  GlobalSnapshot.prototype.n1b = function () {
    throw IllegalStateException_init_$Create$('Cannot apply the global snapshot directly. Call Snapshot.advanceGlobalSnapshot');
  };
  GlobalSnapshot.prototype.sh = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.b1m();
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
  };
  GlobalSnapshot.$metadata$ = classMeta('GlobalSnapshot', undefined, undefined, undefined, undefined, MutableSnapshot.prototype);
  function sync(block) {
    init_properties_Snapshot_kt_28wf56();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    tmp$ret$0 = block();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function trackPinning(id, invalid) {
    init_properties_Snapshot_kt_28wf56();
    var pinned = invalid.f1o(id);
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.trackPinning.<anonymous>' call
    tmp$ret$0 = get_pinningTable().l1o(pinned);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function StateObject() {
  }
  StateObject.$metadata$ = interfaceMeta('StateObject');
  function releasePinningLocked(handle) {
    init_properties_Snapshot_kt_28wf56();
    get_pinningTable().m1o(handle);
  }
  function currentSnapshot() {
    init_properties_Snapshot_kt_28wf56();
    var tmp0_elvis_lhs = get_threadSnapshot().tj();
    return tmp0_elvis_lhs == null ? get_currentGlobalSnapshot().tj() : tmp0_elvis_lhs;
  }
  function advanceGlobalSnapshot(block) {
    init_properties_Snapshot_kt_28wf56();
    var tmp = get_snapshotInitializer();
    var previousGlobalSnapshot = tmp instanceof GlobalSnapshot ? tmp : THROW_CCE();
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
    previousGlobalSnapshot = get_currentGlobalSnapshot().tj();
    tmp$ret$0 = takeNewGlobalSnapshot(previousGlobalSnapshot, block);
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var result = tmp$ret$3;
    var modified = previousGlobalSnapshot.w1l();
    if (!(modified == null)) {
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$5;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
      tmp$ret$4 = toMutableList(get_applyObservers());
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var observers = tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = observers.h() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = observers.i(index);
          // Inline function 'androidx.compose.runtime.snapshots.advanceGlobalSnapshot.<anonymous>' call
          item(modified, previousGlobalSnapshot);
        }
         while (inductionVariable <= last);
    }
    return result;
  }
  function advanceGlobalSnapshot_0() {
    init_properties_Snapshot_kt_28wf56();
    return advanceGlobalSnapshot(advanceGlobalSnapshot$lambda);
  }
  function deactivate($this) {
    if (!$this.b1p_1) {
      $this.b1p_1 = true;
      $this.a1p_1.z1m($this);
    }
  }
  function NestedMutableSnapshot(id, invalid, readObserver, writeObserver, parent) {
    MutableSnapshot.call(this, id, invalid, readObserver, writeObserver);
    this.a1p_1 = parent;
    this.b1p_1 = false;
    this.a1p_1.a1n(this);
  }
  NestedMutableSnapshot.prototype.m1d = function () {
    return this.a1p_1;
  };
  NestedMutableSnapshot.prototype.sh = function () {
    if (!this.z10_1) {
      MutableSnapshot.prototype.sh.call(this);
      deactivate(this);
    }
  };
  NestedMutableSnapshot.prototype.n1b = function () {
    if (this.a1p_1.l1b_1 ? true : this.a1p_1.z10_1)
      return new Failure(this);
    var modified = this.w1l();
    var id = this.c11();
    var optimisticMerges_0 = !(modified == null) ? optimisticMerges(this.a1p_1, this, this.a1p_1.x1l()) : null;
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    validateOpen(this);
    if (modified == null ? true : modified.h() === 0) {
      this.i1m();
    } else {
      var result = this.y1m(this.a1p_1.c11(), optimisticMerges_0, this.a1p_1.x1l());
      if (!equals(result, Success_getInstance()))
        return result;
      var tmp0_elvis_lhs = this.a1p_1.w1l();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = HashSet_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.NestedMutableSnapshot.apply.<anonymous>.<anonymous>' call
        this.a1p_1.t1m(tmp0_also);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      tmp.a3(modified);
    }
    if (this.a1p_1.c11() < id) {
      this.a1p_1.b1n();
    }
    this.a1p_1.y1l(this.a1p_1.x1l().p1m(id).c1n(this.i1b_1));
    this.a1p_1.w1m(id);
    this.a1p_1.g1n(this.r1m());
    this.a1p_1.i1n(this.i1b_1);
    this.a1p_1.h1n(this.j1b_1);
    tmp$ret$1 = Unit_getInstance();
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    this.l1b_1 = true;
    deactivate(this);
    return Success_getInstance();
  };
  NestedMutableSnapshot.$metadata$ = classMeta('NestedMutableSnapshot', undefined, undefined, undefined, undefined, MutableSnapshot.prototype);
  function addRange(_this__u8e3s4, from, until) {
    init_properties_Snapshot_kt_28wf56();
    var result = _this__u8e3s4;
    var inductionVariable = from;
    if (inductionVariable < until)
      do {
        var invalidId = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result.x1m(invalidId);
      }
       while (inductionVariable < until);
    return result;
  }
  function mergedReadObserver(readObserver, parentObserver, mergeReadObserver) {
    init_properties_Snapshot_kt_28wf56();
    var parentObserver_0 = mergeReadObserver ? parentObserver : null;
    var tmp;
    if ((!(readObserver == null) ? !(parentObserver_0 == null) : false) ? !equals(readObserver, parentObserver_0) : false) {
      tmp = mergedReadObserver$lambda(readObserver, parentObserver_0);
    } else {
      var tmp0_elvis_lhs = readObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver_0 : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function mergedReadObserver$default(readObserver, parentObserver, mergeReadObserver, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      mergeReadObserver = true;
    return mergedReadObserver(readObserver, parentObserver, mergeReadObserver);
  }
  function mergedWriteObserver(writeObserver, parentObserver) {
    init_properties_Snapshot_kt_28wf56();
    var tmp;
    if ((!(writeObserver == null) ? !(parentObserver == null) : false) ? !equals(writeObserver, parentObserver) : false) {
      tmp = mergedWriteObserver$lambda(writeObserver, parentObserver);
    } else {
      var tmp0_elvis_lhs = writeObserver;
      tmp = tmp0_elvis_lhs == null ? parentObserver : tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StateRecord() {
    this.o1e_1 = currentSnapshot().c11();
    this.p1e_1 = null;
    this.q1e_1 = 8;
  }
  StateRecord.prototype.r1e = function (_set____db54di) {
    this.o1e_1 = _set____db54di;
  };
  StateRecord.prototype.s1e = function (_set____db54di) {
    this.p1e_1 = _set____db54di;
  };
  StateRecord.$metadata$ = classMeta('StateRecord');
  function optimisticMerges(currentSnapshot, applyingSnapshot, invalidSnapshots) {
    init_properties_Snapshot_kt_28wf56();
    var modified = applyingSnapshot.w1l();
    var id = currentSnapshot.c11();
    if (modified == null)
      return null;
    var start = applyingSnapshot.x1l().x1m(applyingSnapshot.c11()).e1n(applyingSnapshot.i1b_1);
    var result = null;
    var tmp0_iterator = modified.e();
    $l$loop_0: while (tmp0_iterator.f()) {
      var state = tmp0_iterator.g();
      var first = state.v1e();
      var tmp1_elvis_lhs = readable(first, id, invalidSnapshots);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var current = tmp;
      var tmp2_elvis_lhs = readable(first, id, start);
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var previous = tmp_0;
      if (!equals(current, previous)) {
        var tmp3_elvis_lhs = readable(first, applyingSnapshot.c11(), applyingSnapshot.x1l());
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          readError();
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var applied = tmp_1;
        var merged = state.x1e(previous, current, applied);
        if (!(merged == null)) {
          // Inline function 'kotlin.collections.set' call
          var tmp4_elvis_lhs = result;
          var tmp_2;
          if (tmp4_elvis_lhs == null) {
            var tmp$ret$1;
            // Inline function 'kotlin.also' call
            var tmp$ret$0;
            // Inline function 'kotlin.collections.hashMapOf' call
            tmp$ret$0 = HashMap_init_$Create$();
            var tmp0_also = tmp$ret$0;
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'androidx.compose.runtime.snapshots.optimisticMerges.<anonymous>' call
            result = tmp0_also;
            tmp$ret$1 = tmp0_also;
            tmp_2 = tmp$ret$1;
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }
          var tmp1_set = tmp_2;
          tmp1_set.w2(current, merged);
        } else {
          return null;
        }
      }
    }
    return result;
  }
  function validateOpen(snapshot) {
    init_properties_Snapshot_kt_28wf56();
    if (!get_openSnapshots().i(snapshot.c11())) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Snapshot is not open');
    }
  }
  function takeNewGlobalSnapshot(previousGlobalSnapshot, block) {
    init_properties_Snapshot_kt_28wf56();
    var result = block(get_openSnapshots().p1m(previousGlobalSnapshot.c11()));
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0 = get_nextSnapshotId();
    set_nextSnapshotId(tmp0 + 1 | 0);
    var globalId = tmp0;
    set_openSnapshots(get_openSnapshots().p1m(previousGlobalSnapshot.c11()));
    get_currentGlobalSnapshot().f16(new GlobalSnapshot(globalId, get_openSnapshots()));
    previousGlobalSnapshot.sh();
    set_openSnapshots(get_openSnapshots().x1m(globalId));
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return result;
  }
  function readable(r, id, invalid) {
    init_properties_Snapshot_kt_28wf56();
    var current = r;
    var candidate = null;
    while (!(current == null)) {
      if (valid(current, id, invalid)) {
        candidate = candidate == null ? current : candidate.o1e_1 < current.o1e_1 ? current : candidate;
      }
      current = current.p1e_1;
    }
    if (!(candidate == null)) {
      return candidate instanceof StateRecord ? candidate : THROW_CCE();
    }
    return null;
  }
  function readError() {
    init_properties_Snapshot_kt_28wf56();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied';
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function takeNewSnapshot(block) {
    init_properties_Snapshot_kt_28wf56();
    return advanceGlobalSnapshot(takeNewSnapshot$lambda(block));
  }
  function valid(data, snapshot, invalid) {
    init_properties_Snapshot_kt_28wf56();
    return valid_0(snapshot, data.o1e_1, invalid);
  }
  function valid_0(currentSnapshot, candidateSnapshot, invalid) {
    init_properties_Snapshot_kt_28wf56();
    return (!(candidateSnapshot === 0) ? candidateSnapshot <= currentSnapshot : false) ? !invalid.i(candidateSnapshot) : false;
  }
  function readable_0(_this__u8e3s4, state) {
    init_properties_Snapshot_kt_28wf56();
    var snapshot = Companion_getInstance_8().iq();
    var tmp0_safe_receiver = snapshot.f1m();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
    var tmp1_elvis_lhs = readable(_this__u8e3s4, snapshot.c11(), snapshot.x1l());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$1;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.readable.<anonymous>' call
      var syncSnapshot = Companion_getInstance_8().iq();
      tmp$ret$0 = readable(_this__u8e3s4, syncSnapshot.c11(), syncSnapshot.x1l());
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp = tmp$ret$3;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    return tmp_0;
  }
  function withCurrent(_this__u8e3s4, block) {
    init_properties_Snapshot_kt_28wf56();
    return block(current(_this__u8e3s4));
  }
  function overwritable(_this__u8e3s4, state, candidate, block) {
    init_properties_Snapshot_kt_28wf56();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
    snapshot = Companion_getInstance_8().iq();
    tmp$ret$0 = block(overwritableRecord(_this__u8e3s4, state, snapshot, candidate));
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp0_also = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.overwritable.<anonymous>' call
    notifyWrite(snapshot, state);
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  }
  function current(r) {
    init_properties_Snapshot_kt_28wf56();
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_8().iq();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>' call
    var tmp0_elvis_lhs = readable(r, tmp0_let.c11(), tmp0_let.x1l());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = Companion_getInstance_8().iq();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.current.<anonymous>.<anonymous>.<anonymous>' call
      tmp$ret$0 = readable(r, tmp0_let_0.c11(), tmp0_let_0.x1l());
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp = tmp$ret$5;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      readError();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    tmp$ret$6 = tmp_0;
    tmp$ret$7 = tmp$ret$6;
    return tmp$ret$7;
  }
  function notifyWrite(snapshot, state) {
    init_properties_Snapshot_kt_28wf56();
    var tmp0_safe_receiver = snapshot.g1m();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(state);
  }
  function overwritableRecord(_this__u8e3s4, state, snapshot, candidate) {
    init_properties_Snapshot_kt_28wf56();
    if (snapshot.a1m()) {
      snapshot.h1m(state);
    }
    var id = snapshot.c11();
    if (candidate.o1e_1 === id)
      return candidate;
    var newData = newOverwritableRecord(_this__u8e3s4, state);
    newData.o1e_1 = id;
    snapshot.h1m(state);
    return newData;
  }
  function newOverwritableRecord(_this__u8e3s4, state) {
    init_properties_Snapshot_kt_28wf56();
    var tmp = used(state);
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof StateRecord) ? tmp : THROW_CCE();
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecord.<anonymous>' call
      tmp0_safe_receiver.o1e_1 = IntCompanionObject_getInstance().x_1;
      tmp$ret$0 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = _this__u8e3s4.n1e();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.newOverwritableRecord.<anonymous>' call
      tmp0_apply.o1e_1 = IntCompanionObject_getInstance().x_1;
      tmp0_apply.p1e_1 = state.v1e();
      state.w1e(tmp0_apply instanceof StateRecord ? tmp0_apply : THROW_CCE());
      tmp$ret$1 = tmp0_apply;
      var tmp_2 = tmp$ret$1;
      tmp_1 = tmp_2 instanceof StateRecord ? tmp_2 : THROW_CCE();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function used(state) {
    init_properties_Snapshot_kt_28wf56();
    var current = state.v1e();
    var validRecord = null;
    var reuseLimit = get_pinningTable().c1p(get_nextSnapshotId()) - 1 | 0;
    var invalid = Companion_getInstance_9().u1m_1;
    while (!(current == null)) {
      var currentId = current.o1e_1;
      if (currentId === 0) {
        return current;
      }
      if (valid(current, reuseLimit, invalid)) {
        if (validRecord == null) {
          validRecord = current;
        } else {
          return current.o1e_1 < validRecord.o1e_1 ? current : validRecord;
        }
      }
      current = current.p1e_1;
    }
    return null;
  }
  function writable(_this__u8e3s4, state, block) {
    init_properties_Snapshot_kt_28wf56();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$4;
    // Inline function 'kotlin.also' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = get_lock();
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_8().iq();
    tmp$ret$0 = block(writableRecord(_this__u8e3s4, state, snapshot));
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp0_also = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, state);
    tmp$ret$4 = tmp0_also;
    return tmp$ret$4;
  }
  function writableRecord(_this__u8e3s4, state, snapshot) {
    init_properties_Snapshot_kt_28wf56();
    if (snapshot.a1m()) {
      snapshot.h1m(state);
    }
    var id = snapshot.c11();
    var tmp0_elvis_lhs = readable(_this__u8e3s4, id, snapshot.x1l());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      readError();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var readData = tmp;
    if (readData.o1e_1 === snapshot.c11())
      return readData;
    var newData = newWritableRecord(readData, state, snapshot);
    snapshot.h1m(state);
    return newData;
  }
  function newWritableRecord(_this__u8e3s4, state, snapshot) {
    init_properties_Snapshot_kt_28wf56();
    var newData = newOverwritableRecord(_this__u8e3s4, state);
    newData.m1e(_this__u8e3s4);
    newData.o1e_1 = snapshot.c11();
    return newData;
  }
  function emptyLambda$lambda(it) {
    init_properties_Snapshot_kt_28wf56();
    return Unit_getInstance();
  }
  function advanceGlobalSnapshot$lambda(it) {
    init_properties_Snapshot_kt_28wf56();
    return Unit_getInstance();
  }
  function mergedReadObserver$lambda($readObserver, $parentObserver) {
    return function (state) {
      $readObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function mergedWriteObserver$lambda($writeObserver, $parentObserver) {
    return function (state) {
      $writeObserver(state);
      $parentObserver(state);
      return Unit_getInstance();
    };
  }
  function takeNewSnapshot$lambda($block) {
    return function (invalid) {
      var result = $block(invalid);
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = get_lock();
      var tmp$ret$0;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      set_openSnapshots(get_openSnapshots().x1m(result.c11()));
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return result;
    };
  }
  var properties_initialized_Snapshot_kt_2vlcoq;
  function init_properties_Snapshot_kt_28wf56() {
    if (properties_initialized_Snapshot_kt_2vlcoq) {
    } else {
      properties_initialized_Snapshot_kt_2vlcoq = true;
      emptyLambda = emptyLambda$lambda;
      threadSnapshot = new SnapshotThreadLocal();
      lock = createSynchronizedObject();
      openSnapshots = Companion_getInstance_9().u1m_1;
      nextSnapshotId = 1;
      pinningTable = new SnapshotDoubleIndexHeap();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$();
      applyObservers = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0_0 = ArrayList_init_$Create$();
      globalWriteObservers = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'kotlin.also' call
      var tmp0 = get_nextSnapshotId();
      set_nextSnapshotId(tmp0 + 1 | 0);
      var tmp0_also = new GlobalSnapshot(tmp0, Companion_getInstance_9().u1m_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.currentGlobalSnapshot.<anonymous>' call
      set_openSnapshots(get_openSnapshots().x1m(tmp0_also.c11()));
      tmp$ret$0_1 = tmp0_also;
      currentGlobalSnapshot = new AtomicReference(tmp$ret$0_1);
      snapshotInitializer = get_currentGlobalSnapshot().tj();
    }
  }
  function shiftUp($this, index) {
    var values = $this.h1o_1;
    var value = values[index];
    var current = index;
    $l$loop: while (current > 0) {
      var parent = ((current + 1 | 0) >> 1) - 1 | 0;
      if (values[parent] > value) {
        swap($this, parent, current);
        current = parent;
        continue $l$loop;
      }
      break $l$loop;
    }
  }
  function shiftDown($this, index) {
    var values = $this.h1o_1;
    var half = $this.g1o_1 >> 1;
    var current = index;
    while (current < half) {
      var right = (current + 1 | 0) << 1;
      var left = right - 1 | 0;
      if (right < $this.g1o_1 ? values[right] < values[left] : false) {
        if (values[right] < values[current]) {
          swap($this, right, current);
          current = right;
        } else
          return Unit_getInstance();
      } else if (values[left] < values[current]) {
        swap($this, left, current);
        current = left;
      } else
        return Unit_getInstance();
    }
  }
  function swap($this, a, b) {
    var values = $this.h1o_1;
    var index = $this.i1o_1;
    var handles = $this.j1o_1;
    var t = values[a];
    values[a] = values[b];
    values[b] = t;
    t = index[a];
    index[a] = index[b];
    index[b] = t;
    handles[index[a]] = a;
    handles[index[b]] = b;
  }
  function ensure($this, atLeast) {
    var capacity = $this.h1o_1.length;
    if (atLeast <= capacity)
      return Unit_getInstance();
    var newCapacity = imul(capacity, 2);
    var newValues = new Int32Array(newCapacity);
    var newIndex = new Int32Array(newCapacity);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.h1o_1;
    var tmp1_copyInto = tmp0_copyInto.length;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyInto;
    tmp$ret$1 = tmp$ret$0;
    var tmp = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = newValues;
    tmp$ret$3 = tmp$ret$2;
    arrayCopy(tmp, tmp$ret$3, 0, 0, tmp1_copyInto);
    tmp$ret$4 = newValues;
    var tmp$ret$9;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp2_copyInto = $this.i1o_1;
    var tmp3_copyInto = tmp2_copyInto.length;
    var tmp$ret$6;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp2_copyInto;
    tmp$ret$6 = tmp$ret$5;
    var tmp_0 = tmp$ret$6;
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = newIndex;
    tmp$ret$8 = tmp$ret$7;
    arrayCopy(tmp_0, tmp$ret$8, 0, 0, tmp3_copyInto);
    tmp$ret$9 = newIndex;
    $this.h1o_1 = newValues;
    $this.i1o_1 = newIndex;
  }
  function allocateHandle($this) {
    var capacity = $this.j1o_1.length;
    if ($this.k1o_1 >= capacity) {
      var tmp = 0;
      var tmp_0 = imul(capacity, 2);
      var tmp_1 = new Int32Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.allocateHandle.<anonymous>' call
        tmp$ret$0 = tmp_2 + 1 | 0;
        tmp_1[tmp_2] = tmp$ret$0;
        tmp = tmp + 1 | 0;
      }
      var newHandles = tmp_1;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.copyInto' call
      var tmp0_copyInto = $this.j1o_1;
      var tmp1_copyInto = tmp0_copyInto.length;
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_copyInto;
      tmp$ret$2 = tmp$ret$1;
      var tmp_3 = tmp$ret$2;
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = newHandles;
      tmp$ret$4 = tmp$ret$3;
      arrayCopy(tmp_3, tmp$ret$4, 0, 0, tmp1_copyInto);
      tmp$ret$5 = newHandles;
      $this.j1o_1 = newHandles;
    }
    var handle = $this.k1o_1;
    $this.k1o_1 = $this.j1o_1[$this.k1o_1];
    return handle;
  }
  function freeHandle($this, handle) {
    $this.j1o_1[handle] = $this.k1o_1;
    $this.k1o_1 = handle;
  }
  function SnapshotDoubleIndexHeap() {
    this.g1o_1 = 0;
    this.h1o_1 = new Int32Array(16);
    this.i1o_1 = new Int32Array(16);
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = 16;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotDoubleIndexHeap.handles.<anonymous>' call
      tmp$ret$0 = tmp_3 + 1 | 0;
      tmp_2[tmp_3] = tmp$ret$0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.j1o_1 = tmp_2;
    this.k1o_1 = 0;
  }
  SnapshotDoubleIndexHeap.prototype.c1p = function (default_0) {
    return this.g1o_1 > 0 ? this.h1o_1[0] : default_0;
  };
  SnapshotDoubleIndexHeap.prototype.l1o = function (value) {
    ensure(this, this.g1o_1 + 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.g1o_1;
    tmp0_this.g1o_1 = tmp1 + 1 | 0;
    var i = tmp1;
    var handle = allocateHandle(this);
    this.h1o_1[i] = value;
    this.i1o_1[i] = handle;
    this.j1o_1[handle] = i;
    shiftUp(this, i);
    return handle;
  };
  SnapshotDoubleIndexHeap.prototype.m1o = function (handle) {
    var i = this.j1o_1[handle];
    swap(this, i, this.g1o_1 - 1 | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.g1o_1;
    tmp0_this.g1o_1 = tmp1 - 1 | 0;
    shiftUp(this, i);
    shiftDown(this, i);
    freeHandle(this, handle);
  };
  SnapshotDoubleIndexHeap.$metadata$ = classMeta('SnapshotDoubleIndexHeap');
  function Companion_7() {
    Companion_instance_7 = this;
    this.u1m_1 = new SnapshotIdSet(new Long(0, 0), new Long(0, 0), 0, null);
  }
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_9() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function SnapshotIdSet$iterator$slambda(this$0, resultContinuation) {
    this.l1p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  SnapshotIdSet$iterator$slambda.prototype.u1p = function ($this$sequence, $cont) {
    var tmp = this.v1p($this$sequence, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  SnapshotIdSet$iterator$slambda.prototype.vc = function (p1, $cont) {
    return this.u1p(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $cont);
  };
  SnapshotIdSet$iterator$slambda.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 15;
            this.n1p_1 = this.l1p_1.o1m_1;
            if (!(this.n1p_1 == null)) {
              this.o1p_1 = intArrayIterator(this.n1p_1);
              this.lc_1 = 1;
              continue $sm;
            } else {
              this.lc_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            if (!this.o1p_1.f()) {
              this.lc_1 = 3;
              continue $sm;
            }

            this.p1p_1 = this.o1p_1.g();
            this.lc_1 = 2;
            suspendResult = this.m1p_1.d3(this.p1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.lc_1 = 1;
            continue $sm;
          case 3:
            this.lc_1 = 4;
            continue $sm;
          case 4:
            if (!this.l1p_1.m1m_1.equals(new Long(0, 0))) {
              var tmp_0 = this;
              Companion_getInstance_0();
              tmp_0.q1p_1 = until(0, 64).e();
              this.lc_1 = 5;
              continue $sm;
            } else {
              this.lc_1 = 9;
              continue $sm;
            }

            break;
          case 5:
            if (!this.q1p_1.f()) {
              this.lc_1 = 8;
              continue $sm;
            }

            this.r1p_1 = this.q1p_1.g();
            if (!this.l1p_1.m1m_1.ic((new Long(1, 0)).v4(this.r1p_1)).equals(new Long(0, 0))) {
              this.lc_1 = 6;
              suspendResult = this.m1p_1.d3(this.r1p_1 + this.l1p_1.n1m_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.lc_1 = 7;
              continue $sm;
            }

            break;
          case 6:
            this.lc_1 = 7;
            continue $sm;
          case 7:
            this.lc_1 = 5;
            continue $sm;
          case 8:
            this.lc_1 = 9;
            continue $sm;
          case 9:
            if (!this.l1p_1.l1m_1.equals(new Long(0, 0))) {
              var tmp_1 = this;
              Companion_getInstance_0();
              tmp_1.s1p_1 = until(0, 64).e();
              this.lc_1 = 10;
              continue $sm;
            } else {
              this.lc_1 = 14;
              continue $sm;
            }

            break;
          case 10:
            if (!this.s1p_1.f()) {
              this.lc_1 = 13;
              continue $sm;
            }

            this.t1p_1 = this.s1p_1.g();
            if (!this.l1p_1.l1m_1.ic((new Long(1, 0)).v4(this.t1p_1)).equals(new Long(0, 0))) {
              this.lc_1 = 11;
              Companion_getInstance_0();
              suspendResult = this.m1p_1.d3((this.t1p_1 + 64 | 0) + this.l1p_1.n1m_1 | 0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.lc_1 = 12;
              continue $sm;
            }

            break;
          case 11:
            this.lc_1 = 12;
            continue $sm;
          case 12:
            this.lc_1 = 10;
            continue $sm;
          case 13:
            this.lc_1 = 14;
            continue $sm;
          case 14:
            return Unit_getInstance();
          case 15:
            throw this.oc_1;
        }
      } catch ($p) {
        if (this.mc_1 === 15) {
          throw $p;
        } else {
          this.lc_1 = this.mc_1;
          this.oc_1 = $p;
        }
      }
     while (true);
  };
  SnapshotIdSet$iterator$slambda.prototype.v1p = function ($this$sequence, completion) {
    var i = new SnapshotIdSet$iterator$slambda(this.l1p_1, completion);
    i.m1p_1 = $this$sequence;
    return i;
  };
  SnapshotIdSet$iterator$slambda.$metadata$ = classMeta('SnapshotIdSet$iterator$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function SnapshotIdSet$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SnapshotIdSet$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $cont) {
      return i.u1p($this$sequence, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function SnapshotIdSet(upperSet, lowerSet, lowerBound, belowBound) {
    Companion_getInstance_9();
    this.l1m_1 = upperSet;
    this.m1m_1 = lowerSet;
    this.n1m_1 = lowerBound;
    this.o1m_1 = belowBound;
  }
  SnapshotIdSet.prototype.i = function (bit) {
    var offset = bit - this.n1m_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      return !(new Long(1, 0)).v4(offset).ic(this.m1m_1).equals(new Long(0, 0));
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        return !tmp_1.v4(offset - 64 | 0).ic(this.l1m_1).equals(new Long(0, 0));
      } else {
        if (offset > 0) {
          return false;
        } else {
          var tmp0_safe_receiver = this.o1m_1;
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            tmp_2 = null;
          } else {
            var tmp$ret$1;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$0;
            // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.get.<anonymous>' call
            tmp$ret$0 = binarySearch(tmp0_safe_receiver, bit) >= 0;
            tmp$ret$1 = tmp$ret$0;
            tmp_2 = tmp$ret$1;
          }
          var tmp1_elvis_lhs = tmp_2;
          return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
        }
      }
    }
  };
  SnapshotIdSet.prototype.x1m = function (bit) {
    var offset = bit - this.n1m_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).v4(offset);
      if (this.m1m_1.ic(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.l1m_1, this.m1m_1.jc(mask), this.n1m_1, this.o1m_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.v4(offset - 64 | 0);
        if (this.l1m_1.ic(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.l1m_1.jc(mask_0), this.m1m_1, this.n1m_1, this.o1m_1);
        }
      } else {
        Companion_getInstance_0();
        if (offset >= imul(64, 2)) {
          if (!this.i(bit)) {
            var newUpperSet = this.l1m_1;
            var newLowerSet = this.m1m_1;
            var newLowerBound = this.n1m_1;
            var newBelowBound = null;
            var tmp_2 = bit + 1 | 0;
            Companion_getInstance_0();
            var tmp_3 = tmp_2 / 64 | 0;
            Companion_getInstance_0();
            var targetLowerBound = imul(tmp_3, 64);
            $l$loop: while (newLowerBound < targetLowerBound) {
              if (!newLowerSet.equals(new Long(0, 0))) {
                if (newBelowBound == null) {
                  var tmp$ret$2;
                  // Inline function 'kotlin.apply' call
                  var tmp$ret$0;
                  // Inline function 'kotlin.collections.mutableListOf' call
                  tmp$ret$0 = ArrayList_init_$Create$();
                  var tmp0_apply = tmp$ret$0;
                  // Inline function 'kotlin.contracts.contract' call
                  // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                  var tmp0_safe_receiver = this.o1m_1;
                  if (tmp0_safe_receiver == null)
                    null;
                  else {
                    var tmp$ret$1;
                    // Inline function 'kotlin.let' call
                    // Inline function 'kotlin.contracts.contract' call
                    var indexedObject = tmp0_safe_receiver;
                    var inductionVariable = 0;
                    var last = indexedObject.length;
                    while (inductionVariable < last) {
                      var element = indexedObject[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>.<anonymous>.<anonymous>' call
                      tmp0_apply.a(element);
                    }
                    tmp$ret$1 = Unit_getInstance();
                  }
                  tmp$ret$2 = tmp0_apply;
                  newBelowBound = tmp$ret$2;
                }
                // Inline function 'kotlin.repeat' call
                Companion_getInstance_0();
                var tmp1_repeat = 64;
                // Inline function 'kotlin.contracts.contract' call
                var inductionVariable_0 = 0;
                if (inductionVariable_0 < tmp1_repeat)
                  do {
                    var index = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.set.<anonymous>' call
                    if (!newLowerSet.ic((new Long(1, 0)).v4(index)).equals(new Long(0, 0))) {
                      newBelowBound.a(index + newLowerBound | 0);
                    }
                  }
                   while (inductionVariable_0 < tmp1_repeat);
              }
              if (newUpperSet.equals(new Long(0, 0))) {
                newLowerBound = targetLowerBound;
                newLowerSet = new Long(0, 0);
                break $l$loop;
              }
              newLowerSet = newUpperSet;
              newUpperSet = new Long(0, 0);
              var tmp_4 = newLowerBound;
              Companion_getInstance_0();
              newLowerBound = tmp_4 + 64 | 0;
            }
            var tmp_5 = newUpperSet;
            var tmp_6 = newLowerSet;
            var tmp_7 = newLowerBound;
            var tmp0_safe_receiver_0 = newBelowBound;
            var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : toIntArray(tmp0_safe_receiver_0);
            return (new SnapshotIdSet(tmp_5, tmp_6, tmp_7, tmp1_elvis_lhs == null ? this.o1m_1 : tmp1_elvis_lhs)).x1m(bit);
          }
        } else {
          var tmp2_elvis_lhs = this.o1m_1;
          var tmp_8;
          if (tmp2_elvis_lhs == null) {
            var tmp$ret$3;
            // Inline function 'kotlin.intArrayOf' call
            tmp$ret$3 = new Int32Array([bit]);
            return new SnapshotIdSet(this.l1m_1, this.m1m_1, this.n1m_1, tmp$ret$3);
          } else {
            tmp_8 = tmp2_elvis_lhs;
          }
          var array = tmp_8;
          var location = binarySearch(array, bit);
          if (location < 0) {
            var insertLocation = -(location + 1 | 0) | 0;
            var newSize = array.length + 1 | 0;
            var newBelowBound_0 = new Int32Array(newSize);
            var tmp$ret$8;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp$ret$5;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$4 = array;
            tmp$ret$5 = tmp$ret$4;
            var tmp_9 = tmp$ret$5;
            var tmp$ret$7;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$6;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$6 = newBelowBound_0;
            tmp$ret$7 = tmp$ret$6;
            arrayCopy(tmp_9, tmp$ret$7, 0, 0, insertLocation);
            tmp$ret$8 = newBelowBound_0;
            var tmp$ret$13;
            // Inline function 'kotlin.collections.copyInto' call
            var tmp2_copyInto = insertLocation + 1 | 0;
            var tmp3_copyInto = newSize - 1 | 0;
            var tmp$ret$10;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = array;
            tmp$ret$10 = tmp$ret$9;
            var tmp_10 = tmp$ret$10;
            var tmp$ret$12;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = newBelowBound_0;
            tmp$ret$12 = tmp$ret$11;
            arrayCopy(tmp_10, tmp$ret$12, tmp2_copyInto, insertLocation, tmp3_copyInto);
            tmp$ret$13 = newBelowBound_0;
            newBelowBound_0[insertLocation] = bit;
            return new SnapshotIdSet(this.l1m_1, this.m1m_1, this.n1m_1, newBelowBound_0);
          }
        }
      }
    }
    return this;
  };
  SnapshotIdSet.prototype.p1m = function (bit) {
    var offset = bit - this.n1m_1 | 0;
    var tmp;
    if (offset >= 0) {
      Companion_getInstance_0();
      tmp = offset < 64;
    } else {
      tmp = false;
    }
    if (tmp) {
      var mask = (new Long(1, 0)).v4(offset);
      if (!this.m1m_1.ic(mask).equals(new Long(0, 0))) {
        return new SnapshotIdSet(this.l1m_1, this.m1m_1.ic(mask.hc()), this.n1m_1, this.o1m_1);
      }
    } else {
      var tmp_0;
      Companion_getInstance_0();
      if (offset >= 64) {
        Companion_getInstance_0();
        tmp_0 = offset < imul(64, 2);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        var tmp_1 = new Long(1, 0);
        Companion_getInstance_0();
        var mask_0 = tmp_1.v4(offset - 64 | 0);
        if (!this.l1m_1.ic(mask_0).equals(new Long(0, 0))) {
          return new SnapshotIdSet(this.l1m_1.ic(mask_0.hc()), this.m1m_1, this.n1m_1, this.o1m_1);
        }
      } else {
        if (offset < 0) {
          var array = this.o1m_1;
          if (!(array == null)) {
            var location = binarySearch(array, bit);
            if (location >= 0) {
              var newSize = array.length - 1 | 0;
              if (newSize === 0) {
                return new SnapshotIdSet(this.l1m_1, this.m1m_1, this.n1m_1, null);
              }
              var newBelowBound = new Int32Array(newSize);
              if (location > 0) {
                var tmp$ret$4;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp$ret$1;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$0;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$0 = array;
                tmp$ret$1 = tmp$ret$0;
                var tmp_2 = tmp$ret$1;
                var tmp$ret$3;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$2;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$2 = newBelowBound;
                tmp$ret$3 = tmp$ret$2;
                arrayCopy(tmp_2, tmp$ret$3, 0, 0, location);
                tmp$ret$4 = newBelowBound;
              }
              if (location < newSize) {
                var tmp$ret$9;
                // Inline function 'kotlin.collections.copyInto' call
                var tmp0_copyInto = location + 1 | 0;
                var tmp1_copyInto = newSize + 1 | 0;
                var tmp$ret$6;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$5;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$5 = array;
                tmp$ret$6 = tmp$ret$5;
                var tmp_3 = tmp$ret$6;
                var tmp$ret$8;
                // Inline function 'kotlin.js.unsafeCast' call
                var tmp$ret$7;
                // Inline function 'kotlin.js.asDynamic' call
                tmp$ret$7 = newBelowBound;
                tmp$ret$8 = tmp$ret$7;
                arrayCopy(tmp_3, tmp$ret$8, location, tmp0_copyInto, tmp1_copyInto);
                tmp$ret$9 = newBelowBound;
              }
              return new SnapshotIdSet(this.l1m_1, this.m1m_1, this.n1m_1, newBelowBound);
            }
          }
        }
      }
    }
    return this;
  };
  SnapshotIdSet.prototype.c1n = function (bits) {
    if (bits === Companion_getInstance_9().u1m_1)
      return this;
    if (this === Companion_getInstance_9().u1m_1)
      return Companion_getInstance_9().u1m_1;
    var tmp;
    if (bits.n1m_1 === this.n1m_1 ? bits.o1m_1 === this.o1m_1 : false) {
      tmp = new SnapshotIdSet(this.l1m_1.ic(bits.l1m_1.hc()), this.m1m_1.ic(bits.m1m_1.hc()), this.n1m_1, this.o1m_1);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this;
      var tmp0_iterator = bits.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.andNot.<anonymous>' call
        var tmp0__anonymous__q1qw7t = accumulator;
        tmp$ret$0 = tmp0__anonymous__q1qw7t.p1m(element);
        accumulator = tmp$ret$0;
      }
      tmp$ret$1 = accumulator;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  SnapshotIdSet.prototype.e1n = function (bits) {
    if (bits === Companion_getInstance_9().u1m_1)
      return this;
    if (this === Companion_getInstance_9().u1m_1)
      return bits;
    var tmp;
    if (bits.n1m_1 === this.n1m_1 ? bits.o1m_1 === this.o1m_1 : false) {
      tmp = new SnapshotIdSet(this.l1m_1.jc(bits.l1m_1), this.m1m_1.jc(bits.m1m_1), this.n1m_1, this.o1m_1);
    } else {
      var tmp_0;
      if (this.o1m_1 == null) {
        var tmp$ret$1;
        // Inline function 'kotlin.collections.fold' call
        var accumulator = bits;
        var tmp0_iterator = this.e();
        while (tmp0_iterator.f()) {
          var element = tmp0_iterator.g();
          var tmp$ret$0;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp0__anonymous__q1qw7t = accumulator;
          tmp$ret$0 = tmp0__anonymous__q1qw7t.x1m(element);
          accumulator = tmp$ret$0;
        }
        tmp$ret$1 = accumulator;
        tmp_0 = tmp$ret$1;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.collections.fold' call
        var accumulator_0 = this;
        var tmp0_iterator_0 = bits.e();
        while (tmp0_iterator_0.f()) {
          var element_0 = tmp0_iterator_0.g();
          var tmp$ret$2;
          // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.or.<anonymous>' call
          var tmp1__anonymous__uwfjfc = accumulator_0;
          tmp$ret$2 = tmp1__anonymous__uwfjfc.x1m(element_0);
          accumulator_0 = tmp$ret$2;
        }
        tmp$ret$3 = accumulator_0;
        tmp_0 = tmp$ret$3;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  SnapshotIdSet.prototype.e = function () {
    return sequence(SnapshotIdSet$iterator$slambda_0(this, null)).e();
  };
  SnapshotIdSet.prototype.f1o = function (default_0) {
    var belowBound = this.o1m_1;
    if (!(belowBound == null))
      return belowBound[0];
    if (!this.m1m_1.equals(new Long(0, 0)))
      return this.n1m_1 + lowestBitOf(this.m1m_1) | 0;
    if (!this.l1m_1.equals(new Long(0, 0))) {
      Companion_getInstance_0();
      return (this.n1m_1 + 64 | 0) + lowestBitOf(this.l1m_1) | 0;
    }
    return default_0;
  };
  SnapshotIdSet.prototype.toString = function () {
    var tmp = anyToString(this);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(this, 10));
    var tmp0_iterator = this.e();
    while (tmp0_iterator.f()) {
      var item = tmp0_iterator.g();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotIdSet.toString.<anonymous>' call
      tmp$ret$0 = item.toString();
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    return tmp + ' [' + fastJoinToString$default(tmp_0, null, null, null, 0, null, null, 63, null) + ']';
  };
  SnapshotIdSet.$metadata$ = classMeta('SnapshotIdSet', [Iterable]);
  function binarySearch(_this__u8e3s4, value) {
    var low = 0;
    var high = _this__u8e3s4.length - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (value > midVal)
        low = mid + 1 | 0;
      else if (value < midVal)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function lowestBitOf(bits) {
    var b = bits;
    var base = 0;
    if (b.ic(new Long(-1, 0)).equals(new Long(0, 0))) {
      base = base + 32 | 0;
      b = b.s4(32);
    }
    if (b.ic(new Long(65535, 0)).equals(new Long(0, 0))) {
      base = base + 16 | 0;
      b = b.s4(16);
    }
    if (b.ic(new Long(255, 0)).equals(new Long(0, 0))) {
      base = base + 8 | 0;
      b = b.s4(8);
    }
    if (b.ic(new Long(15, 0)).equals(new Long(0, 0))) {
      base = base + 4 | 0;
      b = b.s4(4);
    }
    if (!b.ic(new Long(1, 0)).equals(new Long(0, 0)))
      return base;
    if (!b.ic(new Long(2, 0)).equals(new Long(0, 0)))
      return base + 1 | 0;
    if (!b.ic(new Long(4, 0)).equals(new Long(0, 0)))
      return base + 2 | 0;
    if (!b.ic(new Long(8, 0)).equals(new Long(0, 0)))
      return base + 3 | 0;
    return -1;
  }
  function SnapshotMutableState() {
  }
  SnapshotMutableState.$metadata$ = interfaceMeta('SnapshotMutableState', [MutableState]);
  function get_sync() {
    init_properties_SnapshotStateList_kt_7zrdcn();
    return sync_0;
  }
  var sync_0;
  function StateListStateRecord(list) {
    StateRecord.call(this);
    this.z1p_1 = list;
    this.a1q_1 = 0;
  }
  StateListStateRecord.prototype.b1q = function (_set____db54di) {
    this.z1p_1 = _set____db54di;
  };
  StateListStateRecord.prototype.wj = function () {
    return this.z1p_1;
  };
  StateListStateRecord.prototype.c1q = function (_set____db54di) {
    this.a1q_1 = _set____db54di;
  };
  StateListStateRecord.prototype.d1q = function () {
    return this.a1q_1;
  };
  StateListStateRecord.prototype.m1e = function (value) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp = this;
    tmp.z1p_1 = (value instanceof StateListStateRecord ? value : THROW_CCE()).z1p_1;
    this.a1q_1 = value.a1q_1;
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  };
  StateListStateRecord.prototype.n1e = function () {
    return new StateListStateRecord(this.z1p_1);
  };
  StateListStateRecord.$metadata$ = classMeta('StateListStateRecord', undefined, undefined, undefined, undefined, StateRecord.prototype);
  function mutateBoolean($this, block) {
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = $this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = current(tmp0_withCurrent);
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldList).hx();
      result = block(builder);
      var newList = builder.ix();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = $this.y1e_1;
        var tmp0_writable = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_8().iq();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t_0 = writableRecord(tmp0_writable, $this, snapshot);
        var tmp_2;
        if (tmp0__anonymous__q1qw7t_0.a1q_1 === currentModification) {
          tmp0__anonymous__q1qw7t_0.z1p_1 = newList;
          var tmp0_this = tmp0__anonymous__q1qw7t_0;
          var tmp1 = tmp0_this.a1q_1;
          tmp0_this.a1q_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp0_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, $this);
        tmp$ret$10 = tmp0_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
    return tmp$ret$16;
  }
  function SnapshotStateList$addAll$lambda($index, $elements) {
    return function (it) {
      return it.h6($index, $elements);
    };
  }
  function SnapshotStateList() {
    this.y1e_1 = new StateListStateRecord(persistentListOf());
  }
  SnapshotStateList.prototype.v1e = function () {
    return this.y1e_1;
  };
  SnapshotStateList.prototype.w1e = function (value) {
    value.p1e_1 = this.y1e_1;
    var tmp = this;
    tmp.y1e_1 = value instanceof StateListStateRecord ? value : THROW_CCE();
  };
  SnapshotStateList.prototype.d1q = function () {
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
    var tmp = this.y1e_1;
    var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.<get-modification>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
    tmp$ret$0 = tmp1__anonymous__uwfjfc.a1q_1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  SnapshotStateList.prototype.e1q = function () {
    var tmp = this.y1e_1;
    return readable_0(tmp instanceof StateListStateRecord ? tmp : THROW_CCE(), this);
  };
  SnapshotStateList.prototype.h = function () {
    return this.e1q().z1p_1.h();
  };
  SnapshotStateList.prototype.u2 = function (element) {
    return this.e1q().z1p_1.k(element);
  };
  SnapshotStateList.prototype.k = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.u2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.v2 = function (elements) {
    return this.e1q().z1p_1.j1(elements);
  };
  SnapshotStateList.prototype.j1 = function (elements) {
    return this.v2(elements);
  };
  SnapshotStateList.prototype.i = function (index) {
    return this.e1q().z1p_1.i(index);
  };
  SnapshotStateList.prototype.f1q = function (element) {
    return this.e1q().z1p_1.p(element);
  };
  SnapshotStateList.prototype.p = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.f1q((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.j = function () {
    return this.e1q().z1p_1.j();
  };
  SnapshotStateList.prototype.e = function () {
    return this.c1g();
  };
  SnapshotStateList.prototype.g1q = function (element) {
    return this.e1q().z1p_1.v1(element);
  };
  SnapshotStateList.prototype.v1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.g1q((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.c1g = function () {
    return new StateListIterator(this, 0);
  };
  SnapshotStateList.prototype.l = function (index) {
    return new StateListIterator(this, index);
  };
  SnapshotStateList.prototype.i6 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.h() : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SubList(this, fromIndex, toIndex);
  };
  SnapshotStateList.prototype.d15 = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.a(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y1e_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.a1q_1;
        tmp0_this.a1q_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  SnapshotStateList.prototype.a = function (element) {
    return this.d15((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.h1q = function (index, element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.add.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.q1f(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y1e_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.a1q_1;
        tmp0_this.a1q_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return Unit_getInstance();
  };
  SnapshotStateList.prototype.g6 = function (index, element) {
    return this.h1q(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.i1q = function (index, elements) {
    return mutateBoolean(this, SnapshotStateList$addAll$lambda(index, elements));
  };
  SnapshotStateList.prototype.h6 = function (index, elements) {
    return this.i1q(index, elements);
  };
  SnapshotStateList.prototype.z1e = function (elements) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.addAll.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.a3(elements);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y1e_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.a1q_1;
        tmp0_this.a1q_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  SnapshotStateList.prototype.a3 = function (elements) {
    return this.z1e(elements);
  };
  SnapshotStateList.prototype.t5 = function () {
    var tmp$ret$10;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
    var tmp$ret$9;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>' call
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.snapshots.writable' call
    var tmp = this.y1e_1;
    var tmp0_writable = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
    var snapshot = get_snapshotInitializer();
    var tmp$ret$5;
    // Inline function 'kotlin.also' call
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.snapshots.sync' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.synchronized' call
    var tmp0_synchronized_0 = get_lock();
    var tmp$ret$2;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    snapshot = Companion_getInstance_8().iq();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.clear.<anonymous>.<anonymous>' call
    var tmp1__anonymous__uwfjfc = writableRecord(tmp0_writable, this, snapshot);
    tmp1__anonymous__uwfjfc.z1p_1 = persistentListOf();
    var tmp0_this = tmp1__anonymous__uwfjfc;
    var tmp1 = tmp0_this.a1q_1;
    tmp0_this.a1q_1 = tmp1 + 1 | 0;
    tmp$ret$0 = tmp1;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp0_also = tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
    notifyWrite(snapshot, this);
    tmp$ret$5 = tmp0_also;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
  };
  SnapshotStateList.prototype.j1f = function (element) {
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.remove.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.y2(element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y1e_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.a1q_1;
        tmp0_this.a1q_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    return tmp$ret$19;
  };
  SnapshotStateList.prototype.y2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.j1f((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.z2 = function (index) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.i(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.removeAt.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.z2(index);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y1e_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.a1q_1;
        tmp0_this.a1q_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also_0 = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also_0;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  SnapshotStateList.prototype.j1q = function (index, element) {
    var tmp$ret$20;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.i(index);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>' call
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.update' call
    var tmp$ret$19;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate' call
    var tmp$ret$18;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$17;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>' call
    var result;
    $l$loop_0: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.set.<anonymous>.<anonymous>' call
      var tmp0__anonymous__q1qw7t = ensureNotNull(oldList);
      tmp$ret$5 = tmp0__anonymous__q1qw7t.q5(index, element);
      var newList = tmp$ret$5;
      if (equals(newList, oldList)) {
        result = false;
        break $l$loop_0;
      }
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$15;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>' call
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.snapshots.writable' call
      var tmp_0 = this.y1e_1;
      var tmp0_writable = tmp_0 instanceof StateListStateRecord ? tmp_0 : THROW_CCE();
      var snapshot = get_snapshotInitializer();
      var tmp$ret$11;
      // Inline function 'kotlin.also' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.snapshots.sync' call
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized_0 = get_lock();
      var tmp$ret$8;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      snapshot = Companion_getInstance_8().iq();
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.conditionalUpdate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
      var tmp_1;
      if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
        tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
        var tmp0_this = tmp1__anonymous__uwfjfc_0;
        var tmp1 = tmp0_this.a1q_1;
        tmp0_this.a1q_1 = tmp1 + 1 | 0;
        tmp_1 = true;
      } else {
        tmp_1 = false;
      }
      tmp$ret$6 = tmp_1;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp0_also_0 = tmp$ret$10;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
      notifyWrite(snapshot, this);
      tmp$ret$11 = tmp0_also_0;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      if (tmp$ret$16) {
        result = true;
        break $l$loop_0;
      }
    }
    tmp$ret$17 = result;
    tmp$ret$18 = tmp$ret$17;
    tmp$ret$19 = tmp$ret$18;
    tmp$ret$20 = tmp0_also;
    return tmp$ret$20;
  };
  SnapshotStateList.prototype.q5 = function (index, element) {
    return this.j1q(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SnapshotStateList.prototype.j6 = function (fromIndex, toIndex) {
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate' call
    var result;
    $l$loop: while (true) {
      var oldList = null;
      var currentModification = 0;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.synchronized' call
      var tmp0_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
      var tmp$ret$3;
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.withCurrent' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.snapshots.withCurrent' call
      var tmp = this.y1e_1;
      var tmp0_withCurrent = tmp instanceof StateListStateRecord ? tmp : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = current(tmp0_withCurrent);
      tmp$ret$0 = tmp1__anonymous__uwfjfc;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var current_0 = tmp$ret$2;
      currentModification = current_0.a1q_1;
      oldList = current_0.z1p_1;
      tmp$ret$3 = Unit_getInstance();
      tmp$ret$4 = tmp$ret$3;
      var builder = ensureNotNull(oldList).hx();
      builder.i6(fromIndex, toIndex).t5();
      result = Unit_getInstance();
      var newList = builder.ix();
      var tmp_0;
      if (equals(newList, oldList)) {
        tmp_0 = true;
      } else {
        var tmp$ret$15;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp1_synchronized = _get_sync_$accessor$oh7eud_9jnt9b();
        var tmp$ret$14;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$13;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>' call
        var tmp$ret$12;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.writable' call
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.snapshots.writable' call
        var tmp_1 = this.y1e_1;
        var tmp0_writable = tmp_1 instanceof StateListStateRecord ? tmp_1 : THROW_CCE();
        var snapshot = get_snapshotInitializer();
        var tmp$ret$10;
        // Inline function 'kotlin.also' call
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.snapshots.sync' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.synchronized' call
        var tmp0_synchronized_0 = get_lock();
        var tmp$ret$7;
        // Inline function 'kotlinx.atomicfu.locks.synchronized' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        snapshot = Companion_getInstance_8().iq();
        var tmp$ret$5;
        // Inline function 'androidx.compose.runtime.snapshots.SnapshotStateList.mutate.<anonymous>.<anonymous>' call
        var tmp1__anonymous__uwfjfc_0 = writableRecord(tmp0_writable, this, snapshot);
        var tmp_2;
        if (tmp1__anonymous__uwfjfc_0.a1q_1 === currentModification) {
          tmp1__anonymous__uwfjfc_0.z1p_1 = newList;
          var tmp0_this = tmp1__anonymous__uwfjfc_0;
          var tmp1 = tmp0_this.a1q_1;
          tmp0_this.a1q_1 = tmp1 + 1 | 0;
          tmp_2 = true;
        } else {
          tmp_2 = false;
        }
        tmp$ret$5 = tmp_2;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp0_also = tmp$ret$9;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.snapshots.writable.<anonymous>' call
        notifyWrite(snapshot, this);
        tmp$ret$10 = tmp0_also;
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp_0 = tmp$ret$15;
      }
      if (tmp_0)
        break $l$loop;
    }
    tmp$ret$16 = result;
  };
  SnapshotStateList.$metadata$ = classMeta('SnapshotStateList', [MutableList, StateObject]);
  function validateModification($this) {
    if (!($this.k1q_1.d1q() === $this.m1q_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function StateListIterator(list, offset) {
    this.k1q_1 = list;
    this.l1q_1 = offset - 1 | 0;
    this.m1q_1 = this.k1q_1.d1q();
  }
  StateListIterator.prototype.q = function () {
    return this.l1q_1 >= 0;
  };
  StateListIterator.prototype.r = function () {
    return this.l1q_1 + 1 | 0;
  };
  StateListIterator.prototype.s = function () {
    validateModification(this);
    validateRange(this.l1q_1, this.k1q_1.h());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.k1q_1.i(this.l1q_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.previous.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.l1q_1;
    tmp0_this.l1q_1 = tmp1 - 1 | 0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  StateListIterator.prototype.q1 = function () {
    return this.l1q_1;
  };
  StateListIterator.prototype.f = function () {
    return this.l1q_1 < (this.k1q_1.h() - 1 | 0);
  };
  StateListIterator.prototype.g = function () {
    validateModification(this);
    var newIndex = this.l1q_1 + 1 | 0;
    validateRange(newIndex, this.k1q_1.h());
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.k1q_1.i(newIndex);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.StateListIterator.next.<anonymous>' call
    this.l1q_1 = newIndex;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  StateListIterator.prototype.b3 = function () {
    validateModification(this);
    this.k1q_1.z2(this.l1q_1);
    var tmp0_this = this;
    var tmp1 = tmp0_this.l1q_1;
    tmp0_this.l1q_1 = tmp1 - 1 | 0;
    this.m1q_1 = this.k1q_1.d1q();
  };
  StateListIterator.$metadata$ = classMeta('StateListIterator', [MutableListIterator]);
  function validateModification_0($this) {
    if (!($this.n1q_1.d1q() === $this.p1q_1)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  }
  function SubList$listIterator$1($current, this$0) {
    this.r1q_1 = $current;
    this.s1q_1 = this$0;
  }
  SubList$listIterator$1.prototype.q = function () {
    return this.r1q_1._v >= 0;
  };
  SubList$listIterator$1.prototype.r = function () {
    return this.r1q_1._v + 1 | 0;
  };
  SubList$listIterator$1.prototype.s = function () {
    var oldCurrent = this.r1q_1._v;
    validateRange(oldCurrent, this.s1q_1.q1q_1);
    this.r1q_1._v = oldCurrent - 1 | 0;
    return this.s1q_1.i(oldCurrent);
  };
  SubList$listIterator$1.prototype.q1 = function () {
    return this.r1q_1._v;
  };
  SubList$listIterator$1.prototype.f = function () {
    return this.r1q_1._v < (this.s1q_1.q1q_1 - 1 | 0);
  };
  SubList$listIterator$1.prototype.g = function () {
    var newCurrent = this.r1q_1._v + 1 | 0;
    validateRange(newCurrent, this.s1q_1.q1q_1);
    this.r1q_1._v = newCurrent;
    return this.s1q_1.i(newCurrent);
  };
  SubList$listIterator$1.prototype.qk = function () {
    modificationError();
  };
  SubList$listIterator$1.prototype.b3 = function () {
    return this.qk();
  };
  SubList$listIterator$1.$metadata$ = classMeta(undefined, [MutableListIterator]);
  function SubList(parentList, fromIndex, toIndex) {
    this.n1q_1 = parentList;
    this.o1q_1 = fromIndex;
    this.p1q_1 = this.n1q_1.d1q();
    this.q1q_1 = toIndex - fromIndex | 0;
  }
  SubList.prototype.t1q = function () {
    return this.n1q_1;
  };
  SubList.prototype.h = function () {
    return this.q1q_1;
  };
  SubList.prototype.u2 = function (element) {
    return this.f1q(element) >= 0;
  };
  SubList.prototype.k = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.u2((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.v2 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.j();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.snapshots.SubList.containsAll.<anonymous>' call
        tmp$ret$1 = this.u2(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SubList.prototype.j1 = function (elements) {
    return this.v2(elements);
  };
  SubList.prototype.i = function (index) {
    validateModification_0(this);
    validateRange(index, this.q1q_1);
    return this.n1q_1.i(this.o1q_1 + index | 0);
  };
  SubList.prototype.f1q = function (element) {
    validateModification_0(this);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(this.o1q_1, this.o1q_1 + this.q1q_1 | 0);
    var inductionVariable = tmp0_forEach.d1_1;
    var last = tmp0_forEach.e1_1;
    if (inductionVariable <= last)
      do {
        var element_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.runtime.snapshots.SubList.indexOf.<anonymous>' call
        if (equals(element, this.n1q_1.i(element_0)))
          return element_0 - this.o1q_1 | 0;
      }
       while (!(element_0 === last));
    return -1;
  };
  SubList.prototype.p = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.f1q((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.j = function () {
    return this.q1q_1 === 0;
  };
  SubList.prototype.e = function () {
    return this.c1g();
  };
  SubList.prototype.g1q = function (element) {
    validateModification_0(this);
    var index = (this.o1q_1 + this.q1q_1 | 0) - 1 | 0;
    while (index >= this.o1q_1) {
      if (equals(element, this.n1q_1.i(index)))
        return index - this.o1q_1 | 0;
      var tmp0 = index;
      index = tmp0 - 1 | 0;
    }
    return -1;
  };
  SubList.prototype.v1 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return -1;
    return this.g1q((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.d15 = function (element) {
    validateModification_0(this);
    this.n1q_1.h1q(this.o1q_1 + this.q1q_1 | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.q1q_1;
    tmp0_this.q1q_1 = tmp1 + 1 | 0;
    this.p1q_1 = this.n1q_1.d1q();
    return true;
  };
  SubList.prototype.a = function (element) {
    return this.d15((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.h1q = function (index, element) {
    validateModification_0(this);
    this.n1q_1.h1q(this.o1q_1 + index | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.q1q_1;
    tmp0_this.q1q_1 = tmp1 + 1 | 0;
    this.p1q_1 = this.n1q_1.d1q();
  };
  SubList.prototype.g6 = function (index, element) {
    return this.h1q(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.i1q = function (index, elements) {
    validateModification_0(this);
    var result = this.n1q_1.i1q(index + this.o1q_1 | 0, elements);
    if (result) {
      var tmp0_this = this;
      tmp0_this.q1q_1 = tmp0_this.q1q_1 + elements.h() | 0;
      this.p1q_1 = this.n1q_1.d1q();
    }
    return result;
  };
  SubList.prototype.h6 = function (index, elements) {
    return this.i1q(index, elements);
  };
  SubList.prototype.z1e = function (elements) {
    return this.i1q(this.q1q_1, elements);
  };
  SubList.prototype.a3 = function (elements) {
    return this.z1e(elements);
  };
  SubList.prototype.t5 = function () {
    if (this.q1q_1 > 0) {
      validateModification_0(this);
      this.n1q_1.j6(this.o1q_1, this.o1q_1 + this.q1q_1 | 0);
      this.q1q_1 = 0;
      this.p1q_1 = this.n1q_1.d1q();
    }
  };
  SubList.prototype.c1g = function () {
    return this.l(0);
  };
  SubList.prototype.l = function (index) {
    validateModification_0(this);
    var current = {_v: index - 1 | 0};
    return new SubList$listIterator$1(current, this);
  };
  SubList.prototype.j1f = function (element) {
    var index = this.f1q(element);
    var tmp;
    if (index >= 0) {
      this.z2(index);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SubList.prototype.y2 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.j1f((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.z2 = function (index) {
    validateModification_0(this);
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.n1q_1.z2(this.o1q_1 + index | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.snapshots.SubList.removeAt.<anonymous>' call
    var tmp0_this = this;
    var tmp1 = tmp0_this.q1q_1;
    tmp0_this.q1q_1 = tmp1 - 1 | 0;
    this.p1q_1 = this.n1q_1.d1q();
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SubList.prototype.j1q = function (index, element) {
    validateRange(index, this.q1q_1);
    validateModification_0(this);
    var result = this.n1q_1.j1q(index + this.o1q_1 | 0, element);
    this.p1q_1 = this.n1q_1.d1q();
    return result;
  };
  SubList.prototype.q5 = function (index, element) {
    return this.j1q(index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  SubList.prototype.i6 = function (fromIndex, toIndex) {
    // Inline function 'kotlin.require' call
    var tmp0_require = (0 <= fromIndex ? fromIndex <= toIndex : false) ? toIndex <= this.q1q_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    validateModification_0(this);
    return new SubList(this.n1q_1, fromIndex + this.o1q_1 | 0, toIndex + this.o1q_1 | 0);
  };
  SubList.$metadata$ = classMeta('SubList', [MutableList]);
  function validateRange(index, size) {
    init_properties_SnapshotStateList_kt_7zrdcn();
    if (!(0 <= index ? index < size : false)) {
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of bound of [0, ' + size + ')');
    }
  }
  function modificationError() {
    init_properties_SnapshotStateList_kt_7zrdcn();
    throw IllegalStateException_init_$Create$('Cannot modify a state list through an iterator');
  }
  function _get_sync_$accessor$oh7eud_9jnt9b() {
    init_properties_SnapshotStateList_kt_7zrdcn();
    return get_sync();
  }
  var properties_initialized_SnapshotStateList_kt_lcuarf;
  function init_properties_SnapshotStateList_kt_7zrdcn() {
    if (properties_initialized_SnapshotStateList_kt_lcuarf) {
    } else {
      properties_initialized_SnapshotStateList_kt_lcuarf = true;
      sync_0 = createSynchronizedObject();
    }
  }
  var sync_1;
  function unsupported() {
    init_properties_SnapshotStateMap_kt_ya1h2t();
    throw UnsupportedOperationException_init_$Create$();
  }
  var properties_initialized_SnapshotStateMap_kt_9i73ip;
  function init_properties_SnapshotStateMap_kt_ya1h2t() {
    if (properties_initialized_SnapshotStateMap_kt_9i73ip) {
    } else {
      properties_initialized_SnapshotStateMap_kt_9i73ip = true;
      sync_1 = createSynchronizedObject();
    }
  }
  function CompositionData() {
  }
  CompositionData.$metadata$ = interfaceMeta('CompositionData');
  function CompositionGroup() {
  }
  CompositionGroup.$metadata$ = interfaceMeta('CompositionGroup', [CompositionData]);
  function get_LocalInspectionTables() {
    init_properties_InspectionTables_kt_4oiy2p();
    return LocalInspectionTables;
  }
  var LocalInspectionTables;
  function LocalInspectionTables$lambda() {
    init_properties_InspectionTables_kt_4oiy2p();
    return null;
  }
  var properties_initialized_InspectionTables_kt_tgdbmt;
  function init_properties_InspectionTables_kt_4oiy2p() {
    if (properties_initialized_InspectionTables_kt_tgdbmt) {
    } else {
      properties_initialized_InspectionTables_kt_tgdbmt = true;
      LocalInspectionTables = staticCompositionLocalOf(LocalInspectionTables$lambda);
    }
  }
  function set_nextHash(_set____db54di) {
    init_properties_ActualJs_js_kt_h9bmuk();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    init_properties_ActualJs_js_kt_h9bmuk();
    return nextHash;
  }
  var nextHash;
  function get_DefaultMonotonicFrameClock() {
    init_properties_ActualJs_js_kt_h9bmuk();
    return DefaultMonotonicFrameClock;
  }
  var DefaultMonotonicFrameClock;
  function AtomicReference(value) {
    this.m15_1 = value;
    this.n15_1 = 8;
  }
  AtomicReference.prototype.tj = function () {
    return this.m15_1;
  };
  AtomicReference.prototype.f16 = function (value) {
    this.m15_1 = value;
  };
  AtomicReference.prototype.o15 = function (value) {
    var oldValue = this.m15_1;
    this.m15_1 = value;
    return oldValue;
  };
  AtomicReference.prototype.t16 = function (expect, newValue) {
    var tmp;
    if (equals(expect, this.m15_1)) {
      this.m15_1 = newValue;
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AtomicReference.$metadata$ = classMeta('AtomicReference');
  function SnapshotThreadLocal() {
    this.b18_1 = null;
  }
  SnapshotThreadLocal.prototype.tj = function () {
    return this.b18_1;
  };
  SnapshotThreadLocal.prototype.c18 = function (value) {
    this.b18_1 = value;
  };
  SnapshotThreadLocal.$metadata$ = classMeta('SnapshotThreadLocal');
  function identityHashCode(instance) {
    init_properties_ActualJs_js_kt_h9bmuk();
    if (instance == null) {
      return 0;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = instance;
    var hashCode = tmp$ret$0['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp0_subject = typeof instance;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function MonotonicClockImpl$withFrameNanos$lambda($onFrame, $safe) {
    return function (it) {
      var duration = toDuration(it, DurationUnit_MILLISECONDS_getInstance());
      var result = $onFrame(_Duration___get_inWholeNanoseconds__impl__r5x4mr(duration));
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $safe.j3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $withFrameNanosCOROUTINE$4(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1r_1 = _this__u8e3s4;
    this.d1r_1 = onFrame;
  }
  $withFrameNanosCOROUTINE$4.prototype.uc = function () {
    var suspendResult = this.nc_1;
    $sm: do
      try {
        var tmp = this.lc_1;
        switch (tmp) {
          case 0:
            this.mc_1 = 2;
            this.lc_1 = 1;
            var tmp_0 = this;
            tmp_0.e1r_1 = this;
            this.f1r_1 = SafeContinuation_init_$Create$(intercepted(this.e1r_1));
            var tmp_1 = window;
            tmp_1.requestAnimationFrame(MonotonicClockImpl$withFrameNanos$lambda(this.d1r_1, this.f1r_1));
            ;
            suspendResult = returnIfSuspended(this.f1r_1.z8(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  $withFrameNanosCOROUTINE$4.$metadata$ = classMeta('$withFrameNanosCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function MonotonicClockImpl() {
  }
  MonotonicClockImpl.prototype.mr = function (onFrame, $cont) {
    var tmp = new $withFrameNanosCOROUTINE$4(this, onFrame, $cont);
    tmp.nc_1 = Unit_getInstance();
    tmp.oc_1 = null;
    return tmp.uc();
  };
  MonotonicClockImpl.$metadata$ = classMeta('MonotonicClockImpl', [MonotonicFrameClock]);
  function memoizeIdentityHashCode(instance) {
    init_properties_ActualJs_js_kt_h9bmuk();
    var tmp0 = get_nextHash();
    set_nextHash(tmp0 + 1 | 0);
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function createSnapshotMutableState(value, policy) {
    init_properties_ActualJs_js_kt_h9bmuk();
    return new SnapshotMutableStateImpl(value, policy);
  }
  var properties_initialized_ActualJs_js_kt_azbr3k;
  function init_properties_ActualJs_js_kt_h9bmuk() {
    if (properties_initialized_ActualJs_js_kt_azbr3k) {
    } else {
      properties_initialized_ActualJs_js_kt_azbr3k = true;
      nextHash = 1;
      DefaultMonotonicFrameClock = new MonotonicClockImpl();
    }
  }
  function Trace() {
    Trace_instance = this;
  }
  Trace.prototype.w10 = function (name) {
    return null;
  };
  Trace.prototype.i11 = function (token) {
  };
  Trace.$metadata$ = objectMeta('Trace');
  var Trace_instance;
  function Trace_getInstance() {
    if (Trace_instance == null)
      new Trace();
    return Trace_instance;
  }
  function invokeComposableForResult$composable(composer, composable) {
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    var tmp0_unsafeCast = tmp$ret$1(composer, 1);
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  }
  function invokeComposable$composable(composer, composable) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = composable;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$1(composer, 1);
  }
  function ComposableLambda() {
  }
  ComposableLambda.$metadata$ = interfaceMeta('ComposableLambda');
  function trackWrite($this) {
    if ($this.n1l_1) {
      var scope = $this.p1l_1;
      if (!(scope == null)) {
        scope.g17();
        $this.p1l_1 = null;
      }
      var scopes = $this.q1l_1;
      if (!(scopes == null)) {
        var inductionVariable = 0;
        var last = scopes.h();
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = scopes.i(index);
            item.g17();
          }
           while (inductionVariable < last);
        scopes.t5();
      }
    }
  }
  function trackRead($this, composer) {
    if ($this.n1l_1) {
      var scope = composer.v13();
      if (!(scope == null)) {
        composer.w13(scope);
        var lastScope = $this.p1l_1;
        if (replacableWith(lastScope, scope)) {
          $this.p1l_1 = scope;
        } else {
          var lastScopes = $this.q1l_1;
          if (lastScopes == null) {
            var tmp$ret$0;
            // Inline function 'kotlin.collections.mutableListOf' call
            tmp$ret$0 = ArrayList_init_$Create$();
            var newScopes = tmp$ret$0;
            $this.q1l_1 = newScopes;
            newScopes.a(scope);
          } else {
            var inductionVariable = 0;
            var last = lastScopes.h();
            if (inductionVariable < last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var scopeAtIndex = lastScopes.i(index);
                if (replacableWith(scopeAtIndex, scope)) {
                  lastScopes.q5(index, scope);
                  return Unit_getInstance();
                }
              }
               while (inductionVariable < last);
            lastScopes.a(scope);
          }
        }
      }
    }
  }
  function invoke$invoke(receiver, p0, p1) {
    receiver.f12(p0, p1);
  }
  function ComposableLambdaImpl$invoke$invoke$ref($boundThis) {
    return function (p0, p1) {
      invoke$invoke($boundThis, p0, p1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda(this$0, $p1, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.g1r($p1, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl$invoke$lambda_0(this$0, $p1, $p2, $changed) {
    return function (nc, _anonymous_parameter_1__qggqgd) {
      this$0.h1r($p1, $p2, nc, $changed | 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambdaImpl(key, tracked) {
    this.m1l_1 = key;
    this.n1l_1 = tracked;
    this.o1l_1 = null;
    this.p1l_1 = null;
    this.q1l_1 = null;
  }
  ComposableLambdaImpl.prototype.r1l = function (block) {
    if (!equals(this.o1l_1, block)) {
      var oldBlockNull = this.o1l_1 == null;
      this.o1l_1 = block;
      if (!oldBlockNull) {
        trackWrite(this);
      }
    }
  };
  ComposableLambdaImpl.prototype.f12 = function (c, changed) {
    var c_0 = c.j13(this.m1l_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.sr(this) ? differentBits(0) : sameBits(0));
    var tmp = this.o1l_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(c_0, dirty);
    var tmp0_safe_receiver = c_0.k13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q14(ComposableLambdaImpl$invoke$invoke$ref(this));
    }
    return result;
  };
  ComposableLambdaImpl.prototype.g1r = function (p1, c, changed) {
    var c_0 = c.j13(this.m1l_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.sr(this) ? differentBits(1) : sameBits(1));
    var tmp = this.o1l_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, c_0, dirty);
    var tmp0_safe_receiver = c_0.k13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q14(ComposableLambdaImpl$invoke$lambda(this, p1, changed));
    }
    return result;
  };
  ComposableLambdaImpl.prototype.h1r = function (p1, p2, c, changed) {
    var c_0 = c.j13(this.m1l_1);
    trackRead(this, c_0);
    var dirty = changed | (c_0.sr(this) ? differentBits(2) : sameBits(2));
    var tmp = this.o1l_1;
    var result = ((!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : THROW_CCE())(p1, p2, c_0, dirty);
    var tmp0_safe_receiver = c_0.k13();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q14(ComposableLambdaImpl$invoke$lambda_0(this, p1, p2, changed));
    }
    return result;
  };
  ComposableLambdaImpl.$metadata$ = classMeta('ComposableLambdaImpl', [ComposableLambda]);
  //region block: post-declaration
  OffsetApplier.prototype.jq = onBeginChanges;
  OffsetApplier.prototype.kq = onEndChanges;
  AbstractApplier.prototype.jq = onBeginChanges;
  AbstractApplier.prototype.kq = onEndChanges;
  BroadcastFrameClock.prototype.x1 = get_key;
  BroadcastFrameClock.prototype.r3 = get;
  BroadcastFrameClock.prototype.x3 = fold;
  BroadcastFrameClock.prototype.w3 = minusKey;
  BroadcastFrameClock.prototype.y3 = plus;
  StructuralEqualityPolicy.prototype.g1e = merge;
  SnapshotStateList.prototype.x1e = mergeRecords;
  MonotonicClockImpl.prototype.x1 = get_key;
  MonotonicClockImpl.prototype.r3 = get;
  MonotonicClockImpl.prototype.x3 = fold;
  MonotonicClockImpl.prototype.w3 = minusKey;
  MonotonicClockImpl.prototype.y3 = plus;
  //endregion
  //region block: init
  reuseKey = 207;
  movableContentKey = 126665345;
  Aux_Shift = 28;
  GroupInfo_Offset = 1;
  ObjectKey_Shift = 29;
  DataAnchor_Offset = 4;
  Slots_Shift = 28;
  MAX_BUFFER_SIZE = 32;
  MAX_BUFFER_SIZE_MINUS_ONE = 31;
  LOG_MAX_BUFFER_SIZE = 5;
  MUTABLE_BUFFER_SIZE = 33;
  TRIE_MAX_HEIGHT = 7;
  ENTRY_SIZE = 2;
  LOG_MAX_BRANCHING_FACTOR = 5;
  MAX_SHIFT = 30;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = composableLambdaInstance;
  _.$_$.b = composableLambda;
  _.$_$.c = AbstractApplier;
  _.$_$.d = onBeginChanges;
  _.$_$.e = onEndChanges;
  _.$_$.f = CompositionLocalProvider$composable;
  _.$_$.g = ControlledComposition_0;
  _.$_$.h = get_DefaultMonotonicFrameClock;
  _.$_$.i = DisposableEffect$composable_0;
  _.$_$.j = DisposableEffect$composable_1;
  _.$_$.k = DisposableEffect$composable;
  _.$_$.l = DisposableEffectResult;
  _.$_$.m = Recomposer;
  _.$_$.n = SkippableUpdater;
  _.$_$.o = invalidApplier;
  _.$_$.p = isTraceInProgress;
  _.$_$.q = mutableStateListOf;
  _.$_$.r = sourceInformationMarkerEnd;
  _.$_$.s = sourceInformationMarkerStart;
  _.$_$.t = sourceInformation;
  _.$_$.u = toMutableStateList;
  _.$_$.v = traceEventEnd;
  _.$_$.w = traceEventStart;
  _.$_$.x = compositionLocalOf$default;
  _.$_$.y = mutableStateOf$default;
  _.$_$.z = _SkippableUpdater___init__impl__4ft0t9;
  _.$_$.a1 = _SkippableUpdater___get_composer__impl__6t7yne;
  _.$_$.b1 = _Updater___init__impl__rbfxm8;
  _.$_$.c1 = Updater__set_impl_v7kwss;
  _.$_$.d1 = Companion_getInstance_8;
  _.$_$.e1 = Companion_getInstance_1;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime.js.map
