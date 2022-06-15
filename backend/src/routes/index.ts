import { Router } from "express";
import {
  addresses,
  auth,
  comments,
  products,
  users,
} from "../constants/endPoints";
import { addressesRoutes } from "./addresses";
import { authRoutes } from "./authenticate";
import { commentsRoutes } from "./comments";
import { productsRoutes } from "./products";
import { usersRoutes } from "./users";

const routes = Router();

routes.use(addresses, addressesRoutes);
routes.use(products, productsRoutes);
routes.use(comments, commentsRoutes);
routes.use(users, usersRoutes);
routes.use(auth, authRoutes);

export { routes };
