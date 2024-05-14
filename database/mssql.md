# SQL Server Database scripts

 Create database
```sql
CREATE DATABASE [react];
```

 Create user for application
```sql
CREATE LOGIN [test_user] WITH PASSWORD = 'test_user';
CREATE USER [test_user] FOR LOGIN [test_user];
ALTER ROLE [db_owner] ADD MEMBER [test_user];
```

 Create item table
```sql
CREATE TABLE [dbo].[item] (
    [item_id] INT IDENTITY(1,1) PRIMARY KEY,
    [item_number] NVARCHAR(50) NOT NULL,
    [item_description] NVARCHAR(50) NOT NULL,
    [item_type_id] INT NULL,
    [supplier_id] INT NULL,
    [country_origin_id] INT NULL,
    [status_id] INT NULL,
    [created_on] DATETIME2 NOT NULL DEFAULT GETDATE(),
    [updated_on] DATETIME2 NOT NULL DEFAULT GETDATE()
);
```

 Create status table
```sql
CREATE TABLE [dbo].[status] (
    [status_id] INT IDENTITY(1,1) PRIMARY KEY,
    [description] NVARCHAR(50) NULL
);
```

 Insert data into status table
```sql
INSERT INTO [dbo].[status] ([description])
VALUES ('Backlog'), ('In Review'), ('In Progress'), ('Done');
```

 Generate data
```sql
INSERT INTO react.dbo.item (item_number, item_description, item_type_id, supplier_id, country_origin_id, status_id)
VALUES 
('Item1', 'Description1', 1, 1, 1, 1),
('Item2', 'Description2', 2, 2, 2, 2),
('Item3', 'Description3', 3, 3, 3, 3),
('Item4', 'Description4', 4, 4, 4, 4);
```