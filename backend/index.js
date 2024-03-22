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
SELECT item_id
,item_number
,item_description
,item_type_id
,supplier_id
,country_origin_id
,stat.status_id
,stat.description as status
,date_format(created_on, '%d-%m-%y, %H:%i') as created_on
,date_format(updated_on, '%d-%m-%y, %H:%i') as updated_on 
FROM react.item
INNER JOIN react.status as stat
ON stat.status_id = item.status_id`;

// get data from main table
// / = http://localhost:5000/
// app.method(path, handler())
app.get('/', (req, res) => {
    console.log('got a GET request');
    console.log(req.query);
    let query = select_query;
    // check if item_id exists in request header?
    if (req.query.item_id) {
        query += ` WHERE item_id = ? ORDER BY item_id desc`
        const item_id = req.query.item_id
        connection.query(query, item_id, (err, results) => {
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
        query += ` ORDER BY item_id DESC`
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

// update ticket
const insert_query = `
INSERT INTO item (item_number, item_description, status_id) 
VALUES (?,?,?)`;

// create ticket
app.post('/CreateUser', (req, res) => {
    console.log('got a POST request');
    console.log(req.body);
    // get json values from post request body
    //const {name, email} = req.body;
    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const query = insert_query;
    const values = [item_number, item_description, status_id];
    // execute query
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err)
            res.send('data insert fail: ' + err);
        }
        else {
            console.log(results);
            res.send(`item with item_number ${item_number} was created`);
        }
    });
});

// update ticket
const update_query = `
UPDATE item 
SET item_number = ?, item_description = ?, status_id = ?, updated_on = now() 
WHERE item_id = ?`;

app.put('/', (req, res) => {
    console.log('got a PUT request');
    console.log(req.query);
    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const item_id = req.query.item_id;
    const query = update_query;
    const values = [item_number, item_description, status_id, item_id];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err);
            res.send('data insert fail: ' + err);
        }
        else {
            console.log(results);
            res.send(`item_id ${item_id} data update success`);
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
    console.log('got a POST request from LOGIN');
    res.send('got a POST request from LOGIN');
})

