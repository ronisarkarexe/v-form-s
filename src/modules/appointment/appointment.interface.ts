import { Date, Model, Schema } from "mongoose";
import { IUser } from "../user/user.interface";

export interface IAppointment {
  startDay: Date;
  startTime: Date;
  userId: Schema.Types.ObjectId | IUser;
}

export type AppointmentModel = Model<IAppointment, object>;
