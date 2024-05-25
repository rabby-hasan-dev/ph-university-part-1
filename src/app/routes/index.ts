import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        roter: userRoutes
    },
    {
        path: '/students',
        roter: studentRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.roter));

// router.use('/students', studentRoutes)
// router.use('/users', userRoutes)






export default router;