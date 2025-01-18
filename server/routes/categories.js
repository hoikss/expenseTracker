const express = require("express");
const {
  getCategorie,
  getAllCategories,
  createCategorie,
  deleteCategorie,
} = require("../controllers/categorieController");

const router = express.Router();

router.route("/:id").get(getCategorie).delete(deleteCategorie);
router.route("/").get(getAllCategories).post(createCategorie);

module.exports = router;
