const Joi = require('joi');
const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];
const { validationError } = require('../../errors');

function validatePayload(data){

  const error = expenseValidation(data);

  if(error){
    throw new validationError(error.details[0].message);
  }
}



function expenseValidation(expense) {
  const ExpenseSchema = Joi.object({
    description: Joi.string(),
    type: Joi.string(),
    // type: Joi.string().in(EXPENSE_TYPES)
    //   .required(),
    value: Joi.number().required(),
  });

  const { error } = ExpenseSchema.validate(expense);

  return error;
};

module.exports = validatePayload;
