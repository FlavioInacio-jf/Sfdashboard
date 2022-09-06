import { Router } from "express";
import {
  CreateProductController,
  DeleteProductController,
  GetAllProductsController,
  GetSingleProductController,
  UpdateProductController,
} from "../controllers";
import { EnsureAuthenticated, validateResource } from "../../app";
import { createSchema, updateSchema } from "../schemas";

const productsRoutes = Router();
const createProductController = new CreateProductController();
const deleteCategoryController = new DeleteProductController();
const getAllProductsController = new GetAllProductsController();
const getSingleProductController = new GetSingleProductController();
const updateProductController = new UpdateProductController();
const ensureAuthenticated = new EnsureAuthenticated();

productsRoutes.use(ensureAuthenticated.execute);

productsRoutes.get("/", getAllProductsController.execute);
productsRoutes.get("/:id", getSingleProductController.execute);
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
