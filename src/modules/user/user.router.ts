import express from "express";
import { UserController } from "./user.controllter";
import auth from "../../middleware/auth.middleware";
import { validateRequest } from "../../middleware/validation.middleware";
import { Validator } from "./user.validation";

const router = express.Router();

router.get("/lists", auth(), UserController.getAllUsers);

router.get("/:id", auth(), UserController.getUser);

router.post(
  "/create",
  validateRequest(Validator.createUser),
  UserController.createUser
);

router.patch("/:id", auth(), UserController.updateUser);

export const UserRouter = router;
