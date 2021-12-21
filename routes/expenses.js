const express = require('express');
const router = express.Router();
// const uuid = require('uuid');

const Expense = require('../models/Expense');
const { expenseValidation } = require('../validation');

// Create expense
router.post('/', async (req, res) => {

  const error = expenseValidation(req.body);

  if(error){
    return res.status(400).send(error.details[0].message);
  }

  const {
    description,type, value,
  } = req.body;

  const expense = new Expense({
    description,
    type,
    value,
  });

  try{
    const createdExpense = await expense.save();
    res.json(createdExpense);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});


// List expenses
router.get('/', async(req, res) => {
  try {
    const expenses = await Expense.find();
    console.log(expenses);
    res.json(expenses);
  } catch(err) {
    res.json({
      message: err,
    });
  }
});

// Get Specific expense
router.get('/:expenseId', async(req, res) => {
  try {
    const expense = await Expense.findById(req.params.expenseId);
    res.json(expense);
  } catch(err) {
    res.json({
      message: err,
    });
  }
});

// Update Specific expense
router.patch('/:expenseId', async (req, res) => {
  try {
    const { error } = expenseValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const {
      description,type, value,
    } = req.body;

    const updatedExpense = await Expense.updateOne({
      _id: req.params.expenseId,
    }, {
      $set: {
        description,
        type,
        value,
      },
    });
    res.json(updatedExpense);
  } catch(err) {
    res.json({
      message: err,
    });
  }
});

// Delete Specific expense
router.delete('/:expenseId', async(req, res) => {
  try {
    const removedExpense = await Expense.remove({
      _id: req.params.expenseId,
    });
    res.json(removedExpense);
  } catch(err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
