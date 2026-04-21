const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  expenses: [
    {
      amount: Number,
      category: String,
      note: String,
      date: String,
    }
  ]
});

module.exports = mongoose.model("User", userSchema);