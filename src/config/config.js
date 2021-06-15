import dotenv from 'dotenv'
dotenv.config();

module.exports = {
    DB_DIALECT: process.env.DB_DIALECT || 'postgres',
    DB_NAME: process.env.DB_NAME || 'db_videos',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PASSWORD: process.env.DB_PASSWORD || '',

    APP_PORT: process.env.APP_PORT || 3000,

    SECRET_TOKEN: process.env.TOKEN_SECRET || 'my_secret-token_generate',
    TIME_EXPIRATION: process.env.TOKEN_TIME_EXPIRATION || 20,
    TYPE_EXPIRATION: process.env.TYPE_EXPIRATION || 'minutes'

}