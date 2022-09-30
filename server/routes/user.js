import express from 'express';
import { login, logout, signup } from '../Controller/Authentication.js';
import { checkLogin } from '../Controller/checkLogin.js';
import { allVideos, upload } from '../Controller/videos.js';
const router = express.Router();


router.post('/signup',signup)
router.post('/login',login)
router.get('/login/check',checkLogin)
router.get('/logout',logout)
router.patch('/upload',upload)
router.get('/videos',allVideos)

export default router