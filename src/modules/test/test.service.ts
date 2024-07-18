import mongoose from "mongoose";
import { User } from "../user/user.model";
import { ITestDocument } from "./test.interface";
import { TestDocument } from "./test.model";

const createTestDocument = async (
  payload: ITestDocument
): Promise<ITestDocument> => {
  let res = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const user = await User.findOne({ _id: payload.userId });
    res = await TestDocument.create(payload);
    user?.tests?.push(res);
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
    throw new Error("Test is not created!");
  }
  return res;
};

const getAllTestDocuments = async (): Promise<ITestDocument[]> => {
  const result = await TestDocument.find({}).populate("userId");
  return result;
};

const getTestDocument = async (
  payload: string
): Promise<ITestDocument | null> => {
  const result = await TestDocument.findOne({ _id: payload }).populate(
    "userId"
  );
  return result;
};

const updateTestDocument = async (
  userId: string,
  payload: Partial<ITestDocument>
) => {
  const result = await TestDocument.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteTestDocument = async (id: string): Promise<void> => {
  await TestDocument.deleteOne({ _id: id });
};

export const TestDocumentService = {
  createTestDocument,
  getAllTestDocuments,
  getTestDocument,
  updateTestDocument,
  deleteTestDocument,
};
