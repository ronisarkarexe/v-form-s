import express from "express";
import { TestDocumentController } from "./test.controller";
import { validateRequest } from "../../middleware/validation.middleware";
import { TestValidator } from "./test.validation";

const router = express.Router();

router.post(
  "/create",
  validateRequest(TestValidator.create),
  TestDocumentController.createTestDocument
);

router.get("/", TestDocumentController.getAllTestDocuments);

router.get("/:id", TestDocumentController.getTestDocument);

router.patch("/:id", TestDocumentController.updateTestDocument);

router.delete("/:id", TestDocumentController.deleteTestDocument);

export const TestDocumentRouter = router;
