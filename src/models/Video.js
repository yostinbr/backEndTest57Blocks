const Sequelize = require('sequelize');
import { sequelize } from '../config/database';
import User from './User';


const Video = sequelize.define('videos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.TEXT
    },
    url: {
        type: Sequelize.TEXT
    },
    qualification: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING,
    },
    user_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

User.hasMany(Video, { foreignKey: 'user_id', sourceKey: 'id' });
// @ts-ignore
Video.belongsTo(User, { foreignKey: 'user_id', sourceKey: 'id' })

export default Video;