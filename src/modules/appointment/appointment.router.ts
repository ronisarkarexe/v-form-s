import express from "express";
import { AppointmentController } from "./appointment.controller";
import { validateRequest } from "../../middleware/validation.middleware";
import { AppointmentValidator } from "./appointment.validation";

const router = express.Router();

router.post(
  "/create",
  validateRequest(AppointmentValidator.create),
  AppointmentController.createAppointment
);

router.get("/", AppointmentController.getAllAppointments);

router.get("/:id", AppointmentController.getAppointment);

router.patch("/:id", AppointmentController.updateAppointment);

router.delete("/:id", AppointmentController.deleteAppointment);

export const AppointmentRouter = router;
