import JS from '../JS';

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

export default ConsoleLogger;
;