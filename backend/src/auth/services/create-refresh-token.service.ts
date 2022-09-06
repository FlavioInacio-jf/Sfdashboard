import dayjs from "dayjs";
import { getCustomRepository } from "typeorm";
import { AppError, GenerateTokenProvider } from "../../app";
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
      throw new AppError("Refresh token invalid!", 401, "/refresh-token");
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshTokenExists.expires_in),
    );
    if (refreshTokenExpired) {
      throw new AppError("Refresh token expired!", 401, "/refresh-token");
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
