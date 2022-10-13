import { NextFunction, Request, Response } from "express";
import { ITokenProvider } from "../../providers";
import { IUsersRepository } from "../../../users/repositories";
import { CustomError } from "../../errors";
import { EXPIRED_AT, INVALID_AT, USER_NOT_FOUND } from "../../exceptions";

export class EnsureAuthenticated {
  constructor(
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider,
  ) {}
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

      const id = this.tokenProvider.verifyAuthToken(bearerToken[1], secret);

      const user = await this.usersRepository.findById(id as string);

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
