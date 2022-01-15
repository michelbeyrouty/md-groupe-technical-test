const Expense = require('./models/Expense');

module.exports = {
  helpers: {
    models: {
      expenses: {
        create: require('./helpers/models/expenses/create')(Expense),
        get: require('./helpers/models/expenses/get')(Expense),
      },
    },
    validators: {
      expenses:{
        post: require('./helpers/validators/expenses/post'),
        get: require('./helpers/validators/expenses/get'),
      },
    },
  },
};
