import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}
const secret = process.env.SECRET;

export const takeIdFromAuthHeaders = (authHeader: string) => {
  const [, token] = authHeader.split(" ");
  const { sub: id } = verify(token, secret) as IPayload;

  return id;
};
