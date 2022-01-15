'use strict';

const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];

module.exports = (Errors, Joi) => async (payload) => {

  const schema = Joi.object({
    expenseId: Joi.string(),
    description: Joi.string(),
    type: Joi.string(),
    // type: Joi.string().in(EXPENSE_TYPES)
    //   .required(),
    value: Joi.number(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new Errors.validationError(error.details[0].message);
  }
};
