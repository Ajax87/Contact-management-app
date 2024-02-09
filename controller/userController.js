const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
/**
 * Registre user
 * POST /api/users/register
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await userModel.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exits");
  }
  console.log(userAvailable);
  res.json({ message: "Register the user" });
});

/**
 * login user
 * POST /api/users/login
 */
const loginUser = asyncHandler(async (req, res) => {
  res.json({ messase: "login the user" });
});

/**
 * Get Get current login user
 * POST /api/users/current
 */
const currentUser = asyncHandler(async (req, res) => {
  res.json({ messase: "current user information" });
});
module.exports = { registerUser, loginUser, currentUser };
