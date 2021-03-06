import { getCustomRepository } from "typeorm";
import { AppError } from "../../errors/AppError";
import { RefreshTokenRepository } from "../../repositories/RefreshTokenRepository";

interface ILogoutUserServiceRequest {
  user_id: string;
  old_refresh_token: string;
}

export default class LogoutUserService {
  async execute({
    user_id,
    old_refresh_token,
  }: ILogoutUserServiceRequest): Promise<void> {
    const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);

    const refreshTokenExists = await refreshTokenRepository.findOne({
      user_id,
      refresh_token: old_refresh_token,
    });

    if (!refreshTokenExists) {
      throw new AppError("Refresh token invalid", 401, "/auth/logout");
    }

    await refreshTokenRepository.delete({ id: refreshTokenExists.id });
  }
}
