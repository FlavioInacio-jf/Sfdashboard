import { CustomError } from "../../../app";
import { INVALID_RT } from "../../../app/exceptions";
import { ILogoutUserRequestDTO } from "../../dtos";
import { IRefreshTokenRepository } from "../../repositories";

export default class LogoutUserUseCase {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}
  async execute({
    user_id,
    old_refresh_token,
  }: ILogoutUserRequestDTO): Promise<void> {
    const refreshTokenExists =
      await this.refreshTokenRepository.findByUserIdAndToken({
        user_id,
        old_token: old_refresh_token,
      });

    if (!refreshTokenExists) {
      throw new CustomError(INVALID_RT);
    }

    await this.refreshTokenRepository.delete({ id: refreshTokenExists.id });
  }
}
