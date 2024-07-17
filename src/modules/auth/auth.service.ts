import bcrypt from "bcrypt";
import { Secret } from "jsonwebtoken";
import { AuthModel } from "./auth.interface";
import config from "../../config";
import { JwtHalers } from "../../utils/jwt.helper";
import { User } from "../user/user.model";

const login = async (payload: AuthModel) => {
  const { email, password } = payload;
  const isExistUser = await User.findOne({ email: email });
  if (!isExistUser) {
    throw new Error("User not found");
  }
  const match = await bcrypt.compare(password, isExistUser.password);
  if (!match) {
    throw new Error("Password is not valid");
  }
  const { email: userEmail } = isExistUser;
  const accessToken = JwtHalers.createToken(
    { userEmail },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string
  );
  return {
    accessToken,
  };
};

export const AuthService = {
  login,
};
