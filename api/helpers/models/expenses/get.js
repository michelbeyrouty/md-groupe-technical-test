'use strict';

module.exports = (Expense) => async ({ expenseId }) => {

  try {

    const result = await Expense.findById(expenseId);
    return result['_doc'];

  }catch(error){
    console.log(error);
  }

};
