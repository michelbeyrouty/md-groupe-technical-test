'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();
const mongodb = require('./mongo');
mongodb.connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes;
app.use('/expenses', routes.expenses);
app.use('/', async (req, res) => {
  res.json('req');
});

module.exports = app;
