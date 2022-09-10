/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("clients")
export class Client {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  cpf: string;

  @Column({
    nullable: true,
  })
  email: string;

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
