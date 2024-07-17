import { Request, Response } from "express";
import httpStatus from "http-status";
import { AuthModel } from "./auth.interface";
import { AuthService } from "./auth.service";
import config from "../../config";
import sendResponse from "../../utils";

const login = async (req: Request, res: Response) => {
  try {
    const body: AuthModel = req.body;
    const result = await AuthService.login(body);
    const { accessToken } = result;

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.env === "production",
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User login successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to login user!",
    });
  }
};

export const AuthController = {
  login,
};
