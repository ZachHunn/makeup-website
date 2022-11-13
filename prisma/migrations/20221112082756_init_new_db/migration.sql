/*
  Warnings:

  - A unique constraint covering the columns `[service_name]` on the table `serviceitems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "serviceitems_service_name_key" ON "serviceitems"("service_name");
