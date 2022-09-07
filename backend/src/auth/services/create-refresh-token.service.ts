import dayjs from "dayjs";
import { getCustomRepository } from "typeorm";
import { CustomError, GenerateTokenProvider } from "../../app";
import { EXPIRED_RT, INVALID_RT } from "../../app/exceptions";
import { GenerateRefreshTokenProvider } from "../providers";
import { RefreshTokenRepository } from "../repositories";

interface IRefreshTokenRequest {
  user_id: string;
  old_refresh_token: string;
}
export class CreateRefreshTokenService {
  async execute({ user_id, old_refresh_token }: IRefreshTokenRequest) {
    const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);

    const refreshTokenExists = await refreshTokenRepository.findOne({
      user_id,
      refresh_token: old_refresh_token,
    });

    if (!refreshTokenExists) {
      throw new CustomError(INVALID_RT);
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshTokenExists.expires_in),
    );
    if (refreshTokenExpired) {
      throw new CustomError(EXPIRED_RT);
    }

    const generateRefreshToken = new GenerateRefreshTokenProvider();
    const generateToken = new GenerateTokenProvider();

    // New refresh token and token
    const newRefreshToken = await generateRefreshToken.execute(user_id);
    const newAccessToken = generateToken.execute({ user_id });

    // Delete old refresh token
    await refreshTokenRepository.delete({ id: refreshTokenExists.id });

    return {
      refreshToken: newRefreshToken,
      accessToken: newAccessToken,
    };
  }
}
