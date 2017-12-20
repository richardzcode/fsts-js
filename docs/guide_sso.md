---
id: guide_sso
title: Single Sign On
---

Library for social sign in. Encapsulate different providers implementation detail.

### Methods

Each provider has these methods:

```
    provider.ready();   // returns a Promise, resolves when ready to use,
                        // rejects when error
    provider.check();   // returns a Promise, resolves an user object when success,
                        // rejects when error
    provider.signIn();  // returns a Promise, resolves an user object when success,
                        // rejects when error
    provider.signOut(); // returns a Promise, resolves when success,
                        // rejects when error
```

### Options

Normally for each SSO object just one parameter, client_id/app_id/app_key/etc., is enough.

```
const G = new SSO.Goolge(google_client_id);
```

In some cases additional infomation may be needed. Construction could take an object instead of string for more options.

For example, set `script` to 'none' to tell not to load SDK js. The SDK is loaded by other code.

```
const options = {
    google_client_id: ...,
    script: ...,
    scope: ...
}
const G = new SSO.Goolge(options);
```

### Providers

* Google
* Facebook
* LinkedIn

Google Sign In

```
import { SSO } from 'fsts';

const G = new SSO.Goolge(google_client_id);

G.ready()
    .check()
    .then(user => console.log(user))
    .catch(err => console.log(err));

G.signIn()
    .then(user => console.log(user))
    .catch(err => console.log(err));

G.signOut()
    .then(() => console.log('out'))
    .catch(err => console.log(err));
```
