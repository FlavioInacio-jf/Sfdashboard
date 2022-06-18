import { genSalt, hash } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { AppError } from "../../errors/AppError";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  photo?: string;
  role: "admin" | "user";
  permissions: string[];
  password: string;
}

export class CreateUserService {
  async execute({
    name,
    email,
    photo,
    permissions,
    password,
    role,
  }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new AppError(`Email "${email}" already exists`, 409, "/users");
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      permissions,
      photo,
      role,
    });

    await usersRepository.save(user);

    delete user.password;
    return user;
  }
}
