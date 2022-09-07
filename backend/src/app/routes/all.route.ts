import { Router } from "express";
import { authRoutes } from "../../auth";
import { productsRoutes } from "../../products";
import { usersRoutes } from "../../users";
import { AppEndpoint } from "../enums";

const routes = Router();

routes.use(AppEndpoint.PRODUCTS, productsRoutes);
routes.use(AppEndpoint.USERS, usersRoutes);
routes.use(AppEndpoint.AUTH, authRoutes);

export { routes };
