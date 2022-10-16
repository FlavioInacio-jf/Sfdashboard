import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import express, { NextFunction, Request, Response, Router } from "express";

import swaggerUi from "swagger-ui-express";
import { swaggerDoc } from "./docs";
import { AppEndpoint, CustomError } from "./modules/app";
import { authRoutes } from "./modules/auth";
import { clientsRoutes } from "./modules/clients";
import { productsRoutes } from "./modules/products";
import { usersRoutes } from "./modules/users";

const app = express();
const router = Router();

app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
  return res.redirect("/docs");
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.use(AppEndpoint.PRODUCTS, productsRoutes);
router.use(AppEndpoint.CLIENTS, clientsRoutes);
router.use(AppEndpoint.USERS, usersRoutes);
router.use(AppEndpoint.AUTH, authRoutes);
app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export { app };
