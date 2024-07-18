import express from "express";
import { UserRouter } from "../modules/user/user.router";
import { AuthRouter } from "../modules/auth/auth.router";
import { AppointmentRouter } from "../modules/appointment/appointment.router";
import { TestDocumentRouter } from "../modules/test/test.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/appointment",
    route: AppointmentRouter,
  },
  {
    path: "/test_document",
    route: TestDocumentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const Routers = router;
