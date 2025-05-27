/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Responsible` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Responsible_email_key` ON `Responsible`(`email`);
