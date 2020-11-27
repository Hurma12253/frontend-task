// @ts-check
const CopyWebpackPlugin = require('copy-webpack-plugin');
const settings = require('../settings');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) =>
    config.plugin('copy').use(CopyWebpackPlugin, [
        {
            patterns: [
                {
                    from: settings.paths.publicAssets,
                    to: settings.paths.outputAssets,
                },
            ],
        },
    ]);

module.exports = fn;
