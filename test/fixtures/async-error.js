export default (callback) => {
    setImmediate(callback, new Error('oopsies'));
};
