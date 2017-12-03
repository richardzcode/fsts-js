export default class JS {
    static padNumber (n, length) {
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
}
