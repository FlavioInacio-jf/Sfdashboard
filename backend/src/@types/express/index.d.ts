import { UserRole } from "../../users/enums";

declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
      name: string;
      email: string;
      role: UserRole;
      permissions: string[];
      created_at: Date;
    };
  }
}
