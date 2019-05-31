// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data.json');

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev')); //logs all requests to STDOUT

app.get('/', function(req, res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).end();
});

app.get('/data', function(req, res) {
    res.setHeader('Content-Type','application/json');
    res.send(data);
    res.status(200).end();
});

// finally export the express application
module.exports = app;
