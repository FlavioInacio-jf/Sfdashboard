import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IUpdateProductRequest {
  user_id: string;
  id: string;
  description: string;
  price: number;
  amount: number;
  photo: string;
  category: string;
  physical_condition: "new" | "old";
  status: string;
}

export class UpdateProductService {
  async execute({
    user_id,
    id,
    price,
    description,
    amount,
    photo,
    category,
    physical_condition,
    status,
  }: IUpdateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productExists = await productsRepository.findOne({ id, user_id });

    if (!productExists) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    productExists.price = price || productExists.price;
    productExists.description = description || productExists.description;
    productExists.amount = amount || productExists.amount;
    productExists.photo = photo || productExists.photo;
    productExists.category = category || productExists.category;
    productExists.physical_condition =
      physical_condition || productExists.physical_condition;
    productExists.status = status || productExists.status;

    await productsRepository.save(productExists);

    return productExists;
  }
}
