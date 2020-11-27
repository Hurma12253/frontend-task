// @ts-check
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => config.plugin('clean').use(CleanWebpackPlugin);

module.exports = fn;
