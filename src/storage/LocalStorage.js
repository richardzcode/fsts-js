import ConsoleLogger from '../logger/ConsoleLogger';

const logger = new ConsoleLogger('LocalStorage');

const key_holder = '_fsts_ls_key_holder';

class LocalStorageClass {
    constructor(key_holder=key_holder) {
        logger.debug('instantiated LocalStorageClass with ' + key_holder);
        this.key_holder = key_holder;
    }

    set(key, value) {
    }

    get(key) {
    }

    remove(key) {
    }

    clear() {
    }
}
