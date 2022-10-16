import { Router } from "express";
import {
  AppEndpoint,
  EnsureAdmin,
  ensureAuthenticated,
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

productsRoutes.use(ensureAuthenticated.execute.bind(ensureAuthenticated));

productsRoutes.get(
  "/",
  getAllProductsController.execute.bind(getAllProductsController),
);
productsRoutes.get(
  "/:id",
  getSingleProductController.execute.bind(getSingleProductController),
);
productsRoutes.post(
  `/:id${AppEndpoint.SALE}`,
  validateResource(productBuySchema),
  buyProductController.execute.bind(buyProductController),
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
  createProductController.execute.bind(createProductController),
);
productsRoutes.patch(
  "/:id",
  validateResource(productUpdateSchema),
  updateProductController.execute.bind(updateProductController),
);
productsRoutes.delete(
  "/:id",
  deleteProductController.execute.bind(deleteProductController),
);

export { productsRoutes };
