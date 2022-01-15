const create = (Expense) => async ({
  description,type, value, expenseId,
}) => {

  try {

    const result = await Expense.updateOne({
      _id: expenseId,
    }, {
      $set: {
        description,
        type,
        value,
      },
    });

    console.log(result);

    return result;

  }catch(error){
    console.log(error);
  }

};


module.exports = create;
