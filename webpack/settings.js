// @ts-check
const { resolve } = require('path');

const root = resolve(__dirname, '../');

module.exports = {
    paths: {
        output: resolve(root, 'build/'),
        outputAssets: resolve(root, 'build/assets'),
        src: resolve(root, 'src/'),
        public: resolve(root, 'public/'),
        publicAssets: resolve(root, 'public/assets'),
        scssResources: resolve(root, 'src/styles/helpers/_index.scss'),
    },
};
