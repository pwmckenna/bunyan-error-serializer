import serializer from '../src';
import VError from 'verror';

test('new Error()', () => {
    const error = new Error();
    expect(serializer(error)).toMatchSnapshot();
})

test('new VError(new Error())', () => {
    const error = new VError(new Error());
    expect(serializer(error)).toMatchSnapshot();
})

test('new VError({ cause: new Error(), info: { count: 42 } })', () => {
    const error = new VError({ cause: new Error(), info: { count: 42 } });
    expect(serializer(error)).toMatchSnapshot();
});

test('stackless Error', () => {
    const error = new Error();
    delete error.stack;
    expect(serializer(error)).toMatchSnapshot();
});

test('non Errors', () => {
    serializer(false);
    serializer({});
    serializer(() => {});
});
