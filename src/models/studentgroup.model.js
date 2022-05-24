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
  firstStudentname: {
    type: String,
    required: true,
  },
  firstStudentEmail: {
    type: String,
    required: true,
  },
  firstStudentRegNo: {
    type: String,
    required: true,
  },
  secondStudentname: {
    type: String,
    required: true,
  },
  secondStudentEmail: {
    type: String,
    required: true,
  },
  secondStudentRegNo: {
    type: String,
    required: true,
  },
  thirdStudentname: {
    type: String,
    required: true,
  },
  thirdStudentEmail: {
    type: String,
    required: true,
  },
  thirdStudentRegNo: {
    type: String,
    required: true,
  },
  fourthStudentname: {
    type: String,
    required: true,
  },
  fourthStudentEmail: {
    type: String,
    required: true,
  },
  forthStudentRegNo: {
    type: String,
    required: true,
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
});

module.exports = StudentGroup = mongoose.model(
  "StudentGroup",
  studentGroupSchema
);
