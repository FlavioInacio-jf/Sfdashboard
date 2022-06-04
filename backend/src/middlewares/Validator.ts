import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import { AppError } from "../errors/AppError";

interface IProductValidator {
  params?: Schema;
  query?: Schema;
  body?: Schema;
}

class Validator {
  static schema: IProductValidator;

  static validate(schema: IProductValidator) {
    return this.makeValidation.bind(schema);
  }

  static makeValidation(req: Request, res: Response, next: NextFunction) {
    const errors = [];
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const schema = this;

    Object.keys(schema).map(k => {
      const { error } = schema[k].validate(req[k]);

      if (error) {
        errors.push(error);
      }

      return k;
    });
    if (errors.length === 0) {
      return next();
    }

    throw new AppError(
      "There are fields with validation error.",
      422,
      `${req.baseUrl}${req.path}`,
    );
  }
}

export { Validator };
