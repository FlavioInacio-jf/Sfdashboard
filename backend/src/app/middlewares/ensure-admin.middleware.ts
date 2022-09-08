import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors";
import { USER_SERVICE_ACCESS_INFO_DENIED } from "../exceptions";

export class EnsureAdmin {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { user } = req;

    if (user.role === "admin") {
      return next();
    }
    throw new CustomError(USER_SERVICE_ACCESS_INFO_DENIED);
  }
}
