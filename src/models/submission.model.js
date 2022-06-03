const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionSchema = new Schema({
	submissionName: {
		type: String,
		required: true,
	},

	submissionType: {
		type: String,
		required: true,
	},

	fromDate: {
		type: Date,
		required: true,
	},

	toDate: {
		type: Date,
		required: true,
	},

	submissionfile: {
		type: String,
		required: true,
	},

	studentAnswerfile: {
		type: String,
		required: false,
	},

	markingSchemaFile: {
		type: String,
		required: false,
	},

	isHide: {
		type: Boolean,
		required: false,
		default: false,
	},
});

module.exports = Submission = mongoose.model("Submission", submissionSchema);
