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

app.get('/En/category', (req, res, next) => {
  res.sendFile(__dirname + '/En/category.html');
});

app.get('/Fa/subcategory', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/subcat.html');
});

app.get('/En/subcategory', (req, res, next) => {
  res.sendFile(__dirname + '/En/subcat.html');
});

app.get('/Fa/newsPage', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/news.html');
});

app.get('/Fa/news', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/news-page.html');
});

app.get('/Fa/artist', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/user.html');
});

app.get('/Fa/artists', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/artists.html');
});

app.get('/En/artists', (req, res, next) => {
  res.sendFile(__dirname + '/En/artists.html');
});

app.get('/En/newsPage', (req, res, next) => {
  res.sendFile(__dirname + '/En/news.html');
});

app.get('/En/news', (req, res, next) => {
  res.sendFile(__dirname + '/En/news-page.html');
});

app.get('/En/artist', (req, res, next) => {
  res.sendFile(__dirname + '/En/user.html');
});

app.get('/Fa/artistPortfolio', (req, res, next) => {
  res.sendFile(__dirname + '/Fa/artistPortfolio.html');
});

app.get('/En/artistPortfolio', (req, res, next) => {
  res.sendFile(__dirname + '/En/artistPortfolio.html');
});
api(app, db);

app.listen(port);
console.log(chalk.green.bold('[*] ') + chalk.green.bold('Listening on port:') + ' ' + chalk.red.bold(port));
