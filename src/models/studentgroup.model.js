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
  subjectId: {
    type: String,
    required: true,
  },
  memberName: [
    {
      memberOne: {
        type: String,
        required: true,
      },
      memberTwo: {
        type: String,
        required: true,
      },
      memberThree: {
        type: String,
        required: true,
      },
      memberFour: {
        type: String,
        required: true,
      },
    },
  ],
  memberEmail: [
    {
      emailOne: {
        type: String,
        required: true,
        unique: true,
      },
      emailTwo: {
        type: String,
        required: true,
        unique: true,
      },
      emailThree: {
        type: String,
        required: true,
        unique: true,
      },
      emailFour: {
        type: String,
        required: true,
        unique: true,
      },
    },
  ],

  memberId: [
    {
      studentIdOne: {
        type: String,
        required: true,
        unique: true,
      },
      studentIdTwo: {
        type: String,
        required: true,
        unique: true,
      },
      studentIdThree: {
        type: String,
        required: true,
        unique: true,
      },
      studentIdFour: {
        type: String,
        required: true,
        unique: true,
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
