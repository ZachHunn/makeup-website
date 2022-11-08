-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role";

-- CreateTable
CREATE TABLE "gallery" (
    "id" INTEGER NOT NULL,
    "caption" TEXT,
    "media_url" TEXT NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);
