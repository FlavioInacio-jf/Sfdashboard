/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
