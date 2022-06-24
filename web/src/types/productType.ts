export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  amount: number;
  photo: string;
  category: string;
  status: 'published' | 'draft' | 'out_of_stock';
  physical_condition: 'new' | 'old';
  created_at: Date;
}

export type ProductRegisterType = Omit<ProductType, 'id' | 'createdAt' | 'updatedAt'>;

export type ProductUpdateType = ProductType;
