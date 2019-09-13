#!/usr/bin/env node
const express = require('express');
const chalk = require('chalk');
const app = express();
const args = process.argv.splice(2);
const port = args[0] || 8545;

var execPHP = require('./execphp.js')();

execPHP.phpFolder = '/var/www/html/';

app.use('*.php',function(request,response,next) {
	execPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
});


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
console.log(chalk.green.bold('[*] ') + chalk.green.bold('Listening on port:') + ' ' + chalk.red.bold(port));
