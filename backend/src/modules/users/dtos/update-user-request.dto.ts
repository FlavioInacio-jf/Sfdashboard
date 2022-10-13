import { UserRoleEnum } from "../enums";

export interface IUpdateUserRequestDTO {
  id: string;
  name: string;
  role: keyof typeof UserRoleEnum;
  permissions: string[];
}
