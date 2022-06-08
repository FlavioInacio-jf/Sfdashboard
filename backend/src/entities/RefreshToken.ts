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

@Entity("refreshToken")
export class RefreshToken {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
  })
  expires_in: number;

  @Column({
    nullable: false,
  })
  refresh_token: string;

  @Column({
    nullable: false,
  })
  user_id: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => User, Refresh => RefreshToken, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
