import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema } from "yup";
import { CustomError } from "../errors";

export const validateResource =
  (schema: AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      await schema.validate(body);
      next();
    } catch (error) {
      throw new CustomError({
        title: "Existe campos com erro de validação",
        detail: Object.values(error.errors) as string[],
        code: 400,
      });
    }
  };
