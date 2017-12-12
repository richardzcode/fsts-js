'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JS = function () {
    function JS() {
        _classCallCheck(this, JS);
    }

    _createClass(JS, null, [{
        key: 'padNumber',

        // String
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

        // Object

    }, {
        key: 'lessProps',
        value: function lessProps(props, less) {
            var p = Object.assign({}, props);
            if (!less) {
                return p;
            }

            var list = [].concat(less);
            list.forEach(function (prop) {
                if (typeof prop === 'string') {
                    var regex = new RegExp('^' + prop + '$');
                    Object.keys(props).map(function (key) {
                        if (key.match(regex)) {
                            delete p[key];
                        }
                    });
                }
            });

            return p;
        }
    }, {
        key: 'hasProps',
        value: function hasProps(props, lookup) {
            if (!lookup) {
                return 0;
            }

            var count = 0;
            var list = [].concat(lookup);
            list.forEach(function (prop) {
                if (typeof prop === 'string') {
                    var regex = new RegExp('^' + prop + '$');
                    Object.keys(props).map(function (key) {
                        if (key.match(regex)) {
                            count++;
                        }
                    });
                }
            });

            return count;
        }
    }, {
        key: 'traverseProps',
        value: function traverseProps(obj, callback) {
            if (!callback) {
                console.log('no callback for traverse, do nothing');
                return;
            }

            JS._traverseProps([], obj, callback);
        }
    }, {
        key: '_traverseProps',
        value: function _traverseProps(path, obj, callback) {
            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
                return;
            }

            Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                callback(path, key, val);
                JS._traverseProps(path.concat(key), val, callback);
            });
        }

        // Array

    }, {
        key: 'isArray',
        value: function isArray(val) {
            if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
                return false;
            }

            return typeof val.length === 'number';
        }
    }, {
        key: 'sureArray',
        value: function sureArray(ary) {
            return [].concat(ary);
        }
    }, {
        key: 'appendUnique',
        value: function appendUnique(ary, val) {
            if (!ary) {
                return false;
            }

            var exists = ary.filter(function (item) {
                return item === val;
            });
            if (exists.length > 0) {
                return false;
            }

            ary.push(val);
            return true;
        }

        // General

    }, {
        key: 'undefinedThen',
        value: function undefinedThen(val, defVal) {
            return typeof val === 'undefined' ? defVal : val;
        }
    }]);

    return JS;
}();

exports.default = JS;