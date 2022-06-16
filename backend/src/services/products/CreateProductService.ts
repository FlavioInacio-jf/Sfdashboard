import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface ICreateProductRequest {
  title: string;
  price: number;
  description: string;
  amount: number;
  photo: string;
  category: string;
  status: "published" | "draft" | "out_of_stock";
  physical_condition: "new" | "old";
  user_id: string;
}

export class CreateProductService {
  async execute({
    user_id,
    title,
    description,
    price,
    amount,
    photo,
    category,
    physical_condition,
    status,
  }: ICreateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const titleAlreadyExists = await productsRepository.findOne({
      title,
      user_id,
    });

    if (titleAlreadyExists) {
      throw new AppError(`Product "${title}" already exists`, 409, "/products");
    }

    const product = productsRepository.create({
      user_id,
      title,
      description,
      price,
      amount,
      photo,
      category,
      physical_condition,
      status,
    });

    await productsRepository.save(product);

    return product;
  }
}
