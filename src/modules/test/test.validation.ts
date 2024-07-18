import Joi from "joi";

const DoseJoiSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Dose title is required.",
  }),
  description: Joi.string(),
  note: Joi.string().required().messages({
    "any.required": "Dose note is required.",
  }),
  time: Joi.string().required().messages({
    "any.required": "Dose time is required.",
  }),
  dosage: Joi.number().required().messages({
    "any.required": "Dose dosage is required.",
  }),
  frequency: Joi.number().required().messages({
    "any.required": "Dose frequency is required.",
  }),
  days: Joi.number().required().messages({
    "any.required": "Dose days is required.",
  }),
});

const TestsJoiSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Test title is required.",
  }),
  report: Joi.boolean().default(false),
  note: Joi.string().required().messages({
    "any.required": "Test note is required.",
  }),
});

const DiagnosisJoiSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Diagnosis title is required.",
  }),
  note: Joi.string().required().messages({
    "any.required": "Diagnosis note is required.",
  }),
});

const SymptomJoiSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Symptom title is required.",
  }),
  days: Joi.number().required().messages({
    "any.required": "Symptom days is required.",
  }),
  note: Joi.string().required().messages({
    "any.required": "Symptom note is required.",
  }),
});

const create = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Test title is required.",
  }),
  testSuggestionName: Joi.string().required().messages({
    "any.required": "Test suggestion name is required.",
  }),
  testSuggestion: Joi.array().items(Joi.string()).required().messages({
    "any.required": "Test suggestion is required.",
  }),
  searchedDrug: Joi.array().items(Joi.string()).required().messages({
    "any.required": "Searched drug is required.",
  }),
  dose: Joi.array().items(DoseJoiSchema.optional()).optional(),
  test: Joi.array().items(TestsJoiSchema.optional()).optional(),
  diagnosis: Joi.array().items(DiagnosisJoiSchema.optional()).optional(),
  symptom: Joi.array().items(SymptomJoiSchema.optional()).optional(),
  userId: Joi.string().required().messages({
    "any.required": "User Id is required.",
  }),
}).unknown(true);

export const TestValidator = {
  create,
};
