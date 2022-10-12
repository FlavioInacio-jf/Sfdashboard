import {
  ICreateProductRequestDTO,
  IDeleteProductRequestDTO,
  IQueryProductResquestDTO
} from "../dtos";
import { Product } from "../entities";

export interface IProductsRepository {
  create: (data: ICreateProductRequestDTO) => Promise<Product>;
  update: (data: Product) => Promise<void>;
  findByBarcode: (barcode: string) => Promise<Product | undefined>;
  findById: (id: string) => Promise<Product | undefined>;
  delete: (data: IDeleteProductRequestDTO) => Promise<void>;
  findAll: (query: IQueryProductResquestDTO) => Promise<Product[]>;
}
