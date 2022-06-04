import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IUserUpdateRequest {
  id: string;
  name: string;
  photo_url: string;
}

export class UpdateUserService {
  async execute({ id, name, photo_url }: IUserUpdateRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new AppError("User doesn't exist!", 404, `/users/${id}`);
    }

    user.name = name || user.name;
    user.photo_url = photo_url || user.photo_url;

    await usersRepository.save(user);

    return user;
  }
}
