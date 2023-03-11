(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-form-field'] = factory(typeof this['KMDC-kmdc-form-field'] === 'undefined' ? {} : this['KMDC-kmdc-form-field']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-form-field.js.map
