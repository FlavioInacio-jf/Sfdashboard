/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from "cors";
import express, { NextFunction, Request, Response, Router } from "express";
import "express-async-errors";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import { AppEndpoint, CustomError, swaggerDoc } from "./app";
import "./app/database";
import { authRoutes } from "./auth";
import { clientsRoutes } from "./clients";
import { productsRoutes } from "./products";
import { usersRoutes } from "./users";

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.use(AppEndpoint.PRODUCTS, productsRoutes);
router.use(AppEndpoint.CLIENTS, clientsRoutes);
router.use(AppEndpoint.USERS, usersRoutes);
router.use(AppEndpoint.AUTH, authRoutes);
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    const { code, ...rest } = err;
    return res.status(code).json(rest);
  }
  return res.status(500).json({
    title: "Error interno",
    detail: `Erro do interno do servidor - ${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is running in localhost:3333"));
