const Joi = require('joi');
const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];

function expenseValidation(expense) {
  const ExpenseSchema = Joi.object({
    description: Joi.string(),
    type: Joi.string().in(EXPENSE_TYPES)
      .required(),
    value: Joi.number().required(),
  });

  const { error } = ExpenseSchema.validate(expense);

  return error;
};

module.exports = {
  expenseValidation,
};
