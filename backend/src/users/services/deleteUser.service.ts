import { getCustomRepository } from "typeorm";
import { User } from "../entities";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../repositories";

export class DeleteUserService {
  async execute(id: string): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new AppError("User doesn't exist!", 404, `/users/${id}`);
    }

    await usersRepository.delete({ id });
    return user;
  }
}
