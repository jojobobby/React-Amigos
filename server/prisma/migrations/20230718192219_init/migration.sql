/*
  Warnings:

  - Added the required column `addresses` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `connections` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addresses" TEXT NOT NULL,
ADD COLUMN     "connections" INTEGER NOT NULL;
