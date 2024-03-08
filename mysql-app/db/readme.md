mysql database structure

    CREATE DATABASE react

    CREATE USER 'test_user'@'localhost' IDENTIFIED BY 'test_user';
    grant all PRIVILEGES on *.* to 'test_user'@'localhost';
    flush privileges;

    CREATE TABLE `user` (
    `user_id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    `updated_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP())
     ENGINE = InnoDB 
     AUTO_INCREMENT = 5
     DEFAULT CHARSET = utf8mb4 
     COLLATE = utf8mb4_general_ci;


