const express = require("express");
const {
  getExpense,
  getAllExpenses,
  createExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.route("/:id").get(getExpense).delete(deleteExpense);
router.route("/").get(getAllExpenses).post(createExpense);

module.exports = router;
