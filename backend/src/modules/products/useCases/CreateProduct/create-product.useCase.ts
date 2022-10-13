import { CustomError } from "../../../app";
import { BAR_CODE_ALREADY_EXIST } from "../../../app/exceptions";
import { ICreateProductRequestDTO } from "../../dtos";
import { Product } from "../../entities";
import { IProductsRepository } from "../../repositories";

export class CreateProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}
  async execute({
    title,
    price,
    amount,
    status,
    bar_code,
  }: ICreateProductRequestDTO): Promise<Product> {
    const barcodeAlreadyExists = await this.productsRepository.findByBarcode(
      bar_code,
    );

    if (barcodeAlreadyExists) {
      throw new CustomError(
        BAR_CODE_ALREADY_EXIST(barcodeAlreadyExists.bar_code),
      );
    }

    const product = await this.productsRepository.create({
      title,
      price,
      amount,
      bar_code,
      ...(amount === 0 ? { status: "Out of stock" } : { status }),
    });

    return product;
  }
}
