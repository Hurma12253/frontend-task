// @ts-check
const getters = require('../getters');
const settings = require('../settings');

/**
 * @param { import('webpack-chain') } config
 */
const fn = (config) => {
    const styles = getters.styles(config);

    styles.merge({
        test: /\.(css|sass|scss)$/i,
    });

    getters.stylesInjectionUseEntry(config).merge({
        loader: 'style-loader',
    });

    getters.stylesCssLocalRule(config).merge({
        exclude: [/(node_modules|src\/styles)/],
    });

    getters.stylesCssLocalUseEntry(config).merge({
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: '[name]-[local]--[hash:base64:5]',
            },
        },
    });

    getters.stylesCssGlobalUseEntry(config).merge({
        loader: 'css-loader',
    });

    getters.stylesConvertingUseEntry(config).merge({
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                require('postcss-preset-env')({
                    stage: 3,
                }),
                require('postcss-normalize')(),
            ],
        },
    });

    getters.stylesPreprocessingRule(config).merge({
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: 'sass-loader',
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: settings.paths.scssResources,
                },
            },
        ],
    });
};

module.exports = fn;
