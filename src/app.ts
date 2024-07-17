import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Routers } from "./router";
import cookieParser from "cookie-parser";

const app: Application = express();

// cors and middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", Routers);

interface GET_DEFAULT_METHOD {
  status: number;
  message: string;
}

app.get("/", (req: Request, res: Response) => {
  const response: GET_DEFAULT_METHOD = {
    status: httpStatus.OK,
    message: "Testing!",
  };
  res.status(response.status).json(response);
});

export default app;
