const express = require('express');
const router = express.Router();
const controllers = require('../../api/controllers');

router.post('/' , controllers.expenses.post);

router.get('/:expenseId', controllers.expenses.get);

router.get('/', controllers.expenses.list);

router.put('/:expenseId', controllers.expenses.put);

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
