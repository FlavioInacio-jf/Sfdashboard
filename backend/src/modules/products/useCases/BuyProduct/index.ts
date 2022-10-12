import { ClientsRepository } from "../../../clients/repositories";
import { UsersRepository } from "../../../users/repositories";
import { ProductsRepository, SalesRepository } from "../../repositories";
import { BuyProductController } from "./buy-product.controller";
import { BuyProductUseCase } from "./buy-product.useCase";

const productsRepository = new ProductsRepository();
const clientsRepository = new ClientsRepository();
const salesRepository = new SalesRepository();
const usersRepository = new UsersRepository();
const buyProductUseCase = new BuyProductUseCase(
  productsRepository,
  salesRepository,
  clientsRepository,
  usersRepository,
);
const buyProductController = new BuyProductController(buyProductUseCase);
export { buyProductController, buyProductUseCase };
