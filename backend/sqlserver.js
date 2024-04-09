const express = require('express');
const cors = require('cors');
const mssql = require('mssql');

const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`express.js server is listening on port ${port}`);
})

const config = {
    server: 'ACER\\SQLEXPRESS',
    database: 'react',
    port: 1433,
    user: 'test_user',
    password: 'test_user',
    trustServerCertificate: true
}

const query = 'SELECT * FROM item';

mssql.connect(config, (error) => {
    error ? console.log(error) : console.log('g');
})

// update ticket
const update_query = `
UPDATE item 
SET item_number = @item_number, item_description = @item_description, status_id = @status_id, updated_on = GETDATE() 
WHERE item_id = @item_id`;

app.put('/', async (req, res) => {
    console.log(`got a PUT request for item: ${req.query.item_id}`);
});

// TO DO: query from mssql
// let request = new mssql.Request();
// request.query(query, (error, results) => {
//     error ? console.log(error) : console.log(results);
// })



