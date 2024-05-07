-- DropForeignKey
ALTER TABLE `drinks` DROP FOREIGN KEY `Drinks_ingredientsId_fkey`;

-- AlterTable
ALTER TABLE `drinks` ALTER COLUMN `ingredientsId` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `Drinks` ADD CONSTRAINT `Drinks_ingredientsId_fkey` FOREIGN KEY (`ingredientsId`) REFERENCES `Ingredients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
