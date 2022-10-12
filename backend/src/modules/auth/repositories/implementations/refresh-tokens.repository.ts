import { getRepository, Repository } from "typeorm";
import { ICreateRefreshTokenDTO, IDeleteRefreshTokenDTO } from "../../dtos";
import { RefreshToken } from "../../entities";
import { IExpireInProvider } from "../../providers/ExpireInProvider";
import { IRefreshTokenRepository } from "../IRefresh-tokens.repository";

export class RefreshTokenRepository implements IRefreshTokenRepository {
  private repository: Repository<RefreshToken>;

  constructor(private expireInProvider: IExpireInProvider) {
    this.repository = getRepository(RefreshToken);
  }

  async findByUserIdAndToken({
    old_token,
    user_id,
  }: {
    user_id: string;
    old_token: string;
  }): Promise<RefreshToken | undefined> {
    const refreshToken = await this.repository.findOne({
      user_id,
      refresh_token: old_token,
    });

    return refreshToken;
  }
  async create({ user_id }: ICreateRefreshTokenDTO): Promise<string> {
    const secret = process.env.SECRET;

    const expires_in = this.expireInProvider.generate(7);
    const refresh_token = sign({}, secret, {
      subject: user_id,
    });

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
