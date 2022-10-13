import { ICustomErrorDTO } from "../dtos";

export class CustomError {
  public title: string;
  public detail?: string | string[];
  public code?: number;

  constructor(error: ICustomErrorDTO) {
    Object.assign(this, error);
    if (!this.detail) {
      this.detail = this.title;
    }
    if (!this.code) {
      this.code = 500;
    }
  }
}
