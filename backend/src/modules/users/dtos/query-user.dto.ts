import { IPaginateQueryBaseDTO } from "../../app/dtos";
import { UserRole } from "../enums";

export interface IQueryUserDTO extends IPaginateQueryBaseDTO {
  role?: UserRole;
}
