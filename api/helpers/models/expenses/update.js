'use strict';

module.exports = (Expense, Errors) => async ({
  description,type, value, expenseId,
}) => {

  try {

    const result = await Expense.findOneAndUpdate({
      _id: expenseId,
    }, {
      $set: {
        description,
        type,
        value,
      },
    }, {
      new: true,
    });

    if(result['_doc']){
      throw new Errors.ressourceNotFound();
    }

    return result['_doc'];

  }catch(error){
    throw new Errors.mongoError();
  }

};
