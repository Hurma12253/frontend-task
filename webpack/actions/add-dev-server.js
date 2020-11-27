// @ts-check
const { HotModuleReplacementPlugin } = require('webpack');
const settings = require('../settings');

/**
 * @type {import('webpack-dev-server').Configuration}
 */
const devServerConfig = {
    proxy: {
        '/api': {
            target: process.env.BACKEND_API_URL_DEV || 'http://127.0.0.1:3000',
            secure: false,
            changeOrigin: true,
        },
    },
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
        all: false,
        maxModules: 0,
        errors: true,
        warnings: true,
        errorDetails: true,
        colors: true,
    },
    clientLogLevel: 'error',
    compress: true,
    publicPath: '/',
    contentBase: settings.paths.public,
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || 'localhost',
};

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => {
    config.plugin('hot').use(HotModuleReplacementPlugin);

    config.devServer.merge(devServerConfig);
};

module.exports = fn;
