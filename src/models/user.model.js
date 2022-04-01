const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createOn: {
    type: Date,
    required: true,
  },
  updatedOn: {
    type: Date,
    required: true,
  },
  role: {
    type: [
      {
        type: String,
        enum: ["student", "admin", "lecurer"],
        default: ["student"],
      },
    ],
  },
});

module.exports = User = mongoose.model("User", userSchema);
