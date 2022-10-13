import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTotalSalesInUsers1662682067817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "total_sales",
        type: "interger",
        isNullable: false,
        default: 0,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "total_sales");
  }
}
