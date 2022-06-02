export interface ProductType {
  id: number;
  name: string;
  price: number;
  photo_url: string;
  description: string;
  category: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
}

export type ProductRegisterType = Omit<ProductType, 'id' | 'createdAt' | 'updatedAt'>;

export type ProductUpdateType = ProductType;
