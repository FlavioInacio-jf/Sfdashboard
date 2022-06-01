export interface ProductType {
  id: number;
  name: string;
  price: number;
  photo_url: string;
  description: string;
  category_id?: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductRegisterType = Omit<ProductType, 'id' | 'createdAt' | 'updatedAt'>;

export type ProductUpdateType = ProductType;
