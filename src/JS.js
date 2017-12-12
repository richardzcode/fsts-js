export default class JS {
    // String
    static padNumber(n, length) {
        let cur = n % 10;
        let remain = Math.floor(n / 10);
        let s = '' + cur;
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
    static lessProps(props, less) {
        const p = Object.assign({}, props);
        if (!less) { return p; }

        const list = [].concat(less);
        list.forEach(prop => {
            if (typeof prop === 'string') {
                const regex = new RegExp('^' + prop + '$');
                Object.keys(props).map(key => {
                    if (key.match(regex)) { delete p[key]; }
                })
            }
        });

        return p;
    }

    static hasProps(props, lookup) {
        if (!lookup) { return 0; }

        let count = 0;
        const list = [].concat(lookup);
        list.forEach(prop => {
            if (typeof prop === 'string') {
                const regex = new RegExp('^' + prop + '$');
                Object.keys(props).map(key => {
                    if (key.match(regex)) { count++; }
                })
            }
        });

        return count;
    }

    static traverseProps(obj, callback) {
        if (!callback) {
            console.log('no callback for traverse, do nothing');
            return;
        }

        JS._traverseProps([], obj, callback);
    }

    static _traverseProps(path, obj, callback) {
        if (typeof obj !== 'object') { return; }

        Object.keys(obj).forEach(key => {
            const val = obj[key];
            callback(path, key, val);
            JS._traverseProps(path.concat(key), val, callback);
        });
    }

    // Array
    static isArray(val) {
        if (typeof val !== 'object') { return false; }

        return (typeof val.length === 'number');
    }

    static sureArray(ary) {
        return [].concat(ary);
    }

    static appendUnique(ary, val) {
        if (!ary) { return false; }

        const exists = ary.filter(item => item === val);
        if (exists.length > 0) { return false; }

        ary.push(val);
        return true;
    }

    // General
    static undefinedThen(val, defVal) {
        return (typeof val === 'undefined')? defVal : val;
    }
}
