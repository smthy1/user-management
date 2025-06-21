import express from 'express';
import limiter from '../middlewares/rateLimit.js';
import * as userController from '../controllers/userController.js';
import authToken from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', limiter, userController.loginUser);
router.patch('/update-username', authToken, userController.updateUser);
router.patch('/update-password', authToken, userController.newPassword);
router.delete('/delete-user', authToken, userController.delUser);


export default router;