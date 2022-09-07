/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from "cors";
import express, { NextFunction, Request, Response, Router } from "express";
import "express-async-errors";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { AppEndpoint, CustomError } from "./app";
import { authRoutes } from "./auth";
import "./database";
import { productsRoutes } from "./products";
import swaggerDocument from "./swagger.json";
import { usersRoutes } from "./users";

const app = express();
const routes = Router();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.use(AppEndpoint.PRODUCTS, productsRoutes);
routes.use(AppEndpoint.USERS, usersRoutes);
routes.use(AppEndpoint.AUTH, authRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(400).json({
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
