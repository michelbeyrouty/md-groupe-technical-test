const get = (Expense) => async ({ expenseId }) => {

  try {

    const result = await Expense.findById(expenseId);
    return result['_doc'];

  }catch(error){
    console.log(error);
  }

};


module.exports = get;
