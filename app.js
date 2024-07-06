const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This Tao You labwork4! second Manual approval'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
