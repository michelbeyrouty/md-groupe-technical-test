'use strict';

const Joi = require('joi');
const { EXPENSE_TYPES } = require('../../../../config/constants');

module.exports = (Errors) => (payload) => {

  const schema = Joi.object({
    expenseId: Joi.string().required(),
    description: Joi.string(),
    type: Joi.string().valid(...EXPENSE_TYPES),
    value: Joi.number(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new Errors.validationError(error.details[0].message);
  }
};
