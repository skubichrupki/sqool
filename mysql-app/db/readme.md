mysql database structure

    create database react

    CREATE TABLE `user` (
     `user_id` int(11) NOT NULL AUTO_INCREMENT,
     `name` varchar(50) NOT NULL,
     `email` varchar(50) NOT NULL,
     `created_on` datetime NOT NULL DEFAULT current_timestamp(),
     `updated_on` datetime NOT NULL DEFAULT current_timestamp(),
     PRIMARY KEY (`user_id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci	


