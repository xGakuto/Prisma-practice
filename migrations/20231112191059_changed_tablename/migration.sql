/*
  Warnings:

  - You are about to drop the `Informations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Informations";

-- CreateTable
CREATE TABLE "userinformations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userinformations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userinformations_email_key" ON "userinformations"("email");
