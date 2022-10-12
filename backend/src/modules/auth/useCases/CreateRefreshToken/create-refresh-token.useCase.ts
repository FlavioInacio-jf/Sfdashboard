import { CustomError } from "../../../app";
import { EXPIRED_RT, INVALID_RT } from "../../../app/exceptions";
import { ICreateRefreshTokenRequestDTO } from "../../dtos";
import { IExpireInProvider } from "../../providers/ExpireInProvider";
import { IRefreshTokenRepository } from "../../repositories";

export class CreateRefreshTokenUseCase {
  constructor(
    private refreshTokenRepository: IRefreshTokenRepository,
    private expireInProvider: IExpireInProvider,
  ) {}

  async execute({ user_id, old_refresh_token }: ICreateRefreshTokenRequestDTO) {
    const refreshTokenExists =
      await this.refreshTokenRepository.findByUserIdAndToken({
        user_id,
        old_token: old_refresh_token,
      });

    if (!refreshTokenExists) {
      throw new CustomError(INVALID_RT);
    }

    const refreshTokenExpired = this.expireInProvider.isAfter(
      refreshTokenExists.expires_in,
    );
    if (refreshTokenExpired) {
      throw new CustomError(EXPIRED_RT);
    }

    // New refresh token and token
    const newRefreshToken = await generateRefreshToken.execute(user_id);
    const newAccessToken = generateToken.execute({ user_id });

    // Delete old refresh token
    await this.refreshTokenRepository.delete({ id: refreshTokenExists.id });

    return {
      refreshToken: newRefreshToken,
      accessToken: newAccessToken,
    };
  }
}
