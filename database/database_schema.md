## MySQL DATABASE STRUCTURE ##

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
    `status_id` int,
    `created_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    `updated_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP()),
    ADD CONSTRAINT fk_user_status FOREIGN KEY (status_id) REFERENCES status(status_id);

## select fields tables

### create status table

    create table `status` (
    `status_id` int NOT NULL PRIMARY KEY auto_increment,
    `description` varchar(50)

    insert into react.status (description) 
    values ('backlog'), ('in progress'), ('in review'), ('done');

)


