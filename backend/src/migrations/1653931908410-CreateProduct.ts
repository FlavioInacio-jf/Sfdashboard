import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1653931908410 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          {
            name: "bar_code",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false,
          },
          { name: "price", type: "number", isNullable: false },
          { name: "amount", type: "number", isNullable: false },
          {
            name: "status",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
