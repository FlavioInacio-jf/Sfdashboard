import { getRepository, Repository } from "typeorm";
import {
  ICreateProductRequestDTO,
  IDeleteProductRequestDTO,
  IQueryProductResquestDTO,
} from "../../dtos";
import { Product } from "../../entities";
import { IProductsRepository } from "../IProducts.repository";

export class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;
  constructor() {
    this.repository = getRepository(Product);
  }

  async create(data: ICreateProductRequestDTO): Promise<Product> {
    const product = this.repository.create(data);
    await this.repository.save(product);

    return product;
  }
  async update(data: Product): Promise<void> {
    await this.repository.save(data);
  }

  async findByBarcode(barcode: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({
      where: { bar_code: barcode },
    });

    return product;
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne(id);

    return product;
  }
  async delete({ id }: IDeleteProductRequestDTO): Promise<void> {
    await this.repository.delete(id);
  }

  async findAll({
    limit,
    page,
    ...rest
  }: IQueryProductResquestDTO): Promise<Product[]> {
    const products = await this.repository.find({
      take: limit,
      skip: page,
      where: { ...rest },
    });

    return products;
  }
}
