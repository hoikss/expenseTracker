const jwt = require("jsonwebtoken");

// Utility function to generate a JWT token
const generateToken = (userId, email) => {
  // Define the payload (the data you want to encode into the JWT)
  const payload = {
    id: userId,
    email: email,
  };

  // Define the secret key (ensure you have a JWT_SECRET in your environment variables)
  const secretKey = process.env.JWT_SECRET || "your_secret_key"; 

  // Define options (such as expiration time)
  const options = {
    expiresIn: "1h", // Token will expire in 1 hour
  };

  // Generate the JWT token
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

module.exports = generateToken;