const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const { expenseValidation } = require('../helpers/validation/validatePayload');

// POST
router.post('/' , controllers.expenses.post);

// GET
router.get('/:expenseId', async(req, res) => {
  try {
    const expense = await Expense.findById(req.params.expenseId);
    res.json(expense['_doc']);
  } catch(err) {
    res.json({
      message: 'error ' + err,
    });
  }
});

// LIST
router.get('/', async(req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch(err) {
    res.json({
      message: 'error ' + err,
    });
  }
});

// UPDATE
router.patch('/:expenseId', async (req, res) => {
  try {
    const error = expenseValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const {
      description,type, value,
    } = req.body;

    await Expense.updateOne({
      _id: req.params.expenseId,
    }, {
      $set: {
        description,
        type,
        value,
      },
    });
    res.json();
  } catch(err) {
    res.json({
      message: 'error ' + err,
    });
  }
});

// DELETE
router.delete('/:expenseId', async(req, res) => {
  try {
    await Expense.remove({
      _id: req.params.expenseId,
    });
    res.json();
  } catch(err) {
    res.json({
      message: 'error ' + err,
    });
  }
});

module.exports = router;
