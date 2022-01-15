

module.exports = (Expense) => async ({ expenseId }) => {

  try {

    const result = await Expense.findOneAndRemove({
      _id: expenseId,
    });

    return result['_doc'];

  }catch(error){
    console.log(error);
  }

};
