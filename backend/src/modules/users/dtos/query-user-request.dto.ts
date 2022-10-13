import { IPaginateQueryBaseDTO } from "../../app/dtos";
import { UserRoleEnum } from "../enums";

export interface IQueryUserRequestDTO extends IPaginateQueryBaseDTO {
  role?: keyof typeof UserRoleEnum;
}
