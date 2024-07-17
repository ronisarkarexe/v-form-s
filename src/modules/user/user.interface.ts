import { Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  position: string;
  rule: string;
  status: string;
}

export type UserModel = Model<IUser, object>;
