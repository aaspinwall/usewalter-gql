/*
  Warnings:

  - You are about to drop the column `userId` on the `Package` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Package" DROP CONSTRAINT "Package_userId_fkey";

-- AlterTable
ALTER TABLE "Package" DROP COLUMN "userId";
