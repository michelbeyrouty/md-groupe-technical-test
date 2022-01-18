'use strict';

module.exports = (Expense, Errors) => async () => {

  try {

    const result = await Expense.find();
    return result;

  }catch(error){
    throw new Errors.mongoError();
  }

};
