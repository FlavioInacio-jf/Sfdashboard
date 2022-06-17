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

@Entity("carts")
export class Cart {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
  })
  amount: number;

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
  @ManyToOne(type => User, Carts => Cart, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => Product, Carts => Cart, { onDelete: "CASCADE" })
  @JoinColumn({ name: "product_id" })
  product: Product;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
