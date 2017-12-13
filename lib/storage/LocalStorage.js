'use strict';

var _ConsoleLogger = require('../logger/ConsoleLogger');

var _ConsoleLogger2 = babelHelpers.interopRequireDefault(_ConsoleLogger);

var logger = new _ConsoleLogger2.default('LocalStorage');

var key_holder = '_fsts_ls_key_holder';

var LocalStorageClass = function () {
    function LocalStorageClass() {
        var key_holder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : key_holder;
        babelHelpers.classCallCheck(this, LocalStorageClass);

        logger.debug('instantiated LocalStorageClass with ' + key_holder);
        this.key_holder = key_holder;
    }

    babelHelpers.createClass(LocalStorageClass, [{
        key: 'set',
        value: function set(key, value) {}
    }, {
        key: 'get',
        value: function get(key) {}
    }, {
        key: 'remove',
        value: function remove(key) {}
    }, {
        key: 'clear',
        value: function clear() {}
    }]);
    return LocalStorageClass;
}();