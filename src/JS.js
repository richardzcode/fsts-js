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
                const regex = new RegEx('^' + prop + '$');
                Object.keys.map(key => {
                    if (key.match(regex)) { delete p[key]; }
                })
            }
        });

        return p;
    }

    // Array
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
