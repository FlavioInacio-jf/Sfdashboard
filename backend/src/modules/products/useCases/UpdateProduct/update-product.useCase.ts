import { CustomError } from "../../../app";
import { PRODUCT_NOT_FOUND } from "../../../app/exceptions";
import { IUpdateProductRequestDTO } from "../../dtos";
import { Product } from "../../entities";
import { IProductsRepository } from "../../repositories";

export class UpdateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute({
    id,
    price,
    amount,
    status,
  }: IUpdateProductRequestDTO): Promise<Product> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    productExists.price = price || productExists.price;

    productExists.amount = amount !== undefined ? amount : productExists.amount;
    productExists.status = status || productExists.status;

    if (amount === 0) {
      productExists.status = "Out of stock";
    }

    if (amount > 0 && status !== "Not sell") {
      productExists.status = "In stock";
    }

    await this.productsRepository.update(productExists);

    return productExists;
  }
}
