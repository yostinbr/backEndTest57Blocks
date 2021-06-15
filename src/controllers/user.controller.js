import User from '../models/User'
import service from '../services'
const bcrypt = require('bcryptjs');

export async function register(req, res) {
    try {
        console.log(req);
        const { name, phone, email, password } = req.body;

        const validEmail = validateEmail(email)

        if (!validEmail) return res.status(422).json({ message: 'email not valid' })

        const validatePass = validatePassword(password);

        if (!validatePass) return res.status(422).json({
            message: 'Password must contains at least 10 characters, one lowercase letter, one uppercase letter and one of the following characters: !, @, #, ? or ]'
        })

        const alreadyExistsUser = await User.findOne({
            attributes: ['name', 'phone', 'email', 'password'],
            where: {
                email: email
            }
        }).catch((err) => {
            console.log('Error: ', err);
        });

        if (alreadyExistsUser) res.status(422).json({ message: "User with this email already exists" });

        const newUser = await User.create({
            name,
            phone,
            email,
            password: bcrypt.hashSync(password)
        }, {
            fields: ['name', 'phone', 'email', 'password']
        });

        if (!newUser)
            return res.status(500).json({ message: 'User cannot created' })

        return res.json({
            message: "User Created successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
        })
    }
}

export async function login(req, res) {
    try {

        const { email, password } = req.body;

        const validEmail = validateEmail(email)

        if (!validEmail) return res.status(422).json({ message: 'email not valid' })

        const validatePass = validatePassword(password);

        if (!validatePass) return res.status(422).json({
            message: 'Password must contains at least 10 characters, one lowercase letter, one uppercase letter and one of the following characters: !, @, #, ? or ]'
        })

        const user = await User.findOne({
            attributes: ['id', 'name', 'phone', 'email', 'password'],
            where: {
                email
            }
        }).catch((err) => {
            res.status(500).json({ message: "Internal server error" })
        })

        //console.log(req.params)

        if (!user) res.status(404).json({ message: "User not found" })

        // @ts-ignore
        const matchPassword = await bcrypt.compare(password, user.password);
        //if (user.password != password) res.status(401).json({ message: "Invalidad credentials" })
        if (!matchPassword) res.status(401).json({ message: "Invalidad credentials" })

        res.json({
            message: "you have successfully logged in",
            // @ts-ignore
            token: service.createToken(user)
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

function validateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        return true
    return false
}

function validatePassword(password) {

    let characters = false;
    let lowercase = false;
    let uppercase = false;
    let number = false;

    if (password.length >= 10) {
        for (let i = 0; i < password.length; i++) {
            //if (/^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]-*"!@#?] /.test(password))
            //&& /"!@#?]/.test(password)) {
            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
                uppercase = true;
            } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {

                lowercase = true;
            } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                number = true;
            } else if (password.charCodeAt(i) == 33 || password.charCodeAt(i) == 35 || password.charCodeAt(i) == 63 || password.charCodeAt(i) == 64 || password.charCodeAt(i) == 93) {
                characters = true;
            }
        }
    }
    if (lowercase == true && uppercase == true && number == true && characters == true) {
        return true
    }
    return false

}