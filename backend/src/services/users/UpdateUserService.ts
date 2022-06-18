import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IUserUpdateRequest {
  id: string;
  name: string;
  photo: string;
  role: "admin" | "user";
  permissions: string[];
}

export class UpdateUserService {
  async execute({
    id,
    name,
    photo,
    role,
    permissions,
  }: IUserUpdateRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new AppError("User doesn't exist!", 404, `/users/${id}`);
    }

    user.name = name || user.name;
    user.photo = photo || user.photo;
    user.role = role || user.role;
    user.permissions = permissions || user.permissions;

    await usersRepository.save(user);

    return user;
  }
}
