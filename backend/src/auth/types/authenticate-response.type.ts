export interface IAuthenticateResponse {
  id: string;
  name: string;
  email: string;
  role?: "admin" | "user";
  permissions: string[];
  created_at: Date;
  accessToken: string;
  refreshToken: string;
}
