const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestSchema = new Schema({
  groupleaderName: {
    type: String,
    required: true,
  },
  groupleaderId: {
    type: String,
    required: true,
  },
  groupleaderEmail: {
    type: String,
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isAccept: {
    type: Boolean,
    default: false,
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

module.exports = Requests = mongoose.model("Requests", requestSchema);
