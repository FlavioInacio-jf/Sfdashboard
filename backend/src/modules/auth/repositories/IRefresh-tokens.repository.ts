import { ICreateRefreshTokenDTO, IDeleteRefreshTokenDTO } from "../dtos";
import { RefreshToken } from "../entities";

export interface IRefreshTokenRepository {
  create: (data: ICreateRefreshTokenDTO) => Promise<string>;
  findByUserIdAndToken: (data: {
    user_id: string;
    old_token: string;
  }) => Promise<RefreshToken | undefined>;
  delete: (data: IDeleteRefreshTokenDTO) => Promise<void>;
}
