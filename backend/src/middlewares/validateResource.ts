import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export const validateResource =
  schema => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      await schema.validate(body);
      next();
    } catch (err) {
      throw new AppError(err.errors, 403, `${req.baseUrl}${req.path}`);
    }
  };
