const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  studentid: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  specialization: {
    type: String,
    required: false,
  },

  groupid: {
    type: String,
    required: false,
  },

  createOn: {
    type: Date,
    required: false,
  },
  createdBy: { type: Schema.Types.ObjectId, required: false, default: null },
  updatedOn: {
    type: Date,
    required: false,
  },
  updatedBy: { type: Schema.Types.ObjectId, required: false, default: null },
  userProfile: {
    type: String,
    required: false,
    default: null,
  },

  role: {
    type: [
      {
        type: String,
        enum: ["student", "admin", "lecurer"],
        required: true,
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
