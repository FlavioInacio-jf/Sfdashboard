import { compare } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { AppError, GenerateTokenProvider } from "../../app";
import { UsersRepository } from "../../users";
import { GenerateRefreshTokenProvider } from "../providers";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

interface IAuthenticateResponse {
  id: string;
  name: string;
  email: string;
  photo?: string;
  role?: "admin" | "user";
  permissions: string[];
  created_at: Date;
  accessToken: string;
  refreshToken: string;
}

export class AuthenticateUserService {
  async execute({
    email,
    password,
  }: IAuthenticateUserRequest): Promise<IAuthenticateResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new AppError(`Email and/or password incorrect.`, 401, "/auth");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError(`Email and/or password incorrect.`, 401, "/auth");
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
