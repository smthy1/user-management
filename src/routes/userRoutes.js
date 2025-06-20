import express from 'express';
import limiter from '../middlewares/rateLimit.js';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', limiter, userController.loginUser);
router.patch('/update-username', userController.updateUser);
router.patch('/update-password', userController.newPassword);
router.delete('/delete-user', userController.delUser);


export default router;