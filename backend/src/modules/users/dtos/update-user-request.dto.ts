import { UserRole } from "../enums";

export interface IUpdateUserRequestDTO {
  id: string;
  name: string;
  role: keyof typeof UserRole;
  permissions: string[];
}
