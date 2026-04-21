const express = require("express");
const router = express.Router();

// Import controller functions
const {
  addExpense,
  getExpenses
} = require("../controllers/expenseController");

// ➕ Add Expense
router.post("/add", addExpense);

// 📊 Get All Expenses of a User
router.get("/:userId", getExpenses);

module.exports = router;