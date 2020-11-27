// @ts-check
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const getters = require('../getters');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => {
    getters.svg(config).merge({
        test: /\.svg$/,
        use: [
            {
                loader: 'svg-sprite-loader',
            },
        ],
    });

    config.plugin('sprite-loader').use(SpriteLoaderPlugin);
};

module.exports = fn;
