const Joi = require('joi');
const EXPENSE_TYPES = [
  'Entertainment',
  'Food',
  'Bills',
  'Transport',
  'Other',
];
const { validationError } = require('../../errors');

module.exports = function validatePayload(payload){

  const schema = Joi.object({
    description: Joi.string(),
    type: Joi.string(),
    // type: Joi.string().in(EXPENSE_TYPES)
    //   .required(),
    value: Joi.number().required(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new validationError(error.details[0].message);
  }
};