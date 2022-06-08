import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateComments1654648449588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "title", type: "varchar", isNullable: false },
          { name: "description", type: "varchar", isNullable: false },
          { name: "user_id", type: "uuid", isNullable: false },
          { name: "product_id", type: "uuid", isNullable: false },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: "FKUserComment",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "null",
            onUpdate: "null",
          },
          {
            name: "FKProductComment",
            referencedTableName: "products",
            referencedColumnNames: ["id"],
            columnNames: ["product_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("comments");
  }
}
