export class AppError {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly path: string;

  constructor(message: string, statusCode = 500, path: string) {
    this.message = message;
    this.path = path;
    this.statusCode = statusCode;
  }
}
