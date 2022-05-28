export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductRegisterType = Omit<ProductType, 'id' | 'createdAt' | 'updatedAt'>;
