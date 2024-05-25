import express from 'express';
import { userController } from './user.controller';

const router = express.Router();



router.post('/created-Student', userController.createStudent)
// router.post('/users/createdFaculty',)
// router.post('/users/createdAdmin',)





export const userRoutes = router;