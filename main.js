#!/usr/bin/env node
const express = require('express');
const chalk = require('chalk');
const app = express();
const args = process.argv.splice(2);
const port = args[0] || 8000;

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

app.listen(port);
console.log(chalk.green('[*] Listening on port: ') + chalk.red(port));
