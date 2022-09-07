import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { INVALID_RT } from "../../app/exceptions";
import { RefreshTokenRepository } from "../repositories";

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
      throw new CustomError(INVALID_RT);
    }

    await refreshTokenRepository.delete({ id: refreshTokenExists.id });
  }
}
