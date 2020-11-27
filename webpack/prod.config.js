// @ts-check
const config = require('./base.config');
const getters = require('./getters');

const actions = [require('./actions/add-extract-css')];

config.mode('production');

actions.forEach((actionFn) => actionFn(config));

config.plugin('html').tap(([options, ...rest]) => {
    options.templateParameters.insertOneSignal = true;

    return [options, ...rest];
});

getters.stylesCssLocalUseEntry(config).tap((args) => ({
    ...args,
    modules: {
        localIdentName: '[hash:base64:10]',
    },
}));

module.exports = config.toConfig();
