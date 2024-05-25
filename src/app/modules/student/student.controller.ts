import { NextFunction, Request, Response } from 'express';

import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { StudentSevices } from './student.service';




//  GET ALL STUDENT DATA
const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSevices.getStudentFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      succcess: true,
      message: 'Student retrived successfully',
      data: result

    })
  } catch (err) {
    next(err)
  }
};

//  GET SINGLE STUDENT DATA

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentSevices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      succcess: true,
      message: 'Student retrived successfully',
      data: result

    })
  } catch (err) {
    next(err)
  }
};

//  DELETE  SPECIFIC STUDENT DATA
const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { studentId } = req.params;
    const result = await StudentSevices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      succcess: true,
      message: 'student is deleted successfully',
      data: result

    })

  } catch (err) {
    next(err)
  }
};

export const studentController = {

  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
