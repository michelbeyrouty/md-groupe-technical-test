'use strict';

module.exports = (Expense, Errors) => async ({
  description, type, value,
}) => {

  try {

    const expense = new Expense({
      description,
      type,
      value,
    });

    const result = await expense.save();
    return result['_doc'];

  }catch(error){
    throw new Errors.mongoError(error.message);
  }

};
