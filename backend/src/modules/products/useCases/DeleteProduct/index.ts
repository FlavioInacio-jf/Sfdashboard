import { ProductsRepository } from "../../repositories";
import { DeleteProductController } from "./delete-product.controller";
import { DeleteProductUseCase } from "./delete-product.useCase";

const productsRepository = new ProductsRepository();
const deleteProductUseCase = new DeleteProductUseCase(productsRepository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase,
);

export { deleteProductUseCase, deleteProductController };
