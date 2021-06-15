const Sequelize = require('sequelize');
import { sequelize } from '../config/database';

const LikedVideo = sequelize.define('liked_videos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    video_id: {
        type: Sequelize.INTEGER
    },
    liked: {
        type: Sequelize.BOOLEAN
    },
    comments: {
        type: Sequelize.STRING,
    },
    recommended: {
        type: Sequelize.BOOLEAN
    },
}, {
    timestamps: false
});

export default LikedVideo;