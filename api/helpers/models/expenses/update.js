const create = (Expense) => async ({
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

    return result['_doc'];

  }catch(error){
    console.log(error);
  }

};


module.exports = create;
