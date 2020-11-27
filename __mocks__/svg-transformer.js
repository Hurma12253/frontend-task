const stub = JSON.stringify({
    id: '#stub',
    viewBox: '0 0 24 24',
    url: 'stub',
    toString: () => 'stub',
});

module.exports = {
    process(src, filename, config, options) {
        return `module.exports = ${stub}`;
    },
};
