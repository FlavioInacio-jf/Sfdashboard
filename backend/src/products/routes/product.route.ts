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
import {
  productBuySchema,
  productCreateSchema,
  productUpdateSchema,
} from "../schemas";

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
productsRoutes.delete("/:id", deleteCategoryController.execute);

export { productsRoutes };
