import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils";
import { ITestDocument } from "./test.interface";
import { TestDocumentService } from "./test.service";

const createTestDocument = async (req: Request, res: Response) => {
  try {
    const body: ITestDocument = req.body;
    const result = await TestDocumentService.createTestDocument(body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "TestDocument created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to created TestDocument!",
    });
  }
};

const getAllTestDocuments = async (req: Request, res: Response) => {
  try {
    const result = await TestDocumentService.getAllTestDocuments();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "TestDocument retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to retrieved TestDocument!",
    });
  }
};

const getTestDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await TestDocumentService.getTestDocument(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "TestDocument retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to retrieved TestDocument!",
    });
  }
};

const updateTestDocument = async (req: Request, res: Response) => {
  try {
    const body: ITestDocument = req.body;
    const { id } = req.params;
    const result = await TestDocumentService.updateTestDocument(id, body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "TestDocument updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to update TestDocument!",
    });
  }
};
const deleteTestDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await TestDocumentService.deleteTestDocument(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "TestDocument deleted successfully!",
      data: "",
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to deleted TestDocument!",
    });
  }
};

export const TestDocumentController = {
  createTestDocument,
  getTestDocument,
  getAllTestDocuments,
  updateTestDocument,
  deleteTestDocument,
};
