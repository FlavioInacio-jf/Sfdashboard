import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export class EnsureAdmin {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { user, baseUrl } = req;

    if (user.role === "admin") {
      return next();
    }
    throw new AppError(
      "User does not have access to this feature.",
      403,
      baseUrl,
    );
  }
}
