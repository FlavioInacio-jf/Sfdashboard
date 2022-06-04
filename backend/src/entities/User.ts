import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
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
    length: 50,
  })
  username: string;

  @Column({
    nullable: true,
  })
  photo_url?: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
    length: 10,
    default: "user",
  })
  role: "admin" | "user";

  @CreateDateColumn({
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
