import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/UsersRepository";

interface IAllUsersRequest {
  limit?: number;
}
export class GetAllUsersService {
  async execute({ limit = 7 }: IAllUsersRequest): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find({
      select: ["id", "name", "role", "permissions"],
      take: limit,
    });
    return users;
  }
}
