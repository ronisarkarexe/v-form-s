import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
const app: Application = express();

// cors and middleware
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
