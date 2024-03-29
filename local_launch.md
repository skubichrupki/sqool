### launch project locally:

- requirements: git, node.js, mysql server
- clone https://github.com/skubichrupki/sqool
  
1. install dependencies
    - cd to mysql-app
      - npm init
      - npm install (node modules etc)
      - npm install axios react-router-dom
    - cd to backend
      - npm install express cors mysql2 (MySQL)
      - npm install mssql (SQL Server)
      - npm install nodemon cookie-parser jsonwebtoken (user authentication)
2. run frontend server
    - cd to mysql-app
    - npm run start (run node.js server on localhost:3000)
3. run backend server
    - cd to backend
    - npm run dev / node index.js (run node.js server on localhost:5000)
4. run database server
    - start mysql server on localhost:3306
    - database scripts are in ./mysql-app/db/database_schema.md
5. enjoy


  