import { CustomErrorType } from "../types";

export class CustomError {
  public title: string;
  public detail?: string | string[];
  public code?: number;

  constructor(error: CustomErrorType) {
    Object.assign(this, error);
    if (!this.detail) {
      this.detail = this.title;
    }
    if (!this.code) {
      this.code = 500;
    }
  }
}
