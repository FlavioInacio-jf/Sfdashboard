/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities";

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {}
