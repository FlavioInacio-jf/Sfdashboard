import { getCustomRepository } from "typeorm";
import { Cart } from "../../entities/Cart";
import { CartsRepository } from "../../repositories/CartsRepository";

interface IAllProductsCartRequest {
  user_id: string;
  limit?: number;
}

export class GetAllProductsCartService {
  async execute({
    user_id,
    limit = 8,
  }: IAllProductsCartRequest): Promise<Cart[]> {
    const cartsRepository = getCustomRepository(CartsRepository);

    const productsInCart = await cartsRepository.find({
      where: { user_id },
      take: limit,
    });

    return productsInCart;
  }
}
