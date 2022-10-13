import { ProductsRepository } from "../../repositories";
import { GetSingleProductController } from "./get-single-product.controller";
import { GetSingleProductUseCase } from "./get-single-product.useCase";

const productsRepository = new ProductsRepository();
const getSingleProductUseCase = new GetSingleProductUseCase(productsRepository);
const getSingleProductController = new GetSingleProductController(
  getSingleProductUseCase,
);

export { getSingleProductController, getSingleProductUseCase };
