'use strict';

const Joi = require('joi');
const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];
const { validationError } = require('../../../../config/errors');

module.exports = function validatePayload(payload){

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
    throw new validationError(error.details[0].message);
  }
};
