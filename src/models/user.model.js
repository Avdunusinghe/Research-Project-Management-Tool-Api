const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

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

userSchema.methods.genarateJwtToken = async function () {
  const user = this;
  const jwtSecret = process.env.jwtPrivateKey;

  const token = jwt.sign({ _id: user._id }, jwtSecret);
  user.token = token;
  return token;
};

module.exports = User = mongoose.model("User", userSchema);
