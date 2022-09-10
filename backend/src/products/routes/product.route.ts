import { Router } from "express";
import {
  AppEndpoint,
  EnsureAdmin,
  EnsureAuthenticated,
  validateResource,
} from "../../app";
import {
  BuyProductController,
  CreateProductController,
  DeleteProductController,
  GetAllProductsController,
  GetSingleProductController,
  UpdateProductController,
} from "../controllers";
import { createSchema, updateSchema } from "../schemas";

const productsRoutes = Router();
const createProductController = new CreateProductController();
const deleteCategoryController = new DeleteProductController();
const getAllProductsController = new GetAllProductsController();
const getSingleProductController = new GetSingleProductController();
const updateProductController = new UpdateProductController();
const buyProductController = new BuyProductController();

const ensureAuthenticated = new EnsureAuthenticated();
productsRoutes.use(ensureAuthenticated.execute);

productsRoutes.get("/", getAllProductsController.execute);
productsRoutes.get("/:id", getSingleProductController.execute);
productsRoutes.post(`/:id${AppEndpoint.SALE}`, buyProductController.execute);

/*
  ----------------------------------------------------------------
  Only users who are admins can delete, update and create products
  ----------------------------------------------------------------
 */

const ensureAdmin = new EnsureAdmin();
productsRoutes.use(ensureAdmin.execute);

productsRoutes.post(
  "/",
  validateResource(createSchema),
  createProductController.execute,
);
productsRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateProductController.execute,
);
productsRoutes.delete("/:id", deleteCategoryController.execute);

export { productsRoutes };
