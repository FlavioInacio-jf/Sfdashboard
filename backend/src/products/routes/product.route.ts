import { Router } from "express";
import { validateResource } from "../../app";
import {
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
