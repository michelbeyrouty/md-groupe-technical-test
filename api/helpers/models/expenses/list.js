'use strict';

module.exports = (Expense) => async () => {

  try {

    const result = await Expense.find();
    return result;

  }catch(error){
    console.log(error);
  }

};
