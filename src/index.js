import StackUtils from 'stack-utils';
import VError from 'verror';

const stack = new StackUtils({
    cwd: process.cwd(),
    internals: StackUtils.nodeInternals()
});

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
        stack: stack.clean(VError.fullStack(err))
    };
};
