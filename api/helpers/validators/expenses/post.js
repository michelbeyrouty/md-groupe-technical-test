'use strict';

const Joi = require('joi');

const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];

module.exports = (Errors) => async (payload) => {

  const schema = Joi.object({
    description: Joi.string().required(),
    type: Joi.string(),
    type: Joi.string().valid(...EXPENSE_TYPES),
    value: Joi.number().required(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new Errors.validationError(error.details[0].message);
  }
};
