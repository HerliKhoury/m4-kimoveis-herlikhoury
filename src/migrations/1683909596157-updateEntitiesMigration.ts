import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntitiesMigration1683909596157 implements MigrationInterface {
    name = 'UpdateEntitiesMigration1683909596157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_1e06aa072d4572b523690b0f0ef"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "FK_a84203c8d269a80750443f92902"`);
        await queryRunner.query(`ALTER TABLE "schedule" RENAME COLUMN "realStateId" TO "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "REL_a84203c8d269a80750443f9290"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP COLUMN "addressesId"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "UQ_5cddc16f08ac35e548b39a3fa9d" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ALTER COLUMN "value" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_b080fc5367055bf9fbe4fe01448" FOREIGN KEY ("realEstateId") REFERENCES "RealEstate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "FK_5cddc16f08ac35e548b39a3fa9d" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "FK_5cddc16f08ac35e548b39a3fa9d"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_b080fc5367055bf9fbe4fe01448"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ALTER COLUMN "value" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "UQ_5cddc16f08ac35e548b39a3fa9d"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD "addressesId" integer`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "REL_a84203c8d269a80750443f9290" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "schedule" RENAME COLUMN "realEstateId" TO "realStateId"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "FK_a84203c8d269a80750443f92902" FOREIGN KEY ("addressesId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_1e06aa072d4572b523690b0f0ef" FOREIGN KEY ("realStateId") REFERENCES "RealEstate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
