import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "./User";

@Entity("products")
class Product {
  @PrimaryColumn()
  readonly id?: string;

  @Column({
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    length: 600,
    nullable: false,
  })
  description: string;

  @Column({
    nullable: false,
  })
  price: number;

  @Column({
    nullable: false,
  })
  amount: number;

  @Column({
    nullable: false,
  })
  photo_url: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at?: Date;

  @UpdateDateColumn({
    nullable: false,
  })
  updated_at?: Date;

  @Column({
    nullable: true,
  })
  category: string;

  @Column({
    nullable: false,
  })
  user_id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => User, Products => Product, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Product };
