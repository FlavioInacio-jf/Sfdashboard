import { Router } from "express";
import { AddProductCartController } from "../../controllers/carts/AddProductCartController";
import { GetAllProductsCartController } from "../../controllers/carts/GetAllProductsCartController";
import { RemoveProductCartController } from "../../controllers/carts/RemoveProductCartController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema } from "./schemas";

const cartsRoutes = Router();
const addProductCartController = new AddProductCartController();
const removeProductCartController = new RemoveProductCartController();
const getAllProductsCartController = new GetAllProductsCartController();

const ensureAuthenticated = new EnsureAuthenticated();
cartsRoutes.use(ensureAuthenticated.execute);

cartsRoutes.get("/", getAllProductsCartController.execute);
cartsRoutes.post(
  "/",
  validateResource(createSchema),
  addProductCartController.execute,
);
cartsRoutes.delete("/:id", removeProductCartController.execute);

export { cartsRoutes };
