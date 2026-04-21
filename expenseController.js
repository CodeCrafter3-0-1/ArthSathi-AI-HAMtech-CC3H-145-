const User = require("../models/User");

// ADD EXPENSE
exports.addExpense = async (req, res) => {
  const { userId, amount, category, note } = req.body;

  const user = await User.findById(userId);

  user.expenses.push({
    amount,
    category,
    note,
    date: new Date().toISOString()
  });

  await user.save();

  res.json(user.expenses);
};

// GET EXPENSES
exports.getExpenses = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  res.json(user.expenses);
};