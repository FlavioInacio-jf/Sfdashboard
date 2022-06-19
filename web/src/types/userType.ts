export interface UserType {
  name: string;
  email: string;
  photo?: string;
  role: 'admin' | 'user';
  created_at: Date;
}

export interface UserRegisterType extends Omit<UserType, 'created_at' | 'updated_at'> {
  password: string;
}
