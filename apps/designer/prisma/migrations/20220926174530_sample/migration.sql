-- CreateTable
CREATE TABLE `asset` (
    `asset_id` BINARY(16) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `category_id` BINARY(16) NOT NULL,
    `three_d_url` VARCHAR(255) NULL,
    `thumbnail_sm` VARCHAR(255) NOT NULL,
    `hero` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `category_idx`(`category_id`),
    PRIMARY KEY (`asset_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assetcategory` (
    `category_id` BINARY(16) NOT NULL,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `model` (
    `model_id` BINARY(16) NOT NULL,
    `user_id` BINARY(16) NOT NULL,
    `main_gate` BINARY(16) NOT NULL,
    `boundary` BINARY(16) NOT NULL,
    `balcony` BINARY(16) NOT NULL,
    `structure_gf` BINARY(16) NOT NULL,
    `structure_ff` BINARY(16) NOT NULL,
    `structure_sf` BINARY(16) NOT NULL,

    INDEX `balcony_idx`(`balcony`),
    INDEX `boundary_idx`(`boundary`),
    INDEX `main_gate_idx`(`main_gate`),
    INDEX `structure_ff_idx`(`structure_ff`),
    INDEX `structure_gf_idx`(`structure_gf`),
    INDEX `structure_sf_idx`(`structure_sf`),
    INDEX `user_idx`(`user_id`),
    PRIMARY KEY (`model_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `template` (
    `template_id` BINARY(16) NOT NULL,
    `model_id` BINARY(16) NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Template_model_id_key`(`model_id`),
    PRIMARY KEY (`template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `user_id` BINARY(16) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NOT NULL,
    `email_id` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
