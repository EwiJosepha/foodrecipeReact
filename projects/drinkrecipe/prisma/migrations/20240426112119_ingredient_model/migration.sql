/*
  Warnings:

  - You are about to drop the column `ingredients` on the `drinks` table. All the data in the column will be lost.
  - Added the required column `ingredientsId` to the `Drinks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `drinks` DROP COLUMN `ingredients`,
    ADD COLUMN `ingredientsId` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `isAlcoholic` BOOLEAN NULL;

-- CreateTable
CREATE TABLE `Ingredients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdById` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Drinks` ADD CONSTRAINT `Drinks_ingredientsId_fkey` FOREIGN KEY (`ingredientsId`) REFERENCES `Ingredients`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingredients` ADD CONSTRAINT `Ingredients_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
