const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
})  // ex6 function




server.listen(3030); // Port:3030 -> local host