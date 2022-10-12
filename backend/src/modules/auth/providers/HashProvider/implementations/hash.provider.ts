import { compare, genSalt, hash } from "bcrypt";
import { IHashProvider } from "../IHash.provider";

export class HashProvider implements IHashProvider {
  async generate(payload: string): Promise<string> {
    const salt = await genSalt(12);

    return hash(payload, salt);
  }
  async compare(payload: string, hashed: string): Promise<boolean> {
    const isMatch = await compare(payload, hashed);
    return isMatch;
  }
}
