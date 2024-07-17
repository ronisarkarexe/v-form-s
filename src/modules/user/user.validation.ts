import Joi from "joi";

const createUser = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
  }),
  name: Joi.string().required().messages({
    "any.required": "Name is required.",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required.",
  }),
  rule: Joi.string().required().messages({
    "any.required": "Rule is required.",
  }),
}).unknown(true);

export const Validator = {
  createUser,
};
