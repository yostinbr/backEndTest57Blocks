const { response } = require('express');
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config.js')

function createToken(user) {

    const payload = {
            sub: user.id,
            iat: moment().unix(),
            // @ts-ignore
            exp: moment().add(config.TIME_EXPIRATION, config.TYPE_EXPIRATION).unix()
        }
        // @ts-ignore
    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token) {
    const decoded = new Promise((resolve, reject) => {

        try {
            // @ts-ignore
            const payload = jwt.decode(token, config.SECRET_TOKEN)

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: "Error validating access token: Token expired."
                })
            }

            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                message: "Invalid token"
            })
        }
    });

    return decoded;
}

module.exports = {
    createToken,
    decodeToken
}