export interface IUserRegister {
  name: string;
  email: string;
  role: "admin" | "user";
  permissions: string[];
  password: string;
}
