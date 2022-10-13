/* eslint-disable @typescript-eslint/no-unused-vars */
import { Repository } from "typeorm";
import { appDataSource } from "../../../../database";
import {
  ICreateUserRequestDTO,
  IDeleteUserRequestDTO,
  IQueryUserRequestDTO,
} from "../../dtos";
import { User } from "../../entities";
import { IUsersRepository } from "../IUsers.repository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async create(data: ICreateUserRequestDTO): Promise<User> {
    const user = this.repository.create(data);
    await this.repository.save(user);

    return user;
  }

  async update(data: User): Promise<void> {
    await this.repository.save(data);
  }

  async delete({ id }: IDeleteUserRequestDTO): Promise<void> {
    await this.repository.delete(id);
  }
  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id } });

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { email } });

    return user;
  }
  async findAll({
    limit,
    page,
    ...filters
  }: IQueryUserRequestDTO): Promise<User[] | undefined> {
    const users = await this.repository.find({
      select: ["id", "name", "role", "permissions"],
      take: limit,
      skip: page,
      where: { ...filters },
    });

    return users;
  }
}
