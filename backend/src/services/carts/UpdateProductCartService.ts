import { getCustomRepository } from "typeorm";
import { Cart } from "../../entities/Cart";
import { AppError } from "../../errors/AppError";
import { CartsRepository } from "../../repositories/CartsRepository";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IUpdateProductCartRequest {
  id: string;
  user_id: string;
  amount: number;
}

export class UpdateProductCartService {
  async execute({
    id,
    user_id,
    amount,
  }: IUpdateProductCartRequest): Promise<Cart> {
    const cartsRepository = getCustomRepository(CartsRepository);
    const productsRepository = getCustomRepository(ProductsRepository);

    const productExistInCart = await cartsRepository.findOne({ id, user_id });

    if (!productExistInCart) {
      throw new AppError("Product doesn't exist in cart!", 404, `/carts/${id}`);
    }

    const product = await productsRepository.findOne({
      id: productExistInCart.product_id,
    });

    product.amount += amount;
    await productsRepository.save(product);

    productExistInCart.amount = amount || productExistInCart.amount;
    await cartsRepository.save(productExistInCart);
    return productExistInCart;
  }
}
