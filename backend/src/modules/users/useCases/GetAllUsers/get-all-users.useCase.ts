import { IQueryUserDTO } from "../../dtos/query-user.dto";
import { User } from "../../entities";
import { UsersRepository } from "../../repositories";

export class GetAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    limit = 12,
    page = 1,
    ...query
  }: IQueryUserDTO): Promise<User[]> {
    const users = await this.usersRepository.findAll({ limit, page, ...query });
    return users;
  }
}
