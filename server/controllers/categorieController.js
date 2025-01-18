const express = require("express");
const { pool } = require("../config/database");
const app = express();

const getCategorie = app.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const categorie = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    if (categorie.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(categorie.rows[0]);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error.");
  }
});
const getAllCategories = app.get("/", async (req, res) => {
  try {
    const categories = await pool.query("SELECT * FROM categories");
    res.status(200).json(categories.rows[0]);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error.");
  }
});

const createCategorie = app.post("/", async (req, res) => {
  const { name, user_id } = req.body;
  try {
    const categorie = await pool.query(
      "INSERT INTO categories (name, user_id) VALUES($1, $2) RETURNING *",
      [name, user_id]
    );
    res.status(200).json(categorie.rows[0]);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error.");
  }
});

const deleteCategorie = app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
    res.status(200).send("Categorie succesfully deleted!");
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = {
  getCategorie,
  getAllCategories,
  createCategorie,
  deleteCategorie,
};
