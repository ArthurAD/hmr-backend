const express = require('express');
const pages = require('./controllers/pages');

const app = express.Router();

app.get('/', pages.index);

module.exports = app;
