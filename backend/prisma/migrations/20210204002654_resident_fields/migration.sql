/*
  Warnings:

  - Made the column `unit` on table `Resident` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Resident` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Resident" ALTER COLUMN "unit" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
