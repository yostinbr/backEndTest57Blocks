const services = require('../services')

export function isAuth(req, res, next) {

    if (!req.headers['authorization']) {
        return res.status(403).send({ message: "you don't have permission to access on this server" })
    }

    const token = req.headers['authorization'] //.split("")[1]

    services.decodeToken(token)
        .then(response => {
            req.user_id = response
            next();
        })
        .catch(response => {
            res.status(response.status).send({ message: response.message })
        })

}