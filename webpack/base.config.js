// @ts-check
const { relative } = require('path');
const Config = require('webpack-chain');

const settings = require('./settings');

const actions = [
    // Loaders:
    require('./actions/add-scripts-modules-loader'),
    require('./actions/add-styles-modules-loader'),
    require('./actions/add-svg-modules-loader'),
    require('./actions/add-rest-modules-loader'),
    // ** STOP ** Are you adding a new loader?
    // Make sure to add the new loader(s) before the "add-rest-modules-loader".

    // Plugins:
    require('./actions/add-dotenv-plugin'),
    require('./actions/add-clean-plugin'),
    require('./actions/add-copy-plugin'),
    require('./actions/add-html-plugin'),
    require('./actions/add-ts-paths-plugin'),
];

const config = new Config();

/**
 * @type {import('webpack').Configuration}
 */
const base = {
    entry: [settings.paths.src],

    output: {
        path: settings.paths.output,
        filename: 'bundle.js',
        publicPath: '/',
        devtoolFallbackModuleFilenameTemplate: (info) =>
            relative(settings.paths.src, info.absoluteResourcePath).replace(/\\/g, '/'),
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
};

config.merge(base);

actions.forEach((actionFn) => actionFn(config));

module.exports = config;
