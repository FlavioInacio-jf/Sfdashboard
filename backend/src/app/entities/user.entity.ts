/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { UserRole } from "../../users/enums";

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
    enum: UserRole,
  })
  role: string;

  @Column("simple-array", {
    nullable: false,
    array: true,
  })
  permissions: string[];

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
