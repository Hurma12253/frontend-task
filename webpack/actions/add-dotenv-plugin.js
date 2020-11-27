// @ts-check
const Dotenv = require('dotenv-webpack');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) =>
    config.plugin('dotenv').use(Dotenv, [
        {
            // load '.env.example' to verify the '.env' variables are all set.
            safe: true,

            // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            systemvars: false,
        },
    ]);

module.exports = fn;
