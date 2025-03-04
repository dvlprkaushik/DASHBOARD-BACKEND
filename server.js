import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import { Contact, Feedback, Patient } from "./models/Models.js";

dotenv.config();
await connectDB();

const app = express();
app.use(cors({origin : "*"}));
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);

// Routes
app.get("/api/patients",async (req, res) => {
    const patients = await Patient.find();
    res.json(patients);
});

app.get("/api/feedbacks", async(req, res) => {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
});

app.get("/api/contacts", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
