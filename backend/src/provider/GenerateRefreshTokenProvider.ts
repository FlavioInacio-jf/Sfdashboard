import dayjs from "dayjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { RefreshTokenRepository } from "../repositories/RefreshTokenRepository";

export class GenerateRefreshTokenProvider {
  async execute(user_id: string): Promise<string> {
    const refreshTokenRepository = getCustomRepository(RefreshTokenRepository);

    const secret = process.env.SECRET;

    const expires_in = dayjs().add(7, "hours").unix();
    const refresh_token = sign({}, secret, {
      subject: user_id,
    });

    const generateRefreshToken = refreshTokenRepository.create({
      user_id,
      expires_in,
      refresh_token,
    });

    await refreshTokenRepository.save(generateRefreshToken);

    return refresh_token;
  }
}
