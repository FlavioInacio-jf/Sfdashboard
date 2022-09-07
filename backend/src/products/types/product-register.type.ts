export interface IProductRegister {
  bar_code: string;
  title: string;
  price: number;
  amount: number;
  status: "In stock" | "Not sell" | "Out of stock";
}