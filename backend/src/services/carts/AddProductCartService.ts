import { getCustomRepository } from "typeorm";
import { Cart } from "../../entities/Cart";
import { AppError } from "../../errors/AppError";
import { CartsRepository } from "../../repositories/CartsRepository";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IAddProductCartRequest {
  amount: number;
  product_id: string;
  user_id: string;
}

export class AddProductCartService {
  async execute({
    amount,
    product_id,
    user_id,
  }: IAddProductCartRequest): Promise<Cart> {
    const cartsRepository = getCustomRepository(CartsRepository);
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(product_id);
    if (!product) {
      throw new AppError(
        "Product doesn't exist!",
        404,
        `/products/${product_id}`,
      );
    }

    const hasQuantityAvailable = product.amount >= amount;
    if (!hasQuantityAvailable) {
      throw new AppError(
        "The product does not have the quantity informed to make this request!",
        409,
        `/carts/${product_id}`,
      );
    }

    if (product.amount === 0) {
      product.status = "out_of_stock";
    }
    product.amount -= amount;
    await productsRepository.save(product);

    const productExistInCart = await cartsRepository.findOne({
      product_id,
      user_id,
    });

    // If the product already exists in the cart, just update the quantity
    if (productExistInCart) {
      productExistInCart.amount += amount;
      await cartsRepository.save(productExistInCart);
      return productExistInCart;
    }

    // If the product does not exist in the cart, a new registration is created
    const cart = cartsRepository.create({ user_id, product_id, amount });
    await cartsRepository.save(cart);
    return cart;
  }
}
