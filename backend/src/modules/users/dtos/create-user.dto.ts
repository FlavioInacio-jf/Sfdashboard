import { UserRole } from "../enums";

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  role: UserRole;
  permissions: string[];
  password: string;
}
