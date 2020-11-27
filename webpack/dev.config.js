// @ts-check
const config = require('./base.config');

const actions = [
    require('./actions/add-ts-checker-plugin'),
    require('./actions/add-errors-overlay-plugin'),
    require('./actions/add-dev-server'),
];

config.mode('development');

config.devtool('source-map');

actions.forEach((actionFn) => actionFn(config));

module.exports = config.toConfig();
