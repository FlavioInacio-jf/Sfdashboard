import { Router } from "express";
import { AddProductCartController } from "../../controllers/carts/AddProductCartController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema } from "./schemas";

const cartsRoutes = Router();
const addProductCartController = new AddProductCartController();

const ensureAuthenticated = new EnsureAuthenticated();
cartsRoutes.use(ensureAuthenticated.execute);

cartsRoutes.post(
  "/",
  validateResource(createSchema),
  addProductCartController.execute,
);

export { cartsRoutes };
