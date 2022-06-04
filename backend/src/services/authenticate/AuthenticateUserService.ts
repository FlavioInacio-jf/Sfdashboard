import { compare } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { GenerateRefreshTokenProvider } from "../../provider/GenerateRefreshTokenProvider";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IAuthenticateUserRequest {
  username: string;
  password: string;
}

interface IAuthenticateResponse {
  id: string;
  name: string;
  username: string;
  photo_url?: string;
  role: string;
  created_at: Date;
  updated_at: Date;
  accessToken: string;
  refreshToken: string;
}

export class AuthenticateUserService {
  async execute({
    username,
    password,
  }: IAuthenticateUserRequest): Promise<IAuthenticateResponse> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ username });

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
