import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1662594576534 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clients",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "name", type: "varchar(255)", isNullable: false },
          {
            name: "cpf",
            type: "varchar(255)",
            isNullable: false,
            isUnique: true,
          },
          { name: "email", type: "varchar(200)", isNullable: true },
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
    await queryRunner.dropTable("clients");
  }
}
