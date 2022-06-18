import { getCustomRepository } from "typeorm";
import { Cart } from "../../entities/Cart";
import { AppError } from "../../errors/AppError";
import { CartsRepository } from "../../repositories/CartsRepository";
import { ProductsRepository } from "../../repositories/ProductsRepository";

interface IRemoveProductCartRequest {
  id: string;
  user_id: string;
}

export class RemoveProductCartService {
  async execute({ id, user_id }: IRemoveProductCartRequest): Promise<Cart> {
    const cartsRepository = getCustomRepository(CartsRepository);
    const productsRepository = getCustomRepository(ProductsRepository);

    const productExistInCart = await cartsRepository.findOne({
      id,
      user_id,
    });

    if (!productExistInCart) {
      throw new AppError("Product doesn't exist in cart!", 404, `/carts/${id}`);
    }

    // Update the product according to the quantity of the product in the cart.
    const product = await productsRepository.findOne(
      productExistInCart.product_id,
    );

    if (product.status === "out_of_stock") {
      product.status = "published";
    }

    product.amount += productExistInCart.amount;
    await productsRepository.save(product);

    await cartsRepository.delete({ id });
    return productExistInCart;
  }
}
