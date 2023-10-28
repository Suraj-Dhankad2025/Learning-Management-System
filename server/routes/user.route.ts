import express from 'express';
import {activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo} from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.post('/registration', registrationUser);

userRouter.post('/activate-user', activateUser);

userRouter.post('/login', loginUser);

userRouter.get('/logout', isAuthenticated, logoutUser);

userRouter.get('/refreshToken', updateAccessToken);

userRouter.get('/me', isAuthenticated, getUserInfo);

userRouter.get('/social-auth', socialAuth);

userRouter.get('/update-user-info', isAuthenticated, updateUserInfo);

userRouter.get('/update-user-password', isAuthenticated, updatePassword);

userRouter.get('/update-user-avatar', isAuthenticated, updateProfilePicture);

export default userRouter;