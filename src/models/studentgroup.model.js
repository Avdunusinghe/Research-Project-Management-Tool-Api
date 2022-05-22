const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
  groupName: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  memberDetails: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      regNumber: {
        type: String,
        required: true,
      },
    },
  ],
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
});

module.exports = StudentGroup = mongoose.model(
  "StudentGroup",
  studentGroupSchema
);
