import { sign } from "jsonwebtoken";
import { TokenExpiration } from "../enums";

type GenerateTokenParams = {
  user_id: string;
  payload?: string | Buffer | object;
};
export const generateToken = ({
  user_id,
  payload = {},
}: GenerateTokenParams): string => {
  const secret = process.env.SECRET;

  const token = sign(payload, secret, {
    subject: user_id,
    expiresIn: TokenExpiration.TOKEN,
  });

  return token;
};
