const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const categorieRoutes = require("./routes/categories");
const expenseRoutes = require("./routes/expenses");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();

//middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//base route
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to expense tracker API!",
    endpoints: {
      auth: "/api/auth",
      expenses: "/api/expenses",
      categories: "/api/categories",
    },
  });
});

//Api routes
app.use("/api/categories", categorieRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", authRoutes);

//Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port: ${port}`);
});
