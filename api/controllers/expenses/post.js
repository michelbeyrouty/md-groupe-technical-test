const { helpers } = require('../..');

module.exports = async (req, res) => {
  try{

    helpers.validators.expenses.post(req.body);

    const expense = await helpers.models.expenses.create(req.body);

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
