const create = (Expense) => async ({
  description,type, value,
}) => {

  try {

    const expense = new Expense({
      description,
      type,
      value,
    });

    const createdExpense = await expense.save();
    return createdExpense['_doc'];

  }catch(error){
    console.log(error);
  }

};



module.exports = create;
