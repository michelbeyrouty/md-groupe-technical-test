const Expense = require('../models/Expense');

module.exports = {
  models: {
    mongoDB: {
      expenses: {
        create: require('./models/mongodb/expenses/create')(Expense),
      },
    },
  },
  validators: {
    controllers: {
      expenses:{
        post: require('./validators/validatePayload'),
      },
    },
  },
};
