'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();
// const mongo = require('./mongo');

// mongo.connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes;
app.use('/expenses', routes.expenses);

module.exports = app;
