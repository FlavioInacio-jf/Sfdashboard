import { compare } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { CustomError, GenerateTokenProvider } from "../../app";
import { LOGIN_FAILED } from "../../app/exceptions";
import { UsersRepository } from "../../app/repositories";
import { GenerateRefreshTokenProvider } from "../providers";
import { IAuthenticateResponse } from "../types";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({
    email,
    password,
  }: IAuthenticateUserRequest): Promise<IAuthenticateResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new CustomError(LOGIN_FAILED);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new CustomError(LOGIN_FAILED);
    }

    const generateRefreshToken = new GenerateRefreshTokenProvider();
    const generateToken = new GenerateTokenProvider();

    const accessToken = generateToken.execute({ user_id: user.id });
    const refreshToken = await generateRefreshToken.execute(user.id);
    delete user.password;
    return {
      ...user,
      accessToken,
      refreshToken,
    };
  }
}
