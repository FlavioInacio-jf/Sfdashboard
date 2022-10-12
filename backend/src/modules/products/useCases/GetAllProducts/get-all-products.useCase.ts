import { IQueryProductResquestDTO } from "../../dtos";
import { Product } from "../../entities";
import { IProductsRepository } from "../../repositories";

export class GetAllProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute({
    limit = 12,
    page = 1,
    ...query
  }: IQueryProductResquestDTO): Promise<Product[]> {
    const products = await this.productsRepository.findAll({
      limit,
      page,
      ...query,
    });
    return products;
  }
}
