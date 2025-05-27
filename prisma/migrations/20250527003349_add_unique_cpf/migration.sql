/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Responsible` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Responsible_cpf_key` ON `Responsible`(`cpf`);
