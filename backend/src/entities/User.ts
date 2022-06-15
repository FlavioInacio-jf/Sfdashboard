import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

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
    unique: true,
  })
  email: string;

  @Column({
    nullable: true,
  })
  photo?: string;

  @Column({
    nullable: false,
    length: 10,
  })
  role?: "admin" | "user";

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
