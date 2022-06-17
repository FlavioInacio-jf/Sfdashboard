import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCart1655424981186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "carts",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "amount", type: "integer", default: "0", isNullable: false },
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
            name: "FKProductCart",
            referencedTableName: "products",
            referencedColumnNames: ["id"],
            columnNames: ["product_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKUserCart",
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
    await queryRunner.dropTable("carts");
  }
}
