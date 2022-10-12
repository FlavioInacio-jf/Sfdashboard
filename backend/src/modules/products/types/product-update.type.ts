export interface IProductUpdate {
  id: string;
  title: string;
  price: number;
  amount: number;
  status: "In stock" | "Not sell" | "Out of stock";
}
