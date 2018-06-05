import StackUtils from 'stack-utils';
import VError from 'verror';

const stack = new StackUtils({
    cwd: process.cwd(),
    internals: StackUtils.nodeInternals()
});
const clean = err => {
    let cleaned = err;
    try {
        cleaned = VError.fullStack(cleaned);
        cleaned = stack.clean(cleaned);
    } catch (e) {}
    return cleaned;
};
const serializer = withStack => err => {
    if (!(err instanceof Error)) {
        return err;
    }
    const {
        code,
        message,
        name,
        signal
    } = err;
    return {
        code,
        message,
        name,
        signal,
        cause: serializer(false)(VError.cause(err)),
        stack: withStack ? clean(err) : undefined,
        ...VError.info(err)
    };
};

export default serializer(true);
