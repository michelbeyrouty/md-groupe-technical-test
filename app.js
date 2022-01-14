const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
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

  app.use('/expenses', require('./config/routes/expenses'));

}

function _connectMongo(){

  mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, () => {
    console.log('Connected to DB');
  });

}
