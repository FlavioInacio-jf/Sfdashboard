import { CustomError } from "../../../app";
import { LOGIN_FAILED } from "../../../app/exceptions";
import { generateToken } from "../../../app/utils";
import { IUsersRepository } from "../../../users/repositories";
import { IAuthenticateUserRequestDTO } from "../../dtos";
import { IHashProvider } from "../../providers";

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}
  async execute({ email, password }: IAuthenticateUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new CustomError(LOGIN_FAILED);
    }

    const passwordMatch = await this.hashProvider.compare(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new CustomError(LOGIN_FAILED);
    }

    const generateRefreshToken = new GenerateRefreshTokenProvider();

    const accessToken = generateToken({ user_id: user.id });
    const refreshToken = await generateRefreshToken.execute(user.id);
    delete user.password;
    return {
      ...user,
      accessToken,
      refreshToken,
    };
  }
}
