import { CustomError } from "../../../app";
import { USER_NOT_FOUND } from "../../../app/exceptions";
import { User } from "../../entities";
import { UsersRepository } from "../../repositories";

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    await this.usersRepository.delete(id);
    return user;
  }
}
