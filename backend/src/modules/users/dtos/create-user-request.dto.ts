import { UserRoleEnum } from "../enums";

export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  role: keyof typeof UserRoleEnum;
  permissions: string[];
  password: string;
}
