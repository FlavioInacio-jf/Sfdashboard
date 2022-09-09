import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSales1662682882098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sales",
        columns: [
          { name: "id", type: "uuid", isPrimary: true, isNullable: false },
          {
            name: "amount",
            type: "integer",
            isNullable: false,
            default: 0,
          },
          {
            name: "product_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "client_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "uuid",
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
            name: "FKProductSales",
            referencedTableName: "products",
            referencedColumnNames: ["id"],
            columnNames: ["product_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKClientSales",
            referencedTableName: "clients",
            referencedColumnNames: ["id"],
            columnNames: ["client_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKUserSales",
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
    await queryRunner.dropTable("sales");
  }
}
