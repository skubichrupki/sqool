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

// / = http://localhost:5000/
// app.method(path, handler())
app.get('/', (req, res) => {
    console.log('got a GET request');
    const query = 'SELECT * FROM user';
    // check if user_id exists in request body
    if (req.body.user_id) {
        query += ' WHERE user_id = ?'
        const values = [req.body.user_id]
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
    else {
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

app.post('/', (req, res) => {
    console.log('got a POST request');
    console.log(req.body);
    // get json values from post request body
    //const {name, email} = req.body;
    const name = req.body.name;
    const email = req.body.email;
    const query = `INSERT INTO user (name, email) VALUES (?,?)`;
    const values = [name, email];
    // execute query
    connection.query(query, values, (err, results) => {
        if (err) {
            console.log(err)
            res.send('data insert fail: ' + err);
        }
        else {
            console.log(results);
            res.send('data insert success');
        }
    });
});

app.put('/', (req, res) => {
    res.send('got a put request!');
    console.log('got a PUT request');
    const query = '';
})

app.delete('/', (req, res) => {
    res.send('got a DELETE request!');
    console.log('got a DELETE request');
    const query = '';
})



