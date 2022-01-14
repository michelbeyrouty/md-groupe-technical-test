const helpers = require('../../helpers');

module.exports = async(req, res) => {

  helpers.validators.payloadValidator(req.body);

  try {
    const expense = await Expense.findById(req.params.expenseId);
    res.json(expense['_doc']);
  } catch(err) {
    res.json({
      message: 'error ' + err,
    });
  }
};
