import { UserRole } from "../enums";

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  role: keyof typeof UserRole;
  permissions: string[];
  password: string;
}
