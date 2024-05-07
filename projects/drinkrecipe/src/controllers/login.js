const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { compare } = require("bcrypt");
const prisma = new PrismaClient();
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");

const loginn = async (req, res) => {
  try {
    const { email, password} = req.body;
    const token = req.body.token

    // Retrieve user from the database
    const foundUser = await prisma.users.findUnique({
      where: { email: email }
    });

    // Check if user exists
    if (!foundUser) {
      return res.status(401).json("Wrong credentials");
    }

    // Compare passwords
    const isMatch = await compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json("Password doesn't match");
    }

    // Verify JWT token
    const tokenn = jwt.sign({ id: foundUser.id }, JWT_SECRET, {
      expiresIn: "5days",
    });
         // Token is valid
    res.json({ message: "Authentication successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginn;

// Check if provided credentials match admin credentials
// if (username === adminCredentials.username && password === adminCredentials.password) {
//   // Generate admin token
//   const adminToken = jwt.sign({ role: 'admin' }, JWT_SECRET);
//   res.json({ token: adminToken });
// } else {
//   res.status(401).json({ error: 'Invalid credentials' });
// }