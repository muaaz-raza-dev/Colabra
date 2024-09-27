import express, { RequestHandler } from 'express';
import { Router } from 'express';
import {  LocaleLoginController, LoginWithGoogle } from '../controllers/auth/login.controller';
const router: Router = express.Router();



router.post('/login/google', GoogleLoginController);
router.post('/login/locale', LocaleLoginController);

export default router;
