const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const queries = require('./mssql-queries');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`express.js server is listening on port ${port}`);
})

// config connection to sql
const config = {
    server: 'ACER\\SQLEXPRESS',
    database: 'react',
    port: 1433,
    user: 'test_user',
    password: 'test_user',
    trustServerCertificate: true
}

// check connection to sql
sql.connect(config, (error) => {
    error ? console.log(error) : null;
});

// get data from main table - done
app.get('/', async (req, res) => {
    let query = queries.select_query;
    const request = new sql.Request();
    if (req.query.item_id) {
        console.log(`got a GET request for item: ${req.query.item_id}`);
        query += ` WHERE item_id = ${req.query.item_id} ORDER BY item_id desc`
    }
    else {
        query += ` ORDER BY item_id DESC`
    }
    try {
        const results = await request.query(query);
        res.json(results.recordset);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: error})
    }

});

// get data from tables for selects in form - done
app.get('/table/:tableName', async (req, res) => {
    const tableName = req.params.tableName;
    const query = `SELECT * FROM ${tableName}`
    const request = new sql.Request();
    try {
        const results = await request.query(query);
        console.log(results)
        res.json(results.recordset);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: error})
    }

});

// create ticket - to do
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
            res.send('data insert fail: ' + err);
        }
        else {
            res.send(`item with item_number ${item_number} was created`);
        }
    });
});

// update ticket - to do
app.put('/', (req, res) => {
    const query = queries.update_query;
    console.log(`got a PUT request for item: ${req.query.item_id}`);

    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const item_id = req.query.item_id;
    const values = {
        item_number: item_number,
        item_description: item_description,
        status_id: status_id,
        item_id: item_id
        };

    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(`item_id ${item_id} data update success`);
        }
    })
});