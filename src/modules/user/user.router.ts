import express from "express";
import { UserController } from "./user.controllter";

const router = express.Router();

router.get("/list_user");
router.post("/create", UserController.createUser);

export const UserRouter = router;
