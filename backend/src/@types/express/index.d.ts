import { UserRole } from "../../users/enums";

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Request {
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
}
