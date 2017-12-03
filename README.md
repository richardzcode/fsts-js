# From Station to Station

Accumulated JavaScript toolkits library

```
npm install --save fsts
```

## Logger

```
import { Logger } from 'fsts';

const logger = new Logger('MyClass');

export default class MyClass {
    constructor() {
        logger.info('instance created');
    }

    doSomething() {
        somePromise()
            .then(data => logger.debug('some promise data', data))
            .catch(err => logger.error('some promise error', err));
    }
}
```
