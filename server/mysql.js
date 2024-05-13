const express = require('express');
const cors = require('cors');
const sql = require('mysql2');
const queries = require('./mysql-queries');

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

// / = http://localhost:5000/
// express syntax: app.method(path, handler())

// get data from main table
app.get('/', (req, res) => {
    let query = queries.select_query;
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
app.post('/item', (req, res) => {
    const query = queries.insert_query;
    console.log(req.body);

    // get json values from post request body
    //const {name, email} = req.body;
    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const values = [item_number, item_description, status_id];

    // execute query
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err)
            res.send(err);
        }
        else {
            res.send(`item ${item_number} was created`);
        }
    });
});

// update ticket
app.put('/', (req, res) => {
    const query = queries.update_query;
    console.log(`got a PUT request for item: ${req.query.item_id}`);

    // get item_id from api query
    const item_id = req.query.item_id;
    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const values = [item_number, item_description, status_id, item_id];
    
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(`item ${item_number} was updated`);
        }
    })
})