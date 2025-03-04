import jwt from "jsonwebtoken";

// for admin

export const protect = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res.status(401).json({ message: "Unauthorized, token required" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id; // Attach admin ID to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
