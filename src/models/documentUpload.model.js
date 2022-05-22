const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentUploadSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
      type: String,
    },
  },
  {
    collection: "documents",
  }
);

module.exports = mongoose.model("DocumentUpload", documentUploadSchema);
