const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.listen(port, () => {
    console.log(`express js is listening on port ${port}`);
})

// req - request, res - response
// / - http://localhost:5000/
app.get('/', (req, res) => {
    res.send(`port:${port}`);
})

// connect to mysql

// post/get/put

// post/put

// get

