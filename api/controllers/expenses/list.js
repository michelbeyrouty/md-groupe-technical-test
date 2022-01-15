'use strict';
const helpers = require('../../helpers');

module.exports = async(req, res) => {

  try {

    const expensesList = await helpers.models.expenses.list();

    res.json(expensesList);
  } catch(err) {
    console.log(err);
    switch (err.name) {

    default:
      return res.status(500).send(err.message);
    }
  }
};
