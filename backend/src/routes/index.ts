import { Router } from "express";
import { addresses, auth, products, users } from "../constants/endPoints";
import { addressesRoutes } from "./addresses";
import { authRoutes } from "./authenticate";
import { productsRoutes } from "./products";
import { usersRoutes } from "./users";

const routes = Router();

routes.use(addresses, addressesRoutes);
routes.use(products, productsRoutes);
routes.use(users, usersRoutes);
routes.use(auth, authRoutes);

export { routes };
