-- DropIndex
DROP INDEX "Package.unit_unique";

-- AlterTable
ALTER TABLE "Package" ALTER COLUMN "delivered" DROP NOT NULL;
