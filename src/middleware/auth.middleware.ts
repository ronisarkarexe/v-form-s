import { NextFunction, Request, Response } from "express";
import config from "../config";
import { Secret } from "jsonwebtoken";
import { JwtHalers } from "../utils/jwt.helper";
import { User } from "../modules/user/user.model";

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.headers.cookie;
    let token = accessToken?.split("=")[1];

    if (!token) {
      throw new Error("You are not authorized to access");
    }

    const verifiedUser = await JwtHalers.verifyToken(
      token as string,
      config.jwt_secret as Secret
    );

    const { userEmail } = verifiedUser;
    const isExistUser = await User.findOne({ email: userEmail });
    if (isExistUser?.email !== userEmail) {
      throw new Error("Forbidden");
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default auth;
