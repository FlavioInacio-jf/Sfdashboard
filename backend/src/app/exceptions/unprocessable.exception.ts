import { CustomError } from "../errors";

export class UnprocessableException {
  private error: CustomError;

  constructor(error: CustomError) {
    this.error = error;
  }
}
