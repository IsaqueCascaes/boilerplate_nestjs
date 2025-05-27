/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cnpj]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Company_name_key` ON `Company`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Company_cnpj_key` ON `Company`(`cnpj`);

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_responsibleId_fkey` FOREIGN KEY (`responsibleId`) REFERENCES `Responsible`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
