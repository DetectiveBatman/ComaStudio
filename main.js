#!/usr/bin/env node
const {db}    = require('./config.js');
const api     = require('./api/main.js');
const args    = process.argv.splice(2);
const express = require('express');
const chalk   = require('chalk');
const port    = args[0] || 8545;
const app     = express();


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

api(app, db);

app.listen(port);
console.log(chalk.green.bold('[*] ') + chalk.green.bold('Listening on port:') + ' ' + chalk.red.bold(port));
