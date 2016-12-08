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