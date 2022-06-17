import { EntityRepository, Repository } from "typeorm";
import { Cart } from "../entities/Cart";

@EntityRepository(Cart)
export class CartsRepository extends Repository<Cart> {}
