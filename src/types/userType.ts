export interface UserType {
  name: string;
  username: string;
  photo_url: string;
  role: 'admin' | 'user';
  created_at: Date;
  updated_at: Date;
}

export interface UserRegisterType extends Omit<UserType, 'created_at' | 'updated_at'> {
  password: string;
}
