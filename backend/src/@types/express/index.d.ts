import { UserRoleEnum } from "../../modules/users";

export {};

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Request {
      user: {
        id: string;
        name: string;
        email: string;
        role: keyof typeof UserRoleEnum;
        permissions: string[];
        created_at: Date;
      };
    }
  }
}
