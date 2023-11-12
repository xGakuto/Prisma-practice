/*
  Warnings:

  - You are about to drop the `informations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "informations";

-- CreateTable
CREATE TABLE "Informations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Informations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Informations_email_key" ON "Informations"("email");
