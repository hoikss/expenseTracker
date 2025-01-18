const pool = require("../config/database").pool;

class User {
  static async findByEmail(email) {
    try {
      const result = await pool.query("SELECT * FROM users WHERE email = $1", [
        email,
      ]);
      return result.rows[0];
    } catch (error) {
      console.error("Error finding by email: ", error);
      throw new Error("Database error");
    }
  }

  static async createUser(username, email, password_hash) {
    try {
      const result = await pool.query(
        "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
        [username, email, password_hash]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Database error");
    }
  }

  static async findById(id) {
    try {
      const result = awaitpool.query("SELECT * FROM users WHERE id = $1", [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Error finding user by ID:", error.message);
      throw new Error("Database error");
    }
  }
  static async updateUser(id, username, email) {
    try {
      const result = awaitpool.query(
        "UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *",
        [username, email, id]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error updating user:", error.message);
      throw new Error("Database error");
    }
  }

  static async deleteUser(id) {
    try {
      const result = awaitpool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
      );
      return result.rows[0];
    } catch (error) {
      console.error("Error deleting user:", error.message);
      throw new Error("Database error");
    }
  }
}

module.exports = User;
