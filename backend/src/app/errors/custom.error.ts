import { CustomErrorType } from "../types";

export class CustomError {
  private title: string;
  private detail?: string | string[];

  constructor(error: CustomErrorType) {
    Object.assign(this, error);
    if (!this.detail) {
      this.detail = this.title;
    }
  }
}
