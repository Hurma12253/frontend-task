// @ts-check
const getters = require('../getters');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => {
    const scripts = getters.scripts(config);

    scripts.merge({
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
            {
                loader: 'thread-loader',
            },
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    });
};

module.exports = fn;
