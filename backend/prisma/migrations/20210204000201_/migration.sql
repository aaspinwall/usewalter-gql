/*
  Warnings:

  - You are about to drop the column `password` on the `Resident` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[unit]` on the table `Resident`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Resident" DROP COLUMN "password",
ADD COLUMN     "unit" INTEGER,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "telephone" TEXT,
ADD COLUMN     "timeForNotif" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Resident.unit_unique" ON "Resident"("unit");

-- AddForeignKey
ALTER TABLE "Resident" ADD FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
