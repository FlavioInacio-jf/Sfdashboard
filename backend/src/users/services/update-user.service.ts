import { getCustomRepository } from "typeorm";
import { User } from "../entities";
import { AppError } from "../../app";
import { UsersRepository } from "../repositories";

interface IUserUpdateRequest {
  id: string;
  name: string;
  role: "admin" | "user";
  permissions: string[];
}

export class UpdateUserService {
  async execute({
    id,
    name,
    role,
    permissions,
  }: IUserUpdateRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new AppError("User doesn't exist!", 404, `/users/${id}`);
    }

    user.name = name || user.name;
    user.role = role || user.role;
    user.permissions = permissions || user.permissions;

    await usersRepository.save(user);

    return user;
  }
}
