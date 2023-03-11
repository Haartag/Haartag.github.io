(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-line-ripple'] = factory(typeof this['KMDC-kmdc-line-ripple'] === 'undefined' ? {} : this['KMDC-kmdc-line-ripple']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-line-ripple.js.map
