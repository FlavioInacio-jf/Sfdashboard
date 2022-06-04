import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1654024593729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar(200)",
            isNullable: false,
          },
          {
            name: "username",
            type: "varchar(50)",
            isNullable: false,
            isUnique: true,
          },
          { name: "photo_url", type: "varchar", isNullable: true },
          { name: "password", type: "varchar", isNullable: false },
          {
            name: "role",
            type: "varchar(10)",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
