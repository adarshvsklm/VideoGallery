import express from 'express';
import { login, logout, signup } from '../Controller/Authentication.js';
import { checkLogin } from '../Controller/checkLogin.js';
const router = express.Router();


router.post('/signup',signup)
router.post('/login',login)
router.get('/login/check',checkLogin)
router.get('/logout',logout)



export default router