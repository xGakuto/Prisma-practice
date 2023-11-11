/*
  Warnings:

  - You are about to drop the column `message2` on the `informations` table. All the data in the column will be lost.
  - You are about to drop the column `message3gen` on the `informations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "informations" DROP COLUMN "message2",
DROP COLUMN "message3gen";
