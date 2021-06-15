import LikedVideo from '../models/LikedVideo';
import Video from '../models/Video';

export async function getVideos(req, res) {

    try {
        const videos = await Video.findAll({
            order: [
                ['id', 'DESC']
            ]
        });

        res.json({
            data: videos,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

export async function createVideo(req, res) {
    try {
        const { title, url, qualification, description } = req.body;
        const user_id = req.user_id;

        const newVideo = await Video.create({
            title,
            url,
            qualification,
            description,
            user_id
        }, {
            fields: ['title', 'url', 'qualification', 'description', 'user_id']
        });

        res.json({
            message: 'New Video Created',
            data: newVideo
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export async function getVideo(req, res) {
    try {
        const { id } = req.params;
        const user_id = req.user_id;

        const video = await Video.findOne({
            where: {
                id,
                user_id
            }
        });

        res.json({
            data: video,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

export async function updateVideo(req, res) {
    try {
        const { id } = req.params;
        const { title, url, qualification, description } = req.body;
        const user_id = req.user_id;

        const video = await Video.findOne({
            attributes: ['title', 'url', 'qualification', 'description'],
            where: {
                id,
                user_id
            }
        });

        const updateVideo = await Video.update({
            title: title,
            url: url,
            qualification: qualification,
            description: description,
            user_id: user_id
        }, {
            where: { id }
        });

        res.json({
            message: "Video Updated successfully",
            data: updateVideo
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

export async function deleteVideo(req, res) {
    try {
        const { id } = req.params;
        const user_id = req.user_id;
        const deleteRowCount = await Video.destroy({
            where: {
                id,
                user_id
            }
        });

        res.json({
            message: "Video Deleted",
            count: deleteRowCount
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

export async function getPrivateVideos(req, res) {

    try {

        const user_id = req.user_id;
        const videos = await Video.findAll({
            where: {
                user_id
            },
            order: [
                ['id', 'DESC']
            ]
        });

        res.json({
            data: videos,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

export async function likeVideo(req, res) {
    try {
        const { video_id, liked, comments, recommended } = req.body;
        const user_id = req.user_id;

        const newLikedVideo = await LikedVideo.create({
            video_id,
            user_id,
            liked,
            comments,
            recommended
        }, {
            fields: ['video_id', 'user_id', 'liked', 'comments', 'recommended']
        });

        res.json({
            message: 'Video Mastered as I like',
            data: newLikedVideo
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export async function getLikedVideos(req, res) {

    try {
        const user_id = req.user_id;
        const likeVideos = await LikedVideo.findAll({
            where: {
                user_id
            },
            order: [
                ['id', 'DESC']
            ]
        });

        res.json({
            data: likeVideos,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}