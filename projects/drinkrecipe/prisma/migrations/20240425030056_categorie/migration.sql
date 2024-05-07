-- CreateTable
CREATE TABLE `Glasses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `createdById` INTEGER NULL,

    UNIQUE INDEX `Glasses_createdById_key`(`createdById`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdById` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `recipe` VARCHAR(191) NOT NULL,
    `ingredients` VARCHAR(191) NOT NULL,
    `categorieId` INTEGER NOT NULL,
    `glassId` INTEGER NOT NULL,
    `createdById` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Glasses` ADD CONSTRAINT `Glasses_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categorie` ADD CONSTRAINT `Categorie_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Drinks` ADD CONSTRAINT `Drinks_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Drinks` ADD CONSTRAINT `Drinks_glassId_fkey` FOREIGN KEY (`glassId`) REFERENCES `Glasses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Drinks` ADD CONSTRAINT `Drinks_createdById_fkey` FOREIGN KEY (`createdById`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
