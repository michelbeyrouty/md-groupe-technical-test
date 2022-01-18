const Expense = require('../models/Expense');
const Errors = require('../../config/errors');

module.exports = {
  models: {
    expenses: {
      create: require('./models/expenses/create')(Expense, Errors),
      get: require('./models/expenses/get')(Expense, Errors),
      list: require('./models/expenses/list')(Expense, Errors),
      update: require('./models/expenses/update')(Expense, Errors),
      delete: require('./models/expenses/delete')(Expense, Errors),
    },
  },
  validators: {
    expenses:{
      post: require('./validators/expenses/post')(Errors),
      get: require('./validators/expenses/get')(Errors),
      update: require('./validators/expenses/update')(Errors),
      delete: require('./validators/expenses/delete')(Errors),
    },
  },
};
