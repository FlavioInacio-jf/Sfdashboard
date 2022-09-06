import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";
import { AppError } from "../errors";

export const validateResource =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      await schema.validate(body);
      next();
    } catch (err) {
      throw new AppError(err.errors, 403, `${req.baseUrl}${req.path}`);
    }
  };
