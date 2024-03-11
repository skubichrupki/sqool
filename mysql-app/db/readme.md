## MariaDB DATABASE STRUCTURE ##

### create database

    CREATE DATABASE react;

### create user for application

    CREATE USER 'test_user'@'localhost' IDENTIFIED BY 'test_user';
    GRANT ALL PRIVILEGES ON *.* TO 'test_user'@'localhost';
    FLUSH PRIVILEGES;

### create user table

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


