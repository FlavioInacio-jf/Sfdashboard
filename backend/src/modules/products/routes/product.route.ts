import { Router } from "express";
import {
  AppEndpoint,
  EnsureAdmin,
  EnsureAuthenticated,
  validateResource,
} from "../../app";
import {
  productBuySchema,
  productCreateSchema,
  productUpdateSchema,
} from "../schemas";
import {
  buyProductController,
  createProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  updateProductController,
} from "../useCases";

const productsRoutes = Router();

const ensureAuthenticated = new EnsureAuthenticated();
productsRoutes.use(ensureAuthenticated.execute);

productsRoutes.get("/", getAllProductsController.execute);
productsRoutes.get("/:id", getSingleProductController.execute);
productsRoutes.post(
  `/:id${AppEndpoint.SALE}`,
  validateResource(productBuySchema),
  buyProductController.execute,
);

/*
  ----------------------------------------------------------------
  Only users who are admins can delete, update and create products
  ----------------------------------------------------------------
 */

const ensureAdmin = new EnsureAdmin();
productsRoutes.use(ensureAdmin.execute);

productsRoutes.post(
  "/",
  validateResource(productCreateSchema),
  createProductController.execute,
);
productsRoutes.patch(
  "/:id",
  validateResource(productUpdateSchema),
  updateProductController.execute,
);
productsRoutes.delete("/:id", deleteProductController.execute);

export { productsRoutes };
