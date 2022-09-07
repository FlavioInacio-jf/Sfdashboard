import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { USER_NOT_FOUND } from "../../app/exceptions";
import { User } from "../../app/entities";
import { UsersRepository } from "../../app/repositories";
import { IUserUpdate } from "../types";

export class UpdateUserService {
  async execute({ id, name, role, permissions }: IUserUpdate): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    user.name = name || user.name;
    user.role = role || user.role;
    user.permissions = permissions || user.permissions;

    await usersRepository.save(user);

    return user;
  }
}
