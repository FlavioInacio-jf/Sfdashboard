import { Router } from "express";
import { auth, products, users } from "../constants/endPoints";
import { authRoutes } from "./authenticate";
import { productsRoutes } from "./products";
import { usersRoutes } from "./users";

const routes = Router();

routes.use(products, productsRoutes);
routes.use(users, usersRoutes);
routes.use(auth, authRoutes);

export { routes };
