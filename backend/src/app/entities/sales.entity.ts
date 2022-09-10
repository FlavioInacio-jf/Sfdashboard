/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuidV4 } from "uuid";
import { Client, Product, User } from ".";

@Entity("sales")
export class Sale {
  @PrimaryColumn({ nullable: false })
  readonly id: string;

  @PrimaryColumn({ nullable: false })
  amount: number;

  @PrimaryColumn({ nullable: false })
  product_id: string;

  @PrimaryColumn({ nullable: false })
  client_id: string;

  @PrimaryColumn({ nullable: false })
  user_id: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at?: Date;

  @ManyToOne(type => Product, Sale => Sale, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "product_id" })
  product: Client;

  @ManyToOne(type => Client, Sale => Sale, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "client_id" })
  client: Client;

  @ManyToOne(type => User, Sale => Sale, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
