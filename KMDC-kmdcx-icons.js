(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['KMDC-kmdcx-icons'] = factory(typeof this['KMDC-kmdcx-icons'] === 'undefined' ? {} : this['KMDC-kmdcx-icons']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=KMDC-kmdcx-icons.js.map
