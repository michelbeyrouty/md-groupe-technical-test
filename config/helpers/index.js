const Expense = require('../models/Expense');

module.exports = {
  models: {
    mongoDB: {
      expenses: {
        create: require('./models/mongodb/expenses/create')(Expense),
        get: require('./models/mongodb/expenses/get')(Expense),
      },
    },
  },
  validators: {
    controllers: {
      expenses:{
        post: require('./validators/controllers/expenses/post'),
        get: require('./validators/controllers/expenses/get'),
      },
    },
  },
};
