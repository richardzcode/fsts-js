'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var JS = function () {
    function JS() {
        babelHelpers.classCallCheck(this, JS);
    }

    babelHelpers.createClass(JS, null, [{
        key: 'isString',

        // String
        value: function isString(val) {
            return typeof val === 'string';
        }
    }, {
        key: 'padNumber',
        value: function padNumber(n, length) {
            if (n < 0) {
                return '-' + JS.padNumber(-n, length - 1);
            }

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
            if ((typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) !== 'object') {
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
            if ((typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) !== 'object') {
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

        // Date Time

    }, {
        key: 'ts',
        value: function ts() {
            return new Date().getTime();
        }

        // General

    }, {
        key: 'isUndefined',
        value: function isUndefined(val) {
            return typeof val === 'undefined';
        }
    }, {
        key: 'undefinedThen',
        value: function undefinedThen(val, defVal) {
            return JS.isUndefined(val) ? defVal : val;
        }
    }]);
    return JS;
}();

var LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5
};

var ConsoleLogger = function () {
    function ConsoleLogger(name) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'WARN';
        babelHelpers.classCallCheck(this, ConsoleLogger);

        this.name = name;
        this.level = level;
    }

    babelHelpers.createClass(ConsoleLogger, [{
        key: '_ts',
        value: function _ts() {
            var dt = new Date();
            return [JS.padNumber(dt.getMinutes(), 2), JS.padNumber(dt.getSeconds(), 2)].join(':') + '.' + dt.getMilliseconds();
        }
    }, {
        key: '_key',
        value: function _key(type, msg) {
            var parts = ['[' + type + ']', this._ts(), this.name];

            if (msg) {
                parts = parts.concat(['-', msg]);
            }

            return parts.join(' ');
        }
    }, {
        key: '_log',
        value: function _log(type) {
            var level_name = this.level;
            if (ConsoleLogger.LOG_LEVEL) {
                level_name = ConsoleLogger.LOG_LEVEL;
            }
            if (typeof window != 'undefined' && window.LOG_LEVEL) {
                level_name = window.LOG_LEVEL;
            }
            var logger_level = LOG_LEVELS[level_name];
            var type_level = LOG_LEVELS[type];
            if (!(type_level >= logger_level)) {
                return;
            }

            var log = console.log;
            if (type === 'ERROR' && console.error) {
                log = console.error;
            }
            if (type === 'WARN' && console.warn) {
                log = console.warn;
            }

            for (var _len = arguments.length, msg = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
                msg[_key2 - 1] = arguments[_key2];
            }

            if (msg.length === 1 && typeof msg[0] === 'string') {
                log(this._key(type, msg[0]));
            } else if (msg.length === 1) {
                var output = {};
                var key = this._key(type);
                output[key] = msg[0];
                log(output);
            } else if (typeof msg[0] === 'string') {
                var obj = msg.slice(1);
                if (obj.length === 1) {
                    obj = obj[0];
                }
                var _output = {};
                var _key3 = this._key(type, msg[0]);
                _output[_key3] = obj;
                log(_output);
            } else {
                var _output2 = {};
                var _key4 = this._key(type);
                _output2[_key4] = msg;
                log(_output2);
            }
        }
    }, {
        key: 'log',
        value: function log() {
            for (var _len2 = arguments.length, msg = Array(_len2), _key5 = 0; _key5 < _len2; _key5++) {
                msg[_key5] = arguments[_key5];
            }

            this._log.apply(this, ['INFO'].concat(msg));
        }
    }, {
        key: 'info',
        value: function info() {
            for (var _len3 = arguments.length, msg = Array(_len3), _key6 = 0; _key6 < _len3; _key6++) {
                msg[_key6] = arguments[_key6];
            }

            this._log.apply(this, ['INFO'].concat(msg));
        }
    }, {
        key: 'warn',
        value: function warn() {
            for (var _len4 = arguments.length, msg = Array(_len4), _key7 = 0; _key7 < _len4; _key7++) {
                msg[_key7] = arguments[_key7];
            }

            this._log.apply(this, ['WARN'].concat(msg));
        }
    }, {
        key: 'error',
        value: function error() {
            for (var _len5 = arguments.length, msg = Array(_len5), _key8 = 0; _key8 < _len5; _key8++) {
                msg[_key8] = arguments[_key8];
            }

            this._log.apply(this, ['ERROR'].concat(msg));
        }
    }, {
        key: 'debug',
        value: function debug() {
            for (var _len6 = arguments.length, msg = Array(_len6), _key9 = 0; _key9 < _len6; _key9++) {
                msg[_key9] = arguments[_key9];
            }

            this._log.apply(this, ['DEBUG'].concat(msg));
        }
    }, {
        key: 'verbose',
        value: function verbose() {
            for (var _len7 = arguments.length, msg = Array(_len7), _key10 = 0; _key10 < _len7; _key10++) {
                msg[_key10] = arguments[_key10];
            }

            this._log.apply(this, ['VERBOSE'].concat(msg));
        }
    }]);
    return ConsoleLogger;
}();

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

var logger = new ConsoleLogger('LocalStorage');

var defaultOptions = {
    prefix: '_fsts_',
    expiration: '3600' // seconds
};

var LocalStorage = function () {
    function LocalStorage(options) {
        babelHelpers.classCallCheck(this, LocalStorage);

        logger.debug('creating LocalStorage instance', options);

        this._options = Object.assign({}, defaultOptions, options);
    }

    babelHelpers.createClass(LocalStorage, [{
        key: 'options',
        value: function options(_options) {
            if (_options) {
                this._options = Object.assign({}, this._options, _options);
            }

            return this._options;
        }
    }, {
        key: 'key',
        value: function key(_key) {
            return this._options.prefix + _key;
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            if (!key) {
                logger.warn('no key to set');
                return;
            }
            if (JS.isUndefined(value) || value === null) {
                logger.worn('nothing to set for ' + key);
                return;
            }

            var item = {
                data: JSON.stringify(value),
                ts: JS.ts()
            };

            this._setItem(key, item);
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (!key) {
                logger.warn('no key to get');
                return;
            }

            var item = this._getItem(key);
            if (!item) {
                logger.verbose('cache miss: ' + key);
                return null;
            }

            if (this._isExpired(item)) {
                logger.verbose('cache miss: ' + key);
                return null;
            }

            logger.verbose('cache hit: ' + key);
            return JSON.parse(item.data);
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            if (!key) {
                logger.warn('no key to remove');
                return;
            }

            this._removeItem(key);
        }
    }, {
        key: 'clear',
        value: function clear() {
            var store = window.localStorage;
            while (store.length > 0) {
                var key = store.key(0);
                store.removeItem(key);
            }
        }
    }, {
        key: 'purgeExpired',
        value: function purgeExpired() {
            var store = window.localStorage;
            while (store.length > 0) {
                var key = store.key(0);
                var item = JSON.parse(store.getItem(key));
                if (this._isExpired(item)) {
                    store.removeItem(key);
                }
            }
        }
    }, {
        key: '_setItem',
        value: function _setItem(key, item) {
            window.localStorage.setItem(this.key(key), JSON.stringify(item));
        }
    }, {
        key: '_getItem',
        value: function _getItem(key) {
            var item = window.localStorage.getItem(this.key(key));
            if (!item) {
                return null;
            }

            var it = JSON.parse(item);
            return {
                data: it.data,
                ts: it.ts * 1
            };
        }
    }, {
        key: '_removeItem',
        value: function _removeItem(key) {
            window.localStorge.removeItem(this.key(key));
        }
    }, {
        key: '_isExpired',
        value: function _isExpired(item) {
            var cur = JS.ts();
            return item.ts + this._options.expiration * 1000 < cur;
        }
    }]);
    return LocalStorage;
}();

var logger$1 = new ConsoleLogger('MemoryStorage');

var defaultOptions$1 = {
    expiration: '3600' // seconds


    /**
    * MemoryStorage as an alternative to LocalStorage. Items will not live beyond session.
    * Still do JSON stringify so consistant with LocalStorage, also ensures immutable in cache.
    */
};
var MemoryStorage = function () {
    function MemoryStorage(options) {
        babelHelpers.classCallCheck(this, MemoryStorage);

        logger$1.debug('creating MemoryStorage instance', options);

        this._options = Object.assign({}, defaultOptions$1, options);

        this._store = {};
    }

    babelHelpers.createClass(MemoryStorage, [{
        key: 'options',
        value: function options(_options) {
            if (_options) {
                this._options = Object.assign({}, this._options, _options);
            }

            return this._options;
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            if (!key) {
                logger$1.warn('no key to set');
                return;
            }
            if (JS.isUndefined(value) || value === null) {
                logger$1.worn('nothing to set for ' + key);
                return;
            }

            var item = {
                data: JSON.stringify(value),
                ts: JS.ts()
            };

            this._store[key] = item;
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (!key) {
                logger$1.warn('no key to get');
                return;
            }

            var item = this._store[key];
            if (!item) {
                logger$1.verbose('cache miss: ' + key);
                return null;
            }

            if (this._isExpired(item)) {
                logger$1.verbose('cache miss: ' + key);
                return null;
            }

            logger$1.verbose('cache hit: ' + key);
            return JSON.parse(item.data);
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            if (!key) {
                logger$1.warn('no key to remove');
                return;
            }

            delete this._store[key];
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._store = {};
        }
    }, {
        key: 'purgeExpired',
        value: function purgeExpired() {
            var _this = this;

            Object.keys(this._store).forEach(function (key) {
                var item = _this._store[key];
                if (_this._isExpired(item)) {
                    delete _this._store[key];
                }
            });
        }
    }, {
        key: '_isExpired',
        value: function _isExpired(item) {
            var cur = JS.ts();
            return item.ts + this._options.expiration * 1000 < cur;
        }
    }]);
    return MemoryStorage;
}();

var _instance = Device.hasWindow() ? new LocalStorage() : new MemoryStorage();

var Url = function () {
    function Url() {
        babelHelpers.classCallCheck(this, Url);
    }

    babelHelpers.createClass(Url, null, [{
        key: 'params',
        value: function params(url) {
            var parts = url.split('?');
            if (parts.length < 2) {
                return {};
            }

            parts = parts[1].split('#')[0].split('&');
            var obj = {};
            parts.forEach(function (part) {
                var n_v = part.split('=');
                var name = n_v[0];
                var value = n_v.length > 1 ? n_v.slice(1).join('') : '';
                obj[name] = decodeURIComponent(value);
            });

            return obj;
        }
    }]);
    return Url;
}();

exports.Logger = ConsoleLogger;
exports.Cache = _instance;
exports.Device = Device;
exports.JS = JS;
exports.Url = Url;
//# sourceMappingURL=fsts.js.map
