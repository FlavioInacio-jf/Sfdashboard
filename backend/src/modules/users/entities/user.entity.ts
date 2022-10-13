/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { UserRoleEnum } from "../enums";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
    length: 200,
  })
  name: string;

  @Column({
    nullable: false,
    length: 200,
  })
  email: string;

  @Column({
    nullable: false,
    length: 10,
    enum: UserRoleEnum,
  })
  role: keyof typeof UserRoleEnum;

  @Column("simple-array", {
    nullable: false,
    array: true,
  })
  permissions: string[];

  @Column({
    nullable: false,
    default: 0,
  })
  total_sales?: number;

  @Column({
    nullable: false,
    default: 0,
  })
  quantity_sales?: number;

  @Column({
    nullable: false,
  })
  password: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
