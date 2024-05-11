### launch project locally:

- requirements: git, node.js, mysql server, sql server
- clone https://github.com/skubichrupki/sqool
  
1. install dependencies
    - cd to client
      - npm init
      - npm install (node modules etc)
      - npm install axios react-router-dom
    - cd to server
      - npm install express cors
      - npm install mysql2 (MySQL) mssql (SQL Server)
      - npm install nodemon
2. run frontend server
    - cd to client
    - npm run dev (run node.js server on localhost:3000)
3. run server server
    - cd to server
    - npm run dev / npm run dev2 (run node.js server on localhost:5000(mysql) / localhost:8000(mssql))
4. run database server
    - run -> services.msc / SQL server configurator manager
    - start mysql server on localhost:3306 / mssql server on localhost:1433
    - database scripts are in ./client/database
5. enjoy


  