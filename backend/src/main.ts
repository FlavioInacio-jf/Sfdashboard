/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { CustomError, routes } from "./app";
import "./app/database";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(401).json({
      title: err.message,
      detail: err,
    });
  }
  return res.status(500).json({
    title: "Error interno",
    detail: `Erro do interno do servidor - ${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is running in localhost:3333"));
