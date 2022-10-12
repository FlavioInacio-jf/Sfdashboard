import { IPaginateQueryBaseDTO } from "../../app/dtos";

export interface IQueryProductResquestDTO extends IPaginateQueryBaseDTO {
  barcode: string;
}
