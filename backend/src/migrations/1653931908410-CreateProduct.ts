import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1653931908410 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          {
            name: "name",
            type: "varchar(100)",
            isNullable: false,
          },
          { name: "description", type: "varchar(600)", isNullable: false },
          { name: "price", type: "number", isNullable: false },
          { name: "amount", type: "number", isNullable: false },
          { name: "photo_url", type: "varchar", isNullable: false },
          {
            name: "category",
            type: "uuid",
            isNullable: true,
          },
          { name: "user_id", type: "uuid", isNullable: false },
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
        foreignKeys: [
          {
            name: "FKUserProduct",
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
    await queryRunner.dropTable("products");
  }
}
