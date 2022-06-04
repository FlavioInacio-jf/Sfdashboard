import { genSalt, hash } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  username: string;
  photo_url: string;
  password: string;
  role: "admin" | "user";
}

export class CreateUserService {
  async execute({
    name,
    username,
    photo_url,
    password,
    role,
  }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ username });

    if (userAlreadyExists) {
      throw new AppError(
        `Username "${username}" already exists`,
        409,
        "/users",
      );
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);

    const user = usersRepository.create({
      name,
      username,
      password: passwordHash,
      photo_url,
      role,
    });

    await usersRepository.save(user);

    user.password = password;
    return user;
  }
}
