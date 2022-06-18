import { Router } from "express";
import {
  addresses,
  auth,
  carts,
  comments,
  products,
  users,
} from "../constants/endPoints";
import { addressesRoutes } from "./addresses";
import { authRoutes } from "./authenticate";
import { cartsRoutes } from "./carts";
import { commentsRoutes } from "./comments";
import { productsRoutes } from "./products";
import { usersRoutes } from "./users";

const routes = Router();

routes.use(addresses, addressesRoutes);
routes.use(products, productsRoutes);
routes.use(comments, commentsRoutes);
routes.use(carts, cartsRoutes);
routes.use(users, usersRoutes);
routes.use(auth, authRoutes);

export { routes };
