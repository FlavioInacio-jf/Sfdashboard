import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface ICreateProductRequest {
  name: string;
  price: number;
  description: string;
  amount: number;
  photo_url: string;
  category: string;
  user_id: string;
}

export class CreateProductService {
  async execute({
    user_id,
    name,
    price,
    description,
    amount,
    photo_url,
    category,
  }: ICreateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productAlreadyExists = await productsRepository.findOne({
      name,
      user_id,
    });

    if (productAlreadyExists) {
      throw new AppError(`Product "${name}" already exists`, 409, "/products");
    }

    const product = productsRepository.create({
      name,
      price,
      description,
      amount,
      photo_url,
      category,
      user_id,
    });

    await productsRepository.save(product);

    return product;
  }
}
