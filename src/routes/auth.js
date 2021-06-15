const { Router } = require('express');
const router = Router();

import { login, register } from '../controllers/user.controller';


// /api/users/
router.post('/', register);
router.post('/login', login);

export default router;