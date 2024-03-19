const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`express.js server is listening on port ${port}`);
})

// config connection to mysql
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'test_user',
    password: 'test_user',
    database: 'react',
    port: '3306'
})

// check connection to mysql
connection.connect((err) => {
    let message = ''
    err ? message = 'fail' + err : message = 'success';
    console.log(`connection ${message}`);
});

const select_query = `
SELECT user_id
,name
,email
,s.description as status
,date_format(created_on, '%e %M %Y, %H:%i') as created_on
,date_format(updated_on, '%e %M %Y, %H:%i') as updated_on 
FROM react.user as u 
INNER JOIN react.status s 
ON s.status_id = u.status_id`;

// get data from main table
// / = http://localhost:5000/
// app.method(path, handler())
app.get('/', (req, res) => {
    console.log('got a GET request');
    console.log(req.query);
    let query = select_query;
    // check if user_id exists in request header?
    if (req.query.user_id) {
        query += ` WHERE user_id = ? ORDER BY user_id desc`
        const user_id = req.query.user_id
        connection.query(query, user_id, (err, results) => {
            if (err) {
                console.log(err)
                res.send('data insert fail: ' + err);
            }
            else {
                console.log(results);
                res.json(results);
            }
        })
    }
    else {
        query += ` ORDER BY user_id desc`
        connection.query(query, (err, results) => {
            if (err) {
                console.log(err)
                res.send('data insert fail: ' + err);
            }
            else {
                console.log(results);
                res.json(results);
            }
        })
    }
})

// get data from tables for selects in form
app.get('/table/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    console.log('got a GET request for table: ' + tableName);
    const query = `SELECT * FROM ${tableName}`
    connection.query(query, (err, results) => {
        res.json(results)
    })
})

// create ticket
app.post('/', (req, res) => {
    console.log('got a POST request');
    console.log(req.body);
    // get json values from post request body
    //const {name, email} = req.body;
    const name = req.body.name;
    const email = req.body.email;
    const status_id = req.body.status_id;
    const query = `INSERT INTO user (name, email, status_id) VALUES (?,?,?)`;
    const values = [name, email, status_id];
    // execute query
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err)
            res.send('data insert fail: ' + err);
        }
        else {
            console.log(results);
            res.send(`user with name ${name} was created`);
        }
    });
});

// update ticket
const update_query = `
UPDATE user 
SET name = ?
,email = ?
,status_id = ?
,updated_on = now() 
WHERE user_id = ?`;

app.put('/', (req, res) => {
    console.log('got a PUT request');
    console.log(req.query);
    const name = req.body.name;
    const email = req.body.email;
    const status_id = req.body.status_id;
    const user_id = req.query.user_id;
    const query = update_query;
    const values = [name, email, status_id, user_id];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err);
            res.send('data insert fail: ' + err);
        }
        else {
            console.log(results);
            res.send(`user_id ${user_id} data update success`);
        }
    })
})

app.delete('/', (req, res) => {
    res.send('got a DELETE request!');
    console.log('got a DELETE request');
    const query = '';
})

// authentication
app.post('/login', async (req, res) => {
    // to do
})

