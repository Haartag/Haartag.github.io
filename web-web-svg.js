(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['web-web-svg'] = factory(typeof this['web-web-svg'] === 'undefined' ? {} : this['web-web-svg']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=web-web-svg.js.map
