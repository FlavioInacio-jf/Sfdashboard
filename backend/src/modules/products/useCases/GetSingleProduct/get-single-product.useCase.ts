import { CustomError } from "../../../app";
import { Product } from "../../entities";
import { PRODUCT_NOT_FOUND } from "../../../app/exceptions";
import { IProductsRepository } from "../../repositories";
import { IGetSingleProductRequestDTO } from "../../dtos";

export class GetSingleProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute({ id }: IGetSingleProductRequestDTO): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new CustomError(PRODUCT_NOT_FOUND);
    }

    return product;
  }
}
