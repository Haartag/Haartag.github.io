(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-notched-outline'] = factory(typeof this['KMDC-kmdc-notched-outline'] === 'undefined' ? {} : this['KMDC-kmdc-notched-outline']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-notched-outline.js.map
