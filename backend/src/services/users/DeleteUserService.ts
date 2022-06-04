import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

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
