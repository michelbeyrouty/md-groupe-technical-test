const get = (Expense) => async () => {

  try {

    const result = await Expense.find();
    return result;

  }catch(error){
    console.log(error);
  }

};


module.exports = get;
