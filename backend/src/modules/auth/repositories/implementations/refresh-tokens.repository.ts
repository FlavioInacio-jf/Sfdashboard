import { Repository } from "typeorm";
import { appDataSource } from "../../../../database";
import { IExpireInProvider, ITokenProvider } from "../../../app";
import { ICreateRefreshTokenDTO, IDeleteRefreshTokenDTO } from "../../dtos";
import { RefreshToken } from "../../entities";
import { IRefreshTokenRepository } from "../IRefresh-tokens.repository";

export class RefreshTokenRepository implements IRefreshTokenRepository {
  private repository: Repository<RefreshToken>;

  constructor(
    private expireInProvider: IExpireInProvider,
    private tokenProvider: ITokenProvider,
  ) {
    this.repository = appDataSource.getRepository(RefreshToken);
  }

  async findByUserIdAndToken({
    old_token,
    user_id,
  }: {
    user_id: string;
    old_token: string;
  }): Promise<RefreshToken | undefined> {
    const refreshToken = await this.repository.findOne({
      where: { user_id, refresh_token: old_token },
    });

    return refreshToken;
  }
  async create({ user_id }: ICreateRefreshTokenDTO): Promise<string> {
    const expires_in = this.expireInProvider.generate(7);
    const refresh_token = this.tokenProvider.createRefreshToken(user_id);

    const generateRefreshToken = this.repository.create({
      user_id,
      expires_in,
      refresh_token,
    });

    await this.repository.save(generateRefreshToken);

    return refresh_token;
  }

  async delete({ id }: IDeleteRefreshTokenDTO): Promise<void> {
    await this.repository.delete({ id });
  }
}
