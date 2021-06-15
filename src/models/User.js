const Sequelize = require('sequelize');
import { sequelize } from '../config/database';

import Video from './Video';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
    },
    phone: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT,
    },
    password: {
        type: Sequelize.TEXT
    },
    sign_up_date: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
    }

}, {
    timestamps: false,
});

export default User;