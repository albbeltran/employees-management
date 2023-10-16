const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.post('/login', (req, res) => {
    res.send('Done')
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});