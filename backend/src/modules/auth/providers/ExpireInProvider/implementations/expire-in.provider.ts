import dayjs from "dayjs";
import { IExpireInProvider } from "../IExpire-in.provider";

export class ExpireInProvider implements IExpireInProvider {
  generate(value: number): number {
    const expires_in = dayjs().add(value, "hours").unix();

    return expires_in;
  }
  isAfter(value: number): boolean {
    return dayjs().isAfter(dayjs.unix(value));
  }
}
