const Expense = require('../models/Expense');

module.exports = {
  models: {
    expenses: {
      create: require('./models/expenses/create')(Expense),
      get: require('./models/expenses/get')(Expense),
      list: require('./models/expenses/list')(Expense),
    },
  },
  validators: {
    expenses:{
      post: require('./validators/expenses/post'),
      get: require('./validators/expenses/get'),
    },
  },
};
