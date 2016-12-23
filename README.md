# bunyan-error-serializer

This is an enhanced version of [`bunyan.stdSerializer.err`](https://github.com/trentm/node-bunyan#standard-serializers) that serializes [info](https://github.com/joyent/node-verror#verrorinfoerr) from [VError](https://github.com/joyent/node-verror) type errors, and cleans up the stack traces.

```js
import err from 'bunyan-error-serializer';
bunyan.createLogger({
  ...
  serializers: {
    ...bunyan.stdSerializers,
    err
  }
});
```
