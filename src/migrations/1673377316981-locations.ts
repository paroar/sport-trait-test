import { MigrationInterface, QueryRunner } from 'typeorm';

export class locations1673377316981 implements MigrationInterface {
  name = 'locations1673377316981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying NOT NULL, "opening_hours" character varying NOT NULL, CONSTRAINT "UQ_227023051ab1fedef7a3b6c7e2a" UNIQUE ("name"), CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "locations"`);
  }
}
