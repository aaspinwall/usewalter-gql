/*
  Warnings:

  - You are about to drop the `Faker` table. If the table is not empty, all the data it contains will be lost.
  - The migration will add a unique constraint covering the columns `[unit]` on the table `Package`. If there are existing duplicate values, the migration will fail.
  - Added the required column `unit` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "unit" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "Faker";

-- CreateIndex
CREATE UNIQUE INDEX "Package.unit_unique" ON "Package"("unit");

-- AddForeignKey
ALTER TABLE "Package" ADD FOREIGN KEY ("unit") REFERENCES "Resident"("unit") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
