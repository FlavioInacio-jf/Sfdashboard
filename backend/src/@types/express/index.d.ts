declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: string;
      name: string;
      username: string;
      photo_url?: string;
      role: "admin" | "user";
      created_at: Date;
      updated_at: Date;
    };
  }
}
