import { IPaginateQueryBaseDTO } from "../../app/dtos";
import { UserRole } from "../enums";

export interface IQueryUserRequestDTO extends IPaginateQueryBaseDTO {
  role?: UserRole;
}
