import { MigrationInterface, QueryRunner } from "typeorm";

export class EntitiesCorrectionMigration1683751007718 implements MigrationInterface {
    name = 'EntitiesCorrectionMigration1683751007718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying(7), "city" character varying(50) NOT NULL, "state" character varying(50) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "RealEstate" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) DEFAULT '0', "size" integer NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "addressesId" integer, "categoryId" integer, CONSTRAINT "REL_a84203c8d269a80750443f9290" UNIQUE ("addressesId"), CONSTRAINT "PK_1e80687649717ed24e73ed8ba9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIME NOT NULL, "realStateId" integer, "userId" integer, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "FK_a84203c8d269a80750443f92902" FOREIGN KEY ("addressesId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "RealEstate" ADD CONSTRAINT "FK_c1d671b3d17bccc9f9340381a5e" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_1e06aa072d4572b523690b0f0ef" FOREIGN KEY ("realStateId") REFERENCES "RealEstate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_d796103491cf0bae197dda59477" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_d796103491cf0bae197dda59477"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_1e06aa072d4572b523690b0f0ef"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "FK_c1d671b3d17bccc9f9340381a5e"`);
        await queryRunner.query(`ALTER TABLE "RealEstate" DROP CONSTRAINT "FK_a84203c8d269a80750443f92902"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
        await queryRunner.query(`DROP TABLE "RealEstate"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
