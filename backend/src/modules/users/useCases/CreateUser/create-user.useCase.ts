import { genSalt, hash } from "bcrypt";
import { User } from "../../entities";
import { CustomError } from "../../../app/errors";
import { EMAIL_ALREADY_EXIST } from "../../../app/exceptions";
import { ICreateUserRequestDTO } from "../../dtos";
import { UsersRepository } from "../../repositories";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    permissions,
    password,
    role,
  }: ICreateUserRequestDTO): Promise<User> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new CustomError(EMAIL_ALREADY_EXIST(email));
    }

    const salt = await genSalt(12);
    const passwordHash = await hash(password, salt);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      permissions,
      role,
    });
    delete user.password;
    return user;
  }
}
