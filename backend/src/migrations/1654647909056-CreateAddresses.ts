import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddresses1654647909056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "address", type: "varchar", isNullable: false },
          { name: "county", type: "varchar", isNullable: false },
          { name: "cep", type: "varchar", isNullable: false },
          { name: "federative_unit", type: "varchar", isNullable: false },
          { name: "district", type: "varchar", isNullable: false },
          { name: "state", type: "varchar", isNullable: false },
          { name: "number", type: "varchar", isNullable: false },
          { name: "user_id", type: "uuid", isNullable: false },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: "FKUserAddress",
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
    await queryRunner.dropTable("addresses");
  }
}
