'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JS = function () {
    function JS() {
        _classCallCheck(this, JS);
    }

    _createClass(JS, null, [{
        key: 'padNumber',
        value: function padNumber(n, length) {
            var cur = n % 10;
            var remain = Math.floor(n / 10);
            var s = '' + cur;
            for (var i = 1; i < length; i++) {
                if (remain === 0) {
                    s = '0' + s;
                } else {
                    cur = remain % 10;
                    remain = Math.floor(remain / 10);
                    s = '' + cur + s;
                }
            }

            return s;
        }
    }, {
        key: 'undefinedThen',
        value: function undefinedThen(val, defVal) {
            return typeof val === 'undefined' ? defVal : val;
        }
    }]);

    return JS;
}();

exports.default = JS;