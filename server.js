'use strict';

const app = require('./config/app');

const server = app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});

module.exports = server;
