import express from "express";
import {
  adminLogin,
  registerAdmin,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/register", registerAdmin); // Only for initial setup

export default router;
