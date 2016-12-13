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
export default err => {
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
        stack: clean(err),
        ...VError.info(err)
    };
};
