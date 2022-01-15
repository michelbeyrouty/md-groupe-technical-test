const { validationError } = require('../../errors');
const Joi = require('joi');

module.exports = function validatePayload(payload){

  const schema = Joi.object({
    expenseId: Joi.string(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new validationError(error.details[0].message);
  }
};
