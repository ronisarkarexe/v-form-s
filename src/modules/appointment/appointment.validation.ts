import Joi from "joi";

const create = Joi.object({
  startDay: Joi.date().required().messages({
    "any.required": "Start day is required.",
  }),
  startTime: Joi.date().required().messages({
    "any.required": "Start time is required.",
  }),
  userId: Joi.string().required().messages({
    "any.required": "User Id is required.",
  }),
}).unknown(true);

export const AppointmentValidator = {
  create,
};
