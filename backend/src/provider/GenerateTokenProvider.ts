import { sign } from "jsonwebtoken";
import { tokenExpiration } from "../constants/tokenExpiration";

interface IGenerateToken {
  user_id: string;
  payload?: string | Buffer | object;
}
export class GenerateTokenProvider {
  execute({ user_id, payload = {} }: IGenerateToken): string {
    const secret = process.env.SECRET;

    const token = sign(payload, secret, {
      subject: user_id,
      expiresIn: tokenExpiration.token,
    });

    return token;
  }
}
