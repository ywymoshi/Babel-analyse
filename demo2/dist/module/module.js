(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {},
    };
    factory(mod.exports);
    global.module = mod.exports;
  }
})(
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
    ? self
    : this,
  function (_exports) {
    'use strict';

    Object.defineProperty(_exports, '__esModule', {
      value: true,
    });
    _exports['default'] = void 0;
    // @babel/plugin-transform-modules-umd
    // @babel/plugin-transform-modules-systemjs
    // @babel/plugin-transform-modules-commonjs
    // @babel/plugin-transform-modules-amd
    var _default = 42;
    _exports['default'] = _default;
  }
);
