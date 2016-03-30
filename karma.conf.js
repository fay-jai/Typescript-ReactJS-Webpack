var webpackConfig = require("./webpack.config");

module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["mocha", "chai", "sinon"],
        files: ["test/**/*.tsx"],
        exclude: [],
        preprocessors: {
            "test/**/*.tsx": ["webpack"]
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        reporters: ["mocha"],
        autoWatch: true,
        browsers: ["PhantomJS"],
        colors: true,
        concurrency: Infinity,
        logLevel: config.LOG_INFO,
        port: 9876,
        singleRun: true
    });
};
