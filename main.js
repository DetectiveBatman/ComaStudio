#!/usr/bin/env node
const express = require('express');
const app = express();
const args = process.argv.splice(2);
const port = args[0] || 8000;

app.get('/', (req, res, next) => {
  res.end('Hello World!');
});

app.listen(port);

console.log('[*] Listening on the port: ' + port);
