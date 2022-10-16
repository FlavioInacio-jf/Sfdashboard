import { CustomError, IHashProvider, ITokenProvider } from "../../../app";
import { LOGIN_FAILED } from "../../../app/exceptions";
import { IUsersRepository } from "../../../users/repositories";
import { IAuthenticateUserRequestDTO } from "../../dtos";
import { IRefreshTokenRepository } from "../../repositories";

export class AuthenticateUserUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider,
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

    const accessToken = this.tokenProvider.createAuthToken(user.id);

    const refreshToken = await this.refreshTokenRepository.create({
      user_id: user.id,
    });
    delete user.password;
    return {
      ...user,
      accessToken,
      refreshToken,
    };
  }
}
