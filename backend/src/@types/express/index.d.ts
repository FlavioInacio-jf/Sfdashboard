declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
      name: string;
      email: string;
      photo?: string;
      role: "admin" | "user";
      permissions: string[];
      created_at: Date;
    };
  }
}
