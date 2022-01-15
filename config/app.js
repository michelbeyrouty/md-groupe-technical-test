'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes;
app.use('/expenses', routes.expenses);

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});

module.exports = app;
