process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const dotenv = require('dotenv').config();

if (dotenv.error) {
    console.error(`
! dotenv package error, did you create .env file? Try to \`$ cp .env.example .env\`
    `);

    throw dotenv.error;
}

module.exports = (() => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return require('./webpack/dev.config');
        case 'production':
            return require('./webpack/prod.config');
        default:
            console.warn(`
! process.env.NODE_ENV doesn't match any appropriate value, production config is used
            `);
            return require('./webpack/prod.config');
    }
})();
