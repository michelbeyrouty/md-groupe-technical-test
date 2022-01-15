const helpers = require('../../helpers');

module.exports = async (req, res) => {
  try{

    const payload = {
      ...req.body,
      ...req.param,
    };

    helpers.validators.expenses.update(payload);

    const expense = await helpers.models.expenses.create(payload);

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
