import { CustomError } from "../../../app";
import { PRODUCT_NOT_FOUND } from "../../../app/exceptions";
import { IDeleteProductRequestDTO } from "../../dtos";
import { Product } from "../../entities";
import { IProductsRepository } from "../../repositories";

export class DeleteProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute({ id }: IDeleteProductRequestDTO): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    await this.productsRepository.delete({ id });
    return product;
  }
}
