import { JwtPayload, sign, verify } from "jsonwebtoken";
import { TokenExpiration } from "../../../enums";
import { ITokenProvider } from "../IToken.provider";

const secret = process.env.SECRET;

export class TokenProvider implements ITokenProvider {
  createAuthToken(user_id: string): string {
    const token = sign({}, secret, {
      subject: user_id,
      expiresIn: TokenExpiration.TOKEN,
    });

    return token;
  }
  verifyAuthToken(token: string): string | JwtPayload {
    return verify(token, secret).sub;
  }

  createRefreshToken(user_id: string): string {
    return sign({}, secret, {
      subject: user_id,
    });
  }
}
