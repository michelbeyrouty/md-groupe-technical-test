'use strict';

const app = require('./config/app');
const mongo = require('./config/mongo');

mongo.connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
