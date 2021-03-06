import { Repository, EntityRepository } from "typeorm";
import { Comment } from "../entities/Comment";

@EntityRepository(Comment)
export class CommentsRepository extends Repository<Comment> {}
