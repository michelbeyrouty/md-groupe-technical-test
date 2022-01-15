'use strict';

module.exports = (Expense) => async ({
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
    console.log(error);
  }

};
