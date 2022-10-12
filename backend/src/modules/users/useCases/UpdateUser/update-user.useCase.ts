import { CustomError } from "../../../app";
import { User } from "../../entities";
import { USER_NOT_FOUND } from "../../../app/exceptions";
import { IUpdateUserRequestDTO } from "../../dtos";
import { UsersRepository } from "../../repositories";

export class UpdateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    id,
    name,
    role,
    permissions,
  }: IUpdateUserRequestDTO): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new CustomError(USER_NOT_FOUND);
    }

    user.name = name || user.name;
    user.role = role || user.role;
    user.permissions = permissions || user.permissions;

    await this.usersRepository.update(user);

    return user;
  }
}
