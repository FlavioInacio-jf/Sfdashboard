import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories";
import { CustomError } from "../errors";
import { EXPIRED_AT, INVALID_AT, USER_NOT_FOUND } from "../exceptions";

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

    if (!authHeader) {
      throw new CustomError(INVALID_AT);
    }

    const bearerToken = authHeader.split(" ");

    if (bearerToken.length < 2) {
      throw new CustomError(INVALID_AT);
    }

    try {
      const secret = process.env.SECRET;

      const { sub: id } = verify(bearerToken[1], secret) as IPayload;

      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne({ id });

      if (!user) {
        throw new CustomError(USER_NOT_FOUND);
      }
      delete user.password;
      req.user = {
        ...user,
      };
      next();
    } catch {
      throw new CustomError(EXPIRED_AT);
    }
  }
}
