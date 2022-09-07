import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app";
import { USER_NOT_FOUND } from "../../app/exceptions";
import { User } from "../entities";
import { UsersRepository } from "../repositories";

export class DeleteUserService {
  async execute(id: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    await usersRepository.delete({ id });
    return user;
  }
}
