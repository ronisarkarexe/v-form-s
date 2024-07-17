import { Request, Response } from "express";
import httpStatus from "http-status";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";
import sendResponse from "../../utils";

const createUser = async (req: Request, res: Response) => {
  try {
    const body: IUser = req.body;
    const result = await UserService.createUser(body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to created user!",
    });
  }
};

export const UserController = {
  createUser,
};
