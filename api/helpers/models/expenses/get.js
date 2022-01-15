'use strict';

module.exports = (Expense,Errors) => async ({ expenseId }) => {

  try {

    const result = await Expense.findById(expenseId);

    if(!result['_doc']){
      throw new Errors.expenseNotFound();
    }

    return result['_doc'];

  }catch(error){
    throw new Errors.mongoError();
  }

};
