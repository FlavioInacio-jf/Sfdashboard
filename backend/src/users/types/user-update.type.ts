export interface IUserUpdate {
  id: string;
  name: string;
  role: "admin" | "user";
  permissions: string[];
}
