/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { ProductStatus } from "../../products/enums";

@Entity("products")
export class Product {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
  })
  bar_code: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  price: number;

  @Column({
    nullable: false,
  })
  amount: number;

  @Column({ nullable: false, enum: ProductStatus })
  status: "In stock" | "Not sell" | "Out of stock";

  @CreateDateColumn({
    nullable: false,
  })
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
