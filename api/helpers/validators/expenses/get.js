'use strict';

module.exports = (Errors, Joi) => async (payload) => {

  const schema = Joi.object({
    expenseId: Joi.string(),
  });

  const { error } = schema.validate(payload);

  if(error){
    throw new Errors.validationError(error.details[0].message);
  }
};
