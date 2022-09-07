import { genSalt, hash } from "bcrypt";
import { getCustomRepository } from "typeorm";
import { CustomError } from "../../app/errors";
import { EMAIL_ALREADY_EXIST } from "../../app/exceptions";
import { User } from "../entities";
import { UsersRepository } from "../repositories";
import { IUserRegister } from "../types";

export class CreateUserService {
  async execute({
    name,
    email,
    permissions,
    password,
    role,
  }: IUserRegister): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new CustomError(EMAIL_ALREADY_EXIST(email));
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      permissions,
      role,
    });

    await usersRepository.save(user);

    delete user.password;
    return user;
  }
}
