import express from "express";
import { TestDocumentController } from "./test.controller";

const router = express.Router();

router.post("/create", TestDocumentController.createTestDocument);

router.get("/", TestDocumentController.getAllTestDocuments);

router.get("/:id", TestDocumentController.getTestDocument);

router.patch("/:id", TestDocumentController.updateTestDocument);

router.delete("/:id", TestDocumentController.deleteTestDocument);

export const TestDocumentRouter = router;
