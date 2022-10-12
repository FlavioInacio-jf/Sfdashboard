import { ICreateUserRequestDTO, IDeleteUserRequestDTO } from "../dtos";
import { IQueryUserRequestDTO } from "../dtos/query-user-request.dto";
import { User } from "../entities";

export interface IUsersRepository {
  create: (data: ICreateUserRequestDTO) => Promise<User>;
  update: (data: User) => Promise<void>;
  findById: (id: string) => Promise<User | undefined>;
  findByEmail: (email: string) => Promise<User | undefined>;
  findAll: (query: IQueryUserRequestDTO) => Promise<User[]>;
  delete: (id: IDeleteUserRequestDTO) => Promise<void>;
}
