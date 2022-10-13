import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddQuantitySalesInUsers1662682413723
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "quantity_sales",
        type: "interger",
        isNullable: false,
        default: 0,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "quantity_sales");
  }
}
