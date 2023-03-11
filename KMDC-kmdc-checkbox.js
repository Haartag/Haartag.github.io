(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-checkbox'] = factory(typeof this['KMDC-kmdc-checkbox'] === 'undefined' ? {} : this['KMDC-kmdc-checkbox']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-checkbox.js.map
