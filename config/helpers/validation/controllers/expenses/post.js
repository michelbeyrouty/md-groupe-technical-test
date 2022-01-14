const { validationError } = require('../../../../errors');
const expenseValidation = require('../../models/expense');

module.exports = function validatePayload(data){

  const error = expenseValidation(data);

  if(error){
    throw new validationError(error.details[0].message);
  }
};
