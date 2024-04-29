const express = require('express');
const cors = require('cors');
const sql = require('mysql2');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`express.js server is listening on port ${port}`);
})

// config connection to sql
const connection = sql.createConnection({
    host: '127.0.0.1',
    database: 'react',
    port: '3306',
    user: 'test_user',
    password: 'test_user'
})

// check connection to sql
connection.connect((error) => {
    error ? console.log(error) : null;
});

// get tickets for select component
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
    let query = select_query;
    // check if item_id exists in request header
    if (req.query.item_id) {
        console.log(`got a GET request for item: ${req.query.item_id}`);
        query += ` WHERE item_id = ? ORDER BY item_id desc`
        const item_id = req.query.item_id
        connection.query(query, item_id, (err, results) => {
            if (err) {
                console.log(err)
                res.send(err);
            }
            else {
                res.json(results);
            }
        })
    }
    else {
        query += ` ORDER BY item_id DESC`
        connection.query(query, (err, results) => {
            if (err) {
                console.log(err)
                res.send(err);
            }
            else {
                res.json(results);
            }
        })
    }
})

// get data from tables for selects in form
app.get('/table/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    const query = `SELECT * FROM ${tableName}`
    connection.query(query, (error, results) => {
        error ? console.log(error) : res.json(results)
    })
})

// create ticket
const insert_query = `
INSERT INTO item (item_number, item_description, status_id) 
VALUES (?,?,?)`;

app.post('/CreateUser', (req, res) => {
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
            res.send(err);
        }
        else {
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
    console.log(`got a PUT request for item: ${req.query.item_id}`);
    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const item_id = req.query.item_id;
    const query = update_query;
    const values = [item_number, item_description, status_id, item_id];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(`item_id ${item_id} data update success`);
        }
    })
})

// TO BE DONE

// delete ticket
app.delete('/', (req, res) => {
    res.send('got a DELETE request!');
})