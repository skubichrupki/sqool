# MySQL Database scripts

### create database
```sql
CREATE DATABASE react;
```

### create user for application
```sql
CREATE USER 'test_user'@'localhost' IDENTIFIED BY 'test_user';
GRANT ALL PRIVILEGES ON *.* TO 'test_user'@'localhost';
FLUSH PRIVILEGES;
```

### create item table
```sql
CREATE TABLE `item` (
`item_id` int NOT NULL AUTO_INCREMENT,
`item_number` varchar(50) NOT NULL,
`item_description` varchar(50) NOT NULL,
`item_type_id` int DEFAULT NULL,
`supplier_id` int DEFAULT NULL,
`country_origin_id` int DEFAULT NULL,
`status_id` int DEFAULT NULL,
`created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`item_id`)
) 
```

## select fields tables

### create status table
```sql
CREATE TABLE `status` (
`status_id` int NOT NULL AUTO_INCREMENT,
`description` varchar(50) DEFAULT NULL,
PRIMARY KEY (`status_id`)
)
INSERT INTO react.status (description) 
values ('Backlog'), ('In Review'), ('In Progress'), ('Done');
```