import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRefreshToken1654060959317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "refreshToken",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "expires_in", type: "interger", isNullable: false },
          { name: "refresh_token", type: "varchar", isNullable: false },
          {
            name: "user_id",
            type: "string",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],

        foreignKeys: [
          {
            name: "FKUserRefreshToken",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("refresh_token");
  }
}
