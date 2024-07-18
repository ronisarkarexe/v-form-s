import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils";
import { IAppointment } from "./appointment.interface";
import { AppointmentService } from "./appointment.service";

const createAppointment = async (req: Request, res: Response) => {
  try {
    const body: IAppointment = req.body;
    const result = await AppointmentService.createAppointment(body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Appointment created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to created appointment!",
    });
  }
};

const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const result = await AppointmentService.getAllAppointments();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Appointment retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to retrieved appointment!",
    });
  }
};

const getAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await AppointmentService.getAppointment(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Appointment retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to retrieved appointment!",
    });
  }
};

const updateAppointment = async (req: Request, res: Response) => {
  try {
    const body: IAppointment = req.body;
    const { id } = req.params;
    const result = await AppointmentService.updateAppointment(id, body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Appointment updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to update appointment!",
    });
  }
};
const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await AppointmentService.deleteAppointment(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Appointment deleted successfully!",
      data: "",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to deleted appointment!",
    });
  }
};

export const AppointmentController = {
  createAppointment,
  getAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
};
