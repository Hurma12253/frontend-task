// @ts-check

/**
 * @typedef { import('webpack-chain') } Config
 */

module.exports = {
    /**
     * @param { Config } config
     */
    main(config) {
        return config.module.rule('main');
    },

    /**
     * @param { Config } config
     */
    styles(config) {
        return this.main(config).oneOf('styles');
    },

    /**
     * @param { Config } config
     */
    scripts(config) {
        return this.main(config).oneOf('scripts');
    },

    /**
     * @param { Config } config
     */
    svg(config) {
        return this.main(config).oneOf('svg');
    },

    /**
     * @param { Config } config
     */
    files(config) {
        return this.main(config).oneOf('files');
    },

    /**
     * @param { Config } config
     */
    stylesInjectionUseEntry(config) {
        return this.styles(config).rule('styles::injection').use('styles::injection::use');
    },

    /**
     * @param { Config } config
     */
    stylesCssRule(config) {
        return this.styles(config).rule('styles::css');
    },

    /**
     * @param { Config } config
     */
    stylesCssLocalRule(config) {
        return this.stylesCssRule(config).oneOf('local');
    },

    /**
     * @param { Config } config
     */
    stylesCssGlobalRule(config) {
        return this.stylesCssRule(config).oneOf('global');
    },

    /**
     * @param { Config } config
     */
    stylesCssLocalUseEntry(config) {
        return this.stylesCssLocalRule(config).use('styles::css::use');
    },

    /**
     * @param { Config } config
     */
    stylesCssGlobalUseEntry(config) {
        return this.stylesCssGlobalRule(config).use('styles::css::use');
    },

    /**
     * @param { Config } config
     */
    stylesConvertingUseEntry(config) {
        return this.styles(config).rule('styles::converting').use('styles::converting::use');
    },

    /**
     * @param { Config } config
     */
    stylesPreprocessingRule(config) {
        return this.styles(config).rule('styles::preprocessing');
    },
};
