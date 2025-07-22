import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register controller
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("👉 Register route hit");
  console.log("Body received:", req.body);

  try {
    const existingUser = await User.findOne({ email });
    console.log("User found?", existingUser ? "Yes" : "No");

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("✅ New user registered:", newUser.email);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Registration error:", err.message);
    res.status(500).json({ error: "Server error during registration" });
  }
};

// Login controller
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("👉 Login route hit");
  console.log("Body received:", req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Incorrect password");
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("✅ Login successful");
    res.status(200).json({ token });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ error: "Server error during login" });
  }
};
