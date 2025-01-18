const express = require("express");
const pool = require("../config/database").pool;
const app = express();

const getExpense = app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const expense = await pool.query("SELECT * FROM expenses WHERE id = $1", [
      id,
    ]);
    if (expense.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(expense.rows[0]);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error.");
  }
});
const getAllExpenses = app.get("/", async (req, res) => {
  try {
    const expenses = await pool.query("SELECT * FROM expenses");
    res.status(200).json(expenses.rows[0]);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error.");
  }
});

const createExpense = app.post("/", async (req, res) => {
  const { amount, description, category_id, user_id } = req.body;
  try {
    const expense = await pool.query(
      "INSERT INTO expenses (amount, description, category_id, user_id) VALUES($1, $2, $3, $4) RETURNING *",
      [amount, description, category_id, user_id]
    );
    res.status(200).json(expense.rows[0]);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error.");
  }
});

const deleteExpense = app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const expense = await pool.query("DELETE FROM expenses WHERE id = $1", [
      id,
    ]);
    res.status(200).send("Expense succesfully deleted!");
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = { getExpense, getAllExpenses, createExpense, deleteExpense };
