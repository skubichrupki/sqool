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
    const query = `SELECT * FROM ${tableName}`
    const tableName = req.params.tableName;
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

// create ticket - done
app.post('/item', async (req, res) => {
    const query = queries.insert_query;
    console.log(req.body);
    // get json values from post request body
    //const {name, email} = req.body;
    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const values = [item_number, item_description, status_id];

    const request = new sql.Request();
    try {
        const results = await request.query(query);
        res.send(`item ${item_number} was created`);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: error})
    }
});

// update ticket - done?
app.put('/', async (req, res) => {
    const query = queries.update_query;
    console.log(`got a PUT request for item: ${req.query.item_id}`);

    const item_number = req.body.item_number;
    const item_description = req.body.item_description;
    const status_id = req.body.status_id;
    const item_id = req.query.item_id;

    const request = new sql.Request();

    request.input('item_number', sql.Int, item_number);
    request.input('item_description', sql.NVarChar, item_description);
    request.input('status_id', sql.Int, status_id);
    request.input('item_id', sql.Int, item_id);

    try {
        const results = await request.query(query);
        res.status(201).send(`item ${item_number} was updated`);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: error})
    }
});