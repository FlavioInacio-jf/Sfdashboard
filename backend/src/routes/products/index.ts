import { Router } from "express";
import { CreateProductController } from "../../controllers/products/CreateProductController";
import { DeleteProductController } from "../../controllers/products/DeleteProductController";
import { GetAllProductsController } from "../../controllers/products/GetAllProductsController";
import { GetSingleProductController } from "../../controllers/products/GetSingleProductController";
import { UpdateProductController } from "../../controllers/products/UpdateProductController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { Schema } from "./Schema";

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
productsRoutes.post("/", Schema.create, createProductController.execute);
productsRoutes.patch("/:id", Schema.update, updateProductController.execute);
productsRoutes.delete("/:id", deleteCategoryController.execute);

export { productsRoutes };
