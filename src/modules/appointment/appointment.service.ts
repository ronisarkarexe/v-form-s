import mongoose from "mongoose";
import { IAppointment } from "./appointment.interface";
import { Appointment } from "./appointment.model";
import { User } from "../user/user.model";

const createAppointment = async (
  payload: IAppointment
): Promise<IAppointment> => {
  let res = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const user = await User.findOne({ _id: payload.userId });
    res = await Appointment.create(payload);
    user?.appointments?.push(res);
    if (user) {
      await user.save();
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.commitTransaction();
    await session.endSession();
  }
  if (!res) {
    throw new Error("Appointment is not created!");
  }
  return res;
};

const getAllAppointments = async (): Promise<IAppointment[]> => {
  const result = await Appointment.find({}).populate('userId');
  return result;
};

const getAppointment = async (
  payload: string
): Promise<IAppointment | null> => {
  const result = await Appointment.findOne({ _id: payload }).populate('userId');
  return result;
};

const updateAppointment = async (
  userId: string,
  payload: Partial<IAppointment>
) => {
  const result = await Appointment.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteAppointment = async (id: string): Promise<void> => {
  await Appointment.deleteOne({ _id: id });
};

export const AppointmentService = {
  createAppointment,
  getAllAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
};
