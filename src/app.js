const express = require('express');

const { sayHello, firstCharacters } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
// const { firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200).json({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { length } = req.query;
  const { string } = req.params;

  if (length) {
    res.status(200).json({ result: firstCharacters(string, length) });
  } else {
    return res.status(200).json({ result: firstCharacter(string) });
  }
});

module.exports = app;
