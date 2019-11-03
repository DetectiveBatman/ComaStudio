#!/usr/bin/env node
const api        = require('./api/main.js');
const {db}       = require('./config.js');
const bodyParser = require('body-parser');
const args       = process.argv.splice(2);
const express    = require('express');
const chalk      = require('chalk');
const port       = args[0] || 8545;
const app        = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + 'index.html');
});

app.get('/Fa', (req, res, next) => {
  res.sendFile(__dirname + 'Fa/index.html');
});

app.get('/En', (req, res, next) => {
  res.sendFile(__dirname + 'En/index.html');
});

app.get('/Fa/category', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/category.html');
});

api(app, db);

app.listen(port);
console.log(chalk.green.bold('[*] ') + chalk.green.bold('Listening on port:') + ' ' + chalk.red.bold(port));
