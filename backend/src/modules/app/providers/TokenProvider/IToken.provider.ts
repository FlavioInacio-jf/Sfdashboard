import { JwtPayload } from "jsonwebtoken";

export class ITokenProvider {
  verifyAuthToken: (token: string, secret: string) => JwtPayload | string;
  createRefreshToken: (user_id: string) => string;
  createAuthToken: (user_id: string) => string;
}
