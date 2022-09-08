import { sign } from "jsonwebtoken";
import { TokenExpiration } from "../enums";

interface IGenerateToken {
  user_id: string;
  payload?: string | Buffer | object;
}
export class GenerateTokenProvider {
  execute({ user_id, payload = {} }: IGenerateToken): string {
    const secret = process.env.SECRET;

    const token = sign(payload, secret, {
      subject: user_id,
      expiresIn: TokenExpiration.TOKEN,
    });

    return token;
  }
}
