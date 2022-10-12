import { ICreateUserRequestDTO } from "../dtos";
import { IQueryUserDTO } from "../dtos/query-user.dto";
import { User } from "../entities";

export interface IUsersRepository {
  create: (data: ICreateUserRequestDTO) => Promise<User>;
  update: (data: User) => Promise<void>;
  findById: (id: string) => Promise<User | undefined>;
  findByEmail: (email: string) => Promise<User | undefined>;
  findAll: (query: IQueryUserDTO) => Promise<User[] | undefined>;
  delete: (id: string) => Promise<void>;
}
