const get = (Expense) => async ({ expenseId }) => {

  try {

    const expense = await Expense.findById(expenseId);
    return expense['_doc'];

  }catch(error){
    console.log(error);
  }

};


module.exports = get;
