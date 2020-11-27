// @ts-check
const getters = require('../getters');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) =>
    getters.files(config).merge({
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        use: [
            {
                loader: 'file-loader',
            },
        ],
    });

module.exports = fn;
