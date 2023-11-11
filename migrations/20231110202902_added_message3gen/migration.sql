/*
  Warnings:

  - Added the required column `message3gen` to the `informations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "informations" ADD COLUMN     "message3gen" TEXT NOT NULL;
