const helpers = require('../../helpers');

module.exports = async (req, res) => {
  try{

    const payload = {
      ...req.body,
      ...req.params,
    };

    helpers.validators.expenses.update(payload);

    const expense = await helpers.models.expenses.update(payload);

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
