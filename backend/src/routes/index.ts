import { Router } from "express";
import { auth, comments, products, users } from "../constants/endPoints";
import { authRoutes } from "./authenticate";
import { commentsRoutes } from "./comments";
import { productsRoutes } from "./products";
import { usersRoutes } from "./users";

const routes = Router();

routes.use(products, productsRoutes);
routes.use(comments, commentsRoutes);
routes.use(users, usersRoutes);
routes.use(auth, authRoutes);

export { routes };
