(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdc-segmented-button'] = factory(typeof this['KMDC-kmdc-segmented-button'] === 'undefined' ? {} : this['KMDC-kmdc-segmented-button']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdc-segmented-button.js.map
