import { IPaginateQueryBaseDTO } from "../../app/dtos";

export interface IQueryProductResquestDTO extends IPaginateQueryBaseDTO {
  bar_code: string;
}
