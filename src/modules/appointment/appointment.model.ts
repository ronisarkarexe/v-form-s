import { Schema, model } from "mongoose";
import { AppointmentModel, IAppointment } from "./appointment.interface";

export const AppointmentSchema: Schema<IAppointment> = new Schema<
  IAppointment,
  AppointmentModel
>(
  {
    startDay: { type: String, required: true },
    startTime: { type: String, required: true },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = model<IAppointment, AppointmentModel>(
  "Appointment",
  AppointmentSchema
);
