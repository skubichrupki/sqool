# launch project locally:

- requirements: git, node.js, mysql server, sql server
- clone https://github.com/skubichrupki/sqool
  
1. install dependencies
    - cd to client
      - npm init
      - npm install (node modules etc)
      - npm install axios react-router-dom
    - cd to server
      - npm install express cors mysql2 mssql nodemon
2. client
    - cd to client
    - npm run dev (run node.js server on localhost:3000)
3. server
    - cd to server
    - npm run dev (run node.js server on localhost:5000 (mysql))
    - npm run dev2 (run node.js server on localhost:8000 (mssql))
4. database
    - run -> services.msc -> mysql80 (windows)
    - run SQL server configurator manager
    - start mysql server on localhost:3306 / mssql server on localhost:1433
    - database scripts are in ./database
5. enjoy


  
