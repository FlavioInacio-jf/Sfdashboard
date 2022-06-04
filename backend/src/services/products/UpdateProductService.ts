import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { AppError } from "../../errors/AppError";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IUpdateProductRequest {
  user_id: string;
  id: string;
  name: string;
  price: number;
  description: string;
  amount: number;
  photo_url: string;
  category: string;
}

export class UpdateProductService {
  async execute({
    user_id,
    id,
    name,
    price,
    description,
    amount,
    photo_url,
    category,
  }: IUpdateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id, user_id });

    if (!product) {
      throw new AppError("Product doesn't exist!", 404, `/products/${id}`);
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.amount = amount || product.amount;
    product.photo_url = photo_url || product.photo_url;
    product.category = category || product.category;

    await productsRepository.save(product);

    return product;
  }
}
