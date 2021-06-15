const { Router } = require('express');
const auth = require('../middlewares/auth');
const router = Router();


import { createVideo, deleteVideo, getPrivateVideos, getVideo, getVideos, updateVideo, likeVideo, getLikedVideos } from '../controllers/video.controller'


// /api/videos/
router.get('/', auth.isAuth, getVideos);
router.post('/', auth.isAuth, createVideo);
router.get('/private', auth.isAuth, getPrivateVideos);
router.get('/liked', auth.isAuth, getLikedVideos);

router.get('/:id', auth.isAuth, getVideo);
router.delete('/:id', auth.isAuth, deleteVideo);
router.put('/:id', auth.isAuth, updateVideo);
router.post('/like', auth.isAuth, likeVideo);

export default router;