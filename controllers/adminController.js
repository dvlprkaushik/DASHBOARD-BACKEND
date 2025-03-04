import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

// Generate JWT Token (No "Bearer", just the token)
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// Admin Login
export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      token: generateToken(admin._id),
      username: admin.username,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Register Admin (Only for First-Time Use)
export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (await Admin.findOne({ username })) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
