require('dotenv').config();

const { paths } = require('./tsconfig.json').compilerOptions;

const SRC_PATH = '<rootDir>';

const makeModuleNameMapper = (src, paths) =>
    Object.keys(paths).reduce((acc, cur) => {
        const key = cur.replace('/*', '/(.*)');
        const path = paths[cur][0].replace('/*', '/$1');

        return { ...acc, [key]: src + '/' + path };
    }, {});

module.exports = {
    moduleNameMapper: {
        ...makeModuleNameMapper(SRC_PATH, paths),
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/file-mock.js',
    },
    transform: {
        '\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '\\.svg$': '<rootDir>/__mocks__/svg-transformer.js',
    },
};
