const express = require('express');
const router = express.Router();
const controllers = require('../../api/controllers');

router.post('/' , controllers.expenses.post);

router.get('/:expenseId', controllers.expenses.get);

router.get('/', controllers.expenses.list);

router.put('/:expenseId', controllers.expenses.put);

router.delete('/:expenseId', controllers.expenses.delete);

module.exports = router;
