import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import "./database";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
      path: err.path,
      code: err.statusCode,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
    code: 500,
  });
});

app.listen(3333, () => console.log("Server is running in localhost:3333"));
