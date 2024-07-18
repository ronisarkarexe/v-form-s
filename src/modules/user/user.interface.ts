import { Model } from "mongoose";
import { IAppointment } from "../appointment/appointment.interface";
import { ITestDocument } from "../test/test.interface";

export interface IUser {
  name: string;
  email: string;
  password: string;
  position: string;
  rule: string;
  status: string;
  appointments?: IAppointment[];
  tests?: ITestDocument[];
}

export type UserModel = Model<IUser, object>;
