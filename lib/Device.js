'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Device = function () {
    function Device() {
        babelHelpers.classCallCheck(this, Device);
    }

    babelHelpers.createClass(Device, null, [{
        key: 'hasWindow',
        value: function hasWindow() {
            return typeof window !== 'undefined';
        }
    }]);
    return Device;
}();

exports.default = Device;