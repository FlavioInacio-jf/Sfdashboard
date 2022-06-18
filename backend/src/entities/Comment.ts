import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Product } from "./Product";
import { User } from "./User";

@Entity("comments")
export class Comment {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  description: string;

  @Column({
    nullable: false,
  })
  user_id: string;

  @Column({
    nullable: false,
  })
  product_id: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at: Date;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(user => User, comments => Comment, { onDelete: "SET NULL" })
  @JoinColumn({ name: "user_id" })
  user: User;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(product => Product, comments => Comment, { onDelete: "CASCADE" })
  @JoinColumn({ name: "product_id" })
  product: Product;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
