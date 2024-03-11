### launch project locally:

- requirements: git, node.js, xampp
- clone https://github.com/skubichrupki/sqool to xampp/htdocs (lampp/htdocs on linux)
  
  inside sqool/mysql-app directory:

  - npm install (react dependencies that are too big for github)
  - npm install axios (library for handling data transfer)
  - npm start (start node.js server on dev mode on localhost:3000)
  - in xampp:
    - start apache server on localhost:81
    - start mysql (mariadb) server on localhost:3306
  - database creation scripts are in ./mysql-app/db/readme.md, execute it in sql to copy the database

  you can also run
  - npm test (watch mode)
  - npm run build (builds the app for production to the `build` folder)
  