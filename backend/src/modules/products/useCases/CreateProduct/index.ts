import { ProductsRepository } from "../../repositories";
import { CreateProductController } from "./create-product.controller";
import { CreateProductUseCase } from "./create-product.useCase";

const productsRepository = new ProductsRepository();
const createProductUseCase = new CreateProductUseCase(productsRepository);
const createProductController = new CreateProductController(
  createProductUseCase,
);

export { createProductUseCase, createProductController };
