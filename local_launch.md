### launch project locally:

- requirements: git, node.js, mysql
- clone https://github.com/skubichrupki/sqool
  
1. install dependencies
  - npm install (react dependencies that are too big for github)
  - npm install axios (library for handling data transfer)
  - cd to backend
  - npm init
  - npm install express
  - npm install mysql2
2. run frontend server
  - cd to mysql-app
  - npm start (start node.js server on localhost:3000)
3. run backend server
  - cd backend
  - node index.js (start node.js server on localhost:5000)
4. run database server
  - start mysql server on localhost:3306
  - database creation scripts are in ./mysql-app/db/readme.md, execute it in sql to copy the database


  