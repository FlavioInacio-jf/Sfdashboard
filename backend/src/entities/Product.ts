import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "./User";

@Entity("products")
class Product {
  @PrimaryColumn()
  readonly id?: string;

  @Column({
    nullable: false,
    unique: true,
  })
  title: string;

  @Column()
  description?: string;

  @Column({
    nullable: false,
  })
  price: number;

  @Column({
    nullable: false,
  })
  amount: number;

  @Column({ nullable: false })
  photo: string;

  @Column()
  category?: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  physical_condition: "new" | "old";

  @Column({
    nullable: false,
  })
  user_id: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at?: Date;

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
