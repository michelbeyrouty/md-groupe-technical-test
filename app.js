const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./api/routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

_importRoutes();
_connectMongo();

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});


function _importRoutes(){

  app.use('/expenses', routes.expenses);
}

function _connectMongo(){

  const paramethers = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  mongoose.connect(process.env.DB_CONNECTION, paramethers , () => {
    console.log('Connected to DB');
  });

}
