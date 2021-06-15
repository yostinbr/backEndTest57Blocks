const { Sequelize } = require('sequelize');
const config = require('./config');

export const sequelize = new Sequelize(
    // @ts-ignore
    config.DB_NAME, // @ts-ignore
    config.DB_DIALECT, // @ts-ignore
    config.DB_PASSWORD, { // @ts-ignore
        host: config.DB_HOST, // @ts-ignore
        dialect: config.DB_DIALECT, // @ts-ignore
        pool: {
            max: 10,
            min: 0,
            // @ts-ignore
            require: 30000,
            idle: 10000,
        },
        logging: false
    }
)