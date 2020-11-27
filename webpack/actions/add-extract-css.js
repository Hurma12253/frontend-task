// @ts-check
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getters = require('../getters');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => {
    getters.stylesInjectionUseEntry(config).loader(MiniCssExtractPlugin.loader);

    config.plugin('css-extract').use(MiniCssExtractPlugin);
};

module.exports = fn;
