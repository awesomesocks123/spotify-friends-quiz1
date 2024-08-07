const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        process: require.resolve("process/browser"),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    );
    return config;
};