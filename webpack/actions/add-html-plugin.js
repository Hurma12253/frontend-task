// @ts-check
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) =>
    config.plugin('html').use(HtmlWebpackPlugin, [
        {
            title: 'Wikiruki',
            template: resolve(__dirname, '../../public/index.html'),
            templateParameters: {
                insertOneSignal: false,
            },
        },
    ]);

module.exports = fn;
