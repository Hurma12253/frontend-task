// @ts-check
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => config.plugin('error-overlay').use(ErrorOverlayPlugin);

module.exports = fn;
