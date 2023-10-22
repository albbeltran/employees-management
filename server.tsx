const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT;

//* Middleware

// middleware to allow request from different origin
app.use(cors());

// middleware to read body, parse it and place results in req.body
app.use(express.json());             // for application/json
app.use(express.urlencoded());       // for application/x-www-form-urlencoded

//* Routes

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Done');
});

//* Setup

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});