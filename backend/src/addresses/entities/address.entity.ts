import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "../../users";

@Entity("addresses")
export class Address {
  @PrimaryColumn()
  readonly id: string;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    nullable: false,
  })
  county: string;

  @Column({
    nullable: false,
  })
  cep: string;

  @Column({
    nullable: false,
  })
  federative_unit: string;

  @Column({
    nullable: false,
  })
  district: string;

  @Column({
    nullable: false,
  })
  state: string;

  @Column({
    nullable: false,
  })
  number: number;

  @Column({
    nullable: false,
  })
  user_id: string;

  @CreateDateColumn({
    nullable: false,
  })
  created_at: Date;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne(type => User, Addresses => Address, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
