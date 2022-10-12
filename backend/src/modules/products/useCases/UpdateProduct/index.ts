import { ProductsRepository } from "../../repositories";
import { UpdateProductController } from "./update-product.controller";
import { UpdateProductUseCase } from "./update-product.useCase";

const productsRepository = new ProductsRepository();
const updateProductUseCase = new UpdateProductUseCase(productsRepository);
const updateProductController = new UpdateProductController(
  updateProductUseCase,
);

export { updateProductUseCase, updateProductController };
