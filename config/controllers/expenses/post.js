
const helpers = require('../../helpers');

module.exports = async (req, res) => {
  try{

    helpers.validators.controllers.expenses.post(req.body);

    const expense = await helpers.models.mongoDB.expenses.create(req.body);

    res.json(expense);

  } catch (err) {

    console.log(err);
    switch (err.name) {

    case 'validationError':
      return res.status(400).send(err.message);
    default:
      return res.status(500).send(err.message);
    }

  }
};
