import mongoose, { Schema, Document, Model, model } from "mongoose";
import { ITestDocument, TestModel } from "./test.interface";

const DoseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  note: { type: String, required: true },
  time: { type: String, required: true },
  dosage: { type: Number, required: true },
  frequency: { type: Number, required: true },
  days: { type: Number, required: true },
});

const TestsSchema = new Schema({
  title: { type: String, required: true },
  report: { type: Boolean, default: false },
  note: { type: String, required: true },
});

const DiagnosisSchema = new Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
});

const SymptomSchema = new Schema({
  title: { type: String, required: true },
  days: { type: Number, required: true },
  note: { type: String, required: true },
});

export const TestSchema: Schema<ITestDocument> = new Schema<
  ITestDocument,
  TestModel
>({
  title: { type: String, required: true },
  testSuggestionName: { type: String, required: true },
  testSuggestion: { type: [String], required: true },
  searchedDrug: { type: [String], required: true },
  dose: { type: [DoseSchema], required: false },
  test: { type: [TestsSchema], required: false },
  diagnosis: { type: [DiagnosisSchema], required: false },
  symptom: { type: [SymptomSchema], required: false },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export const TestDocument = model<ITestDocument, TestModel>(
  "TestDocument",
  TestSchema
);
