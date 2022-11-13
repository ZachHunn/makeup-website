/*
  Warnings:

  - You are about to drop the column `caption` on the `gallery` table. All the data in the column will be lost.
  - You are about to drop the column `media_url` on the `gallery` table. All the data in the column will be lost.
  - Added the required column `mediaName` to the `gallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaType` to the `gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "gallery_id_seq";
ALTER TABLE "gallery" DROP COLUMN "caption",
DROP COLUMN "media_url",
ADD COLUMN     "mediaName" TEXT NOT NULL,
ADD COLUMN     "mediaType" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('gallery_id_seq');
ALTER SEQUENCE "gallery_id_seq" OWNED BY "gallery"."id";
