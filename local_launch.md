### launch project locally:

- requirements: git, node.js, mysql server, sql server
- clone https://github.com/skubichrupki/sqool
  
1. install dependencies
    - cd to mysql-app
      - npm init
      - npm install (node modules etc)
      - npm install axios react-router-dom
    - cd to backend
      - npm install express cors
      - npm install mysql2 (MySQL) mssql (SQL Server)
      - npm install nodemon cookie-parser jsonwebtoken
2. run frontend server
    - cd to mysql-app
    - npm run start (run node.js server on localhost:3000)
3. run backend server
    - cd to backend
    - npm run dev / npm run dev2 (run node.js server on localhost:5000(mysql) / localhost:5500(mssql))
4. run database server
    - run -> services.msc
    - start mysql server on localhost:3306/mssql server on localhost:1433
    - database scripts are in ./mysql-app/database/
5. enjoy


  