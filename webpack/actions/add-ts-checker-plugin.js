// @ts-check
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) =>
    config.plugin('ts-checker').use(ForkTsCheckerWebpackPlugin, [
        {
            async: true,
            useTypescriptIncrementalApi: true,
            checkSyntacticErrors: true,
            eslint: true,
        },
    ]);

module.exports = fn;
