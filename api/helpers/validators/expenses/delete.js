'use strict';

const Joi = require('joi');

module.exports = (Errors) => (payload) => {

  const schema = Joi.object({
    expenseId: Joi.string().required(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new Errors.validationError(error.details[0].message);
  }
};
