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

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "OK!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to get users!",
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const body: IUser = req.body;
    const { id } = req.params;
    const result = await UserService.updateUser(id, body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "OK!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to get users!",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "OK!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to get users!",
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await UserService.deleteUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to get users!",
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
