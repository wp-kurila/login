export default function (options) {
    var _a;
    return {
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 3000,
        open: true,
        historyApiFallback: true
    };
}
