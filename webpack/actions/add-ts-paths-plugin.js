// @ts-check
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => config.resolve.plugin('ts-paths').use(TsconfigPathsPlugin);

module.exports = fn;
