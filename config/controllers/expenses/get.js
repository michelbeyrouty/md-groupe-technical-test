const helpers = require('../../helpers');

module.exports = async(req, res) => {

  try {

    helpers.validators.controllers.expenses.get(req.params);

    const expense = await helpers.models.mongoDB.expenses.get(req.params);

    res.json(expense);
  } catch(err) {
    console.log(err);
    switch (err.name) {

    case 'validationError':
      return res.status(400).send(err.message);
    default:
      return res.status(500).send(err.message);
    }
  }
};
