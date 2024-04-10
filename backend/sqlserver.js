const express = require('express');
const cors = require('cors');
const sql = require('mssql');

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

// get data from tables for selects in form
app.get('/table/:tableName', async (req, res) => {
    const tableName = req.params.tableName;
    // const query = `SELECT * FROM ${tableName}`
    const query = `SELECT * FROM status`
    const request = new sql.Request();
    const results = await request.query(query);
    console.log(results)
    res.json(results.recordset);
});

// TO DO:

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
            res.send('data insert fail: ' + err);
        }
        else {
            res.send(`item with item_number ${item_number} was created`);
        }
    });
});




