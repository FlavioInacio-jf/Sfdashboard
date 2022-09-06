import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors";
import { UsersRepository } from "../../users";

interface IPayload {
  sub: string;
}

export class EnsureAuthenticated {
  async execute(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const authHeader = req.headers.authorization;
    const { baseUrl, path } = req;

    if (!authHeader) {
      throw new AppError("token invalid", 401, `${baseUrl}`);
    }

    const token = authHeader.split(" ");

    if (token.length < 2) {
      throw new AppError("token invalid", 401, `${baseUrl}`);
    }

    try {
      const secret = process.env.SECRET;

      const { sub: id } = verify(token[1], secret) as IPayload;

      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne({ id });

      if (!user) {
        throw new AppError("Unauthorized", 401, `${baseUrl}${path}`);
      }
      delete user.password;
      req.user = {
        ...user,
      };
      next();
    } catch {
      throw new AppError("token expired", 401, `${baseUrl}`);
    }
  }
}
