import { UserRole } from "../enums";

export interface IUpdateUserRequestDTO {
  id: string;
  name: string;
  role: UserRole;
  permissions: string[];
}
