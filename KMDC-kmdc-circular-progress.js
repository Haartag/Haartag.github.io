(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-circular-progress'] = factory(typeof this['KMDC-kmdc-circular-progress'] === 'undefined' ? {} : this['KMDC-kmdc-circular-progress']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-circular-progress.js.map
