import { ProductsRepository } from "../../repositories";
import { GetAllProductsController } from "./get-all-products.controller";
import { GetAllProductsUseCase } from "./get-all-products.useCase";

const productsRepository = new ProductsRepository();
const getAllProductsUseCase = new GetAllProductsUseCase(productsRepository);
const getAllProductsController = new GetAllProductsController(
  getAllProductsUseCase,
);

export { getAllProductsController, getAllProductsUseCase };
