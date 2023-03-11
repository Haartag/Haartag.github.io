(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-top-app-bar'] = factory(typeof this['KMDC-kmdc-top-app-bar'] === 'undefined' ? {} : this['KMDC-kmdc-top-app-bar']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-top-app-bar.js.map
