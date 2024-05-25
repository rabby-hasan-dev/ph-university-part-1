import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";


const createStudent = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { password, student: studentData } = req.body;

        // const zodParseData = studentValidationSchema.parse(student)

        const result = await UserServices.createStudentIntoDB(password, studentData);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            succcess: true,
            message: 'Student created successfully',
            data: result

        })

    } catch (err) {
        next(err)
    }
};


export const userController = {
    createStudent
}