const config = require('../../');

module.exports = async (req, res) => {
  try{

    config.validators.expenses.post(req.body);

    const expense = await config.models.expenses.create(req.body);

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
