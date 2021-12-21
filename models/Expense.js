const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Expenses', ExpenseSchema);
