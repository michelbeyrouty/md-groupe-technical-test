

module.exports = (Expense) => async ({ expenseId }) => {

  try {

    const result = await Expense.remove({
      _id: expenseId,
    });

    console.log(result);
    return result;

  }catch(error){
    console.log(error);
  }

};
