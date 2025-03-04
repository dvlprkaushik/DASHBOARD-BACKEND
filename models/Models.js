import mongoose from "mongoose";

const Feedback = mongoose.model(
  "Feedback",
  new mongoose.Schema({}, { strict: false , timestamps : true }),
  "feedbacks"
);

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({}, { strict: false, timestamps: true }),
  "contacts"
);

const Patient = mongoose.model(
  "Patient",
  new mongoose.Schema({}, { strict: false, timestamps: true }),
  "patients"
);


export { Contact, Feedback, Patient };